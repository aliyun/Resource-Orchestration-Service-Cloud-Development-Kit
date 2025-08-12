import * as colors from 'colors/safe';
import * as fs from 'fs';
import * as path from 'path';
import * as readlineSync from 'readline-sync';
import * as util from 'util';
import * as jszip from 'jszip';
import {format, promisify} from 'util';
import {cipher, decipher} from './util/cipher';
import {RewritableBlock} from './util/display';
import {isNumber, isString} from 'lodash';
import {exec as _exec} from 'child_process';
import Credentials, {Config} from '@alicloud/credentials';
import {CloudAssembly, DefaultSelection, ExtendedStackSelection, StackCollection} from './api/cloud-assembly';
import {CloudExecutable} from './api/cloud-executable';
import {data, error, print, success, warning} from './logging';
import {Configuration, PROJECT_CONFIG} from './settings';
import {exit} from 'process';
import {printStackDiff} from './diff';
import {deserializeStructure} from './serialize';
import {NetworkError} from './exception';

const rosClient = require('@alicloud/ros-2019-09-10');
const os = require('os');
const http = require('http');
const https = require('https');
const ossClient = require('ali-oss');

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

    public static async getConfig() {
        let modeType = await CdkToolkit.getJson(CONFIG_NAME, 'type', true)
        let endpoint = await CdkToolkit.getJson(CONFIG_NAME, 'endpoint', true)
        let regionId = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true)
        let configInfo: any;
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
        }

        return {
            endpoint: endpoint,
            accessKeyId: newAccessKeyId,
            accessKeySecret: newAccessKeySecret,
            securityToken: newSecurityToken,
            regionId: regionId
        }
    }

    public async getRosClient() {
        const config = await CdkToolkit.getConfig();
        let client;
        if (!config.accessKeyId || !config.accessKeySecret) {
            error("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
            exit(1);
        } else if (!config.securityToken) {
            client = new rosClient({
                endpoint: config.endpoint,
                accessKeyId: config.accessKeyId,
                accessKeySecret: config.accessKeySecret
            });
        } else {
            client = new rosClient({
                endpoint: config.endpoint,
                accessKeyId: config.accessKeyId,
                accessKeySecret: config.accessKeySecret,
                securityToken: config.securityToken
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
        let sourceModeType: string = '';
        let sourceEndpoint: string = '';
        let sourceRegionId: string = '';
        let sourceAccessKeyId: string = '';
        let sourceAccessKeySecret: string = '';
        let sourceSecurityToken: string = '';
        let sourceRoleArn: string = '';
        let sourceRoleSessionName: string = '';
        if (fs.existsSync(configSavePath)) {
            let configFile = JSON.parse(fs.readFileSync(configSavePath).toString());
            sourceModeType = configFile['type']
            sourceEndpoint = configFile['endpoint']
            sourceRegionId = configFile['regionId']
            sourceAccessKeyId = configFile['accessKeyId']
            sourceAccessKeySecret = configFile['accessKeySecret']
            sourceSecurityToken = configFile['securityToken']
            sourceRoleArn = configFile['roleArn']
            sourceRoleSessionName = configFile['roleSessionName']
        }
        let modeTypeObj = {
            ecs_ram_role: 'EcsRamRole',
            sts: 'StsToken',
            ram_role_arn: 'RamRoleArn',
            access_key: 'AK'
        }
        // @ts-ignore
        let defaultModeType = sourceModeType ? modeTypeObj[sourceModeType] : ''
        let defaultEndpoint = sourceEndpoint ? sourceEndpoint : 'https://ros.aliyuncs.com'
        let defaultRegionId = sourceRegionId ? sourceRegionId : 'cn-hangzhou'
        let modeType = ['AK', 'StsToken', 'RamRoleArn', 'EcsRamRole']


        let endpoint = readlineSync.question(`Endpoint(optional, [${defaultEndpoint.toString()}]):`, {defaultInput: defaultEndpoint});
        let regionId = readlineSync.question(`RegionId(optional, [${defaultRegionId.toString()}]):`, {defaultInput: defaultRegionId});
        let modeIndex = readlineSync.keyInSelect(modeType, `Authenticate mode [${defaultModeType.toString()}]:`);
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
            let roleName = readlineSync.question(`RoleName, The configured role of the host: [${curlStdout.trim()}]`, {defaultInput: curlStdout.trim()});
            inputConfigInfo = {
                type: 'ecs_ram_role',
                roleName: roleName
            };
        } else if (modeType[modeIndex] === 'StsToken') {
            let accessKeyId: string;
            let accessKeySecret: string;
            let securityToken: string;
            if (sourceModeType === 'sts') {
                let defaultAccessKeyId = desensitization(await decipher(sourceAccessKeyId.toString()))
                let defaultAccessKeySecret = desensitization(await decipher(sourceAccessKeySecret.toString()))
                let defaultSecurityToken = desensitization(await decipher(sourceSecurityToken.toString()))
                accessKeyId = readlineSync.question(`AccessKeyId [${defaultAccessKeyId}]:`, {
                    hideEchoBack: true,
                    defaultInput: await decipher(sourceAccessKeyId.toString())
                });
                accessKeySecret = readlineSync.question(`AccessKeySecret [${defaultAccessKeySecret}]:`, {
                    hideEchoBack: true,
                    defaultInput: await decipher(sourceAccessKeySecret.toString())
                });
                securityToken = readlineSync.question(`SecurityToken [${defaultSecurityToken}]:`, {
                    hideEchoBack: true,
                    defaultInput: await decipher(sourceSecurityToken.toString())
                });
            } else {
                accessKeyId = readlineSync.question('AccessKeyId:', {hideEchoBack: true});
                accessKeySecret = readlineSync.question('AccessKeySecret:', {hideEchoBack: true});
                securityToken = readlineSync.question('SecurityToken:', {hideEchoBack: true});
            }
            inputConfigInfo = {
                type: 'sts',
                accessKeyId: await cipher(accessKeyId),
                accessKeySecret: await cipher(accessKeySecret),
                securityToken: await cipher(securityToken)
            };
        } else if (modeType[modeIndex] === 'RamRoleArn') {
            let accessKeyId: string;
            let accessKeySecret: string;
            let roleArn: string;
            let roleSessionName: string;
            if (sourceModeType === 'ram_role_arn') {
                let defaultAccessKeyId = desensitization(await decipher(sourceAccessKeyId.toString()))
                let defaultAccessKeySecret = desensitization(await decipher(sourceAccessKeySecret.toString()))
                let defaultRoleArn = sourceRoleArn.toString()
                let defaultRoleSessionName = sourceRoleSessionName.toString()
                accessKeyId = readlineSync.question(`AccessKeyId [${defaultAccessKeyId}]:`, {
                    hideEchoBack: true,
                    defaultInput: await decipher(sourceAccessKeyId.toString())
                });
                accessKeySecret = readlineSync.question(`AccessKeySecret [${defaultAccessKeySecret}]:`, {
                    hideEchoBack: true,
                    defaultInput: await decipher(sourceAccessKeySecret.toString())
                });
                roleArn = readlineSync.question(`RoleArn [${defaultRoleArn}]:`, {
                    defaultInput: defaultRoleArn
                });
                roleSessionName = readlineSync.question(`RoleSessionName [${defaultRoleSessionName}]:`,
                    {
                        defaultInput: defaultRoleSessionName
                    });
            } else {
                accessKeyId = readlineSync.question('AccessKeyId:', {hideEchoBack: true});
                accessKeySecret = readlineSync.question('AccessKeySecret:', {hideEchoBack: true});
                roleArn = readlineSync.question('RoleArn(eg: acs:ram::******:role/******):');
                roleSessionName = readlineSync.question('RoleSessionName:');
            }
            inputConfigInfo = {
                type: 'ram_role_arn',
                accessKeyId: await cipher(accessKeyId),
                accessKeySecret: await cipher(accessKeySecret),
                roleArn: roleArn,
                roleSessionName: roleSessionName
            };
        } else if (modeType[modeIndex] === 'AK') {
            let accessKeyId: string;
            let accessKeySecret: string;
            if (sourceModeType === 'access_key') {
                let defaultAccessKeyId = desensitization(await decipher(sourceAccessKeyId.toString()))
                let defaultAccessKeySecret = desensitization(await decipher(sourceAccessKeySecret.toString()))
                accessKeyId = readlineSync.question(`AccessKeyId [${defaultAccessKeyId}]:`, {
                    hideEchoBack: true,
                    defaultInput: await decipher(sourceAccessKeyId.toString())
                });
                accessKeySecret = readlineSync.question(`AccessKeySecret [${defaultAccessKeySecret}]:`, {
                    hideEchoBack: true,
                    defaultInput: await decipher(sourceAccessKeySecret.toString())
                });
            } else {
                accessKeyId = readlineSync.question('AccessKeyId:', {hideEchoBack: true});
                accessKeySecret = readlineSync.question('AccessKeySecret:', {hideEchoBack: true});
            }
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
        const stacks = await this.selectAllStacksForDefault(selectors);
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
            await this.updateStackInfo(stacks.firstStack.id, SYNTH_STACK, undefined);
            return stacks.firstStack.template;
        } else {
            for (let stack of stacks.stackArtifacts) {
                await this.updateStackInfo(stack.id, SYNTH_STACK, undefined);
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

    public async publishAssets(assetsJson: { [key: string]: any }, outdir: string) {
        const files = assetsJson['files'];
        const filesNum = Object.keys(files).length;
        if (filesNum === 0) {
            return;
        }
        if (filesNum === 1) {
            const fileKey = Object.keys(files)[0];
            const file = files[fileKey];
            if (file.source && file.source.path.endsWith('.template.json')) {
                return;
            }
        }
        const config = await CdkToolkit.getConfig();
        let client_params;
        if (!config.accessKeyId || !config.accessKeySecret) {
            error("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
            exit(1);
        } else if (!config.securityToken) {
            client_params = {
                region: `oss-${config.regionId}`,
                accessKeyId: config.accessKeyId,
                accessKeySecret: config.accessKeySecret
            };
        } else {
            client_params = {
                region: `oss-${config.regionId}`,
                accessKeyId: config.accessKeyId,
                accessKeySecret: config.accessKeySecret,
                securityToken: config.securityToken
            };
        }
        const client = new ossClient(client_params);
        let bucketName;
        let bucketExists = false;

        const options = {
            storageClass: 'Standard',
            acl: 'private',
            dataRedundancyType: 'LRS'
        }

        const readFiles = (folder: string, zip: jszip) => {
            const zipFiles = fs.readdirSync(folder);
            zipFiles.forEach((file) => {
                const filePath = path.join(folder, file);
                if (fs.statSync(filePath).isDirectory()) {
                    const subZip = zip.folder(file);
                    if (subZip) {
                        readFiles(filePath, subZip);
                    }
                } else {
                    const content = fs.readFileSync(filePath);
                    zip.file(file, content);
                }
            });
        };

        for (const key of Object.keys(files)) {
            const source = files[key]['source'];
            const destination = files[key]['destinations'];
            let assetPath = path.join(outdir, source['path'])
            const objectKey = destination['current_account-current_region']['objectKey'];
            if (source['packaging'] === 'zip') {
                const zip = new jszip();
                readFiles(assetPath, zip);
                assetPath = path.join(outdir, `${source['path']}.zip`)
                await zip.generateAsync({ type: 'nodebuffer' }).then((content) => {
                    fs.writeFileSync(assetPath, content);
                    console.log('Folder compressed successfully!');
                }).catch((e) => {
                    error('Error compressing folder:\n', e);
                });
            }

            if (!bucketExists) {
                bucketName = destination['current_account-current_region']['bucketName'].replace('${ALIYUN::Region}', config.regionId);
                try {
                    await client.putBucket(bucketName, options);
                    bucketExists = true;
                    console.log(`Create bucket(${bucketName}) successfully!`);
                } catch (e) {
                    error(`Error create bucket(${bucketName}):\n`, e);
                    exit(1);
                }
            }

            const store = new ossClient({bucket: bucketName, ...client_params});

            const headers = {
                'x-oss-storage-class': 'Standard',
                'x-oss-object-acl': 'private',
                'x-oss-forbid-overwrite': 'false'
            };

            try {
                await store.put(objectKey, path.normalize(assetPath), headers)
                console.log(`Upload file(${assetPath}) to bucket(${bucketName}) successfully!`);
            } catch (e) {
                error(`Error upload file(${assetPath}) to bucket(${bucketName}):\n`, e);
                exit(1);
            }
        }
        return bucketName;
    }

    public async deploy(options: DeployOptions) {
        let templateBody: any;
        let sync = options.sync
        let outputs = options.outputsFile
        let skipIfNoChanges = options.skipIfNoChanges
        let resourceGroupId = options.resourceGroupId
        let detailLog = options.detailLog
        let disableRollback = options.disableRollback
        let config_region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        config_region = config_region ? config_region : process.env.REGION_ID;

        await this.syncStackInfo();
        const stacks = await this.selectStacksForDeploy(options.stackNames, options.exclusively);
        const client = await this.getRosClient();
        let exitSignal = 0;
        const outdir = this.props.configuration.settings.get(['output'])
        for (let stack of stacks.stackArtifacts) {
            let stackName = stack.stackName;
            let regionId = options.regionId;
            if (regionId === 'default') {
                regionId = config_region;
            }
            let bucketName;
            const assetsJsonFilePath = path.join(outdir, `${stackName}.assets.json`)
            if (fs.existsSync(assetsJsonFilePath)) {
                let assetsFileBody = fs.readFileSync(assetsJsonFilePath);
                let assetsJson = JSON.parse(assetsFileBody.toString('utf-8').trim());
                bucketName = await this.publishAssets(assetsJson, outdir);
            }
            const templateJsonFilePath = path.join(outdir, `${stackName}.template.json`)
            let templateFileBody = fs.readFileSync(templateJsonFilePath);
            let ClientToken = generateSafeId();
            let templateBodyBase64Data = templateFileBody.toString('base64').trim();
            let tmpSignal = 0;
            if (Buffer.byteLength(templateFileBody, 'utf8') < 524273) {
                templateBody = `@Base64Encoded: ${templateBodyBase64Data}`
            } else {
                templateBody = templateFileBody
            }
            let content: { [name: string]: any } = {
                StackName: stackName.toString(),
                TimeoutInMinutes: options.timeout,
                TemplateBody: templateBody,
                ClientToken: ClientToken,
                DisableRollback: disableRollback
            };
            requestOptions['method'] = 'POST'

            if (resourceGroupId) {
                content['ResourceGroupId'] = resourceGroupId
            }

            if (stack.tags) {
                let count: number = 1;
                let paras = stack.tags;
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
            if (localStackInfo.regionId) {
                regionId = localStackInfo.regionId
            }
            content['RegionId'] = regionId
            if (localStackInfo.stackId) {
                const stackInfo = await this.getStackByName(stackName, undefined, regionId)
                if (stackInfo !== null) {
                    // update stack
                    if (localStackInfo.stackId !== stackInfo.StackId) {
                        error(`❌ Fail to update stack, because the locally recorded stackId(${localStackInfo.stackId}) and the remote stackId(${stackInfo.StackId}) are inconsistent.`)
                        tmpSignal = 1;
                    } else {
                        content['StackId'] = stackInfo.StackId;
                        let stackStatus = stackInfo.Status
                        let stackUpdateTime = stackInfo.UpdateTime ? stackInfo.UpdateTime : stackInfo.CreateTime
                        if (stackStatus.indexOf("IN_PROGRESS") == -1) {
                            try {
                                if (sync) {
                                    print('%s: deploying...', colors.bold(stackName));
                                }
                                tmpSignal = await this.rosUpdateStack(client, content, requestOptions, outputs, skipIfNoChanges, stackUpdateTime, detailLog, sync, stackName, bucketName)
                            } catch (e) {
                                tmpSignal = 1;
                            }
                        } else {
                            error('fail to update stack, because stack status is %s', stackStatus)
                            tmpSignal = 1;
                        }
                    }
                } else {
                    // create stack
                    try {
                        if (sync) {
                            print('%s: deploying...', colors.bold(stackName));
                        }
                        tmpSignal = await this.rosDeployStack(client, content, requestOptions, outputs, resourceGroupId, stackName, detailLog, sync, bucketName)
                    } catch (e) {
                        tmpSignal = 1;
                    }
                }
            } else {
                const stackInfo = await this.getStackByName(stackName, resourceGroupId, regionId)
                if (stackInfo !== null) {
                    // stack is exist send error message
                    error('Fail to create stack, because stack %s already exists in this region.', stackName)
                    tmpSignal = 1;
                } else {
                    // create stack
                    try {
                        if (sync) {
                            print('%s: deploying...', colors.bold(stackName));
                        }
                        tmpSignal = await this.rosDeployStack(client, content, requestOptions, outputs, resourceGroupId, stackName, detailLog, sync, bucketName)
                    } catch (e) {
                        tmpSignal = 1;
                    }
                }
            }
            exitSignal = exitSignal | tmpSignal;
            if (exitSignal == 1) {
                await this.deleteBucket(client, bucketName);
            }
        }
        exit(exitSignal)
    }

    public async diff(options: DiffOptions) {
        let stacks = await this.selectAllStacksForDefault(options.stackNames);
        const client = await this.getRosClient();
        let regionInLocal = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        regionInLocal = regionInLocal ? regionInLocal : process.env.REGION_ID;
        const stream = options.stream || process.stderr;
        const contextLines = options.contextLines || 3;
        let exitSignal = 0;
        let requests = [];
        for (let stack of stacks.stackArtifacts) {
            let stackInfo = await this.findStackInfo(stack.id);
            let regionId = stackInfo.regionId ? stackInfo.regionId : regionInLocal;
            if (!stackInfo.stackId) {
                stream.write(format('Stack %s has not been deployed or stack doesn\'t exist in the stack.info.json file \n', colors.bold(stack.displayName)));
                continue;
            }
            requests.push(client.getTemplate({RegionId: regionId, StackId: stackInfo.stackId}, requestOptions)
                .then((res: any) => {
                    const template = deserializeStructure(res.TemplateBody);
                    stream.write(format('Stack %s\n', colors.bold(stack.displayName)));
                    printStackDiff(template, stack, contextLines, stream);
                }, (ex: any) => {
                    if (ex.code == 'StackNotFound') {
                        warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to synth.`);
                        this.updateStackInfo(stack.id, SYNTH_STACK, undefined);
                    } else {
                        error('fail to get template: %s %s', ex.code, ex.message);
                    }
                    exitSignal = 1;
                }));
        }
        await Promise.all(requests)
        exit(exitSignal)
    }

    public async event(options: EventOptions) {
        await this.syncStackInfo();
        let stacks = await this.selectOnlySingleStackForDefault(options.stackNames);
        const stackNames = stacks.stackIds
        let exitSignal = 0;
        const client = await this.getRosClient();
        let LogicalResourceIds: string[] = [];
        if (options.logicalResourceId) {
            LogicalResourceIds.push(options.logicalResourceId)
        }
        let requests = [];
        for (let stackName of stackNames) {
            let stackInfo = await this.findStackInfo(stackName);
            let stackId = stackInfo.stackId
            let region = stackInfo.regionId;
            if (!region) {
                region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
                region = region ? region : process.env.REGION_ID;
            }
            if (!stackId) {
                error(`The stack id of the specific stack(${stackName}) doesn't exist in the stack.info.json file.`)
                exitSignal = 1;
                continue
            }
            requests.push(client
                .listStackEvents({
                    StackId: stackId,
                    RegionId: region,
                    LogicalResourceId: LogicalResourceIds,
                    PageSize: options.pageSize ? Number(options.pageSize) : 10,
                    PageNumber: options.pageNumber ? Number(options.pageNumber) : 1
                }, requestOptions)
                .then((res: any) => {
                    success(`\n ✅ The events of the stack %s are: \n %s \n`, colors.blue(stackName),
                        colors.blue(JSON.stringify(res.Events, null, "\t")));
                }, (ex: any) => {
                    if (ex.code == 'StackNotFound') {
                        warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                        this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                    } else {
                        error('fail to get stack events: %s %s', ex.code, ex.message)
                    }
                    exitSignal = 1;
                }));
        }
        await Promise.all(requests)
        exit(exitSignal);
    }

    public async output(options: OutPutOptions) {
        await this.syncStackInfo();
        let stacks = await this.selectAllStacksForDefault(options.stackNames);
        const stackNames = stacks.stackIds
        const client = await this.getRosClient();
        let exitSignal = 0;
        let requests = [];
        for (let stackName of stackNames) {
            let stackInfo = await this.findStackInfo(stackName);
            let stackId = stackInfo.stackId
            let region = stackInfo.regionId;
            if (!region) {
                region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
                region = region ? region : process.env.REGION_ID;
            }
            if (!stackId) {
                error(`The specific stack doesn't exist in the stack.info.json file, Please check the accuracy of the stack: %s!`, stackName)
                exitSignal = 1;
                continue
            }
            requests.push(client
                .getStack({
                    StackId: stackId,
                    RegionId: region
                }, requestOptions)
                .then((res: any) => {
                    success(`\n ✅ The outputs of the stack %s are: \n %s \n`, colors.blue(stackName),
                        colors.blue(JSON.stringify(res.Outputs, null, "\t")));
                }, (ex: any) => {
                    if (ex.code == 'StackNotFound') {
                        warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                        this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                    } else {
                        error('fail to get stack outputs: %s %s', ex.code, ex.message)
                    }
                    exitSignal = 1;
                }));
        }
        await Promise.all(requests)
        exit(exitSignal);
    }


    public async resource(options: ResourceOptions) {
        await this.syncStackInfo();
        let stacks = await this.selectAllStacksForDefault(options.stackNames);
        let stackNames: string[] = [];
        for (let stack of stacks.stackArtifacts) {
            if ((await this.findStackInfo(stack.id)).stackId) {
                stackNames.push(stack.id);
            } else {
                error(`The specific stack doesn't exist in the stack.info.json file, Please check the accuracy of the stack: %s!`, stack.id)
            }
        }
        const client = await this.getRosClient();
        let exitSignal = 0;
        let requests = [];
        for (let stackName of stackNames) {
            let stackInfo = await this.findStackInfo(stackName);
            let region = stackInfo.regionId;
            if (!region) {
                region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
                region = region ? region : process.env.REGION_ID;
            }
            requests.push(client
                .listStackResources({
                    StackId: (await this.findStackInfo(stackName)).stackId,
                    RegionId: region,
                }, requestOptions)
                .then((res: any) => {
                    success(`\n ✅ The list of resources in the stack %s is: \n %s \n`, colors.blue(stackName), colors.blue(JSON.stringify(res.Resources, null, "\t")));
                }, (ex: any) => {
                    if (ex.code == 'StackNotFound') {
                        warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                        this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                    } else {
                        error('fail to get stack resource: %s %s', ex.code, ex.message)
                    }
                    exitSignal = 1;
                }));
        }
        await Promise.all(requests)
        exit(exitSignal);
    }

    public async generateStackInfo(options: GenerateStackInfoOptions) {
        let filePath = path.join(LOCAL_PATH + STACK_INFO);
        let stacks = await this.selectAllStacksForDefault([]);
        let stackNames: string[] = [];
        let StackInfos: { [key: string]: any } = {};
        stackNames = stacks.stackIds
        for (let stackName of stackNames) {
            const stackInfo = await this.getStackByName(stackName, options.resourceGroupId, undefined)
            if (stackInfo !== null) {
                StackInfos[stackName] = {
                    status: DEPLOY_STACK,
                    stackId: stackInfo.StackId,
                    regionId: stackInfo.RegionId
                }
            } else {
                StackInfos[stackName] = {
                    status: INIT_STACK,
                    stackId: null,
                    regionId: null
                };
            }
        }
        fs.writeFileSync(filePath, JSON.stringify(StackInfos, null, '\t'));
        success(
            `\n ✅ The generate stack info has completed!`,
        );
        exit(0)
    }


    private async getStackByName(stackName: string, resourceGroupId: any, region: string | undefined) {
        const client = await this.getRosClient();
        if (!region) {
            region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
            region = region ? region : process.env.REGION_ID;
        }
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

    public async listStacks(options: ListStackOptions) {
        await this.syncStackInfo();
        const client = await this.getRosClient();
        let params: any = {};
        let region = options.region;
        params = {
            PageSize: options.pageSize ? Number(options.pageSize) : 10,
            PageNumber: options.pageNumber ? Number(options.pageNumber) : 1
        };
        if (options.resourceGroupId) {
            params.ResourceGroupId = options.resourceGroupId
        }
        let exitSignal = 0;
        let requests = [];
        if (!options.all) {
            let stacks = await this.selectAllStacksForDefault(options.stackNames);
            let regionMap: Map<string, string[]> = new Map<string, string[]>();
            for (const stack of stacks.stackArtifacts) {
                let stackInfo = await this.findStackInfo(stack.id);
                if (region && stackInfo.regionId !== region) {continue}
                if (regionMap.has(stackInfo.regionId)) {
                    regionMap.get(stackInfo.regionId)!.push(stack.id)
                } else {
                    regionMap.set(stackInfo.regionId, [stack.id])
                }
            }
            regionMap.forEach((stackNames, r) => {
                params.StackName = stackNames;
                params.RegionId = r;
                requests.push(client.listStacks(params, requestOptions)
                    .then((res: any) => {
                        success(`\n ✅ The Stacks list in ${r} is:\n ${colors.blue(JSON.stringify(res.Stacks, null, "\t"))} \n`);
                    }, (ex: any) => {
                        error('❌ Fail to list stacks in ${r}: %s %s', ex.code, ex.message)
                        exitSignal = 1;
                    }));
            })
        } else {
            if (!region) {
                let config_region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
                region = config_region ? config_region : process.env.REGION_ID;
            }
            params.RegionId = region;
            requests.push(client.listStacks(params, requestOptions)
                .then((res: any) => {
                    success(`\n ✅ The Stacks list in ${region} is:\n ${colors.blue(JSON.stringify(res.Stacks, null, "\t"))} \n`);
                }, (ex: any) => {
                    error('❌ Fail to list stacks in %s: %s %s', region, ex.code, ex.message)
                    exitSignal = 1;
                }));
        }
        await Promise.all(requests)
        exit(exitSignal);
    }


    public async handleDel(client: any, name: string) {
        try {
            await client.delete(name);
        } catch (error) {
            return error;
        }
    }

// 删除多个文件。
    public async deleteProjects(client: any) {
        let list = await client.list();

        list.objects = list.objects || [];

        while (list.objects.length > 0) {
            await Promise.all(list.objects.map((v: any) => this.handleDel(client, v.name)));

            list = await client.list();
            list.objects = list.objects || [];
        }
    }

    public async deleteBucket(client: any, bucketName: string) {
        try {
            // 指定存储空间名称。
            await this.deleteProjects(client);
            await client.deleteBucket(bucketName);
            console.log(`Delete bucket(${bucketName}) successfully!`);
        } catch (err) {
            if (err.code === 'NoSuchBucket') {
                return
            }
            error(err);
        }
    }

    public async destroy(options: DestroyOptions) {
        await this.syncStackInfo();
        let stacks = await this.selectAllStacksForDefault(options.stackNames);
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
        let config_region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        config_region = config_region ? config_region : process.env.REGION_ID;
        const client = await this.getRosClient();
        let exitSignal = 0;
        for (let stackName of stackNames) {
            let stackInfo = await this.findStackInfo(stackName);
            const bucketName = stackInfo.assetAssociatedBucketName;
            let content: { [name: string]: any } = {
                StackId: stackInfo.stackId,
                RegionId: stackInfo.regionId ? stackInfo.regionId : config_region,
            };
            if (sync) {
                print('%s: destroying...', colors.bold(stackName));
                exitSignal = await this.syncDestroyStack(client, content, requestOptions)
            } else {
                await client.deleteStack(content, requestOptions)
                    .then((res: any) => {
                        this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                        success(`\n ✅ Delete the stack(${stackName}) successfully!\nRequestedId: %s`, colors.blue(res.RequestId));
                    }, (ex: any) => {
                        if (ex.code == 'StackNotFound') {
                            warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                            this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                        } else {
                            error('fail to delete stack: %s %s', ex.code, ex.message)
                            exitSignal = 1;
                        }
                    });
            }
            if (bucketName !== undefined && bucketName !== null && bucketName !== '') {
                const config = await CdkToolkit.getConfig();
                let client;
                if (!config.accessKeyId || !config.accessKeySecret) {
                    error("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
                    exit(1);
                } else if (!config.securityToken) {
                    client = new ossClient({
                        region: `oss-${config.regionId}`,
                        accessKeyId: config.accessKeyId,
                        accessKeySecret: config.accessKeySecret,
                        bucket: stackInfo.assetAssociatedBucketName
                    });
                } else {
                    client = new ossClient({
                        region: `oss-${config.regionId}`,
                        accessKeyId: config.accessKeyId,
                        accessKeySecret: config.accessKeySecret,
                        securityToken: config.securityToken,
                        bucket: stackInfo.assetAssociatedBucketName
                    });
                }
                await this.deleteBucket(client, bucketName);
            }
        }
        exit(exitSignal);
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
        const stacks = await this.selectAllStacksForDefault([]);
        for (const stack of stacks.stackArtifacts) {
            let value = await CdkToolkit.getJson(STACK_INFO, stack.id);
            // if the stack has no info, then add init tag for it
            if (value) {
                temp[stack.id] = value;
            } else {
                temp[stack.id] = {
                    status: INIT_STACK,
                    stackId: null,
                    regionId: null
                };
            }
        }

        fs.writeFileSync(filePath, JSON.stringify(temp, null, '\t'));
    }

    private async updateStackInfo(stackName: string, value: string, regionId: string|undefined, bucketName?: string,
                                  status?: string) {
        let filePath = path.join(LOCAL_PATH + STACK_INFO);
        let fileContent = fs.readFileSync(filePath).toString();
        let info = JSON.parse(fileContent);
        let stackInfo = info[stackName];
        if (!stackInfo) {
            stackInfo = info[stackName] = {};
        }
        if (value.length === DEPLOY_STACK_ID_LENGTH) {
            stackInfo.status = status?? DEPLOY_STACK;
            stackInfo.stackId = value;
            stackInfo.regionId = regionId;
            stackInfo.assetAssociatedBucketName = bucketName;
        } else {
            stackInfo.status = value;
            if (value === DESTROY_STACK) {
                stackInfo.stackId = null;
                stackInfo.regionId = null;
                stackInfo.assetAssociatedBucketName = null;
            }
        }
        fs.writeFileSync(filePath, JSON.stringify(info, null, '\t'));
    }

    private async findStackInfo(stackName: string) {
        let filePath = path.join(LOCAL_PATH + STACK_INFO);
        let fileContent = fs.readFileSync(filePath).toString();
        return JSON.parse(fileContent)[stackName];
    }


    private async selectAllStacksForDefault(stackNames: string[]) {
        const assembly = await this.assembly();
        const stacks = await assembly.selectStacks(stackNames, {
            defaultBehavior: DefaultSelection.AllStacks,
        });

        // No validation

        return stacks;
    }

    private async selectOnlySingleStackForDefault(stackNames: string[]) {
        const assembly = await this.assembly();
        const stacks = await assembly.selectStacks(stackNames, {
            defaultBehavior: DefaultSelection.OnlySingle,
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

    private async rosDeployStack(client: any, content: any, requestOptions: any, outputsFile: boolean,
                                 resourceGroupId: any, stackName: any, detailLog: boolean, sync: boolean,
                                 bucketName?: string) {
        const stackOutputs: { [key: string]: any } = {};
        let sleepTime = 0;
        let stackId: any;
        for (let i = 0; i < 10; i++) {
            try {
                let createStackResult = await client.createStack(content, requestOptions)
                stackId = createStackResult.StackId;
                break;
            } catch (e) {
                if (detailLog) {
                    error(`The ${i}th deployment attempt failed, as detailed in ${e}`);
                }
                if (!e.data || !("RequestId" in e.data) || e.code === 'ServiceUnavailable') {
                    if (sleepTime < 20000) {
                        sleepTime = sleepTime + 5000;
                    }
                    await sleep(sleepTime);
                } else if (e.code === 'LastTokenProcessing') {
                    const newStackIdInfo = await this.getStackByName(stackName, resourceGroupId, content['RegionId'])
                    if (newStackIdInfo) {
                        stackId = newStackIdInfo.StackId;
                    }
                    break
                } else {
                    error('❌ Fail to create stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s',
                        e.code, e.data["RequestId"], e.message)
                    throw e;
                }
            }
        }

        if (!stackId) {
            error('❌ Fail to create stack, please check your service endpoint.')
            throw new NetworkError('An unknown network error occurs, please check the endpoint and try again later.');
        }

        if (sync) {
            const block = new RewritableBlock(stream);
            withDefaultPrinterObj = setInterval(async function () {
                await CdkToolkit.withDefaultPrinter(client, content, requestOptions, stackId, block, 'deploy')
            }, 5000);
            while (true) {
                try {
                    await sleep(1000)
                    let params = {
                        RegionId: content['RegionId'],
                        StackId: stackId
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
                        await CdkToolkit.withDefaultPrinter(client, content, requestOptions, stackId, block, 'deploy')
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
                        if (status.toString() == 'CREATE_COMPLETE') {
                            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName);
                            success(
                                `\n ✅ The deployment(sync create stack) has completed!\nStatus: %s\nStatusReason: %s\nStackId: %s`,
                                colors.blue(status),
                                colors.blue(statusReason),
                                colors.blue(stackId)
                            );
                            return 0;
                        } else {
                            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName, status.toString());
                            error(`\n❌ Fail to sync create stack:\nStatus: %s\nStatusReason: %s\nStackId: %s`,
                                colors.blue(status),
                                colors.blue(statusReason),
                                colors.blue(stackId)
                            );
                            return 1;
                        }
                    }
                } catch (e) {
                    if (detailLog) {
                        error('An error occurs trying to get the resource stack details: %s', e);
                    }
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000)
                    } else {
                        error('❌ Fail to sync create stack: ErrorCode: %s\nErrorMessage:%s', e.code, e.message)
                        clearInterval(withDefaultPrinterObj);
                        throw e;
                    }
                }
            }
        } else {
            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName);
            success(
                `\n ✅ The deployment(create stack) has completed!\nStackId: %s`,
                colors.blue(stackId)
            );
            return 0;
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


    private async rosUpdateStack(client: any, content: any, requestOptions: any, outputsFile: boolean,
                                 skipIfNoChanges: boolean, stackUpdateTime: any, detailLog: boolean, sync: boolean,
                                 stackName: string, bucketName?: string) {
        let sleepTime = 0;
        const stackId = content['StackId'];
        for (let i = 0; i < 10; i++) {
            try {
                await client.updateStack(content, requestOptions)
                break;
            } catch (e) {
                if (detailLog) {
                    error(`The ${i}th update attempt failed, as detailed in ${e}`);
                }
                if (!e.data || !("RequestId" in e.data) || e.code === 'ServiceUnavailable') {
                    if (sleepTime < 20000) {
                        sleepTime = sleepTime + 5000;
                    }
                    await sleep(sleepTime);
                } else if (e.code === 'LastTokenProcessing') {
                    break
                } else if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack')
                    && (skipIfNoChanges || bucketName !== undefined)) {
                    success('The stack is completely the same, there is no need to update.')
                    return 0
                } else {
                    error('❌ Fail to update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s',
                        e.code, e.data["RequestId"], e.message)
                    throw e;
                }
            }
        }

        if (sync) {
            let params = {
                RegionId: content['RegionId'],
                StackId: stackId
            };
            const stackOutputs: { [key: string]: any } = {};
            // Wait for the stack state to change after updating it
            await sleep(5000);
            const block = new RewritableBlock(stream);
            withDefaultPrinterObj = setInterval(async function () {
                await CdkToolkit.withDefaultPrinter(client, content, requestOptions, stackId, block, 'update')
            }, 5000);
            while (true) {
                try {
                    await sleep(1000)
                    const getNewStackResult = await client.getStack(params, requestOptions)
                    const status = getNewStackResult.Status
                    const statusReason = getNewStackResult.StatusReason
                    const outputs = getNewStackResult.Outputs
                    const newUpdateTime = getNewStackResult.UpdateTime ? getNewStackResult.UpdateTime : ""
                    if (newUpdateTime == stackUpdateTime) {
                        // stack update in progress or update did not begin
                        continue
                    }
                    const regComplete = RegExp(/COMPLETE/)
                    const regFailed = RegExp(/FAILED/)
                    if (regComplete.exec(status) || regFailed.exec(status)) {
                        clearInterval(withDefaultPrinterObj);
                        await CdkToolkit.withDefaultPrinter(client, content, requestOptions, stackId, block, 'update')
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
                        if (status.toString() == 'UPDATE_COMPLETE') {
                            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName);
                            success(
                                `\n ✅ The deployment(sync update stack) has completed!\nStatus: %s\nStatusReason: %s\nStackId: %s`,
                                colors.blue(status),
                                colors.blue(statusReason),
                                colors.blue(stackId)
                            );
                            return 0;
                        } else {
                            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName, status.toString());
                            error(`\n❌ Fail to sync update stack:\nStatus: %s\nStatusReason: %s\nStackId: %s`,
                                colors.blue(status),
                                colors.blue(statusReason),
                                colors.blue(stackId)
                            );
                            return 1;
                        }
                    }
                } catch (e) {
                    if (detailLog) {
                        error('An error occurs trying to get the resource stack details: %s', e);
                    }
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000)
                    } else {
                        error('❌ Fail to sync update stack: ErrorCode: %s\nErrorMessage:%s', e.code, e.message)
                        clearInterval(withDefaultPrinterObj);
                        throw e;
                    }
                }
            }
        } else {
            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName);
            success(
                `\n ✅ The deployment(update stack) has completed!\nStackId: %s`,
                colors.blue(stackId),
            );
            return 0;
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
                        await this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                        if (regComplete.exec(status)) {
                            return 0
                        } else {
                            return 1
                        }
                    }
                } catch (e) {
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000)
                    } else {
                        error('fail to sync destroy stack: %s %s', e.code, e.message)
                        clearInterval(withDefaultPrinterObj);
                        return 1
                    }
                }
            }
        } catch (e) {
            error('fail to sync destroy stack: %s %s', e.code, e.message)
            clearInterval(withDefaultPrinterObj);
            return 1
        }
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
    regionId: string;
    outputsFile: boolean;
    skipIfNoChanges: boolean;
    disableRollback: boolean;
    resourceGroupId: string;
    detailLog: boolean;
}

export interface DestroyOptions {
    stackNames: string[];
    quiet?: boolean;
    sync: boolean;
}

export interface EventOptions {
    stackNames: string[];
    logicalResourceId: string;
    pageNumber: string;
    pageSize: string;
}

export interface OutPutOptions {
    stackNames: string[];
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
    region: string;
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

export function desensitization(inputString: string, mixLength = 3) {
    // mixLength 字符串少于一定值则脱敏全部，增加脱敏位数
    if (isString(inputString) || isNumber(inputString)) {
        const str = String(inputString);
        if (str.length <= mixLength) {
            return '*'.repeat(mixLength);
        }
        const len = str.length;
        const firstStr = str.substr(0, str.length / mixLength);
        const lastStr = str.substr(-str.length / mixLength);
        const middleStr = str
            .substring(str.length / mixLength, len - Math.abs(-str.length / mixLength))
            .replace(/[\s\S]/gi, '*');
        return firstStr + middleStr + lastStr;
    }
    return '';
}