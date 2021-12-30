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
    const initTemplateLanguages = await init_1.availableInitLanguages;
    return yargs
        .env('CDK')
        .usage('Usage: ros-cdk -a [cdk-app] COMMAND')
        .option('app', {
        type: 'string',
        desc: 'REQUIRED: command-line for executing your app or a cloud assembly directory (e.g. "npx ts-node bin/test.ts")',
        requiresArg: true
    })
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
        choices: initTemplateLanguages,
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
        .option('timeoutMinutes', { type: 'number', alias: 't', desc: 'The timeout minutes', default: 20 })
        .option('sync', { type: 'boolean', desc: 'Sync deploy stack', default: false })
        .option('skip-if-no-changes', { type: 'boolean', desc: 'When stack do not contains any new changes skip stack checks', default: false })
        .option('outputs-file', { type: 'boolean', desc: 'Stack outputs will be written as JSON', default: false }))
        .command('diff [STACKS..]', 'Compares the specified stack with the deployed stack or a local template file, and returns with status 1 if any difference is found', (yargs) => yargs
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
        .command('destroy [STACKS..]', 'Destroy the stack(s) named STACKS', (yargs) => yargs
        .option('quiet', {
        type: 'boolean',
        alias: 'q',
        desc: 'destroy without confirm',
        default: false
    })
        .option('sync', { type: 'boolean', desc: 'sync destroy stack', default: false }))
        .command('event [STACK..]', 'Get resource events within the resource STACK', (yargs) => yargs
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
        .command('output [STACK..]', 'Get the output information of resource stack')
        .command('resource [STACKS..]', 'Get resources in the resource STACKS')
        .command('list-stacks [STACKS..]', 'Get resources in the resource STACKS', (yargs) => yargs
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
        desc: 'Whether the config should be stored in global env',
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
        desc: 'Whether the config should be stored in global env',
        default: false,
    }))
        .command('generate-stack-file', 'The resource stack information is automatically generated')
        .command('config-set', 'Set your alicloud account configuration non interactive mode.', (yargs) => yargs.option('global', {
        type: 'boolean',
        alias: 'g',
        desc: 'Whether the config should be stored in global env',
        default: false,
    })
        .option('endpoint', {
        type: 'string',
        alias: 'e',
        desc: 'Specify the service address that initiated the request',
        default: 'https://ros.aliyuncs.com',
    })
        .option('region', {
        type: 'string',
        alias: 'r',
        desc: 'Specify region information for managing resources',
        default: 'cn-hangzhou',
    })
        .option('mode', {
        type: 'string',
        alias: 'm',
        demand: true,
        desc: 'use `--mode {AK|StsToken|RamRoleArn|EcsRamRole}` to assign authenticate mode',
    })
        .option('access-key-id', {
        type: 'string',
        alias: 'ak',
        desc: 'use `--access-key-id AccessKeyId` to assign AccessKeyId, required in AK/StsToken/RamRoleArn mode',
    })
        .option('access-key-secret', {
        type: 'string',
        alias: 'sk',
        desc: 'use `--access-key-secret AccessKeySecret` to assign AccessKeySecret, required in AK/StsToken/RamRoleArn mode',
    })
        .option('sts-token', {
        type: 'string',
        alias: 'sts',
        desc: 'use `--sts-token StsToken` to assign StsToken, required in StsToken mode',
    })
        .option('ram-role-arn', {
        type: 'string',
        alias: 'arn',
        desc: 'use `--ram-role-arn RamRoleArn` to assign RamRoleArn(eg: acs:ram::******:role/******), required in RamRoleArn mode',
    })
        .option('role-session-name', {
        type: 'string',
        alias: 's',
        desc: 'use `--role-session-name RoleSessionName` to assign RoleSessionName, required in RamRoleArn mode',
    })
        .option('ram-role-name', {
        type: 'string',
        alias: 'role',
        desc: 'use `--ram-role-name RamRoleName` to assign RamRoleName, required in EcsRamRole mode',
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
            case 'generate-stack-file':
                return await cli.generateStackInfo();
            case 'config':
                // wait user for ros input
                await cli.config(args.global);
                return;
            case 'config-set':
                // wait user for ros input
                await cli.configSet({
                    global: args.global,
                    endpoint: args.endpoint,
                    region: args.region,
                    mode: args.mode,
                    ak: args['access-key-id'],
                    sk: args['access-key-secret'],
                    sts: args['sts-token'],
                    ramRoleArn: args['ram-role-arn'],
                    roleSessionName: args['role-session-name'],
                    ramRoleName: args['ram-role-name']
                });
                return;
            case 'diff':
                return await cli.diff({
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
                    sync: args.sync,
                    outputsFile: args['outputs-file'],
                    skipIfNoChanges: args['skip-if-no-changes']
                });
                return;
            case 'destroy':
                await cli.destroy({
                    stackNames: args.STACKS,
                    quiet: args.quiet,
                    sync: args.sync
                });
                return;
            case 'event':
                await cli.event({
                    stackName: args['STACK'],
                    logicalResourceId: args['logical-resource-id'],
                    pageNumber: args['page-number'],
                    pageSize: args['page-size']
                });
                return;
            case 'output':
                await cli.output({
                    stackName: args['STACK']
                });
                return;
            case 'resource':
                await cli.resource({
                    stackNames: args.STACKS
                });
                return;
            case 'list-stacks':
                await cli.listStacks({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFFL0Isa0VBQThEO0FBQzlELDBDQUE4QztBQUM5QyxvREFBZ0Q7QUFDaEQsc0NBQXVGO0FBQ3ZGLDRDQUFpRTtBQUNqRSxnREFBc0Q7QUFDdEQsOENBQWdEO0FBQ2hELDBDQUEwQztBQUUxQyxLQUFLLFVBQVUseUJBQXlCO0lBQ3RDLE1BQU0scUJBQXFCLEdBQUcsTUFBTSw2QkFBc0IsQ0FBQztJQUMzRCxPQUFPLEtBQUs7U0FDVCxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ1YsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO1NBQzVDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSw4R0FBOEc7UUFDcEgsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQztTQUNELE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDZCxJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLHNFQUFzRTtRQUM1RSxPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7U0FDRCxNQUFNLENBQUMsZUFBZSxFQUFFO1FBQ3ZCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsdUVBQXVFO0tBQzlFLENBQUM7U0FDRCxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQztTQUM1RSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsdUNBQXVDLEVBQUUsQ0FBQztTQUNwRixLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ2hCLE9BQU8sQ0FDTixpQkFBaUIsRUFDakIsMkdBQTJHLEVBQzNHLENBQUMsS0FB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QUMsS0FBSyxFQUFFLEVBQUU7SUFDZCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsT0FBTztLQUNSO0lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2I7U0FBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUNwQyw0QkFBNEI7S0FDN0I7QUFDSCxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNiLGVBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO1FBQ2IsZUFBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCAqIGFzIHlhcmdzIGZyb20gJ3lhcmdzJztcblxuaW1wb3J0IHsgQ2xvdWRFeGVjdXRhYmxlIH0gZnJvbSAnLi4vbGliL2FwaS9jbG91ZC1leGVjdXRhYmxlJztcbmltcG9ydCB7IGV4ZWNQcm9ncmFtIH0gZnJvbSAnLi4vbGliL2FwaS9leGVjJztcbmltcG9ydCB7IENka1Rvb2xraXQgfSBmcm9tICcuLi9saWIvY2RrLXRvb2xraXQnO1xuaW1wb3J0IHsgYXZhaWxhYmxlSW5pdExhbmd1YWdlcywgY2xpSW5pdCwgcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMgfSBmcm9tICcuLi9saWIvaW5pdCc7XG5pbXBvcnQgeyBkYXRhLCBkZWJ1ZywgZXJyb3IsIHNldExvZ0xldmVsIH0gZnJvbSAnLi4vbGliL2xvZ2dpbmcnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3RydWN0dXJlIH0gZnJvbSAnLi4vbGliL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbGliL3NldHRpbmdzJztcbmltcG9ydCAqIGFzIHZlcnNpb24gZnJvbSAnLi4vbGliL3ZlcnNpb24nO1xuXG5hc3luYyBmdW5jdGlvbiBwYXJzZUNvbW1hbmRMaW5lQXJndW1lbnRzKCkge1xuICBjb25zdCBpbml0VGVtcGxhdGVMYW5ndWFnZXMgPSBhd2FpdCBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzO1xuICByZXR1cm4geWFyZ3NcbiAgICAuZW52KCdDREsnKVxuICAgIC51c2FnZSgnVXNhZ2U6IHJvcy1jZGsgLWEgW2Nkay1hcHBdIENPTU1BTkQnKVxuICAgIC5vcHRpb24oJ2FwcCcsIHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGRlc2M6ICdSRVFVSVJFRDogY29tbWFuZC1saW5lIGZvciBleGVjdXRpbmcgeW91ciBhcHAgb3IgYSBjbG91ZCBhc3NlbWJseSBkaXJlY3RvcnkgKGUuZy4gXCJucHggdHMtbm9kZSBiaW4vdGVzdC50c1wiKScsXG4gICAgICAgIHJlcXVpcmVzQXJnOiB0cnVlXG4gICAgfSlcbiAgICAub3B0aW9uKCdqc29uJywge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgYWxpYXM6ICdqJyxcbiAgICAgIGRlc2M6ICdVc2UgSlNPTiBvdXRwdXQgaW5zdGVhZCBvZiBZQU1MIHdoZW4gdGVtcGxhdGVzIGFyZSBwcmludGVkIHRvIFNURE9VVCcsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9KVxuICAgIC5vcHRpb24oJ2lnbm9yZS1lcnJvcnMnLCB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2M6ICdJZ25vcmVzIHN5bnRoZXNpcyBlcnJvcnMsIHdoaWNoIHdpbGwgbGlrZWx5IHByb2R1Y2UgYW4gaW52YWxpZCBvdXRwdXQnLFxuICAgIH0pXG4gICAgLm9wdGlvbigndHJhY2UnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1ByaW50IHRyYWNlIGZvciBzdGFjayB3YXJuaW5ncycgfSlcbiAgICAub3B0aW9uKCdzdHJpY3QnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ0RvIG5vdCBjb25zdHJ1Y3Qgc3RhY2tzIHdpdGggd2FybmluZ3MnIH0pXG4gICAgLmNvdW50KCd2ZXJib3NlJylcbiAgICAuY29tbWFuZChcbiAgICAgICdpbml0IFtURU1QTEFURV0nLFxuICAgICAgJ0NyZWF0ZSBhIG5ldywgZW1wdHkgQ0RLIHByb2plY3QgZnJvbSBhIHRlbXBsYXRlLiBJbnZva2VkIHdpdGhvdXQgVEVNUExBVEUsIHRoZSBhcHAgdGVtcGxhdGUgd2lsbCBiZSB1c2VkLicsXG4gICAgICAoeWFyZ3MpID0+XG4gICAgICAgIHlhcmdzXG4gICAgICAgICAgLm9wdGlvbignbGFuZ3VhZ2UnLCB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGFsaWFzOiAnbCcsXG4gICAgICAgICAgICBkZXNjOiAnVGhlIGxhbmd1YWdlIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXcgcHJvamVjdCAoZGVmYXVsdCBjYW4gYmUgY29uZmlndXJlZCBpbiB+Ly5jZGsuanNvbiknLFxuICAgICAgICAgICAgY2hvaWNlczogaW5pdFRlbXBsYXRlTGFuZ3VhZ2VzLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignbGlzdCcsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnTGlzdCB0aGUgYXZhaWxhYmxlIHRlbXBsYXRlcycgfSlcbiAgICAgICAgICAub3B0aW9uKCdnZW5lcmF0ZS1vbmx5Jywge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICBkZXNjOlxuICAgICAgICAgICAgICAnSWYgdHJ1ZSwgb25seSBnZW5lcmF0ZXMgcHJvamVjdCBmaWxlcywgd2l0aG91dCBleGVjdXRpbmcgYWRkaXRpb25hbCBvcGVyYXRpb25zIHN1Y2ggYXMgc2V0dGluZyB1cCBhIGdpdCByZXBvLCBpbnN0YWxsaW5nIGRlcGVuZGVuY2llcyBvciBjb21waWxpbmcgdGhlIHByb2plY3QnLFxuICAgICAgICAgIH0pLFxuICAgIClcbiAgICAuY29tbWFuZChbJ2xpc3QgW1NUQUNLUy4uXScsICdscyBbU1RBQ0tTLi5dJ10sICdMaXN0cyBhbGwgc3RhY2tzIGluIHRoZSBhcHAnLCAoeWFyZ3MpID0+XG4gICAgICB5YXJncy5vcHRpb24oJ2xvbmcnLCB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIGFsaWFzOiAnbCcsXG4gICAgICAgIGRlc2M6ICdEaXNwbGF5IGVudmlyb25tZW50IGluZm9ybWF0aW9uIGZvciBlYWNoIHN0YWNrJyxcbiAgICAgIH0pLFxuICAgIClcbiAgICAuY29tbWFuZChcbiAgICAgIFsnc3ludGhlc2l6ZSBbU1RBQ0tTLi5dJywgJ3N5bnRoIFtTVEFDS1MuLl0nXSxcbiAgICAgICdTeW50aGVzaXplcyBhbmQgcHJpbnRzIHRoZSBST1MgdGVtcGxhdGUgZm9yIHRoaXMgc3RhY2snLFxuICAgICAgKHlhcmdzKSA9PlxuICAgICAgICB5YXJncy5vcHRpb24oJ2V4Y2x1c2l2ZWx5Jywge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBhbGlhczogJ2UnLFxuICAgICAgICAgIGRlc2M6IFwiT25seSBzeW50aGVzaXplIHJlcXVlc3RlZCBzdGFja3MsIGRvbid0IGluY2x1ZGUgZGVwZW5kZW5jaWVzXCIsXG4gICAgICAgIH0pLFxuICAgIClcbiAgICAuY29tbWFuZCgnZGVwbG95IFtTVEFDS1MuLl0nLCAnRGVwbG95cyB0aGUgc3RhY2socykgbmFtZWQgU1RBQ0tTIHRvIFJPUyBpbnRvIHlvdXIgYWxpY2xvdWQgYWNjb3VudCcsICh5YXJncykgPT5cbiAgICAgIHlhcmdzXG4gICAgICAgIC5vcHRpb24oJ3BhcmFtZXRlcnMnLCB7XG4gICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICBkZXNjOiAnQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHBhc3NlZCB0byBST1MgYXQgZGVwbG95IHRpbWUgKFNUQUNLOktFWT1WQUxVRSknLFxuICAgICAgICAgIG5hcmdzOiAxLFxuICAgICAgICAgIHJlcXVpcmVzQXJnOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHQ6IHt9LFxuICAgICAgICB9KVxuICAgICAgICAub3B0aW9uKCdleGNsdXNpdmVseScsIHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgYWxpYXM6ICdlJyxcbiAgICAgICAgICBkZXNjOiBcIk9ubHkgZGVwbG95IHJlcXVlc3RlZCBzdGFja3MsIGRvbid0IGluY2x1ZGUgZGVwZW5kZW5jaWVzXCIsXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb24oJ3RpbWVvdXRNaW51dGVzJywgeyB0eXBlOiAnbnVtYmVyJywgYWxpYXM6ICd0JywgZGVzYzogJ1RoZSB0aW1lb3V0IG1pbnV0ZXMnLCBkZWZhdWx0OiAyMCB9KVxuICAgICAgICAgIC5vcHRpb24oJ3N5bmMnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1N5bmMgZGVwbG95IHN0YWNrJywgZGVmYXVsdDogZmFsc2UgfSlcbiAgICAgICAgICAub3B0aW9uKCdza2lwLWlmLW5vLWNoYW5nZXMnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1doZW4gc3RhY2sgZG8gbm90IGNvbnRhaW5zIGFueSBuZXcgY2hhbmdlcyBza2lwIHN0YWNrIGNoZWNrcycsIGRlZmF1bHQ6IGZhbHNlIH0pXG4gICAgICAgICAgLm9wdGlvbignb3V0cHV0cy1maWxlJywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdTdGFjayBvdXRwdXRzIHdpbGwgYmUgd3JpdHRlbiBhcyBKU09OJywgZGVmYXVsdDogZmFsc2UgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKFxuICAgICAgJ2RpZmYgW1NUQUNLUy4uXScsXG4gICAgICAnQ29tcGFyZXMgdGhlIHNwZWNpZmllZCBzdGFjayB3aXRoIHRoZSBkZXBsb3llZCBzdGFjayBvciBhIGxvY2FsIHRlbXBsYXRlIGZpbGUsIGFuZCByZXR1cm5zIHdpdGggc3RhdHVzIDEgaWYgYW55IGRpZmZlcmVuY2UgaXMgZm91bmQnLFxuICAgICAgKHlhcmdzKSA9PlxuICAgICAgICB5YXJnc1xuICAgICAgICAgIC5vcHRpb24oJ3BhdGgnLCB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGFsaWFzOiAncCcsXG4gICAgICAgICAgICBkZXNjOiAnVGhlIHBhdGggdG8gdGhlIHRlbXBsYXRlIHRvIGNvbXBhcmUgd2l0aCcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnLi9jZGsub3V0JyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ2NvbnRleHQtbGluZXMnLCB7XG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIGRlc2M6ICdOdW1iZXIgb2YgY29udGV4dCBsaW5lcyB0byBpbmNsdWRlIGluIGFyYml0cmFyeSBKU09OIGRpZmYgcmVuZGVyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDMsXG4gICAgICAgICAgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKCdkZXN0cm95IFtTVEFDS1MuLl0nLCAnRGVzdHJveSB0aGUgc3RhY2socykgbmFtZWQgU1RBQ0tTJywgKHlhcmdzKSA9PlxuICAgICAgeWFyZ3NcbiAgICAgICAgICAgIC5vcHRpb24oJ3F1aWV0Jywge1xuICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgIGFsaWFzOiAncScsXG4gICAgICAgICAgICAgIGRlc2M6ICdkZXN0cm95IHdpdGhvdXQgY29uZmlybScsXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ3N5bmMnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ3N5bmMgZGVzdHJveSBzdGFjaycsIGRlZmF1bHQ6IGZhbHNlIH0pLFxuICAgIClcbiAgICAuY29tbWFuZCgnZXZlbnQgW1NUQUNLLi5dJywgJ0dldCByZXNvdXJjZSBldmVudHMgd2l0aGluIHRoZSByZXNvdXJjZSBTVEFDSycsICh5YXJncykgPT5cbiAgICAgIHlhcmdzXG4gICAgICAub3B0aW9uKCdsb2dpY2FsLXJlc291cmNlLWlkJywge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgZGVzYzogJ1N0YWNrIGxvZ2ljYWwgcmVzb3VyY2UgaWQnXG4gICAgICB9KVxuICAgICAgLm9wdGlvbigncGFnZS1udW1iZXInLCB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBhbGlhczogJ24nLFxuICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiB0aGUgcGFnZSB0byByZXR1cm4sIFBhZ2VzIHN0YXJ0IGZyb20gcGFnZSAxLiBEZWZhdWx0IHZhbHVlOjEnLFxuICAgICAgfSlcbiAgICAgIC5vcHRpb24oJ3BhZ2Utc2l6ZScsIHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGFsaWFzOiAncycsXG4gICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIGVudHJpZXMgdG8gcmV0dXJuIG9uIGVhY2ggcGFnZSwgTWF4aW11bSB2YWx1ZTogNTAuIERlZmF1bHQgdmFsdWU6IDEwJyxcbiAgICAgIH0pXG4gICAgKVxuICAgIC5jb21tYW5kKCdvdXRwdXQgW1NUQUNLLi5dJywgJ0dldCB0aGUgb3V0cHV0IGluZm9ybWF0aW9uIG9mIHJlc291cmNlIHN0YWNrJylcbiAgICAuY29tbWFuZCgncmVzb3VyY2UgW1NUQUNLUy4uXScsICdHZXQgcmVzb3VyY2VzIGluIHRoZSByZXNvdXJjZSBTVEFDS1MnKVxuICAgIC5jb21tYW5kKCdsaXN0LXN0YWNrcyBbU1RBQ0tTLi5dJywgJ0dldCByZXNvdXJjZXMgaW4gdGhlIHJlc291cmNlIFNUQUNLUycsICh5YXJncykgPT5cbiAgICAgIHlhcmdzXG4gICAgICAub3B0aW9uKCdhbGwnLCB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgYWxpYXM6ICdhJyxcbiAgICAgICAgZGVzYzogJ0dldCBhbGwgU3RhY2tzIGluIGFjY291bnQgc2V0IGNvbmZpZyBSZWdpb24uJyxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB9KVxuICAgICAgLm9wdGlvbigncGFnZS1udW1iZXInLCB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBhbGlhczogJ24nLFxuICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiB0aGUgcGFnZSB0byByZXR1cm4sIFBhZ2VzIHN0YXJ0IGZyb20gcGFnZSAxLiBEZWZhdWx0IHZhbHVlOjEnLFxuICAgICAgfSlcbiAgICAgIC5vcHRpb24oJ3BhZ2Utc2l6ZScsIHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGFsaWFzOiAncycsXG4gICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIGVudHJpZXMgdG8gcmV0dXJuIG9uIGVhY2ggcGFnZSwgTWF4aW11bSB2YWx1ZTogMTAwLiBEZWZhdWx0IHZhbHVlOiAxMCcsXG4gICAgICB9KVxuICAgIClcbiAgICAuY29tbWFuZCgnbG9hZC1jb25maWcnLCAnTG9hZCBBbGl5dW4gQ0xJIGNvbmZpZyB0byBDREsuJywgKHlhcmdzKSA9PlxuICAgICAgeWFyZ3Mub3B0aW9uKCdnbG9iYWwnLCB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgYWxpYXM6ICdnJyxcbiAgICAgICAgZGVzYzogJ1doZXRoZXIgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3RvcmVkIGluIGdsb2JhbCBlbnYnLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgICAub3B0aW9uKCdmaWxlLXBhdGgnLCB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBhbGlhczogJ2YnLFxuICAgICAgICBkZXNjOiAnU3BlY2lmeSB0aGUgY2xpIGNvbmZpZ3VyYXRpb24gZmlsZSBwYXRoIHRvIGxvYWQnLFxuICAgICAgfSlcbiAgICApXG4gICAgLmNvbW1hbmQoJ2NvbmZpZycsICdTZXQgeW91ciBhbGljbG91ZCBhY2NvdW50IGNvbmZpZ3VyYXRpb24uJywgKHlhcmdzKSA9PlxuICAgICAgeWFyZ3Mub3B0aW9uKCdnbG9iYWwnLCB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgYWxpYXM6ICdnJyxcbiAgICAgICAgZGVzYzogJ1doZXRoZXIgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3RvcmVkIGluIGdsb2JhbCBlbnYnLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIH0pLFxuICAgIClcbiAgICAgIC5jb21tYW5kKCdnZW5lcmF0ZS1zdGFjay1maWxlJywgJ1RoZSByZXNvdXJjZSBzdGFjayBpbmZvcm1hdGlvbiBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCcpXG4gICAgICAuY29tbWFuZCgnY29uZmlnLXNldCcsICdTZXQgeW91ciBhbGljbG91ZCBhY2NvdW50IGNvbmZpZ3VyYXRpb24gbm9uIGludGVyYWN0aXZlIG1vZGUuJywgKHlhcmdzKSA9PlxuICAgICAgICAgIHlhcmdzLm9wdGlvbignZ2xvYmFsJywge1xuICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgIGFsaWFzOiAnZycsXG4gICAgICAgICAgICAgIGRlc2M6ICdXaGV0aGVyIHRoZSBjb25maWcgc2hvdWxkIGJlIHN0b3JlZCBpbiBnbG9iYWwgZW52JyxcbiAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdlbmRwb2ludCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAnZScsXG4gICAgICAgICAgICAgIGRlc2M6ICdTcGVjaWZ5IHRoZSBzZXJ2aWNlIGFkZHJlc3MgdGhhdCBpbml0aWF0ZWQgdGhlIHJlcXVlc3QnLFxuICAgICAgICAgICAgICBkZWZhdWx0OiAnaHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ3JlZ2lvbicsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAncicsXG4gICAgICAgICAgICAgIGRlc2M6ICdTcGVjaWZ5IHJlZ2lvbiBpbmZvcm1hdGlvbiBmb3IgbWFuYWdpbmcgcmVzb3VyY2VzJyxcbiAgICAgICAgICAgICAgZGVmYXVsdDogJ2NuLWhhbmd6aG91JyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ21vZGUnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBhbGlhczogJ20nLFxuICAgICAgICAgICAgICBkZW1hbmQ6IHRydWUsXG4gICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tbW9kZSB7QUt8U3RzVG9rZW58UmFtUm9sZUFybnxFY3NSYW1Sb2xlfWAgdG8gYXNzaWduIGF1dGhlbnRpY2F0ZSBtb2RlJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ2FjY2Vzcy1rZXktaWQnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBhbGlhczogJ2FrJyxcbiAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1hY2Nlc3Mta2V5LWlkIEFjY2Vzc0tleUlkYCB0byBhc3NpZ24gQWNjZXNzS2V5SWQsIHJlcXVpcmVkIGluIEFLL1N0c1Rva2VuL1JhbVJvbGVBcm4gbW9kZScsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdhY2Nlc3Mta2V5LXNlY3JldCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAnc2snLFxuICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLWFjY2Vzcy1rZXktc2VjcmV0IEFjY2Vzc0tleVNlY3JldGAgdG8gYXNzaWduIEFjY2Vzc0tleVNlY3JldCwgcmVxdWlyZWQgaW4gQUsvU3RzVG9rZW4vUmFtUm9sZUFybiBtb2RlJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ3N0cy10b2tlbicsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAnc3RzJyxcbiAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1zdHMtdG9rZW4gU3RzVG9rZW5gIHRvIGFzc2lnbiBTdHNUb2tlbiwgcmVxdWlyZWQgaW4gU3RzVG9rZW4gbW9kZScsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdyYW0tcm9sZS1hcm4nLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBhbGlhczogJ2FybicsXG4gICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tcmFtLXJvbGUtYXJuIFJhbVJvbGVBcm5gIHRvIGFzc2lnbiBSYW1Sb2xlQXJuKGVnOiBhY3M6cmFtOjoqKioqKio6cm9sZS8qKioqKiopLCByZXF1aXJlZCBpbiBSYW1Sb2xlQXJuIG1vZGUnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbigncm9sZS1zZXNzaW9uLW5hbWUnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBhbGlhczogJ3MnLFxuICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLXJvbGUtc2Vzc2lvbi1uYW1lIFJvbGVTZXNzaW9uTmFtZWAgdG8gYXNzaWduIFJvbGVTZXNzaW9uTmFtZSwgcmVxdWlyZWQgaW4gUmFtUm9sZUFybiBtb2RlJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ3JhbS1yb2xlLW5hbWUnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBhbGlhczogJ3JvbGUnLFxuICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLXJhbS1yb2xlLW5hbWUgUmFtUm9sZU5hbWVgIHRvIGFzc2lnbiBSYW1Sb2xlTmFtZSwgcmVxdWlyZWQgaW4gRWNzUmFtUm9sZSBtb2RlJyxcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgIC52ZXJzaW9uKHZlcnNpb24uRElTUExBWV9WRVJTSU9OKVxuICAgIC5kZW1hbmRDb21tYW5kKDEsICcnKSAvLyBqdXN0IHByaW50IGhlbHBcbiAgICAucmVjb21tZW5kQ29tbWFuZHMoKVxuICAgIC5oZWxwKClcbiAgICAuYWxpYXMoJ2gnLCAnaGVscCcpXG4gICAgLmVwaWxvZ3VlKFxuICAgICAgW1xuICAgICAgICAnSWYgeW91ciBhcHAgaGFzIGEgc2luZ2xlIHN0YWNrLCB0aGVyZSBpcyBubyBuZWVkIHRvIHNwZWNpZnkgdGhlIHN0YWNrIG5hbWUnLFxuICAgICAgICAnSWYgb25lIG9mIGNkay5qc29uIG9yIH4vLmNkay5qc29uIGV4aXN0cywgb3B0aW9ucyBzcGVjaWZpZWQgdGhlcmUgd2lsbCBiZSB1c2VkIGFzIGRlZmF1bHRzLiBTZXR0aW5ncyBpbiBjZGsuanNvbiB0YWtlIHByZWNlZGVuY2UuJyxcbiAgICAgIF0uam9pbignXFxuXFxuJyksXG4gICAgKS5hcmd2O1xufVxuXG5pZiAoIXByb2Nlc3Muc3Rkb3V0LmlzVFRZKSB7XG4gIGNvbG9ycy5kaXNhYmxlKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRDb21tYW5kTGluZSgpIHtcbiAgY29uc3QgYXJndiA9IGF3YWl0IHBhcnNlQ29tbWFuZExpbmVBcmd1bWVudHMoKTtcbiAgaWYgKGFyZ3YudmVyYm9zZSkge1xuICAgIHNldExvZ0xldmVsKGFyZ3YudmVyYm9zZSk7XG4gIH1cbiAgZGVidWcoJ0NESyB0b29sa2l0IHZlcnNpb246JywgdmVyc2lvbi5ESVNQTEFZX1ZFUlNJT04pO1xuICBkZWJ1ZygnQ29tbWFuZCBsaW5lIGFyZ3VtZW50czonLCBhcmd2KTtcblxuICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oYXJndik7XG4gIGF3YWl0IGNvbmZpZ3VyYXRpb24ubG9hZCgpO1xuXG4gIGNvbnN0IGNsb3VkRXhlY3V0YWJsZSA9IG5ldyBDbG91ZEV4ZWN1dGFibGUoe1xuICAgIGNvbmZpZ3VyYXRpb24sXG4gICAgc3ludGhlc2l6ZXI6IGV4ZWNQcm9ncmFtLFxuICB9KTtcblxuICBjb25zdCBjbWQgPSBTdHJpbmcoYXJndi5fWzBdKTtcblxuICBjb25zdCByZXR1cm5WYWx1ZSA9IGF3YWl0IG1haW4oY21kLCBhcmd2KTtcbiAgaWYgKHR5cGVvZiByZXR1cm5WYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gdG9Kc29uT3JZYW1sKHJldHVyblZhbHVlKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcmV0dXJuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG1haW4oY29tbWFuZDogc3RyaW5nLCBhcmdzOiBhbnkpOiBQcm9taXNlPG51bWJlciB8IHN0cmluZyB8IHt9IHwgdm9pZD4ge1xuICAgIGFyZ3MuU1RBQ0tTID0gYXJncy5TVEFDS1MgfHwgW107XG5cbiAgICBjb25zdCBjbGkgPSBuZXcgQ2RrVG9vbGtpdCh7XG4gICAgICBjbG91ZEV4ZWN1dGFibGUsXG4gICAgICB2ZXJib3NlOiBhcmd2LnRyYWNlIHx8IGFyZ3YudmVyYm9zZSA+IDAsXG4gICAgICBpZ25vcmVFcnJvcnM6IGFyZ3ZbJ2lnbm9yZS1lcnJvcnMnXSxcbiAgICAgIHN0cmljdDogYXJndi5zdHJpY3QsXG4gICAgICBjb25maWd1cmF0aW9uLFxuICAgIH0pO1xuXG4gICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICBjYXNlICdscyc6XG4gICAgICBjYXNlICdsaXN0JzpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5saXN0KGFyZ3MuU1RBQ0tTKTtcblxuICAgICAgY2FzZSAnZ2VuZXJhdGUtc3RhY2stZmlsZSc6XG4gICAgICAgIHJldHVybiBhd2FpdCBjbGkuZ2VuZXJhdGVTdGFja0luZm8oKTtcblxuICAgICAgY2FzZSAnY29uZmlnJzpcbiAgICAgICAgLy8gd2FpdCB1c2VyIGZvciByb3MgaW5wdXRcbiAgICAgICAgYXdhaXQgY2xpLmNvbmZpZyhhcmdzLmdsb2JhbCk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnY29uZmlnLXNldCc6XG4gICAgICAgIC8vIHdhaXQgdXNlciBmb3Igcm9zIGlucHV0XG4gICAgICAgIGF3YWl0IGNsaS5jb25maWdTZXQoe1xuICAgICAgICAgICAgZ2xvYmFsOiBhcmdzLmdsb2JhbCxcbiAgICAgICAgICAgIGVuZHBvaW50OiBhcmdzLmVuZHBvaW50LFxuICAgICAgICAgICAgcmVnaW9uOiBhcmdzLnJlZ2lvbixcbiAgICAgICAgICAgIG1vZGU6IGFyZ3MubW9kZSxcbiAgICAgICAgICAgIGFrOiBhcmdzWydhY2Nlc3Mta2V5LWlkJ10sXG4gICAgICAgICAgICBzazogYXJnc1snYWNjZXNzLWtleS1zZWNyZXQnXSxcbiAgICAgICAgICAgIHN0czogYXJnc1snc3RzLXRva2VuJ10sXG4gICAgICAgICAgICByYW1Sb2xlQXJuOiBhcmdzWydyYW0tcm9sZS1hcm4nXSxcbiAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogYXJnc1sncm9sZS1zZXNzaW9uLW5hbWUnXSxcbiAgICAgICAgICAgIHJhbVJvbGVOYW1lOiBhcmdzWydyYW0tcm9sZS1uYW1lJ11cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnZGlmZic6XG4gICAgICAgIHJldHVybiBhd2FpdCBjbGkuZGlmZih7XG4gICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1MsXG4gICAgICAgICAgcGF0aDogYXJncy5wYXRoLFxuICAgICAgICAgIGNvbnRleHRMaW5lczogYXJncy5jb250ZXh0TGluZXMsXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdkZXBsb3knOlxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJNYXA6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgcGFyYW1ldGVyIG9mIGFyZ3MucGFyYW1ldGVycykge1xuICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1ldGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3Qga2V5VmFsdWUgPSAocGFyYW1ldGVyIGFzIHN0cmluZykuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIHBhcmFtZXRlck1hcFtrZXlWYWx1ZVswXV0gPSBrZXlWYWx1ZS5zbGljZSgxKS5qb2luKCc9Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGNsaS5kZXBsb3koe1xuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlck1hcCxcbiAgICAgICAgICBleGNsdXNpdmVseTogYXJncy5leGNsdXNpdmVseSxcbiAgICAgICAgICB0aW1lb3V0OiBhcmdzLnRpbWVvdXRNaW51dGVzLFxuICAgICAgICAgIHN5bmM6IGFyZ3Muc3luYyxcbiAgICAgICAgICBvdXRwdXRzRmlsZTogYXJnc1snb3V0cHV0cy1maWxlJ10sXG4gICAgICAgICAgc2tpcElmTm9DaGFuZ2VzOiBhcmdzWydza2lwLWlmLW5vLWNoYW5nZXMnXVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdkZXN0cm95JzpcbiAgICAgICAgYXdhaXQgY2xpLmRlc3Ryb3koe1xuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgIHF1aWV0OiBhcmdzLnF1aWV0LFxuICAgICAgICAgIHN5bmM6IGFyZ3Muc3luY1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdldmVudCc6XG4gICAgICAgIGF3YWl0IGNsaS5ldmVudCh7XG4gICAgICAgICAgc3RhY2tOYW1lOiBhcmdzWydTVEFDSyddLFxuICAgICAgICAgIGxvZ2ljYWxSZXNvdXJjZUlkOiBhcmdzWydsb2dpY2FsLXJlc291cmNlLWlkJ10sXG4gICAgICAgICAgcGFnZU51bWJlcjogYXJnc1sncGFnZS1udW1iZXInXSxcbiAgICAgICAgICBwYWdlU2l6ZTogYXJnc1sncGFnZS1zaXplJ11cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnb3V0cHV0JzpcbiAgICAgICAgYXdhaXQgY2xpLm91dHB1dCh7XG4gICAgICAgICAgICBzdGFja05hbWU6IGFyZ3NbJ1NUQUNLJ11cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAncmVzb3VyY2UnOlxuICAgICAgICBhd2FpdCBjbGkucmVzb3VyY2Uoe1xuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNhc2UgJ2xpc3Qtc3RhY2tzJzpcbiAgICAgICAgYXdhaXQgY2xpLmxpc3RTdGFja3Moe1xuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgIGFsbDogYXJncy5hbGwsXG4gICAgICAgICAgcGFnZU51bWJlcjogYXJnc1sncGFnZS1udW1iZXInXSxcbiAgICAgICAgICBwYWdlU2l6ZTogYXJnc1sncGFnZS1zaXplJ11cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnbG9hZC1jb25maWcnOlxuICAgICAgICBhd2FpdCBjbGkubG9hZENsaUNvbmZpZyh7XG4gICAgICAgICAgZ2xvYmFsOiBhcmdzLmdsb2JhbCwgXG4gICAgICAgICAgbG9hZEZpbGVQYXRoOiBhcmdzWydmaWxlLXBhdGgnXVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdzeW50aGVzaXplJzpcbiAgICAgIGNhc2UgJ3N5bnRoJzpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5zeW50aChhcmdzLlNUQUNLUywgYXJncy5leGNsdXNpdmVseSk7XG5cbiAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAvLyBjb25zdCBsYW5ndWFnZSA9IGNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuZ2V0KFsnbGFuZ3VhZ2UnXSk7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlID0gYXJncy5sYW5ndWFnZTtcbiAgICAgICAgaWYgKGFyZ3MubGlzdCkge1xuICAgICAgICAgIHJldHVybiBhd2FpdCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcyhsYW5ndWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaUluaXQoYXJncy5URU1QTEFURSwgbGFuZ3VhZ2UsIHVuZGVmaW5lZCwgYXJncy5nZW5lcmF0ZU9ubHkpO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3ZlcnNpb24nOlxuICAgICAgICByZXR1cm4gZGF0YSh2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTik7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBjb21tYW5kOiAnICsgY29tbWFuZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9Kc29uT3JZYW1sKG9iamVjdDogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gc2VyaWFsaXplU3RydWN0dXJlKG9iamVjdCwgYXJndi5qc29uKTtcbiAgfVxufVxuXG5pbml0Q29tbWFuZExpbmUoKVxuICAudGhlbigodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAvLyBwcm9jZXNzLmV4aXRDb2RlID0gdmFsdWU7XG4gICAgfVxuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIGVycm9yKGVyci5tZXNzYWdlKTtcbiAgICBpZiAoZXJyLnN0YWNrKSB7XG4gICAgICBkZWJ1ZyhlcnIuc3RhY2spO1xuICAgIH1cbiAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTtcbiAgfSk7XG4iXX0=