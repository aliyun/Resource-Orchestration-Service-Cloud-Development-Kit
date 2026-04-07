"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desensitization = exports.shorten = exports.padRight = exports.padLeft = exports.readLanguageInfo = exports.writeAndUpdateLanguageInfo = exports.CdkToolkit = void 0;
const colors = require("colors/safe");
const fs = require("fs");
const path = require("path");
const readlineSync = require("readline-sync");
const util = require("util");
const jszip = require("jszip");
const util_1 = require("util");
const cipher_1 = require("./util/cipher");
const display_1 = require("./util/display");
const lodash_1 = require("lodash");
const child_process_1 = require("child_process");
const credentials_1 = require("@alicloud/credentials");
const cloud_assembly_1 = require("./api/cloud-assembly");
const logging_1 = require("./logging");
const settings_1 = require("./settings");
const process_1 = require("process");
const diff_1 = require("./diff");
const serialize_1 = require("./serialize");
const exception_1 = require("./exception");
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
const exec = (0, util_1.promisify)(child_process_1.exec);
const requestOptions = {
    headers: {
        'User-Agent': "ROS-CLI-" + JSON.parse(fs.readFileSync(PACKAGE_JSON).toString())['version'] + "::" + readLanguageInfo()
    },
    timeout: 90000
};
const sleep = function (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
const stream = process.stdout;
let withDefaultPrinterObj;
/**
 * Toolkit logic
 *
 * The toolkit runs the `cloudExecutable` to obtain a cloud assembly
 *
 */
class CdkToolkit {
    static async getJson(fileName, key, allowedEmpty = false) {
        let filePath = LOCAL_PATH + fileName;
        if (fs.existsSync(filePath)) {
            let file = fs.readFileSync(filePath).toString();
            return JSON.parse(file)[key];
        }
        else if (fileName === STACK_INFO) {
            return undefined;
        }
        filePath = GLOBAL_PATH + fileName;
        if (fs.existsSync(filePath)) {
            let file = fs.readFileSync(filePath).toString();
            return JSON.parse(file)[key];
        }
        if (!allowedEmpty) {
            (0, logging_1.error)("Please use 'ros-cdk config (-g)' to set your account configuration firstly!");
            (0, process_1.exit)(1);
        }
        return null;
    }
    constructor(props) {
        this.props = props;
    }
    static async getConfig() {
        let modeType = await CdkToolkit.getJson(CONFIG_NAME, 'type', true);
        let endpoint = await CdkToolkit.getJson(CONFIG_NAME, 'endpoint', true);
        let regionId = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        let configInfo;
        switch (modeType) {
            case 'ecs_ram_role':
                configInfo = new credentials_1.Config({
                    type: 'ecs_ram_role',
                    roleName: await CdkToolkit.getJson(CONFIG_NAME, 'roleName')
                });
                break;
            case 'sts':
                configInfo = new credentials_1.Config({
                    type: 'sts',
                    accessKeyId: await (0, cipher_1.decipher)(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeyId')),
                    accessKeySecret: await (0, cipher_1.decipher)(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeySecret')),
                    securityToken: await (0, cipher_1.decipher)(await CdkToolkit.getJson(CONFIG_NAME, 'securityToken'))
                });
                break;
            case 'ram_role_arn':
                configInfo = new credentials_1.Config({
                    type: 'ram_role_arn',
                    accessKeyId: await (0, cipher_1.decipher)(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeyId')),
                    accessKeySecret: await (0, cipher_1.decipher)(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeySecret')),
                    roleArn: await CdkToolkit.getJson(CONFIG_NAME, 'roleArn'),
                    roleSessionName: await CdkToolkit.getJson(CONFIG_NAME, 'roleSessionName')
                });
                break;
            case 'access_key':
                configInfo = new credentials_1.Config({
                    type: 'access_key',
                    accessKeyId: await (0, cipher_1.decipher)(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeyId')),
                    accessKeySecret: await (0, cipher_1.decipher)(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeySecret'))
                });
                break;
        }
        endpoint = endpoint ? endpoint : 'https://ros.aliyuncs.com';
        let newAccessKeyId;
        let newAccessKeySecret;
        let newSecurityToken;
        // @ts-ignore
        newAccessKeyId = newAccessKeyId ? newAccessKeyId : process.env.ACCESS_KEY_ID;
        // @ts-ignore
        newAccessKeySecret = newAccessKeySecret ? newAccessKeySecret : process.env.ACCESS_KEY_SECRET;
        // @ts-ignore
        newSecurityToken = newSecurityToken ? newSecurityToken : process.env.SECURITY_TOKEN;
        if (configInfo) {
            try {
                const cred = new credentials_1.default(configInfo);
                newAccessKeyId = await cred.getAccessKeyId();
                newAccessKeySecret = await cred.getAccessKeySecret();
                newSecurityToken = await cred.getSecurityToken();
            }
            catch (e) {
                (0, logging_1.error)('WANRNING: Please check the accuracy of the credential information you import from CLI config!' + e.message);
                (0, process_1.exit)(1);
            }
        }
        if (!newAccessKeyId || !newAccessKeySecret) {
            (0, logging_1.error)("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
            (0, process_1.exit)(1);
        }
        return {
            endpoint: endpoint,
            accessKeyId: newAccessKeyId,
            accessKeySecret: newAccessKeySecret,
            securityToken: newSecurityToken,
            regionId: regionId
        };
    }
    async getRosClient() {
        const config = await CdkToolkit.getConfig();
        let client;
        if (!config.accessKeyId || !config.accessKeySecret) {
            (0, logging_1.error)("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
            (0, process_1.exit)(1);
        }
        else if (!config.securityToken) {
            client = new rosClient({
                endpoint: config.endpoint,
                accessKeyId: config.accessKeyId,
                accessKeySecret: config.accessKeySecret
            });
        }
        else {
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
    async config(global) {
        let configSavePath = (global ? GLOBAL_PATH : LOCAL_PATH) + CONFIG_NAME;
        let sourceModeType = '';
        let sourceEndpoint = '';
        let sourceRegionId = '';
        let sourceAccessKeyId = '';
        let sourceAccessKeySecret = '';
        let sourceSecurityToken = '';
        let sourceRoleArn = '';
        let sourceRoleSessionName = '';
        if (fs.existsSync(configSavePath)) {
            let configFile = JSON.parse(fs.readFileSync(configSavePath).toString());
            sourceModeType = configFile['type'];
            sourceEndpoint = configFile['endpoint'];
            sourceRegionId = configFile['regionId'];
            sourceAccessKeyId = configFile['accessKeyId'];
            sourceAccessKeySecret = configFile['accessKeySecret'];
            sourceSecurityToken = configFile['securityToken'];
            sourceRoleArn = configFile['roleArn'];
            sourceRoleSessionName = configFile['roleSessionName'];
        }
        let modeTypeObj = {
            ecs_ram_role: 'EcsRamRole',
            sts: 'StsToken',
            ram_role_arn: 'RamRoleArn',
            access_key: 'AK'
        };
        // @ts-ignore
        let defaultModeType = sourceModeType ? modeTypeObj[sourceModeType] : '';
        let defaultEndpoint = sourceEndpoint ? sourceEndpoint : 'https://ros.aliyuncs.com';
        let defaultRegionId = sourceRegionId ? sourceRegionId : 'cn-hangzhou';
        let modeType = ['AK', 'StsToken', 'RamRoleArn', 'EcsRamRole'];
        let endpoint = readlineSync.question(`Endpoint(optional, [${defaultEndpoint.toString()}]):`, { defaultInput: defaultEndpoint });
        let regionId = readlineSync.question(`RegionId(optional, [${defaultRegionId.toString()}]):`, { defaultInput: defaultRegionId });
        let modeIndex = readlineSync.keyInSelect(modeType, `Authenticate mode [${defaultModeType.toString()}]:`);
        let inputConfigInfo = {};
        let checkCommand;
        let curlCommand;
        if (modeType[modeIndex] === 'EcsRamRole') {
            if (process.platform === 'win32') {
                checkCommand = 'powershell -Command "(curl -URi http://100.100.100.200/latest/meta-data/Ram/security-credentials/).StatusCode"';
                curlCommand = 'powershell -Command "(curl -URi http://100.100.100.200/latest/meta-data/Ram/security-credentials/).Content"';
            }
            else {
                checkCommand = 'curl http://100.100.100.200/latest/meta-data/Ram/security-credentials/ -o /dev/null -s -w %{http_code}';
                curlCommand = 'curl http://100.100.100.200/latest/meta-data/Ram/security-credentials/';
            }
            try {
                const { stdout: checkStdout } = await exec(checkCommand);
                if (checkStdout.trim() !== '200') {
                    (0, logging_1.error)('WANRNING: If want to Use EcsRamRole config, Please bind EcsRamRole to the host.');
                    (0, process_1.exit)(1);
                }
            }
            catch (e) {
                (0, logging_1.error)('WANRNING: If want to Use EcsRamRole config, Please bind EcsRamRole to the host!' + e.message);
                (0, process_1.exit)(1);
            }
            const { stdout: curlStdout } = await exec(curlCommand);
            let roleName = readlineSync.question(`RoleName, The configured role of the host: [${curlStdout.trim()}]`, { defaultInput: curlStdout.trim() });
            inputConfigInfo = {
                type: 'ecs_ram_role',
                roleName: roleName
            };
        }
        else if (modeType[modeIndex] === 'StsToken') {
            let accessKeyId;
            let accessKeySecret;
            let securityToken;
            if (sourceModeType === 'sts') {
                let defaultAccessKeyId = desensitization(await (0, cipher_1.decipher)(sourceAccessKeyId.toString()));
                let defaultAccessKeySecret = desensitization(await (0, cipher_1.decipher)(sourceAccessKeySecret.toString()));
                let defaultSecurityToken = desensitization(await (0, cipher_1.decipher)(sourceSecurityToken.toString()));
                accessKeyId = readlineSync.question(`AccessKeyId [${defaultAccessKeyId}]:`, {
                    hideEchoBack: true,
                    defaultInput: await (0, cipher_1.decipher)(sourceAccessKeyId.toString())
                });
                accessKeySecret = readlineSync.question(`AccessKeySecret [${defaultAccessKeySecret}]:`, {
                    hideEchoBack: true,
                    defaultInput: await (0, cipher_1.decipher)(sourceAccessKeySecret.toString())
                });
                securityToken = readlineSync.question(`SecurityToken [${defaultSecurityToken}]:`, {
                    hideEchoBack: true,
                    defaultInput: await (0, cipher_1.decipher)(sourceSecurityToken.toString())
                });
            }
            else {
                accessKeyId = readlineSync.question('AccessKeyId:', { hideEchoBack: true });
                accessKeySecret = readlineSync.question('AccessKeySecret:', { hideEchoBack: true });
                securityToken = readlineSync.question('SecurityToken:', { hideEchoBack: true });
            }
            inputConfigInfo = {
                type: 'sts',
                accessKeyId: await (0, cipher_1.cipher)(accessKeyId),
                accessKeySecret: await (0, cipher_1.cipher)(accessKeySecret),
                securityToken: await (0, cipher_1.cipher)(securityToken)
            };
        }
        else if (modeType[modeIndex] === 'RamRoleArn') {
            let accessKeyId;
            let accessKeySecret;
            let roleArn;
            let roleSessionName;
            if (sourceModeType === 'ram_role_arn') {
                let defaultAccessKeyId = desensitization(await (0, cipher_1.decipher)(sourceAccessKeyId.toString()));
                let defaultAccessKeySecret = desensitization(await (0, cipher_1.decipher)(sourceAccessKeySecret.toString()));
                let defaultRoleArn = sourceRoleArn.toString();
                let defaultRoleSessionName = sourceRoleSessionName.toString();
                accessKeyId = readlineSync.question(`AccessKeyId [${defaultAccessKeyId}]:`, {
                    hideEchoBack: true,
                    defaultInput: await (0, cipher_1.decipher)(sourceAccessKeyId.toString())
                });
                accessKeySecret = readlineSync.question(`AccessKeySecret [${defaultAccessKeySecret}]:`, {
                    hideEchoBack: true,
                    defaultInput: await (0, cipher_1.decipher)(sourceAccessKeySecret.toString())
                });
                roleArn = readlineSync.question(`RoleArn [${defaultRoleArn}]:`, {
                    defaultInput: defaultRoleArn
                });
                roleSessionName = readlineSync.question(`RoleSessionName [${defaultRoleSessionName}]:`, {
                    defaultInput: defaultRoleSessionName
                });
            }
            else {
                accessKeyId = readlineSync.question('AccessKeyId:', { hideEchoBack: true });
                accessKeySecret = readlineSync.question('AccessKeySecret:', { hideEchoBack: true });
                roleArn = readlineSync.question('RoleArn(eg: acs:ram::******:role/******):');
                roleSessionName = readlineSync.question('RoleSessionName:');
            }
            inputConfigInfo = {
                type: 'ram_role_arn',
                accessKeyId: await (0, cipher_1.cipher)(accessKeyId),
                accessKeySecret: await (0, cipher_1.cipher)(accessKeySecret),
                roleArn: roleArn,
                roleSessionName: roleSessionName
            };
        }
        else if (modeType[modeIndex] === 'AK') {
            let accessKeyId;
            let accessKeySecret;
            if (sourceModeType === 'access_key') {
                let defaultAccessKeyId = desensitization(await (0, cipher_1.decipher)(sourceAccessKeyId.toString()));
                let defaultAccessKeySecret = desensitization(await (0, cipher_1.decipher)(sourceAccessKeySecret.toString()));
                accessKeyId = readlineSync.question(`AccessKeyId [${defaultAccessKeyId}]:`, {
                    hideEchoBack: true,
                    defaultInput: await (0, cipher_1.decipher)(sourceAccessKeyId.toString())
                });
                accessKeySecret = readlineSync.question(`AccessKeySecret [${defaultAccessKeySecret}]:`, {
                    hideEchoBack: true,
                    defaultInput: await (0, cipher_1.decipher)(sourceAccessKeySecret.toString())
                });
            }
            else {
                accessKeyId = readlineSync.question('AccessKeyId:', { hideEchoBack: true });
                accessKeySecret = readlineSync.question('AccessKeySecret:', { hideEchoBack: true });
            }
            inputConfigInfo = {
                type: 'access_key',
                accessKeyId: await (0, cipher_1.cipher)(accessKeyId),
                accessKeySecret: await (0, cipher_1.cipher)(accessKeySecret)
            };
        }
        else {
            (0, logging_1.error)('WANRNING: If want to deploy or delete stack, a certification method must be selected');
            (0, process_1.exit)(1);
        }
        inputConfigInfo.endpoint = endpoint;
        inputConfigInfo.regionId = regionId;
        let file = path.join(configSavePath);
        fs.writeFileSync(file, JSON.stringify(inputConfigInfo, null, '\t'));
        (0, logging_1.success)(`\n ✅ Your cdk configuration has been saved successfully!`);
        (0, process_1.exit)(0);
    }
    async configSet(options) {
        let configSavePath = (options.global ? GLOBAL_PATH : LOCAL_PATH) + CONFIG_NAME;
        let modeType = options.mode;
        let configInfo = {};
        let ak = options.ak ? options.ak : '';
        let sk = options.sk ? options.sk : '';
        let stsToken = options.sts ? options.sts : '';
        let ramRoleArn = options.ramRoleArn ? options.ramRoleArn : '';
        let roleSessionName = options.roleSessionName ? options.roleSessionName : '';
        let ramRoleName = options.ramRoleName ? options.ramRoleName : '';
        if (modeType === 'AK') {
            configInfo = {
                type: 'access_key',
                accessKeyId: await (0, cipher_1.cipher)(ak),
                accessKeySecret: await (0, cipher_1.cipher)(sk)
            };
        }
        else if (modeType === 'StsToken') {
            configInfo = {
                type: 'sts',
                accessKeyId: await (0, cipher_1.cipher)(ak),
                accessKeySecret: await (0, cipher_1.cipher)(sk),
                securityToken: await (0, cipher_1.cipher)(stsToken)
            };
        }
        else if (modeType === 'RamRoleArn') {
            configInfo = {
                type: 'ram_role_arn',
                accessKeyId: await (0, cipher_1.cipher)(ak),
                accessKeySecret: await (0, cipher_1.cipher)(sk),
                roleArn: ramRoleArn,
                roleSessionName: roleSessionName
            };
        }
        else if (modeType === 'EcsRamRole') {
            configInfo = {
                type: 'ecs_ram_role',
                roleName: ramRoleName
            };
        }
        else {
            (0, logging_1.error)('WANRNING: If want to deploy or delete stack, a authenticate mode must be in (AK|StsToken|RamRoleArn|EcsRamRole)');
            (0, process_1.exit)(1);
        }
        let file = path.join(configSavePath);
        configInfo.regionId = options.region;
        configInfo.endpoint = options.endpoint;
        fs.writeFileSync(file, JSON.stringify(configInfo, null, '\t'));
        (0, logging_1.success)(`\n ✅ Your cdk configuration has been saved successfully!`);
        (0, process_1.exit)(0);
    }
    async loadCliConfig(options) {
        let configSavePath = (options.global ? GLOBAL_PATH : LOCAL_PATH) + CONFIG_NAME;
        let configureInfos = await this.getCliConfig(options.loadFilePath);
        let modeType = Object.keys(configureInfos);
        let modeIndex = readlineSync.keyInSelect(modeType, 'Select authenticate mode:');
        let profileNames = [];
        let profileConfig = {};
        if (modeIndex === -1) {
            (0, logging_1.error)('WANRNING: If want to deploy or delete stack, a certification method must be selected');
            (0, process_1.exit)(1);
        }
        else if (modeType[modeIndex] === 'AK') {
            profileNames = configureInfos.AK.map((item) => item.name);
        }
        else if (modeType[modeIndex] === 'StsToken') {
            profileNames = configureInfos.StsToken.map((item) => item.name);
        }
        else if (modeType[modeIndex] === 'RamRoleArn') {
            profileNames = configureInfos.RamRoleArn.map((item) => item.name);
        }
        else if (modeType[modeIndex] === 'EcsRamRole') {
            profileNames = configureInfos.EcsRamRole.map((item) => item.name);
        }
        let profileIndex = readlineSync.keyInSelect(profileNames, 'Select Authenticate profile name:');
        if (profileIndex === -1) {
            (0, logging_1.error)('WANRNING: If want to deploy or delete stack, a certification profile must be selected');
            (0, process_1.exit)(1);
        }
        let endpoint = await CdkToolkit.getJson(CONFIG_NAME, 'endpoint', true);
        let regionId;
        let configInfo = {};
        endpoint = endpoint ? endpoint : 'https://ros.aliyuncs.com';
        switch (modeType[modeIndex]) {
            case 'AK':
                profileConfig = configureInfos.AK.find((profiles) => profiles.name === profileNames[profileIndex]);
                if (!profileConfig['accessKeyId'] || !profileConfig['accessKeySecret']) {
                    (0, logging_1.error)('WANRNING: If want to deploy or delete stack, accessKeyId or accessKeySecret Cannot be empty!');
                    (0, process_1.exit)(1);
                }
                configInfo = {
                    type: 'access_key',
                    accessKeyId: await (0, cipher_1.cipher)(profileConfig['accessKeyId']),
                    accessKeySecret: await (0, cipher_1.cipher)(profileConfig['accessKeySecret'])
                };
                break;
            case 'StsToken':
                profileConfig = configureInfos.StsToken.find((profiles) => profiles.name === profileNames[profileIndex]);
                if (!profileConfig['accessKeyId'] || !profileConfig['accessKeySecret'] || !profileConfig['securityToken']) {
                    (0, logging_1.error)('WANRNING: If want to deploy or delete stack, accessKeyId, accessKeySecret or securityToken Cannot be empty!');
                    (0, process_1.exit)(1);
                }
                configInfo = {
                    type: 'sts',
                    accessKeyId: await (0, cipher_1.cipher)(profileConfig['accessKeyId']),
                    accessKeySecret: await (0, cipher_1.cipher)(profileConfig['accessKeySecret']),
                    securityToken: await (0, cipher_1.cipher)(profileConfig['securityToken'])
                };
                break;
            case 'RamRoleArn':
                profileConfig = configureInfos.RamRoleArn.find((profiles) => profiles.name === profileNames[profileIndex]);
                if (!profileConfig['accessKeyId'] || !profileConfig['accessKeySecret'] || !profileConfig['roleArn'] || !profileConfig['roleSessionName']) {
                    (0, logging_1.error)('WANRNING: If want to deploy or delete stack, accessKeyId, accessKeySecret, roleArn or roleSessionName Cannot be empty!');
                    (0, process_1.exit)(1);
                }
                configInfo = {
                    type: 'ram_role_arn',
                    accessKeyId: await (0, cipher_1.cipher)(profileConfig['accessKeyId']),
                    accessKeySecret: await (0, cipher_1.cipher)(profileConfig['accessKeySecret']),
                    roleArn: profileConfig['roleArn'],
                    roleSessionName: profileConfig['roleSessionName']
                };
                break;
            case 'EcsRamRole':
                profileConfig = configureInfos.EcsRamRole.find((profiles) => profiles.name === profileNames[profileIndex]);
                if (!profileConfig['roleName']) {
                    (0, logging_1.error)('WANRNING: If want to deploy or delete stack, roleName Cannot be empty!');
                    (0, process_1.exit)(1);
                }
                configInfo = {
                    type: 'ecs_ram_role',
                    roleName: profileConfig['roleName']
                };
                break;
        }
        regionId = profileConfig['region'] ? profileConfig['region'] : 'cn-hangzhou';
        configInfo.regionId = regionId;
        configInfo.endpoint = endpoint;
        let file = path.join(configSavePath);
        fs.writeFileSync(file, JSON.stringify(configInfo, null, '\t'));
        (0, logging_1.success)(`\n ✅ Your cdk configuration has been load from Aliyun Cli configuration saved successfully %s %s!`, modeType[modeIndex], profileNames[profileIndex]);
        (0, process_1.exit)(0);
    }
    async list(selectors) {
        await this.syncStackInfo();
        const stacks = await this.selectAllStacksForDefault(selectors);
        for (const stack of stacks.stackArtifacts) {
            let stackInfo = await this.findStackInfo(stack.id);
            let status = stackInfo.status;
            (0, logging_1.data)(stack.id, status.toString());
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
    async synth(stackNames, exclusively) {
        await this.syncStackInfo();
        const stacks = await this.selectStacksForDiff(stackNames, exclusively);
        // if we have a single stack, print it to STDOUT
        if (stacks.stackCount === 1) {
            await this.updateStackInfo(stacks.firstStack.id, SYNTH_STACK, undefined);
            return stacks.firstStack.template;
        }
        else {
            for (let stack of stacks.stackArtifacts) {
                await this.updateStackInfo(stack.id, SYNTH_STACK, undefined);
            }
        }
        const isIntegMode = process.env.CDK_INTEG_MODE === '1';
        if (isIntegMode) {
            return stacks.stackArtifacts.map((s) => s.template);
        }
        // not outputting template to stdout, let's explain things to the user a little bit...
        (0, logging_1.success)(`Successfully synthesized to ${colors.blue(path.resolve(stacks.assembly.directory))}`);
        (0, logging_1.print)(`Supply a stack id (${stacks.stackArtifacts.map((s) => colors.green(s.id)).join(', ')}) to display its template.`);
        return undefined;
    }
    async publishAssets(assetsJson, outdir) {
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
            (0, logging_1.error)("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
            (0, process_1.exit)(1);
        }
        else if (!config.securityToken) {
            client_params = {
                region: `oss-${config.regionId}`,
                accessKeyId: config.accessKeyId,
                accessKeySecret: config.accessKeySecret
            };
        }
        else {
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
        };
        const readFiles = (folder, zip) => {
            const zipFiles = fs.readdirSync(folder);
            zipFiles.forEach((file) => {
                const filePath = path.join(folder, file);
                if (fs.statSync(filePath).isDirectory()) {
                    const subZip = zip.folder(file);
                    if (subZip) {
                        readFiles(filePath, subZip);
                    }
                }
                else {
                    const content = fs.readFileSync(filePath);
                    zip.file(file, content);
                }
            });
        };
        for (const key of Object.keys(files)) {
            const source = files[key]['source'];
            const destination = files[key]['destinations'];
            let assetPath = path.join(outdir, source['path']);
            const objectKey = destination['current_account-current_region']['objectKey'];
            if (source['packaging'] === 'zip') {
                const zip = new jszip();
                readFiles(assetPath, zip);
                assetPath = path.join(outdir, `${source['path']}.zip`);
                await zip.generateAsync({ type: 'nodebuffer' }).then((content) => {
                    fs.writeFileSync(assetPath, content);
                    console.log('Folder compressed successfully!');
                }).catch((e) => {
                    (0, logging_1.error)('Error compressing folder:\n', e);
                });
            }
            if (!bucketExists) {
                bucketName = destination['current_account-current_region']['bucketName'].replace('${ALIYUN::Region}', config.regionId);
                try {
                    await client.putBucket(bucketName, options);
                    bucketExists = true;
                    console.log(`Create bucket(${bucketName}) successfully!`);
                }
                catch (e) {
                    (0, logging_1.error)(`Error create bucket(${bucketName}):\n`, e);
                    (0, process_1.exit)(1);
                }
            }
            const store = new ossClient({ bucket: bucketName, ...client_params });
            const headers = {
                'x-oss-storage-class': 'Standard',
                'x-oss-object-acl': 'private',
                'x-oss-forbid-overwrite': 'false'
            };
            try {
                await store.put(objectKey, path.normalize(assetPath), headers);
                console.log(`Upload file(${assetPath}) to bucket(${bucketName}) successfully!`);
            }
            catch (e) {
                (0, logging_1.error)(`Error upload file(${assetPath}) to bucket(${bucketName}):\n`, e);
                (0, process_1.exit)(1);
            }
        }
        return bucketName;
    }
    async deploy(options) {
        let templateBody;
        let sync = options.sync;
        let outputs = options.outputsFile;
        let skipIfNoChanges = options.skipIfNoChanges;
        let resourceGroupId = options.resourceGroupId;
        let detailLog = options.detailLog;
        let disableRollback = options.disableRollback;
        let config_region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        config_region = config_region ? config_region : process.env.REGION_ID;
        await this.syncStackInfo();
        const stacks = await this.selectStacksForDeploy(options.stackNames, options.exclusively);
        const client = await this.getRosClient();
        let exitSignal = 0;
        const outdir = this.props.configuration.settings.get(['output']);
        for (let stack of stacks.stackArtifacts) {
            let stackName = stack.stackName;
            let regionId = options.regionId;
            if (regionId === 'default') {
                regionId = config_region;
            }
            let bucketName;
            const assetsJsonFilePath = path.join(outdir, `${stackName}.assets.json`);
            if (fs.existsSync(assetsJsonFilePath)) {
                let assetsFileBody = fs.readFileSync(assetsJsonFilePath);
                let assetsJson = JSON.parse(assetsFileBody.toString('utf-8').trim());
                bucketName = await this.publishAssets(assetsJson, outdir);
            }
            const templateJsonFilePath = path.join(outdir, `${stackName}.template.json`);
            let templateFileBody = fs.readFileSync(templateJsonFilePath);
            let ClientToken = generateSafeId();
            let templateBodyBase64Data = templateFileBody.toString('base64').trim();
            let tmpSignal = 0;
            if (Buffer.byteLength(templateFileBody, 'utf8') < 524273) {
                templateBody = `@Base64Encoded: ${templateBodyBase64Data}`;
            }
            else {
                templateBody = templateFileBody;
            }
            let content = {
                StackName: stackName.toString(),
                TimeoutInMinutes: options.timeout,
                TemplateBody: templateBody,
                ClientToken: ClientToken,
                DisableRollback: disableRollback
            };
            requestOptions['method'] = 'POST';
            if (resourceGroupId) {
                content['ResourceGroupId'] = resourceGroupId;
            }
            if (stack.tags) {
                let count = 1;
                let paras = stack.tags;
                for (let key in paras) {
                    content['Tags.' + count.toString() + '.Key'] = key;
                    content['Tags.' + count.toString() + '.Value'] = paras[key];
                    count++;
                }
            }
            if (options.parameters) {
                let count = 1;
                let paras = options.parameters;
                for (let key in paras) {
                    content['Parameters.' + count.toString() + '.ParameterKey'] = key;
                    content['Parameters.' + count.toString() + '.ParameterValue'] = paras[key];
                    count++;
                }
            }
            const localStackInfo = await this.findStackInfo(stackName);
            if (localStackInfo.regionId) {
                regionId = localStackInfo.regionId;
            }
            content['RegionId'] = regionId;
            if (localStackInfo.stackId) {
                const stackInfo = await this.getStackByName(stackName, resourceGroupId, regionId);
                if (stackInfo !== null) {
                    // update stack
                    if (localStackInfo.stackId !== stackInfo.StackId) {
                        (0, logging_1.error)(`❌ Fail to update stack, because the locally recorded stackId(${localStackInfo.stackId}) and the remote stackId(${stackInfo.StackId}) are inconsistent.`);
                        tmpSignal = 1;
                    }
                    else {
                        content['StackId'] = stackInfo.StackId;
                        let stackStatus = stackInfo.Status;
                        let stackUpdateTime = stackInfo.UpdateTime ? stackInfo.UpdateTime : stackInfo.CreateTime;
                        if (stackStatus.indexOf("IN_PROGRESS") == -1) {
                            try {
                                if (sync) {
                                    (0, logging_1.print)('%s: deploying...', colors.bold(stackName));
                                }
                                tmpSignal = await this.rosUpdateStack(client, content, requestOptions, outputs, skipIfNoChanges, stackUpdateTime, detailLog, sync, stackName, bucketName);
                            }
                            catch (e) {
                                tmpSignal = 1;
                            }
                        }
                        else {
                            (0, logging_1.error)('fail to update stack, because stack status is %s', stackStatus);
                            tmpSignal = 1;
                        }
                    }
                }
                else {
                    // create stack
                    try {
                        if (sync) {
                            (0, logging_1.print)('%s: deploying...', colors.bold(stackName));
                        }
                        tmpSignal = await this.rosDeployStack(client, content, requestOptions, outputs, resourceGroupId, stackName, detailLog, sync, bucketName);
                    }
                    catch (e) {
                        tmpSignal = 1;
                    }
                }
            }
            else {
                const stackInfo = await this.getStackByName(stackName, resourceGroupId, regionId);
                if (stackInfo !== null) {
                    // stack is exist send error message
                    (0, logging_1.error)('Fail to create stack, because stack %s already exists in this region.', stackName);
                    tmpSignal = 1;
                }
                else {
                    // create stack
                    try {
                        if (sync) {
                            (0, logging_1.print)('%s: deploying...', colors.bold(stackName));
                        }
                        tmpSignal = await this.rosDeployStack(client, content, requestOptions, outputs, resourceGroupId, stackName, detailLog, sync, bucketName);
                    }
                    catch (e) {
                        tmpSignal = 1;
                    }
                }
            }
            exitSignal = exitSignal | tmpSignal;
            if (exitSignal == 1 && bucketName !== undefined && bucketName !== null && bucketName !== '') {
                await this.deleteBucket(bucketName);
            }
        }
        (0, process_1.exit)(exitSignal);
    }
    async diff(options) {
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
                stream.write((0, util_1.format)('Stack %s has not been deployed or stack doesn\'t exist in the stack.info.json file \n', colors.bold(stack.displayName)));
                continue;
            }
            requests.push(client.getTemplate({ RegionId: regionId, StackId: stackInfo.stackId }, requestOptions)
                .then((res) => {
                const template = (0, serialize_1.deserializeStructure)(res.TemplateBody);
                stream.write((0, util_1.format)('Stack %s\n', colors.bold(stack.displayName)));
                (0, diff_1.printStackDiff)(template, stack, contextLines, stream);
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    (0, logging_1.warning)(`\n ❌ The specific stack doesn't exit and it's local status will be set to synth.`);
                    this.updateStackInfo(stack.id, SYNTH_STACK, undefined);
                }
                else {
                    (0, logging_1.error)('fail to get template: %s %s', ex.code, ex.message);
                }
                exitSignal = 1;
            }));
        }
        await Promise.all(requests);
        (0, process_1.exit)(exitSignal);
    }
    async event(options) {
        await this.syncStackInfo();
        let stacks = await this.selectOnlySingleStackForDefault(options.stackNames);
        const stackNames = stacks.stackIds;
        let exitSignal = 0;
        const client = await this.getRosClient();
        let LogicalResourceIds = [];
        if (options.logicalResourceId) {
            LogicalResourceIds.push(options.logicalResourceId);
        }
        let requests = [];
        for (let stackName of stackNames) {
            let stackInfo = await this.findStackInfo(stackName);
            let stackId = stackInfo.stackId;
            let region = stackInfo.regionId;
            if (!region) {
                region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
                region = region ? region : process.env.REGION_ID;
            }
            if (!stackId) {
                (0, logging_1.error)(`The stack id of the specific stack(${stackName}) doesn't exist in the stack.info.json file.`);
                exitSignal = 1;
                continue;
            }
            requests.push(client
                .listStackEvents({
                StackId: stackId,
                RegionId: region,
                LogicalResourceId: LogicalResourceIds,
                PageSize: options.pageSize ? Number(options.pageSize) : 10,
                PageNumber: options.pageNumber ? Number(options.pageNumber) : 1
            }, requestOptions)
                .then((res) => {
                (0, logging_1.success)(`\n ✅ The events of the stack %s are: \n %s \n`, colors.blue(stackName), colors.blue(JSON.stringify(res.Events, null, "\t")));
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    (0, logging_1.warning)(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                    this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                }
                else {
                    (0, logging_1.error)('fail to get stack events: %s %s', ex.code, ex.message);
                }
                exitSignal = 1;
            }));
        }
        await Promise.all(requests);
        (0, process_1.exit)(exitSignal);
    }
    async output(options) {
        await this.syncStackInfo();
        let stacks = await this.selectAllStacksForDefault(options.stackNames);
        const stackNames = stacks.stackIds;
        const client = await this.getRosClient();
        let exitSignal = 0;
        let requests = [];
        for (let stackName of stackNames) {
            let stackInfo = await this.findStackInfo(stackName);
            let stackId = stackInfo.stackId;
            let region = stackInfo.regionId;
            if (!region) {
                region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
                region = region ? region : process.env.REGION_ID;
            }
            if (!stackId) {
                (0, logging_1.error)(`The specific stack doesn't exist in the stack.info.json file, Please check the accuracy of the stack: %s!`, stackName);
                exitSignal = 1;
                continue;
            }
            requests.push(client
                .getStack({
                StackId: stackId,
                RegionId: region
            }, requestOptions)
                .then((res) => {
                (0, logging_1.success)(`\n ✅ The outputs of the stack %s are: \n %s \n`, colors.blue(stackName), colors.blue(JSON.stringify(res.Outputs, null, "\t")));
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    (0, logging_1.warning)(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                    this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                }
                else {
                    (0, logging_1.error)('fail to get stack outputs: %s %s', ex.code, ex.message);
                }
                exitSignal = 1;
            }));
        }
        await Promise.all(requests);
        (0, process_1.exit)(exitSignal);
    }
    async resource(options) {
        await this.syncStackInfo();
        let stacks = await this.selectAllStacksForDefault(options.stackNames);
        let stackNames = [];
        for (let stack of stacks.stackArtifacts) {
            if ((await this.findStackInfo(stack.id)).stackId) {
                stackNames.push(stack.id);
            }
            else {
                (0, logging_1.error)(`The specific stack doesn't exist in the stack.info.json file, Please check the accuracy of the stack: %s!`, stack.id);
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
                .then((res) => {
                (0, logging_1.success)(`\n ✅ The list of resources in the stack %s is: \n %s \n`, colors.blue(stackName), colors.blue(JSON.stringify(res.Resources, null, "\t")));
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    (0, logging_1.warning)(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                    this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                }
                else {
                    (0, logging_1.error)('fail to get stack resource: %s %s', ex.code, ex.message);
                }
                exitSignal = 1;
            }));
        }
        await Promise.all(requests);
        (0, process_1.exit)(exitSignal);
    }
    async generateStackInfo(options) {
        let filePath = path.join(LOCAL_PATH + STACK_INFO);
        let stacks = await this.selectAllStacksForDefault([]);
        let stackNames = [];
        let StackInfos = {};
        stackNames = stacks.stackIds;
        for (let stackName of stackNames) {
            const stackInfo = await this.getStackByName(stackName, options.resourceGroupId, undefined);
            if (stackInfo !== null) {
                StackInfos[stackName] = {
                    status: DEPLOY_STACK,
                    stackId: stackInfo.StackId,
                    regionId: stackInfo.RegionId
                };
            }
            else {
                StackInfos[stackName] = {
                    status: INIT_STACK,
                    stackId: null,
                    regionId: null
                };
            }
        }
        fs.writeFileSync(filePath, JSON.stringify(StackInfos, null, '\t'));
        (0, logging_1.success)(`\n ✅ The generate stack info has completed!`);
        (0, process_1.exit)(0);
    }
    async getStackByName(stackName, resourceGroupId, region) {
        const client = await this.getRosClient();
        if (!region) {
            region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
            region = region ? region : process.env.REGION_ID;
        }
        let params = {
            RegionId: region,
            PageSize: 10,
            PageNumber: 1,
            StackName: [stackName]
        };
        if (resourceGroupId) {
            params['ResourceGroupId'] = resourceGroupId;
        }
        try {
            const result = await client.listStacks(params, requestOptions);
            if (result.Stacks[0]) {
                return result.Stacks[0];
            }
            else {
                return null;
            }
        }
        catch (err) {
            (0, logging_1.error)(err);
            return null;
        }
    }
    async listStacks(options) {
        await this.syncStackInfo();
        const client = await this.getRosClient();
        let params = {};
        let region = options.region;
        params = {
            PageSize: options.pageSize ? Number(options.pageSize) : 10,
            PageNumber: options.pageNumber ? Number(options.pageNumber) : 1
        };
        if (options.resourceGroupId) {
            params.ResourceGroupId = options.resourceGroupId;
        }
        let exitSignal = 0;
        let requests = [];
        if (!options.all) {
            let stacks = await this.selectAllStacksForDefault(options.stackNames);
            let regionMap = new Map();
            for (const stack of stacks.stackArtifacts) {
                let stackInfo = await this.findStackInfo(stack.id);
                if (region && stackInfo.regionId !== region) {
                    continue;
                }
                if (regionMap.has(stackInfo.regionId)) {
                    regionMap.get(stackInfo.regionId).push(stack.id);
                }
                else {
                    regionMap.set(stackInfo.regionId, [stack.id]);
                }
            }
            regionMap.forEach((stackNames, r) => {
                params.StackName = stackNames;
                params.RegionId = r;
                requests.push(client.listStacks(params, requestOptions)
                    .then((res) => {
                    (0, logging_1.success)(`\n ✅ The Stacks list in ${r} is:\n ${colors.blue(JSON.stringify(res.Stacks, null, "\t"))} \n`);
                }, (ex) => {
                    (0, logging_1.error)('❌ Fail to list stacks in ${r}: %s %s', ex.code, ex.message);
                    exitSignal = 1;
                }));
            });
        }
        else {
            if (!region) {
                let config_region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
                region = config_region ? config_region : process.env.REGION_ID;
            }
            params.RegionId = region;
            requests.push(client.listStacks(params, requestOptions)
                .then((res) => {
                (0, logging_1.success)(`\n ✅ The Stacks list in ${region} is:\n ${colors.blue(JSON.stringify(res.Stacks, null, "\t"))} \n`);
            }, (ex) => {
                (0, logging_1.error)('❌ Fail to list stacks in %s: %s %s', region, ex.code, ex.message);
                exitSignal = 1;
            }));
        }
        await Promise.all(requests);
        (0, process_1.exit)(exitSignal);
    }
    async handleDel(client, name) {
        try {
            await client.delete(name);
        }
        catch (error) {
            return error;
        }
    }
    // 删除多个文件。
    async deleteProjects(client) {
        let list = await client.list();
        list.objects = list.objects || [];
        while (list.objects.length > 0) {
            await Promise.all(list.objects.map((v) => this.handleDel(client, v.name)));
            list = await client.list();
            list.objects = list.objects || [];
        }
    }
    async deleteBucket(bucketName) {
        try {
            const config = await CdkToolkit.getConfig();
            let client;
            if (!config.accessKeyId || !config.accessKeySecret) {
                (0, logging_1.error)("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
                (0, process_1.exit)(1);
            }
            else if (!config.securityToken) {
                client = new ossClient({
                    region: `oss-${config.regionId}`,
                    accessKeyId: config.accessKeyId,
                    accessKeySecret: config.accessKeySecret,
                    bucket: bucketName
                });
            }
            else {
                client = new ossClient({
                    region: `oss-${config.regionId}`,
                    accessKeyId: config.accessKeyId,
                    accessKeySecret: config.accessKeySecret,
                    securityToken: config.securityToken,
                    bucket: bucketName
                });
            }
            await this.deleteProjects(client);
            await client.deleteBucket(bucketName);
            console.log(`Delete bucket(${bucketName}) successfully!`);
        }
        catch (err) {
            if (err.code === 'NoSuchBucket') {
                return;
            }
            (0, logging_1.error)(err);
        }
    }
    async destroy(options) {
        await this.syncStackInfo();
        let stacks = await this.selectAllStacksForDefault(options.stackNames);
        let stackNames = [];
        let sync = options.sync;
        for (let stack of stacks.stackArtifacts) {
            if ((await this.findStackInfo(stack.id)).stackId) {
                stackNames.push(stack.id);
            }
        }
        if (!options.quiet) {
            while (true) {
                let confirm = readlineSync.question('The following stack(s) will be destroyed(Only deployed stacks will be displayed).\n\n' +
                    stackNames.toString() +
                    '\n\nPlease confirm.(Y/N)\n');
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
            let content = {
                StackId: stackInfo.stackId,
                RegionId: stackInfo.regionId ? stackInfo.regionId : config_region,
            };
            if (sync) {
                (0, logging_1.print)('%s: destroying...', colors.bold(stackName));
                exitSignal = await this.syncDestroyStack(client, content, requestOptions);
            }
            else {
                await client.deleteStack(content, requestOptions)
                    .then((res) => {
                    this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                    (0, logging_1.success)(`\n ✅ Delete the stack(${stackName}) successfully!\nRequestedId: %s`, colors.blue(res.RequestId));
                }, (ex) => {
                    if (ex.code == 'StackNotFound') {
                        (0, logging_1.warning)(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                        this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                    }
                    else {
                        (0, logging_1.error)('fail to delete stack: %s %s', ex.code, ex.message);
                        exitSignal = 1;
                    }
                });
            }
            if (bucketName !== undefined && bucketName !== null && bucketName !== '') {
                await this.deleteBucket(bucketName);
            }
        }
        (0, process_1.exit)(exitSignal);
    }
    async syncStackInfo() {
        let filePath = path.join(LOCAL_PATH + STACK_INFO);
        let fileContent = {};
        if (fs.existsSync(filePath)) {
            fileContent = fs.readFileSync(filePath).toString();
        }
        else {
            fs.writeFileSync(filePath, JSON.stringify(fileContent, null, '\t'));
        }
        let temp = {};
        // selector.length = 0 means select all stacks from this app
        const stacks = await this.selectAllStacksForDefault([]);
        for (const stack of stacks.stackArtifacts) {
            let value = await CdkToolkit.getJson(STACK_INFO, stack.id);
            // if the stack has no info, then add init tag for it
            if (value) {
                temp[stack.id] = value;
            }
            else {
                temp[stack.id] = {
                    status: INIT_STACK,
                    stackId: null,
                    regionId: null
                };
            }
        }
        fs.writeFileSync(filePath, JSON.stringify(temp, null, '\t'));
    }
    async updateStackInfo(stackName, value, regionId, bucketName, status) {
        let filePath = path.join(LOCAL_PATH + STACK_INFO);
        let fileContent = fs.readFileSync(filePath).toString();
        let info = JSON.parse(fileContent);
        let stackInfo = info[stackName];
        if (!stackInfo) {
            stackInfo = info[stackName] = {};
        }
        if (value.length === DEPLOY_STACK_ID_LENGTH) {
            stackInfo.status = status !== null && status !== void 0 ? status : DEPLOY_STACK;
            stackInfo.stackId = value;
            stackInfo.regionId = regionId;
            stackInfo.assetAssociatedBucketName = bucketName;
        }
        else {
            stackInfo.status = value;
            if (value === DESTROY_STACK) {
                stackInfo.stackId = null;
                stackInfo.regionId = null;
                stackInfo.assetAssociatedBucketName = null;
            }
        }
        fs.writeFileSync(filePath, JSON.stringify(info, null, '\t'));
    }
    async findStackInfo(stackName) {
        let filePath = path.join(LOCAL_PATH + STACK_INFO);
        let fileContent = fs.readFileSync(filePath).toString();
        return JSON.parse(fileContent)[stackName];
    }
    async selectAllStacksForDefault(stackNames) {
        const assembly = await this.assembly();
        const stacks = await assembly.selectStacks(stackNames, {
            defaultBehavior: cloud_assembly_1.DefaultSelection.AllStacks,
        });
        // No validation
        return stacks;
    }
    async selectOnlySingleStackForDefault(stackNames) {
        const assembly = await this.assembly();
        const stacks = await assembly.selectStacks(stackNames, {
            defaultBehavior: cloud_assembly_1.DefaultSelection.OnlySingle,
        });
        // No validation
        return stacks;
    }
    async selectStacksForDeploy(stackNames, exclusively) {
        const assembly = await this.assembly();
        const stacks = await assembly.selectStacks(stackNames, {
            extend: exclusively ? cloud_assembly_1.ExtendedStackSelection.None : cloud_assembly_1.ExtendedStackSelection.Upstream,
            defaultBehavior: cloud_assembly_1.DefaultSelection.OnlySingle,
        });
        await this.validateStacks(stacks);
        return stacks;
    }
    async selectStacksForDiff(stackNames, exclusively) {
        const assembly = await this.assembly();
        const stacks = await assembly.selectStacks(stackNames, {
            extend: exclusively ? cloud_assembly_1.ExtendedStackSelection.None : cloud_assembly_1.ExtendedStackSelection.Upstream,
            defaultBehavior: cloud_assembly_1.DefaultSelection.AllStacks,
        });
        await this.validateStacks(stacks);
        return stacks;
    }
    /**
     * Validate the stacks for errors and warnings according to the CLI's current settings
     */
    async validateStacks(stacks) {
        stacks.processMetadataMessages({
            ignoreErrors: this.props.ignoreErrors,
            strict: this.props.strict,
            verbose: this.props.verbose,
        });
    }
    assembly() {
        return this.props.cloudExecutable.synthesize();
    }
    async getCliConfig(loadFilePath) {
        let filePath;
        let configureInfo = {};
        let configureInfos = {};
        let AKProfileList = [];
        let StsProfileList = [];
        let RamRoleArnProfileList = [];
        let EcsRamRoleProfileList = [];
        if (loadFilePath) {
            filePath = loadFilePath;
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
                };
                if (profile.mode === 'AK') {
                    AKProfileList.push(configureInfo);
                    configureInfos.AK = AKProfileList;
                }
                else if (profile.mode === 'StsToken') {
                    StsProfileList.push(configureInfo);
                    configureInfos.StsToken = StsProfileList;
                }
                else if (profile.mode === 'RamRoleArn') {
                    RamRoleArnProfileList.push(configureInfo);
                    configureInfos.RamRoleArn = RamRoleArnProfileList;
                }
                else if (profile.mode === 'EcsRamRole') {
                    EcsRamRoleProfileList.push(configureInfo);
                    configureInfos.EcsRamRole = EcsRamRoleProfileList;
                }
            }
            if (!configureInfos || Object.keys(configureInfos).length == 0) {
                (0, logging_1.error)("WANRNING: Please check the accuracy of the mode and profile configuration entered.");
                (0, process_1.exit)(1);
            }
            return configureInfos;
        }
        else {
            (0, logging_1.error)("WANRNING: Please check Aliyun Cli tool configure accuracy of the default path or specified path.");
            (0, process_1.exit)(1);
        }
    }
    async rosDeployStack(client, content, requestOptions, outputsFile, resourceGroupId, stackName, detailLog, sync, bucketName) {
        const stackOutputs = {};
        let sleepTime = 0;
        let stackId;
        for (let i = 0; i < 10; i++) {
            try {
                let createStackResult = await client.createStack(content, requestOptions);
                stackId = createStackResult.StackId;
                break;
            }
            catch (e) {
                if (detailLog) {
                    (0, logging_1.error)(`The ${i}th deployment attempt failed, as detailed in ${e}`);
                }
                if (!e.data || !("RequestId" in e.data) || e.code === 'ServiceUnavailable') {
                    if (sleepTime < 20000) {
                        sleepTime = sleepTime + 5000;
                    }
                    await sleep(sleepTime);
                }
                else if (e.code === 'LastTokenProcessing') {
                    const newStackIdInfo = await this.getStackByName(stackName, resourceGroupId, content['RegionId']);
                    if (newStackIdInfo) {
                        stackId = newStackIdInfo.StackId;
                    }
                    break;
                }
                else {
                    (0, logging_1.error)('❌ Fail to create stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, e.data["RequestId"], e.message);
                    throw e;
                }
            }
        }
        if (!stackId) {
            (0, logging_1.error)('❌ Fail to create stack, please check your service endpoint.');
            throw new exception_1.NetworkError('An unknown network error occurs, please check the endpoint and try again later.');
        }
        if (sync) {
            const block = new display_1.RewritableBlock(stream);
            withDefaultPrinterObj = setInterval(async function () {
                await CdkToolkit.withDefaultPrinter(client, content, requestOptions, stackId, block, 'deploy');
            }, 5000);
            while (true) {
                try {
                    await sleep(1000);
                    let params = {
                        RegionId: content['RegionId'],
                        StackId: stackId
                    };
                    const getStackResult = await client.getStack(params, requestOptions);
                    const status = getStackResult.Status;
                    const statusReason = getStackResult.StatusReason;
                    const stackName = getStackResult.StackName;
                    const outputs = getStackResult.Outputs;
                    const regComplete = RegExp(/COMPLETE/);
                    const regFailed = RegExp(/FAILED/);
                    if (regComplete.exec(status) || regFailed.exec(status)) {
                        clearInterval(withDefaultPrinterObj);
                        await CdkToolkit.withDefaultPrinter(client, content, requestOptions, stackId, block, 'deploy');
                        if (outputs !== undefined) {
                            (0, logging_1.print)('\nOutputs:');
                            stackOutputs[stackName] = outputs;
                            for (const output of outputs) {
                                const value = output['OutputValue'];
                                const key = output['OutputKey'];
                                const description = output['Description'];
                                (0, logging_1.print)('\n Key: %s  Value: %s Description: %s', colors.cyan(key), colors.cyan(value), colors.cyan(description));
                            }
                            if (outputsFile) {
                                fs.writeFileSync(path.join(LOCAL_PATH + OUTPUTS_JSON), JSON.stringify(stackOutputs, null, '\t'));
                            }
                        }
                        if (status.toString() == 'CREATE_COMPLETE') {
                            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName);
                            (0, logging_1.success)(`\n ✅ The deployment(sync create stack) has completed!\nStatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(stackId));
                            return 0;
                        }
                        else {
                            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName, status.toString());
                            (0, logging_1.error)(`\n❌ Fail to sync create stack:\nStatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(stackId));
                            return 1;
                        }
                    }
                }
                catch (e) {
                    if (detailLog) {
                        (0, logging_1.error)('An error occurs trying to get the resource stack details: %s', e);
                    }
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000);
                    }
                    else {
                        (0, logging_1.error)('❌ Fail to sync create stack: ErrorCode: %s\nErrorMessage:%s', e.code, e.message);
                        clearInterval(withDefaultPrinterObj);
                        throw e;
                    }
                }
            }
        }
        else {
            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName);
            (0, logging_1.success)(`\n ✅ The deployment(create stack) has completed!\nStackId: %s`, colors.blue(stackId));
            return 0;
        }
    }
    static async getResources(client, content, requestOptions, stackId) {
        try {
            const listStackResourcesResult = await client.listStackResources({
                StackId: stackId,
                RegionId: content['RegionId'],
            }, requestOptions);
            return listStackResourcesResult.Resources;
        }
        catch (e) {
            (0, logging_1.error)('fail to get new stack resource: %s %s', e.code, e.message);
            throw e;
        }
    }
    static async withDefaultPrinter(client, content, requestOptions, stackId, block, action) {
        const lines = new Array();
        const resources = await CdkToolkit.getResources(client, content, requestOptions, stackId);
        if (action !== 'destroy') {
            for (let resource of resources) {
                lines.push(util.format(colors.blue('|%s |%s | %s | %s | %s | %s') + '\n', padRight(23, resource.StackName), padLeft(12, resource.CreateTime), padRight(20, resource.Status), padRight(23, resource.ResourceType), shorten(40, resource.PhysicalResourceId), resource.LogicalResourceId));
            }
        }
        else {
            for (let resource of resources) {
                lines.push(util.format(colors.blue('|%s | %s | %s | %s | %s') + '\n', padRight(23, resource.StackName), padRight(20, resource.Status), padRight(23, resource.ResourceType), shorten(40, resource.PhysicalResourceId), resource.LogicalResourceId));
            }
        }
        block.displayLines(lines);
    }
    async rosUpdateStack(client, content, requestOptions, outputsFile, skipIfNoChanges, stackUpdateTime, detailLog, sync, stackName, bucketName) {
        let sleepTime = 0;
        const stackId = content['StackId'];
        for (let i = 0; i < 10; i++) {
            try {
                await client.updateStack(content, requestOptions);
                break;
            }
            catch (e) {
                if (detailLog) {
                    (0, logging_1.error)(`The ${i}th update attempt failed, as detailed in ${e}`);
                }
                if (!e.data || !("RequestId" in e.data) || e.code === 'ServiceUnavailable') {
                    if (sleepTime < 20000) {
                        sleepTime = sleepTime + 5000;
                    }
                    await sleep(sleepTime);
                }
                else if (e.code === 'LastTokenProcessing') {
                    break;
                }
                else if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack')
                    && (skipIfNoChanges || bucketName !== undefined)) {
                    (0, logging_1.success)('The stack is completely the same, there is no need to update.');
                    return 0;
                }
                else {
                    (0, logging_1.error)('❌ Fail to update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, e.data["RequestId"], e.message);
                    throw e;
                }
            }
        }
        if (sync) {
            let params = {
                RegionId: content['RegionId'],
                StackId: stackId
            };
            const stackOutputs = {};
            // Wait for the stack state to change after updating it
            await sleep(5000);
            const block = new display_1.RewritableBlock(stream);
            withDefaultPrinterObj = setInterval(async function () {
                await CdkToolkit.withDefaultPrinter(client, content, requestOptions, stackId, block, 'update');
            }, 5000);
            while (true) {
                try {
                    await sleep(1000);
                    const getNewStackResult = await client.getStack(params, requestOptions);
                    const status = getNewStackResult.Status;
                    const statusReason = getNewStackResult.StatusReason;
                    const outputs = getNewStackResult.Outputs;
                    const newUpdateTime = getNewStackResult.UpdateTime ? getNewStackResult.UpdateTime : "";
                    if (newUpdateTime == stackUpdateTime) {
                        // stack update in progress or update did not begin
                        continue;
                    }
                    const regComplete = RegExp(/COMPLETE/);
                    const regFailed = RegExp(/FAILED/);
                    if (regComplete.exec(status) || regFailed.exec(status)) {
                        clearInterval(withDefaultPrinterObj);
                        await CdkToolkit.withDefaultPrinter(client, content, requestOptions, stackId, block, 'update');
                        if (outputs !== undefined) {
                            (0, logging_1.print)('\nOutputs:');
                            stackOutputs[stackName] = outputs;
                            for (const output of outputs) {
                                const value = output['OutputValue'];
                                const key = output['OutputKey'];
                                const description = output['Description'];
                                (0, logging_1.print)('\n Key: %s  Value: %s Description: %s', colors.cyan(key), colors.cyan(value), colors.cyan(description));
                            }
                            if (outputsFile) {
                                fs.writeFileSync(path.join(LOCAL_PATH + OUTPUTS_JSON), JSON.stringify(stackOutputs, null, '\t'));
                            }
                        }
                        if (status.toString() == 'UPDATE_COMPLETE') {
                            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName);
                            (0, logging_1.success)(`\n ✅ The deployment(sync update stack) has completed!\nStatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(stackId));
                            return 0;
                        }
                        else {
                            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName, status.toString());
                            (0, logging_1.error)(`\n❌ Fail to sync update stack:\nStatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(stackId));
                            return 1;
                        }
                    }
                }
                catch (e) {
                    if (detailLog) {
                        (0, logging_1.error)('An error occurs trying to get the resource stack details: %s', e);
                    }
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000);
                    }
                    else {
                        (0, logging_1.error)('❌ Fail to sync update stack: ErrorCode: %s\nErrorMessage:%s', e.code, e.message);
                        clearInterval(withDefaultPrinterObj);
                        throw e;
                    }
                }
            }
        }
        else {
            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName);
            (0, logging_1.success)(`\n ✅ The deployment(update stack) has completed!\nStackId: %s`, colors.blue(stackId));
            return 0;
        }
    }
    async syncDestroyStack(client, content, requestOptions) {
        try {
            await client.deleteStack(content, requestOptions);
            const block = new display_1.RewritableBlock(stream);
            withDefaultPrinterObj = setInterval(async function () {
                await CdkToolkit.withDefaultPrinter(client, content, requestOptions, content['StackId'], block, 'destroy');
            }, 5000);
            while (true) {
                try {
                    await sleep(1000);
                    let params = {
                        RegionId: content['RegionId'],
                        StackId: content['StackId']
                    };
                    const getStackResult = await client.getStack(params, requestOptions);
                    const status = getStackResult.Status;
                    const statusReason = getStackResult.StatusReason;
                    const stackName = getStackResult.StackName;
                    const regComplete = RegExp(/COMPLETE/);
                    const regFailed = RegExp(/FAILED/);
                    if (regComplete.exec(status) || regFailed.exec(status)) {
                        clearInterval(withDefaultPrinterObj);
                        await CdkToolkit.withDefaultPrinter(client, content, requestOptions, content['StackId'], block, 'destroy');
                        (0, logging_1.success)(`\n ✅ The task(sync destroy stack) has finished!\nstatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(getStackResult.StackId));
                        await this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                        if (regComplete.exec(status)) {
                            return 0;
                        }
                        else {
                            return 1;
                        }
                    }
                }
                catch (e) {
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000);
                    }
                    else {
                        (0, logging_1.error)('fail to sync destroy stack: %s %s', e.code, e.message);
                        clearInterval(withDefaultPrinterObj);
                        return 1;
                    }
                }
            }
        }
        catch (e) {
            (0, logging_1.error)('fail to sync destroy stack: %s %s', e.code, e.message);
            clearInterval(withDefaultPrinterObj);
            return 1;
        }
    }
}
exports.CdkToolkit = CdkToolkit;
function writeAndUpdateLanguageInfo(language) {
    let filePath = path.join(LOCAL_PATH + settings_1.PROJECT_CONFIG);
    let fileContent;
    if (fs.existsSync(filePath)) {
        fileContent = fs.readFileSync(filePath).toString();
        let info = JSON.parse(fileContent);
        info['languageInfo'] = language;
        fs.writeFileSync(filePath, JSON.stringify(info, null, '\t'));
    }
}
exports.writeAndUpdateLanguageInfo = writeAndUpdateLanguageInfo;
function readLanguageInfo() {
    let filePath = path.join(LOCAL_PATH + settings_1.PROJECT_CONFIG);
    if (fs.existsSync(filePath)) {
        let fileContent = fs.readFileSync(filePath).toString();
        return JSON.parse(fileContent)['languageInfo'].toString();
    }
    else {
        return '';
    }
}
exports.readLanguageInfo = readLanguageInfo;
function padLeft(n, x) {
    if (x) {
        return ' '.repeat(Math.max(0, n - x.length)) + x;
    }
    else {
        return '';
    }
}
exports.padLeft = padLeft;
function padRight(n, x) {
    if (x) {
        return x + ' '.repeat(Math.max(0, n - x.length));
    }
    else {
        return '';
    }
}
exports.padRight = padRight;
function shorten(maxWidth, p) {
    if (p.length <= maxWidth) {
        return p;
    }
    const half = Math.floor((maxWidth - 3) / 2);
    return p.substr(0, half) + '...' + p.substr(p.length - half);
}
exports.shorten = shorten;
function desensitization(inputString, mixLength = 3) {
    // mixLength 字符串少于一定值则脱敏全部，增加脱敏位数
    if ((0, lodash_1.isString)(inputString) || (0, lodash_1.isNumber)(inputString)) {
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
exports.desensitization = desensitization;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRvb2xraXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstdG9vbGtpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4Q0FBOEM7QUFDOUMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQiwrQkFBdUM7QUFDdkMsMENBQStDO0FBQy9DLDRDQUErQztBQUMvQyxtQ0FBMEM7QUFDMUMsaURBQTRDO0FBQzVDLHVEQUEwRDtBQUMxRCx5REFBOEc7QUFFOUcsdUNBQStEO0FBQy9ELHlDQUF5RDtBQUN6RCxxQ0FBNkI7QUFDN0IsaUNBQXNDO0FBQ3RDLDJDQUFpRDtBQUNqRCwyQ0FBeUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDdEQsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXJDLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRW5ELE1BQU0sV0FBVyxHQUFHLHFCQUFxQixDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQztBQUN4QixNQUFNLFdBQVcsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3ZDLE1BQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDO0FBQ3JDLE1BQU0sc0JBQXNCLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLE1BQU0sZUFBZSxHQUFHLHNCQUFzQixDQUFDO0FBQy9DLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUMxQixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7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QUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFORCwwQkFNQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxXQUFtQixFQUFFLFNBQVMsR0FBRyxDQUFDO0lBQzlELGlDQUFpQztJQUNqQyxJQUFJLElBQUEsaUJBQVEsRUFBQyxXQUFXLENBQUMsSUFBSSxJQUFBLGlCQUFRLEVBQUMsV0FBVyxDQUFDLEVBQUU7UUFDaEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7WUFDekIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN2QixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sU0FBUyxHQUFHLEdBQUc7YUFDaEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQzthQUMxRSxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sUUFBUSxHQUFHLFNBQVMsR0FBRyxPQUFPLENBQUM7S0FDekM7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFoQkQsMENBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ3V0aWwnO1xuaW1wb3J0ICogYXMganN6aXAgZnJvbSAnanN6aXAnO1xuaW1wb3J0IHtmb3JtYXQsIHByb21pc2lmeX0gZnJvbSAndXRpbCc7XG5pbXBvcnQge2NpcGhlciwgZGVjaXBoZXJ9IGZyb20gJy4vdXRpbC9jaXBoZXInO1xuaW1wb3J0IHtSZXdyaXRhYmxlQmxvY2t9IGZyb20gJy4vdXRpbC9kaXNwbGF5JztcbmltcG9ydCB7aXNOdW1iZXIsIGlzU3RyaW5nfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtleGVjIGFzIF9leGVjfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBDcmVkZW50aWFscywge0NvbmZpZ30gZnJvbSAnQGFsaWNsb3VkL2NyZWRlbnRpYWxzJztcbmltcG9ydCB7Q2xvdWRBc3NlbWJseSwgRGVmYXVsdFNlbGVjdGlvbiwgRXh0ZW5kZWRTdGFja1NlbGVjdGlvbiwgU3RhY2tDb2xsZWN0aW9ufSBmcm9tICcuL2FwaS9jbG91ZC1hc3NlbWJseSc7XG5pbXBvcnQge0Nsb3VkRXhlY3V0YWJsZX0gZnJvbSAnLi9hcGkvY2xvdWQtZXhlY3V0YWJsZSc7XG5pbXBvcnQge2RhdGEsIGVycm9yLCBwcmludCwgc3VjY2Vzcywgd2FybmluZ30gZnJvbSAnLi9sb2dnaW5nJztcbmltcG9ydCB7Q29uZmlndXJhdGlvbiwgUFJPSkVDVF9DT05GSUd9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHtleGl0fSBmcm9tICdwcm9jZXNzJztcbmltcG9ydCB7cHJpbnRTdGFja0RpZmZ9IGZyb20gJy4vZGlmZic7XG5pbXBvcnQge2Rlc2VyaWFsaXplU3RydWN0dXJlfSBmcm9tICcuL3NlcmlhbGl6ZSc7XG5pbXBvcnQge05ldHdvcmtFcnJvcn0gZnJvbSAnLi9leGNlcHRpb24nO1xuXG5jb25zdCByb3NDbGllbnQgPSByZXF1aXJlKCdAYWxpY2xvdWQvcm9zLTIwMTktMDktMTAnKTtcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5jb25zdCBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJyk7XG5jb25zdCBvc3NDbGllbnQgPSByZXF1aXJlKCdhbGktb3NzJyk7XG5cbmNvbnN0IGdlbmVyYXRlU2FmZUlkID0gcmVxdWlyZSgnZ2VuZXJhdGUtc2FmZS1pZCcpO1xuXG5jb25zdCBDT05GSUdfTkFNRSA9ICdhY2NvdW50LmNvbmZpZy5qc29uJztcbmNvbnN0IExPQ0FMX1BBVEggPSAnLi8nO1xuY29uc3QgR0xPQkFMX1BBVEggPSBfX2Rpcm5hbWUgKyAnLy4uLyc7XG5jb25zdCBTVEFDS19JTkZPID0gJ3N0YWNrLmluZm8uanNvbic7XG5jb25zdCBERVBMT1lfU1RBQ0tfSURfTEVOR1RIID0gMzY7XG5jb25zdCBDTElfQ09ORklHX0ZJTEUgPSAnLy5hbGl5dW4vY29uZmlnLmpzb24nO1xuY29uc3QgSU5JVF9TVEFDSyA9ICdpbml0JztcbmNvbnN0IFNZTlRIX1NUQUNLID0gJ3N5bnRoJztcbmNvbnN0IERFUExPWV9TVEFDSyA9ICdkZXBsb3knO1xuY29uc3QgREVTVFJPWV9TVEFDSyA9ICdkZXN0cm95JztcbmNvbnN0IFBBQ0tBR0VfSlNPTiA9IF9fZGlybmFtZSArICcvLi4vcGFja2FnZS5qc29uJztcbmNvbnN0IE9VVFBVVFNfSlNPTiA9ICdzdGFjay5vdXRwdXRzLmpzb24nO1xuXG5jb25zdCBleGVjID0gcHJvbWlzaWZ5KF9leGVjKTtcblxuY29uc3QgcmVxdWVzdE9wdGlvbnM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1VzZXItQWdlbnQnOiBcIlJPUy1DTEktXCIgKyBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhQQUNLQUdFX0pTT04pLnRvU3RyaW5nKCkpWyd2ZXJzaW9uJ10gKyBcIjo6XCIgKyByZWFkTGFuZ3VhZ2VJbmZvKClcbiAgICB9LFxuICAgIHRpbWVvdXQ6IDkwMDAwXG59O1xuXG5jb25zdCBzbGVlcCA9IGZ1bmN0aW9uIChtczogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59O1xuXG5cbmNvbnN0IHN0cmVhbSA9IHByb2Nlc3Muc3Rkb3V0O1xuXG5cbmxldCB3aXRoRGVmYXVsdFByaW50ZXJPYmo6IGFueTtcblxuXG5leHBvcnQgaW50ZXJmYWNlIENka1Rvb2xraXRQcm9wcyB7XG4gICAgLyoqXG4gICAgICogVGhlIENsb3VkIEV4ZWN1dGFibGVcbiAgICAgKi9cbiAgICBjbG91ZEV4ZWN1dGFibGU6IENsb3VkRXhlY3V0YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gYmUgdmVyYm9zZVxuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICB2ZXJib3NlPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIERvbid0IHN0b3Agb24gZXJyb3IgbWV0YWRhdGFcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgaWdub3JlRXJyb3JzPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRyZWF0IHdhcm5pbmdzIGluIG1ldGFkYXRhIGFzIGVycm9yc1xuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBzdHJpY3Q/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXBwbGljYXRpb24gY29uZmlndXJhdGlvbiAoc2V0dGluZ3MgYW5kIGNvbnRleHQpXG4gICAgICovXG4gICAgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbjtcbn1cblxuLyoqXG4gKiBUb29sa2l0IGxvZ2ljXG4gKlxuICogVGhlIHRvb2xraXQgcnVucyB0aGUgYGNsb3VkRXhlY3V0YWJsZWAgdG8gb2J0YWluIGEgY2xvdWQgYXNzZW1ibHlcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBDZGtUb29sa2l0IHtcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBnZXRKc29uKGZpbGVOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCBhbGxvd2VkRW1wdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBMT0NBTF9QQVRIICsgZmlsZU5hbWU7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlKVtrZXldO1xuICAgICAgICB9IGVsc2UgaWYgKGZpbGVOYW1lID09PSBTVEFDS19JTkZPKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGZpbGVQYXRoID0gR0xPQkFMX1BBVEggKyBmaWxlTmFtZTtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGUpW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhbGxvd2VkRW1wdHkpIHtcbiAgICAgICAgICAgIGVycm9yKFwiUGxlYXNlIHVzZSAncm9zLWNkayBjb25maWcgKC1nKScgdG8gc2V0IHlvdXIgYWNjb3VudCBjb25maWd1cmF0aW9uIGZpcnN0bHkhXCIpO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcHJvcHM6IENka1Rvb2xraXRQcm9wcykge1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Q29uZmlnKCkge1xuICAgICAgICBsZXQgbW9kZVR5cGUgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICd0eXBlJywgdHJ1ZSlcbiAgICAgICAgbGV0IGVuZHBvaW50ID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnZW5kcG9pbnQnLCB0cnVlKVxuICAgICAgICBsZXQgcmVnaW9uSWQgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpXG4gICAgICAgIGxldCBjb25maWdJbmZvOiBhbnk7XG4gICAgICAgIHN3aXRjaCAobW9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Vjc19yYW1fcm9sZSc6XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JvbGVOYW1lJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0cyc6XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleUlkJykpLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKSxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnc2VjdXJpdHlUb2tlbicpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmFtX3JvbGVfYXJuJzpcbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyYW1fcm9sZV9hcm4nLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5SWQnKSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5U2VjcmV0JykpLFxuICAgICAgICAgICAgICAgICAgICByb2xlQXJuOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyb2xlQXJuJyksXG4gICAgICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncm9sZVNlc3Npb25OYW1lJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FjY2Vzc19rZXknOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FjY2Vzc19rZXknLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5SWQnKSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5U2VjcmV0JykpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZW5kcG9pbnQgPSBlbmRwb2ludCA/IGVuZHBvaW50IDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbSc7XG4gICAgICAgIGxldCBuZXdBY2Nlc3NLZXlJZDogc3RyaW5nO1xuICAgICAgICBsZXQgbmV3QWNjZXNzS2V5U2VjcmV0OiBzdHJpbmc7XG4gICAgICAgIGxldCBuZXdTZWN1cml0eVRva2VuOiBzdHJpbmc7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbmV3QWNjZXNzS2V5SWQgPSBuZXdBY2Nlc3NLZXlJZCA/IG5ld0FjY2Vzc0tleUlkIDogcHJvY2Vzcy5lbnYuQUNDRVNTX0tFWV9JRFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ld0FjY2Vzc0tleVNlY3JldCA9IG5ld0FjY2Vzc0tleVNlY3JldCA/IG5ld0FjY2Vzc0tleVNlY3JldCA6IHByb2Nlc3MuZW52LkFDQ0VTU19LRVlfU0VDUkVUXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbmV3U2VjdXJpdHlUb2tlbiA9IG5ld1NlY3VyaXR5VG9rZW4gPyBuZXdTZWN1cml0eVRva2VuIDogcHJvY2Vzcy5lbnYuU0VDVVJJVFlfVE9LRU5cbiAgICAgICAgaWYgKGNvbmZpZ0luZm8pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3JlZCA9IG5ldyBDcmVkZW50aWFscyhjb25maWdJbmZvKTtcbiAgICAgICAgICAgICAgICBuZXdBY2Nlc3NLZXlJZCA9IGF3YWl0IGNyZWQuZ2V0QWNjZXNzS2V5SWQoKTtcbiAgICAgICAgICAgICAgICBuZXdBY2Nlc3NLZXlTZWNyZXQgPSBhd2FpdCBjcmVkLmdldEFjY2Vzc0tleVNlY3JldCgpO1xuICAgICAgICAgICAgICAgIG5ld1NlY3VyaXR5VG9rZW4gPSBhd2FpdCBjcmVkLmdldFNlY3VyaXR5VG9rZW4oKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBjcmVkZW50aWFsIGluZm9ybWF0aW9uIHlvdSBpbXBvcnQgZnJvbSBDTEkgY29uZmlnIScgKyBlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuZXdBY2Nlc3NLZXlJZCB8fCAhbmV3QWNjZXNzS2V5U2VjcmV0KSB7XG4gICAgICAgICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIG9yIHNldCBlbnZpcm9ubWVudCB0byBzZXQgeW91ciBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZmlyc3RseSFcIik7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuZHBvaW50OiBlbmRwb2ludCxcbiAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBuZXdBY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogbmV3QWNjZXNzS2V5U2VjcmV0LFxuICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogbmV3U2VjdXJpdHlUb2tlbixcbiAgICAgICAgICAgIHJlZ2lvbklkOiByZWdpb25JZFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldFJvc0NsaWVudCgpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRDb25maWcoKTtcbiAgICAgICAgbGV0IGNsaWVudDtcbiAgICAgICAgaWYgKCFjb25maWcuYWNjZXNzS2V5SWQgfHwgIWNvbmZpZy5hY2Nlc3NLZXlTZWNyZXQpIHtcbiAgICAgICAgICAgIGVycm9yKFwiUGxlYXNlIHVzZSAncm9zLWNkayBjb25maWcgKC1nKScgb3Igc2V0IGVudmlyb25tZW50IHRvIHNldCB5b3VyIGFjY291bnQgY29uZmlndXJhdGlvbiBmaXJzdGx5IVwiKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWNvbmZpZy5zZWN1cml0eVRva2VuKSB7XG4gICAgICAgICAgICBjbGllbnQgPSBuZXcgcm9zQ2xpZW50KHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogY29uZmlnLmVuZHBvaW50LFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBjb25maWcuYWNjZXNzS2V5SWQsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBjb25maWcuYWNjZXNzS2V5U2VjcmV0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsaWVudCA9IG5ldyByb3NDbGllbnQoe1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBjb25maWcuZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGNvbmZpZy5hY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGNvbmZpZy5hY2Nlc3NLZXlTZWNyZXQsXG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogY29uZmlnLnNlY3VyaXR5VG9rZW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBodHRwTW9kdWxlID0gY2xpZW50LmVuZHBvaW50LnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykgPyBodHRwcyA6IGh0dHA7XG4gICAgICAgIGNsaWVudC5rZWVwQWxpdmVBZ2VudCA9IG5ldyBodHRwTW9kdWxlLkFnZW50KHtcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZU1zZWNzOiAxNTAwMFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29uZmlnKGdsb2JhbDogYm9vbGVhbikge1xuICAgICAgICBsZXQgY29uZmlnU2F2ZVBhdGggPSAoZ2xvYmFsID8gR0xPQkFMX1BBVEggOiBMT0NBTF9QQVRIKSArIENPTkZJR19OQU1FO1xuICAgICAgICBsZXQgc291cmNlTW9kZVR5cGU6IHN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgc291cmNlRW5kcG9pbnQ6IHN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgc291cmNlUmVnaW9uSWQ6IHN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgc291cmNlQWNjZXNzS2V5SWQ6IHN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgc291cmNlQWNjZXNzS2V5U2VjcmV0OiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNvdXJjZVNlY3VyaXR5VG9rZW46IHN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgc291cmNlUm9sZUFybjogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBzb3VyY2VSb2xlU2Vzc2lvbk5hbWU6IHN0cmluZyA9ICcnO1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhjb25maWdTYXZlUGF0aCkpIHtcbiAgICAgICAgICAgIGxldCBjb25maWdGaWxlID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoY29uZmlnU2F2ZVBhdGgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgc291cmNlTW9kZVR5cGUgPSBjb25maWdGaWxlWyd0eXBlJ11cbiAgICAgICAgICAgIHNvdXJjZUVuZHBvaW50ID0gY29uZmlnRmlsZVsnZW5kcG9pbnQnXVxuICAgICAgICAgICAgc291cmNlUmVnaW9uSWQgPSBjb25maWdGaWxlWydyZWdpb25JZCddXG4gICAgICAgICAgICBzb3VyY2VBY2Nlc3NLZXlJZCA9IGNvbmZpZ0ZpbGVbJ2FjY2Vzc0tleUlkJ11cbiAgICAgICAgICAgIHNvdXJjZUFjY2Vzc0tleVNlY3JldCA9IGNvbmZpZ0ZpbGVbJ2FjY2Vzc0tleVNlY3JldCddXG4gICAgICAgICAgICBzb3VyY2VTZWN1cml0eVRva2VuID0gY29uZmlnRmlsZVsnc2VjdXJpdHlUb2tlbiddXG4gICAgICAgICAgICBzb3VyY2VSb2xlQXJuID0gY29uZmlnRmlsZVsncm9sZUFybiddXG4gICAgICAgICAgICBzb3VyY2VSb2xlU2Vzc2lvbk5hbWUgPSBjb25maWdGaWxlWydyb2xlU2Vzc2lvbk5hbWUnXVxuICAgICAgICB9XG4gICAgICAgIGxldCBtb2RlVHlwZU9iaiA9IHtcbiAgICAgICAgICAgIGVjc19yYW1fcm9sZTogJ0Vjc1JhbVJvbGUnLFxuICAgICAgICAgICAgc3RzOiAnU3RzVG9rZW4nLFxuICAgICAgICAgICAgcmFtX3JvbGVfYXJuOiAnUmFtUm9sZUFybicsXG4gICAgICAgICAgICBhY2Nlc3Nfa2V5OiAnQUsnXG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBsZXQgZGVmYXVsdE1vZGVUeXBlID0gc291cmNlTW9kZVR5cGUgPyBtb2RlVHlwZU9ialtzb3VyY2VNb2RlVHlwZV0gOiAnJ1xuICAgICAgICBsZXQgZGVmYXVsdEVuZHBvaW50ID0gc291cmNlRW5kcG9pbnQgPyBzb3VyY2VFbmRwb2ludCA6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nXG4gICAgICAgIGxldCBkZWZhdWx0UmVnaW9uSWQgPSBzb3VyY2VSZWdpb25JZCA/IHNvdXJjZVJlZ2lvbklkIDogJ2NuLWhhbmd6aG91J1xuICAgICAgICBsZXQgbW9kZVR5cGUgPSBbJ0FLJywgJ1N0c1Rva2VuJywgJ1JhbVJvbGVBcm4nLCAnRWNzUmFtUm9sZSddXG5cblxuICAgICAgICBsZXQgZW5kcG9pbnQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYEVuZHBvaW50KG9wdGlvbmFsLCBbJHtkZWZhdWx0RW5kcG9pbnQudG9TdHJpbmcoKX1dKTpgLCB7ZGVmYXVsdElucHV0OiBkZWZhdWx0RW5kcG9pbnR9KTtcbiAgICAgICAgbGV0IHJlZ2lvbklkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBSZWdpb25JZChvcHRpb25hbCwgWyR7ZGVmYXVsdFJlZ2lvbklkLnRvU3RyaW5nKCl9XSk6YCwge2RlZmF1bHRJbnB1dDogZGVmYXVsdFJlZ2lvbklkfSk7XG4gICAgICAgIGxldCBtb2RlSW5kZXggPSByZWFkbGluZVN5bmMua2V5SW5TZWxlY3QobW9kZVR5cGUsIGBBdXRoZW50aWNhdGUgbW9kZSBbJHtkZWZhdWx0TW9kZVR5cGUudG9TdHJpbmcoKX1dOmApO1xuICAgICAgICBsZXQgaW5wdXRDb25maWdJbmZvOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IGNoZWNrQ29tbWFuZDogc3RyaW5nO1xuICAgICAgICBsZXQgY3VybENvbW1hbmQ6IHN0cmluZztcbiAgICAgICAgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdFY3NSYW1Sb2xlJykge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICAgICAgICAgICAgICBjaGVja0NvbW1hbmQgPSAncG93ZXJzaGVsbCAtQ29tbWFuZCBcIihjdXJsIC1VUmkgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8pLlN0YXR1c0NvZGVcIic7XG4gICAgICAgICAgICAgICAgY3VybENvbW1hbmQgPSAncG93ZXJzaGVsbCAtQ29tbWFuZCBcIihjdXJsIC1VUmkgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8pLkNvbnRlbnRcIic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoZWNrQ29tbWFuZCA9ICdjdXJsIGh0dHA6Ly8xMDAuMTAwLjEwMC4yMDAvbGF0ZXN0L21ldGEtZGF0YS9SYW0vc2VjdXJpdHktY3JlZGVudGlhbHMvIC1vIC9kZXYvbnVsbCAtcyAtdyAle2h0dHBfY29kZX0nO1xuICAgICAgICAgICAgICAgIGN1cmxDb21tYW5kID0gJ2N1cmwgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7c3Rkb3V0OiBjaGVja1N0ZG91dH0gPSBhd2FpdCBleGVjKGNoZWNrQ29tbWFuZCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrU3Rkb3V0LnRyaW0oKSAhPT0gJzIwMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gVXNlIEVjc1JhbVJvbGUgY29uZmlnLCBQbGVhc2UgYmluZCBFY3NSYW1Sb2xlIHRvIHRoZSBob3N0LicsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gVXNlIEVjc1JhbVJvbGUgY29uZmlnLCBQbGVhc2UgYmluZCBFY3NSYW1Sb2xlIHRvIHRoZSBob3N0IScgKyBlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qge3N0ZG91dDogY3VybFN0ZG91dH0gPSBhd2FpdCBleGVjKGN1cmxDb21tYW5kKTtcbiAgICAgICAgICAgIGxldCByb2xlTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgUm9sZU5hbWUsIFRoZSBjb25maWd1cmVkIHJvbGUgb2YgdGhlIGhvc3Q6IFske2N1cmxTdGRvdXQudHJpbSgpfV1gLCB7ZGVmYXVsdElucHV0OiBjdXJsU3Rkb3V0LnRyaW0oKX0pO1xuICAgICAgICAgICAgaW5wdXRDb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlY3NfcmFtX3JvbGUnLFxuICAgICAgICAgICAgICAgIHJvbGVOYW1lOiByb2xlTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnU3RzVG9rZW4nKSB7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5SWQ6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlTZWNyZXQ6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBzZWN1cml0eVRva2VuOiBzdHJpbmc7XG4gICAgICAgICAgICBpZiAoc291cmNlTW9kZVR5cGUgPT09ICdzdHMnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRBY2Nlc3NLZXlJZCA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlJZC50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFjY2Vzc0tleVNlY3JldCA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlTZWNyZXQudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRTZWN1cml0eVRva2VuID0gZGVzZW5zaXRpemF0aW9uKGF3YWl0IGRlY2lwaGVyKHNvdXJjZVNlY3VyaXR5VG9rZW4udG9TdHJpbmcoKSkpXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYEFjY2Vzc0tleUlkIFske2RlZmF1bHRBY2Nlc3NLZXlJZH1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleUlkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBBY2Nlc3NLZXlTZWNyZXQgWyR7ZGVmYXVsdEFjY2Vzc0tleVNlY3JldH1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleVNlY3JldC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW4gPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYFNlY3VyaXR5VG9rZW4gWyR7ZGVmYXVsdFNlY3VyaXR5VG9rZW59XTpgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFY2hvQmFjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBhd2FpdCBkZWNpcGhlcihzb3VyY2VTZWN1cml0eVRva2VuLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdBY2Nlc3NLZXlJZDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdBY2Nlc3NLZXlTZWNyZXQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW4gPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1NlY3VyaXR5VG9rZW46Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRDb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHMnLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5SWQpLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleVNlY3JldCksXG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogYXdhaXQgY2lwaGVyKHNlY3VyaXR5VG9rZW4pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdSYW1Sb2xlQXJuJykge1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleUlkOiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5U2VjcmV0OiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgcm9sZUFybjogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHJvbGVTZXNzaW9uTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgaWYgKHNvdXJjZU1vZGVUeXBlID09PSAncmFtX3JvbGVfYXJuJykge1xuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QWNjZXNzS2V5SWQgPSBkZXNlbnNpdGl6YXRpb24oYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5SWQudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRBY2Nlc3NLZXlTZWNyZXQgPSBkZXNlbnNpdGl6YXRpb24oYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5U2VjcmV0LnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0Um9sZUFybiA9IHNvdXJjZVJvbGVBcm4udG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0Um9sZVNlc3Npb25OYW1lID0gc291cmNlUm9sZVNlc3Npb25OYW1lLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgQWNjZXNzS2V5SWQgWyR7ZGVmYXVsdEFjY2Vzc0tleUlkfV06YCwge1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWNob0JhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbnB1dDogYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5SWQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYEFjY2Vzc0tleVNlY3JldCBbJHtkZWZhdWx0QWNjZXNzS2V5U2VjcmV0fV06YCwge1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWNob0JhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbnB1dDogYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5U2VjcmV0LnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcm9sZUFybiA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgUm9sZUFybiBbJHtkZWZhdWx0Um9sZUFybn1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBkZWZhdWx0Um9sZUFyblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgUm9sZVNlc3Npb25OYW1lIFske2RlZmF1bHRSb2xlU2Vzc2lvbk5hbWV9XTpgLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGRlZmF1bHRSb2xlU2Vzc2lvbk5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdBY2Nlc3NLZXlJZDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdBY2Nlc3NLZXlTZWNyZXQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIHJvbGVBcm4gPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1JvbGVBcm4oZWc6IGFjczpyYW06OioqKioqKjpyb2xlLyoqKioqKik6Jyk7XG4gICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdSb2xlU2Vzc2lvbk5hbWU6Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dENvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhbV9yb2xlX2FybicsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlJZCksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5U2VjcmV0KSxcbiAgICAgICAgICAgICAgICByb2xlQXJuOiByb2xlQXJuLFxuICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogcm9sZVNlc3Npb25OYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdBSycpIHtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlJZDogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleVNlY3JldDogc3RyaW5nO1xuICAgICAgICAgICAgaWYgKHNvdXJjZU1vZGVUeXBlID09PSAnYWNjZXNzX2tleScpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFjY2Vzc0tleUlkID0gZGVzZW5zaXRpemF0aW9uKGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleUlkLnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QWNjZXNzS2V5U2VjcmV0ID0gZGVzZW5zaXRpemF0aW9uKGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleVNlY3JldC50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgQWNjZXNzS2V5SWQgWyR7ZGVmYXVsdEFjY2Vzc0tleUlkfV06YCwge1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWNob0JhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbnB1dDogYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5SWQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYEFjY2Vzc0tleVNlY3JldCBbJHtkZWZhdWx0QWNjZXNzS2V5U2VjcmV0fV06YCwge1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWNob0JhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbnB1dDogYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5U2VjcmV0LnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdBY2Nlc3NLZXlJZDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdBY2Nlc3NLZXlTZWNyZXQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRDb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleUlkKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlTZWNyZXQpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGEgY2VydGlmaWNhdGlvbiBtZXRob2QgbXVzdCBiZSBzZWxlY3RlZCcsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dENvbmZpZ0luZm8uZW5kcG9pbnQgPSBlbmRwb2ludFxuICAgICAgICBpbnB1dENvbmZpZ0luZm8ucmVnaW9uSWQgPSByZWdpb25JZFxuICAgICAgICBsZXQgZmlsZSA9IHBhdGguam9pbihjb25maWdTYXZlUGF0aCk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZSwgSlNPTi5zdHJpbmdpZnkoaW5wdXRDb25maWdJbmZvLCBudWxsLCAnXFx0JykpO1xuICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFlvdXIgY2RrIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gc2F2ZWQgc3VjY2Vzc2Z1bGx5IWApO1xuICAgICAgICBleGl0KDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb25maWdTZXQob3B0aW9uczogQ29uZmlnU2V0T3B0aW9ucykge1xuICAgICAgICBsZXQgY29uZmlnU2F2ZVBhdGggPSAob3B0aW9ucy5nbG9iYWwgPyBHTE9CQUxfUEFUSCA6IExPQ0FMX1BBVEgpICsgQ09ORklHX05BTUU7XG4gICAgICAgIGxldCBtb2RlVHlwZSA9IG9wdGlvbnMubW9kZTtcbiAgICAgICAgbGV0IGNvbmZpZ0luZm86IGFueSA9IHt9O1xuICAgICAgICBsZXQgYWsgPSBvcHRpb25zLmFrID8gb3B0aW9ucy5hayA6ICcnO1xuICAgICAgICBsZXQgc2sgPSBvcHRpb25zLnNrID8gb3B0aW9ucy5zayA6ICcnO1xuICAgICAgICBsZXQgc3RzVG9rZW4gPSBvcHRpb25zLnN0cyA/IG9wdGlvbnMuc3RzIDogJyc7XG4gICAgICAgIGxldCByYW1Sb2xlQXJuID0gb3B0aW9ucy5yYW1Sb2xlQXJuID8gb3B0aW9ucy5yYW1Sb2xlQXJuIDogJyc7XG4gICAgICAgIGxldCByb2xlU2Vzc2lvbk5hbWUgPSBvcHRpb25zLnJvbGVTZXNzaW9uTmFtZSA/IG9wdGlvbnMucm9sZVNlc3Npb25OYW1lIDogJyc7XG4gICAgICAgIGxldCByYW1Sb2xlTmFtZSA9IG9wdGlvbnMucmFtUm9sZU5hbWUgPyBvcHRpb25zLnJhbVJvbGVOYW1lIDogJyc7XG4gICAgICAgIGlmIChtb2RlVHlwZSA9PT0gJ0FLJykge1xuICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYWNjZXNzX2tleScsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhayksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoc2spXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlID09PSAnU3RzVG9rZW4nKSB7XG4gICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHMnLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWspLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHNrKSxcbiAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBhd2FpdCBjaXBoZXIoc3RzVG9rZW4pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhbV9yb2xlX2FybicsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhayksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoc2spLFxuICAgICAgICAgICAgICAgIHJvbGVBcm46IHJhbVJvbGVBcm4sXG4gICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiByb2xlU2Vzc2lvbk5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGUgPT09ICdFY3NSYW1Sb2xlJykge1xuICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgICAgICAgICByb2xlTmFtZTogcmFtUm9sZU5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBhdXRoZW50aWNhdGUgbW9kZSBtdXN0IGJlIGluIChBS3xTdHNUb2tlbnxSYW1Sb2xlQXJufEVjc1JhbVJvbGUpJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaWxlID0gcGF0aC5qb2luKGNvbmZpZ1NhdmVQYXRoKTtcbiAgICAgICAgY29uZmlnSW5mby5yZWdpb25JZCA9IG9wdGlvbnMucmVnaW9uO1xuICAgICAgICBjb25maWdJbmZvLmVuZHBvaW50ID0gb3B0aW9ucy5lbmRwb2ludDtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlLCBKU09OLnN0cmluZ2lmeShjb25maWdJbmZvLCBudWxsLCAnXFx0JykpO1xuICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFlvdXIgY2RrIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gc2F2ZWQgc3VjY2Vzc2Z1bGx5IWApO1xuICAgICAgICBleGl0KDApO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFzeW5jIGxvYWRDbGlDb25maWcob3B0aW9uczogTG9hZENvbmZpZ09wdGlvbnMpIHtcbiAgICAgICAgbGV0IGNvbmZpZ1NhdmVQYXRoID0gKG9wdGlvbnMuZ2xvYmFsID8gR0xPQkFMX1BBVEggOiBMT0NBTF9QQVRIKSArIENPTkZJR19OQU1FO1xuICAgICAgICBsZXQgY29uZmlndXJlSW5mb3MgPSBhd2FpdCB0aGlzLmdldENsaUNvbmZpZyhvcHRpb25zLmxvYWRGaWxlUGF0aClcbiAgICAgICAgbGV0IG1vZGVUeXBlID0gT2JqZWN0LmtleXMoY29uZmlndXJlSW5mb3MpO1xuICAgICAgICBsZXQgbW9kZUluZGV4ID0gcmVhZGxpbmVTeW5jLmtleUluU2VsZWN0KG1vZGVUeXBlLCAnU2VsZWN0IGF1dGhlbnRpY2F0ZSBtb2RlOicpO1xuICAgICAgICBsZXQgcHJvZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBsZXQgcHJvZmlsZUNvbmZpZzogYW55ID0ge307XG4gICAgICAgIGlmIChtb2RlSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBjZXJ0aWZpY2F0aW9uIG1ldGhvZCBtdXN0IGJlIHNlbGVjdGVkJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdBSycpIHtcbiAgICAgICAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLkFLLm1hcCgoaXRlbTogeyBuYW1lOiBhbnk7IH0pID0+IGl0ZW0ubmFtZSlcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnU3RzVG9rZW4nKSB7XG4gICAgICAgICAgICBwcm9maWxlTmFtZXMgPSBjb25maWd1cmVJbmZvcy5TdHNUb2tlbi5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1JhbVJvbGVBcm4nKSB7XG4gICAgICAgICAgICBwcm9maWxlTmFtZXMgPSBjb25maWd1cmVJbmZvcy5SYW1Sb2xlQXJuLm1hcCgoaXRlbTogeyBuYW1lOiBhbnk7IH0pID0+IGl0ZW0ubmFtZSlcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgICAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLkVjc1JhbVJvbGUubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgICAgICB9XG4gICAgICAgIGxldCBwcm9maWxlSW5kZXggPSByZWFkbGluZVN5bmMua2V5SW5TZWxlY3QocHJvZmlsZU5hbWVzLCAnU2VsZWN0IEF1dGhlbnRpY2F0ZSBwcm9maWxlIG5hbWU6Jyk7XG4gICAgICAgIGlmIChwcm9maWxlSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBjZXJ0aWZpY2F0aW9uIHByb2ZpbGUgbXVzdCBiZSBzZWxlY3RlZCcsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZW5kcG9pbnQgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdlbmRwb2ludCcsIHRydWUpXG4gICAgICAgIGxldCByZWdpb25JZDtcbiAgICAgICAgbGV0IGNvbmZpZ0luZm86IGFueSA9IHt9O1xuICAgICAgICBlbmRwb2ludCA9IGVuZHBvaW50ID8gZW5kcG9pbnQgOiAnaHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tJztcbiAgICAgICAgc3dpdGNoIChtb2RlVHlwZVttb2RlSW5kZXhdKSB7XG4gICAgICAgICAgICBjYXNlICdBSyc6XG4gICAgICAgICAgICAgICAgcHJvZmlsZUNvbmZpZyA9IGNvbmZpZ3VyZUluZm9zLkFLLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmICghcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSB8fCAhcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10pIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYWNjZXNzS2V5SWQgb3IgYWNjZXNzS2V5U2VjcmV0IENhbm5vdCBiZSBlbXB0eSEnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWNjZXNzX2tleScsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTdHNUb2tlbic6XG4gICAgICAgICAgICAgICAgcHJvZmlsZUNvbmZpZyA9IGNvbmZpZ3VyZUluZm9zLlN0c1Rva2VuLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmICghcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSB8fCAhcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10gfHwgIXByb2ZpbGVDb25maWdbJ3NlY3VyaXR5VG9rZW4nXSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhY2Nlc3NLZXlJZCwgYWNjZXNzS2V5U2VjcmV0IG9yIHNlY3VyaXR5VG9rZW4gQ2Fubm90IGJlIGVtcHR5IScsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHMnLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10pLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSksXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydzZWN1cml0eVRva2VuJ10pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1JhbVJvbGVBcm4nOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5SYW1Sb2xlQXJuLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmICghcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSB8fCAhcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10gfHwgIXByb2ZpbGVDb25maWdbJ3JvbGVBcm4nXSB8fCAhcHJvZmlsZUNvbmZpZ1sncm9sZVNlc3Npb25OYW1lJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYWNjZXNzS2V5SWQsIGFjY2Vzc0tleVNlY3JldCwgcm9sZUFybiBvciByb2xlU2Vzc2lvbk5hbWUgQ2Fubm90IGJlIGVtcHR5IScsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyYW1fcm9sZV9hcm4nLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10pLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSksXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBcm46IHByb2ZpbGVDb25maWdbJ3JvbGVBcm4nXSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiBwcm9maWxlQ29uZmlnWydyb2xlU2Vzc2lvbk5hbWUnXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdFY3NSYW1Sb2xlJzpcbiAgICAgICAgICAgICAgICBwcm9maWxlQ29uZmlnID0gY29uZmlndXJlSW5mb3MuRWNzUmFtUm9sZS5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ3JvbGVOYW1lJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgcm9sZU5hbWUgQ2Fubm90IGJlIGVtcHR5IScsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlY3NfcmFtX3JvbGUnLFxuICAgICAgICAgICAgICAgICAgICByb2xlTmFtZTogcHJvZmlsZUNvbmZpZ1sncm9sZU5hbWUnXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmVnaW9uSWQgPSBwcm9maWxlQ29uZmlnWydyZWdpb24nXSA/IHByb2ZpbGVDb25maWdbJ3JlZ2lvbiddIDogJ2NuLWhhbmd6aG91JztcbiAgICAgICAgY29uZmlnSW5mby5yZWdpb25JZCA9IHJlZ2lvbklkXG4gICAgICAgIGNvbmZpZ0luZm8uZW5kcG9pbnQgPSBlbmRwb2ludFxuICAgICAgICBsZXQgZmlsZSA9IHBhdGguam9pbihjb25maWdTYXZlUGF0aCk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnSW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBZb3VyIGNkayBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGxvYWQgZnJvbSBBbGl5dW4gQ2xpIGNvbmZpZ3VyYXRpb24gc2F2ZWQgc3VjY2Vzc2Z1bGx5ICVzICVzIWAsIG1vZGVUeXBlW21vZGVJbmRleF0sIHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgZXhpdCgwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgbGlzdChzZWxlY3RvcnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdEFsbFN0YWNrc0ZvckRlZmF1bHQoc2VsZWN0b3JzKTtcbiAgICAgICAgZm9yIChjb25zdCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgIGxldCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpO1xuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHN0YWNrSW5mby5zdGF0dXNcbiAgICAgICAgICAgIGRhdGEoc3RhY2suaWQsIHN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN5bnRoZXNpemUgdGhlIGdpdmVuIHNldCBvZiBzdGFja3MgKGNhbGxlZCB3aGVuIHRoZSB1c2VyIHJ1bnMgJ2NkayBzeW50aCcpXG4gICAgICpcbiAgICAgKiBJTlBVVDogU3RhY2sgbmFtZXMgY2FuIGJlIHN1cHBsaWVkIHVzaW5nIGEgZ2xvYiBmaWx0ZXIuIElmIG5vIHN0YWNrcyBhcmVcbiAgICAgKiBnaXZlbiwgYWxsIHN0YWNrcyBmcm9tIHRoZSBhcHBsaWNhdGlvbiBhcmUgaW1wbGljdGx5IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogT1VUUFVUOiBJZiBtb3JlIHRoYW4gb25lIHN0YWNrIGVuZHMgdXAgYmVpbmcgc2VsZWN0ZWQsIGFuIG91dHB1dCBkaXJlY3RvcnlcbiAgICAgKiBzaG91bGQgYmUgc3VwcGxpZWQsIHdoZXJlIHRoZSB0ZW1wbGF0ZXMgd2lsbCBiZSB3cml0dGVuLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBzeW50aChzdGFja05hbWVzOiBzdHJpbmdbXSwgZXhjbHVzaXZlbHk6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEaWZmKHN0YWNrTmFtZXMsIGV4Y2x1c2l2ZWx5KTtcblxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgc2luZ2xlIHN0YWNrLCBwcmludCBpdCB0byBTVERPVVRcbiAgICAgICAgaWYgKHN0YWNrcy5zdGFja0NvdW50ID09PSAxKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja3MuZmlyc3RTdGFjay5pZCwgU1lOVEhfU1RBQ0ssIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICByZXR1cm4gc3RhY2tzLmZpcnN0U3RhY2sudGVtcGxhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFjay5pZCwgU1lOVEhfU1RBQ0ssIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0ludGVnTW9kZSA9IHByb2Nlc3MuZW52LkNES19JTlRFR19NT0RFID09PSAnMSc7XG4gICAgICAgIGlmIChpc0ludGVnTW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YWNrcy5zdGFja0FydGlmYWN0cy5tYXAoKHMpID0+IHMudGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm90IG91dHB1dHRpbmcgdGVtcGxhdGUgdG8gc3Rkb3V0LCBsZXQncyBleHBsYWluIHRoaW5ncyB0byB0aGUgdXNlciBhIGxpdHRsZSBiaXQuLi5cbiAgICAgICAgc3VjY2VzcyhgU3VjY2Vzc2Z1bGx5IHN5bnRoZXNpemVkIHRvICR7Y29sb3JzLmJsdWUocGF0aC5yZXNvbHZlKHN0YWNrcy5hc3NlbWJseS5kaXJlY3RvcnkpKX1gKTtcbiAgICAgICAgcHJpbnQoXG4gICAgICAgICAgICBgU3VwcGx5IGEgc3RhY2sgaWQgKCR7c3RhY2tzLnN0YWNrQXJ0aWZhY3RzLm1hcCgocykgPT4gY29sb3JzLmdyZWVuKHMuaWQpKS5qb2luKCcsICcpfSkgdG8gZGlzcGxheSBpdHMgdGVtcGxhdGUuYCxcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBwdWJsaXNoQXNzZXRzKGFzc2V0c0pzb246IHsgW2tleTogc3RyaW5nXTogYW55IH0sIG91dGRpcjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gYXNzZXRzSnNvblsnZmlsZXMnXTtcbiAgICAgICAgY29uc3QgZmlsZXNOdW0gPSBPYmplY3Qua2V5cyhmaWxlcykubGVuZ3RoO1xuICAgICAgICBpZiAoZmlsZXNOdW0gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlsZXNOdW0gPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVLZXkgPSBPYmplY3Qua2V5cyhmaWxlcylbMF07XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZXNbZmlsZUtleV07XG4gICAgICAgICAgICBpZiAoZmlsZS5zb3VyY2UgJiYgZmlsZS5zb3VyY2UucGF0aC5lbmRzV2l0aCgnLnRlbXBsYXRlLmpzb24nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25maWcgPSBhd2FpdCBDZGtUb29sa2l0LmdldENvbmZpZygpO1xuICAgICAgICBsZXQgY2xpZW50X3BhcmFtcztcbiAgICAgICAgaWYgKCFjb25maWcuYWNjZXNzS2V5SWQgfHwgIWNvbmZpZy5hY2Nlc3NLZXlTZWNyZXQpIHtcbiAgICAgICAgICAgIGVycm9yKFwiUGxlYXNlIHVzZSAncm9zLWNkayBjb25maWcgKC1nKScgb3Igc2V0IGVudmlyb25tZW50IHRvIHNldCB5b3VyIGFjY291bnQgY29uZmlndXJhdGlvbiBmaXJzdGx5IVwiKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWNvbmZpZy5zZWN1cml0eVRva2VuKSB7XG4gICAgICAgICAgICBjbGllbnRfcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIHJlZ2lvbjogYG9zcy0ke2NvbmZpZy5yZWdpb25JZH1gLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBjb25maWcuYWNjZXNzS2V5SWQsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBjb25maWcuYWNjZXNzS2V5U2VjcmV0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xpZW50X3BhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICByZWdpb246IGBvc3MtJHtjb25maWcucmVnaW9uSWR9YCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogY29uZmlnLmFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogY29uZmlnLmFjY2Vzc0tleVNlY3JldCxcbiAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBjb25maWcuc2VjdXJpdHlUb2tlblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgb3NzQ2xpZW50KGNsaWVudF9wYXJhbXMpO1xuICAgICAgICBsZXQgYnVja2V0TmFtZTtcbiAgICAgICAgbGV0IGJ1Y2tldEV4aXN0cyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdG9yYWdlQ2xhc3M6ICdTdGFuZGFyZCcsXG4gICAgICAgICAgICBhY2w6ICdwcml2YXRlJyxcbiAgICAgICAgICAgIGRhdGFSZWR1bmRhbmN5VHlwZTogJ0xSUydcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlYWRGaWxlcyA9IChmb2xkZXI6IHN0cmluZywgemlwOiBqc3ppcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgemlwRmlsZXMgPSBmcy5yZWFkZGlyU3luYyhmb2xkZXIpO1xuICAgICAgICAgICAgemlwRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKGZvbGRlciwgZmlsZSk7XG4gICAgICAgICAgICAgICAgaWYgKGZzLnN0YXRTeW5jKGZpbGVQYXRoKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YlppcCA9IHppcC5mb2xkZXIoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJaaXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRGaWxlcyhmaWxlUGF0aCwgc3ViWmlwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB6aXAuZmlsZShmaWxlLCBjb250ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhmaWxlcykpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGZpbGVzW2tleV1bJ3NvdXJjZSddO1xuICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBmaWxlc1trZXldWydkZXN0aW5hdGlvbnMnXTtcbiAgICAgICAgICAgIGxldCBhc3NldFBhdGggPSBwYXRoLmpvaW4ob3V0ZGlyLCBzb3VyY2VbJ3BhdGgnXSlcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdEtleSA9IGRlc3RpbmF0aW9uWydjdXJyZW50X2FjY291bnQtY3VycmVudF9yZWdpb24nXVsnb2JqZWN0S2V5J107XG4gICAgICAgICAgICBpZiAoc291cmNlWydwYWNrYWdpbmcnXSA9PT0gJ3ppcCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB6aXAgPSBuZXcganN6aXAoKTtcbiAgICAgICAgICAgICAgICByZWFkRmlsZXMoYXNzZXRQYXRoLCB6aXApO1xuICAgICAgICAgICAgICAgIGFzc2V0UGF0aCA9IHBhdGguam9pbihvdXRkaXIsIGAke3NvdXJjZVsncGF0aCddfS56aXBgKVxuICAgICAgICAgICAgICAgIGF3YWl0IHppcC5nZW5lcmF0ZUFzeW5jKHsgdHlwZTogJ25vZGVidWZmZXInIH0pLnRoZW4oKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhhc3NldFBhdGgsIGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRm9sZGVyIGNvbXByZXNzZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdFcnJvciBjb21wcmVzc2luZyBmb2xkZXI6XFxuJywgZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYnVja2V0RXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgYnVja2V0TmFtZSA9IGRlc3RpbmF0aW9uWydjdXJyZW50X2FjY291bnQtY3VycmVudF9yZWdpb24nXVsnYnVja2V0TmFtZSddLnJlcGxhY2UoJyR7QUxJWVVOOjpSZWdpb259JywgY29uZmlnLnJlZ2lvbklkKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBjbGllbnQucHV0QnVja2V0KGJ1Y2tldE5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBidWNrZXRFeGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ3JlYXRlIGJ1Y2tldCgke2J1Y2tldE5hbWV9KSBzdWNjZXNzZnVsbHkhYCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihgRXJyb3IgY3JlYXRlIGJ1Y2tldCgke2J1Y2tldE5hbWV9KTpcXG5gLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gbmV3IG9zc0NsaWVudCh7YnVja2V0OiBidWNrZXROYW1lLCAuLi5jbGllbnRfcGFyYW1zfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgJ3gtb3NzLXN0b3JhZ2UtY2xhc3MnOiAnU3RhbmRhcmQnLFxuICAgICAgICAgICAgICAgICd4LW9zcy1vYmplY3QtYWNsJzogJ3ByaXZhdGUnLFxuICAgICAgICAgICAgICAgICd4LW9zcy1mb3JiaWQtb3ZlcndyaXRlJzogJ2ZhbHNlJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBzdG9yZS5wdXQob2JqZWN0S2V5LCBwYXRoLm5vcm1hbGl6ZShhc3NldFBhdGgpLCBoZWFkZXJzKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVcGxvYWQgZmlsZSgke2Fzc2V0UGF0aH0pIHRvIGJ1Y2tldCgke2J1Y2tldE5hbWV9KSBzdWNjZXNzZnVsbHkhYCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoYEVycm9yIHVwbG9hZCBmaWxlKCR7YXNzZXRQYXRofSkgdG8gYnVja2V0KCR7YnVja2V0TmFtZX0pOlxcbmAsIGUpO1xuICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1Y2tldE5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlcGxveShvcHRpb25zOiBEZXBsb3lPcHRpb25zKSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZUJvZHk6IGFueTtcbiAgICAgICAgbGV0IHN5bmMgPSBvcHRpb25zLnN5bmNcbiAgICAgICAgbGV0IG91dHB1dHMgPSBvcHRpb25zLm91dHB1dHNGaWxlXG4gICAgICAgIGxldCBza2lwSWZOb0NoYW5nZXMgPSBvcHRpb25zLnNraXBJZk5vQ2hhbmdlc1xuICAgICAgICBsZXQgcmVzb3VyY2VHcm91cElkID0gb3B0aW9ucy5yZXNvdXJjZUdyb3VwSWRcbiAgICAgICAgbGV0IGRldGFpbExvZyA9IG9wdGlvbnMuZGV0YWlsTG9nXG4gICAgICAgIGxldCBkaXNhYmxlUm9sbGJhY2sgPSBvcHRpb25zLmRpc2FibGVSb2xsYmFja1xuICAgICAgICBsZXQgY29uZmlnX3JlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIGNvbmZpZ19yZWdpb24gPSBjb25maWdfcmVnaW9uID8gY29uZmlnX3JlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcblxuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXBsb3kob3B0aW9ucy5zdGFja05hbWVzLCBvcHRpb25zLmV4Y2x1c2l2ZWx5KTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgbGV0IGV4aXRTaWduYWwgPSAwO1xuICAgICAgICBjb25zdCBvdXRkaXIgPSB0aGlzLnByb3BzLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuZ2V0KFsnb3V0cHV0J10pXG4gICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHN0YWNrTmFtZSA9IHN0YWNrLnN0YWNrTmFtZTtcbiAgICAgICAgICAgIGxldCByZWdpb25JZCA9IG9wdGlvbnMucmVnaW9uSWQ7XG4gICAgICAgICAgICBpZiAocmVnaW9uSWQgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgICAgIHJlZ2lvbklkID0gY29uZmlnX3JlZ2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBidWNrZXROYW1lO1xuICAgICAgICAgICAgY29uc3QgYXNzZXRzSnNvbkZpbGVQYXRoID0gcGF0aC5qb2luKG91dGRpciwgYCR7c3RhY2tOYW1lfS5hc3NldHMuanNvbmApXG4gICAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhhc3NldHNKc29uRmlsZVBhdGgpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0c0ZpbGVCb2R5ID0gZnMucmVhZEZpbGVTeW5jKGFzc2V0c0pzb25GaWxlUGF0aCk7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0c0pzb24gPSBKU09OLnBhcnNlKGFzc2V0c0ZpbGVCb2R5LnRvU3RyaW5nKCd1dGYtOCcpLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgYnVja2V0TmFtZSA9IGF3YWl0IHRoaXMucHVibGlzaEFzc2V0cyhhc3NldHNKc29uLCBvdXRkaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVKc29uRmlsZVBhdGggPSBwYXRoLmpvaW4ob3V0ZGlyLCBgJHtzdGFja05hbWV9LnRlbXBsYXRlLmpzb25gKVxuICAgICAgICAgICAgbGV0IHRlbXBsYXRlRmlsZUJvZHkgPSBmcy5yZWFkRmlsZVN5bmModGVtcGxhdGVKc29uRmlsZVBhdGgpO1xuICAgICAgICAgICAgbGV0IENsaWVudFRva2VuID0gZ2VuZXJhdGVTYWZlSWQoKTtcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZUJvZHlCYXNlNjREYXRhID0gdGVtcGxhdGVGaWxlQm9keS50b1N0cmluZygnYmFzZTY0JykudHJpbSgpO1xuICAgICAgICAgICAgbGV0IHRtcFNpZ25hbCA9IDA7XG4gICAgICAgICAgICBpZiAoQnVmZmVyLmJ5dGVMZW5ndGgodGVtcGxhdGVGaWxlQm9keSwgJ3V0ZjgnKSA8IDUyNDI3Mykge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlQm9keSA9IGBAQmFzZTY0RW5jb2RlZDogJHt0ZW1wbGF0ZUJvZHlCYXNlNjREYXRhfWBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVCb2R5ID0gdGVtcGxhdGVGaWxlQm9keVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNvbnRlbnQ6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIFN0YWNrTmFtZTogc3RhY2tOYW1lLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgVGltZW91dEluTWludXRlczogb3B0aW9ucy50aW1lb3V0LFxuICAgICAgICAgICAgICAgIFRlbXBsYXRlQm9keTogdGVtcGxhdGVCb2R5LFxuICAgICAgICAgICAgICAgIENsaWVudFRva2VuOiBDbGllbnRUb2tlbixcbiAgICAgICAgICAgICAgICBEaXNhYmxlUm9sbGJhY2s6IGRpc2FibGVSb2xsYmFja1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zWydtZXRob2QnXSA9ICdQT1NUJ1xuXG4gICAgICAgICAgICBpZiAocmVzb3VyY2VHcm91cElkKSB7XG4gICAgICAgICAgICAgICAgY29udGVudFsnUmVzb3VyY2VHcm91cElkJ10gPSByZXNvdXJjZUdyb3VwSWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YWNrLnRhZ3MpIHtcbiAgICAgICAgICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDE7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFzID0gc3RhY2sudGFncztcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFsnVGFncy4nICsgY291bnQudG9TdHJpbmcoKSArICcuS2V5J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1RhZ3MuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlZhbHVlJ10gPSBwYXJhc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyYXMgPSBvcHRpb25zLnBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1BhcmFtZXRlcnMuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlBhcmFtZXRlcktleSddID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50WydQYXJhbWV0ZXJzLicgKyBjb3VudC50b1N0cmluZygpICsgJy5QYXJhbWV0ZXJWYWx1ZSddID0gcGFyYXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpXG4gICAgICAgICAgICBpZiAobG9jYWxTdGFja0luZm8ucmVnaW9uSWQpIHtcbiAgICAgICAgICAgICAgICByZWdpb25JZCA9IGxvY2FsU3RhY2tJbmZvLnJlZ2lvbklkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZW50WydSZWdpb25JZCddID0gcmVnaW9uSWRcbiAgICAgICAgICAgIGlmIChsb2NhbFN0YWNrSW5mby5zdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUsIHJlc291cmNlR3JvdXBJZCwgcmVnaW9uSWQpXG4gICAgICAgICAgICAgICAgaWYgKHN0YWNrSW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgc3RhY2tcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RhY2tJbmZvLnN0YWNrSWQgIT09IHN0YWNrSW5mby5TdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihg4p2MIEZhaWwgdG8gdXBkYXRlIHN0YWNrLCBiZWNhdXNlIHRoZSBsb2NhbGx5IHJlY29yZGVkIHN0YWNrSWQoJHtsb2NhbFN0YWNrSW5mby5zdGFja0lkfSkgYW5kIHRoZSByZW1vdGUgc3RhY2tJZCgke3N0YWNrSW5mby5TdGFja0lkfSkgYXJlIGluY29uc2lzdGVudC5gKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wU2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1N0YWNrSWQnXSA9IHN0YWNrSW5mby5TdGFja0lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWNrU3RhdHVzID0gc3RhY2tJbmZvLlN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWNrVXBkYXRlVGltZSA9IHN0YWNrSW5mby5VcGRhdGVUaW1lID8gc3RhY2tJbmZvLlVwZGF0ZVRpbWUgOiBzdGFja0luZm8uQ3JlYXRlVGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrU3RhdHVzLmluZGV4T2YoXCJJTl9QUk9HUkVTU1wiKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnJXM6IGRlcGxveWluZy4uLicsIGNvbG9ycy5ib2xkKHN0YWNrTmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcFNpZ25hbCA9IGF3YWl0IHRoaXMucm9zVXBkYXRlU3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgb3V0cHV0cywgc2tpcElmTm9DaGFuZ2VzLCBzdGFja1VwZGF0ZVRpbWUsIGRldGFpbExvZywgc3luYywgc3RhY2tOYW1lLCBidWNrZXROYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wU2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjaywgYmVjYXVzZSBzdGFjayBzdGF0dXMgaXMgJXMnLCBzdGFja1N0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCclczogZGVwbG95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBTaWduYWwgPSBhd2FpdCB0aGlzLnJvc0RlcGxveVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIG91dHB1dHMsIHJlc291cmNlR3JvdXBJZCwgc3RhY2tOYW1lLCBkZXRhaWxMb2csIHN5bmMsIGJ1Y2tldE5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lLCByZXNvdXJjZUdyb3VwSWQsIHJlZ2lvbklkKVxuICAgICAgICAgICAgICAgIGlmIChzdGFja0luZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RhY2sgaXMgZXhpc3Qgc2VuZCBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdGYWlsIHRvIGNyZWF0ZSBzdGFjaywgYmVjYXVzZSBzdGFjayAlcyBhbHJlYWR5IGV4aXN0cyBpbiB0aGlzIHJlZ2lvbi4nLCBzdGFja05hbWUpXG4gICAgICAgICAgICAgICAgICAgIHRtcFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCclczogZGVwbG95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBTaWduYWwgPSBhd2FpdCB0aGlzLnJvc0RlcGxveVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIG91dHB1dHMsIHJlc291cmNlR3JvdXBJZCwgc3RhY2tOYW1lLCBkZXRhaWxMb2csIHN5bmMsIGJ1Y2tldE5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleGl0U2lnbmFsID0gZXhpdFNpZ25hbCB8IHRtcFNpZ25hbDtcbiAgICAgICAgICAgIGlmIChleGl0U2lnbmFsID09IDEgJiYgYnVja2V0TmFtZSAhPT0gdW5kZWZpbmVkICYmIGJ1Y2tldE5hbWUgIT09IG51bGwgJiYgYnVja2V0TmFtZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmRlbGV0ZUJ1Y2tldChidWNrZXROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleGl0KGV4aXRTaWduYWwpXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRpZmYob3B0aW9uczogRGlmZk9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0QWxsU3RhY2tzRm9yRGVmYXVsdChvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uSW5Mb2NhbCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbkluTG9jYWwgPSByZWdpb25JbkxvY2FsID8gcmVnaW9uSW5Mb2NhbCA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gb3B0aW9ucy5zdHJlYW0gfHwgcHJvY2Vzcy5zdGRlcnI7XG4gICAgICAgIGNvbnN0IGNvbnRleHRMaW5lcyA9IG9wdGlvbnMuY29udGV4dExpbmVzIHx8IDM7XG4gICAgICAgIGxldCBleGl0U2lnbmFsID0gMDtcbiAgICAgICAgbGV0IHJlcXVlc3RzID0gW107XG4gICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCk7XG4gICAgICAgICAgICBsZXQgcmVnaW9uSWQgPSBzdGFja0luZm8ucmVnaW9uSWQgPyBzdGFja0luZm8ucmVnaW9uSWQgOiByZWdpb25JbkxvY2FsO1xuICAgICAgICAgICAgaWYgKCFzdGFja0luZm8uc3RhY2tJZCkge1xuICAgICAgICAgICAgICAgIHN0cmVhbS53cml0ZShmb3JtYXQoJ1N0YWNrICVzIGhhcyBub3QgYmVlbiBkZXBsb3llZCBvciBzdGFjayBkb2VzblxcJ3QgZXhpc3QgaW4gdGhlIHN0YWNrLmluZm8uanNvbiBmaWxlIFxcbicsIGNvbG9ycy5ib2xkKHN0YWNrLmRpc3BsYXlOYW1lKSkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChjbGllbnQuZ2V0VGVtcGxhdGUoe1JlZ2lvbklkOiByZWdpb25JZCwgU3RhY2tJZDogc3RhY2tJbmZvLnN0YWNrSWR9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkZXNlcmlhbGl6ZVN0cnVjdHVyZShyZXMuVGVtcGxhdGVCb2R5KTtcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtLndyaXRlKGZvcm1hdCgnU3RhY2sgJXNcXG4nLCBjb2xvcnMuYm9sZChzdGFjay5kaXNwbGF5TmFtZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpbnRTdGFja0RpZmYodGVtcGxhdGUsIHN0YWNrLCBjb250ZXh0TGluZXMsIHN0cmVhbSk7XG4gICAgICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIHN5bnRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2suaWQsIFNZTlRIX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHRlbXBsYXRlOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgICAgZXhpdChleGl0U2lnbmFsKVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBldmVudChvcHRpb25zOiBFdmVudE9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdE9ubHlTaW5nbGVTdGFja0ZvckRlZmF1bHQob3B0aW9ucy5zdGFja05hbWVzKTtcbiAgICAgICAgY29uc3Qgc3RhY2tOYW1lcyA9IHN0YWNrcy5zdGFja0lkc1xuICAgICAgICBsZXQgZXhpdFNpZ25hbCA9IDA7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCBMb2dpY2FsUmVzb3VyY2VJZHM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGlmIChvcHRpb25zLmxvZ2ljYWxSZXNvdXJjZUlkKSB7XG4gICAgICAgICAgICBMb2dpY2FsUmVzb3VyY2VJZHMucHVzaChvcHRpb25zLmxvZ2ljYWxSZXNvdXJjZUlkKVxuICAgICAgICB9XG4gICAgICAgIGxldCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpO1xuICAgICAgICAgICAgbGV0IHN0YWNrSWQgPSBzdGFja0luZm8uc3RhY2tJZFxuICAgICAgICAgICAgbGV0IHJlZ2lvbiA9IHN0YWNrSW5mby5yZWdpb25JZDtcbiAgICAgICAgICAgIGlmICghcmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihgVGhlIHN0YWNrIGlkIG9mIHRoZSBzcGVjaWZpYyBzdGFjaygke3N0YWNrTmFtZX0pIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHN0YWNrLmluZm8uanNvbiBmaWxlLmApXG4gICAgICAgICAgICAgICAgZXhpdFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2goY2xpZW50XG4gICAgICAgICAgICAgICAgLmxpc3RTdGFja0V2ZW50cyh7XG4gICAgICAgICAgICAgICAgICAgIFN0YWNrSWQ6IHN0YWNrSWQsXG4gICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICAgICAgICAgIExvZ2ljYWxSZXNvdXJjZUlkOiBMb2dpY2FsUmVzb3VyY2VJZHMsXG4gICAgICAgICAgICAgICAgICAgIFBhZ2VTaXplOiBvcHRpb25zLnBhZ2VTaXplID8gTnVtYmVyKG9wdGlvbnMucGFnZVNpemUpIDogMTAsXG4gICAgICAgICAgICAgICAgICAgIFBhZ2VOdW1iZXI6IG9wdGlvbnMucGFnZU51bWJlciA/IE51bWJlcihvcHRpb25zLnBhZ2VOdW1iZXIpIDogMVxuICAgICAgICAgICAgICAgIH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBldmVudHMgb2YgdGhlIHN0YWNrICVzIGFyZTogXFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKHN0YWNrTmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShKU09OLnN0cmluZ2lmeShyZXMuRXZlbnRzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBkZXN0cm95LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHN0YWNrIGV2ZW50czogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgICAgZXhpdChleGl0U2lnbmFsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb3V0cHV0KG9wdGlvbnM6IE91dFB1dE9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdEFsbFN0YWNrc0ZvckRlZmF1bHQob3B0aW9ucy5zdGFja05hbWVzKTtcbiAgICAgICAgY29uc3Qgc3RhY2tOYW1lcyA9IHN0YWNrcy5zdGFja0lkc1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgZXhpdFNpZ25hbCA9IDA7XG4gICAgICAgIGxldCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpO1xuICAgICAgICAgICAgbGV0IHN0YWNrSWQgPSBzdGFja0luZm8uc3RhY2tJZFxuICAgICAgICAgICAgbGV0IHJlZ2lvbiA9IHN0YWNrSW5mby5yZWdpb25JZDtcbiAgICAgICAgICAgIGlmICghcmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHN0YWNrLmluZm8uanNvbiBmaWxlLCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBzdGFjazogJXMhYCwgc3RhY2tOYW1lKVxuICAgICAgICAgICAgICAgIGV4aXRTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKGNsaWVudFxuICAgICAgICAgICAgICAgIC5nZXRTdGFjayh7XG4gICAgICAgICAgICAgICAgICAgIFN0YWNrSWQ6IHN0YWNrSWQsXG4gICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb25cbiAgICAgICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgb3V0cHV0cyBvZiB0aGUgc3RhY2sgJXMgYXJlOiBcXG4gJXMgXFxuYCwgY29sb3JzLmJsdWUoc3RhY2tOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5PdXRwdXRzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBkZXN0cm95LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHN0YWNrIG91dHB1dHM6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleGl0U2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIGV4aXQoZXhpdFNpZ25hbCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYXN5bmMgcmVzb3VyY2Uob3B0aW9uczogUmVzb3VyY2VPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RBbGxTdGFja3NGb3JEZWZhdWx0KG9wdGlvbnMuc3RhY2tOYW1lcyk7XG4gICAgICAgIGxldCBzdGFja05hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgIGlmICgoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKSkuc3RhY2tJZCkge1xuICAgICAgICAgICAgICAgIHN0YWNrTmFtZXMucHVzaChzdGFjay5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yKGBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGlzdCBpbiB0aGUgc3RhY2suaW5mby5qc29uIGZpbGUsIFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIHN0YWNrOiAlcyFgLCBzdGFjay5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgZXhpdFNpZ25hbCA9IDA7XG4gICAgICAgIGxldCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpO1xuICAgICAgICAgICAgbGV0IHJlZ2lvbiA9IHN0YWNrSW5mby5yZWdpb25JZDtcbiAgICAgICAgICAgIGlmICghcmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKGNsaWVudFxuICAgICAgICAgICAgICAgIC5saXN0U3RhY2tSZXNvdXJjZXMoe1xuICAgICAgICAgICAgICAgICAgICBTdGFja0lkOiAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrTmFtZSkpLnN0YWNrSWQsXG4gICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICAgICAgfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIGxpc3Qgb2YgcmVzb3VyY2VzIGluIHRoZSBzdGFjayAlcyBpczogXFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKHN0YWNrTmFtZSksIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5SZXNvdXJjZXMsIG51bGwsIFwiXFx0XCIpKSk7XG4gICAgICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIGRlc3Ryb3kuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0ssIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgc3RhY2sgcmVzb3VyY2U6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleGl0U2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIGV4aXQoZXhpdFNpZ25hbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdlbmVyYXRlU3RhY2tJbmZvKG9wdGlvbnM6IEdlbmVyYXRlU3RhY2tJbmZvT3B0aW9ucykge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RBbGxTdGFja3NGb3JEZWZhdWx0KFtdKTtcbiAgICAgICAgbGV0IHN0YWNrTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBTdGFja0luZm9zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgIHN0YWNrTmFtZXMgPSBzdGFja3Muc3RhY2tJZHNcbiAgICAgICAgZm9yIChsZXQgc3RhY2tOYW1lIG9mIHN0YWNrTmFtZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lLCBvcHRpb25zLnJlc291cmNlR3JvdXBJZCwgdW5kZWZpbmVkKVxuICAgICAgICAgICAgaWYgKHN0YWNrSW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFN0YWNrSW5mb3Nbc3RhY2tOYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBERVBMT1lfU1RBQ0ssXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrSWQ6IHN0YWNrSW5mby5TdGFja0lkLFxuICAgICAgICAgICAgICAgICAgICByZWdpb25JZDogc3RhY2tJbmZvLlJlZ2lvbklkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTdGFja0luZm9zW3N0YWNrTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogSU5JVF9TVEFDSyxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tJZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uSWQ6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KFN0YWNrSW5mb3MsIG51bGwsICdcXHQnKSk7XG4gICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICBgXFxuIOKchSBUaGUgZ2VuZXJhdGUgc3RhY2sgaW5mbyBoYXMgY29tcGxldGVkIWAsXG4gICAgICAgICk7XG4gICAgICAgIGV4aXQoMClcbiAgICB9XG5cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lOiBzdHJpbmcsIHJlc291cmNlR3JvdXBJZDogYW55LCByZWdpb246IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBpZiAoIXJlZ2lvbikge1xuICAgICAgICAgICAgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyYW1zOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICBQYWdlU2l6ZTogMTAsXG4gICAgICAgICAgICBQYWdlTnVtYmVyOiAxLFxuICAgICAgICAgICAgU3RhY2tOYW1lOiBbc3RhY2tOYW1lXVxuICAgICAgICB9O1xuICAgICAgICBpZiAocmVzb3VyY2VHcm91cElkKSB7XG4gICAgICAgICAgICBwYXJhbXNbJ1Jlc291cmNlR3JvdXBJZCddID0gcmVzb3VyY2VHcm91cElkXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5saXN0U3RhY2tzKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICBpZiAocmVzdWx0LlN0YWNrc1swXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuU3RhY2tzWzBdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZXJyb3IoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsaXN0U3RhY2tzKG9wdGlvbnM6IExpc3RTdGFja09wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCBwYXJhbXM6IGFueSA9IHt9O1xuICAgICAgICBsZXQgcmVnaW9uID0gb3B0aW9ucy5yZWdpb247XG4gICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICAgIFBhZ2VTaXplOiBvcHRpb25zLnBhZ2VTaXplID8gTnVtYmVyKG9wdGlvbnMucGFnZVNpemUpIDogMTAsXG4gICAgICAgICAgICBQYWdlTnVtYmVyOiBvcHRpb25zLnBhZ2VOdW1iZXIgPyBOdW1iZXIob3B0aW9ucy5wYWdlTnVtYmVyKSA6IDFcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG9wdGlvbnMucmVzb3VyY2VHcm91cElkKSB7XG4gICAgICAgICAgICBwYXJhbXMuUmVzb3VyY2VHcm91cElkID0gb3B0aW9ucy5yZXNvdXJjZUdyb3VwSWRcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXhpdFNpZ25hbCA9IDA7XG4gICAgICAgIGxldCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICBpZiAoIW9wdGlvbnMuYWxsKSB7XG4gICAgICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RBbGxTdGFja3NGb3JEZWZhdWx0KG9wdGlvbnMuc3RhY2tOYW1lcyk7XG4gICAgICAgICAgICBsZXQgcmVnaW9uTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgICAgIGxldCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpO1xuICAgICAgICAgICAgICAgIGlmIChyZWdpb24gJiYgc3RhY2tJbmZvLnJlZ2lvbklkICE9PSByZWdpb24pIHtjb250aW51ZX1cbiAgICAgICAgICAgICAgICBpZiAocmVnaW9uTWFwLmhhcyhzdGFja0luZm8ucmVnaW9uSWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbk1hcC5nZXQoc3RhY2tJbmZvLnJlZ2lvbklkKSEucHVzaChzdGFjay5pZClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWdpb25NYXAuc2V0KHN0YWNrSW5mby5yZWdpb25JZCwgW3N0YWNrLmlkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWdpb25NYXAuZm9yRWFjaCgoc3RhY2tOYW1lcywgcikgPT4ge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5TdGFja05hbWUgPSBzdGFja05hbWVzO1xuICAgICAgICAgICAgICAgIHBhcmFtcy5SZWdpb25JZCA9IHI7XG4gICAgICAgICAgICAgICAgcmVxdWVzdHMucHVzaChjbGllbnQubGlzdFN0YWNrcyhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIFN0YWNrcyBsaXN0IGluICR7cn0gaXM6XFxuICR7Y29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLlN0YWNrcywgbnVsbCwgXCJcXHRcIikpfSBcXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCfinYwgRmFpbCB0byBsaXN0IHN0YWNrcyBpbiAke3J9OiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0U2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghcmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpZ19yZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJlZ2lvbiA9IGNvbmZpZ19yZWdpb24gPyBjb25maWdfcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyYW1zLlJlZ2lvbklkID0gcmVnaW9uO1xuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChjbGllbnQubGlzdFN0YWNrcyhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBTdGFja3MgbGlzdCBpbiAke3JlZ2lvbn0gaXM6XFxuICR7Y29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLlN0YWNrcywgbnVsbCwgXCJcXHRcIikpfSBcXG5gKTtcbiAgICAgICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcign4p2MIEZhaWwgdG8gbGlzdCBzdGFja3MgaW4gJXM6ICVzICVzJywgcmVnaW9uLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICBleGl0U2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIGV4aXQoZXhpdFNpZ25hbCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYXN5bmMgaGFuZGxlRGVsKGNsaWVudDogYW55LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5kZWxldGUobmFtZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbi8vIOWIoOmZpOWkmuS4quaWh+S7tuOAglxuICAgIHB1YmxpYyBhc3luYyBkZWxldGVQcm9qZWN0cyhjbGllbnQ6IGFueSkge1xuICAgICAgICBsZXQgbGlzdCA9IGF3YWl0IGNsaWVudC5saXN0KCk7XG5cbiAgICAgICAgbGlzdC5vYmplY3RzID0gbGlzdC5vYmplY3RzIHx8IFtdO1xuXG4gICAgICAgIHdoaWxlIChsaXN0Lm9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwobGlzdC5vYmplY3RzLm1hcCgodjogYW55KSA9PiB0aGlzLmhhbmRsZURlbChjbGllbnQsIHYubmFtZSkpKTtcblxuICAgICAgICAgICAgbGlzdCA9IGF3YWl0IGNsaWVudC5saXN0KCk7XG4gICAgICAgICAgICBsaXN0Lm9iamVjdHMgPSBsaXN0Lm9iamVjdHMgfHwgW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlQnVja2V0KGJ1Y2tldE5hbWU6IHN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRDb25maWcoKTtcbiAgICAgICAgICAgIGxldCBjbGllbnQ7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5hY2Nlc3NLZXlJZCB8fCAhY29uZmlnLmFjY2Vzc0tleVNlY3JldCkge1xuICAgICAgICAgICAgICAgIGVycm9yKFwiUGxlYXNlIHVzZSAncm9zLWNkayBjb25maWcgKC1nKScgb3Igc2V0IGVudmlyb25tZW50IHRvIHNldCB5b3VyIGFjY291bnQgY29uZmlndXJhdGlvbiBmaXJzdGx5IVwiKTtcbiAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghY29uZmlnLnNlY3VyaXR5VG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjbGllbnQgPSBuZXcgb3NzQ2xpZW50KHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiBgb3NzLSR7Y29uZmlnLnJlZ2lvbklkfWAsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBjb25maWcuYWNjZXNzS2V5SWQsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogY29uZmlnLmFjY2Vzc0tleVNlY3JldCxcbiAgICAgICAgICAgICAgICAgICAgYnVja2V0OiBidWNrZXROYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsaWVudCA9IG5ldyBvc3NDbGllbnQoe1xuICAgICAgICAgICAgICAgICAgICByZWdpb246IGBvc3MtJHtjb25maWcucmVnaW9uSWR9YCxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGNvbmZpZy5hY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBjb25maWcuYWNjZXNzS2V5U2VjcmV0LFxuICAgICAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBjb25maWcuc2VjdXJpdHlUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgYnVja2V0OiBidWNrZXROYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRlbGV0ZVByb2plY3RzKGNsaWVudCk7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuZGVsZXRlQnVja2V0KGJ1Y2tldE5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYERlbGV0ZSBidWNrZXQoJHtidWNrZXROYW1lfSkgc3VjY2Vzc2Z1bGx5IWApO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ05vU3VjaEJ1Y2tldCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVzdHJveShvcHRpb25zOiBEZXN0cm95T3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0QWxsU3RhY2tzRm9yRGVmYXVsdChvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBsZXQgc3RhY2tOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgbGV0IHN5bmMgPSBvcHRpb25zLnN5bmNcbiAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBpZiAoKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCkpLnN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBzdGFja05hbWVzLnB1c2goc3RhY2suaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5xdWlldCkge1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlybSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihcbiAgICAgICAgICAgICAgICAgICAgJ1RoZSBmb2xsb3dpbmcgc3RhY2socykgd2lsbCBiZSBkZXN0cm95ZWQoT25seSBkZXBsb3llZCBzdGFja3Mgd2lsbCBiZSBkaXNwbGF5ZWQpLlxcblxcbicgK1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzLnRvU3RyaW5nKCkgK1xuICAgICAgICAgICAgICAgICAgICAnXFxuXFxuUGxlYXNlIGNvbmZpcm0uKFkvTilcXG4nLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0gPT09ICduJyB8fCBjb25maXJtID09PSAnTicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybSA9PT0gJ3knIHx8IGNvbmZpcm0gPT09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbmZpZ19yZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpO1xuICAgICAgICBjb25maWdfcmVnaW9uID0gY29uZmlnX3JlZ2lvbiA/IGNvbmZpZ19yZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCBleGl0U2lnbmFsID0gMDtcbiAgICAgICAgZm9yIChsZXQgc3RhY2tOYW1lIG9mIHN0YWNrTmFtZXMpIHtcbiAgICAgICAgICAgIGxldCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1Y2tldE5hbWUgPSBzdGFja0luZm8uYXNzZXRBc3NvY2lhdGVkQnVja2V0TmFtZTtcbiAgICAgICAgICAgIGxldCBjb250ZW50OiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBTdGFja0lkOiBzdGFja0luZm8uc3RhY2tJZCxcbiAgICAgICAgICAgICAgICBSZWdpb25JZDogc3RhY2tJbmZvLnJlZ2lvbklkID8gc3RhY2tJbmZvLnJlZ2lvbklkIDogY29uZmlnX3JlZ2lvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgIHByaW50KCclczogZGVzdHJveWluZy4uLicsIGNvbG9ycy5ib2xkKHN0YWNrTmFtZSkpO1xuICAgICAgICAgICAgICAgIGV4aXRTaWduYWwgPSBhd2FpdCB0aGlzLnN5bmNEZXN0cm95U3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpZW50LmRlbGV0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSywgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgRGVsZXRlIHRoZSBzdGFjaygke3N0YWNrTmFtZX0pIHN1Y2Nlc3NmdWxseSFcXG5SZXF1ZXN0ZWRJZDogJXNgLCBjb2xvcnMuYmx1ZShyZXMuUmVxdWVzdElkKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIGRlc3Ryb3kuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBkZWxldGUgc3RhY2s6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0U2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnVja2V0TmFtZSAhPT0gdW5kZWZpbmVkICYmIGJ1Y2tldE5hbWUgIT09IG51bGwgJiYgYnVja2V0TmFtZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmRlbGV0ZUJ1Y2tldChidWNrZXROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleGl0KGV4aXRTaWduYWwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc3luY1N0YWNrSW5mbygpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcbiAgICAgICAgbGV0IGZpbGVDb250ZW50ID0ge307XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShmaWxlQ29udGVudCwgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGVtcDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgICAgICAvLyBzZWxlY3Rvci5sZW5ndGggPSAwIG1lYW5zIHNlbGVjdCBhbGwgc3RhY2tzIGZyb20gdGhpcyBhcHBcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RBbGxTdGFja3NGb3JEZWZhdWx0KFtdKTtcbiAgICAgICAgZm9yIChjb25zdCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihTVEFDS19JTkZPLCBzdGFjay5pZCk7XG4gICAgICAgICAgICAvLyBpZiB0aGUgc3RhY2sgaGFzIG5vIGluZm8sIHRoZW4gYWRkIGluaXQgdGFnIGZvciBpdFxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGVtcFtzdGFjay5pZF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGVtcFtzdGFjay5pZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogSU5JVF9TVEFDSyxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tJZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uSWQ6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkodGVtcCwgbnVsbCwgJ1xcdCcpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgcmVnaW9uSWQ6IHN0cmluZ3x1bmRlZmluZWQsIGJ1Y2tldE5hbWU/OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPzogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgU1RBQ0tfSU5GTyk7XG4gICAgICAgIGxldCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGluZm8gPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcbiAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGluZm9bc3RhY2tOYW1lXTtcbiAgICAgICAgaWYgKCFzdGFja0luZm8pIHtcbiAgICAgICAgICAgIHN0YWNrSW5mbyA9IGluZm9bc3RhY2tOYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IERFUExPWV9TVEFDS19JRF9MRU5HVEgpIHtcbiAgICAgICAgICAgIHN0YWNrSW5mby5zdGF0dXMgPSBzdGF0dXM/PyBERVBMT1lfU1RBQ0s7XG4gICAgICAgICAgICBzdGFja0luZm8uc3RhY2tJZCA9IHZhbHVlO1xuICAgICAgICAgICAgc3RhY2tJbmZvLnJlZ2lvbklkID0gcmVnaW9uSWQ7XG4gICAgICAgICAgICBzdGFja0luZm8uYXNzZXRBc3NvY2lhdGVkQnVja2V0TmFtZSA9IGJ1Y2tldE5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFja0luZm8uc3RhdHVzID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IERFU1RST1lfU1RBQ0spIHtcbiAgICAgICAgICAgICAgICBzdGFja0luZm8uc3RhY2tJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3RhY2tJbmZvLnJlZ2lvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzdGFja0luZm8uYXNzZXRBc3NvY2lhdGVkQnVja2V0TmFtZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoaW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGZpbmRTdGFja0luZm8oc3RhY2tOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcbiAgICAgICAgbGV0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlQ29udGVudClbc3RhY2tOYW1lXTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0QWxsU3RhY2tzRm9yRGVmYXVsdChzdGFja05hbWVzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5BbGxTdGFja3MsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE5vIHZhbGlkYXRpb25cblxuICAgICAgICByZXR1cm4gc3RhY2tzO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0T25seVNpbmdsZVN0YWNrRm9yRGVmYXVsdChzdGFja05hbWVzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5Pbmx5U2luZ2xlLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBObyB2YWxpZGF0aW9uXG5cbiAgICAgICAgcmV0dXJuIHN0YWNrcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNlbGVjdFN0YWNrc0ZvckRlcGxveShzdGFja05hbWVzOiBzdHJpbmdbXSwgZXhjbHVzaXZlbHk/OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc3RhY2tOYW1lcywge1xuICAgICAgICAgICAgZXh0ZW5kOiBleGNsdXNpdmVseSA/IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uTm9uZSA6IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uVXBzdHJlYW0sXG4gICAgICAgICAgICBkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb24uT25seVNpbmdsZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZVN0YWNrcyhzdGFja3MpO1xuXG4gICAgICAgIHJldHVybiBzdGFja3M7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JEaWZmKHN0YWNrTmFtZXM6IHN0cmluZ1tdLCBleGNsdXNpdmVseT86IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzdGFja05hbWVzLCB7XG4gICAgICAgICAgICBleHRlbmQ6IGV4Y2x1c2l2ZWx5ID8gRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5Ob25lIDogRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5VcHN0cmVhbSxcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5BbGxTdGFja3MsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGVTdGFja3Moc3RhY2tzKTtcblxuICAgICAgICByZXR1cm4gc3RhY2tzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHRoZSBzdGFja3MgZm9yIGVycm9ycyBhbmQgd2FybmluZ3MgYWNjb3JkaW5nIHRvIHRoZSBDTEkncyBjdXJyZW50IHNldHRpbmdzXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyB2YWxpZGF0ZVN0YWNrcyhzdGFja3M6IFN0YWNrQ29sbGVjdGlvbikge1xuICAgICAgICBzdGFja3MucHJvY2Vzc01ldGFkYXRhTWVzc2FnZXMoe1xuICAgICAgICAgICAgaWdub3JlRXJyb3JzOiB0aGlzLnByb3BzLmlnbm9yZUVycm9ycyxcbiAgICAgICAgICAgIHN0cmljdDogdGhpcy5wcm9wcy5zdHJpY3QsXG4gICAgICAgICAgICB2ZXJib3NlOiB0aGlzLnByb3BzLnZlcmJvc2UsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXNzZW1ibHkoKTogUHJvbWlzZTxDbG91ZEFzc2VtYmx5PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNsb3VkRXhlY3V0YWJsZS5zeW50aGVzaXplKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRDbGlDb25maWcobG9hZEZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoOiBzdHJpbmc7XG4gICAgICAgIGxldCBjb25maWd1cmVJbmZvOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IGNvbmZpZ3VyZUluZm9zOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IEFLUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XG4gICAgICAgIGxldCBTdHNQcm9maWxlTGlzdDogb2JqZWN0W10gPSBbXTtcbiAgICAgICAgbGV0IFJhbVJvbGVBcm5Qcm9maWxlTGlzdDogb2JqZWN0W10gPSBbXTtcbiAgICAgICAgbGV0IEVjc1JhbVJvbGVQcm9maWxlTGlzdDogb2JqZWN0W10gPSBbXTtcbiAgICAgICAgaWYgKGxvYWRGaWxlUGF0aCkge1xuICAgICAgICAgICAgZmlsZVBhdGggPSBsb2FkRmlsZVBhdGhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBob21lUGF0aCA9IG9zLmhvbWVkaXIoKTtcbiAgICAgICAgICAgIGZpbGVQYXRoID0gaG9tZVBhdGggKyBDTElfQ09ORklHX0ZJTEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGxldCBBbGxQcm9maWxlcyA9IEpTT04ucGFyc2UoZmlsZSlbJ3Byb2ZpbGVzJ107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9maWxlIG9mIEFsbFByb2ZpbGVzKSB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IHByb2ZpbGUuYWNjZXNzX2tleV9pZCxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBwcm9maWxlLmFjY2Vzc19rZXlfc2VjcmV0LFxuICAgICAgICAgICAgICAgICAgICByZWdpb246IHByb2ZpbGUucmVnaW9uX2lkLFxuICAgICAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBwcm9maWxlLnN0c190b2tlbixcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFybjogcHJvZmlsZS5yYW1fcm9sZV9hcm4sXG4gICAgICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogcHJvZmlsZS5yYW1fc2Vzc2lvbl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICByb2xlTmFtZTogcHJvZmlsZS5yYW1fcm9sZV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlLm5hbWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvZmlsZS5tb2RlID09PSAnQUsnKSB7XG4gICAgICAgICAgICAgICAgICAgIEFLUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvcy5BSyA9IEFLUHJvZmlsZUxpc3RcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ1N0c1Rva2VuJykge1xuICAgICAgICAgICAgICAgICAgICBTdHNQcm9maWxlTGlzdC5wdXNoKGNvbmZpZ3VyZUluZm8pXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUluZm9zLlN0c1Rva2VuID0gU3RzUHJvZmlsZUxpc3RcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ1JhbVJvbGVBcm4nKSB7XG4gICAgICAgICAgICAgICAgICAgIFJhbVJvbGVBcm5Qcm9maWxlTGlzdC5wdXNoKGNvbmZpZ3VyZUluZm8pXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUluZm9zLlJhbVJvbGVBcm4gPSBSYW1Sb2xlQXJuUHJvZmlsZUxpc3RcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIEVjc1JhbVJvbGVQcm9maWxlTGlzdC5wdXNoKGNvbmZpZ3VyZUluZm8pXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUluZm9zLkVjc1JhbVJvbGUgPSBFY3NSYW1Sb2xlUHJvZmlsZUxpc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ3VyZUluZm9zIHx8IE9iamVjdC5rZXlzKGNvbmZpZ3VyZUluZm9zKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGVycm9yKFwiV0FOUk5JTkc6IFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIG1vZGUgYW5kIHByb2ZpbGUgY29uZmlndXJhdGlvbiBlbnRlcmVkLlwiKTtcbiAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3VyZUluZm9zXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcihcIldBTlJOSU5HOiBQbGVhc2UgY2hlY2sgQWxpeXVuIENsaSB0b29sIGNvbmZpZ3VyZSBhY2N1cmFjeSBvZiB0aGUgZGVmYXVsdCBwYXRoIG9yIHNwZWNpZmllZCBwYXRoLlwiKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHJvc0RlcGxveVN0YWNrKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIG91dHB1dHNGaWxlOiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBhbnksIHN0YWNrTmFtZTogYW55LCBkZXRhaWxMb2c6IGJvb2xlYW4sIHN5bmM6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWNrZXROYW1lPzogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrT3V0cHV0czogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgICAgICBsZXQgc2xlZXBUaW1lID0gMDtcbiAgICAgICAgbGV0IHN0YWNrSWQ6IGFueTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBjcmVhdGVTdGFja1Jlc3VsdCA9IGF3YWl0IGNsaWVudC5jcmVhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICBzdGFja0lkID0gY3JlYXRlU3RhY2tSZXN1bHQuU3RhY2tJZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKGBUaGUgJHtpfXRoIGRlcGxveW1lbnQgYXR0ZW1wdCBmYWlsZWQsIGFzIGRldGFpbGVkIGluICR7ZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlLmRhdGEgfHwgIShcIlJlcXVlc3RJZFwiIGluIGUuZGF0YSkgfHwgZS5jb2RlID09PSAnU2VydmljZVVuYXZhaWxhYmxlJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xlZXBUaW1lIDwgMjAwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsZWVwVGltZSA9IHNsZWVwVGltZSArIDUwMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoc2xlZXBUaW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuY29kZSA9PT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YWNrSWRJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUsIHJlc291cmNlR3JvdXBJZCwgY29udGVudFsnUmVnaW9uSWQnXSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1N0YWNrSWRJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja0lkID0gbmV3U3RhY2tJZEluZm8uU3RhY2tJZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCfinYwgRmFpbCB0byBjcmVhdGUgc3RhY2s6IEVycm9yQ29kZTogJXNcXG5SZXF1ZXN0ZWRJZDogJXNcXG5FcnJvck1lc3NhZ2U6JXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5jb2RlLCBlLmRhdGFbXCJSZXF1ZXN0SWRcIl0sIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN0YWNrSWQpIHtcbiAgICAgICAgICAgIGVycm9yKCfinYwgRmFpbCB0byBjcmVhdGUgc3RhY2ssIHBsZWFzZSBjaGVjayB5b3VyIHNlcnZpY2UgZW5kcG9pbnQuJylcbiAgICAgICAgICAgIHRocm93IG5ldyBOZXR3b3JrRXJyb3IoJ0FuIHVua25vd24gbmV0d29yayBlcnJvciBvY2N1cnMsIHBsZWFzZSBjaGVjayB0aGUgZW5kcG9pbnQgYW5kIHRyeSBhZ2FpbiBsYXRlci4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IG5ldyBSZXdyaXRhYmxlQmxvY2soc3RyZWFtKTtcbiAgICAgICAgICAgIHdpdGhEZWZhdWx0UHJpbnRlck9iaiA9IHNldEludGVydmFsKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBzdGFja0lkLCBibG9jaywgJ2RlcGxveScpXG4gICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMClcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiBjb250ZW50WydSZWdpb25JZCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhY2tJZDogc3RhY2tJZFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTdGFja1Jlc3VsdCA9IGF3YWl0IGNsaWVudC5nZXRTdGFjayhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBnZXRTdGFja1Jlc3VsdC5TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzUmVhc29uID0gZ2V0U3RhY2tSZXN1bHQuU3RhdHVzUmVhc29uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IGdldFN0YWNrUmVzdWx0LlN0YWNrTmFtZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXRzID0gZ2V0U3RhY2tSZXN1bHQuT3V0cHV0c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdDb21wbGV0ZSA9IFJlZ0V4cCgvQ09NUExFVEUvKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdGYWlsZWQgPSBSZWdFeHAoL0ZBSUxFRC8pXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykgfHwgcmVnRmFpbGVkLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgc3RhY2tJZCwgYmxvY2ssICdkZXBsb3knKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCdcXG5PdXRwdXRzOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrT3V0cHV0c1tzdGFja05hbWVdID0gb3V0cHV0cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG91dHB1dCBvZiBvdXRwdXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb3V0cHV0WydPdXRwdXRWYWx1ZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBvdXRwdXRbJ091dHB1dEtleSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IG91dHB1dFsnRGVzY3JpcHRpb24nXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJ1xcbiBLZXk6ICVzICBWYWx1ZTogJXMgRGVzY3JpcHRpb246ICVzJywgY29sb3JzLmN5YW4oa2V5KSwgY29sb3JzLmN5YW4odmFsdWUpLCBjb2xvcnMuY3lhbihkZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0c0ZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4oTE9DQUxfUEFUSCArIE9VVFBVVFNfSlNPTiksIEpTT04uc3RyaW5naWZ5KHN0YWNrT3V0cHV0cywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnRvU3RyaW5nKCkgPT0gJ0NSRUFURV9DT01QTEVURScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHN0YWNrSWQsIGNvbnRlbnRbJ1JlZ2lvbklkJ10sIGJ1Y2tldE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHN5bmMgY3JlYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblN0YXR1czogJXNcXG5TdGF0dXNSZWFzb246ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXNSZWFzb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGFja0lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgc3RhY2tJZCwgY29udGVudFsnUmVnaW9uSWQnXSwgYnVja2V0TmFtZSwgc3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKGBcXG7inYwgRmFpbCB0byBzeW5jIGNyZWF0ZSBzdGFjazpcXG5TdGF0dXM6ICVzXFxuU3RhdHVzUmVhc29uOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzUmVhc29uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhY2tJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignQW4gZXJyb3Igb2NjdXJzIHRyeWluZyB0byBnZXQgdGhlIHJlc291cmNlIHN0YWNrIGRldGFpbHM6ICVzJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnVGhyb3R0bGluZy5Vc2VyJyB8fCBlLmNvZGUgPT0gJ1Rocm90dGxpbmcnIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZy5BUEknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgzMDAwMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCfinYwgRmFpbCB0byBzeW5jIGNyZWF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgc3RhY2tJZCwgY29udGVudFsnUmVnaW9uSWQnXSwgYnVja2V0TmFtZSk7XG4gICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhY2tJZClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGdldFJlc291cmNlcyhjbGllbnQ6IGFueSwgY29udGVudDogYW55LCByZXF1ZXN0T3B0aW9uczogYW55LCBzdGFja0lkOiBhbnkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RTdGFja1Jlc291cmNlc1Jlc3VsdCA9IGF3YWl0IGNsaWVudC5saXN0U3RhY2tSZXNvdXJjZXMoe1xuICAgICAgICAgICAgICAgIFN0YWNrSWQ6IHN0YWNrSWQsXG4gICAgICAgICAgICAgICAgUmVnaW9uSWQ6IGNvbnRlbnRbJ1JlZ2lvbklkJ10sXG4gICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIHJldHVybiBsaXN0U3RhY2tSZXNvdXJjZXNSZXN1bHQuUmVzb3VyY2VzXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBuZXcgc3RhY2sgcmVzb3VyY2U6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgd2l0aERlZmF1bHRQcmludGVyKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIHN0YWNrSWQ6IGFueSwgYmxvY2s6IGFueSwgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBDZGtUb29sa2l0LmdldFJlc291cmNlcyhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBzdGFja0lkKVxuICAgICAgICBpZiAoYWN0aW9uICE9PSAnZGVzdHJveScpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJlc291cmNlIG9mIHJlc291cmNlcykge1xuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2godXRpbC5mb3JtYXQoY29sb3JzLmJsdWUoJ3wlcyB8JXMgfCAlcyB8ICVzIHwgJXMgfCAlcycpICsgJ1xcbicsXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIzLCByZXNvdXJjZS5TdGFja05hbWUpLFxuICAgICAgICAgICAgICAgICAgICBwYWRMZWZ0KDEyLCByZXNvdXJjZS5DcmVhdGVUaW1lKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjAsIHJlc291cmNlLlN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIzLCByZXNvdXJjZS5SZXNvdXJjZVR5cGUpLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydGVuKDQwLCByZXNvdXJjZS5QaHlzaWNhbFJlc291cmNlSWQpLFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5Mb2dpY2FsUmVzb3VyY2VJZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcmVzb3VyY2Ugb2YgcmVzb3VyY2VzKSB7XG4gICAgICAgICAgICAgICAgbGluZXMucHVzaCh1dGlsLmZvcm1hdChjb2xvcnMuYmx1ZSgnfCVzIHwgJXMgfCAlcyB8ICVzIHwgJXMnKSArICdcXG4nLFxuICAgICAgICAgICAgICAgICAgICBwYWRSaWdodCgyMywgcmVzb3VyY2UuU3RhY2tOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjAsIHJlc291cmNlLlN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIzLCByZXNvdXJjZS5SZXNvdXJjZVR5cGUpLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydGVuKDQwLCByZXNvdXJjZS5QaHlzaWNhbFJlc291cmNlSWQpLFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5Mb2dpY2FsUmVzb3VyY2VJZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJsb2NrLmRpc3BsYXlMaW5lcyhsaW5lcylcbiAgICB9XG5cblxuICAgIHByaXZhdGUgYXN5bmMgcm9zVXBkYXRlU3RhY2soY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSwgb3V0cHV0c0ZpbGU6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lwSWZOb0NoYW5nZXM6IGJvb2xlYW4sIHN0YWNrVXBkYXRlVGltZTogYW55LCBkZXRhaWxMb2c6IGJvb2xlYW4sIHN5bmM6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja05hbWU6IHN0cmluZywgYnVja2V0TmFtZT86IHN0cmluZykge1xuICAgICAgICBsZXQgc2xlZXBUaW1lID0gMDtcbiAgICAgICAgY29uc3Qgc3RhY2tJZCA9IGNvbnRlbnRbJ1N0YWNrSWQnXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGNsaWVudC51cGRhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKGBUaGUgJHtpfXRoIHVwZGF0ZSBhdHRlbXB0IGZhaWxlZCwgYXMgZGV0YWlsZWQgaW4gJHtlfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWUuZGF0YSB8fCAhKFwiUmVxdWVzdElkXCIgaW4gZS5kYXRhKSB8fCBlLmNvZGUgPT09ICdTZXJ2aWNlVW5hdmFpbGFibGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGVlcFRpbWUgPCAyMDAwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xlZXBUaW1lID0gc2xlZXBUaW1lICsgNTAwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcChzbGVlcFRpbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuY29kZSA9PSAnTm90U3VwcG9ydGVkJyAmJiBlLm1lc3NhZ2Uuc3RhcnRzV2l0aCgnVXBkYXRlIHRoZSBjb21wbGV0ZWx5IHNhbWUgc3RhY2snKVxuICAgICAgICAgICAgICAgICAgICAmJiAoc2tpcElmTm9DaGFuZ2VzIHx8IGJ1Y2tldE5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygnVGhlIHN0YWNrIGlzIGNvbXBsZXRlbHkgdGhlIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXBkYXRlLicpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ+KdjCBGYWlsIHRvIHVwZGF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmNvZGUsIGUuZGF0YVtcIlJlcXVlc3RJZFwiXSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIFJlZ2lvbklkOiBjb250ZW50WydSZWdpb25JZCddLFxuICAgICAgICAgICAgICAgIFN0YWNrSWQ6IHN0YWNrSWRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBzdGFja091dHB1dHM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICAgICAgICAgIC8vIFdhaXQgZm9yIHRoZSBzdGFjayBzdGF0ZSB0byBjaGFuZ2UgYWZ0ZXIgdXBkYXRpbmcgaXRcbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKDUwMDApO1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBuZXcgUmV3cml0YWJsZUJsb2NrKHN0cmVhbSk7XG4gICAgICAgICAgICB3aXRoRGVmYXVsdFByaW50ZXJPYmogPSBzZXRJbnRlcnZhbChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgc3RhY2tJZCwgYmxvY2ssICd1cGRhdGUnKVxuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMDApXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldE5ld1N0YWNrUmVzdWx0ID0gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGdldE5ld1N0YWNrUmVzdWx0LlN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNSZWFzb24gPSBnZXROZXdTdGFja1Jlc3VsdC5TdGF0dXNSZWFzb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGdldE5ld1N0YWNrUmVzdWx0Lk91dHB1dHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VXBkYXRlVGltZSA9IGdldE5ld1N0YWNrUmVzdWx0LlVwZGF0ZVRpbWUgPyBnZXROZXdTdGFja1Jlc3VsdC5VcGRhdGVUaW1lIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VXBkYXRlVGltZSA9PSBzdGFja1VwZGF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YWNrIHVwZGF0ZSBpbiBwcm9ncmVzcyBvciB1cGRhdGUgZGlkIG5vdCBiZWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdDb21wbGV0ZSA9IFJlZ0V4cCgvQ09NUExFVEUvKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdGYWlsZWQgPSBSZWdFeHAoL0ZBSUxFRC8pXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykgfHwgcmVnRmFpbGVkLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgc3RhY2tJZCwgYmxvY2ssICd1cGRhdGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCdcXG5PdXRwdXRzOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrT3V0cHV0c1tzdGFja05hbWVdID0gb3V0cHV0cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG91dHB1dCBvZiBvdXRwdXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb3V0cHV0WydPdXRwdXRWYWx1ZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBvdXRwdXRbJ091dHB1dEtleSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IG91dHB1dFsnRGVzY3JpcHRpb24nXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJ1xcbiBLZXk6ICVzICBWYWx1ZTogJXMgRGVzY3JpcHRpb246ICVzJywgY29sb3JzLmN5YW4oa2V5KSwgY29sb3JzLmN5YW4odmFsdWUpLCBjb2xvcnMuY3lhbihkZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0c0ZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4oTE9DQUxfUEFUSCArIE9VVFBVVFNfSlNPTiksIEpTT04uc3RyaW5naWZ5KHN0YWNrT3V0cHV0cywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnRvU3RyaW5nKCkgPT0gJ1VQREFURV9DT01QTEVURScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHN0YWNrSWQsIGNvbnRlbnRbJ1JlZ2lvbklkJ10sIGJ1Y2tldE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHN5bmMgdXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblN0YXR1czogJXNcXG5TdGF0dXNSZWFzb246ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXNSZWFzb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGFja0lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgc3RhY2tJZCwgY29udGVudFsnUmVnaW9uSWQnXSwgYnVja2V0TmFtZSwgc3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKGBcXG7inYwgRmFpbCB0byBzeW5jIHVwZGF0ZSBzdGFjazpcXG5TdGF0dXM6ICVzXFxuU3RhdHVzUmVhc29uOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzUmVhc29uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhY2tJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignQW4gZXJyb3Igb2NjdXJzIHRyeWluZyB0byBnZXQgdGhlIHJlc291cmNlIHN0YWNrIGRldGFpbHM6ICVzJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnVGhyb3R0bGluZy5Vc2VyJyB8fCBlLmNvZGUgPT0gJ1Rocm90dGxpbmcnIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZy5BUEknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgzMDAwMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCfinYwgRmFpbCB0byBzeW5jIHVwZGF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgc3RhY2tJZCwgY29udGVudFsnUmVnaW9uSWQnXSwgYnVja2V0TmFtZSk7XG4gICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhY2tJZCksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHN5bmNEZXN0cm95U3RhY2soY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgY2xpZW50LmRlbGV0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBuZXcgUmV3cml0YWJsZUJsb2NrKHN0cmVhbSk7XG4gICAgICAgICAgICB3aXRoRGVmYXVsdFByaW50ZXJPYmogPSBzZXRJbnRlcnZhbChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgY29udGVudFsnU3RhY2tJZCddLCBibG9jaywgJ2Rlc3Ryb3knKVxuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMDApXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWdpb25JZDogY29udGVudFsnUmVnaW9uSWQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YWNrSWQ6IGNvbnRlbnRbJ1N0YWNrSWQnXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTdGFja1Jlc3VsdCA9IGF3YWl0IGNsaWVudC5nZXRTdGFjayhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBnZXRTdGFja1Jlc3VsdC5TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzUmVhc29uID0gZ2V0U3RhY2tSZXN1bHQuU3RhdHVzUmVhc29uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IGdldFN0YWNrUmVzdWx0LlN0YWNrTmFtZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdDb21wbGV0ZSA9IFJlZ0V4cCgvQ09NUExFVEUvKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdGYWlsZWQgPSBSZWdFeHAoL0ZBSUxFRC8pXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykgfHwgcmVnRmFpbGVkLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgY29udGVudFsnU3RhY2tJZCddLCBibG9jaywgJ2Rlc3Ryb3knKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgdGFzayhzeW5jIGRlc3Ryb3kgc3RhY2spIGhhcyBmaW5pc2hlZCFcXG5zdGF0dXM6ICVzXFxuU3RhdHVzUmVhc29uOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1c1JlYXNvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoZ2V0U3RhY2tSZXN1bHQuU3RhY2tJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0ssIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVnQ29tcGxldGUuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnVGhyb3R0bGluZy5Vc2VyJyB8fCBlLmNvZGUgPT0gJ1Rocm90dGxpbmcnIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZy5BUEknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgzMDAwMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgZGVzdHJveSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgZGVzdHJveSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlmZk9wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBzdHJlYW0/OiBOb2RlSlMuV3JpdGFibGVTdHJlYW07XG4gICAgY29udGV4dExpbmVzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVwbG95T3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHNlbGVjdCB0aGUgZ2l2ZW4gc3RhY2tcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZXhjbHVzaXZlbHk/OiBib29sZWFuO1xuICAgIHBhcmFtZXRlcnM/OiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfTtcbiAgICB0aW1lb3V0OiBzdHJpbmc7XG4gICAgc3luYzogYm9vbGVhbjtcbiAgICByZWdpb25JZDogc3RyaW5nO1xuICAgIG91dHB1dHNGaWxlOiBib29sZWFuO1xuICAgIHNraXBJZk5vQ2hhbmdlczogYm9vbGVhbjtcbiAgICBkaXNhYmxlUm9sbGJhY2s6IGJvb2xlYW47XG4gICAgcmVzb3VyY2VHcm91cElkOiBzdHJpbmc7XG4gICAgZGV0YWlsTG9nOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlc3Ryb3lPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbiAgICBxdWlldD86IGJvb2xlYW47XG4gICAgc3luYzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmVudE9wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuICAgIGxvZ2ljYWxSZXNvdXJjZUlkOiBzdHJpbmc7XG4gICAgcGFnZU51bWJlcjogc3RyaW5nO1xuICAgIHBhZ2VTaXplOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3V0UHV0T3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW5lcmF0ZVN0YWNrSW5mb09wdGlvbnMge1xuICAgIHJlc291cmNlR3JvdXBJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RTdGFja09wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuICAgIHBhZ2VOdW1iZXI6IHN0cmluZztcbiAgICBwYWdlU2l6ZTogc3RyaW5nO1xuICAgIGFsbDogc3RyaW5nO1xuICAgIHJlc291cmNlR3JvdXBJZDogc3RyaW5nO1xuICAgIHJlZ2lvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1NldE9wdGlvbnMge1xuICAgIGdsb2JhbDogc3RyaW5nO1xuICAgIGVuZHBvaW50OiBzdHJpbmc7XG4gICAgcmVnaW9uOiBzdHJpbmc7XG4gICAgbW9kZTogc3RyaW5nO1xuICAgIGFrOiBzdHJpbmc7XG4gICAgc2s6IHN0cmluZztcbiAgICBzdHM6IHN0cmluZztcbiAgICByYW1Sb2xlQXJuOiBzdHJpbmc7XG4gICAgcm9sZVNlc3Npb25OYW1lOiBzdHJpbmc7XG4gICAgcmFtUm9sZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkQ29uZmlnT3B0aW9ucyB7XG4gICAgZ2xvYmFsPzogc3RyaW5nO1xuICAgIGxvYWRGaWxlUGF0aDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnIHtcbiAgICByZWFkb25seSBLZXk6IHN0cmluZztcbiAgICByZWFkb25seSBWYWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVBbmRVcGRhdGVMYW5ndWFnZUluZm8obGFuZ3VhZ2U6IHN0cmluZykge1xuICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgUFJPSkVDVF9DT05GSUcpO1xuICAgIGxldCBmaWxlQ29udGVudDogYW55O1xuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGluZm8gPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcbiAgICAgICAgaW5mb1snbGFuZ3VhZ2VJbmZvJ10gPSBsYW5ndWFnZTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoaW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkTGFuZ3VhZ2VJbmZvKCkge1xuICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgUFJPSkVDVF9DT05GSUcpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGVDb250ZW50KVsnbGFuZ3VhZ2VJbmZvJ10udG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJydcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWRMZWZ0KG46IG51bWJlciwgeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoeCkge1xuICAgICAgICByZXR1cm4gJyAnLnJlcGVhdChNYXRoLm1heCgwLCBuIC0geC5sZW5ndGgpKSArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWRSaWdodChuOiBudW1iZXIsIHg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHgpIHtcbiAgICAgICAgcmV0dXJuIHggKyAnICcucmVwZWF0KE1hdGgubWF4KDAsIG4gLSB4Lmxlbmd0aCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3J0ZW4obWF4V2lkdGg6IG51bWJlciwgcDogc3RyaW5nKSB7XG4gICAgaWYgKHAubGVuZ3RoIDw9IG1heFdpZHRoKSB7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgICBjb25zdCBoYWxmID0gTWF0aC5mbG9vcigobWF4V2lkdGggLSAzKSAvIDIpO1xuICAgIHJldHVybiBwLnN1YnN0cigwLCBoYWxmKSArICcuLi4nICsgcC5zdWJzdHIocC5sZW5ndGggLSBoYWxmKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2Vuc2l0aXphdGlvbihpbnB1dFN0cmluZzogc3RyaW5nLCBtaXhMZW5ndGggPSAzKSB7XG4gICAgLy8gbWl4TGVuZ3RoIOWtl+espuS4suWwkeS6juS4gOWumuWAvOWImeiEseaVj+WFqOmDqO+8jOWinuWKoOiEseaVj+S9jeaVsFxuICAgIGlmIChpc1N0cmluZyhpbnB1dFN0cmluZykgfHwgaXNOdW1iZXIoaW5wdXRTdHJpbmcpKSB7XG4gICAgICAgIGNvbnN0IHN0ciA9IFN0cmluZyhpbnB1dFN0cmluZyk7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoIDw9IG1peExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcqJy5yZXBlYXQobWl4TGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuICAgICAgICBjb25zdCBmaXJzdFN0ciA9IHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAvIG1peExlbmd0aCk7XG4gICAgICAgIGNvbnN0IGxhc3RTdHIgPSBzdHIuc3Vic3RyKC1zdHIubGVuZ3RoIC8gbWl4TGVuZ3RoKTtcbiAgICAgICAgY29uc3QgbWlkZGxlU3RyID0gc3RyXG4gICAgICAgICAgICAuc3Vic3RyaW5nKHN0ci5sZW5ndGggLyBtaXhMZW5ndGgsIGxlbiAtIE1hdGguYWJzKC1zdHIubGVuZ3RoIC8gbWl4TGVuZ3RoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFxzXFxTXS9naSwgJyonKTtcbiAgICAgICAgcmV0dXJuIGZpcnN0U3RyICsgbWlkZGxlU3RyICsgbGFzdFN0cjtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufSJdfQ==