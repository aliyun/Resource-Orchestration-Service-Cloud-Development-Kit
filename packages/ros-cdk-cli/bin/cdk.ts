#!/usr/bin/env node
import * as colors from 'colors/safe';
import * as yargs from 'yargs';

import { CloudExecutable } from '../lib/api/cloud-executable';
import { execProgram } from '../lib/api/exec';
import { CdkToolkit } from '../lib/cdk-toolkit';
import { availableInitLanguages, cliInit, printAvailableTemplates } from '../lib/init';
import { data, debug, error, setLogLevel } from '../lib/logging';
import { serializeStructure } from '../lib/serialize';
import { Configuration } from '../lib/settings';
import * as version from '../lib/version';

async function parseCommandLineArguments() {
    const initTemplateLanguages = await availableInitLanguages;
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
        .command(
            'init [TEMPLATE]',
            'Create a new, empty CDK project from a template. Invoked without TEMPLATE, the app template will be used.',
            (yargs) =>
                yargs
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
                        desc:
                            'If true, only generates project files, without executing additional operations such as setting up a git repo, installing dependencies or compiling the project',
                    }),
        )
        .command(
            ['list [STACKS..]', 'ls [STACKS..]'],
            'Lists stack(s) in the app. Invoked without the specified stack(s), all stacks in the app will be listed.',
            (yargs) =>
            yargs.option('long', {
                type: 'boolean',
                default: false,
                alias: 'l',
                desc: 'Display environment information for each stack',
            }),
        )
        .command(
            ['synthesize [STACKS..]', 'synth [STACKS..]'],
            'Synthesizes and prints the ROS template for the stack(s). Invoked without the specified stack(s), all stacks in the app will be synthesized.',
            (yargs) =>
                yargs.option('exclusively', {
                    type: 'boolean',
                    alias: 'e',
                    desc: "Only synthesize requested stacks, don't include dependencies",
                }),
        )
        .command(
            'deploy [STACKS..]',
            'Deploys the stack(s) through ROS into your alicloud account. If there\'s only one stack in your app, you can invoke it without specifying stack.',
            (yargs) =>
            yargs
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
                .option('region', {type: 'string', desc:'The region where you want to deploy.', default: 'default'})
                .option('timeoutMinutes', { type: 'number', alias: 't', desc: 'The timeout minutes', default: 20 })
                .option('resource-group-id', { type: 'string', desc: 'Resource group ID. If this parameter is not specified, the resource stack will be added to the default resource group'})
                .option('sync', { type: 'boolean', desc: 'Sync deploy stack', default: false })
                .option('skip-if-no-changes', { type: 'boolean', desc: 'When stack do not contains any new changes skip stack checks', default: false })
                .option('detail-log', { type: 'boolean', desc: 'When stack deploy error, set this params to show more error information', default: false })
                .option('disable-rollback', { type: 'boolean', desc: 'Disable rollback when creating resource stack fails', default: false })
                .option('outputs-file', { type: 'boolean', desc: 'Stack outputs will be written as JSON', default: false }),
        )
        .command(
            'diff [STACKS..]',
            'Compares the specified stack with the deployed stack or a local template file, and returns with status 1 if any difference is found. Invoked without the specified stack(s), all stacks in the app will be compared.',
            (yargs) =>
                yargs
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
                    }),
        )
        .command(
            'destroy [STACKS..]',
            'Destroy the stack(s) in the app. Invoked without the specified stack(s), all stacks in the app will be destroyed after confirmation.',
            (yargs) =>
            yargs
                .option('quiet', {
                    type: 'boolean',
                    alias: 'q',
                    desc: 'destroy without confirm',
                    default: false
                })
                .option('sync', { type: 'boolean', desc: 'sync destroy stack', default: false }),
        )
        .command(
            'event [STACKS..]',
            'Get the stack(s) events. If there\'s only one stack in your app, you can invoke it without specifying stack.',
            (yargs) =>
            yargs
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
                })
        )
        .command(
            'output [STACKS..]',
            'Get the output information of the stack(s). Invoked without the specified stack(s), all outputs from all stacks in the app will be displayed.'
        )
        .command(
            'resource [STACKS..]',
            'Get resources in the stack(s).  Invoked without the specified stack(s), all resources from all stacks in the app will be displayed.')
        .command('list-stacks [STACKS..]', 'Get resources in the resource STACKS', (yargs) =>
            yargs
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
            })
        )
        .command('load-config', 'Load Aliyun CLI config to CDK.', (yargs) =>
            yargs.option('global', {
                type: 'boolean',
                alias: 'g',
                desc: 'Whether the config should be stored in global env',
                default: false,
            })
                .option('file-path', {
                    type: 'string',
                    alias: 'f',
                    desc: 'Specify the cli configuration file path to load',
                })
        )
        .command('config', 'Set your alicloud account configuration.', (yargs) =>
            yargs.option('global', {
                type: 'boolean',
                alias: 'g',
                desc: 'Whether the config should be stored in global env',
                default: false,
            }),
        )
        .command('generate-stack-file', 'The resource stack information is automatically generated', (yargs) =>
            yargs.option('resource-group-id', {
                type: 'string',
                desc: 'Resource group ID. Set this parameter to query the stack of the corresponding resource group.'
            }),
        )
        .command('config-set', 'Set your alicloud account configuration non interactive mode.', (yargs) =>
            yargs.option('global', {
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
                })
        )
        .version(version.DISPLAY_VERSION)
        .demandCommand(1, '') // just print help
        .recommendCommands()
        .help()
        .alias('h', 'help')
        .epilogue(
            [
                'If one of cdk.json or ~/.cdk.json exists, options specified there will be used as defaults. Settings in cdk.json take precedence.',
            ].join('\n\n'),
        ).argv;
}

if (!process.stdout.isTTY) {
    colors.disable();
}

async function initCommandLine() {
    const argv = await parseCommandLineArguments();
    if (argv.verbose) {
        setLogLevel(argv.verbose);
    }
    debug('CDK toolkit version:', version.DISPLAY_VERSION);
    debug('Command line arguments:', argv);

    const configuration = new Configuration(argv);
    await configuration.load();

    const cloudExecutable = new CloudExecutable({
        configuration,
        synthesizer: execProgram,
    });

    const cmd = String(argv._[0]);

    const returnValue = await main(cmd, argv);
    if (typeof returnValue === 'object') {
        return toJsonOrYaml(returnValue);
    } else if (typeof returnValue === 'string') {
        return returnValue;
    } else {
        return returnValue;
    }

    async function main(command: string, args: any): Promise<number | string | {} | void> {
        args.STACKS = args.STACKS || [];

        const cli = new CdkToolkit({
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
                const parameterMap: { [name: string]: string | undefined } = {};
                for (const parameter of args.parameters) {
                    if (typeof parameter === 'string') {
                        const keyValue = (parameter as string).split('=');
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
                    detailLog :args['detail-log']
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
                    return await printAvailableTemplates(language);
                } else {
                    return await cliInit(args.TEMPLATE, language, undefined, args.generateOnly);
                }

            case 'version':
                return data(version.DISPLAY_VERSION);

            default:
                throw new Error('Unknown command: ' + command);
        }
    }

    function toJsonOrYaml(object: any): string {
        return serializeStructure(object, argv.json);
    }
}

initCommandLine()
    .then((value) => {
        if (value == null) {
            return;
        }
        if (typeof value === 'string') {
            data(value);
        } else if (typeof value === 'number') {
            // process.exitCode = value;
        }
    })
    .catch((err) => {
        error(err.message);
        if (err.stack) {
            debug(err.stack);
        }
        process.exitCode = 1;
    });
