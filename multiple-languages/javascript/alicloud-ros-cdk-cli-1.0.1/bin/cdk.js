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
        .command('destroy [STACKS..]', 'Destroy the stack(s) named STACKS', (yargs) => yargs.option('region', { type: 'string', alias: 'r', desc: 'The region where the stack is established' })
        .option('quiet', {
        type: 'boolean',
        alias: 'q',
        desc: 'destroy without confirm',
        default: false
    }))
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
                    quiet: args.quiet,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFFL0Isa0VBQThEO0FBQzlELDBDQUE4QztBQUM5QyxvREFBZ0Q7QUFDaEQsc0NBQXVGO0FBQ3ZGLDRDQUFpRTtBQUNqRSxnREFBc0Q7QUFDdEQsOENBQWdEO0FBQ2hELDBDQUEwQztBQUUxQyxLQUFLLFVBQVUseUJBQXlCO0lBQ3RDLE1BQU0sb0JBQW9CLEdBQUcsTUFBTSw2QkFBc0IsQ0FBQztJQUMxRCxPQUFPLEtBQUs7U0FDVCxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ1YsS0FBSyxDQUFDLGlDQUFpQyxDQUFDO1NBQ3hDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDZCxJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLHNFQUFzRTtRQUM1RSxPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7U0FDRCxNQUFNLENBQUMsZUFBZSxFQUFFO1FBQ3ZCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsdUVBQXVFO0tBQzlFLENBQUM7U0FDRCxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQztTQUM1RSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsdUNBQXVDLEVBQUUsQ0FBQztTQUNwRixLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ2hCLE9BQU8sQ0FDTixpQkFBaUIsRUFDakIsMkdBQTJHLEVBQzNHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDUixLQUFLO1NBQ0YsTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUNsQixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxF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S0FBSyxFQUFFO1FBQ2IsZUFBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCAqIGFzIHlhcmdzIGZyb20gJ3lhcmdzJztcblxuaW1wb3J0IHsgQ2xvdWRFeGVjdXRhYmxlIH0gZnJvbSAnLi4vbGliL2FwaS9jbG91ZC1leGVjdXRhYmxlJztcbmltcG9ydCB7IGV4ZWNQcm9ncmFtIH0gZnJvbSAnLi4vbGliL2FwaS9leGVjJztcbmltcG9ydCB7IENka1Rvb2xraXQgfSBmcm9tICcuLi9saWIvY2RrLXRvb2xraXQnO1xuaW1wb3J0IHsgYXZhaWxhYmxlSW5pdExhbmd1YWdlcywgY2xpSW5pdCwgcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMgfSBmcm9tICcuLi9saWIvaW5pdCc7XG5pbXBvcnQgeyBkYXRhLCBkZWJ1ZywgZXJyb3IsIHNldExvZ0xldmVsIH0gZnJvbSAnLi4vbGliL2xvZ2dpbmcnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3RydWN0dXJlIH0gZnJvbSAnLi4vbGliL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbGliL3NldHRpbmdzJztcbmltcG9ydCAqIGFzIHZlcnNpb24gZnJvbSAnLi4vbGliL3ZlcnNpb24nO1xuXG5hc3luYyBmdW5jdGlvbiBwYXJzZUNvbW1hbmRMaW5lQXJndW1lbnRzKCkge1xuICBjb25zdCBpbml0VGVtcGxhdGVMYW51YWdlcyA9IGF3YWl0IGF2YWlsYWJsZUluaXRMYW5ndWFnZXM7XG4gIHJldHVybiB5YXJnc1xuICAgIC5lbnYoJ0NESycpXG4gICAgLnVzYWdlKCdVc2FnZTogcm9zIC1hIDxjZGstYXBwPiBDT01NQU5EJylcbiAgICAub3B0aW9uKCdqc29uJywge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgYWxpYXM6ICdqJyxcbiAgICAgIGRlc2M6ICdVc2UgSlNPTiBvdXRwdXQgaW5zdGVhZCBvZiBZQU1MIHdoZW4gdGVtcGxhdGVzIGFyZSBwcmludGVkIHRvIFNURE9VVCcsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9KVxuICAgIC5vcHRpb24oJ2lnbm9yZS1lcnJvcnMnLCB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2M6ICdJZ25vcmVzIHN5bnRoZXNpcyBlcnJvcnMsIHdoaWNoIHdpbGwgbGlrZWx5IHByb2R1Y2UgYW4gaW52YWxpZCBvdXRwdXQnLFxuICAgIH0pXG4gICAgLm9wdGlvbigndHJhY2UnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1ByaW50IHRyYWNlIGZvciBzdGFjayB3YXJuaW5ncycgfSlcbiAgICAub3B0aW9uKCdzdHJpY3QnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ0RvIG5vdCBjb25zdHJ1Y3Qgc3RhY2tzIHdpdGggd2FybmluZ3MnIH0pXG4gICAgLmNvdW50KCd2ZXJib3NlJylcbiAgICAuY29tbWFuZChcbiAgICAgICdpbml0IFtURU1QTEFURV0nLFxuICAgICAgJ0NyZWF0ZSBhIG5ldywgZW1wdHkgQ0RLIHByb2plY3QgZnJvbSBhIHRlbXBsYXRlLiBJbnZva2VkIHdpdGhvdXQgVEVNUExBVEUsIHRoZSBhcHAgdGVtcGxhdGUgd2lsbCBiZSB1c2VkLicsXG4gICAgICAoeWFyZ3MpID0+XG4gICAgICAgIHlhcmdzXG4gICAgICAgICAgLm9wdGlvbignbGFuZ3VhZ2UnLCB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGFsaWFzOiAnbCcsXG4gICAgICAgICAgICBkZXNjOiAnVGhlIGxhbmd1YWdlIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXcgcHJvamVjdCAoZGVmYXVsdCBjYW4gYmUgY29uZmlndXJlZCBpbiB+Ly5jZGsuanNvbiknLFxuICAgICAgICAgICAgY2hvaWNlczogaW5pdFRlbXBsYXRlTGFudWFnZXMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdsaXN0JywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdMaXN0IHRoZSBhdmFpbGFibGUgdGVtcGxhdGVzJyB9KVxuICAgICAgICAgIC5vcHRpb24oJ2dlbmVyYXRlLW9ubHknLCB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIGRlc2M6XG4gICAgICAgICAgICAgICdJZiB0cnVlLCBvbmx5IGdlbmVyYXRlcyBwcm9qZWN0IGZpbGVzLCB3aXRob3V0IGV4ZWN1dGluZyBhZGRpdGlvbmFsIG9wZXJhdGlvbnMgc3VjaCBhcyBzZXR0aW5nIHVwIGEgZ2l0IHJlcG8sIGluc3RhbGxpbmcgZGVwZW5kZW5jaWVzIG9yIGNvbXBpbGluZyB0aGUgcHJvamVjdCcsXG4gICAgICAgICAgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKFsnbGlzdCBbU1RBQ0tTLi5dJywgJ2xzIFtTVEFDS1MuLl0nXSwgJ0xpc3RzIGFsbCBzdGFja3MgaW4gdGhlIGFwcCcsICh5YXJncykgPT5cbiAgICAgIHlhcmdzLm9wdGlvbignbG9uZycsIHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgZGVzYzogJ0Rpc3BsYXkgZW52aXJvbm1lbnQgaW5mb3JtYXRpb24gZm9yIGVhY2ggc3RhY2snLFxuICAgICAgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKFxuICAgICAgWydzeW50aGVzaXplIFtTVEFDS1MuLl0nLCAnc3ludGggW1NUQUNLUy4uXSddLFxuICAgICAgJ1N5bnRoZXNpemVzIGFuZCBwcmludHMgdGhlIFJPUyB0ZW1wbGF0ZSBmb3IgdGhpcyBzdGFjaycsXG4gICAgICAoeWFyZ3MpID0+XG4gICAgICAgIHlhcmdzLm9wdGlvbignZXhjbHVzaXZlbHknLCB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGFsaWFzOiAnZScsXG4gICAgICAgICAgZGVzYzogXCJPbmx5IHN5bnRoZXNpemUgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcbiAgICAgICAgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKCdkZXBsb3kgW1NUQUNLUy4uXScsICdEZXBsb3lzIHRoZSBzdGFjayhzKSBuYW1lZCBTVEFDS1MgaW50byB5b3VyIHJvcyBhY2NvdW50JywgKHlhcmdzKSA9PlxuICAgICAgeWFyZ3NcbiAgICAgICAgLm9wdGlvbigncGFyYW1ldGVycycsIHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIGRlc2M6ICdBZGRpdGlvbmFsIHBhcmFtZXRlcnMgcGFzc2VkIHRvIFJPUyBhdCBkZXBsb3kgdGltZSAoU1RBQ0s6S0VZPVZBTFVFKScsXG4gICAgICAgICAgbmFyZ3M6IDEsXG4gICAgICAgICAgcmVxdWlyZXNBcmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdDoge30sXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb24oJ2V4Y2x1c2l2ZWx5Jywge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBhbGlhczogJ2UnLFxuICAgICAgICAgIGRlc2M6IFwiT25seSBkZXBsb3kgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcbiAgICAgICAgfSlcbiAgICAgICAgLm9wdGlvbigncmVnaW9uJywgeyB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdyJywgZGVzYzogJ1RoZSByZWdpb24gd2hlcmUgdGhlIHN0YWNrIHNob3VsZCBiZSBkZXBsb3llZCcgfSlcbiAgICAgICAgLm9wdGlvbigndGltZW91dE1pbnV0ZXMnLCB7IHR5cGU6ICdudW1iZXInLCBhbGlhczogJ3QnLCBkZXNjOiAnVGhlIHRpbWVvdXQgbWludXRlcycsIGRlZmF1bHQ6IDIwIH0pLFxuICAgIClcbiAgICAuY29tbWFuZChcbiAgICAgICdkaWZmIFtTVEFDS1MuLl0nLFxuICAgICAgJ0NvbXBhcmVzIHRoZSBzcGVjaWZpZWQgc3RhY2sgd2l0aCB0aGUgZGVwbG95ZWQgc3RhY2sgb3IgYSBsb2NhbCB0ZW1wbGF0ZSBmaWxlLCBhbmQgcmV0dXJucyB3aXRoIHN0YXR1cyAxIGlmIGFueSBkaWZmZXJlbmNlIGlzIGZvdW5kJyxcbiAgICAgICh5YXJncykgPT5cbiAgICAgICAgeWFyZ3NcbiAgICAgICAgICAub3B0aW9uKCdyZWdpb24nLCB7IHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ3InLCBkZXNjOiAnVGhlIHJlZ2lvbiB3aGVyZSB0aGUgc3RhY2sgaXMgZXN0YWJsaXNoZWQnIH0pXG4gICAgICAgICAgLm9wdGlvbigncGF0aCcsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYWxpYXM6ICdwJyxcbiAgICAgICAgICAgIGRlc2M6ICdUaGUgcGF0aCB0byB0aGUgdGVtcGxhdGUgdG8gY29tcGFyZSB3aXRoJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcuL2Nkay5vdXQnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignY29udGV4dC1saW5lcycsIHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgZGVzYzogJ051bWJlciBvZiBjb250ZXh0IGxpbmVzIHRvIGluY2x1ZGUgaW4gYXJiaXRyYXJ5IEpTT04gZGlmZiByZW5kZXJpbmcnLFxuICAgICAgICAgICAgZGVmYXVsdDogMyxcbiAgICAgICAgICB9KSxcbiAgICApXG4gICAgLmNvbW1hbmQoJ2Rlc3Ryb3kgW1NUQUNLUy4uXScsICdEZXN0cm95IHRoZSBzdGFjayhzKSBuYW1lZCBTVEFDS1MnLCAoeWFyZ3MpID0+XG4gICAgICB5YXJncy5vcHRpb24oJ3JlZ2lvbicsIHsgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAncicsIGRlc2M6ICdUaGUgcmVnaW9uIHdoZXJlIHRoZSBzdGFjayBpcyBlc3RhYmxpc2hlZCcgfSlcbiAgICAgICAgICAgIC5vcHRpb24oJ3F1aWV0Jywge1xuICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgIGFsaWFzOiAncScsXG4gICAgICAgICAgICAgIGRlc2M6ICdkZXN0cm95IHdpdGhvdXQgY29uZmlybScsXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9KSxcbiAgICApXG4gICAgLmNvbW1hbmQoJ2NvbmZpZycsICdTZXQgeW91ciByb3MgYWNjb3VudCBjb25maWd1cmF0aW9uLicsICh5YXJncykgPT5cbiAgICAgIHlhcmdzLm9wdGlvbignZ2xvYmFsJywge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIGFsaWFzOiAnZycsXG4gICAgICAgIGRlc2M6ICd3aGV0aGVyIHRoZSBjb25maWcgc2hvdWxkIGJlIHN0cm9lZCBpbiBnbG9iYWwgZW52JyxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB9KSxcbiAgICApXG4gICAgLnZlcnNpb24odmVyc2lvbi5ESVNQTEFZX1ZFUlNJT04pXG4gICAgLmRlbWFuZENvbW1hbmQoMSwgJycpIC8vIGp1c3QgcHJpbnQgaGVscFxuICAgIC5yZWNvbW1lbmRDb21tYW5kcygpXG4gICAgLmhlbHAoKVxuICAgIC5hbGlhcygnaCcsICdoZWxwJylcbiAgICAuZXBpbG9ndWUoXG4gICAgICBbXG4gICAgICAgICdJZiB5b3VyIGFwcCBoYXMgYSBzaW5nbGUgc3RhY2ssIHRoZXJlIGlzIG5vIG5lZWQgdG8gc3BlY2lmeSB0aGUgc3RhY2sgbmFtZScsXG4gICAgICAgICdJZiBvbmUgb2YgY2RrLmpzb24gb3Igfi8uY2RrLmpzb24gZXhpc3RzLCBvcHRpb25zIHNwZWNpZmllZCB0aGVyZSB3aWxsIGJlIHVzZWQgYXMgZGVmYXVsdHMuIFNldHRpbmdzIGluIGNkay5qc29uIHRha2UgcHJlY2VkZW5jZS4nLFxuICAgICAgXS5qb2luKCdcXG5cXG4nKSxcbiAgICApLmFyZ3Y7XG59XG5cbmlmICghcHJvY2Vzcy5zdGRvdXQuaXNUVFkpIHtcbiAgY29sb3JzLmRpc2FibGUoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdENvbW1hbmRMaW5lKCkge1xuICBjb25zdCBhcmd2ID0gYXdhaXQgcGFyc2VDb21tYW5kTGluZUFyZ3VtZW50cygpO1xuICBpZiAoYXJndi52ZXJib3NlKSB7XG4gICAgc2V0TG9nTGV2ZWwoYXJndi52ZXJib3NlKTtcbiAgfVxuICBkZWJ1ZygnQ0RLIHRvb2xraXQgdmVyc2lvbjonLCB2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTik7XG4gIGRlYnVnKCdDb21tYW5kIGxpbmUgYXJndW1lbnRzOicsIGFyZ3YpO1xuXG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbihhcmd2KTtcbiAgYXdhaXQgY29uZmlndXJhdGlvbi5sb2FkKCk7XG5cbiAgY29uc3QgY2xvdWRFeGVjdXRhYmxlID0gbmV3IENsb3VkRXhlY3V0YWJsZSh7XG4gICAgY29uZmlndXJhdGlvbixcbiAgICBzeW50aGVzaXplcjogZXhlY1Byb2dyYW0sXG4gIH0pO1xuXG4gIGNvbnN0IGNtZCA9IFN0cmluZyhhcmd2Ll9bMF0pO1xuXG4gIGNvbnN0IHJldHVyblZhbHVlID0gYXdhaXQgbWFpbihjbWQsIGFyZ3YpO1xuICBpZiAodHlwZW9mIHJldHVyblZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB0b0pzb25PcllhbWwocmV0dXJuVmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiByZXR1cm5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gbWFpbihjb21tYW5kOiBzdHJpbmcsIGFyZ3M6IGFueSk6IFByb21pc2U8bnVtYmVyIHwgc3RyaW5nIHwge30gfCB2b2lkPiB7XG4gICAgYXJncy5TVEFDS1MgPSBhcmdzLlNUQUNLUyB8fCBbXTtcblxuICAgIGNvbnN0IGNsaSA9IG5ldyBDZGtUb29sa2l0KHtcbiAgICAgIGNsb3VkRXhlY3V0YWJsZSxcbiAgICAgIHZlcmJvc2U6IGFyZ3YudHJhY2UgfHwgYXJndi52ZXJib3NlID4gMCxcbiAgICAgIGlnbm9yZUVycm9yczogYXJndlsnaWdub3JlLWVycm9ycyddLFxuICAgICAgc3RyaWN0OiBhcmd2LnN0cmljdCxcbiAgICAgIGNvbmZpZ3VyYXRpb24sXG4gICAgfSk7XG5cbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgIGNhc2UgJ2xzJzpcbiAgICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgICByZXR1cm4gYXdhaXQgY2xpLmxpc3QoYXJncy5TVEFDS1MpO1xuXG4gICAgICBjYXNlICdjb25maWcnOlxuICAgICAgICAvLyB3YWl0IHVzZXIgZm9yIHJvcyBpbnB1dFxuICAgICAgICBhd2FpdCBjbGkuY29uZmlnKGFyZ3MuZ2xvYmFsKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdkaWZmJzpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5kaWZmKHtcbiAgICAgICAgICByZWdpb246IGFyZ3MucmVnaW9uLFxuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgIHBhdGg6IGFyZ3MucGF0aCxcbiAgICAgICAgICBjb250ZXh0TGluZXM6IGFyZ3MuY29udGV4dExpbmVzLFxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZGVwbG95JzpcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyTWFwOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlciBvZiBhcmdzLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtZXRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlID0gKHBhcmFtZXRlciBhcyBzdHJpbmcpLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBwYXJhbWV0ZXJNYXBba2V5VmFsdWVbMF1dID0ga2V5VmFsdWUuc2xpY2UoMSkuam9pbignPScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBjbGkuZGVwbG95KHtcbiAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJNYXAsXG4gICAgICAgICAgZXhjbHVzaXZlbHk6IGFyZ3MuZXhjbHVzaXZlbHksXG4gICAgICAgICAgdGltZW91dDogYXJncy50aW1lb3V0TWludXRlcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnZGVzdHJveSc6XG4gICAgICAgIGF3YWl0IGNsaS5kZXN0cm95KHtcbiAgICAgICAgICByZWdpb246IGFyZ3MucmVnaW9uLFxuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgIHF1aWV0OiBhcmdzLnF1aWV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdzeW50aGVzaXplJzpcbiAgICAgIGNhc2UgJ3N5bnRoJzpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5zeW50aChhcmdzLlNUQUNLUywgYXJncy5leGNsdXNpdmVseSk7XG5cbiAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAvLyBjb25zdCBsYW5ndWFnZSA9IGNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuZ2V0KFsnbGFuZ3VhZ2UnXSk7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlID0gYXJncy5sYW5ndWFnZTtcbiAgICAgICAgaWYgKGFyZ3MubGlzdCkge1xuICAgICAgICAgIHJldHVybiBhd2FpdCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcyhsYW5ndWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaUluaXQoYXJncy5URU1QTEFURSwgbGFuZ3VhZ2UsIHVuZGVmaW5lZCwgYXJncy5nZW5lcmF0ZU9ubHkpO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3ZlcnNpb24nOlxuICAgICAgICByZXR1cm4gZGF0YSh2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTik7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBjb21tYW5kOiAnICsgY29tbWFuZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9Kc29uT3JZYW1sKG9iamVjdDogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gc2VyaWFsaXplU3RydWN0dXJlKG9iamVjdCwgYXJndi5qc29uKTtcbiAgfVxufVxuXG5pbml0Q29tbWFuZExpbmUoKVxuICAudGhlbigodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAvLyBwcm9jZXNzLmV4aXRDb2RlID0gdmFsdWU7XG4gICAgfVxuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIGVycm9yKGVyci5tZXNzYWdlKTtcbiAgICBpZiAoZXJyLnN0YWNrKSB7XG4gICAgICBkZWJ1ZyhlcnIuc3RhY2spO1xuICAgIH1cbiAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTtcbiAgfSk7XG4iXX0=