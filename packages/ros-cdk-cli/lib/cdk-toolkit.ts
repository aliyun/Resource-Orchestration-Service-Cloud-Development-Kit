import * as colors from 'colors/safe';
import * as fs from 'fs';
import * as path from 'path';
import * as readlineSync from 'readline-sync';
import { decipher, cipher } from './util/cipher';
import { format } from 'util';
const rosClient = require('@alicloud/ros-2019-09-10');
const os = require('os');
import Credentials, { Config } from '@alicloud/credentials';
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
const CLI_CONFIG_FILE = '/.aliyun/config.json';
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
  private static async getJson(fileName: string, key: string, allowedEmpty: boolean = false) {
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
    if (!allowedEmpty) {
      error("Please use 'ros-cdk config (-g)' to set your account configuration firstly!");
      exit();
    }
    return null
  }
  constructor(private readonly props: CdkToolkitProps) {}

  public async getRosClient() {
    let accessKeyId = await decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeyId'));
    let accessKeySecret = await decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeySecret'));
    let securityToken = await CdkToolkit.getJson(CONFIG_NAME, 'securityToken', true);
    let client;
    if (!securityToken) {
      client = new rosClient({
        endpoint: await CdkToolkit.getJson(CONFIG_NAME, 'endpoint'),
        accessKeyId: accessKeyId,
        accessKeySecret: accessKeySecret
      });
    }
    else {
      client = new rosClient({
        endpoint: await CdkToolkit.getJson(CONFIG_NAME, 'endpoint'),
        accessKeyId: accessKeyId,
        accessKeySecret: accessKeySecret,
        securityToken: await decipher(securityToken)
      });
    }
    return client;
  }

  public async config(global: boolean) {
    let configSavePath = (global ? GLOBAL_PATH : LOCAL_PATH) + CONFIG_NAME;
    let modeType = ['AK', 'StsToken', 'RamRoleArn', 'EcsRamRole']
    let endpoint = readlineSync.question('endpoint(optional, default:https://ros.aliyuncs.com):',{defaultInput: 'https://ros.aliyuncs.com'});
    let regionId = readlineSync.question('defaultRegionId(optional, default:cn-hangzhou):', {defaultInput: 'cn-hangzhou'});
    let modeIndex = readlineSync.keyInSelect(modeType,'Authenticate mode:');
    let inputConfigInfo;
    let newAccessKeyId;
    let newAccessKeySecret;
    let newSecurityToken;
    let configInfo: any = {};
    if (modeType[modeIndex] === 'EcsRamRole'){
      let roleName = readlineSync.question('roleName:');
      inputConfigInfo = new Config({
        type: 'ecs_ram_role',
        roleName: roleName
      });
    }
    else if (modeType[modeIndex] === 'StsToken'){
      let accessKeyId = readlineSync.question('accessKeyId:', {hideEchoBack: true});
      let accessKeySecret = readlineSync.question('accessKeySecret:', {hideEchoBack: true});
      let securityToken = readlineSync.question('securityToken:', {hideEchoBack: true});
      inputConfigInfo = new Config({
        type: 'sts',
        accessKeyId: accessKeyId,
        accessKeySecret: accessKeySecret,
        securityToken: securityToken
      });
    }
    else if (modeType[modeIndex] === 'RamRoleArn'){
      let accessKeyId = readlineSync.question('accessKeyId:', {hideEchoBack: true});
      let accessKeySecret = readlineSync.question('accessKeySecret:', {hideEchoBack: true});
      let roleArn = readlineSync.question('roleArn(eg: acs:ram::******:role/******):');
      let roleSessionName = readlineSync.question('roleSessionName:');
      inputConfigInfo = new Config({
        type: 'ram_role_arn',
        accessKeyId: accessKeyId,
        accessKeySecret: accessKeySecret,
        roleArn: roleArn,
        roleSessionName: roleSessionName
      });
    }
    else if (modeType[modeIndex] === 'AK') {
      let accessKeyId = readlineSync.question('accessKeyId:', {hideEchoBack: true});
      let accessKeySecret = readlineSync.question('accessKeySecret:', {hideEchoBack: true});
      inputConfigInfo = new Config({
        type: 'access_key',
        accessKeyId: accessKeyId,
        accessKeySecret: accessKeySecret
      });
    }
    else {
      error(
        'WANRNING: If want to deploy or delete stack, a certification method must be selected',
      );
      exit();
    }
    const cred = new Credentials(inputConfigInfo);
    try {
      newAccessKeyId = await cred.getAccessKeyId();
      newAccessKeySecret = await cred.getAccessKeySecret();
      newSecurityToken = await cred.getSecurityToken();
    } catch (e) {
      error(
        'WANRNING: Please check the accuracy of the certification information entered!' + e.message,
      );
      exit();
    }
    configInfo = {
      endpoint: endpoint,
      regionId: regionId,
      accessKeyId: await cipher(newAccessKeyId),
      accessKeySecret: await cipher(newAccessKeySecret)
    };
    if (newSecurityToken) {
      configInfo.securityToken = await cipher(newSecurityToken)
    }
    let file = path.join(configSavePath);
    fs.writeFileSync(file, JSON.stringify(configInfo, null, '\t'));
    success(`\n ✅ Your cdk configuration has been saved successfully!`);
  }

  public async loadCliConfig(options: LoadConfigOptions) {
    let configSavePath = (options.global ? GLOBAL_PATH : LOCAL_PATH) + CONFIG_NAME;
    let configureInfos = await this.getCliConfig(options.loadFilePath)
    let modeType = Object.keys(configureInfos);
    let modeIndex = readlineSync.keyInSelect(modeType,'Select authenticate mode:');
    let profileNames: string[] = [];
    let profileConfig: any = {};
    if (modeIndex === -1) {
      error(
        'WANRNING: If want to deploy or delete stack, a certification method must be selected',
      );
      exit();
    }
    else if (modeType[modeIndex] === 'AK') {
      profileNames = configureInfos.AK.map((item: { name: any; }) => item.name)
    }
    else if (modeType[modeIndex] === 'StsToken') {
      profileNames = configureInfos.StsToken.map((item: { name: any; }) => item.name)
    }
    else if (modeType[modeIndex] === 'RamRoleArn') {
      profileNames = configureInfos.RamRoleArn.map((item: { name: any; }) => item.name)
    }
    else if (modeType[modeIndex] === 'EcsRamRole') {
      profileNames = configureInfos.EcsRamRole.map((item: { name: any; }) => item.name)
    }
    let profileIndex = readlineSync.keyInSelect(profileNames,'Select Authenticate profile name:');
    if (profileIndex === -1) {
      error(
        'WANRNING: If want to deploy or delete stack, a certification profile must be selected',
      );
      exit();
    }
    let endpoint = await CdkToolkit.getJson(CONFIG_NAME, 'endpoint', true)
    let regionId;
    let configInfo;
    let newAccessKeyId;
    let newAccessKeySecret;
    let newSecurityToken;
    let newConfig: any = {};
    endpoint = endpoint ? endpoint : 'https://ros.aliyuncs.com';
    switch (modeType[modeIndex]){
      case 'AK':
        profileConfig = configureInfos.AK.find((profiles: { name: string; }) => profiles.name === profileNames[profileIndex]);
        configInfo = new Config({
          type: 'access_key',
          accessKeyId: profileConfig['accessKeyId'],
          accessKeySecret: profileConfig['accessKeySecret']
        });
        break;
      case 'StsToken':
        profileConfig = configureInfos.StsToken.find((profiles: { name: string; }) => profiles.name === profileNames[profileIndex]);
        configInfo = new Config({
          type: 'sts',
          accessKeyId: profileConfig['accessKeyId'],
          accessKeySecret: profileConfig['accessKeySecret'],
          securityToken: profileConfig['securityToken']
        });
        break;
      case 'RamRoleArn':
        profileConfig = configureInfos.RamRoleArn.find((profiles: { name: string; }) => profiles.name === profileNames[profileIndex]);
        configInfo = new Config({
          type: 'ram_role_arn',
          accessKeyId: profileConfig['accessKeyId'],
          accessKeySecret: profileConfig['accessKeySecret'],
          roleArn: profileConfig['roleArn'],
          roleSessionName: profileConfig['roleSessionName']
        });
        break;
      case 'EcsRamRole':
        profileConfig = configureInfos.EcsRamRole.find((profiles: { name: string; }) => profiles.name === profileNames[profileIndex]);
        configInfo = new Config({
          type: 'ecs_ram_role',
          roleName: profileConfig['roleName']
        });
        break;
    }
    regionId = profileConfig['region'] ? profileConfig['region'] :'cn-hangzhou';
    const cred = new Credentials(configInfo);
    try {
      newAccessKeyId = await cred.getAccessKeyId();
      newAccessKeySecret = await cred.getAccessKeySecret();
      newSecurityToken = await cred.getSecurityToken();
    } catch (e) {
      error(
        'WANRNING: Please check the accuracy of the credential information you import from CLI config!' + e.message,
      );
      exit();
    }

    newConfig = {
      accessKeyId: await cipher(newAccessKeyId),
      accessKeySecret: await cipher(newAccessKeySecret),
      endpoint: endpoint,
      regionId: regionId
    }
    if (newSecurityToken){
      newConfig.securityToken = await cipher(newSecurityToken)
    }
    let file = path.join(configSavePath);
    fs.writeFileSync(file, JSON.stringify(newConfig, null, '\t'));
    success(`\n ✅ Your cdk configuration has been load from Aliyun Cli configuration saved successfully %s %s!`, modeType[modeIndex], profileNames[profileIndex]);
  }

  public async list(selectors: string[]) {
    await this.syncStackInfo();
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
    await this.syncStackInfo();
    const stacks = await this.selectStacksForDiff(stackNames, exclusively);

    // if we have a single stack, print it to STDOUT
    if (stacks.stackCount === 1) {
      await this.updateStackInfo(stacks.firstStack.id, SYNTH_STACK);
      return stacks.firstStack.template;
    } else {
      for (let stack of stacks.stackArtifacts) {
        await this.updateStackInfo(stack.id, SYNTH_STACK);
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
    await this.syncStackInfo();
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

  public async event(options: EventOptions){
    if(!options.stackName){
      error('If want to get resource stack events, stack name must be Specified!')
      exit()
    }
    await this.syncStackInfo();
    let LogicalResourceIds:  string[] = [];
    const client = await this.getRosClient();
    if (options.logicalResourceId){
      LogicalResourceIds.push(options.logicalResourceId)
    }
    client
      .listStackEvents({
        StackId: (await this.findStackInfo(options.stackName[0])).stackId,
        RegionId: options.region ? options.region : await CdkToolkit.getJson(CONFIG_NAME, 'regionId'),
        LogicalResourceId: LogicalResourceIds,
        PageSize: options.pageSize ? Number(options.pageSize): 10,
        PageNumber: options.pageNumber ?Number(options.pageNumber): 1
      })
      .then((res: any) => {
          success(`\n ✅ The Stack %s \n Events is: \n %s \n`, colors.blue(options.stackName[0]), colors.blue(JSON.stringify(res.Events, null, "\t")));
      }, (ex: any) => {
        if (ex.code == 'StackNotFound') {
          warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
          this.updateStackInfo(options.stackName[0], DESTROY_STACK);
        }
        else {
          error('fail to get stack events: %s %s', ex.code, ex.message)
        }
      });
  }


  public async resource(options: ResourceOptions){
    await this.syncStackInfo();
    let stacks = await this.selectStacksForDestroy(options.stackNames);
    let stackNames: string[] = [];
    for (let stack of stacks.stackArtifacts) {
      if ((await this.findStackInfo(stack.id)).stackId) {
        stackNames.push(stack.id);
      }
    }
    const client = await this.getRosClient();
    for (let stackName of stackNames) {
      client
        .listStackResources({
          StackId: (await this.findStackInfo(stackName)).stackId,
          RegionId: options.region ? options.region : await CdkToolkit.getJson(CONFIG_NAME, 'regionId'),
        })
        .then((res: any) => {
           success(`\n ✅ The Stack %s \n Resource is: \n %s \n`, colors.blue(stackName), colors.blue(JSON.stringify(res.Resources, null, "\t")));
        }, (ex: any) => {
          if (ex.code == 'StackNotFound') {
            warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
            this.updateStackInfo(stackName, DESTROY_STACK);
          }
          else {
            error('fail to get stack resource: %s %s', ex.code, ex.message)
          }
        });
    }
  }

  public async listStacks(options: ListStackOptions){
    await this.syncStackInfo();
    const client = await this.getRosClient();
    let stacks = await this.selectStacksForList([]);
    let params: any={};
    params = {
      RegionId: options.region ? options.region : await CdkToolkit.getJson(CONFIG_NAME, 'regionId'),
      PageSize: options.pageSize ? Number(options.pageSize): 10,
      PageNumber: options.pageNumber ?Number(options.pageNumber): 1
    };
    if (!options.all){
      if (options.stackNames.length === 0) {
        params.StackName = stacks.stackIds
      }
      else{
        params.StackName = options.stackNames
      }
    }
    client.listStacks(params)
        .then((res: any) => {
          success(`\n ✅ The Stacks list is:\n %s \n`, colors.blue(JSON.stringify(res.Stacks, null, "\t")));
      }, (ex: any) => {
          error('fail to list stacks: %s %s', ex.code, ex.message)
      });
  }

  public async destroy(options: DestroyOptions) {
    await this.syncStackInfo();
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

  private async getCliConfig(loadFilePath: string) {
    let filePath: string;
    let configureInfo: any = {};
    let configureInfos: any = {};
    let AKProfileList: object[] = [];
    let StsProfileList: object[] = [];
    let RamRoleArnProfileList: object[] = [];
    let EcsRamRoleProfileList: object[] = [];
    if (loadFilePath) {
      filePath = loadFilePath
    }
    else {
      let homePath = os.homedir();
      filePath = homePath + CLI_CONFIG_FILE;
    }
    if (fs.existsSync(filePath)) {
      let file = fs.readFileSync(filePath).toString();
      let AllProfiles = JSON.parse(file)['profiles'];
      for (let profile of AllProfiles) {
        configureInfo = {
          accessKeyId: profile.access_key_id,
          accessKeySecret: profile.access_key_secret,
          region: profile.region_id,
          securityToken: profile.sts_token,
          roleArn: profile.ram_role_arn,
          roleSessionName: profile.ram_session_name,
          roleName: profile.ram_role_name,
          name: profile.name
        }

        if (profile.mode === 'AK') {
          AKProfileList.push(configureInfo)
          configureInfos.AK = AKProfileList
        }
        else if (profile.mode === 'StsToken') {
          StsProfileList.push(configureInfo)
          configureInfos.StsToken =  StsProfileList
        }
        else if (profile.mode === 'RamRoleArn') {
          RamRoleArnProfileList.push(configureInfo)
          configureInfos.RamRoleArn = RamRoleArnProfileList
        }
        else if (profile.mode === 'EcsRamRole') {
          EcsRamRoleProfileList.push(configureInfo)
          configureInfos.EcsRamRole = EcsRamRoleProfileList
        }
      }
      if (!configureInfos || Object.keys(configureInfos).length == 0) {
        error("WANRNING: Please check the accuracy of the mode and profele configuration entered.");
        exit();
      }
      return configureInfos
    } else {
      error("WANRNING: Please check Aliyun Cli tool configure accuracy of the default path or specified path.");
      exit();
    }
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

export interface EventOptions {
  region?: string;
  stackName: string[];
  logicalResourceId: string;
  pageNumber: string;
  pageSize: string;
}

export interface ResourceOptions {
  region?: string;
  stackNames: string[];
}

export interface ListStackOptions {
  region?: string;
  stackNames: string[];
  pageNumber: string;
  pageSize: string;
  all: string;
}

export interface LoadConfigOptions {
  global?: string;
  loadFilePath: string;
}

export interface Tag {
  readonly Key: string;
  readonly Value: string;
}