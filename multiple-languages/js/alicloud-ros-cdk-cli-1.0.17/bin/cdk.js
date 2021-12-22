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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFFL0Isa0VBQThEO0FBQzlELDBDQUE4QztBQUM5QyxvREFBZ0Q7QUFDaEQsc0NBQXVGO0FBQ3ZGLDRDQUFpRTtBQUNqRSxnREFBc0Q7QUFDdEQsOENBQWdEO0FBQ2hELDBDQUEwQztBQUUxQyxLQUFLLFVBQVUseUJBQXlCO0lBQ3BDLE1BQU0scUJBQXFCLEdBQUcsTUFBTSw2QkFBc0IsQ0FBQztJQUMzRCxPQUFPLEtBQUs7U0FDUCxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ1YsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO1NBQzVDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSw4R0FBOEc7UUFDcEgsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQztTQUNELE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDWixJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLHNFQUFzRTtRQUM1RSxPQUFPLEVBQUUsS0FBSztLQUNqQixDQUFDO1NBQ0QsTUFBTSxDQUFDLGVBQWUsRUFBRTtRQUNyQixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLHVFQUF1RTtLQUNoRixDQUFDO1NBQ0QsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxFQUFFLENBQUM7U0FDNUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLHVDQUF1QyxFQUFFLENBQUM7U0FDcEYsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUNoQixPQUFPLENBQ0osaUJBQWlCLEVBQ2pCLDJHQUEyRyxFQUMzRyxDQUFDLEtB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TSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUNsQyw0QkFBNEI7S0FDL0I7QUFDTCxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNYLGVBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO1FBQ1gsZUFBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQjtJQUNELE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCAqIGFzIHlhcmdzIGZyb20gJ3lhcmdzJztcblxuaW1wb3J0IHsgQ2xvdWRFeGVjdXRhYmxlIH0gZnJvbSAnLi4vbGliL2FwaS9jbG91ZC1leGVjdXRhYmxlJztcbmltcG9ydCB7IGV4ZWNQcm9ncmFtIH0gZnJvbSAnLi4vbGliL2FwaS9leGVjJztcbmltcG9ydCB7IENka1Rvb2xraXQgfSBmcm9tICcuLi9saWIvY2RrLXRvb2xraXQnO1xuaW1wb3J0IHsgYXZhaWxhYmxlSW5pdExhbmd1YWdlcywgY2xpSW5pdCwgcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMgfSBmcm9tICcuLi9saWIvaW5pdCc7XG5pbXBvcnQgeyBkYXRhLCBkZWJ1ZywgZXJyb3IsIHNldExvZ0xldmVsIH0gZnJvbSAnLi4vbGliL2xvZ2dpbmcnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3RydWN0dXJlIH0gZnJvbSAnLi4vbGliL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbGliL3NldHRpbmdzJztcbmltcG9ydCAqIGFzIHZlcnNpb24gZnJvbSAnLi4vbGliL3ZlcnNpb24nO1xuXG5hc3luYyBmdW5jdGlvbiBwYXJzZUNvbW1hbmRMaW5lQXJndW1lbnRzKCkge1xuICAgIGNvbnN0IGluaXRUZW1wbGF0ZUxhbmd1YWdlcyA9IGF3YWl0IGF2YWlsYWJsZUluaXRMYW5ndWFnZXM7XG4gICAgcmV0dXJuIHlhcmdzXG4gICAgICAgIC5lbnYoJ0NESycpXG4gICAgICAgIC51c2FnZSgnVXNhZ2U6IHJvcy1jZGsgLWEgW2Nkay1hcHBdIENPTU1BTkQnKVxuICAgICAgICAub3B0aW9uKCdhcHAnLCB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlc2M6ICdSRVFVSVJFRDogY29tbWFuZC1saW5lIGZvciBleGVjdXRpbmcgeW91ciBhcHAgb3IgYSBjbG91ZCBhc3NlbWJseSBkaXJlY3RvcnkgKGUuZy4gXCJucHggdHMtbm9kZSBiaW4vdGVzdC50c1wiKScsXG4gICAgICAgICAgICByZXF1aXJlc0FyZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAub3B0aW9uKCdqc29uJywge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgYWxpYXM6ICdqJyxcbiAgICAgICAgICAgIGRlc2M6ICdVc2UgSlNPTiBvdXRwdXQgaW5zdGVhZCBvZiBZQU1MIHdoZW4gdGVtcGxhdGVzIGFyZSBwcmludGVkIHRvIFNURE9VVCcsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgLm9wdGlvbignaWdub3JlLWVycm9ycycsIHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVzYzogJ0lnbm9yZXMgc3ludGhlc2lzIGVycm9ycywgd2hpY2ggd2lsbCBsaWtlbHkgcHJvZHVjZSBhbiBpbnZhbGlkIG91dHB1dCcsXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb24oJ3RyYWNlJywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdQcmludCB0cmFjZSBmb3Igc3RhY2sgd2FybmluZ3MnIH0pXG4gICAgICAgIC5vcHRpb24oJ3N0cmljdCcsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnRG8gbm90IGNvbnN0cnVjdCBzdGFja3Mgd2l0aCB3YXJuaW5ncycgfSlcbiAgICAgICAgLmNvdW50KCd2ZXJib3NlJylcbiAgICAgICAgLmNvbW1hbmQoXG4gICAgICAgICAgICAnaW5pdCBbVEVNUExBVEVdJyxcbiAgICAgICAgICAgICdDcmVhdGUgYSBuZXcsIGVtcHR5IENESyBwcm9qZWN0IGZyb20gYSB0ZW1wbGF0ZS4gSW52b2tlZCB3aXRob3V0IFRFTVBMQVRFLCB0aGUgYXBwIHRlbXBsYXRlIHdpbGwgYmUgdXNlZC4nLFxuICAgICAgICAgICAgKHlhcmdzKSA9PlxuICAgICAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgICAgIC5vcHRpb24oJ2xhbmd1YWdlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2wnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1RoZSBsYW5ndWFnZSB0byBiZSB1c2VkIGZvciB0aGUgbmV3IHByb2plY3QgKGRlZmF1bHQgY2FuIGJlIGNvbmZpZ3VyZWQgaW4gfi8uY2RrLmpzb24pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXM6IGluaXRUZW1wbGF0ZUxhbmd1YWdlcyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbignbGlzdCcsIHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjOiAnTGlzdCB0aGUgYXZhaWxhYmxlIHRlbXBsYXRlcycgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbignZ2VuZXJhdGUtb25seScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSWYgdHJ1ZSwgb25seSBnZW5lcmF0ZXMgcHJvamVjdCBmaWxlcywgd2l0aG91dCBleGVjdXRpbmcgYWRkaXRpb25hbCBvcGVyYXRpb25zIHN1Y2ggYXMgc2V0dGluZyB1cCBhIGdpdCByZXBvLCBpbnN0YWxsaW5nIGRlcGVuZGVuY2llcyBvciBjb21waWxpbmcgdGhlIHByb2plY3QnLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZChbJ2xpc3QgW1NUQUNLUy4uXScsICdscyBbU1RBQ0tTLi5dJ10sICdMaXN0cyBhbGwgc3RhY2tzIGluIHRoZSBhcHAnLCAoeWFyZ3MpID0+XG4gICAgICAgICAgICB5YXJncy5vcHRpb24oJ2xvbmcnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFsaWFzOiAnbCcsXG4gICAgICAgICAgICAgICAgZGVzYzogJ0Rpc3BsYXkgZW52aXJvbm1lbnQgaW5mb3JtYXRpb24gZm9yIGVhY2ggc3RhY2snLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoXG4gICAgICAgICAgICBbJ3N5bnRoZXNpemUgW1NUQUNLUy4uXScsICdzeW50aCBbU1RBQ0tTLi5dJ10sXG4gICAgICAgICAgICAnU3ludGhlc2l6ZXMgYW5kIHByaW50cyB0aGUgUk9TIHRlbXBsYXRlIGZvciB0aGlzIHN0YWNrJyxcbiAgICAgICAgICAgICh5YXJncykgPT5cbiAgICAgICAgICAgICAgICB5YXJncy5vcHRpb24oJ2V4Y2x1c2l2ZWx5Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnZScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiT25seSBzeW50aGVzaXplIHJlcXVlc3RlZCBzdGFja3MsIGRvbid0IGluY2x1ZGUgZGVwZW5kZW5jaWVzXCIsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoJ2RlcGxveSBbU1RBQ0tTLi5dJywgJ0RlcGxveXMgdGhlIHN0YWNrKHMpIG5hbWVkIFNUQUNLUyB0byBST1MgaW50byB5b3VyIGFsaWNsb3VkIGFjY291bnQnLCAoeWFyZ3MpID0+XG4gICAgICAgICAgICB5YXJnc1xuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3BhcmFtZXRlcnMnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdBZGRpdGlvbmFsIHBhcmFtZXRlcnMgcGFzc2VkIHRvIFJPUyBhdCBkZXBsb3kgdGltZSAoU1RBQ0s6S0VZPVZBTFVFKScsXG4gICAgICAgICAgICAgICAgICAgIG5hcmdzOiAxLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlc0FyZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge30sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdleGNsdXNpdmVseScsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2UnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiBcIk9ubHkgZGVwbG95IHJlcXVlc3RlZCBzdGFja3MsIGRvbid0IGluY2x1ZGUgZGVwZW5kZW5jaWVzXCIsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCd0aW1lb3V0TWludXRlcycsIHsgdHlwZTogJ251bWJlcicsIGFsaWFzOiAndCcsIGRlc2M6ICdUaGUgdGltZW91dCBtaW51dGVzJywgZGVmYXVsdDogMjAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdzeW5jJywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdzeW5jIGRlcGxveSBzdGFjaycsIGRlZmF1bHQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbignb3V0cHV0cy1maWxlJywgeyB0eXBlOiAnYm9vbGVhbicsIGRlc2M6ICdTdGFjayBvdXRwdXRzIHdpbGwgYmUgd3JpdHRlbiBhcyBKU09OJywgZGVmYXVsdDogZmFsc2UgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNvbW1hbmQoXG4gICAgICAgICAgICAnZGlmZiBbU1RBQ0tTLi5dJyxcbiAgICAgICAgICAgICdDb21wYXJlcyB0aGUgc3BlY2lmaWVkIHN0YWNrIHdpdGggdGhlIGRlcGxveWVkIHN0YWNrIG9yIGEgbG9jYWwgdGVtcGxhdGUgZmlsZSwgYW5kIHJldHVybnMgd2l0aCBzdGF0dXMgMSBpZiBhbnkgZGlmZmVyZW5jZSBpcyBmb3VuZCcsXG4gICAgICAgICAgICAoeWFyZ3MpID0+XG4gICAgICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbigncGF0aCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6ICdUaGUgcGF0aCB0byB0aGUgdGVtcGxhdGUgdG8gY29tcGFyZSB3aXRoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcuL2Nkay5vdXQnLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uKCdjb250ZXh0LWxpbmVzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAnTnVtYmVyIG9mIGNvbnRleHQgbGluZXMgdG8gaW5jbHVkZSBpbiBhcmJpdHJhcnkgSlNPTiBkaWZmIHJlbmRlcmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAzLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZCgnZGVzdHJveSBbU1RBQ0tTLi5dJywgJ0Rlc3Ryb3kgdGhlIHN0YWNrKHMpIG5hbWVkIFNUQUNLUycsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncXVpZXQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdxJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ2Rlc3Ryb3kgd2l0aG91dCBjb25maXJtJyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3N5bmMnLCB7IHR5cGU6ICdib29sZWFuJywgZGVzYzogJ3N5bmMgZGVzdHJveSBzdGFjaycsIGRlZmF1bHQ6IGZhbHNlIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKCdldmVudCBbU1RBQ0suLl0nLCAnR2V0IHJlc291cmNlIGV2ZW50cyB3aXRoaW4gdGhlIHJlc291cmNlIFNUQUNLJywgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdsb2dpY2FsLXJlc291cmNlLWlkJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdsJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1N0YWNrIGxvZ2ljYWwgcmVzb3VyY2UgaWQnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdwYWdlLW51bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnbicsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdUaGUgbnVtYmVyIG9mIHRoZSBwYWdlIHRvIHJldHVybiwgUGFnZXMgc3RhcnQgZnJvbSBwYWdlIDEuIERlZmF1bHQgdmFsdWU6MScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdwYWdlLXNpemUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3MnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiBlbnRyaWVzIHRvIHJldHVybiBvbiBlYWNoIHBhZ2UsIE1heGltdW0gdmFsdWU6IDUwLiBEZWZhdWx0IHZhbHVlOiAxMCcsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZCgnb3V0cHV0IFtTVEFDSy4uXScsICdHZXQgdGhlIG91dHB1dCBpbmZvcm1hdGlvbiBvZiByZXNvdXJjZSBzdGFjaycpXG4gICAgICAgIC5jb21tYW5kKCdyZXNvdXJjZSBbU1RBQ0tTLi5dJywgJ0dldCByZXNvdXJjZXMgaW4gdGhlIHJlc291cmNlIFNUQUNLUycpXG4gICAgICAgIC5jb21tYW5kKCdsaXN0LXN0YWNrcyBbU1RBQ0tTLi5dJywgJ0dldCByZXNvdXJjZXMgaW4gdGhlIHJlc291cmNlIFNUQUNLUycsICh5YXJncykgPT5cbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLm9wdGlvbignYWxsJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnYScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdHZXQgYWxsIFN0YWNrcyBpbiBhY2NvdW50IHNldCBjb25maWcgUmVnaW9uLicsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncGFnZS1udW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ24nLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnVGhlIG51bWJlciBvZiB0aGUgcGFnZSB0byByZXR1cm4sIFBhZ2VzIHN0YXJ0IGZyb20gcGFnZSAxLiBEZWZhdWx0IHZhbHVlOjEnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncGFnZS1zaXplJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1RoZSBudW1iZXIgb2YgZW50cmllcyB0byByZXR1cm4gb24gZWFjaCBwYWdlLCBNYXhpbXVtIHZhbHVlOiAxMDAuIERlZmF1bHQgdmFsdWU6IDEwJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5jb21tYW5kKCdsb2FkLWNvbmZpZycsICdMb2FkIEFsaXl1biBDTEkgY29uZmlnIHRvIENESy4nLCAoeWFyZ3MpID0+XG4gICAgICAgICAgICB5YXJncy5vcHRpb24oJ2dsb2JhbCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgYWxpYXM6ICdnJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnV2hldGhlciB0aGUgY29uZmlnIHNob3VsZCBiZSBzdG9yZWQgaW4gZ2xvYmFsIGVudicsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2ZpbGUtcGF0aCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnZicsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdTcGVjaWZ5IHRoZSBjbGkgY29uZmlndXJhdGlvbiBmaWxlIHBhdGggdG8gbG9hZCcsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZCgnY29uZmlnJywgJ1NldCB5b3VyIGFsaWNsb3VkIGFjY291bnQgY29uZmlndXJhdGlvbi4nLCAoeWFyZ3MpID0+XG4gICAgICAgICAgICB5YXJncy5vcHRpb24oJ2dsb2JhbCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgICAgYWxpYXM6ICdnJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnV2hldGhlciB0aGUgY29uZmlnIHNob3VsZCBiZSBzdG9yZWQgaW4gZ2xvYmFsIGVudicsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY29tbWFuZCgnZ2VuZXJhdGUtc3RhY2stZmlsZScsICdUaGUgcmVzb3VyY2Ugc3RhY2sgaW5mb3JtYXRpb24gaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQnKVxuICAgICAgICAuY29tbWFuZCgnY29uZmlnLXNldCcsICdTZXQgeW91ciBhbGljbG91ZCBhY2NvdW50IGNvbmZpZ3VyYXRpb24gbm9uIGludGVyYWN0aXZlIG1vZGUuJywgKHlhcmdzKSA9PlxuICAgICAgICAgICAgeWFyZ3Mub3B0aW9uKCdnbG9iYWwnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGFsaWFzOiAnZycsXG4gICAgICAgICAgICAgICAgZGVzYzogJ1doZXRoZXIgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3RvcmVkIGluIGdsb2JhbCBlbnYnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdlbmRwb2ludCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnZScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdTcGVjaWZ5IHRoZSBzZXJ2aWNlIGFkZHJlc3MgdGhhdCBpbml0aWF0ZWQgdGhlIHJlcXVlc3QnLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAnaHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3JlZ2lvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAncicsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdTcGVjaWZ5IHJlZ2lvbiBpbmZvcm1hdGlvbiBmb3IgbWFuYWdpbmcgcmVzb3VyY2VzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogJ2NuLWhhbmd6aG91JyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ21vZGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ20nLFxuICAgICAgICAgICAgICAgICAgICBkZW1hbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tbW9kZSB7QUt8U3RzVG9rZW58UmFtUm9sZUFybnxFY3NSYW1Sb2xlfWAgdG8gYXNzaWduIGF1dGhlbnRpY2F0ZSBtb2RlJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ2FjY2Vzcy1rZXktaWQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2FrJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1hY2Nlc3Mta2V5LWlkIEFjY2Vzc0tleUlkYCB0byBhc3NpZ24gQWNjZXNzS2V5SWQsIHJlcXVpcmVkIGluIEFLL1N0c1Rva2VuL1JhbVJvbGVBcm4gbW9kZScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdhY2Nlc3Mta2V5LXNlY3JldCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnc2snLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLWFjY2Vzcy1rZXktc2VjcmV0IEFjY2Vzc0tleVNlY3JldGAgdG8gYXNzaWduIEFjY2Vzc0tleVNlY3JldCwgcmVxdWlyZWQgaW4gQUsvU3RzVG9rZW4vUmFtUm9sZUFybiBtb2RlJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3N0cy10b2tlbicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ3VzZSBgLS1zdHMtdG9rZW4gU3RzVG9rZW5gIHRvIGFzc2lnbiBTdHNUb2tlbiwgcmVxdWlyZWQgaW4gU3RzVG9rZW4gbW9kZScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub3B0aW9uKCdyYW0tcm9sZS1hcm4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ2FybicsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICd1c2UgYC0tcmFtLXJvbGUtYXJuIFJhbVJvbGVBcm5gIHRvIGFzc2lnbiBSYW1Sb2xlQXJuKGVnOiBhY3M6cmFtOjoqKioqKio6cm9sZS8qKioqKiopLCByZXF1aXJlZCBpbiBSYW1Sb2xlQXJuIG1vZGUnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9wdGlvbigncm9sZS1zZXNzaW9uLW5hbWUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3MnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLXJvbGUtc2Vzc2lvbi1uYW1lIFJvbGVTZXNzaW9uTmFtZWAgdG8gYXNzaWduIFJvbGVTZXNzaW9uTmFtZSwgcmVxdWlyZWQgaW4gUmFtUm9sZUFybiBtb2RlJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vcHRpb24oJ3JhbS1yb2xlLW5hbWUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogJ3JvbGUnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAndXNlIGAtLXJhbS1yb2xlLW5hbWUgUmFtUm9sZU5hbWVgIHRvIGFzc2lnbiBSYW1Sb2xlTmFtZSwgcmVxdWlyZWQgaW4gRWNzUmFtUm9sZSBtb2RlJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC52ZXJzaW9uKHZlcnNpb24uRElTUExBWV9WRVJTSU9OKVxuICAgICAgICAuZGVtYW5kQ29tbWFuZCgxLCAnJykgLy8ganVzdCBwcmludCBoZWxwXG4gICAgICAgIC5yZWNvbW1lbmRDb21tYW5kcygpXG4gICAgICAgIC5oZWxwKClcbiAgICAgICAgLmFsaWFzKCdoJywgJ2hlbHAnKVxuICAgICAgICAuZXBpbG9ndWUoXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJ0lmIHlvdXIgYXBwIGhhcyBhIHNpbmdsZSBzdGFjaywgdGhlcmUgaXMgbm8gbmVlZCB0byBzcGVjaWZ5IHRoZSBzdGFjayBuYW1lJyxcbiAgICAgICAgICAgICAgICAnSWYgb25lIG9mIGNkay5qc29uIG9yIH4vLmNkay5qc29uIGV4aXN0cywgb3B0aW9ucyBzcGVjaWZpZWQgdGhlcmUgd2lsbCBiZSB1c2VkIGFzIGRlZmF1bHRzLiBTZXR0aW5ncyBpbiBjZGsuanNvbiB0YWtlIHByZWNlZGVuY2UuJyxcbiAgICAgICAgICAgIF0uam9pbignXFxuXFxuJyksXG4gICAgICAgICkuYXJndjtcbn1cblxuaWYgKCFwcm9jZXNzLnN0ZG91dC5pc1RUWSkge1xuICAgIGNvbG9ycy5kaXNhYmxlKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRDb21tYW5kTGluZSgpIHtcbiAgICBjb25zdCBhcmd2ID0gYXdhaXQgcGFyc2VDb21tYW5kTGluZUFyZ3VtZW50cygpO1xuICAgIGlmIChhcmd2LnZlcmJvc2UpIHtcbiAgICAgICAgc2V0TG9nTGV2ZWwoYXJndi52ZXJib3NlKTtcbiAgICB9XG4gICAgZGVidWcoJ0NESyB0b29sa2l0IHZlcnNpb246JywgdmVyc2lvbi5ESVNQTEFZX1ZFUlNJT04pO1xuICAgIGRlYnVnKCdDb21tYW5kIGxpbmUgYXJndW1lbnRzOicsIGFyZ3YpO1xuXG4gICAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKGFyZ3YpO1xuICAgIGF3YWl0IGNvbmZpZ3VyYXRpb24ubG9hZCgpO1xuXG4gICAgY29uc3QgY2xvdWRFeGVjdXRhYmxlID0gbmV3IENsb3VkRXhlY3V0YWJsZSh7XG4gICAgICAgIGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIHN5bnRoZXNpemVyOiBleGVjUHJvZ3JhbSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNtZCA9IFN0cmluZyhhcmd2Ll9bMF0pO1xuXG4gICAgY29uc3QgcmV0dXJuVmFsdWUgPSBhd2FpdCBtYWluKGNtZCwgYXJndik7XG4gICAgaWYgKHR5cGVvZiByZXR1cm5WYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHRvSnNvbk9yWWFtbChyZXR1cm5WYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmV0dXJuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbWFpbihjb21tYW5kOiBzdHJpbmcsIGFyZ3M6IGFueSk6IFByb21pc2U8bnVtYmVyIHwgc3RyaW5nIHwge30gfCB2b2lkPiB7XG4gICAgICAgIGFyZ3MuU1RBQ0tTID0gYXJncy5TVEFDS1MgfHwgW107XG5cbiAgICAgICAgY29uc3QgY2xpID0gbmV3IENka1Rvb2xraXQoe1xuICAgICAgICAgICAgY2xvdWRFeGVjdXRhYmxlLFxuICAgICAgICAgICAgdmVyYm9zZTogYXJndi50cmFjZSB8fCBhcmd2LnZlcmJvc2UgPiAwLFxuICAgICAgICAgICAgaWdub3JlRXJyb3JzOiBhcmd2WydpZ25vcmUtZXJyb3JzJ10sXG4gICAgICAgICAgICBzdHJpY3Q6IGFyZ3Yuc3RyaWN0LFxuICAgICAgICAgICAgY29uZmlndXJhdGlvbixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICAgICAgICBjYXNlICdscyc6XG4gICAgICAgICAgICBjYXNlICdsaXN0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2xpLmxpc3QoYXJncy5TVEFDS1MpO1xuXG4gICAgICAgICAgICBjYXNlICdnZW5lcmF0ZS1zdGFjay1maWxlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2xpLmdlbmVyYXRlU3RhY2tJbmZvKCk7XG5cbiAgICAgICAgICAgIGNhc2UgJ2NvbmZpZyc6XG4gICAgICAgICAgICAgICAgLy8gd2FpdCB1c2VyIGZvciByb3MgaW5wdXRcbiAgICAgICAgICAgICAgICBhd2FpdCBjbGkuY29uZmlnKGFyZ3MuZ2xvYmFsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ2NvbmZpZy1zZXQnOlxuICAgICAgICAgICAgICAgIC8vIHdhaXQgdXNlciBmb3Igcm9zIGlucHV0XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmNvbmZpZ1NldCh7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbDogYXJncy5nbG9iYWwsXG4gICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiBhcmdzLmVuZHBvaW50LFxuICAgICAgICAgICAgICAgICAgICByZWdpb246IGFyZ3MucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBhcmdzLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgIGFrOiBhcmdzWydhY2Nlc3Mta2V5LWlkJ10sXG4gICAgICAgICAgICAgICAgICAgIHNrOiBhcmdzWydhY2Nlc3Mta2V5LXNlY3JldCddLFxuICAgICAgICAgICAgICAgICAgICBzdHM6IGFyZ3NbJ3N0cy10b2tlbiddLFxuICAgICAgICAgICAgICAgICAgICByYW1Sb2xlQXJuOiBhcmdzWydyYW0tcm9sZS1hcm4nXSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiBhcmdzWydyb2xlLXNlc3Npb24tbmFtZSddLFxuICAgICAgICAgICAgICAgICAgICByYW1Sb2xlTmFtZTogYXJnc1sncmFtLXJvbGUtbmFtZSddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdkaWZmJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgY2xpLmRpZmYoe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYXJncy5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0TGluZXM6IGFyZ3MuY29udGV4dExpbmVzLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYXNlICdkZXBsb3knOlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlck1hcDogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkIH0gPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlciBvZiBhcmdzLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbWV0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IChwYXJhbWV0ZXIgYXMgc3RyaW5nKS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyTWFwW2tleVZhbHVlWzBdXSA9IGtleVZhbHVlLnNsaWNlKDEpLmpvaW4oJz0nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCBjbGkuZGVwbG95KHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1MsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlck1hcCxcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVzaXZlbHk6IGFyZ3MuZXhjbHVzaXZlbHksXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IGFyZ3MudGltZW91dE1pbnV0ZXMsXG4gICAgICAgICAgICAgICAgICAgIHN5bmM6IGFyZ3Muc3luYyxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0c0ZpbGU6IGFyZ3NbJ291dHB1dHMtZmlsZSddLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnZGVzdHJveSc6XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpLmRlc3Ryb3koe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLUyxcbiAgICAgICAgICAgICAgICAgICAgcXVpZXQ6IGFyZ3MucXVpZXQsXG4gICAgICAgICAgICAgICAgICAgIHN5bmM6IGFyZ3Muc3luY1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnZXZlbnQnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5ldmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZTogYXJnc1snU1RBQ0snXSxcbiAgICAgICAgICAgICAgICAgICAgbG9naWNhbFJlc291cmNlSWQ6IGFyZ3NbJ2xvZ2ljYWwtcmVzb3VyY2UtaWQnXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcjogYXJnc1sncGFnZS1udW1iZXInXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IGFyZ3NbJ3BhZ2Utc2l6ZSddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdvdXRwdXQnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5vdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWU6IGFyZ3NbJ1NUQUNLJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ3Jlc291cmNlJzpcbiAgICAgICAgICAgICAgICBhd2FpdCBjbGkucmVzb3VyY2Uoe1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzOiBhcmdzLlNUQUNLU1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnbGlzdC1zdGFja3MnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5saXN0U3RhY2tzKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lczogYXJncy5TVEFDS1MsXG4gICAgICAgICAgICAgICAgICAgIGFsbDogYXJncy5hbGwsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IGFyZ3NbJ3BhZ2UtbnVtYmVyJ10sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiBhcmdzWydwYWdlLXNpemUnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnbG9hZC1jb25maWcnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaS5sb2FkQ2xpQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsOiBhcmdzLmdsb2JhbCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZEZpbGVQYXRoOiBhcmdzWydmaWxlLXBhdGgnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY2FzZSAnc3ludGhlc2l6ZSc6XG4gICAgICAgICAgICBjYXNlICdzeW50aCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNsaS5zeW50aChhcmdzLlNUQUNLUywgYXJncy5leGNsdXNpdmVseSk7XG5cbiAgICAgICAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxhbmd1YWdlID0gY29uZmlndXJhdGlvbi5zZXR0aW5ncy5nZXQoWydsYW5ndWFnZSddKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYW5ndWFnZSA9IGFyZ3MubGFuZ3VhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGlzdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMobGFuZ3VhZ2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjbGlJbml0KGFyZ3MuVEVNUExBVEUsIGxhbmd1YWdlLCB1bmRlZmluZWQsIGFyZ3MuZ2VuZXJhdGVPbmx5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ3ZlcnNpb24nOlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhKHZlcnNpb24uRElTUExBWV9WRVJTSU9OKTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gY29tbWFuZDogJyArIGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9Kc29uT3JZYW1sKG9iamVjdDogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZVN0cnVjdHVyZShvYmplY3QsIGFyZ3YuanNvbik7XG4gICAgfVxufVxuXG5pbml0Q29tbWFuZExpbmUoKVxuICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBkYXRhKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAvLyBwcm9jZXNzLmV4aXRDb2RlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgaWYgKGVyci5zdGFjaykge1xuICAgICAgICAgICAgZGVidWcoZXJyLnN0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTtcbiAgICB9KTtcbiJdfQ==