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
        .option('resource-group-id', { type: 'string', desc: 'Resource group ID. If this parameter is not specified, the resource stack will be added to the default resource group' })
        .option('sync', { type: 'boolean', desc: 'Sync deploy stack', default: false })
        .option('skip-if-no-changes', { type: 'boolean', desc: 'When stack do not contains any new changes skip stack checks', default: false })
        .option('disable-rollback', { type: 'boolean', desc: 'Disable rollback when creating resource stack fails', default: false })
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
                    skipIfNoChanges: args['skip-if-no-changes'],
                    disableRollback: args['disable-rollback'],
                    resourceGroupId: args['resource-group-id']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFFL0Isa0VBQThEO0FBQzlELDBDQUE4QztBQUM5QyxvREFBZ0Q7QUFDaEQsc0NBQXVGO0FBQ3ZGLDRDQUFpRTtBQUNqRSxnREFBc0Q7QUFDdEQsOENBQWdEO0FBQ2hELDBDQUEwQztBQUUxQyxLQUFLLFVBQVUseUJBQXlCO0lBQ3RDLE1BQU0scUJBQXFCLEdBQUcsTUFBTSw2QkFBc0IsQ0FBQztJQUMzRCxPQUFPLEtBQUs7U0FDVCxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ1YsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO1NBQzVDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSw4R0FBOEc7UUFDcEgsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQztTQUNELE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDZCxJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLHNFQUFzRTtRQUM1RSxPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7U0FDRCxNQUFNLENBQUMsZUFBZSxFQUFFO1FBQ3ZCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsdUVBQXVFO0tBQzlFLENBQUM7U0FDRCxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQztTQUM1RSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsdUNBQXVDLEVBQUUsQ0FBQztTQUNwRixLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ2hCLE9BQU8sQ0FDTixpQkFBaUIsRUFDakIsMkdBQTJHLEVBQzNHLENBQUMsS0FB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O2dCQUNaLE9BQU8sY0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUV2QztnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVELFNBQVMsWUFBWSxDQUFDLE1BQVc7UUFDL0IsT0FBTyw4QkFBa0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxFQUFFO0tBQ2QsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDZCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsT0FBTztLQUNSO0lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2I7U0FBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUNwQyw0QkFBNEI7S0FDN0I7QUFDSCxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNiLGVBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO1FBQ2IsZUFBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCAqIGFzIHlhcmdzIGZyb20gJ3lhcmdzJztcblxuaW1wb3J0IHsgQ2xvdWRFeGVjdXRhYmxlIH0gZnJvbSAnLi4vbGliL2FwaS9jbG91ZC1leGVjdXRhYmxlJztcbmltcG9ydCB7IGV4ZWNQcm9ncmFtIH0gZnJvbSAnLi4vbGliL2FwaS9leGVjJztcbmltcG9ydCB7IENka1Rvb2xraXQgfSBmcm9tICcuLi9saWIvY2RrLXRvb2xraXQnO1xuaW1wb3J0IHsgYXZhaWxhYmxlSW5pdExhbmd1YWdlcywgY2xpSW5pdCwgcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMgfSBmcm9tICcuLi9saWIvaW5pdCc7XG5pbXBvcnQgeyBkYXRhLCBkZWJ1ZywgZXJyb3IsIHNldExvZ0xldmVsIH0gZnJvbSAnLi4vbGliL2xvZ2dpbmcnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3RydWN0dXJlIH0gZnJvbSAnLi4vbGliL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbGliL3NldHRpbmdzJztcbmltcG9ydCAqIGFzIHZlcnNpb24gZnJvbSAnLi4vbGliL3ZlcnNpb24nO1xuXG5hc3luYyBmdW5jdGlvbiBwYXJzZUNvbW1hbmRMaW5lQXJndW1lbnRzKCkge1xuICBjb25zdCBpbml0VGVtcGxhdGVMYW5ndWFnZXMgPSBhd2FpdCBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzO1xuICByZXR1cm4geWFyZ3NcbiAgICAuZW52KCdDREsnKVxuICAgIC51c2FnZSgnVXNhZ2U6IHJvcy1jZGsgLWEgW2Nkay1hcHBdIENPTU1BTkQnKVxuICAgIC5vcHRpb24oJ2FwcCcsIHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGRlc2M6ICdSRVFVSVJFRDogY29tbWFuZC1saW5lIGZvciBleGVjdXRpbmcgeW91ciBhcHAgb3IgYSBjbG91ZCBhc3NlbWJseSBkaXJlY3RvcnkgKGUuZy4gXCJucHggdHMtbm9kZSBiaW4vdGVzdC50c1wiKScsXG4gICAgICAgIHJlcXVpcmVzQXJnOiB0cnVlXG4gICAgfSlcbiAgICAub3B0aW9uKCdqc29uJywge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgYWxpYXM6ICdqJyxcbiAgICAgIGRlc2M6ICdVc2UgSlNPTiBvdXRwdXQgaW5zdGVhZCBvZiBZQU1MIHdoZW4gdGVtcGxhdGVzIGFyZSBwcmludGVkIHRvIFNURE9VVCcsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9KVxuICAgIC5vcHRpb24oJ2lnbm9yZS1lcnJvcnMnLCB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2M6ICdJZ25vcmVzIHN5bnRoZXNpcyBlcnJvcnMsIHdoaWNoIHdpbGwgbGlrZWx5IHByb2R1Y2UgYW4gaW52YWxpZCBvdXRwdXQnLFxuICAgIH0pXG4gICAgLm9wdGlvbigndHJhY2UnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1ByaW50IHRyYWNlIGZvciBzdGFjayB3YXJuaW5ncycgfSlcbiAgICAub3B0aW9uKCdzdHJpY3QnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ0RvIG5vdCBjb25zdHJ1Y3Qgc3RhY2tzIHdpdGggd2FybmluZ3MnIH0pXG4gICAgLmNvdW50KCd2ZXJib3NlJylcbiAgICAuY29tbWFuZChcbiAgICAgICdpbml0IFtURU1QTEFURV0nLFxuICAgICAgJ0NyZWF0ZSBhIG5ldywgZW1wdHkgQ0RLIHByb2plY3QgZnJvbSBhIHRlbXBsYXRlLiBJbnZva2VkIHdpdGhvdXQgVEVNUExBVEUsIHRoZSBhcHAgdGVtcGxhdGUgd2lsbCBiZSB1c2VkLicsXG4gICAgICAoeWFyZ3MpID0+XG4gICAgICAgIHlhcmdzXG4gICAgICAgICAgLm9wdGlvbignbGFuZ3VhZ2UnLCB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGFsaWFzOiAnbCcsXG4gICAgICAgICAgICBkZXNjOiAnVGhlIGxhbmd1YWdlIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXcgcHJvamVjdCAoZGVmYXVsdCBjYW4gYmUgY29uZmlndXJlZCBpbiB+Ly5jZGsuanNvbiknLFxuICAgICAgICAgICAgY2hvaWNlczogaW5pdFRlbXBsYXRlTGFuZ3VhZ2VzLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignbGlzdCcsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnTGlzdCB0aGUgYXZhaWxhYmxlIHRlbXBsYXRlcycgfSlcbiAgICAgICAgICAub3B0aW9uKCdnZW5lcmF0ZS1vbmx5Jywge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICBkZXNjOlxuICAgICAgICAgICAgICAnSWYgdHJ1ZSwgb25seSBnZW5lcmF0ZXMgcHJvamVjdCBmaWxlcywgd2l0aG91dCBleGVjdXRpbmcgYWRkaXRpb25hbCBvcGVyYXRpb25zIHN1Y2ggYXMgc2V0dGluZyB1cCBhIGdpdCByZXBvLCBpbnN0YWxsaW5nIGRlcGVuZGVuY2llcyBvciBjb21waWxpbmcgdGhlIHByb2plY3QnLFxuICAgICAgICAgIH0pLFxuICAgIClcbiAgICAuY29tbWFuZChbJ2xpc3QgW1NUQUNLUy4uXScsICdscyBbU1RBQ0tTLi5dJ10sICdMaXN0cyBhbGwgc3RhY2tzIGluIHRoZSBhcHAnLCAoeWFyZ3MpID0+XG4gICAgICB5YXJncy5vcHRpb24oJ2xvbmcnLCB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIGFsaWFzOiAnbCcsXG4gICAgICAgIGRlc2M6ICdEaXNwbGF5IGVudmlyb25tZW50IGluZm9ybWF0aW9uIGZvciBlYWNoIHN0YWNrJyxcbiAgICAgIH0pLFxuICAgIClcbiAgICAuY29tbWFuZChcbiAgICAgIFsnc3ludGhlc2l6ZSBbU1RBQ0tTLi5dJywgJ3N5bnRoIFtTVEFDS1MuLl0nXSxcbiAgICAgICdTeW50aGVzaXplcyBhbmQgcHJpbnRzIHRoZSBST1MgdGVtcGxhdGUgZm9yIHRoaXMgc3RhY2snLFxuICAgICAgKHlhcmdzKSA9PlxuICAgICAgICB5YXJncy5vcHRpb24oJ2V4Y2x1c2l2ZWx5Jywge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBhbGlhczogJ2UnLFxuICAgICAgICAgIGRlc2M6IFwiT25seSBzeW50aGVzaXplIHJlcXVlc3RlZCBzdGFja3MsIGRvbid0IGluY2x1ZGUgZGVwZW5kZW5jaWVzXCIsXG4gICAgICAgIH0pLFxuICAgIClcbiAgICAuY29tbWFuZCgnZGVwbG95IFtTVEFDS1MuLl0nLCAnRGVwbG95cyB0aGUgc3RhY2socykgbmFtZWQgU1RBQ0tTIHRvIFJPUyBpbnRvIHlvdXIgYWxpY2xvdWQgYWNjb3VudCcsICh5YXJncykgPT5cbiAgICAgIHlhcmdzXG4gICAgICAgIC5vcHRpb24oJ3BhcmFtZXRlcnMnLCB7XG4gICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICBkZXNjOiAnQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHBhc3NlZCB0byBST1MgYXQgZGVwbG95IHRpbWUgKFNUQUNLOktFWT1WQUxVRSknLFxuICAgICAgICAgIG5hcmdzOiAxLFxuICAgICAgICAgIHJlcXVpcmVzQXJnOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHQ6IHt9LFxuICAgICAgICB9KVxuICAgICAgICAub3B0aW9uKCdleGNsdXNpdmVseScsIHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgYWxpYXM6ICdlJyxcbiAgICAgICAgICBkZXNjOiBcIk9ubHkgZGVwbG95IHJlcXVlc3RlZCBzdGFja3MsIGRvbid0IGluY2x1ZGUgZGVwZW5kZW5jaWVzXCIsXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb24oJ3RpbWVvdXRNaW51dGVzJywgeyB0eXBlOiAnbnVtYmVyJywgYWxpYXM6ICd0JywgZGVzYzogJ1RoZSB0aW1lb3V0IG1pbnV0ZXMnLCBkZWZhdWx0OiAyMCB9KVxuICAgICAgICAgIC5vcHRpb24oJ3Jlc291cmNlLWdyb3VwLWlkJywgeyB0eXBlOiAnc3RyaW5nJywgZGVzYzogJ1Jlc291cmNlIGdyb3VwIElELiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgcmVzb3VyY2Ugc3RhY2sgd2lsbCBiZSBhZGRlZCB0byB0aGUgZGVmYXVsdCByZXNvdXJjZSBncm91cCd9KVxuICAgICAgICAgIC5vcHRpb24oJ3N5bmMnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1N5bmMgZGVwbG95IHN0YWNrJywgZGVmYXVsdDogZmFsc2UgfSlcbiAgICAgICAgICAub3B0aW9uKCdza2lwLWlmLW5vLWNoYW5nZXMnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1doZW4gc3RhY2sgZG8gbm90IGNvbnRhaW5zIGFueSBuZXcgY2hhbmdlcyBza2lwIHN0YWNrIGNoZWNrcycsIGRlZmF1bHQ6IGZhbHNlIH0pXG4gICAgICAgICAgLm9wdGlvbignZGlzYWJsZS1yb2xsYmFjaycsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnRGlzYWJsZSByb2xsYmFjayB3aGVuIGNyZWF0aW5nIHJlc291cmNlIHN0YWNrIGZhaWxzJywgZGVmYXVsdDogZmFsc2UgfSlcbiAgICAgICAgICAub3B0aW9uKCdvdXRwdXRzLWZpbGUnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1N0YWNrIG91dHB1dHMgd2lsbCBiZSB3cml0dGVuIGFzIEpTT04nLCBkZWZhdWx0OiBmYWxzZSB9KSxcbiAgICApXG4gICAgLmNvbW1hbmQoXG4gICAgICAnZGlmZiBbU1RBQ0tTLi5dJyxcbiAgICAgICdDb21wYXJlcyB0aGUgc3BlY2lmaWVkIHN0YWNrIHdpdGggdGhlIGRlcGxveWVkIHN0YWNrIG9yIGEgbG9jYWwgdGVtcGxhdGUgZmlsZSwgYW5kIHJldHVybnMgd2l0aCBzdGF0dXMgMSBpZiBhbnkgZGlmZmVyZW5jZSBpcyBmb3VuZCcsXG4gICAgICAoeWFyZ3MpID0+XG4gICAgICAgIHlhcmdzXG4gICAgICAgICAgLm9wdGlvbigncGF0aCcsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYWxpYXM6ICdwJyxcbiAgICAgICAgICAgIGRlc2M6ICdUaGUgcGF0aCB0byB0aGUgdGVtcGxhdGUgdG8gY29tcGFyZSB3aXRoJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcuL2Nkay5vdXQnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignY29udGV4dC1saW5lcycsIHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgZGVzYzogJ051bWJlciBvZiBjb250ZXh0IGxpbmVzIHRvIGluY2x1ZGUgaW4gYXJiaXRyYXJ5IEpTT04gZGlmZiByZW5kZXJpbmcnLFxuICAgICAgICAgICAgZGVmYXVsdDogMyxcbiAgICAgICAgICB9KSxcbiAgICApXG4gICAgLmNvbW1hbmQoJ2Rlc3Ryb3kgW1NUQUNLUy4uXScsICdEZXN0cm95IHRoZSBzdGFjayhzKSBuYW1lZCBTVEFDS1MnLCAoeWFyZ3MpID0+XG4gICAgICB5YXJnc1xuICAgICAgICAgICAgLm9wdGlvbigncXVpZXQnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdxJyxcbiAgICAgICAgICAgICAgZGVzYzogJ2Rlc3Ryb3kgd2l0aG91dCBjb25maXJtJyxcbiAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignc3luYycsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnc3luYyBkZXN0cm95IHN0YWNrJywgZGVmYXVsdDogZmFsc2UgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKCdldmVudCBbU1RBQ0suLl0nLCAnR2V0IHJlc291cmNlIGV2ZW50cyB3aXRoaW4gdGhlIHJlc291cmNlIFNUQUNLJywgKHlhcmdzKSA9PlxuICAgICAgeWFyZ3NcbiAgICAgIC5vcHRpb24oJ2xvZ2ljYWwtcmVzb3VyY2UtaWQnLCB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBhbGlhczogJ2wnLFxuICAgICAgICBkZXNjOiAnU3RhY2sgbG9naWNhbCByZXNvdXJjZSBpZCdcbiAgICAgIH0pXG4gICAgICAub3B0aW9uKCdwYWdlLW51bWJlcicsIHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGFsaWFzOiAnbicsXG4gICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIHRoZSBwYWdlIHRvIHJldHVybiwgUGFnZXMgc3RhcnQgZnJvbSBwYWdlIDEuIERlZmF1bHQgdmFsdWU6MScsXG4gICAgICB9KVxuICAgICAgLm9wdGlvbigncGFnZS1zaXplJywge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgYWxpYXM6ICdzJyxcbiAgICAgICAgZGVzYzogJ1RoZSBudW1iZXIgb2YgZW50cmllcyB0byByZXR1cm4gb24gZWFjaCBwYWdlLCBNYXhpbXVtIHZhbHVlOiA1MC4gRGVmYXVsdCB2YWx1ZTogMTAnLFxuICAgICAgfSlcbiAgICApXG4gICAgLmNvbW1hbmQoJ291dHB1dCBbU1RBQ0suLl0nLCAnR2V0IHRoZSBvdXRwdXQgaW5mb3JtYXRpb24gb2YgcmVzb3VyY2Ugc3RhY2snKVxuICAgIC5jb21tYW5kKCdyZXNvdXJjZSBbU1RBQ0tTLi5dJywgJ0dldCByZXNvdXJjZXMgaW4gdGhlIHJlc291cmNlIFNUQUNLUycpXG4gICAgLmNvbW1hbmQoJ2xpc3Qtc3RhY2tzIFtTVEFDS1MuLl0nLCAnR2V0IHJlc291cmNlcyBpbiB0aGUgcmVzb3VyY2UgU1RBQ0tTJywgKHlhcmdzKSA9PlxuICAgICAgeWFyZ3NcbiAgICAgIC5vcHRpb24oJ2FsbCcsIHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBhbGlhczogJ2EnLFxuICAgICAgICBkZXNjOiAnR2V0IGFsbCBTdGFja3MgaW4gYWNjb3VudCBzZXQgY29uZmlnIFJlZ2lvbi4nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgICAub3B0aW9uKCdwYWdlLW51bWJlcicsIHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGFsaWFzOiAnbicsXG4gICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIHRoZSBwYWdlIHRvIHJldHVybiwgUGFnZXMgc3RhcnQgZnJvbSBwYWdlIDEuIERlZmF1bHQgdmFsdWU6MScsXG4gICAgICB9KVxuICAgICAgLm9wdGlvbigncGFnZS1zaXplJywge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgYWxpYXM6ICdzJyxcbiAgICAgICAgZGVzYzogJ1RoZSBudW1iZXIgb2YgZW50cmllcyB0byByZXR1cm4gb24gZWFjaCBwYWdlLCBNYXhpbXVtIHZhbHVlOiAxMDAuIERlZmF1bHQgdmFsdWU6IDEwJyxcbiAgICAgIH0pXG4gICAgKVxuICAgIC5jb21tYW5kKCdsb2FkLWNvbmZpZycsICdMb2FkIEFsaXl1biBDTEkgY29uZmlnIHRvIENESy4nLCAoeWFyZ3MpID0+XG4gICAgICB5YXJncy5vcHRpb24oJ2dsb2JhbCcsIHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBhbGlhczogJ2cnLFxuICAgICAgICBkZXNjOiAnV2hldGhlciB0aGUgY29uZmlnIHNob3VsZCBiZSBzdG9yZWQgaW4gZ2xvYmFsIGVudicsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIC5vcHRpb24oJ2ZpbGUtcGF0aCcsIHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGFsaWFzOiAnZicsXG4gICAgICAgIGRlc2M6ICdTcGVjaWZ5IHRoZSBjbGkgY29uZmlndXJhdGlvbiBmaWxlIHBhdGggdG8gbG9hZCcsXG4gICAgICB9KVxuICAgIClcbiAgICAuY29tbWFuZCgnY29uZmlnJywgJ1NldCB5b3VyIGFsaWNsb3VkIGFjY291bnQgY29uZmlndXJhdGlvbi4nLCAoeWFyZ3MpID0+XG4gICAgICB5YXJncy5vcHRpb24oJ2dsb2JhbCcsIHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBhbGlhczogJ2cnLFxuICAgICAgICBkZXNjOiAnV2hldGhlciB0aGUgY29uZmlnIHNob3VsZCBiZSBzdG9yZWQgaW4gZ2xvYmFsIGVudicsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgfSksXG4gICAgKVxuICAgICAgLmNvbW1hbmQoJ2dlbmVyYXRlLXN0YWNrLWZpbGUnLCAnVGhlIHJlc291cmNlIHN0YWNrIGluZm9ybWF0aW9uIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkJylcbiAgICAgIC5jb21tYW5kKCdjb25maWctc2V0JywgJ1NldCB5b3VyIGFsaWNsb3VkIGFjY291bnQgY29uZmlndXJhdGlvbiBub24gaW50ZXJhY3RpdmUgbW9kZS4nLCAoeWFyZ3MpID0+XG4gICAgICAgICAgeWFyZ3Mub3B0aW9uKCdnbG9iYWwnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdnJyxcbiAgICAgICAgICAgICAgZGVzYzogJ1doZXRoZXIgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3RvcmVkIGluIGdsb2JhbCBlbnYnLFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ2VuZHBvaW50Jywge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdlJyxcbiAgICAgICAgICAgICAgZGVzYzogJ1NwZWNpZnkgdGhlIHNlcnZpY2UgYWRkcmVzcyB0aGF0IGluaXRpYXRlZCB0aGUgcmVxdWVzdCcsXG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbigncmVnaW9uJywge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdyJyxcbiAgICAgICAgICAgICAgZGVzYzogJ1NwZWNpZnkgcmVnaW9uIGluZm9ybWF0aW9uIGZvciBtYW5hZ2luZyByZXNvdXJjZXMnLFxuICAgICAgICAgICAgICBkZWZhdWx0OiAnY24taGFuZ3pob3UnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignbW9kZScsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAnbScsXG4gICAgICAgICAgICAgIGRlbWFuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1tb2RlIHtBS3xTdHNUb2tlbnxSYW1Sb2xlQXJufEVjc1JhbVJvbGV9YCB0byBhc3NpZ24gYXV0aGVudGljYXRlIG1vZGUnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignYWNjZXNzLWtleS1pZCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAnYWsnLFxuICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLWFjY2Vzcy1rZXktaWQgQWNjZXNzS2V5SWRgIHRvIGFzc2lnbiBBY2Nlc3NLZXlJZCwgcmVxdWlyZWQgaW4gQUsvU3RzVG9rZW4vUmFtUm9sZUFybiBtb2RlJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ2FjY2Vzcy1rZXktc2VjcmV0Jywge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdzaycsXG4gICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tYWNjZXNzLWtleS1zZWNyZXQgQWNjZXNzS2V5U2VjcmV0YCB0byBhc3NpZ24gQWNjZXNzS2V5U2VjcmV0LCByZXF1aXJlZCBpbiBBSy9TdHNUb2tlbi9SYW1Sb2xlQXJuIG1vZGUnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignc3RzLXRva2VuJywge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdzdHMnLFxuICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLXN0cy10b2tlbiBTdHNUb2tlbmAgdG8gYXNzaWduIFN0c1Rva2VuLCByZXF1aXJlZCBpbiBTdHNUb2tlbiBtb2RlJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ3JhbS1yb2xlLWFybicsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAnYXJuJyxcbiAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1yYW0tcm9sZS1hcm4gUmFtUm9sZUFybmAgdG8gYXNzaWduIFJhbVJvbGVBcm4oZWc6IGFjczpyYW06OioqKioqKjpyb2xlLyoqKioqKiksIHJlcXVpcmVkIGluIFJhbVJvbGVBcm4gbW9kZScsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdyb2xlLXNlc3Npb24tbmFtZScsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAncycsXG4gICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tcm9sZS1zZXNzaW9uLW5hbWUgUm9sZVNlc3Npb25OYW1lYCB0byBhc3NpZ24gUm9sZVNlc3Npb25OYW1lLCByZXF1aXJlZCBpbiBSYW1Sb2xlQXJuIG1vZGUnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbigncmFtLXJvbGUtbmFtZScsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAncm9sZScsXG4gICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tcmFtLXJvbGUtbmFtZSBSYW1Sb2xlTmFtZWAgdG8gYXNzaWduIFJhbVJvbGVOYW1lLCByZXF1aXJlZCBpbiBFY3NSYW1Sb2xlIG1vZGUnLFxuICAgICAgICAgIH0pXG4gICAgICApXG4gICAgLnZlcnNpb24odmVyc2lvbi5ESVNQTEFZX1ZFUlNJT04pXG4gICAgLmRlbWFuZENvbW1hbmQoMSwgJycpIC8vIGp1c3QgcHJpbnQgaGVscFxuICAgIC5yZWNvbW1lbmRDb21tYW5kcygpXG4gICAgLmhlbHAoKVxuICAgIC5hbGlhcygnaCcsICdoZWxwJylcbiAgICAuZXBpbG9ndWUoXG4gICAgICBbXG4gICAgICAgICdJZiB5b3VyIGFwcCBoYXMgYSBzaW5nbGUgc3RhY2ssIHRoZXJlIGlzIG5vIG5lZWQgdG8gc3BlY2lmeSB0aGUgc3RhY2sgbmFtZScsXG4gICAgICAgICdJZiBvbmUgb2YgY2RrLmpzb24gb3Igfi8uY2RrLmpzb24gZXhpc3RzLCBvcHRpb25zIHNwZWNpZmllZCB0aGVyZSB3aWxsIGJlIHVzZWQgYXMgZGVmYXVsdHMuIFNldHRpbmdzIGluIGNkay5qc29uIHRha2UgcHJlY2VkZW5jZS4nLFxuICAgICAgXS5qb2luKCdcXG5cXG4nKSxcbiAgICApLmFyZ3Y7XG59XG5cbmlmICghcHJvY2Vzcy5zdGRvdXQuaXNUVFkpIHtcbiAgY29sb3JzLmRpc2FibGUoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdENvbW1hbmRMaW5lKCkge1xuICBjb25zdCBhcmd2ID0gYXdhaXQgcGFyc2VDb21tYW5kTGluZUFyZ3VtZW50cygpO1xuICBpZiAoYXJndi52ZXJib3NlKSB7XG4gICAgc2V0TG9nTGV2ZWwoYXJndi52ZXJib3NlKTtcbiAgfVxuICBkZWJ1ZygnQ0RLIHRvb2xraXQgdmVyc2lvbjonLCB2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTik7XG4gIGRlYnVnKCdDb21tYW5kIGxpbmUgYXJndW1lbnRzOicsIGFyZ3YpO1xuXG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbihhcmd2KTtcbiAgYXdhaXQgY29uZmlndXJhdGlvbi5sb2FkKCk7XG5cbiAgY29uc3QgY2xvdWRFeGVjdXRhYmxlID0gbmV3IENsb3VkRXhlY3V0YWJsZSh7XG4gICAgY29uZmlndXJhdGlvbixcbiAgICBzeW50aGVzaXplcjogZXhlY1Byb2dyYW0sXG4gIH0pO1xuXG4gIGNvbnN0IGNtZCA9IFN0cmluZyhhcmd2Ll9bMF0pO1xuXG4gIGNvbnN0IHJldHVyblZhbHVlID0gYXdhaXQgbWFpbihjbWQsIGFyZ3YpO1xuICBpZiAodHlwZW9mIHJldHVyblZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB0b0pzb25PcllhbWwocmV0dXJuVmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiByZXR1cm5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gbWFpbihjb21tYW5kOiBzdHJpbmcsIGFyZ3M6IGFueSk6IFByb21pc2U8bnVtYmVyIHwgc3RyaW5nIHwge30gfCB2b2lkPiB7XG4gICAgYXJncy5TVEFDS1MgPSBhcmdzLlNUQUNLUyB8fCBbXTtcblxuICAgIGNvbnN0IGNsaSA9IG5ldyBDZGtUb29sa2l0KHtcbiAgICAgIGNsb3VkRXhlY3V0YWJsZSxcbiAgICAgIHZlcmJvc2U6IGFyZ3YudHJhY2UgfHwgYXJndi52ZXJib3NlID4gMCxcbiAgICAgIGlnbm9yZUVycm9yczogYXJndlsnaWdub3JlLWVycm9ycyddLFxuICAgICAgc3RyaWN0OiBhcmd2LnN0cmljdCxcbiAgICAgIGNvbmZpZ3VyYXRpb24sXG4gICAgfSk7XG5cbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgIGNhc2UgJ2xzJzpcbiAgICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgICByZXR1cm4gYXdhaXQgY2xpLmxpc3QoYXJncy5TVEFDS1MpO1xuXG4gICAgICBjYXNlICdnZW5lcmF0ZS1zdGFjay1maWxlJzpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5nZW5lcmF0ZVN0YWNrSW5mbygpO1xuXG4gICAgICBjYXNlICdjb25maWcnOlxuICAgICAgICAvLyB3YWl0IHVzZXIgZm9yIHJvcyBpbnB1dFxuICAgICAgICBhd2FpdCBjbGkuY29uZmlnKGFyZ3MuZ2xvYmFsKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdjb25maWctc2V0JzpcbiAgICAgICAgLy8gd2FpdCB1c2VyIGZvciByb3MgaW5wdXRcbiAgICAgICAgYXdhaXQgY2xpLmNvbmZpZ1NldCh7XG4gICAgICAgICAgICBnbG9iYWw6IGFyZ3MuZ2xvYmFsLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGFyZ3MuZW5kcG9pbnQsXG4gICAgICAgICAgICByZWdpb246IGFyZ3MucmVnaW9uLFxuICAgICAgICAgICAgbW9kZTogYXJncy5tb2RlLFxuICAgICAgICAgICAgYWs6IGFyZ3NbJ2FjY2Vzcy1rZXktaWQnXSxcbiAgICAgICAgICAgIHNrOiBhcmdzWydhY2Nlc3Mta2V5LXNlY3JldCddLFxuICAgICAgICAgICAgc3RzOiBhcmdzWydzdHMtdG9rZW4nXSxcbiAgICAgICAgICAgIHJhbVJvbGVBcm46IGFyZ3NbJ3JhbS1yb2xlLWFybiddLFxuICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiBhcmdzWydyb2xlLXNlc3Npb24tbmFtZSddLFxuICAgICAgICAgICAgcmFtUm9sZU5hbWU6IGFyZ3NbJ3JhbS1yb2xlLW5hbWUnXVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdkaWZmJzpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5kaWZmKHtcbiAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICBwYXRoOiBhcmdzLnBhdGgsXG4gICAgICAgICAgY29udGV4dExpbmVzOiBhcmdzLmNvbnRleHRMaW5lcyxcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2RlcGxveSc6XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlck1hcDogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkIH0gPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgYXJncy5wYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbWV0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IChwYXJhbWV0ZXIgYXMgc3RyaW5nKS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgcGFyYW1ldGVyTWFwW2tleVZhbHVlWzBdXSA9IGtleVZhbHVlLnNsaWNlKDEpLmpvaW4oJz0nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgY2xpLmRlcGxveSh7XG4gICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1MsXG4gICAgICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVyTWFwLFxuICAgICAgICAgIGV4Y2x1c2l2ZWx5OiBhcmdzLmV4Y2x1c2l2ZWx5LFxuICAgICAgICAgIHRpbWVvdXQ6IGFyZ3MudGltZW91dE1pbnV0ZXMsXG4gICAgICAgICAgc3luYzogYXJncy5zeW5jLFxuICAgICAgICAgIG91dHB1dHNGaWxlOiBhcmdzWydvdXRwdXRzLWZpbGUnXSxcbiAgICAgICAgICBza2lwSWZOb0NoYW5nZXM6IGFyZ3NbJ3NraXAtaWYtbm8tY2hhbmdlcyddLFxuICAgICAgICAgIGRpc2FibGVSb2xsYmFjazogYXJnc1snZGlzYWJsZS1yb2xsYmFjayddLFxuICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogYXJnc1sncmVzb3VyY2UtZ3JvdXAtaWQnXVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdkZXN0cm95JzpcbiAgICAgICAgYXdhaXQgY2xpLmRlc3Ryb3koe1xuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgIHF1aWV0OiBhcmdzLnF1aWV0LFxuICAgICAgICAgIHN5bmM6IGFyZ3Muc3luY1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdldmVudCc6XG4gICAgICAgIGF3YWl0IGNsaS5ldmVudCh7XG4gICAgICAgICAgc3RhY2tOYW1lOiBhcmdzWydTVEFDSyddLFxuICAgICAgICAgIGxvZ2ljYWxSZXNvdXJjZUlkOiBhcmdzWydsb2dpY2FsLXJlc291cmNlLWlkJ10sXG4gICAgICAgICAgcGFnZU51bWJlcjogYXJnc1sncGFnZS1udW1iZXInXSxcbiAgICAgICAgICBwYWdlU2l6ZTogYXJnc1sncGFnZS1zaXplJ11cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnb3V0cHV0JzpcbiAgICAgICAgYXdhaXQgY2xpLm91dHB1dCh7XG4gICAgICAgICAgICBzdGFja05hbWU6IGFyZ3NbJ1NUQUNLJ11cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAncmVzb3VyY2UnOlxuICAgICAgICBhd2FpdCBjbGkucmVzb3VyY2Uoe1xuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNhc2UgJ2xpc3Qtc3RhY2tzJzpcbiAgICAgICAgYXdhaXQgY2xpLmxpc3RTdGFja3Moe1xuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgIGFsbDogYXJncy5hbGwsXG4gICAgICAgICAgcGFnZU51bWJlcjogYXJnc1sncGFnZS1udW1iZXInXSxcbiAgICAgICAgICBwYWdlU2l6ZTogYXJnc1sncGFnZS1zaXplJ11cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnbG9hZC1jb25maWcnOlxuICAgICAgICBhd2FpdCBjbGkubG9hZENsaUNvbmZpZyh7XG4gICAgICAgICAgZ2xvYmFsOiBhcmdzLmdsb2JhbCwgXG4gICAgICAgICAgbG9hZEZpbGVQYXRoOiBhcmdzWydmaWxlLXBhdGgnXVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdzeW50aGVzaXplJzpcbiAgICAgIGNhc2UgJ3N5bnRoJzpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5zeW50aChhcmdzLlNUQUNLUywgYXJncy5leGNsdXNpdmVseSk7XG5cbiAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAvLyBjb25zdCBsYW5ndWFnZSA9IGNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuZ2V0KFsnbGFuZ3VhZ2UnXSk7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlID0gYXJncy5sYW5ndWFnZTtcbiAgICAgICAgaWYgKGFyZ3MubGlzdCkge1xuICAgICAgICAgIHJldHVybiBhd2FpdCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcyhsYW5ndWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaUluaXQoYXJncy5URU1QTEFURSwgbGFuZ3VhZ2UsIHVuZGVmaW5lZCwgYXJncy5nZW5lcmF0ZU9ubHkpO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3ZlcnNpb24nOlxuICAgICAgICByZXR1cm4gZGF0YSh2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTik7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBjb21tYW5kOiAnICsgY29tbWFuZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9Kc29uT3JZYW1sKG9iamVjdDogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gc2VyaWFsaXplU3RydWN0dXJlKG9iamVjdCwgYXJndi5qc29uKTtcbiAgfVxufVxuXG5pbml0Q29tbWFuZExpbmUoKVxuICAudGhlbigodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAvLyBwcm9jZXNzLmV4aXRDb2RlID0gdmFsdWU7XG4gICAgfVxuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIGVycm9yKGVyci5tZXNzYWdlKTtcbiAgICBpZiAoZXJyLnN0YWNrKSB7XG4gICAgICBkZWJ1ZyhlcnIuc3RhY2spO1xuICAgIH1cbiAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTtcbiAgfSk7XG4iXX0=