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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFFL0Isa0VBQThEO0FBQzlELDBDQUE4QztBQUM5QyxvREFBZ0Q7QUFDaEQsc0NBQXVGO0FBQ3ZGLDRDQUFpRTtBQUNqRSxnREFBc0Q7QUFDdEQsOENBQWdEO0FBQ2hELDBDQUEwQztBQUUxQyxLQUFLLFVBQVUseUJBQXlCO0lBQ3BDLE1BQU0scUJBQXFCLEdBQUcsTUFBTSw2QkFBc0IsQ0FBQztJQUMzRCxPQUFPLEtBQUs7U0FDUCxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ1YsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO1NBQzVDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSw4R0FBOEc7UUFDcEgsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQztTQUNELE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDWixJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLHNFQUFzRTtRQUM1RSxPQUFPLEVBQUUsS0FBSztLQUNqQixDQUFDO1NBQ0QsTUFBTSxDQUFDLGVBQWUsRUFBRTtRQUNyQixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLHVFQUF1RTtLQUNoRixDQUFDO1NBQ0QsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxFQUFFLENBQUM7U0FDNUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLHVDQUF1QyxFQUFFLENBQUM7U0FDcEYsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUNoQixPQUFPLENBQ0osaUJBQWlCLEVBQ2pCLDJHQUEyRyxFQUMzRyxDQUFDLEtB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O0tBQ3BCO0lBQ0QsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xuaW1wb3J0ICogYXMgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQgeyBDbG91ZEV4ZWN1dGFibGUgfSBmcm9tICcuLi9saWIvYXBpL2Nsb3VkLWV4ZWN1dGFibGUnO1xuaW1wb3J0IHsgZXhlY1Byb2dyYW0gfSBmcm9tICcuLi9saWIvYXBpL2V4ZWMnO1xuaW1wb3J0IHsgQ2RrVG9vbGtpdCB9IGZyb20gJy4uL2xpYi9jZGstdG9vbGtpdCc7XG5pbXBvcnQgeyBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzLCBjbGlJbml0LCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcyB9IGZyb20gJy4uL2xpYi9pbml0JztcbmltcG9ydCB7IGRhdGEsIGRlYnVnLCBlcnJvciwgc2V0TG9nTGV2ZWwgfSBmcm9tICcuLi9saWIvbG9nZ2luZyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHJ1Y3R1cmUgfSBmcm9tICcuLi9saWIvc2VyaWFsaXplJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9saWIvc2V0dGluZ3MnO1xuaW1wb3J0ICogYXMgdmVyc2lvbiBmcm9tICcuLi9saWIvdmVyc2lvbic7XG5cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlQ29tbWFuZExpbmVBcmd1bWVudHMoKSB7XG4gICAgY29uc3QgaW5pdFRlbXBsYXRlTGFuZ3VhZ2VzID0gYXdhaXQgYXZhaWxhYmxlSW5pdExhbmd1YWdlcztcbiAgICByZXR1cm4geWFyZ3NcbiAgICAgICAgLmVudignQ0RLJylcbiAgICAgICAgLnVzYWdlKCdVc2FnZTogcm9zLWNkayAtYSBbY2RrLWFwcF0gQ09NTUFORCcpXG4gICAgICAgIC5vcHRpb24oJ2FwcCcsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZGVzYzogJ1JFUVVJUkVEOiBjb21tYW5kLWxpbmUgZm9yIGV4ZWN1dGluZyB5b3VyIGFwcCBvciBhIGNsb3VkIGFzc2VtYmx5IGRpcmVjdG9yeSAoZS5nLiBcIm5weCB0cy1ub2RlIGJpbi90ZXN0LnRzXCIpJyxcbiAgICAgICAgICAgIHJlcXVpcmVzQXJnOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb24oJ2pzb24nLCB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBhbGlhczogJ2onLFxuICAgICAgICAgICAgZGVzYzogJ1VzZSBKU09OIG91dHB1dCBpbnN0ZWFkIG9mIFlBTUwgd2hlbiB0ZW1wbGF0ZXMgYXJlIHByaW50ZWQgdG8gU1RET1VUJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgICAub3B0aW9uKCdpZ25vcmUtZXJyb3JzJywge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICBkZXNjOiAnSWdub3JlcyBzeW50aGVzaXMgZXJyb3JzLCB3aGljaCB3aWxsIGxpa2VseSBwcm9kdWNlIGFuIGludmFsaWQgb3V0cHV0JyxcbiAgICAgICAgfSlcbiAgICAgICAgLm9wdGlvbigndHJhY2UnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1ByaW50IHRyYWNlIGZvciBzdGFjayB3YXJuaW5ncycgfSlcbiAgICAgICAgLm9wdGlvbignc3RyaWN0JywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdEbyBub3QgY29uc3RydWN0IHN0YWNrcyB3aXRoIHdhcm5pbmdzJyB9KVxuICAgICAgICAuY291bnQoJ3ZlcmJvc2UnKVxuICAgICAgICAuY29tbWFuZChcbiAgICAgICAgICAgICdpbml0IFtURU1QTEFURV0nLFxuICAgICAgICAgICAgJ0NyZWF0ZSBhIG5ldywgZW1wdHkgQ0RLIHByb2plY3QgZnJvbSBhIHRlbXBsYXRlLiBJbnZva2VkIHdpdGhvdXQgVEVNUExBVEUsIHRoZSBhcHAgdGVtcGxhdGUgd2lsbCBiZSB1c2VkLicsXG4gICAgICAgICAgICAoeWFyZ3MpID0+XG4gICAgICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbignbGFuZ3VhZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAnVGhlIGxhbmd1YWdlIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXcgcHJvamVjdCAoZGVmYXVsdCBjYW4gYmUgY29uZmlndXJlZCBpbiB+Ly5jZGsuanNvbiknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlczogaW5pdFRlbXBsYXRlTGFuZ3VhZ2VzLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uKCdsaXN0JywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdMaXN0IHRoZSBhdmFpbGFibGUgdGVtcGxhdGVzJyB9KVxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uKCdnZW5lcmF0ZS1vbmx5Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdJZiB0cnVlLCBvbmx5IGdlbmVyYXRlcyBwcm9qZWN0IGZpbGVzLCB3aXRob3V0IGV4ZWN1dGluZyBhZGRpdGlvbmFsIG9wZXJhdGlvbnMgc3VjaCBhcyBzZXR0aW5nIHVwIGEgZ2l0IHJlcG8sIGluc3RhbGxpbmcgZGVwZW5kZW5jaWVzIG9yIGNvbXBpbGluZyB0aGUgcHJvamVjdCcsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKFsnbGlzdCBbU1RBQ0tTLi5dJywgJ2xzIFtTVEFDS1MuLl0nXSwgJ0xpc3RzIGFsbCBzdGFja3MgaW4gdGhlIGFwcCcsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzLm9wdGlvbignbG9uZycsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnRGlzcGxheSBlbnZpcm9ubWVudCBpbmZvcm1hdGlvbiBmb3IgZWFjaCBzdGFjaycsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZChcbiAgICAgICAgICAgIFsnc3ludGhlc2l6ZSBbU1RBQ0tTLi5dJywgJ3N5bnRoIFtTVEFDS1MuLl0nXSxcbiAgICAgICAgICAgICdTeW50aGVzaXplcyBhbmQgcHJpbnRzIHRoZSBST1MgdGVtcGxhdGUgZm9yIHRoaXMgc3RhY2snLFxuICAgICAgICAgICAgKHlhcmdzKSA9PlxuICAgICAgICAgICAgICAgIHlhcmdzLm9wdGlvbignZXhjbHVzaXZlbHknLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdlJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJPbmx5IHN5bnRoZXNpemUgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZCgnZGVwbG95IFtTVEFDS1MuLl0nLCAnRGVwbG95cyB0aGUgc3RhY2socykgbmFtZWQgU1RBQ0tTIHRvIFJPUyBpbnRvIHlvdXIgYWxpY2xvdWQgYWNjb3VudCcsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncGFyYW1ldGVycycsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ0FkZGl0aW9uYWwgcGFyYW1ldGVycyBwYXNzZWQgdG8gUk9TIGF0IGRlcGxveSB0aW1lIChTVEFDSzpLRVk9VkFMVUUpJyxcbiAgICAgICAgICAgICAgICAgICAgbmFyZ3M6IDEsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVzQXJnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7fSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2V4Y2x1c2l2ZWx5Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnZScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiT25seSBkZXBsb3kgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3RpbWVvdXRNaW51dGVzJywgeyB0eXBlOiAnbnVtYmVyJywgYWxpYXM6ICd0JywgZGVzYzogJ1RoZSB0aW1lb3V0IG1pbnV0ZXMnLCBkZWZhdWx0OiAyMCB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3Jlc291cmNlLWdyb3VwLWlkJywgeyB0eXBlOiAnc3RyaW5nJywgZGVzYzogJ1Jlc291cmNlIGdyb3VwIElELiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgcmVzb3VyY2Ugc3RhY2sgd2lsbCBiZSBhZGRlZCB0byB0aGUgZGVmYXVsdCByZXNvdXJjZSBncm91cCd9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3N5bmMnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1N5bmMgZGVwbG95IHN0YWNrJywgZGVmYXVsdDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdza2lwLWlmLW5vLWNoYW5nZXMnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1doZW4gc3RhY2sgZG8gbm90IGNvbnRhaW5zIGFueSBuZXcgY2hhbmdlcyBza2lwIHN0YWNrIGNoZWNrcycsIGRlZmF1bHQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignZGlzYWJsZS1yb2xsYmFjaycsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnRGlzYWJsZSByb2xsYmFjayB3aGVuIGNyZWF0aW5nIHJlc291cmNlIHN0YWNrIGZhaWxzJywgZGVmYXVsdDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdvdXRwdXRzLWZpbGUnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1N0YWNrIG91dHB1dHMgd2lsbCBiZSB3cml0dGVuIGFzIEpTT04nLCBkZWZhdWx0OiBmYWxzZSB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZChcbiAgICAgICAgICAgICdkaWZmIFtTVEFDS1MuLl0nLFxuICAgICAgICAgICAgJ0NvbXBhcmVzIHRoZSBzcGVjaWZpZWQgc3RhY2sgd2l0aCB0aGUgZGVwbG95ZWQgc3RhY2sgb3IgYSBsb2NhbCB0ZW1wbGF0ZSBmaWxlLCBhbmQgcmV0dXJucyB3aXRoIHN0YXR1cyAxIGlmIGFueSBkaWZmZXJlbmNlIGlzIGZvdW5kJyxcbiAgICAgICAgICAgICh5YXJncykgPT5cbiAgICAgICAgICAgICAgICB5YXJnc1xuICAgICAgICAgICAgICAgICAgICAub3B0aW9uKCdwYXRoJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1RoZSBwYXRoIHRvIHRoZSB0ZW1wbGF0ZSB0byBjb21wYXJlIHdpdGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogJy4vY2RrLm91dCcsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vcHRpb24oJ2NvbnRleHQtbGluZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6ICdOdW1iZXIgb2YgY29udGV4dCBsaW5lcyB0byBpbmNsdWRlIGluIGFyYml0cmFyeSBKU09OIGRpZmYgcmVuZGVyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDMsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKCdkZXN0cm95IFtTVEFDS1MuLl0nLCAnRGVzdHJveSB0aGUgc3RhY2socykgbmFtZWQgU1RBQ0tTJywgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdxdWlldCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3EnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnZGVzdHJveSB3aXRob3V0IGNvbmZpcm0nLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignc3luYycsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnc3luYyBkZXN0cm95IHN0YWNrJywgZGVmYXVsdDogZmFsc2UgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoJ2V2ZW50IFtTVEFDSy4uXScsICdHZXQgcmVzb3VyY2UgZXZlbnRzIHdpdGhpbiB0aGUgcmVzb3VyY2UgU1RBQ0snLCAoeWFyZ3MpID0+XG4gICAgICAgICAgICB5YXJnc1xuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2xvZ2ljYWwtcmVzb3VyY2UtaWQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2wnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnU3RhY2sgbG9naWNhbCByZXNvdXJjZSBpZCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3BhZ2UtbnVtYmVyJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICduJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1RoZSBudW1iZXIgb2YgdGhlIHBhZ2UgdG8gcmV0dXJuLCBQYWdlcyBzdGFydCBmcm9tIHBhZ2UgMS4gRGVmYXVsdCB2YWx1ZToxJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3BhZ2Utc2l6ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAncycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIGVudHJpZXMgdG8gcmV0dXJuIG9uIGVhY2ggcGFnZSwgTWF4aW11bSB2YWx1ZTogNTAuIERlZmF1bHQgdmFsdWU6IDEwJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKCdvdXRwdXQgW1NUQUNLLi5dJywgJ0dldCB0aGUgb3V0cHV0IGluZm9ybWF0aW9uIG9mIHJlc291cmNlIHN0YWNrJylcbiAgICAgICAgLmNvbW1hbmQoJ3Jlc291cmNlIFtTVEFDS1MuLl0nLCAnR2V0IHJlc291cmNlcyBpbiB0aGUgcmVzb3VyY2UgU1RBQ0tTJylcbiAgICAgICAgLmNvbW1hbmQoJ2xpc3Qtc3RhY2tzIFtTVEFDS1MuLl0nLCAnR2V0IHJlc291cmNlcyBpbiB0aGUgcmVzb3VyY2UgU1RBQ0tTJywgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdhbGwnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdhJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ0dldCBhbGwgU3RhY2tzIGluIGFjY291bnQgc2V0IGNvbmZpZyBSZWdpb24uJyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdwYWdlLW51bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnbicsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIHRoZSBwYWdlIHRvIHJldHVybiwgUGFnZXMgc3RhcnQgZnJvbSBwYWdlIDEuIERlZmF1bHQgdmFsdWU6MScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdwYWdlLXNpemUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3MnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiBlbnRyaWVzIHRvIHJldHVybiBvbiBlYWNoIHBhZ2UsIE1heGltdW0gdmFsdWU6IDEwMC4gRGVmYXVsdCB2YWx1ZTogMTAnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncmVzb3VyY2UtZ3JvdXAtaWQnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZGVzYzogJ1Jlc291cmNlIGdyb3VwIElELiBSZXNvdXJjZSBHcm91cCBhbGxvd3MgeW91IHRvIHNvcnQgcmVzb3VyY2VzIG93bmVkIGJ5IHlvdXIgQWxpYmFiYSBDbG91ZCBhY2NvdW50IGludG8gZ3JvdXBzLiBUaGlzIHNpbXBsaWZpZXMgcmVzb3VyY2UgYW5kIHBlcm1pc3Npb24gbWFuYWdlbWVudCB3aXRoaW4geW91ciBBbGliYWJhIENsb3VkIGFjY291bnQuJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZCgnbG9hZC1jb25maWcnLCAnTG9hZCBBbGl5dW4gQ0xJIGNvbmZpZyB0byBDREsuJywgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3Mub3B0aW9uKCdnbG9iYWwnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGFsaWFzOiAnZycsXG4gICAgICAgICAgICAgICAgZGVzYzogJ1doZXRoZXIgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3RvcmVkIGluIGdsb2JhbCBlbnYnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdmaWxlLXBhdGgnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2YnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnU3BlY2lmeSB0aGUgY2xpIGNvbmZpZ3VyYXRpb24gZmlsZSBwYXRoIHRvIGxvYWQnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoJ2NvbmZpZycsICdTZXQgeW91ciBhbGljbG91ZCBhY2NvdW50IGNvbmZpZ3VyYXRpb24uJywgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3Mub3B0aW9uKCdnbG9iYWwnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGFsaWFzOiAnZycsXG4gICAgICAgICAgICAgICAgZGVzYzogJ1doZXRoZXIgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3RvcmVkIGluIGdsb2JhbCBlbnYnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoJ2dlbmVyYXRlLXN0YWNrLWZpbGUnLCAnVGhlIHJlc291cmNlIHN0YWNrIGluZm9ybWF0aW9uIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkJywgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3Mub3B0aW9uKCdyZXNvdXJjZS1ncm91cC1pZCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnUmVzb3VyY2UgZ3JvdXAgSUQuIFNldCB0aGlzIHBhcmFtZXRlciB0byBxdWVyeSB0aGUgc3RhY2sgb2YgdGhlIGNvcnJlc3BvbmRpbmcgcmVzb3VyY2UgZ3JvdXAuJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoJ2NvbmZpZy1zZXQnLCAnU2V0IHlvdXIgYWxpY2xvdWQgYWNjb3VudCBjb25maWd1cmF0aW9uIG5vbiBpbnRlcmFjdGl2ZSBtb2RlLicsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzLm9wdGlvbignZ2xvYmFsJywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBhbGlhczogJ2cnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICdXaGV0aGVyIHRoZSBjb25maWcgc2hvdWxkIGJlIHN0b3JlZCBpbiBnbG9iYWwgZW52JyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignZW5kcG9pbnQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2UnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnU3BlY2lmeSB0aGUgc2VydmljZSBhZGRyZXNzIHRoYXQgaW5pdGlhdGVkIHRoZSByZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdyZWdpb24nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3InLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnU3BlY2lmeSByZWdpb24gaW5mb3JtYXRpb24gZm9yIG1hbmFnaW5nIHJlc291cmNlcycsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdjbi1oYW5nemhvdScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdtb2RlJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdtJyxcbiAgICAgICAgICAgICAgICAgICAgZGVtYW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLW1vZGUge0FLfFN0c1Rva2VufFJhbVJvbGVBcm58RWNzUmFtUm9sZX1gIHRvIGFzc2lnbiBhdXRoZW50aWNhdGUgbW9kZScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdhY2Nlc3Mta2V5LWlkJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdhaycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tYWNjZXNzLWtleS1pZCBBY2Nlc3NLZXlJZGAgdG8gYXNzaWduIEFjY2Vzc0tleUlkLCByZXF1aXJlZCBpbiBBSy9TdHNUb2tlbi9SYW1Sb2xlQXJuIG1vZGUnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignYWNjZXNzLWtleS1zZWNyZXQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3NrJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1hY2Nlc3Mta2V5LXNlY3JldCBBY2Nlc3NLZXlTZWNyZXRgIHRvIGFzc2lnbiBBY2Nlc3NLZXlTZWNyZXQsIHJlcXVpcmVkIGluIEFLL1N0c1Rva2VuL1JhbVJvbGVBcm4gbW9kZScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdzdHMtdG9rZW4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3N0cycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tc3RzLXRva2VuIFN0c1Rva2VuYCB0byBhc3NpZ24gU3RzVG9rZW4sIHJlcXVpcmVkIGluIFN0c1Rva2VuIG1vZGUnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncmFtLXJvbGUtYXJuJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdhcm4nLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLXJhbS1yb2xlLWFybiBSYW1Sb2xlQXJuYCB0byBhc3NpZ24gUmFtUm9sZUFybihlZzogYWNzOnJhbTo6KioqKioqOnJvbGUvKioqKioqKSwgcmVxdWlyZWQgaW4gUmFtUm9sZUFybiBtb2RlJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3JvbGUtc2Vzc2lvbi1uYW1lJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1yb2xlLXNlc3Npb24tbmFtZSBSb2xlU2Vzc2lvbk5hbWVgIHRvIGFzc2lnbiBSb2xlU2Vzc2lvbk5hbWUsIHJlcXVpcmVkIGluIFJhbVJvbGVBcm4gbW9kZScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdyYW0tcm9sZS1uYW1lJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdyb2xlJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1yYW0tcm9sZS1uYW1lIFJhbVJvbGVOYW1lYCB0byBhc3NpZ24gUmFtUm9sZU5hbWUsIHJlcXVpcmVkIGluIEVjc1JhbVJvbGUgbW9kZScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAudmVyc2lvbih2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTilcbiAgICAgICAgLmRlbWFuZENvbW1hbmQoMSwgJycpIC8vIGp1c3QgcHJpbnQgaGVscFxuICAgICAgICAucmVjb21tZW5kQ29tbWFuZHMoKVxuICAgICAgICAuaGVscCgpXG4gICAgICAgIC5hbGlhcygnaCcsICdoZWxwJylcbiAgICAgICAgLmVwaWxvZ3VlKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICdJZiB5b3VyIGFwcCBoYXMgYSBzaW5nbGUgc3RhY2ssIHRoZXJlIGlzIG5vIG5lZWQgdG8gc3BlY2lmeSB0aGUgc3RhY2sgbmFtZScsXG4gICAgICAgICAgICAgICAgJ0lmIG9uZSBvZiBjZGsuanNvbiBvciB+Ly5jZGsuanNvbiBleGlzdHMsIG9wdGlvbnMgc3BlY2lmaWVkIHRoZXJlIHdpbGwgYmUgdXNlZCBhcyBkZWZhdWx0cy4gU2V0dGluZ3MgaW4gY2RrLmpzb24gdGFrZSBwcmVjZWRlbmNlLicsXG4gICAgICAgICAgICBdLmpvaW4oJ1xcblxcbicpLFxuICAgICAgICApLmFyZ3Y7XG59XG5cbmlmICghcHJvY2Vzcy5zdGRvdXQuaXNUVFkpIHtcbiAgICBjb2xvcnMuZGlzYWJsZSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0Q29tbWFuZExpbmUoKSB7XG4gICAgY29uc3QgYXJndiA9IGF3YWl0IHBhcnNlQ29tbWFuZExpbmVBcmd1bWVudHMoKTtcbiAgICBpZiAoYXJndi52ZXJib3NlKSB7XG4gICAgICAgIHNldExvZ0xldmVsKGFyZ3YudmVyYm9zZSk7XG4gICAgfVxuICAgIGRlYnVnKCdDREsgdG9vbGtpdCB2ZXJzaW9uOicsIHZlcnNpb24uRElTUExBWV9WRVJTSU9OKTtcbiAgICBkZWJ1ZygnQ29tbWFuZCBsaW5lIGFyZ3VtZW50czonLCBhcmd2KTtcblxuICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbihhcmd2KTtcbiAgICBhd2FpdCBjb25maWd1cmF0aW9uLmxvYWQoKTtcblxuICAgIGNvbnN0IGNsb3VkRXhlY3V0YWJsZSA9IG5ldyBDbG91ZEV4ZWN1dGFibGUoe1xuICAgICAgICBjb25maWd1cmF0aW9uLFxuICAgICAgICBzeW50aGVzaXplcjogZXhlY1Byb2dyYW0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBjbWQgPSBTdHJpbmcoYXJndi5fWzBdKTtcblxuICAgIGNvbnN0IHJldHVyblZhbHVlID0gYXdhaXQgbWFpbihjbWQsIGFyZ3YpO1xuICAgIGlmICh0eXBlb2YgcmV0dXJuVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiB0b0pzb25PcllhbWwocmV0dXJuVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJldHVyblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG1haW4oY29tbWFuZDogc3RyaW5nLCBhcmdzOiBhbnkpOiBQcm9taXNlPG51bWJlciB8IHN0cmluZyB8IHt9IHwgdm9pZD4ge1xuICAgICAgICBhcmdzLlNUQUNLUyA9IGFyZ3MuU1RBQ0tTIHx8IFtdO1xuXG4gICAgICAgIGNvbnN0IGNsaSA9IG5ldyBDZGtUb29sa2l0KHtcbiAgICAgICAgICAgIGNsb3VkRXhlY3V0YWJsZSxcbiAgICAgICAgICAgIHZlcmJvc2U6IGFyZ3YudHJhY2UgfHwgYXJndi52ZXJib3NlID4gMCxcbiAgICAgICAgICAgIGlnbm9yZUVycm9yczogYXJndlsnaWdub3JlLWVycm9ycyddLFxuICAgICAgICAgICAgc3RyaWN0OiBhcmd2LnN0cmljdCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgICAgICAgY2FzZSAnbHMnOlxuICAgICAgICAgICAgY2FzZSAnbGlzdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5saXN0KGFyZ3MuU1RBQ0tTKTtcblxuICAgICAgICAgICAgY2FzZSAnZ2VuZXJhdGUtc3RhY2stZmlsZSc6XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmdlbmVyYXRlU3RhY2tJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBhcmdzWydyZXNvdXJjZS1ncm91cC1pZCddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdjb25maWcnOlxuICAgICAgICAgICAgICAgIC8vIHdhaXQgdXNlciBmb3Igcm9zIGlucHV0XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmNvbmZpZyhhcmdzLmdsb2JhbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdjb25maWctc2V0JzpcbiAgICAgICAgICAgICAgICAvLyB3YWl0IHVzZXIgZm9yIHJvcyBpbnB1dFxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5jb25maWdTZXQoe1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWw6IGFyZ3MuZ2xvYmFsLFxuICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogYXJncy5lbmRwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiBhcmdzLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogYXJncy5tb2RlLFxuICAgICAgICAgICAgICAgICAgICBhazogYXJnc1snYWNjZXNzLWtleS1pZCddLFxuICAgICAgICAgICAgICAgICAgICBzazogYXJnc1snYWNjZXNzLWtleS1zZWNyZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgc3RzOiBhcmdzWydzdHMtdG9rZW4nXSxcbiAgICAgICAgICAgICAgICAgICAgcmFtUm9sZUFybjogYXJnc1sncmFtLXJvbGUtYXJuJ10sXG4gICAgICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogYXJnc1sncm9sZS1zZXNzaW9uLW5hbWUnXSxcbiAgICAgICAgICAgICAgICAgICAgcmFtUm9sZU5hbWU6IGFyZ3NbJ3JhbS1yb2xlLW5hbWUnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnZGlmZic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5kaWZmKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1MsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFyZ3MucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dExpbmVzOiBhcmdzLmNvbnRleHRMaW5lcyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FzZSAnZGVwbG95JzpcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJNYXA6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9ID0ge307XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgYXJncy5wYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1ldGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5VmFsdWUgPSAocGFyYW1ldGVyIGFzIHN0cmluZykuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlck1hcFtrZXlWYWx1ZVswXV0gPSBrZXlWYWx1ZS5zbGljZSgxKS5qb2luKCc9Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmRlcGxveSh7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJNYXAsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1c2l2ZWx5OiBhcmdzLmV4Y2x1c2l2ZWx5LFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBhcmdzLnRpbWVvdXRNaW51dGVzLFxuICAgICAgICAgICAgICAgICAgICBzeW5jOiBhcmdzLnN5bmMsXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHNGaWxlOiBhcmdzWydvdXRwdXRzLWZpbGUnXSxcbiAgICAgICAgICAgICAgICAgICAgc2tpcElmTm9DaGFuZ2VzOiBhcmdzWydza2lwLWlmLW5vLWNoYW5nZXMnXSxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJvbGxiYWNrOiBhcmdzWydkaXNhYmxlLXJvbGxiYWNrJ10sXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogYXJnc1sncmVzb3VyY2UtZ3JvdXAtaWQnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnZGVzdHJveSc6XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmRlc3Ryb3koe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICAgICAgICAgICAgcXVpZXQ6IGFyZ3MucXVpZXQsXG4gICAgICAgICAgICAgICAgICAgIHN5bmM6IGFyZ3Muc3luY1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnZXZlbnQnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5ldmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZTogYXJnc1snU1RBQ0snXSxcbiAgICAgICAgICAgICAgICAgICAgbG9naWNhbFJlc291cmNlSWQ6IGFyZ3NbJ2xvZ2ljYWwtcmVzb3VyY2UtaWQnXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcjogYXJnc1sncGFnZS1udW1iZXInXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IGFyZ3NbJ3BhZ2Utc2l6ZSddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdvdXRwdXQnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5vdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWU6IGFyZ3NbJ1NUQUNLJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ3Jlc291cmNlJzpcbiAgICAgICAgICAgICAgICBhd2FpdCBjbGkucmVzb3VyY2Uoe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLU1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnbGlzdC1zdGFja3MnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5saXN0U3RhY2tzKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1MsXG4gICAgICAgICAgICAgICAgICAgIGFsbDogYXJncy5hbGwsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IGFyZ3NbJ3BhZ2UtbnVtYmVyJ10sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiBhcmdzWydwYWdlLXNpemUnXSxcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBhcmdzWydyZXNvdXJjZS1ncm91cC1pZCddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdsb2FkLWNvbmZpZyc6XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmxvYWRDbGlDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWw6IGFyZ3MuZ2xvYmFsLFxuICAgICAgICAgICAgICAgICAgICBsb2FkRmlsZVBhdGg6IGFyZ3NbJ2ZpbGUtcGF0aCddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdzeW50aGVzaXplJzpcbiAgICAgICAgICAgIGNhc2UgJ3N5bnRoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2xpLnN5bnRoKGFyZ3MuU1RBQ0tTLCBhcmdzLmV4Y2x1c2l2ZWx5KTtcblxuICAgICAgICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbGFuZ3VhZ2UgPSBjb25maWd1cmF0aW9uLnNldHRpbmdzLmdldChbJ2xhbmd1YWdlJ10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhbmd1YWdlID0gYXJncy5sYW5ndWFnZTtcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5saXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcyhsYW5ndWFnZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaUluaXQoYXJncy5URU1QTEFURSwgbGFuZ3VhZ2UsIHVuZGVmaW5lZCwgYXJncy5nZW5lcmF0ZU9ubHkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAndmVyc2lvbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEodmVyc2lvbi5ESVNQTEFZX1ZFUlNJT04pO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBjb21tYW5kOiAnICsgY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0pzb25PcllhbWwob2JqZWN0OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc2VyaWFsaXplU3RydWN0dXJlKG9iamVjdCwgYXJndi5qc29uKTtcbiAgICB9XG59XG5cbmluaXRDb21tYW5kTGluZSgpXG4gICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRhdGEodmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIC8vIHByb2Nlc3MuZXhpdENvZGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICBpZiAoZXJyLnN0YWNrKSB7XG4gICAgICAgICAgICBkZWJ1ZyhlcnIuc3RhY2spO1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3MuZXhpdENvZGUgPSAxO1xuICAgIH0pO1xuIl19