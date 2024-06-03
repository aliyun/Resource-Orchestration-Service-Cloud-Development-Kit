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
const exec = util_1.promisify(child_process_1.exec);
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
    constructor(props) {
        this.props = props;
    }
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
            logging_1.error("Please use 'ros-cdk config (-g)' to set your account configuration firstly!");
            process_1.exit(1);
        }
        return null;
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
                    accessKeyId: await cipher_1.decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeyId')),
                    accessKeySecret: await cipher_1.decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeySecret')),
                    securityToken: await cipher_1.decipher(await CdkToolkit.getJson(CONFIG_NAME, 'securityToken'))
                });
                break;
            case 'ram_role_arn':
                configInfo = new credentials_1.Config({
                    type: 'ram_role_arn',
                    accessKeyId: await cipher_1.decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeyId')),
                    accessKeySecret: await cipher_1.decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeySecret')),
                    roleArn: await CdkToolkit.getJson(CONFIG_NAME, 'roleArn'),
                    roleSessionName: await CdkToolkit.getJson(CONFIG_NAME, 'roleSessionName')
                });
                break;
            case 'access_key':
                configInfo = new credentials_1.Config({
                    type: 'access_key',
                    accessKeyId: await cipher_1.decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeyId')),
                    accessKeySecret: await cipher_1.decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeySecret'))
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
                logging_1.error('WANRNING: Please check the accuracy of the credential information you import from CLI config!' + e.message);
                process_1.exit(1);
            }
        }
        if (!newAccessKeyId || !newAccessKeySecret) {
            logging_1.error("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
            process_1.exit(1);
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
            logging_1.error("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
            process_1.exit(1);
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
                    logging_1.error('WANRNING: If want to Use EcsRamRole config, Please bind EcsRamRole to the host.');
                    process_1.exit(1);
                }
            }
            catch (e) {
                logging_1.error('WANRNING: If want to Use EcsRamRole config, Please bind EcsRamRole to the host!' + e.message);
                process_1.exit(1);
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
                let defaultAccessKeyId = desensitization(await cipher_1.decipher(sourceAccessKeyId.toString()));
                let defaultAccessKeySecret = desensitization(await cipher_1.decipher(sourceAccessKeySecret.toString()));
                let defaultSecurityToken = desensitization(await cipher_1.decipher(sourceSecurityToken.toString()));
                accessKeyId = readlineSync.question(`AccessKeyId [${defaultAccessKeyId}]:`, {
                    hideEchoBack: true,
                    defaultInput: await cipher_1.decipher(sourceAccessKeyId.toString())
                });
                accessKeySecret = readlineSync.question(`AccessKeySecret [${defaultAccessKeySecret}]:`, {
                    hideEchoBack: true,
                    defaultInput: await cipher_1.decipher(sourceAccessKeySecret.toString())
                });
                securityToken = readlineSync.question(`SecurityToken [${defaultSecurityToken}]:`, {
                    hideEchoBack: true,
                    defaultInput: await cipher_1.decipher(sourceSecurityToken.toString())
                });
            }
            else {
                accessKeyId = readlineSync.question('AccessKeyId:', { hideEchoBack: true });
                accessKeySecret = readlineSync.question('AccessKeySecret:', { hideEchoBack: true });
                securityToken = readlineSync.question('SecurityToken:', { hideEchoBack: true });
            }
            inputConfigInfo = {
                type: 'sts',
                accessKeyId: await cipher_1.cipher(accessKeyId),
                accessKeySecret: await cipher_1.cipher(accessKeySecret),
                securityToken: await cipher_1.cipher(securityToken)
            };
        }
        else if (modeType[modeIndex] === 'RamRoleArn') {
            let accessKeyId;
            let accessKeySecret;
            let roleArn;
            let roleSessionName;
            if (sourceModeType === 'ram_role_arn') {
                let defaultAccessKeyId = desensitization(await cipher_1.decipher(sourceAccessKeyId.toString()));
                let defaultAccessKeySecret = desensitization(await cipher_1.decipher(sourceAccessKeySecret.toString()));
                let defaultRoleArn = sourceRoleArn.toString();
                let defaultRoleSessionName = sourceRoleSessionName.toString();
                accessKeyId = readlineSync.question(`AccessKeyId [${defaultAccessKeyId}]:`, {
                    hideEchoBack: true,
                    defaultInput: await cipher_1.decipher(sourceAccessKeyId.toString())
                });
                accessKeySecret = readlineSync.question(`AccessKeySecret [${defaultAccessKeySecret}]:`, {
                    hideEchoBack: true,
                    defaultInput: await cipher_1.decipher(sourceAccessKeySecret.toString())
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
                accessKeyId: await cipher_1.cipher(accessKeyId),
                accessKeySecret: await cipher_1.cipher(accessKeySecret),
                roleArn: roleArn,
                roleSessionName: roleSessionName
            };
        }
        else if (modeType[modeIndex] === 'AK') {
            let accessKeyId;
            let accessKeySecret;
            if (sourceModeType === 'access_key') {
                let defaultAccessKeyId = desensitization(await cipher_1.decipher(sourceAccessKeyId.toString()));
                let defaultAccessKeySecret = desensitization(await cipher_1.decipher(sourceAccessKeySecret.toString()));
                accessKeyId = readlineSync.question(`AccessKeyId [${defaultAccessKeyId}]:`, {
                    hideEchoBack: true,
                    defaultInput: await cipher_1.decipher(sourceAccessKeyId.toString())
                });
                accessKeySecret = readlineSync.question(`AccessKeySecret [${defaultAccessKeySecret}]:`, {
                    hideEchoBack: true,
                    defaultInput: await cipher_1.decipher(sourceAccessKeySecret.toString())
                });
            }
            else {
                accessKeyId = readlineSync.question('AccessKeyId:', { hideEchoBack: true });
                accessKeySecret = readlineSync.question('AccessKeySecret:', { hideEchoBack: true });
            }
            inputConfigInfo = {
                type: 'access_key',
                accessKeyId: await cipher_1.cipher(accessKeyId),
                accessKeySecret: await cipher_1.cipher(accessKeySecret)
            };
        }
        else {
            logging_1.error('WANRNING: If want to deploy or delete stack, a certification method must be selected');
            process_1.exit(1);
        }
        inputConfigInfo.endpoint = endpoint;
        inputConfigInfo.regionId = regionId;
        let file = path.join(configSavePath);
        fs.writeFileSync(file, JSON.stringify(inputConfigInfo, null, '\t'));
        logging_1.success(`\n ✅ Your cdk configuration has been saved successfully!`);
        process_1.exit(0);
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
                accessKeyId: await cipher_1.cipher(ak),
                accessKeySecret: await cipher_1.cipher(sk)
            };
        }
        else if (modeType === 'StsToken') {
            configInfo = {
                type: 'sts',
                accessKeyId: await cipher_1.cipher(ak),
                accessKeySecret: await cipher_1.cipher(sk),
                securityToken: await cipher_1.cipher(stsToken)
            };
        }
        else if (modeType === 'RamRoleArn') {
            configInfo = {
                type: 'ram_role_arn',
                accessKeyId: await cipher_1.cipher(ak),
                accessKeySecret: await cipher_1.cipher(sk),
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
            logging_1.error('WANRNING: If want to deploy or delete stack, a authenticate mode must be in (AK|StsToken|RamRoleArn|EcsRamRole)');
            process_1.exit(1);
        }
        let file = path.join(configSavePath);
        configInfo.regionId = options.region;
        configInfo.endpoint = options.endpoint;
        fs.writeFileSync(file, JSON.stringify(configInfo, null, '\t'));
        logging_1.success(`\n ✅ Your cdk configuration has been saved successfully!`);
        process_1.exit(0);
    }
    async loadCliConfig(options) {
        let configSavePath = (options.global ? GLOBAL_PATH : LOCAL_PATH) + CONFIG_NAME;
        let configureInfos = await this.getCliConfig(options.loadFilePath);
        let modeType = Object.keys(configureInfos);
        let modeIndex = readlineSync.keyInSelect(modeType, 'Select authenticate mode:');
        let profileNames = [];
        let profileConfig = {};
        if (modeIndex === -1) {
            logging_1.error('WANRNING: If want to deploy or delete stack, a certification method must be selected');
            process_1.exit(1);
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
            logging_1.error('WANRNING: If want to deploy or delete stack, a certification profile must be selected');
            process_1.exit(1);
        }
        let endpoint = await CdkToolkit.getJson(CONFIG_NAME, 'endpoint', true);
        let regionId;
        let configInfo = {};
        endpoint = endpoint ? endpoint : 'https://ros.aliyuncs.com';
        switch (modeType[modeIndex]) {
            case 'AK':
                profileConfig = configureInfos.AK.find((profiles) => profiles.name === profileNames[profileIndex]);
                if (!profileConfig['accessKeyId'] || !profileConfig['accessKeySecret']) {
                    logging_1.error('WANRNING: If want to deploy or delete stack, accessKeyId or accessKeySecret Cannot be empty!');
                    process_1.exit(1);
                }
                configInfo = {
                    type: 'access_key',
                    accessKeyId: await cipher_1.cipher(profileConfig['accessKeyId']),
                    accessKeySecret: await cipher_1.cipher(profileConfig['accessKeySecret'])
                };
                break;
            case 'StsToken':
                profileConfig = configureInfos.StsToken.find((profiles) => profiles.name === profileNames[profileIndex]);
                if (!profileConfig['accessKeyId'] || !profileConfig['accessKeySecret'] || !profileConfig['securityToken']) {
                    logging_1.error('WANRNING: If want to deploy or delete stack, accessKeyId, accessKeySecret or securityToken Cannot be empty!');
                    process_1.exit(1);
                }
                configInfo = {
                    type: 'sts',
                    accessKeyId: await cipher_1.cipher(profileConfig['accessKeyId']),
                    accessKeySecret: await cipher_1.cipher(profileConfig['accessKeySecret']),
                    securityToken: await cipher_1.cipher(profileConfig['securityToken'])
                };
                break;
            case 'RamRoleArn':
                profileConfig = configureInfos.RamRoleArn.find((profiles) => profiles.name === profileNames[profileIndex]);
                if (!profileConfig['accessKeyId'] || !profileConfig['accessKeySecret'] || !profileConfig['roleArn'] || !profileConfig['roleSessionName']) {
                    logging_1.error('WANRNING: If want to deploy or delete stack, accessKeyId, accessKeySecret, roleArn or roleSessionName Cannot be empty!');
                    process_1.exit(1);
                }
                configInfo = {
                    type: 'ram_role_arn',
                    accessKeyId: await cipher_1.cipher(profileConfig['accessKeyId']),
                    accessKeySecret: await cipher_1.cipher(profileConfig['accessKeySecret']),
                    roleArn: profileConfig['roleArn'],
                    roleSessionName: profileConfig['roleSessionName']
                };
                break;
            case 'EcsRamRole':
                profileConfig = configureInfos.EcsRamRole.find((profiles) => profiles.name === profileNames[profileIndex]);
                if (!profileConfig['roleName']) {
                    logging_1.error('WANRNING: If want to deploy or delete stack, roleName Cannot be empty!');
                    process_1.exit(1);
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
        logging_1.success(`\n ✅ Your cdk configuration has been load from Aliyun Cli configuration saved successfully %s %s!`, modeType[modeIndex], profileNames[profileIndex]);
        process_1.exit(0);
    }
    async list(selectors) {
        await this.syncStackInfo();
        const stacks = await this.selectAllStacksForDefault(selectors);
        for (const stack of stacks.stackArtifacts) {
            let stackInfo = await this.findStackInfo(stack.id);
            let status = stackInfo.status;
            logging_1.data(stack.id, status.toString());
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
        logging_1.success(`Successfully synthesized to ${colors.blue(path.resolve(stacks.assembly.directory))}`);
        logging_1.print(`Supply a stack id (${stacks.stackArtifacts.map((s) => colors.green(s.id)).join(', ')}) to display its template.`);
        return undefined;
    }
    async publishAssets(assetsJson) {
        const files = assetsJson['files'];
        const config = await CdkToolkit.getConfig();
        let client_params;
        if (!config.accessKeyId || !config.accessKeySecret) {
            logging_1.error("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
            process_1.exit(1);
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
            let assetPath = `./cdk.out/${source['path']}`;
            const objectKey = destination['current_account-current_region']['objectKey'];
            if (source['packaging'] === 'zip') {
                const zip = new jszip();
                readFiles(assetPath, zip);
                assetPath = `./cdk.out/${source['path']}.zip`;
                await zip.generateAsync({ type: 'nodebuffer' }).then((content) => {
                    fs.writeFileSync(assetPath, content);
                    console.log('Folder compressed successfully!');
                }).catch((e) => {
                    logging_1.error('Error compressing folder:\n', e);
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
                    logging_1.error(`Error create bucket(${bucketName}):\n`, e);
                    process_1.exit(1);
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
                logging_1.error(`Error upload file(${assetPath}) to bucket(${bucketName}):\n`, e);
                process_1.exit(1);
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
        for (let stack of stacks.stackArtifacts) {
            let stackName = stack.stackName;
            let regionId = options.regionId;
            if (regionId === 'default') {
                regionId = config_region;
            }
            let bucketName;
            if (fs.existsSync(`./cdk.out/${stackName}.assets.json`)) {
                let assetsFileBody = fs.readFileSync(`./cdk.out/${stackName}.assets.json`);
                let assetsJson = JSON.parse(assetsFileBody.toString('utf-8').trim());
                bucketName = await this.publishAssets(assetsJson);
            }
            let templateFileBody = fs.readFileSync(`./cdk.out/${stackName}.template.json`);
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
                        logging_1.error(`❌ Fail to update stack, because the locally recorded stackId(${localStackInfo.stackId}) and the remote stackId(${stackInfo.StackId}) are inconsistent.`);
                        tmpSignal = 1;
                    }
                    else {
                        content['StackId'] = stackInfo.StackId;
                        let stackStatus = stackInfo.Status;
                        let stackUpdateTime = stackInfo.UpdateTime ? stackInfo.UpdateTime : stackInfo.CreateTime;
                        if (stackStatus.indexOf("IN_PROGRESS") == -1) {
                            try {
                                if (sync) {
                                    logging_1.print('%s: deploying...', colors.bold(stackName));
                                }
                                tmpSignal = await this.rosUpdateStack(client, content, requestOptions, outputs, skipIfNoChanges, stackUpdateTime, detailLog, sync, stackName, bucketName);
                            }
                            catch (e) {
                                tmpSignal = 1;
                            }
                        }
                        else {
                            logging_1.error('fail to update stack, because stack status is %s', stackStatus);
                            tmpSignal = 1;
                        }
                    }
                }
                else {
                    // create stack
                    try {
                        if (sync) {
                            logging_1.print('%s: deploying...', colors.bold(stackName));
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
                    logging_1.error('Fail to create stack, because stack %s already exists in this region.', stackName);
                    tmpSignal = 1;
                }
                else {
                    // create stack
                    try {
                        if (sync) {
                            logging_1.print('%s: deploying...', colors.bold(stackName));
                        }
                        tmpSignal = await this.rosDeployStack(client, content, requestOptions, outputs, resourceGroupId, stackName, detailLog, sync, bucketName);
                    }
                    catch (e) {
                        tmpSignal = 1;
                    }
                }
            }
            exitSignal = exitSignal | tmpSignal;
        }
        process_1.exit(exitSignal);
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
                stream.write(util_1.format('Stack %s has not been deployed or stack doesn\'t exist in the stack.info.json file \n', colors.bold(stack.displayName)));
                continue;
            }
            requests.push(client.getTemplate({ RegionId: regionId, StackId: stackInfo.stackId }, requestOptions)
                .then((res) => {
                const template = serialize_1.deserializeStructure(res.TemplateBody);
                stream.write(util_1.format('Stack %s\n', colors.bold(stack.displayName)));
                diff_1.printStackDiff(template, stack, contextLines, stream);
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to synth.`);
                    this.updateStackInfo(stack.id, SYNTH_STACK, undefined);
                }
                else {
                    logging_1.error('fail to get template: %s %s', ex.code, ex.message);
                }
                exitSignal = 1;
            }));
        }
        await Promise.all(requests);
        process_1.exit(exitSignal);
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
                logging_1.error(`The stack id of the specific stack(${stackName}) doesn't exist in the stack.info.json file.`);
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
                logging_1.success(`\n ✅ The events of the stack %s are: \n %s \n`, colors.blue(stackName), colors.blue(JSON.stringify(res.Events, null, "\t")));
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                    this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                }
                else {
                    logging_1.error('fail to get stack events: %s %s', ex.code, ex.message);
                }
                exitSignal = 1;
            }));
        }
        await Promise.all(requests);
        process_1.exit(exitSignal);
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
                logging_1.error(`The specific stack doesn't exist in the stack.info.json file, Please check the accuracy of the stack: %s!`, stackName);
                exitSignal = 1;
                continue;
            }
            requests.push(client
                .getStack({
                StackId: stackId,
                RegionId: region
            }, requestOptions)
                .then((res) => {
                logging_1.success(`\n ✅ The outputs of the stack %s are: \n %s \n`, colors.blue(stackName), colors.blue(JSON.stringify(res.Outputs, null, "\t")));
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                    this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                }
                else {
                    logging_1.error('fail to get stack outputs: %s %s', ex.code, ex.message);
                }
                exitSignal = 1;
            }));
        }
        await Promise.all(requests);
        process_1.exit(exitSignal);
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
                logging_1.error(`The specific stack doesn't exist in the stack.info.json file, Please check the accuracy of the stack: %s!`, stack.id);
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
                logging_1.success(`\n ✅ The list of resources in the stack %s is: \n %s \n`, colors.blue(stackName), colors.blue(JSON.stringify(res.Resources, null, "\t")));
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                    this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                }
                else {
                    logging_1.error('fail to get stack resource: %s %s', ex.code, ex.message);
                }
                exitSignal = 1;
            }));
        }
        await Promise.all(requests);
        process_1.exit(exitSignal);
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
        logging_1.success(`\n ✅ The generate stack info has completed!`);
        process_1.exit(0);
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
                    logging_1.success(`\n ✅ The Stacks list in ${r} is:\n ${colors.blue(JSON.stringify(res.Stacks, null, "\t"))} \n`);
                }, (ex) => {
                    logging_1.error('❌ Fail to list stacks in ${r}: %s %s', ex.code, ex.message);
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
                logging_1.success(`\n ✅ The Stacks list in ${region} is:\n ${colors.blue(JSON.stringify(res.Stacks, null, "\t"))} \n`);
            }, (ex) => {
                logging_1.error('❌ Fail to list stacks in %s: %s %s', region, ex.code, ex.message);
                exitSignal = 1;
            }));
        }
        await Promise.all(requests);
        process_1.exit(exitSignal);
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
            logging_1.error(err);
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
                logging_1.print('%s: destroying...', colors.bold(stackName));
                exitSignal = await this.syncDestroyStack(client, content, requestOptions);
            }
            else {
                await client.deleteStack(content, requestOptions)
                    .then((res) => {
                    this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                    logging_1.success(`\n ✅ Delete the stack(${stackName}) successfully!\nRequestedId: %s`, colors.blue(res.RequestId));
                }, (ex) => {
                    if (ex.code == 'StackNotFound') {
                        logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                        this.updateStackInfo(stackName, DESTROY_STACK, undefined);
                    }
                    else {
                        logging_1.error('fail to delete stack: %s %s', ex.code, ex.message);
                        exitSignal = 1;
                    }
                });
            }
            if (bucketName !== undefined && bucketName !== null && bucketName !== '') {
                const config = await CdkToolkit.getConfig();
                let client;
                if (!config.accessKeyId || !config.accessKeySecret) {
                    logging_1.error("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
                    process_1.exit(1);
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
        process_1.exit(exitSignal);
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
                logging_1.error("WANRNING: Please check the accuracy of the mode and profile configuration entered.");
                process_1.exit(1);
            }
            return configureInfos;
        }
        else {
            logging_1.error("WANRNING: Please check Aliyun Cli tool configure accuracy of the default path or specified path.");
            process_1.exit(1);
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
                    logging_1.error(`The ${i}th deployment attempt failed, as detailed in ${e}`);
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
                    logging_1.error('❌ Fail to create stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, e.data["RequestId"], e.message);
                    throw e;
                }
            }
        }
        if (!stackId) {
            logging_1.error('❌ Fail to create stack, please check your service endpoint.');
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
                            logging_1.print('\nOutputs:');
                            stackOutputs[stackName] = outputs;
                            for (const output of outputs) {
                                const value = output['OutputValue'];
                                const key = output['OutputKey'];
                                const description = output['Description'];
                                logging_1.print('\n Key: %s  Value: %s Description: %s', colors.cyan(key), colors.cyan(value), colors.cyan(description));
                            }
                            if (outputsFile) {
                                fs.writeFileSync(path.join(LOCAL_PATH + OUTPUTS_JSON), JSON.stringify(stackOutputs, null, '\t'));
                            }
                        }
                        if (status.toString() == 'CREATE_COMPLETE') {
                            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName);
                            logging_1.success(`\n ✅ The deployment(sync create stack) has completed!\nStatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(stackId));
                            return 0;
                        }
                        else {
                            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName, status.toString());
                            logging_1.error(`\n❌ Fail to sync create stack:\nStatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(stackId));
                            return 1;
                        }
                    }
                }
                catch (e) {
                    if (detailLog) {
                        logging_1.error('An error occurs trying to get the resource stack details: %s', e);
                    }
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000);
                    }
                    else {
                        logging_1.error('❌ Fail to sync create stack: ErrorCode: %s\nErrorMessage:%s', e.code, e.message);
                        clearInterval(withDefaultPrinterObj);
                        throw e;
                    }
                }
            }
        }
        else {
            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName);
            logging_1.success(`\n ✅ The deployment(create stack) has completed!\nStackId: %s`, colors.blue(stackId));
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
            logging_1.error('fail to get new stack resource: %s %s', e.code, e.message);
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
                    logging_1.error(`The ${i}th update attempt failed, as detailed in ${e}`);
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
                    logging_1.success('The stack is completely the same, there is no need to update.');
                    return 0;
                }
                else {
                    logging_1.error('❌ Fail to update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, e.data["RequestId"], e.message);
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
                            logging_1.print('\nOutputs:');
                            stackOutputs[stackName] = outputs;
                            for (const output of outputs) {
                                const value = output['OutputValue'];
                                const key = output['OutputKey'];
                                const description = output['Description'];
                                logging_1.print('\n Key: %s  Value: %s Description: %s', colors.cyan(key), colors.cyan(value), colors.cyan(description));
                            }
                            if (outputsFile) {
                                fs.writeFileSync(path.join(LOCAL_PATH + OUTPUTS_JSON), JSON.stringify(stackOutputs, null, '\t'));
                            }
                        }
                        if (status.toString() == 'UPDATE_COMPLETE') {
                            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName);
                            logging_1.success(`\n ✅ The deployment(sync update stack) has completed!\nStatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(stackId));
                            return 0;
                        }
                        else {
                            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName, status.toString());
                            logging_1.error(`\n❌ Fail to sync update stack:\nStatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(stackId));
                            return 1;
                        }
                    }
                }
                catch (e) {
                    if (detailLog) {
                        logging_1.error('An error occurs trying to get the resource stack details: %s', e);
                    }
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000);
                    }
                    else {
                        logging_1.error('❌ Fail to sync update stack: ErrorCode: %s\nErrorMessage:%s', e.code, e.message);
                        clearInterval(withDefaultPrinterObj);
                        throw e;
                    }
                }
            }
        }
        else {
            await this.updateStackInfo(stackName, stackId, content['RegionId'], bucketName);
            logging_1.success(`\n ✅ The deployment(update stack) has completed!\nStackId: %s`, colors.blue(stackId));
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
                        logging_1.success(`\n ✅ The task(sync destroy stack) has finished!\nstatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(getStackResult.StackId));
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
                        logging_1.error('fail to sync destroy stack: %s %s', e.code, e.message);
                        clearInterval(withDefaultPrinterObj);
                        return 1;
                    }
                }
            }
        }
        catch (e) {
            logging_1.error('fail to sync destroy stack: %s %s', e.code, e.message);
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
    if (lodash_1.isString(inputString) || lodash_1.isNumber(inputString)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRvb2xraXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstdG9vbGtpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4Q0FBOEM7QUFDOUMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQiwrQkFBdUM7QUFDdkMsMENBQStDO0FBQy9DLDRDQUErQztBQUMvQyxtQ0FBMEM7QUFDMUMsaURBQTRDO0FBQzVDLHVEQUEwRDtBQUMxRCx5REFBOEc7QUFFOUcsdUNBQStEO0FBQy9ELHlDQUF5RDtBQUN6RCxxQ0FBNkI7QUFDN0IsaUNBQXNDO0FBQ3RDLDJDQUFpRDtBQUNqRCwyQ0FBeUM7QUFFekMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDdEQsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXJDLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRW5ELE1BQU0sV0FBVyxHQUFHLHFCQUFxQixDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQztBQUN4QixNQUFNLFdBQVcsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3ZDLE1BQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDO0FBQ3JDLE1BQU0sc0JBQXNCLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLE1BQU0sZUFBZSxHQUFHLHNCQUFzQixDQUFDO0FBQy9DLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUMxQixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7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QixPQUFPLFFBQVEsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDO0tBQ3pDO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBaEJELDBDQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICdjb2xvcnMvc2FmZSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICd1dGlsJztcbmltcG9ydCAqIGFzIGpzemlwIGZyb20gJ2pzemlwJztcbmltcG9ydCB7Zm9ybWF0LCBwcm9taXNpZnl9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHtjaXBoZXIsIGRlY2lwaGVyfSBmcm9tICcuL3V0aWwvY2lwaGVyJztcbmltcG9ydCB7UmV3cml0YWJsZUJsb2NrfSBmcm9tICcuL3V0aWwvZGlzcGxheSc7XG5pbXBvcnQge2lzTnVtYmVyLCBpc1N0cmluZ30gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7ZXhlYyBhcyBfZXhlY30gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgQ3JlZGVudGlhbHMsIHtDb25maWd9IGZyb20gJ0BhbGljbG91ZC9jcmVkZW50aWFscyc7XG5pbXBvcnQge0Nsb3VkQXNzZW1ibHksIERlZmF1bHRTZWxlY3Rpb24sIEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24sIFN0YWNrQ29sbGVjdGlvbn0gZnJvbSAnLi9hcGkvY2xvdWQtYXNzZW1ibHknO1xuaW1wb3J0IHtDbG91ZEV4ZWN1dGFibGV9IGZyb20gJy4vYXBpL2Nsb3VkLWV4ZWN1dGFibGUnO1xuaW1wb3J0IHtkYXRhLCBlcnJvciwgcHJpbnQsIHN1Y2Nlc3MsIHdhcm5pbmd9IGZyb20gJy4vbG9nZ2luZyc7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb24sIFBST0pFQ1RfQ09ORklHfSBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCB7ZXhpdH0gZnJvbSAncHJvY2Vzcyc7XG5pbXBvcnQge3ByaW50U3RhY2tEaWZmfSBmcm9tICcuL2RpZmYnO1xuaW1wb3J0IHtkZXNlcmlhbGl6ZVN0cnVjdHVyZX0gZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHtOZXR3b3JrRXJyb3J9IGZyb20gJy4vZXhjZXB0aW9uJztcblxuY29uc3Qgcm9zQ2xpZW50ID0gcmVxdWlyZSgnQGFsaWNsb3VkL3Jvcy0yMDE5LTA5LTEwJyk7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuY29uc3Qgb3NzQ2xpZW50ID0gcmVxdWlyZSgnYWxpLW9zcycpO1xuXG5jb25zdCBnZW5lcmF0ZVNhZmVJZCA9IHJlcXVpcmUoJ2dlbmVyYXRlLXNhZmUtaWQnKTtcblxuY29uc3QgQ09ORklHX05BTUUgPSAnYWNjb3VudC5jb25maWcuanNvbic7XG5jb25zdCBMT0NBTF9QQVRIID0gJy4vJztcbmNvbnN0IEdMT0JBTF9QQVRIID0gX19kaXJuYW1lICsgJy8uLi8nO1xuY29uc3QgU1RBQ0tfSU5GTyA9ICdzdGFjay5pbmZvLmpzb24nO1xuY29uc3QgREVQTE9ZX1NUQUNLX0lEX0xFTkdUSCA9IDM2O1xuY29uc3QgQ0xJX0NPTkZJR19GSUxFID0gJy8uYWxpeXVuL2NvbmZpZy5qc29uJztcbmNvbnN0IElOSVRfU1RBQ0sgPSAnaW5pdCc7XG5jb25zdCBTWU5USF9TVEFDSyA9ICdzeW50aCc7XG5jb25zdCBERVBMT1lfU1RBQ0sgPSAnZGVwbG95JztcbmNvbnN0IERFU1RST1lfU1RBQ0sgPSAnZGVzdHJveSc7XG5jb25zdCBQQUNLQUdFX0pTT04gPSBfX2Rpcm5hbWUgKyAnLy4uL3BhY2thZ2UuanNvbic7XG5jb25zdCBPVVRQVVRTX0pTT04gPSAnc3RhY2sub3V0cHV0cy5qc29uJztcblxuY29uc3QgZXhlYyA9IHByb21pc2lmeShfZXhlYyk7XG5cbmNvbnN0IHJlcXVlc3RPcHRpb25zOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdVc2VyLUFnZW50JzogXCJST1MtQ0xJLVwiICsgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoUEFDS0FHRV9KU09OKS50b1N0cmluZygpKVsndmVyc2lvbiddICsgXCI6OlwiICsgcmVhZExhbmd1YWdlSW5mbygpXG4gICAgfSxcbiAgICB0aW1lb3V0OiA5MDAwMFxufTtcblxuY29uc3Qgc2xlZXAgPSBmdW5jdGlvbiAobXM6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufTtcblxuXG5jb25zdCBzdHJlYW0gPSBwcm9jZXNzLnN0ZG91dDtcblxuXG5sZXQgd2l0aERlZmF1bHRQcmludGVyT2JqOiBhbnk7XG5cblxuZXhwb3J0IGludGVyZmFjZSBDZGtUb29sa2l0UHJvcHMge1xuICAgIC8qKlxuICAgICAqIFRoZSBDbG91ZCBFeGVjdXRhYmxlXG4gICAgICovXG4gICAgY2xvdWRFeGVjdXRhYmxlOiBDbG91ZEV4ZWN1dGFibGU7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGJlIHZlcmJvc2VcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgdmVyYm9zZT86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBEb24ndCBzdG9wIG9uIGVycm9yIG1ldGFkYXRhXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGlnbm9yZUVycm9ycz86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUcmVhdCB3YXJuaW5ncyBpbiBtZXRhZGF0YSBhcyBlcnJvcnNcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgc3RyaWN0PzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gKHNldHRpbmdzIGFuZCBjb250ZXh0KVxuICAgICAqL1xuICAgIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb247XG59XG5cbi8qKlxuICogVG9vbGtpdCBsb2dpY1xuICpcbiAqIFRoZSB0b29sa2l0IHJ1bnMgdGhlIGBjbG91ZEV4ZWN1dGFibGVgIHRvIG9idGFpbiBhIGNsb3VkIGFzc2VtYmx5XG4gKlxuICovXG5leHBvcnQgY2xhc3MgQ2RrVG9vbGtpdCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0SnNvbihmaWxlTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgYWxsb3dlZEVtcHR5OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gTE9DQUxfUEFUSCArIGZpbGVOYW1lO1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZSlba2V5XTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlTmFtZSA9PT0gU1RBQ0tfSU5GTykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBmaWxlUGF0aCA9IEdMT0JBTF9QQVRIICsgZmlsZU5hbWU7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlKVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWxsb3dlZEVtcHR5KSB7XG4gICAgICAgICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIHRvIHNldCB5b3VyIGFjY291bnQgY29uZmlndXJhdGlvbiBmaXJzdGx5IVwiKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb3BzOiBDZGtUb29sa2l0UHJvcHMpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldENvbmZpZygpIHtcbiAgICAgICAgbGV0IG1vZGVUeXBlID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAndHlwZScsIHRydWUpXG4gICAgICAgIGxldCBlbmRwb2ludCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2VuZHBvaW50JywgdHJ1ZSlcbiAgICAgICAgbGV0IHJlZ2lvbklkID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKVxuICAgICAgICBsZXQgY29uZmlnSW5mbzogYW55O1xuICAgICAgICBzd2l0Y2ggKG1vZGVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdlY3NfcmFtX3JvbGUnOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyb2xlTmFtZScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdHMnOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlJZCcpKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlTZWNyZXQnKSksXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3NlY3VyaXR5VG9rZW4nKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JhbV9yb2xlX2Fybic6XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleUlkJykpLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFybjogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncm9sZUFybicpLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JvbGVTZXNzaW9uTmFtZScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhY2Nlc3Nfa2V5JzpcbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleUlkJykpLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVuZHBvaW50ID0gZW5kcG9pbnQgPyBlbmRwb2ludCA6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nO1xuICAgICAgICBsZXQgbmV3QWNjZXNzS2V5SWQ6IHN0cmluZztcbiAgICAgICAgbGV0IG5ld0FjY2Vzc0tleVNlY3JldDogc3RyaW5nO1xuICAgICAgICBsZXQgbmV3U2VjdXJpdHlUb2tlbjogc3RyaW5nO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ld0FjY2Vzc0tleUlkID0gbmV3QWNjZXNzS2V5SWQgPyBuZXdBY2Nlc3NLZXlJZCA6IHByb2Nlc3MuZW52LkFDQ0VTU19LRVlfSURcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBuZXdBY2Nlc3NLZXlTZWNyZXQgPSBuZXdBY2Nlc3NLZXlTZWNyZXQgPyBuZXdBY2Nlc3NLZXlTZWNyZXQgOiBwcm9jZXNzLmVudi5BQ0NFU1NfS0VZX1NFQ1JFVFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ld1NlY3VyaXR5VG9rZW4gPSBuZXdTZWN1cml0eVRva2VuID8gbmV3U2VjdXJpdHlUb2tlbiA6IHByb2Nlc3MuZW52LlNFQ1VSSVRZX1RPS0VOXG4gICAgICAgIGlmIChjb25maWdJbmZvKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWQgPSBuZXcgQ3JlZGVudGlhbHMoY29uZmlnSW5mbyk7XG4gICAgICAgICAgICAgICAgbmV3QWNjZXNzS2V5SWQgPSBhd2FpdCBjcmVkLmdldEFjY2Vzc0tleUlkKCk7XG4gICAgICAgICAgICAgICAgbmV3QWNjZXNzS2V5U2VjcmV0ID0gYXdhaXQgY3JlZC5nZXRBY2Nlc3NLZXlTZWNyZXQoKTtcbiAgICAgICAgICAgICAgICBuZXdTZWN1cml0eVRva2VuID0gYXdhaXQgY3JlZC5nZXRTZWN1cml0eVRva2VuKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdXQU5STklORzogUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgY3JlZGVudGlhbCBpbmZvcm1hdGlvbiB5b3UgaW1wb3J0IGZyb20gQ0xJIGNvbmZpZyEnICsgZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmV3QWNjZXNzS2V5SWQgfHwgIW5ld0FjY2Vzc0tleVNlY3JldCkge1xuICAgICAgICAgICAgZXJyb3IoXCJQbGVhc2UgdXNlICdyb3MtY2RrIGNvbmZpZyAoLWcpJyBvciBzZXQgZW52aXJvbm1lbnQgdG8gc2V0IHlvdXIgYWNjb3VudCBjb25maWd1cmF0aW9uIGZpcnN0bHkhXCIpO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmRwb2ludDogZW5kcG9pbnQsXG4gICAgICAgICAgICBhY2Nlc3NLZXlJZDogbmV3QWNjZXNzS2V5SWQsXG4gICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IG5ld0FjY2Vzc0tleVNlY3JldCxcbiAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IG5ld1NlY3VyaXR5VG9rZW4sXG4gICAgICAgICAgICByZWdpb25JZDogcmVnaW9uSWRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRSb3NDbGllbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IENka1Rvb2xraXQuZ2V0Q29uZmlnKCk7XG4gICAgICAgIGxldCBjbGllbnQ7XG4gICAgICAgIGlmICghY29uZmlnLmFjY2Vzc0tleUlkIHx8ICFjb25maWcuYWNjZXNzS2V5U2VjcmV0KSB7XG4gICAgICAgICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIG9yIHNldCBlbnZpcm9ubWVudCB0byBzZXQgeW91ciBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZmlyc3RseSFcIik7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9IGVsc2UgaWYgKCFjb25maWcuc2VjdXJpdHlUb2tlbikge1xuICAgICAgICAgICAgY2xpZW50ID0gbmV3IHJvc0NsaWVudCh7XG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGNvbmZpZy5lbmRwb2ludCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogY29uZmlnLmFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogY29uZmlnLmFjY2Vzc0tleVNlY3JldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGllbnQgPSBuZXcgcm9zQ2xpZW50KHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogY29uZmlnLmVuZHBvaW50LFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBjb25maWcuYWNjZXNzS2V5SWQsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBjb25maWcuYWNjZXNzS2V5U2VjcmV0LFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGNvbmZpZy5zZWN1cml0eVRva2VuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaHR0cE1vZHVsZSA9IGNsaWVudC5lbmRwb2ludC5zdGFydHNXaXRoKCdodHRwczovLycpID8gaHR0cHMgOiBodHRwO1xuICAgICAgICBjbGllbnQua2VlcEFsaXZlQWdlbnQgPSBuZXcgaHR0cE1vZHVsZS5BZ2VudCh7XG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgICBrZWVwQWxpdmVNc2VjczogMTUwMDBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbmZpZyhnbG9iYWw6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvbmZpZ1NhdmVQYXRoID0gKGdsb2JhbCA/IEdMT0JBTF9QQVRIIDogTE9DQUxfUEFUSCkgKyBDT05GSUdfTkFNRTtcbiAgICAgICAgbGV0IHNvdXJjZU1vZGVUeXBlOiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNvdXJjZUVuZHBvaW50OiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNvdXJjZVJlZ2lvbklkOiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNvdXJjZUFjY2Vzc0tleUlkOiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNvdXJjZUFjY2Vzc0tleVNlY3JldDogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBzb3VyY2VTZWN1cml0eVRva2VuOiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNvdXJjZVJvbGVBcm46IHN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgc291cmNlUm9sZVNlc3Npb25OYW1lOiBzdHJpbmcgPSAnJztcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoY29uZmlnU2F2ZVBhdGgpKSB7XG4gICAgICAgICAgICBsZXQgY29uZmlnRmlsZSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1NhdmVQYXRoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHNvdXJjZU1vZGVUeXBlID0gY29uZmlnRmlsZVsndHlwZSddXG4gICAgICAgICAgICBzb3VyY2VFbmRwb2ludCA9IGNvbmZpZ0ZpbGVbJ2VuZHBvaW50J11cbiAgICAgICAgICAgIHNvdXJjZVJlZ2lvbklkID0gY29uZmlnRmlsZVsncmVnaW9uSWQnXVxuICAgICAgICAgICAgc291cmNlQWNjZXNzS2V5SWQgPSBjb25maWdGaWxlWydhY2Nlc3NLZXlJZCddXG4gICAgICAgICAgICBzb3VyY2VBY2Nlc3NLZXlTZWNyZXQgPSBjb25maWdGaWxlWydhY2Nlc3NLZXlTZWNyZXQnXVxuICAgICAgICAgICAgc291cmNlU2VjdXJpdHlUb2tlbiA9IGNvbmZpZ0ZpbGVbJ3NlY3VyaXR5VG9rZW4nXVxuICAgICAgICAgICAgc291cmNlUm9sZUFybiA9IGNvbmZpZ0ZpbGVbJ3JvbGVBcm4nXVxuICAgICAgICAgICAgc291cmNlUm9sZVNlc3Npb25OYW1lID0gY29uZmlnRmlsZVsncm9sZVNlc3Npb25OYW1lJ11cbiAgICAgICAgfVxuICAgICAgICBsZXQgbW9kZVR5cGVPYmogPSB7XG4gICAgICAgICAgICBlY3NfcmFtX3JvbGU6ICdFY3NSYW1Sb2xlJyxcbiAgICAgICAgICAgIHN0czogJ1N0c1Rva2VuJyxcbiAgICAgICAgICAgIHJhbV9yb2xlX2FybjogJ1JhbVJvbGVBcm4nLFxuICAgICAgICAgICAgYWNjZXNzX2tleTogJ0FLJ1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbGV0IGRlZmF1bHRNb2RlVHlwZSA9IHNvdXJjZU1vZGVUeXBlID8gbW9kZVR5cGVPYmpbc291cmNlTW9kZVR5cGVdIDogJydcbiAgICAgICAgbGV0IGRlZmF1bHRFbmRwb2ludCA9IHNvdXJjZUVuZHBvaW50ID8gc291cmNlRW5kcG9pbnQgOiAnaHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tJ1xuICAgICAgICBsZXQgZGVmYXVsdFJlZ2lvbklkID0gc291cmNlUmVnaW9uSWQgPyBzb3VyY2VSZWdpb25JZCA6ICdjbi1oYW5nemhvdSdcbiAgICAgICAgbGV0IG1vZGVUeXBlID0gWydBSycsICdTdHNUb2tlbicsICdSYW1Sb2xlQXJuJywgJ0Vjc1JhbVJvbGUnXVxuXG5cbiAgICAgICAgbGV0IGVuZHBvaW50ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBFbmRwb2ludChvcHRpb25hbCwgWyR7ZGVmYXVsdEVuZHBvaW50LnRvU3RyaW5nKCl9XSk6YCwge2RlZmF1bHRJbnB1dDogZGVmYXVsdEVuZHBvaW50fSk7XG4gICAgICAgIGxldCByZWdpb25JZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgUmVnaW9uSWQob3B0aW9uYWwsIFske2RlZmF1bHRSZWdpb25JZC50b1N0cmluZygpfV0pOmAsIHtkZWZhdWx0SW5wdXQ6IGRlZmF1bHRSZWdpb25JZH0pO1xuICAgICAgICBsZXQgbW9kZUluZGV4ID0gcmVhZGxpbmVTeW5jLmtleUluU2VsZWN0KG1vZGVUeXBlLCBgQXV0aGVudGljYXRlIG1vZGUgWyR7ZGVmYXVsdE1vZGVUeXBlLnRvU3RyaW5nKCl9XTpgKTtcbiAgICAgICAgbGV0IGlucHV0Q29uZmlnSW5mbzogYW55ID0ge307XG4gICAgICAgIGxldCBjaGVja0NvbW1hbmQ6IHN0cmluZztcbiAgICAgICAgbGV0IGN1cmxDb21tYW5kOiBzdHJpbmc7XG4gICAgICAgIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tDb21tYW5kID0gJ3Bvd2Vyc2hlbGwgLUNvbW1hbmQgXCIoY3VybCAtVVJpIGh0dHA6Ly8xMDAuMTAwLjEwMC4yMDAvbGF0ZXN0L21ldGEtZGF0YS9SYW0vc2VjdXJpdHktY3JlZGVudGlhbHMvKS5TdGF0dXNDb2RlXCInO1xuICAgICAgICAgICAgICAgIGN1cmxDb21tYW5kID0gJ3Bvd2Vyc2hlbGwgLUNvbW1hbmQgXCIoY3VybCAtVVJpIGh0dHA6Ly8xMDAuMTAwLjEwMC4yMDAvbGF0ZXN0L21ldGEtZGF0YS9SYW0vc2VjdXJpdHktY3JlZGVudGlhbHMvKS5Db250ZW50XCInO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGVja0NvbW1hbmQgPSAnY3VybCBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLyAtbyAvZGV2L251bGwgLXMgLXcgJXtodHRwX2NvZGV9JztcbiAgICAgICAgICAgICAgICBjdXJsQ29tbWFuZCA9ICdjdXJsIGh0dHA6Ly8xMDAuMTAwLjEwMC4yMDAvbGF0ZXN0L21ldGEtZGF0YS9SYW0vc2VjdXJpdHktY3JlZGVudGlhbHMvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge3N0ZG91dDogY2hlY2tTdGRvdXR9ID0gYXdhaXQgZXhlYyhjaGVja0NvbW1hbmQpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja1N0ZG91dC50cmltKCkgIT09ICcyMDAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIFVzZSBFY3NSYW1Sb2xlIGNvbmZpZywgUGxlYXNlIGJpbmQgRWNzUmFtUm9sZSB0byB0aGUgaG9zdC4nLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIFVzZSBFY3NSYW1Sb2xlIGNvbmZpZywgUGxlYXNlIGJpbmQgRWNzUmFtUm9sZSB0byB0aGUgaG9zdCEnICsgZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHtzdGRvdXQ6IGN1cmxTdGRvdXR9ID0gYXdhaXQgZXhlYyhjdXJsQ29tbWFuZCk7XG4gICAgICAgICAgICBsZXQgcm9sZU5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYFJvbGVOYW1lLCBUaGUgY29uZmlndXJlZCByb2xlIG9mIHRoZSBob3N0OiBbJHtjdXJsU3Rkb3V0LnRyaW0oKX1dYCwge2RlZmF1bHRJbnB1dDogY3VybFN0ZG91dC50cmltKCl9KTtcbiAgICAgICAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgICAgICAgICByb2xlTmFtZTogcm9sZU5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1N0c1Rva2VuJykge1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleUlkOiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5U2VjcmV0OiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgc2VjdXJpdHlUb2tlbjogc3RyaW5nO1xuICAgICAgICAgICAgaWYgKHNvdXJjZU1vZGVUeXBlID09PSAnc3RzJykge1xuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QWNjZXNzS2V5SWQgPSBkZXNlbnNpdGl6YXRpb24oYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5SWQudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRBY2Nlc3NLZXlTZWNyZXQgPSBkZXNlbnNpdGl6YXRpb24oYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5U2VjcmV0LnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0U2VjdXJpdHlUb2tlbiA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VTZWN1cml0eVRva2VuLnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBBY2Nlc3NLZXlJZCBbJHtkZWZhdWx0QWNjZXNzS2V5SWR9XTpgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFY2hvQmFjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlJZC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgQWNjZXNzS2V5U2VjcmV0IFske2RlZmF1bHRBY2Nlc3NLZXlTZWNyZXR9XTpgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFY2hvQmFjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlTZWNyZXQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBTZWN1cml0eVRva2VuIFske2RlZmF1bHRTZWN1cml0eVRva2VufV06YCwge1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWNob0JhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbnB1dDogYXdhaXQgZGVjaXBoZXIoc291cmNlU2VjdXJpdHlUb2tlbi50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdTZWN1cml0eVRva2VuOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RzJyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleUlkKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlTZWNyZXQpLFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGNpcGhlcihzZWN1cml0eVRva2VuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlJZDogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleVNlY3JldDogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHJvbGVBcm46IHN0cmluZztcbiAgICAgICAgICAgIGxldCByb2xlU2Vzc2lvbk5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGlmIChzb3VyY2VNb2RlVHlwZSA9PT0gJ3JhbV9yb2xlX2FybicpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFjY2Vzc0tleUlkID0gZGVzZW5zaXRpemF0aW9uKGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleUlkLnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QWNjZXNzS2V5U2VjcmV0ID0gZGVzZW5zaXRpemF0aW9uKGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleVNlY3JldC50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdFJvbGVBcm4gPSBzb3VyY2VSb2xlQXJuLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdFJvbGVTZXNzaW9uTmFtZSA9IHNvdXJjZVJvbGVTZXNzaW9uTmFtZS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYEFjY2Vzc0tleUlkIFske2RlZmF1bHRBY2Nlc3NLZXlJZH1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleUlkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBBY2Nlc3NLZXlTZWNyZXQgWyR7ZGVmYXVsdEFjY2Vzc0tleVNlY3JldH1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleVNlY3JldC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJvbGVBcm4gPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYFJvbGVBcm4gWyR7ZGVmYXVsdFJvbGVBcm59XTpgLCB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbnB1dDogZGVmYXVsdFJvbGVBcm5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYFJvbGVTZXNzaW9uTmFtZSBbJHtkZWZhdWx0Um9sZVNlc3Npb25OYW1lfV06YCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBkZWZhdWx0Um9sZVNlc3Npb25OYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgICAgICByb2xlQXJuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdSb2xlQXJuKGVnOiBhY3M6cmFtOjoqKioqKio6cm9sZS8qKioqKiopOicpO1xuICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignUm9sZVNlc3Npb25OYW1lOicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRDb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyYW1fcm9sZV9hcm4nLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5SWQpLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleVNlY3JldCksXG4gICAgICAgICAgICAgICAgcm9sZUFybjogcm9sZUFybixcbiAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHJvbGVTZXNzaW9uTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnQUsnKSB7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5SWQ6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlTZWNyZXQ6IHN0cmluZztcbiAgICAgICAgICAgIGlmIChzb3VyY2VNb2RlVHlwZSA9PT0gJ2FjY2Vzc19rZXknKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRBY2Nlc3NLZXlJZCA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlJZC50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFjY2Vzc0tleVNlY3JldCA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlTZWNyZXQudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYEFjY2Vzc0tleUlkIFske2RlZmF1bHRBY2Nlc3NLZXlJZH1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleUlkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBBY2Nlc3NLZXlTZWNyZXQgWyR7ZGVmYXVsdEFjY2Vzc0tleVNlY3JldH1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleVNlY3JldC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYWNjZXNzX2tleScsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlJZCksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5U2VjcmV0KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGNlcnRpZmljYXRpb24gbWV0aG9kIG11c3QgYmUgc2VsZWN0ZWQnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRDb25maWdJbmZvLmVuZHBvaW50ID0gZW5kcG9pbnRcbiAgICAgICAgaW5wdXRDb25maWdJbmZvLnJlZ2lvbklkID0gcmVnaW9uSWRcbiAgICAgICAgbGV0IGZpbGUgPSBwYXRoLmpvaW4oY29uZmlnU2F2ZVBhdGgpO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KGlucHV0Q29uZmlnSW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBZb3VyIGNkayBjb25maWd1cmF0aW9uIGhhcyBiZWVuIHNhdmVkIHN1Y2Nlc3NmdWxseSFgKTtcbiAgICAgICAgZXhpdCgwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29uZmlnU2V0KG9wdGlvbnM6IENvbmZpZ1NldE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IGNvbmZpZ1NhdmVQYXRoID0gKG9wdGlvbnMuZ2xvYmFsID8gR0xPQkFMX1BBVEggOiBMT0NBTF9QQVRIKSArIENPTkZJR19OQU1FO1xuICAgICAgICBsZXQgbW9kZVR5cGUgPSBvcHRpb25zLm1vZGU7XG4gICAgICAgIGxldCBjb25maWdJbmZvOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IGFrID0gb3B0aW9ucy5hayA/IG9wdGlvbnMuYWsgOiAnJztcbiAgICAgICAgbGV0IHNrID0gb3B0aW9ucy5zayA/IG9wdGlvbnMuc2sgOiAnJztcbiAgICAgICAgbGV0IHN0c1Rva2VuID0gb3B0aW9ucy5zdHMgPyBvcHRpb25zLnN0cyA6ICcnO1xuICAgICAgICBsZXQgcmFtUm9sZUFybiA9IG9wdGlvbnMucmFtUm9sZUFybiA/IG9wdGlvbnMucmFtUm9sZUFybiA6ICcnO1xuICAgICAgICBsZXQgcm9sZVNlc3Npb25OYW1lID0gb3B0aW9ucy5yb2xlU2Vzc2lvbk5hbWUgPyBvcHRpb25zLnJvbGVTZXNzaW9uTmFtZSA6ICcnO1xuICAgICAgICBsZXQgcmFtUm9sZU5hbWUgPSBvcHRpb25zLnJhbVJvbGVOYW1lID8gb3B0aW9ucy5yYW1Sb2xlTmFtZSA6ICcnO1xuICAgICAgICBpZiAobW9kZVR5cGUgPT09ICdBSycpIHtcbiAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FjY2Vzc19rZXknLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWspLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHNrKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZSA9PT0gJ1N0c1Rva2VuJykge1xuICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RzJyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFrKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihzayksXG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogYXdhaXQgY2lwaGVyKHN0c1Rva2VuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZSA9PT0gJ1JhbVJvbGVBcm4nKSB7XG4gICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyYW1fcm9sZV9hcm4nLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWspLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHNrKSxcbiAgICAgICAgICAgICAgICByb2xlQXJuOiByYW1Sb2xlQXJuLFxuICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogcm9sZVNlc3Npb25OYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgcm9sZU5hbWU6IHJhbVJvbGVOYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGEgYXV0aGVudGljYXRlIG1vZGUgbXVzdCBiZSBpbiAoQUt8U3RzVG9rZW58UmFtUm9sZUFybnxFY3NSYW1Sb2xlKScsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmlsZSA9IHBhdGguam9pbihjb25maWdTYXZlUGF0aCk7XG4gICAgICAgIGNvbmZpZ0luZm8ucmVnaW9uSWQgPSBvcHRpb25zLnJlZ2lvbjtcbiAgICAgICAgY29uZmlnSW5mby5lbmRwb2ludCA9IG9wdGlvbnMuZW5kcG9pbnQ7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnSW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBZb3VyIGNkayBjb25maWd1cmF0aW9uIGhhcyBiZWVuIHNhdmVkIHN1Y2Nlc3NmdWxseSFgKTtcbiAgICAgICAgZXhpdCgwKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBhc3luYyBsb2FkQ2xpQ29uZmlnKG9wdGlvbnM6IExvYWRDb25maWdPcHRpb25zKSB7XG4gICAgICAgIGxldCBjb25maWdTYXZlUGF0aCA9IChvcHRpb25zLmdsb2JhbCA/IEdMT0JBTF9QQVRIIDogTE9DQUxfUEFUSCkgKyBDT05GSUdfTkFNRTtcbiAgICAgICAgbGV0IGNvbmZpZ3VyZUluZm9zID0gYXdhaXQgdGhpcy5nZXRDbGlDb25maWcob3B0aW9ucy5sb2FkRmlsZVBhdGgpXG4gICAgICAgIGxldCBtb2RlVHlwZSA9IE9iamVjdC5rZXlzKGNvbmZpZ3VyZUluZm9zKTtcbiAgICAgICAgbGV0IG1vZGVJbmRleCA9IHJlYWRsaW5lU3luYy5rZXlJblNlbGVjdChtb2RlVHlwZSwgJ1NlbGVjdCBhdXRoZW50aWNhdGUgbW9kZTonKTtcbiAgICAgICAgbGV0IHByb2ZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgbGV0IHByb2ZpbGVDb25maWc6IGFueSA9IHt9O1xuICAgICAgICBpZiAobW9kZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGEgY2VydGlmaWNhdGlvbiBtZXRob2QgbXVzdCBiZSBzZWxlY3RlZCcsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnQUsnKSB7XG4gICAgICAgICAgICBwcm9maWxlTmFtZXMgPSBjb25maWd1cmVJbmZvcy5BSy5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1N0c1Rva2VuJykge1xuICAgICAgICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuU3RzVG9rZW4ubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdSYW1Sb2xlQXJuJykge1xuICAgICAgICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuUmFtUm9sZUFybi5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XG4gICAgICAgICAgICBwcm9maWxlTmFtZXMgPSBjb25maWd1cmVJbmZvcy5FY3NSYW1Sb2xlLm1hcCgoaXRlbTogeyBuYW1lOiBhbnk7IH0pID0+IGl0ZW0ubmFtZSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJvZmlsZUluZGV4ID0gcmVhZGxpbmVTeW5jLmtleUluU2VsZWN0KHByb2ZpbGVOYW1lcywgJ1NlbGVjdCBBdXRoZW50aWNhdGUgcHJvZmlsZSBuYW1lOicpO1xuICAgICAgICBpZiAocHJvZmlsZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGEgY2VydGlmaWNhdGlvbiBwcm9maWxlIG11c3QgYmUgc2VsZWN0ZWQnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVuZHBvaW50ID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnZW5kcG9pbnQnLCB0cnVlKVxuICAgICAgICBsZXQgcmVnaW9uSWQ7XG4gICAgICAgIGxldCBjb25maWdJbmZvOiBhbnkgPSB7fTtcbiAgICAgICAgZW5kcG9pbnQgPSBlbmRwb2ludCA/IGVuZHBvaW50IDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbSc7XG4gICAgICAgIHN3aXRjaCAobW9kZVR5cGVbbW9kZUluZGV4XSkge1xuICAgICAgICAgICAgY2FzZSAnQUsnOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5BSy5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10gfHwgIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGFjY2Vzc0tleUlkIG9yIGFjY2Vzc0tleVNlY3JldCBDYW5ub3QgYmUgZW1wdHkhJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FjY2Vzc19rZXknLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10pLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU3RzVG9rZW4nOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5TdHNUb2tlbi5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10gfHwgIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddIHx8ICFwcm9maWxlQ29uZmlnWydzZWN1cml0eVRva2VuJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYWNjZXNzS2V5SWQsIGFjY2Vzc0tleVNlY3JldCBvciBzZWN1cml0eVRva2VuIENhbm5vdCBiZSBlbXB0eSEnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10pLFxuICAgICAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snc2VjdXJpdHlUb2tlbiddKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdSYW1Sb2xlQXJuJzpcbiAgICAgICAgICAgICAgICBwcm9maWxlQ29uZmlnID0gY29uZmlndXJlSW5mb3MuUmFtUm9sZUFybi5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10gfHwgIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddIHx8ICFwcm9maWxlQ29uZmlnWydyb2xlQXJuJ10gfHwgIXByb2ZpbGVDb25maWdbJ3JvbGVTZXNzaW9uTmFtZSddKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGFjY2Vzc0tleUlkLCBhY2Nlc3NLZXlTZWNyZXQsIHJvbGVBcm4gb3Igcm9sZVNlc3Npb25OYW1lIENhbm5vdCBiZSBlbXB0eSEnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10pLFxuICAgICAgICAgICAgICAgICAgICByb2xlQXJuOiBwcm9maWxlQ29uZmlnWydyb2xlQXJuJ10sXG4gICAgICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogcHJvZmlsZUNvbmZpZ1sncm9sZVNlc3Npb25OYW1lJ11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRWNzUmFtUm9sZSc6XG4gICAgICAgICAgICAgICAgcHJvZmlsZUNvbmZpZyA9IGNvbmZpZ3VyZUluZm9zLkVjc1JhbVJvbGUuZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9maWxlQ29uZmlnWydyb2xlTmFtZSddKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIHJvbGVOYW1lIENhbm5vdCBiZSBlbXB0eSEnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6IHByb2ZpbGVDb25maWdbJ3JvbGVOYW1lJ11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJlZ2lvbklkID0gcHJvZmlsZUNvbmZpZ1sncmVnaW9uJ10gPyBwcm9maWxlQ29uZmlnWydyZWdpb24nXSA6ICdjbi1oYW5nemhvdSc7XG4gICAgICAgIGNvbmZpZ0luZm8ucmVnaW9uSWQgPSByZWdpb25JZFxuICAgICAgICBjb25maWdJbmZvLmVuZHBvaW50ID0gZW5kcG9pbnRcbiAgICAgICAgbGV0IGZpbGUgPSBwYXRoLmpvaW4oY29uZmlnU2F2ZVBhdGgpO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KGNvbmZpZ0luZm8sIG51bGwsICdcXHQnKSk7XG4gICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgWW91ciBjZGsgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBsb2FkIGZyb20gQWxpeXVuIENsaSBjb25maWd1cmF0aW9uIHNhdmVkIHN1Y2Nlc3NmdWxseSAlcyAlcyFgLCBtb2RlVHlwZVttb2RlSW5kZXhdLCBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgIGV4aXQoMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxpc3Qoc2VsZWN0b3JzOiBzdHJpbmdbXSkge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RBbGxTdGFja3NGb3JEZWZhdWx0KHNlbGVjdG9ycyk7XG4gICAgICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBsZXQgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKTtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBzdGFja0luZm8uc3RhdHVzXG4gICAgICAgICAgICBkYXRhKHN0YWNrLmlkLCBzdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTeW50aGVzaXplIHRoZSBnaXZlbiBzZXQgb2Ygc3RhY2tzIChjYWxsZWQgd2hlbiB0aGUgdXNlciBydW5zICdjZGsgc3ludGgnKVxuICAgICAqXG4gICAgICogSU5QVVQ6IFN0YWNrIG5hbWVzIGNhbiBiZSBzdXBwbGllZCB1c2luZyBhIGdsb2IgZmlsdGVyLiBJZiBubyBzdGFja3MgYXJlXG4gICAgICogZ2l2ZW4sIGFsbCBzdGFja3MgZnJvbSB0aGUgYXBwbGljYXRpb24gYXJlIGltcGxpY3RseSBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIE9VVFBVVDogSWYgbW9yZSB0aGFuIG9uZSBzdGFjayBlbmRzIHVwIGJlaW5nIHNlbGVjdGVkLCBhbiBvdXRwdXQgZGlyZWN0b3J5XG4gICAgICogc2hvdWxkIGJlIHN1cHBsaWVkLCB3aGVyZSB0aGUgdGVtcGxhdGVzIHdpbGwgYmUgd3JpdHRlbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgc3ludGgoc3RhY2tOYW1lczogc3RyaW5nW10sIGV4Y2x1c2l2ZWx5OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGlmZihzdGFja05hbWVzLCBleGNsdXNpdmVseSk7XG5cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIHNpbmdsZSBzdGFjaywgcHJpbnQgaXQgdG8gU1RET1VUXG4gICAgICAgIGlmIChzdGFja3Muc3RhY2tDb3VudCA9PT0gMSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tzLmZpcnN0U3RhY2suaWQsIFNZTlRIX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgcmV0dXJuIHN0YWNrcy5maXJzdFN0YWNrLnRlbXBsYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2suaWQsIFNZTlRIX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNJbnRlZ01vZGUgPSBwcm9jZXNzLmVudi5DREtfSU5URUdfTU9ERSA9PT0gJzEnO1xuICAgICAgICBpZiAoaXNJbnRlZ01vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFja3Muc3RhY2tBcnRpZmFjdHMubWFwKChzKSA9PiBzLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdCBvdXRwdXR0aW5nIHRlbXBsYXRlIHRvIHN0ZG91dCwgbGV0J3MgZXhwbGFpbiB0aGluZ3MgdG8gdGhlIHVzZXIgYSBsaXR0bGUgYml0Li4uXG4gICAgICAgIHN1Y2Nlc3MoYFN1Y2Nlc3NmdWxseSBzeW50aGVzaXplZCB0byAke2NvbG9ycy5ibHVlKHBhdGgucmVzb2x2ZShzdGFja3MuYXNzZW1ibHkuZGlyZWN0b3J5KSl9YCk7XG4gICAgICAgIHByaW50KFxuICAgICAgICAgICAgYFN1cHBseSBhIHN0YWNrIGlkICgke3N0YWNrcy5zdGFja0FydGlmYWN0cy5tYXAoKHMpID0+IGNvbG9ycy5ncmVlbihzLmlkKSkuam9pbignLCAnKX0pIHRvIGRpc3BsYXkgaXRzIHRlbXBsYXRlLmAsXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcHVibGlzaEFzc2V0cyhhc3NldHNKc29uOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gYXNzZXRzSnNvblsnZmlsZXMnXTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRDb25maWcoKTtcbiAgICAgICAgbGV0IGNsaWVudF9wYXJhbXM7XG4gICAgICAgIGlmICghY29uZmlnLmFjY2Vzc0tleUlkIHx8ICFjb25maWcuYWNjZXNzS2V5U2VjcmV0KSB7XG4gICAgICAgICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIG9yIHNldCBlbnZpcm9ubWVudCB0byBzZXQgeW91ciBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZmlyc3RseSFcIik7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9IGVsc2UgaWYgKCFjb25maWcuc2VjdXJpdHlUb2tlbikge1xuICAgICAgICAgICAgY2xpZW50X3BhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICByZWdpb246IGBvc3MtJHtjb25maWcucmVnaW9uSWR9YCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogY29uZmlnLmFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogY29uZmlnLmFjY2Vzc0tleVNlY3JldFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsaWVudF9wYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgcmVnaW9uOiBgb3NzLSR7Y29uZmlnLnJlZ2lvbklkfWAsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGNvbmZpZy5hY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGNvbmZpZy5hY2Nlc3NLZXlTZWNyZXQsXG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogY29uZmlnLnNlY3VyaXR5VG9rZW5cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IG9zc0NsaWVudChjbGllbnRfcGFyYW1zKTtcbiAgICAgICAgbGV0IGJ1Y2tldE5hbWU7XG4gICAgICAgIGxldCBidWNrZXRFeGlzdHMgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgc3RvcmFnZUNsYXNzOiAnU3RhbmRhcmQnLFxuICAgICAgICAgICAgYWNsOiAncHJpdmF0ZScsXG4gICAgICAgICAgICBkYXRhUmVkdW5kYW5jeVR5cGU6ICdMUlMnXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWFkRmlsZXMgPSAoZm9sZGVyOiBzdHJpbmcsIHppcDoganN6aXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHppcEZpbGVzID0gZnMucmVhZGRpclN5bmMoZm9sZGVyKTtcbiAgICAgICAgICAgIHppcEZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihmb2xkZXIsIGZpbGUpO1xuICAgICAgICAgICAgICAgIGlmIChmcy5zdGF0U3luYyhmaWxlUGF0aCkuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJaaXAgPSB6aXAuZm9sZGVyKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViWmlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkRmlsZXMoZmlsZVBhdGgsIHN1YlppcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgemlwLmZpbGUoZmlsZSwgY29udGVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZmlsZXMpKSB7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBmaWxlc1trZXldWydzb3VyY2UnXTtcbiAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gZmlsZXNba2V5XVsnZGVzdGluYXRpb25zJ107XG4gICAgICAgICAgICBsZXQgYXNzZXRQYXRoID0gYC4vY2RrLm91dC8ke3NvdXJjZVsncGF0aCddfWA7XG4gICAgICAgICAgICBjb25zdCBvYmplY3RLZXkgPSBkZXN0aW5hdGlvblsnY3VycmVudF9hY2NvdW50LWN1cnJlbnRfcmVnaW9uJ11bJ29iamVjdEtleSddO1xuICAgICAgICAgICAgaWYgKHNvdXJjZVsncGFja2FnaW5nJ10gPT09ICd6aXAnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgemlwID0gbmV3IGpzemlwKCk7XG4gICAgICAgICAgICAgICAgcmVhZEZpbGVzKGFzc2V0UGF0aCwgemlwKTtcbiAgICAgICAgICAgICAgICBhc3NldFBhdGggPSBgLi9jZGsub3V0LyR7c291cmNlWydwYXRoJ119LnppcGA7XG4gICAgICAgICAgICAgICAgYXdhaXQgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiAnbm9kZWJ1ZmZlcicgfSkudGhlbigoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGFzc2V0UGF0aCwgY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGb2xkZXIgY29tcHJlc3NlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ0Vycm9yIGNvbXByZXNzaW5nIGZvbGRlcjpcXG4nLCBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFidWNrZXRFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICBidWNrZXROYW1lID0gZGVzdGluYXRpb25bJ2N1cnJlbnRfYWNjb3VudC1jdXJyZW50X3JlZ2lvbiddWydidWNrZXROYW1lJ10ucmVwbGFjZSgnJHtBTElZVU46OlJlZ2lvbn0nLCBjb25maWcucmVnaW9uSWQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGNsaWVudC5wdXRCdWNrZXQoYnVja2V0TmFtZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGJ1Y2tldEV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDcmVhdGUgYnVja2V0KCR7YnVja2V0TmFtZX0pIHN1Y2Nlc3NmdWxseSFgKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKGBFcnJvciBjcmVhdGUgYnVja2V0KCR7YnVja2V0TmFtZX0pOlxcbmAsIGUpO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBuZXcgb3NzQ2xpZW50KHtidWNrZXQ6IGJ1Y2tldE5hbWUsIC4uLmNsaWVudF9wYXJhbXN9KTtcblxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICAneC1vc3Mtc3RvcmFnZS1jbGFzcyc6ICdTdGFuZGFyZCcsXG4gICAgICAgICAgICAgICAgJ3gtb3NzLW9iamVjdC1hY2wnOiAncHJpdmF0ZScsXG4gICAgICAgICAgICAgICAgJ3gtb3NzLWZvcmJpZC1vdmVyd3JpdGUnOiAnZmFsc2UnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHN0b3JlLnB1dChvYmplY3RLZXksIHBhdGgubm9ybWFsaXplKGFzc2V0UGF0aCksIGhlYWRlcnMpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVwbG9hZCBmaWxlKCR7YXNzZXRQYXRofSkgdG8gYnVja2V0KCR7YnVja2V0TmFtZX0pIHN1Y2Nlc3NmdWxseSFgKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihgRXJyb3IgdXBsb2FkIGZpbGUoJHthc3NldFBhdGh9KSB0byBidWNrZXQoJHtidWNrZXROYW1lfSk6XFxuYCwgZSk7XG4gICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVja2V0TmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVwbG95KG9wdGlvbnM6IERlcGxveU9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlQm9keTogYW55O1xuICAgICAgICBsZXQgc3luYyA9IG9wdGlvbnMuc3luY1xuICAgICAgICBsZXQgb3V0cHV0cyA9IG9wdGlvbnMub3V0cHV0c0ZpbGVcbiAgICAgICAgbGV0IHNraXBJZk5vQ2hhbmdlcyA9IG9wdGlvbnMuc2tpcElmTm9DaGFuZ2VzXG4gICAgICAgIGxldCByZXNvdXJjZUdyb3VwSWQgPSBvcHRpb25zLnJlc291cmNlR3JvdXBJZFxuICAgICAgICBsZXQgZGV0YWlsTG9nID0gb3B0aW9ucy5kZXRhaWxMb2dcbiAgICAgICAgbGV0IGRpc2FibGVSb2xsYmFjayA9IG9wdGlvbnMuZGlzYWJsZVJvbGxiYWNrXG4gICAgICAgIGxldCBjb25maWdfcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgY29uZmlnX3JlZ2lvbiA9IGNvbmZpZ19yZWdpb24gPyBjb25maWdfcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRlcGxveShvcHRpb25zLnN0YWNrTmFtZXMsIG9wdGlvbnMuZXhjbHVzaXZlbHkpO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgZXhpdFNpZ25hbCA9IDA7XG4gICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHN0YWNrTmFtZSA9IHN0YWNrLnN0YWNrTmFtZTtcbiAgICAgICAgICAgIGxldCByZWdpb25JZCA9IG9wdGlvbnMucmVnaW9uSWQ7XG4gICAgICAgICAgICBpZiAocmVnaW9uSWQgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgICAgIHJlZ2lvbklkID0gY29uZmlnX3JlZ2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBidWNrZXROYW1lO1xuICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoYC4vY2RrLm91dC8ke3N0YWNrTmFtZX0uYXNzZXRzLmpzb25gKSkge1xuICAgICAgICAgICAgICAgIGxldCBhc3NldHNGaWxlQm9keSA9IGZzLnJlYWRGaWxlU3luYyhgLi9jZGsub3V0LyR7c3RhY2tOYW1lfS5hc3NldHMuanNvbmApO1xuICAgICAgICAgICAgICAgIGxldCBhc3NldHNKc29uID0gSlNPTi5wYXJzZShhc3NldHNGaWxlQm9keS50b1N0cmluZygndXRmLTgnKS50cmltKCkpO1xuICAgICAgICAgICAgICAgIGJ1Y2tldE5hbWUgPSBhd2FpdCB0aGlzLnB1Ymxpc2hBc3NldHMoYXNzZXRzSnNvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZUZpbGVCb2R5ID0gZnMucmVhZEZpbGVTeW5jKGAuL2Nkay5vdXQvJHtzdGFja05hbWV9LnRlbXBsYXRlLmpzb25gKTtcbiAgICAgICAgICAgIGxldCBDbGllbnRUb2tlbiA9IGdlbmVyYXRlU2FmZUlkKCk7XG4gICAgICAgICAgICBsZXQgdGVtcGxhdGVCb2R5QmFzZTY0RGF0YSA9IHRlbXBsYXRlRmlsZUJvZHkudG9TdHJpbmcoJ2Jhc2U2NCcpLnRyaW0oKTtcbiAgICAgICAgICAgIGxldCB0bXBTaWduYWwgPSAwO1xuICAgICAgICAgICAgaWYgKEJ1ZmZlci5ieXRlTGVuZ3RoKHRlbXBsYXRlRmlsZUJvZHksICd1dGY4JykgPCA1MjQyNzMpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUJvZHkgPSBgQEJhc2U2NEVuY29kZWQ6ICR7dGVtcGxhdGVCb2R5QmFzZTY0RGF0YX1gXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlQm9keSA9IHRlbXBsYXRlRmlsZUJvZHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjb250ZW50OiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBTdGFja05hbWU6IHN0YWNrTmFtZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIFRpbWVvdXRJbk1pbnV0ZXM6IG9wdGlvbnMudGltZW91dCxcbiAgICAgICAgICAgICAgICBUZW1wbGF0ZUJvZHk6IHRlbXBsYXRlQm9keSxcbiAgICAgICAgICAgICAgICBDbGllbnRUb2tlbjogQ2xpZW50VG9rZW4sXG4gICAgICAgICAgICAgICAgRGlzYWJsZVJvbGxiYWNrOiBkaXNhYmxlUm9sbGJhY2tcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9uc1snbWV0aG9kJ10gPSAnUE9TVCdcblxuICAgICAgICAgICAgaWYgKHJlc291cmNlR3JvdXBJZCkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1Jlc291cmNlR3JvdXBJZCddID0gcmVzb3VyY2VHcm91cElkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFjay50YWdzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSAxO1xuICAgICAgICAgICAgICAgIGxldCBwYXJhcyA9IHN0YWNrLnRhZ3M7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1RhZ3MuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLktleSddID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50WydUYWdzLicgKyBjb3VudC50b1N0cmluZygpICsgJy5WYWx1ZSddID0gcGFyYXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDE7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFzID0gb3B0aW9ucy5wYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhcykge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50WydQYXJhbWV0ZXJzLicgKyBjb3VudC50b1N0cmluZygpICsgJy5QYXJhbWV0ZXJLZXknXSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFsnUGFyYW1ldGVycy4nICsgY291bnQudG9TdHJpbmcoKSArICcuUGFyYW1ldGVyVmFsdWUnXSA9IHBhcmFzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxTdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKVxuICAgICAgICAgICAgaWYgKGxvY2FsU3RhY2tJbmZvLnJlZ2lvbklkKSB7XG4gICAgICAgICAgICAgICAgcmVnaW9uSWQgPSBsb2NhbFN0YWNrSW5mby5yZWdpb25JZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGVudFsnUmVnaW9uSWQnXSA9IHJlZ2lvbklkXG4gICAgICAgICAgICBpZiAobG9jYWxTdGFja0luZm8uc3RhY2tJZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lLCB1bmRlZmluZWQsIHJlZ2lvbklkKVxuICAgICAgICAgICAgICAgIGlmIChzdGFja0luZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0YWNrSW5mby5zdGFja0lkICE9PSBzdGFja0luZm8uU3RhY2tJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoYOKdjCBGYWlsIHRvIHVwZGF0ZSBzdGFjaywgYmVjYXVzZSB0aGUgbG9jYWxseSByZWNvcmRlZCBzdGFja0lkKCR7bG9jYWxTdGFja0luZm8uc3RhY2tJZH0pIGFuZCB0aGUgcmVtb3RlIHN0YWNrSWQoJHtzdGFja0luZm8uU3RhY2tJZH0pIGFyZSBpbmNvbnNpc3RlbnQuYClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50WydTdGFja0lkJ10gPSBzdGFja0luZm8uU3RhY2tJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFja1N0YXR1cyA9IHN0YWNrSW5mby5TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFja1VwZGF0ZVRpbWUgPSBzdGFja0luZm8uVXBkYXRlVGltZSA/IHN0YWNrSW5mby5VcGRhdGVUaW1lIDogc3RhY2tJbmZvLkNyZWF0ZVRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1N0YXR1cy5pbmRleE9mKFwiSU5fUFJPR1JFU1NcIikgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJyVzOiBkZXBsb3lpbmcuLi4nLCBjb2xvcnMuYm9sZChzdGFja05hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBTaWduYWwgPSBhd2FpdCB0aGlzLnJvc1VwZGF0ZVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIG91dHB1dHMsIHNraXBJZk5vQ2hhbmdlcywgc3RhY2tVcGRhdGVUaW1lLCBkZXRhaWxMb2csIHN5bmMsIHN0YWNrTmFtZSwgYnVja2V0TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2ssIGJlY2F1c2Ugc3RhY2sgc3RhdHVzIGlzICVzJywgc3RhY2tTdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wU2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBzdGFja1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnJXM6IGRlcGxveWluZy4uLicsIGNvbG9ycy5ib2xkKHN0YWNrTmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wU2lnbmFsID0gYXdhaXQgdGhpcy5yb3NEZXBsb3lTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBvdXRwdXRzLCByZXNvdXJjZUdyb3VwSWQsIHN0YWNrTmFtZSwgZGV0YWlsTG9nLCBzeW5jLCBidWNrZXROYW1lKVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSwgcmVzb3VyY2VHcm91cElkLCByZWdpb25JZClcbiAgICAgICAgICAgICAgICBpZiAoc3RhY2tJbmZvICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YWNrIGlzIGV4aXN0IHNlbmQgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBlcnJvcignRmFpbCB0byBjcmVhdGUgc3RhY2ssIGJlY2F1c2Ugc3RhY2sgJXMgYWxyZWFkeSBleGlzdHMgaW4gdGhpcyByZWdpb24uJywgc3RhY2tOYW1lKVxuICAgICAgICAgICAgICAgICAgICB0bXBTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBzdGFja1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnJXM6IGRlcGxveWluZy4uLicsIGNvbG9ycy5ib2xkKHN0YWNrTmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wU2lnbmFsID0gYXdhaXQgdGhpcy5yb3NEZXBsb3lTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBvdXRwdXRzLCByZXNvdXJjZUdyb3VwSWQsIHN0YWNrTmFtZSwgZGV0YWlsTG9nLCBzeW5jLCBidWNrZXROYW1lKVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXhpdFNpZ25hbCA9IGV4aXRTaWduYWwgfCB0bXBTaWduYWw7XG4gICAgICAgIH1cbiAgICAgICAgZXhpdChleGl0U2lnbmFsKVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkaWZmKG9wdGlvbnM6IERpZmZPcHRpb25zKSB7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdEFsbFN0YWNrc0ZvckRlZmF1bHQob3B0aW9ucy5zdGFja05hbWVzKTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgbGV0IHJlZ2lvbkluTG9jYWwgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpO1xuICAgICAgICByZWdpb25JbkxvY2FsID0gcmVnaW9uSW5Mb2NhbCA/IHJlZ2lvbkluTG9jYWwgOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IG9wdGlvbnMuc3RyZWFtIHx8IHByb2Nlc3Muc3RkZXJyO1xuICAgICAgICBjb25zdCBjb250ZXh0TGluZXMgPSBvcHRpb25zLmNvbnRleHRMaW5lcyB8fCAzO1xuICAgICAgICBsZXQgZXhpdFNpZ25hbCA9IDA7XG4gICAgICAgIGxldCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgIGxldCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpO1xuICAgICAgICAgICAgbGV0IHJlZ2lvbklkID0gc3RhY2tJbmZvLnJlZ2lvbklkID8gc3RhY2tJbmZvLnJlZ2lvbklkIDogcmVnaW9uSW5Mb2NhbDtcbiAgICAgICAgICAgIGlmICghc3RhY2tJbmZvLnN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBzdHJlYW0ud3JpdGUoZm9ybWF0KCdTdGFjayAlcyBoYXMgbm90IGJlZW4gZGVwbG95ZWQgb3Igc3RhY2sgZG9lc25cXCd0IGV4aXN0IGluIHRoZSBzdGFjay5pbmZvLmpzb24gZmlsZSBcXG4nLCBjb2xvcnMuYm9sZChzdGFjay5kaXNwbGF5TmFtZSkpKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2goY2xpZW50LmdldFRlbXBsYXRlKHtSZWdpb25JZDogcmVnaW9uSWQsIFN0YWNrSWQ6IHN0YWNrSW5mby5zdGFja0lkfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZGVzZXJpYWxpemVTdHJ1Y3R1cmUocmVzLlRlbXBsYXRlQm9keSk7XG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbS53cml0ZShmb3JtYXQoJ1N0YWNrICVzXFxuJywgY29sb3JzLmJvbGQoc3RhY2suZGlzcGxheU5hbWUpKSk7XG4gICAgICAgICAgICAgICAgICAgIHByaW50U3RhY2tEaWZmKHRlbXBsYXRlLCBzdGFjaywgY29udGV4dExpbmVzLCBzdHJlYW0pO1xuICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBzeW50aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrLmlkLCBTWU5USF9TVEFDSywgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCB0ZW1wbGF0ZTogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleGl0U2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIGV4aXQoZXhpdFNpZ25hbClcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZXZlbnQob3B0aW9uczogRXZlbnRPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RPbmx5U2luZ2xlU3RhY2tGb3JEZWZhdWx0KG9wdGlvbnMuc3RhY2tOYW1lcyk7XG4gICAgICAgIGNvbnN0IHN0YWNrTmFtZXMgPSBzdGFja3Muc3RhY2tJZHNcbiAgICAgICAgbGV0IGV4aXRTaWduYWwgPSAwO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgTG9naWNhbFJlc291cmNlSWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBpZiAob3B0aW9ucy5sb2dpY2FsUmVzb3VyY2VJZCkge1xuICAgICAgICAgICAgTG9naWNhbFJlc291cmNlSWRzLnB1c2gob3B0aW9ucy5sb2dpY2FsUmVzb3VyY2VJZClcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVxdWVzdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2tOYW1lIG9mIHN0YWNrTmFtZXMpIHtcbiAgICAgICAgICAgIGxldCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKTtcbiAgICAgICAgICAgIGxldCBzdGFja0lkID0gc3RhY2tJbmZvLnN0YWNrSWRcbiAgICAgICAgICAgIGxldCByZWdpb24gPSBzdGFja0luZm8ucmVnaW9uSWQ7XG4gICAgICAgICAgICBpZiAoIXJlZ2lvbikge1xuICAgICAgICAgICAgICAgIHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoYFRoZSBzdGFjayBpZCBvZiB0aGUgc3BlY2lmaWMgc3RhY2soJHtzdGFja05hbWV9KSBkb2Vzbid0IGV4aXN0IGluIHRoZSBzdGFjay5pbmZvLmpzb24gZmlsZS5gKVxuICAgICAgICAgICAgICAgIGV4aXRTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKGNsaWVudFxuICAgICAgICAgICAgICAgIC5saXN0U3RhY2tFdmVudHMoe1xuICAgICAgICAgICAgICAgICAgICBTdGFja0lkOiBzdGFja0lkLFxuICAgICAgICAgICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICBMb2dpY2FsUmVzb3VyY2VJZDogTG9naWNhbFJlc291cmNlSWRzLFxuICAgICAgICAgICAgICAgICAgICBQYWdlU2l6ZTogb3B0aW9ucy5wYWdlU2l6ZSA/IE51bWJlcihvcHRpb25zLnBhZ2VTaXplKSA6IDEwLFxuICAgICAgICAgICAgICAgICAgICBQYWdlTnVtYmVyOiBvcHRpb25zLnBhZ2VOdW1iZXIgPyBOdW1iZXIob3B0aW9ucy5wYWdlTnVtYmVyKSA6IDFcbiAgICAgICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgZXZlbnRzIG9mIHRoZSBzdGFjayAlcyBhcmU6IFxcbiAlcyBcXG5gLCBjb2xvcnMuYmx1ZShzdGFja05hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLkV2ZW50cywgbnVsbCwgXCJcXHRcIikpKTtcbiAgICAgICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSywgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjayBldmVudHM6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleGl0U2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIGV4aXQoZXhpdFNpZ25hbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG91dHB1dChvcHRpb25zOiBPdXRQdXRPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RBbGxTdGFja3NGb3JEZWZhdWx0KG9wdGlvbnMuc3RhY2tOYW1lcyk7XG4gICAgICAgIGNvbnN0IHN0YWNrTmFtZXMgPSBzdGFja3Muc3RhY2tJZHNcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgbGV0IGV4aXRTaWduYWwgPSAwO1xuICAgICAgICBsZXQgcmVxdWVzdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2tOYW1lIG9mIHN0YWNrTmFtZXMpIHtcbiAgICAgICAgICAgIGxldCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKTtcbiAgICAgICAgICAgIGxldCBzdGFja0lkID0gc3RhY2tJbmZvLnN0YWNrSWRcbiAgICAgICAgICAgIGxldCByZWdpb24gPSBzdGFja0luZm8ucmVnaW9uSWQ7XG4gICAgICAgICAgICBpZiAoIXJlZ2lvbikge1xuICAgICAgICAgICAgICAgIHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoYFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXN0IGluIHRoZSBzdGFjay5pbmZvLmpzb24gZmlsZSwgUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgc3RhY2s6ICVzIWAsIHN0YWNrTmFtZSlcbiAgICAgICAgICAgICAgICBleGl0U2lnbmFsID0gMTtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChjbGllbnRcbiAgICAgICAgICAgICAgICAuZ2V0U3RhY2soe1xuICAgICAgICAgICAgICAgICAgICBTdGFja0lkOiBzdGFja0lkLFxuICAgICAgICAgICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uXG4gICAgICAgICAgICAgICAgfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIG91dHB1dHMgb2YgdGhlIHN0YWNrICVzIGFyZTogXFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKHN0YWNrTmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShKU09OLnN0cmluZ2lmeShyZXMuT3V0cHV0cywgbnVsbCwgXCJcXHRcIikpKTtcbiAgICAgICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSywgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjayBvdXRwdXRzOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXhpdFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzKVxuICAgICAgICBleGl0KGV4aXRTaWduYWwpO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFzeW5jIHJlc291cmNlKG9wdGlvbnM6IFJlc291cmNlT3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0QWxsU3RhY2tzRm9yRGVmYXVsdChvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBsZXQgc3RhY2tOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBpZiAoKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCkpLnN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBzdGFja05hbWVzLnB1c2goc3RhY2suaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvcihgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHN0YWNrLmluZm8uanNvbiBmaWxlLCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBzdGFjazogJXMhYCwgc3RhY2suaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgbGV0IGV4aXRTaWduYWwgPSAwO1xuICAgICAgICBsZXQgcmVxdWVzdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2tOYW1lIG9mIHN0YWNrTmFtZXMpIHtcbiAgICAgICAgICAgIGxldCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKTtcbiAgICAgICAgICAgIGxldCByZWdpb24gPSBzdGFja0luZm8ucmVnaW9uSWQ7XG4gICAgICAgICAgICBpZiAoIXJlZ2lvbikge1xuICAgICAgICAgICAgICAgIHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChjbGllbnRcbiAgICAgICAgICAgICAgICAubGlzdFN0YWNrUmVzb3VyY2VzKHtcbiAgICAgICAgICAgICAgICAgICAgU3RhY2tJZDogKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpKS5zdGFja0lkLFxuICAgICAgICAgICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uLFxuICAgICAgICAgICAgICAgIH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBsaXN0IG9mIHJlc291cmNlcyBpbiB0aGUgc3RhY2sgJXMgaXM6IFxcbiAlcyBcXG5gLCBjb2xvcnMuYmx1ZShzdGFja05hbWUpLCBjb2xvcnMuYmx1ZShKU09OLnN0cmluZ2lmeShyZXMuUmVzb3VyY2VzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBkZXN0cm95LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHN0YWNrIHJlc291cmNlOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXhpdFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzKVxuICAgICAgICBleGl0KGV4aXRTaWduYWwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZW5lcmF0ZVN0YWNrSW5mbyhvcHRpb25zOiBHZW5lcmF0ZVN0YWNrSW5mb09wdGlvbnMpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0QWxsU3RhY2tzRm9yRGVmYXVsdChbXSk7XG4gICAgICAgIGxldCBzdGFja05hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBsZXQgU3RhY2tJbmZvczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgICAgICBzdGFja05hbWVzID0gc3RhY2tzLnN0YWNrSWRzXG4gICAgICAgIGZvciAobGV0IHN0YWNrTmFtZSBvZiBzdGFja05hbWVzKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSwgb3B0aW9ucy5yZXNvdXJjZUdyb3VwSWQsIHVuZGVmaW5lZClcbiAgICAgICAgICAgIGlmIChzdGFja0luZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBTdGFja0luZm9zW3N0YWNrTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogREVQTE9ZX1NUQUNLLFxuICAgICAgICAgICAgICAgICAgICBzdGFja0lkOiBzdGFja0luZm8uU3RhY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uSWQ6IHN0YWNrSW5mby5SZWdpb25JZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU3RhY2tJbmZvc1tzdGFja05hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IElOSVRfU1RBQ0ssXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrSWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbklkOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShTdGFja0luZm9zLCBudWxsLCAnXFx0JykpO1xuICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgYFxcbiDinIUgVGhlIGdlbmVyYXRlIHN0YWNrIGluZm8gaGFzIGNvbXBsZXRlZCFgLFxuICAgICAgICApO1xuICAgICAgICBleGl0KDApXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGFzeW5jIGdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZTogc3RyaW5nLCByZXNvdXJjZUdyb3VwSWQ6IGFueSwgcmVnaW9uOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgaWYgKCFyZWdpb24pIHtcbiAgICAgICAgICAgIHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcmFtczogeyBbbmFtZTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uLFxuICAgICAgICAgICAgUGFnZVNpemU6IDEwLFxuICAgICAgICAgICAgUGFnZU51bWJlcjogMSxcbiAgICAgICAgICAgIFN0YWNrTmFtZTogW3N0YWNrTmFtZV1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJlc291cmNlR3JvdXBJZCkge1xuICAgICAgICAgICAgcGFyYW1zWydSZXNvdXJjZUdyb3VwSWQnXSA9IHJlc291cmNlR3JvdXBJZFxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQubGlzdFN0YWNrcyhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5TdGFja3NbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LlN0YWNrc1swXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgbGlzdFN0YWNrcyhvcHRpb25zOiBMaXN0U3RhY2tPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IHJlZ2lvbiA9IG9wdGlvbnMucmVnaW9uO1xuICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgICBQYWdlU2l6ZTogb3B0aW9ucy5wYWdlU2l6ZSA/IE51bWJlcihvcHRpb25zLnBhZ2VTaXplKSA6IDEwLFxuICAgICAgICAgICAgUGFnZU51bWJlcjogb3B0aW9ucy5wYWdlTnVtYmVyID8gTnVtYmVyKG9wdGlvbnMucGFnZU51bWJlcikgOiAxXG4gICAgICAgIH07XG4gICAgICAgIGlmIChvcHRpb25zLnJlc291cmNlR3JvdXBJZCkge1xuICAgICAgICAgICAgcGFyYW1zLlJlc291cmNlR3JvdXBJZCA9IG9wdGlvbnMucmVzb3VyY2VHcm91cElkXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGV4aXRTaWduYWwgPSAwO1xuICAgICAgICBsZXQgcmVxdWVzdHMgPSBbXTtcbiAgICAgICAgaWYgKCFvcHRpb25zLmFsbCkge1xuICAgICAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0QWxsU3RhY2tzRm9yRGVmYXVsdChvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICAgICAgbGV0IHJlZ2lvbk1hcDogTWFwPHN0cmluZywgc3RyaW5nW10+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVnaW9uICYmIHN0YWNrSW5mby5yZWdpb25JZCAhPT0gcmVnaW9uKSB7Y29udGludWV9XG4gICAgICAgICAgICAgICAgaWYgKHJlZ2lvbk1hcC5oYXMoc3RhY2tJbmZvLnJlZ2lvbklkKSkge1xuICAgICAgICAgICAgICAgICAgICByZWdpb25NYXAuZ2V0KHN0YWNrSW5mby5yZWdpb25JZCkhLnB1c2goc3RhY2suaWQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uTWFwLnNldChzdGFja0luZm8ucmVnaW9uSWQsIFtzdGFjay5pZF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVnaW9uTWFwLmZvckVhY2goKHN0YWNrTmFtZXMsIHIpID0+IHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuU3RhY2tOYW1lID0gc3RhY2tOYW1lcztcbiAgICAgICAgICAgICAgICBwYXJhbXMuUmVnaW9uSWQgPSByO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RzLnB1c2goY2xpZW50Lmxpc3RTdGFja3MocGFyYW1zLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBTdGFja3MgbGlzdCBpbiAke3J9IGlzOlxcbiAke2NvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5TdGFja3MsIG51bGwsIFwiXFx0XCIpKX0gXFxuYCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcign4p2MIEZhaWwgdG8gbGlzdCBzdGFja3MgaW4gJHtyfTogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXJlZ2lvbikge1xuICAgICAgICAgICAgICAgIGxldCBjb25maWdfcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZWdpb24gPSBjb25maWdfcmVnaW9uID8gY29uZmlnX3JlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmFtcy5SZWdpb25JZCA9IHJlZ2lvbjtcbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2goY2xpZW50Lmxpc3RTdGFja3MocGFyYW1zLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2tzIGxpc3QgaW4gJHtyZWdpb259IGlzOlxcbiAke2NvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5TdGFja3MsIG51bGwsIFwiXFx0XCIpKX0gXFxuYCk7XG4gICAgICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ+KdjCBGYWlsIHRvIGxpc3Qgc3RhY2tzIGluICVzOiAlcyAlcycsIHJlZ2lvbiwgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgZXhpdFNpZ25hbCA9IDE7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzKVxuICAgICAgICBleGl0KGV4aXRTaWduYWwpO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFzeW5jIGhhbmRsZURlbChjbGllbnQ6IGFueSwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuZGVsZXRlKG5hbWUpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4vLyDliKDpmaTlpJrkuKrmlofku7bjgIJcbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlUHJvamVjdHMoY2xpZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGxpc3QgPSBhd2FpdCBjbGllbnQubGlzdCgpO1xuXG4gICAgICAgIGxpc3Qub2JqZWN0cyA9IGxpc3Qub2JqZWN0cyB8fCBbXTtcblxuICAgICAgICB3aGlsZSAobGlzdC5vYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGxpc3Qub2JqZWN0cy5tYXAoKHY6IGFueSkgPT4gdGhpcy5oYW5kbGVEZWwoY2xpZW50LCB2Lm5hbWUpKSk7XG5cbiAgICAgICAgICAgIGxpc3QgPSBhd2FpdCBjbGllbnQubGlzdCgpO1xuICAgICAgICAgICAgbGlzdC5vYmplY3RzID0gbGlzdC5vYmplY3RzIHx8IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlbGV0ZUJ1Y2tldChjbGllbnQ6IGFueSwgYnVja2V0TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyDmjIflrprlrZjlgqjnqbrpl7TlkI3np7DjgIJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsZXRlUHJvamVjdHMoY2xpZW50KTtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5kZWxldGVCdWNrZXQoYnVja2V0TmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVsZXRlIGJ1Y2tldCgke2J1Y2tldE5hbWV9KSBzdWNjZXNzZnVsbHkhYCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnTm9TdWNoQnVja2V0Jykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZXN0cm95KG9wdGlvbnM6IERlc3Ryb3lPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RBbGxTdGFja3NGb3JEZWZhdWx0KG9wdGlvbnMuc3RhY2tOYW1lcyk7XG4gICAgICAgIGxldCBzdGFja05hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBsZXQgc3luYyA9IG9wdGlvbnMuc3luY1xuICAgICAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgIGlmICgoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKSkuc3RhY2tJZCkge1xuICAgICAgICAgICAgICAgIHN0YWNrTmFtZXMucHVzaChzdGFjay5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLnF1aWV0KSB7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBjb25maXJtID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAnVGhlIGZvbGxvd2luZyBzdGFjayhzKSB3aWxsIGJlIGRlc3Ryb3llZChPbmx5IGRlcGxveWVkIHN0YWNrcyB3aWxsIGJlIGRpc3BsYXllZCkuXFxuXFxuJyArXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZXMudG9TdHJpbmcoKSArXG4gICAgICAgICAgICAgICAgICAgICdcXG5cXG5QbGVhc2UgY29uZmlybS4oWS9OKVxcbicsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybSA9PT0gJ24nIHx8IGNvbmZpcm0gPT09ICdOJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb25maXJtID09PSAneScgfHwgY29uZmlybSA9PT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgY29uZmlnX3JlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIGNvbmZpZ19yZWdpb24gPSBjb25maWdfcmVnaW9uID8gY29uZmlnX3JlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgbGV0IGV4aXRTaWduYWwgPSAwO1xuICAgICAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpO1xuICAgICAgICAgICAgY29uc3QgYnVja2V0TmFtZSA9IHN0YWNrSW5mby5hc3NldEFzc29jaWF0ZWRCdWNrZXROYW1lO1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQ6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIFN0YWNrSWQ6IHN0YWNrSW5mby5zdGFja0lkLFxuICAgICAgICAgICAgICAgIFJlZ2lvbklkOiBzdGFja0luZm8ucmVnaW9uSWQgPyBzdGFja0luZm8ucmVnaW9uSWQgOiBjb25maWdfcmVnaW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgcHJpbnQoJyVzOiBkZXN0cm95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgZXhpdFNpZ25hbCA9IGF3YWl0IHRoaXMuc3luY0Rlc3Ryb3lTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBjbGllbnQuZGVsZXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBEZWxldGUgdGhlIHN0YWNrKCR7c3RhY2tOYW1lfSkgc3VjY2Vzc2Z1bGx5IVxcblJlcXVlc3RlZElkOiAlc2AsIGNvbG9ycy5ibHVlKHJlcy5SZXF1ZXN0SWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0ssIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGRlbGV0ZSBzdGFjazogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXRTaWduYWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChidWNrZXROYW1lICE9PSB1bmRlZmluZWQgJiYgYnVja2V0TmFtZSAhPT0gbnVsbCAmJiBidWNrZXROYW1lICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IENka1Rvb2xraXQuZ2V0Q29uZmlnKCk7XG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudDtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5hY2Nlc3NLZXlJZCB8fCAhY29uZmlnLmFjY2Vzc0tleVNlY3JldCkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIG9yIHNldCBlbnZpcm9ubWVudCB0byBzZXQgeW91ciBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZmlyc3RseSFcIik7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghY29uZmlnLnNlY3VyaXR5VG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50ID0gbmV3IG9zc0NsaWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpb246IGBvc3MtJHtjb25maWcucmVnaW9uSWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBjb25maWcuYWNjZXNzS2V5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGNvbmZpZy5hY2Nlc3NLZXlTZWNyZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQ6IHN0YWNrSW5mby5hc3NldEFzc29jaWF0ZWRCdWNrZXROYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudCA9IG5ldyBvc3NDbGllbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiBgb3NzLSR7Y29uZmlnLnJlZ2lvbklkfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogY29uZmlnLmFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBjb25maWcuYWNjZXNzS2V5U2VjcmV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogY29uZmlnLnNlY3VyaXR5VG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQ6IHN0YWNrSW5mby5hc3NldEFzc29jaWF0ZWRCdWNrZXROYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmRlbGV0ZUJ1Y2tldChjbGllbnQsIGJ1Y2tldE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV4aXQoZXhpdFNpZ25hbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzeW5jU3RhY2tJbmZvKCkge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSB7fTtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGZpbGVDb250ZW50LCBudWxsLCAnXFx0JykpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0ZW1wOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgIC8vIHNlbGVjdG9yLmxlbmd0aCA9IDAgbWVhbnMgc2VsZWN0IGFsbCBzdGFja3MgZnJvbSB0aGlzIGFwcFxuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdEFsbFN0YWNrc0ZvckRlZmF1bHQoW10pO1xuICAgICAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKFNUQUNLX0lORk8sIHN0YWNrLmlkKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdGFjayBoYXMgbm8gaW5mbywgdGhlbiBhZGQgaW5pdCB0YWcgZm9yIGl0XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3N0YWNrLmlkXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3N0YWNrLmlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBJTklUX1NUQUNLLFxuICAgICAgICAgICAgICAgICAgICBzdGFja0lkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWdpb25JZDogbnVsbFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeSh0ZW1wLCBudWxsLCAnXFx0JykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCByZWdpb25JZDogc3RyaW5nfHVuZGVmaW5lZCwgYnVja2V0TmFtZT86IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM/OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcbiAgICAgICAgbGV0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICBsZXQgaW5mbyA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpO1xuICAgICAgICBsZXQgc3RhY2tJbmZvID0gaW5mb1tzdGFja05hbWVdO1xuICAgICAgICBpZiAoIXN0YWNrSW5mbykge1xuICAgICAgICAgICAgc3RhY2tJbmZvID0gaW5mb1tzdGFja05hbWVdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gREVQTE9ZX1NUQUNLX0lEX0xFTkdUSCkge1xuICAgICAgICAgICAgc3RhY2tJbmZvLnN0YXR1cyA9IHN0YXR1cz8/IERFUExPWV9TVEFDSztcbiAgICAgICAgICAgIHN0YWNrSW5mby5zdGFja0lkID0gdmFsdWU7XG4gICAgICAgICAgICBzdGFja0luZm8ucmVnaW9uSWQgPSByZWdpb25JZDtcbiAgICAgICAgICAgIHN0YWNrSW5mby5hc3NldEFzc29jaWF0ZWRCdWNrZXROYW1lID0gYnVja2V0TmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YWNrSW5mby5zdGF0dXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gREVTVFJPWV9TVEFDSykge1xuICAgICAgICAgICAgICAgIHN0YWNrSW5mby5zdGFja0lkID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzdGFja0luZm8ucmVnaW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHN0YWNrSW5mby5hc3NldEFzc29jaWF0ZWRCdWNrZXROYW1lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShpbmZvLCBudWxsLCAnXFx0JykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZmluZFN0YWNrSW5mbyhzdGFja05hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGVDb250ZW50KVtzdGFja05hbWVdO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZWxlY3RBbGxTdGFja3NGb3JEZWZhdWx0KHN0YWNrTmFtZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc3RhY2tOYW1lcywge1xuICAgICAgICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrcyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTm8gdmFsaWRhdGlvblxuXG4gICAgICAgIHJldHVybiBzdGFja3M7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZWxlY3RPbmx5U2luZ2xlU3RhY2tGb3JEZWZhdWx0KHN0YWNrTmFtZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc3RhY2tOYW1lcywge1xuICAgICAgICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLk9ubHlTaW5nbGUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE5vIHZhbGlkYXRpb25cblxuICAgICAgICByZXR1cm4gc3RhY2tzO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yRGVwbG95KHN0YWNrTmFtZXM6IHN0cmluZ1tdLCBleGNsdXNpdmVseT86IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzdGFja05hbWVzLCB7XG4gICAgICAgICAgICBleHRlbmQ6IGV4Y2x1c2l2ZWx5ID8gRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5Ob25lIDogRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5VcHN0cmVhbSxcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5Pbmx5U2luZ2xlLFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlU3RhY2tzKHN0YWNrcyk7XG5cbiAgICAgICAgcmV0dXJuIHN0YWNrcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNlbGVjdFN0YWNrc0ZvckRpZmYoc3RhY2tOYW1lczogc3RyaW5nW10sIGV4Y2x1c2l2ZWx5PzogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgICAgICAgIGV4dGVuZDogZXhjbHVzaXZlbHkgPyBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUgOiBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLlVwc3RyZWFtLFxuICAgICAgICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrcyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZVN0YWNrcyhzdGFja3MpO1xuXG4gICAgICAgIHJldHVybiBzdGFja3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgdGhlIHN0YWNrcyBmb3IgZXJyb3JzIGFuZCB3YXJuaW5ncyBhY2NvcmRpbmcgdG8gdGhlIENMSSdzIGN1cnJlbnQgc2V0dGluZ3NcbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIHZhbGlkYXRlU3RhY2tzKHN0YWNrczogU3RhY2tDb2xsZWN0aW9uKSB7XG4gICAgICAgIHN0YWNrcy5wcm9jZXNzTWV0YWRhdGFNZXNzYWdlcyh7XG4gICAgICAgICAgICBpZ25vcmVFcnJvcnM6IHRoaXMucHJvcHMuaWdub3JlRXJyb3JzLFxuICAgICAgICAgICAgc3RyaWN0OiB0aGlzLnByb3BzLnN0cmljdCxcbiAgICAgICAgICAgIHZlcmJvc2U6IHRoaXMucHJvcHMudmVyYm9zZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3NlbWJseSgpOiBQcm9taXNlPENsb3VkQXNzZW1ibHk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2xvdWRFeGVjdXRhYmxlLnN5bnRoZXNpemUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldENsaUNvbmZpZyhsb2FkRmlsZVBhdGg6IHN0cmluZykge1xuICAgICAgICBsZXQgZmlsZVBhdGg6IHN0cmluZztcbiAgICAgICAgbGV0IGNvbmZpZ3VyZUluZm86IGFueSA9IHt9O1xuICAgICAgICBsZXQgY29uZmlndXJlSW5mb3M6IGFueSA9IHt9O1xuICAgICAgICBsZXQgQUtQcm9maWxlTGlzdDogb2JqZWN0W10gPSBbXTtcbiAgICAgICAgbGV0IFN0c1Byb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBsZXQgUmFtUm9sZUFyblByb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBsZXQgRWNzUmFtUm9sZVByb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBpZiAobG9hZEZpbGVQYXRoKSB7XG4gICAgICAgICAgICBmaWxlUGF0aCA9IGxvYWRGaWxlUGF0aFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGhvbWVQYXRoID0gb3MuaG9tZWRpcigpO1xuICAgICAgICAgICAgZmlsZVBhdGggPSBob21lUGF0aCArIENMSV9DT05GSUdfRklMRTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IEFsbFByb2ZpbGVzID0gSlNPTi5wYXJzZShmaWxlKVsncHJvZmlsZXMnXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb2ZpbGUgb2YgQWxsUHJvZmlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogcHJvZmlsZS5hY2Nlc3Nfa2V5X2lkLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IHByb2ZpbGUuYWNjZXNzX2tleV9zZWNyZXQsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbjogcHJvZmlsZS5yZWdpb25faWQsXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IHByb2ZpbGUuc3RzX3Rva2VuLFxuICAgICAgICAgICAgICAgICAgICByb2xlQXJuOiBwcm9maWxlLnJhbV9yb2xlX2FybixcbiAgICAgICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiBwcm9maWxlLnJhbV9zZXNzaW9uX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiBwcm9maWxlLnJhbV9yb2xlX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGUubmFtZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwcm9maWxlLm1vZGUgPT09ICdBSycpIHtcbiAgICAgICAgICAgICAgICAgICAgQUtQcm9maWxlTGlzdC5wdXNoKGNvbmZpZ3VyZUluZm8pXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUluZm9zLkFLID0gQUtQcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnU3RzVG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIFN0c1Byb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuU3RzVG9rZW4gPSBTdHNQcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgICAgICAgICAgICAgICAgUmFtUm9sZUFyblByb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuUmFtUm9sZUFybiA9IFJhbVJvbGVBcm5Qcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgICAgICAgICAgICAgICAgRWNzUmFtUm9sZVByb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuRWNzUmFtUm9sZSA9IEVjc1JhbVJvbGVQcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY29uZmlndXJlSW5mb3MgfHwgT2JqZWN0LmtleXMoY29uZmlndXJlSW5mb3MpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXCJXQU5STklORzogUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgbW9kZSBhbmQgcHJvZmlsZSBjb25maWd1cmF0aW9uIGVudGVyZWQuXCIpO1xuICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uZmlndXJlSW5mb3NcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKFwiV0FOUk5JTkc6IFBsZWFzZSBjaGVjayBBbGl5dW4gQ2xpIHRvb2wgY29uZmlndXJlIGFjY3VyYWN5IG9mIHRoZSBkZWZhdWx0IHBhdGggb3Igc3BlY2lmaWVkIHBhdGguXCIpO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgcm9zRGVwbG95U3RhY2soY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSwgb3V0cHV0c0ZpbGU6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IGFueSwgc3RhY2tOYW1lOiBhbnksIGRldGFpbExvZzogYm9vbGVhbiwgc3luYzogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldE5hbWU/OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3RhY2tPdXRwdXRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgIGxldCBzbGVlcFRpbWUgPSAwO1xuICAgICAgICBsZXQgc3RhY2tJZDogYW55O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGNyZWF0ZVN0YWNrUmVzdWx0ID0gYXdhaXQgY2xpZW50LmNyZWF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIHN0YWNrSWQgPSBjcmVhdGVTdGFja1Jlc3VsdC5TdGFja0lkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhaWxMb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoYFRoZSAke2l9dGggZGVwbG95bWVudCBhdHRlbXB0IGZhaWxlZCwgYXMgZGV0YWlsZWQgaW4gJHtlfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWUuZGF0YSB8fCAhKFwiUmVxdWVzdElkXCIgaW4gZS5kYXRhKSB8fCBlLmNvZGUgPT09ICdTZXJ2aWNlVW5hdmFpbGFibGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGVlcFRpbWUgPCAyMDAwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xlZXBUaW1lID0gc2xlZXBUaW1lICsgNTAwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcChzbGVlcFRpbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhY2tJZEluZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSwgcmVzb3VyY2VHcm91cElkLCBjb250ZW50WydSZWdpb25JZCddKVxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3U3RhY2tJZEluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrSWQgPSBuZXdTdGFja0lkSW5mby5TdGFja0lkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ+KdjCBGYWlsIHRvIGNyZWF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmNvZGUsIGUuZGF0YVtcIlJlcXVlc3RJZFwiXSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhY2tJZCkge1xuICAgICAgICAgICAgZXJyb3IoJ+KdjCBGYWlsIHRvIGNyZWF0ZSBzdGFjaywgcGxlYXNlIGNoZWNrIHlvdXIgc2VydmljZSBlbmRwb2ludC4nKVxuICAgICAgICAgICAgdGhyb3cgbmV3IE5ldHdvcmtFcnJvcignQW4gdW5rbm93biBuZXR3b3JrIGVycm9yIG9jY3VycywgcGxlYXNlIGNoZWNrIHRoZSBlbmRwb2ludCBhbmQgdHJ5IGFnYWluIGxhdGVyLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gbmV3IFJld3JpdGFibGVCbG9jayhzdHJlYW0pO1xuICAgICAgICAgICAgd2l0aERlZmF1bHRQcmludGVyT2JqID0gc2V0SW50ZXJ2YWwoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIHN0YWNrSWQsIGJsb2NrLCAnZGVwbG95JylcbiAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDAwKVxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaW9uSWQ6IGNvbnRlbnRbJ1JlZ2lvbklkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFja0lkOiBzdGFja0lkXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldFN0YWNrUmVzdWx0ID0gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGdldFN0YWNrUmVzdWx0LlN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNSZWFzb24gPSBnZXRTdGFja1Jlc3VsdC5TdGF0dXNSZWFzb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tOYW1lID0gZ2V0U3RhY2tSZXN1bHQuU3RhY2tOYW1lXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dHMgPSBnZXRTdGFja1Jlc3VsdC5PdXRwdXRzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0NvbXBsZXRlID0gUmVnRXhwKC9DT01QTEVURS8pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0ZhaWxlZCA9IFJlZ0V4cCgvRkFJTEVELylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0NvbXBsZXRlLmV4ZWMoc3RhdHVzKSB8fCByZWdGYWlsZWQuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBzdGFja0lkLCBibG9jaywgJ2RlcGxveScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJ1xcbk91dHB1dHM6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tPdXRwdXRzW3N0YWNrTmFtZV0gPSBvdXRwdXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3V0cHV0IG9mIG91dHB1dHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvdXRwdXRbJ091dHB1dFZhbHVlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IG91dHB1dFsnT3V0cHV0S2V5J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gb3V0cHV0WydEZXNjcmlwdGlvbiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnXFxuIEtleTogJXMgIFZhbHVlOiAlcyBEZXNjcmlwdGlvbjogJXMnLCBjb2xvcnMuY3lhbihrZXkpLCBjb2xvcnMuY3lhbih2YWx1ZSksIGNvbG9ycy5jeWFuKGRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXRzRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihMT0NBTF9QQVRIICsgT1VUUFVUU19KU09OKSwgSlNPTi5zdHJpbmdpZnkoc3RhY2tPdXRwdXRzLCBudWxsLCAnXFx0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudG9TdHJpbmcoKSA9PSAnQ1JFQVRFX0NPTVBMRVRFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgc3RhY2tJZCwgY29udGVudFsnUmVnaW9uSWQnXSwgYnVja2V0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoc3luYyBjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhdHVzOiAlc1xcblN0YXR1c1JlYXNvbjogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1c1JlYXNvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YWNrSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBzdGFja0lkLCBjb250ZW50WydSZWdpb25JZCddLCBidWNrZXROYW1lLCBzdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoYFxcbuKdjCBGYWlsIHRvIHN5bmMgY3JlYXRlIHN0YWNrOlxcblN0YXR1czogJXNcXG5TdGF0dXNSZWFzb246ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXNSZWFzb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGFja0lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXRhaWxMb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdBbiBlcnJvciBvY2N1cnMgdHJ5aW5nIHRvIGdldCB0aGUgcmVzb3VyY2Ugc3RhY2sgZGV0YWlsczogJXMnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdUaHJvdHRsaW5nLlVzZXInIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZycgfHwgZS5jb2RlID09ICdUaHJvdHRsaW5nLkFQSScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDMwMDAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ+KdjCBGYWlsIHRvIHN5bmMgY3JlYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBzdGFja0lkLCBjb250ZW50WydSZWdpb25JZCddLCBidWNrZXROYW1lKTtcbiAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoY3JlYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGFja0lkKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0UmVzb3VyY2VzKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIHN0YWNrSWQ6IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbGlzdFN0YWNrUmVzb3VyY2VzUmVzdWx0ID0gYXdhaXQgY2xpZW50Lmxpc3RTdGFja1Jlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgU3RhY2tJZDogc3RhY2tJZCxcbiAgICAgICAgICAgICAgICBSZWdpb25JZDogY29udGVudFsnUmVnaW9uSWQnXSxcbiAgICAgICAgICAgIH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgcmV0dXJuIGxpc3RTdGFja1Jlc291cmNlc1Jlc3VsdC5SZXNvdXJjZXNcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IG5ldyBzdGFjayByZXNvdXJjZTogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB3aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSwgc3RhY2tJZDogYW55LCBibG9jazogYW55LCBhY3Rpb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGNvbnN0IHJlc291cmNlcyA9IGF3YWl0IENka1Rvb2xraXQuZ2V0UmVzb3VyY2VzKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIHN0YWNrSWQpXG4gICAgICAgIGlmIChhY3Rpb24gIT09ICdkZXN0cm95Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgcmVzb3VyY2Ugb2YgcmVzb3VyY2VzKSB7XG4gICAgICAgICAgICAgICAgbGluZXMucHVzaCh1dGlsLmZvcm1hdChjb2xvcnMuYmx1ZSgnfCVzIHwlcyB8ICVzIHwgJXMgfCAlcyB8ICVzJykgKyAnXFxuJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjMsIHJlc291cmNlLlN0YWNrTmFtZSksXG4gICAgICAgICAgICAgICAgICAgIHBhZExlZnQoMTIsIHJlc291cmNlLkNyZWF0ZVRpbWUpLFxuICAgICAgICAgICAgICAgICAgICBwYWRSaWdodCgyMCwgcmVzb3VyY2UuU3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjMsIHJlc291cmNlLlJlc291cmNlVHlwZSksXG4gICAgICAgICAgICAgICAgICAgIHNob3J0ZW4oNDAsIHJlc291cmNlLlBoeXNpY2FsUmVzb3VyY2VJZCksXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLkxvZ2ljYWxSZXNvdXJjZUlkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCByZXNvdXJjZSBvZiByZXNvdXJjZXMpIHtcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKHV0aWwuZm9ybWF0KGNvbG9ycy5ibHVlKCd8JXMgfCAlcyB8ICVzIHwgJXMgfCAlcycpICsgJ1xcbicsXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIzLCByZXNvdXJjZS5TdGFja05hbWUpLFxuICAgICAgICAgICAgICAgICAgICBwYWRSaWdodCgyMCwgcmVzb3VyY2UuU3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjMsIHJlc291cmNlLlJlc291cmNlVHlwZSksXG4gICAgICAgICAgICAgICAgICAgIHNob3J0ZW4oNDAsIHJlc291cmNlLlBoeXNpY2FsUmVzb3VyY2VJZCksXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLkxvZ2ljYWxSZXNvdXJjZUlkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYmxvY2suZGlzcGxheUxpbmVzKGxpbmVzKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhc3luYyByb3NVcGRhdGVTdGFjayhjbGllbnQ6IGFueSwgY29udGVudDogYW55LCByZXF1ZXN0T3B0aW9uczogYW55LCBvdXRwdXRzRmlsZTogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraXBJZk5vQ2hhbmdlczogYm9vbGVhbiwgc3RhY2tVcGRhdGVUaW1lOiBhbnksIGRldGFpbExvZzogYm9vbGVhbiwgc3luYzogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZTogc3RyaW5nLCBidWNrZXROYW1lPzogc3RyaW5nKSB7XG4gICAgICAgIGxldCBzbGVlcFRpbWUgPSAwO1xuICAgICAgICBjb25zdCBzdGFja0lkID0gY29udGVudFsnU3RhY2tJZCddO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpZW50LnVwZGF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhaWxMb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoYFRoZSAke2l9dGggdXBkYXRlIGF0dGVtcHQgZmFpbGVkLCBhcyBkZXRhaWxlZCBpbiAke2V9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZS5kYXRhIHx8ICEoXCJSZXF1ZXN0SWRcIiBpbiBlLmRhdGEpIHx8IGUuY29kZSA9PT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsZWVwVGltZSA8IDIwMDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGVlcFRpbWUgPSBzbGVlcFRpbWUgKyA1MDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHNsZWVwVGltZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmNvZGUgPT09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09ICdOb3RTdXBwb3J0ZWQnICYmIGUubWVzc2FnZS5zdGFydHNXaXRoKCdVcGRhdGUgdGhlIGNvbXBsZXRlbHkgc2FtZSBzdGFjaycpXG4gICAgICAgICAgICAgICAgICAgICYmIChza2lwSWZOb0NoYW5nZXMgfHwgYnVja2V0TmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCdUaGUgc3RhY2sgaXMgY29tcGxldGVseSB0aGUgc2FtZSwgdGhlcmUgaXMgbm8gbmVlZCB0byB1cGRhdGUuJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcign4p2MIEZhaWwgdG8gdXBkYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuUmVxdWVzdGVkSWQ6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuY29kZSwgZS5kYXRhW1wiUmVxdWVzdElkXCJdLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgUmVnaW9uSWQ6IGNvbnRlbnRbJ1JlZ2lvbklkJ10sXG4gICAgICAgICAgICAgICAgU3RhY2tJZDogc3RhY2tJZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrT3V0cHV0czogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgICAgICAgICAgLy8gV2FpdCBmb3IgdGhlIHN0YWNrIHN0YXRlIHRvIGNoYW5nZSBhZnRlciB1cGRhdGluZyBpdFxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IG5ldyBSZXdyaXRhYmxlQmxvY2soc3RyZWFtKTtcbiAgICAgICAgICAgIHdpdGhEZWZhdWx0UHJpbnRlck9iaiA9IHNldEludGVydmFsKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBzdGFja0lkLCBibG9jaywgJ3VwZGF0ZScpXG4gICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0TmV3U3RhY2tSZXN1bHQgPSBhd2FpdCBjbGllbnQuZ2V0U3RhY2socGFyYW1zLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZ2V0TmV3U3RhY2tSZXN1bHQuU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1JlYXNvbiA9IGdldE5ld1N0YWNrUmVzdWx0LlN0YXR1c1JlYXNvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXRzID0gZ2V0TmV3U3RhY2tSZXN1bHQuT3V0cHV0c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdVcGRhdGVUaW1lID0gZ2V0TmV3U3RhY2tSZXN1bHQuVXBkYXRlVGltZSA/IGdldE5ld1N0YWNrUmVzdWx0LlVwZGF0ZVRpbWUgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdVcGRhdGVUaW1lID09IHN0YWNrVXBkYXRlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhY2sgdXBkYXRlIGluIHByb2dyZXNzIG9yIHVwZGF0ZSBkaWQgbm90IGJlZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0NvbXBsZXRlID0gUmVnRXhwKC9DT01QTEVURS8pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0ZhaWxlZCA9IFJlZ0V4cCgvRkFJTEVELylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0NvbXBsZXRlLmV4ZWMoc3RhdHVzKSB8fCByZWdGYWlsZWQuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBzdGFja0lkLCBibG9jaywgJ3VwZGF0ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJ1xcbk91dHB1dHM6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tPdXRwdXRzW3N0YWNrTmFtZV0gPSBvdXRwdXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3V0cHV0IG9mIG91dHB1dHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvdXRwdXRbJ091dHB1dFZhbHVlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IG91dHB1dFsnT3V0cHV0S2V5J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gb3V0cHV0WydEZXNjcmlwdGlvbiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnXFxuIEtleTogJXMgIFZhbHVlOiAlcyBEZXNjcmlwdGlvbjogJXMnLCBjb2xvcnMuY3lhbihrZXkpLCBjb2xvcnMuY3lhbih2YWx1ZSksIGNvbG9ycy5jeWFuKGRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXRzRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihMT0NBTF9QQVRIICsgT1VUUFVUU19KU09OKSwgSlNPTi5zdHJpbmdpZnkoc3RhY2tPdXRwdXRzLCBudWxsLCAnXFx0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudG9TdHJpbmcoKSA9PSAnVVBEQVRFX0NPTVBMRVRFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgc3RhY2tJZCwgY29udGVudFsnUmVnaW9uSWQnXSwgYnVja2V0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoc3luYyB1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhdHVzOiAlc1xcblN0YXR1c1JlYXNvbjogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1c1JlYXNvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YWNrSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBzdGFja0lkLCBjb250ZW50WydSZWdpb25JZCddLCBidWNrZXROYW1lLCBzdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoYFxcbuKdjCBGYWlsIHRvIHN5bmMgdXBkYXRlIHN0YWNrOlxcblN0YXR1czogJXNcXG5TdGF0dXNSZWFzb246ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXNSZWFzb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGFja0lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXRhaWxMb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdBbiBlcnJvciBvY2N1cnMgdHJ5aW5nIHRvIGdldCB0aGUgcmVzb3VyY2Ugc3RhY2sgZGV0YWlsczogJXMnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdUaHJvdHRsaW5nLlVzZXInIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZycgfHwgZS5jb2RlID09ICdUaHJvdHRsaW5nLkFQSScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDMwMDAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ+KdjCBGYWlsIHRvIHN5bmMgdXBkYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBzdGFja0lkLCBjb250ZW50WydSZWdpb25JZCddLCBidWNrZXROYW1lKTtcbiAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQodXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGFja0lkKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc3luY0Rlc3Ryb3lTdGFjayhjbGllbnQ6IGFueSwgY29udGVudDogYW55LCByZXF1ZXN0T3B0aW9uczogYW55KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuZGVsZXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICBjb25zdCBibG9jayA9IG5ldyBSZXdyaXRhYmxlQmxvY2soc3RyZWFtKTtcbiAgICAgICAgICAgIHdpdGhEZWZhdWx0UHJpbnRlck9iaiA9IHNldEludGVydmFsKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBjb250ZW50WydTdGFja0lkJ10sIGJsb2NrLCAnZGVzdHJveScpXG4gICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMClcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiBjb250ZW50WydSZWdpb25JZCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhY2tJZDogY29udGVudFsnU3RhY2tJZCddXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldFN0YWNrUmVzdWx0ID0gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGdldFN0YWNrUmVzdWx0LlN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNSZWFzb24gPSBnZXRTdGFja1Jlc3VsdC5TdGF0dXNSZWFzb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tOYW1lID0gZ2V0U3RhY2tSZXN1bHQuU3RhY2tOYW1lXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0NvbXBsZXRlID0gUmVnRXhwKC9DT01QTEVURS8pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0ZhaWxlZCA9IFJlZ0V4cCgvRkFJTEVELylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0NvbXBsZXRlLmV4ZWMoc3RhdHVzKSB8fCByZWdGYWlsZWQuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBjb250ZW50WydTdGFja0lkJ10sIGJsb2NrLCAnZGVzdHJveScpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSB0YXNrKHN5bmMgZGVzdHJveSBzdGFjaykgaGFzIGZpbmlzaGVkIVxcbnN0YXR1czogJXNcXG5TdGF0dXNSZWFzb246ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzUmVhc29uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShnZXRTdGFja1Jlc3VsdC5TdGFja0lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSywgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdUaHJvdHRsaW5nLlVzZXInIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZycgfHwgZS5jb2RlID09ICdUaHJvdHRsaW5nLkFQSScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDMwMDAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyBkZXN0cm95IHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyBkZXN0cm95IHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWZmT3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIHN0cmVhbT86IE5vZGVKUy5Xcml0YWJsZVN0cmVhbTtcbiAgICBjb250ZXh0TGluZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXBsb3lPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIE9ubHkgc2VsZWN0IHRoZSBnaXZlbiBzdGFja1xuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBleGNsdXNpdmVseT86IGJvb2xlYW47XG4gICAgcGFyYW1ldGVycz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9O1xuICAgIHRpbWVvdXQ6IHN0cmluZztcbiAgICBzeW5jOiBib29sZWFuO1xuICAgIHJlZ2lvbklkOiBzdHJpbmc7XG4gICAgb3V0cHV0c0ZpbGU6IGJvb2xlYW47XG4gICAgc2tpcElmTm9DaGFuZ2VzOiBib29sZWFuO1xuICAgIGRpc2FibGVSb2xsYmFjazogYm9vbGVhbjtcbiAgICByZXNvdXJjZUdyb3VwSWQ6IHN0cmluZztcbiAgICBkZXRhaWxMb2c6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzdHJveU9wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuICAgIHF1aWV0PzogYm9vbGVhbjtcbiAgICBzeW5jOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50T3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG4gICAgbG9naWNhbFJlc291cmNlSWQ6IHN0cmluZztcbiAgICBwYWdlTnVtYmVyOiBzdHJpbmc7XG4gICAgcGFnZVNpemU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdXRQdXRPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZU9wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlbmVyYXRlU3RhY2tJbmZvT3B0aW9ucyB7XG4gICAgcmVzb3VyY2VHcm91cElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdFN0YWNrT3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG4gICAgcGFnZU51bWJlcjogc3RyaW5nO1xuICAgIHBhZ2VTaXplOiBzdHJpbmc7XG4gICAgYWxsOiBzdHJpbmc7XG4gICAgcmVzb3VyY2VHcm91cElkOiBzdHJpbmc7XG4gICAgcmVnaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnU2V0T3B0aW9ucyB7XG4gICAgZ2xvYmFsOiBzdHJpbmc7XG4gICAgZW5kcG9pbnQ6IHN0cmluZztcbiAgICByZWdpb246IHN0cmluZztcbiAgICBtb2RlOiBzdHJpbmc7XG4gICAgYWs6IHN0cmluZztcbiAgICBzazogc3RyaW5nO1xuICAgIHN0czogc3RyaW5nO1xuICAgIHJhbVJvbGVBcm46IHN0cmluZztcbiAgICByb2xlU2Vzc2lvbk5hbWU6IHN0cmluZztcbiAgICByYW1Sb2xlTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRDb25maWdPcHRpb25zIHtcbiAgICBnbG9iYWw/OiBzdHJpbmc7XG4gICAgbG9hZEZpbGVQYXRoOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBUYWcge1xuICAgIHJlYWRvbmx5IEtleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IFZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUFuZFVwZGF0ZUxhbmd1YWdlSW5mbyhsYW5ndWFnZTogc3RyaW5nKSB7XG4gICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBQUk9KRUNUX0NPTkZJRyk7XG4gICAgbGV0IGZpbGVDb250ZW50OiBhbnk7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgIGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICBsZXQgaW5mbyA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpO1xuICAgICAgICBpbmZvWydsYW5ndWFnZUluZm8nXSA9IGxhbmd1YWdlO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShpbmZvLCBudWxsLCAnXFx0JykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRMYW5ndWFnZUluZm8oKSB7XG4gICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBQUk9KRUNUX0NPTkZJRyk7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgIGxldCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpWydsYW5ndWFnZUluZm8nXS50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZExlZnQobjogbnVtYmVyLCB4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh4KSB7XG4gICAgICAgIHJldHVybiAnICcucmVwZWF0KE1hdGgubWF4KDAsIG4gLSB4Lmxlbmd0aCkpICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJydcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZFJpZ2h0KG46IG51bWJlciwgeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoeCkge1xuICAgICAgICByZXR1cm4geCArICcgJy5yZXBlYXQoTWF0aC5tYXgoMCwgbiAtIHgubGVuZ3RoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvcnRlbihtYXhXaWR0aDogbnVtYmVyLCBwOiBzdHJpbmcpIHtcbiAgICBpZiAocC5sZW5ndGggPD0gbWF4V2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIGNvbnN0IGhhbGYgPSBNYXRoLmZsb29yKChtYXhXaWR0aCAtIDMpIC8gMik7XG4gICAgcmV0dXJuIHAuc3Vic3RyKDAsIGhhbGYpICsgJy4uLicgKyBwLnN1YnN0cihwLmxlbmd0aCAtIGhhbGYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzZW5zaXRpemF0aW9uKGlucHV0U3RyaW5nOiBzdHJpbmcsIG1peExlbmd0aCA9IDMpIHtcbiAgICAvLyBtaXhMZW5ndGgg5a2X56ym5Liy5bCR5LqO5LiA5a6a5YC85YiZ6ISx5pWP5YWo6YOo77yM5aKe5Yqg6ISx5pWP5L2N5pWwXG4gICAgaWYgKGlzU3RyaW5nKGlucHV0U3RyaW5nKSB8fCBpc051bWJlcihpbnB1dFN0cmluZykpIHtcbiAgICAgICAgY29uc3Qgc3RyID0gU3RyaW5nKGlucHV0U3RyaW5nKTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPD0gbWl4TGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyonLnJlcGVhdChtaXhMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGZpcnN0U3RyID0gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC8gbWl4TGVuZ3RoKTtcbiAgICAgICAgY29uc3QgbGFzdFN0ciA9IHN0ci5zdWJzdHIoLXN0ci5sZW5ndGggLyBtaXhMZW5ndGgpO1xuICAgICAgICBjb25zdCBtaWRkbGVTdHIgPSBzdHJcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoc3RyLmxlbmd0aCAvIG1peExlbmd0aCwgbGVuIC0gTWF0aC5hYnMoLXN0ci5sZW5ndGggLyBtaXhMZW5ndGgpKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHNcXFNdL2dpLCAnKicpO1xuICAgICAgICByZXR1cm4gZmlyc3RTdHIgKyBtaWRkbGVTdHIgKyBsYXN0U3RyO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59Il19