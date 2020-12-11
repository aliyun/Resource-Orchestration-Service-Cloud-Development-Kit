import * as colors from 'colors/safe';
import * as fs from 'fs';
import * as path from 'path';
import * as readlineSync from 'readline-sync';
import { decipher, cipher } from './util/cipher';
import { format } from 'util';
const rosClient = require('@alicloud/ros-2019-09-10');

import { CloudAssembly, DefaultSelection, ExtendedStackSelection, StackCollection } from './api/cloud-assembly';
import { CloudExecutable } from './api/cloud-executable';
import { data, error, print, success, warning } from './logging';
import { Configuration } from './settings';
import { exit } from 'process';
import { printStackDiff } from './diff';
import { deserializeStructure } from './serialize';

const CONFIG_NAME = 'account.config.json';
const LOCAL_PATH = './';
const GLOBAL_PATH = __dirname + '/../';
const STACK_INFO = 'stack.info.json';
const DEPLOY_STACK_ID_LENGTH = 36;

const INIT_STACK = 'init';
const SYNTH_STACK = 'synth';
const DEPLOY_STACK = 'deploy';
const DESTROY_STACK = 'destroy';

export interface CdkToolkitProps {
  /**
   * The Cloud Executable
   */
  cloudExecutable: CloudExecutable;

  /**
   * Whether to be verbose
   *
   * @default false
   */
  verbose?: boolean;

  /**
   * Don't stop on error metadata
   *
   * @default false
   */
  ignoreErrors?: boolean;

  /**
   * Treat warnings in metadata as errors
   *
   * @default false
   */
  strict?: boolean;

  /**
   * Application configuration (settings and context)
   */
  configuration: Configuration;
}

/**
 * Toolkit logic
 *
 * The toolkit runs the `cloudExecutable` to obtain a cloud assembly
 *
 */
export class CdkToolkit {
  private static async getJson(fileName: string, key: string) {
    let filePath = LOCAL_PATH + fileName;
    if (fs.existsSync(filePath)) {
      let file = fs.readFileSync(filePath).toString();
      return JSON.parse(file)[key];
    } else if (fileName === STACK_INFO) {
      return undefined;
    }
    filePath = GLOBAL_PATH + fileName;
    if (fs.existsSync(filePath)) {
      let file = fs.readFileSync(filePath).toString();
      return JSON.parse(file)[key];
    }
    error("Please use 'ros config (-g)' to set your account configuration firstly!");
    exit();
  }
  constructor(private readonly props: CdkToolkitProps) {}

  public async getRosClient() {
    let accessKeyId = await decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeyId'));
    let accessKeySecret = await decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeySecret'));
    const client = new rosClient({
      endpoint: await CdkToolkit.getJson(CONFIG_NAME, 'endpoint'),
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
    });
    return client;
  }

  public async config(global: boolean) {
    let configSavePath = (global ? GLOBAL_PATH : LOCAL_PATH) + CONFIG_NAME;
    let endpoint = readlineSync.question('endpoint(optional, default:https://ros.aliyuncs.com):');
    let accessKeyId = readlineSync.question('accessKeyId:', {hideEchoBack: true});
    let accessKeySecret = readlineSync.question('accessKeySecret:', {hideEchoBack: true});
    let regionId = readlineSync.question('defaultRegionId(optional, default:cn-hangzhou):');
    endpoint = endpoint ? endpoint : 'https://ros.aliyuncs.com';
    regionId = regionId ? regionId : 'cn-hangzhou';
    if (endpoint.length === 0 || accessKeyId.length === 0 || accessKeySecret.length === 0) {
      error(
        'WANRNING: If want to deploy or delete stack, the endpoint, accessKeyId and accessKeySecret must be provided.',
      );
    }
    let configInfo = {
      endpoint: endpoint,
      regionId: regionId,
      accessKeyId: await cipher(accessKeyId),
      accessKeySecret: await cipher(accessKeySecret),
    };
    let file = path.join(configSavePath);
    fs.writeFileSync(file, JSON.stringify(configInfo, null, '\t'));
    success(`\n ✅ Your cdk configuration has been saved successfully!`);
  }

  public async list(selectors: string[]) {
    this.syncStackInfo();
    const stacks = await this.selectStacksForList(selectors);
    for (const stack of stacks.stackArtifacts) {
      let stackInfo = await this.findStackInfo(stack.id);
      let status = stackInfo.status
      data(stack.id, status.toString());
    }
  }

  /**
   * Synthesize the given set of stacks (called when the user runs 'cdk synth')
   *
   * INPUT: Stack names can be supplied using a glob filter. If no stacks are
   * given, all stacks from the application are implictly selected.
   *
   * OUTPUT: If more than one stack ends up being selected, an output directory
   * should be supplied, where the templates will be written.
   */
  public async synth(stackNames: string[], exclusively: boolean): Promise<any> {
    this.syncStackInfo();
    const stacks = await this.selectStacksForDiff(stackNames, exclusively);

    // if we have a single stack, print it to STDOUT
    if (stacks.stackCount === 1) {
      this.updateStackInfo(stacks.firstStack.id, SYNTH_STACK);
      return stacks.firstStack.template;
    } else {
      for (let stack of stacks.stackArtifacts) {
        this.updateStackInfo(stack.id, SYNTH_STACK);
      }
    }

    const isIntegMode = process.env.CDK_INTEG_MODE === '1';
    if (isIntegMode) {
      return stacks.stackArtifacts.map((s) => s.template);
    }

    // not outputting template to stdout, let's explain things to the user a little bit...
    success(`Successfully synthesized to ${colors.blue(path.resolve(stacks.assembly.directory))}`);
    print(
      `Supply a stack id (${stacks.stackArtifacts.map((s) => colors.green(s.id)).join(', ')}) to display its template.`,
    );

    return undefined;
  }

  public async deploy(options: DeployOptions) {
    this.syncStackInfo();
    const stacks = await this.selectStacksForDeploy(options.stackNames, options.exclusively);
    const stackName = options.stackNames.length !== 0 ? options.stackNames[0] : stacks.stackArtifacts[0].id;
    let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId');
    const client = await this.getRosClient();
    let templateBody = fs.readFileSync(`./cdk.out/${stackName}.template.json`);
    let content: { [name: string]: any } = {
      StackName: stackName.toString(),
      RegionId: region,
      TimeoutInMinutes: options.timeout,
      TemplateBody: templateBody,
    };

    if (options.parameters) {
      let count: number = 1;
      let paras = options.parameters;
      for (let key in paras) {
        content['Parameters.' + count.toString() + '.ParameterKey'] = key;
        content['Parameters.' + count.toString() + '.ParameterValue'] = paras[key];
        count++;
      }
    }
    let stackInfo = await this.findStackInfo(stackName);
    if (stackInfo.stackId) {
      content['StackId'] = stackInfo.stackId;
      client.updateStack(content).then((res: any) => {
        this.updateStackInfo(stackName, res.StackId);
        success(
          `\n ✅ The deployment(update stack) has completed!\nRequestedId: %s\nStackId: %s`,
          colors.blue(res.RequestId),
          colors.blue(res.StackId),
        );
      }, (ex: any) => {
        // when reject, means the stack in ros has been deleted from console
        // so use create api to create a new stack
        if (ex.code == 'NotSupported' && ex.message.startsWith('Update the completely same stack')) {
          this.updateStackInfo(stackName, stackInfo.stackId);
          success('The stack is completely the same, there is no need to update.')
        }
        else if (ex.code == 'StackNotFound') {
          client.createStack(content).then((res: any) => {
            this.updateStackInfo(stackName, res.StackId);
            success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(res.RequestId), colors.blue(res.StackId));
          }, (ex2: any) => {
            error('fail to create stack(%s): %s %s', ex2.requestId, ex2.code, ex2.message)
          });
        }
        else {
          error('fail to update stack: %s %s', ex.code, ex.message)
        }
      });
    } else {
      // fixed
      // bug: when updating, the console will display error: the stack name has been existing.
      // need ros client API: updateStack
      client.createStack(content).then((res: any) => {
        this.updateStackInfo(stackName, res.StackId);
        success(
          `\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`,
          colors.blue(res.RequestId),
          colors.blue(res.StackId),
        );
      }, (ex: any) => {
        error('fail to create stack: %s %s', ex.code, ex.message)
      });
    }
  }

  public async diff(options: DiffOptions) {
    let stacks = await this.selectStacksForDestroy(options.stackNames);
    const client = await this.getRosClient();
    let regionInLocal = await CdkToolkit.getJson(CONFIG_NAME, 'regionId');
    let temp = options.region ? options.region : regionInLocal;
    const stream = options.stream || process.stderr;
    const contextLines = options.contextLines || 3;
    for (let stack of stacks.stackArtifacts) {
      let stackInfo = await this.findStackInfo(stack.id);
      if (!stackInfo.stackId) {
        stream.write(format('Stack %s has not been deployed.\n', colors.bold(stack.displayName)));
        continue;
      }
      client.getTemplate({RegionId: temp, StackId: stackInfo.stackId})
        .then((res: any) => {
          const template = deserializeStructure(res.TemplateBody);
          stream.write(format('Stack %s\n', colors.bold(stack.displayName)));
          printStackDiff(template, stack, contextLines, stream);
        }, (ex: any) => {
          if (ex.code == 'StackNotFound') {
            warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to synth.`);
            this.updateStackInfo(stack.id, SYNTH_STACK);
          }
          else {
            error('fail to get template: %s %s', ex.code, ex.message);
          }
        });
    }
  }

  public async destroy(options: DestroyOptions) {
    this.syncStackInfo();
    let stacks = await this.selectStacksForDestroy(options.stackNames);
    let stackNames: string[] = [];
    for (let stack of stacks.stackArtifacts) {
      if ((await this.findStackInfo(stack.id)).stackId) {
        stackNames.push(stack.id);
      }
    }
    if (!options.quiet) {
      while (true) {
        let confirm = readlineSync.question(
            'The following stack(s) will be destroyed(Only deployed stacks will be displayed).\n\n' +
            stackNames.toString() +
            '\n\nPlease confirm.(Y/N)\n',
        );
        if (confirm === 'n' || confirm === 'N') {
          return;
        }
        if (confirm === 'y' || confirm === 'Y') {
          break;
        }
      }
    }
    const client = await this.getRosClient();
    for (let stackName of stackNames) {
      client
        .deleteStack({
          StackId: (await this.findStackInfo(stackName)).stackId,
          RegionId: options.region ? options.region : await CdkToolkit.getJson(CONFIG_NAME, 'regionId'),
        })
        .then((res: any) => {
          this.updateStackInfo(stackName, DESTROY_STACK);
          success(`\n ✅ Deleted\nRequestedId: %s`, colors.blue(res.RequestId));
        }, (ex: any) => {
          if (ex.code == 'StackNotFound') {
            warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
            this.updateStackInfo(stackName, DESTROY_STACK);
          }
          else {
            error('fail to delete stack: %s %s', ex.code, ex.message)
          }
        });
    }
  }

  private async syncStackInfo() {
    let filePath = path.join(LOCAL_PATH + STACK_INFO);
    let fileContent = {};
    if (fs.existsSync(filePath)) {
      fileContent = fs.readFileSync(filePath).toString();
    } else {
      fs.writeFileSync(filePath, JSON.stringify(fileContent, null, '\t'));
    }
    let temp: { [key: string]: any } = {};
    // selector.length = 0 means select all stacks from this app
    const stacks = await this.selectStacksForList([]);
    for (const stack of stacks.stackArtifacts) {
      let value = await CdkToolkit.getJson(STACK_INFO, stack.id);
      // if the stack has no info, then add init tag for it
      if (value) {
        temp[stack.id] = value;
      } else {
        temp[stack.id] = {
          status: INIT_STACK,
          stackId: null
        };
      }
    }

    fs.writeFileSync(filePath, JSON.stringify(temp, null, '\t'));
  }

  private async updateStackInfo(stackName: string, value: string) {
    let filePath = path.join(LOCAL_PATH + STACK_INFO);
    let fileContent = fs.readFileSync(filePath).toString();
    let info = JSON.parse(fileContent);
    let stackInfo = info[stackName];
    if (!stackInfo) {
      stackInfo = info[stackName] = {};
    }
    if (value.length === DEPLOY_STACK_ID_LENGTH) {
      stackInfo.status = DEPLOY_STACK;
      stackInfo.stackId = value
    } else {
      stackInfo.status = value;
      if (value === DESTROY_STACK) {
        stackInfo.stackId = null;
      }
    }
    fs.writeFileSync(filePath, JSON.stringify(info, null, '\t'));
  }

  private async findStackInfo(stackName: string) {
    let filePath = path.join(LOCAL_PATH + STACK_INFO);
    let fileContent = fs.readFileSync(filePath).toString();
    return JSON.parse(fileContent)[stackName];
  }

  private async selectStacksForList(selectors: string[]) {
    const assembly = await this.assembly();
    const stacks = await assembly.selectStacks(selectors, { defaultBehavior: DefaultSelection.AllStacks });

    // No validation

    return stacks;
  }

  private async selectStacksForDestroy(stackNames: string[]) {
    const assembly = await this.assembly();
    const stacks = await assembly.selectStacks(stackNames, {
      defaultBehavior: DefaultSelection.AllStacks,
    });

    // No validation

    return stacks;
  }

  private async selectStacksForDeploy(stackNames: string[], exclusively?: boolean) {
    const assembly = await this.assembly();
    const stacks = await assembly.selectStacks(stackNames, {
      extend: exclusively ? ExtendedStackSelection.None : ExtendedStackSelection.Upstream,
      defaultBehavior: DefaultSelection.OnlySingle,
    });

    await this.validateStacks(stacks);

    return stacks;
  }

  private async selectStacksForDiff(stackNames: string[], exclusively?: boolean) {
    const assembly = await this.assembly();
    const stacks = await assembly.selectStacks(stackNames, {
      extend: exclusively ? ExtendedStackSelection.None : ExtendedStackSelection.Upstream,
      defaultBehavior: DefaultSelection.AllStacks,
    });

    await this.validateStacks(stacks);

    return stacks;
  }

  /**
   * Validate the stacks for errors and warnings according to the CLI's current settings
   */
  private async validateStacks(stacks: StackCollection) {
    stacks.processMetadataMessages({
      ignoreErrors: this.props.ignoreErrors,
      strict: this.props.strict,
      verbose: this.props.verbose,
    });
  }

  private assembly(): Promise<CloudAssembly> {
    return this.props.cloudExecutable.synthesize();
  }
}

export interface DiffOptions {
  region?: string;
  stackNames: string[];
  path: string;
  stream?: NodeJS.WritableStream;
  contextLines: number;
}

export interface DeployOptions {
  stackNames: string[];

  /**
   * Only select the given stack
   *
   * @default false
   */
  exclusively?: boolean;
  parameters?: { [name: string]: string | undefined };
  timeout: string;
}

export interface DestroyOptions {
  region?: string;
  stackNames: string[];
  quiet?: boolean;
}

export interface Tag {
  readonly Key: string;
  readonly Value: string;
}
