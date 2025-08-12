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
                const stackInfo = await this.getStackByName(stackName, undefined, regionId);
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
            if (exitSignal == 1) {
                await this.deleteBucket(client, bucketName);
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
        catch (_a) {
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
    async deleteBucket(client, bucketName) {
        try {
            // 指定存储空间名称。
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
                        bucket: stackInfo.assetAssociatedBucketName
                    });
                }
                else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRvb2xraXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstdG9vbGtpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4Q0FBOEM7QUFDOUMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQiwrQkFBdUM7QUFDdkMsMENBQStDO0FBQy9DLDRDQUErQztBQUMvQyxtQ0FBMEM7QUFDMUMsaURBQTRDO0FBQzVDLHVEQUEwRDtBQUMxRCx5REFBOEc7QUFFOUcsdUNBQStEO0FBQy9ELHlDQUF5RDtBQUN6RCxxQ0FBNkI7QUFDN0IsaUNBQXNDO0FBQ3RDLDJDQUFpRDtBQUNqRCwyQ0FBeUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDdEQsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXJDLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRW5ELE1BQU0sV0FBVyxHQUFHLHFCQUFxQixDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQztBQUN4QixNQUFNLFdBQVcsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3ZDLE1BQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDO0FBQ3JDLE1BQU0sc0JBQXNCLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLE1BQU0sZUFBZSxHQUFHLHNCQUFzQixDQUFDO0FBQy9DLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUMxQixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7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MEJBTUM7QUFFRCxTQUFnQixlQUFlLENBQUMsV0FBbUIsRUFBRSxTQUFTLEdBQUcsQ0FBQztJQUM5RCxpQ0FBaUM7SUFDakMsSUFBSSxJQUFBLGlCQUFRLEVBQUMsV0FBVyxDQUFDLElBQUksSUFBQSxpQkFBUSxFQUFDLFdBQVcsQ0FBQyxFQUFFO1FBQ2hELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1lBQ3pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoQztRQUNELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDdkIsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQztRQUN2RCxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQztRQUNwRCxNQUFNLFNBQVMsR0FBRyxHQUFHO2FBQ2hCLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7YUFDMUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QixPQUFPLFFBQVEsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDO0tBQ3pDO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBaEJELDBDQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICdjb2xvcnMvc2FmZSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICd1dGlsJztcbmltcG9ydCAqIGFzIGpzemlwIGZyb20gJ2pzemlwJztcbmltcG9ydCB7Zm9ybWF0LCBwcm9taXNpZnl9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHtjaXBoZXIsIGRlY2lwaGVyfSBmcm9tICcuL3V0aWwvY2lwaGVyJztcbmltcG9ydCB7UmV3cml0YWJsZUJsb2NrfSBmcm9tICcuL3V0aWwvZGlzcGxheSc7XG5pbXBvcnQge2lzTnVtYmVyLCBpc1N0cmluZ30gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7ZXhlYyBhcyBfZXhlY30gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgQ3JlZGVudGlhbHMsIHtDb25maWd9IGZyb20gJ0BhbGljbG91ZC9jcmVkZW50aWFscyc7XG5pbXBvcnQge0Nsb3VkQXNzZW1ibHksIERlZmF1bHRTZWxlY3Rpb24sIEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24sIFN0YWNrQ29sbGVjdGlvbn0gZnJvbSAnLi9hcGkvY2xvdWQtYXNzZW1ibHknO1xuaW1wb3J0IHtDbG91ZEV4ZWN1dGFibGV9IGZyb20gJy4vYXBpL2Nsb3VkLWV4ZWN1dGFibGUnO1xuaW1wb3J0IHtkYXRhLCBlcnJvciwgcHJpbnQsIHN1Y2Nlc3MsIHdhcm5pbmd9IGZyb20gJy4vbG9nZ2luZyc7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb24sIFBST0pFQ1RfQ09ORklHfSBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCB7ZXhpdH0gZnJvbSAncHJvY2Vzcyc7XG5pbXBvcnQge3ByaW50U3RhY2tEaWZmfSBmcm9tICcuL2RpZmYnO1xuaW1wb3J0IHtkZXNlcmlhbGl6ZVN0cnVjdHVyZX0gZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHtOZXR3b3JrRXJyb3J9IGZyb20gJy4vZXhjZXB0aW9uJztcblxuY29uc3Qgcm9zQ2xpZW50ID0gcmVxdWlyZSgnQGFsaWNsb3VkL3Jvcy0yMDE5LTA5LTEwJyk7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuY29uc3Qgb3NzQ2xpZW50ID0gcmVxdWlyZSgnYWxpLW9zcycpO1xuXG5jb25zdCBnZW5lcmF0ZVNhZmVJZCA9IHJlcXVpcmUoJ2dlbmVyYXRlLXNhZmUtaWQnKTtcblxuY29uc3QgQ09ORklHX05BTUUgPSAnYWNjb3VudC5jb25maWcuanNvbic7XG5jb25zdCBMT0NBTF9QQVRIID0gJy4vJztcbmNvbnN0IEdMT0JBTF9QQVRIID0gX19kaXJuYW1lICsgJy8uLi8nO1xuY29uc3QgU1RBQ0tfSU5GTyA9ICdzdGFjay5pbmZvLmpzb24nO1xuY29uc3QgREVQTE9ZX1NUQUNLX0lEX0xFTkdUSCA9IDM2O1xuY29uc3QgQ0xJX0NPTkZJR19GSUxFID0gJy8uYWxpeXVuL2NvbmZpZy5qc29uJztcbmNvbnN0IElOSVRfU1RBQ0sgPSAnaW5pdCc7XG5jb25zdCBTWU5USF9TVEFDSyA9ICdzeW50aCc7XG5jb25zdCBERVBMT1lfU1RBQ0sgPSAnZGVwbG95JztcbmNvbnN0IERFU1RST1lfU1RBQ0sgPSAnZGVzdHJveSc7XG5jb25zdCBQQUNLQUdFX0pTT04gPSBfX2Rpcm5hbWUgKyAnLy4uL3BhY2thZ2UuanNvbic7XG5jb25zdCBPVVRQVVRTX0pTT04gPSAnc3RhY2sub3V0cHV0cy5qc29uJztcblxuY29uc3QgZXhlYyA9IHByb21pc2lmeShfZXhlYyk7XG5cbmNvbnN0IHJlcXVlc3RPcHRpb25zOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdVc2VyLUFnZW50JzogXCJST1MtQ0xJLVwiICsgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoUEFDS0FHRV9KU09OKS50b1N0cmluZygpKVsndmVyc2lvbiddICsgXCI6OlwiICsgcmVhZExhbmd1YWdlSW5mbygpXG4gICAgfSxcbiAgICB0aW1lb3V0OiA5MDAwMFxufTtcblxuY29uc3Qgc2xlZXAgPSBmdW5jdGlvbiAobXM6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufTtcblxuXG5jb25zdCBzdHJlYW0gPSBwcm9jZXNzLnN0ZG91dDtcblxuXG5sZXQgd2l0aERlZmF1bHRQcmludGVyT2JqOiBhbnk7XG5cblxuZXhwb3J0IGludGVyZmFjZSBDZGtUb29sa2l0UHJvcHMge1xuICAgIC8qKlxuICAgICAqIFRoZSBDbG91ZCBFeGVjdXRhYmxlXG4gICAgICovXG4gICAgY2xvdWRFeGVjdXRhYmxlOiBDbG91ZEV4ZWN1dGFibGU7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGJlIHZlcmJvc2VcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgdmVyYm9zZT86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBEb24ndCBzdG9wIG9uIGVycm9yIG1ldGFkYXRhXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGlnbm9yZUVycm9ycz86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUcmVhdCB3YXJuaW5ncyBpbiBtZXRhZGF0YSBhcyBlcnJvcnNcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgc3RyaWN0PzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gKHNldHRpbmdzIGFuZCBjb250ZXh0KVxuICAgICAqL1xuICAgIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb247XG59XG5cbi8qKlxuICogVG9vbGtpdCBsb2dpY1xuICpcbiAqIFRoZSB0b29sa2l0IHJ1bnMgdGhlIGBjbG91ZEV4ZWN1dGFibGVgIHRvIG9idGFpbiBhIGNsb3VkIGFzc2VtYmx5XG4gKlxuICovXG5leHBvcnQgY2xhc3MgQ2RrVG9vbGtpdCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0SnNvbihmaWxlTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgYWxsb3dlZEVtcHR5OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gTE9DQUxfUEFUSCArIGZpbGVOYW1lO1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZSlba2V5XTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlTmFtZSA9PT0gU1RBQ0tfSU5GTykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBmaWxlUGF0aCA9IEdMT0JBTF9QQVRIICsgZmlsZU5hbWU7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlKVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWxsb3dlZEVtcHR5KSB7XG4gICAgICAgICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIHRvIHNldCB5b3VyIGFjY291bnQgY29uZmlndXJhdGlvbiBmaXJzdGx5IVwiKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb3BzOiBDZGtUb29sa2l0UHJvcHMpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldENvbmZpZygpIHtcbiAgICAgICAgbGV0IG1vZGVUeXBlID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAndHlwZScsIHRydWUpXG4gICAgICAgIGxldCBlbmRwb2ludCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2VuZHBvaW50JywgdHJ1ZSlcbiAgICAgICAgbGV0IHJlZ2lvbklkID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKVxuICAgICAgICBsZXQgY29uZmlnSW5mbzogYW55O1xuICAgICAgICBzd2l0Y2ggKG1vZGVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdlY3NfcmFtX3JvbGUnOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyb2xlTmFtZScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdHMnOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlJZCcpKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlTZWNyZXQnKSksXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3NlY3VyaXR5VG9rZW4nKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JhbV9yb2xlX2Fybic6XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleUlkJykpLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFybjogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncm9sZUFybicpLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JvbGVTZXNzaW9uTmFtZScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhY2Nlc3Nfa2V5JzpcbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleUlkJykpLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVuZHBvaW50ID0gZW5kcG9pbnQgPyBlbmRwb2ludCA6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nO1xuICAgICAgICBsZXQgbmV3QWNjZXNzS2V5SWQ6IHN0cmluZztcbiAgICAgICAgbGV0IG5ld0FjY2Vzc0tleVNlY3JldDogc3RyaW5nO1xuICAgICAgICBsZXQgbmV3U2VjdXJpdHlUb2tlbjogc3RyaW5nO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ld0FjY2Vzc0tleUlkID0gbmV3QWNjZXNzS2V5SWQgPyBuZXdBY2Nlc3NLZXlJZCA6IHByb2Nlc3MuZW52LkFDQ0VTU19LRVlfSURcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBuZXdBY2Nlc3NLZXlTZWNyZXQgPSBuZXdBY2Nlc3NLZXlTZWNyZXQgPyBuZXdBY2Nlc3NLZXlTZWNyZXQgOiBwcm9jZXNzLmVudi5BQ0NFU1NfS0VZX1NFQ1JFVFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ld1NlY3VyaXR5VG9rZW4gPSBuZXdTZWN1cml0eVRva2VuID8gbmV3U2VjdXJpdHlUb2tlbiA6IHByb2Nlc3MuZW52LlNFQ1VSSVRZX1RPS0VOXG4gICAgICAgIGlmIChjb25maWdJbmZvKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWQgPSBuZXcgQ3JlZGVudGlhbHMoY29uZmlnSW5mbyk7XG4gICAgICAgICAgICAgICAgbmV3QWNjZXNzS2V5SWQgPSBhd2FpdCBjcmVkLmdldEFjY2Vzc0tleUlkKCk7XG4gICAgICAgICAgICAgICAgbmV3QWNjZXNzS2V5U2VjcmV0ID0gYXdhaXQgY3JlZC5nZXRBY2Nlc3NLZXlTZWNyZXQoKTtcbiAgICAgICAgICAgICAgICBuZXdTZWN1cml0eVRva2VuID0gYXdhaXQgY3JlZC5nZXRTZWN1cml0eVRva2VuKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdXQU5STklORzogUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgY3JlZGVudGlhbCBpbmZvcm1hdGlvbiB5b3UgaW1wb3J0IGZyb20gQ0xJIGNvbmZpZyEnICsgZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmV3QWNjZXNzS2V5SWQgfHwgIW5ld0FjY2Vzc0tleVNlY3JldCkge1xuICAgICAgICAgICAgZXJyb3IoXCJQbGVhc2UgdXNlICdyb3MtY2RrIGNvbmZpZyAoLWcpJyBvciBzZXQgZW52aXJvbm1lbnQgdG8gc2V0IHlvdXIgYWNjb3VudCBjb25maWd1cmF0aW9uIGZpcnN0bHkhXCIpO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmRwb2ludDogZW5kcG9pbnQsXG4gICAgICAgICAgICBhY2Nlc3NLZXlJZDogbmV3QWNjZXNzS2V5SWQsXG4gICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IG5ld0FjY2Vzc0tleVNlY3JldCxcbiAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IG5ld1NlY3VyaXR5VG9rZW4sXG4gICAgICAgICAgICByZWdpb25JZDogcmVnaW9uSWRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRSb3NDbGllbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IENka1Rvb2xraXQuZ2V0Q29uZmlnKCk7XG4gICAgICAgIGxldCBjbGllbnQ7XG4gICAgICAgIGlmICghY29uZmlnLmFjY2Vzc0tleUlkIHx8ICFjb25maWcuYWNjZXNzS2V5U2VjcmV0KSB7XG4gICAgICAgICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIG9yIHNldCBlbnZpcm9ubWVudCB0byBzZXQgeW91ciBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZmlyc3RseSFcIik7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9IGVsc2UgaWYgKCFjb25maWcuc2VjdXJpdHlUb2tlbikge1xuICAgICAgICAgICAgY2xpZW50ID0gbmV3IHJvc0NsaWVudCh7XG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGNvbmZpZy5lbmRwb2ludCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogY29uZmlnLmFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogY29uZmlnLmFjY2Vzc0tleVNlY3JldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGllbnQgPSBuZXcgcm9zQ2xpZW50KHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogY29uZmlnLmVuZHBvaW50LFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBjb25maWcuYWNjZXNzS2V5SWQsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBjb25maWcuYWNjZXNzS2V5U2VjcmV0LFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGNvbmZpZy5zZWN1cml0eVRva2VuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaHR0cE1vZHVsZSA9IGNsaWVudC5lbmRwb2ludC5zdGFydHNXaXRoKCdodHRwczovLycpID8gaHR0cHMgOiBodHRwO1xuICAgICAgICBjbGllbnQua2VlcEFsaXZlQWdlbnQgPSBuZXcgaHR0cE1vZHVsZS5BZ2VudCh7XG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgICBrZWVwQWxpdmVNc2VjczogMTUwMDBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbmZpZyhnbG9iYWw6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvbmZpZ1NhdmVQYXRoID0gKGdsb2JhbCA/IEdMT0JBTF9QQVRIIDogTE9DQUxfUEFUSCkgKyBDT05GSUdfTkFNRTtcbiAgICAgICAgbGV0IHNvdXJjZU1vZGVUeXBlOiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNvdXJjZUVuZHBvaW50OiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNvdXJjZVJlZ2lvbklkOiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNvdXJjZUFjY2Vzc0tleUlkOiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNvdXJjZUFjY2Vzc0tleVNlY3JldDogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBzb3VyY2VTZWN1cml0eVRva2VuOiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNvdXJjZVJvbGVBcm46IHN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgc291cmNlUm9sZVNlc3Npb25OYW1lOiBzdHJpbmcgPSAnJztcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoY29uZmlnU2F2ZVBhdGgpKSB7XG4gICAgICAgICAgICBsZXQgY29uZmlnRmlsZSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1NhdmVQYXRoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHNvdXJjZU1vZGVUeXBlID0gY29uZmlnRmlsZVsndHlwZSddXG4gICAgICAgICAgICBzb3VyY2VFbmRwb2ludCA9IGNvbmZpZ0ZpbGVbJ2VuZHBvaW50J11cbiAgICAgICAgICAgIHNvdXJjZVJlZ2lvbklkID0gY29uZmlnRmlsZVsncmVnaW9uSWQnXVxuICAgICAgICAgICAgc291cmNlQWNjZXNzS2V5SWQgPSBjb25maWdGaWxlWydhY2Nlc3NLZXlJZCddXG4gICAgICAgICAgICBzb3VyY2VBY2Nlc3NLZXlTZWNyZXQgPSBjb25maWdGaWxlWydhY2Nlc3NLZXlTZWNyZXQnXVxuICAgICAgICAgICAgc291cmNlU2VjdXJpdHlUb2tlbiA9IGNvbmZpZ0ZpbGVbJ3NlY3VyaXR5VG9rZW4nXVxuICAgICAgICAgICAgc291cmNlUm9sZUFybiA9IGNvbmZpZ0ZpbGVbJ3JvbGVBcm4nXVxuICAgICAgICAgICAgc291cmNlUm9sZVNlc3Npb25OYW1lID0gY29uZmlnRmlsZVsncm9sZVNlc3Npb25OYW1lJ11cbiAgICAgICAgfVxuICAgICAgICBsZXQgbW9kZVR5cGVPYmogPSB7XG4gICAgICAgICAgICBlY3NfcmFtX3JvbGU6ICdFY3NSYW1Sb2xlJyxcbiAgICAgICAgICAgIHN0czogJ1N0c1Rva2VuJyxcbiAgICAgICAgICAgIHJhbV9yb2xlX2FybjogJ1JhbVJvbGVBcm4nLFxuICAgICAgICAgICAgYWNjZXNzX2tleTogJ0FLJ1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbGV0IGRlZmF1bHRNb2RlVHlwZSA9IHNvdXJjZU1vZGVUeXBlID8gbW9kZVR5cGVPYmpbc291cmNlTW9kZVR5cGVdIDogJydcbiAgICAgICAgbGV0IGRlZmF1bHRFbmRwb2ludCA9IHNvdXJjZUVuZHBvaW50ID8gc291cmNlRW5kcG9pbnQgOiAnaHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tJ1xuICAgICAgICBsZXQgZGVmYXVsdFJlZ2lvbklkID0gc291cmNlUmVnaW9uSWQgPyBzb3VyY2VSZWdpb25JZCA6ICdjbi1oYW5nemhvdSdcbiAgICAgICAgbGV0IG1vZGVUeXBlID0gWydBSycsICdTdHNUb2tlbicsICdSYW1Sb2xlQXJuJywgJ0Vjc1JhbVJvbGUnXVxuXG5cbiAgICAgICAgbGV0IGVuZHBvaW50ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBFbmRwb2ludChvcHRpb25hbCwgWyR7ZGVmYXVsdEVuZHBvaW50LnRvU3RyaW5nKCl9XSk6YCwge2RlZmF1bHRJbnB1dDogZGVmYXVsdEVuZHBvaW50fSk7XG4gICAgICAgIGxldCByZWdpb25JZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgUmVnaW9uSWQob3B0aW9uYWwsIFske2RlZmF1bHRSZWdpb25JZC50b1N0cmluZygpfV0pOmAsIHtkZWZhdWx0SW5wdXQ6IGRlZmF1bHRSZWdpb25JZH0pO1xuICAgICAgICBsZXQgbW9kZUluZGV4ID0gcmVhZGxpbmVTeW5jLmtleUluU2VsZWN0KG1vZGVUeXBlLCBgQXV0aGVudGljYXRlIG1vZGUgWyR7ZGVmYXVsdE1vZGVUeXBlLnRvU3RyaW5nKCl9XTpgKTtcbiAgICAgICAgbGV0IGlucHV0Q29uZmlnSW5mbzogYW55ID0ge307XG4gICAgICAgIGxldCBjaGVja0NvbW1hbmQ6IHN0cmluZztcbiAgICAgICAgbGV0IGN1cmxDb21tYW5kOiBzdHJpbmc7XG4gICAgICAgIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tDb21tYW5kID0gJ3Bvd2Vyc2hlbGwgLUNvbW1hbmQgXCIoY3VybCAtVVJpIGh0dHA6Ly8xMDAuMTAwLjEwMC4yMDAvbGF0ZXN0L21ldGEtZGF0YS9SYW0vc2VjdXJpdHktY3JlZGVudGlhbHMvKS5TdGF0dXNDb2RlXCInO1xuICAgICAgICAgICAgICAgIGN1cmxDb21tYW5kID0gJ3Bvd2Vyc2hlbGwgLUNvbW1hbmQgXCIoY3VybCAtVVJpIGh0dHA6Ly8xMDAuMTAwLjEwMC4yMDAvbGF0ZXN0L21ldGEtZGF0YS9SYW0vc2VjdXJpdHktY3JlZGVudGlhbHMvKS5Db250ZW50XCInO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGVja0NvbW1hbmQgPSAnY3VybCBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLyAtbyAvZGV2L251bGwgLXMgLXcgJXtodHRwX2NvZGV9JztcbiAgICAgICAgICAgICAgICBjdXJsQ29tbWFuZCA9ICdjdXJsIGh0dHA6Ly8xMDAuMTAwLjEwMC4yMDAvbGF0ZXN0L21ldGEtZGF0YS9SYW0vc2VjdXJpdHktY3JlZGVudGlhbHMvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge3N0ZG91dDogY2hlY2tTdGRvdXR9ID0gYXdhaXQgZXhlYyhjaGVja0NvbW1hbmQpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja1N0ZG91dC50cmltKCkgIT09ICcyMDAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIFVzZSBFY3NSYW1Sb2xlIGNvbmZpZywgUGxlYXNlIGJpbmQgRWNzUmFtUm9sZSB0byB0aGUgaG9zdC4nLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIFVzZSBFY3NSYW1Sb2xlIGNvbmZpZywgUGxlYXNlIGJpbmQgRWNzUmFtUm9sZSB0byB0aGUgaG9zdCEnICsgZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHtzdGRvdXQ6IGN1cmxTdGRvdXR9ID0gYXdhaXQgZXhlYyhjdXJsQ29tbWFuZCk7XG4gICAgICAgICAgICBsZXQgcm9sZU5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYFJvbGVOYW1lLCBUaGUgY29uZmlndXJlZCByb2xlIG9mIHRoZSBob3N0OiBbJHtjdXJsU3Rkb3V0LnRyaW0oKX1dYCwge2RlZmF1bHRJbnB1dDogY3VybFN0ZG91dC50cmltKCl9KTtcbiAgICAgICAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgICAgICAgICByb2xlTmFtZTogcm9sZU5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1N0c1Rva2VuJykge1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleUlkOiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5U2VjcmV0OiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgc2VjdXJpdHlUb2tlbjogc3RyaW5nO1xuICAgICAgICAgICAgaWYgKHNvdXJjZU1vZGVUeXBlID09PSAnc3RzJykge1xuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QWNjZXNzS2V5SWQgPSBkZXNlbnNpdGl6YXRpb24oYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5SWQudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRBY2Nlc3NLZXlTZWNyZXQgPSBkZXNlbnNpdGl6YXRpb24oYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5U2VjcmV0LnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0U2VjdXJpdHlUb2tlbiA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VTZWN1cml0eVRva2VuLnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBBY2Nlc3NLZXlJZCBbJHtkZWZhdWx0QWNjZXNzS2V5SWR9XTpgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFY2hvQmFjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlJZC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgQWNjZXNzS2V5U2VjcmV0IFske2RlZmF1bHRBY2Nlc3NLZXlTZWNyZXR9XTpgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFY2hvQmFjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlTZWNyZXQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBTZWN1cml0eVRva2VuIFske2RlZmF1bHRTZWN1cml0eVRva2VufV06YCwge1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWNob0JhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbnB1dDogYXdhaXQgZGVjaXBoZXIoc291cmNlU2VjdXJpdHlUb2tlbi50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdTZWN1cml0eVRva2VuOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RzJyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleUlkKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlTZWNyZXQpLFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGNpcGhlcihzZWN1cml0eVRva2VuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlJZDogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleVNlY3JldDogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHJvbGVBcm46IHN0cmluZztcbiAgICAgICAgICAgIGxldCByb2xlU2Vzc2lvbk5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGlmIChzb3VyY2VNb2RlVHlwZSA9PT0gJ3JhbV9yb2xlX2FybicpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFjY2Vzc0tleUlkID0gZGVzZW5zaXRpemF0aW9uKGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleUlkLnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QWNjZXNzS2V5U2VjcmV0ID0gZGVzZW5zaXRpemF0aW9uKGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleVNlY3JldC50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdFJvbGVBcm4gPSBzb3VyY2VSb2xlQXJuLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdFJvbGVTZXNzaW9uTmFtZSA9IHNvdXJjZVJvbGVTZXNzaW9uTmFtZS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYEFjY2Vzc0tleUlkIFske2RlZmF1bHRBY2Nlc3NLZXlJZH1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleUlkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBBY2Nlc3NLZXlTZWNyZXQgWyR7ZGVmYXVsdEFjY2Vzc0tleVNlY3JldH1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleVNlY3JldC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJvbGVBcm4gPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYFJvbGVBcm4gWyR7ZGVmYXVsdFJvbGVBcm59XTpgLCB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbnB1dDogZGVmYXVsdFJvbGVBcm5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYFJvbGVTZXNzaW9uTmFtZSBbJHtkZWZhdWx0Um9sZVNlc3Npb25OYW1lfV06YCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBkZWZhdWx0Um9sZVNlc3Npb25OYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgICAgICByb2xlQXJuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdSb2xlQXJuKGVnOiBhY3M6cmFtOjoqKioqKio6cm9sZS8qKioqKiopOicpO1xuICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignUm9sZVNlc3Npb25OYW1lOicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRDb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyYW1fcm9sZV9hcm4nLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5SWQpLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleVNlY3JldCksXG4gICAgICAgICAgICAgICAgcm9sZUFybjogcm9sZUFybixcbiAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHJvbGVTZXNzaW9uTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnQUsnKSB7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5SWQ6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlTZWNyZXQ6IHN0cmluZztcbiAgICAgICAgICAgIGlmIChzb3VyY2VNb2RlVHlwZSA9PT0gJ2FjY2Vzc19rZXknKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRBY2Nlc3NLZXlJZCA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlJZC50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFjY2Vzc0tleVNlY3JldCA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlTZWNyZXQudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYEFjY2Vzc0tleUlkIFske2RlZmF1bHRBY2Nlc3NLZXlJZH1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleUlkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBBY2Nlc3NLZXlTZWNyZXQgWyR7ZGVmYXVsdEFjY2Vzc0tleVNlY3JldH1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleVNlY3JldC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYWNjZXNzX2tleScsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlJZCksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5U2VjcmV0KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGNlcnRpZmljYXRpb24gbWV0aG9kIG11c3QgYmUgc2VsZWN0ZWQnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRDb25maWdJbmZvLmVuZHBvaW50ID0gZW5kcG9pbnRcbiAgICAgICAgaW5wdXRDb25maWdJbmZvLnJlZ2lvbklkID0gcmVnaW9uSWRcbiAgICAgICAgbGV0IGZpbGUgPSBwYXRoLmpvaW4oY29uZmlnU2F2ZVBhdGgpO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KGlucHV0Q29uZmlnSW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBZb3VyIGNkayBjb25maWd1cmF0aW9uIGhhcyBiZWVuIHNhdmVkIHN1Y2Nlc3NmdWxseSFgKTtcbiAgICAgICAgZXhpdCgwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29uZmlnU2V0KG9wdGlvbnM6IENvbmZpZ1NldE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IGNvbmZpZ1NhdmVQYXRoID0gKG9wdGlvbnMuZ2xvYmFsID8gR0xPQkFMX1BBVEggOiBMT0NBTF9QQVRIKSArIENPTkZJR19OQU1FO1xuICAgICAgICBsZXQgbW9kZVR5cGUgPSBvcHRpb25zLm1vZGU7XG4gICAgICAgIGxldCBjb25maWdJbmZvOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IGFrID0gb3B0aW9ucy5hayA/IG9wdGlvbnMuYWsgOiAnJztcbiAgICAgICAgbGV0IHNrID0gb3B0aW9ucy5zayA/IG9wdGlvbnMuc2sgOiAnJztcbiAgICAgICAgbGV0IHN0c1Rva2VuID0gb3B0aW9ucy5zdHMgPyBvcHRpb25zLnN0cyA6ICcnO1xuICAgICAgICBsZXQgcmFtUm9sZUFybiA9IG9wdGlvbnMucmFtUm9sZUFybiA/IG9wdGlvbnMucmFtUm9sZUFybiA6ICcnO1xuICAgICAgICBsZXQgcm9sZVNlc3Npb25OYW1lID0gb3B0aW9ucy5yb2xlU2Vzc2lvbk5hbWUgPyBvcHRpb25zLnJvbGVTZXNzaW9uTmFtZSA6ICcnO1xuICAgICAgICBsZXQgcmFtUm9sZU5hbWUgPSBvcHRpb25zLnJhbVJvbGVOYW1lID8gb3B0aW9ucy5yYW1Sb2xlTmFtZSA6ICcnO1xuICAgICAgICBpZiAobW9kZVR5cGUgPT09ICdBSycpIHtcbiAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FjY2Vzc19rZXknLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWspLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHNrKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZSA9PT0gJ1N0c1Rva2VuJykge1xuICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RzJyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFrKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihzayksXG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogYXdhaXQgY2lwaGVyKHN0c1Rva2VuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZSA9PT0gJ1JhbVJvbGVBcm4nKSB7XG4gICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyYW1fcm9sZV9hcm4nLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWspLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHNrKSxcbiAgICAgICAgICAgICAgICByb2xlQXJuOiByYW1Sb2xlQXJuLFxuICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogcm9sZVNlc3Npb25OYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgcm9sZU5hbWU6IHJhbVJvbGVOYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGEgYXV0aGVudGljYXRlIG1vZGUgbXVzdCBiZSBpbiAoQUt8U3RzVG9rZW58UmFtUm9sZUFybnxFY3NSYW1Sb2xlKScsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmlsZSA9IHBhdGguam9pbihjb25maWdTYXZlUGF0aCk7XG4gICAgICAgIGNvbmZpZ0luZm8ucmVnaW9uSWQgPSBvcHRpb25zLnJlZ2lvbjtcbiAgICAgICAgY29uZmlnSW5mby5lbmRwb2ludCA9IG9wdGlvbnMuZW5kcG9pbnQ7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnSW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBZb3VyIGNkayBjb25maWd1cmF0aW9uIGhhcyBiZWVuIHNhdmVkIHN1Y2Nlc3NmdWxseSFgKTtcbiAgICAgICAgZXhpdCgwKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBhc3luYyBsb2FkQ2xpQ29uZmlnKG9wdGlvbnM6IExvYWRDb25maWdPcHRpb25zKSB7XG4gICAgICAgIGxldCBjb25maWdTYXZlUGF0aCA9IChvcHRpb25zLmdsb2JhbCA/IEdMT0JBTF9QQVRIIDogTE9DQUxfUEFUSCkgKyBDT05GSUdfTkFNRTtcbiAgICAgICAgbGV0IGNvbmZpZ3VyZUluZm9zID0gYXdhaXQgdGhpcy5nZXRDbGlDb25maWcob3B0aW9ucy5sb2FkRmlsZVBhdGgpXG4gICAgICAgIGxldCBtb2RlVHlwZSA9IE9iamVjdC5rZXlzKGNvbmZpZ3VyZUluZm9zKTtcbiAgICAgICAgbGV0IG1vZGVJbmRleCA9IHJlYWRsaW5lU3luYy5rZXlJblNlbGVjdChtb2RlVHlwZSwgJ1NlbGVjdCBhdXRoZW50aWNhdGUgbW9kZTonKTtcbiAgICAgICAgbGV0IHByb2ZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgbGV0IHByb2ZpbGVDb25maWc6IGFueSA9IHt9O1xuICAgICAgICBpZiAobW9kZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGEgY2VydGlmaWNhdGlvbiBtZXRob2QgbXVzdCBiZSBzZWxlY3RlZCcsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnQUsnKSB7XG4gICAgICAgICAgICBwcm9maWxlTmFtZXMgPSBjb25maWd1cmVJbmZvcy5BSy5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1N0c1Rva2VuJykge1xuICAgICAgICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuU3RzVG9rZW4ubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdSYW1Sb2xlQXJuJykge1xuICAgICAgICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuUmFtUm9sZUFybi5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XG4gICAgICAgICAgICBwcm9maWxlTmFtZXMgPSBjb25maWd1cmVJbmZvcy5FY3NSYW1Sb2xlLm1hcCgoaXRlbTogeyBuYW1lOiBhbnk7IH0pID0+IGl0ZW0ubmFtZSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJvZmlsZUluZGV4ID0gcmVhZGxpbmVTeW5jLmtleUluU2VsZWN0KHByb2ZpbGVOYW1lcywgJ1NlbGVjdCBBdXRoZW50aWNhdGUgcHJvZmlsZSBuYW1lOicpO1xuICAgICAgICBpZiAocHJvZmlsZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGEgY2VydGlmaWNhdGlvbiBwcm9maWxlIG11c3QgYmUgc2VsZWN0ZWQnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVuZHBvaW50ID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnZW5kcG9pbnQnLCB0cnVlKVxuICAgICAgICBsZXQgcmVnaW9uSWQ7XG4gICAgICAgIGxldCBjb25maWdJbmZvOiBhbnkgPSB7fTtcbiAgICAgICAgZW5kcG9pbnQgPSBlbmRwb2ludCA/IGVuZHBvaW50IDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbSc7XG4gICAgICAgIHN3aXRjaCAobW9kZVR5cGVbbW9kZUluZGV4XSkge1xuICAgICAgICAgICAgY2FzZSAnQUsnOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5BSy5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10gfHwgIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGFjY2Vzc0tleUlkIG9yIGFjY2Vzc0tleVNlY3JldCBDYW5ub3QgYmUgZW1wdHkhJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FjY2Vzc19rZXknLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10pLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU3RzVG9rZW4nOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5TdHNUb2tlbi5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10gfHwgIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddIHx8ICFwcm9maWxlQ29uZmlnWydzZWN1cml0eVRva2VuJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYWNjZXNzS2V5SWQsIGFjY2Vzc0tleVNlY3JldCBvciBzZWN1cml0eVRva2VuIENhbm5vdCBiZSBlbXB0eSEnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10pLFxuICAgICAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snc2VjdXJpdHlUb2tlbiddKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdSYW1Sb2xlQXJuJzpcbiAgICAgICAgICAgICAgICBwcm9maWxlQ29uZmlnID0gY29uZmlndXJlSW5mb3MuUmFtUm9sZUFybi5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10gfHwgIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddIHx8ICFwcm9maWxlQ29uZmlnWydyb2xlQXJuJ10gfHwgIXByb2ZpbGVDb25maWdbJ3JvbGVTZXNzaW9uTmFtZSddKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGFjY2Vzc0tleUlkLCBhY2Nlc3NLZXlTZWNyZXQsIHJvbGVBcm4gb3Igcm9sZVNlc3Npb25OYW1lIENhbm5vdCBiZSBlbXB0eSEnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10pLFxuICAgICAgICAgICAgICAgICAgICByb2xlQXJuOiBwcm9maWxlQ29uZmlnWydyb2xlQXJuJ10sXG4gICAgICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogcHJvZmlsZUNvbmZpZ1sncm9sZVNlc3Npb25OYW1lJ11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRWNzUmFtUm9sZSc6XG4gICAgICAgICAgICAgICAgcHJvZmlsZUNvbmZpZyA9IGNvbmZpZ3VyZUluZm9zLkVjc1JhbVJvbGUuZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9maWxlQ29uZmlnWydyb2xlTmFtZSddKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIHJvbGVOYW1lIENhbm5vdCBiZSBlbXB0eSEnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6IHByb2ZpbGVDb25maWdbJ3JvbGVOYW1lJ11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJlZ2lvbklkID0gcHJvZmlsZUNvbmZpZ1sncmVnaW9uJ10gPyBwcm9maWxlQ29uZmlnWydyZWdpb24nXSA6ICdjbi1oYW5nemhvdSc7XG4gICAgICAgIGNvbmZpZ0luZm8ucmVnaW9uSWQgPSByZWdpb25JZFxuICAgICAgICBjb25maWdJbmZvLmVuZHBvaW50ID0gZW5kcG9pbnRcbiAgICAgICAgbGV0IGZpbGUgPSBwYXRoLmpvaW4oY29uZmlnU2F2ZVBhdGgpO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KGNvbmZpZ0luZm8sIG51bGwsICdcXHQnKSk7XG4gICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgWW91ciBjZGsgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBsb2FkIGZyb20gQWxpeXVuIENsaSBjb25maWd1cmF0aW9uIHNhdmVkIHN1Y2Nlc3NmdWxseSAlcyAlcyFgLCBtb2RlVHlwZVttb2RlSW5kZXhdLCBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgIGV4aXQoMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxpc3Qoc2VsZWN0b3JzOiBzdHJpbmdbXSkge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RBbGxTdGFja3NGb3JEZWZhdWx0KHNlbGVjdG9ycyk7XG4gICAgICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBsZXQgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKTtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBzdGFja0luZm8uc3RhdHVzXG4gICAgICAgICAgICBkYXRhKHN0YWNrLmlkLCBzdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTeW50aGVzaXplIHRoZSBnaXZlbiBzZXQgb2Ygc3RhY2tzIChjYWxsZWQgd2hlbiB0aGUgdXNlciBydW5zICdjZGsgc3ludGgnKVxuICAgICAqXG4gICAgICogSU5QVVQ6IFN0YWNrIG5hbWVzIGNhbiBiZSBzdXBwbGllZCB1c2luZyBhIGdsb2IgZmlsdGVyLiBJZiBubyBzdGFja3MgYXJlXG4gICAgICogZ2l2ZW4sIGFsbCBzdGFja3MgZnJvbSB0aGUgYXBwbGljYXRpb24gYXJlIGltcGxpY3RseSBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIE9VVFBVVDogSWYgbW9yZSB0aGFuIG9uZSBzdGFjayBlbmRzIHVwIGJlaW5nIHNlbGVjdGVkLCBhbiBvdXRwdXQgZGlyZWN0b3J5XG4gICAgICogc2hvdWxkIGJlIHN1cHBsaWVkLCB3aGVyZSB0aGUgdGVtcGxhdGVzIHdpbGwgYmUgd3JpdHRlbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgc3ludGgoc3RhY2tOYW1lczogc3RyaW5nW10sIGV4Y2x1c2l2ZWx5OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGlmZihzdGFja05hbWVzLCBleGNsdXNpdmVseSk7XG5cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIHNpbmdsZSBzdGFjaywgcHJpbnQgaXQgdG8gU1RET1VUXG4gICAgICAgIGlmIChzdGFja3Muc3RhY2tDb3VudCA9PT0gMSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tzLmZpcnN0U3RhY2suaWQsIFNZTlRIX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgcmV0dXJuIHN0YWNrcy5maXJzdFN0YWNrLnRlbXBsYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2suaWQsIFNZTlRIX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNJbnRlZ01vZGUgPSBwcm9jZXNzLmVudi5DREtfSU5URUdfTU9ERSA9PT0gJzEnO1xuICAgICAgICBpZiAoaXNJbnRlZ01vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFja3Muc3RhY2tBcnRpZmFjdHMubWFwKChzKSA9PiBzLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdCBvdXRwdXR0aW5nIHRlbXBsYXRlIHRvIHN0ZG91dCwgbGV0J3MgZXhwbGFpbiB0aGluZ3MgdG8gdGhlIHVzZXIgYSBsaXR0bGUgYml0Li4uXG4gICAgICAgIHN1Y2Nlc3MoYFN1Y2Nlc3NmdWxseSBzeW50aGVzaXplZCB0byAke2NvbG9ycy5ibHVlKHBhdGgucmVzb2x2ZShzdGFja3MuYXNzZW1ibHkuZGlyZWN0b3J5KSl9YCk7XG4gICAgICAgIHByaW50KFxuICAgICAgICAgICAgYFN1cHBseSBhIHN0YWNrIGlkICgke3N0YWNrcy5zdGFja0FydGlmYWN0cy5tYXAoKHMpID0+IGNvbG9ycy5ncmVlbihzLmlkKSkuam9pbignLCAnKX0pIHRvIGRpc3BsYXkgaXRzIHRlbXBsYXRlLmAsXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcHVibGlzaEFzc2V0cyhhc3NldHNKc29uOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LCBvdXRkaXI6IHN0cmluZykge1xuICAgICAgICBjb25zdCBmaWxlcyA9IGFzc2V0c0pzb25bJ2ZpbGVzJ107XG4gICAgICAgIGNvbnN0IGZpbGVzTnVtID0gT2JqZWN0LmtleXMoZmlsZXMpLmxlbmd0aDtcbiAgICAgICAgaWYgKGZpbGVzTnVtID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbGVzTnVtID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlS2V5ID0gT2JqZWN0LmtleXMoZmlsZXMpWzBdO1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVzW2ZpbGVLZXldO1xuICAgICAgICAgICAgaWYgKGZpbGUuc291cmNlICYmIGZpbGUuc291cmNlLnBhdGguZW5kc1dpdGgoJy50ZW1wbGF0ZS5qc29uJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uZmlnID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRDb25maWcoKTtcbiAgICAgICAgbGV0IGNsaWVudF9wYXJhbXM7XG4gICAgICAgIGlmICghY29uZmlnLmFjY2Vzc0tleUlkIHx8ICFjb25maWcuYWNjZXNzS2V5U2VjcmV0KSB7XG4gICAgICAgICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIG9yIHNldCBlbnZpcm9ubWVudCB0byBzZXQgeW91ciBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZmlyc3RseSFcIik7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9IGVsc2UgaWYgKCFjb25maWcuc2VjdXJpdHlUb2tlbikge1xuICAgICAgICAgICAgY2xpZW50X3BhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICByZWdpb246IGBvc3MtJHtjb25maWcucmVnaW9uSWR9YCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogY29uZmlnLmFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogY29uZmlnLmFjY2Vzc0tleVNlY3JldFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsaWVudF9wYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgcmVnaW9uOiBgb3NzLSR7Y29uZmlnLnJlZ2lvbklkfWAsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGNvbmZpZy5hY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGNvbmZpZy5hY2Nlc3NLZXlTZWNyZXQsXG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogY29uZmlnLnNlY3VyaXR5VG9rZW5cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IG9zc0NsaWVudChjbGllbnRfcGFyYW1zKTtcbiAgICAgICAgbGV0IGJ1Y2tldE5hbWU7XG4gICAgICAgIGxldCBidWNrZXRFeGlzdHMgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgc3RvcmFnZUNsYXNzOiAnU3RhbmRhcmQnLFxuICAgICAgICAgICAgYWNsOiAncHJpdmF0ZScsXG4gICAgICAgICAgICBkYXRhUmVkdW5kYW5jeVR5cGU6ICdMUlMnXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWFkRmlsZXMgPSAoZm9sZGVyOiBzdHJpbmcsIHppcDoganN6aXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHppcEZpbGVzID0gZnMucmVhZGRpclN5bmMoZm9sZGVyKTtcbiAgICAgICAgICAgIHppcEZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihmb2xkZXIsIGZpbGUpO1xuICAgICAgICAgICAgICAgIGlmIChmcy5zdGF0U3luYyhmaWxlUGF0aCkuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJaaXAgPSB6aXAuZm9sZGVyKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViWmlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkRmlsZXMoZmlsZVBhdGgsIHN1YlppcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgemlwLmZpbGUoZmlsZSwgY29udGVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZmlsZXMpKSB7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBmaWxlc1trZXldWydzb3VyY2UnXTtcbiAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gZmlsZXNba2V5XVsnZGVzdGluYXRpb25zJ107XG4gICAgICAgICAgICBsZXQgYXNzZXRQYXRoID0gcGF0aC5qb2luKG91dGRpciwgc291cmNlWydwYXRoJ10pXG4gICAgICAgICAgICBjb25zdCBvYmplY3RLZXkgPSBkZXN0aW5hdGlvblsnY3VycmVudF9hY2NvdW50LWN1cnJlbnRfcmVnaW9uJ11bJ29iamVjdEtleSddO1xuICAgICAgICAgICAgaWYgKHNvdXJjZVsncGFja2FnaW5nJ10gPT09ICd6aXAnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgemlwID0gbmV3IGpzemlwKCk7XG4gICAgICAgICAgICAgICAgcmVhZEZpbGVzKGFzc2V0UGF0aCwgemlwKTtcbiAgICAgICAgICAgICAgICBhc3NldFBhdGggPSBwYXRoLmpvaW4ob3V0ZGlyLCBgJHtzb3VyY2VbJ3BhdGgnXX0uemlwYClcbiAgICAgICAgICAgICAgICBhd2FpdCB6aXAuZ2VuZXJhdGVBc3luYyh7IHR5cGU6ICdub2RlYnVmZmVyJyB9KS50aGVuKChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoYXNzZXRQYXRoLCBjb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZvbGRlciBjb21wcmVzc2VkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcignRXJyb3IgY29tcHJlc3NpbmcgZm9sZGVyOlxcbicsIGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWJ1Y2tldEV4aXN0cykge1xuICAgICAgICAgICAgICAgIGJ1Y2tldE5hbWUgPSBkZXN0aW5hdGlvblsnY3VycmVudF9hY2NvdW50LWN1cnJlbnRfcmVnaW9uJ11bJ2J1Y2tldE5hbWUnXS5yZXBsYWNlKCcke0FMSVlVTjo6UmVnaW9ufScsIGNvbmZpZy5yZWdpb25JZCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY2xpZW50LnB1dEJ1Y2tldChidWNrZXROYW1lLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgYnVja2V0RXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENyZWF0ZSBidWNrZXQoJHtidWNrZXROYW1lfSkgc3VjY2Vzc2Z1bGx5IWApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoYEVycm9yIGNyZWF0ZSBidWNrZXQoJHtidWNrZXROYW1lfSk6XFxuYCwgZSk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IG5ldyBvc3NDbGllbnQoe2J1Y2tldDogYnVja2V0TmFtZSwgLi4uY2xpZW50X3BhcmFtc30pO1xuXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICd4LW9zcy1zdG9yYWdlLWNsYXNzJzogJ1N0YW5kYXJkJyxcbiAgICAgICAgICAgICAgICAneC1vc3Mtb2JqZWN0LWFjbCc6ICdwcml2YXRlJyxcbiAgICAgICAgICAgICAgICAneC1vc3MtZm9yYmlkLW92ZXJ3cml0ZSc6ICdmYWxzZSdcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgc3RvcmUucHV0KG9iamVjdEtleSwgcGF0aC5ub3JtYWxpemUoYXNzZXRQYXRoKSwgaGVhZGVycylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVXBsb2FkIGZpbGUoJHthc3NldFBhdGh9KSB0byBidWNrZXQoJHtidWNrZXROYW1lfSkgc3VjY2Vzc2Z1bGx5IWApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGVycm9yKGBFcnJvciB1cGxvYWQgZmlsZSgke2Fzc2V0UGF0aH0pIHRvIGJ1Y2tldCgke2J1Y2tldE5hbWV9KTpcXG5gLCBlKTtcbiAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWNrZXROYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZXBsb3kob3B0aW9uczogRGVwbG95T3B0aW9ucykge1xuICAgICAgICBsZXQgdGVtcGxhdGVCb2R5OiBhbnk7XG4gICAgICAgIGxldCBzeW5jID0gb3B0aW9ucy5zeW5jXG4gICAgICAgIGxldCBvdXRwdXRzID0gb3B0aW9ucy5vdXRwdXRzRmlsZVxuICAgICAgICBsZXQgc2tpcElmTm9DaGFuZ2VzID0gb3B0aW9ucy5za2lwSWZOb0NoYW5nZXNcbiAgICAgICAgbGV0IHJlc291cmNlR3JvdXBJZCA9IG9wdGlvbnMucmVzb3VyY2VHcm91cElkXG4gICAgICAgIGxldCBkZXRhaWxMb2cgPSBvcHRpb25zLmRldGFpbExvZ1xuICAgICAgICBsZXQgZGlzYWJsZVJvbGxiYWNrID0gb3B0aW9ucy5kaXNhYmxlUm9sbGJhY2tcbiAgICAgICAgbGV0IGNvbmZpZ19yZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpO1xuICAgICAgICBjb25maWdfcmVnaW9uID0gY29uZmlnX3JlZ2lvbiA/IGNvbmZpZ19yZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVwbG95KG9wdGlvbnMuc3RhY2tOYW1lcywgb3B0aW9ucy5leGNsdXNpdmVseSk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCBleGl0U2lnbmFsID0gMDtcbiAgICAgICAgY29uc3Qgb3V0ZGlyID0gdGhpcy5wcm9wcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLmdldChbJ291dHB1dCddKVxuICAgICAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgIGxldCBzdGFja05hbWUgPSBzdGFjay5zdGFja05hbWU7XG4gICAgICAgICAgICBsZXQgcmVnaW9uSWQgPSBvcHRpb25zLnJlZ2lvbklkO1xuICAgICAgICAgICAgaWYgKHJlZ2lvbklkID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgICAgICByZWdpb25JZCA9IGNvbmZpZ19yZWdpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYnVja2V0TmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0c0pzb25GaWxlUGF0aCA9IHBhdGguam9pbihvdXRkaXIsIGAke3N0YWNrTmFtZX0uYXNzZXRzLmpzb25gKVxuICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoYXNzZXRzSnNvbkZpbGVQYXRoKSkge1xuICAgICAgICAgICAgICAgIGxldCBhc3NldHNGaWxlQm9keSA9IGZzLnJlYWRGaWxlU3luYyhhc3NldHNKc29uRmlsZVBhdGgpO1xuICAgICAgICAgICAgICAgIGxldCBhc3NldHNKc29uID0gSlNPTi5wYXJzZShhc3NldHNGaWxlQm9keS50b1N0cmluZygndXRmLTgnKS50cmltKCkpO1xuICAgICAgICAgICAgICAgIGJ1Y2tldE5hbWUgPSBhd2FpdCB0aGlzLnB1Ymxpc2hBc3NldHMoYXNzZXRzSnNvbiwgb3V0ZGlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlSnNvbkZpbGVQYXRoID0gcGF0aC5qb2luKG91dGRpciwgYCR7c3RhY2tOYW1lfS50ZW1wbGF0ZS5qc29uYClcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZUZpbGVCb2R5ID0gZnMucmVhZEZpbGVTeW5jKHRlbXBsYXRlSnNvbkZpbGVQYXRoKTtcbiAgICAgICAgICAgIGxldCBDbGllbnRUb2tlbiA9IGdlbmVyYXRlU2FmZUlkKCk7XG4gICAgICAgICAgICBsZXQgdGVtcGxhdGVCb2R5QmFzZTY0RGF0YSA9IHRlbXBsYXRlRmlsZUJvZHkudG9TdHJpbmcoJ2Jhc2U2NCcpLnRyaW0oKTtcbiAgICAgICAgICAgIGxldCB0bXBTaWduYWwgPSAwO1xuICAgICAgICAgICAgaWYgKEJ1ZmZlci5ieXRlTGVuZ3RoKHRlbXBsYXRlRmlsZUJvZHksICd1dGY4JykgPCA1MjQyNzMpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUJvZHkgPSBgQEJhc2U2NEVuY29kZWQ6ICR7dGVtcGxhdGVCb2R5QmFzZTY0RGF0YX1gXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlQm9keSA9IHRlbXBsYXRlRmlsZUJvZHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjb250ZW50OiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBTdGFja05hbWU6IHN0YWNrTmFtZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIFRpbWVvdXRJbk1pbnV0ZXM6IG9wdGlvbnMudGltZW91dCxcbiAgICAgICAgICAgICAgICBUZW1wbGF0ZUJvZHk6IHRlbXBsYXRlQm9keSxcbiAgICAgICAgICAgICAgICBDbGllbnRUb2tlbjogQ2xpZW50VG9rZW4sXG4gICAgICAgICAgICAgICAgRGlzYWJsZVJvbGxiYWNrOiBkaXNhYmxlUm9sbGJhY2tcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9uc1snbWV0aG9kJ10gPSAnUE9TVCdcblxuICAgICAgICAgICAgaWYgKHJlc291cmNlR3JvdXBJZCkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1Jlc291cmNlR3JvdXBJZCddID0gcmVzb3VyY2VHcm91cElkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFjay50YWdzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSAxO1xuICAgICAgICAgICAgICAgIGxldCBwYXJhcyA9IHN0YWNrLnRhZ3M7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1RhZ3MuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLktleSddID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50WydUYWdzLicgKyBjb3VudC50b1N0cmluZygpICsgJy5WYWx1ZSddID0gcGFyYXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDE7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFzID0gb3B0aW9ucy5wYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhcykge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50WydQYXJhbWV0ZXJzLicgKyBjb3VudC50b1N0cmluZygpICsgJy5QYXJhbWV0ZXJLZXknXSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFsnUGFyYW1ldGVycy4nICsgY291bnQudG9TdHJpbmcoKSArICcuUGFyYW1ldGVyVmFsdWUnXSA9IHBhcmFzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxTdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKVxuICAgICAgICAgICAgaWYgKGxvY2FsU3RhY2tJbmZvLnJlZ2lvbklkKSB7XG4gICAgICAgICAgICAgICAgcmVnaW9uSWQgPSBsb2NhbFN0YWNrSW5mby5yZWdpb25JZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGVudFsnUmVnaW9uSWQnXSA9IHJlZ2lvbklkXG4gICAgICAgICAgICBpZiAobG9jYWxTdGFja0luZm8uc3RhY2tJZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lLCB1bmRlZmluZWQsIHJlZ2lvbklkKVxuICAgICAgICAgICAgICAgIGlmIChzdGFja0luZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0YWNrSW5mby5zdGFja0lkICE9PSBzdGFja0luZm8uU3RhY2tJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoYOKdjCBGYWlsIHRvIHVwZGF0ZSBzdGFjaywgYmVjYXVzZSB0aGUgbG9jYWxseSByZWNvcmRlZCBzdGFja0lkKCR7bG9jYWxTdGFja0luZm8uc3RhY2tJZH0pIGFuZCB0aGUgcmVtb3RlIHN0YWNrSWQoJHtzdGFja0luZm8uU3RhY2tJZH0pIGFyZSBpbmNvbnNpc3RlbnQuYClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50WydTdGFja0lkJ10gPSBzdGFja0luZm8uU3RhY2tJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFja1N0YXR1cyA9IHN0YWNrSW5mby5TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFja1VwZGF0ZVRpbWUgPSBzdGFja0luZm8uVXBkYXRlVGltZSA/IHN0YWNrSW5mby5VcGRhdGVUaW1lIDogc3RhY2tJbmZvLkNyZWF0ZVRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1N0YXR1cy5pbmRleE9mKFwiSU5fUFJPR1JFU1NcIikgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJyVzOiBkZXBsb3lpbmcuLi4nLCBjb2xvcnMuYm9sZChzdGFja05hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBTaWduYWwgPSBhd2FpdCB0aGlzLnJvc1VwZGF0ZVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIG91dHB1dHMsIHNraXBJZk5vQ2hhbmdlcywgc3RhY2tVcGRhdGVUaW1lLCBkZXRhaWxMb2csIHN5bmMsIHN0YWNrTmFtZSwgYnVja2V0TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2ssIGJlY2F1c2Ugc3RhY2sgc3RhdHVzIGlzICVzJywgc3RhY2tTdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wU2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBzdGFja1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnJXM6IGRlcGxveWluZy4uLicsIGNvbG9ycy5ib2xkKHN0YWNrTmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wU2lnbmFsID0gYXdhaXQgdGhpcy5yb3NEZXBsb3lTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBvdXRwdXRzLCByZXNvdXJjZUdyb3VwSWQsIHN0YWNrTmFtZSwgZGV0YWlsTG9nLCBzeW5jLCBidWNrZXROYW1lKVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSwgcmVzb3VyY2VHcm91cElkLCByZWdpb25JZClcbiAgICAgICAgICAgICAgICBpZiAoc3RhY2tJbmZvICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YWNrIGlzIGV4aXN0IHNlbmQgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBlcnJvcignRmFpbCB0byBjcmVhdGUgc3RhY2ssIGJlY2F1c2Ugc3RhY2sgJXMgYWxyZWFkeSBleGlzdHMgaW4gdGhpcyByZWdpb24uJywgc3RhY2tOYW1lKVxuICAgICAgICAgICAgICAgICAgICB0bXBTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBzdGFja1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnJXM6IGRlcGxveWluZy4uLicsIGNvbG9ycy5ib2xkKHN0YWNrTmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wU2lnbmFsID0gYXdhaXQgdGhpcy5yb3NEZXBsb3lTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBvdXRwdXRzLCByZXNvdXJjZUdyb3VwSWQsIHN0YWNrTmFtZSwgZGV0YWlsTG9nLCBzeW5jLCBidWNrZXROYW1lKVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXhpdFNpZ25hbCA9IGV4aXRTaWduYWwgfCB0bXBTaWduYWw7XG4gICAgICAgICAgICBpZiAoZXhpdFNpZ25hbCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5kZWxldGVCdWNrZXQoY2xpZW50LCBidWNrZXROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleGl0KGV4aXRTaWduYWwpXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRpZmYob3B0aW9uczogRGlmZk9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0QWxsU3RhY2tzRm9yRGVmYXVsdChvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uSW5Mb2NhbCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbkluTG9jYWwgPSByZWdpb25JbkxvY2FsID8gcmVnaW9uSW5Mb2NhbCA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gb3B0aW9ucy5zdHJlYW0gfHwgcHJvY2Vzcy5zdGRlcnI7XG4gICAgICAgIGNvbnN0IGNvbnRleHRMaW5lcyA9IG9wdGlvbnMuY29udGV4dExpbmVzIHx8IDM7XG4gICAgICAgIGxldCBleGl0U2lnbmFsID0gMDtcbiAgICAgICAgbGV0IHJlcXVlc3RzID0gW107XG4gICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCk7XG4gICAgICAgICAgICBsZXQgcmVnaW9uSWQgPSBzdGFja0luZm8ucmVnaW9uSWQgPyBzdGFja0luZm8ucmVnaW9uSWQgOiByZWdpb25JbkxvY2FsO1xuICAgICAgICAgICAgaWYgKCFzdGFja0luZm8uc3RhY2tJZCkge1xuICAgICAgICAgICAgICAgIHN0cmVhbS53cml0ZShmb3JtYXQoJ1N0YWNrICVzIGhhcyBub3QgYmVlbiBkZXBsb3llZCBvciBzdGFjayBkb2VzblxcJ3QgZXhpc3QgaW4gdGhlIHN0YWNrLmluZm8uanNvbiBmaWxlIFxcbicsIGNvbG9ycy5ib2xkKHN0YWNrLmRpc3BsYXlOYW1lKSkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChjbGllbnQuZ2V0VGVtcGxhdGUoe1JlZ2lvbklkOiByZWdpb25JZCwgU3RhY2tJZDogc3RhY2tJbmZvLnN0YWNrSWR9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkZXNlcmlhbGl6ZVN0cnVjdHVyZShyZXMuVGVtcGxhdGVCb2R5KTtcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtLndyaXRlKGZvcm1hdCgnU3RhY2sgJXNcXG4nLCBjb2xvcnMuYm9sZChzdGFjay5kaXNwbGF5TmFtZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpbnRTdGFja0RpZmYodGVtcGxhdGUsIHN0YWNrLCBjb250ZXh0TGluZXMsIHN0cmVhbSk7XG4gICAgICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIHN5bnRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2suaWQsIFNZTlRIX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHRlbXBsYXRlOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgICAgZXhpdChleGl0U2lnbmFsKVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBldmVudChvcHRpb25zOiBFdmVudE9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdE9ubHlTaW5nbGVTdGFja0ZvckRlZmF1bHQob3B0aW9ucy5zdGFja05hbWVzKTtcbiAgICAgICAgY29uc3Qgc3RhY2tOYW1lcyA9IHN0YWNrcy5zdGFja0lkc1xuICAgICAgICBsZXQgZXhpdFNpZ25hbCA9IDA7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCBMb2dpY2FsUmVzb3VyY2VJZHM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGlmIChvcHRpb25zLmxvZ2ljYWxSZXNvdXJjZUlkKSB7XG4gICAgICAgICAgICBMb2dpY2FsUmVzb3VyY2VJZHMucHVzaChvcHRpb25zLmxvZ2ljYWxSZXNvdXJjZUlkKVxuICAgICAgICB9XG4gICAgICAgIGxldCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpO1xuICAgICAgICAgICAgbGV0IHN0YWNrSWQgPSBzdGFja0luZm8uc3RhY2tJZFxuICAgICAgICAgICAgbGV0IHJlZ2lvbiA9IHN0YWNrSW5mby5yZWdpb25JZDtcbiAgICAgICAgICAgIGlmICghcmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihgVGhlIHN0YWNrIGlkIG9mIHRoZSBzcGVjaWZpYyBzdGFjaygke3N0YWNrTmFtZX0pIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHN0YWNrLmluZm8uanNvbiBmaWxlLmApXG4gICAgICAgICAgICAgICAgZXhpdFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2goY2xpZW50XG4gICAgICAgICAgICAgICAgLmxpc3RTdGFja0V2ZW50cyh7XG4gICAgICAgICAgICAgICAgICAgIFN0YWNrSWQ6IHN0YWNrSWQsXG4gICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICAgICAgICAgIExvZ2ljYWxSZXNvdXJjZUlkOiBMb2dpY2FsUmVzb3VyY2VJZHMsXG4gICAgICAgICAgICAgICAgICAgIFBhZ2VTaXplOiBvcHRpb25zLnBhZ2VTaXplID8gTnVtYmVyKG9wdGlvbnMucGFnZVNpemUpIDogMTAsXG4gICAgICAgICAgICAgICAgICAgIFBhZ2VOdW1iZXI6IG9wdGlvbnMucGFnZU51bWJlciA/IE51bWJlcihvcHRpb25zLnBhZ2VOdW1iZXIpIDogMVxuICAgICAgICAgICAgICAgIH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBldmVudHMgb2YgdGhlIHN0YWNrICVzIGFyZTogXFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKHN0YWNrTmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShKU09OLnN0cmluZ2lmeShyZXMuRXZlbnRzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBkZXN0cm95LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHN0YWNrIGV2ZW50czogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgICAgZXhpdChleGl0U2lnbmFsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb3V0cHV0KG9wdGlvbnM6IE91dFB1dE9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdEFsbFN0YWNrc0ZvckRlZmF1bHQob3B0aW9ucy5zdGFja05hbWVzKTtcbiAgICAgICAgY29uc3Qgc3RhY2tOYW1lcyA9IHN0YWNrcy5zdGFja0lkc1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgZXhpdFNpZ25hbCA9IDA7XG4gICAgICAgIGxldCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpO1xuICAgICAgICAgICAgbGV0IHN0YWNrSWQgPSBzdGFja0luZm8uc3RhY2tJZFxuICAgICAgICAgICAgbGV0IHJlZ2lvbiA9IHN0YWNrSW5mby5yZWdpb25JZDtcbiAgICAgICAgICAgIGlmICghcmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHN0YWNrLmluZm8uanNvbiBmaWxlLCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBzdGFjazogJXMhYCwgc3RhY2tOYW1lKVxuICAgICAgICAgICAgICAgIGV4aXRTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKGNsaWVudFxuICAgICAgICAgICAgICAgIC5nZXRTdGFjayh7XG4gICAgICAgICAgICAgICAgICAgIFN0YWNrSWQ6IHN0YWNrSWQsXG4gICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb25cbiAgICAgICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgb3V0cHV0cyBvZiB0aGUgc3RhY2sgJXMgYXJlOiBcXG4gJXMgXFxuYCwgY29sb3JzLmJsdWUoc3RhY2tOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5PdXRwdXRzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBkZXN0cm95LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHN0YWNrIG91dHB1dHM6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleGl0U2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIGV4aXQoZXhpdFNpZ25hbCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYXN5bmMgcmVzb3VyY2Uob3B0aW9uczogUmVzb3VyY2VPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RBbGxTdGFja3NGb3JEZWZhdWx0KG9wdGlvbnMuc3RhY2tOYW1lcyk7XG4gICAgICAgIGxldCBzdGFja05hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgIGlmICgoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKSkuc3RhY2tJZCkge1xuICAgICAgICAgICAgICAgIHN0YWNrTmFtZXMucHVzaChzdGFjay5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yKGBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGlzdCBpbiB0aGUgc3RhY2suaW5mby5qc29uIGZpbGUsIFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIHN0YWNrOiAlcyFgLCBzdGFjay5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgZXhpdFNpZ25hbCA9IDA7XG4gICAgICAgIGxldCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpO1xuICAgICAgICAgICAgbGV0IHJlZ2lvbiA9IHN0YWNrSW5mby5yZWdpb25JZDtcbiAgICAgICAgICAgIGlmICghcmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKGNsaWVudFxuICAgICAgICAgICAgICAgIC5saXN0U3RhY2tSZXNvdXJjZXMoe1xuICAgICAgICAgICAgICAgICAgICBTdGFja0lkOiAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrTmFtZSkpLnN0YWNrSWQsXG4gICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICAgICAgfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIGxpc3Qgb2YgcmVzb3VyY2VzIGluIHRoZSBzdGFjayAlcyBpczogXFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKHN0YWNrTmFtZSksIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5SZXNvdXJjZXMsIG51bGwsIFwiXFx0XCIpKSk7XG4gICAgICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIGRlc3Ryb3kuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0ssIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgc3RhY2sgcmVzb3VyY2U6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleGl0U2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIGV4aXQoZXhpdFNpZ25hbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdlbmVyYXRlU3RhY2tJbmZvKG9wdGlvbnM6IEdlbmVyYXRlU3RhY2tJbmZvT3B0aW9ucykge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RBbGxTdGFja3NGb3JEZWZhdWx0KFtdKTtcbiAgICAgICAgbGV0IHN0YWNrTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBTdGFja0luZm9zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgIHN0YWNrTmFtZXMgPSBzdGFja3Muc3RhY2tJZHNcbiAgICAgICAgZm9yIChsZXQgc3RhY2tOYW1lIG9mIHN0YWNrTmFtZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lLCBvcHRpb25zLnJlc291cmNlR3JvdXBJZCwgdW5kZWZpbmVkKVxuICAgICAgICAgICAgaWYgKHN0YWNrSW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFN0YWNrSW5mb3Nbc3RhY2tOYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBERVBMT1lfU1RBQ0ssXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrSWQ6IHN0YWNrSW5mby5TdGFja0lkLFxuICAgICAgICAgICAgICAgICAgICByZWdpb25JZDogc3RhY2tJbmZvLlJlZ2lvbklkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTdGFja0luZm9zW3N0YWNrTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogSU5JVF9TVEFDSyxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tJZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uSWQ6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KFN0YWNrSW5mb3MsIG51bGwsICdcXHQnKSk7XG4gICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICBgXFxuIOKchSBUaGUgZ2VuZXJhdGUgc3RhY2sgaW5mbyBoYXMgY29tcGxldGVkIWAsXG4gICAgICAgICk7XG4gICAgICAgIGV4aXQoMClcbiAgICB9XG5cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lOiBzdHJpbmcsIHJlc291cmNlR3JvdXBJZDogYW55LCByZWdpb246IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBpZiAoIXJlZ2lvbikge1xuICAgICAgICAgICAgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyYW1zOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICBQYWdlU2l6ZTogMTAsXG4gICAgICAgICAgICBQYWdlTnVtYmVyOiAxLFxuICAgICAgICAgICAgU3RhY2tOYW1lOiBbc3RhY2tOYW1lXVxuICAgICAgICB9O1xuICAgICAgICBpZiAocmVzb3VyY2VHcm91cElkKSB7XG4gICAgICAgICAgICBwYXJhbXNbJ1Jlc291cmNlR3JvdXBJZCddID0gcmVzb3VyY2VHcm91cElkXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5saXN0U3RhY2tzKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICBpZiAocmVzdWx0LlN0YWNrc1swXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuU3RhY2tzWzBdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsaXN0U3RhY2tzKG9wdGlvbnM6IExpc3RTdGFja09wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCBwYXJhbXM6IGFueSA9IHt9O1xuICAgICAgICBsZXQgcmVnaW9uID0gb3B0aW9ucy5yZWdpb247XG4gICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICAgIFBhZ2VTaXplOiBvcHRpb25zLnBhZ2VTaXplID8gTnVtYmVyKG9wdGlvbnMucGFnZVNpemUpIDogMTAsXG4gICAgICAgICAgICBQYWdlTnVtYmVyOiBvcHRpb25zLnBhZ2VOdW1iZXIgPyBOdW1iZXIob3B0aW9ucy5wYWdlTnVtYmVyKSA6IDFcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG9wdGlvbnMucmVzb3VyY2VHcm91cElkKSB7XG4gICAgICAgICAgICBwYXJhbXMuUmVzb3VyY2VHcm91cElkID0gb3B0aW9ucy5yZXNvdXJjZUdyb3VwSWRcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXhpdFNpZ25hbCA9IDA7XG4gICAgICAgIGxldCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICBpZiAoIW9wdGlvbnMuYWxsKSB7XG4gICAgICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RBbGxTdGFja3NGb3JEZWZhdWx0KG9wdGlvbnMuc3RhY2tOYW1lcyk7XG4gICAgICAgICAgICBsZXQgcmVnaW9uTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgICAgIGxldCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpO1xuICAgICAgICAgICAgICAgIGlmIChyZWdpb24gJiYgc3RhY2tJbmZvLnJlZ2lvbklkICE9PSByZWdpb24pIHtjb250aW51ZX1cbiAgICAgICAgICAgICAgICBpZiAocmVnaW9uTWFwLmhhcyhzdGFja0luZm8ucmVnaW9uSWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbk1hcC5nZXQoc3RhY2tJbmZvLnJlZ2lvbklkKSEucHVzaChzdGFjay5pZClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWdpb25NYXAuc2V0KHN0YWNrSW5mby5yZWdpb25JZCwgW3N0YWNrLmlkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWdpb25NYXAuZm9yRWFjaCgoc3RhY2tOYW1lcywgcikgPT4ge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5TdGFja05hbWUgPSBzdGFja05hbWVzO1xuICAgICAgICAgICAgICAgIHBhcmFtcy5SZWdpb25JZCA9IHI7XG4gICAgICAgICAgICAgICAgcmVxdWVzdHMucHVzaChjbGllbnQubGlzdFN0YWNrcyhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIFN0YWNrcyBsaXN0IGluICR7cn0gaXM6XFxuICR7Y29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLlN0YWNrcywgbnVsbCwgXCJcXHRcIikpfSBcXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCfinYwgRmFpbCB0byBsaXN0IHN0YWNrcyBpbiAke3J9OiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0U2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghcmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpZ19yZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJlZ2lvbiA9IGNvbmZpZ19yZWdpb24gPyBjb25maWdfcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyYW1zLlJlZ2lvbklkID0gcmVnaW9uO1xuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChjbGllbnQubGlzdFN0YWNrcyhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBTdGFja3MgbGlzdCBpbiAke3JlZ2lvbn0gaXM6XFxuICR7Y29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLlN0YWNrcywgbnVsbCwgXCJcXHRcIikpfSBcXG5gKTtcbiAgICAgICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcign4p2MIEZhaWwgdG8gbGlzdCBzdGFja3MgaW4gJXM6ICVzICVzJywgcmVnaW9uLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICBleGl0U2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIGV4aXQoZXhpdFNpZ25hbCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYXN5bmMgaGFuZGxlRGVsKGNsaWVudDogYW55LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5kZWxldGUobmFtZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbi8vIOWIoOmZpOWkmuS4quaWh+S7tuOAglxuICAgIHB1YmxpYyBhc3luYyBkZWxldGVQcm9qZWN0cyhjbGllbnQ6IGFueSkge1xuICAgICAgICBsZXQgbGlzdCA9IGF3YWl0IGNsaWVudC5saXN0KCk7XG5cbiAgICAgICAgbGlzdC5vYmplY3RzID0gbGlzdC5vYmplY3RzIHx8IFtdO1xuXG4gICAgICAgIHdoaWxlIChsaXN0Lm9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwobGlzdC5vYmplY3RzLm1hcCgodjogYW55KSA9PiB0aGlzLmhhbmRsZURlbChjbGllbnQsIHYubmFtZSkpKTtcblxuICAgICAgICAgICAgbGlzdCA9IGF3YWl0IGNsaWVudC5saXN0KCk7XG4gICAgICAgICAgICBsaXN0Lm9iamVjdHMgPSBsaXN0Lm9iamVjdHMgfHwgW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlQnVja2V0KGNsaWVudDogYW55LCBidWNrZXROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIOaMh+WumuWtmOWCqOepuumXtOWQjeensOOAglxuICAgICAgICAgICAgYXdhaXQgdGhpcy5kZWxldGVQcm9qZWN0cyhjbGllbnQpO1xuICAgICAgICAgICAgYXdhaXQgY2xpZW50LmRlbGV0ZUJ1Y2tldChidWNrZXROYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZWxldGUgYnVja2V0KCR7YnVja2V0TmFtZX0pIHN1Y2Nlc3NmdWxseSFgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdOb1N1Y2hCdWNrZXQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlc3Ryb3kob3B0aW9uczogRGVzdHJveU9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdEFsbFN0YWNrc0ZvckRlZmF1bHQob3B0aW9ucy5zdGFja05hbWVzKTtcbiAgICAgICAgbGV0IHN0YWNrTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBzeW5jID0gb3B0aW9ucy5zeW5jXG4gICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgaWYgKChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpKS5zdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgc3RhY2tOYW1lcy5wdXNoKHN0YWNrLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMucXVpZXQpIHtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpcm0gPSByZWFkbGluZVN5bmMucXVlc3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICdUaGUgZm9sbG93aW5nIHN0YWNrKHMpIHdpbGwgYmUgZGVzdHJveWVkKE9ubHkgZGVwbG95ZWQgc3RhY2tzIHdpbGwgYmUgZGlzcGxheWVkKS5cXG5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lcy50b1N0cmluZygpICtcbiAgICAgICAgICAgICAgICAgICAgJ1xcblxcblBsZWFzZSBjb25maXJtLihZL04pXFxuJyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtID09PSAnbicgfHwgY29uZmlybSA9PT0gJ04nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0gPT09ICd5JyB8fCBjb25maXJtID09PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBjb25maWdfcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgY29uZmlnX3JlZ2lvbiA9IGNvbmZpZ19yZWdpb24gPyBjb25maWdfcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgZXhpdFNpZ25hbCA9IDA7XG4gICAgICAgIGZvciAobGV0IHN0YWNrTmFtZSBvZiBzdGFja05hbWVzKSB7XG4gICAgICAgICAgICBsZXQgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBidWNrZXROYW1lID0gc3RhY2tJbmZvLmFzc2V0QXNzb2NpYXRlZEJ1Y2tldE5hbWU7XG4gICAgICAgICAgICBsZXQgY29udGVudDogeyBbbmFtZTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICAgICAgU3RhY2tJZDogc3RhY2tJbmZvLnN0YWNrSWQsXG4gICAgICAgICAgICAgICAgUmVnaW9uSWQ6IHN0YWNrSW5mby5yZWdpb25JZCA/IHN0YWNrSW5mby5yZWdpb25JZCA6IGNvbmZpZ19yZWdpb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICBwcmludCgnJXM6IGRlc3Ryb3lpbmcuLi4nLCBjb2xvcnMuYm9sZChzdGFja05hbWUpKTtcbiAgICAgICAgICAgICAgICBleGl0U2lnbmFsID0gYXdhaXQgdGhpcy5zeW5jRGVzdHJveVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IGNsaWVudC5kZWxldGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0ssIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIERlbGV0ZSB0aGUgc3RhY2soJHtzdGFja05hbWV9KSBzdWNjZXNzZnVsbHkhXFxuUmVxdWVzdGVkSWQ6ICVzYCwgY29sb3JzLmJsdWUocmVzLlJlcXVlc3RJZCkpO1xuICAgICAgICAgICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBkZXN0cm95LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSywgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZGVsZXRlIHN0YWNrOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJ1Y2tldE5hbWUgIT09IHVuZGVmaW5lZCAmJiBidWNrZXROYW1lICE9PSBudWxsICYmIGJ1Y2tldE5hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRDb25maWcoKTtcbiAgICAgICAgICAgICAgICBsZXQgY2xpZW50O1xuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmFjY2Vzc0tleUlkIHx8ICFjb25maWcuYWNjZXNzS2V5U2VjcmV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFwiUGxlYXNlIHVzZSAncm9zLWNkayBjb25maWcgKC1nKScgb3Igc2V0IGVudmlyb25tZW50IHRvIHNldCB5b3VyIGFjY291bnQgY29uZmlndXJhdGlvbiBmaXJzdGx5IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFjb25maWcuc2VjdXJpdHlUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnQgPSBuZXcgb3NzQ2xpZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lvbjogYG9zcy0ke2NvbmZpZy5yZWdpb25JZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGNvbmZpZy5hY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogY29uZmlnLmFjY2Vzc0tleVNlY3JldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldDogc3RhY2tJbmZvLmFzc2V0QXNzb2NpYXRlZEJ1Y2tldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50ID0gbmV3IG9zc0NsaWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpb246IGBvc3MtJHtjb25maWcucmVnaW9uSWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBjb25maWcuYWNjZXNzS2V5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGNvbmZpZy5hY2Nlc3NLZXlTZWNyZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBjb25maWcuc2VjdXJpdHlUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldDogc3RhY2tJbmZvLmFzc2V0QXNzb2NpYXRlZEJ1Y2tldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsZXRlQnVja2V0KGNsaWVudCwgYnVja2V0TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXhpdChleGl0U2lnbmFsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHN5bmNTdGFja0luZm8oKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgU1RBQ0tfSU5GTyk7XG4gICAgICAgIGxldCBmaWxlQ29udGVudCA9IHt9O1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZmlsZUNvbnRlbnQsIG51bGwsICdcXHQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRlbXA6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICAgICAgLy8gc2VsZWN0b3IubGVuZ3RoID0gMCBtZWFucyBzZWxlY3QgYWxsIHN0YWNrcyBmcm9tIHRoaXMgYXBwXG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0QWxsU3RhY2tzRm9yRGVmYXVsdChbXSk7XG4gICAgICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oU1RBQ0tfSU5GTywgc3RhY2suaWQpO1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0YWNrIGhhcyBubyBpbmZvLCB0aGVuIGFkZCBpbml0IHRhZyBmb3IgaXRcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRlbXBbc3RhY2suaWRdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBbc3RhY2suaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IElOSVRfU1RBQ0ssXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrSWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbklkOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KHRlbXAsIG51bGwsICdcXHQnKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHJlZ2lvbklkOiBzdHJpbmd8dW5kZWZpbmVkLCBidWNrZXROYW1lPzogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz86IHN0cmluZykge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBpbmZvID0gSlNPTi5wYXJzZShmaWxlQ29udGVudCk7XG4gICAgICAgIGxldCBzdGFja0luZm8gPSBpbmZvW3N0YWNrTmFtZV07XG4gICAgICAgIGlmICghc3RhY2tJbmZvKSB7XG4gICAgICAgICAgICBzdGFja0luZm8gPSBpbmZvW3N0YWNrTmFtZV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSBERVBMT1lfU1RBQ0tfSURfTEVOR1RIKSB7XG4gICAgICAgICAgICBzdGFja0luZm8uc3RhdHVzID0gc3RhdHVzPz8gREVQTE9ZX1NUQUNLO1xuICAgICAgICAgICAgc3RhY2tJbmZvLnN0YWNrSWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHN0YWNrSW5mby5yZWdpb25JZCA9IHJlZ2lvbklkO1xuICAgICAgICAgICAgc3RhY2tJbmZvLmFzc2V0QXNzb2NpYXRlZEJ1Y2tldE5hbWUgPSBidWNrZXROYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhY2tJbmZvLnN0YXR1cyA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBERVNUUk9ZX1NUQUNLKSB7XG4gICAgICAgICAgICAgICAgc3RhY2tJbmZvLnN0YWNrSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHN0YWNrSW5mby5yZWdpb25JZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3RhY2tJbmZvLmFzc2V0QXNzb2NpYXRlZEJ1Y2tldE5hbWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGluZm8sIG51bGwsICdcXHQnKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBmaW5kU3RhY2tJbmZvKHN0YWNrTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgU1RBQ0tfSU5GTyk7XG4gICAgICAgIGxldCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpW3N0YWNrTmFtZV07XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGFzeW5jIHNlbGVjdEFsbFN0YWNrc0ZvckRlZmF1bHQoc3RhY2tOYW1lczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzdGFja05hbWVzLCB7XG4gICAgICAgICAgICBkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb24uQWxsU3RhY2tzLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBObyB2YWxpZGF0aW9uXG5cbiAgICAgICAgcmV0dXJuIHN0YWNrcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNlbGVjdE9ubHlTaW5nbGVTdGFja0ZvckRlZmF1bHQoc3RhY2tOYW1lczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzdGFja05hbWVzLCB7XG4gICAgICAgICAgICBkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb24uT25seVNpbmdsZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTm8gdmFsaWRhdGlvblxuXG4gICAgICAgIHJldHVybiBzdGFja3M7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JEZXBsb3koc3RhY2tOYW1lczogc3RyaW5nW10sIGV4Y2x1c2l2ZWx5PzogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgICAgICAgIGV4dGVuZDogZXhjbHVzaXZlbHkgPyBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUgOiBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLlVwc3RyZWFtLFxuICAgICAgICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLk9ubHlTaW5nbGUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGVTdGFja3Moc3RhY2tzKTtcblxuICAgICAgICByZXR1cm4gc3RhY2tzO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yRGlmZihzdGFja05hbWVzOiBzdHJpbmdbXSwgZXhjbHVzaXZlbHk/OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc3RhY2tOYW1lcywge1xuICAgICAgICAgICAgZXh0ZW5kOiBleGNsdXNpdmVseSA/IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uTm9uZSA6IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uVXBzdHJlYW0sXG4gICAgICAgICAgICBkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb24uQWxsU3RhY2tzLFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlU3RhY2tzKHN0YWNrcyk7XG5cbiAgICAgICAgcmV0dXJuIHN0YWNrcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSB0aGUgc3RhY2tzIGZvciBlcnJvcnMgYW5kIHdhcm5pbmdzIGFjY29yZGluZyB0byB0aGUgQ0xJJ3MgY3VycmVudCBzZXR0aW5nc1xuICAgICAqL1xuICAgIHByaXZhdGUgYXN5bmMgdmFsaWRhdGVTdGFja3Moc3RhY2tzOiBTdGFja0NvbGxlY3Rpb24pIHtcbiAgICAgICAgc3RhY2tzLnByb2Nlc3NNZXRhZGF0YU1lc3NhZ2VzKHtcbiAgICAgICAgICAgIGlnbm9yZUVycm9yczogdGhpcy5wcm9wcy5pZ25vcmVFcnJvcnMsXG4gICAgICAgICAgICBzdHJpY3Q6IHRoaXMucHJvcHMuc3RyaWN0LFxuICAgICAgICAgICAgdmVyYm9zZTogdGhpcy5wcm9wcy52ZXJib3NlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzc2VtYmx5KCk6IFByb21pc2U8Q2xvdWRBc3NlbWJseT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jbG91ZEV4ZWN1dGFibGUuc3ludGhlc2l6ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0Q2xpQ29uZmlnKGxvYWRGaWxlUGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aDogc3RyaW5nO1xuICAgICAgICBsZXQgY29uZmlndXJlSW5mbzogYW55ID0ge307XG4gICAgICAgIGxldCBjb25maWd1cmVJbmZvczogYW55ID0ge307XG4gICAgICAgIGxldCBBS1Byb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBsZXQgU3RzUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XG4gICAgICAgIGxldCBSYW1Sb2xlQXJuUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XG4gICAgICAgIGxldCBFY3NSYW1Sb2xlUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XG4gICAgICAgIGlmIChsb2FkRmlsZVBhdGgpIHtcbiAgICAgICAgICAgIGZpbGVQYXRoID0gbG9hZEZpbGVQYXRoXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaG9tZVBhdGggPSBvcy5ob21lZGlyKCk7XG4gICAgICAgICAgICBmaWxlUGF0aCA9IGhvbWVQYXRoICsgQ0xJX0NPTkZJR19GSUxFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBsZXQgQWxsUHJvZmlsZXMgPSBKU09OLnBhcnNlKGZpbGUpWydwcm9maWxlcyddO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvZmlsZSBvZiBBbGxQcm9maWxlcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBwcm9maWxlLmFjY2Vzc19rZXlfaWQsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogcHJvZmlsZS5hY2Nlc3Nfa2V5X3NlY3JldCxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiBwcm9maWxlLnJlZ2lvbl9pZCxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogcHJvZmlsZS5zdHNfdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBcm46IHByb2ZpbGUucmFtX3JvbGVfYXJuLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHByb2ZpbGUucmFtX3Nlc3Npb25fbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6IHByb2ZpbGUucmFtX3JvbGVfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvZmlsZS5uYW1lXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ0FLJykge1xuICAgICAgICAgICAgICAgICAgICBBS1Byb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuQUsgPSBBS1Byb2ZpbGVMaXN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9maWxlLm1vZGUgPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgU3RzUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvcy5TdHNUb2tlbiA9IFN0c1Byb2ZpbGVMaXN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9maWxlLm1vZGUgPT09ICdSYW1Sb2xlQXJuJykge1xuICAgICAgICAgICAgICAgICAgICBSYW1Sb2xlQXJuUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvcy5SYW1Sb2xlQXJuID0gUmFtUm9sZUFyblByb2ZpbGVMaXN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9maWxlLm1vZGUgPT09ICdFY3NSYW1Sb2xlJykge1xuICAgICAgICAgICAgICAgICAgICBFY3NSYW1Sb2xlUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvcy5FY3NSYW1Sb2xlID0gRWNzUmFtUm9sZVByb2ZpbGVMaXN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjb25maWd1cmVJbmZvcyB8fCBPYmplY3Qua2V5cyhjb25maWd1cmVJbmZvcykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBlcnJvcihcIldBTlJOSU5HOiBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBtb2RlIGFuZCBwcm9maWxlIGNvbmZpZ3VyYXRpb24gZW50ZXJlZC5cIik7XG4gICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25maWd1cmVJbmZvc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoXCJXQU5STklORzogUGxlYXNlIGNoZWNrIEFsaXl1biBDbGkgdG9vbCBjb25maWd1cmUgYWNjdXJhY3kgb2YgdGhlIGRlZmF1bHQgcGF0aCBvciBzcGVjaWZpZWQgcGF0aC5cIik7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyByb3NEZXBsb3lTdGFjayhjbGllbnQ6IGFueSwgY29udGVudDogYW55LCByZXF1ZXN0T3B0aW9uczogYW55LCBvdXRwdXRzRmlsZTogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogYW55LCBzdGFja05hbWU6IGFueSwgZGV0YWlsTG9nOiBib29sZWFuLCBzeW5jOiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0TmFtZT86IHN0cmluZykge1xuICAgICAgICBjb25zdCBzdGFja091dHB1dHM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICAgICAgbGV0IHNsZWVwVGltZSA9IDA7XG4gICAgICAgIGxldCBzdGFja0lkOiBhbnk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgY3JlYXRlU3RhY2tSZXN1bHQgPSBhd2FpdCBjbGllbnQuY3JlYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgc3RhY2tJZCA9IGNyZWF0ZVN0YWNrUmVzdWx0LlN0YWNrSWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihgVGhlICR7aX10aCBkZXBsb3ltZW50IGF0dGVtcHQgZmFpbGVkLCBhcyBkZXRhaWxlZCBpbiAke2V9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZS5kYXRhIHx8ICEoXCJSZXF1ZXN0SWRcIiBpbiBlLmRhdGEpIHx8IGUuY29kZSA9PT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsZWVwVGltZSA8IDIwMDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGVlcFRpbWUgPSBzbGVlcFRpbWUgKyA1MDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHNsZWVwVGltZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmNvZGUgPT09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGFja0lkSW5mbyA9IGF3YWl0IHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lLCByZXNvdXJjZUdyb3VwSWQsIGNvbnRlbnRbJ1JlZ2lvbklkJ10pXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdTdGFja0lkSW5mbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tJZCA9IG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcign4p2MIEZhaWwgdG8gY3JlYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuUmVxdWVzdGVkSWQ6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuY29kZSwgZS5kYXRhW1wiUmVxdWVzdElkXCJdLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdGFja0lkKSB7XG4gICAgICAgICAgICBlcnJvcign4p2MIEZhaWwgdG8gY3JlYXRlIHN0YWNrLCBwbGVhc2UgY2hlY2sgeW91ciBzZXJ2aWNlIGVuZHBvaW50LicpXG4gICAgICAgICAgICB0aHJvdyBuZXcgTmV0d29ya0Vycm9yKCdBbiB1bmtub3duIG5ldHdvcmsgZXJyb3Igb2NjdXJzLCBwbGVhc2UgY2hlY2sgdGhlIGVuZHBvaW50IGFuZCB0cnkgYWdhaW4gbGF0ZXIuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBuZXcgUmV3cml0YWJsZUJsb2NrKHN0cmVhbSk7XG4gICAgICAgICAgICB3aXRoRGVmYXVsdFByaW50ZXJPYmogPSBzZXRJbnRlcnZhbChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgc3RhY2tJZCwgYmxvY2ssICdkZXBsb3knKVxuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMDApXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWdpb25JZDogY29udGVudFsnUmVnaW9uSWQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YWNrSWQ6IHN0YWNrSWRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0U3RhY2tSZXN1bHQgPSBhd2FpdCBjbGllbnQuZ2V0U3RhY2socGFyYW1zLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZ2V0U3RhY2tSZXN1bHQuU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1JlYXNvbiA9IGdldFN0YWNrUmVzdWx0LlN0YXR1c1JlYXNvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFja05hbWUgPSBnZXRTdGFja1Jlc3VsdC5TdGFja05hbWVcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGdldFN0YWNrUmVzdWx0Lk91dHB1dHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnQ29tcGxldGUgPSBSZWdFeHAoL0NPTVBMRVRFLylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRmFpbGVkID0gUmVnRXhwKC9GQUlMRUQvKVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnQ29tcGxldGUuZXhlYyhzdGF0dXMpIHx8IHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIHN0YWNrSWQsIGJsb2NrLCAnZGVwbG95JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnXFxuT3V0cHV0czonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja091dHB1dHNbc3RhY2tOYW1lXSA9IG91dHB1dHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvdXRwdXQgb2Ygb3V0cHV0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG91dHB1dFsnT3V0cHV0VmFsdWUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gb3V0cHV0WydPdXRwdXRLZXknXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBvdXRwdXRbJ0Rlc2NyaXB0aW9uJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCdcXG4gS2V5OiAlcyAgVmFsdWU6ICVzIERlc2NyaXB0aW9uOiAlcycsIGNvbG9ycy5jeWFuKGtleSksIGNvbG9ycy5jeWFuKHZhbHVlKSwgY29sb3JzLmN5YW4oZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dHNGaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKExPQ0FMX1BBVEggKyBPVVRQVVRTX0pTT04pLCBKU09OLnN0cmluZ2lmeShzdGFja091dHB1dHMsIG51bGwsICdcXHQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy50b1N0cmluZygpID09ICdDUkVBVEVfQ09NUExFVEUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBzdGFja0lkLCBjb250ZW50WydSZWdpb25JZCddLCBidWNrZXROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChzeW5jIGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGF0dXM6ICVzXFxuU3RhdHVzUmVhc29uOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzUmVhc29uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhY2tJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHN0YWNrSWQsIGNvbnRlbnRbJ1JlZ2lvbklkJ10sIGJ1Y2tldE5hbWUsIHN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihgXFxu4p2MIEZhaWwgdG8gc3luYyBjcmVhdGUgc3RhY2s6XFxuU3RhdHVzOiAlc1xcblN0YXR1c1JlYXNvbjogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1c1JlYXNvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YWNrSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ0FuIGVycm9yIG9jY3VycyB0cnlpbmcgdG8gZ2V0IHRoZSByZXNvdXJjZSBzdGFjayBkZXRhaWxzOiAlcycsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1Rocm90dGxpbmcuVXNlcicgfHwgZS5jb2RlID09ICdUaHJvdHRsaW5nJyB8fCBlLmNvZGUgPT0gJ1Rocm90dGxpbmcuQVBJJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMzAwMDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcign4p2MIEZhaWwgdG8gc3luYyBjcmVhdGUgc3RhY2s6IEVycm9yQ29kZTogJXNcXG5FcnJvck1lc3NhZ2U6JXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHN0YWNrSWQsIGNvbnRlbnRbJ1JlZ2lvbklkJ10sIGJ1Y2tldE5hbWUpO1xuICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YWNrSWQpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBnZXRSZXNvdXJjZXMoY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSwgc3RhY2tJZDogYW55KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0U3RhY2tSZXNvdXJjZXNSZXN1bHQgPSBhd2FpdCBjbGllbnQubGlzdFN0YWNrUmVzb3VyY2VzKHtcbiAgICAgICAgICAgICAgICBTdGFja0lkOiBzdGFja0lkLFxuICAgICAgICAgICAgICAgIFJlZ2lvbklkOiBjb250ZW50WydSZWdpb25JZCddLFxuICAgICAgICAgICAgfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICByZXR1cm4gbGlzdFN0YWNrUmVzb3VyY2VzUmVzdWx0LlJlc291cmNlc1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgbmV3IHN0YWNrIHJlc291cmNlOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIHdpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQ6IGFueSwgY29udGVudDogYW55LCByZXF1ZXN0T3B0aW9uczogYW55LCBzdGFja0lkOiBhbnksIGJsb2NrOiBhbnksIGFjdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgY29uc3QgcmVzb3VyY2VzID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRSZXNvdXJjZXMoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgc3RhY2tJZClcbiAgICAgICAgaWYgKGFjdGlvbiAhPT0gJ2Rlc3Ryb3knKSB7XG4gICAgICAgICAgICBmb3IgKGxldCByZXNvdXJjZSBvZiByZXNvdXJjZXMpIHtcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKHV0aWwuZm9ybWF0KGNvbG9ycy5ibHVlKCd8JXMgfCVzIHwgJXMgfCAlcyB8ICVzIHwgJXMnKSArICdcXG4nLFxuICAgICAgICAgICAgICAgICAgICBwYWRSaWdodCgyMywgcmVzb3VyY2UuU3RhY2tOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkTGVmdCgxMiwgcmVzb3VyY2UuQ3JlYXRlVGltZSksXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIwLCByZXNvdXJjZS5TdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICBwYWRSaWdodCgyMywgcmVzb3VyY2UuUmVzb3VyY2VUeXBlKSxcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRlbig0MCwgcmVzb3VyY2UuUGh5c2ljYWxSZXNvdXJjZUlkKSxcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuTG9naWNhbFJlc291cmNlSWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJlc291cmNlIG9mIHJlc291cmNlcykge1xuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2godXRpbC5mb3JtYXQoY29sb3JzLmJsdWUoJ3wlcyB8ICVzIHwgJXMgfCAlcyB8ICVzJykgKyAnXFxuJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjMsIHJlc291cmNlLlN0YWNrTmFtZSksXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIwLCByZXNvdXJjZS5TdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICBwYWRSaWdodCgyMywgcmVzb3VyY2UuUmVzb3VyY2VUeXBlKSxcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRlbig0MCwgcmVzb3VyY2UuUGh5c2ljYWxSZXNvdXJjZUlkKSxcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuTG9naWNhbFJlc291cmNlSWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBibG9jay5kaXNwbGF5TGluZXMobGluZXMpXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGFzeW5jIHJvc1VwZGF0ZVN0YWNrKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIG91dHB1dHNGaWxlOiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpcElmTm9DaGFuZ2VzOiBib29sZWFuLCBzdGFja1VwZGF0ZVRpbWU6IGFueSwgZGV0YWlsTG9nOiBib29sZWFuLCBzeW5jOiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lOiBzdHJpbmcsIGJ1Y2tldE5hbWU/OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHNsZWVwVGltZSA9IDA7XG4gICAgICAgIGNvbnN0IHN0YWNrSWQgPSBjb250ZW50WydTdGFja0lkJ107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBjbGllbnQudXBkYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihgVGhlICR7aX10aCB1cGRhdGUgYXR0ZW1wdCBmYWlsZWQsIGFzIGRldGFpbGVkIGluICR7ZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlLmRhdGEgfHwgIShcIlJlcXVlc3RJZFwiIGluIGUuZGF0YSkgfHwgZS5jb2RlID09PSAnU2VydmljZVVuYXZhaWxhYmxlJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xlZXBUaW1lIDwgMjAwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsZWVwVGltZSA9IHNsZWVwVGltZSArIDUwMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoc2xlZXBUaW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuY29kZSA9PT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmNvZGUgPT0gJ05vdFN1cHBvcnRlZCcgJiYgZS5tZXNzYWdlLnN0YXJ0c1dpdGgoJ1VwZGF0ZSB0aGUgY29tcGxldGVseSBzYW1lIHN0YWNrJylcbiAgICAgICAgICAgICAgICAgICAgJiYgKHNraXBJZk5vQ2hhbmdlcyB8fCBidWNrZXROYW1lICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoJ1RoZSBzdGFjayBpcyBjb21wbGV0ZWx5IHRoZSBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIHVwZGF0ZS4nKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCfinYwgRmFpbCB0byB1cGRhdGUgc3RhY2s6IEVycm9yQ29kZTogJXNcXG5SZXF1ZXN0ZWRJZDogJXNcXG5FcnJvck1lc3NhZ2U6JXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5jb2RlLCBlLmRhdGFbXCJSZXF1ZXN0SWRcIl0sIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBSZWdpb25JZDogY29udGVudFsnUmVnaW9uSWQnXSxcbiAgICAgICAgICAgICAgICBTdGFja0lkOiBzdGFja0lkXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgc3RhY2tPdXRwdXRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgICAgICAvLyBXYWl0IGZvciB0aGUgc3RhY2sgc3RhdGUgdG8gY2hhbmdlIGFmdGVyIHVwZGF0aW5nIGl0XG4gICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDAwKTtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gbmV3IFJld3JpdGFibGVCbG9jayhzdHJlYW0pO1xuICAgICAgICAgICAgd2l0aERlZmF1bHRQcmludGVyT2JqID0gc2V0SW50ZXJ2YWwoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIHN0YWNrSWQsIGJsb2NrLCAndXBkYXRlJylcbiAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDAwKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXROZXdTdGFja1Jlc3VsdCA9IGF3YWl0IGNsaWVudC5nZXRTdGFjayhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBnZXROZXdTdGFja1Jlc3VsdC5TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzUmVhc29uID0gZ2V0TmV3U3RhY2tSZXN1bHQuU3RhdHVzUmVhc29uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dHMgPSBnZXROZXdTdGFja1Jlc3VsdC5PdXRwdXRzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1VwZGF0ZVRpbWUgPSBnZXROZXdTdGFja1Jlc3VsdC5VcGRhdGVUaW1lID8gZ2V0TmV3U3RhY2tSZXN1bHQuVXBkYXRlVGltZSA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1VwZGF0ZVRpbWUgPT0gc3RhY2tVcGRhdGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFjayB1cGRhdGUgaW4gcHJvZ3Jlc3Mgb3IgdXBkYXRlIGRpZCBub3QgYmVnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnQ29tcGxldGUgPSBSZWdFeHAoL0NPTVBMRVRFLylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRmFpbGVkID0gUmVnRXhwKC9GQUlMRUQvKVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnQ29tcGxldGUuZXhlYyhzdGF0dXMpIHx8IHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIHN0YWNrSWQsIGJsb2NrLCAndXBkYXRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnXFxuT3V0cHV0czonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja091dHB1dHNbc3RhY2tOYW1lXSA9IG91dHB1dHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvdXRwdXQgb2Ygb3V0cHV0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG91dHB1dFsnT3V0cHV0VmFsdWUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gb3V0cHV0WydPdXRwdXRLZXknXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBvdXRwdXRbJ0Rlc2NyaXB0aW9uJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCdcXG4gS2V5OiAlcyAgVmFsdWU6ICVzIERlc2NyaXB0aW9uOiAlcycsIGNvbG9ycy5jeWFuKGtleSksIGNvbG9ycy5jeWFuKHZhbHVlKSwgY29sb3JzLmN5YW4oZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dHNGaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKExPQ0FMX1BBVEggKyBPVVRQVVRTX0pTT04pLCBKU09OLnN0cmluZ2lmeShzdGFja091dHB1dHMsIG51bGwsICdcXHQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy50b1N0cmluZygpID09ICdVUERBVEVfQ09NUExFVEUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBzdGFja0lkLCBjb250ZW50WydSZWdpb25JZCddLCBidWNrZXROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChzeW5jIHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGF0dXM6ICVzXFxuU3RhdHVzUmVhc29uOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzUmVhc29uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhY2tJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHN0YWNrSWQsIGNvbnRlbnRbJ1JlZ2lvbklkJ10sIGJ1Y2tldE5hbWUsIHN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihgXFxu4p2MIEZhaWwgdG8gc3luYyB1cGRhdGUgc3RhY2s6XFxuU3RhdHVzOiAlc1xcblN0YXR1c1JlYXNvbjogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1c1JlYXNvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YWNrSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ0FuIGVycm9yIG9jY3VycyB0cnlpbmcgdG8gZ2V0IHRoZSByZXNvdXJjZSBzdGFjayBkZXRhaWxzOiAlcycsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1Rocm90dGxpbmcuVXNlcicgfHwgZS5jb2RlID09ICdUaHJvdHRsaW5nJyB8fCBlLmNvZGUgPT0gJ1Rocm90dGxpbmcuQVBJJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMzAwMDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcign4p2MIEZhaWwgdG8gc3luYyB1cGRhdGUgc3RhY2s6IEVycm9yQ29kZTogJXNcXG5FcnJvck1lc3NhZ2U6JXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHN0YWNrSWQsIGNvbnRlbnRbJ1JlZ2lvbklkJ10sIGJ1Y2tldE5hbWUpO1xuICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudCh1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YWNrSWQpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzeW5jRGVzdHJveVN0YWNrKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5kZWxldGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gbmV3IFJld3JpdGFibGVCbG9jayhzdHJlYW0pO1xuICAgICAgICAgICAgd2l0aERlZmF1bHRQcmludGVyT2JqID0gc2V0SW50ZXJ2YWwoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIGNvbnRlbnRbJ1N0YWNrSWQnXSwgYmxvY2ssICdkZXN0cm95JylcbiAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDAwKVxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaW9uSWQ6IGNvbnRlbnRbJ1JlZ2lvbklkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFja0lkOiBjb250ZW50WydTdGFja0lkJ11cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0U3RhY2tSZXN1bHQgPSBhd2FpdCBjbGllbnQuZ2V0U3RhY2socGFyYW1zLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZ2V0U3RhY2tSZXN1bHQuU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1JlYXNvbiA9IGdldFN0YWNrUmVzdWx0LlN0YXR1c1JlYXNvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFja05hbWUgPSBnZXRTdGFja1Jlc3VsdC5TdGFja05hbWVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnQ29tcGxldGUgPSBSZWdFeHAoL0NPTVBMRVRFLylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRmFpbGVkID0gUmVnRXhwKC9GQUlMRUQvKVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnQ29tcGxldGUuZXhlYyhzdGF0dXMpIHx8IHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIGNvbnRlbnRbJ1N0YWNrSWQnXSwgYmxvY2ssICdkZXN0cm95JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIHRhc2soc3luYyBkZXN0cm95IHN0YWNrKSBoYXMgZmluaXNoZWQhXFxuc3RhdHVzOiAlc1xcblN0YXR1c1JlYXNvbjogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXNSZWFzb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGdldFN0YWNrUmVzdWx0LlN0YWNrSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0NvbXBsZXRlLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1Rocm90dGxpbmcuVXNlcicgfHwgZS5jb2RlID09ICdUaHJvdHRsaW5nJyB8fCBlLmNvZGUgPT0gJ1Rocm90dGxpbmcuQVBJJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMzAwMDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIGRlc3Ryb3kgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIGRlc3Ryb3kgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpZmZPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbiAgICBwYXRoOiBzdHJpbmc7XG4gICAgc3RyZWFtPzogTm9kZUpTLldyaXRhYmxlU3RyZWFtO1xuICAgIGNvbnRleHRMaW5lczogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlcGxveU9wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuXG4gICAgLyoqXG4gICAgICogT25seSBzZWxlY3QgdGhlIGdpdmVuIHN0YWNrXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGV4Y2x1c2l2ZWx5PzogYm9vbGVhbjtcbiAgICBwYXJhbWV0ZXJzPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkIH07XG4gICAgdGltZW91dDogc3RyaW5nO1xuICAgIHN5bmM6IGJvb2xlYW47XG4gICAgcmVnaW9uSWQ6IHN0cmluZztcbiAgICBvdXRwdXRzRmlsZTogYm9vbGVhbjtcbiAgICBza2lwSWZOb0NoYW5nZXM6IGJvb2xlYW47XG4gICAgZGlzYWJsZVJvbGxiYWNrOiBib29sZWFuO1xuICAgIHJlc291cmNlR3JvdXBJZDogc3RyaW5nO1xuICAgIGRldGFpbExvZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXN0cm95T3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG4gICAgcXVpZXQ/OiBib29sZWFuO1xuICAgIHN5bmM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbiAgICBsb2dpY2FsUmVzb3VyY2VJZDogc3RyaW5nO1xuICAgIHBhZ2VOdW1iZXI6IHN0cmluZztcbiAgICBwYWdlU2l6ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE91dFB1dE9wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlT3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXJhdGVTdGFja0luZm9PcHRpb25zIHtcbiAgICByZXNvdXJjZUdyb3VwSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXN0U3RhY2tPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbiAgICBwYWdlTnVtYmVyOiBzdHJpbmc7XG4gICAgcGFnZVNpemU6IHN0cmluZztcbiAgICBhbGw6IHN0cmluZztcbiAgICByZXNvdXJjZUdyb3VwSWQ6IHN0cmluZztcbiAgICByZWdpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTZXRPcHRpb25zIHtcbiAgICBnbG9iYWw6IHN0cmluZztcbiAgICBlbmRwb2ludDogc3RyaW5nO1xuICAgIHJlZ2lvbjogc3RyaW5nO1xuICAgIG1vZGU6IHN0cmluZztcbiAgICBhazogc3RyaW5nO1xuICAgIHNrOiBzdHJpbmc7XG4gICAgc3RzOiBzdHJpbmc7XG4gICAgcmFtUm9sZUFybjogc3RyaW5nO1xuICAgIHJvbGVTZXNzaW9uTmFtZTogc3RyaW5nO1xuICAgIHJhbVJvbGVOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZENvbmZpZ09wdGlvbnMge1xuICAgIGdsb2JhbD86IHN0cmluZztcbiAgICBsb2FkRmlsZVBhdGg6IHN0cmluZztcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIFRhZyB7XG4gICAgcmVhZG9ubHkgS2V5OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgVmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlQW5kVXBkYXRlTGFuZ3VhZ2VJbmZvKGxhbmd1YWdlOiBzdHJpbmcpIHtcbiAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFBST0pFQ1RfQ09ORklHKTtcbiAgICBsZXQgZmlsZUNvbnRlbnQ6IGFueTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBpbmZvID0gSlNPTi5wYXJzZShmaWxlQ29udGVudCk7XG4gICAgICAgIGluZm9bJ2xhbmd1YWdlSW5mbyddID0gbGFuZ3VhZ2U7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGluZm8sIG51bGwsICdcXHQnKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZExhbmd1YWdlSW5mbygpIHtcbiAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFBST0pFQ1RfQ09ORklHKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgbGV0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlQ29udGVudClbJ2xhbmd1YWdlSW5mbyddLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFkTGVmdChuOiBudW1iZXIsIHg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHgpIHtcbiAgICAgICAgcmV0dXJuICcgJy5yZXBlYXQoTWF0aC5tYXgoMCwgbiAtIHgubGVuZ3RoKSkgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFkUmlnaHQobjogbnVtYmVyLCB4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh4KSB7XG4gICAgICAgIHJldHVybiB4ICsgJyAnLnJlcGVhdChNYXRoLm1heCgwLCBuIC0geC5sZW5ndGgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJydcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG9ydGVuKG1heFdpZHRoOiBudW1iZXIsIHA6IHN0cmluZykge1xuICAgIGlmIChwLmxlbmd0aCA8PSBtYXhXaWR0aCkge1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG4gICAgY29uc3QgaGFsZiA9IE1hdGguZmxvb3IoKG1heFdpZHRoIC0gMykgLyAyKTtcbiAgICByZXR1cm4gcC5zdWJzdHIoMCwgaGFsZikgKyAnLi4uJyArIHAuc3Vic3RyKHAubGVuZ3RoIC0gaGFsZik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNlbnNpdGl6YXRpb24oaW5wdXRTdHJpbmc6IHN0cmluZywgbWl4TGVuZ3RoID0gMykge1xuICAgIC8vIG1peExlbmd0aCDlrZfnrKbkuLLlsJHkuo7kuIDlrprlgLzliJnohLHmlY/lhajpg6jvvIzlop7liqDohLHmlY/kvY3mlbBcbiAgICBpZiAoaXNTdHJpbmcoaW5wdXRTdHJpbmcpIHx8IGlzTnVtYmVyKGlucHV0U3RyaW5nKSkge1xuICAgICAgICBjb25zdCBzdHIgPSBTdHJpbmcoaW5wdXRTdHJpbmcpO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA8PSBtaXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnKicucmVwZWF0KG1peExlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZmlyc3RTdHIgPSBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLyBtaXhMZW5ndGgpO1xuICAgICAgICBjb25zdCBsYXN0U3RyID0gc3RyLnN1YnN0cigtc3RyLmxlbmd0aCAvIG1peExlbmd0aCk7XG4gICAgICAgIGNvbnN0IG1pZGRsZVN0ciA9IHN0clxuICAgICAgICAgICAgLnN1YnN0cmluZyhzdHIubGVuZ3RoIC8gbWl4TGVuZ3RoLCBsZW4gLSBNYXRoLmFicygtc3RyLmxlbmd0aCAvIG1peExlbmd0aCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcc1xcU10vZ2ksICcqJyk7XG4gICAgICAgIHJldHVybiBmaXJzdFN0ciArIG1pZGRsZVN0ciArIGxhc3RTdHI7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn0iXX0=