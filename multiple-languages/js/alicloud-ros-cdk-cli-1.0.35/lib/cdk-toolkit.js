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
                roleArn = readlineSync.question(`RoleArn [${defaultRoleArn}]:`);
                roleSessionName = readlineSync.question(`RoleSessionName [${defaultRoleSessionName}]:`);
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
        await this.syncStackInfo();
        const stacks = await this.selectStacksForDeploy(options.stackNames, options.exclusively);
        const stackName = options.stackNames.length !== 0 ? options.stackNames[0] : stacks.stackArtifacts[0].id;
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        const client = await this.getRosClient();
        let templateBody = fs.readFileSync(`./cdk.out/${stackName}.template.json`);
        let ClientToken = generateSafeId();
        let disableRollback = options.disableRollback;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRvb2xraXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstdG9vbGtpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4Q0FBOEM7QUFDOUMsNkJBQTZCO0FBQzdCLDBDQUErQztBQUMvQywrQkFBNEI7QUFDNUIsNENBQStDO0FBQy9DLG1DQUEwQztBQUUxQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUN0RCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixpREFBNEM7QUFDNUMsdURBQTBEO0FBQzFELHlEQUE4RztBQUU5Ryx1Q0FBK0Q7QUFDL0QseUNBQXlEO0FBQ3pELHFDQUE2QjtBQUM3QixpQ0FBc0M7QUFDdEMsMkNBQWlEO0FBQ2pELCtCQUErQjtBQUUvQixNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVuRCxNQUFNLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQztBQUMxQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDeEIsTUFBTSxXQUFXLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN2QyxNQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztBQUNyQyxNQUFNLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztBQUNsQyxNQUFNLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQztBQUMvQyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7QUFDMUIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDO0FBQzVCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQztBQUM5QixNQUFNLGFBQWEsR0FBRyxTQUFTLENB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LENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sU0FBUyxHQUFHLEdBQUc7YUFDaEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQzthQUMxRSxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sUUFBUSxHQUFHLFNBQVMsR0FBRyxPQUFPLENBQUM7S0FDekM7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFoQkQsMENBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ3V0aWwnO1xuaW1wb3J0IHtkZWNpcGhlciwgY2lwaGVyfSBmcm9tICcuL3V0aWwvY2lwaGVyJztcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICd1dGlsJztcbmltcG9ydCB7UmV3cml0YWJsZUJsb2NrfSBmcm9tICcuL3V0aWwvZGlzcGxheSc7XG5pbXBvcnQge2lzU3RyaW5nLCBpc051bWJlcn0gZnJvbSAnbG9kYXNoJztcblxuY29uc3Qgcm9zQ2xpZW50ID0gcmVxdWlyZSgnQGFsaWNsb3VkL3Jvcy0yMDE5LTA5LTEwJyk7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuaW1wb3J0IHtleGVjIGFzIF9leGVjfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBDcmVkZW50aWFscywge0NvbmZpZ30gZnJvbSAnQGFsaWNsb3VkL2NyZWRlbnRpYWxzJztcbmltcG9ydCB7Q2xvdWRBc3NlbWJseSwgRGVmYXVsdFNlbGVjdGlvbiwgRXh0ZW5kZWRTdGFja1NlbGVjdGlvbiwgU3RhY2tDb2xsZWN0aW9ufSBmcm9tICcuL2FwaS9jbG91ZC1hc3NlbWJseSc7XG5pbXBvcnQge0Nsb3VkRXhlY3V0YWJsZX0gZnJvbSAnLi9hcGkvY2xvdWQtZXhlY3V0YWJsZSc7XG5pbXBvcnQge2RhdGEsIGVycm9yLCBwcmludCwgc3VjY2Vzcywgd2FybmluZ30gZnJvbSAnLi9sb2dnaW5nJztcbmltcG9ydCB7Q29uZmlndXJhdGlvbiwgUFJPSkVDVF9DT05GSUd9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHtleGl0fSBmcm9tICdwcm9jZXNzJztcbmltcG9ydCB7cHJpbnRTdGFja0RpZmZ9IGZyb20gJy4vZGlmZic7XG5pbXBvcnQge2Rlc2VyaWFsaXplU3RydWN0dXJlfSBmcm9tICcuL3NlcmlhbGl6ZSc7XG5pbXBvcnQge3Byb21pc2lmeX0gZnJvbSAndXRpbCc7XG5cbmNvbnN0IGdlbmVyYXRlU2FmZUlkID0gcmVxdWlyZSgnZ2VuZXJhdGUtc2FmZS1pZCcpO1xuXG5jb25zdCBDT05GSUdfTkFNRSA9ICdhY2NvdW50LmNvbmZpZy5qc29uJztcbmNvbnN0IExPQ0FMX1BBVEggPSAnLi8nO1xuY29uc3QgR0xPQkFMX1BBVEggPSBfX2Rpcm5hbWUgKyAnLy4uLyc7XG5jb25zdCBTVEFDS19JTkZPID0gJ3N0YWNrLmluZm8uanNvbic7XG5jb25zdCBERVBMT1lfU1RBQ0tfSURfTEVOR1RIID0gMzY7XG5jb25zdCBDTElfQ09ORklHX0ZJTEUgPSAnLy5hbGl5dW4vY29uZmlnLmpzb24nO1xuY29uc3QgSU5JVF9TVEFDSyA9ICdpbml0JztcbmNvbnN0IFNZTlRIX1NUQUNLID0gJ3N5bnRoJztcbmNvbnN0IERFUExPWV9TVEFDSyA9ICdkZXBsb3knO1xuY29uc3QgREVTVFJPWV9TVEFDSyA9ICdkZXN0cm95JztcbmNvbnN0IFBBQ0tBR0VfSlNPTiA9IF9fZGlybmFtZSArICcvLi4vcGFja2FnZS5qc29uJztcbmNvbnN0IE9VVFBVVFNfSlNPTiA9ICdzdGFjay5vdXRwdXRzLmpzb24nO1xuXG5jb25zdCBleGVjID0gcHJvbWlzaWZ5KF9leGVjKTtcblxuY29uc3QgcmVxdWVzdE9wdGlvbnM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1VzZXItQWdlbnQnOiBcIlJPUy1DTEktXCIgKyBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhQQUNLQUdFX0pTT04pLnRvU3RyaW5nKCkpWyd2ZXJzaW9uJ10gKyBcIjo6XCIgKyByZWFkTGFuZ3VhZ2VJbmZvKClcbiAgICB9LFxuICAgIHRpbWVvdXQ6IDkwMDAwXG59O1xuXG5jb25zdCBzbGVlcCA9IGZ1bmN0aW9uIChtczogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59O1xuXG5cbmNvbnN0IHN0cmVhbSA9IHByb2Nlc3Muc3Rkb3V0O1xuXG5cbmxldCB3aXRoRGVmYXVsdFByaW50ZXJPYmo6IGFueTtcblxuXG5leHBvcnQgaW50ZXJmYWNlIENka1Rvb2xraXRQcm9wcyB7XG4gICAgLyoqXG4gICAgICogVGhlIENsb3VkIEV4ZWN1dGFibGVcbiAgICAgKi9cbiAgICBjbG91ZEV4ZWN1dGFibGU6IENsb3VkRXhlY3V0YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gYmUgdmVyYm9zZVxuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICB2ZXJib3NlPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIERvbid0IHN0b3Agb24gZXJyb3IgbWV0YWRhdGFcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgaWdub3JlRXJyb3JzPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRyZWF0IHdhcm5pbmdzIGluIG1ldGFkYXRhIGFzIGVycm9yc1xuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBzdHJpY3Q/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXBwbGljYXRpb24gY29uZmlndXJhdGlvbiAoc2V0dGluZ3MgYW5kIGNvbnRleHQpXG4gICAgICovXG4gICAgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbjtcbn1cblxuLyoqXG4gKiBUb29sa2l0IGxvZ2ljXG4gKlxuICogVGhlIHRvb2xraXQgcnVucyB0aGUgYGNsb3VkRXhlY3V0YWJsZWAgdG8gb2J0YWluIGEgY2xvdWQgYXNzZW1ibHlcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBDZGtUb29sa2l0IHtcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBnZXRKc29uKGZpbGVOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCBhbGxvd2VkRW1wdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBMT0NBTF9QQVRIICsgZmlsZU5hbWU7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlKVtrZXldO1xuICAgICAgICB9IGVsc2UgaWYgKGZpbGVOYW1lID09PSBTVEFDS19JTkZPKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGZpbGVQYXRoID0gR0xPQkFMX1BBVEggKyBmaWxlTmFtZTtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGUpW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhbGxvd2VkRW1wdHkpIHtcbiAgICAgICAgICAgIGVycm9yKFwiUGxlYXNlIHVzZSAncm9zLWNkayBjb25maWcgKC1nKScgdG8gc2V0IHlvdXIgYWNjb3VudCBjb25maWd1cmF0aW9uIGZpcnN0bHkhXCIpO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcHJvcHM6IENka1Rvb2xraXRQcm9wcykge1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRSb3NDbGllbnQoKSB7XG4gICAgICAgIGxldCBtb2RlVHlwZSA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3R5cGUnLCB0cnVlKVxuICAgICAgICBsZXQgZW5kcG9pbnQgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdlbmRwb2ludCcsIHRydWUpXG4gICAgICAgIGxldCBjb25maWdJbmZvOiBhbnk7XG4gICAgICAgIGxldCBjbGllbnQ7XG4gICAgICAgIHN3aXRjaCAobW9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Vjc19yYW1fcm9sZSc6XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JvbGVOYW1lJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0cyc6XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleUlkJykpLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKSxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnc2VjdXJpdHlUb2tlbicpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmFtX3JvbGVfYXJuJzpcbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyYW1fcm9sZV9hcm4nLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5SWQnKSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5U2VjcmV0JykpLFxuICAgICAgICAgICAgICAgICAgICByb2xlQXJuOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyb2xlQXJuJyksXG4gICAgICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncm9sZVNlc3Npb25OYW1lJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FjY2Vzc19rZXknOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FjY2Vzc19rZXknLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5SWQnKSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5U2VjcmV0JykpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZW5kcG9pbnQgPSBlbmRwb2ludCA/IGVuZHBvaW50IDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbSc7XG4gICAgICAgIGxldCBuZXdBY2Nlc3NLZXlJZDogc3RyaW5nO1xuICAgICAgICBsZXQgbmV3QWNjZXNzS2V5U2VjcmV0OiBzdHJpbmc7XG4gICAgICAgIGxldCBuZXdTZWN1cml0eVRva2VuOiBzdHJpbmc7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbmV3QWNjZXNzS2V5SWQgPSBuZXdBY2Nlc3NLZXlJZCA/IG5ld0FjY2Vzc0tleUlkIDogcHJvY2Vzcy5lbnYuQUNDRVNTX0tFWV9JRFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ld0FjY2Vzc0tleVNlY3JldCA9IG5ld0FjY2Vzc0tleVNlY3JldCA/IG5ld0FjY2Vzc0tleVNlY3JldCA6IHByb2Nlc3MuZW52LkFDQ0VTU19LRVlfU0VDUkVUXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbmV3U2VjdXJpdHlUb2tlbiA9IG5ld1NlY3VyaXR5VG9rZW4gPyBuZXdTZWN1cml0eVRva2VuIDogcHJvY2Vzcy5lbnYuU0VDVVJJVFlfVE9LRU5cbiAgICAgICAgaWYgKGNvbmZpZ0luZm8pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3JlZCA9IG5ldyBDcmVkZW50aWFscyhjb25maWdJbmZvKTtcbiAgICAgICAgICAgICAgICBuZXdBY2Nlc3NLZXlJZCA9IGF3YWl0IGNyZWQuZ2V0QWNjZXNzS2V5SWQoKTtcbiAgICAgICAgICAgICAgICBuZXdBY2Nlc3NLZXlTZWNyZXQgPSBhd2FpdCBjcmVkLmdldEFjY2Vzc0tleVNlY3JldCgpO1xuICAgICAgICAgICAgICAgIG5ld1NlY3VyaXR5VG9rZW4gPSBhd2FpdCBjcmVkLmdldFNlY3VyaXR5VG9rZW4oKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBjcmVkZW50aWFsIGluZm9ybWF0aW9uIHlvdSBpbXBvcnQgZnJvbSBDTEkgY29uZmlnIScgKyBlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuZXdBY2Nlc3NLZXlJZCB8fCAhbmV3QWNjZXNzS2V5U2VjcmV0KSB7XG4gICAgICAgICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIG9yIHNldCBlbnZpcm9ubWVudCB0byBzZXQgeW91ciBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZmlyc3RseSFcIik7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9IGVsc2UgaWYgKCFuZXdTZWN1cml0eVRva2VuKSB7XG4gICAgICAgICAgICBjbGllbnQgPSBuZXcgcm9zQ2xpZW50KHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IG5ld0FjY2Vzc0tleUlkLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogbmV3QWNjZXNzS2V5U2VjcmV0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsaWVudCA9IG5ldyByb3NDbGllbnQoe1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBlbmRwb2ludCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogbmV3QWNjZXNzS2V5SWQsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBuZXdBY2Nlc3NLZXlTZWNyZXQsXG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogbmV3U2VjdXJpdHlUb2tlblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGh0dHBNb2R1bGUgPSBjbGllbnQuZW5kcG9pbnQuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSA/IGh0dHBzIDogaHR0cDtcbiAgICAgICAgY2xpZW50LmtlZXBBbGl2ZUFnZW50ID0gbmV3IGh0dHBNb2R1bGUuQWdlbnQoe1xuICAgICAgICAgICAga2VlcEFsaXZlOiB0cnVlLFxuICAgICAgICAgICAga2VlcEFsaXZlTXNlY3M6IDE1MDAwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb25maWcoZ2xvYmFsOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBjb25maWdTYXZlUGF0aCA9IChnbG9iYWwgPyBHTE9CQUxfUEFUSCA6IExPQ0FMX1BBVEgpICsgQ09ORklHX05BTUU7XG4gICAgICAgIGxldCBzb3VyY2VNb2RlVHlwZTogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBzb3VyY2VFbmRwb2ludDogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBzb3VyY2VSZWdpb25JZDogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBzb3VyY2VBY2Nlc3NLZXlJZDogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBzb3VyY2VBY2Nlc3NLZXlTZWNyZXQ6IHN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgc291cmNlU2VjdXJpdHlUb2tlbjogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBzb3VyY2VSb2xlQXJuOiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNvdXJjZVJvbGVTZXNzaW9uTmFtZTogc3RyaW5nID0gJyc7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGNvbmZpZ1NhdmVQYXRoKSkge1xuICAgICAgICAgICAgbGV0IGNvbmZpZ0ZpbGUgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjb25maWdTYXZlUGF0aCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBzb3VyY2VNb2RlVHlwZSA9IGNvbmZpZ0ZpbGVbJ3R5cGUnXVxuICAgICAgICAgICAgc291cmNlRW5kcG9pbnQgPSBjb25maWdGaWxlWydlbmRwb2ludCddXG4gICAgICAgICAgICBzb3VyY2VSZWdpb25JZCA9IGNvbmZpZ0ZpbGVbJ3JlZ2lvbklkJ11cbiAgICAgICAgICAgIHNvdXJjZUFjY2Vzc0tleUlkID0gY29uZmlnRmlsZVsnYWNjZXNzS2V5SWQnXVxuICAgICAgICAgICAgc291cmNlQWNjZXNzS2V5U2VjcmV0ID0gY29uZmlnRmlsZVsnYWNjZXNzS2V5U2VjcmV0J11cbiAgICAgICAgICAgIHNvdXJjZVNlY3VyaXR5VG9rZW4gPSBjb25maWdGaWxlWydzZWN1cml0eVRva2VuJ11cbiAgICAgICAgICAgIHNvdXJjZVJvbGVBcm4gPSBjb25maWdGaWxlWydyb2xlQXJuJ11cbiAgICAgICAgICAgIHNvdXJjZVJvbGVTZXNzaW9uTmFtZSA9IGNvbmZpZ0ZpbGVbJ3JvbGVTZXNzaW9uTmFtZSddXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vZGVUeXBlT2JqID0ge1xuICAgICAgICAgICAgZWNzX3JhbV9yb2xlOiAnRWNzUmFtUm9sZScsXG4gICAgICAgICAgICBzdHM6ICdTdHNUb2tlbicsXG4gICAgICAgICAgICByYW1fcm9sZV9hcm46ICdSYW1Sb2xlQXJuJyxcbiAgICAgICAgICAgIGFjY2Vzc19rZXk6ICdBSydcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGxldCBkZWZhdWx0TW9kZVR5cGUgPSBzb3VyY2VNb2RlVHlwZSA/IG1vZGVUeXBlT2JqW3NvdXJjZU1vZGVUeXBlXSA6ICcnXG4gICAgICAgIGxldCBkZWZhdWx0RW5kcG9pbnQgPSBzb3VyY2VFbmRwb2ludCA/IHNvdXJjZUVuZHBvaW50IDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbSdcbiAgICAgICAgbGV0IGRlZmF1bHRSZWdpb25JZCA9IHNvdXJjZVJlZ2lvbklkID8gc291cmNlUmVnaW9uSWQgOiAnY24taGFuZ3pob3UnXG4gICAgICAgIGxldCBtb2RlVHlwZSA9IFsnQUsnLCAnU3RzVG9rZW4nLCAnUmFtUm9sZUFybicsICdFY3NSYW1Sb2xlJ11cblxuXG4gICAgICAgIGxldCBlbmRwb2ludCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgRW5kcG9pbnQob3B0aW9uYWwsIFske2RlZmF1bHRFbmRwb2ludC50b1N0cmluZygpfV0pOmAsIHtkZWZhdWx0SW5wdXQ6IGRlZmF1bHRFbmRwb2ludH0pO1xuICAgICAgICBsZXQgcmVnaW9uSWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYFJlZ2lvbklkKG9wdGlvbmFsLCBbJHtkZWZhdWx0UmVnaW9uSWQudG9TdHJpbmcoKX1dKTpgLCB7ZGVmYXVsdElucHV0OiBkZWZhdWx0UmVnaW9uSWR9KTtcbiAgICAgICAgbGV0IG1vZGVJbmRleCA9IHJlYWRsaW5lU3luYy5rZXlJblNlbGVjdChtb2RlVHlwZSwgYEF1dGhlbnRpY2F0ZSBtb2RlIFske2RlZmF1bHRNb2RlVHlwZS50b1N0cmluZygpfV06YCk7XG4gICAgICAgIGxldCBpbnB1dENvbmZpZ0luZm86IGFueSA9IHt9O1xuICAgICAgICBsZXQgY2hlY2tDb21tYW5kOiBzdHJpbmc7XG4gICAgICAgIGxldCBjdXJsQ29tbWFuZDogc3RyaW5nO1xuICAgICAgICBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgICAgICAgICAgICAgIGNoZWNrQ29tbWFuZCA9ICdwb3dlcnNoZWxsIC1Db21tYW5kIFwiKGN1cmwgLVVSaSBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLykuU3RhdHVzQ29kZVwiJztcbiAgICAgICAgICAgICAgICBjdXJsQ29tbWFuZCA9ICdwb3dlcnNoZWxsIC1Db21tYW5kIFwiKGN1cmwgLVVSaSBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLykuQ29udGVudFwiJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hlY2tDb21tYW5kID0gJ2N1cmwgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8gLW8gL2Rldi9udWxsIC1zIC13ICV7aHR0cF9jb2RlfSc7XG4gICAgICAgICAgICAgICAgY3VybENvbW1hbmQgPSAnY3VybCBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtzdGRvdXQ6IGNoZWNrU3Rkb3V0fSA9IGF3YWl0IGV4ZWMoY2hlY2tDb21tYW5kKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tTdGRvdXQudHJpbSgpICE9PSAnMjAwJykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBVc2UgRWNzUmFtUm9sZSBjb25maWcsIFBsZWFzZSBiaW5kIEVjc1JhbVJvbGUgdG8gdGhlIGhvc3QuJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBVc2UgRWNzUmFtUm9sZSBjb25maWcsIFBsZWFzZSBiaW5kIEVjc1JhbVJvbGUgdG8gdGhlIGhvc3QhJyArIGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7c3Rkb3V0OiBjdXJsU3Rkb3V0fSA9IGF3YWl0IGV4ZWMoY3VybENvbW1hbmQpO1xuICAgICAgICAgICAgbGV0IHJvbGVOYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBSb2xlTmFtZSwgVGhlIGNvbmZpZ3VyZWQgcm9sZSBvZiB0aGUgaG9zdDogWyR7Y3VybFN0ZG91dC50cmltKCl9XWAsIHtkZWZhdWx0SW5wdXQ6IGN1cmxTdGRvdXQudHJpbSgpfSk7XG4gICAgICAgICAgICBpbnB1dENvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgcm9sZU5hbWU6IHJvbGVOYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlJZDogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleVNlY3JldDogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHNlY3VyaXR5VG9rZW46IHN0cmluZztcbiAgICAgICAgICAgIGlmIChzb3VyY2VNb2RlVHlwZSA9PT0gJ3N0cycpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFjY2Vzc0tleUlkID0gZGVzZW5zaXRpemF0aW9uKGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleUlkLnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0QWNjZXNzS2V5U2VjcmV0ID0gZGVzZW5zaXRpemF0aW9uKGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleVNlY3JldC50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdFNlY3VyaXR5VG9rZW4gPSBkZXNlbnNpdGl6YXRpb24oYXdhaXQgZGVjaXBoZXIoc291cmNlU2VjdXJpdHlUb2tlbi50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgQWNjZXNzS2V5SWQgWyR7ZGVmYXVsdEFjY2Vzc0tleUlkfV06YCwge1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWNob0JhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbnB1dDogYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5SWQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYEFjY2Vzc0tleVNlY3JldCBbJHtkZWZhdWx0QWNjZXNzS2V5U2VjcmV0fV06YCwge1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWNob0JhY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbnB1dDogYXdhaXQgZGVjaXBoZXIoc291cmNlQWNjZXNzS2V5U2VjcmV0LnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbiA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgU2VjdXJpdHlUb2tlbiBbJHtkZWZhdWx0U2VjdXJpdHlUb2tlbn1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZVNlY3VyaXR5VG9rZW4udG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ0FjY2Vzc0tleUlkOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ0FjY2Vzc0tleVNlY3JldDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbiA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignU2VjdXJpdHlUb2tlbjonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dENvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlJZCksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5U2VjcmV0KSxcbiAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBhd2FpdCBjaXBoZXIoc2VjdXJpdHlUb2tlbilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1JhbVJvbGVBcm4nKSB7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5SWQ6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlTZWNyZXQ6IHN0cmluZztcbiAgICAgICAgICAgIGxldCByb2xlQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgcm9sZVNlc3Npb25OYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICBpZiAoc291cmNlTW9kZVR5cGUgPT09ICdyYW1fcm9sZV9hcm4nKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRBY2Nlc3NLZXlJZCA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlJZC50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFjY2Vzc0tleVNlY3JldCA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlTZWNyZXQudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRSb2xlQXJuID0gc291cmNlUm9sZUFybi50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRSb2xlU2Vzc2lvbk5hbWUgPSBzb3VyY2VSb2xlU2Vzc2lvbk5hbWUudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBBY2Nlc3NLZXlJZCBbJHtkZWZhdWx0QWNjZXNzS2V5SWR9XTpgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFY2hvQmFjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlJZC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgQWNjZXNzS2V5U2VjcmV0IFske2RlZmF1bHRBY2Nlc3NLZXlTZWNyZXR9XTpgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFY2hvQmFjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElucHV0OiBhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlTZWNyZXQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByb2xlQXJuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBSb2xlQXJuIFske2RlZmF1bHRSb2xlQXJufV06YCk7XG4gICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBSb2xlU2Vzc2lvbk5hbWUgWyR7ZGVmYXVsdFJvbGVTZXNzaW9uTmFtZX1dOmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgICAgICByb2xlQXJuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdSb2xlQXJuKGVnOiBhY3M6cmFtOjoqKioqKio6cm9sZS8qKioqKiopOicpO1xuICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignUm9sZVNlc3Npb25OYW1lOicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRDb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyYW1fcm9sZV9hcm4nLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5SWQpLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleVNlY3JldCksXG4gICAgICAgICAgICAgICAgcm9sZUFybjogcm9sZUFybixcbiAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHJvbGVTZXNzaW9uTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnQUsnKSB7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5SWQ6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlTZWNyZXQ6IHN0cmluZztcbiAgICAgICAgICAgIGlmIChzb3VyY2VNb2RlVHlwZSA9PT0gJ2FjY2Vzc19rZXknKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRBY2Nlc3NLZXlJZCA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlJZC50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEFjY2Vzc0tleVNlY3JldCA9IGRlc2Vuc2l0aXphdGlvbihhd2FpdCBkZWNpcGhlcihzb3VyY2VBY2Nlc3NLZXlTZWNyZXQudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYEFjY2Vzc0tleUlkIFske2RlZmF1bHRBY2Nlc3NLZXlJZH1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleUlkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBBY2Nlc3NLZXlTZWNyZXQgWyR7ZGVmYXVsdEFjY2Vzc0tleVNlY3JldH1dOmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVjaG9CYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW5wdXQ6IGF3YWl0IGRlY2lwaGVyKHNvdXJjZUFjY2Vzc0tleVNlY3JldC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignQWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYWNjZXNzX2tleScsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlJZCksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5U2VjcmV0KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGNlcnRpZmljYXRpb24gbWV0aG9kIG11c3QgYmUgc2VsZWN0ZWQnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRDb25maWdJbmZvLmVuZHBvaW50ID0gZW5kcG9pbnRcbiAgICAgICAgaW5wdXRDb25maWdJbmZvLnJlZ2lvbklkID0gcmVnaW9uSWRcbiAgICAgICAgbGV0IGZpbGUgPSBwYXRoLmpvaW4oY29uZmlnU2F2ZVBhdGgpO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KGlucHV0Q29uZmlnSW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBZb3VyIGNkayBjb25maWd1cmF0aW9uIGhhcyBiZWVuIHNhdmVkIHN1Y2Nlc3NmdWxseSFgKTtcbiAgICAgICAgZXhpdCgwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29uZmlnU2V0KG9wdGlvbnM6IENvbmZpZ1NldE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IGNvbmZpZ1NhdmVQYXRoID0gKG9wdGlvbnMuZ2xvYmFsID8gR0xPQkFMX1BBVEggOiBMT0NBTF9QQVRIKSArIENPTkZJR19OQU1FO1xuICAgICAgICBsZXQgbW9kZVR5cGUgPSBvcHRpb25zLm1vZGU7XG4gICAgICAgIGxldCBjb25maWdJbmZvOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IGFrID0gb3B0aW9ucy5hayA/IG9wdGlvbnMuYWsgOiAnJztcbiAgICAgICAgbGV0IHNrID0gb3B0aW9ucy5zayA/IG9wdGlvbnMuc2sgOiAnJztcbiAgICAgICAgbGV0IHN0c1Rva2VuID0gb3B0aW9ucy5zdHMgPyBvcHRpb25zLnN0cyA6ICcnO1xuICAgICAgICBsZXQgcmFtUm9sZUFybiA9IG9wdGlvbnMucmFtUm9sZUFybiA/IG9wdGlvbnMucmFtUm9sZUFybiA6ICcnO1xuICAgICAgICBsZXQgcm9sZVNlc3Npb25OYW1lID0gb3B0aW9ucy5yb2xlU2Vzc2lvbk5hbWUgPyBvcHRpb25zLnJvbGVTZXNzaW9uTmFtZSA6ICcnO1xuICAgICAgICBsZXQgcmFtUm9sZU5hbWUgPSBvcHRpb25zLnJhbVJvbGVOYW1lID8gb3B0aW9ucy5yYW1Sb2xlTmFtZSA6ICcnO1xuICAgICAgICBpZiAobW9kZVR5cGUgPT09ICdBSycpIHtcbiAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FjY2Vzc19rZXknLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWspLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHNrKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZSA9PT0gJ1N0c1Rva2VuJykge1xuICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RzJyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFrKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihzayksXG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogYXdhaXQgY2lwaGVyKHN0c1Rva2VuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZSA9PT0gJ1JhbVJvbGVBcm4nKSB7XG4gICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyYW1fcm9sZV9hcm4nLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWspLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHNrKSxcbiAgICAgICAgICAgICAgICByb2xlQXJuOiByYW1Sb2xlQXJuLFxuICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogcm9sZVNlc3Npb25OYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgcm9sZU5hbWU6IHJhbVJvbGVOYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGEgYXV0aGVudGljYXRlIG1vZGUgbXVzdCBiZSBpbiAoQUt8U3RzVG9rZW58UmFtUm9sZUFybnxFY3NSYW1Sb2xlKScsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmlsZSA9IHBhdGguam9pbihjb25maWdTYXZlUGF0aCk7XG4gICAgICAgIGNvbmZpZ0luZm8ucmVnaW9uSWQgPSBvcHRpb25zLnJlZ2lvbjtcbiAgICAgICAgY29uZmlnSW5mby5lbmRwb2ludCA9IG9wdGlvbnMuZW5kcG9pbnQ7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnSW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBZb3VyIGNkayBjb25maWd1cmF0aW9uIGhhcyBiZWVuIHNhdmVkIHN1Y2Nlc3NmdWxseSFgKTtcbiAgICAgICAgZXhpdCgwKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBhc3luYyBsb2FkQ2xpQ29uZmlnKG9wdGlvbnM6IExvYWRDb25maWdPcHRpb25zKSB7XG4gICAgICAgIGxldCBjb25maWdTYXZlUGF0aCA9IChvcHRpb25zLmdsb2JhbCA/IEdMT0JBTF9QQVRIIDogTE9DQUxfUEFUSCkgKyBDT05GSUdfTkFNRTtcbiAgICAgICAgbGV0IGNvbmZpZ3VyZUluZm9zID0gYXdhaXQgdGhpcy5nZXRDbGlDb25maWcob3B0aW9ucy5sb2FkRmlsZVBhdGgpXG4gICAgICAgIGxldCBtb2RlVHlwZSA9IE9iamVjdC5rZXlzKGNvbmZpZ3VyZUluZm9zKTtcbiAgICAgICAgbGV0IG1vZGVJbmRleCA9IHJlYWRsaW5lU3luYy5rZXlJblNlbGVjdChtb2RlVHlwZSwgJ1NlbGVjdCBhdXRoZW50aWNhdGUgbW9kZTonKTtcbiAgICAgICAgbGV0IHByb2ZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgbGV0IHByb2ZpbGVDb25maWc6IGFueSA9IHt9O1xuICAgICAgICBpZiAobW9kZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGEgY2VydGlmaWNhdGlvbiBtZXRob2QgbXVzdCBiZSBzZWxlY3RlZCcsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnQUsnKSB7XG4gICAgICAgICAgICBwcm9maWxlTmFtZXMgPSBjb25maWd1cmVJbmZvcy5BSy5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1N0c1Rva2VuJykge1xuICAgICAgICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuU3RzVG9rZW4ubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdSYW1Sb2xlQXJuJykge1xuICAgICAgICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuUmFtUm9sZUFybi5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XG4gICAgICAgICAgICBwcm9maWxlTmFtZXMgPSBjb25maWd1cmVJbmZvcy5FY3NSYW1Sb2xlLm1hcCgoaXRlbTogeyBuYW1lOiBhbnk7IH0pID0+IGl0ZW0ubmFtZSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJvZmlsZUluZGV4ID0gcmVhZGxpbmVTeW5jLmtleUluU2VsZWN0KHByb2ZpbGVOYW1lcywgJ1NlbGVjdCBBdXRoZW50aWNhdGUgcHJvZmlsZSBuYW1lOicpO1xuICAgICAgICBpZiAocHJvZmlsZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGEgY2VydGlmaWNhdGlvbiBwcm9maWxlIG11c3QgYmUgc2VsZWN0ZWQnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVuZHBvaW50ID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnZW5kcG9pbnQnLCB0cnVlKVxuICAgICAgICBsZXQgcmVnaW9uSWQ7XG4gICAgICAgIGxldCBjb25maWdJbmZvOiBhbnkgPSB7fTtcbiAgICAgICAgZW5kcG9pbnQgPSBlbmRwb2ludCA/IGVuZHBvaW50IDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbSc7XG4gICAgICAgIHN3aXRjaCAobW9kZVR5cGVbbW9kZUluZGV4XSkge1xuICAgICAgICAgICAgY2FzZSAnQUsnOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5BSy5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10gfHwgIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGFjY2Vzc0tleUlkIG9yIGFjY2Vzc0tleVNlY3JldCBDYW5ub3QgYmUgZW1wdHkhJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FjY2Vzc19rZXknLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10pLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU3RzVG9rZW4nOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5TdHNUb2tlbi5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10gfHwgIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddIHx8ICFwcm9maWxlQ29uZmlnWydzZWN1cml0eVRva2VuJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYWNjZXNzS2V5SWQsIGFjY2Vzc0tleVNlY3JldCBvciBzZWN1cml0eVRva2VuIENhbm5vdCBiZSBlbXB0eSEnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10pLFxuICAgICAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snc2VjdXJpdHlUb2tlbiddKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdSYW1Sb2xlQXJuJzpcbiAgICAgICAgICAgICAgICBwcm9maWxlQ29uZmlnID0gY29uZmlndXJlSW5mb3MuUmFtUm9sZUFybi5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10gfHwgIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddIHx8ICFwcm9maWxlQ29uZmlnWydyb2xlQXJuJ10gfHwgIXByb2ZpbGVDb25maWdbJ3JvbGVTZXNzaW9uTmFtZSddKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGFjY2Vzc0tleUlkLCBhY2Nlc3NLZXlTZWNyZXQsIHJvbGVBcm4gb3Igcm9sZVNlc3Npb25OYW1lIENhbm5vdCBiZSBlbXB0eSEnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10pLFxuICAgICAgICAgICAgICAgICAgICByb2xlQXJuOiBwcm9maWxlQ29uZmlnWydyb2xlQXJuJ10sXG4gICAgICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogcHJvZmlsZUNvbmZpZ1sncm9sZVNlc3Npb25OYW1lJ11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRWNzUmFtUm9sZSc6XG4gICAgICAgICAgICAgICAgcHJvZmlsZUNvbmZpZyA9IGNvbmZpZ3VyZUluZm9zLkVjc1JhbVJvbGUuZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9maWxlQ29uZmlnWydyb2xlTmFtZSddKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIHJvbGVOYW1lIENhbm5vdCBiZSBlbXB0eSEnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6IHByb2ZpbGVDb25maWdbJ3JvbGVOYW1lJ11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJlZ2lvbklkID0gcHJvZmlsZUNvbmZpZ1sncmVnaW9uJ10gPyBwcm9maWxlQ29uZmlnWydyZWdpb24nXSA6ICdjbi1oYW5nemhvdSc7XG4gICAgICAgIGNvbmZpZ0luZm8ucmVnaW9uSWQgPSByZWdpb25JZFxuICAgICAgICBjb25maWdJbmZvLmVuZHBvaW50ID0gZW5kcG9pbnRcbiAgICAgICAgbGV0IGZpbGUgPSBwYXRoLmpvaW4oY29uZmlnU2F2ZVBhdGgpO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KGNvbmZpZ0luZm8sIG51bGwsICdcXHQnKSk7XG4gICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgWW91ciBjZGsgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBsb2FkIGZyb20gQWxpeXVuIENsaSBjb25maWd1cmF0aW9uIHNhdmVkIHN1Y2Nlc3NmdWxseSAlcyAlcyFgLCBtb2RlVHlwZVttb2RlSW5kZXhdLCBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgIGV4aXQoMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxpc3Qoc2VsZWN0b3JzOiBzdHJpbmdbXSkge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JMaXN0KHNlbGVjdG9ycyk7XG4gICAgICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBsZXQgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKTtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBzdGFja0luZm8uc3RhdHVzXG4gICAgICAgICAgICBkYXRhKHN0YWNrLmlkLCBzdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTeW50aGVzaXplIHRoZSBnaXZlbiBzZXQgb2Ygc3RhY2tzIChjYWxsZWQgd2hlbiB0aGUgdXNlciBydW5zICdjZGsgc3ludGgnKVxuICAgICAqXG4gICAgICogSU5QVVQ6IFN0YWNrIG5hbWVzIGNhbiBiZSBzdXBwbGllZCB1c2luZyBhIGdsb2IgZmlsdGVyLiBJZiBubyBzdGFja3MgYXJlXG4gICAgICogZ2l2ZW4sIGFsbCBzdGFja3MgZnJvbSB0aGUgYXBwbGljYXRpb24gYXJlIGltcGxpY3RseSBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIE9VVFBVVDogSWYgbW9yZSB0aGFuIG9uZSBzdGFjayBlbmRzIHVwIGJlaW5nIHNlbGVjdGVkLCBhbiBvdXRwdXQgZGlyZWN0b3J5XG4gICAgICogc2hvdWxkIGJlIHN1cHBsaWVkLCB3aGVyZSB0aGUgdGVtcGxhdGVzIHdpbGwgYmUgd3JpdHRlbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgc3ludGgoc3RhY2tOYW1lczogc3RyaW5nW10sIGV4Y2x1c2l2ZWx5OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGlmZihzdGFja05hbWVzLCBleGNsdXNpdmVseSk7XG5cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIHNpbmdsZSBzdGFjaywgcHJpbnQgaXQgdG8gU1RET1VUXG4gICAgICAgIGlmIChzdGFja3Muc3RhY2tDb3VudCA9PT0gMSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tzLmZpcnN0U3RhY2suaWQsIFNZTlRIX1NUQUNLKTtcbiAgICAgICAgICAgIHJldHVybiBzdGFja3MuZmlyc3RTdGFjay50ZW1wbGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrLmlkLCBTWU5USF9TVEFDSyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0ludGVnTW9kZSA9IHByb2Nlc3MuZW52LkNES19JTlRFR19NT0RFID09PSAnMSc7XG4gICAgICAgIGlmIChpc0ludGVnTW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YWNrcy5zdGFja0FydGlmYWN0cy5tYXAoKHMpID0+IHMudGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm90IG91dHB1dHRpbmcgdGVtcGxhdGUgdG8gc3Rkb3V0LCBsZXQncyBleHBsYWluIHRoaW5ncyB0byB0aGUgdXNlciBhIGxpdHRsZSBiaXQuLi5cbiAgICAgICAgc3VjY2VzcyhgU3VjY2Vzc2Z1bGx5IHN5bnRoZXNpemVkIHRvICR7Y29sb3JzLmJsdWUocGF0aC5yZXNvbHZlKHN0YWNrcy5hc3NlbWJseS5kaXJlY3RvcnkpKX1gKTtcbiAgICAgICAgcHJpbnQoXG4gICAgICAgICAgICBgU3VwcGx5IGEgc3RhY2sgaWQgKCR7c3RhY2tzLnN0YWNrQXJ0aWZhY3RzLm1hcCgocykgPT4gY29sb3JzLmdyZWVuKHMuaWQpKS5qb2luKCcsICcpfSkgdG8gZGlzcGxheSBpdHMgdGVtcGxhdGUuYCxcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZXBsb3kob3B0aW9uczogRGVwbG95T3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXBsb3kob3B0aW9ucy5zdGFja05hbWVzLCBvcHRpb25zLmV4Y2x1c2l2ZWx5KTtcbiAgICAgICAgY29uc3Qgc3RhY2tOYW1lID0gb3B0aW9ucy5zdGFja05hbWVzLmxlbmd0aCAhPT0gMCA/IG9wdGlvbnMuc3RhY2tOYW1lc1swXSA6IHN0YWNrcy5zdGFja0FydGlmYWN0c1swXS5pZDtcbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgbGV0IHRlbXBsYXRlQm9keSA9IGZzLnJlYWRGaWxlU3luYyhgLi9jZGsub3V0LyR7c3RhY2tOYW1lfS50ZW1wbGF0ZS5qc29uYCk7XG4gICAgICAgIGxldCBDbGllbnRUb2tlbiA9IGdlbmVyYXRlU2FmZUlkKCk7XG4gICAgICAgIGxldCBkaXNhYmxlUm9sbGJhY2sgPSBvcHRpb25zLmRpc2FibGVSb2xsYmFja1xuICAgICAgICBsZXQgY29udGVudDogeyBbbmFtZTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBTdGFja05hbWU6IHN0YWNrTmFtZS50b1N0cmluZygpLFxuICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgIFRpbWVvdXRJbk1pbnV0ZXM6IG9wdGlvbnMudGltZW91dCxcbiAgICAgICAgICAgIFRlbXBsYXRlQm9keTogdGVtcGxhdGVCb2R5LFxuICAgICAgICAgICAgQ2xpZW50VG9rZW46IENsaWVudFRva2VuLFxuICAgICAgICAgICAgRGlzYWJsZVJvbGxiYWNrOiBkaXNhYmxlUm9sbGJhY2tcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHN5bmMgPSBvcHRpb25zLnN5bmNcbiAgICAgICAgbGV0IG91dHB1dHMgPSBvcHRpb25zLm91dHB1dHNGaWxlXG4gICAgICAgIGxldCBza2lwSWZOb0NoYW5nZXMgPSBvcHRpb25zLnNraXBJZk5vQ2hhbmdlc1xuICAgICAgICBsZXQgcmVzb3VyY2VHcm91cElkID0gb3B0aW9ucy5yZXNvdXJjZUdyb3VwSWRcbiAgICAgICAgbGV0IGRldGFpbExvZyA9IG9wdGlvbnMuZGV0YWlsTG9nXG4gICAgICAgIHJlcXVlc3RPcHRpb25zWydtZXRob2QnXSA9ICdQT1NUJ1xuXG4gICAgICAgIGlmIChyZXNvdXJjZUdyb3VwSWQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRbJ1Jlc291cmNlR3JvdXBJZCddID0gcmVzb3VyY2VHcm91cElkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhY2tzLnN0YWNrQXJ0aWZhY3RzWzBdLnRhZ3MpIHtcbiAgICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMTtcbiAgICAgICAgICAgIGxldCBwYXJhcyA9IHN0YWNrcy5zdGFja0FydGlmYWN0c1swXS50YWdzO1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFzKSB7XG4gICAgICAgICAgICAgICAgY29udGVudFsnVGFncy4nICsgY291bnQudG9TdHJpbmcoKSArICcuS2V5J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgY29udGVudFsnVGFncy4nICsgY291bnQudG9TdHJpbmcoKSArICcuVmFsdWUnXSA9IHBhcmFzW2tleV07XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMTtcbiAgICAgICAgICAgIGxldCBwYXJhcyA9IG9wdGlvbnMucGFyYW1ldGVycztcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhcykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1BhcmFtZXRlcnMuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlBhcmFtZXRlcktleSddID0ga2V5O1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1BhcmFtZXRlcnMuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlBhcmFtZXRlclZhbHVlJ10gPSBwYXJhc1trZXldO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9jYWxTdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKVxuICAgICAgICBpZiAobG9jYWxTdGFja0luZm8uc3RhY2tJZCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5SWQobG9jYWxTdGFja0luZm8uc3RhY2tJZClcbiAgICAgICAgICAgIGlmIChzdGFja0luZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgc3RhY2tcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdGFja0luZm8uc3RhY2tJZCAhPT0gc3RhY2tJbmZvLlN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gdXBkYXRlIHN0YWNrLCBiZWNhdXNlIHN0YWNrIGxvY2FsIGluZm8gZG9zZSBub3QgbWF0Y2ggdGhlIHJlbW90ZSBzZXJ2ZXIuJylcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50WydTdGFja0lkJ10gPSBzdGFja0luZm8uU3RhY2tJZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWNrU3RhdHVzID0gc3RhY2tJbmZvLlN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhY2tVcGRhdGVUaW1lID0gc3RhY2tJbmZvLlVwZGF0ZVRpbWUgPyBzdGFja0luZm8uVXBkYXRlVGltZSA6IHN0YWNrSW5mby5DcmVhdGVUaW1lXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1N0YXR1cy5pbmRleE9mKFwiSU5fUFJPR1JFU1NcIikgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJyVzOiBkZXBsb3lpbmcuLi4nLCBjb2xvcnMuYm9sZChzdGFja05hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zeW5jVXBkYXRlU3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgb3V0cHV0cywgc2tpcElmTm9DaGFuZ2VzLCBzdGFja05hbWUsIGxvY2FsU3RhY2tJbmZvLCBzdGFja1VwZGF0ZVRpbWUsIGRldGFpbExvZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5yb3NVcGRhdGVTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBzdGFja05hbWUsIGxvY2FsU3RhY2tJbmZvLCBzdGFja1VwZGF0ZVRpbWUsIGRldGFpbExvZywgc2tpcElmTm9DaGFuZ2VzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdOb3RTdXBwb3J0ZWQnICYmIGUubWVzc2FnZS5zdGFydHNXaXRoKCdVcGRhdGUgdGhlIGNvbXBsZXRlbHkgc2FtZSBzdGFjaycpICYmIHNraXBJZk5vQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHN0YWNrSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygnVGhlIHN0YWNrIGlzIGNvbXBsZXRlbHkgdGhlIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXBkYXRlLicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcigndXBkYXRlIHN0YWNrIGVycm9yIGluZm8gaXMgJXMnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2s6IEVycm9yQ29kZTogJXNcXG5SZXF1ZXN0ZWRJZDogJXNcXG5FcnJvck1lc3NhZ2U6JXMnLCBlLmNvZGUsIGUuZGF0YS5SZXF1ZXN0SWQsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjaywgYmVjYXVzZSBzdGFjayBzdGF0dXMgaXMgJXMnLCBzdGFja1N0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHN0YWNrXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCclczogZGVwbG95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN5bmNEZXBsb3lTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBvdXRwdXRzLCByZXNvdXJjZUdyb3VwSWQsIHN0YWNrTmFtZSwgZGV0YWlsTG9nKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucm9zQ3JlYXRlU3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgcmVzb3VyY2VHcm91cElkLCBzdGFja05hbWUsIGRldGFpbExvZylcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2NyZWF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuUmVxdWVzdGVkSWQ6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJywgZS5jb2RlLCBlLmRhdGEuUmVxdWVzdElkLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSwgcmVzb3VyY2VHcm91cElkKVxuICAgICAgICAgICAgaWYgKHN0YWNrSW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIHN0YWNrIGlzIGV4aXN0IHNlbmQgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGNyZWF0ZSBzdGFjaywgYmVjYXVzZSBzdGFjayAgJXMgaXMgZXhpc3QgaW4gdGhpcyByZWdpb24uJywgc3RhY2tOYW1lKVxuICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHN0YWNrXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCclczogZGVwbG95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN5bmNEZXBsb3lTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBvdXRwdXRzLCByZXNvdXJjZUdyb3VwSWQsIHN0YWNrTmFtZSwgZGV0YWlsTG9nKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucm9zQ3JlYXRlU3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgcmVzb3VyY2VHcm91cElkLCBzdGFja05hbWUsIGRldGFpbExvZylcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2NyZWF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuUmVxdWVzdGVkSWQ6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJywgZS5jb2RlLCBlLmRhdGEuUmVxdWVzdElkLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGlmZihvcHRpb25zOiBEaWZmT3B0aW9ucykge1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXN0cm95KG9wdGlvbnMuc3RhY2tOYW1lcyk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCByZWdpb25JbkxvY2FsID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uSW5Mb2NhbCA9IHJlZ2lvbkluTG9jYWwgPyByZWdpb25JbkxvY2FsIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBvcHRpb25zLnN0cmVhbSB8fCBwcm9jZXNzLnN0ZGVycjtcbiAgICAgICAgY29uc3QgY29udGV4dExpbmVzID0gb3B0aW9ucy5jb250ZXh0TGluZXMgfHwgMztcbiAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBsZXQgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKTtcbiAgICAgICAgICAgIGlmICghc3RhY2tJbmZvLnN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBzdHJlYW0ud3JpdGUoZm9ybWF0KCdTdGFjayAlcyBoYXMgbm90IGJlZW4gZGVwbG95ZWQgb3Igc3RhY2sgZG9lc25cXCd0IGV4aXN0IGluIHRoZSBzdGFjay5pbmZvLmpzb24gZmlsZSBcXG4nLCBjb2xvcnMuYm9sZChzdGFjay5kaXNwbGF5TmFtZSkpKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsaWVudC5nZXRUZW1wbGF0ZSh7UmVnaW9uSWQ6IHJlZ2lvbkluTG9jYWwsIFN0YWNrSWQ6IHN0YWNrSW5mby5zdGFja0lkfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZGVzZXJpYWxpemVTdHJ1Y3R1cmUocmVzLlRlbXBsYXRlQm9keSk7XG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbS53cml0ZShmb3JtYXQoJ1N0YWNrICVzXFxuJywgY29sb3JzLmJvbGQoc3RhY2suZGlzcGxheU5hbWUpKSk7XG4gICAgICAgICAgICAgICAgICAgIHByaW50U3RhY2tEaWZmKHRlbXBsYXRlLCBzdGFjaywgY29udGV4dExpbmVzLCBzdHJlYW0pO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIHN5bnRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2suaWQsIFNZTlRIX1NUQUNLKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCB0ZW1wbGF0ZTogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZXZlbnQob3B0aW9uczogRXZlbnRPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXN0cm95KFtdKTtcbiAgICAgICAgbGV0IHN0YWNrSWQgPSAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSkuc3RhY2tJZFxuICAgICAgICBpZiAoIW9wdGlvbnMuc3RhY2tOYW1lKSB7XG4gICAgICAgICAgICBlcnJvcignSWYgd2FudCB0byBnZXQgcmVzb3VyY2Ugc3RhY2sgZXZlbnRzLCBzdGFjayBuYW1lIG11c3QgYmUgU3BlY2lmaWVkIScpXG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGFja3Muc3RhY2tJZHMuaW5jbHVkZXMob3B0aW9ucy5zdGFja05hbWVbMF0pKSB7XG4gICAgICAgICAgICBlcnJvcihgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpc3QsIFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIGlucHV0IHN0YWNrIG5hbWUhYClcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YWNrSWQpIHtcbiAgICAgICAgICAgIGVycm9yKGBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGlzdCBpbiB0aGUgc3RhY2suaW5mby5qc29uIGZpbGUsIFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIHN0YWNrOiAlcyFgLCBvcHRpb25zLnN0YWNrTmFtZVswXSlcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgTG9naWNhbFJlc291cmNlSWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBpZiAob3B0aW9ucy5sb2dpY2FsUmVzb3VyY2VJZCkge1xuICAgICAgICAgICAgTG9naWNhbFJlc291cmNlSWRzLnB1c2gob3B0aW9ucy5sb2dpY2FsUmVzb3VyY2VJZClcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBjbGllbnRcbiAgICAgICAgICAgIC5saXN0U3RhY2tFdmVudHMoe1xuICAgICAgICAgICAgICAgIFN0YWNrSWQ6IHN0YWNrSWQsXG4gICAgICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgICAgICBMb2dpY2FsUmVzb3VyY2VJZDogTG9naWNhbFJlc291cmNlSWRzLFxuICAgICAgICAgICAgICAgIFBhZ2VTaXplOiBvcHRpb25zLnBhZ2VTaXplID8gTnVtYmVyKG9wdGlvbnMucGFnZVNpemUpIDogMTAsXG4gICAgICAgICAgICAgICAgUGFnZU51bWJlcjogb3B0aW9ucy5wYWdlTnVtYmVyID8gTnVtYmVyKG9wdGlvbnMucGFnZU51bWJlcikgOiAxXG4gICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIFN0YWNrICVzIFxcbiBFdmVudHMgaXM6IFxcbiAlcyBcXG5gLCBjb2xvcnMuYmx1ZShvcHRpb25zLnN0YWNrTmFtZVswXSksIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5FdmVudHMsIG51bGwsIFwiXFx0XCIpKSk7XG4gICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBkZXN0cm95LmApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhvcHRpb25zLnN0YWNrTmFtZVswXSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHN0YWNrIGV2ZW50czogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb3V0cHV0KG9wdGlvbnM6IE91dFB1dE9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRlc3Ryb3koW10pO1xuICAgICAgICBsZXQgc3RhY2tJZCA9IChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8ob3B0aW9ucy5zdGFja05hbWVbMF0pKS5zdGFja0lkXG4gICAgICAgIGlmICghb3B0aW9ucy5zdGFja05hbWUpIHtcbiAgICAgICAgICAgIGVycm9yKCdJZiB3YW50IHRvIGdldCByZXNvdXJjZSBzdGFjayBvdXRwdXQsIHN0YWNrIG5hbWUgbXVzdCBiZSBTcGVjaWZpZWQhJylcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YWNrcy5zdGFja0lkcy5pbmNsdWRlcyhvcHRpb25zLnN0YWNrTmFtZVswXSkpIHtcbiAgICAgICAgICAgIGVycm9yKGBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGlzdCwgUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgaW5wdXQgc3RhY2sgbmFtZSFgKVxuICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICB9XG4gICAgICAgIGlmICghc3RhY2tJZCkge1xuICAgICAgICAgICAgZXJyb3IoYFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXN0IGluIHRoZSBzdGFjay5pbmZvLmpzb24gZmlsZSwgUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgc3RhY2s6ICVzIWAsIG9wdGlvbnMuc3RhY2tOYW1lWzBdKVxuICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCByZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpO1xuICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgIGNsaWVudFxuICAgICAgICAgICAgLmdldFN0YWNrKHtcbiAgICAgICAgICAgICAgICBTdGFja0lkOiBzdGFja0lkLFxuICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb25cbiAgICAgICAgICAgIH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2sgJXMgXFxuIE91dHB1dCBpczogXFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSwgY29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLk91dHB1dHMsIG51bGwsIFwiXFx0XCIpKSk7XG4gICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBkZXN0cm95LmApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhvcHRpb25zLnN0YWNrTmFtZVswXSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHN0YWNrIG91dHB1dHM6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYXN5bmMgcmVzb3VyY2Uob3B0aW9uczogUmVzb3VyY2VPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXN0cm95KG9wdGlvbnMuc3RhY2tOYW1lcyk7XG4gICAgICAgIGxldCBzdGFja05hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgIGlmICgoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKSkuc3RhY2tJZCkge1xuICAgICAgICAgICAgICAgIHN0YWNrTmFtZXMucHVzaChzdGFjay5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yKGBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGlzdCBpbiB0aGUgc3RhY2suaW5mby5qc29uIGZpbGUsIFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIHN0YWNrOiAlcyFgLCBzdGFjay5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgICAgICAgY2xpZW50XG4gICAgICAgICAgICAgICAgLmxpc3RTdGFja1Jlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgICAgIFN0YWNrSWQ6IChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKSkuc3RhY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2sgJXMgXFxuIFJlc291cmNlIGlzOiBcXG4gJXMgXFxuYCwgY29sb3JzLmJsdWUoc3RhY2tOYW1lKSwgY29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLlJlc291cmNlcywgbnVsbCwgXCJcXHRcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBkZXN0cm95LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjayByZXNvdXJjZTogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZW5lcmF0ZVN0YWNrSW5mbyhvcHRpb25zOiBHZW5lcmF0ZVN0YWNrSW5mb09wdGlvbnMpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yTGlzdChbXSk7XG4gICAgICAgIGxldCBzdGFja05hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBsZXQgU3RhY2tJbmZvczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgICAgICBzdGFja05hbWVzID0gc3RhY2tzLnN0YWNrSWRzXG4gICAgICAgIGZvciAobGV0IHN0YWNrTmFtZSBvZiBzdGFja05hbWVzKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSwgb3B0aW9ucy5yZXNvdXJjZUdyb3VwSWQpXG4gICAgICAgICAgICBpZiAoc3RhY2tJbmZvICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgU3RhY2tJbmZvc1tzdGFja05hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IERFUExPWV9TVEFDSyxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tJZDogc3RhY2tJbmZvLlN0YWNrSWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFN0YWNrSW5mb3Nbc3RhY2tOYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBJTklUX1NUQUNLLFxuICAgICAgICAgICAgICAgICAgICBzdGFja0lkOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShTdGFja0luZm9zLCBudWxsLCAnXFx0JykpO1xuICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgYFxcbiDinIUgVGhlIGdlbmVyYXRlIHN0YWNrIGluZm8gaGFzIGNvbXBsZXRlZCFgLFxuICAgICAgICApO1xuICAgICAgICBleGl0KDApXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGFzeW5jIGdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZTogc3RyaW5nLCByZXNvdXJjZUdyb3VwSWQ6IGFueSkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBsZXQgcGFyYW1zOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICBQYWdlU2l6ZTogMTAsXG4gICAgICAgICAgICBQYWdlTnVtYmVyOiAxLFxuICAgICAgICAgICAgU3RhY2tOYW1lOiBbc3RhY2tOYW1lXVxuICAgICAgICB9O1xuICAgICAgICBpZiAocmVzb3VyY2VHcm91cElkKSB7XG4gICAgICAgICAgICBwYXJhbXNbJ1Jlc291cmNlR3JvdXBJZCddID0gcmVzb3VyY2VHcm91cElkXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5saXN0U3RhY2tzKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICBpZiAocmVzdWx0LlN0YWNrc1swXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuU3RhY2tzWzBdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRTdGFja0J5SWQoc3RhY2tJZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCByZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpO1xuICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgIGxldCBwYXJhbXM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgIFN0YWNrSWQ6IHN0YWNrSWRcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBjbGllbnQuZ2V0U3RhY2socGFyYW1zLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHVibGljIGFzeW5jIGxpc3RTdGFja3Mob3B0aW9uczogTGlzdFN0YWNrT3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yTGlzdChbXSk7XG4gICAgICAgIGxldCBwYXJhbXM6IGFueSA9IHt9O1xuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uLFxuICAgICAgICAgICAgUGFnZVNpemU6IG9wdGlvbnMucGFnZVNpemUgPyBOdW1iZXIob3B0aW9ucy5wYWdlU2l6ZSkgOiAxMCxcbiAgICAgICAgICAgIFBhZ2VOdW1iZXI6IG9wdGlvbnMucGFnZU51bWJlciA/IE51bWJlcihvcHRpb25zLnBhZ2VOdW1iZXIpIDogMVxuICAgICAgICB9O1xuICAgICAgICBpZiAoIW9wdGlvbnMuYWxsKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zdGFja05hbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5TdGFja05hbWUgPSBzdGFja3Muc3RhY2tJZHNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLlN0YWNrTmFtZSA9IG9wdGlvbnMuc3RhY2tOYW1lc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnJlc291cmNlR3JvdXBJZCkge1xuICAgICAgICAgICAgcGFyYW1zLlJlc291cmNlR3JvdXBJZCA9IG9wdGlvbnMucmVzb3VyY2VHcm91cElkXG4gICAgICAgIH1cbiAgICAgICAgY2xpZW50Lmxpc3RTdGFja3MocGFyYW1zLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIFN0YWNrcyBsaXN0IGlzOlxcbiAlcyBcXG5gLCBjb2xvcnMuYmx1ZShKU09OLnN0cmluZ2lmeShyZXMuU3RhY2tzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gbGlzdCBzdGFja3M6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVzdHJveShvcHRpb25zOiBEZXN0cm95T3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBsZXQgc3RhY2tOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgbGV0IHN5bmMgPSBvcHRpb25zLnN5bmNcbiAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBpZiAoKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCkpLnN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBzdGFja05hbWVzLnB1c2goc3RhY2suaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5xdWlldCkge1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlybSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihcbiAgICAgICAgICAgICAgICAgICAgJ1RoZSBmb2xsb3dpbmcgc3RhY2socykgd2lsbCBiZSBkZXN0cm95ZWQoT25seSBkZXBsb3llZCBzdGFja3Mgd2lsbCBiZSBkaXNwbGF5ZWQpLlxcblxcbicgK1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzLnRvU3RyaW5nKCkgK1xuICAgICAgICAgICAgICAgICAgICAnXFxuXFxuUGxlYXNlIGNvbmZpcm0uKFkvTilcXG4nLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0gPT09ICduJyB8fCBjb25maXJtID09PSAnTicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybSA9PT0gJ3knIHx8IGNvbmZpcm0gPT09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2tOYW1lIG9mIHN0YWNrTmFtZXMpIHtcbiAgICAgICAgICAgIGxldCBjb250ZW50OiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBTdGFja0lkOiAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrTmFtZSkpLnN0YWNrSWQsXG4gICAgICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgIHByaW50KCclczogZGVzdHJveWluZy4uLicsIGNvbG9ycy5ib2xkKHN0YWNrTmFtZSkpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc3luY0Rlc3Ryb3lTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xpZW50LmRlbGV0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIERlbGV0ZWRcXG5SZXF1ZXN0ZWRJZDogJXNgLCBjb2xvcnMuYmx1ZShyZXMuUmVxdWVzdElkKSk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBkZWxldGUgc3RhY2s6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHN5bmNTdGFja0luZm8oKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgU1RBQ0tfSU5GTyk7XG4gICAgICAgIGxldCBmaWxlQ29udGVudCA9IHt9O1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZmlsZUNvbnRlbnQsIG51bGwsICdcXHQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRlbXA6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICAgICAgLy8gc2VsZWN0b3IubGVuZ3RoID0gMCBtZWFucyBzZWxlY3QgYWxsIHN0YWNrcyBmcm9tIHRoaXMgYXBwXG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yTGlzdChbXSk7XG4gICAgICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oU1RBQ0tfSU5GTywgc3RhY2suaWQpO1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0YWNrIGhhcyBubyBpbmZvLCB0aGVuIGFkZCBpbml0IHRhZyBmb3IgaXRcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRlbXBbc3RhY2suaWRdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBbc3RhY2suaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IElOSVRfU1RBQ0ssXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrSWQ6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkodGVtcCwgbnVsbCwgJ1xcdCcpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBpbmZvID0gSlNPTi5wYXJzZShmaWxlQ29udGVudCk7XG4gICAgICAgIGxldCBzdGFja0luZm8gPSBpbmZvW3N0YWNrTmFtZV07XG4gICAgICAgIGlmICghc3RhY2tJbmZvKSB7XG4gICAgICAgICAgICBzdGFja0luZm8gPSBpbmZvW3N0YWNrTmFtZV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSBERVBMT1lfU1RBQ0tfSURfTEVOR1RIKSB7XG4gICAgICAgICAgICBzdGFja0luZm8uc3RhdHVzID0gREVQTE9ZX1NUQUNLO1xuICAgICAgICAgICAgc3RhY2tJbmZvLnN0YWNrSWQgPSB2YWx1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhY2tJbmZvLnN0YXR1cyA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBERVNUUk9ZX1NUQUNLKSB7XG4gICAgICAgICAgICAgICAgc3RhY2tJbmZvLnN0YWNrSWQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGluZm8sIG51bGwsICdcXHQnKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBmaW5kU3RhY2tJbmZvKHN0YWNrTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgU1RBQ0tfSU5GTyk7XG4gICAgICAgIGxldCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpW3N0YWNrTmFtZV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JMaXN0KHNlbGVjdG9yczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzZWxlY3RvcnMsIHtkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb24uQWxsU3RhY2tzfSk7XG5cbiAgICAgICAgLy8gTm8gdmFsaWRhdGlvblxuXG4gICAgICAgIHJldHVybiBzdGFja3M7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JEZXN0cm95KHN0YWNrTmFtZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc3RhY2tOYW1lcywge1xuICAgICAgICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrcyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTm8gdmFsaWRhdGlvblxuXG4gICAgICAgIHJldHVybiBzdGFja3M7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JEZXBsb3koc3RhY2tOYW1lczogc3RyaW5nW10sIGV4Y2x1c2l2ZWx5PzogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgICAgICAgIGV4dGVuZDogZXhjbHVzaXZlbHkgPyBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUgOiBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLlVwc3RyZWFtLFxuICAgICAgICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLk9ubHlTaW5nbGUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGVTdGFja3Moc3RhY2tzKTtcblxuICAgICAgICByZXR1cm4gc3RhY2tzO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yRGlmZihzdGFja05hbWVzOiBzdHJpbmdbXSwgZXhjbHVzaXZlbHk/OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc3RhY2tOYW1lcywge1xuICAgICAgICAgICAgZXh0ZW5kOiBleGNsdXNpdmVseSA/IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uTm9uZSA6IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uVXBzdHJlYW0sXG4gICAgICAgICAgICBkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb24uQWxsU3RhY2tzLFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlU3RhY2tzKHN0YWNrcyk7XG5cbiAgICAgICAgcmV0dXJuIHN0YWNrcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSB0aGUgc3RhY2tzIGZvciBlcnJvcnMgYW5kIHdhcm5pbmdzIGFjY29yZGluZyB0byB0aGUgQ0xJJ3MgY3VycmVudCBzZXR0aW5nc1xuICAgICAqL1xuICAgIHByaXZhdGUgYXN5bmMgdmFsaWRhdGVTdGFja3Moc3RhY2tzOiBTdGFja0NvbGxlY3Rpb24pIHtcbiAgICAgICAgc3RhY2tzLnByb2Nlc3NNZXRhZGF0YU1lc3NhZ2VzKHtcbiAgICAgICAgICAgIGlnbm9yZUVycm9yczogdGhpcy5wcm9wcy5pZ25vcmVFcnJvcnMsXG4gICAgICAgICAgICBzdHJpY3Q6IHRoaXMucHJvcHMuc3RyaWN0LFxuICAgICAgICAgICAgdmVyYm9zZTogdGhpcy5wcm9wcy52ZXJib3NlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzc2VtYmx5KCk6IFByb21pc2U8Q2xvdWRBc3NlbWJseT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jbG91ZEV4ZWN1dGFibGUuc3ludGhlc2l6ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0Q2xpQ29uZmlnKGxvYWRGaWxlUGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aDogc3RyaW5nO1xuICAgICAgICBsZXQgY29uZmlndXJlSW5mbzogYW55ID0ge307XG4gICAgICAgIGxldCBjb25maWd1cmVJbmZvczogYW55ID0ge307XG4gICAgICAgIGxldCBBS1Byb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBsZXQgU3RzUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XG4gICAgICAgIGxldCBSYW1Sb2xlQXJuUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XG4gICAgICAgIGxldCBFY3NSYW1Sb2xlUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XG4gICAgICAgIGlmIChsb2FkRmlsZVBhdGgpIHtcbiAgICAgICAgICAgIGZpbGVQYXRoID0gbG9hZEZpbGVQYXRoXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaG9tZVBhdGggPSBvcy5ob21lZGlyKCk7XG4gICAgICAgICAgICBmaWxlUGF0aCA9IGhvbWVQYXRoICsgQ0xJX0NPTkZJR19GSUxFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBsZXQgQWxsUHJvZmlsZXMgPSBKU09OLnBhcnNlKGZpbGUpWydwcm9maWxlcyddO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvZmlsZSBvZiBBbGxQcm9maWxlcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBwcm9maWxlLmFjY2Vzc19rZXlfaWQsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogcHJvZmlsZS5hY2Nlc3Nfa2V5X3NlY3JldCxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiBwcm9maWxlLnJlZ2lvbl9pZCxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogcHJvZmlsZS5zdHNfdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBcm46IHByb2ZpbGUucmFtX3JvbGVfYXJuLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHByb2ZpbGUucmFtX3Nlc3Npb25fbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6IHByb2ZpbGUucmFtX3JvbGVfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvZmlsZS5uYW1lXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ0FLJykge1xuICAgICAgICAgICAgICAgICAgICBBS1Byb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuQUsgPSBBS1Byb2ZpbGVMaXN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9maWxlLm1vZGUgPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgU3RzUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvcy5TdHNUb2tlbiA9IFN0c1Byb2ZpbGVMaXN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9maWxlLm1vZGUgPT09ICdSYW1Sb2xlQXJuJykge1xuICAgICAgICAgICAgICAgICAgICBSYW1Sb2xlQXJuUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvcy5SYW1Sb2xlQXJuID0gUmFtUm9sZUFyblByb2ZpbGVMaXN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9maWxlLm1vZGUgPT09ICdFY3NSYW1Sb2xlJykge1xuICAgICAgICAgICAgICAgICAgICBFY3NSYW1Sb2xlUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvcy5FY3NSYW1Sb2xlID0gRWNzUmFtUm9sZVByb2ZpbGVMaXN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjb25maWd1cmVJbmZvcyB8fCBPYmplY3Qua2V5cyhjb25maWd1cmVJbmZvcykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBlcnJvcihcIldBTlJOSU5HOiBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBtb2RlIGFuZCBwcm9maWxlIGNvbmZpZ3VyYXRpb24gZW50ZXJlZC5cIik7XG4gICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25maWd1cmVJbmZvc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoXCJXQU5STklORzogUGxlYXNlIGNoZWNrIEFsaXl1biBDbGkgdG9vbCBjb25maWd1cmUgYWNjdXJhY3kgb2YgdGhlIGRlZmF1bHQgcGF0aCBvciBzcGVjaWZpZWQgcGF0aC5cIik7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzeW5jRGVwbG95U3RhY2soY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSwgb3V0cHV0c0ZpbGU6IGJvb2xlYW4sIHJlc291cmNlR3JvdXBJZDogYW55LCBzdGFja05hbWU6IGFueSwgZGV0YWlsTG9nOiBib29sZWFuKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgY3JlYXRlUmVzdWx0UmVxdWVzdElkOiBhbnk7XG4gICAgICAgICAgICBsZXQgY3JlYXRlRXJyb3JSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgIGxldCBuZXR3b3JrRXJyb3JFeGNlcHRpb246IGFueTtcbiAgICAgICAgICAgIGxldCBjcmVhdGVSZXN1bHQ6IGFueTtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrT3V0cHV0czogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQuY3JlYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgY3JlYXRlUmVzdWx0UmVxdWVzdElkID0gY3JlYXRlUmVzdWx0LlJlcXVlc3RJZFxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhaWxMb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ3N5bmMgY3JlYXRlIHN0YWNrIGVycm9yIGluZm8gaXMgJXMnLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3JlYXRlRXJyb3JSZXF1ZXN0SWQgPSBlLmRhdGEuUmVxdWVzdElkXG4gICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvckV4Y2VwdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVFcnJvclJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIGNyZWF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgY3JlYXRlRXJyb3JSZXF1ZXN0SWQsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoIWNyZWF0ZVJlc3VsdFJlcXVlc3RJZCAmJiAhY3JlYXRlRXJyb3JSZXF1ZXN0SWQpIHx8IG5ldHdvcmtFcnJvckV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBzbGVlcFRpbWUgPSA1MDAwO1xuICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHNsZWVwVGltZSk7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNyZWF0ZVJlc3VsdFJlcXVlc3RJZDogYW55O1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3JlYXRlRXJyb3JSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ldHdvcmtFcnJvckV4Y2VwdGlvbjogYW55O1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3JlYXRlUmVzdWx0OiBhbnk7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQuY3JlYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVSZXN1bHRSZXF1ZXN0SWQgPSBjcmVhdGVSZXN1bHQuUmVxdWVzdElkXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXRhaWxMb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcigncmV0cnkgc3luYyBjcmVhdGUgc3RhY2sgZXJyb3IgaW5mbyBpcyAlcycsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRXJyb3JSZXF1ZXN0SWQgPSBlLmRhdGEuUmVxdWVzdElkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdTZXJ2aWNlVW5hdmFpbGFibGUnIHx8IGUuY29kZSA9PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3JFeGNlcHRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVFcnJvclJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgY3JlYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuUmVxdWVzdGVkSWQ6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJywgZS5jb2RlLCBjcmVhdGVFcnJvclJlcXVlc3RJZCwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKCFjcmVhdGVSZXN1bHRSZXF1ZXN0SWQgJiYgIWNyZWF0ZUVycm9yUmVxdWVzdElkKSB8fCBuZXR3b3JrRXJyb3JFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGVlcFRpbWUgPCAyMDAwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWVwVGltZSA9IHNsZWVwVGltZSArIDUwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHNsZWVwVGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIGNyZWF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5SZXF1ZXN0ZWRJZDogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGNyZWF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSA+PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGFja0lkSW5mbyA9IGF3YWl0IHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lLCByZXNvdXJjZUdyb3VwSWQpXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdTdGFja0lkSW5mbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBuZXdTdGFja0lkSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoY3JlYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShuZXdTdGFja0lkSW5mby5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2ssIHBsZWFzZSBjaGVjayB5b3Ugc2VydmljZSBlbmRwb2ludC4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBuZXcgUmV3cml0YWJsZUJsb2NrKHN0cmVhbSk7XG4gICAgICAgICAgICB3aXRoRGVmYXVsdFByaW50ZXJPYmogPSBzZXRJbnRlcnZhbChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgY3JlYXRlUmVzdWx0LlN0YWNrSWQsIGJsb2NrLCAnZGVwbG95JylcbiAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDAwKVxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaW9uSWQ6IGNvbnRlbnRbJ1JlZ2lvbklkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFja0lkOiBjcmVhdGVSZXN1bHQuU3RhY2tJZFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTdGFja1Jlc3VsdCA9IGF3YWl0IGNsaWVudC5nZXRTdGFjayhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBnZXRTdGFja1Jlc3VsdC5TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzUmVhc29uID0gZ2V0U3RhY2tSZXN1bHQuU3RhdHVzUmVhc29uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IGdldFN0YWNrUmVzdWx0LlN0YWNrTmFtZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXRzID0gZ2V0U3RhY2tSZXN1bHQuT3V0cHV0c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdDb21wbGV0ZSA9IFJlZ0V4cCgvQ09NUExFVEUvKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdGYWlsZWQgPSBSZWdFeHAoL0ZBSUxFRC8pXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykgfHwgcmVnRmFpbGVkLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgY3JlYXRlUmVzdWx0LlN0YWNrSWQsIGJsb2NrLCAnZGVwbG95JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnXFxuT3V0cHV0czonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja091dHB1dHNbc3RhY2tOYW1lXSA9IG91dHB1dHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvdXRwdXQgb2Ygb3V0cHV0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG91dHB1dFsnT3V0cHV0VmFsdWUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gb3V0cHV0WydPdXRwdXRLZXknXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBvdXRwdXRbJ0Rlc2NyaXB0aW9uJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCdcXG4gS2V5OiAlcyAgVmFsdWU6ICVzIERlc2NyaXB0aW9uOiAlcycsIGNvbG9ycy5jeWFuKGtleSksIGNvbG9ycy5jeWFuKHZhbHVlKSwgY29sb3JzLmN5YW4oZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dHNGaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKExPQ0FMX1BBVEggKyBPVVRQVVRTX0pTT04pLCBKU09OLnN0cmluZ2lmeShzdGFja091dHB1dHMsIG51bGwsICdcXHQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChzeW5jIGRlcGxveSBzdGFjaykgaGFzIGZpbmlzaGVkIVxcbnN0YXR1czogJXNcXG5TdGF0dXNSZWFzb246ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzUmVhc29uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShnZXRTdGFja1Jlc3VsdC5TdGFja0lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgY3JlYXRlUmVzdWx0LlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0NvbXBsZXRlLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudG9TdHJpbmcoKSA9PSAnQ1JFQVRFX1JPTExCQUNLX0NPTVBMRVRFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVnRmFpbGVkLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXRhaWxMb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdyZXRyeSBzeW5jIGNyZWF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnVGhyb3R0bGluZy5Vc2VyJyB8fCBlLmNvZGUgPT0gJ1Rocm90dGxpbmcnIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZy5BUEknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgzMDAwMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgY3JlYXRlIHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoJ3JldHJ5IHN5bmMgY3JlYXRlIHN0YWNrIGVycm9yIGluZm8gaXMgJXMnLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgY3JlYXRlIHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0UmVzb3VyY2VzKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIHN0YWNrSWQ6IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbGlzdFN0YWNrUmVzb3VyY2VzUmVzdWx0ID0gYXdhaXQgY2xpZW50Lmxpc3RTdGFja1Jlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgU3RhY2tJZDogc3RhY2tJZCxcbiAgICAgICAgICAgICAgICBSZWdpb25JZDogY29udGVudFsnUmVnaW9uSWQnXSxcbiAgICAgICAgICAgIH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgcmV0dXJuIGxpc3RTdGFja1Jlc291cmNlc1Jlc3VsdC5SZXNvdXJjZXNcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IG5ldyBzdGFjayByZXNvdXJjZTogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB3aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSwgc3RhY2tJZDogYW55LCBibG9jazogYW55LCBhY3Rpb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGNvbnN0IHJlc291cmNlcyA9IGF3YWl0IENka1Rvb2xraXQuZ2V0UmVzb3VyY2VzKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIHN0YWNrSWQpXG4gICAgICAgIGlmIChhY3Rpb24gIT09ICdkZXN0cm95Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgcmVzb3VyY2Ugb2YgcmVzb3VyY2VzKSB7XG4gICAgICAgICAgICAgICAgbGluZXMucHVzaCh1dGlsLmZvcm1hdChjb2xvcnMuYmx1ZSgnfCVzIHwlcyB8ICVzIHwgJXMgfCAlcyB8ICVzJykgKyAnXFxuJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjMsIHJlc291cmNlLlN0YWNrTmFtZSksXG4gICAgICAgICAgICAgICAgICAgIHBhZExlZnQoMTIsIHJlc291cmNlLkNyZWF0ZVRpbWUpLFxuICAgICAgICAgICAgICAgICAgICBwYWRSaWdodCgyMCwgcmVzb3VyY2UuU3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjMsIHJlc291cmNlLlJlc291cmNlVHlwZSksXG4gICAgICAgICAgICAgICAgICAgIHNob3J0ZW4oNDAsIHJlc291cmNlLlBoeXNpY2FsUmVzb3VyY2VJZCksXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLkxvZ2ljYWxSZXNvdXJjZUlkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCByZXNvdXJjZSBvZiByZXNvdXJjZXMpIHtcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKHV0aWwuZm9ybWF0KGNvbG9ycy5ibHVlKCd8JXMgfCAlcyB8ICVzIHwgJXMgfCAlcycpICsgJ1xcbicsXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIzLCByZXNvdXJjZS5TdGFja05hbWUpLFxuICAgICAgICAgICAgICAgICAgICBwYWRSaWdodCgyMCwgcmVzb3VyY2UuU3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjMsIHJlc291cmNlLlJlc291cmNlVHlwZSksXG4gICAgICAgICAgICAgICAgICAgIHNob3J0ZW4oNDAsIHJlc291cmNlLlBoeXNpY2FsUmVzb3VyY2VJZCksXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLkxvZ2ljYWxSZXNvdXJjZUlkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYmxvY2suZGlzcGxheUxpbmVzKGxpbmVzKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhc3luYyBzeW5jVXBkYXRlU3RhY2soY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSwgb3V0cHV0c0ZpbGU6IGJvb2xlYW4sIHNraXBJZk5vQ2hhbmdlczogYm9vbGVhbiwgc3RhY2tOYW1lOiBhbnksIGxvY2FsU3RhY2tJbmZvOiBhbnksIHN0YWNrVXBkYXRlVGltZTogYW55LCBkZXRhaWxMb2c6IGJvb2xlYW4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgUmVnaW9uSWQ6IGNvbnRlbnRbJ1JlZ2lvbklkJ10sXG4gICAgICAgICAgICAgICAgU3RhY2tJZDogY29udGVudFsnU3RhY2tJZCddXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHVwZGF0ZVJlc3VsdFJlcXVlc3RJZDogYW55O1xuICAgICAgICAgICAgbGV0IHVwZGF0ZUVycm9yUmVxdWVzdElkOiBhbnk7XG4gICAgICAgICAgICBsZXQgbmV0d29ya0Vycm9yRXhjZXB0aW9uOiBhbnk7XG4gICAgICAgICAgICBsZXQgdXBkYXRlUmVzdWx0OiBhbnk7XG4gICAgICAgICAgICBjb25zdCBzdGFja091dHB1dHM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IGdldE9yaWdpbmFsU3RhY2tSZXN1bHQgPSBhd2FpdCBjbGllbnQuZ2V0U3RhY2socGFyYW1zLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVXBkYXRlVGltZSA9IGdldE9yaWdpbmFsU3RhY2tSZXN1bHQuVXBkYXRlVGltZSA/IGdldE9yaWdpbmFsU3RhY2tSZXN1bHQuVXBkYXRlVGltZSA6IFwiXCJcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LnVwZGF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIHVwZGF0ZVJlc3VsdFJlcXVlc3RJZCA9IHVwZGF0ZVJlc3VsdC5SZXF1ZXN0SWRcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdzeW5jIHVwZGF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ05vdFN1cHBvcnRlZCcgJiYgZS5tZXNzYWdlLnN0YXJ0c1dpdGgoJ1VwZGF0ZSB0aGUgY29tcGxldGVseSBzYW1lIHN0YWNrJykgJiYgc2tpcElmTm9DaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKGNvbnRlbnRbJ1N0YWNrTmFtZSddLCBjb250ZW50WydTdGFja0lkJ10pO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCdUaGUgc3RhY2sgaXMgY29tcGxldGVseSB0aGUgc2FtZSwgdGhlcmUgaXMgbm8gbmVlZCB0byB1cGRhdGUuJylcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGVFcnJvclJlcXVlc3RJZCA9IGUuZGF0YS5SZXF1ZXN0SWRcbiAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdTZXJ2aWNlVW5hdmFpbGFibGUnIHx8IGUuY29kZSA9PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yRXhjZXB0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVwZGF0ZUVycm9yUmVxdWVzdElkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgdXBkYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuUmVxdWVzdGVkSWQ6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJywgZS5jb2RlLCB1cGRhdGVFcnJvclJlcXVlc3RJZCwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoKCF1cGRhdGVSZXN1bHRSZXF1ZXN0SWQgJiYgIXVwZGF0ZUVycm9yUmVxdWVzdElkKSB8fCBuZXR3b3JrRXJyb3JFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgc2xlZXBUaW1lID0gNTAwMDtcbiAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcChzbGVlcFRpbWUpO1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IDExKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVSZXN1bHRSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZUVycm9yUmVxdWVzdElkOiBhbnk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXR3b3JrRXJyb3JFeGNlcHRpb246IGFueTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZVJlc3VsdDogYW55O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LnVwZGF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUmVzdWx0UmVxdWVzdElkID0gdXBkYXRlUmVzdWx0LlJlcXVlc3RJZFxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ3JldHJ5IHN5bmMgdXBkYXRlIHN0YWNrIGVycm9yIGluZm8gaXMgJXMnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ05vdFN1cHBvcnRlZCcgJiYgZS5tZXNzYWdlLnN0YXJ0c1dpdGgoJ1VwZGF0ZSB0aGUgY29tcGxldGVseSBzYW1lIHN0YWNrJykgJiYgc2tpcElmTm9DaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oY29udGVudFsnU3RhY2tOYW1lJ10sIGNvbnRlbnRbJ1N0YWNrSWQnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygnVGhlIHN0YWNrIGlzIGNvbXBsZXRlbHkgdGhlIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXBkYXRlLicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRXJyb3JSZXF1ZXN0SWQgPSBlLmRhdGEuUmVxdWVzdElkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdTZXJ2aWNlVW5hdmFpbGFibGUnIHx8IGUuY29kZSA9PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3JFeGNlcHRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh1cGRhdGVFcnJvclJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgdXBkYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuUmVxdWVzdGVkSWQ6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJywgZS5jb2RlLCB1cGRhdGVFcnJvclJlcXVlc3RJZCwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKCF1cGRhdGVSZXN1bHRSZXF1ZXN0SWQgJiYgIXVwZGF0ZUVycm9yUmVxdWVzdElkKSB8fCBuZXR3b3JrRXJyb3JFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGVlcFRpbWUgPCAyMDAwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWVwVGltZSA9IHNsZWVwVGltZSArIDUwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHNsZWVwVGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHVwZGF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5SZXF1ZXN0ZWRJZDogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZSh1cGRhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHVwZGF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSA+PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdHVzQXJyYXkgPSBbXCJVUERBVEVfRkFJTEVEXCIsIFwiVVBEQVRFX0NPTVBMRVRFXCIsIFwiUk9MTEJBQ0tfRkFJTEVEXCIsIFwiUk9MTEJBQ0tfQ09NUExFVEVcIl1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhY2tJZEluZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlJZChsb2NhbFN0YWNrSW5mby5zdGFja0lkKVxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U3RhY2tJZEluZm9VcGRhdGVUaW1lID0gbmV3U3RhY2tJZEluZm8uVXBkYXRlVGltZSA/IG5ld1N0YWNrSWRJbmZvLlVwZGF0ZVRpbWUgOiBuZXdTdGFja0lkSW5mby5DcmVhdGVUaW1lXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdTdGFja0lkSW5mby5TdGF0dXMgPT0gJ1VQREFURV9JTl9QUk9HUkVTUycgfHwgbmV3U3RhY2tJZEluZm8uU3RhdHVzID09ICdST0xMQkFDS19JTl9QUk9HUkVTUycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgbmV3U3RhY2tJZEluZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUobmV3U3RhY2tJZEluZm8uU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1c0FycmF5LmluY2x1ZGVzKG5ld1N0YWNrSWRJbmZvLlN0YXR1cykgJiYgbmV3U3RhY2tJZEluZm9VcGRhdGVUaW1lICE9IHN0YWNrVXBkYXRlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBuZXdTdGFja0lkSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQodXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShuZXdTdGFja0lkSW5mby5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2ssIHBsZWFzZSBjaGVjayB5b3Ugc2VydmljZSBlbmRwb2ludC4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2FpdCBmb3IgdGhlIHN0YWNrIHN0YXRlIHRvIGNoYW5nZSBhZnRlciB1cGRhdGluZyBpdFxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IG5ldyBSZXdyaXRhYmxlQmxvY2soc3RyZWFtKTtcbiAgICAgICAgICAgIHdpdGhEZWZhdWx0UHJpbnRlck9iaiA9IHNldEludGVydmFsKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCB1cGRhdGVSZXN1bHQuU3RhY2tJZCwgYmxvY2ssICd1cGRhdGUnKVxuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMDApXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldE5ld1N0YWNrUmVzdWx0ID0gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGdldE5ld1N0YWNrUmVzdWx0LlN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNSZWFzb24gPSBnZXROZXdTdGFja1Jlc3VsdC5TdGF0dXNSZWFzb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tOYW1lID0gZ2V0TmV3U3RhY2tSZXN1bHQuU3RhY2tOYW1lXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dHMgPSBnZXROZXdTdGFja1Jlc3VsdC5PdXRwdXRzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1VwZGF0ZVRpbWUgPSBnZXROZXdTdGFja1Jlc3VsdC5VcGRhdGVUaW1lID8gZ2V0TmV3U3RhY2tSZXN1bHQuVXBkYXRlVGltZSA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1VwZGF0ZVRpbWUgPT0gb3JpZ2luYWxVcGRhdGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFjayB1cGRhdGUgaW4gcHJvZ3Jlc3Mgb3IgdXBkYXRlIGRpZCBub3QgYmVnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnQ29tcGxldGUgPSBSZWdFeHAoL0NPTVBMRVRFLylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRmFpbGVkID0gUmVnRXhwKC9GQUlMRUQvKVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnQ29tcGxldGUuZXhlYyhzdGF0dXMpIHx8IHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIHVwZGF0ZVJlc3VsdC5TdGFja0lkLCBibG9jaywgJ3VwZGF0ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJ1xcbk91dHB1dHM6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tPdXRwdXRzW3N0YWNrTmFtZV0gPSBvdXRwdXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3V0cHV0IG9mIG91dHB1dHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvdXRwdXRbJ091dHB1dFZhbHVlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IG91dHB1dFsnT3V0cHV0S2V5J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gb3V0cHV0WydEZXNjcmlwdGlvbiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnXFxuIEtleTogJXMgIFZhbHVlOiAlcyBEZXNjcmlwdGlvbjogJXMnLCBjb2xvcnMuY3lhbihrZXkpLCBjb2xvcnMuY3lhbih2YWx1ZSksIGNvbG9ycy5jeWFuKGRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXRzRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihMT0NBTF9QQVRIICsgT1VUUFVUU19KU09OKSwgSlNPTi5zdHJpbmdpZnkoc3RhY2tPdXRwdXRzLCBudWxsLCAnXFx0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChzeW5jIHVwZGF0ZSBzdGFjaykgaGFzIGZpbmlzaGVkIVxcbnN0YXR1czogJXNcXG5TdGF0dXNSZWFzb246ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzUmVhc29uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShnZXROZXdTdGFja1Jlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHVwZGF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnRvU3RyaW5nKCkgPT0gJ1JPTExCQUNLX0NPTVBMRVRFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVnRmFpbGVkLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ3JldHJ5IHN5bmMgdXBkYXRlIHN0YWNrIGVycm9yIGluZm8gaXMgJXMnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdOb3RTdXBwb3J0ZWQnICYmIGUubWVzc2FnZS5zdGFydHNXaXRoKCdVcGRhdGUgdGhlIGNvbXBsZXRlbHkgc2FtZSBzdGFjaycpICYmIHNraXBJZk5vQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oY29udGVudFsnU3RhY2tOYW1lJ10sIGNvbnRlbnRbJ1N0YWNrSWQnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCdUaGUgc3RhY2sgaXMgY29tcGxldGVseSB0aGUgc2FtZSwgdGhlcmUgaXMgbm8gbmVlZCB0byB1cGRhdGUuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdUaHJvdHRsaW5nLlVzZXInIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZycgfHwgZS5jb2RlID09ICdUaHJvdHRsaW5nLkFQSScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDMwMDAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyB1cGRhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgIGVycm9yKCdzeW5jIHVwZGF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09ICdOb3RTdXBwb3J0ZWQnICYmIGUubWVzc2FnZS5zdGFydHNXaXRoKCdVcGRhdGUgdGhlIGNvbXBsZXRlbHkgc2FtZSBzdGFjaycpICYmIHNraXBJZk5vQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKGNvbnRlbnRbJ1N0YWNrTmFtZSddLCBjb250ZW50WydTdGFja0lkJ10pO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoJ1RoZSBzdGFjayBpcyBjb21wbGV0ZWx5IHRoZSBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIHVwZGF0ZS4nKVxuICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ05vdFN1cHBvcnRlZCcgJiYgZS5tZXNzYWdlLnN0YXJ0c1dpdGgoJ1VwZGF0ZSB0aGUgY29tcGxldGVseSBzYW1lIHN0YWNrJykgJiYgc2tpcElmTm9DaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oY29udGVudFsnU3RhY2tOYW1lJ10sIGNvbnRlbnRbJ1N0YWNrSWQnXSk7XG4gICAgICAgICAgICAgICAgc3VjY2VzcygnVGhlIHN0YWNrIGlzIGNvbXBsZXRlbHkgdGhlIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXBkYXRlLicpXG4gICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIHVwZGF0ZSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzeW5jRGVzdHJveVN0YWNrKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5kZWxldGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gbmV3IFJld3JpdGFibGVCbG9jayhzdHJlYW0pO1xuICAgICAgICAgICAgd2l0aERlZmF1bHRQcmludGVyT2JqID0gc2V0SW50ZXJ2YWwoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIGNvbnRlbnRbJ1N0YWNrSWQnXSwgYmxvY2ssICdkZXN0cm95JylcbiAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDAwKVxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaW9uSWQ6IGNvbnRlbnRbJ1JlZ2lvbklkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFja0lkOiBjb250ZW50WydTdGFja0lkJ11cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0U3RhY2tSZXN1bHQgPSBhd2FpdCBjbGllbnQuZ2V0U3RhY2socGFyYW1zLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZ2V0U3RhY2tSZXN1bHQuU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1JlYXNvbiA9IGdldFN0YWNrUmVzdWx0LlN0YXR1c1JlYXNvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFja05hbWUgPSBnZXRTdGFja1Jlc3VsdC5TdGFja05hbWVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnQ29tcGxldGUgPSBSZWdFeHAoL0NPTVBMRVRFLylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRmFpbGVkID0gUmVnRXhwKC9GQUlMRUQvKVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnQ29tcGxldGUuZXhlYyhzdGF0dXMpIHx8IHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIGNvbnRlbnRbJ1N0YWNrSWQnXSwgYmxvY2ssICdkZXN0cm95JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIHRhc2soc3luYyBkZXN0cm95IHN0YWNrKSBoYXMgZmluaXNoZWQhXFxuc3RhdHVzOiAlc1xcblN0YXR1c1JlYXNvbjogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXNSZWFzb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGdldFN0YWNrUmVzdWx0LlN0YWNrSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdUaHJvdHRsaW5nLlVzZXInIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZycgfHwgZS5jb2RlID09ICdUaHJvdHRsaW5nLkFQSScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDMwMDAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyBkZXN0cm95IHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIGRlc3Ryb3kgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHJvc1VwZGF0ZVN0YWNrKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIHN0YWNrTmFtZTogYW55LCBsb2NhbFN0YWNrSW5mbzogYW55LCBzdGFja1VwZGF0ZVRpbWU6IGFueSwgZGV0YWlsTG9nOiBhbnksIHNraXBJZk5vQ2hhbmdlczogYW55KSB7XG4gICAgICAgIGxldCB1cGRhdGVSZXN1bHRSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgbGV0IHVwZGF0ZUVycm9yUmVxdWVzdElkOiBhbnk7XG4gICAgICAgIGxldCBuZXR3b3JrRXJyb3JFeGNlcHRpb246IGFueTtcbiAgICAgICAgbGV0IHVwZGF0ZVJlc3VsdDogYW55O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdXBkYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LnVwZGF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgdXBkYXRlUmVzdWx0UmVxdWVzdElkID0gdXBkYXRlUmVzdWx0LlJlcXVlc3RJZFxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoJ3VwZGF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09ICdOb3RTdXBwb3J0ZWQnICYmIGUubWVzc2FnZS5zdGFydHNXaXRoKCdVcGRhdGUgdGhlIGNvbXBsZXRlbHkgc2FtZSBzdGFjaycpICYmIHNraXBJZk5vQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKGNvbnRlbnRbJ1N0YWNrTmFtZSddLCBjb250ZW50WydTdGFja0lkJ10pO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoJ1RoZSBzdGFjayBpcyBjb21wbGV0ZWx5IHRoZSBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIHVwZGF0ZS4nKVxuICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZUVycm9yUmVxdWVzdElkID0gZS5kYXRhLlJlcXVlc3RJZFxuICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yRXhjZXB0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodXBkYXRlRXJyb3JSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIHVwZGF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgdXBkYXRlRXJyb3JSZXF1ZXN0SWQsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCghdXBkYXRlUmVzdWx0UmVxdWVzdElkICYmICF1cGRhdGVFcnJvclJlcXVlc3RJZCkgfHwgbmV0d29ya0Vycm9yRXhjZXB0aW9uKSB7XG4gICAgICAgICAgICBsZXQgc2xlZXBUaW1lID0gNTAwMDtcbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKHNsZWVwVGltZSk7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IDExKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVwZGF0ZVJlc3VsdFJlcXVlc3RJZDogYW55O1xuICAgICAgICAgICAgICAgIGxldCB1cGRhdGVFcnJvclJlcXVlc3RJZDogYW55O1xuICAgICAgICAgICAgICAgIGxldCBuZXR3b3JrRXJyb3JFeGNlcHRpb246IGFueTtcbiAgICAgICAgICAgICAgICBsZXQgdXBkYXRlUmVzdWx0OiBhbnk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LnVwZGF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVSZXN1bHRSZXF1ZXN0SWQgPSB1cGRhdGVSZXN1bHQuUmVxdWVzdElkXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsTG9nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcigncmV0cnkgdXBkYXRlIHN0YWNrIGVycm9yIGluZm8gaXMgJXMnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdOb3RTdXBwb3J0ZWQnICYmIGUubWVzc2FnZS5zdGFydHNXaXRoKCdVcGRhdGUgdGhlIGNvbXBsZXRlbHkgc2FtZSBzdGFjaycpICYmIHNraXBJZk5vQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oY29udGVudFsnU3RhY2tOYW1lJ10sIGNvbnRlbnRbJ1N0YWNrSWQnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCdUaGUgc3RhY2sgaXMgY29tcGxldGVseSB0aGUgc2FtZSwgdGhlcmUgaXMgbm8gbmVlZCB0byB1cGRhdGUuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVFcnJvclJlcXVlc3RJZCA9IGUuZGF0YS5SZXF1ZXN0SWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3JFeGNlcHRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVwZGF0ZUVycm9yUmVxdWVzdElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIHVwZGF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgdXBkYXRlRXJyb3JSZXF1ZXN0SWQsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKCF1cGRhdGVSZXN1bHRSZXF1ZXN0SWQgJiYgIXVwZGF0ZUVycm9yUmVxdWVzdElkKSB8fCBuZXR3b3JrRXJyb3JFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsZWVwVGltZSA8IDIwMDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGVlcFRpbWUgPSBzbGVlcFRpbWUgKyA1MDAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoc2xlZXBUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCB1cGRhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQodXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUodXBkYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHVwZGF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpID49IDExKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1c0FycmF5ID0gW1wiVVBEQVRFX0ZBSUxFRFwiLCBcIlVQREFURV9DT01QTEVURVwiLCBcIlJPTExCQUNLX0ZBSUxFRFwiLCBcIlJPTExCQUNLX0NPTVBMRVRFXCJdXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhY2tJZEluZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlJZChsb2NhbFN0YWNrSW5mby5zdGFja0lkKVxuICAgICAgICAgICAgICAgIGxldCBuZXdTdGFja0lkSW5mb1VwZGF0ZVRpbWUgPSBuZXdTdGFja0lkSW5mby5VcGRhdGVUaW1lID8gbmV3U3RhY2tJZEluZm8uVXBkYXRlVGltZSA6IG5ld1N0YWNrSWRJbmZvLkNyZWF0ZVRpbWVcbiAgICAgICAgICAgICAgICBpZiAobmV3U3RhY2tJZEluZm8uU3RhdHVzID09ICdVUERBVEVfSU5fUFJPR1JFU1MnIHx8IG5ld1N0YWNrSWRJbmZvLlN0YXR1cyA9PSAnUk9MTEJBQ0tfSU5fUFJPR1JFU1MnKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgbmV3U3RhY2tJZEluZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudCh1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUobmV3U3RhY2tJZEluZm8uU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1c0FycmF5LmluY2x1ZGVzKG5ld1N0YWNrSWRJbmZvLlN0YXR1cykgJiYgbmV3U3RhY2tJZEluZm9VcGRhdGVUaW1lICE9IHN0YWNrVXBkYXRlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQodXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gdXBkYXRlIHN0YWNrLCBwbGVhc2UgY2hlY2sgeW91IHNlcnZpY2UgZW5kcG9pbnQuJylcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHVwZGF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5SZXF1ZXN0ZWRJZDogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICBjb2xvcnMuYmx1ZSh1cGRhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgIGNvbG9ycy5ibHVlKHVwZGF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHJvc0NyZWF0ZVN0YWNrKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIHJlc291cmNlR3JvdXBJZDogYW55LCBzdGFja05hbWU6IGFueSwgZGV0YWlsTG9nOiBhbnkpIHtcbiAgICAgICAgbGV0IGNyZWF0ZVJlc3VsdFJlcXVlc3RJZDogYW55O1xuICAgICAgICBsZXQgY3JlYXRlRXJyb3JSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgbGV0IG5ldHdvcmtFcnJvckV4Y2VwdGlvbjogYW55O1xuICAgICAgICBsZXQgY3JlYXRlUmVzdWx0OiBhbnk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjcmVhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQuY3JlYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICBjcmVhdGVSZXN1bHRSZXF1ZXN0SWQgPSBjcmVhdGVSZXN1bHQuUmVxdWVzdElkXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChkZXRhaWxMb2cpIHtcbiAgICAgICAgICAgICAgICBlcnJvcignY3JlYXRlIHN0YWNrIGVycm9yIGluZm8gaXMgJXMnLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyZWF0ZUVycm9yUmVxdWVzdElkID0gZS5kYXRhLlJlcXVlc3RJZFxuICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yRXhjZXB0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3JlYXRlRXJyb3JSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2s6IEVycm9yQ29kZTogJXNcXG5SZXF1ZXN0ZWRJZDogJXNcXG5FcnJvck1lc3NhZ2U6JXMnLCBlLmNvZGUsIGNyZWF0ZUVycm9yUmVxdWVzdElkLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoIWNyZWF0ZVJlc3VsdFJlcXVlc3RJZCAmJiAhY3JlYXRlRXJyb3JSZXF1ZXN0SWQpIHx8IG5ldHdvcmtFcnJvckV4Y2VwdGlvbikge1xuICAgICAgICAgICAgbGV0IHNsZWVwVGltZSA9IDUwMDA7XG4gICAgICAgICAgICBhd2FpdCBzbGVlcChzbGVlcFRpbWUpO1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCAxMSkge1xuICAgICAgICAgICAgICAgIGxldCBjcmVhdGVSZXN1bHRSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgICAgICBsZXQgY3JlYXRlRXJyb3JSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgICAgICBsZXQgbmV0d29ya0Vycm9yRXhjZXB0aW9uOiBhbnk7XG4gICAgICAgICAgICAgICAgbGV0IGNyZWF0ZVJlc3VsdDogYW55O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC5jcmVhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUmVzdWx0UmVxdWVzdElkID0gY3JlYXRlUmVzdWx0LlJlcXVlc3RJZFxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbExvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ3JldHJ5IGNyZWF0ZSBzdGFjayBlcnJvciBpbmZvIGlzICVzJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRXJyb3JSZXF1ZXN0SWQgPSBlLmRhdGEuUmVxdWVzdElkXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yRXhjZXB0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVFcnJvclJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuUmVxdWVzdGVkSWQ6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJywgZS5jb2RlLCBjcmVhdGVFcnJvclJlcXVlc3RJZCwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoIWNyZWF0ZVJlc3VsdFJlcXVlc3RJZCAmJiAhY3JlYXRlRXJyb3JSZXF1ZXN0SWQpIHx8IG5ldHdvcmtFcnJvckV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xlZXBUaW1lIDwgMjAwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsZWVwVGltZSA9IHNsZWVwVGltZSArIDUwMDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcChzbGVlcFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIGNyZWF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoY3JlYXRlUmVzdWx0LlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgPj0gMTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGFja0lkSW5mbyA9IGF3YWl0IHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lLCByZXNvdXJjZUdyb3VwSWQpXG4gICAgICAgICAgICAgICAgaWYgKG5ld1N0YWNrSWRJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgbmV3U3RhY2tJZEluZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUobmV3U3RhY2tJZEluZm8uU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2ssIHBsZWFzZSBjaGVjayB5b3Ugc2VydmljZSBlbmRwb2ludC4nKVxuICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgY3JlYXRlUmVzdWx0LlN0YWNrSWQpO1xuICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoY3JlYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgIGNvbG9ycy5ibHVlKGNyZWF0ZVJlc3VsdC5SZXF1ZXN0SWQpLFxuICAgICAgICAgICAgY29sb3JzLmJsdWUoY3JlYXRlUmVzdWx0LlN0YWNrSWQpLFxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWZmT3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIHN0cmVhbT86IE5vZGVKUy5Xcml0YWJsZVN0cmVhbTtcbiAgICBjb250ZXh0TGluZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXBsb3lPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIE9ubHkgc2VsZWN0IHRoZSBnaXZlbiBzdGFja1xuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBleGNsdXNpdmVseT86IGJvb2xlYW47XG4gICAgcGFyYW1ldGVycz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9O1xuICAgIHRpbWVvdXQ6IHN0cmluZztcbiAgICBzeW5jOiBib29sZWFuO1xuICAgIG91dHB1dHNGaWxlOiBib29sZWFuO1xuICAgIHNraXBJZk5vQ2hhbmdlczogYm9vbGVhbjtcbiAgICBkaXNhYmxlUm9sbGJhY2s6IGJvb2xlYW47XG4gICAgcmVzb3VyY2VHcm91cElkOiBzdHJpbmc7XG4gICAgZGV0YWlsTG9nOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlc3Ryb3lPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbiAgICBxdWlldD86IGJvb2xlYW47XG4gICAgc3luYzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmVudE9wdGlvbnMge1xuICAgIHN0YWNrTmFtZTogc3RyaW5nW107XG4gICAgbG9naWNhbFJlc291cmNlSWQ6IHN0cmluZztcbiAgICBwYWdlTnVtYmVyOiBzdHJpbmc7XG4gICAgcGFnZVNpemU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdXRQdXRPcHRpb25zIHtcbiAgICBzdGFja05hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZU9wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlbmVyYXRlU3RhY2tJbmZvT3B0aW9ucyB7XG4gICAgcmVzb3VyY2VHcm91cElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdFN0YWNrT3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG4gICAgcGFnZU51bWJlcjogc3RyaW5nO1xuICAgIHBhZ2VTaXplOiBzdHJpbmc7XG4gICAgYWxsOiBzdHJpbmc7XG4gICAgcmVzb3VyY2VHcm91cElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnU2V0T3B0aW9ucyB7XG4gICAgZ2xvYmFsOiBzdHJpbmc7XG4gICAgZW5kcG9pbnQ6IHN0cmluZztcbiAgICByZWdpb246IHN0cmluZztcbiAgICBtb2RlOiBzdHJpbmc7XG4gICAgYWs6IHN0cmluZztcbiAgICBzazogc3RyaW5nO1xuICAgIHN0czogc3RyaW5nO1xuICAgIHJhbVJvbGVBcm46IHN0cmluZztcbiAgICByb2xlU2Vzc2lvbk5hbWU6IHN0cmluZztcbiAgICByYW1Sb2xlTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRDb25maWdPcHRpb25zIHtcbiAgICBnbG9iYWw/OiBzdHJpbmc7XG4gICAgbG9hZEZpbGVQYXRoOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBUYWcge1xuICAgIHJlYWRvbmx5IEtleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IFZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUFuZFVwZGF0ZUxhbmd1YWdlSW5mbyhsYW5ndWFnZTogc3RyaW5nKSB7XG4gICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBQUk9KRUNUX0NPTkZJRyk7XG4gICAgbGV0IGZpbGVDb250ZW50OiBhbnk7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgIGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICBsZXQgaW5mbyA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpO1xuICAgICAgICBpbmZvWydsYW5ndWFnZUluZm8nXSA9IGxhbmd1YWdlO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShpbmZvLCBudWxsLCAnXFx0JykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRMYW5ndWFnZUluZm8oKSB7XG4gICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBQUk9KRUNUX0NPTkZJRyk7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgIGxldCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpWydsYW5ndWFnZUluZm8nXS50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZExlZnQobjogbnVtYmVyLCB4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh4KSB7XG4gICAgICAgIHJldHVybiAnICcucmVwZWF0KE1hdGgubWF4KDAsIG4gLSB4Lmxlbmd0aCkpICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJydcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZFJpZ2h0KG46IG51bWJlciwgeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoeCkge1xuICAgICAgICByZXR1cm4geCArICcgJy5yZXBlYXQoTWF0aC5tYXgoMCwgbiAtIHgubGVuZ3RoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvcnRlbihtYXhXaWR0aDogbnVtYmVyLCBwOiBzdHJpbmcpIHtcbiAgICBpZiAocC5sZW5ndGggPD0gbWF4V2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIGNvbnN0IGhhbGYgPSBNYXRoLmZsb29yKChtYXhXaWR0aCAtIDMpIC8gMik7XG4gICAgcmV0dXJuIHAuc3Vic3RyKDAsIGhhbGYpICsgJy4uLicgKyBwLnN1YnN0cihwLmxlbmd0aCAtIGhhbGYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzZW5zaXRpemF0aW9uKGlucHV0U3RyaW5nOiBzdHJpbmcsIG1peExlbmd0aCA9IDMpIHtcbiAgICAvLyBtaXhMZW5ndGgg5a2X56ym5Liy5bCR5LqO5LiA5a6a5YC85YiZ6ISx5pWP5YWo6YOo77yM5aKe5Yqg6ISx5pWP5L2N5pWwXG4gICAgaWYgKGlzU3RyaW5nKGlucHV0U3RyaW5nKSB8fCBpc051bWJlcihpbnB1dFN0cmluZykpIHtcbiAgICAgICAgY29uc3Qgc3RyID0gU3RyaW5nKGlucHV0U3RyaW5nKTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPD0gbWl4TGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyonLnJlcGVhdChtaXhMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGZpcnN0U3RyID0gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC8gbWl4TGVuZ3RoKTtcbiAgICAgICAgY29uc3QgbGFzdFN0ciA9IHN0ci5zdWJzdHIoLXN0ci5sZW5ndGggLyBtaXhMZW5ndGgpO1xuICAgICAgICBjb25zdCBtaWRkbGVTdHIgPSBzdHJcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoc3RyLmxlbmd0aCAvIG1peExlbmd0aCwgbGVuIC0gTWF0aC5hYnMoLXN0ci5sZW5ndGggLyBtaXhMZW5ndGgpKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHNcXFNdL2dpLCAnKicpO1xuICAgICAgICByZXR1cm4gZmlyc3RTdHIgKyBtaWRkbGVTdHIgKyBsYXN0U3RyO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59Il19