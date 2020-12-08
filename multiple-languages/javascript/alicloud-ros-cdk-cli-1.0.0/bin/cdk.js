#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors/safe");
const yargs = require("yargs");
const cloud_executable_1 = require("../lib/api/cloud-executable");
const exec_1 = require("../lib/api/exec");
const cdk_toolkit_1 = require("../lib/cdk-toolkit");
const init_1 = require("../lib/init");
const logging_1 = require("../lib/logging");
const serialize_1 = require("../lib/serialize");
const settings_1 = require("../lib/settings");
const version = require("../lib/version");
async function parseCommandLineArguments() {
    const initTemplateLanuages = await init_1.availableInitLanguages;
    return yargs
        .env('CDK')
        .usage('Usage: ros -a <cdk-app> COMMAND')
        .option('json', {
        type: 'boolean',
        alias: 'j',
        desc: 'Use JSON output instead of YAML when templates are printed to STDOUT',
        default: false,
    })
        .option('ignore-errors', {
        type: 'boolean',
        default: false,
        desc: 'Ignores synthesis errors, which will likely produce an invalid output',
    })
        .option('trace', { type: 'boolean', desc: 'Print trace for stack warnings' })
        .option('strict', { type: 'boolean', desc: 'Do not construct stacks with warnings' })
        .count('verbose')
        .command('init [TEMPLATE]', 'Create a new, empty CDK project from a template. Invoked without TEMPLATE, the app template will be used.', (yargs) => yargs
        .option('language', {
        type: 'string',
        alias: 'l',
        desc: 'The language to be used for the new project (default can be configured in ~/.cdk.json)',
        choices: initTemplateLanuages,
    })
        .option('list', { type: 'boolean', desc: 'List the available templates' })
        .option('generate-only', {
        type: 'boolean',
        default: false,
        desc: 'If true, only generates project files, without executing additional operations such as setting up a git repo, installing dependencies or compiling the project',
    }))
        .command(['list [STACKS..]', 'ls [STACKS..]'], 'Lists all stacks in the app', (yargs) => yargs.option('long', {
        type: 'boolean',
        default: false,
        alias: 'l',
        desc: 'Display environment information for each stack',
    }))
        .command(['synthesize [STACKS..]', 'synth [STACKS..]'], 'Synthesizes and prints the ROS template for this stack', (yargs) => yargs.option('exclusively', {
        type: 'boolean',
        alias: 'e',
        desc: "Only synthesize requested stacks, don't include dependencies",
    }))
        .command('deploy [STACKS..]', 'Deploys the stack(s) named STACKS into your ros account', (yargs) => yargs
        .option('parameters', {
        type: 'array',
        desc: 'Additional parameters passed to ROS at deploy time (STACK:KEY=VALUE)',
        nargs: 1,
        requiresArg: true,
        default: {},
    })
        .option('exclusively', {
        type: 'boolean',
        alias: 'e',
        desc: "Only deploy requested stacks, don't include dependencies",
    })
        .option('region', { type: 'string', alias: 'r', desc: 'The region where the stack should be deployed' })
        .option('timeoutMinutes', { type: 'number', alias: 't', desc: 'The timeout minutes', default: 20 }))
        .command('diff [STACKS..]', 'Compares the specified stack with the deployed stack or a local template file, and returns with status 1 if any difference is found', (yargs) => yargs
        .option('region', { type: 'string', alias: 'r', desc: 'The region where the stack is established' })
        .option('path', {
        type: 'string',
        alias: 'p',
        desc: 'The path to the template to compare with',
        default: './cdk.out',
    })
        .option('context-lines', {
        type: 'number',
        desc: 'Number of context lines to include in arbitrary JSON diff rendering',
        default: 3,
    }))
        .command('destroy [STACKS..]', 'Destroy the stack(s) named STACKS', (yargs) => yargs.option('region', { type: 'string', alias: 'r', desc: 'The region where the stack is established' }))
        .command('config', 'Set your ros account configuration.', (yargs) => yargs.option('global', {
        type: 'boolean',
        alias: 'g',
        desc: 'whether the config should be stroed in global env',
        default: false,
    }))
        .version(version.DISPLAY_VERSION)
        .demandCommand(1, '') // just print help
        .recommendCommands()
        .help()
        .alias('h', 'help')
        .epilogue([
        'If your app has a single stack, there is no need to specify the stack name',
        'If one of cdk.json or ~/.cdk.json exists, options specified there will be used as defaults. Settings in cdk.json take precedence.',
    ].join('\n\n')).argv;
}
if (!process.stdout.isTTY) {
    colors.disable();
}
async function initCommandLine() {
    const argv = await parseCommandLineArguments();
    if (argv.verbose) {
        logging_1.setLogLevel(argv.verbose);
    }
    logging_1.debug('CDK toolkit version:', version.DISPLAY_VERSION);
    logging_1.debug('Command line arguments:', argv);
    const configuration = new settings_1.Configuration(argv);
    await configuration.load();
    const cloudExecutable = new cloud_executable_1.CloudExecutable({
        configuration,
        synthesizer: exec_1.execProgram,
    });
    const cmd = String(argv._[0]);
    const returnValue = await main(cmd, argv);
    if (typeof returnValue === 'object') {
        return toJsonOrYaml(returnValue);
    }
    else if (typeof returnValue === 'string') {
        return returnValue;
    }
    else {
        return returnValue;
    }
    async function main(command, args) {
        args.STACKS = args.STACKS || [];
        const cli = new cdk_toolkit_1.CdkToolkit({
            cloudExecutable,
            verbose: argv.trace || argv.verbose > 0,
            ignoreErrors: argv['ignore-errors'],
            strict: argv.strict,
            configuration,
        });
        switch (command) {
            case 'ls':
            case 'list':
                return await cli.list(args.STACKS);
            case 'config':
                // wait user for ros input
                await cli.config(args.global);
                return;
            case 'diff':
                return await cli.diff({
                    region: args.region,
                    stackNames: args.STACKS,
                    path: args.path,
                    contextLines: args.contextLines,
                });
            case 'deploy':
                const parameterMap = {};
                for (const parameter of args.parameters) {
                    if (typeof parameter === 'string') {
                        const keyValue = parameter.split('=');
                        parameterMap[keyValue[0]] = keyValue.slice(1).join('=');
                    }
                }
                await cli.deploy({
                    stackNames: args.STACKS,
                    parameters: parameterMap,
                    exclusively: args.exclusively,
                    timeout: args.timeoutMinutes,
                });
                return;
            case 'destroy':
                await cli.destroy({
                    region: args.region,
                    stackNames: args.STACKS,
                });
                return;
            case 'synthesize':
            case 'synth':
                return await cli.synth(args.STACKS, args.exclusively);
            case 'init':
                // const language = configuration.settings.get(['language']);
                const language = args.language;
                if (args.list) {
                    return await init_1.printAvailableTemplates(language);
                }
                else {
                    return await init_1.cliInit(args.TEMPLATE, language, undefined, args.generateOnly);
                }
            case 'version':
                return logging_1.data(version.DISPLAY_VERSION);
            default:
                throw new Error('Unknown command: ' + command);
        }
    }
    function toJsonOrYaml(object) {
        return serialize_1.serializeStructure(object, argv.json);
    }
}
initCommandLine()
    .then((value) => {
    if (value == null) {
        return;
    }
    if (typeof value === 'string') {
        logging_1.data(value);
    }
    else if (typeof value === 'number') {
        // process.exitCode = value;
    }
})
    .catch((err) => {
    logging_1.error(err.message);
    if (err.stack) {
        logging_1.debug(err.stack);
    }
    process.exitCode = 1;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFFL0Isa0VBQThEO0FBQzlELDBDQUE4QztBQUM5QyxvREFBZ0Q7QUFDaEQsc0NBQXVGO0FBQ3ZGLDRDQUFpRTtBQUNqRSxnREFBc0Q7QUFDdEQsOENBQWdEO0FBQ2hELDBDQUEwQztBQUUxQyxLQUFLLFVBQVUseUJBQXlCO0lBQ3RDLE1BQU0sb0JBQW9CLEdBQUcsTUFBTSw2QkFBc0IsQ0FBQztJQUMxRCxPQUFPLEtBQUs7U0FDVCxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ1YsS0FBSyxDQUFDLGlDQUFpQyxDQUFDO1NBQ3hDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDZCxJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLHNFQUFzRTtRQUM1RSxPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7U0FDRCxNQUFNLENBQUMsZUFBZSxFQUFFO1FBQ3ZCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsdUVBQXVFO0tBQzlFLENBQUM7U0FDRCxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQztTQUM1RSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsdUNBQXVDLEVBQUUsQ0FBQztTQUNwRixLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ2hCLE9BQU8sQ0FDTixpQkFBaUIsRUFDakIsMkdBQTJHLEVBQzNHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDUixLQUFLO1NBQ0YsTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUNsQixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLHdGQUF3RjtRQUM5RixPQUFPLEVBQUUsb0JBQW9CO0tBQzlCLENBQUM7U0FDRCxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsOEJBQThCLEVBQUUsQ0FBQztTQUN6RSxNQUFNLENBQUMsZUFBZSxFQUFFO1FBQ3ZCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQ0YsZ0tBQWdLO0tBQ25LLENBQUMsQ0FDUDtTQUNBLE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxFQUFFLDZCQUE2QixFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDdEYsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDbkIsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsS0FBSztRQUNkLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLGdEQUFnRDtLQUN2RCxDQUFDLENBQ0g7U0FDQSxPQUFPLENBQ04sQ0FBQyx1QkFBdUIsRUFBRSxrQkFBa0IsQ0FBQyxFQUM3Qyx3REFBd0QsRUFDeEQsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNSLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1FBQzFCLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLEdBQUc7UUFDVixJQUFJLEVBQUUsOERBQThEO0tBQ3JFLENBQUMsQ0FDTDtTQUNBLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSx5REFBeUQsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ2pHLEtBQUs7U0FDRixNQUFNLENBQUMsWUFBWSxFQUFFO1FBQ3BCLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLHNFQUFzRTtRQUM1RSxLQUFLLEVBQUUsQ0FBQztRQUNSLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLE9BQU8sRUFBRSxFQUFFO0tBQ1osQ0FBQztTQUNELE1BQU0sQ0FBQyxhQUFhLEVBQUU7UUFDckIsSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsR0FBRztRQUNWLElBQUksRUFBRSwwREFBMEQ7S0FDakUsQ0FBQztTQUNELE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLCtDQUErQyxFQUFFLENBQUM7U0FDdkcsTUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDdEc7U0FDQSxPQUFPLENBQ04saUJBQWlCLEVBQ2pCLHFJQUFxSSxFQUNySSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ1IsS0FBSztTQUNGLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLDJDQUEyQyxFQUFFLENBQUM7U0FDbkcsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUNkLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLEdBQUc7UUFDVixJQUFJLEVBQUUsMENBQTBDO1FBQ2hELE9BQU8sRUFBRSxXQUFXO0tBQ3JCLENBQUM7U0FDRCxNQUFNLENBQUMsZUFBZSxFQUFFO1FBQ3ZCLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLHFFQUFxRTtRQUMzRSxPQUFPLEVBQUUsQ0FBQztLQUNYLENBQUMsQ0FDUDtTQUNBLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxtQ0FBbUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQzVFLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSwyQ0FBMkMsRUFBRSxDQUFDLENBQzFHO1NBQ0EsT0FBTyxDQUFDLFFBQVEsRUFBRSxxQ0FBcUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ2xFLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1FBQ3JCLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLEdBQUc7UUFDVixJQUFJLEVBQUUsbURBQW1EO1FBQ3pELE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQyxDQUNIO1NBQ0EsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7U0FDaEMsYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxrQkFBa0I7U0FDdkMsaUJBQWlCLEVBQUU7U0FDbkIsSUFBSSxFQUFFO1NBQ04sS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7U0FDbEIsUUFBUSxDQUNQO1FBQ0UsNEVBQTRFO1FBQzVFLG1JQUFtSTtLQUNwSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDZixDQUFDLElBQUksQ0FBQztBQUNYLENBQUM7QUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDekIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0NBQ2xCO0FBRUQsS0FBSyxVQUFVLGVBQWU7SUFDNUIsTUFBTSxJQUFJLEdBQUcsTUFBTSx5QkFBeUIsRUFBRSxDQUFDO0lBQy9DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNoQixxQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMzQjtJQUNELGVBQUssQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkQsZUFBSyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXZDLE1BQU0sYUFBYSxHQUFHLElBQUksd0JBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxNQUFNLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUUzQixNQUFNLGVBQWUsR0FBRyxJQUFJLGtDQUFlLENBQUM7UUFDMUMsYUFBYTtRQUNiLFdBQVcsRUFBRSxrQkFBVztLQUN6QixDQUFDLENBQUM7SUFFSCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlCLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQyxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtRQUNuQyxPQUFPLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNsQztTQUFNLElBQUksT0FBTyxXQUFXLEtBQUssUUFBUSxFQUFFO1FBQzFDLE9BQU8sV0FBVyxDQUFDO0tBQ3BCO1NBQU07UUFDTCxPQUFPLFdBQVcsQ0FBQztLQUNwQjtJQUVELEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZSxFQUFFLElBQVM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUVoQyxNQUFNLEdBQUcsR0FBRyxJQUFJLHdCQUFVLENBQUM7WUFDekIsZUFBZTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQztZQUN2QyxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsYUFBYTtTQUNkLENBQUMsQ0FBQztRQUVILFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxJQUFJLENBQUM7WUFDVixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXJDLEtBQUssUUFBUTtnQkFDWCwwQkFBMEI7Z0JBQzFCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLE9BQU87WUFFVCxLQUFLLE1BQU07Z0JBQ1QsT0FBTyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQ3BCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2lCQUNoQyxDQUFDLENBQUM7WUFFTCxLQUFLLFFBQVE7Z0JBQ1gsTUFBTSxZQUFZLEdBQTJDLEVBQUUsQ0FBQztnQkFDaEUsS0FBSyxNQUFNLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUN2QyxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTt3QkFDakMsTUFBTSxRQUFRLEdBQUksU0FBb0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2xELFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDekQ7aUJBQ0Y7Z0JBQ0QsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDO29CQUNmLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDdkIsVUFBVSxFQUFFLFlBQVk7b0JBQ3hCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztvQkFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjO2lCQUM3QixDQUFDLENBQUM7Z0JBQ0gsT0FBTztZQUVULEtBQUssU0FBUztnQkFDWixNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUM7b0JBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUN4QixDQUFDLENBQUM7Z0JBQ0gsT0FBTztZQUVULEtBQUssWUFBWSxDQUFDO1lBQ2xCLEtBQUssT0FBTztnQkFDVixPQUFPLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV4RCxLQUFLLE1BQU07Z0JBQ1QsNkRBQTZEO2dCQUM3RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsT0FBTyxNQUFNLDhCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNoRDtxQkFBTTtvQkFDTCxPQUFPLE1BQU0sY0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzdFO1lBRUgsS0FBSyxTQUFTO2dCQUNaLE9BQU8sY0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUV2QztnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVELFNBQVMsWUFBWSxDQUFDLE1BQVc7UUFDL0IsT0FBTyw4QkFBa0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxFQUFFO0tBQ2QsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDZCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsT0FBTztLQUNSO0lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2I7U0FBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUNwQyw0QkFBNEI7S0FDN0I7QUFDSCxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNiLGVBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO1FBQ2IsZUFBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCAqIGFzIHlhcmdzIGZyb20gJ3lhcmdzJztcblxuaW1wb3J0IHsgQ2xvdWRFeGVjdXRhYmxlIH0gZnJvbSAnLi4vbGliL2FwaS9jbG91ZC1leGVjdXRhYmxlJztcbmltcG9ydCB7IGV4ZWNQcm9ncmFtIH0gZnJvbSAnLi4vbGliL2FwaS9leGVjJztcbmltcG9ydCB7IENka1Rvb2xraXQgfSBmcm9tICcuLi9saWIvY2RrLXRvb2xraXQnO1xuaW1wb3J0IHsgYXZhaWxhYmxlSW5pdExhbmd1YWdlcywgY2xpSW5pdCwgcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMgfSBmcm9tICcuLi9saWIvaW5pdCc7XG5pbXBvcnQgeyBkYXRhLCBkZWJ1ZywgZXJyb3IsIHNldExvZ0xldmVsIH0gZnJvbSAnLi4vbGliL2xvZ2dpbmcnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3RydWN0dXJlIH0gZnJvbSAnLi4vbGliL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbGliL3NldHRpbmdzJztcbmltcG9ydCAqIGFzIHZlcnNpb24gZnJvbSAnLi4vbGliL3ZlcnNpb24nO1xuXG5hc3luYyBmdW5jdGlvbiBwYXJzZUNvbW1hbmRMaW5lQXJndW1lbnRzKCkge1xuICBjb25zdCBpbml0VGVtcGxhdGVMYW51YWdlcyA9IGF3YWl0IGF2YWlsYWJsZUluaXRMYW5ndWFnZXM7XG4gIHJldHVybiB5YXJnc1xuICAgIC5lbnYoJ0NESycpXG4gICAgLnVzYWdlKCdVc2FnZTogcm9zIC1hIDxjZGstYXBwPiBDT01NQU5EJylcbiAgICAub3B0aW9uKCdqc29uJywge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgYWxpYXM6ICdqJyxcbiAgICAgIGRlc2M6ICdVc2UgSlNPTiBvdXRwdXQgaW5zdGVhZCBvZiBZQU1MIHdoZW4gdGVtcGxhdGVzIGFyZSBwcmludGVkIHRvIFNURE9VVCcsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9KVxuICAgIC5vcHRpb24oJ2lnbm9yZS1lcnJvcnMnLCB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2M6ICdJZ25vcmVzIHN5bnRoZXNpcyBlcnJvcnMsIHdoaWNoIHdpbGwgbGlrZWx5IHByb2R1Y2UgYW4gaW52YWxpZCBvdXRwdXQnLFxuICAgIH0pXG4gICAgLm9wdGlvbigndHJhY2UnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1ByaW50IHRyYWNlIGZvciBzdGFjayB3YXJuaW5ncycgfSlcbiAgICAub3B0aW9uKCdzdHJpY3QnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ0RvIG5vdCBjb25zdHJ1Y3Qgc3RhY2tzIHdpdGggd2FybmluZ3MnIH0pXG4gICAgLmNvdW50KCd2ZXJib3NlJylcbiAgICAuY29tbWFuZChcbiAgICAgICdpbml0IFtURU1QTEFURV0nLFxuICAgICAgJ0NyZWF0ZSBhIG5ldywgZW1wdHkgQ0RLIHByb2plY3QgZnJvbSBhIHRlbXBsYXRlLiBJbnZva2VkIHdpdGhvdXQgVEVNUExBVEUsIHRoZSBhcHAgdGVtcGxhdGUgd2lsbCBiZSB1c2VkLicsXG4gICAgICAoeWFyZ3MpID0+XG4gICAgICAgIHlhcmdzXG4gICAgICAgICAgLm9wdGlvbignbGFuZ3VhZ2UnLCB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGFsaWFzOiAnbCcsXG4gICAgICAgICAgICBkZXNjOiAnVGhlIGxhbmd1YWdlIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXcgcHJvamVjdCAoZGVmYXVsdCBjYW4gYmUgY29uZmlndXJlZCBpbiB+Ly5jZGsuanNvbiknLFxuICAgICAgICAgICAgY2hvaWNlczogaW5pdFRlbXBsYXRlTGFudWFnZXMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdsaXN0JywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdMaXN0IHRoZSBhdmFpbGFibGUgdGVtcGxhdGVzJyB9KVxuICAgICAgICAgIC5vcHRpb24oJ2dlbmVyYXRlLW9ubHknLCB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIGRlc2M6XG4gICAgICAgICAgICAgICdJZiB0cnVlLCBvbmx5IGdlbmVyYXRlcyBwcm9qZWN0IGZpbGVzLCB3aXRob3V0IGV4ZWN1dGluZyBhZGRpdGlvbmFsIG9wZXJhdGlvbnMgc3VjaCBhcyBzZXR0aW5nIHVwIGEgZ2l0IHJlcG8sIGluc3RhbGxpbmcgZGVwZW5kZW5jaWVzIG9yIGNvbXBpbGluZyB0aGUgcHJvamVjdCcsXG4gICAgICAgICAgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKFsnbGlzdCBbU1RBQ0tTLi5dJywgJ2xzIFtTVEFDS1MuLl0nXSwgJ0xpc3RzIGFsbCBzdGFja3MgaW4gdGhlIGFwcCcsICh5YXJncykgPT5cbiAgICAgIHlhcmdzLm9wdGlvbignbG9uZycsIHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgZGVzYzogJ0Rpc3BsYXkgZW52aXJvbm1lbnQgaW5mb3JtYXRpb24gZm9yIGVhY2ggc3RhY2snLFxuICAgICAgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKFxuICAgICAgWydzeW50aGVzaXplIFtTVEFDS1MuLl0nLCAnc3ludGggW1NUQUNLUy4uXSddLFxuICAgICAgJ1N5bnRoZXNpemVzIGFuZCBwcmludHMgdGhlIFJPUyB0ZW1wbGF0ZSBmb3IgdGhpcyBzdGFjaycsXG4gICAgICAoeWFyZ3MpID0+XG4gICAgICAgIHlhcmdzLm9wdGlvbignZXhjbHVzaXZlbHknLCB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGFsaWFzOiAnZScsXG4gICAgICAgICAgZGVzYzogXCJPbmx5IHN5bnRoZXNpemUgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcbiAgICAgICAgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKCdkZXBsb3kgW1NUQUNLUy4uXScsICdEZXBsb3lzIHRoZSBzdGFjayhzKSBuYW1lZCBTVEFDS1MgaW50byB5b3VyIHJvcyBhY2NvdW50JywgKHlhcmdzKSA9PlxuICAgICAgeWFyZ3NcbiAgICAgICAgLm9wdGlvbigncGFyYW1ldGVycycsIHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIGRlc2M6ICdBZGRpdGlvbmFsIHBhcmFtZXRlcnMgcGFzc2VkIHRvIFJPUyBhdCBkZXBsb3kgdGltZSAoU1RBQ0s6S0VZPVZBTFVFKScsXG4gICAgICAgICAgbmFyZ3M6IDEsXG4gICAgICAgICAgcmVxdWlyZXNBcmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdDoge30sXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb24oJ2V4Y2x1c2l2ZWx5Jywge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBhbGlhczogJ2UnLFxuICAgICAgICAgIGRlc2M6IFwiT25seSBkZXBsb3kgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcbiAgICAgICAgfSlcbiAgICAgICAgLm9wdGlvbigncmVnaW9uJywgeyB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdyJywgZGVzYzogJ1RoZSByZWdpb24gd2hlcmUgdGhlIHN0YWNrIHNob3VsZCBiZSBkZXBsb3llZCcgfSlcbiAgICAgICAgLm9wdGlvbigndGltZW91dE1pbnV0ZXMnLCB7IHR5cGU6ICdudW1iZXInLCBhbGlhczogJ3QnLCBkZXNjOiAnVGhlIHRpbWVvdXQgbWludXRlcycsIGRlZmF1bHQ6IDIwIH0pLFxuICAgIClcbiAgICAuY29tbWFuZChcbiAgICAgICdkaWZmIFtTVEFDS1MuLl0nLFxuICAgICAgJ0NvbXBhcmVzIHRoZSBzcGVjaWZpZWQgc3RhY2sgd2l0aCB0aGUgZGVwbG95ZWQgc3RhY2sgb3IgYSBsb2NhbCB0ZW1wbGF0ZSBmaWxlLCBhbmQgcmV0dXJucyB3aXRoIHN0YXR1cyAxIGlmIGFueSBkaWZmZXJlbmNlIGlzIGZvdW5kJyxcbiAgICAgICh5YXJncykgPT5cbiAgICAgICAgeWFyZ3NcbiAgICAgICAgICAub3B0aW9uKCdyZWdpb24nLCB7IHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ3InLCBkZXNjOiAnVGhlIHJlZ2lvbiB3aGVyZSB0aGUgc3RhY2sgaXMgZXN0YWJsaXNoZWQnIH0pXG4gICAgICAgICAgLm9wdGlvbigncGF0aCcsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYWxpYXM6ICdwJyxcbiAgICAgICAgICAgIGRlc2M6ICdUaGUgcGF0aCB0byB0aGUgdGVtcGxhdGUgdG8gY29tcGFyZSB3aXRoJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcuL2Nkay5vdXQnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignY29udGV4dC1saW5lcycsIHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgZGVzYzogJ051bWJlciBvZiBjb250ZXh0IGxpbmVzIHRvIGluY2x1ZGUgaW4gYXJiaXRyYXJ5IEpTT04gZGlmZiByZW5kZXJpbmcnLFxuICAgICAgICAgICAgZGVmYXVsdDogMyxcbiAgICAgICAgICB9KSxcbiAgICApXG4gICAgLmNvbW1hbmQoJ2Rlc3Ryb3kgW1NUQUNLUy4uXScsICdEZXN0cm95IHRoZSBzdGFjayhzKSBuYW1lZCBTVEFDS1MnLCAoeWFyZ3MpID0+XG4gICAgICB5YXJncy5vcHRpb24oJ3JlZ2lvbicsIHsgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAncicsIGRlc2M6ICdUaGUgcmVnaW9uIHdoZXJlIHRoZSBzdGFjayBpcyBlc3RhYmxpc2hlZCcgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKCdjb25maWcnLCAnU2V0IHlvdXIgcm9zIGFjY291bnQgY29uZmlndXJhdGlvbi4nLCAoeWFyZ3MpID0+XG4gICAgICB5YXJncy5vcHRpb24oJ2dsb2JhbCcsIHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBhbGlhczogJ2cnLFxuICAgICAgICBkZXNjOiAnd2hldGhlciB0aGUgY29uZmlnIHNob3VsZCBiZSBzdHJvZWQgaW4gZ2xvYmFsIGVudicsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgfSksXG4gICAgKVxuICAgIC52ZXJzaW9uKHZlcnNpb24uRElTUExBWV9WRVJTSU9OKVxuICAgIC5kZW1hbmRDb21tYW5kKDEsICcnKSAvLyBqdXN0IHByaW50IGhlbHBcbiAgICAucmVjb21tZW5kQ29tbWFuZHMoKVxuICAgIC5oZWxwKClcbiAgICAuYWxpYXMoJ2gnLCAnaGVscCcpXG4gICAgLmVwaWxvZ3VlKFxuICAgICAgW1xuICAgICAgICAnSWYgeW91ciBhcHAgaGFzIGEgc2luZ2xlIHN0YWNrLCB0aGVyZSBpcyBubyBuZWVkIHRvIHNwZWNpZnkgdGhlIHN0YWNrIG5hbWUnLFxuICAgICAgICAnSWYgb25lIG9mIGNkay5qc29uIG9yIH4vLmNkay5qc29uIGV4aXN0cywgb3B0aW9ucyBzcGVjaWZpZWQgdGhlcmUgd2lsbCBiZSB1c2VkIGFzIGRlZmF1bHRzLiBTZXR0aW5ncyBpbiBjZGsuanNvbiB0YWtlIHByZWNlZGVuY2UuJyxcbiAgICAgIF0uam9pbignXFxuXFxuJyksXG4gICAgKS5hcmd2O1xufVxuXG5pZiAoIXByb2Nlc3Muc3Rkb3V0LmlzVFRZKSB7XG4gIGNvbG9ycy5kaXNhYmxlKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRDb21tYW5kTGluZSgpIHtcbiAgY29uc3QgYXJndiA9IGF3YWl0IHBhcnNlQ29tbWFuZExpbmVBcmd1bWVudHMoKTtcbiAgaWYgKGFyZ3YudmVyYm9zZSkge1xuICAgIHNldExvZ0xldmVsKGFyZ3YudmVyYm9zZSk7XG4gIH1cbiAgZGVidWcoJ0NESyB0b29sa2l0IHZlcnNpb246JywgdmVyc2lvbi5ESVNQTEFZX1ZFUlNJT04pO1xuICBkZWJ1ZygnQ29tbWFuZCBsaW5lIGFyZ3VtZW50czonLCBhcmd2KTtcblxuICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oYXJndik7XG4gIGF3YWl0IGNvbmZpZ3VyYXRpb24ubG9hZCgpO1xuXG4gIGNvbnN0IGNsb3VkRXhlY3V0YWJsZSA9IG5ldyBDbG91ZEV4ZWN1dGFibGUoe1xuICAgIGNvbmZpZ3VyYXRpb24sXG4gICAgc3ludGhlc2l6ZXI6IGV4ZWNQcm9ncmFtLFxuICB9KTtcblxuICBjb25zdCBjbWQgPSBTdHJpbmcoYXJndi5fWzBdKTtcblxuICBjb25zdCByZXR1cm5WYWx1ZSA9IGF3YWl0IG1haW4oY21kLCBhcmd2KTtcbiAgaWYgKHR5cGVvZiByZXR1cm5WYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gdG9Kc29uT3JZYW1sKHJldHVyblZhbHVlKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcmV0dXJuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG1haW4oY29tbWFuZDogc3RyaW5nLCBhcmdzOiBhbnkpOiBQcm9taXNlPG51bWJlciB8IHN0cmluZyB8IHt9IHwgdm9pZD4ge1xuICAgIGFyZ3MuU1RBQ0tTID0gYXJncy5TVEFDS1MgfHwgW107XG5cbiAgICBjb25zdCBjbGkgPSBuZXcgQ2RrVG9vbGtpdCh7XG4gICAgICBjbG91ZEV4ZWN1dGFibGUsXG4gICAgICB2ZXJib3NlOiBhcmd2LnRyYWNlIHx8IGFyZ3YudmVyYm9zZSA+IDAsXG4gICAgICBpZ25vcmVFcnJvcnM6IGFyZ3ZbJ2lnbm9yZS1lcnJvcnMnXSxcbiAgICAgIHN0cmljdDogYXJndi5zdHJpY3QsXG4gICAgICBjb25maWd1cmF0aW9uLFxuICAgIH0pO1xuXG4gICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICBjYXNlICdscyc6XG4gICAgICBjYXNlICdsaXN0JzpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5saXN0KGFyZ3MuU1RBQ0tTKTtcblxuICAgICAgY2FzZSAnY29uZmlnJzpcbiAgICAgICAgLy8gd2FpdCB1c2VyIGZvciByb3MgaW5wdXRcbiAgICAgICAgYXdhaXQgY2xpLmNvbmZpZyhhcmdzLmdsb2JhbCk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnZGlmZic6XG4gICAgICAgIHJldHVybiBhd2FpdCBjbGkuZGlmZih7XG4gICAgICAgICAgcmVnaW9uOiBhcmdzLnJlZ2lvbixcbiAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICBwYXRoOiBhcmdzLnBhdGgsXG4gICAgICAgICAgY29udGV4dExpbmVzOiBhcmdzLmNvbnRleHRMaW5lcyxcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2RlcGxveSc6XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlck1hcDogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkIH0gPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgYXJncy5wYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbWV0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IChwYXJhbWV0ZXIgYXMgc3RyaW5nKS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgcGFyYW1ldGVyTWFwW2tleVZhbHVlWzBdXSA9IGtleVZhbHVlLnNsaWNlKDEpLmpvaW4oJz0nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgY2xpLmRlcGxveSh7XG4gICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1MsXG4gICAgICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVyTWFwLFxuICAgICAgICAgIGV4Y2x1c2l2ZWx5OiBhcmdzLmV4Y2x1c2l2ZWx5LFxuICAgICAgICAgIHRpbWVvdXQ6IGFyZ3MudGltZW91dE1pbnV0ZXMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNhc2UgJ2Rlc3Ryb3knOlxuICAgICAgICBhd2FpdCBjbGkuZGVzdHJveSh7XG4gICAgICAgICAgcmVnaW9uOiBhcmdzLnJlZ2lvbixcbiAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnc3ludGhlc2l6ZSc6XG4gICAgICBjYXNlICdzeW50aCc6XG4gICAgICAgIHJldHVybiBhd2FpdCBjbGkuc3ludGgoYXJncy5TVEFDS1MsIGFyZ3MuZXhjbHVzaXZlbHkpO1xuXG4gICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgLy8gY29uc3QgbGFuZ3VhZ2UgPSBjb25maWd1cmF0aW9uLnNldHRpbmdzLmdldChbJ2xhbmd1YWdlJ10pO1xuICAgICAgICBjb25zdCBsYW5ndWFnZSA9IGFyZ3MubGFuZ3VhZ2U7XG4gICAgICAgIGlmIChhcmdzLmxpc3QpIHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMobGFuZ3VhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBhd2FpdCBjbGlJbml0KGFyZ3MuVEVNUExBVEUsIGxhbmd1YWdlLCB1bmRlZmluZWQsIGFyZ3MuZ2VuZXJhdGVPbmx5KTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICd2ZXJzaW9uJzpcbiAgICAgICAgcmV0dXJuIGRhdGEodmVyc2lvbi5ESVNQTEFZX1ZFUlNJT04pO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gY29tbWFuZDogJyArIGNvbW1hbmQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvSnNvbk9yWWFtbChvYmplY3Q6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZVN0cnVjdHVyZShvYmplY3QsIGFyZ3YuanNvbik7XG4gIH1cbn1cblxuaW5pdENvbW1hbmRMaW5lKClcbiAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGEodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgLy8gcHJvY2Vzcy5leGl0Q29kZSA9IHZhbHVlO1xuICAgIH1cbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+IHtcbiAgICBlcnJvcihlcnIubWVzc2FnZSk7XG4gICAgaWYgKGVyci5zdGFjaykge1xuICAgICAgZGVidWcoZXJyLnN0YWNrKTtcbiAgICB9XG4gICAgcHJvY2Vzcy5leGl0Q29kZSA9IDE7XG4gIH0pO1xuIl19