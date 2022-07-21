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
        .option('detail-log', { type: 'boolean', desc: 'When stack deploy error, set this params to show more error information', default: false })
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
    })
        .option('resource-group-id', {
        type: 'string',
        desc: 'Resource group ID. Resource Group allows you to sort resources owned by your Alibaba Cloud account into groups. This simplifies resource and permission management within your Alibaba Cloud account.'
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
        .command('generate-stack-file', 'The resource stack information is automatically generated', (yargs) => yargs.option('resource-group-id', {
        type: 'string',
        desc: 'Resource group ID. Set this parameter to query the stack of the corresponding resource group.'
    }))
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
                await cli.generateStackInfo({
                    resourceGroupId: args['resource-group-id']
                });
                return;
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
                    resourceGroupId: args['resource-group-id'],
                    detailLog: args['detail-log']
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
                    pageSize: args['page-size'],
                    resourceGroupId: args['resource-group-id']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFFL0Isa0VBQThEO0FBQzlELDBDQUE4QztBQUM5QyxvREFBZ0Q7QUFDaEQsc0NBQXVGO0FBQ3ZGLDRDQUFpRTtBQUNqRSxnREFBc0Q7QUFDdEQsOENBQWdEO0FBQ2hELDBDQUEwQztBQUUxQyxLQUFLLFVBQVUseUJBQXlCO0lBQ3BDLE1BQU0scUJBQXFCLEdBQUcsTUFBTSw2QkFBc0IsQ0FBQztJQUMzRCxPQUFPLEtBQUs7U0FDUCxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ1YsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO1NBQzVDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSw4R0FBOEc7UUFDcEgsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQztTQUNELE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDWixJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLHNFQUFzRTtRQUM1RSxPQUFPLEVBQUUsS0FBSztLQUNqQixDQUFDO1NBQ0QsTUFBTSxDQUFDLGVBQWUsRUFBRTtRQUNyQixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLHVFQUF1RTtLQUNoRixDQUFDO1NBQ0QsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxFQUFFLENBQUM7U0FDNUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLHVDQUF1QyxFQUFFLENBQUM7U0FDcEYsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUNoQixPQUFPLENBQ0osaUJBQWlCLEVBQ2pCLDJHQUEyRyxFQUMzRyxDQUFDLEtB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Q0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ1gsZUFBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7UUFDWCxlQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xuaW1wb3J0ICogYXMgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQgeyBDbG91ZEV4ZWN1dGFibGUgfSBmcm9tICcuLi9saWIvYXBpL2Nsb3VkLWV4ZWN1dGFibGUnO1xuaW1wb3J0IHsgZXhlY1Byb2dyYW0gfSBmcm9tICcuLi9saWIvYXBpL2V4ZWMnO1xuaW1wb3J0IHsgQ2RrVG9vbGtpdCB9IGZyb20gJy4uL2xpYi9jZGstdG9vbGtpdCc7XG5pbXBvcnQgeyBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzLCBjbGlJbml0LCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcyB9IGZyb20gJy4uL2xpYi9pbml0JztcbmltcG9ydCB7IGRhdGEsIGRlYnVnLCBlcnJvciwgc2V0TG9nTGV2ZWwgfSBmcm9tICcuLi9saWIvbG9nZ2luZyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHJ1Y3R1cmUgfSBmcm9tICcuLi9saWIvc2VyaWFsaXplJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9saWIvc2V0dGluZ3MnO1xuaW1wb3J0ICogYXMgdmVyc2lvbiBmcm9tICcuLi9saWIvdmVyc2lvbic7XG5cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlQ29tbWFuZExpbmVBcmd1bWVudHMoKSB7XG4gICAgY29uc3QgaW5pdFRlbXBsYXRlTGFuZ3VhZ2VzID0gYXdhaXQgYXZhaWxhYmxlSW5pdExhbmd1YWdlcztcbiAgICByZXR1cm4geWFyZ3NcbiAgICAgICAgLmVudignQ0RLJylcbiAgICAgICAgLnVzYWdlKCdVc2FnZTogcm9zLWNkayAtYSBbY2RrLWFwcF0gQ09NTUFORCcpXG4gICAgICAgIC5vcHRpb24oJ2FwcCcsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZGVzYzogJ1JFUVVJUkVEOiBjb21tYW5kLWxpbmUgZm9yIGV4ZWN1dGluZyB5b3VyIGFwcCBvciBhIGNsb3VkIGFzc2VtYmx5IGRpcmVjdG9yeSAoZS5nLiBcIm5weCB0cy1ub2RlIGJpbi90ZXN0LnRzXCIpJyxcbiAgICAgICAgICAgIHJlcXVpcmVzQXJnOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb24oJ2pzb24nLCB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBhbGlhczogJ2onLFxuICAgICAgICAgICAgZGVzYzogJ1VzZSBKU09OIG91dHB1dCBpbnN0ZWFkIG9mIFlBTUwgd2hlbiB0ZW1wbGF0ZXMgYXJlIHByaW50ZWQgdG8gU1RET1VUJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgICAub3B0aW9uKCdpZ25vcmUtZXJyb3JzJywge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICBkZXNjOiAnSWdub3JlcyBzeW50aGVzaXMgZXJyb3JzLCB3aGljaCB3aWxsIGxpa2VseSBwcm9kdWNlIGFuIGludmFsaWQgb3V0cHV0JyxcbiAgICAgICAgfSlcbiAgICAgICAgLm9wdGlvbigndHJhY2UnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1ByaW50IHRyYWNlIGZvciBzdGFjayB3YXJuaW5ncycgfSlcbiAgICAgICAgLm9wdGlvbignc3RyaWN0JywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdEbyBub3QgY29uc3RydWN0IHN0YWNrcyB3aXRoIHdhcm5pbmdzJyB9KVxuICAgICAgICAuY291bnQoJ3ZlcmJvc2UnKVxuICAgICAgICAuY29tbWFuZChcbiAgICAgICAgICAgICdpbml0IFtURU1QTEFURV0nLFxuICAgICAgICAgICAgJ0NyZWF0ZSBhIG5ldywgZW1wdHkgQ0RLIHByb2plY3QgZnJvbSBhIHRlbXBsYXRlLiBJbnZva2VkIHdpdGhvdXQgVEVNUExBVEUsIHRoZSBhcHAgdGVtcGxhdGUgd2lsbCBiZSB1c2VkLicsXG4gICAgICAgICAgICAoeWFyZ3MpID0+XG4gICAgICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbignbGFuZ3VhZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAnVGhlIGxhbmd1YWdlIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXcgcHJvamVjdCAoZGVmYXVsdCBjYW4gYmUgY29uZmlndXJlZCBpbiB+Ly5jZGsuanNvbiknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlczogaW5pdFRlbXBsYXRlTGFuZ3VhZ2VzLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uKCdsaXN0JywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdMaXN0IHRoZSBhdmFpbGFibGUgdGVtcGxhdGVzJyB9KVxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uKCdnZW5lcmF0ZS1vbmx5Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdJZiB0cnVlLCBvbmx5IGdlbmVyYXRlcyBwcm9qZWN0IGZpbGVzLCB3aXRob3V0IGV4ZWN1dGluZyBhZGRpdGlvbmFsIG9wZXJhdGlvbnMgc3VjaCBhcyBzZXR0aW5nIHVwIGEgZ2l0IHJlcG8sIGluc3RhbGxpbmcgZGVwZW5kZW5jaWVzIG9yIGNvbXBpbGluZyB0aGUgcHJvamVjdCcsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKFsnbGlzdCBbU1RBQ0tTLi5dJywgJ2xzIFtTVEFDS1MuLl0nXSwgJ0xpc3RzIGFsbCBzdGFja3MgaW4gdGhlIGFwcCcsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzLm9wdGlvbignbG9uZycsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnRGlzcGxheSBlbnZpcm9ubWVudCBpbmZvcm1hdGlvbiBmb3IgZWFjaCBzdGFjaycsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZChcbiAgICAgICAgICAgIFsnc3ludGhlc2l6ZSBbU1RBQ0tTLi5dJywgJ3N5bnRoIFtTVEFDS1MuLl0nXSxcbiAgICAgICAgICAgICdTeW50aGVzaXplcyBhbmQgcHJpbnRzIHRoZSBST1MgdGVtcGxhdGUgZm9yIHRoaXMgc3RhY2snLFxuICAgICAgICAgICAgKHlhcmdzKSA9PlxuICAgICAgICAgICAgICAgIHlhcmdzLm9wdGlvbignZXhjbHVzaXZlbHknLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdlJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJPbmx5IHN5bnRoZXNpemUgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZCgnZGVwbG95IFtTVEFDS1MuLl0nLCAnRGVwbG95cyB0aGUgc3RhY2socykgbmFtZWQgU1RBQ0tTIHRvIFJPUyBpbnRvIHlvdXIgYWxpY2xvdWQgYWNjb3VudCcsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncGFyYW1ldGVycycsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ0FkZGl0aW9uYWwgcGFyYW1ldGVycyBwYXNzZWQgdG8gUk9TIGF0IGRlcGxveSB0aW1lIChTVEFDSzpLRVk9VkFMVUUpJyxcbiAgICAgICAgICAgICAgICAgICAgbmFyZ3M6IDEsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVzQXJnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7fSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2V4Y2x1c2l2ZWx5Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnZScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiT25seSBkZXBsb3kgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3RpbWVvdXRNaW51dGVzJywgeyB0eXBlOiAnbnVtYmVyJywgYWxpYXM6ICd0JywgZGVzYzogJ1RoZSB0aW1lb3V0IG1pbnV0ZXMnLCBkZWZhdWx0OiAyMCB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3Jlc291cmNlLWdyb3VwLWlkJywgeyB0eXBlOiAnc3RyaW5nJywgZGVzYzogJ1Jlc291cmNlIGdyb3VwIElELiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgcmVzb3VyY2Ugc3RhY2sgd2lsbCBiZSBhZGRlZCB0byB0aGUgZGVmYXVsdCByZXNvdXJjZSBncm91cCd9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3N5bmMnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1N5bmMgZGVwbG95IHN0YWNrJywgZGVmYXVsdDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdza2lwLWlmLW5vLWNoYW5nZXMnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1doZW4gc3RhY2sgZG8gbm90IGNvbnRhaW5zIGFueSBuZXcgY2hhbmdlcyBza2lwIHN0YWNrIGNoZWNrcycsIGRlZmF1bHQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignZGV0YWlsLWxvZycsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnV2hlbiBzdGFjayBkZXBsb3kgZXJyb3IsIHNldCB0aGlzIHBhcmFtcyB0byBzaG93IG1vcmUgZXJyb3IgaW5mb3JtYXRpb24nLCBkZWZhdWx0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2Rpc2FibGUtcm9sbGJhY2snLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ0Rpc2FibGUgcm9sbGJhY2sgd2hlbiBjcmVhdGluZyByZXNvdXJjZSBzdGFjayBmYWlscycsIGRlZmF1bHQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignb3V0cHV0cy1maWxlJywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdTdGFjayBvdXRwdXRzIHdpbGwgYmUgd3JpdHRlbiBhcyBKU09OJywgZGVmYXVsdDogZmFsc2UgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoXG4gICAgICAgICAgICAnZGlmZiBbU1RBQ0tTLi5dJyxcbiAgICAgICAgICAgICdDb21wYXJlcyB0aGUgc3BlY2lmaWVkIHN0YWNrIHdpdGggdGhlIGRlcGxveWVkIHN0YWNrIG9yIGEgbG9jYWwgdGVtcGxhdGUgZmlsZSwgYW5kIHJldHVybnMgd2l0aCBzdGF0dXMgMSBpZiBhbnkgZGlmZmVyZW5jZSBpcyBmb3VuZCcsXG4gICAgICAgICAgICAoeWFyZ3MpID0+XG4gICAgICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbigncGF0aCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6ICdUaGUgcGF0aCB0byB0aGUgdGVtcGxhdGUgdG8gY29tcGFyZSB3aXRoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcuL2Nkay5vdXQnLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uKCdjb250ZXh0LWxpbmVzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAnTnVtYmVyIG9mIGNvbnRleHQgbGluZXMgdG8gaW5jbHVkZSBpbiBhcmJpdHJhcnkgSlNPTiBkaWZmIHJlbmRlcmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAzLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZCgnZGVzdHJveSBbU1RBQ0tTLi5dJywgJ0Rlc3Ryb3kgdGhlIHN0YWNrKHMpIG5hbWVkIFNUQUNLUycsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncXVpZXQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdxJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ2Rlc3Ryb3kgd2l0aG91dCBjb25maXJtJyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3N5bmMnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ3N5bmMgZGVzdHJveSBzdGFjaycsIGRlZmF1bHQ6IGZhbHNlIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKCdldmVudCBbU1RBQ0suLl0nLCAnR2V0IHJlc291cmNlIGV2ZW50cyB3aXRoaW4gdGhlIHJlc291cmNlIFNUQUNLJywgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdsb2dpY2FsLXJlc291cmNlLWlkJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1N0YWNrIGxvZ2ljYWwgcmVzb3VyY2UgaWQnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdwYWdlLW51bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnbicsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIHRoZSBwYWdlIHRvIHJldHVybiwgUGFnZXMgc3RhcnQgZnJvbSBwYWdlIDEuIERlZmF1bHQgdmFsdWU6MScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdwYWdlLXNpemUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3MnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiBlbnRyaWVzIHRvIHJldHVybiBvbiBlYWNoIHBhZ2UsIE1heGltdW0gdmFsdWU6IDUwLiBEZWZhdWx0IHZhbHVlOiAxMCcsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZCgnb3V0cHV0IFtTVEFDSy4uXScsICdHZXQgdGhlIG91dHB1dCBpbmZvcm1hdGlvbiBvZiByZXNvdXJjZSBzdGFjaycpXG4gICAgICAgIC5jb21tYW5kKCdyZXNvdXJjZSBbU1RBQ0tTLi5dJywgJ0dldCByZXNvdXJjZXMgaW4gdGhlIHJlc291cmNlIFNUQUNLUycpXG4gICAgICAgIC5jb21tYW5kKCdsaXN0LXN0YWNrcyBbU1RBQ0tTLi5dJywgJ0dldCByZXNvdXJjZXMgaW4gdGhlIHJlc291cmNlIFNUQUNLUycsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLm9wdGlvbignYWxsJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnYScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdHZXQgYWxsIFN0YWNrcyBpbiBhY2NvdW50IHNldCBjb25maWcgUmVnaW9uLicsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncGFnZS1udW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ24nLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiB0aGUgcGFnZSB0byByZXR1cm4sIFBhZ2VzIHN0YXJ0IGZyb20gcGFnZSAxLiBEZWZhdWx0IHZhbHVlOjEnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncGFnZS1zaXplJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1RoZSBudW1iZXIgb2YgZW50cmllcyB0byByZXR1cm4gb24gZWFjaCBwYWdlLCBNYXhpbXVtIHZhbHVlOiAxMDAuIERlZmF1bHQgdmFsdWU6IDEwJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3Jlc291cmNlLWdyb3VwLWlkJywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICdSZXNvdXJjZSBncm91cCBJRC4gUmVzb3VyY2UgR3JvdXAgYWxsb3dzIHlvdSB0byBzb3J0IHJlc291cmNlcyBvd25lZCBieSB5b3VyIEFsaWJhYmEgQ2xvdWQgYWNjb3VudCBpbnRvIGdyb3Vwcy4gVGhpcyBzaW1wbGlmaWVzIHJlc291cmNlIGFuZCBwZXJtaXNzaW9uIG1hbmFnZW1lbnQgd2l0aGluIHlvdXIgQWxpYmFiYSBDbG91ZCBhY2NvdW50LidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoJ2xvYWQtY29uZmlnJywgJ0xvYWQgQWxpeXVuIENMSSBjb25maWcgdG8gQ0RLLicsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzLm9wdGlvbignZ2xvYmFsJywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBhbGlhczogJ2cnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICdXaGV0aGVyIHRoZSBjb25maWcgc2hvdWxkIGJlIHN0b3JlZCBpbiBnbG9iYWwgZW52JyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignZmlsZS1wYXRoJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdmJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1NwZWNpZnkgdGhlIGNsaSBjb25maWd1cmF0aW9uIGZpbGUgcGF0aCB0byBsb2FkJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKCdjb25maWcnLCAnU2V0IHlvdXIgYWxpY2xvdWQgYWNjb3VudCBjb25maWd1cmF0aW9uLicsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzLm9wdGlvbignZ2xvYmFsJywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBhbGlhczogJ2cnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICdXaGV0aGVyIHRoZSBjb25maWcgc2hvdWxkIGJlIHN0b3JlZCBpbiBnbG9iYWwgZW52JyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKCdnZW5lcmF0ZS1zdGFjay1maWxlJywgJ1RoZSByZXNvdXJjZSBzdGFjayBpbmZvcm1hdGlvbiBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCcsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzLm9wdGlvbigncmVzb3VyY2UtZ3JvdXAtaWQnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZGVzYzogJ1Jlc291cmNlIGdyb3VwIElELiBTZXQgdGhpcyBwYXJhbWV0ZXIgdG8gcXVlcnkgdGhlIHN0YWNrIG9mIHRoZSBjb3JyZXNwb25kaW5nIHJlc291cmNlIGdyb3VwLidcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKCdjb25maWctc2V0JywgJ1NldCB5b3VyIGFsaWNsb3VkIGFjY291bnQgY29uZmlndXJhdGlvbiBub24gaW50ZXJhY3RpdmUgbW9kZS4nLCAoeWFyZ3MpID0+XG4gICAgICAgICAgICB5YXJncy5vcHRpb24oJ2dsb2JhbCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgYWxpYXM6ICdnJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnV2hldGhlciB0aGUgY29uZmlnIHNob3VsZCBiZSBzdG9yZWQgaW4gZ2xvYmFsIGVudicsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2VuZHBvaW50Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdlJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1NwZWNpZnkgdGhlIHNlcnZpY2UgYWRkcmVzcyB0aGF0IGluaXRpYXRlZCB0aGUgcmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncmVnaW9uJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdyJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1NwZWNpZnkgcmVnaW9uIGluZm9ybWF0aW9uIGZvciBtYW5hZ2luZyByZXNvdXJjZXMnLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAnY24taGFuZ3pob3UnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignbW9kZScsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnbScsXG4gICAgICAgICAgICAgICAgICAgIGRlbWFuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1tb2RlIHtBS3xTdHNUb2tlbnxSYW1Sb2xlQXJufEVjc1JhbVJvbGV9YCB0byBhc3NpZ24gYXV0aGVudGljYXRlIG1vZGUnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignYWNjZXNzLWtleS1pZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnYWsnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLWFjY2Vzcy1rZXktaWQgQWNjZXNzS2V5SWRgIHRvIGFzc2lnbiBBY2Nlc3NLZXlJZCwgcmVxdWlyZWQgaW4gQUsvU3RzVG9rZW4vUmFtUm9sZUFybiBtb2RlJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2FjY2Vzcy1rZXktc2VjcmV0Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdzaycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tYWNjZXNzLWtleS1zZWNyZXQgQWNjZXNzS2V5U2VjcmV0YCB0byBhc3NpZ24gQWNjZXNzS2V5U2VjcmV0LCByZXF1aXJlZCBpbiBBSy9TdHNUb2tlbi9SYW1Sb2xlQXJuIG1vZGUnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignc3RzLXRva2VuJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdzdHMnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLXN0cy10b2tlbiBTdHNUb2tlbmAgdG8gYXNzaWduIFN0c1Rva2VuLCByZXF1aXJlZCBpbiBTdHNUb2tlbiBtb2RlJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3JhbS1yb2xlLWFybicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnYXJuJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1yYW0tcm9sZS1hcm4gUmFtUm9sZUFybmAgdG8gYXNzaWduIFJhbVJvbGVBcm4oZWc6IGFjczpyYW06OioqKioqKjpyb2xlLyoqKioqKiksIHJlcXVpcmVkIGluIFJhbVJvbGVBcm4gbW9kZScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdyb2xlLXNlc3Npb24tbmFtZScsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAncycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tcm9sZS1zZXNzaW9uLW5hbWUgUm9sZVNlc3Npb25OYW1lYCB0byBhc3NpZ24gUm9sZVNlc3Npb25OYW1lLCByZXF1aXJlZCBpbiBSYW1Sb2xlQXJuIG1vZGUnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncmFtLXJvbGUtbmFtZScsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAncm9sZScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tcmFtLXJvbGUtbmFtZSBSYW1Sb2xlTmFtZWAgdG8gYXNzaWduIFJhbVJvbGVOYW1lLCByZXF1aXJlZCBpbiBFY3NSYW1Sb2xlIG1vZGUnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnZlcnNpb24odmVyc2lvbi5ESVNQTEFZX1ZFUlNJT04pXG4gICAgICAgIC5kZW1hbmRDb21tYW5kKDEsICcnKSAvLyBqdXN0IHByaW50IGhlbHBcbiAgICAgICAgLnJlY29tbWVuZENvbW1hbmRzKClcbiAgICAgICAgLmhlbHAoKVxuICAgICAgICAuYWxpYXMoJ2gnLCAnaGVscCcpXG4gICAgICAgIC5lcGlsb2d1ZShcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnSWYgeW91ciBhcHAgaGFzIGEgc2luZ2xlIHN0YWNrLCB0aGVyZSBpcyBubyBuZWVkIHRvIHNwZWNpZnkgdGhlIHN0YWNrIG5hbWUnLFxuICAgICAgICAgICAgICAgICdJZiBvbmUgb2YgY2RrLmpzb24gb3Igfi8uY2RrLmpzb24gZXhpc3RzLCBvcHRpb25zIHNwZWNpZmllZCB0aGVyZSB3aWxsIGJlIHVzZWQgYXMgZGVmYXVsdHMuIFNldHRpbmdzIGluIGNkay5qc29uIHRha2UgcHJlY2VkZW5jZS4nLFxuICAgICAgICAgICAgXS5qb2luKCdcXG5cXG4nKSxcbiAgICAgICAgKS5hcmd2O1xufVxuXG5pZiAoIXByb2Nlc3Muc3Rkb3V0LmlzVFRZKSB7XG4gICAgY29sb3JzLmRpc2FibGUoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdENvbW1hbmRMaW5lKCkge1xuICAgIGNvbnN0IGFyZ3YgPSBhd2FpdCBwYXJzZUNvbW1hbmRMaW5lQXJndW1lbnRzKCk7XG4gICAgaWYgKGFyZ3YudmVyYm9zZSkge1xuICAgICAgICBzZXRMb2dMZXZlbChhcmd2LnZlcmJvc2UpO1xuICAgIH1cbiAgICBkZWJ1ZygnQ0RLIHRvb2xraXQgdmVyc2lvbjonLCB2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTik7XG4gICAgZGVidWcoJ0NvbW1hbmQgbGluZSBhcmd1bWVudHM6JywgYXJndik7XG5cbiAgICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oYXJndik7XG4gICAgYXdhaXQgY29uZmlndXJhdGlvbi5sb2FkKCk7XG5cbiAgICBjb25zdCBjbG91ZEV4ZWN1dGFibGUgPSBuZXcgQ2xvdWRFeGVjdXRhYmxlKHtcbiAgICAgICAgY29uZmlndXJhdGlvbixcbiAgICAgICAgc3ludGhlc2l6ZXI6IGV4ZWNQcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgY29uc3QgY21kID0gU3RyaW5nKGFyZ3YuX1swXSk7XG5cbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IGF3YWl0IG1haW4oY21kLCBhcmd2KTtcbiAgICBpZiAodHlwZW9mIHJldHVyblZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gdG9Kc29uT3JZYW1sKHJldHVyblZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXR1cm5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBtYWluKGNvbW1hbmQ6IHN0cmluZywgYXJnczogYW55KTogUHJvbWlzZTxudW1iZXIgfCBzdHJpbmcgfCB7fSB8IHZvaWQ+IHtcbiAgICAgICAgYXJncy5TVEFDS1MgPSBhcmdzLlNUQUNLUyB8fCBbXTtcblxuICAgICAgICBjb25zdCBjbGkgPSBuZXcgQ2RrVG9vbGtpdCh7XG4gICAgICAgICAgICBjbG91ZEV4ZWN1dGFibGUsXG4gICAgICAgICAgICB2ZXJib3NlOiBhcmd2LnRyYWNlIHx8IGFyZ3YudmVyYm9zZSA+IDAsXG4gICAgICAgICAgICBpZ25vcmVFcnJvcnM6IGFyZ3ZbJ2lnbm9yZS1lcnJvcnMnXSxcbiAgICAgICAgICAgIHN0cmljdDogYXJndi5zdHJpY3QsXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uLFxuICAgICAgICB9KTtcblxuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xzJzpcbiAgICAgICAgICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjbGkubGlzdChhcmdzLlNUQUNLUyk7XG5cbiAgICAgICAgICAgIGNhc2UgJ2dlbmVyYXRlLXN0YWNrLWZpbGUnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5nZW5lcmF0ZVN0YWNrSW5mbyh7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogYXJnc1sncmVzb3VyY2UtZ3JvdXAtaWQnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnY29uZmlnJzpcbiAgICAgICAgICAgICAgICAvLyB3YWl0IHVzZXIgZm9yIHJvcyBpbnB1dFxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5jb25maWcoYXJncy5nbG9iYWwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnY29uZmlnLXNldCc6XG4gICAgICAgICAgICAgICAgLy8gd2FpdCB1c2VyIGZvciByb3MgaW5wdXRcbiAgICAgICAgICAgICAgICBhd2FpdCBjbGkuY29uZmlnU2V0KHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsOiBhcmdzLmdsb2JhbCxcbiAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGFyZ3MuZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbjogYXJncy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IGFyZ3MubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgYWs6IGFyZ3NbJ2FjY2Vzcy1rZXktaWQnXSxcbiAgICAgICAgICAgICAgICAgICAgc2s6IGFyZ3NbJ2FjY2Vzcy1rZXktc2VjcmV0J10sXG4gICAgICAgICAgICAgICAgICAgIHN0czogYXJnc1snc3RzLXRva2VuJ10sXG4gICAgICAgICAgICAgICAgICAgIHJhbVJvbGVBcm46IGFyZ3NbJ3JhbS1yb2xlLWFybiddLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IGFyZ3NbJ3JvbGUtc2Vzc2lvbi1uYW1lJ10sXG4gICAgICAgICAgICAgICAgICAgIHJhbVJvbGVOYW1lOiBhcmdzWydyYW0tcm9sZS1uYW1lJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ2RpZmYnOlxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjbGkuZGlmZih7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcmdzLnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRMaW5lczogYXJncy5jb250ZXh0TGluZXMsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhc2UgJ2RlcGxveSc6XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyTWFwOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfSA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW1ldGVyIG9mIGFyZ3MucGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtZXRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlID0gKHBhcmFtZXRlciBhcyBzdHJpbmcpLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJNYXBba2V5VmFsdWVbMF1dID0ga2V5VmFsdWUuc2xpY2UoMSkuam9pbignPScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5kZXBsb3koe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVyTWFwLFxuICAgICAgICAgICAgICAgICAgICBleGNsdXNpdmVseTogYXJncy5leGNsdXNpdmVseSxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogYXJncy50aW1lb3V0TWludXRlcyxcbiAgICAgICAgICAgICAgICAgICAgc3luYzogYXJncy5zeW5jLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRzRmlsZTogYXJnc1snb3V0cHV0cy1maWxlJ10sXG4gICAgICAgICAgICAgICAgICAgIHNraXBJZk5vQ2hhbmdlczogYXJnc1snc2tpcC1pZi1uby1jaGFuZ2VzJ10sXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVSb2xsYmFjazogYXJnc1snZGlzYWJsZS1yb2xsYmFjayddLFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IGFyZ3NbJ3Jlc291cmNlLWdyb3VwLWlkJ10sXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbExvZyA6YXJnc1snZGV0YWlsLWxvZyddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdkZXN0cm95JzpcbiAgICAgICAgICAgICAgICBhd2FpdCBjbGkuZGVzdHJveSh7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgICAgICAgICAgICBxdWlldDogYXJncy5xdWlldCxcbiAgICAgICAgICAgICAgICAgICAgc3luYzogYXJncy5zeW5jXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdldmVudCc6XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lOiBhcmdzWydTVEFDSyddLFxuICAgICAgICAgICAgICAgICAgICBsb2dpY2FsUmVzb3VyY2VJZDogYXJnc1snbG9naWNhbC1yZXNvdXJjZS1pZCddLFxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiBhcmdzWydwYWdlLW51bWJlciddLFxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogYXJnc1sncGFnZS1zaXplJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ291dHB1dCc6XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLm91dHB1dCh7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZTogYXJnc1snU1RBQ0snXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAncmVzb3VyY2UnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5yZXNvdXJjZSh7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdsaXN0LXN0YWNrcyc6XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmxpc3RTdGFja3Moe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICAgICAgICAgICAgYWxsOiBhcmdzLmFsbCxcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcjogYXJnc1sncGFnZS1udW1iZXInXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IGFyZ3NbJ3BhZ2Utc2l6ZSddLFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IGFyZ3NbJ3Jlc291cmNlLWdyb3VwLWlkJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ2xvYWQtY29uZmlnJzpcbiAgICAgICAgICAgICAgICBhd2FpdCBjbGkubG9hZENsaUNvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbDogYXJncy5nbG9iYWwsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRGaWxlUGF0aDogYXJnc1snZmlsZS1wYXRoJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ3N5bnRoZXNpemUnOlxuICAgICAgICAgICAgY2FzZSAnc3ludGgnOlxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjbGkuc3ludGgoYXJncy5TVEFDS1MsIGFyZ3MuZXhjbHVzaXZlbHkpO1xuXG4gICAgICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBsYW5ndWFnZSA9IGNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuZ2V0KFsnbGFuZ3VhZ2UnXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBhcmdzLmxhbmd1YWdlO1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHByaW50QXZhaWxhYmxlVGVtcGxhdGVzKGxhbmd1YWdlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2xpSW5pdChhcmdzLlRFTVBMQVRFLCBsYW5ndWFnZSwgdW5kZWZpbmVkLCBhcmdzLmdlbmVyYXRlT25seSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICd2ZXJzaW9uJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YSh2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTik7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGNvbW1hbmQ6ICcgKyBjb21tYW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvSnNvbk9yWWFtbChvYmplY3Q6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBzZXJpYWxpemVTdHJ1Y3R1cmUob2JqZWN0LCBhcmd2Lmpzb24pO1xuICAgIH1cbn1cblxuaW5pdENvbW1hbmRMaW5lKClcbiAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZGF0YSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gcHJvY2Vzcy5leGl0Q29kZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBlcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgIGlmIChlcnIuc3RhY2spIHtcbiAgICAgICAgICAgIGRlYnVnKGVyci5zdGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzcy5leGl0Q29kZSA9IDE7XG4gICAgfSk7XG4iXX0=