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
        (0, logging_1.setLogLevel)(argv.verbose);
    }
    (0, logging_1.debug)('CDK toolkit version:', version.DISPLAY_VERSION);
    (0, logging_1.debug)('Command line arguments:', argv);
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
                    return await (0, init_1.printAvailableTemplates)(language);
                }
                else {
                    return await (0, init_1.cliInit)(args.TEMPLATE, language, undefined, args.generateOnly);
                }
            case 'version':
                return (0, logging_1.data)(version.DISPLAY_VERSION);
            default:
                throw new Error('Unknown command: ' + command);
        }
    }
    function toJsonOrYaml(object) {
        return (0, serialize_1.serializeStructure)(object, argv.json);
    }
}
initCommandLine()
    .then((value) => {
    if (value == null) {
        return;
    }
    if (typeof value === 'string') {
        (0, logging_1.data)(value);
    }
    else if (typeof value === 'number') {
        // process.exitCode = value;
    }
})
    .catch((err) => {
    (0, logging_1.error)(err.message);
    if (err.stack) {
        (0, logging_1.debug)(err.stack);
    }
    process.exitCode = 1;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFFL0Isa0VBQThEO0FBQzlELDBDQUE4QztBQUM5QyxvREFBZ0Q7QUFDaEQsc0NBQXVGO0FBQ3ZGLDRDQUFpRTtBQUNqRSxnREFBc0Q7QUFDdEQsOENBQWdEO0FBQ2hELDBDQUEwQztBQUUxQyxLQUFLLFVBQVUseUJBQXlCO0lBQ3BDLE1BQU0scUJBQXFCLEdBQUcsTUFBTSw2QkFBc0IsQ0FBQztJQUMzRCxPQUFPLEtBQUs7U0FDUCxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ1YsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO1NBQzVDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSw4R0FBOEc7UUFDcEgsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQztTQUNELE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDWixJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLHNFQUFzRTtRQUM1RSxPQUFPLEVBQUUsS0FBSztLQUNqQixDQUFDO1NBQ0QsTUFBTSxDQUFDLGVBQWUsRUFBRTtRQUNyQixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLHVFQUF1RTtLQUNoRixDQUFDO1NBQ0QsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxFQUFFLENBQUM7U0FDNUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLHVDQUF1QyxFQUFFLENBQUM7U0FDcEYsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUNoQixPQUFPLENBQ0osaUJBQWlCLEVBQ2pCLDJHQUEyRyxFQUMzRyxDQUFDLEtB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akQsQ0FBQztBQUNMLENBQUM7QUFFRCxlQUFlLEVBQUU7S0FDWixJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNaLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNmLE9BQU87S0FDVjtJQUNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzNCLElBQUEsY0FBSSxFQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2Y7U0FBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUNsQyw0QkFBNEI7S0FDL0I7QUFDTCxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNYLElBQUEsZUFBSyxFQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7UUFDWCxJQUFBLGVBQUssRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7SUFDRCxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICdjb2xvcnMvc2FmZSc7XG5pbXBvcnQgKiBhcyB5YXJncyBmcm9tICd5YXJncyc7XG5cbmltcG9ydCB7IENsb3VkRXhlY3V0YWJsZSB9IGZyb20gJy4uL2xpYi9hcGkvY2xvdWQtZXhlY3V0YWJsZSc7XG5pbXBvcnQgeyBleGVjUHJvZ3JhbSB9IGZyb20gJy4uL2xpYi9hcGkvZXhlYyc7XG5pbXBvcnQgeyBDZGtUb29sa2l0IH0gZnJvbSAnLi4vbGliL2Nkay10b29sa2l0JztcbmltcG9ydCB7IGF2YWlsYWJsZUluaXRMYW5ndWFnZXMsIGNsaUluaXQsIHByaW50QXZhaWxhYmxlVGVtcGxhdGVzIH0gZnJvbSAnLi4vbGliL2luaXQnO1xuaW1wb3J0IHsgZGF0YSwgZGVidWcsIGVycm9yLCBzZXRMb2dMZXZlbCB9IGZyb20gJy4uL2xpYi9sb2dnaW5nJztcbmltcG9ydCB7IHNlcmlhbGl6ZVN0cnVjdHVyZSB9IGZyb20gJy4uL2xpYi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2xpYi9zZXR0aW5ncyc7XG5pbXBvcnQgKiBhcyB2ZXJzaW9uIGZyb20gJy4uL2xpYi92ZXJzaW9uJztcblxuYXN5bmMgZnVuY3Rpb24gcGFyc2VDb21tYW5kTGluZUFyZ3VtZW50cygpIHtcbiAgICBjb25zdCBpbml0VGVtcGxhdGVMYW5ndWFnZXMgPSBhd2FpdCBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzO1xuICAgIHJldHVybiB5YXJnc1xuICAgICAgICAuZW52KCdDREsnKVxuICAgICAgICAudXNhZ2UoJ1VzYWdlOiByb3MtY2RrIC1hIFtjZGstYXBwXSBDT01NQU5EJylcbiAgICAgICAgLm9wdGlvbignYXBwJywge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZXNjOiAnUkVRVUlSRUQ6IGNvbW1hbmQtbGluZSBmb3IgZXhlY3V0aW5nIHlvdXIgYXBwIG9yIGEgY2xvdWQgYXNzZW1ibHkgZGlyZWN0b3J5IChlLmcuIFwibnB4IHRzLW5vZGUgYmluL3Rlc3QudHNcIiknLFxuICAgICAgICAgICAgcmVxdWlyZXNBcmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLm9wdGlvbignanNvbicsIHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGFsaWFzOiAnaicsXG4gICAgICAgICAgICBkZXNjOiAnVXNlIEpTT04gb3V0cHV0IGluc3RlYWQgb2YgWUFNTCB3aGVuIHRlbXBsYXRlcyBhcmUgcHJpbnRlZCB0byBTVERPVVQnLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb24oJ2lnbm9yZS1lcnJvcnMnLCB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIGRlc2M6ICdJZ25vcmVzIHN5bnRoZXNpcyBlcnJvcnMsIHdoaWNoIHdpbGwgbGlrZWx5IHByb2R1Y2UgYW4gaW52YWxpZCBvdXRwdXQnLFxuICAgICAgICB9KVxuICAgICAgICAub3B0aW9uKCd0cmFjZScsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnUHJpbnQgdHJhY2UgZm9yIHN0YWNrIHdhcm5pbmdzJyB9KVxuICAgICAgICAub3B0aW9uKCdzdHJpY3QnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ0RvIG5vdCBjb25zdHJ1Y3Qgc3RhY2tzIHdpdGggd2FybmluZ3MnIH0pXG4gICAgICAgIC5jb3VudCgndmVyYm9zZScpXG4gICAgICAgIC5jb21tYW5kKFxuICAgICAgICAgICAgJ2luaXQgW1RFTVBMQVRFXScsXG4gICAgICAgICAgICAnQ3JlYXRlIGEgbmV3LCBlbXB0eSBDREsgcHJvamVjdCBmcm9tIGEgdGVtcGxhdGUuIEludm9rZWQgd2l0aG91dCBURU1QTEFURSwgdGhlIGFwcCB0ZW1wbGF0ZSB3aWxsIGJlIHVzZWQuJyxcbiAgICAgICAgICAgICh5YXJncykgPT5cbiAgICAgICAgICAgICAgICB5YXJnc1xuICAgICAgICAgICAgICAgICAgICAub3B0aW9uKCdsYW5ndWFnZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6ICdUaGUgbGFuZ3VhZ2UgdG8gYmUgdXNlZCBmb3IgdGhlIG5ldyBwcm9qZWN0IChkZWZhdWx0IGNhbiBiZSBjb25maWd1cmVkIGluIH4vLmNkay5qc29uKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaG9pY2VzOiBpbml0VGVtcGxhdGVMYW5ndWFnZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vcHRpb24oJ2xpc3QnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ0xpc3QgdGhlIGF2YWlsYWJsZSB0ZW1wbGF0ZXMnIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vcHRpb24oJ2dlbmVyYXRlLW9ubHknLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0lmIHRydWUsIG9ubHkgZ2VuZXJhdGVzIHByb2plY3QgZmlsZXMsIHdpdGhvdXQgZXhlY3V0aW5nIGFkZGl0aW9uYWwgb3BlcmF0aW9ucyBzdWNoIGFzIHNldHRpbmcgdXAgYSBnaXQgcmVwbywgaW5zdGFsbGluZyBkZXBlbmRlbmNpZXMgb3IgY29tcGlsaW5nIHRoZSBwcm9qZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoXG4gICAgICAgICAgICBbJ2xpc3QgW1NUQUNLUy4uXScsICdscyBbU1RBQ0tTLi5dJ10sXG4gICAgICAgICAgICAnTGlzdHMgc3RhY2socykgaW4gdGhlIGFwcC4gSW52b2tlZCB3aXRob3V0IHRoZSBzcGVjaWZpZWQgc3RhY2socyksIGFsbCBzdGFja3MgaW4gdGhlIGFwcCB3aWxsIGJlIGxpc3RlZC4nLFxuICAgICAgICAgICAgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3Mub3B0aW9uKCdsb25nJywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbGlhczogJ2wnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICdEaXNwbGF5IGVudmlyb25tZW50IGluZm9ybWF0aW9uIGZvciBlYWNoIHN0YWNrJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKFxuICAgICAgICAgICAgWydzeW50aGVzaXplIFtTVEFDS1MuLl0nLCAnc3ludGggW1NUQUNLUy4uXSddLFxuICAgICAgICAgICAgJ1N5bnRoZXNpemVzIGFuZCBwcmludHMgdGhlIFJPUyB0ZW1wbGF0ZSBmb3IgdGhlIHN0YWNrKHMpLiBJbnZva2VkIHdpdGhvdXQgdGhlIHNwZWNpZmllZCBzdGFjayhzKSwgYWxsIHN0YWNrcyBpbiB0aGUgYXBwIHdpbGwgYmUgc3ludGhlc2l6ZWQuJyxcbiAgICAgICAgICAgICh5YXJncykgPT5cbiAgICAgICAgICAgICAgICB5YXJncy5vcHRpb24oJ2V4Y2x1c2l2ZWx5Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnZScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiT25seSBzeW50aGVzaXplIHJlcXVlc3RlZCBzdGFja3MsIGRvbid0IGluY2x1ZGUgZGVwZW5kZW5jaWVzXCIsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoXG4gICAgICAgICAgICAnZGVwbG95IFtTVEFDS1MuLl0nLFxuICAgICAgICAgICAgJ0RlcGxveXMgdGhlIHN0YWNrKHMpIHRocm91Z2ggUk9TIGludG8geW91ciBhbGljbG91ZCBhY2NvdW50LiBJZiB0aGVyZVxcJ3Mgb25seSBvbmUgc3RhY2sgaW4geW91ciBhcHAsIHlvdSBjYW4gaW52b2tlIGl0IHdpdGhvdXQgc3BlY2lmeWluZyBzdGFjay4nLFxuICAgICAgICAgICAgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdwYXJhbWV0ZXJzJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHBhc3NlZCB0byBST1MgYXQgZGVwbG95IHRpbWUgKFNUQUNLOktFWT1WQUxVRSknLFxuICAgICAgICAgICAgICAgICAgICBuYXJnczogMSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZXNBcmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHt9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignZXhjbHVzaXZlbHknLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdlJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJPbmx5IGRlcGxveSByZXF1ZXN0ZWQgc3RhY2tzLCBkb24ndCBpbmNsdWRlIGRlcGVuZGVuY2llc1wiLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncmVnaW9uJywge3R5cGU6ICdzdHJpbmcnLCBkZXNjOidUaGUgcmVnaW9uIHdoZXJlIHlvdSB3YW50IHRvIGRlcGxveS4nLCBkZWZhdWx0OiAnZGVmYXVsdCd9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3RpbWVvdXRNaW51dGVzJywgeyB0eXBlOiAnbnVtYmVyJywgYWxpYXM6ICd0JywgZGVzYzogJ1RoZSB0aW1lb3V0IG1pbnV0ZXMnLCBkZWZhdWx0OiAyMCB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3Jlc291cmNlLWdyb3VwLWlkJywgeyB0eXBlOiAnc3RyaW5nJywgZGVzYzogJ1Jlc291cmNlIGdyb3VwIElELiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgcmVzb3VyY2Ugc3RhY2sgd2lsbCBiZSBhZGRlZCB0byB0aGUgZGVmYXVsdCByZXNvdXJjZSBncm91cCd9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3N5bmMnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1N5bmMgZGVwbG95IHN0YWNrJywgZGVmYXVsdDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdza2lwLWlmLW5vLWNoYW5nZXMnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ1doZW4gc3RhY2sgZG8gbm90IGNvbnRhaW5zIGFueSBuZXcgY2hhbmdlcyBza2lwIHN0YWNrIGNoZWNrcycsIGRlZmF1bHQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignZGV0YWlsLWxvZycsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnV2hlbiBzdGFjayBkZXBsb3kgZXJyb3IsIHNldCB0aGlzIHBhcmFtcyB0byBzaG93IG1vcmUgZXJyb3IgaW5mb3JtYXRpb24nLCBkZWZhdWx0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2Rpc2FibGUtcm9sbGJhY2snLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ0Rpc2FibGUgcm9sbGJhY2sgd2hlbiBjcmVhdGluZyByZXNvdXJjZSBzdGFjayBmYWlscycsIGRlZmF1bHQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignb3V0cHV0cy1maWxlJywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdTdGFjayBvdXRwdXRzIHdpbGwgYmUgd3JpdHRlbiBhcyBKU09OJywgZGVmYXVsdDogZmFsc2UgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoXG4gICAgICAgICAgICAnZGlmZiBbU1RBQ0tTLi5dJyxcbiAgICAgICAgICAgICdDb21wYXJlcyB0aGUgc3BlY2lmaWVkIHN0YWNrIHdpdGggdGhlIGRlcGxveWVkIHN0YWNrIG9yIGEgbG9jYWwgdGVtcGxhdGUgZmlsZSwgYW5kIHJldHVybnMgd2l0aCBzdGF0dXMgMSBpZiBhbnkgZGlmZmVyZW5jZSBpcyBmb3VuZC4gSW52b2tlZCB3aXRob3V0IHRoZSBzcGVjaWZpZWQgc3RhY2socyksIGFsbCBzdGFja3MgaW4gdGhlIGFwcCB3aWxsIGJlIGNvbXBhcmVkLicsXG4gICAgICAgICAgICAoeWFyZ3MpID0+XG4gICAgICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbigncGF0aCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6ICdUaGUgcGF0aCB0byB0aGUgdGVtcGxhdGUgdG8gY29tcGFyZSB3aXRoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcuL2Nkay5vdXQnLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uKCdjb250ZXh0LWxpbmVzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAnTnVtYmVyIG9mIGNvbnRleHQgbGluZXMgdG8gaW5jbHVkZSBpbiBhcmJpdHJhcnkgSlNPTiBkaWZmIHJlbmRlcmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAzLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZChcbiAgICAgICAgICAgICdkZXN0cm95IFtTVEFDS1MuLl0nLFxuICAgICAgICAgICAgJ0Rlc3Ryb3kgdGhlIHN0YWNrKHMpIGluIHRoZSBhcHAuIEludm9rZWQgd2l0aG91dCB0aGUgc3BlY2lmaWVkIHN0YWNrKHMpLCBhbGwgc3RhY2tzIGluIHRoZSBhcHAgd2lsbCBiZSBkZXN0cm95ZWQgYWZ0ZXIgY29uZmlybWF0aW9uLicsXG4gICAgICAgICAgICAoeWFyZ3MpID0+XG4gICAgICAgICAgICB5YXJnc1xuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3F1aWV0Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAncScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdkZXN0cm95IHdpdGhvdXQgY29uZmlybScsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdzeW5jJywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdzeW5jIGRlc3Ryb3kgc3RhY2snLCBkZWZhdWx0OiBmYWxzZSB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZChcbiAgICAgICAgICAgICdldmVudCBbU1RBQ0tTLi5dJyxcbiAgICAgICAgICAgICdHZXQgdGhlIHN0YWNrKHMpIGV2ZW50cy4gSWYgdGhlcmVcXCdzIG9ubHkgb25lIHN0YWNrIGluIHlvdXIgYXBwLCB5b3UgY2FuIGludm9rZSBpdCB3aXRob3V0IHNwZWNpZnlpbmcgc3RhY2suJyxcbiAgICAgICAgICAgICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLm9wdGlvbignbG9naWNhbC1yZXNvdXJjZS1pZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnbCcsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdTdGFjayBsb2dpY2FsIHJlc291cmNlIGlkJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncGFnZS1udW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ24nLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiB0aGUgcGFnZSB0byByZXR1cm4sIFBhZ2VzIHN0YXJ0IGZyb20gcGFnZSAxLiBEZWZhdWx0IHZhbHVlOjEnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncGFnZS1zaXplJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1RoZSBudW1iZXIgb2YgZW50cmllcyB0byByZXR1cm4gb24gZWFjaCBwYWdlLCBNYXhpbXVtIHZhbHVlOiA1MC4gRGVmYXVsdCB2YWx1ZTogMTAnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoXG4gICAgICAgICAgICAnb3V0cHV0IFtTVEFDS1MuLl0nLFxuICAgICAgICAgICAgJ0dldCB0aGUgb3V0cHV0IGluZm9ybWF0aW9uIG9mIHRoZSBzdGFjayhzKS4gSW52b2tlZCB3aXRob3V0IHRoZSBzcGVjaWZpZWQgc3RhY2socyksIGFsbCBvdXRwdXRzIGZyb20gYWxsIHN0YWNrcyBpbiB0aGUgYXBwIHdpbGwgYmUgZGlzcGxheWVkLidcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZChcbiAgICAgICAgICAgICdyZXNvdXJjZSBbU1RBQ0tTLi5dJyxcbiAgICAgICAgICAgICdHZXQgcmVzb3VyY2VzIGluIHRoZSBzdGFjayhzKS4gIEludm9rZWQgd2l0aG91dCB0aGUgc3BlY2lmaWVkIHN0YWNrKHMpLCBhbGwgcmVzb3VyY2VzIGZyb20gYWxsIHN0YWNrcyBpbiB0aGUgYXBwIHdpbGwgYmUgZGlzcGxheWVkLicpXG4gICAgICAgIC5jb21tYW5kKCdsaXN0LXN0YWNrcyBbU1RBQ0tTLi5dJywgJ0dldCByZXNvdXJjZXMgaW4gdGhlIHJlc291cmNlIFNUQUNLUycsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLm9wdGlvbignYWxsJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnYScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdHZXQgYWxsIFN0YWNrcyBpbiBhY2NvdW50IHNldCBjb25maWcgUmVnaW9uLicsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncmVnaW9uJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1RoZSByZWdpb24gd2hlcmUgeW91IHdhbnQgdG8gZ2V0IHN0YWNrcyBmcm9tLidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3BhZ2UtbnVtYmVyJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICduJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1RoZSBudW1iZXIgb2YgdGhlIHBhZ2UgdG8gcmV0dXJuLCBQYWdlcyBzdGFydCBmcm9tIHBhZ2UgMS4gRGVmYXVsdCB2YWx1ZToxJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3BhZ2Utc2l6ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAncycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIGVudHJpZXMgdG8gcmV0dXJuIG9uIGVhY2ggcGFnZSwgTWF4aW11bSB2YWx1ZTogMTAwLiBEZWZhdWx0IHZhbHVlOiAxMCcsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdyZXNvdXJjZS1ncm91cC1pZCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnUmVzb3VyY2UgZ3JvdXAgSUQuIFJlc291cmNlIEdyb3VwIGFsbG93cyB5b3UgdG8gc29ydCByZXNvdXJjZXMgb3duZWQgYnkgeW91ciBBbGliYWJhIENsb3VkIGFjY291bnQgaW50byBncm91cHMuIFRoaXMgc2ltcGxpZmllcyByZXNvdXJjZSBhbmQgcGVybWlzc2lvbiBtYW5hZ2VtZW50IHdpdGhpbiB5b3VyIEFsaWJhYmEgQ2xvdWQgYWNjb3VudC4nXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKCdsb2FkLWNvbmZpZycsICdMb2FkIEFsaXl1biBDTEkgY29uZmlnIHRvIENESy4nLCAoeWFyZ3MpID0+XG4gICAgICAgICAgICB5YXJncy5vcHRpb24oJ2dsb2JhbCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgYWxpYXM6ICdnJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnV2hldGhlciB0aGUgY29uZmlnIHNob3VsZCBiZSBzdG9yZWQgaW4gZ2xvYmFsIGVudicsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2ZpbGUtcGF0aCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnZicsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdTcGVjaWZ5IHRoZSBjbGkgY29uZmlndXJhdGlvbiBmaWxlIHBhdGggdG8gbG9hZCcsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZCgnY29uZmlnJywgJ1NldCB5b3VyIGFsaWNsb3VkIGFjY291bnQgY29uZmlndXJhdGlvbi4nLCAoeWFyZ3MpID0+XG4gICAgICAgICAgICB5YXJncy5vcHRpb24oJ2dsb2JhbCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgYWxpYXM6ICdnJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnV2hldGhlciB0aGUgY29uZmlnIHNob3VsZCBiZSBzdG9yZWQgaW4gZ2xvYmFsIGVudicsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZCgnZ2VuZXJhdGUtc3RhY2stZmlsZScsICdUaGUgcmVzb3VyY2Ugc3RhY2sgaW5mb3JtYXRpb24gaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQnLCAoeWFyZ3MpID0+XG4gICAgICAgICAgICB5YXJncy5vcHRpb24oJ3Jlc291cmNlLWdyb3VwLWlkJywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICdSZXNvdXJjZSBncm91cCBJRC4gU2V0IHRoaXMgcGFyYW1ldGVyIHRvIHF1ZXJ5IHRoZSBzdGFjayBvZiB0aGUgY29ycmVzcG9uZGluZyByZXNvdXJjZSBncm91cC4nXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZCgnY29uZmlnLXNldCcsICdTZXQgeW91ciBhbGljbG91ZCBhY2NvdW50IGNvbmZpZ3VyYXRpb24gbm9uIGludGVyYWN0aXZlIG1vZGUuJywgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3Mub3B0aW9uKCdnbG9iYWwnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGFsaWFzOiAnZycsXG4gICAgICAgICAgICAgICAgZGVzYzogJ1doZXRoZXIgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3RvcmVkIGluIGdsb2JhbCBlbnYnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdlbmRwb2ludCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnZScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdTcGVjaWZ5IHRoZSBzZXJ2aWNlIGFkZHJlc3MgdGhhdCBpbml0aWF0ZWQgdGhlIHJlcXVlc3QnLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAnaHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3JlZ2lvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAncicsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdTcGVjaWZ5IHJlZ2lvbiBpbmZvcm1hdGlvbiBmb3IgbWFuYWdpbmcgcmVzb3VyY2VzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogJ2NuLWhhbmd6aG91JyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ21vZGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ20nLFxuICAgICAgICAgICAgICAgICAgICBkZW1hbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tbW9kZSB7QUt8U3RzVG9rZW58UmFtUm9sZUFybnxFY3NSYW1Sb2xlfWAgdG8gYXNzaWduIGF1dGhlbnRpY2F0ZSBtb2RlJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2FjY2Vzcy1rZXktaWQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2FrJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1hY2Nlc3Mta2V5LWlkIEFjY2Vzc0tleUlkYCB0byBhc3NpZ24gQWNjZXNzS2V5SWQsIHJlcXVpcmVkIGluIEFLL1N0c1Rva2VuL1JhbVJvbGVBcm4gbW9kZScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdhY2Nlc3Mta2V5LXNlY3JldCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnc2snLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLWFjY2Vzcy1rZXktc2VjcmV0IEFjY2Vzc0tleVNlY3JldGAgdG8gYXNzaWduIEFjY2Vzc0tleVNlY3JldCwgcmVxdWlyZWQgaW4gQUsvU3RzVG9rZW4vUmFtUm9sZUFybiBtb2RlJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3N0cy10b2tlbicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1zdHMtdG9rZW4gU3RzVG9rZW5gIHRvIGFzc2lnbiBTdHNUb2tlbiwgcmVxdWlyZWQgaW4gU3RzVG9rZW4gbW9kZScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdyYW0tcm9sZS1hcm4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2FybicsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tcmFtLXJvbGUtYXJuIFJhbVJvbGVBcm5gIHRvIGFzc2lnbiBSYW1Sb2xlQXJuKGVnOiBhY3M6cmFtOjoqKioqKio6cm9sZS8qKioqKiopLCByZXF1aXJlZCBpbiBSYW1Sb2xlQXJuIG1vZGUnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncm9sZS1zZXNzaW9uLW5hbWUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3MnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLXJvbGUtc2Vzc2lvbi1uYW1lIFJvbGVTZXNzaW9uTmFtZWAgdG8gYXNzaWduIFJvbGVTZXNzaW9uTmFtZSwgcmVxdWlyZWQgaW4gUmFtUm9sZUFybiBtb2RlJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3JhbS1yb2xlLW5hbWUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3JvbGUnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLXJhbS1yb2xlLW5hbWUgUmFtUm9sZU5hbWVgIHRvIGFzc2lnbiBSYW1Sb2xlTmFtZSwgcmVxdWlyZWQgaW4gRWNzUmFtUm9sZSBtb2RlJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC52ZXJzaW9uKHZlcnNpb24uRElTUExBWV9WRVJTSU9OKVxuICAgICAgICAuZGVtYW5kQ29tbWFuZCgxLCAnJykgLy8ganVzdCBwcmludCBoZWxwXG4gICAgICAgIC5yZWNvbW1lbmRDb21tYW5kcygpXG4gICAgICAgIC5oZWxwKClcbiAgICAgICAgLmFsaWFzKCdoJywgJ2hlbHAnKVxuICAgICAgICAuZXBpbG9ndWUoXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJ0lmIG9uZSBvZiBjZGsuanNvbiBvciB+Ly5jZGsuanNvbiBleGlzdHMsIG9wdGlvbnMgc3BlY2lmaWVkIHRoZXJlIHdpbGwgYmUgdXNlZCBhcyBkZWZhdWx0cy4gU2V0dGluZ3MgaW4gY2RrLmpzb24gdGFrZSBwcmVjZWRlbmNlLicsXG4gICAgICAgICAgICBdLmpvaW4oJ1xcblxcbicpLFxuICAgICAgICApLmFyZ3Y7XG59XG5cbmlmICghcHJvY2Vzcy5zdGRvdXQuaXNUVFkpIHtcbiAgICBjb2xvcnMuZGlzYWJsZSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0Q29tbWFuZExpbmUoKSB7XG4gICAgY29uc3QgYXJndiA9IGF3YWl0IHBhcnNlQ29tbWFuZExpbmVBcmd1bWVudHMoKTtcbiAgICBpZiAoYXJndi52ZXJib3NlKSB7XG4gICAgICAgIHNldExvZ0xldmVsKGFyZ3YudmVyYm9zZSk7XG4gICAgfVxuICAgIGRlYnVnKCdDREsgdG9vbGtpdCB2ZXJzaW9uOicsIHZlcnNpb24uRElTUExBWV9WRVJTSU9OKTtcbiAgICBkZWJ1ZygnQ29tbWFuZCBsaW5lIGFyZ3VtZW50czonLCBhcmd2KTtcblxuICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbihhcmd2KTtcbiAgICBhd2FpdCBjb25maWd1cmF0aW9uLmxvYWQoKTtcblxuICAgIGNvbnN0IGNsb3VkRXhlY3V0YWJsZSA9IG5ldyBDbG91ZEV4ZWN1dGFibGUoe1xuICAgICAgICBjb25maWd1cmF0aW9uLFxuICAgICAgICBzeW50aGVzaXplcjogZXhlY1Byb2dyYW0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBjbWQgPSBTdHJpbmcoYXJndi5fWzBdKTtcblxuICAgIGNvbnN0IHJldHVyblZhbHVlID0gYXdhaXQgbWFpbihjbWQsIGFyZ3YpO1xuICAgIGlmICh0eXBlb2YgcmV0dXJuVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiB0b0pzb25PcllhbWwocmV0dXJuVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJldHVyblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG1haW4oY29tbWFuZDogc3RyaW5nLCBhcmdzOiBhbnkpOiBQcm9taXNlPG51bWJlciB8IHN0cmluZyB8IHt9IHwgdm9pZD4ge1xuICAgICAgICBhcmdzLlNUQUNLUyA9IGFyZ3MuU1RBQ0tTIHx8IFtdO1xuXG4gICAgICAgIGNvbnN0IGNsaSA9IG5ldyBDZGtUb29sa2l0KHtcbiAgICAgICAgICAgIGNsb3VkRXhlY3V0YWJsZSxcbiAgICAgICAgICAgIHZlcmJvc2U6IGFyZ3YudHJhY2UgfHwgYXJndi52ZXJib3NlID4gMCxcbiAgICAgICAgICAgIGlnbm9yZUVycm9yczogYXJndlsnaWdub3JlLWVycm9ycyddLFxuICAgICAgICAgICAgc3RyaWN0OiBhcmd2LnN0cmljdCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgICAgICAgY2FzZSAnbHMnOlxuICAgICAgICAgICAgY2FzZSAnbGlzdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5saXN0KGFyZ3MuU1RBQ0tTKTtcblxuICAgICAgICAgICAgY2FzZSAnZ2VuZXJhdGUtc3RhY2stZmlsZSc6XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmdlbmVyYXRlU3RhY2tJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBhcmdzWydyZXNvdXJjZS1ncm91cC1pZCddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdjb25maWcnOlxuICAgICAgICAgICAgICAgIC8vIHdhaXQgdXNlciBmb3Igcm9zIGlucHV0XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmNvbmZpZyhhcmdzLmdsb2JhbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdjb25maWctc2V0JzpcbiAgICAgICAgICAgICAgICAvLyB3YWl0IHVzZXIgZm9yIHJvcyBpbnB1dFxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5jb25maWdTZXQoe1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWw6IGFyZ3MuZ2xvYmFsLFxuICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogYXJncy5lbmRwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiBhcmdzLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogYXJncy5tb2RlLFxuICAgICAgICAgICAgICAgICAgICBhazogYXJnc1snYWNjZXNzLWtleS1pZCddLFxuICAgICAgICAgICAgICAgICAgICBzazogYXJnc1snYWNjZXNzLWtleS1zZWNyZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgc3RzOiBhcmdzWydzdHMtdG9rZW4nXSxcbiAgICAgICAgICAgICAgICAgICAgcmFtUm9sZUFybjogYXJnc1sncmFtLXJvbGUtYXJuJ10sXG4gICAgICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogYXJnc1sncm9sZS1zZXNzaW9uLW5hbWUnXSxcbiAgICAgICAgICAgICAgICAgICAgcmFtUm9sZU5hbWU6IGFyZ3NbJ3JhbS1yb2xlLW5hbWUnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnZGlmZic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5kaWZmKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1MsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFyZ3MucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dExpbmVzOiBhcmdzLmNvbnRleHRMaW5lcyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FzZSAnZGVwbG95JzpcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJNYXA6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9ID0ge307XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgYXJncy5wYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1ldGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5VmFsdWUgPSAocGFyYW1ldGVyIGFzIHN0cmluZykuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlck1hcFtrZXlWYWx1ZVswXV0gPSBrZXlWYWx1ZS5zbGljZSgxKS5qb2luKCc9Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmRlcGxveSh7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJNYXAsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbklkOiBhcmdzWydyZWdpb24nXSxcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVzaXZlbHk6IGFyZ3MuZXhjbHVzaXZlbHksXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IGFyZ3MudGltZW91dE1pbnV0ZXMsXG4gICAgICAgICAgICAgICAgICAgIHN5bmM6IGFyZ3Muc3luYyxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0c0ZpbGU6IGFyZ3NbJ291dHB1dHMtZmlsZSddLFxuICAgICAgICAgICAgICAgICAgICBza2lwSWZOb0NoYW5nZXM6IGFyZ3NbJ3NraXAtaWYtbm8tY2hhbmdlcyddLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUm9sbGJhY2s6IGFyZ3NbJ2Rpc2FibGUtcm9sbGJhY2snXSxcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBhcmdzWydyZXNvdXJjZS1ncm91cC1pZCddLFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxMb2cgOmFyZ3NbJ2RldGFpbC1sb2cnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnZGVzdHJveSc6XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmRlc3Ryb3koe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICAgICAgICAgICAgcXVpZXQ6IGFyZ3MucXVpZXQsXG4gICAgICAgICAgICAgICAgICAgIHN5bmM6IGFyZ3Muc3luY1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnZXZlbnQnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5ldmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgICAgICAgICAgICBsb2dpY2FsUmVzb3VyY2VJZDogYXJnc1snbG9naWNhbC1yZXNvdXJjZS1pZCddLFxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiBhcmdzWydwYWdlLW51bWJlciddLFxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogYXJnc1sncGFnZS1zaXplJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ291dHB1dCc6XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLm91dHB1dCh7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdyZXNvdXJjZSc6XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLnJlc291cmNlKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ2xpc3Qtc3RhY2tzJzpcbiAgICAgICAgICAgICAgICBhd2FpdCBjbGkubGlzdFN0YWNrcyh7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgICAgICAgICAgICBhbGw6IGFyZ3MuYWxsLFxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiBhcmdzWydwYWdlLW51bWJlciddLFxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogYXJnc1sncGFnZS1zaXplJ10sXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogYXJnc1sncmVzb3VyY2UtZ3JvdXAtaWQnXSxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiBhcmdzLnJlZ2lvblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnbG9hZC1jb25maWcnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5sb2FkQ2xpQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsOiBhcmdzLmdsb2JhbCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZEZpbGVQYXRoOiBhcmdzWydmaWxlLXBhdGgnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnc3ludGhlc2l6ZSc6XG4gICAgICAgICAgICBjYXNlICdzeW50aCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5zeW50aChhcmdzLlNUQUNLUywgYXJncy5leGNsdXNpdmVseSk7XG5cbiAgICAgICAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxhbmd1YWdlID0gY29uZmlndXJhdGlvbi5zZXR0aW5ncy5nZXQoWydsYW5ndWFnZSddKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYW5ndWFnZSA9IGFyZ3MubGFuZ3VhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGlzdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMobGFuZ3VhZ2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjbGlJbml0KGFyZ3MuVEVNUExBVEUsIGxhbmd1YWdlLCB1bmRlZmluZWQsIGFyZ3MuZ2VuZXJhdGVPbmx5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ3ZlcnNpb24nOlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhKHZlcnNpb24uRElTUExBWV9WRVJTSU9OKTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gY29tbWFuZDogJyArIGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9Kc29uT3JZYW1sKG9iamVjdDogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZVN0cnVjdHVyZShvYmplY3QsIGFyZ3YuanNvbik7XG4gICAgfVxufVxuXG5pbml0Q29tbWFuZExpbmUoKVxuICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBkYXRhKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAvLyBwcm9jZXNzLmV4aXRDb2RlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgaWYgKGVyci5zdGFjaykge1xuICAgICAgICAgICAgZGVidWcoZXJyLnN0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTtcbiAgICB9KTtcbiJdfQ==