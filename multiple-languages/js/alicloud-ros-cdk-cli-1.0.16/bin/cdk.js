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
        .option('sync', { type: 'boolean', desc: 'sync deploy stack', default: false })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFFL0Isa0VBQThEO0FBQzlELDBDQUE4QztBQUM5QyxvREFBZ0Q7QUFDaEQsc0NBQXVGO0FBQ3ZGLDRDQUFpRTtBQUNqRSxnREFBc0Q7QUFDdEQsOENBQWdEO0FBQ2hELDBDQUEwQztBQUUxQyxLQUFLLFVBQVUseUJBQXlCO0lBQ3RDLE1BQU0scUJBQXFCLEdBQUcsTUFBTSw2QkFBc0IsQ0FBQztJQUMzRCxPQUFPLEtBQUs7U0FDVCxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ1YsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO1NBQzVDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSw4R0FBOEc7UUFDcEgsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQztTQUNELE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDZCxJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLHNFQUFzRTtRQUM1RSxPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7U0FDRCxNQUFNLENBQUMsZUFBZSxFQUFFO1FBQ3ZCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsdUVBQXVFO0tBQzlFLENBQUM7U0FDRCxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQztTQUM1RSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsdUNBQXVDLEVBQUUsQ0FBQztTQUNwRixLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ2hCLE9BQU8sQ0FDTixpQkFBaUIsRUFDakIsMkdBQTJHLEVBQzNHLENBQUMsS0FB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LElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQ3BDLDRCQUE0QjtLQUM3QjtBQUNILENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ2IsZUFBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7UUFDYixlQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xuaW1wb3J0ICogYXMgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQgeyBDbG91ZEV4ZWN1dGFibGUgfSBmcm9tICcuLi9saWIvYXBpL2Nsb3VkLWV4ZWN1dGFibGUnO1xuaW1wb3J0IHsgZXhlY1Byb2dyYW0gfSBmcm9tICcuLi9saWIvYXBpL2V4ZWMnO1xuaW1wb3J0IHsgQ2RrVG9vbGtpdCB9IGZyb20gJy4uL2xpYi9jZGstdG9vbGtpdCc7XG5pbXBvcnQgeyBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzLCBjbGlJbml0LCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcyB9IGZyb20gJy4uL2xpYi9pbml0JztcbmltcG9ydCB7IGRhdGEsIGRlYnVnLCBlcnJvciwgc2V0TG9nTGV2ZWwgfSBmcm9tICcuLi9saWIvbG9nZ2luZyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHJ1Y3R1cmUgfSBmcm9tICcuLi9saWIvc2VyaWFsaXplJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9saWIvc2V0dGluZ3MnO1xuaW1wb3J0ICogYXMgdmVyc2lvbiBmcm9tICcuLi9saWIvdmVyc2lvbic7XG5cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlQ29tbWFuZExpbmVBcmd1bWVudHMoKSB7XG4gIGNvbnN0IGluaXRUZW1wbGF0ZUxhbmd1YWdlcyA9IGF3YWl0IGF2YWlsYWJsZUluaXRMYW5ndWFnZXM7XG4gIHJldHVybiB5YXJnc1xuICAgIC5lbnYoJ0NESycpXG4gICAgLnVzYWdlKCdVc2FnZTogcm9zLWNkayAtYSBbY2RrLWFwcF0gQ09NTUFORCcpXG4gICAgLm9wdGlvbignYXBwJywge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgZGVzYzogJ1JFUVVJUkVEOiBjb21tYW5kLWxpbmUgZm9yIGV4ZWN1dGluZyB5b3VyIGFwcCBvciBhIGNsb3VkIGFzc2VtYmx5IGRpcmVjdG9yeSAoZS5nLiBcIm5weCB0cy1ub2RlIGJpbi90ZXN0LnRzXCIpJyxcbiAgICAgICAgcmVxdWlyZXNBcmc6IHRydWVcbiAgICB9KVxuICAgIC5vcHRpb24oJ2pzb24nLCB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBhbGlhczogJ2onLFxuICAgICAgZGVzYzogJ1VzZSBKU09OIG91dHB1dCBpbnN0ZWFkIG9mIFlBTUwgd2hlbiB0ZW1wbGF0ZXMgYXJlIHByaW50ZWQgdG8gU1RET1VUJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0pXG4gICAgLm9wdGlvbignaWdub3JlLWVycm9ycycsIHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzYzogJ0lnbm9yZXMgc3ludGhlc2lzIGVycm9ycywgd2hpY2ggd2lsbCBsaWtlbHkgcHJvZHVjZSBhbiBpbnZhbGlkIG91dHB1dCcsXG4gICAgfSlcbiAgICAub3B0aW9uKCd0cmFjZScsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnUHJpbnQgdHJhY2UgZm9yIHN0YWNrIHdhcm5pbmdzJyB9KVxuICAgIC5vcHRpb24oJ3N0cmljdCcsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnRG8gbm90IGNvbnN0cnVjdCBzdGFja3Mgd2l0aCB3YXJuaW5ncycgfSlcbiAgICAuY291bnQoJ3ZlcmJvc2UnKVxuICAgIC5jb21tYW5kKFxuICAgICAgJ2luaXQgW1RFTVBMQVRFXScsXG4gICAgICAnQ3JlYXRlIGEgbmV3LCBlbXB0eSBDREsgcHJvamVjdCBmcm9tIGEgdGVtcGxhdGUuIEludm9rZWQgd2l0aG91dCBURU1QTEFURSwgdGhlIGFwcCB0ZW1wbGF0ZSB3aWxsIGJlIHVzZWQuJyxcbiAgICAgICh5YXJncykgPT5cbiAgICAgICAgeWFyZ3NcbiAgICAgICAgICAub3B0aW9uKCdsYW5ndWFnZScsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgICAgIGRlc2M6ICdUaGUgbGFuZ3VhZ2UgdG8gYmUgdXNlZCBmb3IgdGhlIG5ldyBwcm9qZWN0IChkZWZhdWx0IGNhbiBiZSBjb25maWd1cmVkIGluIH4vLmNkay5qc29uKScsXG4gICAgICAgICAgICBjaG9pY2VzOiBpbml0VGVtcGxhdGVMYW5ndWFnZXMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdsaXN0JywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdMaXN0IHRoZSBhdmFpbGFibGUgdGVtcGxhdGVzJyB9KVxuICAgICAgICAgIC5vcHRpb24oJ2dlbmVyYXRlLW9ubHknLCB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIGRlc2M6XG4gICAgICAgICAgICAgICdJZiB0cnVlLCBvbmx5IGdlbmVyYXRlcyBwcm9qZWN0IGZpbGVzLCB3aXRob3V0IGV4ZWN1dGluZyBhZGRpdGlvbmFsIG9wZXJhdGlvbnMgc3VjaCBhcyBzZXR0aW5nIHVwIGEgZ2l0IHJlcG8sIGluc3RhbGxpbmcgZGVwZW5kZW5jaWVzIG9yIGNvbXBpbGluZyB0aGUgcHJvamVjdCcsXG4gICAgICAgICAgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKFsnbGlzdCBbU1RBQ0tTLi5dJywgJ2xzIFtTVEFDS1MuLl0nXSwgJ0xpc3RzIGFsbCBzdGFja3MgaW4gdGhlIGFwcCcsICh5YXJncykgPT5cbiAgICAgIHlhcmdzLm9wdGlvbignbG9uZycsIHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgZGVzYzogJ0Rpc3BsYXkgZW52aXJvbm1lbnQgaW5mb3JtYXRpb24gZm9yIGVhY2ggc3RhY2snLFxuICAgICAgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKFxuICAgICAgWydzeW50aGVzaXplIFtTVEFDS1MuLl0nLCAnc3ludGggW1NUQUNLUy4uXSddLFxuICAgICAgJ1N5bnRoZXNpemVzIGFuZCBwcmludHMgdGhlIFJPUyB0ZW1wbGF0ZSBmb3IgdGhpcyBzdGFjaycsXG4gICAgICAoeWFyZ3MpID0+XG4gICAgICAgIHlhcmdzLm9wdGlvbignZXhjbHVzaXZlbHknLCB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGFsaWFzOiAnZScsXG4gICAgICAgICAgZGVzYzogXCJPbmx5IHN5bnRoZXNpemUgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcbiAgICAgICAgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKCdkZXBsb3kgW1NUQUNLUy4uXScsICdEZXBsb3lzIHRoZSBzdGFjayhzKSBuYW1lZCBTVEFDS1MgdG8gUk9TIGludG8geW91ciBhbGljbG91ZCBhY2NvdW50JywgKHlhcmdzKSA9PlxuICAgICAgeWFyZ3NcbiAgICAgICAgLm9wdGlvbigncGFyYW1ldGVycycsIHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIGRlc2M6ICdBZGRpdGlvbmFsIHBhcmFtZXRlcnMgcGFzc2VkIHRvIFJPUyBhdCBkZXBsb3kgdGltZSAoU1RBQ0s6S0VZPVZBTFVFKScsXG4gICAgICAgICAgbmFyZ3M6IDEsXG4gICAgICAgICAgcmVxdWlyZXNBcmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdDoge30sXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb24oJ2V4Y2x1c2l2ZWx5Jywge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBhbGlhczogJ2UnLFxuICAgICAgICAgIGRlc2M6IFwiT25seSBkZXBsb3kgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcbiAgICAgICAgfSlcbiAgICAgICAgLm9wdGlvbigndGltZW91dE1pbnV0ZXMnLCB7IHR5cGU6ICdudW1iZXInLCBhbGlhczogJ3QnLCBkZXNjOiAnVGhlIHRpbWVvdXQgbWludXRlcycsIGRlZmF1bHQ6IDIwIH0pXG4gICAgICAgICAgLm9wdGlvbignc3luYycsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnc3luYyBkZXBsb3kgc3RhY2snLCBkZWZhdWx0OiBmYWxzZSB9KVxuICAgICAgICAgIC5vcHRpb24oJ291dHB1dHMtZmlsZScsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnU3RhY2sgb3V0cHV0cyB3aWxsIGJlIHdyaXR0ZW4gYXMgSlNPTicsIGRlZmF1bHQ6IGZhbHNlIH0pLFxuICAgIClcbiAgICAuY29tbWFuZChcbiAgICAgICdkaWZmIFtTVEFDS1MuLl0nLFxuICAgICAgJ0NvbXBhcmVzIHRoZSBzcGVjaWZpZWQgc3RhY2sgd2l0aCB0aGUgZGVwbG95ZWQgc3RhY2sgb3IgYSBsb2NhbCB0ZW1wbGF0ZSBmaWxlLCBhbmQgcmV0dXJucyB3aXRoIHN0YXR1cyAxIGlmIGFueSBkaWZmZXJlbmNlIGlzIGZvdW5kJyxcbiAgICAgICh5YXJncykgPT5cbiAgICAgICAgeWFyZ3NcbiAgICAgICAgICAub3B0aW9uKCdwYXRoJywge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBhbGlhczogJ3AnLFxuICAgICAgICAgICAgZGVzYzogJ1RoZSBwYXRoIHRvIHRoZSB0ZW1wbGF0ZSB0byBjb21wYXJlIHdpdGgnLFxuICAgICAgICAgICAgZGVmYXVsdDogJy4vY2RrLm91dCcsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdjb250ZXh0LWxpbmVzJywge1xuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICBkZXNjOiAnTnVtYmVyIG9mIGNvbnRleHQgbGluZXMgdG8gaW5jbHVkZSBpbiBhcmJpdHJhcnkgSlNPTiBkaWZmIHJlbmRlcmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiAzLFxuICAgICAgICAgIH0pLFxuICAgIClcbiAgICAuY29tbWFuZCgnZGVzdHJveSBbU1RBQ0tTLi5dJywgJ0Rlc3Ryb3kgdGhlIHN0YWNrKHMpIG5hbWVkIFNUQUNLUycsICh5YXJncykgPT5cbiAgICAgIHlhcmdzXG4gICAgICAgICAgICAub3B0aW9uKCdxdWlldCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICBhbGlhczogJ3EnLFxuICAgICAgICAgICAgICBkZXNjOiAnZGVzdHJveSB3aXRob3V0IGNvbmZpcm0nLFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdzeW5jJywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdzeW5jIGRlc3Ryb3kgc3RhY2snLCBkZWZhdWx0OiBmYWxzZSB9KSxcbiAgICApXG4gICAgLmNvbW1hbmQoJ2V2ZW50IFtTVEFDSy4uXScsICdHZXQgcmVzb3VyY2UgZXZlbnRzIHdpdGhpbiB0aGUgcmVzb3VyY2UgU1RBQ0snLCAoeWFyZ3MpID0+XG4gICAgICB5YXJnc1xuICAgICAgLm9wdGlvbignbG9naWNhbC1yZXNvdXJjZS1pZCcsIHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGFsaWFzOiAnbCcsXG4gICAgICAgIGRlc2M6ICdTdGFjayBsb2dpY2FsIHJlc291cmNlIGlkJ1xuICAgICAgfSlcbiAgICAgIC5vcHRpb24oJ3BhZ2UtbnVtYmVyJywge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgYWxpYXM6ICduJyxcbiAgICAgICAgZGVzYzogJ1RoZSBudW1iZXIgb2YgdGhlIHBhZ2UgdG8gcmV0dXJuLCBQYWdlcyBzdGFydCBmcm9tIHBhZ2UgMS4gRGVmYXVsdCB2YWx1ZToxJyxcbiAgICAgIH0pXG4gICAgICAub3B0aW9uKCdwYWdlLXNpemUnLCB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBhbGlhczogJ3MnLFxuICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiBlbnRyaWVzIHRvIHJldHVybiBvbiBlYWNoIHBhZ2UsIE1heGltdW0gdmFsdWU6IDUwLiBEZWZhdWx0IHZhbHVlOiAxMCcsXG4gICAgICB9KVxuICAgIClcbiAgICAuY29tbWFuZCgnb3V0cHV0IFtTVEFDSy4uXScsICdHZXQgdGhlIG91dHB1dCBpbmZvcm1hdGlvbiBvZiByZXNvdXJjZSBzdGFjaycpXG4gICAgLmNvbW1hbmQoJ3Jlc291cmNlIFtTVEFDS1MuLl0nLCAnR2V0IHJlc291cmNlcyBpbiB0aGUgcmVzb3VyY2UgU1RBQ0tTJylcbiAgICAuY29tbWFuZCgnbGlzdC1zdGFja3MgW1NUQUNLUy4uXScsICdHZXQgcmVzb3VyY2VzIGluIHRoZSByZXNvdXJjZSBTVEFDS1MnLCAoeWFyZ3MpID0+XG4gICAgICB5YXJnc1xuICAgICAgLm9wdGlvbignYWxsJywge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIGFsaWFzOiAnYScsXG4gICAgICAgIGRlc2M6ICdHZXQgYWxsIFN0YWNrcyBpbiBhY2NvdW50IHNldCBjb25maWcgUmVnaW9uLicsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIC5vcHRpb24oJ3BhZ2UtbnVtYmVyJywge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgYWxpYXM6ICduJyxcbiAgICAgICAgZGVzYzogJ1RoZSBudW1iZXIgb2YgdGhlIHBhZ2UgdG8gcmV0dXJuLCBQYWdlcyBzdGFydCBmcm9tIHBhZ2UgMS4gRGVmYXVsdCB2YWx1ZToxJyxcbiAgICAgIH0pXG4gICAgICAub3B0aW9uKCdwYWdlLXNpemUnLCB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBhbGlhczogJ3MnLFxuICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiBlbnRyaWVzIHRvIHJldHVybiBvbiBlYWNoIHBhZ2UsIE1heGltdW0gdmFsdWU6IDEwMC4gRGVmYXVsdCB2YWx1ZTogMTAnLFxuICAgICAgfSlcbiAgICApXG4gICAgLmNvbW1hbmQoJ2xvYWQtY29uZmlnJywgJ0xvYWQgQWxpeXVuIENMSSBjb25maWcgdG8gQ0RLLicsICh5YXJncykgPT5cbiAgICAgIHlhcmdzLm9wdGlvbignZ2xvYmFsJywge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIGFsaWFzOiAnZycsXG4gICAgICAgIGRlc2M6ICdXaGV0aGVyIHRoZSBjb25maWcgc2hvdWxkIGJlIHN0b3JlZCBpbiBnbG9iYWwgZW52JyxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB9KVxuICAgICAgLm9wdGlvbignZmlsZS1wYXRoJywge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgYWxpYXM6ICdmJyxcbiAgICAgICAgZGVzYzogJ1NwZWNpZnkgdGhlIGNsaSBjb25maWd1cmF0aW9uIGZpbGUgcGF0aCB0byBsb2FkJyxcbiAgICAgIH0pXG4gICAgKVxuICAgIC5jb21tYW5kKCdjb25maWcnLCAnU2V0IHlvdXIgYWxpY2xvdWQgYWNjb3VudCBjb25maWd1cmF0aW9uLicsICh5YXJncykgPT5cbiAgICAgIHlhcmdzLm9wdGlvbignZ2xvYmFsJywge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIGFsaWFzOiAnZycsXG4gICAgICAgIGRlc2M6ICdXaGV0aGVyIHRoZSBjb25maWcgc2hvdWxkIGJlIHN0b3JlZCBpbiBnbG9iYWwgZW52JyxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB9KSxcbiAgICApXG4gICAgICAuY29tbWFuZCgnZ2VuZXJhdGUtc3RhY2stZmlsZScsICdUaGUgcmVzb3VyY2Ugc3RhY2sgaW5mb3JtYXRpb24gaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQnKVxuICAgICAgLmNvbW1hbmQoJ2NvbmZpZy1zZXQnLCAnU2V0IHlvdXIgYWxpY2xvdWQgYWNjb3VudCBjb25maWd1cmF0aW9uIG5vbiBpbnRlcmFjdGl2ZSBtb2RlLicsICh5YXJncykgPT5cbiAgICAgICAgICB5YXJncy5vcHRpb24oJ2dsb2JhbCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICBhbGlhczogJ2cnLFxuICAgICAgICAgICAgICBkZXNjOiAnV2hldGhlciB0aGUgY29uZmlnIHNob3VsZCBiZSBzdG9yZWQgaW4gZ2xvYmFsIGVudicsXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignZW5kcG9pbnQnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBhbGlhczogJ2UnLFxuICAgICAgICAgICAgICBkZXNjOiAnU3BlY2lmeSB0aGUgc2VydmljZSBhZGRyZXNzIHRoYXQgaW5pdGlhdGVkIHRoZSByZXF1ZXN0JyxcbiAgICAgICAgICAgICAgZGVmYXVsdDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbScsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdyZWdpb24nLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBhbGlhczogJ3InLFxuICAgICAgICAgICAgICBkZXNjOiAnU3BlY2lmeSByZWdpb24gaW5mb3JtYXRpb24gZm9yIG1hbmFnaW5nIHJlc291cmNlcycsXG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICdjbi1oYW5nemhvdScsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdtb2RlJywge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdtJyxcbiAgICAgICAgICAgICAgZGVtYW5kOiB0cnVlLFxuICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLW1vZGUge0FLfFN0c1Rva2VufFJhbVJvbGVBcm58RWNzUmFtUm9sZX1gIHRvIGFzc2lnbiBhdXRoZW50aWNhdGUgbW9kZScsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdhY2Nlc3Mta2V5LWlkJywge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdhaycsXG4gICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tYWNjZXNzLWtleS1pZCBBY2Nlc3NLZXlJZGAgdG8gYXNzaWduIEFjY2Vzc0tleUlkLCByZXF1aXJlZCBpbiBBSy9TdHNUb2tlbi9SYW1Sb2xlQXJuIG1vZGUnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignYWNjZXNzLWtleS1zZWNyZXQnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBhbGlhczogJ3NrJyxcbiAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1hY2Nlc3Mta2V5LXNlY3JldCBBY2Nlc3NLZXlTZWNyZXRgIHRvIGFzc2lnbiBBY2Nlc3NLZXlTZWNyZXQsIHJlcXVpcmVkIGluIEFLL1N0c1Rva2VuL1JhbVJvbGVBcm4gbW9kZScsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdzdHMtdG9rZW4nLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBhbGlhczogJ3N0cycsXG4gICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tc3RzLXRva2VuIFN0c1Rva2VuYCB0byBhc3NpZ24gU3RzVG9rZW4sIHJlcXVpcmVkIGluIFN0c1Rva2VuIG1vZGUnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbigncmFtLXJvbGUtYXJuJywge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdhcm4nLFxuICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLXJhbS1yb2xlLWFybiBSYW1Sb2xlQXJuYCB0byBhc3NpZ24gUmFtUm9sZUFybihlZzogYWNzOnJhbTo6KioqKioqOnJvbGUvKioqKioqKSwgcmVxdWlyZWQgaW4gUmFtUm9sZUFybiBtb2RlJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ3JvbGUtc2Vzc2lvbi1uYW1lJywge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdzJyxcbiAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1yb2xlLXNlc3Npb24tbmFtZSBSb2xlU2Vzc2lvbk5hbWVgIHRvIGFzc2lnbiBSb2xlU2Vzc2lvbk5hbWUsIHJlcXVpcmVkIGluIFJhbVJvbGVBcm4gbW9kZScsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdyYW0tcm9sZS1uYW1lJywge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdyb2xlJyxcbiAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1yYW0tcm9sZS1uYW1lIFJhbVJvbGVOYW1lYCB0byBhc3NpZ24gUmFtUm9sZU5hbWUsIHJlcXVpcmVkIGluIEVjc1JhbVJvbGUgbW9kZScsXG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICAudmVyc2lvbih2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTilcbiAgICAuZGVtYW5kQ29tbWFuZCgxLCAnJykgLy8ganVzdCBwcmludCBoZWxwXG4gICAgLnJlY29tbWVuZENvbW1hbmRzKClcbiAgICAuaGVscCgpXG4gICAgLmFsaWFzKCdoJywgJ2hlbHAnKVxuICAgIC5lcGlsb2d1ZShcbiAgICAgIFtcbiAgICAgICAgJ0lmIHlvdXIgYXBwIGhhcyBhIHNpbmdsZSBzdGFjaywgdGhlcmUgaXMgbm8gbmVlZCB0byBzcGVjaWZ5IHRoZSBzdGFjayBuYW1lJyxcbiAgICAgICAgJ0lmIG9uZSBvZiBjZGsuanNvbiBvciB+Ly5jZGsuanNvbiBleGlzdHMsIG9wdGlvbnMgc3BlY2lmaWVkIHRoZXJlIHdpbGwgYmUgdXNlZCBhcyBkZWZhdWx0cy4gU2V0dGluZ3MgaW4gY2RrLmpzb24gdGFrZSBwcmVjZWRlbmNlLicsXG4gICAgICBdLmpvaW4oJ1xcblxcbicpLFxuICAgICkuYXJndjtcbn1cblxuaWYgKCFwcm9jZXNzLnN0ZG91dC5pc1RUWSkge1xuICBjb2xvcnMuZGlzYWJsZSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0Q29tbWFuZExpbmUoKSB7XG4gIGNvbnN0IGFyZ3YgPSBhd2FpdCBwYXJzZUNvbW1hbmRMaW5lQXJndW1lbnRzKCk7XG4gIGlmIChhcmd2LnZlcmJvc2UpIHtcbiAgICBzZXRMb2dMZXZlbChhcmd2LnZlcmJvc2UpO1xuICB9XG4gIGRlYnVnKCdDREsgdG9vbGtpdCB2ZXJzaW9uOicsIHZlcnNpb24uRElTUExBWV9WRVJTSU9OKTtcbiAgZGVidWcoJ0NvbW1hbmQgbGluZSBhcmd1bWVudHM6JywgYXJndik7XG5cbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKGFyZ3YpO1xuICBhd2FpdCBjb25maWd1cmF0aW9uLmxvYWQoKTtcblxuICBjb25zdCBjbG91ZEV4ZWN1dGFibGUgPSBuZXcgQ2xvdWRFeGVjdXRhYmxlKHtcbiAgICBjb25maWd1cmF0aW9uLFxuICAgIHN5bnRoZXNpemVyOiBleGVjUHJvZ3JhbSxcbiAgfSk7XG5cbiAgY29uc3QgY21kID0gU3RyaW5nKGFyZ3YuX1swXSk7XG5cbiAgY29uc3QgcmV0dXJuVmFsdWUgPSBhd2FpdCBtYWluKGNtZCwgYXJndik7XG4gIGlmICh0eXBlb2YgcmV0dXJuVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHRvSnNvbk9yWWFtbChyZXR1cm5WYWx1ZSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHJldHVyblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBtYWluKGNvbW1hbmQ6IHN0cmluZywgYXJnczogYW55KTogUHJvbWlzZTxudW1iZXIgfCBzdHJpbmcgfCB7fSB8IHZvaWQ+IHtcbiAgICBhcmdzLlNUQUNLUyA9IGFyZ3MuU1RBQ0tTIHx8IFtdO1xuXG4gICAgY29uc3QgY2xpID0gbmV3IENka1Rvb2xraXQoe1xuICAgICAgY2xvdWRFeGVjdXRhYmxlLFxuICAgICAgdmVyYm9zZTogYXJndi50cmFjZSB8fCBhcmd2LnZlcmJvc2UgPiAwLFxuICAgICAgaWdub3JlRXJyb3JzOiBhcmd2WydpZ25vcmUtZXJyb3JzJ10sXG4gICAgICBzdHJpY3Q6IGFyZ3Yuc3RyaWN0LFxuICAgICAgY29uZmlndXJhdGlvbixcbiAgICB9KTtcblxuICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgY2FzZSAnbHMnOlxuICAgICAgY2FzZSAnbGlzdCc6XG4gICAgICAgIHJldHVybiBhd2FpdCBjbGkubGlzdChhcmdzLlNUQUNLUyk7XG5cbiAgICAgIGNhc2UgJ2dlbmVyYXRlLXN0YWNrLWZpbGUnOlxuICAgICAgICByZXR1cm4gYXdhaXQgY2xpLmdlbmVyYXRlU3RhY2tJbmZvKCk7XG5cbiAgICAgIGNhc2UgJ2NvbmZpZyc6XG4gICAgICAgIC8vIHdhaXQgdXNlciBmb3Igcm9zIGlucHV0XG4gICAgICAgIGF3YWl0IGNsaS5jb25maWcoYXJncy5nbG9iYWwpO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNhc2UgJ2NvbmZpZy1zZXQnOlxuICAgICAgICAvLyB3YWl0IHVzZXIgZm9yIHJvcyBpbnB1dFxuICAgICAgICBhd2FpdCBjbGkuY29uZmlnU2V0KHtcbiAgICAgICAgICAgIGdsb2JhbDogYXJncy5nbG9iYWwsXG4gICAgICAgICAgICBlbmRwb2ludDogYXJncy5lbmRwb2ludCxcbiAgICAgICAgICAgIHJlZ2lvbjogYXJncy5yZWdpb24sXG4gICAgICAgICAgICBtb2RlOiBhcmdzLm1vZGUsXG4gICAgICAgICAgICBhazogYXJnc1snYWNjZXNzLWtleS1pZCddLFxuICAgICAgICAgICAgc2s6IGFyZ3NbJ2FjY2Vzcy1rZXktc2VjcmV0J10sXG4gICAgICAgICAgICBzdHM6IGFyZ3NbJ3N0cy10b2tlbiddLFxuICAgICAgICAgICAgcmFtUm9sZUFybjogYXJnc1sncmFtLXJvbGUtYXJuJ10sXG4gICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IGFyZ3NbJ3JvbGUtc2Vzc2lvbi1uYW1lJ10sXG4gICAgICAgICAgICByYW1Sb2xlTmFtZTogYXJnc1sncmFtLXJvbGUtbmFtZSddXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNhc2UgJ2RpZmYnOlxuICAgICAgICByZXR1cm4gYXdhaXQgY2xpLmRpZmYoe1xuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgIHBhdGg6IGFyZ3MucGF0aCxcbiAgICAgICAgICBjb250ZXh0TGluZXM6IGFyZ3MuY29udGV4dExpbmVzLFxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZGVwbG95JzpcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyTWFwOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlciBvZiBhcmdzLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtZXRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlID0gKHBhcmFtZXRlciBhcyBzdHJpbmcpLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBwYXJhbWV0ZXJNYXBba2V5VmFsdWVbMF1dID0ga2V5VmFsdWUuc2xpY2UoMSkuam9pbignPScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBjbGkuZGVwbG95KHtcbiAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJNYXAsXG4gICAgICAgICAgZXhjbHVzaXZlbHk6IGFyZ3MuZXhjbHVzaXZlbHksXG4gICAgICAgICAgdGltZW91dDogYXJncy50aW1lb3V0TWludXRlcyxcbiAgICAgICAgICBzeW5jOiBhcmdzLnN5bmMsXG4gICAgICAgICAgb3V0cHV0c0ZpbGU6IGFyZ3NbJ291dHB1dHMtZmlsZSddLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdkZXN0cm95JzpcbiAgICAgICAgYXdhaXQgY2xpLmRlc3Ryb3koe1xuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgIHF1aWV0OiBhcmdzLnF1aWV0LFxuICAgICAgICAgIHN5bmM6IGFyZ3Muc3luY1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdldmVudCc6XG4gICAgICAgIGF3YWl0IGNsaS5ldmVudCh7XG4gICAgICAgICAgc3RhY2tOYW1lOiBhcmdzWydTVEFDSyddLFxuICAgICAgICAgIGxvZ2ljYWxSZXNvdXJjZUlkOiBhcmdzWydsb2dpY2FsLXJlc291cmNlLWlkJ10sXG4gICAgICAgICAgcGFnZU51bWJlcjogYXJnc1sncGFnZS1udW1iZXInXSxcbiAgICAgICAgICBwYWdlU2l6ZTogYXJnc1sncGFnZS1zaXplJ11cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnb3V0cHV0JzpcbiAgICAgICAgYXdhaXQgY2xpLm91dHB1dCh7XG4gICAgICAgICAgICBzdGFja05hbWU6IGFyZ3NbJ1NUQUNLJ11cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAncmVzb3VyY2UnOlxuICAgICAgICBhd2FpdCBjbGkucmVzb3VyY2Uoe1xuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNhc2UgJ2xpc3Qtc3RhY2tzJzpcbiAgICAgICAgYXdhaXQgY2xpLmxpc3RTdGFja3Moe1xuICAgICAgICAgIHN0YWNrTmFtZXM6IGFyZ3MuU1RBQ0tTLFxuICAgICAgICAgIGFsbDogYXJncy5hbGwsXG4gICAgICAgICAgcGFnZU51bWJlcjogYXJnc1sncGFnZS1udW1iZXInXSxcbiAgICAgICAgICBwYWdlU2l6ZTogYXJnc1sncGFnZS1zaXplJ11cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnbG9hZC1jb25maWcnOlxuICAgICAgICBhd2FpdCBjbGkubG9hZENsaUNvbmZpZyh7XG4gICAgICAgICAgZ2xvYmFsOiBhcmdzLmdsb2JhbCwgXG4gICAgICAgICAgbG9hZEZpbGVQYXRoOiBhcmdzWydmaWxlLXBhdGgnXVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdzeW50aGVzaXplJzpcbiAgICAgIGNhc2UgJ3N5bnRoJzpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5zeW50aChhcmdzLlNUQUNLUywgYXJncy5leGNsdXNpdmVseSk7XG5cbiAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAvLyBjb25zdCBsYW5ndWFnZSA9IGNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuZ2V0KFsnbGFuZ3VhZ2UnXSk7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlID0gYXJncy5sYW5ndWFnZTtcbiAgICAgICAgaWYgKGFyZ3MubGlzdCkge1xuICAgICAgICAgIHJldHVybiBhd2FpdCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcyhsYW5ndWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaUluaXQoYXJncy5URU1QTEFURSwgbGFuZ3VhZ2UsIHVuZGVmaW5lZCwgYXJncy5nZW5lcmF0ZU9ubHkpO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3ZlcnNpb24nOlxuICAgICAgICByZXR1cm4gZGF0YSh2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTik7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBjb21tYW5kOiAnICsgY29tbWFuZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9Kc29uT3JZYW1sKG9iamVjdDogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gc2VyaWFsaXplU3RydWN0dXJlKG9iamVjdCwgYXJndi5qc29uKTtcbiAgfVxufVxuXG5pbml0Q29tbWFuZExpbmUoKVxuICAudGhlbigodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAvLyBwcm9jZXNzLmV4aXRDb2RlID0gdmFsdWU7XG4gICAgfVxuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIGVycm9yKGVyci5tZXNzYWdlKTtcbiAgICBpZiAoZXJyLnN0YWNrKSB7XG4gICAgICBkZWJ1ZyhlcnIuc3RhY2spO1xuICAgIH1cbiAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTtcbiAgfSk7XG4iXX0=