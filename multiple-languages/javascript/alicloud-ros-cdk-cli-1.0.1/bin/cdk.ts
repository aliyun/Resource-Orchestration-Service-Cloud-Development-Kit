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
  const initTemplateLanuages = await availableInitLanguages;
  return yargs
    .env('CDK')
    .usage('Usage: ros -a <cdk-app> COMMAND')
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
            choices: initTemplateLanuages,
          })
          .option('list', { type: 'boolean', desc: 'List the available templates' })
          .option('generate-only', {
            type: 'boolean',
            default: false,
            desc:
              'If true, only generates project files, without executing additional operations such as setting up a git repo, installing dependencies or compiling the project',
          }),
    )
    .command(['list [STACKS..]', 'ls [STACKS..]'], 'Lists all stacks in the app', (yargs) =>
      yargs.option('long', {
        type: 'boolean',
        default: false,
        alias: 'l',
        desc: 'Display environment information for each stack',
      }),
    )
    .command(
      ['synthesize [STACKS..]', 'synth [STACKS..]'],
      'Synthesizes and prints the ROS template for this stack',
      (yargs) =>
        yargs.option('exclusively', {
          type: 'boolean',
          alias: 'e',
          desc: "Only synthesize requested stacks, don't include dependencies",
        }),
    )
    .command('deploy [STACKS..]', 'Deploys the stack(s) named STACKS into your ros account', (yargs) =>
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
        .option('region', { type: 'string', alias: 'r', desc: 'The region where the stack should be deployed' })
        .option('timeoutMinutes', { type: 'number', alias: 't', desc: 'The timeout minutes', default: 20 }),
    )
    .command(
      'diff [STACKS..]',
      'Compares the specified stack with the deployed stack or a local template file, and returns with status 1 if any difference is found',
      (yargs) =>
        yargs
          .option('region', { type: 'string', alias: 'r', desc: 'The region where the stack is established' })
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
    .command('destroy [STACKS..]', 'Destroy the stack(s) named STACKS', (yargs) =>
      yargs.option('region', { type: 'string', alias: 'r', desc: 'The region where the stack is established' })
            .option('quiet', {
              type: 'boolean',
              alias: 'q',
              desc: 'destroy without confirm',
              default: false
            }),
    )
    .command('config', 'Set your ros account configuration.', (yargs) =>
      yargs.option('global', {
        type: 'boolean',
        alias: 'g',
        desc: 'whether the config should be stroed in global env',
        default: false,
      }),
    )
    .version(version.DISPLAY_VERSION)
    .demandCommand(1, '') // just print help
    .recommendCommands()
    .help()
    .alias('h', 'help')
    .epilogue(
      [
        'If your app has a single stack, there is no need to specify the stack name',
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

      case 'config':
        // wait user for ros input
        await cli.config(args.global);
        return;

      case 'diff':
        return await cli.diff({
          region: args.region,
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
          exclusively: args.exclusively,
          timeout: args.timeoutMinutes,
        });
        return;

      case 'destroy':
        await cli.destroy({
          region: args.region,
          stackNames: args.STACKS,
          quiet: args.quiet,
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
