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
        .command(['list [STACKS..]', 'ls [STACKS..]'], 'Lists stack(s) in the app. Invoked without the specified stack(s), all stacks in the app will be listed.', (yargs) => yargs.option('long', {
        type: 'boolean',
        default: false,
        alias: 'l',
        desc: 'Display environment information for each stack',
    }))
        .command(['synthesize [STACKS..]', 'synth [STACKS..]'], 'Synthesizes and prints the ROS template for the stack(s). Invoked without the specified stack(s), all stacks in the app will be synthesized.', (yargs) => yargs.option('exclusively', {
        type: 'boolean',
        alias: 'e',
        desc: "Only synthesize requested stacks, don't include dependencies",
    }))
        .command('deploy [STACKS..]', 'Deploys the stack(s) through ROS into your alicloud account. If there\'s only one stack in your app, you can invoke it without specifying stack.', (yargs) => yargs
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
        .option('region', { type: 'string', desc: 'The region where you want to deploy.', default: 'default' })
        .option('timeoutMinutes', { type: 'number', alias: 't', desc: 'The timeout minutes', default: 20 })
        .option('resource-group-id', { type: 'string', desc: 'Resource group ID. If this parameter is not specified, the resource stack will be added to the default resource group' })
        .option('sync', { type: 'boolean', desc: 'Sync deploy stack', default: false })
        .option('skip-if-no-changes', { type: 'boolean', desc: 'When stack do not contains any new changes skip stack checks', default: false })
        .option('detail-log', { type: 'boolean', desc: 'When stack deploy error, set this params to show more error information', default: false })
        .option('disable-rollback', { type: 'boolean', desc: 'Disable rollback when creating resource stack fails', default: false })
        .option('outputs-file', { type: 'boolean', desc: 'Stack outputs will be written as JSON', default: false }))
        .command('diff [STACKS..]', 'Compares the specified stack with the deployed stack or a local template file, and returns with status 1 if any difference is found. Invoked without the specified stack(s), all stacks in the app will be compared.', (yargs) => yargs
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
        .command('destroy [STACKS..]', 'Destroy the stack(s) in the app. Invoked without the specified stack(s), all stacks in the app will be destroyed after confirmation.', (yargs) => yargs
        .option('quiet', {
        type: 'boolean',
        alias: 'q',
        desc: 'destroy without confirm',
        default: false
    })
        .option('sync', { type: 'boolean', desc: 'sync destroy stack', default: false }))
        .command('event [STACKS..]', 'Get the stack(s) events. If there\'s only one stack in your app, you can invoke it without specifying stack.', (yargs) => yargs
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
        .command('output [STACKS..]', 'Get the output information of the stack(s). Invoked without the specified stack(s), all outputs from all stacks in the app will be displayed.')
        .command('resource [STACKS..]', 'Get resources in the stack(s).  Invoked without the specified stack(s), all resources from all stacks in the app will be displayed.')
        .command('list-stacks [STACKS..]', 'Get resources in the resource STACKS', (yargs) => yargs
        .option('all', {
        type: 'boolean',
        alias: 'a',
        desc: 'Get all Stacks in account set config Region.',
        default: false,
    })
        .option('region', {
        type: 'string',
        desc: 'The region where you want to get stacks from.'
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
                    regionId: args['region'],
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
                    stackNames: args.STACKS,
                    logicalResourceId: args['logical-resource-id'],
                    pageNumber: args['page-number'],
                    pageSize: args['page-size']
                });
                return;
            case 'output':
                await cli.output({
                    stackNames: args.STACKS
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
                    resourceGroupId: args['resource-group-id'],
                    region: args.region
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFFL0Isa0VBQThEO0FBQzlELDBDQUE4QztBQUM5QyxvREFBZ0Q7QUFDaEQsc0NBQXVGO0FBQ3ZGLDRDQUFpRTtBQUNqRSxnREFBc0Q7QUFDdEQsOENBQWdEO0FBQ2hELDBDQUEwQztBQUUxQyxLQUFLLFVBQVUseUJBQXlCO0lBQ3BDLE1BQU0scUJBQXFCLEdBQUcsTUFBTSw2QkFBc0IsQ0FBQztJQUMzRCxPQUFPLEtBQUs7U0FDUCxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ1YsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO1NBQzVDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSw4R0FBOEc7UUFDcEgsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQztTQUNELE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDWixJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLHNFQUFzRTtRQUM1RSxPQUFPLEVBQUUsS0FBSztLQUNqQixDQUFDO1NBQ0QsTUFBTSxDQUFDLGVBQWUsRUFBRTtRQUNyQixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLHVFQUF1RTtLQUNoRixDQUFDO1NBQ0QsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxFQUFFLENBQUM7U0FDNUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLHVDQUF1QyxFQUFFLENBQUM7U0FDcEYsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUNoQixPQUFPLENBQ0osaUJBQWlCLEVBQ2pCLDJHQUEyRyxFQUMzRyxDQUFDLEtB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Q1osSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDWixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDZixPQUFPO0tBQ1Y7SUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUMzQixjQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDZjtTQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQ2xDLDRCQUE0QjtLQUMvQjtBQUNMLENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ1gsZUFBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7UUFDWCxlQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xuaW1wb3J0ICogYXMgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQgeyBDbG91ZEV4ZWN1dGFibGUgfSBmcm9tICcuLi9saWIvYXBpL2Nsb3VkLWV4ZWN1dGFibGUnO1xuaW1wb3J0IHsgZXhlY1Byb2dyYW0gfSBmcm9tICcuLi9saWIvYXBpL2V4ZWMnO1xuaW1wb3J0IHsgQ2RrVG9vbGtpdCB9IGZyb20gJy4uL2xpYi9jZGstdG9vbGtpdCc7XG5pbXBvcnQgeyBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzLCBjbGlJbml0LCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcyB9IGZyb20gJy4uL2xpYi9pbml0JztcbmltcG9ydCB7IGRhdGEsIGRlYnVnLCBlcnJvciwgc2V0TG9nTGV2ZWwgfSBmcm9tICcuLi9saWIvbG9nZ2luZyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHJ1Y3R1cmUgfSBmcm9tICcuLi9saWIvc2VyaWFsaXplJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9saWIvc2V0dGluZ3MnO1xuaW1wb3J0ICogYXMgdmVyc2lvbiBmcm9tICcuLi9saWIvdmVyc2lvbic7XG5cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlQ29tbWFuZExpbmVBcmd1bWVudHMoKSB7XG4gICAgY29uc3QgaW5pdFRlbXBsYXRlTGFuZ3VhZ2VzID0gYXdhaXQgYXZhaWxhYmxlSW5pdExhbmd1YWdlcztcbiAgICByZXR1cm4geWFyZ3NcbiAgICAgICAgLmVudignQ0RLJylcbiAgICAgICAgLnVzYWdlKCdVc2FnZTogcm9zLWNkayAtYSBbY2RrLWFwcF0gQ09NTUFORCcpXG4gICAgICAgIC5vcHRpb24oJ2FwcCcsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZGVzYzogJ1JFUVVJUkVEOiBjb21tYW5kLWxpbmUgZm9yIGV4ZWN1dGluZyB5b3VyIGFwcCBvciBhIGNsb3VkIGFzc2VtYmx5IGRpcmVjdG9yeSAoZS5nLiBcIm5weCB0cy1ub2RlIGJpbi90ZXN0LnRzXCIpJyxcbiAgICAgICAgICAgIHJlcXVpcmVzQXJnOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb24oJ2pzb24nLCB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBhbGlhczogJ2onLFxuICAgICAgICAgICAgZGVzYzogJ1VzZSBKU09OIG91dHB1dCBpbnN0ZWFkIG9mIFlBTUwgd2hlbiB0ZW1wbGF0ZXMgYXJlIHByaW50ZWQgdG8gU1RET1VUJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgICAub3B0aW9uKCdpZ25vcmUtZXJyb3JzJywge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICBkZXNjOiAnSWdub3JlcyBzeW50aGVzaXMgZXJyb3JzLCB3aGljaCB3aWxsIGxpa2VseSBwcm9kdWNlIGFuIGludmFsaWQgb3V0cHV0JyxcbiAgICAgICAgfSlcbiAgICAgICAgLm9wdGlvbigndHJhY2UnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1ByaW50IHRyYWNlIGZvciBzdGFjayB3YXJuaW5ncycgfSlcbiAgICAgICAgLm9wdGlvbignc3RyaWN0JywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdEbyBub3QgY29uc3RydWN0IHN0YWNrcyB3aXRoIHdhcm5pbmdzJyB9KVxuICAgICAgICAuY291bnQoJ3ZlcmJvc2UnKVxuICAgICAgICAuY29tbWFuZChcbiAgICAgICAgICAgICdpbml0IFtURU1QTEFURV0nLFxuICAgICAgICAgICAgJ0NyZWF0ZSBhIG5ldywgZW1wdHkgQ0RLIHByb2plY3QgZnJvbSBhIHRlbXBsYXRlLiBJbnZva2VkIHdpdGhvdXQgVEVNUExBVEUsIHRoZSBhcHAgdGVtcGxhdGUgd2lsbCBiZSB1c2VkLicsXG4gICAgICAgICAgICAoeWFyZ3MpID0+XG4gICAgICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbignbGFuZ3VhZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAnVGhlIGxhbmd1YWdlIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXcgcHJvamVjdCAoZGVmYXVsdCBjYW4gYmUgY29uZmlndXJlZCBpbiB+Ly5jZGsuanNvbiknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlczogaW5pdFRlbXBsYXRlTGFuZ3VhZ2VzLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uKCdsaXN0JywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdMaXN0IHRoZSBhdmFpbGFibGUgdGVtcGxhdGVzJyB9KVxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uKCdnZW5lcmF0ZS1vbmx5Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdJZiB0cnVlLCBvbmx5IGdlbmVyYXRlcyBwcm9qZWN0IGZpbGVzLCB3aXRob3V0IGV4ZWN1dGluZyBhZGRpdGlvbmFsIG9wZXJhdGlvbnMgc3VjaCBhcyBzZXR0aW5nIHVwIGEgZ2l0IHJlcG8sIGluc3RhbGxpbmcgZGVwZW5kZW5jaWVzIG9yIGNvbXBpbGluZyB0aGUgcHJvamVjdCcsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKFxuICAgICAgICAgICAgWydsaXN0IFtTVEFDS1MuLl0nLCAnbHMgW1NUQUNLUy4uXSddLFxuICAgICAgICAgICAgJ0xpc3RzIHN0YWNrKHMpIGluIHRoZSBhcHAuIEludm9rZWQgd2l0aG91dCB0aGUgc3BlY2lmaWVkIHN0YWNrKHMpLCBhbGwgc3RhY2tzIGluIHRoZSBhcHAgd2lsbCBiZSBsaXN0ZWQuJyxcbiAgICAgICAgICAgICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzLm9wdGlvbignbG9uZycsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnRGlzcGxheSBlbnZpcm9ubWVudCBpbmZvcm1hdGlvbiBmb3IgZWFjaCBzdGFjaycsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZChcbiAgICAgICAgICAgIFsnc3ludGhlc2l6ZSBbU1RBQ0tTLi5dJywgJ3N5bnRoIFtTVEFDS1MuLl0nXSxcbiAgICAgICAgICAgICdTeW50aGVzaXplcyBhbmQgcHJpbnRzIHRoZSBST1MgdGVtcGxhdGUgZm9yIHRoZSBzdGFjayhzKS4gSW52b2tlZCB3aXRob3V0IHRoZSBzcGVjaWZpZWQgc3RhY2socyksIGFsbCBzdGFja3MgaW4gdGhlIGFwcCB3aWxsIGJlIHN5bnRoZXNpemVkLicsXG4gICAgICAgICAgICAoeWFyZ3MpID0+XG4gICAgICAgICAgICAgICAgeWFyZ3Mub3B0aW9uKCdleGNsdXNpdmVseScsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2UnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiBcIk9ubHkgc3ludGhlc2l6ZSByZXF1ZXN0ZWQgc3RhY2tzLCBkb24ndCBpbmNsdWRlIGRlcGVuZGVuY2llc1wiLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKFxuICAgICAgICAgICAgJ2RlcGxveSBbU1RBQ0tTLi5dJyxcbiAgICAgICAgICAgICdEZXBsb3lzIHRoZSBzdGFjayhzKSB0aHJvdWdoIFJPUyBpbnRvIHlvdXIgYWxpY2xvdWQgYWNjb3VudC4gSWYgdGhlcmVcXCdzIG9ubHkgb25lIHN0YWNrIGluIHlvdXIgYXBwLCB5b3UgY2FuIGludm9rZSBpdCB3aXRob3V0IHNwZWNpZnlpbmcgc3RhY2suJyxcbiAgICAgICAgICAgICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncGFyYW1ldGVycycsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ0FkZGl0aW9uYWwgcGFyYW1ldGVycyBwYXNzZWQgdG8gUk9TIGF0IGRlcGxveSB0aW1lIChTVEFDSzpLRVk9VkFMVUUpJyxcbiAgICAgICAgICAgICAgICAgICAgbmFyZ3M6IDEsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVzQXJnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7fSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2V4Y2x1c2l2ZWx5Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnZScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiT25seSBkZXBsb3kgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3JlZ2lvbicsIHt0eXBlOiAnc3RyaW5nJywgZGVzYzonVGhlIHJlZ2lvbiB3aGVyZSB5b3Ugd2FudCB0byBkZXBsb3kuJywgZGVmYXVsdDogJ2RlZmF1bHQnfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCd0aW1lb3V0TWludXRlcycsIHsgdHlwZTogJ251bWJlcicsIGFsaWFzOiAndCcsIGRlc2M6ICdUaGUgdGltZW91dCBtaW51dGVzJywgZGVmYXVsdDogMjAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdyZXNvdXJjZS1ncm91cC1pZCcsIHsgdHlwZTogJ3N0cmluZycsIGRlc2M6ICdSZXNvdXJjZSBncm91cCBJRC4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZCwgdGhlIHJlc291cmNlIHN0YWNrIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGRlZmF1bHQgcmVzb3VyY2UgZ3JvdXAnfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdzeW5jJywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdTeW5jIGRlcGxveSBzdGFjaycsIGRlZmF1bHQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignc2tpcC1pZi1uby1jaGFuZ2VzJywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdXaGVuIHN0YWNrIGRvIG5vdCBjb250YWlucyBhbnkgbmV3IGNoYW5nZXMgc2tpcCBzdGFjayBjaGVja3MnLCBkZWZhdWx0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2RldGFpbC1sb2cnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1doZW4gc3RhY2sgZGVwbG95IGVycm9yLCBzZXQgdGhpcyBwYXJhbXMgdG8gc2hvdyBtb3JlIGVycm9yIGluZm9ybWF0aW9uJywgZGVmYXVsdDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdkaXNhYmxlLXJvbGxiYWNrJywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdEaXNhYmxlIHJvbGxiYWNrIHdoZW4gY3JlYXRpbmcgcmVzb3VyY2Ugc3RhY2sgZmFpbHMnLCBkZWZhdWx0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ291dHB1dHMtZmlsZScsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnU3RhY2sgb3V0cHV0cyB3aWxsIGJlIHdyaXR0ZW4gYXMgSlNPTicsIGRlZmF1bHQ6IGZhbHNlIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKFxuICAgICAgICAgICAgJ2RpZmYgW1NUQUNLUy4uXScsXG4gICAgICAgICAgICAnQ29tcGFyZXMgdGhlIHNwZWNpZmllZCBzdGFjayB3aXRoIHRoZSBkZXBsb3llZCBzdGFjayBvciBhIGxvY2FsIHRlbXBsYXRlIGZpbGUsIGFuZCByZXR1cm5zIHdpdGggc3RhdHVzIDEgaWYgYW55IGRpZmZlcmVuY2UgaXMgZm91bmQuIEludm9rZWQgd2l0aG91dCB0aGUgc3BlY2lmaWVkIHN0YWNrKHMpLCBhbGwgc3RhY2tzIGluIHRoZSBhcHAgd2lsbCBiZSBjb21wYXJlZC4nLFxuICAgICAgICAgICAgKHlhcmdzKSA9PlxuICAgICAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgICAgIC5vcHRpb24oJ3BhdGgnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAnVGhlIHBhdGggdG8gdGhlIHRlbXBsYXRlIHRvIGNvbXBhcmUgd2l0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAnLi9jZGsub3V0JyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbignY29udGV4dC1saW5lcycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzogJ051bWJlciBvZiBjb250ZXh0IGxpbmVzIHRvIGluY2x1ZGUgaW4gYXJiaXRyYXJ5IEpTT04gZGlmZiByZW5kZXJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogMyxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoXG4gICAgICAgICAgICAnZGVzdHJveSBbU1RBQ0tTLi5dJyxcbiAgICAgICAgICAgICdEZXN0cm95IHRoZSBzdGFjayhzKSBpbiB0aGUgYXBwLiBJbnZva2VkIHdpdGhvdXQgdGhlIHNwZWNpZmllZCBzdGFjayhzKSwgYWxsIHN0YWNrcyBpbiB0aGUgYXBwIHdpbGwgYmUgZGVzdHJveWVkIGFmdGVyIGNvbmZpcm1hdGlvbi4nLFxuICAgICAgICAgICAgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdxdWlldCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3EnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnZGVzdHJveSB3aXRob3V0IGNvbmZpcm0nLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignc3luYycsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnc3luYyBkZXN0cm95IHN0YWNrJywgZGVmYXVsdDogZmFsc2UgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoXG4gICAgICAgICAgICAnZXZlbnQgW1NUQUNLUy4uXScsXG4gICAgICAgICAgICAnR2V0IHRoZSBzdGFjayhzKSBldmVudHMuIElmIHRoZXJlXFwncyBvbmx5IG9uZSBzdGFjayBpbiB5b3VyIGFwcCwgeW91IGNhbiBpbnZva2UgaXQgd2l0aG91dCBzcGVjaWZ5aW5nIHN0YWNrLicsXG4gICAgICAgICAgICAoeWFyZ3MpID0+XG4gICAgICAgICAgICB5YXJnc1xuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2xvZ2ljYWwtcmVzb3VyY2UtaWQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2wnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnU3RhY2sgbG9naWNhbCByZXNvdXJjZSBpZCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3BhZ2UtbnVtYmVyJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICduJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1RoZSBudW1iZXIgb2YgdGhlIHBhZ2UgdG8gcmV0dXJuLCBQYWdlcyBzdGFydCBmcm9tIHBhZ2UgMS4gRGVmYXVsdCB2YWx1ZToxJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3BhZ2Utc2l6ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAncycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIGVudHJpZXMgdG8gcmV0dXJuIG9uIGVhY2ggcGFnZSwgTWF4aW11bSB2YWx1ZTogNTAuIERlZmF1bHQgdmFsdWU6IDEwJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKFxuICAgICAgICAgICAgJ291dHB1dCBbU1RBQ0tTLi5dJyxcbiAgICAgICAgICAgICdHZXQgdGhlIG91dHB1dCBpbmZvcm1hdGlvbiBvZiB0aGUgc3RhY2socykuIEludm9rZWQgd2l0aG91dCB0aGUgc3BlY2lmaWVkIHN0YWNrKHMpLCBhbGwgb3V0cHV0cyBmcm9tIGFsbCBzdGFja3MgaW4gdGhlIGFwcCB3aWxsIGJlIGRpc3BsYXllZC4nXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoXG4gICAgICAgICAgICAncmVzb3VyY2UgW1NUQUNLUy4uXScsXG4gICAgICAgICAgICAnR2V0IHJlc291cmNlcyBpbiB0aGUgc3RhY2socykuICBJbnZva2VkIHdpdGhvdXQgdGhlIHNwZWNpZmllZCBzdGFjayhzKSwgYWxsIHJlc291cmNlcyBmcm9tIGFsbCBzdGFja3MgaW4gdGhlIGFwcCB3aWxsIGJlIGRpc3BsYXllZC4nKVxuICAgICAgICAuY29tbWFuZCgnbGlzdC1zdGFja3MgW1NUQUNLUy4uXScsICdHZXQgcmVzb3VyY2VzIGluIHRoZSByZXNvdXJjZSBTVEFDS1MnLCAoeWFyZ3MpID0+XG4gICAgICAgICAgICB5YXJnc1xuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2FsbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2EnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnR2V0IGFsbCBTdGFja3MgaW4gYWNjb3VudCBzZXQgY29uZmlnIFJlZ2lvbi4nLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3JlZ2lvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdUaGUgcmVnaW9uIHdoZXJlIHlvdSB3YW50IHRvIGdldCBzdGFja3MgZnJvbS4nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdwYWdlLW51bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnbicsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIHRoZSBwYWdlIHRvIHJldHVybiwgUGFnZXMgc3RhcnQgZnJvbSBwYWdlIDEuIERlZmF1bHQgdmFsdWU6MScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdwYWdlLXNpemUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3MnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiBlbnRyaWVzIHRvIHJldHVybiBvbiBlYWNoIHBhZ2UsIE1heGltdW0gdmFsdWU6IDEwMC4gRGVmYXVsdCB2YWx1ZTogMTAnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncmVzb3VyY2UtZ3JvdXAtaWQnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZGVzYzogJ1Jlc291cmNlIGdyb3VwIElELiBSZXNvdXJjZSBHcm91cCBhbGxvd3MgeW91IHRvIHNvcnQgcmVzb3VyY2VzIG93bmVkIGJ5IHlvdXIgQWxpYmFiYSBDbG91ZCBhY2NvdW50IGludG8gZ3JvdXBzLiBUaGlzIHNpbXBsaWZpZXMgcmVzb3VyY2UgYW5kIHBlcm1pc3Npb24gbWFuYWdlbWVudCB3aXRoaW4geW91ciBBbGliYWJhIENsb3VkIGFjY291bnQuJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZCgnbG9hZC1jb25maWcnLCAnTG9hZCBBbGl5dW4gQ0xJIGNvbmZpZyB0byBDREsuJywgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3Mub3B0aW9uKCdnbG9iYWwnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGFsaWFzOiAnZycsXG4gICAgICAgICAgICAgICAgZGVzYzogJ1doZXRoZXIgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3RvcmVkIGluIGdsb2JhbCBlbnYnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdmaWxlLXBhdGgnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2YnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnU3BlY2lmeSB0aGUgY2xpIGNvbmZpZ3VyYXRpb24gZmlsZSBwYXRoIHRvIGxvYWQnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoJ2NvbmZpZycsICdTZXQgeW91ciBhbGljbG91ZCBhY2NvdW50IGNvbmZpZ3VyYXRpb24uJywgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3Mub3B0aW9uKCdnbG9iYWwnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGFsaWFzOiAnZycsXG4gICAgICAgICAgICAgICAgZGVzYzogJ1doZXRoZXIgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3RvcmVkIGluIGdsb2JhbCBlbnYnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoJ2dlbmVyYXRlLXN0YWNrLWZpbGUnLCAnVGhlIHJlc291cmNlIHN0YWNrIGluZm9ybWF0aW9uIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkJywgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3Mub3B0aW9uKCdyZXNvdXJjZS1ncm91cC1pZCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnUmVzb3VyY2UgZ3JvdXAgSUQuIFNldCB0aGlzIHBhcmFtZXRlciB0byBxdWVyeSB0aGUgc3RhY2sgb2YgdGhlIGNvcnJlc3BvbmRpbmcgcmVzb3VyY2UgZ3JvdXAuJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoJ2NvbmZpZy1zZXQnLCAnU2V0IHlvdXIgYWxpY2xvdWQgYWNjb3VudCBjb25maWd1cmF0aW9uIG5vbiBpbnRlcmFjdGl2ZSBtb2RlLicsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzLm9wdGlvbignZ2xvYmFsJywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBhbGlhczogJ2cnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICdXaGV0aGVyIHRoZSBjb25maWcgc2hvdWxkIGJlIHN0b3JlZCBpbiBnbG9iYWwgZW52JyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignZW5kcG9pbnQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2UnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnU3BlY2lmeSB0aGUgc2VydmljZSBhZGRyZXNzIHRoYXQgaW5pdGlhdGVkIHRoZSByZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdyZWdpb24nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3InLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnU3BlY2lmeSByZWdpb24gaW5mb3JtYXRpb24gZm9yIG1hbmFnaW5nIHJlc291cmNlcycsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdjbi1oYW5nemhvdScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdtb2RlJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdtJyxcbiAgICAgICAgICAgICAgICAgICAgZGVtYW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLW1vZGUge0FLfFN0c1Rva2VufFJhbVJvbGVBcm58RWNzUmFtUm9sZX1gIHRvIGFzc2lnbiBhdXRoZW50aWNhdGUgbW9kZScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdhY2Nlc3Mta2V5LWlkJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdhaycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tYWNjZXNzLWtleS1pZCBBY2Nlc3NLZXlJZGAgdG8gYXNzaWduIEFjY2Vzc0tleUlkLCByZXF1aXJlZCBpbiBBSy9TdHNUb2tlbi9SYW1Sb2xlQXJuIG1vZGUnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignYWNjZXNzLWtleS1zZWNyZXQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3NrJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1hY2Nlc3Mta2V5LXNlY3JldCBBY2Nlc3NLZXlTZWNyZXRgIHRvIGFzc2lnbiBBY2Nlc3NLZXlTZWNyZXQsIHJlcXVpcmVkIGluIEFLL1N0c1Rva2VuL1JhbVJvbGVBcm4gbW9kZScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdzdHMtdG9rZW4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3N0cycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tc3RzLXRva2VuIFN0c1Rva2VuYCB0byBhc3NpZ24gU3RzVG9rZW4sIHJlcXVpcmVkIGluIFN0c1Rva2VuIG1vZGUnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncmFtLXJvbGUtYXJuJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdhcm4nLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLXJhbS1yb2xlLWFybiBSYW1Sb2xlQXJuYCB0byBhc3NpZ24gUmFtUm9sZUFybihlZzogYWNzOnJhbTo6KioqKioqOnJvbGUvKioqKioqKSwgcmVxdWlyZWQgaW4gUmFtUm9sZUFybiBtb2RlJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3JvbGUtc2Vzc2lvbi1uYW1lJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1yb2xlLXNlc3Npb24tbmFtZSBSb2xlU2Vzc2lvbk5hbWVgIHRvIGFzc2lnbiBSb2xlU2Vzc2lvbk5hbWUsIHJlcXVpcmVkIGluIFJhbVJvbGVBcm4gbW9kZScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdyYW0tcm9sZS1uYW1lJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdyb2xlJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1yYW0tcm9sZS1uYW1lIFJhbVJvbGVOYW1lYCB0byBhc3NpZ24gUmFtUm9sZU5hbWUsIHJlcXVpcmVkIGluIEVjc1JhbVJvbGUgbW9kZScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAudmVyc2lvbih2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTilcbiAgICAgICAgLmRlbWFuZENvbW1hbmQoMSwgJycpIC8vIGp1c3QgcHJpbnQgaGVscFxuICAgICAgICAucmVjb21tZW5kQ29tbWFuZHMoKVxuICAgICAgICAuaGVscCgpXG4gICAgICAgIC5hbGlhcygnaCcsICdoZWxwJylcbiAgICAgICAgLmVwaWxvZ3VlKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICdJZiBvbmUgb2YgY2RrLmpzb24gb3Igfi8uY2RrLmpzb24gZXhpc3RzLCBvcHRpb25zIHNwZWNpZmllZCB0aGVyZSB3aWxsIGJlIHVzZWQgYXMgZGVmYXVsdHMuIFNldHRpbmdzIGluIGNkay5qc29uIHRha2UgcHJlY2VkZW5jZS4nLFxuICAgICAgICAgICAgXS5qb2luKCdcXG5cXG4nKSxcbiAgICAgICAgKS5hcmd2O1xufVxuXG5pZiAoIXByb2Nlc3Muc3Rkb3V0LmlzVFRZKSB7XG4gICAgY29sb3JzLmRpc2FibGUoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdENvbW1hbmRMaW5lKCkge1xuICAgIGNvbnN0IGFyZ3YgPSBhd2FpdCBwYXJzZUNvbW1hbmRMaW5lQXJndW1lbnRzKCk7XG4gICAgaWYgKGFyZ3YudmVyYm9zZSkge1xuICAgICAgICBzZXRMb2dMZXZlbChhcmd2LnZlcmJvc2UpO1xuICAgIH1cbiAgICBkZWJ1ZygnQ0RLIHRvb2xraXQgdmVyc2lvbjonLCB2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTik7XG4gICAgZGVidWcoJ0NvbW1hbmQgbGluZSBhcmd1bWVudHM6JywgYXJndik7XG5cbiAgICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oYXJndik7XG4gICAgYXdhaXQgY29uZmlndXJhdGlvbi5sb2FkKCk7XG5cbiAgICBjb25zdCBjbG91ZEV4ZWN1dGFibGUgPSBuZXcgQ2xvdWRFeGVjdXRhYmxlKHtcbiAgICAgICAgY29uZmlndXJhdGlvbixcbiAgICAgICAgc3ludGhlc2l6ZXI6IGV4ZWNQcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgY29uc3QgY21kID0gU3RyaW5nKGFyZ3YuX1swXSk7XG5cbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IGF3YWl0IG1haW4oY21kLCBhcmd2KTtcbiAgICBpZiAodHlwZW9mIHJldHVyblZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gdG9Kc29uT3JZYW1sKHJldHVyblZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXR1cm5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBtYWluKGNvbW1hbmQ6IHN0cmluZywgYXJnczogYW55KTogUHJvbWlzZTxudW1iZXIgfCBzdHJpbmcgfCB7fSB8IHZvaWQ+IHtcbiAgICAgICAgYXJncy5TVEFDS1MgPSBhcmdzLlNUQUNLUyB8fCBbXTtcblxuICAgICAgICBjb25zdCBjbGkgPSBuZXcgQ2RrVG9vbGtpdCh7XG4gICAgICAgICAgICBjbG91ZEV4ZWN1dGFibGUsXG4gICAgICAgICAgICB2ZXJib3NlOiBhcmd2LnRyYWNlIHx8IGFyZ3YudmVyYm9zZSA+IDAsXG4gICAgICAgICAgICBpZ25vcmVFcnJvcnM6IGFyZ3ZbJ2lnbm9yZS1lcnJvcnMnXSxcbiAgICAgICAgICAgIHN0cmljdDogYXJndi5zdHJpY3QsXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uLFxuICAgICAgICB9KTtcblxuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xzJzpcbiAgICAgICAgICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjbGkubGlzdChhcmdzLlNUQUNLUyk7XG5cbiAgICAgICAgICAgIGNhc2UgJ2dlbmVyYXRlLXN0YWNrLWZpbGUnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5nZW5lcmF0ZVN0YWNrSW5mbyh7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogYXJnc1sncmVzb3VyY2UtZ3JvdXAtaWQnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnY29uZmlnJzpcbiAgICAgICAgICAgICAgICAvLyB3YWl0IHVzZXIgZm9yIHJvcyBpbnB1dFxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5jb25maWcoYXJncy5nbG9iYWwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnY29uZmlnLXNldCc6XG4gICAgICAgICAgICAgICAgLy8gd2FpdCB1c2VyIGZvciByb3MgaW5wdXRcbiAgICAgICAgICAgICAgICBhd2FpdCBjbGkuY29uZmlnU2V0KHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsOiBhcmdzLmdsb2JhbCxcbiAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGFyZ3MuZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbjogYXJncy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IGFyZ3MubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgYWs6IGFyZ3NbJ2FjY2Vzcy1rZXktaWQnXSxcbiAgICAgICAgICAgICAgICAgICAgc2s6IGFyZ3NbJ2FjY2Vzcy1rZXktc2VjcmV0J10sXG4gICAgICAgICAgICAgICAgICAgIHN0czogYXJnc1snc3RzLXRva2VuJ10sXG4gICAgICAgICAgICAgICAgICAgIHJhbVJvbGVBcm46IGFyZ3NbJ3JhbS1yb2xlLWFybiddLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IGFyZ3NbJ3JvbGUtc2Vzc2lvbi1uYW1lJ10sXG4gICAgICAgICAgICAgICAgICAgIHJhbVJvbGVOYW1lOiBhcmdzWydyYW0tcm9sZS1uYW1lJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ2RpZmYnOlxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjbGkuZGlmZih7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcmdzLnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRMaW5lczogYXJncy5jb250ZXh0TGluZXMsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhc2UgJ2RlcGxveSc6XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyTWFwOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfSA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW1ldGVyIG9mIGFyZ3MucGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtZXRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlID0gKHBhcmFtZXRlciBhcyBzdHJpbmcpLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJNYXBba2V5VmFsdWVbMF1dID0ga2V5VmFsdWUuc2xpY2UoMSkuam9pbignPScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5kZXBsb3koe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVyTWFwLFxuICAgICAgICAgICAgICAgICAgICByZWdpb25JZDogYXJnc1sncmVnaW9uJ10sXG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1c2l2ZWx5OiBhcmdzLmV4Y2x1c2l2ZWx5LFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBhcmdzLnRpbWVvdXRNaW51dGVzLFxuICAgICAgICAgICAgICAgICAgICBzeW5jOiBhcmdzLnN5bmMsXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHNGaWxlOiBhcmdzWydvdXRwdXRzLWZpbGUnXSxcbiAgICAgICAgICAgICAgICAgICAgc2tpcElmTm9DaGFuZ2VzOiBhcmdzWydza2lwLWlmLW5vLWNoYW5nZXMnXSxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJvbGxiYWNrOiBhcmdzWydkaXNhYmxlLXJvbGxiYWNrJ10sXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogYXJnc1sncmVzb3VyY2UtZ3JvdXAtaWQnXSxcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsTG9nIDphcmdzWydkZXRhaWwtbG9nJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ2Rlc3Ryb3knOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5kZXN0cm95KHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1MsXG4gICAgICAgICAgICAgICAgICAgIHF1aWV0OiBhcmdzLnF1aWV0LFxuICAgICAgICAgICAgICAgICAgICBzeW5jOiBhcmdzLnN5bmNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ2V2ZW50JzpcbiAgICAgICAgICAgICAgICBhd2FpdCBjbGkuZXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICAgICAgICAgICAgbG9naWNhbFJlc291cmNlSWQ6IGFyZ3NbJ2xvZ2ljYWwtcmVzb3VyY2UtaWQnXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcjogYXJnc1sncGFnZS1udW1iZXInXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IGFyZ3NbJ3BhZ2Utc2l6ZSddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdvdXRwdXQnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5vdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLU1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAncmVzb3VyY2UnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5yZXNvdXJjZSh7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdsaXN0LXN0YWNrcyc6XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmxpc3RTdGFja3Moe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICAgICAgICAgICAgYWxsOiBhcmdzLmFsbCxcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcjogYXJnc1sncGFnZS1udW1iZXInXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IGFyZ3NbJ3BhZ2Utc2l6ZSddLFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IGFyZ3NbJ3Jlc291cmNlLWdyb3VwLWlkJ10sXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbjogYXJncy5yZWdpb25cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ2xvYWQtY29uZmlnJzpcbiAgICAgICAgICAgICAgICBhd2FpdCBjbGkubG9hZENsaUNvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbDogYXJncy5nbG9iYWwsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRGaWxlUGF0aDogYXJnc1snZmlsZS1wYXRoJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ3N5bnRoZXNpemUnOlxuICAgICAgICAgICAgY2FzZSAnc3ludGgnOlxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjbGkuc3ludGgoYXJncy5TVEFDS1MsIGFyZ3MuZXhjbHVzaXZlbHkpO1xuXG4gICAgICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBsYW5ndWFnZSA9IGNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuZ2V0KFsnbGFuZ3VhZ2UnXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBhcmdzLmxhbmd1YWdlO1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHByaW50QXZhaWxhYmxlVGVtcGxhdGVzKGxhbmd1YWdlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2xpSW5pdChhcmdzLlRFTVBMQVRFLCBsYW5ndWFnZSwgdW5kZWZpbmVkLCBhcmdzLmdlbmVyYXRlT25seSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICd2ZXJzaW9uJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YSh2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTik7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGNvbW1hbmQ6ICcgKyBjb21tYW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvSnNvbk9yWWFtbChvYmplY3Q6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBzZXJpYWxpemVTdHJ1Y3R1cmUob2JqZWN0LCBhcmd2Lmpzb24pO1xuICAgIH1cbn1cblxuaW5pdENvbW1hbmRMaW5lKClcbiAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZGF0YSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gcHJvY2Vzcy5leGl0Q29kZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBlcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgIGlmIChlcnIuc3RhY2spIHtcbiAgICAgICAgICAgIGRlYnVnKGVyci5zdGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzcy5leGl0Q29kZSA9IDE7XG4gICAgfSk7XG4iXX0=