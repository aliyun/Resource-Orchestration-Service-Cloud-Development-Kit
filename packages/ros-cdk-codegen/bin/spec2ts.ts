#!/usr/bin/env node
import * as yargs from 'yargs';
import * as readlineSync from 'readline-sync';
import generate from '../lib/index';
import { specGenerator ,specOriginGenerator } from '../lib/update-spec';
import { createPackages } from '../lib/pkg-generator';
import { tryReadPackageJson, tryAutoDetectScope } from '../lib/util';

// tslint:disable:no-console
// tslint:disable:max-line-length

async function main() {
  const argv = yargs
    .usage('Usage: spec2ts')
    .option('scope', { type: 'string', array: true, desc: 'Scope to generate TypeScript for (e.g: ALIYUN::ECS)' })
    .option('out', {
      type: 'string',
      desc: 'Path to the directory where the TypeScript files should be written',
      default: './generatedPackages',
    })
    .option('spec', {
      type: 'boolean',
      desc: 'Update specification',
      default: 'false',
    })
    .option('core-import', {
      type: 'string',
      desc:
        'The typescript import to use for the CDK core module. Can also be defined in package.json under "cdk-build.spec2ts-core"',
      default: '@alicloud/ros-cdk-core',
    })
    .epilog(
      'if --scope is not defined, spec2ts will try to obtain the scope from the local package.json under the "cdk-build.category" key.',
    ).argv;

  if (argv.spec !== 'false') {
    let endpoint = readlineSync.question('endpoint(optional, default:https://ros.aliyuncs.com):');
    let accessKeyId = readlineSync.question('accessKeyId:', {hideEchoBack: true});
    let accessKeySecret = readlineSync.question('accessKeySecret:', {hideEchoBack: true});
    await specOriginGenerator(endpoint, accessKeyId, accessKeySecret);
    specGenerator();
    return;
  }

  await createPackages();

  const pkg = await tryReadPackageJson('./package.json');

  if (!argv.scope) {
    argv.scope = await tryAutoDetectScope(pkg);
  }

  // read "spec2ts-core" from package.json
  const coreImport = pkg?.['cdk-build']?.['spec2ts-core'];

  if (coreImport) {
    argv['core-import'] = coreImport;
  }

  if (!argv.scope) {
    throw new Error(
      '--scope is not provided and cannot be auto-detected from package.json (under "cdk-build.category")',
    );
  }

  await generate(argv.scope, argv.out, {
    coreImport: argv['core-import'],
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});