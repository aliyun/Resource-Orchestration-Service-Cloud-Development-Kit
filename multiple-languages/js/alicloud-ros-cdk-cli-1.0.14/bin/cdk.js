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
        .option('sync', { type: 'boolean', desc: 'sync deploy stack', default: false }))
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
    }))
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
                    sync: args.sync
                });
                return;
            case 'destroy':
                await cli.destroy({
                    stackNames: args.STACKS,
                    quiet: args.quiet,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFFL0Isa0VBQThEO0FBQzlELDBDQUE4QztBQUM5QyxvREFBZ0Q7QUFDaEQsc0NBQXVGO0FBQ3ZGLDRDQUFpRTtBQUNqRSxnREFBc0Q7QUFDdEQsOENBQWdEO0FBQ2hELDBDQUEwQztBQUUxQyxLQUFLLFVBQVUseUJBQXlCO0lBQ3RDLE1BQU0scUJBQXFCLEdBQUcsTUFBTSw2QkFBc0IsQ0FBQztJQUMzRCxPQUFPLEtBQUs7U0FDVCxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ1YsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO1NBQzVDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSw4R0FBOEc7UUFDcEgsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQztTQUNELE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDZCxJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLHNFQUFzRTtRQUM1RSxPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7U0FDRCxNQUFNLENBQUMsZUFBZSxFQUFFO1FBQ3ZCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsdUVBQXVFO0tBQzlFLENBQUM7U0FDRCxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQztTQUM1RSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsdUNBQXVDLEVBQUUsQ0FBQztTQUNwRixLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ2hCLE9BQU8sQ0FDTixpQkFBaUIsRUFDakIsMkdBQTJHLEVBQzNHLENBQUMsS0FB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USxDQUFDLENBQUM7aUJBQ2hEO3FCQUFNO29CQUNMLE9BQU8sTUFBTSxjQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDN0U7WUFFSCxLQUFLLFNBQVM7Z0JBQ1osT0FBTyxjQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRXZDO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRUQsU0FBUyxZQUFZLENBQUMsTUFBVztRQUMvQixPQUFPLDhCQUFrQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztBQUNILENBQUM7QUFFRCxlQUFlLEVBQUU7S0FDZCxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNkLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQixPQUFPO0tBQ1I7SUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixjQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDYjtTQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQ3BDLDRCQUE0QjtLQUM3QjtBQUNILENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ2IsZUFBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7UUFDYixlQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xuaW1wb3J0ICogYXMgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQgeyBDbG91ZEV4ZWN1dGFibGUgfSBmcm9tICcuLi9saWIvYXBpL2Nsb3VkLWV4ZWN1dGFibGUnO1xuaW1wb3J0IHsgZXhlY1Byb2dyYW0gfSBmcm9tICcuLi9saWIvYXBpL2V4ZWMnO1xuaW1wb3J0IHsgQ2RrVG9vbGtpdCB9IGZyb20gJy4uL2xpYi9jZGstdG9vbGtpdCc7XG5pbXBvcnQgeyBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzLCBjbGlJbml0LCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcyB9IGZyb20gJy4uL2xpYi9pbml0JztcbmltcG9ydCB7IGRhdGEsIGRlYnVnLCBlcnJvciwgc2V0TG9nTGV2ZWwgfSBmcm9tICcuLi9saWIvbG9nZ2luZyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHJ1Y3R1cmUgfSBmcm9tICcuLi9saWIvc2VyaWFsaXplJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9saWIvc2V0dGluZ3MnO1xuaW1wb3J0ICogYXMgdmVyc2lvbiBmcm9tICcuLi9saWIvdmVyc2lvbic7XG5cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlQ29tbWFuZExpbmVBcmd1bWVudHMoKSB7XG4gIGNvbnN0IGluaXRUZW1wbGF0ZUxhbmd1YWdlcyA9IGF3YWl0IGF2YWlsYWJsZUluaXRMYW5ndWFnZXM7XG4gIHJldHVybiB5YXJnc1xuICAgIC5lbnYoJ0NESycpXG4gICAgLnVzYWdlKCdVc2FnZTogcm9zLWNkayAtYSBbY2RrLWFwcF0gQ09NTUFORCcpXG4gICAgLm9wdGlvbignYXBwJywge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgZGVzYzogJ1JFUVVJUkVEOiBjb21tYW5kLWxpbmUgZm9yIGV4ZWN1dGluZyB5b3VyIGFwcCBvciBhIGNsb3VkIGFzc2VtYmx5IGRpcmVjdG9yeSAoZS5nLiBcIm5weCB0cy1ub2RlIGJpbi90ZXN0LnRzXCIpJyxcbiAgICAgICAgcmVxdWlyZXNBcmc6IHRydWVcbiAgICB9KVxuICAgIC5vcHRpb24oJ2pzb24nLCB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBhbGlhczogJ2onLFxuICAgICAgZGVzYzogJ1VzZSBKU09OIG91dHB1dCBpbnN0ZWFkIG9mIFlBTUwgd2hlbiB0ZW1wbGF0ZXMgYXJlIHByaW50ZWQgdG8gU1RET1VUJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0pXG4gICAgLm9wdGlvbignaWdub3JlLWVycm9ycycsIHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzYzogJ0lnbm9yZXMgc3ludGhlc2lzIGVycm9ycywgd2hpY2ggd2lsbCBsaWtlbHkgcHJvZHVjZSBhbiBpbnZhbGlkIG91dHB1dCcsXG4gICAgfSlcbiAgICAub3B0aW9uKCd0cmFjZScsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnUHJpbnQgdHJhY2UgZm9yIHN0YWNrIHdhcm5pbmdzJyB9KVxuICAgIC5vcHRpb24oJ3N0cmljdCcsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnRG8gbm90IGNvbnN0cnVjdCBzdGFja3Mgd2l0aCB3YXJuaW5ncycgfSlcbiAgICAuY291bnQoJ3ZlcmJvc2UnKVxuICAgIC5jb21tYW5kKFxuICAgICAgJ2luaXQgW1RFTVBMQVRFXScsXG4gICAgICAnQ3JlYXRlIGEgbmV3LCBlbXB0eSBDREsgcHJvamVjdCBmcm9tIGEgdGVtcGxhdGUuIEludm9rZWQgd2l0aG91dCBURU1QTEFURSwgdGhlIGFwcCB0ZW1wbGF0ZSB3aWxsIGJlIHVzZWQuJyxcbiAgICAgICh5YXJncykgPT5cbiAgICAgICAgeWFyZ3NcbiAgICAgICAgICAub3B0aW9uKCdsYW5ndWFnZScsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgICAgIGRlc2M6ICdUaGUgbGFuZ3VhZ2UgdG8gYmUgdXNlZCBmb3IgdGhlIG5ldyBwcm9qZWN0IChkZWZhdWx0IGNhbiBiZSBjb25maWd1cmVkIGluIH4vLmNkay5qc29uKScsXG4gICAgICAgICAgICBjaG9pY2VzOiBpbml0VGVtcGxhdGVMYW5ndWFnZXMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdsaXN0JywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdMaXN0IHRoZSBhdmFpbGFibGUgdGVtcGxhdGVzJyB9KVxuICAgICAgICAgIC5vcHRpb24oJ2dlbmVyYXRlLW9ubHknLCB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIGRlc2M6XG4gICAgICAgICAgICAgICdJZiB0cnVlLCBvbmx5IGdlbmVyYXRlcyBwcm9qZWN0IGZpbGVzLCB3aXRob3V0IGV4ZWN1dGluZyBhZGRpdGlvbmFsIG9wZXJhdGlvbnMgc3VjaCBhcyBzZXR0aW5nIHVwIGEgZ2l0IHJlcG8sIGluc3RhbGxpbmcgZGVwZW5kZW5jaWVzIG9yIGNvbXBpbGluZyB0aGUgcHJvamVjdCcsXG4gICAgICAgICAgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKFsnbGlzdCBbU1RBQ0tTLi5dJywgJ2xzIFtTVEFDS1MuLl0nXSwgJ0xpc3RzIGFsbCBzdGFja3MgaW4gdGhlIGFwcCcsICh5YXJncykgPT5cbiAgICAgIHlhcmdzLm9wdGlvbignbG9uZycsIHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgZGVzYzogJ0Rpc3BsYXkgZW52aXJvbm1lbnQgaW5mb3JtYXRpb24gZm9yIGVhY2ggc3RhY2snLFxuICAgICAgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKFxuICAgICAgWydzeW50aGVzaXplIFtTVEFDS1MuLl0nLCAnc3ludGggW1NUQUNLUy4uXSddLFxuICAgICAgJ1N5bnRoZXNpemVzIGFuZCBwcmludHMgdGhlIFJPUyB0ZW1wbGF0ZSBmb3IgdGhpcyBzdGFjaycsXG4gICAgICAoeWFyZ3MpID0+XG4gICAgICAgIHlhcmdzLm9wdGlvbignZXhjbHVzaXZlbHknLCB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGFsaWFzOiAnZScsXG4gICAgICAgICAgZGVzYzogXCJPbmx5IHN5bnRoZXNpemUgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcbiAgICAgICAgfSksXG4gICAgKVxuICAgIC5jb21tYW5kKCdkZXBsb3kgW1NUQUNLUy4uXScsICdEZXBsb3lzIHRoZSBzdGFjayhzKSBuYW1lZCBTVEFDS1MgdG8gUk9TIGludG8geW91ciBhbGljbG91ZCBhY2NvdW50JywgKHlhcmdzKSA9PlxuICAgICAgeWFyZ3NcbiAgICAgICAgLm9wdGlvbigncGFyYW1ldGVycycsIHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIGRlc2M6ICdBZGRpdGlvbmFsIHBhcmFtZXRlcnMgcGFzc2VkIHRvIFJPUyBhdCBkZXBsb3kgdGltZSAoU1RBQ0s6S0VZPVZBTFVFKScsXG4gICAgICAgICAgbmFyZ3M6IDEsXG4gICAgICAgICAgcmVxdWlyZXNBcmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdDoge30sXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb24oJ2V4Y2x1c2l2ZWx5Jywge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBhbGlhczogJ2UnLFxuICAgICAgICAgIGRlc2M6IFwiT25seSBkZXBsb3kgcmVxdWVzdGVkIHN0YWNrcywgZG9uJ3QgaW5jbHVkZSBkZXBlbmRlbmNpZXNcIixcbiAgICAgICAgfSlcbiAgICAgICAgLm9wdGlvbigndGltZW91dE1pbnV0ZXMnLCB7IHR5cGU6ICdudW1iZXInLCBhbGlhczogJ3QnLCBkZXNjOiAnVGhlIHRpbWVvdXQgbWludXRlcycsIGRlZmF1bHQ6IDIwIH0pXG4gICAgICAgICAgLm9wdGlvbignc3luYycsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnc3luYyBkZXBsb3kgc3RhY2snLCBkZWZhdWx0OiBmYWxzZSB9KSxcbiAgICApXG4gICAgLmNvbW1hbmQoXG4gICAgICAnZGlmZiBbU1RBQ0tTLi5dJyxcbiAgICAgICdDb21wYXJlcyB0aGUgc3BlY2lmaWVkIHN0YWNrIHdpdGggdGhlIGRlcGxveWVkIHN0YWNrIG9yIGEgbG9jYWwgdGVtcGxhdGUgZmlsZSwgYW5kIHJldHVybnMgd2l0aCBzdGF0dXMgMSBpZiBhbnkgZGlmZmVyZW5jZSBpcyBmb3VuZCcsXG4gICAgICAoeWFyZ3MpID0+XG4gICAgICAgIHlhcmdzXG4gICAgICAgICAgLm9wdGlvbigncGF0aCcsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYWxpYXM6ICdwJyxcbiAgICAgICAgICAgIGRlc2M6ICdUaGUgcGF0aCB0byB0aGUgdGVtcGxhdGUgdG8gY29tcGFyZSB3aXRoJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcuL2Nkay5vdXQnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignY29udGV4dC1saW5lcycsIHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgZGVzYzogJ051bWJlciBvZiBjb250ZXh0IGxpbmVzIHRvIGluY2x1ZGUgaW4gYXJiaXRyYXJ5IEpTT04gZGlmZiByZW5kZXJpbmcnLFxuICAgICAgICAgICAgZGVmYXVsdDogMyxcbiAgICAgICAgICB9KSxcbiAgICApXG4gICAgLmNvbW1hbmQoJ2Rlc3Ryb3kgW1NUQUNLUy4uXScsICdEZXN0cm95IHRoZSBzdGFjayhzKSBuYW1lZCBTVEFDS1MnLCAoeWFyZ3MpID0+XG4gICAgICB5YXJnc1xuICAgICAgICAgICAgLm9wdGlvbigncXVpZXQnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdxJyxcbiAgICAgICAgICAgICAgZGVzYzogJ2Rlc3Ryb3kgd2l0aG91dCBjb25maXJtJyxcbiAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0pLFxuICAgIClcbiAgICAuY29tbWFuZCgnZXZlbnQgW1NUQUNLLi5dJywgJ0dldCByZXNvdXJjZSBldmVudHMgd2l0aGluIHRoZSByZXNvdXJjZSBTVEFDSycsICh5YXJncykgPT5cbiAgICAgIHlhcmdzXG4gICAgICAub3B0aW9uKCdsb2dpY2FsLXJlc291cmNlLWlkJywge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgZGVzYzogJ1N0YWNrIGxvZ2ljYWwgcmVzb3VyY2UgaWQnXG4gICAgICB9KVxuICAgICAgLm9wdGlvbigncGFnZS1udW1iZXInLCB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBhbGlhczogJ24nLFxuICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiB0aGUgcGFnZSB0byByZXR1cm4sIFBhZ2VzIHN0YXJ0IGZyb20gcGFnZSAxLiBEZWZhdWx0IHZhbHVlOjEnLFxuICAgICAgfSlcbiAgICAgIC5vcHRpb24oJ3BhZ2Utc2l6ZScsIHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGFsaWFzOiAncycsXG4gICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIGVudHJpZXMgdG8gcmV0dXJuIG9uIGVhY2ggcGFnZSwgTWF4aW11bSB2YWx1ZTogNTAuIERlZmF1bHQgdmFsdWU6IDEwJyxcbiAgICAgIH0pXG4gICAgKVxuICAgIC5jb21tYW5kKCdvdXRwdXQgW1NUQUNLLi5dJywgJ0dldCB0aGUgb3V0cHV0IGluZm9ybWF0aW9uIG9mIHJlc291cmNlIHN0YWNrJylcbiAgICAuY29tbWFuZCgncmVzb3VyY2UgW1NUQUNLUy4uXScsICdHZXQgcmVzb3VyY2VzIGluIHRoZSByZXNvdXJjZSBTVEFDS1MnKVxuICAgIC5jb21tYW5kKCdsaXN0LXN0YWNrcyBbU1RBQ0tTLi5dJywgJ0dldCByZXNvdXJjZXMgaW4gdGhlIHJlc291cmNlIFNUQUNLUycsICh5YXJncykgPT5cbiAgICAgIHlhcmdzXG4gICAgICAub3B0aW9uKCdhbGwnLCB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgYWxpYXM6ICdhJyxcbiAgICAgICAgZGVzYzogJ0dldCBhbGwgU3RhY2tzIGluIGFjY291bnQgc2V0IGNvbmZpZyBSZWdpb24uJyxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB9KVxuICAgICAgLm9wdGlvbigncGFnZS1udW1iZXInLCB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBhbGlhczogJ24nLFxuICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiB0aGUgcGFnZSB0byByZXR1cm4sIFBhZ2VzIHN0YXJ0IGZyb20gcGFnZSAxLiBEZWZhdWx0IHZhbHVlOjEnLFxuICAgICAgfSlcbiAgICAgIC5vcHRpb24oJ3BhZ2Utc2l6ZScsIHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGFsaWFzOiAncycsXG4gICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIGVudHJpZXMgdG8gcmV0dXJuIG9uIGVhY2ggcGFnZSwgTWF4aW11bSB2YWx1ZTogMTAwLiBEZWZhdWx0IHZhbHVlOiAxMCcsXG4gICAgICB9KVxuICAgIClcbiAgICAuY29tbWFuZCgnbG9hZC1jb25maWcnLCAnTG9hZCBBbGl5dW4gQ0xJIGNvbmZpZyB0byBDREsuJywgKHlhcmdzKSA9PlxuICAgICAgeWFyZ3Mub3B0aW9uKCdnbG9iYWwnLCB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgYWxpYXM6ICdnJyxcbiAgICAgICAgZGVzYzogJ1doZXRoZXIgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3RvcmVkIGluIGdsb2JhbCBlbnYnLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgICAub3B0aW9uKCdmaWxlLXBhdGgnLCB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBhbGlhczogJ2YnLFxuICAgICAgICBkZXNjOiAnU3BlY2lmeSB0aGUgY2xpIGNvbmZpZ3VyYXRpb24gZmlsZSBwYXRoIHRvIGxvYWQnLFxuICAgICAgfSlcbiAgICApXG4gICAgLmNvbW1hbmQoJ2NvbmZpZycsICdTZXQgeW91ciBhbGljbG91ZCBhY2NvdW50IGNvbmZpZ3VyYXRpb24uJywgKHlhcmdzKSA9PlxuICAgICAgeWFyZ3Mub3B0aW9uKCdnbG9iYWwnLCB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgYWxpYXM6ICdnJyxcbiAgICAgICAgZGVzYzogJ1doZXRoZXIgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3RvcmVkIGluIGdsb2JhbCBlbnYnLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIH0pLFxuICAgIClcbiAgICAgIC5jb21tYW5kKCdjb25maWctc2V0JywgJ1NldCB5b3VyIGFsaWNsb3VkIGFjY291bnQgY29uZmlndXJhdGlvbiBub24gaW50ZXJhY3RpdmUgbW9kZS4nLCAoeWFyZ3MpID0+XG4gICAgICAgICAgeWFyZ3Mub3B0aW9uKCdnbG9iYWwnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdnJyxcbiAgICAgICAgICAgICAgZGVzYzogJ1doZXRoZXIgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3RvcmVkIGluIGdsb2JhbCBlbnYnLFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ2VuZHBvaW50Jywge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdlJyxcbiAgICAgICAgICAgICAgZGVzYzogJ1NwZWNpZnkgdGhlIHNlcnZpY2UgYWRkcmVzcyB0aGF0IGluaXRpYXRlZCB0aGUgcmVxdWVzdCcsXG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbigncmVnaW9uJywge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdyJyxcbiAgICAgICAgICAgICAgZGVzYzogJ1NwZWNpZnkgcmVnaW9uIGluZm9ybWF0aW9uIGZvciBtYW5hZ2luZyByZXNvdXJjZXMnLFxuICAgICAgICAgICAgICBkZWZhdWx0OiAnY24taGFuZ3pob3UnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignbW9kZScsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAnbScsXG4gICAgICAgICAgICAgIGRlbWFuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1tb2RlIHtBS3xTdHNUb2tlbnxSYW1Sb2xlQXJufEVjc1JhbVJvbGV9YCB0byBhc3NpZ24gYXV0aGVudGljYXRlIG1vZGUnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignYWNjZXNzLWtleS1pZCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAnYWsnLFxuICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLWFjY2Vzcy1rZXktaWQgQWNjZXNzS2V5SWRgIHRvIGFzc2lnbiBBY2Nlc3NLZXlJZCwgcmVxdWlyZWQgaW4gQUsvU3RzVG9rZW4vUmFtUm9sZUFybiBtb2RlJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ2FjY2Vzcy1rZXktc2VjcmV0Jywge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdzaycsXG4gICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tYWNjZXNzLWtleS1zZWNyZXQgQWNjZXNzS2V5U2VjcmV0YCB0byBhc3NpZ24gQWNjZXNzS2V5U2VjcmV0LCByZXF1aXJlZCBpbiBBSy9TdHNUb2tlbi9SYW1Sb2xlQXJuIG1vZGUnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignc3RzLXRva2VuJywge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdzdHMnLFxuICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLXN0cy10b2tlbiBTdHNUb2tlbmAgdG8gYXNzaWduIFN0c1Rva2VuLCByZXF1aXJlZCBpbiBTdHNUb2tlbiBtb2RlJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ3JhbS1yb2xlLWFybicsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAnYXJuJyxcbiAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1yYW0tcm9sZS1hcm4gUmFtUm9sZUFybmAgdG8gYXNzaWduIFJhbVJvbGVBcm4oZWc6IGFjczpyYW06OioqKioqKjpyb2xlLyoqKioqKiksIHJlcXVpcmVkIGluIFJhbVJvbGVBcm4gbW9kZScsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdyb2xlLXNlc3Npb24tbmFtZScsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAncycsXG4gICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tcm9sZS1zZXNzaW9uLW5hbWUgUm9sZVNlc3Npb25OYW1lYCB0byBhc3NpZ24gUm9sZVNlc3Npb25OYW1lLCByZXF1aXJlZCBpbiBSYW1Sb2xlQXJuIG1vZGUnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbigncmFtLXJvbGUtbmFtZScsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGFsaWFzOiAncm9sZScsXG4gICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tcmFtLXJvbGUtbmFtZSBSYW1Sb2xlTmFtZWAgdG8gYXNzaWduIFJhbVJvbGVOYW1lLCByZXF1aXJlZCBpbiBFY3NSYW1Sb2xlIG1vZGUnLFxuICAgICAgICAgIH0pXG4gICAgICApXG4gICAgLnZlcnNpb24odmVyc2lvbi5ESVNQTEFZX1ZFUlNJT04pXG4gICAgLmRlbWFuZENvbW1hbmQoMSwgJycpIC8vIGp1c3QgcHJpbnQgaGVscFxuICAgIC5yZWNvbW1lbmRDb21tYW5kcygpXG4gICAgLmhlbHAoKVxuICAgIC5hbGlhcygnaCcsICdoZWxwJylcbiAgICAuZXBpbG9ndWUoXG4gICAgICBbXG4gICAgICAgICdJZiB5b3VyIGFwcCBoYXMgYSBzaW5nbGUgc3RhY2ssIHRoZXJlIGlzIG5vIG5lZWQgdG8gc3BlY2lmeSB0aGUgc3RhY2sgbmFtZScsXG4gICAgICAgICdJZiBvbmUgb2YgY2RrLmpzb24gb3Igfi8uY2RrLmpzb24gZXhpc3RzLCBvcHRpb25zIHNwZWNpZmllZCB0aGVyZSB3aWxsIGJlIHVzZWQgYXMgZGVmYXVsdHMuIFNldHRpbmdzIGluIGNkay5qc29uIHRha2UgcHJlY2VkZW5jZS4nLFxuICAgICAgXS5qb2luKCdcXG5cXG4nKSxcbiAgICApLmFyZ3Y7XG59XG5cbmlmICghcHJvY2Vzcy5zdGRvdXQuaXNUVFkpIHtcbiAgY29sb3JzLmRpc2FibGUoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdENvbW1hbmRMaW5lKCkge1xuICBjb25zdCBhcmd2ID0gYXdhaXQgcGFyc2VDb21tYW5kTGluZUFyZ3VtZW50cygpO1xuICBpZiAoYXJndi52ZXJib3NlKSB7XG4gICAgc2V0TG9nTGV2ZWwoYXJndi52ZXJib3NlKTtcbiAgfVxuICBkZWJ1ZygnQ0RLIHRvb2xraXQgdmVyc2lvbjonLCB2ZXJzaW9uLkRJU1BMQVlfVkVSU0lPTik7XG4gIGRlYnVnKCdDb21tYW5kIGxpbmUgYXJndW1lbnRzOicsIGFyZ3YpO1xuXG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbihhcmd2KTtcbiAgYXdhaXQgY29uZmlndXJhdGlvbi5sb2FkKCk7XG5cbiAgY29uc3QgY2xvdWRFeGVjdXRhYmxlID0gbmV3IENsb3VkRXhlY3V0YWJsZSh7XG4gICAgY29uZmlndXJhdGlvbixcbiAgICBzeW50aGVzaXplcjogZXhlY1Byb2dyYW0sXG4gIH0pO1xuXG4gIGNvbnN0IGNtZCA9IFN0cmluZyhhcmd2Ll9bMF0pO1xuXG4gIGNvbnN0IHJldHVyblZhbHVlID0gYXdhaXQgbWFpbihjbWQsIGFyZ3YpO1xuICBpZiAodHlwZW9mIHJldHVyblZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB0b0pzb25PcllhbWwocmV0dXJuVmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiByZXR1cm5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gbWFpbihjb21tYW5kOiBzdHJpbmcsIGFyZ3M6IGFueSk6IFByb21pc2U8bnVtYmVyIHwgc3RyaW5nIHwge30gfCB2b2lkPiB7XG4gICAgYXJncy5TVEFDS1MgPSBhcmdzLlNUQUNLUyB8fCBbXTtcblxuICAgIGNvbnN0IGNsaSA9IG5ldyBDZGtUb29sa2l0KHtcbiAgICAgIGNsb3VkRXhlY3V0YWJsZSxcbiAgICAgIHZlcmJvc2U6IGFyZ3YudHJhY2UgfHwgYXJndi52ZXJib3NlID4gMCxcbiAgICAgIGlnbm9yZUVycm9yczogYXJndlsnaWdub3JlLWVycm9ycyddLFxuICAgICAgc3RyaWN0OiBhcmd2LnN0cmljdCxcbiAgICAgIGNvbmZpZ3VyYXRpb24sXG4gICAgfSk7XG5cbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgIGNhc2UgJ2xzJzpcbiAgICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgICByZXR1cm4gYXdhaXQgY2xpLmxpc3QoYXJncy5TVEFDS1MpO1xuXG4gICAgICBjYXNlICdjb25maWcnOlxuICAgICAgICAvLyB3YWl0IHVzZXIgZm9yIHJvcyBpbnB1dFxuICAgICAgICBhd2FpdCBjbGkuY29uZmlnKGFyZ3MuZ2xvYmFsKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdjb25maWctc2V0JzpcbiAgICAgICAgLy8gd2FpdCB1c2VyIGZvciByb3MgaW5wdXRcbiAgICAgICAgYXdhaXQgY2xpLmNvbmZpZ1NldCh7XG4gICAgICAgICAgICBnbG9iYWw6IGFyZ3MuZ2xvYmFsLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGFyZ3MuZW5kcG9pbnQsXG4gICAgICAgICAgICByZWdpb246IGFyZ3MucmVnaW9uLFxuICAgICAgICAgICAgbW9kZTogYXJncy5tb2RlLFxuICAgICAgICAgICAgYWs6IGFyZ3NbJ2FjY2Vzcy1rZXktaWQnXSxcbiAgICAgICAgICAgIHNrOiBhcmdzWydhY2Nlc3Mta2V5LXNlY3JldCddLFxuICAgICAgICAgICAgc3RzOiBhcmdzWydzdHMtdG9rZW4nXSxcbiAgICAgICAgICAgIHJhbVJvbGVBcm46IGFyZ3NbJ3JhbS1yb2xlLWFybiddLFxuICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiBhcmdzWydyb2xlLXNlc3Npb24tbmFtZSddLFxuICAgICAgICAgICAgcmFtUm9sZU5hbWU6IGFyZ3NbJ3JhbS1yb2xlLW5hbWUnXVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdkaWZmJzpcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5kaWZmKHtcbiAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICBwYXRoOiBhcmdzLnBhdGgsXG4gICAgICAgICAgY29udGV4dExpbmVzOiBhcmdzLmNvbnRleHRMaW5lcyxcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2RlcGxveSc6XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlck1hcDogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkIH0gPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgYXJncy5wYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbWV0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IChwYXJhbWV0ZXIgYXMgc3RyaW5nKS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgcGFyYW1ldGVyTWFwW2tleVZhbHVlWzBdXSA9IGtleVZhbHVlLnNsaWNlKDEpLmpvaW4oJz0nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgY2xpLmRlcGxveSh7XG4gICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1MsXG4gICAgICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVyTWFwLFxuICAgICAgICAgIGV4Y2x1c2l2ZWx5OiBhcmdzLmV4Y2x1c2l2ZWx5LFxuICAgICAgICAgIHRpbWVvdXQ6IGFyZ3MudGltZW91dE1pbnV0ZXMsXG4gICAgICAgICAgc3luYzogYXJncy5zeW5jXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNhc2UgJ2Rlc3Ryb3knOlxuICAgICAgICBhd2FpdCBjbGkuZGVzdHJveSh7XG4gICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1MsXG4gICAgICAgICAgcXVpZXQ6IGFyZ3MucXVpZXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNhc2UgJ2V2ZW50JzpcbiAgICAgICAgYXdhaXQgY2xpLmV2ZW50KHtcbiAgICAgICAgICBzdGFja05hbWU6IGFyZ3NbJ1NUQUNLJ10sXG4gICAgICAgICAgbG9naWNhbFJlc291cmNlSWQ6IGFyZ3NbJ2xvZ2ljYWwtcmVzb3VyY2UtaWQnXSxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBhcmdzWydwYWdlLW51bWJlciddLFxuICAgICAgICAgIHBhZ2VTaXplOiBhcmdzWydwYWdlLXNpemUnXVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdvdXRwdXQnOlxuICAgICAgICBhd2FpdCBjbGkub3V0cHV0KHtcbiAgICAgICAgICAgIHN0YWNrTmFtZTogYXJnc1snU1RBQ0snXVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdyZXNvdXJjZSc6XG4gICAgICAgIGF3YWl0IGNsaS5yZXNvdXJjZSh7XG4gICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1NcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnbGlzdC1zdGFja3MnOlxuICAgICAgICBhd2FpdCBjbGkubGlzdFN0YWNrcyh7XG4gICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1MsXG4gICAgICAgICAgYWxsOiBhcmdzLmFsbCxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBhcmdzWydwYWdlLW51bWJlciddLFxuICAgICAgICAgIHBhZ2VTaXplOiBhcmdzWydwYWdlLXNpemUnXVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlICdsb2FkLWNvbmZpZyc6XG4gICAgICAgIGF3YWl0IGNsaS5sb2FkQ2xpQ29uZmlnKHtcbiAgICAgICAgICBnbG9iYWw6IGFyZ3MuZ2xvYmFsLCBcbiAgICAgICAgICBsb2FkRmlsZVBhdGg6IGFyZ3NbJ2ZpbGUtcGF0aCddXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNhc2UgJ3N5bnRoZXNpemUnOlxuICAgICAgY2FzZSAnc3ludGgnOlxuICAgICAgICByZXR1cm4gYXdhaXQgY2xpLnN5bnRoKGFyZ3MuU1RBQ0tTLCBhcmdzLmV4Y2x1c2l2ZWx5KTtcblxuICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgIC8vIGNvbnN0IGxhbmd1YWdlID0gY29uZmlndXJhdGlvbi5zZXR0aW5ncy5nZXQoWydsYW5ndWFnZSddKTtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBhcmdzLmxhbmd1YWdlO1xuICAgICAgICBpZiAoYXJncy5saXN0KSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHByaW50QXZhaWxhYmxlVGVtcGxhdGVzKGxhbmd1YWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgY2xpSW5pdChhcmdzLlRFTVBMQVRFLCBsYW5ndWFnZSwgdW5kZWZpbmVkLCBhcmdzLmdlbmVyYXRlT25seSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAndmVyc2lvbic6XG4gICAgICAgIHJldHVybiBkYXRhKHZlcnNpb24uRElTUExBWV9WRVJTSU9OKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGNvbW1hbmQ6ICcgKyBjb21tYW5kKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b0pzb25PcllhbWwob2JqZWN0OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBzZXJpYWxpemVTdHJ1Y3R1cmUob2JqZWN0LCBhcmd2Lmpzb24pO1xuICB9XG59XG5cbmluaXRDb21tYW5kTGluZSgpXG4gIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRhKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIC8vIHByb2Nlc3MuZXhpdENvZGUgPSB2YWx1ZTtcbiAgICB9XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgIGlmIChlcnIuc3RhY2spIHtcbiAgICAgIGRlYnVnKGVyci5zdGFjayk7XG4gICAgfVxuICAgIHByb2Nlc3MuZXhpdENvZGUgPSAxO1xuICB9KTtcblxuIl19