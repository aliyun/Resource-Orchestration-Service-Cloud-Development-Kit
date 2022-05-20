import * as colors from 'colors/safe';
import * as fs from 'fs';
import * as path from 'path';
import * as readlineSync from 'readline-sync';
import * as util from 'util';
import {decipher, cipher} from './util/cipher';
import {format} from 'util';
import {RewritableBlock} from './util/display';

const rosClient = require('@alicloud/ros-2019-09-10');
const os = require('os');
const http = require('http');
const https = require('https');
import {exec as _exec} from 'child_process';
import Credentials, {Config} from '@alicloud/credentials';
import {CloudAssembly, DefaultSelection, ExtendedStackSelection, StackCollection} from './api/cloud-assembly';
import {CloudExecutable} from './api/cloud-executable';
import {data, error, print, success, warning} from './logging';
import {Configuration, PROJECT_CONFIG} from './settings';
import {exit} from 'process';
import {printStackDiff} from './diff';
import {deserializeStructure} from './serialize';
import {promisify} from 'util';

const generateSafeId = require('generate-safe-id');

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
const PACKAGE_JSON = __dirname + '/../package.json';
const OUTPUTS_JSON = 'stack.outputs.json';

const exec = promisify(_exec);

const requestOptions: { [name: string]: any } = {
    headers: {
        'User-Agent': "ROS-CLI-" + JSON.parse(fs.readFileSync(PACKAGE_JSON).toString())['version'] + "::" + readLanguageInfo()
    },
    timeout: 90000
};

const sleep = function (ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};


const stream = process.stdout;


let withDefaultPrinterObj: any;


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
            exit(1);
        }
        return null
    }

    constructor(private readonly props: CdkToolkitProps) {
    }

    public async getRosClient() {
        let modeType = await CdkToolkit.getJson(CONFIG_NAME, 'type', true)
        let endpoint = await CdkToolkit.getJson(CONFIG_NAME, 'endpoint', true)
        let configInfo: any;
        let client;
        switch (modeType) {
            case 'ecs_ram_role':
                configInfo = new Config({
                    type: 'ecs_ram_role',
                    roleName: await CdkToolkit.getJson(CONFIG_NAME, 'roleName')
                });
                break;
            case 'sts':
                configInfo = new Config({
                    type: 'sts',
                    accessKeyId: await decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeyId')),
                    accessKeySecret: await decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeySecret')),
                    securityToken: await decipher(await CdkToolkit.getJson(CONFIG_NAME, 'securityToken'))
                });
                break;
            case 'ram_role_arn':
                configInfo = new Config({
                    type: 'ram_role_arn',
                    accessKeyId: await decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeyId')),
                    accessKeySecret: await decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeySecret')),
                    roleArn: await CdkToolkit.getJson(CONFIG_NAME, 'roleArn'),
                    roleSessionName: await CdkToolkit.getJson(CONFIG_NAME, 'roleSessionName')
                });
                break;
            case 'access_key':
                configInfo = new Config({
                    type: 'access_key',
                    accessKeyId: await decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeyId')),
                    accessKeySecret: await decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeySecret'))
                });
                break;
        }
        endpoint = endpoint ? endpoint : 'https://ros.aliyuncs.com';
        let newAccessKeyId: string;
        let newAccessKeySecret: string;
        let newSecurityToken: string;
        // @ts-ignore
        newAccessKeyId = newAccessKeyId ? newAccessKeyId : process.env.ACCESS_KEY_ID
        // @ts-ignore
        newAccessKeySecret = newAccessKeySecret ? newAccessKeySecret : process.env.ACCESS_KEY_SECRET
        // @ts-ignore
        newSecurityToken = newSecurityToken ? newSecurityToken : process.env.SECURITY_TOKEN
        if (configInfo) {
            try {
                const cred = new Credentials(configInfo);
                newAccessKeyId = await cred.getAccessKeyId();
                newAccessKeySecret = await cred.getAccessKeySecret();
                newSecurityToken = await cred.getSecurityToken();
            } catch (e) {
                error(
                    'WANRNING: Please check the accuracy of the credential information you import from CLI config!' + e.message,
                );
                exit(1);
            }
        }

        if (!newAccessKeyId || !newAccessKeySecret) {
            error("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
            exit(1);
        } else if (!newSecurityToken) {
            client = new rosClient({
                endpoint: endpoint,
                accessKeyId: newAccessKeyId,
                accessKeySecret: newAccessKeySecret
            });
        } else {
            client = new rosClient({
                endpoint: endpoint,
                accessKeyId: newAccessKeyId,
                accessKeySecret: newAccessKeySecret,
                securityToken: newSecurityToken
            });
        }
        let httpModule = client.endpoint.startsWith('https://') ? https : http;
        client.keepAliveAgent = new httpModule.Agent({
            keepAlive: true,
            keepAliveMsecs: 15000
        });
        return client;
    }

    public async config(global: boolean) {
        let configSavePath = (global ? GLOBAL_PATH : LOCAL_PATH) + CONFIG_NAME;
        let modeType = ['AK', 'StsToken', 'RamRoleArn', 'EcsRamRole']
        let endpoint = readlineSync.question('endpoint(optional, default:https://ros.aliyuncs.com):', {defaultInput: 'https://ros.aliyuncs.com'});
        let regionId = readlineSync.question('defaultRegionId(optional, default:cn-hangzhou):', {defaultInput: 'cn-hangzhou'});
        let modeIndex = readlineSync.keyInSelect(modeType, 'Authenticate mode:');
        let inputConfigInfo: any = {};
        let checkCommand: string;
        let curlCommand: string;
        if (modeType[modeIndex] === 'EcsRamRole') {
            if (process.platform === 'win32') {
                checkCommand = 'powershell -Command "(curl -URi http://100.100.100.200/latest/meta-data/Ram/security-credentials/).StatusCode"';
                curlCommand = 'powershell -Command "(curl -URi http://100.100.100.200/latest/meta-data/Ram/security-credentials/).Content"';
            } else {
                checkCommand = 'curl http://100.100.100.200/latest/meta-data/Ram/security-credentials/ -o /dev/null -s -w %{http_code}';
                curlCommand = 'curl http://100.100.100.200/latest/meta-data/Ram/security-credentials/';
            }
            try {
                const {stdout: checkStdout} = await exec(checkCommand);
                if (checkStdout.trim() !== '200') {
                    error(
                        'WANRNING: If want to Use EcsRamRole config, Please bind EcsRamRole to the host.',
                    );
                    exit(1);
                }
            } catch (e) {
                error(
                    'WANRNING: If want to Use EcsRamRole config, Please bind EcsRamRole to the host!' + e.message,
                );
                exit(1);
            }
            const {stdout: curlStdout} = await exec(curlCommand);
            let roleName = readlineSync.question(`roleName, The configured role of the host: [${curlStdout.trim()}]`, {defaultInput: curlStdout.trim()});
            inputConfigInfo = {
                type: 'ecs_ram_role',
                roleName: roleName
            };
        } else if (modeType[modeIndex] === 'StsToken') {
            let accessKeyId = readlineSync.question('accessKeyId:', {hideEchoBack: true});
            let accessKeySecret = readlineSync.question('accessKeySecret:', {hideEchoBack: true});
            let securityToken = readlineSync.question('securityToken:', {hideEchoBack: true});
            inputConfigInfo = {
                type: 'sts',
                accessKeyId: await cipher(accessKeyId),
                accessKeySecret: await cipher(accessKeySecret),
                securityToken: await cipher(securityToken)
            };
        } else if (modeType[modeIndex] === 'RamRoleArn') {
            let accessKeyId = readlineSync.question('accessKeyId:', {hideEchoBack: true});
            let accessKeySecret = readlineSync.question('accessKeySecret:', {hideEchoBack: true});
            let roleArn = readlineSync.question('roleArn(eg: acs:ram::******:role/******):');
            let roleSessionName = readlineSync.question('roleSessionName:');
            inputConfigInfo = {
                type: 'ram_role_arn',
                accessKeyId: await cipher(accessKeyId),
                accessKeySecret: await cipher(accessKeySecret),
                roleArn: roleArn,
                roleSessionName: roleSessionName
            };
        } else if (modeType[modeIndex] === 'AK') {
            let accessKeyId = readlineSync.question('accessKeyId:', {hideEchoBack: true});
            let accessKeySecret = readlineSync.question('accessKeySecret:', {hideEchoBack: true});
            inputConfigInfo = {
                type: 'access_key',
                accessKeyId: await cipher(accessKeyId),
                accessKeySecret: await cipher(accessKeySecret)
            };
        } else {
            error(
                'WANRNING: If want to deploy or delete stack, a certification method must be selected',
            );
            exit(1);
        }
        inputConfigInfo.endpoint = endpoint
        inputConfigInfo.regionId = regionId
        let file = path.join(configSavePath);
        fs.writeFileSync(file, JSON.stringify(inputConfigInfo, null, '\t'));
        success(`\n ✅ Your cdk configuration has been saved successfully!`);
        exit(0);
    }

    public async configSet(options: ConfigSetOptions) {
        let configSavePath = (options.global ? GLOBAL_PATH : LOCAL_PATH) + CONFIG_NAME;
        let modeType = options.mode;
        let configInfo: any = {};
        let ak = options.ak ? options.ak : '';
        let sk = options.sk ? options.sk : '';
        let stsToken = options.sts ? options.sts : '';
        let ramRoleArn = options.ramRoleArn ? options.ramRoleArn : '';
        let roleSessionName = options.roleSessionName ? options.roleSessionName : '';
        let ramRoleName = options.ramRoleName ? options.ramRoleName : '';
        if (modeType === 'AK') {
            configInfo = {
                type: 'access_key',
                accessKeyId: await cipher(ak),
                accessKeySecret: await cipher(sk)
            };
        } else if (modeType === 'StsToken') {
            configInfo = {
                type: 'sts',
                accessKeyId: await cipher(ak),
                accessKeySecret: await cipher(sk),
                securityToken: await cipher(stsToken)
            };
        } else if (modeType === 'RamRoleArn') {
            configInfo = {
                type: 'ram_role_arn',
                accessKeyId: await cipher(ak),
                accessKeySecret: await cipher(sk),
                roleArn: ramRoleArn,
                roleSessionName: roleSessionName
            };
        } else if (modeType === 'EcsRamRole') {
            configInfo = {
                type: 'ecs_ram_role',
                roleName: ramRoleName
            };
        } else {
            error(
                'WANRNING: If want to deploy or delete stack, a authenticate mode must be in (AK|StsToken|RamRoleArn|EcsRamRole)',
            );
            exit(1);
        }
        let file = path.join(configSavePath);
        configInfo.regionId = options.region;
        configInfo.endpoint = options.endpoint;
        fs.writeFileSync(file, JSON.stringify(configInfo, null, '\t'));
        success(`\n ✅ Your cdk configuration has been saved successfully!`);
        exit(0);
    }


    public async loadCliConfig(options: LoadConfigOptions) {
        let configSavePath = (options.global ? GLOBAL_PATH : LOCAL_PATH) + CONFIG_NAME;
        let configureInfos = await this.getCliConfig(options.loadFilePath)
        let modeType = Object.keys(configureInfos);
        let modeIndex = readlineSync.keyInSelect(modeType, 'Select authenticate mode:');
        let profileNames: string[] = [];
        let profileConfig: any = {};
        if (modeIndex === -1) {
            error(
                'WANRNING: If want to deploy or delete stack, a certification method must be selected',
            );
            exit(1);
        } else if (modeType[modeIndex] === 'AK') {
            profileNames = configureInfos.AK.map((item: { name: any; }) => item.name)
        } else if (modeType[modeIndex] === 'StsToken') {
            profileNames = configureInfos.StsToken.map((item: { name: any; }) => item.name)
        } else if (modeType[modeIndex] === 'RamRoleArn') {
            profileNames = configureInfos.RamRoleArn.map((item: { name: any; }) => item.name)
        } else if (modeType[modeIndex] === 'EcsRamRole') {
            profileNames = configureInfos.EcsRamRole.map((item: { name: any; }) => item.name)
        }
        let profileIndex = readlineSync.keyInSelect(profileNames, 'Select Authenticate profile name:');
        if (profileIndex === -1) {
            error(
                'WANRNING: If want to deploy or delete stack, a certification profile must be selected',
            );
            exit(1);
        }
        let endpoint = await CdkToolkit.getJson(CONFIG_NAME, 'endpoint', true)
        let regionId;
        let configInfo: any = {};
        endpoint = endpoint ? endpoint : 'https://ros.aliyuncs.com';
        switch (modeType[modeIndex]) {
            case 'AK':
                profileConfig = configureInfos.AK.find((profiles: { name: string; }) => profiles.name === profileNames[profileIndex]);
                if (!profileConfig['accessKeyId'] || !profileConfig['accessKeySecret']) {
                    error(
                        'WANRNING: If want to deploy or delete stack, accessKeyId or accessKeySecret Cannot be empty!',
                    );
                    exit(1);
                }
                configInfo = {
                    type: 'access_key',
                    accessKeyId: await cipher(profileConfig['accessKeyId']),
                    accessKeySecret: await cipher(profileConfig['accessKeySecret'])
                };
                break;
            case 'StsToken':
                profileConfig = configureInfos.StsToken.find((profiles: { name: string; }) => profiles.name === profileNames[profileIndex]);
                if (!profileConfig['accessKeyId'] || !profileConfig['accessKeySecret'] || !profileConfig['securityToken']) {
                    error(
                        'WANRNING: If want to deploy or delete stack, accessKeyId, accessKeySecret or securityToken Cannot be empty!',
                    );
                    exit(1);
                }
                configInfo = {
                    type: 'sts',
                    accessKeyId: await cipher(profileConfig['accessKeyId']),
                    accessKeySecret: await cipher(profileConfig['accessKeySecret']),
                    securityToken: await cipher(profileConfig['securityToken'])
                };
                break;
            case 'RamRoleArn':
                profileConfig = configureInfos.RamRoleArn.find((profiles: { name: string; }) => profiles.name === profileNames[profileIndex]);
                if (!profileConfig['accessKeyId'] || !profileConfig['accessKeySecret'] || !profileConfig['roleArn'] || !profileConfig['roleSessionName']) {
                    error(
                        'WANRNING: If want to deploy or delete stack, accessKeyId, accessKeySecret, roleArn or roleSessionName Cannot be empty!',
                    );
                    exit(1);
                }
                configInfo = {
                    type: 'ram_role_arn',
                    accessKeyId: await cipher(profileConfig['accessKeyId']),
                    accessKeySecret: await cipher(profileConfig['accessKeySecret']),
                    roleArn: profileConfig['roleArn'],
                    roleSessionName: profileConfig['roleSessionName']
                };
                break;
            case 'EcsRamRole':
                profileConfig = configureInfos.EcsRamRole.find((profiles: { name: string; }) => profiles.name === profileNames[profileIndex]);
                if (!profileConfig['roleName']) {
                    error(
                        'WANRNING: If want to deploy or delete stack, roleName Cannot be empty!',
                    );
                    exit(1);
                }
                configInfo = {
                    type: 'ecs_ram_role',
                    roleName: profileConfig['roleName']
                };
                break;
        }
        regionId = profileConfig['region'] ? profileConfig['region'] : 'cn-hangzhou';
        configInfo.regionId = regionId
        configInfo.endpoint = endpoint
        let file = path.join(configSavePath);
        fs.writeFileSync(file, JSON.stringify(configInfo, null, '\t'));
        success(`\n ✅ Your cdk configuration has been load from Aliyun Cli configuration saved successfully %s %s!`, modeType[modeIndex], profileNames[profileIndex]);
        exit(0);
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
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        const client = await this.getRosClient();
        let templateBody = fs.readFileSync(`./cdk.out/${stackName}.template.json`);
        let ClientToken = generateSafeId();
        let disableRollback = options.disableRollback
        let content: { [name: string]: any } = {
            StackName: stackName.toString(),
            RegionId: region,
            TimeoutInMinutes: options.timeout,
            TemplateBody: templateBody,
            ClientToken: ClientToken,
            DisableRollback: disableRollback
        };
        let sync = options.sync
        let outputs = options.outputsFile
        let skipIfNoChanges = options.skipIfNoChanges
        let resourceGroupId = options.resourceGroupId
        requestOptions['method'] = 'POST'

        if (resourceGroupId) {
            content['ResourceGroupId'] = resourceGroupId
        }

        if (stacks.stackArtifacts[0].tags) {
            let count: number = 1;
            let paras = stacks.stackArtifacts[0].tags;
            for (let key in paras) {
                content['Tags.' + count.toString() + '.Key'] = key;
                content['Tags.' + count.toString() + '.Value'] = paras[key];
                count++;
            }
        }

        if (options.parameters) {
            let count: number = 1;
            let paras = options.parameters;
            for (let key in paras) {
                content['Parameters.' + count.toString() + '.ParameterKey'] = key;
                content['Parameters.' + count.toString() + '.ParameterValue'] = paras[key];
                count++;
            }
        }
        const localStackInfo = await this.findStackInfo(stackName)
        if (localStackInfo.stackId) {
            const stackInfo = await this.getStackById(localStackInfo.stackId)
            if (stackInfo !== null) {
                // update stack
                if (localStackInfo.stackId !== stackInfo.StackId) {
                    error('fail to update stack, because stack local info dose not match the remote server.')
                    exit(1);
                }
                {
                    content['StackId'] = stackInfo.StackId;
                    let stackStatus = stackInfo.Status
                    let stackUpdateTime = stackInfo.UpdateTime ? stackInfo.UpdateTime : stackInfo.CreateTime
                    if (stackStatus.indexOf("IN_PROGRESS") == -1) {
                        try {
                            if (sync) {
                                print('%s: deploying...', colors.bold(stackName));
                                await this.syncUpdateStack(client, content, requestOptions, outputs, skipIfNoChanges, stackName, localStackInfo, stackUpdateTime)
                            }
                            await this.rosUpdateStack(client, content, requestOptions, stackName, localStackInfo, stackUpdateTime)
                            exit(0)
                        } catch (e) {
                            if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack') && skipIfNoChanges) {
                                await this.updateStackInfo(stackName, stackInfo.StackId);
                                success('The stack is completely the same, there is no need to update.')
                                exit(0)
                            } else {
                                error('fail to update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, e.data.RequestId, e.message)
                                exit(1)
                            }
                        }
                    } else {
                        error('fail to update stack, because stack status is %s', stackStatus)
                        exit(1)
                    }
                }
            } else {
                // create stack
                try {
                    if (sync) {
                        print('%s: deploying...', colors.bold(stackName));
                        await this.syncDeployStack(client, content, requestOptions, outputs, resourceGroupId, stackName)
                    }
                    await this.rosCreateStack(client, content, requestOptions, resourceGroupId, stackName)
                    exit(0)
                } catch (e) {
                    error('fail to create stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, e.data.RequestId, e.message)
                    exit(1)
                }
            }
        } else {
            const stackInfo = await this.getStackByName(stackName, resourceGroupId)
            if (stackInfo !== null) {
                // stack is exist send error message
                error('fail to create stack, because stack  %s is exist in this region.', stackName)
                exit(1)
            } else {
                // create stack
                try {
                    if (sync) {
                        print('%s: deploying...', colors.bold(stackName));
                        await this.syncDeployStack(client, content, requestOptions, outputs, resourceGroupId, stackName)
                    }
                    await this.rosCreateStack(client, content, requestOptions, resourceGroupId, stackName)
                    exit(0)
                } catch (e) {
                    error('fail to create stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, e.data.RequestId, e.message)
                    exit(1)
                }
            }
        }
    }

    public async diff(options: DiffOptions) {
        let stacks = await this.selectStacksForDestroy(options.stackNames);
        const client = await this.getRosClient();
        let regionInLocal = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        regionInLocal = regionInLocal ? regionInLocal : process.env.REGION_ID;
        const stream = options.stream || process.stderr;
        const contextLines = options.contextLines || 3;
        for (let stack of stacks.stackArtifacts) {
            let stackInfo = await this.findStackInfo(stack.id);
            if (!stackInfo.stackId) {
                stream.write(format('Stack %s has not been deployed or stack doesn\'t exist in the stack.info.json file \n', colors.bold(stack.displayName)));
                continue;
            }
            client.getTemplate({RegionId: regionInLocal, StackId: stackInfo.stackId}, requestOptions)
                .then((res: any) => {
                    const template = deserializeStructure(res.TemplateBody);
                    stream.write(format('Stack %s\n', colors.bold(stack.displayName)));
                    printStackDiff(template, stack, contextLines, stream);
                    exit(0)
                }, (ex: any) => {
                    if (ex.code == 'StackNotFound') {
                        warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to synth.`);
                        this.updateStackInfo(stack.id, SYNTH_STACK);
                    } else {
                        error('fail to get template: %s %s', ex.code, ex.message);
                    }
                    exit(1)
                });
        }
    }

    public async event(options: EventOptions) {
        await this.syncStackInfo();
        let stacks = await this.selectStacksForDestroy([]);
        let stackId = (await this.findStackInfo(options.stackName[0])).stackId
        if (!options.stackName) {
            error('If want to get resource stack events, stack name must be Specified!')
            exit(1)
        }
        if (!stacks.stackIds.includes(options.stackName[0])) {
            error(`The specific stack doesn't exist, Please check the accuracy of the input stack name!`)
            exit(1)
        }
        if (!stackId) {
            error(`The specific stack doesn't exist in the stack.info.json file, Please check the accuracy of the stack: %s!`, options.stackName[0])
            exit(1)
        }
        let LogicalResourceIds: string[] = [];
        const client = await this.getRosClient();
        if (options.logicalResourceId) {
            LogicalResourceIds.push(options.logicalResourceId)
        }
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        client
            .listStackEvents({
                StackId: stackId,
                RegionId: region,
                LogicalResourceId: LogicalResourceIds,
                PageSize: options.pageSize ? Number(options.pageSize) : 10,
                PageNumber: options.pageNumber ? Number(options.pageNumber) : 1
            }, requestOptions)
            .then((res: any) => {
                success(`\n ✅ The Stack %s \n Events is: \n %s \n`, colors.blue(options.stackName[0]), colors.blue(JSON.stringify(res.Events, null, "\t")));
                exit(0)
            }, (ex: any) => {
                if (ex.code == 'StackNotFound') {
                    warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                    this.updateStackInfo(options.stackName[0], DESTROY_STACK);
                } else {
                    error('fail to get stack events: %s %s', ex.code, ex.message)
                }
                exit(1)
            });
    }

    public async output(options: OutPutOptions) {
        await this.syncStackInfo();
        let stacks = await this.selectStacksForDestroy([]);
        let stackId = (await this.findStackInfo(options.stackName[0])).stackId
        if (!options.stackName) {
            error('If want to get resource stack output, stack name must be Specified!')
            exit(1)
        }
        if (!stacks.stackIds.includes(options.stackName[0])) {
            error(`The specific stack doesn't exist, Please check the accuracy of the input stack name!`)
            exit(1)
        }
        if (!stackId) {
            error(`The specific stack doesn't exist in the stack.info.json file, Please check the accuracy of the stack: %s!`, options.stackName[0])
            exit(1)
        }
        const client = await this.getRosClient();
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        client
            .getStack({
                StackId: stackId,
                RegionId: region
            }, requestOptions)
            .then((res: any) => {
                success(`\n ✅ The Stack %s \n Output is: \n %s \n`, colors.blue(options.stackName[0]), colors.blue(JSON.stringify(res.Outputs, null, "\t")));
                exit(0)
            }, (ex: any) => {
                if (ex.code == 'StackNotFound') {
                    warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                    this.updateStackInfo(options.stackName[0], DESTROY_STACK);
                } else {
                    error('fail to get stack outputs: %s %s', ex.code, ex.message)
                }
                exit(1)
            });
    }


    public async resource(options: ResourceOptions) {
        await this.syncStackInfo();
        let stacks = await this.selectStacksForDestroy(options.stackNames);
        let stackNames: string[] = [];
        for (let stack of stacks.stackArtifacts) {
            if ((await this.findStackInfo(stack.id)).stackId) {
                stackNames.push(stack.id);
            } else {
                error(`The specific stack doesn't exist in the stack.info.json file, Please check the accuracy of the stack: %s!`, stack.id)
            }
        }
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        const client = await this.getRosClient();
        for (let stackName of stackNames) {
            client
                .listStackResources({
                    StackId: (await this.findStackInfo(stackName)).stackId,
                    RegionId: region,
                }, requestOptions)
                .then((res: any) => {
                    success(`\n ✅ The Stack %s \n Resource is: \n %s \n`, colors.blue(stackName), colors.blue(JSON.stringify(res.Resources, null, "\t")));
                    exit(0)
                }, (ex: any) => {
                    if (ex.code == 'StackNotFound') {
                        warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                        this.updateStackInfo(stackName, DESTROY_STACK);
                    } else {
                        error('fail to get stack resource: %s %s', ex.code, ex.message)
                    }
                    exit(1)
                });
        }
    }

    public async generateStackInfo(options: GenerateStackInfoOptions) {
        let filePath = path.join(LOCAL_PATH + STACK_INFO);
        let stacks = await this.selectStacksForList([]);
        let stackNames: string[] = [];
        let StackInfos: { [key: string]: any } = {};
        stackNames = stacks.stackIds
        for (let stackName of stackNames) {
            const stackInfo = await this.getStackByName(stackName, options.resourceGroupId)
            if (stackInfo !== null) {
                StackInfos[stackName] = {
                    status: DEPLOY_STACK,
                    stackId: stackInfo.StackId
                }
            } else {
                StackInfos[stackName] = {
                    status: INIT_STACK,
                    stackId: null
                };
            }
        }
        fs.writeFileSync(filePath, JSON.stringify(StackInfos, null, '\t'));
        success(
            `\n ✅ The generate stack info has completed!`,
        );
        exit(0)
    }


    private async getStackByName(stackName: string, resourceGroupId: any) {
        const client = await this.getRosClient();
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        let params: { [name: string]: any } = {
            RegionId: region,
            PageSize: 10,
            PageNumber: 1,
            StackName: [stackName]
        };
        if (resourceGroupId) {
            params['ResourceGroupId'] = resourceGroupId
        }
        try {
            const result = await client.listStacks(params, requestOptions)
            if (result.Stacks[0]) {
                return result.Stacks[0]
            } else {
                return null
            }
        } catch {
            return null
        }
    }


    private async getStackById(stackId: string) {
        const client = await this.getRosClient();
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        let params: { [name: string]: any } = {
            RegionId: region,
            StackId: stackId
        };
        try {
            return await client.getStack(params, requestOptions)
        } catch (e) {
            error('fail to get stack: %s %s', e.code, e.message)
            return null
        }
    }


    public async listStacks(options: ListStackOptions) {
        await this.syncStackInfo();
        const client = await this.getRosClient();
        let stacks = await this.selectStacksForList([]);
        let params: any = {};
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        params = {
            RegionId: region,
            PageSize: options.pageSize ? Number(options.pageSize) : 10,
            PageNumber: options.pageNumber ? Number(options.pageNumber) : 1
        };
        if (!options.all) {
            if (options.stackNames.length === 0) {
                params.StackName = stacks.stackIds
            } else {
                params.StackName = options.stackNames
            }
        }
        if (options.resourceGroupId) {
            params.ResourceGroupId = options.resourceGroupId
        }
        client.listStacks(params, requestOptions)
            .then((res: any) => {
                success(`\n ✅ The Stacks list is:\n %s \n`, colors.blue(JSON.stringify(res.Stacks, null, "\t")));
                exit(0)
            }, (ex: any) => {
                error('fail to list stacks: %s %s', ex.code, ex.message)
                exit(1)
            });
    }

    public async destroy(options: DestroyOptions) {
        await this.syncStackInfo();
        let stacks = await this.selectStacksForDestroy(options.stackNames);
        let stackNames: string[] = [];
        let sync = options.sync
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
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        const client = await this.getRosClient();
        for (let stackName of stackNames) {
            let content: { [name: string]: any } = {
                StackId: (await this.findStackInfo(stackName)).stackId,
                RegionId: region,
            };
            if (sync) {
                print('%s: destroying...', colors.bold(stackName));
                await this.syncDestroyStack(client, content, requestOptions)
            }
            client.deleteStack(content, requestOptions)
                .then((res: any) => {
                    this.updateStackInfo(stackName, DESTROY_STACK);
                    success(`\n ✅ Deleted\nRequestedId: %s`, colors.blue(res.RequestId));
                    exit(0)
                }, (ex: any) => {
                    if (ex.code == 'StackNotFound') {
                        warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                        this.updateStackInfo(stackName, DESTROY_STACK);
                    } else {
                        error('fail to delete stack: %s %s', ex.code, ex.message)
                    }
                    exit(1)
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
        const stacks = await assembly.selectStacks(selectors, {defaultBehavior: DefaultSelection.AllStacks});

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
        } else {
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
                } else if (profile.mode === 'StsToken') {
                    StsProfileList.push(configureInfo)
                    configureInfos.StsToken = StsProfileList
                } else if (profile.mode === 'RamRoleArn') {
                    RamRoleArnProfileList.push(configureInfo)
                    configureInfos.RamRoleArn = RamRoleArnProfileList
                } else if (profile.mode === 'EcsRamRole') {
                    EcsRamRoleProfileList.push(configureInfo)
                    configureInfos.EcsRamRole = EcsRamRoleProfileList
                }
            }
            if (!configureInfos || Object.keys(configureInfos).length == 0) {
                error("WANRNING: Please check the accuracy of the mode and profile configuration entered.");
                exit(1);
            }
            return configureInfos
        } else {
            error("WANRNING: Please check Aliyun Cli tool configure accuracy of the default path or specified path.");
            exit(1);
        }
    }

    private async syncDeployStack(client: any, content: any, requestOptions: any, outputsFile: boolean, resourceGroupId: any, stackName: any) {
        try {
            let createResultRequestId: any;
            let createErrorRequestId: any;
            let networkErrorException: any;
            let createResult: any;
            const stackOutputs: { [key: string]: any } = {};
            try {
                createResult = await client.createStack(content, requestOptions)
                createResultRequestId = createResult.RequestId
            } catch (e) {
                createErrorRequestId = e.data.RequestId
                if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                    networkErrorException = true;
                } else if (createErrorRequestId) {
                    error('fail to sync create stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, createErrorRequestId, e.message)
                    exit(1)
                }
            }
            if ((!createResultRequestId && !createErrorRequestId) || networkErrorException) {
                let sleepTime = 5000;
                await sleep(sleepTime);
                let i = 0;
                while (i < 11) {
                    let createResultRequestId: any;
                    let createErrorRequestId: any;
                    let networkErrorException: any;
                    let createResult: any;
                    try {
                        createResult = await client.createStack(content, requestOptions)
                        createResultRequestId = createResult.RequestId
                    } catch (e) {
                        createErrorRequestId = e.data.RequestId
                        if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                            networkErrorException = true;
                        } else if (createErrorRequestId) {
                            error('fail to sync create stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, createErrorRequestId, e.message)
                            exit(1)
                        }
                    }
                    if ((!createResultRequestId && !createErrorRequestId) || networkErrorException) {
                        if (sleepTime < 20000) {
                            sleepTime = sleepTime + 5000
                        }
                        await sleep(sleepTime);
                        i++;
                        continue;
                    }
                    await this.updateStackInfo(stackName, createResult.StackId);
                    success(
                        `\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`,
                        colors.blue(createResult.RequestId),
                        colors.blue(createResult.StackId),
                    );
                    exit(0)
                }
                if (i >= 11) {
                    const newStackIdInfo = await this.getStackByName(stackName, resourceGroupId)
                    if (newStackIdInfo) {
                        await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                        success(
                            `\n ✅ The deployment(create stack) has completed!\nStackId: %s`,
                            colors.blue(newStackIdInfo.StackId),
                        );
                        exit(0)
                    } else {
                        error('fail to create stack, please check you service endpoint.')
                        exit(1)
                    }
                }
            }
            const block = new RewritableBlock(stream);
            withDefaultPrinterObj = setInterval(async function () {
                await CdkToolkit.withDefaultPrinter(client, content, requestOptions, createResult.StackId, block, 'deploy')
            }, 5000);
            while (true) {
                try {
                    await sleep(1000)
                    let params = {
                        RegionId: content['RegionId'],
                        StackId: createResult.StackId
                    };
                    const getStackResult = await client.getStack(params, requestOptions)
                    const status = getStackResult.Status
                    const statusReason = getStackResult.StatusReason
                    const stackName = getStackResult.StackName
                    const outputs = getStackResult.Outputs
                    const regComplete = RegExp(/COMPLETE/)
                    const regFailed = RegExp(/FAILED/)
                    if (regComplete.exec(status) || regFailed.exec(status)) {
                        clearInterval(withDefaultPrinterObj);
                        await CdkToolkit.withDefaultPrinter(client, content, requestOptions, createResult.StackId, block, 'deploy')
                        if (outputs !== undefined) {
                            print('\nOutputs:');
                            stackOutputs[stackName] = outputs;
                            for (const output of outputs) {
                                const value = output['OutputValue'];
                                const key = output['OutputKey'];
                                const description = output['Description'];
                                print('\n Key: %s  Value: %s Description: %s', colors.cyan(key), colors.cyan(value), colors.cyan(description));
                            }
                            if (outputsFile) {
                                fs.writeFileSync(path.join(LOCAL_PATH + OUTPUTS_JSON), JSON.stringify(stackOutputs, null, '\t'));
                            }
                        }
                        success(
                            `\n ✅ The deployment(sync deploy stack) has finished!\nstatus: %s\nStatusReason: %s\nStackId: %s`,
                            colors.blue(status),
                            colors.blue(statusReason),
                            colors.blue(getStackResult.StackId)
                        );
                        await this.updateStackInfo(stackName, createResult.StackId);
                        if (regComplete.exec(status)) {
                            if (status.toString() == 'CREATE_ROLLBACK_COMPLETE') {
                                exit(2)
                            }
                            exit(0)
                        } else if (regFailed.exec(status)) {
                            exit(2)
                        }
                        break
                    }
                } catch (e) {
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000)
                    } else {
                        error('fail to sync create stack: %s %s', e.code, e.message)
                        clearInterval(withDefaultPrinterObj);
                        exit(1)
                    }
                }
            }
        } catch (e) {
            error('fail to sync create stack: %s %s', e.code, e.message)
            clearInterval(withDefaultPrinterObj);
            exit(1)
        }
    }

    private static async getResources(client: any, content: any, requestOptions: any, stackId: any) {
        try {
            const listStackResourcesResult = await client.listStackResources({
                StackId: stackId,
                RegionId: content['RegionId'],
            }, requestOptions)
            return listStackResourcesResult.Resources
        } catch (e) {
            error('fail to get new stack resource: %s %s', e.code, e.message)
            throw e;
        }
    }

    private static async withDefaultPrinter(client: any, content: any, requestOptions: any, stackId: any, block: any, action: string) {
        const lines = new Array<string>();
        const resources = await CdkToolkit.getResources(client, content, requestOptions, stackId)
        if (action !== 'destroy') {
            for (let resource of resources) {
                lines.push(util.format(colors.blue('|%s |%s | %s | %s | %s | %s') + '\n',
                    padRight(23, resource.StackName),
                    padLeft(12, resource.CreateTime),
                    padRight(20, resource.Status),
                    padRight(23, resource.ResourceType),
                    shorten(40, resource.PhysicalResourceId),
                    resource.LogicalResourceId));
            }
        } else {
            for (let resource of resources) {
                lines.push(util.format(colors.blue('|%s | %s | %s | %s | %s') + '\n',
                    padRight(23, resource.StackName),
                    padRight(20, resource.Status),
                    padRight(23, resource.ResourceType),
                    shorten(40, resource.PhysicalResourceId),
                    resource.LogicalResourceId));
            }
        }
        block.displayLines(lines)
    }


    private async syncUpdateStack(client: any, content: any, requestOptions: any, outputsFile: boolean, skipIfNoChanges: boolean, stackName: any, localStackInfo: any, stackUpdateTime: any) {
        try {
            let params = {
                RegionId: content['RegionId'],
                StackId: content['StackId']
            };
            let updateResultRequestId: any;
            let updateErrorRequestId: any;
            let networkErrorException: any;
            let updateResult: any;
            const stackOutputs: { [key: string]: any } = {};
            const getOriginalStackResult = await client.getStack(params, requestOptions)
            const originalUpdateTime = getOriginalStackResult.UpdateTime ? getOriginalStackResult.UpdateTime : ""
            try {
                updateResult = await client.updateStack(content, requestOptions)
                updateResultRequestId = updateResult.RequestId
            } catch (e) {
                updateErrorRequestId = e.data.RequestId
                if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                    networkErrorException = true;
                } else if (updateErrorRequestId) {
                    error('fail to sync update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, updateErrorRequestId, e.message)
                    exit(1)
                }
            }

            if ((!updateResultRequestId && !updateErrorRequestId) || networkErrorException) {
                let sleepTime = 5000;
                await sleep(sleepTime);
                let i = 0;
                while (i < 11) {
                    let updateResultRequestId: any;
                    let updateErrorRequestId: any;
                    let networkErrorException: any;
                    let updateResult: any;
                    try {
                        updateResult = await client.updateStack(content, requestOptions)
                        updateResultRequestId = updateResult.RequestId
                    } catch (e) {
                        updateErrorRequestId = e.data.RequestId
                        if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                            networkErrorException = true;
                        } else if (updateErrorRequestId) {
                            error('fail to sync update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, updateErrorRequestId, e.message)
                            exit(1)
                        }
                    }
                    if ((!updateResultRequestId && !updateErrorRequestId) || networkErrorException) {
                        if (sleepTime < 20000) {
                            sleepTime = sleepTime + 5000
                        }
                        await sleep(sleepTime);
                        i++;
                        continue;
                    }
                    await this.updateStackInfo(stackName, updateResult.StackId);
                    success(
                        `\n ✅ The deployment(update stack) has completed!\nRequestedId: %s\nStackId: %s`,
                        colors.blue(updateResult.RequestId),
                        colors.blue(updateResult.StackId),
                    );
                    exit(0)
                }
                if (i >= 11) {
                    let statusArray = ["UPDATE_FAILED", "UPDATE_COMPLETE", "ROLLBACK_FAILED", "ROLLBACK_COMPLETE"]
                    const newStackIdInfo = await this.getStackById(localStackInfo.stackId)
                    let newStackIdInfoUpdateTime = newStackIdInfo.UpdateTime ? newStackIdInfo.UpdateTime : newStackIdInfo.CreateTime
                    if (newStackIdInfo.Status == 'UPDATE_IN_PROGRESS' || newStackIdInfo.Status == 'ROLLBACK_IN_PROGRESS') {
                        await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                        success(
                            `\n ✅ The deployment(update stack) has completed!\nStackId: %s`,
                            colors.blue(newStackIdInfo.StackId),
                        );
                        exit(0)
                    } else if (statusArray.includes(newStackIdInfo.Status) && newStackIdInfoUpdateTime != stackUpdateTime) {
                        await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                        success(
                            `\n ✅ The deployment(update stack) has completed!\nStackId: %s`,
                            colors.blue(newStackIdInfo.StackId),
                        );
                        exit(0)
                    } else {
                        error('fail to update stack, please check you service endpoint.')
                        exit(1)
                    }
                }
            }
            // Wait for the stack state to change after updating it
            await sleep(5000);
            const block = new RewritableBlock(stream);
            withDefaultPrinterObj = setInterval(async function () {
                await CdkToolkit.withDefaultPrinter(client, content, requestOptions, updateResult.StackId, block, 'update')
            }, 5000);
            while (true) {
                try {
                    await sleep(1000)
                    const getNewStackResult = await client.getStack(params, requestOptions)
                    const status = getNewStackResult.Status
                    const statusReason = getNewStackResult.StatusReason
                    const stackName = getNewStackResult.StackName
                    const outputs = getNewStackResult.Outputs
                    const newUpdateTime = getNewStackResult.UpdateTime ? getNewStackResult.UpdateTime : ""
                    if (newUpdateTime == originalUpdateTime) {
                        // stack update in progress or update did not begin
                        continue
                    }
                    const regComplete = RegExp(/COMPLETE/)
                    const regFailed = RegExp(/FAILED/)
                    if (regComplete.exec(status) || regFailed.exec(status)) {
                        clearInterval(withDefaultPrinterObj);
                        await CdkToolkit.withDefaultPrinter(client, content, requestOptions, updateResult.StackId, block, 'update')
                        if (outputs !== undefined) {
                            print('\nOutputs:');
                            stackOutputs[stackName] = outputs;
                            for (const output of outputs) {
                                const value = output['OutputValue'];
                                const key = output['OutputKey'];
                                const description = output['Description'];
                                print('\n Key: %s  Value: %s Description: %s', colors.cyan(key), colors.cyan(value), colors.cyan(description));
                            }
                            if (outputsFile) {
                                fs.writeFileSync(path.join(LOCAL_PATH + OUTPUTS_JSON), JSON.stringify(stackOutputs, null, '\t'));
                            }
                        }

                        success(
                            `\n ✅ The deployment(sync update stack) has finished!\nstatus: %s\nStatusReason: %s\nStackId: %s`,
                            colors.blue(status),
                            colors.blue(statusReason),
                            colors.blue(getNewStackResult.StackId),
                        );
                        await this.updateStackInfo(stackName, updateResult.StackId);
                        if (regComplete.exec(status)) {
                            if (status.toString() == 'ROLLBACK_COMPLETE') {
                                exit(2)
                            }
                            exit(0)
                        } else if (regFailed.exec(status)) {
                            exit(2)
                        }
                        break
                    } else {
                        await sleep(5000);
                    }
                } catch (e) {
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000)
                    } else {
                        error('fail to sync update stack: %s %s', e.code, e.message)
                        clearInterval(withDefaultPrinterObj);
                        exit(1)
                    }
                }
            }

        } catch (e) {
            if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack') && skipIfNoChanges) {
                await this.updateStackInfo(content['StackName'], content['StackId']);
                success('The stack is completely the same, there is no need to update.')
                exit(0)
            } else {
                error('fail to sync update stack: %s %s', e.code, e.message)
                clearInterval(withDefaultPrinterObj);
                exit(1)
            }
        }
    }

    private async syncDestroyStack(client: any, content: any, requestOptions: any) {
        try {
            await client.deleteStack(content, requestOptions)
            const block = new RewritableBlock(stream);
            withDefaultPrinterObj = setInterval(async function () {
                await CdkToolkit.withDefaultPrinter(client, content, requestOptions, content['StackId'], block, 'destroy')
            }, 5000);
            while (true) {
                try {
                    await sleep(1000)
                    let params = {
                        RegionId: content['RegionId'],
                        StackId: content['StackId']
                    };
                    const getStackResult = await client.getStack(params, requestOptions)
                    const status = getStackResult.Status
                    const statusReason = getStackResult.StatusReason
                    const stackName = getStackResult.StackName
                    const regComplete = RegExp(/COMPLETE/)
                    const regFailed = RegExp(/FAILED/)
                    if (regComplete.exec(status) || regFailed.exec(status)) {
                        clearInterval(withDefaultPrinterObj);
                        await CdkToolkit.withDefaultPrinter(client, content, requestOptions, content['StackId'], block, 'destroy')
                        success(
                            `\n ✅ The task(sync destroy stack) has finished!\nstatus: %s\nStatusReason: %s\nStackId: %s`,
                            colors.blue(status),
                            colors.blue(statusReason),
                            colors.blue(getStackResult.StackId)
                        );
                        await this.updateStackInfo(stackName, DESTROY_STACK);
                        if (regComplete.exec(status)) {
                            exit(0)
                        } else if (regFailed.exec(status)) {
                            exit(2)
                        }
                        break
                    }
                } catch (e) {
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000)
                    } else {
                        error('fail to sync destroy stack: %s %s', e.code, e.message)
                        clearInterval(withDefaultPrinterObj);
                        exit(1)
                    }
                }
            }
        } catch (e) {
            error('fail to sync destroy stack: %s %s', e.code, e.message)
            clearInterval(withDefaultPrinterObj);
            exit(1)
        }
    }

    private async rosUpdateStack(client: any, content: any, requestOptions: any, stackName: any, localStackInfo: any, stackUpdateTime: any) {
        let updateResultRequestId: any;
        let updateErrorRequestId: any;
        let networkErrorException: any;
        let updateResult: any;
        try {
            updateResult = await client.updateStack(content, requestOptions)
            updateResultRequestId = updateResult.RequestId
        } catch (e) {
            updateErrorRequestId = e.data.RequestId
            if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                networkErrorException = true;
            } else if (updateErrorRequestId) {
                error('fail to sync update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, updateErrorRequestId, e.message)
                exit(1)
            }
        }
        if ((!updateResultRequestId && !updateErrorRequestId) || networkErrorException) {
            let sleepTime = 5000;
            await sleep(sleepTime);
            let i = 0;
            while (i < 11) {
                let updateResultRequestId: any;
                let updateErrorRequestId: any;
                let networkErrorException: any;
                let updateResult: any;
                try {
                    updateResult = await client.updateStack(content, requestOptions)
                    updateResultRequestId = updateResult.RequestId
                } catch (e) {
                    updateErrorRequestId = e.data.RequestId
                    if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                        networkErrorException = true;
                    } else if (updateErrorRequestId) {
                        error('fail to sync update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, updateErrorRequestId, e.message)
                        exit(1)
                    }
                }
                if ((!updateResultRequestId && !updateErrorRequestId) || networkErrorException) {
                    if (sleepTime < 20000) {
                        sleepTime = sleepTime + 5000
                    }
                    await sleep(sleepTime);
                    i++;
                    continue;
                }
                await this.updateStackInfo(stackName, updateResult.StackId);
                success(
                    `\n ✅ The deployment(update stack) has completed!\nRequestedId: %s\nStackId: %s`,
                    colors.blue(updateResult.RequestId),
                    colors.blue(updateResult.StackId),
                );
                exit(0)
            }
            if (i >= 11) {
                let statusArray = ["UPDATE_FAILED", "UPDATE_COMPLETE", "ROLLBACK_FAILED", "ROLLBACK_COMPLETE"]
                const newStackIdInfo = await this.getStackById(localStackInfo.stackId)
                let newStackIdInfoUpdateTime = newStackIdInfo.UpdateTime ? newStackIdInfo.UpdateTime : newStackIdInfo.CreateTime
                if (newStackIdInfo.Status == 'UPDATE_IN_PROGRESS' || newStackIdInfo.Status == 'ROLLBACK_IN_PROGRESS') {
                    await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                    success(
                        `\n ✅ The deployment(update stack) has completed!\nStackId: %s`,
                        colors.blue(newStackIdInfo.StackId),
                    );
                    exit(0)
                } else if (statusArray.includes(newStackIdInfo.Status) && newStackIdInfoUpdateTime != stackUpdateTime) {
                    await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                    success(
                        `\n ✅ The deployment(update stack) has completed!\nStackId: %s`,
                        colors.blue(newStackIdInfo.StackId),
                    );
                    exit(0)
                } else {
                    error('fail to update stack, please check you service endpoint.')
                    exit(1)
                }
            }
        }
        await this.updateStackInfo(stackName, updateResult.StackId);
        success(
            `\n ✅ The deployment(update stack) has completed!\nRequestedId: %s\nStackId: %s`,
            colors.blue(updateResult.RequestId),
            colors.blue(updateResult.StackId),
        );
    }

    private async rosCreateStack(client: any, content: any, requestOptions: any, resourceGroupId: any, stackName: any) {
        let createResultRequestId: any;
        let createErrorRequestId: any;
        let networkErrorException: any;
        let createResult: any;
        try {
            createResult = await client.createStack(content, requestOptions)
            createResultRequestId = createResult.RequestId
        } catch (e) {
            createErrorRequestId = e.data.RequestId
            if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                networkErrorException = true;
            } else if (createErrorRequestId) {
                error('fail to sync update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, createErrorRequestId, e.message)
                exit(1)
            }
        }
        if ((!createResultRequestId && !createErrorRequestId) || networkErrorException) {
            let sleepTime = 5000;
            await sleep(sleepTime);
            let i = 0;
            while (i < 11) {
                let createResultRequestId: any;
                let createErrorRequestId: any;
                let networkErrorException: any;
                let createResult: any;
                try {
                    createResult = await client.createStack(content, requestOptions)
                    createResultRequestId = createResult.RequestId
                } catch (e) {
                    createErrorRequestId = e.data.RequestId
                    if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                        networkErrorException = true;
                    } else if (createErrorRequestId) {
                        error('fail to sync update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, createErrorRequestId, e.message)
                        exit(1)
                    }
                }
                if ((!createResultRequestId && !createErrorRequestId) || networkErrorException) {
                    if (sleepTime < 20000) {
                        sleepTime = sleepTime + 5000
                    }
                    await sleep(sleepTime);
                    i++;
                    continue;
                }
                await this.updateStackInfo(stackName, createResult.StackId);
                success(
                    `\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`,
                    colors.blue(createResult.RequestId),
                    colors.blue(createResult.StackId),
                );
                exit(0)
            }
            if (i >= 11) {
                const newStackIdInfo = await this.getStackByName(stackName, resourceGroupId)
                if (newStackIdInfo) {
                    await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                    success(
                        `\n ✅ The deployment(create stack) has completed!\nStackId: %s`,
                        colors.blue(newStackIdInfo.StackId),
                    );
                    exit(0)
                } else {
                    error('fail to create stack, please check you service endpoint.')
                    exit(1)
                }
            }
        }
        await this.updateStackInfo(stackName, createResult.StackId);
        success(
            `\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`,
            colors.blue(createResult.RequestId),
            colors.blue(createResult.StackId),
        );
    }
}

export interface DiffOptions {
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
    sync: boolean;
    outputsFile: boolean;
    skipIfNoChanges: boolean;
    disableRollback: boolean;
    resourceGroupId: string;
}

export interface DestroyOptions {
    stackNames: string[];
    quiet?: boolean;
    sync: boolean;
}

export interface EventOptions {
    stackName: string[];
    logicalResourceId: string;
    pageNumber: string;
    pageSize: string;
}

export interface OutPutOptions {
    stackName: string;
}

export interface ResourceOptions {
    stackNames: string[];
}

export interface GenerateStackInfoOptions {
    resourceGroupId: string;
}

export interface ListStackOptions {
    stackNames: string[];
    pageNumber: string;
    pageSize: string;
    all: string;
    resourceGroupId: string;
}

export interface ConfigSetOptions {
    global: string;
    endpoint: string;
    region: string;
    mode: string;
    ak: string;
    sk: string;
    sts: string;
    ramRoleArn: string;
    roleSessionName: string;
    ramRoleName: string;
}

export interface LoadConfigOptions {
    global?: string;
    loadFilePath: string;
}


export interface Tag {
    readonly Key: string;
    readonly Value: string;
}

export function writeAndUpdateLanguageInfo(language: string) {
    let filePath = path.join(LOCAL_PATH + PROJECT_CONFIG);
    let fileContent: any;
    if (fs.existsSync(filePath)) {
        fileContent = fs.readFileSync(filePath).toString();
        let info = JSON.parse(fileContent);
        info['languageInfo'] = language;
        fs.writeFileSync(filePath, JSON.stringify(info, null, '\t'));
    }
}

export function readLanguageInfo() {
    let filePath = path.join(LOCAL_PATH + PROJECT_CONFIG);
    if (fs.existsSync(filePath)) {
        let fileContent = fs.readFileSync(filePath).toString();
        return JSON.parse(fileContent)['languageInfo'].toString();
    } else {
        return ''
    }
}

export function padLeft(n: number, x: string): string {
    if (x) {
        return ' '.repeat(Math.max(0, n - x.length)) + x;
    } else {
        return ''
    }

}

export function padRight(n: number, x: string): string {
    if (x) {
        return x + ' '.repeat(Math.max(0, n - x.length));
    } else {
        return ''
    }
}

export function shorten(maxWidth: number, p: string) {
    if (p.length <= maxWidth) {
        return p;
    }
    const half = Math.floor((maxWidth - 3) / 2);
    return p.substr(0, half) + '...' + p.substr(p.length - half);
}