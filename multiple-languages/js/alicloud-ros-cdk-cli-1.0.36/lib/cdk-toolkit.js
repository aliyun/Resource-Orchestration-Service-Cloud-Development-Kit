"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desensitization = exports.shorten = exports.padRight = exports.padLeft = exports.readLanguageInfo = exports.writeAndUpdateLanguageInfo = exports.CdkToolkit = void 0;
const colors = require("colors/safe");
const fs = require("fs");
const path = require("path");
const readlineSync = require("readline-sync");
const util = require("util");
const cipher_1 = require("./util/cipher");
const util_1 = require("util");
const display_1 = require("./util/display");
const lodash_1 = require("lodash");
const rosClient = require('@alicloud/ros-2019-09-10');
const os = require('os');
const http = require('http');
const https = require('https');
const child_process_1 = require("child_process");
const credentials_1 = require("@alicloud/credentials");
const cloud_assembly_1 = require("./api/cloud-assembly");
const logging_1 = require("./logging");
const settings_1 = require("./settings");
const process_1 = require("process");
const diff_1 = require("./diff");
const serialize_1 = require("./serialize");
const util_2 = require("util");
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
const exec = util_2.promisify(child_process_1.exec);
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
    async getRosClient() {
        let modeType = await CdkToolkit.getJson(CONFIG_NAME, 'type', true);
        let endpoint = await CdkToolkit.getJson(CONFIG_NAME, 'endpoint', true);
        let configInfo;
        let client;
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
        else if (!newSecurityToken) {
            client = new rosClient({
                endpoint: endpoint,
                accessKeyId: newAccessKeyId,
                accessKeySecret: newAccessKeySecret
            });
        }
        else {
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
        const stacks = await this.selectStacksForList(selectors);
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
            await this.updateStackInfo(stacks.firstStack.id, SYNTH_STACK);
            return stacks.firstStack.template;
        }
        else {
            for (let stack of stacks.stackArtifacts) {
                await this.updateStackInfo(stack.id, SYNTH_STACK);
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
    async deploy(options) {
        let templateBody;
        await this.syncStackInfo();
        const stacks = await this.selectStacksForDeploy(options.stackNames, options.exclusively);
        const stackName = options.stackNames.length !== 0 ? options.stackNames[0] : stacks.stackArtifacts[0].id;
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        const client = await this.getRosClient();
        let templateFileBody = fs.readFileSync(`./cdk.out/${stackName}.template.json`);
        let ClientToken = generateSafeId();
        let disableRollback = options.disableRollback;
        let templateBodyBase64Data = templateFileBody.toString('base64').trim();
        if (Buffer.byteLength(templateFileBody, 'utf8') < 524273) {
            templateBody = `@Base64Encoded: ${templateBodyBase64Data}`;
        }
        else {
            templateBody = templateFileBody;
        }
        let content = {
            StackName: stackName.toString(),
            RegionId: region,
            TimeoutInMinutes: options.timeout,
            TemplateBody: templateBody,
            ClientToken: ClientToken,
            DisableRollback: disableRollback
        };
        let sync = options.sync;
        let outputs = options.outputsFile;
        let skipIfNoChanges = options.skipIfNoChanges;
        let resourceGroupId = options.resourceGroupId;
        let detailLog = options.detailLog;
        requestOptions['method'] = 'POST';
        if (resourceGroupId) {
            content['ResourceGroupId'] = resourceGroupId;
        }
        if (stacks.stackArtifacts[0].tags) {
            let count = 1;
            let paras = stacks.stackArtifacts[0].tags;
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
        if (localStackInfo.stackId) {
            const stackInfo = await this.getStackById(localStackInfo.stackId);
            if (stackInfo !== null) {
                // update stack
                if (localStackInfo.stackId !== stackInfo.StackId) {
                    logging_1.error('fail to update stack, because stack local info dose not match the remote server.');
                    process_1.exit(1);
                }
                {
                    content['StackId'] = stackInfo.StackId;
                    let stackStatus = stackInfo.Status;
                    let stackUpdateTime = stackInfo.UpdateTime ? stackInfo.UpdateTime : stackInfo.CreateTime;
                    if (stackStatus.indexOf("IN_PROGRESS") == -1) {
                        try {
                            if (sync) {
                                logging_1.print('%s: deploying...', colors.bold(stackName));
                                await this.syncUpdateStack(client, content, requestOptions, outputs, skipIfNoChanges, stackName, localStackInfo, stackUpdateTime, detailLog);
                            }
                            await this.rosUpdateStack(client, content, requestOptions, stackName, localStackInfo, stackUpdateTime, detailLog, skipIfNoChanges);
                            process_1.exit(0);
                        }
                        catch (e) {
                            if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack') && skipIfNoChanges) {
                                await this.updateStackInfo(stackName, stackInfo.StackId);
                                logging_1.success('The stack is completely the same, there is no need to update.');
                                process_1.exit(0);
                            }
                            else {
                                if (detailLog) {
                                    logging_1.error('update stack error info is %s', e);
                                }
                                logging_1.error('fail to update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, e.data.RequestId, e.message);
                                process_1.exit(1);
                            }
                        }
                    }
                    else {
                        logging_1.error('fail to update stack, because stack status is %s', stackStatus);
                        process_1.exit(1);
                    }
                }
            }
            else {
                // create stack
                try {
                    if (sync) {
                        logging_1.print('%s: deploying...', colors.bold(stackName));
                        await this.syncDeployStack(client, content, requestOptions, outputs, resourceGroupId, stackName, detailLog);
                    }
                    await this.rosCreateStack(client, content, requestOptions, resourceGroupId, stackName, detailLog);
                    process_1.exit(0);
                }
                catch (e) {
                    if (detailLog) {
                        logging_1.error('create stack error info is %s', e);
                    }
                    logging_1.error('fail to create stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, e.data.RequestId, e.message);
                    process_1.exit(1);
                }
            }
        }
        else {
            const stackInfo = await this.getStackByName(stackName, resourceGroupId);
            if (stackInfo !== null) {
                // stack is exist send error message
                logging_1.error('fail to create stack, because stack  %s is exist in this region.', stackName);
                process_1.exit(1);
            }
            else {
                // create stack
                try {
                    if (sync) {
                        logging_1.print('%s: deploying...', colors.bold(stackName));
                        await this.syncDeployStack(client, content, requestOptions, outputs, resourceGroupId, stackName, detailLog);
                    }
                    await this.rosCreateStack(client, content, requestOptions, resourceGroupId, stackName, detailLog);
                    process_1.exit(0);
                }
                catch (e) {
                    if (detailLog) {
                        logging_1.error('create stack error info is %s', e);
                    }
                    logging_1.error('fail to create stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, e.data.RequestId, e.message);
                    process_1.exit(1);
                }
            }
        }
    }
    async diff(options) {
        let stacks = await this.selectStacksForDestroy(options.stackNames);
        const client = await this.getRosClient();
        let regionInLocal = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        regionInLocal = regionInLocal ? regionInLocal : process.env.REGION_ID;
        const stream = options.stream || process.stderr;
        const contextLines = options.contextLines || 3;
        for (let stack of stacks.stackArtifacts) {
            let stackInfo = await this.findStackInfo(stack.id);
            if (!stackInfo.stackId) {
                stream.write(util_1.format('Stack %s has not been deployed or stack doesn\'t exist in the stack.info.json file \n', colors.bold(stack.displayName)));
                continue;
            }
            client.getTemplate({ RegionId: regionInLocal, StackId: stackInfo.stackId }, requestOptions)
                .then((res) => {
                const template = serialize_1.deserializeStructure(res.TemplateBody);
                stream.write(util_1.format('Stack %s\n', colors.bold(stack.displayName)));
                diff_1.printStackDiff(template, stack, contextLines, stream);
                process_1.exit(0);
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to synth.`);
                    this.updateStackInfo(stack.id, SYNTH_STACK);
                }
                else {
                    logging_1.error('fail to get template: %s %s', ex.code, ex.message);
                }
                process_1.exit(1);
            });
        }
    }
    async event(options) {
        await this.syncStackInfo();
        let stacks = await this.selectStacksForDestroy([]);
        let stackId = (await this.findStackInfo(options.stackName[0])).stackId;
        if (!options.stackName) {
            logging_1.error('If want to get resource stack events, stack name must be Specified!');
            process_1.exit(1);
        }
        if (!stacks.stackIds.includes(options.stackName[0])) {
            logging_1.error(`The specific stack doesn't exist, Please check the accuracy of the input stack name!`);
            process_1.exit(1);
        }
        if (!stackId) {
            logging_1.error(`The specific stack doesn't exist in the stack.info.json file, Please check the accuracy of the stack: %s!`, options.stackName[0]);
            process_1.exit(1);
        }
        let LogicalResourceIds = [];
        const client = await this.getRosClient();
        if (options.logicalResourceId) {
            LogicalResourceIds.push(options.logicalResourceId);
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
            .then((res) => {
            logging_1.success(`\n ✅ The Stack %s \n Events is: \n %s \n`, colors.blue(options.stackName[0]), colors.blue(JSON.stringify(res.Events, null, "\t")));
            process_1.exit(0);
        }, (ex) => {
            if (ex.code == 'StackNotFound') {
                logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                this.updateStackInfo(options.stackName[0], DESTROY_STACK);
            }
            else {
                logging_1.error('fail to get stack events: %s %s', ex.code, ex.message);
            }
            process_1.exit(1);
        });
    }
    async output(options) {
        await this.syncStackInfo();
        let stacks = await this.selectStacksForDestroy([]);
        let stackId = (await this.findStackInfo(options.stackName[0])).stackId;
        if (!options.stackName) {
            logging_1.error('If want to get resource stack output, stack name must be Specified!');
            process_1.exit(1);
        }
        if (!stacks.stackIds.includes(options.stackName[0])) {
            logging_1.error(`The specific stack doesn't exist, Please check the accuracy of the input stack name!`);
            process_1.exit(1);
        }
        if (!stackId) {
            logging_1.error(`The specific stack doesn't exist in the stack.info.json file, Please check the accuracy of the stack: %s!`, options.stackName[0]);
            process_1.exit(1);
        }
        const client = await this.getRosClient();
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        client
            .getStack({
            StackId: stackId,
            RegionId: region
        }, requestOptions)
            .then((res) => {
            logging_1.success(`\n ✅ The Stack %s \n Output is: \n %s \n`, colors.blue(options.stackName[0]), colors.blue(JSON.stringify(res.Outputs, null, "\t")));
            process_1.exit(0);
        }, (ex) => {
            if (ex.code == 'StackNotFound') {
                logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                this.updateStackInfo(options.stackName[0], DESTROY_STACK);
            }
            else {
                logging_1.error('fail to get stack outputs: %s %s', ex.code, ex.message);
            }
            process_1.exit(1);
        });
    }
    async resource(options) {
        await this.syncStackInfo();
        let stacks = await this.selectStacksForDestroy(options.stackNames);
        let stackNames = [];
        for (let stack of stacks.stackArtifacts) {
            if ((await this.findStackInfo(stack.id)).stackId) {
                stackNames.push(stack.id);
            }
            else {
                logging_1.error(`The specific stack doesn't exist in the stack.info.json file, Please check the accuracy of the stack: %s!`, stack.id);
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
                .then((res) => {
                logging_1.success(`\n ✅ The Stack %s \n Resource is: \n %s \n`, colors.blue(stackName), colors.blue(JSON.stringify(res.Resources, null, "\t")));
                process_1.exit(0);
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                    this.updateStackInfo(stackName, DESTROY_STACK);
                }
                else {
                    logging_1.error('fail to get stack resource: %s %s', ex.code, ex.message);
                }
                process_1.exit(1);
            });
        }
    }
    async generateStackInfo(options) {
        let filePath = path.join(LOCAL_PATH + STACK_INFO);
        let stacks = await this.selectStacksForList([]);
        let stackNames = [];
        let StackInfos = {};
        stackNames = stacks.stackIds;
        for (let stackName of stackNames) {
            const stackInfo = await this.getStackByName(stackName, options.resourceGroupId);
            if (stackInfo !== null) {
                StackInfos[stackName] = {
                    status: DEPLOY_STACK,
                    stackId: stackInfo.StackId
                };
            }
            else {
                StackInfos[stackName] = {
                    status: INIT_STACK,
                    stackId: null
                };
            }
        }
        fs.writeFileSync(filePath, JSON.stringify(StackInfos, null, '\t'));
        logging_1.success(`\n ✅ The generate stack info has completed!`);
        process_1.exit(0);
    }
    async getStackByName(stackName, resourceGroupId) {
        const client = await this.getRosClient();
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
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
    async getStackById(stackId) {
        const client = await this.getRosClient();
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        let params = {
            RegionId: region,
            StackId: stackId
        };
        try {
            return await client.getStack(params, requestOptions);
        }
        catch (e) {
            logging_1.error('fail to get stack: %s %s', e.code, e.message);
            return null;
        }
    }
    async listStacks(options) {
        await this.syncStackInfo();
        const client = await this.getRosClient();
        let stacks = await this.selectStacksForList([]);
        let params = {};
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        params = {
            RegionId: region,
            PageSize: options.pageSize ? Number(options.pageSize) : 10,
            PageNumber: options.pageNumber ? Number(options.pageNumber) : 1
        };
        if (!options.all) {
            if (options.stackNames.length === 0) {
                params.StackName = stacks.stackIds;
            }
            else {
                params.StackName = options.stackNames;
            }
        }
        if (options.resourceGroupId) {
            params.ResourceGroupId = options.resourceGroupId;
        }
        client.listStacks(params, requestOptions)
            .then((res) => {
            logging_1.success(`\n ✅ The Stacks list is:\n %s \n`, colors.blue(JSON.stringify(res.Stacks, null, "\t")));
            process_1.exit(0);
        }, (ex) => {
            logging_1.error('fail to list stacks: %s %s', ex.code, ex.message);
            process_1.exit(1);
        });
    }
    async destroy(options) {
        await this.syncStackInfo();
        let stacks = await this.selectStacksForDestroy(options.stackNames);
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
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        const client = await this.getRosClient();
        for (let stackName of stackNames) {
            let content = {
                StackId: (await this.findStackInfo(stackName)).stackId,
                RegionId: region,
            };
            if (sync) {
                logging_1.print('%s: destroying...', colors.bold(stackName));
                await this.syncDestroyStack(client, content, requestOptions);
            }
            client.deleteStack(content, requestOptions)
                .then((res) => {
                this.updateStackInfo(stackName, DESTROY_STACK);
                logging_1.success(`\n ✅ Deleted\nRequestedId: %s`, colors.blue(res.RequestId));
                process_1.exit(0);
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                    this.updateStackInfo(stackName, DESTROY_STACK);
                }
                else {
                    logging_1.error('fail to delete stack: %s %s', ex.code, ex.message);
                }
                process_1.exit(1);
            });
        }
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
        const stacks = await this.selectStacksForList([]);
        for (const stack of stacks.stackArtifacts) {
            let value = await CdkToolkit.getJson(STACK_INFO, stack.id);
            // if the stack has no info, then add init tag for it
            if (value) {
                temp[stack.id] = value;
            }
            else {
                temp[stack.id] = {
                    status: INIT_STACK,
                    stackId: null
                };
            }
        }
        fs.writeFileSync(filePath, JSON.stringify(temp, null, '\t'));
    }
    async updateStackInfo(stackName, value) {
        let filePath = path.join(LOCAL_PATH + STACK_INFO);
        let fileContent = fs.readFileSync(filePath).toString();
        let info = JSON.parse(fileContent);
        let stackInfo = info[stackName];
        if (!stackInfo) {
            stackInfo = info[stackName] = {};
        }
        if (value.length === DEPLOY_STACK_ID_LENGTH) {
            stackInfo.status = DEPLOY_STACK;
            stackInfo.stackId = value;
        }
        else {
            stackInfo.status = value;
            if (value === DESTROY_STACK) {
                stackInfo.stackId = null;
            }
        }
        fs.writeFileSync(filePath, JSON.stringify(info, null, '\t'));
    }
    async findStackInfo(stackName) {
        let filePath = path.join(LOCAL_PATH + STACK_INFO);
        let fileContent = fs.readFileSync(filePath).toString();
        return JSON.parse(fileContent)[stackName];
    }
    async selectStacksForList(selectors) {
        const assembly = await this.assembly();
        const stacks = await assembly.selectStacks(selectors, { defaultBehavior: cloud_assembly_1.DefaultSelection.AllStacks });
        // No validation
        return stacks;
    }
    async selectStacksForDestroy(stackNames) {
        const assembly = await this.assembly();
        const stacks = await assembly.selectStacks(stackNames, {
            defaultBehavior: cloud_assembly_1.DefaultSelection.AllStacks,
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
    async syncDeployStack(client, content, requestOptions, outputsFile, resourceGroupId, stackName, detailLog) {
        try {
            let createResultRequestId;
            let createErrorRequestId;
            let networkErrorException;
            let createResult;
            const stackOutputs = {};
            try {
                createResult = await client.createStack(content, requestOptions);
                createResultRequestId = createResult.RequestId;
            }
            catch (e) {
                if (detailLog) {
                    logging_1.error('sync create stack error info is %s', e);
                }
                createErrorRequestId = e.data.RequestId;
                if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                    networkErrorException = true;
                }
                else if (createErrorRequestId) {
                    logging_1.error('fail to sync create stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, createErrorRequestId, e.message);
                    process_1.exit(1);
                }
            }
            if ((!createResultRequestId && !createErrorRequestId) || networkErrorException) {
                let sleepTime = 5000;
                await sleep(sleepTime);
                let i = 0;
                while (i < 11) {
                    let createResultRequestId;
                    let createErrorRequestId;
                    let networkErrorException;
                    let createResult;
                    try {
                        createResult = await client.createStack(content, requestOptions);
                        createResultRequestId = createResult.RequestId;
                    }
                    catch (e) {
                        if (detailLog) {
                            logging_1.error('retry sync create stack error info is %s', e);
                        }
                        createErrorRequestId = e.data.RequestId;
                        if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                            networkErrorException = true;
                        }
                        else if (createErrorRequestId) {
                            logging_1.error('fail to sync create stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, createErrorRequestId, e.message);
                            process_1.exit(1);
                        }
                    }
                    if ((!createResultRequestId && !createErrorRequestId) || networkErrorException) {
                        if (sleepTime < 20000) {
                            sleepTime = sleepTime + 5000;
                        }
                        await sleep(sleepTime);
                        i++;
                        continue;
                    }
                    await this.updateStackInfo(stackName, createResult.StackId);
                    logging_1.success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(createResult.RequestId), colors.blue(createResult.StackId));
                    process_1.exit(0);
                }
                if (i >= 11) {
                    const newStackIdInfo = await this.getStackByName(stackName, resourceGroupId);
                    if (newStackIdInfo) {
                        await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                        logging_1.success(`\n ✅ The deployment(create stack) has completed!\nStackId: %s`, colors.blue(newStackIdInfo.StackId));
                        process_1.exit(0);
                    }
                    else {
                        logging_1.error('fail to create stack, please check you service endpoint.');
                        process_1.exit(1);
                    }
                }
            }
            const block = new display_1.RewritableBlock(stream);
            withDefaultPrinterObj = setInterval(async function () {
                await CdkToolkit.withDefaultPrinter(client, content, requestOptions, createResult.StackId, block, 'deploy');
            }, 5000);
            while (true) {
                try {
                    await sleep(1000);
                    let params = {
                        RegionId: content['RegionId'],
                        StackId: createResult.StackId
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
                        await CdkToolkit.withDefaultPrinter(client, content, requestOptions, createResult.StackId, block, 'deploy');
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
                        logging_1.success(`\n ✅ The deployment(sync deploy stack) has finished!\nstatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(getStackResult.StackId));
                        await this.updateStackInfo(stackName, createResult.StackId);
                        if (regComplete.exec(status)) {
                            if (status.toString() == 'CREATE_ROLLBACK_COMPLETE') {
                                process_1.exit(2);
                            }
                            process_1.exit(0);
                        }
                        else if (regFailed.exec(status)) {
                            process_1.exit(2);
                        }
                        break;
                    }
                }
                catch (e) {
                    if (detailLog) {
                        logging_1.error('retry sync create stack error info is %s', e);
                    }
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000);
                    }
                    else {
                        logging_1.error('fail to sync create stack: %s %s', e.code, e.message);
                        clearInterval(withDefaultPrinterObj);
                        process_1.exit(1);
                    }
                }
            }
        }
        catch (e) {
            if (detailLog) {
                logging_1.error('retry sync create stack error info is %s', e);
            }
            logging_1.error('fail to sync create stack: %s %s', e.code, e.message);
            clearInterval(withDefaultPrinterObj);
            process_1.exit(1);
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
    async syncUpdateStack(client, content, requestOptions, outputsFile, skipIfNoChanges, stackName, localStackInfo, stackUpdateTime, detailLog) {
        try {
            let params = {
                RegionId: content['RegionId'],
                StackId: content['StackId']
            };
            let updateResultRequestId;
            let updateErrorRequestId;
            let networkErrorException;
            let updateResult;
            const stackOutputs = {};
            const getOriginalStackResult = await client.getStack(params, requestOptions);
            const originalUpdateTime = getOriginalStackResult.UpdateTime ? getOriginalStackResult.UpdateTime : "";
            try {
                updateResult = await client.updateStack(content, requestOptions);
                updateResultRequestId = updateResult.RequestId;
            }
            catch (e) {
                if (detailLog) {
                    logging_1.error('sync update stack error info is %s', e);
                }
                if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack') && skipIfNoChanges) {
                    await this.updateStackInfo(content['StackName'], content['StackId']);
                    logging_1.success('The stack is completely the same, there is no need to update.');
                    process_1.exit(0);
                }
                updateErrorRequestId = e.data.RequestId;
                if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                    networkErrorException = true;
                }
                else if (updateErrorRequestId) {
                    logging_1.error('fail to sync update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, updateErrorRequestId, e.message);
                    process_1.exit(1);
                }
            }
            if ((!updateResultRequestId && !updateErrorRequestId) || networkErrorException) {
                let sleepTime = 5000;
                await sleep(sleepTime);
                let i = 0;
                while (i < 11) {
                    let updateResultRequestId;
                    let updateErrorRequestId;
                    let networkErrorException;
                    let updateResult;
                    try {
                        updateResult = await client.updateStack(content, requestOptions);
                        updateResultRequestId = updateResult.RequestId;
                    }
                    catch (e) {
                        if (detailLog) {
                            logging_1.error('retry sync update stack error info is %s', e);
                        }
                        if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack') && skipIfNoChanges) {
                            await this.updateStackInfo(content['StackName'], content['StackId']);
                            logging_1.success('The stack is completely the same, there is no need to update.');
                            process_1.exit(0);
                        }
                        updateErrorRequestId = e.data.RequestId;
                        if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                            networkErrorException = true;
                        }
                        else if (updateErrorRequestId) {
                            logging_1.error('fail to sync update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, updateErrorRequestId, e.message);
                            process_1.exit(1);
                        }
                    }
                    if ((!updateResultRequestId && !updateErrorRequestId) || networkErrorException) {
                        if (sleepTime < 20000) {
                            sleepTime = sleepTime + 5000;
                        }
                        await sleep(sleepTime);
                        i++;
                        continue;
                    }
                    await this.updateStackInfo(stackName, updateResult.StackId);
                    logging_1.success(`\n ✅ The deployment(update stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(updateResult.RequestId), colors.blue(updateResult.StackId));
                    process_1.exit(0);
                }
                if (i >= 11) {
                    let statusArray = ["UPDATE_FAILED", "UPDATE_COMPLETE", "ROLLBACK_FAILED", "ROLLBACK_COMPLETE"];
                    const newStackIdInfo = await this.getStackById(localStackInfo.stackId);
                    let newStackIdInfoUpdateTime = newStackIdInfo.UpdateTime ? newStackIdInfo.UpdateTime : newStackIdInfo.CreateTime;
                    if (newStackIdInfo.Status == 'UPDATE_IN_PROGRESS' || newStackIdInfo.Status == 'ROLLBACK_IN_PROGRESS') {
                        await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                        logging_1.success(`\n ✅ The deployment(update stack) has completed!\nStackId: %s`, colors.blue(newStackIdInfo.StackId));
                        process_1.exit(0);
                    }
                    else if (statusArray.includes(newStackIdInfo.Status) && newStackIdInfoUpdateTime != stackUpdateTime) {
                        await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                        logging_1.success(`\n ✅ The deployment(update stack) has completed!\nStackId: %s`, colors.blue(newStackIdInfo.StackId));
                        process_1.exit(0);
                    }
                    else {
                        logging_1.error('fail to update stack, please check you service endpoint.');
                        process_1.exit(1);
                    }
                }
            }
            // Wait for the stack state to change after updating it
            await sleep(5000);
            const block = new display_1.RewritableBlock(stream);
            withDefaultPrinterObj = setInterval(async function () {
                await CdkToolkit.withDefaultPrinter(client, content, requestOptions, updateResult.StackId, block, 'update');
            }, 5000);
            while (true) {
                try {
                    await sleep(1000);
                    const getNewStackResult = await client.getStack(params, requestOptions);
                    const status = getNewStackResult.Status;
                    const statusReason = getNewStackResult.StatusReason;
                    const stackName = getNewStackResult.StackName;
                    const outputs = getNewStackResult.Outputs;
                    const newUpdateTime = getNewStackResult.UpdateTime ? getNewStackResult.UpdateTime : "";
                    if (newUpdateTime == originalUpdateTime) {
                        // stack update in progress or update did not begin
                        continue;
                    }
                    const regComplete = RegExp(/COMPLETE/);
                    const regFailed = RegExp(/FAILED/);
                    if (regComplete.exec(status) || regFailed.exec(status)) {
                        clearInterval(withDefaultPrinterObj);
                        await CdkToolkit.withDefaultPrinter(client, content, requestOptions, updateResult.StackId, block, 'update');
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
                        logging_1.success(`\n ✅ The deployment(sync update stack) has finished!\nstatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(getNewStackResult.StackId));
                        await this.updateStackInfo(stackName, updateResult.StackId);
                        if (regComplete.exec(status)) {
                            if (status.toString() == 'ROLLBACK_COMPLETE') {
                                process_1.exit(2);
                            }
                            process_1.exit(0);
                        }
                        else if (regFailed.exec(status)) {
                            process_1.exit(2);
                        }
                        break;
                    }
                    else {
                        await sleep(5000);
                    }
                }
                catch (e) {
                    if (detailLog) {
                        logging_1.error('retry sync update stack error info is %s', e);
                    }
                    if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack') && skipIfNoChanges) {
                        await this.updateStackInfo(content['StackName'], content['StackId']);
                        logging_1.success('The stack is completely the same, there is no need to update.');
                        process_1.exit(0);
                    }
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000);
                    }
                    else {
                        logging_1.error('fail to sync update stack: %s %s', e.code, e.message);
                        clearInterval(withDefaultPrinterObj);
                        process_1.exit(1);
                    }
                }
            }
        }
        catch (e) {
            if (detailLog) {
                logging_1.error('sync update stack error info is %s', e);
            }
            if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack') && skipIfNoChanges) {
                await this.updateStackInfo(content['StackName'], content['StackId']);
                logging_1.success('The stack is completely the same, there is no need to update.');
                process_1.exit(0);
            }
            if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack') && skipIfNoChanges) {
                await this.updateStackInfo(content['StackName'], content['StackId']);
                logging_1.success('The stack is completely the same, there is no need to update.');
                process_1.exit(0);
            }
            else {
                logging_1.error('fail to sync update stack: %s %s', e.code, e.message);
                clearInterval(withDefaultPrinterObj);
                process_1.exit(1);
            }
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
                        await this.updateStackInfo(stackName, DESTROY_STACK);
                        if (regComplete.exec(status)) {
                            process_1.exit(0);
                        }
                        else if (regFailed.exec(status)) {
                            process_1.exit(2);
                        }
                        break;
                    }
                }
                catch (e) {
                    if (e.code == 'Throttling.User' || e.code == 'Throttling' || e.code == 'Throttling.API') {
                        await sleep(30000);
                    }
                    else {
                        logging_1.error('fail to sync destroy stack: %s %s', e.code, e.message);
                        clearInterval(withDefaultPrinterObj);
                        process_1.exit(1);
                    }
                }
            }
        }
        catch (e) {
            logging_1.error('fail to sync destroy stack: %s %s', e.code, e.message);
            clearInterval(withDefaultPrinterObj);
            process_1.exit(1);
        }
    }
    async rosUpdateStack(client, content, requestOptions, stackName, localStackInfo, stackUpdateTime, detailLog, skipIfNoChanges) {
        let updateResultRequestId;
        let updateErrorRequestId;
        let networkErrorException;
        let updateResult;
        try {
            updateResult = await client.updateStack(content, requestOptions);
            updateResultRequestId = updateResult.RequestId;
        }
        catch (e) {
            if (detailLog) {
                logging_1.error('update stack error info is %s', e);
            }
            if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack') && skipIfNoChanges) {
                await this.updateStackInfo(content['StackName'], content['StackId']);
                logging_1.success('The stack is completely the same, there is no need to update.');
                process_1.exit(0);
            }
            updateErrorRequestId = e.data.RequestId;
            if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                networkErrorException = true;
            }
            else if (updateErrorRequestId) {
                logging_1.error('fail to sync update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, updateErrorRequestId, e.message);
                process_1.exit(1);
            }
        }
        if ((!updateResultRequestId && !updateErrorRequestId) || networkErrorException) {
            let sleepTime = 5000;
            await sleep(sleepTime);
            let i = 0;
            while (i < 11) {
                let updateResultRequestId;
                let updateErrorRequestId;
                let networkErrorException;
                let updateResult;
                try {
                    updateResult = await client.updateStack(content, requestOptions);
                    updateResultRequestId = updateResult.RequestId;
                }
                catch (e) {
                    if (detailLog) {
                        logging_1.error('retry update stack error info is %s', e);
                    }
                    if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack') && skipIfNoChanges) {
                        await this.updateStackInfo(content['StackName'], content['StackId']);
                        logging_1.success('The stack is completely the same, there is no need to update.');
                        process_1.exit(0);
                    }
                    updateErrorRequestId = e.data.RequestId;
                    if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                        networkErrorException = true;
                    }
                    else if (updateErrorRequestId) {
                        logging_1.error('fail to sync update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, updateErrorRequestId, e.message);
                        process_1.exit(1);
                    }
                }
                if ((!updateResultRequestId && !updateErrorRequestId) || networkErrorException) {
                    if (sleepTime < 20000) {
                        sleepTime = sleepTime + 5000;
                    }
                    await sleep(sleepTime);
                    i++;
                    continue;
                }
                await this.updateStackInfo(stackName, updateResult.StackId);
                logging_1.success(`\n ✅ The deployment(update stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(updateResult.RequestId), colors.blue(updateResult.StackId));
                process_1.exit(0);
            }
            if (i >= 11) {
                let statusArray = ["UPDATE_FAILED", "UPDATE_COMPLETE", "ROLLBACK_FAILED", "ROLLBACK_COMPLETE"];
                const newStackIdInfo = await this.getStackById(localStackInfo.stackId);
                let newStackIdInfoUpdateTime = newStackIdInfo.UpdateTime ? newStackIdInfo.UpdateTime : newStackIdInfo.CreateTime;
                if (newStackIdInfo.Status == 'UPDATE_IN_PROGRESS' || newStackIdInfo.Status == 'ROLLBACK_IN_PROGRESS') {
                    await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                    logging_1.success(`\n ✅ The deployment(update stack) has completed!\nStackId: %s`, colors.blue(newStackIdInfo.StackId));
                    process_1.exit(0);
                }
                else if (statusArray.includes(newStackIdInfo.Status) && newStackIdInfoUpdateTime != stackUpdateTime) {
                    await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                    logging_1.success(`\n ✅ The deployment(update stack) has completed!\nStackId: %s`, colors.blue(newStackIdInfo.StackId));
                    process_1.exit(0);
                }
                else {
                    logging_1.error('fail to update stack, please check you service endpoint.');
                    process_1.exit(1);
                }
            }
        }
        await this.updateStackInfo(stackName, updateResult.StackId);
        logging_1.success(`\n ✅ The deployment(update stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(updateResult.RequestId), colors.blue(updateResult.StackId));
    }
    async rosCreateStack(client, content, requestOptions, resourceGroupId, stackName, detailLog) {
        let createResultRequestId;
        let createErrorRequestId;
        let networkErrorException;
        let createResult;
        try {
            createResult = await client.createStack(content, requestOptions);
            createResultRequestId = createResult.RequestId;
        }
        catch (e) {
            if (detailLog) {
                logging_1.error('create stack error info is %s', e);
            }
            createErrorRequestId = e.data.RequestId;
            if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                networkErrorException = true;
            }
            else if (createErrorRequestId) {
                logging_1.error('fail to create stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, createErrorRequestId, e.message);
                process_1.exit(1);
            }
        }
        if ((!createResultRequestId && !createErrorRequestId) || networkErrorException) {
            let sleepTime = 5000;
            await sleep(sleepTime);
            let i = 0;
            while (i < 11) {
                let createResultRequestId;
                let createErrorRequestId;
                let networkErrorException;
                let createResult;
                try {
                    createResult = await client.createStack(content, requestOptions);
                    createResultRequestId = createResult.RequestId;
                }
                catch (e) {
                    if (detailLog) {
                        logging_1.error('retry create stack error info is %s', e);
                    }
                    createErrorRequestId = e.data.RequestId;
                    if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                        networkErrorException = true;
                    }
                    else if (createErrorRequestId) {
                        logging_1.error('fail to create stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, createErrorRequestId, e.message);
                        process_1.exit(1);
                    }
                }
                if ((!createResultRequestId && !createErrorRequestId) || networkErrorException) {
                    if (sleepTime < 20000) {
                        sleepTime = sleepTime + 5000;
                    }
                    await sleep(sleepTime);
                    i++;
                    continue;
                }
                await this.updateStackInfo(stackName, createResult.StackId);
                logging_1.success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(createResult.RequestId), colors.blue(createResult.StackId));
                process_1.exit(0);
            }
            if (i >= 11) {
                const newStackIdInfo = await this.getStackByName(stackName, resourceGroupId);
                if (newStackIdInfo) {
                    await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                    logging_1.success(`\n ✅ The deployment(create stack) has completed!\nStackId: %s`, colors.blue(newStackIdInfo.StackId));
                    process_1.exit(0);
                }
                else {
                    logging_1.error('fail to create stack, please check you service endpoint.');
                    process_1.exit(1);
                }
            }
        }
        await this.updateStackInfo(stackName, createResult.StackId);
        logging_1.success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(createResult.RequestId), colors.blue(createResult.StackId));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRvb2xraXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstdG9vbGtpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4Q0FBOEM7QUFDOUMsNkJBQTZCO0FBQzdCLDBDQUErQztBQUMvQywrQkFBNEI7QUFDNUIsNENBQStDO0FBQy9DLG1DQUEwQztBQUUxQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUN0RCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixpREFBNEM7QUFDNUMsdURBQTBEO0FBQzFELHlEQUE4RztBQUU5Ryx1Q0FBK0Q7QUFDL0QseUNBQXlEO0FBQ3pELHFDQUE2QjtBQUM3QixpQ0FBc0M7QUFDdEMsMkNBQWlEO0FBQ2pELCtCQUErQjtBQUUvQixNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVuRCxNQUFNLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQztBQUMxQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDeEIsTUFBTSxXQUFXLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN2QyxNQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztBQUNyQyxNQUFNLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztBQUNsQyxNQUFNLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQztBQUMvQyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7QUFDMUIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDO0FBQzVCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQztBQUM5QixNQUFNLGFBQWEsR0FBRyxTQUFTLENB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QUU7UUFDaEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7WUFDekIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN2QixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sU0FBUyxHQUFHLEdBQUc7YUFDaEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQzthQUMxRSxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sUUFBUSxHQUFHLFNBQVMsR0FBRyxPQUFPLENBQUM7S0FDekM7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFoQkQsMENBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ3V0aWwnO1xuaW1wb3J0IHtkZWNpcGhlciwgY2lwaGVyfSBmcm9tICcuL3V0aWwvY2lwaGVyJztcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICd1dGlsJztcbmltcG9ydCB7UmV3cml0YWJsZUJsb2NrfSBmcm9tICcuL3V0aWwvZGlzcGxheSc7XG5pbXBvcnQge2lzU3RyaW5nLCBpc051bWJlcn0gZnJvbSAnbG9kYXNoJztcblxuY29uc3Qgcm9zQ2xpZW50ID0gcmVxdWlyZSgnQGFsaWNsb3VkL3Jvcy0yMDE5LTA5LTEwJyk7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuaW1wb3J0IHtleGVjIGFzIF9leGVjfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBDcmVkZW50aWFscywge0NvbmZpZ30gZnJvbSAnQGFsaWNsb3VkL2NyZWRlbnRpYWxzJztcbmltcG9ydCB7Q2xvdWRBc3NlbWJseSwgRGVmYXVsdFNlbGVjdGlvbiwgRXh0ZW5kZWRTdGFja1NlbGVjdGlvbiwgU3RhY2tDb2xsZWN0aW9ufSBmcm9tICcuL2FwaS9jbG91ZC1hc3NlbWJseSc7XG5pbXBvcnQge0Nsb3VkRXhlY3V0YWJsZX0gZnJvbSAnLi9hcGkvY2xvdWQtZXhlY3V0YWJsZSc7XG5pbXBvcnQge2RhdGEsIGVycm9yLCBwcmludCwgc3VjY2Vzcywgd2FybmluZ30gZnJvbSAnLi9sb2dnaW5nJztcbmltcG9ydCB7Q29uZmlndXJhdGlvbiwgUFJPSkVDVF9DT05GSUd9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHtleGl0fSBmcm9tICdwcm9jZXNzJztcbmltcG9ydCB7cHJpbnRTdGFja0RpZmZ9IGZyb20gJy4vZGlmZic7XG5pbXBvcnQge2Rlc2VyaWFsaXplU3RydWN0dXJlfSBmcm9tICcuL3NlcmlhbGl6ZSc7XG5pbXBvcnQge3Byb21pc2lmeX0gZnJvbSAndXRpbCc7XG5cbmNvbnN0IGdlbmVyYXRlU2FmZUlkID0gcmVxdWlyZSgnZ2VuZXJhdGUtc2FmZS1pZCcpO1xuXG5jb25zdCBDT05GSUdfTkFNRSA9ICdhY2NvdW50LmNvbmZpZy5qc29uJztcbmNvbnN0IExPQ0FMX1BBVEggPSAnLi8nO1xuY29uc3QgR0xPQkFMX1BBVEggPSBfX2Rpcm5hbWUgKyAnLy4uLyc7XG5jb25zdCBTVEFDS19JTkZPID0gJ3N0YWNrLmluZm8uanNvbic7XG5jb25zdCBERVBMT1lfU1RBQ0tfSURfTEVOR1RIID0gMzY7XG5jb25zdCBDTElfQ09ORklHX0ZJTEUgPSAnLy5hbGl5dW4vY29uZmlnLmpzb24nO1xuY29uc3QgSU5JVF9TVEFDSyA9ICdpbml0JztcbmNvbnN0IFNZTlRIX1NUQUNLID0gJ3N5bnRoJztcbmNvbnN0IERFUExPWV9TVEFDSyA9ICdkZXBsb3knO1xuY29uc3QgREVTVFJPWV9TVEFDSyA9ICdkZXN0cm95JztcbmNvbnN0IFBBQ0tBR0VfSlNPTiA9IF9fZGlybmFtZSArICcvLi4vcGFja2FnZS5qc29uJztcbmNvbnN0IE9VVFBVVFNfSlNPTiA9ICdzdGFjay5vdXRwdXRzLmpzb24nO1xuXG5jb25zdCBleGVjID0gcHJvbWlzaWZ5KF9leGVjKTtcblxuY29uc3QgcmVxdWVzdE9wdGlvbnM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1VzZXItQWdlbnQnOiBcIlJPUy1DTEktXCIgKyBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhQQUNLQUdFX0pTT04pLnRvU3RyaW5nKCkpWyd2ZXJzaW9uJ10gKyBcIjo6XCIgKyByZWFkTGFuZ3VhZ2VJbmZvKClcbiAgICB9LFxuICAgIHRpbWVvdXQ6IDkwMDAwXG59O1xuXG5jb25zdCBzbGVlcCA9IGZ1bmN0aW9uIChtczogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59O1xuXG5cbmNvbnN0IHN0cmVhbSA9IHByb2Nlc3Muc3Rkb3V0O1xuXG5cbmxldCB3aXRoRGVmYXVsdFByaW50ZXJPYmo6IGFueTtcblxuXG5leHBvcnQgaW50ZXJmYWNlIENka1Rvb2xraXRQcm9wcyB7XG4gICAgLyoqXG4gICAgICogVGhlIENsb3VkIEV4ZWN1dGFibGVcbiAgICAgKi9cbiAgICBjbG91ZEV4ZWN1dGFibGU6IENsb3VkRXhlY3V0YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gYmUgdmVyYm9zZVxuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICB2ZXJib3NlPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIERvbid0IHN0b3Agb24gZXJyb3IgbWV0YWRhdGFcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgaWdub3JlRXJyb3JzPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRyZWF0IHdhcm5pbmdzIGluIG1ldGFkYXRhIGFzIGVycm9yc1xuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBzdHJpY3Q/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXBwbGljYXRpb24gY29uZmlndXJhdGlvbiAoc2V0dGluZ3MgYW5kIGNvbnRleHQpXG4gICAgICovXG4gICAgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbjtcbn1cblxuLyoqXG4gKiBUb29sa2l0IGxvZ2ljXG4gKlxuICogVGhlIHRvb2xraXQgcnVucyB0aGUgYGNsb3VkRXhlY3V0YWJsZWAgdG8gb2J0YWluIGEgY2xvdWQgYXNzZW1ibHlcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBDZGtUb29sa2l0IHtcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBnZXRKc29uKGZpbGVOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCBhbGxvd2VkRW1wdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBMT0NBTF9QQVRIICsgZmlsZU5hbWU7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlKVtrZXldO1xuICAgICAgICB9IGVsc2UgaWYgKGZpbGVOYW1lID09PSBTVEFDS19JTkZPKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGZpbGVQYXRoID0gR0xPQkFMX1BBVEggKyBmaWxlTmFtZTtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGUpW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhbGxvd2VkRW1wdHkpIHtcbiAgICAgICAgICAgIGVycm9yKFwiUGxlYXNlIHVzZSAncm9zLWNkayBjb25maWcgKC1nKScgdG8gc2V0IHlvdXIgYWNjb3VudCBjb25maWd1cmF0aW9uIGZpcnN0bHkhXCIpO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcHJvcHM6IENka1Rvb2xraXRQcm9wcykge1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRSb3NDbGllbnQoKSB7XG4gICAgICAgIGxldCBtb2RlVHlwZSA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3R5cGUnLCB0cnVlKVxuICAgICAgICBsZXQgZW5kcG9pbnQgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdlbmRwb2ludCcsIHRydWUpXG4gICAgICAgIGxldCBjb25maWdJbmZvOiBhbnk7XG4gICAgICAgIGxldCBjbGllbnQ7XG4gICAgICAgIHN3aXRjaCAobW9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Vjc19yYW1fcm9sZSc6XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JvbGVOYW1lJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0cyc6XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleUlkJykpLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKSxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnc2VjdXJpdHlUb2tlbicpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmFtX3JvbGVfYXJuJzpcbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyYW1fcm9sZV9hcm4nLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5SWQnKSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5U2VjcmV0JykpLFxuICAgICAgICAgICAgICAgICAgICByb2xlQXJuOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyb2xlQXJuJyksXG4gICAgICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncm9sZVNlc3Npb25OYW1lJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FjY2Vzc19rZXknOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FjY2Vzc19rZXknLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5SWQnKSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5U2VjcmV0JykpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZW5kcG9pbnQgPSBlbmRwb2ludCA/IGVuZHBvaW50IDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbSc7XG4gICAgICAgIGxldCBuZXdBY2Nlc3NLZXlJZDogc3RyaW5nO1xuICAgICAgICBsZXQgbmV3QWNjZXNzS2V5U2VjcmV0OiBzdHJpbmc7XG4gICAgICAgIGxldCBuZXdTZWN1cml0eVRva2VuOiBzdHJpbmc7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbmV3QWNjZXNzS2V5SWQgPSBuZXdBY2Nlc3NLZXlJZCA/IG5ld0FjY2Vzc0tleUlkIDogcHJvY2Vzcy5lbnYuQUNDRVNTX0tFWV9JRFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ld0FjY2Vzc0tleVNlY3JldCA9IG5ld0FjY2Vzc0tleVNlY3JldCA/IG5ld0FjY2Vzc0tleVNlY3JldCA6IHByb2Nlc3MuZW52LkFDQ0VTU19LRVlfU0VDUkVUXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbmV3U2VjdXJpdHlUb2tlbiA9IG5ld1NlY3VyaXR5VG9rZW4gPyBuZXdTZWN1cml0eVRva2VuIDogcHJvY2Vzcy5lbnYuU0VDVVJJVFlfVE9LRU5cbiAgICAgICAgaWYgKGNvbmZpZ0luZm8pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3JlZCA9IG5ldyBDcmVkZW50aWFscyhjb25maWdJbmZvKTtcbiAgICAgICAgICAgICAgICBuZXdBY2Nlc3NLZXlJZCA9IGF3YWl0IGNyZWQuZ2V0QWNjZXNzS2V5SWQoKTtcbiAgICAgICAgICAgICAgICBuZXdBY2Nlc3NLZXlTZWNyZXQgPSBhd2FpdCBjcmVkLmdldEFjY2Vzc0tleVNlY3JldCgpO1xuICAgICAgICAgICAgICAgIG5ld1NlY3VyaXR5VG9rZW4gPSBhd2FpdCBjcmVkLmdldFNlY3VyaXR5VG9rZW4oKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBjcmVkZW50aWFsIGluZm9ybWF0aW9uIHlvdSBpbXBvcnQgZnJvbSBDTEkgY29uZmlnIScgKyBlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuZXdBY2Nlc3NLZXlJZCB8fCAhbmV3QWNjZXNzS2V5U2VjcmV0KSB7XG4gICAgICAgICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIG9yIHNldCBlbnZpcm9ubWVudCB0byBzZXQgeW91ciBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZmlyc3RseSFcIik7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9IGVsc2UgaWYgKCFuZXdTZWN1cml0eVRva2VuKSB7XG4gICAgICAgICAgICBjbGllbnQgPSBuZXcgcm9zQ2xpZW50KHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IG5ld0FjY2Vzc0tleUlkLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogbmV3QWNjZXNzS2V5U2VjcmV0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsaWVudCA9IG5ldyByb3NDbGllbnQoe1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBlbmRwb2ludCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogbmV3QWNjZXNzS2V5SWQsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBuZXdBY2Nlc3NLZXlTZWNyZXQsXG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogbmV3U2VjdXJpdHlUb2tlblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGh0dHBNb2R1bGUgPSBjbGllbnQuZW5kcG9pbnQuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSA/IGh0dHBzIDogaHR0cDtcbiAgICAgICAgY2xpZW50LmtlZXBBbGl2ZUFnZW50ID0gbmV3IGh0dHBNb2R1bGUuQWdlbnQoe1xuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgICAga2VlcEFsaXZlTXNlY3M6IDE1MDAwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb25maWcoZ2xvYmFsOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBjb25maWdTYXZlUGF0aCA9IChnbG9iYWwgPyBHTE9CQUxfUEFUSCA6IExPQ0FMX1BBVEgpICsgQ09ORklHX05BTUU7XG4gICAgICAgIGxldCBzb3VyY2VNb2RlVHlwZTogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBzb3VyY2VFbmRwb2ludDogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBzb3VyY2VSZWdpb25JZDogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBzb3VyY2VBY2Nlc3NLZXlJZDogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBzb3VyY2VBY2Nlc3NLZXlTZWNyZXQ6IHN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgc291cmNlU2VjdXJpdHlUb2tlbjogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBzb3VyY2VSb2xlQXJuOiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNvdXJjZVJvbGVTZXNzaW9uTmFtZTogc3RyaW5nID0gJyc7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGNvbmZpZ1NhdmVQYXRoKSkge1xuICAgICAgICAgICAgbGV0IGNvbmZpZ0ZpbGUgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjb25maWdTYXZlUGF0aCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBzb3VyY2VNb2RlVHlwZSA9IGNvbmZpZ0ZpbGVbJ3R5cGUnXVxuICAgICAgICAgICAgc291cmNlRW5kcG9pbnQgPSBjb25maWdGaWxlWydlbmRwb2ludCddXG4gICAgICAgICAgICBzb3VyY2VSZWdpb25JZCA9IGNvbmZpZ0ZpbGVbJ3JlZ2lvbklkJ11cbiAgICAgICAgICAgIHNvdXJjZUFjY2Vzc0tleUlkID0gY29uZmlnRmlsZVsnYWNjZXNzS2V5SWQnXVxuICAgICAgICAgICAgc291cmNlQWNjZXNzS2V5U2VjcmV0ID0gY29uZmlnRmlsZVsnYWNjZXNzS2V5U2VjcmV0J11cbiAgICAgICAgICAgIHNvdXJjZVNlY3VyaXR5VG9rZW4gPSBjb25maWdGaWxlWydzZWN1cml0eVRva2VuJ11cbiAgICAgICAgICAgIHNvdXJjZVJvbGVBcm4gPSBjb25maWdGaWxlWydyb2xlQXJuJ11cbiAgICAgICAgICAgIHNvdXJjZVJvbGVTZXNzaW9uTmFtZSA9IGNvbmZpZ0ZpbGVbJ3JvbGVTZXNzaW9uTmFtZSddXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vZGVUeXBlT2JqID0ge1xuICAgICAgICAgICAgZWNzX3JhbV9yb2xlOiAnRWNzUmFtUm9sZScsXG4gICAgICAgICAgICBzdHM6ICdTdHNUb2tlbicsXG4gICAgICAgICAgICByYW1fcm9sZV9hcm46ICdSYW1Sb2xlQXJuJyxcbiAgICAgICAgICAgIGFjY2Vzc19rZXk6ICdBSydcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGxldCBkZWZhdWx0TW9kZVR5cGUgPSBzb3VyY2VNb2RlVHlwZSA/IG1vZGVUeXBlT2JqW3NvdXJjZU1vZGVUeXBlXSA6ICcnXG4gICAgICAgIGxldCBkZWZhdWx0RW5kcG9pbnQgPSBzb3VyY2VFbmRwb2ludCA/IHNvdXJjZUVuZHBvaW50IDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbSdcbiAgICAgICAgbGV0IGRlZmF1bHRSZWdpb25JZCA9IHNvdXJjZVJlZ2lvbklkID8gc291cmNlUmVnaW9uSWQgOiAnY24taGFuZ3pob3UnXG4gICAgICAgIGxldCBtb2RlVHlwZSA9IFsnQUsnLCAnU3RzVG9rZW4nLCAnUmFtUm9sZUFybicsICdFY3NSYW1Sb2xlJ11cblxuXG4gICAgICAgIGxldCBlbmRwb2ludCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgRW5kcG9pbnQob3B0aW9uYWwsIFske2RlZmF1bHRFbmRwb2ludC50b1N0cmluZygpfV0pOmAsIHtkZWZhdWx0SW5wdXQ6IGRlZmF1bHRFbmRwb2ludH0pO1xuICAgICAgICBsZXQgcmVnaW9uSWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYFJlZ2lvbklkKG9wdGlvbmFsLCBbJHtkZWZhdWx0UmVnaW9uSWQudG9TdHJpbmcoKX1dKTpgLCB7ZGVmYXVsdElucHV0OiBkZWZhdWx0UmVnaW9uSWR9KTtcbiAgICAgICAgbGV0IG1vZGVJbmRleCA9IHJlYWRsaW5lU3luYy5rZXlJblNlbGVjdChtb2RlVHlwZSwgYEF1dGhlbnRpY2F0ZSBtb2RlIFske2RlZmF1bHRNb2RlVHlwZS50b1N0cmluZygpfV06YCk7XG4gICAgICAgIGxldCBpbnB1dENvbmZpZ0luZm86IGFueSA9IHt9O1xuICAgICAgICBsZXQgY2hlY2tDb21tYW5kOiBzdHJpbmc7XG4gICAgICAgIGxldCBjdXJsQ29tbWFuZDogc3RyaW5nO1xuICAgICAgICBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgICAgICAgICAgICAgIGNoZWNrQ29tbWFuZCA9ICdwb3dlcnNoZWxsIC1Db21tYW5kIFwiKGN1cmwgLVVSaSBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLykuU3RhdHVzQ29kZVwiJztcbiAgICAgICAgICAgICAgICBjdXJsQ29tbWFuZCA9ICdwb3dlcnNoZWxsIC1Db21tYW5kIFwiKGN1cmwgLVVSaSBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLykuQ29udGVudFwiJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hlY2tDb21tYW5kID0gJ2N1cmwgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8gLW8gL2Rldi9udWxsIC1zIC13ICV7aHR0cF9jb2RlfSc7XG4gICAgICAgICAgICAgICAgY3VybENvbW1hbmQgPSAnY3VybCBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtzdGRvdXQ6IGNoZWNrU3Rkb3V0fSA9IGF3YWl0IGV4ZWMoY2hlY2tDb21tYW5kKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tTdGRvdXQudHJpbSgpICE9PSAnMjAwJykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBVc2UgRWNzUmFtUm9sZSBjb25maWcsIFBsZWFzZSBiaW5kIEVjc1JhbVJvbGUgdG8gdGhlIGhvc3QuJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBVc2UgRWNzUmFtUm9sZSBjb25maWcsIFBsZWFzZSBiaW5kIEVjc1JhbVJvbGUgdG8gdGhlIGhvc3QhJyArIGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7c3Rkb3V0OiBjdXJsU3Rkb3V0fSA9IGF3YWl0IGV4ZWMoY3VybENvbW1hbmQpO1xuICAgICAgICAgICAgbGV0IHJvbGVOYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBSb2xlTmFtZSwgVGhlIGNvbmZpZ3VyZWQgcm9sZSBvZiB0aGUgaG9zdDogWyR7Y3VybFN0ZG91dC50cmltKCl9XWAsIHtkZWZhdWx0SW5wdXQ6IGN1cmxTdGRvdXQudHJpbSgpfSk7XG4gICAgICAgICAgICBpbnB1dENvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgcm9sZU5hbWU6IHJvbGVOYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlJZDogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleVNlY3JldDogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHNlY3VyaXR5VG9rZW46IHN0cmluZztcbiAgICAgICAgICAgIGlmIChzb3VyY2VNb2RlVHlwZSA9PT0gJ3N0cycpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFjY2Vzc0tleUlkID0gZGVzZW5zaXRpemF0aW9uKGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleUlkLnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QWNjZXNzS2V5U2VjcmV0ID0gZGVzZW5zaXRpemF0aW9uKGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleVNlY3JldC50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdFNlY3VyaXR5VG9rZW4gPSBkZXNlbnNpdGl6YXRpb24oYXdhaXQgZGVjaXBoZXIoc291cmNlU2VjdXJpdHlUb2tlbi50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgQWNjZXNzS2V5SWQgWyR7ZGVmYXVsdEFjY2Vzc0tleUlkfV06YCwge1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWNob0JhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbnB1dDogYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5SWQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYEFjY2Vzc0tleVNlY3JldCBbJHtkZWZhdWx0QWNjZXNzS2V5U2VjcmV0fV06YCwge1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWNob0JhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbnB1dDogYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5U2VjcmV0LnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbiA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgU2VjdXJpdHlUb2tlbiBbJHtkZWZhdWx0U2VjdXJpdHlUb2tlbn1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZVNlY3VyaXR5VG9rZW4udG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ0FjY2Vzc0tleUlkOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ0FjY2Vzc0tleVNlY3JldDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbiA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignU2VjdXJpdHlUb2tlbjonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dENvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlJZCksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5U2VjcmV0KSxcbiAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBhd2FpdCBjaXBoZXIoc2VjdXJpdHlUb2tlbilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1JhbVJvbGVBcm4nKSB7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5SWQ6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlTZWNyZXQ6IHN0cmluZztcbiAgICAgICAgICAgIGxldCByb2xlQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgcm9sZVNlc3Npb25OYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICBpZiAoc291cmNlTW9kZVR5cGUgPT09ICdyYW1fcm9sZV9hcm4nKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRBY2Nlc3NLZXlJZCA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlJZC50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFjY2Vzc0tleVNlY3JldCA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlTZWNyZXQudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRSb2xlQXJuID0gc291cmNlUm9sZUFybi50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRSb2xlU2Vzc2lvbk5hbWUgPSBzb3VyY2VSb2xlU2Vzc2lvbk5hbWUudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBBY2Nlc3NLZXlJZCBbJHtkZWZhdWx0QWNjZXNzS2V5SWR9XTpgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFY2hvQmFjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlJZC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgQWNjZXNzS2V5U2VjcmV0IFske2RlZmF1bHRBY2Nlc3NLZXlTZWNyZXR9XTpgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFY2hvQmFjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlTZWNyZXQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByb2xlQXJuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBSb2xlQXJuIFske2RlZmF1bHRSb2xlQXJufV06YCwge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGRlZmF1bHRSb2xlQXJuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBSb2xlU2Vzc2lvbk5hbWUgWyR7ZGVmYXVsdFJvbGVTZXNzaW9uTmFtZX1dOmAsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbnB1dDogZGVmYXVsdFJvbGVTZXNzaW9uTmFtZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ0FjY2Vzc0tleUlkOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ0FjY2Vzc0tleVNlY3JldDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgcm9sZUFybiA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignUm9sZUFybihlZzogYWNzOnJhbTo6KioqKioqOnJvbGUvKioqKioqKTonKTtcbiAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1JvbGVTZXNzaW9uTmFtZTonKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleUlkKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlTZWNyZXQpLFxuICAgICAgICAgICAgICAgIHJvbGVBcm46IHJvbGVBcm4sXG4gICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiByb2xlU2Vzc2lvbk5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0FLJykge1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleUlkOiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5U2VjcmV0OiBzdHJpbmc7XG4gICAgICAgICAgICBpZiAoc291cmNlTW9kZVR5cGUgPT09ICdhY2Nlc3Nfa2V5Jykge1xuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QWNjZXNzS2V5SWQgPSBkZXNlbnNpdGl6YXRpb24oYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5SWQudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRBY2Nlc3NLZXlTZWNyZXQgPSBkZXNlbnNpdGl6YXRpb24oYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5U2VjcmV0LnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBBY2Nlc3NLZXlJZCBbJHtkZWZhdWx0QWNjZXNzS2V5SWR9XTpgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFY2hvQmFjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlJZC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgQWNjZXNzS2V5U2VjcmV0IFske2RlZmF1bHRBY2Nlc3NLZXlTZWNyZXR9XTpgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFY2hvQmFjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlTZWNyZXQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ0FjY2Vzc0tleUlkOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ0FjY2Vzc0tleVNlY3JldDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dENvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FjY2Vzc19rZXknLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5SWQpLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleVNlY3JldClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBjZXJ0aWZpY2F0aW9uIG1ldGhvZCBtdXN0IGJlIHNlbGVjdGVkJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0Q29uZmlnSW5mby5lbmRwb2ludCA9IGVuZHBvaW50XG4gICAgICAgIGlucHV0Q29uZmlnSW5mby5yZWdpb25JZCA9IHJlZ2lvbklkXG4gICAgICAgIGxldCBmaWxlID0gcGF0aC5qb2luKGNvbmZpZ1NhdmVQYXRoKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlLCBKU09OLnN0cmluZ2lmeShpbnB1dENvbmZpZ0luZm8sIG51bGwsICdcXHQnKSk7XG4gICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgWW91ciBjZGsgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkhYCk7XG4gICAgICAgIGV4aXQoMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbmZpZ1NldChvcHRpb25zOiBDb25maWdTZXRPcHRpb25zKSB7XG4gICAgICAgIGxldCBjb25maWdTYXZlUGF0aCA9IChvcHRpb25zLmdsb2JhbCA/IEdMT0JBTF9QQVRIIDogTE9DQUxfUEFUSCkgKyBDT05GSUdfTkFNRTtcbiAgICAgICAgbGV0IG1vZGVUeXBlID0gb3B0aW9ucy5tb2RlO1xuICAgICAgICBsZXQgY29uZmlnSW5mbzogYW55ID0ge307XG4gICAgICAgIGxldCBhayA9IG9wdGlvbnMuYWsgPyBvcHRpb25zLmFrIDogJyc7XG4gICAgICAgIGxldCBzayA9IG9wdGlvbnMuc2sgPyBvcHRpb25zLnNrIDogJyc7XG4gICAgICAgIGxldCBzdHNUb2tlbiA9IG9wdGlvbnMuc3RzID8gb3B0aW9ucy5zdHMgOiAnJztcbiAgICAgICAgbGV0IHJhbVJvbGVBcm4gPSBvcHRpb25zLnJhbVJvbGVBcm4gPyBvcHRpb25zLnJhbVJvbGVBcm4gOiAnJztcbiAgICAgICAgbGV0IHJvbGVTZXNzaW9uTmFtZSA9IG9wdGlvbnMucm9sZVNlc3Npb25OYW1lID8gb3B0aW9ucy5yb2xlU2Vzc2lvbk5hbWUgOiAnJztcbiAgICAgICAgbGV0IHJhbVJvbGVOYW1lID0gb3B0aW9ucy5yYW1Sb2xlTmFtZSA/IG9wdGlvbnMucmFtUm9sZU5hbWUgOiAnJztcbiAgICAgICAgaWYgKG1vZGVUeXBlID09PSAnQUsnKSB7XG4gICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFrKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihzaylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGUgPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhayksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoc2spLFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGNpcGhlcihzdHNUb2tlbilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGUgPT09ICdSYW1Sb2xlQXJuJykge1xuICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFrKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihzayksXG4gICAgICAgICAgICAgICAgcm9sZUFybjogcmFtUm9sZUFybixcbiAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHJvbGVTZXNzaW9uTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XG4gICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlY3NfcmFtX3JvbGUnLFxuICAgICAgICAgICAgICAgIHJvbGVOYW1lOiByYW1Sb2xlTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGF1dGhlbnRpY2F0ZSBtb2RlIG11c3QgYmUgaW4gKEFLfFN0c1Rva2VufFJhbVJvbGVBcm58RWNzUmFtUm9sZSknLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbGUgPSBwYXRoLmpvaW4oY29uZmlnU2F2ZVBhdGgpO1xuICAgICAgICBjb25maWdJbmZvLnJlZ2lvbklkID0gb3B0aW9ucy5yZWdpb247XG4gICAgICAgIGNvbmZpZ0luZm8uZW5kcG9pbnQgPSBvcHRpb25zLmVuZHBvaW50O1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KGNvbmZpZ0luZm8sIG51bGwsICdcXHQnKSk7XG4gICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgWW91ciBjZGsgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkhYCk7XG4gICAgICAgIGV4aXQoMCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYXN5bmMgbG9hZENsaUNvbmZpZyhvcHRpb25zOiBMb2FkQ29uZmlnT3B0aW9ucykge1xuICAgICAgICBsZXQgY29uZmlnU2F2ZVBhdGggPSAob3B0aW9ucy5nbG9iYWwgPyBHTE9CQUxfUEFUSCA6IExPQ0FMX1BBVEgpICsgQ09ORklHX05BTUU7XG4gICAgICAgIGxldCBjb25maWd1cmVJbmZvcyA9IGF3YWl0IHRoaXMuZ2V0Q2xpQ29uZmlnKG9wdGlvbnMubG9hZEZpbGVQYXRoKVxuICAgICAgICBsZXQgbW9kZVR5cGUgPSBPYmplY3Qua2V5cyhjb25maWd1cmVJbmZvcyk7XG4gICAgICAgIGxldCBtb2RlSW5kZXggPSByZWFkbGluZVN5bmMua2V5SW5TZWxlY3QobW9kZVR5cGUsICdTZWxlY3QgYXV0aGVudGljYXRlIG1vZGU6Jyk7XG4gICAgICAgIGxldCBwcm9maWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBwcm9maWxlQ29uZmlnOiBhbnkgPSB7fTtcbiAgICAgICAgaWYgKG1vZGVJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGNlcnRpZmljYXRpb24gbWV0aG9kIG11c3QgYmUgc2VsZWN0ZWQnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0FLJykge1xuICAgICAgICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuQUsubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLlN0c1Rva2VuLm1hcCgoaXRlbTogeyBuYW1lOiBhbnk7IH0pID0+IGl0ZW0ubmFtZSlcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgICAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLlJhbVJvbGVBcm4ubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdFY3NSYW1Sb2xlJykge1xuICAgICAgICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuRWNzUmFtUm9sZS5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb2ZpbGVJbmRleCA9IHJlYWRsaW5lU3luYy5rZXlJblNlbGVjdChwcm9maWxlTmFtZXMsICdTZWxlY3QgQXV0aGVudGljYXRlIHByb2ZpbGUgbmFtZTonKTtcbiAgICAgICAgaWYgKHByb2ZpbGVJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGNlcnRpZmljYXRpb24gcHJvZmlsZSBtdXN0IGJlIHNlbGVjdGVkJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbmRwb2ludCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2VuZHBvaW50JywgdHJ1ZSlcbiAgICAgICAgbGV0IHJlZ2lvbklkO1xuICAgICAgICBsZXQgY29uZmlnSW5mbzogYW55ID0ge307XG4gICAgICAgIGVuZHBvaW50ID0gZW5kcG9pbnQgPyBlbmRwb2ludCA6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nO1xuICAgICAgICBzd2l0Y2ggKG1vZGVUeXBlW21vZGVJbmRleF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ0FLJzpcbiAgICAgICAgICAgICAgICBwcm9maWxlQ29uZmlnID0gY29uZmlndXJlSW5mb3MuQUsuZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddIHx8ICFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhY2Nlc3NLZXlJZCBvciBhY2Nlc3NLZXlTZWNyZXQgQ2Fubm90IGJlIGVtcHR5IScsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1N0c1Rva2VuJzpcbiAgICAgICAgICAgICAgICBwcm9maWxlQ29uZmlnID0gY29uZmlndXJlSW5mb3MuU3RzVG9rZW4uZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddIHx8ICFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSB8fCAhcHJvZmlsZUNvbmZpZ1snc2VjdXJpdHlUb2tlbiddKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGFjY2Vzc0tleUlkLCBhY2Nlc3NLZXlTZWNyZXQgb3Igc2VjdXJpdHlUb2tlbiBDYW5ub3QgYmUgZW1wdHkhJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddKSxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ3NlY3VyaXR5VG9rZW4nXSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUmFtUm9sZUFybic6XG4gICAgICAgICAgICAgICAgcHJvZmlsZUNvbmZpZyA9IGNvbmZpZ3VyZUluZm9zLlJhbVJvbGVBcm4uZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddIHx8ICFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSB8fCAhcHJvZmlsZUNvbmZpZ1sncm9sZUFybiddIHx8ICFwcm9maWxlQ29uZmlnWydyb2xlU2Vzc2lvbk5hbWUnXSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhY2Nlc3NLZXlJZCwgYWNjZXNzS2V5U2VjcmV0LCByb2xlQXJuIG9yIHJvbGVTZXNzaW9uTmFtZSBDYW5ub3QgYmUgZW1wdHkhJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JhbV9yb2xlX2FybicsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddKSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFybjogcHJvZmlsZUNvbmZpZ1sncm9sZUFybiddLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHByb2ZpbGVDb25maWdbJ3JvbGVTZXNzaW9uTmFtZSddXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Vjc1JhbVJvbGUnOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5FY3NSYW1Sb2xlLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmICghcHJvZmlsZUNvbmZpZ1sncm9sZU5hbWUnXSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCByb2xlTmFtZSBDYW5ub3QgYmUgZW1wdHkhJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiBwcm9maWxlQ29uZmlnWydyb2xlTmFtZSddXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZWdpb25JZCA9IHByb2ZpbGVDb25maWdbJ3JlZ2lvbiddID8gcHJvZmlsZUNvbmZpZ1sncmVnaW9uJ10gOiAnY24taGFuZ3pob3UnO1xuICAgICAgICBjb25maWdJbmZvLnJlZ2lvbklkID0gcmVnaW9uSWRcbiAgICAgICAgY29uZmlnSW5mby5lbmRwb2ludCA9IGVuZHBvaW50XG4gICAgICAgIGxldCBmaWxlID0gcGF0aC5qb2luKGNvbmZpZ1NhdmVQYXRoKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlLCBKU09OLnN0cmluZ2lmeShjb25maWdJbmZvLCBudWxsLCAnXFx0JykpO1xuICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFlvdXIgY2RrIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gbG9hZCBmcm9tIEFsaXl1biBDbGkgY29uZmlndXJhdGlvbiBzYXZlZCBzdWNjZXNzZnVsbHkgJXMgJXMhYCwgbW9kZVR5cGVbbW9kZUluZGV4XSwgcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICBleGl0KDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsaXN0KHNlbGVjdG9yczogc3RyaW5nW10pIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yTGlzdChzZWxlY3RvcnMpO1xuICAgICAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCk7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gc3RhY2tJbmZvLnN0YXR1c1xuICAgICAgICAgICAgZGF0YShzdGFjay5pZCwgc3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3ludGhlc2l6ZSB0aGUgZ2l2ZW4gc2V0IG9mIHN0YWNrcyAoY2FsbGVkIHdoZW4gdGhlIHVzZXIgcnVucyAnY2RrIHN5bnRoJylcbiAgICAgKlxuICAgICAqIElOUFVUOiBTdGFjayBuYW1lcyBjYW4gYmUgc3VwcGxpZWQgdXNpbmcgYSBnbG9iIGZpbHRlci4gSWYgbm8gc3RhY2tzIGFyZVxuICAgICAqIGdpdmVuLCBhbGwgc3RhY2tzIGZyb20gdGhlIGFwcGxpY2F0aW9uIGFyZSBpbXBsaWN0bHkgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBPVVRQVVQ6IElmIG1vcmUgdGhhbiBvbmUgc3RhY2sgZW5kcyB1cCBiZWluZyBzZWxlY3RlZCwgYW4gb3V0cHV0IGRpcmVjdG9yeVxuICAgICAqIHNob3VsZCBiZSBzdXBwbGllZCwgd2hlcmUgdGhlIHRlbXBsYXRlcyB3aWxsIGJlIHdyaXR0ZW4uXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHN5bnRoKHN0YWNrTmFtZXM6IHN0cmluZ1tdLCBleGNsdXNpdmVseTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRpZmYoc3RhY2tOYW1lcywgZXhjbHVzaXZlbHkpO1xuXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBzaW5nbGUgc3RhY2ssIHByaW50IGl0IHRvIFNURE9VVFxuICAgICAgICBpZiAoc3RhY2tzLnN0YWNrQ291bnQgPT09IDEpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrcy5maXJzdFN0YWNrLmlkLCBTWU5USF9TVEFDSyk7XG4gICAgICAgICAgICByZXR1cm4gc3RhY2tzLmZpcnN0U3RhY2sudGVtcGxhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFjay5pZCwgU1lOVEhfU1RBQ0spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNJbnRlZ01vZGUgPSBwcm9jZXNzLmVudi5DREtfSU5URUdfTU9ERSA9PT0gJzEnO1xuICAgICAgICBpZiAoaXNJbnRlZ01vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFja3Muc3RhY2tBcnRpZmFjdHMubWFwKChzKSA9PiBzLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdCBvdXRwdXR0aW5nIHRlbXBsYXRlIHRvIHN0ZG91dCwgbGV0J3MgZXhwbGFpbiB0aGluZ3MgdG8gdGhlIHVzZXIgYSBsaXR0bGUgYml0Li4uXG4gICAgICAgIHN1Y2Nlc3MoYFN1Y2Nlc3NmdWxseSBzeW50aGVzaXplZCB0byAke2NvbG9ycy5ibHVlKHBhdGgucmVzb2x2ZShzdGFja3MuYXNzZW1ibHkuZGlyZWN0b3J5KSl9YCk7XG4gICAgICAgIHByaW50KFxuICAgICAgICAgICAgYFN1cHBseSBhIHN0YWNrIGlkICgke3N0YWNrcy5zdGFja0FydGlmYWN0cy5tYXAoKHMpID0+IGNvbG9ycy5ncmVlbihzLmlkKSkuam9pbignLCAnKX0pIHRvIGRpc3BsYXkgaXRzIHRlbXBsYXRlLmAsXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVwbG95KG9wdGlvbnM6IERlcGxveU9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlQm9keTogYW55O1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXBsb3kob3B0aW9ucy5zdGFja05hbWVzLCBvcHRpb25zLmV4Y2x1c2l2ZWx5KTtcbiAgICAgICAgY29uc3Qgc3RhY2tOYW1lID0gb3B0aW9ucy5zdGFja05hbWVzLmxlbmd0aCAhPT0gMCA/IG9wdGlvbnMuc3RhY2tOYW1lc1swXSA6IHN0YWNrcy5zdGFja0FydGlmYWN0c1swXS5pZDtcbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgbGV0IHRlbXBsYXRlRmlsZUJvZHkgPSBmcy5yZWFkRmlsZVN5bmMoYC4vY2RrLm91dC8ke3N0YWNrTmFtZX0udGVtcGxhdGUuanNvbmApO1xuICAgICAgICBsZXQgQ2xpZW50VG9rZW4gPSBnZW5lcmF0ZVNhZmVJZCgpO1xuICAgICAgICBsZXQgZGlzYWJsZVJvbGxiYWNrID0gb3B0aW9ucy5kaXNhYmxlUm9sbGJhY2tcbiAgICAgICAgbGV0IHRlbXBsYXRlQm9keUJhc2U2NERhdGEgPSB0ZW1wbGF0ZUZpbGVCb2R5LnRvU3RyaW5nKCdiYXNlNjQnKS50cmltKCk7XG4gICAgICAgIGlmIChCdWZmZXIuYnl0ZUxlbmd0aCh0ZW1wbGF0ZUZpbGVCb2R5LCAndXRmOCcpIDwgNTI0MjczKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZUJvZHkgPSBgQEJhc2U2NEVuY29kZWQ6ICR7dGVtcGxhdGVCb2R5QmFzZTY0RGF0YX1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZUJvZHkgPSB0ZW1wbGF0ZUZpbGVCb2R5XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbnRlbnQ6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgU3RhY2tOYW1lOiBzdGFja05hbWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICBUaW1lb3V0SW5NaW51dGVzOiBvcHRpb25zLnRpbWVvdXQsXG4gICAgICAgICAgICBUZW1wbGF0ZUJvZHk6IHRlbXBsYXRlQm9keSxcbiAgICAgICAgICAgIENsaWVudFRva2VuOiBDbGllbnRUb2tlbixcbiAgICAgICAgICAgIERpc2FibGVSb2xsYmFjazogZGlzYWJsZVJvbGxiYWNrXG4gICAgICAgIH07XG4gICAgICAgIGxldCBzeW5jID0gb3B0aW9ucy5zeW5jXG4gICAgICAgIGxldCBvdXRwdXRzID0gb3B0aW9ucy5vdXRwdXRzRmlsZVxuICAgICAgICBsZXQgc2tpcElmTm9DaGFuZ2VzID0gb3B0aW9ucy5za2lwSWZOb0NoYW5nZXNcbiAgICAgICAgbGV0IHJlc291cmNlR3JvdXBJZCA9IG9wdGlvbnMucmVzb3VyY2VHcm91cElkXG4gICAgICAgIGxldCBkZXRhaWxMb2cgPSBvcHRpb25zLmRldGFpbExvZ1xuICAgICAgICByZXF1ZXN0T3B0aW9uc1snbWV0aG9kJ10gPSAnUE9TVCdcblxuICAgICAgICBpZiAocmVzb3VyY2VHcm91cElkKSB7XG4gICAgICAgICAgICBjb250ZW50WydSZXNvdXJjZUdyb3VwSWQnXSA9IHJlc291cmNlR3JvdXBJZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YWNrcy5zdGFja0FydGlmYWN0c1swXS50YWdzKSB7XG4gICAgICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDE7XG4gICAgICAgICAgICBsZXQgcGFyYXMgPSBzdGFja3Muc3RhY2tBcnRpZmFjdHNbMF0udGFncztcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhcykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1RhZ3MuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLktleSddID0ga2V5O1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1RhZ3MuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlZhbHVlJ10gPSBwYXJhc1trZXldO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5wYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDE7XG4gICAgICAgICAgICBsZXQgcGFyYXMgPSBvcHRpb25zLnBhcmFtZXRlcnM7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYXMpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50WydQYXJhbWV0ZXJzLicgKyBjb3VudC50b1N0cmluZygpICsgJy5QYXJhbWV0ZXJLZXknXSA9IGtleTtcbiAgICAgICAgICAgICAgICBjb250ZW50WydQYXJhbWV0ZXJzLicgKyBjb3VudC50b1N0cmluZygpICsgJy5QYXJhbWV0ZXJWYWx1ZSddID0gcGFyYXNba2V5XTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvY2FsU3RhY2tJbmZvID0gYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrTmFtZSlcbiAgICAgICAgaWYgKGxvY2FsU3RhY2tJbmZvLnN0YWNrSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZ2V0U3RhY2tCeUlkKGxvY2FsU3RhY2tJbmZvLnN0YWNrSWQpXG4gICAgICAgICAgICBpZiAoc3RhY2tJbmZvICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHN0YWNrXG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RhY2tJbmZvLnN0YWNrSWQgIT09IHN0YWNrSW5mby5TdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjaywgYmVjYXVzZSBzdGFjayBsb2NhbCBpbmZvIGRvc2Ugbm90IG1hdGNoIHRoZSByZW1vdGUgc2VydmVyLicpXG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFsnU3RhY2tJZCddID0gc3RhY2tJbmZvLlN0YWNrSWQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFja1N0YXR1cyA9IHN0YWNrSW5mby5TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWNrVXBkYXRlVGltZSA9IHN0YWNrSW5mby5VcGRhdGVUaW1lID8gc3RhY2tJbmZvLlVwZGF0ZVRpbWUgOiBzdGFja0luZm8uQ3JlYXRlVGltZVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tTdGF0dXMuaW5kZXhPZihcIklOX1BST0dSRVNTXCIpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCclczogZGVwbG95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc3luY1VwZGF0ZVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIG91dHB1dHMsIHNraXBJZk5vQ2hhbmdlcywgc3RhY2tOYW1lLCBsb2NhbFN0YWNrSW5mbywgc3RhY2tVcGRhdGVUaW1lLCBkZXRhaWxMb2cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucm9zVXBkYXRlU3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgc3RhY2tOYW1lLCBsb2NhbFN0YWNrSW5mbywgc3RhY2tVcGRhdGVUaW1lLCBkZXRhaWxMb2csIHNraXBJZk5vQ2hhbmdlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnTm90U3VwcG9ydGVkJyAmJiBlLm1lc3NhZ2Uuc3RhcnRzV2l0aCgnVXBkYXRlIHRoZSBjb21wbGV0ZWx5IHNhbWUgc3RhY2snKSAmJiBza2lwSWZOb0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBzdGFja0luZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoJ1RoZSBzdGFjayBpcyBjb21wbGV0ZWx5IHRoZSBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIHVwZGF0ZS4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ3VwZGF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gdXBkYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuUmVxdWVzdGVkSWQ6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJywgZS5jb2RlLCBlLmRhdGEuUmVxdWVzdElkLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2ssIGJlY2F1c2Ugc3RhY2sgc3RhdHVzIGlzICVzJywgc3RhY2tTdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBzdGFja1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnJXM6IGRlcGxveWluZy4uLicsIGNvbG9ycy5ib2xkKHN0YWNrTmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zeW5jRGVwbG95U3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgb3V0cHV0cywgcmVzb3VyY2VHcm91cElkLCBzdGFja05hbWUsIGRldGFpbExvZylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJvc0NyZWF0ZVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIHJlc291cmNlR3JvdXBJZCwgc3RhY2tOYW1lLCBkZXRhaWxMb2cpXG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXRhaWxMb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdjcmVhdGUgc3RhY2sgZXJyb3IgaW5mbyBpcyAlcycsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGNyZWF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgZS5kYXRhLlJlcXVlc3RJZCwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUsIHJlc291cmNlR3JvdXBJZClcbiAgICAgICAgICAgIGlmIChzdGFja0luZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBzdGFjayBpcyBleGlzdCBzZW5kIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2ssIGJlY2F1c2Ugc3RhY2sgICVzIGlzIGV4aXN0IGluIHRoaXMgcmVnaW9uLicsIHN0YWNrTmFtZSlcbiAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBzdGFja1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnJXM6IGRlcGxveWluZy4uLicsIGNvbG9ycy5ib2xkKHN0YWNrTmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zeW5jRGVwbG95U3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgb3V0cHV0cywgcmVzb3VyY2VHcm91cElkLCBzdGFja05hbWUsIGRldGFpbExvZylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJvc0NyZWF0ZVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIHJlc291cmNlR3JvdXBJZCwgc3RhY2tOYW1lLCBkZXRhaWxMb2cpXG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXRhaWxMb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdjcmVhdGUgc3RhY2sgZXJyb3IgaW5mbyBpcyAlcycsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGNyZWF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgZS5kYXRhLlJlcXVlc3RJZCwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRpZmYob3B0aW9uczogRGlmZk9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uSW5Mb2NhbCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbkluTG9jYWwgPSByZWdpb25JbkxvY2FsID8gcmVnaW9uSW5Mb2NhbCA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gb3B0aW9ucy5zdHJlYW0gfHwgcHJvY2Vzcy5zdGRlcnI7XG4gICAgICAgIGNvbnN0IGNvbnRleHRMaW5lcyA9IG9wdGlvbnMuY29udGV4dExpbmVzIHx8IDM7XG4gICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCk7XG4gICAgICAgICAgICBpZiAoIXN0YWNrSW5mby5zdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgc3RyZWFtLndyaXRlKGZvcm1hdCgnU3RhY2sgJXMgaGFzIG5vdCBiZWVuIGRlcGxveWVkIG9yIHN0YWNrIGRvZXNuXFwndCBleGlzdCBpbiB0aGUgc3RhY2suaW5mby5qc29uIGZpbGUgXFxuJywgY29sb3JzLmJvbGQoc3RhY2suZGlzcGxheU5hbWUpKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGllbnQuZ2V0VGVtcGxhdGUoe1JlZ2lvbklkOiByZWdpb25JbkxvY2FsLCBTdGFja0lkOiBzdGFja0luZm8uc3RhY2tJZH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRlc2VyaWFsaXplU3RydWN0dXJlKHJlcy5UZW1wbGF0ZUJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW0ud3JpdGUoZm9ybWF0KCdTdGFjayAlc1xcbicsIGNvbG9ycy5ib2xkKHN0YWNrLmRpc3BsYXlOYW1lKSkpO1xuICAgICAgICAgICAgICAgICAgICBwcmludFN0YWNrRGlmZih0ZW1wbGF0ZSwgc3RhY2ssIGNvbnRleHRMaW5lcywgc3RyZWFtKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBzeW50aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrLmlkLCBTWU5USF9TVEFDSyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgdGVtcGxhdGU6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGV2ZW50KG9wdGlvbnM6IEV2ZW50T3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShbXSk7XG4gICAgICAgIGxldCBzdGFja0lkID0gKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhvcHRpb25zLnN0YWNrTmFtZVswXSkpLnN0YWNrSWRcbiAgICAgICAgaWYgKCFvcHRpb25zLnN0YWNrTmFtZSkge1xuICAgICAgICAgICAgZXJyb3IoJ0lmIHdhbnQgdG8gZ2V0IHJlc291cmNlIHN0YWNrIGV2ZW50cywgc3RhY2sgbmFtZSBtdXN0IGJlIFNwZWNpZmllZCEnKVxuICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICB9XG4gICAgICAgIGlmICghc3RhY2tzLnN0YWNrSWRzLmluY2x1ZGVzKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSkge1xuICAgICAgICAgICAgZXJyb3IoYFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXN0LCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBpbnB1dCBzdGFjayBuYW1lIWApXG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGFja0lkKSB7XG4gICAgICAgICAgICBlcnJvcihgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHN0YWNrLmluZm8uanNvbiBmaWxlLCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBzdGFjazogJXMhYCwgb3B0aW9ucy5zdGFja05hbWVbMF0pXG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IExvZ2ljYWxSZXNvdXJjZUlkczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubG9naWNhbFJlc291cmNlSWQpIHtcbiAgICAgICAgICAgIExvZ2ljYWxSZXNvdXJjZUlkcy5wdXNoKG9wdGlvbnMubG9naWNhbFJlc291cmNlSWQpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY2xpZW50XG4gICAgICAgICAgICAubGlzdFN0YWNrRXZlbnRzKHtcbiAgICAgICAgICAgICAgICBTdGFja0lkOiBzdGFja0lkLFxuICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICAgICAgTG9naWNhbFJlc291cmNlSWQ6IExvZ2ljYWxSZXNvdXJjZUlkcyxcbiAgICAgICAgICAgICAgICBQYWdlU2l6ZTogb3B0aW9ucy5wYWdlU2l6ZSA/IE51bWJlcihvcHRpb25zLnBhZ2VTaXplKSA6IDEwLFxuICAgICAgICAgICAgICAgIFBhZ2VOdW1iZXI6IG9wdGlvbnMucGFnZU51bWJlciA/IE51bWJlcihvcHRpb25zLnBhZ2VOdW1iZXIpIDogMVxuICAgICAgICAgICAgfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBTdGFjayAlcyBcXG4gRXZlbnRzIGlzOiBcXG4gJXMgXFxuYCwgY29sb3JzLmJsdWUob3B0aW9ucy5zdGFja05hbWVbMF0pLCBjb2xvcnMuYmx1ZShKU09OLnN0cmluZ2lmeShyZXMuRXZlbnRzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8ob3B0aW9ucy5zdGFja05hbWVbMF0sIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjayBldmVudHM6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG91dHB1dChvcHRpb25zOiBPdXRQdXRPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXN0cm95KFtdKTtcbiAgICAgICAgbGV0IHN0YWNrSWQgPSAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSkuc3RhY2tJZFxuICAgICAgICBpZiAoIW9wdGlvbnMuc3RhY2tOYW1lKSB7XG4gICAgICAgICAgICBlcnJvcignSWYgd2FudCB0byBnZXQgcmVzb3VyY2Ugc3RhY2sgb3V0cHV0LCBzdGFjayBuYW1lIG11c3QgYmUgU3BlY2lmaWVkIScpXG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGFja3Muc3RhY2tJZHMuaW5jbHVkZXMob3B0aW9ucy5zdGFja05hbWVbMF0pKSB7XG4gICAgICAgICAgICBlcnJvcihgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpc3QsIFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIGlucHV0IHN0YWNrIG5hbWUhYClcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YWNrSWQpIHtcbiAgICAgICAgICAgIGVycm9yKGBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGlzdCBpbiB0aGUgc3RhY2suaW5mby5qc29uIGZpbGUsIFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIHN0YWNrOiAlcyFgLCBvcHRpb25zLnN0YWNrTmFtZVswXSlcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBjbGllbnRcbiAgICAgICAgICAgIC5nZXRTdGFjayh7XG4gICAgICAgICAgICAgICAgU3RhY2tJZDogc3RhY2tJZCxcbiAgICAgICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uXG4gICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIFN0YWNrICVzIFxcbiBPdXRwdXQgaXM6IFxcbiAlcyBcXG5gLCBjb2xvcnMuYmx1ZShvcHRpb25zLnN0YWNrTmFtZVswXSksIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5PdXRwdXRzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8ob3B0aW9ucy5zdGFja05hbWVbMF0sIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjayBvdXRwdXRzOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFzeW5jIHJlc291cmNlKG9wdGlvbnM6IFJlc291cmNlT3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBsZXQgc3RhY2tOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBpZiAoKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCkpLnN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBzdGFja05hbWVzLnB1c2goc3RhY2suaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvcihgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHN0YWNrLmluZm8uanNvbiBmaWxlLCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBzdGFjazogJXMhYCwgc3RhY2suaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2tOYW1lIG9mIHN0YWNrTmFtZXMpIHtcbiAgICAgICAgICAgIGNsaWVudFxuICAgICAgICAgICAgICAgIC5saXN0U3RhY2tSZXNvdXJjZXMoe1xuICAgICAgICAgICAgICAgICAgICBTdGFja0lkOiAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrTmFtZSkpLnN0YWNrSWQsXG4gICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICAgICAgfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIFN0YWNrICVzIFxcbiBSZXNvdXJjZSBpczogXFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKHN0YWNrTmFtZSksIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5SZXNvdXJjZXMsIG51bGwsIFwiXFx0XCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgc3RhY2sgcmVzb3VyY2U6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2VuZXJhdGVTdGFja0luZm8ob3B0aW9uczogR2VuZXJhdGVTdGFja0luZm9PcHRpb25zKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgU1RBQ0tfSU5GTyk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0Zvckxpc3QoW10pO1xuICAgICAgICBsZXQgc3RhY2tOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgbGV0IFN0YWNrSW5mb3M6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICAgICAgc3RhY2tOYW1lcyA9IHN0YWNrcy5zdGFja0lkc1xuICAgICAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUsIG9wdGlvbnMucmVzb3VyY2VHcm91cElkKVxuICAgICAgICAgICAgaWYgKHN0YWNrSW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFN0YWNrSW5mb3Nbc3RhY2tOYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBERVBMT1lfU1RBQ0ssXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrSWQ6IHN0YWNrSW5mby5TdGFja0lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTdGFja0luZm9zW3N0YWNrTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogSU5JVF9TVEFDSyxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tJZDogbnVsbFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoU3RhY2tJbmZvcywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBnZW5lcmF0ZSBzdGFjayBpbmZvIGhhcyBjb21wbGV0ZWQhYCxcbiAgICAgICAgKTtcbiAgICAgICAgZXhpdCgwKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRTdGFja0J5TmFtZShzdGFja05hbWU6IHN0cmluZywgcmVzb3VyY2VHcm91cElkOiBhbnkpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgbGV0IHBhcmFtczogeyBbbmFtZTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uLFxuICAgICAgICAgICAgUGFnZVNpemU6IDEwLFxuICAgICAgICAgICAgUGFnZU51bWJlcjogMSxcbiAgICAgICAgICAgIFN0YWNrTmFtZTogW3N0YWNrTmFtZV1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJlc291cmNlR3JvdXBJZCkge1xuICAgICAgICAgICAgcGFyYW1zWydSZXNvdXJjZUdyb3VwSWQnXSA9IHJlc291cmNlR3JvdXBJZFxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQubGlzdFN0YWNrcyhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5TdGFja3NbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LlN0YWNrc1swXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0U3RhY2tCeUlkKHN0YWNrSWQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBsZXQgcGFyYW1zOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICBTdGFja0lkOiBzdGFja0lkXG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1YmxpYyBhc3luYyBsaXN0U3RhY2tzKG9wdGlvbnM6IExpc3RTdGFja09wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0Zvckxpc3QoW10pO1xuICAgICAgICBsZXQgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgIFBhZ2VTaXplOiBvcHRpb25zLnBhZ2VTaXplID8gTnVtYmVyKG9wdGlvbnMucGFnZVNpemUpIDogMTAsXG4gICAgICAgICAgICBQYWdlTnVtYmVyOiBvcHRpb25zLnBhZ2VOdW1iZXIgPyBOdW1iZXIob3B0aW9ucy5wYWdlTnVtYmVyKSA6IDFcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFvcHRpb25zLmFsbCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RhY2tOYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuU3RhY2tOYW1lID0gc3RhY2tzLnN0YWNrSWRzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5TdGFja05hbWUgPSBvcHRpb25zLnN0YWNrTmFtZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5yZXNvdXJjZUdyb3VwSWQpIHtcbiAgICAgICAgICAgIHBhcmFtcy5SZXNvdXJjZUdyb3VwSWQgPSBvcHRpb25zLnJlc291cmNlR3JvdXBJZFxuICAgICAgICB9XG4gICAgICAgIGNsaWVudC5saXN0U3RhY2tzKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBTdGFja3MgbGlzdCBpczpcXG4gJXMgXFxuYCwgY29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLlN0YWNrcywgbnVsbCwgXCJcXHRcIikpKTtcbiAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGxpc3Qgc3RhY2tzOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlc3Ryb3kob3B0aW9uczogRGVzdHJveU9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRlc3Ryb3kob3B0aW9ucy5zdGFja05hbWVzKTtcbiAgICAgICAgbGV0IHN0YWNrTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBzeW5jID0gb3B0aW9ucy5zeW5jXG4gICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgaWYgKChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpKS5zdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgc3RhY2tOYW1lcy5wdXNoKHN0YWNrLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMucXVpZXQpIHtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpcm0gPSByZWFkbGluZVN5bmMucXVlc3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICdUaGUgZm9sbG93aW5nIHN0YWNrKHMpIHdpbGwgYmUgZGVzdHJveWVkKE9ubHkgZGVwbG95ZWQgc3RhY2tzIHdpbGwgYmUgZGlzcGxheWVkKS5cXG5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lcy50b1N0cmluZygpICtcbiAgICAgICAgICAgICAgICAgICAgJ1xcblxcblBsZWFzZSBjb25maXJtLihZL04pXFxuJyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtID09PSAnbicgfHwgY29uZmlybSA9PT0gJ04nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0gPT09ICd5JyB8fCBjb25maXJtID09PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCByZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpO1xuICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGZvciAobGV0IHN0YWNrTmFtZSBvZiBzdGFja05hbWVzKSB7XG4gICAgICAgICAgICBsZXQgY29udGVudDogeyBbbmFtZTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICAgICAgU3RhY2tJZDogKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpKS5zdGFja0lkLFxuICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICBwcmludCgnJXM6IGRlc3Ryb3lpbmcuLi4nLCBjb2xvcnMuYm9sZChzdGFja05hbWUpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN5bmNEZXN0cm95U3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsaWVudC5kZWxldGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBEZWxldGVkXFxuUmVxdWVzdGVkSWQ6ICVzYCwgY29sb3JzLmJsdWUocmVzLlJlcXVlc3RJZCkpO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIGRlc3Ryb3kuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZGVsZXRlIHN0YWNrOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzeW5jU3RhY2tJbmZvKCkge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSB7fTtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGZpbGVDb250ZW50LCBudWxsLCAnXFx0JykpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0ZW1wOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgIC8vIHNlbGVjdG9yLmxlbmd0aCA9IDAgbWVhbnMgc2VsZWN0IGFsbCBzdGFja3MgZnJvbSB0aGlzIGFwcFxuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0Zvckxpc3QoW10pO1xuICAgICAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKFNUQUNLX0lORk8sIHN0YWNrLmlkKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdGFjayBoYXMgbm8gaW5mbywgdGhlbiBhZGQgaW5pdCB0YWcgZm9yIGl0XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3N0YWNrLmlkXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3N0YWNrLmlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBJTklUX1NUQUNLLFxuICAgICAgICAgICAgICAgICAgICBzdGFja0lkOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KHRlbXAsIG51bGwsICdcXHQnKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcbiAgICAgICAgbGV0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICBsZXQgaW5mbyA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpO1xuICAgICAgICBsZXQgc3RhY2tJbmZvID0gaW5mb1tzdGFja05hbWVdO1xuICAgICAgICBpZiAoIXN0YWNrSW5mbykge1xuICAgICAgICAgICAgc3RhY2tJbmZvID0gaW5mb1tzdGFja05hbWVdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gREVQTE9ZX1NUQUNLX0lEX0xFTkdUSCkge1xuICAgICAgICAgICAgc3RhY2tJbmZvLnN0YXR1cyA9IERFUExPWV9TVEFDSztcbiAgICAgICAgICAgIHN0YWNrSW5mby5zdGFja0lkID0gdmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YWNrSW5mby5zdGF0dXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gREVTVFJPWV9TVEFDSykge1xuICAgICAgICAgICAgICAgIHN0YWNrSW5mby5zdGFja0lkID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShpbmZvLCBudWxsLCAnXFx0JykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZmluZFN0YWNrSW5mbyhzdGFja05hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGVDb250ZW50KVtzdGFja05hbWVdO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yTGlzdChzZWxlY3RvcnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc2VsZWN0b3JzLCB7ZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrc30pO1xuXG4gICAgICAgIC8vIE5vIHZhbGlkYXRpb25cblxuICAgICAgICByZXR1cm4gc3RhY2tzO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yRGVzdHJveShzdGFja05hbWVzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5BbGxTdGFja3MsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE5vIHZhbGlkYXRpb25cblxuICAgICAgICByZXR1cm4gc3RhY2tzO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yRGVwbG95KHN0YWNrTmFtZXM6IHN0cmluZ1tdLCBleGNsdXNpdmVseT86IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzdGFja05hbWVzLCB7XG4gICAgICAgICAgICBleHRlbmQ6IGV4Y2x1c2l2ZWx5ID8gRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5Ob25lIDogRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5VcHN0cmVhbSxcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5Pbmx5U2luZ2xlLFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlU3RhY2tzKHN0YWNrcyk7XG5cbiAgICAgICAgcmV0dXJuIHN0YWNrcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNlbGVjdFN0YWNrc0ZvckRpZmYoc3RhY2tOYW1lczogc3RyaW5nW10sIGV4Y2x1c2l2ZWx5PzogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgICAgICAgIGV4dGVuZDogZXhjbHVzaXZlbHkgPyBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUgOiBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLlVwc3RyZWFtLFxuICAgICAgICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrcyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZVN0YWNrcyhzdGFja3MpO1xuXG4gICAgICAgIHJldHVybiBzdGFja3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgdGhlIHN0YWNrcyBmb3IgZXJyb3JzIGFuZCB3YXJuaW5ncyBhY2NvcmRpbmcgdG8gdGhlIENMSSdzIGN1cnJlbnQgc2V0dGluZ3NcbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIHZhbGlkYXRlU3RhY2tzKHN0YWNrczogU3RhY2tDb2xsZWN0aW9uKSB7XG4gICAgICAgIHN0YWNrcy5wcm9jZXNzTWV0YWRhdGFNZXNzYWdlcyh7XG4gICAgICAgICAgICBpZ25vcmVFcnJvcnM6IHRoaXMucHJvcHMuaWdub3JlRXJyb3JzLFxuICAgICAgICAgICAgc3RyaWN0OiB0aGlzLnByb3BzLnN0cmljdCxcbiAgICAgICAgICAgIHZlcmJvc2U6IHRoaXMucHJvcHMudmVyYm9zZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3NlbWJseSgpOiBQcm9taXNlPENsb3VkQXNzZW1ibHk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2xvdWRFeGVjdXRhYmxlLnN5bnRoZXNpemUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldENsaUNvbmZpZyhsb2FkRmlsZVBhdGg6IHN0cmluZykge1xuICAgICAgICBsZXQgZmlsZVBhdGg6IHN0cmluZztcbiAgICAgICAgbGV0IGNvbmZpZ3VyZUluZm86IGFueSA9IHt9O1xuICAgICAgICBsZXQgY29uZmlndXJlSW5mb3M6IGFueSA9IHt9O1xuICAgICAgICBsZXQgQUtQcm9maWxlTGlzdDogb2JqZWN0W10gPSBbXTtcbiAgICAgICAgbGV0IFN0c1Byb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBsZXQgUmFtUm9sZUFyblByb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBsZXQgRWNzUmFtUm9sZVByb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBpZiAobG9hZEZpbGVQYXRoKSB7XG4gICAgICAgICAgICBmaWxlUGF0aCA9IGxvYWRGaWxlUGF0aFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGhvbWVQYXRoID0gb3MuaG9tZWRpcigpO1xuICAgICAgICAgICAgZmlsZVBhdGggPSBob21lUGF0aCArIENMSV9DT05GSUdfRklMRTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IEFsbFByb2ZpbGVzID0gSlNPTi5wYXJzZShmaWxlKVsncHJvZmlsZXMnXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb2ZpbGUgb2YgQWxsUHJvZmlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogcHJvZmlsZS5hY2Nlc3Nfa2V5X2lkLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IHByb2ZpbGUuYWNjZXNzX2tleV9zZWNyZXQsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbjogcHJvZmlsZS5yZWdpb25faWQsXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IHByb2ZpbGUuc3RzX3Rva2VuLFxuICAgICAgICAgICAgICAgICAgICByb2xlQXJuOiBwcm9maWxlLnJhbV9yb2xlX2FybixcbiAgICAgICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiBwcm9maWxlLnJhbV9zZXNzaW9uX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiBwcm9maWxlLnJhbV9yb2xlX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGUubmFtZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwcm9maWxlLm1vZGUgPT09ICdBSycpIHtcbiAgICAgICAgICAgICAgICAgICAgQUtQcm9maWxlTGlzdC5wdXNoKGNvbmZpZ3VyZUluZm8pXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUluZm9zLkFLID0gQUtQcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnU3RzVG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIFN0c1Byb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuU3RzVG9rZW4gPSBTdHNQcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgICAgICAgICAgICAgICAgUmFtUm9sZUFyblByb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuUmFtUm9sZUFybiA9IFJhbVJvbGVBcm5Qcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgICAgICAgICAgICAgICAgRWNzUmFtUm9sZVByb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuRWNzUmFtUm9sZSA9IEVjc1JhbVJvbGVQcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY29uZmlndXJlSW5mb3MgfHwgT2JqZWN0LmtleXMoY29uZmlndXJlSW5mb3MpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXCJXQU5STklORzogUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgbW9kZSBhbmQgcHJvZmlsZSBjb25maWd1cmF0aW9uIGVudGVyZWQuXCIpO1xuICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uZmlndXJlSW5mb3NcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKFwiV0FOUk5JTkc6IFBsZWFzZSBjaGVjayBBbGl5dW4gQ2xpIHRvb2wgY29uZmlndXJlIGFjY3VyYWN5IG9mIHRoZSBkZWZhdWx0IHBhdGggb3Igc3BlY2lmaWVkIHBhdGguXCIpO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc3luY0RlcGxveVN0YWNrKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIG91dHB1dHNGaWxlOiBib29sZWFuLCByZXNvdXJjZUdyb3VwSWQ6IGFueSwgc3RhY2tOYW1lOiBhbnksIGRldGFpbExvZzogYm9vbGVhbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGNyZWF0ZVJlc3VsdFJlcXVlc3RJZDogYW55O1xuICAgICAgICAgICAgbGV0IGNyZWF0ZUVycm9yUmVxdWVzdElkOiBhbnk7XG4gICAgICAgICAgICBsZXQgbmV0d29ya0Vycm9yRXhjZXB0aW9uOiBhbnk7XG4gICAgICAgICAgICBsZXQgY3JlYXRlUmVzdWx0OiBhbnk7XG4gICAgICAgICAgICBjb25zdCBzdGFja091dHB1dHM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LmNyZWF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIGNyZWF0ZVJlc3VsdFJlcXVlc3RJZCA9IGNyZWF0ZVJlc3VsdC5SZXF1ZXN0SWRcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdzeW5jIGNyZWF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNyZWF0ZUVycm9yUmVxdWVzdElkID0gZS5kYXRhLlJlcXVlc3RJZFxuICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3JFeGNlcHRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3JlYXRlRXJyb3JSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyBjcmVhdGUgc3RhY2s6IEVycm9yQ29kZTogJXNcXG5SZXF1ZXN0ZWRJZDogJXNcXG5FcnJvck1lc3NhZ2U6JXMnLCBlLmNvZGUsIGNyZWF0ZUVycm9yUmVxdWVzdElkLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKCFjcmVhdGVSZXN1bHRSZXF1ZXN0SWQgJiYgIWNyZWF0ZUVycm9yUmVxdWVzdElkKSB8fCBuZXR3b3JrRXJyb3JFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgc2xlZXBUaW1lID0gNTAwMDtcbiAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcChzbGVlcFRpbWUpO1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IDExKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjcmVhdGVSZXN1bHRSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNyZWF0ZUVycm9yUmVxdWVzdElkOiBhbnk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXR3b3JrRXJyb3JFeGNlcHRpb246IGFueTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNyZWF0ZVJlc3VsdDogYW55O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LmNyZWF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUmVzdWx0UmVxdWVzdElkID0gY3JlYXRlUmVzdWx0LlJlcXVlc3RJZFxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ3JldHJ5IHN5bmMgY3JlYXRlIHN0YWNrIGVycm9yIGluZm8gaXMgJXMnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUVycm9yUmVxdWVzdElkID0gZS5kYXRhLlJlcXVlc3RJZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yRXhjZXB0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3JlYXRlRXJyb3JSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIGNyZWF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgY3JlYXRlRXJyb3JSZXF1ZXN0SWQsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCghY3JlYXRlUmVzdWx0UmVxdWVzdElkICYmICFjcmVhdGVFcnJvclJlcXVlc3RJZCkgfHwgbmV0d29ya0Vycm9yRXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xlZXBUaW1lIDwgMjAwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGVlcFRpbWUgPSBzbGVlcFRpbWUgKyA1MDAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcChzbGVlcFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBjcmVhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoY3JlYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhY2tJZEluZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSwgcmVzb3VyY2VHcm91cElkKVxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3U3RhY2tJZEluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgbmV3U3RhY2tJZEluZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUobmV3U3RhY2tJZEluZm8uU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrLCBwbGVhc2UgY2hlY2sgeW91IHNlcnZpY2UgZW5kcG9pbnQuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gbmV3IFJld3JpdGFibGVCbG9jayhzdHJlYW0pO1xuICAgICAgICAgICAgd2l0aERlZmF1bHRQcmludGVyT2JqID0gc2V0SW50ZXJ2YWwoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIGNyZWF0ZVJlc3VsdC5TdGFja0lkLCBibG9jaywgJ2RlcGxveScpXG4gICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMClcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiBjb250ZW50WydSZWdpb25JZCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhY2tJZDogY3JlYXRlUmVzdWx0LlN0YWNrSWRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0U3RhY2tSZXN1bHQgPSBhd2FpdCBjbGllbnQuZ2V0U3RhY2socGFyYW1zLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZ2V0U3RhY2tSZXN1bHQuU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1JlYXNvbiA9IGdldFN0YWNrUmVzdWx0LlN0YXR1c1JlYXNvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFja05hbWUgPSBnZXRTdGFja1Jlc3VsdC5TdGFja05hbWVcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGdldFN0YWNrUmVzdWx0Lk91dHB1dHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnQ29tcGxldGUgPSBSZWdFeHAoL0NPTVBMRVRFLylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRmFpbGVkID0gUmVnRXhwKC9GQUlMRUQvKVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnQ29tcGxldGUuZXhlYyhzdGF0dXMpIHx8IHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIGNyZWF0ZVJlc3VsdC5TdGFja0lkLCBibG9jaywgJ2RlcGxveScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJ1xcbk91dHB1dHM6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tPdXRwdXRzW3N0YWNrTmFtZV0gPSBvdXRwdXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3V0cHV0IG9mIG91dHB1dHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvdXRwdXRbJ091dHB1dFZhbHVlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IG91dHB1dFsnT3V0cHV0S2V5J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gb3V0cHV0WydEZXNjcmlwdGlvbiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnXFxuIEtleTogJXMgIFZhbHVlOiAlcyBEZXNjcmlwdGlvbjogJXMnLCBjb2xvcnMuY3lhbihrZXkpLCBjb2xvcnMuY3lhbih2YWx1ZSksIGNvbG9ycy5jeWFuKGRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXRzRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihMT0NBTF9QQVRIICsgT1VUUFVUU19KU09OKSwgSlNPTi5zdHJpbmdpZnkoc3RhY2tPdXRwdXRzLCBudWxsLCAnXFx0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoc3luYyBkZXBsb3kgc3RhY2spIGhhcyBmaW5pc2hlZCFcXG5zdGF0dXM6ICVzXFxuU3RhdHVzUmVhc29uOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1c1JlYXNvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoZ2V0U3RhY2tSZXN1bHQuU3RhY2tJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIGNyZWF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnRvU3RyaW5nKCkgPT0gJ0NSRUFURV9ST0xMQkFDS19DT01QTEVURScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcigncmV0cnkgc3luYyBjcmVhdGUgc3RhY2sgZXJyb3IgaW5mbyBpcyAlcycsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1Rocm90dGxpbmcuVXNlcicgfHwgZS5jb2RlID09ICdUaHJvdHRsaW5nJyB8fCBlLmNvZGUgPT0gJ1Rocm90dGxpbmcuQVBJJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMzAwMDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIGNyZWF0ZSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgIGVycm9yKCdyZXRyeSBzeW5jIGNyZWF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIGNyZWF0ZSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGdldFJlc291cmNlcyhjbGllbnQ6IGFueSwgY29udGVudDogYW55LCByZXF1ZXN0T3B0aW9uczogYW55LCBzdGFja0lkOiBhbnkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RTdGFja1Jlc291cmNlc1Jlc3VsdCA9IGF3YWl0IGNsaWVudC5saXN0U3RhY2tSZXNvdXJjZXMoe1xuICAgICAgICAgICAgICAgIFN0YWNrSWQ6IHN0YWNrSWQsXG4gICAgICAgICAgICAgICAgUmVnaW9uSWQ6IGNvbnRlbnRbJ1JlZ2lvbklkJ10sXG4gICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIHJldHVybiBsaXN0U3RhY2tSZXNvdXJjZXNSZXN1bHQuUmVzb3VyY2VzXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBuZXcgc3RhY2sgcmVzb3VyY2U6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgd2l0aERlZmF1bHRQcmludGVyKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIHN0YWNrSWQ6IGFueSwgYmxvY2s6IGFueSwgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBDZGtUb29sa2l0LmdldFJlc291cmNlcyhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBzdGFja0lkKVxuICAgICAgICBpZiAoYWN0aW9uICE9PSAnZGVzdHJveScpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJlc291cmNlIG9mIHJlc291cmNlcykge1xuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2godXRpbC5mb3JtYXQoY29sb3JzLmJsdWUoJ3wlcyB8JXMgfCAlcyB8ICVzIHwgJXMgfCAlcycpICsgJ1xcbicsXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIzLCByZXNvdXJjZS5TdGFja05hbWUpLFxuICAgICAgICAgICAgICAgICAgICBwYWRMZWZ0KDEyLCByZXNvdXJjZS5DcmVhdGVUaW1lKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjAsIHJlc291cmNlLlN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIzLCByZXNvdXJjZS5SZXNvdXJjZVR5cGUpLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydGVuKDQwLCByZXNvdXJjZS5QaHlzaWNhbFJlc291cmNlSWQpLFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5Mb2dpY2FsUmVzb3VyY2VJZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcmVzb3VyY2Ugb2YgcmVzb3VyY2VzKSB7XG4gICAgICAgICAgICAgICAgbGluZXMucHVzaCh1dGlsLmZvcm1hdChjb2xvcnMuYmx1ZSgnfCVzIHwgJXMgfCAlcyB8ICVzIHwgJXMnKSArICdcXG4nLFxuICAgICAgICAgICAgICAgICAgICBwYWRSaWdodCgyMywgcmVzb3VyY2UuU3RhY2tOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjAsIHJlc291cmNlLlN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIzLCByZXNvdXJjZS5SZXNvdXJjZVR5cGUpLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydGVuKDQwLCByZXNvdXJjZS5QaHlzaWNhbFJlc291cmNlSWQpLFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5Mb2dpY2FsUmVzb3VyY2VJZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJsb2NrLmRpc3BsYXlMaW5lcyhsaW5lcylcbiAgICB9XG5cblxuICAgIHByaXZhdGUgYXN5bmMgc3luY1VwZGF0ZVN0YWNrKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIG91dHB1dHNGaWxlOiBib29sZWFuLCBza2lwSWZOb0NoYW5nZXM6IGJvb2xlYW4sIHN0YWNrTmFtZTogYW55LCBsb2NhbFN0YWNrSW5mbzogYW55LCBzdGFja1VwZGF0ZVRpbWU6IGFueSwgZGV0YWlsTG9nOiBib29sZWFuKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIFJlZ2lvbklkOiBjb250ZW50WydSZWdpb25JZCddLFxuICAgICAgICAgICAgICAgIFN0YWNrSWQ6IGNvbnRlbnRbJ1N0YWNrSWQnXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCB1cGRhdGVSZXN1bHRSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgIGxldCB1cGRhdGVFcnJvclJlcXVlc3RJZDogYW55O1xuICAgICAgICAgICAgbGV0IG5ldHdvcmtFcnJvckV4Y2VwdGlvbjogYW55O1xuICAgICAgICAgICAgbGV0IHVwZGF0ZVJlc3VsdDogYW55O1xuICAgICAgICAgICAgY29uc3Qgc3RhY2tPdXRwdXRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgICAgICBjb25zdCBnZXRPcmlnaW5hbFN0YWNrUmVzdWx0ID0gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZVRpbWUgPSBnZXRPcmlnaW5hbFN0YWNrUmVzdWx0LlVwZGF0ZVRpbWUgPyBnZXRPcmlnaW5hbFN0YWNrUmVzdWx0LlVwZGF0ZVRpbWUgOiBcIlwiXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC51cGRhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICB1cGRhdGVSZXN1bHRSZXF1ZXN0SWQgPSB1cGRhdGVSZXN1bHQuUmVxdWVzdElkXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcignc3luYyB1cGRhdGUgc3RhY2sgZXJyb3IgaW5mbyBpcyAlcycsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdOb3RTdXBwb3J0ZWQnICYmIGUubWVzc2FnZS5zdGFydHNXaXRoKCdVcGRhdGUgdGhlIGNvbXBsZXRlbHkgc2FtZSBzdGFjaycpICYmIHNraXBJZk5vQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhjb250ZW50WydTdGFja05hbWUnXSwgY29udGVudFsnU3RhY2tJZCddKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygnVGhlIHN0YWNrIGlzIGNvbXBsZXRlbHkgdGhlIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXBkYXRlLicpXG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlRXJyb3JSZXF1ZXN0SWQgPSBlLmRhdGEuUmVxdWVzdElkXG4gICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvckV4Y2VwdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh1cGRhdGVFcnJvclJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIHVwZGF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgdXBkYXRlRXJyb3JSZXF1ZXN0SWQsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCghdXBkYXRlUmVzdWx0UmVxdWVzdElkICYmICF1cGRhdGVFcnJvclJlcXVlc3RJZCkgfHwgbmV0d29ya0Vycm9yRXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNsZWVwVGltZSA9IDUwMDA7XG4gICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoc2xlZXBUaW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCAxMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlUmVzdWx0UmVxdWVzdElkOiBhbnk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVFcnJvclJlcXVlc3RJZDogYW55O1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV0d29ya0Vycm9yRXhjZXB0aW9uOiBhbnk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVSZXN1bHQ6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC51cGRhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlc3VsdFJlcXVlc3RJZCA9IHVwZGF0ZVJlc3VsdC5SZXF1ZXN0SWRcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdyZXRyeSBzeW5jIHVwZGF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdOb3RTdXBwb3J0ZWQnICYmIGUubWVzc2FnZS5zdGFydHNXaXRoKCdVcGRhdGUgdGhlIGNvbXBsZXRlbHkgc2FtZSBzdGFjaycpICYmIHNraXBJZk5vQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKGNvbnRlbnRbJ1N0YWNrTmFtZSddLCBjb250ZW50WydTdGFja0lkJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoJ1RoZSBzdGFjayBpcyBjb21wbGV0ZWx5IHRoZSBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIHVwZGF0ZS4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUVycm9yUmVxdWVzdElkID0gZS5kYXRhLlJlcXVlc3RJZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yRXhjZXB0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodXBkYXRlRXJyb3JSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIHVwZGF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgdXBkYXRlRXJyb3JSZXF1ZXN0SWQsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCghdXBkYXRlUmVzdWx0UmVxdWVzdElkICYmICF1cGRhdGVFcnJvclJlcXVlc3RJZCkgfHwgbmV0d29ya0Vycm9yRXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xlZXBUaW1lIDwgMjAwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGVlcFRpbWUgPSBzbGVlcFRpbWUgKyA1MDAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcChzbGVlcFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCB1cGRhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudCh1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUodXBkYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZSh1cGRhdGVSZXN1bHQuU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXR1c0FycmF5ID0gW1wiVVBEQVRFX0ZBSUxFRFwiLCBcIlVQREFURV9DT01QTEVURVwiLCBcIlJPTExCQUNLX0ZBSUxFRFwiLCBcIlJPTExCQUNLX0NPTVBMRVRFXCJdXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YWNrSWRJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5SWQobG9jYWxTdGFja0luZm8uc3RhY2tJZClcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1N0YWNrSWRJbmZvVXBkYXRlVGltZSA9IG5ld1N0YWNrSWRJbmZvLlVwZGF0ZVRpbWUgPyBuZXdTdGFja0lkSW5mby5VcGRhdGVUaW1lIDogbmV3U3RhY2tJZEluZm8uQ3JlYXRlVGltZVxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3U3RhY2tJZEluZm8uU3RhdHVzID09ICdVUERBVEVfSU5fUFJPR1JFU1MnIHx8IG5ld1N0YWNrSWRJbmZvLlN0YXR1cyA9PSAnUk9MTEJBQ0tfSU5fUFJPR1JFU1MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudCh1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNBcnJheS5pbmNsdWRlcyhuZXdTdGFja0lkSW5mby5TdGF0dXMpICYmIG5ld1N0YWNrSWRJbmZvVXBkYXRlVGltZSAhPSBzdGFja1VwZGF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgbmV3U3RhY2tJZEluZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUobmV3U3RhY2tJZEluZm8uU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gdXBkYXRlIHN0YWNrLCBwbGVhc2UgY2hlY2sgeW91IHNlcnZpY2UgZW5kcG9pbnQuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdhaXQgZm9yIHRoZSBzdGFjayBzdGF0ZSB0byBjaGFuZ2UgYWZ0ZXIgdXBkYXRpbmcgaXRcbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKDUwMDApO1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBuZXcgUmV3cml0YWJsZUJsb2NrKHN0cmVhbSk7XG4gICAgICAgICAgICB3aXRoRGVmYXVsdFByaW50ZXJPYmogPSBzZXRJbnRlcnZhbChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgdXBkYXRlUmVzdWx0LlN0YWNrSWQsIGJsb2NrLCAndXBkYXRlJylcbiAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDAwKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXROZXdTdGFja1Jlc3VsdCA9IGF3YWl0IGNsaWVudC5nZXRTdGFjayhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBnZXROZXdTdGFja1Jlc3VsdC5TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzUmVhc29uID0gZ2V0TmV3U3RhY2tSZXN1bHQuU3RhdHVzUmVhc29uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IGdldE5ld1N0YWNrUmVzdWx0LlN0YWNrTmFtZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXRzID0gZ2V0TmV3U3RhY2tSZXN1bHQuT3V0cHV0c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdVcGRhdGVUaW1lID0gZ2V0TmV3U3RhY2tSZXN1bHQuVXBkYXRlVGltZSA/IGdldE5ld1N0YWNrUmVzdWx0LlVwZGF0ZVRpbWUgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdVcGRhdGVUaW1lID09IG9yaWdpbmFsVXBkYXRlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhY2sgdXBkYXRlIGluIHByb2dyZXNzIG9yIHVwZGF0ZSBkaWQgbm90IGJlZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0NvbXBsZXRlID0gUmVnRXhwKC9DT01QTEVURS8pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0ZhaWxlZCA9IFJlZ0V4cCgvRkFJTEVELylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0NvbXBsZXRlLmV4ZWMoc3RhdHVzKSB8fCByZWdGYWlsZWQuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCB1cGRhdGVSZXN1bHQuU3RhY2tJZCwgYmxvY2ssICd1cGRhdGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCdcXG5PdXRwdXRzOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrT3V0cHV0c1tzdGFja05hbWVdID0gb3V0cHV0cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG91dHB1dCBvZiBvdXRwdXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb3V0cHV0WydPdXRwdXRWYWx1ZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBvdXRwdXRbJ091dHB1dEtleSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IG91dHB1dFsnRGVzY3JpcHRpb24nXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJ1xcbiBLZXk6ICVzICBWYWx1ZTogJXMgRGVzY3JpcHRpb246ICVzJywgY29sb3JzLmN5YW4oa2V5KSwgY29sb3JzLmN5YW4odmFsdWUpLCBjb2xvcnMuY3lhbihkZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0c0ZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4oTE9DQUxfUEFUSCArIE9VVFBVVFNfSlNPTiksIEpTT04uc3RyaW5naWZ5KHN0YWNrT3V0cHV0cywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoc3luYyB1cGRhdGUgc3RhY2spIGhhcyBmaW5pc2hlZCFcXG5zdGF0dXM6ICVzXFxuU3RhdHVzUmVhc29uOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1c1JlYXNvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoZ2V0TmV3U3RhY2tSZXN1bHQuU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCB1cGRhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVnQ29tcGxldGUuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy50b1N0cmluZygpID09ICdST0xMQkFDS19DT01QTEVURScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXRhaWxMb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdyZXRyeSBzeW5jIHVwZGF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnTm90U3VwcG9ydGVkJyAmJiBlLm1lc3NhZ2Uuc3RhcnRzV2l0aCgnVXBkYXRlIHRoZSBjb21wbGV0ZWx5IHNhbWUgc3RhY2snKSAmJiBza2lwSWZOb0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKGNvbnRlbnRbJ1N0YWNrTmFtZSddLCBjb250ZW50WydTdGFja0lkJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygnVGhlIHN0YWNrIGlzIGNvbXBsZXRlbHkgdGhlIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXBkYXRlLicpXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnVGhyb3R0bGluZy5Vc2VyJyB8fCBlLmNvZGUgPT0gJ1Rocm90dGxpbmcnIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZy5BUEknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgzMDAwMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgdXBkYXRlIHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChkZXRhaWxMb2cpIHtcbiAgICAgICAgICAgICAgICBlcnJvcignc3luYyB1cGRhdGUgc3RhY2sgZXJyb3IgaW5mbyBpcyAlcycsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnTm90U3VwcG9ydGVkJyAmJiBlLm1lc3NhZ2Uuc3RhcnRzV2l0aCgnVXBkYXRlIHRoZSBjb21wbGV0ZWx5IHNhbWUgc3RhY2snKSAmJiBza2lwSWZOb0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhjb250ZW50WydTdGFja05hbWUnXSwgY29udGVudFsnU3RhY2tJZCddKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCdUaGUgc3RhY2sgaXMgY29tcGxldGVseSB0aGUgc2FtZSwgdGhlcmUgaXMgbm8gbmVlZCB0byB1cGRhdGUuJylcbiAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09ICdOb3RTdXBwb3J0ZWQnICYmIGUubWVzc2FnZS5zdGFydHNXaXRoKCdVcGRhdGUgdGhlIGNvbXBsZXRlbHkgc2FtZSBzdGFjaycpICYmIHNraXBJZk5vQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKGNvbnRlbnRbJ1N0YWNrTmFtZSddLCBjb250ZW50WydTdGFja0lkJ10pO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoJ1RoZSBzdGFjayBpcyBjb21wbGV0ZWx5IHRoZSBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIHVwZGF0ZS4nKVxuICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyB1cGRhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc3luY0Rlc3Ryb3lTdGFjayhjbGllbnQ6IGFueSwgY29udGVudDogYW55LCByZXF1ZXN0T3B0aW9uczogYW55KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuZGVsZXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICBjb25zdCBibG9jayA9IG5ldyBSZXdyaXRhYmxlQmxvY2soc3RyZWFtKTtcbiAgICAgICAgICAgIHdpdGhEZWZhdWx0UHJpbnRlck9iaiA9IHNldEludGVydmFsKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBjb250ZW50WydTdGFja0lkJ10sIGJsb2NrLCAnZGVzdHJveScpXG4gICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMClcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiBjb250ZW50WydSZWdpb25JZCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhY2tJZDogY29udGVudFsnU3RhY2tJZCddXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldFN0YWNrUmVzdWx0ID0gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGdldFN0YWNrUmVzdWx0LlN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNSZWFzb24gPSBnZXRTdGFja1Jlc3VsdC5TdGF0dXNSZWFzb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tOYW1lID0gZ2V0U3RhY2tSZXN1bHQuU3RhY2tOYW1lXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0NvbXBsZXRlID0gUmVnRXhwKC9DT01QTEVURS8pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0ZhaWxlZCA9IFJlZ0V4cCgvRkFJTEVELylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0NvbXBsZXRlLmV4ZWMoc3RhdHVzKSB8fCByZWdGYWlsZWQuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBjb250ZW50WydTdGFja0lkJ10sIGJsb2NrLCAnZGVzdHJveScpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSB0YXNrKHN5bmMgZGVzdHJveSBzdGFjaykgaGFzIGZpbmlzaGVkIVxcbnN0YXR1czogJXNcXG5TdGF0dXNSZWFzb246ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzUmVhc29uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShnZXRTdGFja1Jlc3VsdC5TdGFja0lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVnQ29tcGxldGUuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWdGYWlsZWQuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnVGhyb3R0bGluZy5Vc2VyJyB8fCBlLmNvZGUgPT0gJ1Rocm90dGxpbmcnIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZy5BUEknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgzMDAwMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgZGVzdHJveSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyBkZXN0cm95IHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyByb3NVcGRhdGVTdGFjayhjbGllbnQ6IGFueSwgY29udGVudDogYW55LCByZXF1ZXN0T3B0aW9uczogYW55LCBzdGFja05hbWU6IGFueSwgbG9jYWxTdGFja0luZm86IGFueSwgc3RhY2tVcGRhdGVUaW1lOiBhbnksIGRldGFpbExvZzogYW55LCBza2lwSWZOb0NoYW5nZXM6IGFueSkge1xuICAgICAgICBsZXQgdXBkYXRlUmVzdWx0UmVxdWVzdElkOiBhbnk7XG4gICAgICAgIGxldCB1cGRhdGVFcnJvclJlcXVlc3RJZDogYW55O1xuICAgICAgICBsZXQgbmV0d29ya0Vycm9yRXhjZXB0aW9uOiBhbnk7XG4gICAgICAgIGxldCB1cGRhdGVSZXN1bHQ6IGFueTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHVwZGF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC51cGRhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIHVwZGF0ZVJlc3VsdFJlcXVlc3RJZCA9IHVwZGF0ZVJlc3VsdC5SZXF1ZXN0SWRcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgIGVycm9yKCd1cGRhdGUgc3RhY2sgZXJyb3IgaW5mbyBpcyAlcycsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnTm90U3VwcG9ydGVkJyAmJiBlLm1lc3NhZ2Uuc3RhcnRzV2l0aCgnVXBkYXRlIHRoZSBjb21wbGV0ZWx5IHNhbWUgc3RhY2snKSAmJiBza2lwSWZOb0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhjb250ZW50WydTdGFja05hbWUnXSwgY29udGVudFsnU3RhY2tJZCddKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCdUaGUgc3RhY2sgaXMgY29tcGxldGVseSB0aGUgc2FtZSwgdGhlcmUgaXMgbm8gbmVlZCB0byB1cGRhdGUuJylcbiAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVFcnJvclJlcXVlc3RJZCA9IGUuZGF0YS5SZXF1ZXN0SWRcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvckV4Y2VwdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVwZGF0ZUVycm9yUmVxdWVzdElkKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyB1cGRhdGUgc3RhY2s6IEVycm9yQ29kZTogJXNcXG5SZXF1ZXN0ZWRJZDogJXNcXG5FcnJvck1lc3NhZ2U6JXMnLCBlLmNvZGUsIHVwZGF0ZUVycm9yUmVxdWVzdElkLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoIXVwZGF0ZVJlc3VsdFJlcXVlc3RJZCAmJiAhdXBkYXRlRXJyb3JSZXF1ZXN0SWQpIHx8IG5ldHdvcmtFcnJvckV4Y2VwdGlvbikge1xuICAgICAgICAgICAgbGV0IHNsZWVwVGltZSA9IDUwMDA7XG4gICAgICAgICAgICBhd2FpdCBzbGVlcChzbGVlcFRpbWUpO1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCAxMSkge1xuICAgICAgICAgICAgICAgIGxldCB1cGRhdGVSZXN1bHRSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgICAgICBsZXQgdXBkYXRlRXJyb3JSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgICAgICBsZXQgbmV0d29ya0Vycm9yRXhjZXB0aW9uOiBhbnk7XG4gICAgICAgICAgICAgICAgbGV0IHVwZGF0ZVJlc3VsdDogYW55O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC51cGRhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUmVzdWx0UmVxdWVzdElkID0gdXBkYXRlUmVzdWx0LlJlcXVlc3RJZFxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ3JldHJ5IHVwZGF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnTm90U3VwcG9ydGVkJyAmJiBlLm1lc3NhZ2Uuc3RhcnRzV2l0aCgnVXBkYXRlIHRoZSBjb21wbGV0ZWx5IHNhbWUgc3RhY2snKSAmJiBza2lwSWZOb0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKGNvbnRlbnRbJ1N0YWNrTmFtZSddLCBjb250ZW50WydTdGFja0lkJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygnVGhlIHN0YWNrIGlzIGNvbXBsZXRlbHkgdGhlIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXBkYXRlLicpXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRXJyb3JSZXF1ZXN0SWQgPSBlLmRhdGEuUmVxdWVzdElkXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yRXhjZXB0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh1cGRhdGVFcnJvclJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyB1cGRhdGUgc3RhY2s6IEVycm9yQ29kZTogJXNcXG5SZXF1ZXN0ZWRJZDogJXNcXG5FcnJvck1lc3NhZ2U6JXMnLCBlLmNvZGUsIHVwZGF0ZUVycm9yUmVxdWVzdElkLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCghdXBkYXRlUmVzdWx0UmVxdWVzdElkICYmICF1cGRhdGVFcnJvclJlcXVlc3RJZCkgfHwgbmV0d29ya0Vycm9yRXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGVlcFRpbWUgPCAyMDAwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xlZXBUaW1lID0gc2xlZXBUaW1lICsgNTAwMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHNsZWVwVGltZSk7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgdXBkYXRlUmVzdWx0LlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5SZXF1ZXN0ZWRJZDogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHVwZGF0ZVJlc3VsdC5SZXF1ZXN0SWQpLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZSh1cGRhdGVSZXN1bHQuU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSA+PSAxMSkge1xuICAgICAgICAgICAgICAgIGxldCBzdGF0dXNBcnJheSA9IFtcIlVQREFURV9GQUlMRURcIiwgXCJVUERBVEVfQ09NUExFVEVcIiwgXCJST0xMQkFDS19GQUlMRURcIiwgXCJST0xMQkFDS19DT01QTEVURVwiXVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YWNrSWRJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5SWQobG9jYWxTdGFja0luZm8uc3RhY2tJZClcbiAgICAgICAgICAgICAgICBsZXQgbmV3U3RhY2tJZEluZm9VcGRhdGVUaW1lID0gbmV3U3RhY2tJZEluZm8uVXBkYXRlVGltZSA/IG5ld1N0YWNrSWRJbmZvLlVwZGF0ZVRpbWUgOiBuZXdTdGFja0lkSW5mby5DcmVhdGVUaW1lXG4gICAgICAgICAgICAgICAgaWYgKG5ld1N0YWNrSWRJbmZvLlN0YXR1cyA9PSAnVVBEQVRFX0lOX1BST0dSRVNTJyB8fCBuZXdTdGFja0lkSW5mby5TdGF0dXMgPT0gJ1JPTExCQUNLX0lOX1BST0dSRVNTJykge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQodXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNBcnJheS5pbmNsdWRlcyhuZXdTdGFja0lkSW5mby5TdGF0dXMpICYmIG5ld1N0YWNrSWRJbmZvVXBkYXRlVGltZSAhPSBzdGFja1VwZGF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBuZXdTdGFja0lkSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShuZXdTdGFja0lkSW5mby5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjaywgcGxlYXNlIGNoZWNrIHlvdSBzZXJ2aWNlIGVuZHBvaW50LicpXG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCB1cGRhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudCh1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgY29sb3JzLmJsdWUodXBkYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICBjb2xvcnMuYmx1ZSh1cGRhdGVSZXN1bHQuU3RhY2tJZCksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyByb3NDcmVhdGVTdGFjayhjbGllbnQ6IGFueSwgY29udGVudDogYW55LCByZXF1ZXN0T3B0aW9uczogYW55LCByZXNvdXJjZUdyb3VwSWQ6IGFueSwgc3RhY2tOYW1lOiBhbnksIGRldGFpbExvZzogYW55KSB7XG4gICAgICAgIGxldCBjcmVhdGVSZXN1bHRSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgbGV0IGNyZWF0ZUVycm9yUmVxdWVzdElkOiBhbnk7XG4gICAgICAgIGxldCBuZXR3b3JrRXJyb3JFeGNlcHRpb246IGFueTtcbiAgICAgICAgbGV0IGNyZWF0ZVJlc3VsdDogYW55O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY3JlYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LmNyZWF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgY3JlYXRlUmVzdWx0UmVxdWVzdElkID0gY3JlYXRlUmVzdWx0LlJlcXVlc3RJZFxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoJ2NyZWF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjcmVhdGVFcnJvclJlcXVlc3RJZCA9IGUuZGF0YS5SZXF1ZXN0SWRcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvckV4Y2VwdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNyZWF0ZUVycm9yUmVxdWVzdElkKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuUmVxdWVzdGVkSWQ6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJywgZS5jb2RlLCBjcmVhdGVFcnJvclJlcXVlc3RJZCwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKCFjcmVhdGVSZXN1bHRSZXF1ZXN0SWQgJiYgIWNyZWF0ZUVycm9yUmVxdWVzdElkKSB8fCBuZXR3b3JrRXJyb3JFeGNlcHRpb24pIHtcbiAgICAgICAgICAgIGxldCBzbGVlcFRpbWUgPSA1MDAwO1xuICAgICAgICAgICAgYXdhaXQgc2xlZXAoc2xlZXBUaW1lKTtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgMTEpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3JlYXRlUmVzdWx0UmVxdWVzdElkOiBhbnk7XG4gICAgICAgICAgICAgICAgbGV0IGNyZWF0ZUVycm9yUmVxdWVzdElkOiBhbnk7XG4gICAgICAgICAgICAgICAgbGV0IG5ldHdvcmtFcnJvckV4Y2VwdGlvbjogYW55O1xuICAgICAgICAgICAgICAgIGxldCBjcmVhdGVSZXN1bHQ6IGFueTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQuY3JlYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJlc3VsdFJlcXVlc3RJZCA9IGNyZWF0ZVJlc3VsdC5SZXF1ZXN0SWRcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXRhaWxMb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdyZXRyeSBjcmVhdGUgc3RhY2sgZXJyb3IgaW5mbyBpcyAlcycsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUVycm9yUmVxdWVzdElkID0gZS5kYXRhLlJlcXVlc3RJZFxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdTZXJ2aWNlVW5hdmFpbGFibGUnIHx8IGUuY29kZSA9PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvckV4Y2VwdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3JlYXRlRXJyb3JSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGNyZWF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgY3JlYXRlRXJyb3JSZXF1ZXN0SWQsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKCFjcmVhdGVSZXN1bHRSZXF1ZXN0SWQgJiYgIWNyZWF0ZUVycm9yUmVxdWVzdElkKSB8fCBuZXR3b3JrRXJyb3JFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsZWVwVGltZSA8IDIwMDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGVlcFRpbWUgPSBzbGVlcFRpbWUgKyA1MDAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoc2xlZXBUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBjcmVhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoY3JlYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoY3JlYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGNyZWF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpID49IDExKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhY2tJZEluZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSwgcmVzb3VyY2VHcm91cElkKVxuICAgICAgICAgICAgICAgIGlmIChuZXdTdGFja0lkSW5mbykge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoY3JlYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrLCBwbGVhc2UgY2hlY2sgeW91IHNlcnZpY2UgZW5kcG9pbnQuJylcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIGNyZWF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5SZXF1ZXN0ZWRJZDogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgIGNvbG9ycy5ibHVlKGNyZWF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlmZk9wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBzdHJlYW0/OiBOb2RlSlMuV3JpdGFibGVTdHJlYW07XG4gICAgY29udGV4dExpbmVzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVwbG95T3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHNlbGVjdCB0aGUgZ2l2ZW4gc3RhY2tcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZXhjbHVzaXZlbHk/OiBib29sZWFuO1xuICAgIHBhcmFtZXRlcnM/OiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfTtcbiAgICB0aW1lb3V0OiBzdHJpbmc7XG4gICAgc3luYzogYm9vbGVhbjtcbiAgICBvdXRwdXRzRmlsZTogYm9vbGVhbjtcbiAgICBza2lwSWZOb0NoYW5nZXM6IGJvb2xlYW47XG4gICAgZGlzYWJsZVJvbGxiYWNrOiBib29sZWFuO1xuICAgIHJlc291cmNlR3JvdXBJZDogc3RyaW5nO1xuICAgIGRldGFpbExvZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXN0cm95T3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG4gICAgcXVpZXQ/OiBib29sZWFuO1xuICAgIHN5bmM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRPcHRpb25zIHtcbiAgICBzdGFja05hbWU6IHN0cmluZ1tdO1xuICAgIGxvZ2ljYWxSZXNvdXJjZUlkOiBzdHJpbmc7XG4gICAgcGFnZU51bWJlcjogc3RyaW5nO1xuICAgIHBhZ2VTaXplOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3V0UHV0T3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW5lcmF0ZVN0YWNrSW5mb09wdGlvbnMge1xuICAgIHJlc291cmNlR3JvdXBJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RTdGFja09wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuICAgIHBhZ2VOdW1iZXI6IHN0cmluZztcbiAgICBwYWdlU2l6ZTogc3RyaW5nO1xuICAgIGFsbDogc3RyaW5nO1xuICAgIHJlc291cmNlR3JvdXBJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1NldE9wdGlvbnMge1xuICAgIGdsb2JhbDogc3RyaW5nO1xuICAgIGVuZHBvaW50OiBzdHJpbmc7XG4gICAgcmVnaW9uOiBzdHJpbmc7XG4gICAgbW9kZTogc3RyaW5nO1xuICAgIGFrOiBzdHJpbmc7XG4gICAgc2s6IHN0cmluZztcbiAgICBzdHM6IHN0cmluZztcbiAgICByYW1Sb2xlQXJuOiBzdHJpbmc7XG4gICAgcm9sZVNlc3Npb25OYW1lOiBzdHJpbmc7XG4gICAgcmFtUm9sZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkQ29uZmlnT3B0aW9ucyB7XG4gICAgZ2xvYmFsPzogc3RyaW5nO1xuICAgIGxvYWRGaWxlUGF0aDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnIHtcbiAgICByZWFkb25seSBLZXk6IHN0cmluZztcbiAgICByZWFkb25seSBWYWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVBbmRVcGRhdGVMYW5ndWFnZUluZm8obGFuZ3VhZ2U6IHN0cmluZykge1xuICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgUFJPSkVDVF9DT05GSUcpO1xuICAgIGxldCBmaWxlQ29udGVudDogYW55O1xuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGluZm8gPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcbiAgICAgICAgaW5mb1snbGFuZ3VhZ2VJbmZvJ10gPSBsYW5ndWFnZTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoaW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkTGFuZ3VhZ2VJbmZvKCkge1xuICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgUFJPSkVDVF9DT05GSUcpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGVDb250ZW50KVsnbGFuZ3VhZ2VJbmZvJ10udG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJydcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWRMZWZ0KG46IG51bWJlciwgeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoeCkge1xuICAgICAgICByZXR1cm4gJyAnLnJlcGVhdChNYXRoLm1heCgwLCBuIC0geC5sZW5ndGgpKSArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWRSaWdodChuOiBudW1iZXIsIHg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHgpIHtcbiAgICAgICAgcmV0dXJuIHggKyAnICcucmVwZWF0KE1hdGgubWF4KDAsIG4gLSB4Lmxlbmd0aCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3J0ZW4obWF4V2lkdGg6IG51bWJlciwgcDogc3RyaW5nKSB7XG4gICAgaWYgKHAubGVuZ3RoIDw9IG1heFdpZHRoKSB7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgICBjb25zdCBoYWxmID0gTWF0aC5mbG9vcigobWF4V2lkdGggLSAzKSAvIDIpO1xuICAgIHJldHVybiBwLnN1YnN0cigwLCBoYWxmKSArICcuLi4nICsgcC5zdWJzdHIocC5sZW5ndGggLSBoYWxmKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2Vuc2l0aXphdGlvbihpbnB1dFN0cmluZzogc3RyaW5nLCBtaXhMZW5ndGggPSAzKSB7XG4gICAgLy8gbWl4TGVuZ3RoIOWtl+espuS4suWwkeS6juS4gOWumuWAvOWImeiEseaVj+WFqOmDqO+8jOWinuWKoOiEseaVj+S9jeaVsFxuICAgIGlmIChpc1N0cmluZyhpbnB1dFN0cmluZykgfHwgaXNOdW1iZXIoaW5wdXRTdHJpbmcpKSB7XG4gICAgICAgIGNvbnN0IHN0ciA9IFN0cmluZyhpbnB1dFN0cmluZyk7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoIDw9IG1peExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcqJy5yZXBlYXQobWl4TGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuICAgICAgICBjb25zdCBmaXJzdFN0ciA9IHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAvIG1peExlbmd0aCk7XG4gICAgICAgIGNvbnN0IGxhc3RTdHIgPSBzdHIuc3Vic3RyKC1zdHIubGVuZ3RoIC8gbWl4TGVuZ3RoKTtcbiAgICAgICAgY29uc3QgbWlkZGxlU3RyID0gc3RyXG4gICAgICAgICAgICAuc3Vic3RyaW5nKHN0ci5sZW5ndGggLyBtaXhMZW5ndGgsIGxlbiAtIE1hdGguYWJzKC1zdHIubGVuZ3RoIC8gbWl4TGVuZ3RoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFxzXFxTXS9naSwgJyonKTtcbiAgICAgICAgcmV0dXJuIGZpcnN0U3RyICsgbWlkZGxlU3RyICsgbGFzdFN0cjtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufSJdfQ==