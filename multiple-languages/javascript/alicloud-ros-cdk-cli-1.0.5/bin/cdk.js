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
        .usage('Usage: ros-cdk COMMAND')
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
        .command('deploy [STACKS..]', 'Deploys the stack(s) named STACKS to ROS into your alicloud account', (yargs) => yargs
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
        .command('destroy [STACKS..]', 'Destroy the stack(s) named STACKS', (yargs) => yargs.option('region', { type: 'string', alias: 'r', desc: 'The region where the stack is established' })
        .option('quiet', {
        type: 'boolean',
        alias: 'q',
        desc: 'destroy without confirm',
        default: false
    }))
        .command('event [STACK..]', 'Get resource events within the resource STACK', (yargs) => yargs.option('region', { type: 'string', alias: 'r', desc: 'The region where the stack is established' })
        .option('logical-resource-id', {
        type: 'string',
        alias: 'l',
        desc: 'Stack logical resource id'
    })
        .option('page-number', {
        type: 'string',
        alias: 'n',
        desc: 'The number of the page to return, Pages start from page 1. Default value:1',
    })
        .option('page-size', {
        type: 'string',
        alias: 's',
        desc: 'The number of entries to return on each page, Maximum value: 50. Default value: 10',
    }))
        .command('resource [STACKS..]', 'Get resources in the resource STACKS', (yargs) => yargs.option('region', { type: 'string', alias: 'r', desc: 'The region where the stack is established' }))
        .command('list-stacks [STACKS..]', 'Get resources in the resource STACKS', (yargs) => yargs.option('region', { type: 'string', alias: 'r', desc: 'The region where the stack is established' })
        .option('all', {
        type: 'boolean',
        alias: 'a',
        desc: 'Get all Stacks in account set config Region.',
        default: false,
    })
        .option('page-number', {
        type: 'string',
        alias: 'n',
        desc: 'The number of the page to return, Pages start from page 1. Default value:1',
    })
        .option('page-size', {
        type: 'string',
        alias: 's',
        desc: 'The number of entries to return on each page, Maximum value: 100. Default value: 10',
    }))
        .command('load-config', 'Load Aliyun CLI config to CDK.', (yargs) => yargs.option('global', {
        type: 'boolean',
        alias: 'g',
        desc: 'Whether the config should be stroed in global env',
        default: false,
    })
        .option('file-path', {
        type: 'string',
        alias: 'f',
        desc: 'Specify the cli configuration file path to load',
    }))
        .command('config', 'Set your alicloud account configuration.', (yargs) => yargs.option('global', {
        type: 'boolean',
        alias: 'g',
        desc: 'Whether the config should be stroed in global env',
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
                    quiet: args.quiet,
                });
                return;
            case 'event':
                await cli.event({
                    region: args.region,
                    stackName: args['STACK'],
                    logicalResourceId: args['logical-resource-id'],
                    pageNumber: args['page-number'],
                    pageSize: args['page-size']
                });
                return;
            case 'resource':
                await cli.resource({
                    region: args.region,
                    stackNames: args.STACKS
                });
                return;
            case 'list-stacks':
                await cli.listStacks({
                    region: args.region,
                    stackNames: args.STACKS,
                    all: args.all,
                    pageNumber: args['page-number'],
                    pageSize: args['page-size']
                });
                return;
            case 'load-config':
                await cli.loadCliConfig({
                    global: args.global,
                    loadFilePath: args['file-path']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFFL0Isa0VBQThEO0FBQzlELDBDQUE4QztBQUM5QyxvREFBZ0Q7QUFDaEQsc0NBQXVGO0FBQ3ZGLDRDQUFpRTtBQUNqRSxnREFBc0Q7QUFDdEQsOENBQWdEO0FBQ2hELDBDQUEwQztBQUUxQyxLQUFLLFVBQVUseUJBQXlCO0lBQ3RDLE1BQU0sb0JBQW9CLEdBQUcsTUFBTSw2QkFBc0IsQ0FBQztJQUMxRCxPQUFPLEtBQUs7U0FDVCxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ1YsS0FBSyxDQUFDLHdCQUF3QixDQUFDO1NBQy9CLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDZCxJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLHNFQUFzRTtRQUM1RSxPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7U0FDRCxNQUFNLENBQUMsZUFBZSxFQUFFO1FBQ3ZCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsdUVBQXVFO0tBQzlFLENBQUM7U0FDRCxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQztTQUM1RSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsdUNBQXVDLEVBQUUsQ0FBQztTQUNwRixLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ2hCLE9BQU8sQ0FDTixpQkFBaUIsRUFDakIsMkdBQTJHLEVBQzNHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDUixLQUFLO1NBQ0YsTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUNsQixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxF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L0IsT0FBTyw4QkFBa0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxFQUFFO0tBQ2QsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDZCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsT0FBTztLQUNSO0lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2I7U0FBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUNwQyw0QkFBNEI7S0FDN0I7QUFDSCxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNiLGVBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO1FBQ2IsZUFBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxyXG5pbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xyXG5pbXBvcnQgKiBhcyB5YXJncyBmcm9tICd5YXJncyc7XHJcblxyXG5pbXBvcnQgeyBDbG91ZEV4ZWN1dGFibGUgfSBmcm9tICcuLi9saWIvYXBpL2Nsb3VkLWV4ZWN1dGFibGUnO1xyXG5pbXBvcnQgeyBleGVjUHJvZ3JhbSB9IGZyb20gJy4uL2xpYi9hcGkvZXhlYyc7XHJcbmltcG9ydCB7IENka1Rvb2xraXQgfSBmcm9tICcuLi9saWIvY2RrLXRvb2xraXQnO1xyXG5pbXBvcnQgeyBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzLCBjbGlJbml0LCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcyB9IGZyb20gJy4uL2xpYi9pbml0JztcclxuaW1wb3J0IHsgZGF0YSwgZGVidWcsIGVycm9yLCBzZXRMb2dMZXZlbCB9IGZyb20gJy4uL2xpYi9sb2dnaW5nJztcclxuaW1wb3J0IHsgc2VyaWFsaXplU3RydWN0dXJlIH0gZnJvbSAnLi4vbGliL3NlcmlhbGl6ZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9saWIvc2V0dGluZ3MnO1xyXG5pbXBvcnQgKiBhcyB2ZXJzaW9uIGZyb20gJy4uL2xpYi92ZXJzaW9uJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlQ29tbWFuZExpbmVBcmd1bWVudHMoKSB7XHJcbiAgY29uc3QgaW5pdFRlbXBsYXRlTGFudWFnZXMgPSBhd2FpdCBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzO1xyXG4gIHJldHVybiB5YXJnc1xyXG4gICAgLmVudignQ0RLJylcclxuICAgIC51c2FnZSgnVXNhZ2U6IHJvcy1jZGsgQ09NTUFORCcpXHJcbiAgICAub3B0aW9uKCdqc29uJywge1xyXG4gICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgIGFsaWFzOiAnaicsXHJcbiAgICAgIGRlc2M6ICdVc2UgSlNPTiBvdXRwdXQgaW5zdGVhZCBvZiBZQU1MIHdoZW4gdGVtcGxhdGVzIGFyZSBwcmludGVkIHRvIFNURE9VVCcsXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIC5vcHRpb24oJ2lnbm9yZS1lcnJvcnMnLCB7XHJcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgIGRlc2M6ICdJZ25vcmVzIHN5bnRoZXNpcyBlcnJvcnMsIHdoaWNoIHdpbGwgbGlrZWx5IHByb2R1Y2UgYW4gaW52YWxpZCBvdXRwdXQnLFxyXG4gICAgfSlcclxuICAgIC5vcHRpb24oJ3RyYWNlJywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdQcmludCB0cmFjZSBmb3Igc3RhY2sgd2FybmluZ3MnIH0pXHJcbiAgICAub3B0aW9uKCdzdHJpY3QnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ0RvIG5vdCBjb25zdHJ1Y3Qgc3RhY2tzIHdpdGggd2FybmluZ3MnIH0pXHJcbiAgICAuY291bnQoJ3ZlcmJvc2UnKVxyXG4gICAgLmNvbW1hbmQoXHJcbiAgICAgICdpbml0IFtURU1QTEFURV0nLFxyXG4gICAgICAnQ3JlYXRlIGEgbmV3LCBlbXB0eSBDREsgcHJvamVjdCBmcm9tIGEgdGVtcGxhdGUuIEludm9rZWQgd2l0aG91dCBURU1QTEFURSwgdGhlIGFwcCB0ZW1wbGF0ZSB3aWxsIGJlIHVzZWQuJyxcclxuICAgICAgKHlhcmdzKSA9PlxyXG4gICAgICAgIHlhcmdzXHJcbiAgICAgICAgICAub3B0aW9uKCdsYW5ndWFnZScsIHtcclxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIGFsaWFzOiAnbCcsXHJcbiAgICAgICAgICAgIGRlc2M6ICdUaGUgbGFuZ3VhZ2UgdG8gYmUgdXNlZCBmb3IgdGhlIG5ldyBwcm9qZWN0IChkZWZhdWx0IGNhbiBiZSBjb25maWd1cmVkIGluIH4vLmNkay5qc29uKScsXHJcbiAgICAgICAgICAgIGNob2ljZXM6IGluaXRUZW1wbGF0ZUxhbnVhZ2VzLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5vcHRpb24oJ2xpc3QnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ0xpc3QgdGhlIGF2YWlsYWJsZSB0ZW1wbGF0ZXMnIH0pXHJcbiAgICAgICAgICAub3B0aW9uKCdnZW5lcmF0ZS1vbmx5Jywge1xyXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZXNjOlxyXG4gICAgICAgICAgICAgICdJZiB0cnVlLCBvbmx5IGdlbmVyYXRlcyBwcm9qZWN0IGZpbGVzLCB3aXRob3V0IGV4ZWN1dGluZyBhZGRpdGlvbmFsIG9wZXJhdGlvbnMgc3VjaCBhcyBzZXR0aW5nIHVwIGEgZ2l0IHJlcG8sIGluc3RhbGxpbmcgZGVwZW5kZW5jaWVzIG9yIGNvbXBpbGluZyB0aGUgcHJvamVjdCcsXHJcbiAgICAgICAgICB9KSxcclxuICAgIClcclxuICAgIC5jb21tYW5kKFsnbGlzdCBbU1RBQ0tTLi5dJywgJ2xzIFtTVEFDS1MuLl0nXSwgJ0xpc3RzIGFsbCBzdGFja3MgaW4gdGhlIGFwcCcsICh5YXJncykgPT5cclxuICAgICAgeWFyZ3Mub3B0aW9uKCdsb25nJywge1xyXG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICBhbGlhczogJ2wnLFxyXG4gICAgICAgIGRlc2M6ICdEaXNwbGF5IGVudmlyb25tZW50IGluZm9ybWF0aW9uIGZvciBlYWNoIHN0YWNrJyxcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgICAuY29tbWFuZChcclxuICAgICAgWydzeW50aGVzaXplIFtTVEFDS1MuLl0nLCAnc3ludGggW1NUQUNLUy4uXSddLFxyXG4gICAgICAnU3ludGhlc2l6ZXMgYW5kIHByaW50cyB0aGUgUk9TIHRlbXBsYXRlIGZvciB0aGlzIHN0YWNrJyxcclxuICAgICAgKHlhcmdzKSA9PlxyXG4gICAgICAgIHlhcmdzLm9wdGlvbignZXhjbHVzaXZlbHknLCB7XHJcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgICBhbGlhczogJ2UnLFxyXG4gICAgICAgICAgZGVzYzogXCJPbmx5IHN5bnRoZXNpemUgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcclxuICAgICAgICB9KSxcclxuICAgIClcclxuICAgIC5jb21tYW5kKCdkZXBsb3kgW1NUQUNLUy4uXScsICdEZXBsb3lzIHRoZSBzdGFjayhzKSBuYW1lZCBTVEFDS1MgdG8gUk9TIGludG8geW91ciBhbGljbG91ZCBhY2NvdW50JywgKHlhcmdzKSA9PlxyXG4gICAgICB5YXJnc1xyXG4gICAgICAgIC5vcHRpb24oJ3BhcmFtZXRlcnMnLCB7XHJcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICAgICAgZGVzYzogJ0FkZGl0aW9uYWwgcGFyYW1ldGVycyBwYXNzZWQgdG8gUk9TIGF0IGRlcGxveSB0aW1lIChTVEFDSzpLRVk9VkFMVUUpJyxcclxuICAgICAgICAgIG5hcmdzOiAxLFxyXG4gICAgICAgICAgcmVxdWlyZXNBcmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0OiB7fSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vcHRpb24oJ2V4Y2x1c2l2ZWx5Jywge1xyXG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgYWxpYXM6ICdlJyxcclxuICAgICAgICAgIGRlc2M6IFwiT25seSBkZXBsb3kgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vcHRpb24oJ3JlZ2lvbicsIHsgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAncicsIGRlc2M6ICdUaGUgcmVnaW9uIHdoZXJlIHRoZSBzdGFjayBzaG91bGQgYmUgZGVwbG95ZWQnIH0pXHJcbiAgICAgICAgLm9wdGlvbigndGltZW91dE1pbnV0ZXMnLCB7IHR5cGU6ICdudW1iZXInLCBhbGlhczogJ3QnLCBkZXNjOiAnVGhlIHRpbWVvdXQgbWludXRlcycsIGRlZmF1bHQ6IDIwIH0pLFxyXG4gICAgKVxyXG4gICAgLmNvbW1hbmQoXHJcbiAgICAgICdkaWZmIFtTVEFDS1MuLl0nLFxyXG4gICAgICAnQ29tcGFyZXMgdGhlIHNwZWNpZmllZCBzdGFjayB3aXRoIHRoZSBkZXBsb3llZCBzdGFjayBvciBhIGxvY2FsIHRlbXBsYXRlIGZpbGUsIGFuZCByZXR1cm5zIHdpdGggc3RhdHVzIDEgaWYgYW55IGRpZmZlcmVuY2UgaXMgZm91bmQnLFxyXG4gICAgICAoeWFyZ3MpID0+XHJcbiAgICAgICAgeWFyZ3NcclxuICAgICAgICAgIC5vcHRpb24oJ3JlZ2lvbicsIHsgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAncicsIGRlc2M6ICdUaGUgcmVnaW9uIHdoZXJlIHRoZSBzdGFjayBpcyBlc3RhYmxpc2hlZCcgfSlcclxuICAgICAgICAgIC5vcHRpb24oJ3BhdGgnLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICBhbGlhczogJ3AnLFxyXG4gICAgICAgICAgICBkZXNjOiAnVGhlIHBhdGggdG8gdGhlIHRlbXBsYXRlIHRvIGNvbXBhcmUgd2l0aCcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcuL2Nkay5vdXQnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5vcHRpb24oJ2NvbnRleHQtbGluZXMnLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICBkZXNjOiAnTnVtYmVyIG9mIGNvbnRleHQgbGluZXMgdG8gaW5jbHVkZSBpbiBhcmJpdHJhcnkgSlNPTiBkaWZmIHJlbmRlcmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDMsXHJcbiAgICAgICAgICB9KSxcclxuICAgIClcclxuICAgIC5jb21tYW5kKCdkZXN0cm95IFtTVEFDS1MuLl0nLCAnRGVzdHJveSB0aGUgc3RhY2socykgbmFtZWQgU1RBQ0tTJywgKHlhcmdzKSA9PlxyXG4gICAgICB5YXJncy5vcHRpb24oJ3JlZ2lvbicsIHsgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAncicsIGRlc2M6ICdUaGUgcmVnaW9uIHdoZXJlIHRoZSBzdGFjayBpcyBlc3RhYmxpc2hlZCcgfSlcclxuICAgICAgICAgICAgLm9wdGlvbigncXVpZXQnLCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICAgIGFsaWFzOiAncScsXHJcbiAgICAgICAgICAgICAgZGVzYzogJ2Rlc3Ryb3kgd2l0aG91dCBjb25maXJtJyxcclxuICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgICAgICB9KSxcclxuICAgIClcclxuICAgIC5jb21tYW5kKCdldmVudCBbU1RBQ0suLl0nLCAnR2V0IHJlc291cmNlIGV2ZW50cyB3aXRoaW4gdGhlIHJlc291cmNlIFNUQUNLJywgKHlhcmdzKSA9PlxyXG4gICAgICB5YXJncy5vcHRpb24oJ3JlZ2lvbicsIHsgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAncicsIGRlc2M6ICdUaGUgcmVnaW9uIHdoZXJlIHRoZSBzdGFjayBpcyBlc3RhYmxpc2hlZCcgfSlcclxuICAgICAgLm9wdGlvbignbG9naWNhbC1yZXNvdXJjZS1pZCcsIHtcclxuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICBhbGlhczogJ2wnLFxyXG4gICAgICAgIGRlc2M6ICdTdGFjayBsb2dpY2FsIHJlc291cmNlIGlkJ1xyXG4gICAgICB9KVxyXG4gICAgICAub3B0aW9uKCdwYWdlLW51bWJlcicsIHtcclxuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICBhbGlhczogJ24nLFxyXG4gICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIHRoZSBwYWdlIHRvIHJldHVybiwgUGFnZXMgc3RhcnQgZnJvbSBwYWdlIDEuIERlZmF1bHQgdmFsdWU6MScsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5vcHRpb24oJ3BhZ2Utc2l6ZScsIHtcclxuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICBhbGlhczogJ3MnLFxyXG4gICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIGVudHJpZXMgdG8gcmV0dXJuIG9uIGVhY2ggcGFnZSwgTWF4aW11bSB2YWx1ZTogNTAuIERlZmF1bHQgdmFsdWU6IDEwJyxcclxuICAgICAgfSlcclxuICAgIClcclxuICAgIC5jb21tYW5kKCdyZXNvdXJjZSBbU1RBQ0tTLi5dJywgJ0dldCByZXNvdXJjZXMgaW4gdGhlIHJlc291cmNlIFNUQUNLUycsICh5YXJncykgPT5cclxuICAgICAgeWFyZ3Mub3B0aW9uKCdyZWdpb24nLCB7IHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ3InLCBkZXNjOiAnVGhlIHJlZ2lvbiB3aGVyZSB0aGUgc3RhY2sgaXMgZXN0YWJsaXNoZWQnIH0pXHJcbiAgICApXHJcbiAgICAuY29tbWFuZCgnbGlzdC1zdGFja3MgW1NUQUNLUy4uXScsICdHZXQgcmVzb3VyY2VzIGluIHRoZSByZXNvdXJjZSBTVEFDS1MnLCAoeWFyZ3MpID0+XHJcbiAgICAgIHlhcmdzLm9wdGlvbigncmVnaW9uJywgeyB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdyJywgZGVzYzogJ1RoZSByZWdpb24gd2hlcmUgdGhlIHN0YWNrIGlzIGVzdGFibGlzaGVkJyB9KVxyXG4gICAgICAub3B0aW9uKCdhbGwnLCB7XHJcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgICAgIGFsaWFzOiAnYScsXHJcbiAgICAgICAgZGVzYzogJ0dldCBhbGwgU3RhY2tzIGluIGFjY291bnQgc2V0IGNvbmZpZyBSZWdpb24uJyxcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgfSlcclxuICAgICAgLm9wdGlvbigncGFnZS1udW1iZXInLCB7XHJcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgYWxpYXM6ICduJyxcclxuICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiB0aGUgcGFnZSB0byByZXR1cm4sIFBhZ2VzIHN0YXJ0IGZyb20gcGFnZSAxLiBEZWZhdWx0IHZhbHVlOjEnLFxyXG4gICAgICB9KVxyXG4gICAgICAub3B0aW9uKCdwYWdlLXNpemUnLCB7XHJcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgYWxpYXM6ICdzJyxcclxuICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiBlbnRyaWVzIHRvIHJldHVybiBvbiBlYWNoIHBhZ2UsIE1heGltdW0gdmFsdWU6IDEwMC4gRGVmYXVsdCB2YWx1ZTogMTAnLFxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gICAgLmNvbW1hbmQoJ2xvYWQtY29uZmlnJywgJ0xvYWQgQWxpeXVuIENMSSBjb25maWcgdG8gQ0RLLicsICh5YXJncykgPT5cclxuICAgICAgeWFyZ3Mub3B0aW9uKCdnbG9iYWwnLCB7XHJcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgICAgIGFsaWFzOiAnZycsXHJcbiAgICAgICAgZGVzYzogJ1doZXRoZXIgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3Ryb2VkIGluIGdsb2JhbCBlbnYnLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgICAub3B0aW9uKCdmaWxlLXBhdGgnLCB7XHJcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgYWxpYXM6ICdmJyxcclxuICAgICAgICBkZXNjOiAnU3BlY2lmeSB0aGUgY2xpIGNvbmZpZ3VyYXRpb24gZmlsZSBwYXRoIHRvIGxvYWQnLFxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gICAgLmNvbW1hbmQoJ2NvbmZpZycsICdTZXQgeW91ciBhbGljbG91ZCBhY2NvdW50IGNvbmZpZ3VyYXRpb24uJywgKHlhcmdzKSA9PlxyXG4gICAgICB5YXJncy5vcHRpb24oJ2dsb2JhbCcsIHtcclxuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgYWxpYXM6ICdnJyxcclxuICAgICAgICBkZXNjOiAnV2hldGhlciB0aGUgY29uZmlnIHNob3VsZCBiZSBzdHJvZWQgaW4gZ2xvYmFsIGVudicsXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgIH0pLFxyXG4gICAgKVxyXG4gICAgLnZlcnNpb24odmVyc2lvbi5ESVNQTEFZX1ZFUlNJT04pXHJcbiAgICAuZGVtYW5kQ29tbWFuZCgxLCAnJykgLy8ganVzdCBwcmludCBoZWxwXHJcbiAgICAucmVjb21tZW5kQ29tbWFuZHMoKVxyXG4gICAgLmhlbHAoKVxyXG4gICAgLmFsaWFzKCdoJywgJ2hlbHAnKVxyXG4gICAgLmVwaWxvZ3VlKFxyXG4gICAgICBbXHJcbiAgICAgICAgJ0lmIHlvdXIgYXBwIGhhcyBhIHNpbmdsZSBzdGFjaywgdGhlcmUgaXMgbm8gbmVlZCB0byBzcGVjaWZ5IHRoZSBzdGFjayBuYW1lJyxcclxuICAgICAgICAnSWYgb25lIG9mIGNkay5qc29uIG9yIH4vLmNkay5qc29uIGV4aXN0cywgb3B0aW9ucyBzcGVjaWZpZWQgdGhlcmUgd2lsbCBiZSB1c2VkIGFzIGRlZmF1bHRzLiBTZXR0aW5ncyBpbiBjZGsuanNvbiB0YWtlIHByZWNlZGVuY2UuJyxcclxuICAgICAgXS5qb2luKCdcXG5cXG4nKSxcclxuICAgICkuYXJndjtcclxufVxyXG5cclxuaWYgKCFwcm9jZXNzLnN0ZG91dC5pc1RUWSkge1xyXG4gIGNvbG9ycy5kaXNhYmxlKCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRDb21tYW5kTGluZSgpIHtcclxuICBjb25zdCBhcmd2ID0gYXdhaXQgcGFyc2VDb21tYW5kTGluZUFyZ3VtZW50cygpO1xyXG4gIGlmIChhcmd2LnZlcmJvc2UpIHtcclxuICAgIHNldExvZ0xldmVsKGFyZ3YudmVyYm9zZSk7XHJcbiAgfVxyXG4gIGRlYnVnKCdDREsgdG9vbGtpdCB2ZXJzaW9uOicsIHZlcnNpb24uRElTUExBWV9WRVJTSU9OKTtcclxuICBkZWJ1ZygnQ29tbWFuZCBsaW5lIGFyZ3VtZW50czonLCBhcmd2KTtcclxuXHJcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKGFyZ3YpO1xyXG4gIGF3YWl0IGNvbmZpZ3VyYXRpb24ubG9hZCgpO1xyXG5cclxuICBjb25zdCBjbG91ZEV4ZWN1dGFibGUgPSBuZXcgQ2xvdWRFeGVjdXRhYmxlKHtcclxuICAgIGNvbmZpZ3VyYXRpb24sXHJcbiAgICBzeW50aGVzaXplcjogZXhlY1Byb2dyYW0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNtZCA9IFN0cmluZyhhcmd2Ll9bMF0pO1xyXG5cclxuICBjb25zdCByZXR1cm5WYWx1ZSA9IGF3YWl0IG1haW4oY21kLCBhcmd2KTtcclxuICBpZiAodHlwZW9mIHJldHVyblZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIHRvSnNvbk9yWWFtbChyZXR1cm5WYWx1ZSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgcmV0dXJuVmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG1haW4oY29tbWFuZDogc3RyaW5nLCBhcmdzOiBhbnkpOiBQcm9taXNlPG51bWJlciB8IHN0cmluZyB8IHt9IHwgdm9pZD4ge1xyXG4gICAgYXJncy5TVEFDS1MgPSBhcmdzLlNUQUNLUyB8fCBbXTtcclxuXHJcbiAgICBjb25zdCBjbGkgPSBuZXcgQ2RrVG9vbGtpdCh7XHJcbiAgICAgIGNsb3VkRXhlY3V0YWJsZSxcclxuICAgICAgdmVyYm9zZTogYXJndi50cmFjZSB8fCBhcmd2LnZlcmJvc2UgPiAwLFxyXG4gICAgICBpZ25vcmVFcnJvcnM6IGFyZ3ZbJ2lnbm9yZS1lcnJvcnMnXSxcclxuICAgICAgc3RyaWN0OiBhcmd2LnN0cmljdCxcclxuICAgICAgY29uZmlndXJhdGlvbixcclxuICAgIH0pO1xyXG5cclxuICAgIHN3aXRjaCAoY29tbWFuZCkge1xyXG4gICAgICBjYXNlICdscyc6XHJcbiAgICAgIGNhc2UgJ2xpc3QnOlxyXG4gICAgICAgIHJldHVybiBhd2FpdCBjbGkubGlzdChhcmdzLlNUQUNLUyk7XHJcblxyXG4gICAgICBjYXNlICdjb25maWcnOlxyXG4gICAgICAgIC8vIHdhaXQgdXNlciBmb3Igcm9zIGlucHV0XHJcbiAgICAgICAgYXdhaXQgY2xpLmNvbmZpZyhhcmdzLmdsb2JhbCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgY2FzZSAnZGlmZic6XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5kaWZmKHtcclxuICAgICAgICAgIHJlZ2lvbjogYXJncy5yZWdpb24sXHJcbiAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcclxuICAgICAgICAgIHBhdGg6IGFyZ3MucGF0aCxcclxuICAgICAgICAgIGNvbnRleHRMaW5lczogYXJncy5jb250ZXh0TGluZXMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjYXNlICdkZXBsb3knOlxyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlck1hcDogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkIH0gPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlciBvZiBhcmdzLnBhcmFtZXRlcnMpIHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1ldGVyID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IChwYXJhbWV0ZXIgYXMgc3RyaW5nKS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJNYXBba2V5VmFsdWVbMF1dID0ga2V5VmFsdWUuc2xpY2UoMSkuam9pbignPScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBjbGkuZGVwbG95KHtcclxuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxyXG4gICAgICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVyTWFwLFxyXG4gICAgICAgICAgZXhjbHVzaXZlbHk6IGFyZ3MuZXhjbHVzaXZlbHksXHJcbiAgICAgICAgICB0aW1lb3V0OiBhcmdzLnRpbWVvdXRNaW51dGVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGNhc2UgJ2Rlc3Ryb3knOlxyXG4gICAgICAgIGF3YWl0IGNsaS5kZXN0cm95KHtcclxuICAgICAgICAgIHJlZ2lvbjogYXJncy5yZWdpb24sXHJcbiAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcclxuICAgICAgICAgIHF1aWV0OiBhcmdzLnF1aWV0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGNhc2UgJ2V2ZW50JzpcclxuICAgICAgICBhd2FpdCBjbGkuZXZlbnQoe1xyXG4gICAgICAgICAgcmVnaW9uOiBhcmdzLnJlZ2lvbixcclxuICAgICAgICAgIHN0YWNrTmFtZTogYXJnc1snU1RBQ0snXSxcclxuICAgICAgICAgIGxvZ2ljYWxSZXNvdXJjZUlkOiBhcmdzWydsb2dpY2FsLXJlc291cmNlLWlkJ10sXHJcbiAgICAgICAgICBwYWdlTnVtYmVyOiBhcmdzWydwYWdlLW51bWJlciddLFxyXG4gICAgICAgICAgcGFnZVNpemU6IGFyZ3NbJ3BhZ2Utc2l6ZSddXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgY2FzZSAncmVzb3VyY2UnOlxyXG4gICAgICAgIGF3YWl0IGNsaS5yZXNvdXJjZSh7XHJcbiAgICAgICAgICByZWdpb246IGFyZ3MucmVnaW9uLFxyXG4gICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1NcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICBjYXNlICdsaXN0LXN0YWNrcyc6XHJcbiAgICAgICAgYXdhaXQgY2xpLmxpc3RTdGFja3Moe1xyXG4gICAgICAgICAgcmVnaW9uOiBhcmdzLnJlZ2lvbixcclxuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxyXG4gICAgICAgICAgYWxsOiBhcmdzLmFsbCxcclxuICAgICAgICAgIHBhZ2VOdW1iZXI6IGFyZ3NbJ3BhZ2UtbnVtYmVyJ10sXHJcbiAgICAgICAgICBwYWdlU2l6ZTogYXJnc1sncGFnZS1zaXplJ11cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICBjYXNlICdsb2FkLWNvbmZpZyc6XHJcbiAgICAgICAgYXdhaXQgY2xpLmxvYWRDbGlDb25maWcoe1xyXG4gICAgICAgICAgZ2xvYmFsOiBhcmdzLmdsb2JhbCwgXHJcbiAgICAgICAgICBsb2FkRmlsZVBhdGg6IGFyZ3NbJ2ZpbGUtcGF0aCddXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgY2FzZSAnc3ludGhlc2l6ZSc6XHJcbiAgICAgIGNhc2UgJ3N5bnRoJzpcclxuICAgICAgICByZXR1cm4gYXdhaXQgY2xpLnN5bnRoKGFyZ3MuU1RBQ0tTLCBhcmdzLmV4Y2x1c2l2ZWx5KTtcclxuXHJcbiAgICAgIGNhc2UgJ2luaXQnOlxyXG4gICAgICAgIC8vIGNvbnN0IGxhbmd1YWdlID0gY29uZmlndXJhdGlvbi5zZXR0aW5ncy5nZXQoWydsYW5ndWFnZSddKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZSA9IGFyZ3MubGFuZ3VhZ2U7XHJcbiAgICAgICAgaWYgKGFyZ3MubGlzdCkge1xyXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHByaW50QXZhaWxhYmxlVGVtcGxhdGVzKGxhbmd1YWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaUluaXQoYXJncy5URU1QTEFURSwgbGFuZ3VhZ2UsIHVuZGVmaW5lZCwgYXJncy5nZW5lcmF0ZU9ubHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgJ3ZlcnNpb24nOlxyXG4gICAgICAgIHJldHVybiBkYXRhKHZlcnNpb24uRElTUExBWV9WRVJTSU9OKTtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGNvbW1hbmQ6ICcgKyBjb21tYW5kKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvSnNvbk9yWWFtbChvYmplY3Q6IGFueSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gc2VyaWFsaXplU3RydWN0dXJlKG9iamVjdCwgYXJndi5qc29uKTtcclxuICB9XHJcbn1cclxuXHJcbmluaXRDb21tYW5kTGluZSgpXHJcbiAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBkYXRhKHZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAvLyBwcm9jZXNzLmV4aXRDb2RlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgaWYgKGVyci5zdGFjaykge1xyXG4gICAgICBkZWJ1ZyhlcnIuc3RhY2spO1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzcy5leGl0Q29kZSA9IDE7XHJcbiAgfSk7XHJcbiJdfQ==