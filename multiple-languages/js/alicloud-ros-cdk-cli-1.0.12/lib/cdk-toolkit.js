"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readLanguageInfo = exports.writeAndUpdateLanguageInfo = exports.CdkToolkit = void 0;
const colors = require("colors/safe");
const fs = require("fs");
const path = require("path");
const readlineSync = require("readline-sync");
const cipher_1 = require("./util/cipher");
const util_1 = require("util");
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
const uuid_1 = require("uuid");
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
const exec = util_2.promisify(child_process_1.exec);
const requestOptions = {
    headers: {
        'User-Agent': "ROS-CLI-" + JSON.parse(fs.readFileSync(PACKAGE_JSON).toString())['version'] + "::" + readLanguageInfo()
    },
    timeout: 15000
};
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
            process_1.exit();
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
                process_1.exit();
            }
        }
        if (!newAccessKeyId || !newAccessKeySecret) {
            logging_1.error("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
            process_1.exit();
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
        let modeType = ['AK', 'StsToken', 'RamRoleArn', 'EcsRamRole'];
        let endpoint = readlineSync.question('endpoint(optional, default:https://ros.aliyuncs.com):', { defaultInput: 'https://ros.aliyuncs.com' });
        let regionId = readlineSync.question('defaultRegionId(optional, default:cn-hangzhou):', { defaultInput: 'cn-hangzhou' });
        let modeIndex = readlineSync.keyInSelect(modeType, 'Authenticate mode:');
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
                    process_1.exit();
                }
            }
            catch (e) {
                logging_1.error('WANRNING: If want to Use EcsRamRole config, Please bind EcsRamRole to the host!' + e.message);
                process_1.exit();
            }
            const { stdout: curlStdout } = await exec(curlCommand);
            let roleName = readlineSync.question(`roleName, The configured role of the host: [${curlStdout.trim()}]`, { defaultInput: curlStdout.trim() });
            inputConfigInfo = {
                type: 'ecs_ram_role',
                roleName: roleName
            };
        }
        else if (modeType[modeIndex] === 'StsToken') {
            let accessKeyId = readlineSync.question('accessKeyId:', { hideEchoBack: true });
            let accessKeySecret = readlineSync.question('accessKeySecret:', { hideEchoBack: true });
            let securityToken = readlineSync.question('securityToken:', { hideEchoBack: true });
            inputConfigInfo = {
                type: 'sts',
                accessKeyId: await cipher_1.cipher(accessKeyId),
                accessKeySecret: await cipher_1.cipher(accessKeySecret),
                securityToken: await cipher_1.cipher(securityToken)
            };
        }
        else if (modeType[modeIndex] === 'RamRoleArn') {
            let accessKeyId = readlineSync.question('accessKeyId:', { hideEchoBack: true });
            let accessKeySecret = readlineSync.question('accessKeySecret:', { hideEchoBack: true });
            let roleArn = readlineSync.question('roleArn(eg: acs:ram::******:role/******):');
            let roleSessionName = readlineSync.question('roleSessionName:');
            inputConfigInfo = {
                type: 'ram_role_arn',
                accessKeyId: await cipher_1.cipher(accessKeyId),
                accessKeySecret: await cipher_1.cipher(accessKeySecret),
                roleArn: roleArn,
                roleSessionName: roleSessionName
            };
        }
        else if (modeType[modeIndex] === 'AK') {
            let accessKeyId = readlineSync.question('accessKeyId:', { hideEchoBack: true });
            let accessKeySecret = readlineSync.question('accessKeySecret:', { hideEchoBack: true });
            inputConfigInfo = {
                type: 'access_key',
                accessKeyId: await cipher_1.cipher(accessKeyId),
                accessKeySecret: await cipher_1.cipher(accessKeySecret)
            };
        }
        else {
            logging_1.error('WANRNING: If want to deploy or delete stack, a certification method must be selected');
            process_1.exit();
        }
        inputConfigInfo.endpoint = endpoint;
        inputConfigInfo.regionId = regionId;
        let file = path.join(configSavePath);
        fs.writeFileSync(file, JSON.stringify(inputConfigInfo, null, '\t'));
        logging_1.success(`\n ✅ Your cdk configuration has been saved successfully!`);
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
            process_1.exit();
        }
        let file = path.join(configSavePath);
        configInfo.regionId = options.region;
        configInfo.endpoint = options.endpoint;
        fs.writeFileSync(file, JSON.stringify(configInfo, null, '\t'));
        logging_1.success(`\n ✅ Your cdk configuration has been saved successfully!`);
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
            process_1.exit();
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
            process_1.exit();
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
                    process_1.exit();
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
                    process_1.exit();
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
                    process_1.exit();
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
                    process_1.exit();
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
        const sleep = function (ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        };
        await this.syncStackInfo();
        const stacks = await this.selectStacksForDeploy(options.stackNames, options.exclusively);
        const stackName = options.stackNames.length !== 0 ? options.stackNames[0] : stacks.stackArtifacts[0].id;
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        const client = await this.getRosClient();
        let templateBody = fs.readFileSync(`./cdk.out/${stackName}.template.json`);
        let ClientToken = uuid_1.v4();
        let content = {
            StackName: stackName.toString(),
            RegionId: region,
            TimeoutInMinutes: options.timeout,
            TemplateBody: templateBody,
            ClientToken: ClientToken
        };
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
        const stackInfo = await this.getStackByName(stackName);
        if (localStackInfo.stackId) {
            if (stackInfo !== null) {
                // update stack
                {
                    content['StackId'] = stackInfo.StackId;
                    let stackStatus = stackInfo.Status;
                    let stackUpdateTime = stackInfo.UpdateTime ? stackInfo.UpdateTime : stackInfo.CreateTime;
                    if (stackStatus.indexOf("IN_PROGRESS") == -1) {
                        try {
                            const updateResult = await client.updateStack(content, requestOptions);
                            await this.updateStackInfo(stackName, updateResult.StackId);
                            logging_1.success(`\n ✅ The deployment(update stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(updateResult.RequestId), colors.blue(updateResult.StackId));
                        }
                        catch (e) {
                            if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack')) {
                                await this.updateStackInfo(stackName, stackInfo.StackId);
                                logging_1.success('The stack is completely the same, there is no need to update.');
                            }
                            else if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                                await sleep(5000);
                                let i = 0;
                                while (i < 11) {
                                    try {
                                        const updateResult = await client.updateStack(content, requestOptions);
                                        await this.updateStackInfo(stackName, updateResult.StackId);
                                        logging_1.success(`\n ✅ The deployment(update stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(updateResult.RequestId), colors.blue(updateResult.StackId));
                                        break;
                                    }
                                    catch (e) {
                                        if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                                            await sleep(5000);
                                            i++;
                                        }
                                        else {
                                            logging_1.error('fail to update stack: %s %s', e.code, e.message);
                                            break;
                                        }
                                    }
                                }
                                if (i >= 11) {
                                    let statusArray = ["UPDATE_FAILED", "UPDATE_COMPLETE", "ROLLBACK_FAILED", "ROLLBACK_COMPLETE"];
                                    const newStackIdInfo = await this.getStackByName(stackName);
                                    let newStackIdInfoUpdateTime = newStackIdInfo.UpdateTime ? newStackIdInfo.UpdateTime : newStackIdInfo.CreateTime;
                                    if (newStackIdInfo.Status == 'UPDATE_IN_PROGRESS' || newStackIdInfo.Status == 'ROLLBACK_IN_PROGRESS') {
                                        await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                                        logging_1.success(`\n ✅ The deployment(update stack) has completed!\nStackId: %s`, colors.blue(newStackIdInfo.StackId));
                                    }
                                    else if (statusArray.includes(newStackIdInfo.Status) && newStackIdInfoUpdateTime != stackUpdateTime) {
                                        await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                                        logging_1.success(`\n ✅ The deployment(update stack) has completed!\nStackId: %s`, colors.blue(newStackIdInfo.StackId));
                                    }
                                    else {
                                        logging_1.error('fail to update stack, service is ServiceUnavailable or LastTokenProcessing, please check you service endpoint.');
                                    }
                                }
                            }
                            else {
                                logging_1.error('fail to update stack: %s %s', e.code, e.message);
                            }
                        }
                    }
                    else {
                        logging_1.error('fail to update stack, because stack status is %s', stackStatus);
                    }
                }
            }
            else {
                // create stack
                try {
                    const createResult = await client.createStack(content, requestOptions);
                    await this.updateStackInfo(stackName, createResult.StackId);
                    logging_1.success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(createResult.RequestId), colors.blue(createResult.StackId));
                }
                catch (e) {
                    if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                        await sleep(5000);
                        let i = 0;
                        while (i < 11) {
                            try {
                                const createResult = await client.createStack(content, requestOptions);
                                await this.updateStackInfo(stackName, createResult.StackId);
                                logging_1.success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(createResult.RequestId), colors.blue(createResult.StackId));
                                break;
                            }
                            catch (e) {
                                if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                                    await sleep(5000);
                                    i++;
                                }
                                else {
                                    logging_1.error('fail to create stack: %s %s', e.code, e.message);
                                    break;
                                }
                            }
                        }
                        if (i >= 11) {
                            const newStackIdInfo = await this.getStackByName(stackName);
                            if (newStackIdInfo) {
                                await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                                logging_1.success(`\n ✅ The deployment(create stack) has completed!\nStackId: %s`, colors.blue(newStackIdInfo.StackId));
                            }
                            else {
                                logging_1.error('fail to create stack, service is ServiceUnavailable or LastTokenProcessing, please check you service endpoint.');
                            }
                        }
                    }
                    else {
                        logging_1.error('fail to create stack: %s %s', e.code, e.message);
                    }
                }
            }
        }
        else {
            if (stackInfo !== null) {
                // stack is exist send error message
                logging_1.error('fail to create stack, because stack  %s is exist in this region.', stackName);
            }
            else {
                // create stack
                try {
                    const createResult = await client.createStack(content, requestOptions);
                    await this.updateStackInfo(stackName, createResult.StackId);
                    logging_1.success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(createResult.RequestId), colors.blue(createResult.StackId));
                }
                catch (e) {
                    if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                        await sleep(5000);
                        let i = 0;
                        while (i < 11) {
                            try {
                                const createResult = await client.createStack(content, requestOptions);
                                await this.updateStackInfo(stackName, createResult.StackId);
                                logging_1.success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(createResult.RequestId), colors.blue(createResult.StackId));
                                break;
                            }
                            catch (e) {
                                if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                                    await sleep(5000);
                                    i++;
                                }
                                else {
                                    logging_1.error('fail to create stack: %s %s', e.code, e.message);
                                    break;
                                }
                            }
                        }
                        if (i >= 11) {
                            const newStackIdInfo = await this.getStackByName(stackName);
                            if (newStackIdInfo) {
                                await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                                logging_1.success(`\n ✅ The deployment(create stack) has completed!\nStackId: %s`, colors.blue(newStackIdInfo.StackId));
                            }
                            else {
                                logging_1.error('fail to create stack, service is ServiceUnavailable or LastTokenProcessing, please check you service endpoint.');
                            }
                        }
                    }
                    else {
                        logging_1.error('fail to create stack: %s %s', e.code, e.message);
                    }
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
                stream.write(util_1.format('Stack %s has not been deployed.\n', colors.bold(stack.displayName)));
                continue;
            }
            client.getTemplate({ RegionId: regionInLocal, StackId: stackInfo.stackId }, requestOptions)
                .then((res) => {
                const template = serialize_1.deserializeStructure(res.TemplateBody);
                stream.write(util_1.format('Stack %s\n', colors.bold(stack.displayName)));
                diff_1.printStackDiff(template, stack, contextLines, stream);
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to synth.`);
                    this.updateStackInfo(stack.id, SYNTH_STACK);
                }
                else {
                    logging_1.error('fail to get template: %s %s', ex.code, ex.message);
                }
            });
        }
    }
    async event(options) {
        await this.syncStackInfo();
        let stacks = await this.selectStacksForDestroy([]);
        if (!options.stackName) {
            logging_1.error('If want to get resource stack events, stack name must be Specified!');
            process_1.exit();
        }
        if (!stacks.stackIds.includes(options.stackName[0])) {
            logging_1.error(`The specific stack doesn't exist, Please check the accuracy of the input stack name!`);
            process_1.exit();
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
            StackId: (await this.findStackInfo(options.stackName[0])).stackId,
            RegionId: region,
            LogicalResourceId: LogicalResourceIds,
            PageSize: options.pageSize ? Number(options.pageSize) : 10,
            PageNumber: options.pageNumber ? Number(options.pageNumber) : 1
        }, requestOptions)
            .then((res) => {
            logging_1.success(`\n ✅ The Stack %s \n Events is: \n %s \n`, colors.blue(options.stackName[0]), colors.blue(JSON.stringify(res.Events, null, "\t")));
        }, (ex) => {
            if (ex.code == 'StackNotFound') {
                logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                this.updateStackInfo(options.stackName[0], DESTROY_STACK);
            }
            else {
                logging_1.error('fail to get stack events: %s %s', ex.code, ex.message);
            }
        });
    }
    async output(options) {
        await this.syncStackInfo();
        let stacks = await this.selectStacksForDestroy([]);
        if (!options.stackName) {
            logging_1.error('If want to get resource stack output, stack name must be Specified!');
            process_1.exit();
        }
        if (!stacks.stackIds.includes(options.stackName[0])) {
            logging_1.error(`The specific stack doesn't exist, Please check the accuracy of the input stack name!`);
            process_1.exit();
        }
        const client = await this.getRosClient();
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        client
            .getStack({
            StackId: (await this.findStackInfo(options.stackName[0])).stackId,
            RegionId: region
        }, requestOptions)
            .then((res) => {
            logging_1.success(`\n ✅ The Stack %s \n Output is: \n %s \n`, colors.blue(options.stackName[0]), colors.blue(JSON.stringify(res.Outputs, null, "\t")));
        }, (ex) => {
            if (ex.code == 'StackNotFound') {
                logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                this.updateStackInfo(options.stackName[0], DESTROY_STACK);
            }
            else {
                logging_1.error('fail to get stack events: %s %s', ex.code, ex.message);
            }
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
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                    this.updateStackInfo(stackName, DESTROY_STACK);
                }
                else {
                    logging_1.error('fail to get stack resource: %s %s', ex.code, ex.message);
                }
            });
        }
    }
    async getStackByName(stackName) {
        const client = await this.getRosClient();
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId', true);
        region = region ? region : process.env.REGION_ID;
        let params = {
            RegionId: region,
            PageSize: 10,
            PageNumber: 1,
            StackName: [stackName]
        };
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
        client.listStacks(params, requestOptions)
            .then((res) => {
            logging_1.success(`\n ✅ The Stacks list is:\n %s \n`, colors.blue(JSON.stringify(res.Stacks, null, "\t")));
        }, (ex) => {
            logging_1.error('fail to list stacks: %s %s', ex.code, ex.message);
        });
    }
    async destroy(options) {
        await this.syncStackInfo();
        let stacks = await this.selectStacksForDestroy(options.stackNames);
        let stackNames = [];
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
            client
                .deleteStack({
                StackId: (await this.findStackInfo(stackName)).stackId,
                RegionId: region,
            }, requestOptions)
                .then((res) => {
                this.updateStackInfo(stackName, DESTROY_STACK);
                logging_1.success(`\n ✅ Deleted\nRequestedId: %s`, colors.blue(res.RequestId));
            }, (ex) => {
                if (ex.code == 'StackNotFound') {
                    logging_1.warning(`\n ❌ The specific stack doesn't exit and it's local status will be set to destroy.`);
                    this.updateStackInfo(stackName, DESTROY_STACK);
                }
                else {
                    logging_1.error('fail to delete stack: %s %s', ex.code, ex.message);
                }
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
                process_1.exit();
            }
            return configureInfos;
        }
        else {
            logging_1.error("WANRNING: Please check Aliyun Cli tool configure accuracy of the default path or specified path.");
            process_1.exit();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRvb2xraXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstdG9vbGtpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4Q0FBOEM7QUFDOUMsMENBQStDO0FBQy9DLCtCQUE0QjtBQUM1QixNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUN0RCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixpREFBNEM7QUFDNUMsdURBQTBEO0FBQzFELHlEQUE4RztBQUU5Ryx1Q0FBK0Q7QUFDL0QseUNBQXlEO0FBQ3pELHFDQUE2QjtBQUM3QixpQ0FBc0M7QUFDdEMsMkNBQWlEO0FBQ2pELCtCQUErQjtBQUMvQiwrQkFBa0M7QUFFbEMsTUFBTSxXQUFXLEdBQUcscUJBQXFCLENBQUM7QUFDMUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLE1BQU0sV0FBVyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDdkMsTUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7QUFDckMsTUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFDbEMsTUFBTSxlQUFlLEdBQUcsc0JBQXNCLENBQUM7QUFDL0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDO0FBQzFCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUM1QixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUM7QUFDOUIsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDO0FBQ2hDLE1BQU0sWUFBWSxHQUFHLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztBQUVwRCxNQUFNLElBQUksR0FBRyxnQkFBUyxD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QUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyx5QkFBYyxDQUFDLENBQUM7SUFDdEQsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3pCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzdEO1NBQ0c7UUFDQSxPQUFPLEVBQUUsQ0FBQTtLQUNaO0FBQ0wsQ0FBQztBQVRELDRDQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5pbXBvcnQge2RlY2lwaGVyLCBjaXBoZXJ9IGZyb20gJy4vdXRpbC9jaXBoZXInO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ3V0aWwnO1xuY29uc3Qgcm9zQ2xpZW50ID0gcmVxdWlyZSgnQGFsaWNsb3VkL3Jvcy0yMDE5LTA5LTEwJyk7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuaW1wb3J0IHtleGVjIGFzIF9leGVjfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBDcmVkZW50aWFscywge0NvbmZpZ30gZnJvbSAnQGFsaWNsb3VkL2NyZWRlbnRpYWxzJztcbmltcG9ydCB7Q2xvdWRBc3NlbWJseSwgRGVmYXVsdFNlbGVjdGlvbiwgRXh0ZW5kZWRTdGFja1NlbGVjdGlvbiwgU3RhY2tDb2xsZWN0aW9ufSBmcm9tICcuL2FwaS9jbG91ZC1hc3NlbWJseSc7XG5pbXBvcnQge0Nsb3VkRXhlY3V0YWJsZX0gZnJvbSAnLi9hcGkvY2xvdWQtZXhlY3V0YWJsZSc7XG5pbXBvcnQge2RhdGEsIGVycm9yLCBwcmludCwgc3VjY2Vzcywgd2FybmluZ30gZnJvbSAnLi9sb2dnaW5nJztcbmltcG9ydCB7Q29uZmlndXJhdGlvbiwgUFJPSkVDVF9DT05GSUd9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHtleGl0fSBmcm9tICdwcm9jZXNzJztcbmltcG9ydCB7cHJpbnRTdGFja0RpZmZ9IGZyb20gJy4vZGlmZic7XG5pbXBvcnQge2Rlc2VyaWFsaXplU3RydWN0dXJlfSBmcm9tICcuL3NlcmlhbGl6ZSc7XG5pbXBvcnQge3Byb21pc2lmeX0gZnJvbSAndXRpbCc7XG5pbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XG5cbmNvbnN0IENPTkZJR19OQU1FID0gJ2FjY291bnQuY29uZmlnLmpzb24nO1xuY29uc3QgTE9DQUxfUEFUSCA9ICcuLyc7XG5jb25zdCBHTE9CQUxfUEFUSCA9IF9fZGlybmFtZSArICcvLi4vJztcbmNvbnN0IFNUQUNLX0lORk8gPSAnc3RhY2suaW5mby5qc29uJztcbmNvbnN0IERFUExPWV9TVEFDS19JRF9MRU5HVEggPSAzNjtcbmNvbnN0IENMSV9DT05GSUdfRklMRSA9ICcvLmFsaXl1bi9jb25maWcuanNvbic7XG5jb25zdCBJTklUX1NUQUNLID0gJ2luaXQnO1xuY29uc3QgU1lOVEhfU1RBQ0sgPSAnc3ludGgnO1xuY29uc3QgREVQTE9ZX1NUQUNLID0gJ2RlcGxveSc7XG5jb25zdCBERVNUUk9ZX1NUQUNLID0gJ2Rlc3Ryb3knO1xuY29uc3QgUEFDS0FHRV9KU09OID0gX19kaXJuYW1lICsgJy8uLi9wYWNrYWdlLmpzb24nO1xuXG5jb25zdCBleGVjID0gcHJvbWlzaWZ5KF9leGVjKTtcblxuY29uc3QgcmVxdWVzdE9wdGlvbnM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1VzZXItQWdlbnQnOiBcIlJPUy1DTEktXCIgKyBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhQQUNLQUdFX0pTT04pLnRvU3RyaW5nKCkpWyd2ZXJzaW9uJ10gKyBcIjo6XCIgKyByZWFkTGFuZ3VhZ2VJbmZvKClcbiAgICB9LFxuICAgIHRpbWVvdXQ6IDE1MDAwXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENka1Rvb2xraXRQcm9wcyB7XG4gICAgLyoqXG4gICAgICogVGhlIENsb3VkIEV4ZWN1dGFibGVcbiAgICAgKi9cbiAgICBjbG91ZEV4ZWN1dGFibGU6IENsb3VkRXhlY3V0YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gYmUgdmVyYm9zZVxuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICB2ZXJib3NlPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIERvbid0IHN0b3Agb24gZXJyb3IgbWV0YWRhdGFcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgaWdub3JlRXJyb3JzPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRyZWF0IHdhcm5pbmdzIGluIG1ldGFkYXRhIGFzIGVycm9yc1xuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBzdHJpY3Q/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXBwbGljYXRpb24gY29uZmlndXJhdGlvbiAoc2V0dGluZ3MgYW5kIGNvbnRleHQpXG4gICAgICovXG4gICAgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbjtcbn1cblxuLyoqXG4gKiBUb29sa2l0IGxvZ2ljXG4gKlxuICogVGhlIHRvb2xraXQgcnVucyB0aGUgYGNsb3VkRXhlY3V0YWJsZWAgdG8gb2J0YWluIGEgY2xvdWQgYXNzZW1ibHlcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBDZGtUb29sa2l0IHtcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBnZXRKc29uKGZpbGVOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCBhbGxvd2VkRW1wdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBMT0NBTF9QQVRIICsgZmlsZU5hbWU7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlKVtrZXldO1xuICAgICAgICB9IGVsc2UgaWYgKGZpbGVOYW1lID09PSBTVEFDS19JTkZPKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGZpbGVQYXRoID0gR0xPQkFMX1BBVEggKyBmaWxlTmFtZTtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGUpW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhbGxvd2VkRW1wdHkpIHtcbiAgICAgICAgICAgIGVycm9yKFwiUGxlYXNlIHVzZSAncm9zLWNkayBjb25maWcgKC1nKScgdG8gc2V0IHlvdXIgYWNjb3VudCBjb25maWd1cmF0aW9uIGZpcnN0bHkhXCIpO1xuICAgICAgICAgICAgZXhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwcm9wczogQ2RrVG9vbGtpdFByb3BzKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldFJvc0NsaWVudCgpIHtcbiAgICAgICAgbGV0IG1vZGVUeXBlID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAndHlwZScsIHRydWUpXG4gICAgICAgIGxldCBlbmRwb2ludCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2VuZHBvaW50Jyx0cnVlKVxuICAgICAgICBsZXQgY29uZmlnSW5mbzogYW55O1xuICAgICAgICBsZXQgY2xpZW50O1xuICAgICAgICBzd2l0Y2ggKG1vZGVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdlY3NfcmFtX3JvbGUnOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyb2xlTmFtZScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdHMnOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlJZCcpKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlTZWNyZXQnKSksXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3NlY3VyaXR5VG9rZW4nKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JhbV9yb2xlX2Fybic6XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleUlkJykpLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFybjogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncm9sZUFybicpLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JvbGVTZXNzaW9uTmFtZScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhY2Nlc3Nfa2V5JzpcbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleUlkJykpLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVuZHBvaW50ID0gZW5kcG9pbnQgPyBlbmRwb2ludCA6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nO1xuICAgICAgICBsZXQgbmV3QWNjZXNzS2V5SWQ6IHN0cmluZztcbiAgICAgICAgbGV0IG5ld0FjY2Vzc0tleVNlY3JldDogc3RyaW5nO1xuICAgICAgICBsZXQgbmV3U2VjdXJpdHlUb2tlbjogc3RyaW5nO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ld0FjY2Vzc0tleUlkID0gbmV3QWNjZXNzS2V5SWQgPyBuZXdBY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuQUNDRVNTX0tFWV9JRFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ld0FjY2Vzc0tleVNlY3JldCA9IG5ld0FjY2Vzc0tleVNlY3JldCA/IG5ld0FjY2Vzc0tleVNlY3JldDogcHJvY2Vzcy5lbnYuQUNDRVNTX0tFWV9TRUNSRVRcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBuZXdTZWN1cml0eVRva2VuID0gbmV3U2VjdXJpdHlUb2tlbiA/IG5ld1NlY3VyaXR5VG9rZW46IHByb2Nlc3MuZW52LlNFQ1VSSVRZX1RPS0VOXG4gICAgICAgIGlmIChjb25maWdJbmZvKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWQgPSBuZXcgQ3JlZGVudGlhbHMoY29uZmlnSW5mbyk7XG4gICAgICAgICAgICAgICAgbmV3QWNjZXNzS2V5SWQgPSBhd2FpdCBjcmVkLmdldEFjY2Vzc0tleUlkKCk7XG4gICAgICAgICAgICAgICAgbmV3QWNjZXNzS2V5U2VjcmV0ID0gYXdhaXQgY3JlZC5nZXRBY2Nlc3NLZXlTZWNyZXQoKTtcbiAgICAgICAgICAgICAgICBuZXdTZWN1cml0eVRva2VuID0gYXdhaXQgY3JlZC5nZXRTZWN1cml0eVRva2VuKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdXQU5STklORzogUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgY3JlZGVudGlhbCBpbmZvcm1hdGlvbiB5b3UgaW1wb3J0IGZyb20gQ0xJIGNvbmZpZyEnICsgZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZXhpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuZXdBY2Nlc3NLZXlJZCB8fCAhbmV3QWNjZXNzS2V5U2VjcmV0KSB7XG4gICAgICAgICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIG9yIHNldCBlbnZpcm9ubWVudCB0byBzZXQgeW91ciBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZmlyc3RseSFcIik7XG4gICAgICAgICAgICBleGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5ld1NlY3VyaXR5VG9rZW4pIHtcbiAgICAgICAgICAgIGNsaWVudCA9IG5ldyByb3NDbGllbnQoe1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBlbmRwb2ludCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogbmV3QWNjZXNzS2V5SWQsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBuZXdBY2Nlc3NLZXlTZWNyZXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xpZW50ID0gbmV3IHJvc0NsaWVudCh7XG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGVuZHBvaW50LFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBuZXdBY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IG5ld0FjY2Vzc0tleVNlY3JldCxcbiAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBuZXdTZWN1cml0eVRva2VuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaHR0cE1vZHVsZSA9IGNsaWVudC5lbmRwb2ludC5zdGFydHNXaXRoKCdodHRwczovLycpID8gaHR0cHMgOiBodHRwO1xuICAgICAgICBjbGllbnQua2VlcEFsaXZlQWdlbnQgPSBuZXcgaHR0cE1vZHVsZS5BZ2VudCh7XG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgICBrZWVwQWxpdmVNc2VjczogMTUwMDBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbmZpZyhnbG9iYWw6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvbmZpZ1NhdmVQYXRoID0gKGdsb2JhbCA/IEdMT0JBTF9QQVRIIDogTE9DQUxfUEFUSCkgKyBDT05GSUdfTkFNRTtcbiAgICAgICAgbGV0IG1vZGVUeXBlID0gWydBSycsICdTdHNUb2tlbicsICdSYW1Sb2xlQXJuJywgJ0Vjc1JhbVJvbGUnXVxuICAgICAgICBsZXQgZW5kcG9pbnQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2VuZHBvaW50KG9wdGlvbmFsLCBkZWZhdWx0Omh0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbSk6Jywge2RlZmF1bHRJbnB1dDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbSd9KTtcbiAgICAgICAgbGV0IHJlZ2lvbklkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdkZWZhdWx0UmVnaW9uSWQob3B0aW9uYWwsIGRlZmF1bHQ6Y24taGFuZ3pob3UpOicsIHtkZWZhdWx0SW5wdXQ6ICdjbi1oYW5nemhvdSd9KTtcbiAgICAgICAgbGV0IG1vZGVJbmRleCA9IHJlYWRsaW5lU3luYy5rZXlJblNlbGVjdChtb2RlVHlwZSwgJ0F1dGhlbnRpY2F0ZSBtb2RlOicpO1xuICAgICAgICBsZXQgaW5wdXRDb25maWdJbmZvOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IGNoZWNrQ29tbWFuZDogc3RyaW5nO1xuICAgICAgICBsZXQgY3VybENvbW1hbmQ6IHN0cmluZztcbiAgICAgICAgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdFY3NSYW1Sb2xlJykge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICAgICAgICAgICAgICBjaGVja0NvbW1hbmQgPSAncG93ZXJzaGVsbCAtQ29tbWFuZCBcIihjdXJsIC1VUmkgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8pLlN0YXR1c0NvZGVcIic7XG4gICAgICAgICAgICAgICAgY3VybENvbW1hbmQgPSAncG93ZXJzaGVsbCAtQ29tbWFuZCBcIihjdXJsIC1VUmkgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8pLkNvbnRlbnRcIic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoZWNrQ29tbWFuZCA9ICdjdXJsIGh0dHA6Ly8xMDAuMTAwLjEwMC4yMDAvbGF0ZXN0L21ldGEtZGF0YS9SYW0vc2VjdXJpdHktY3JlZGVudGlhbHMvIC1vIC9kZXYvbnVsbCAtcyAtdyAle2h0dHBfY29kZX0nO1xuICAgICAgICAgICAgICAgIGN1cmxDb21tYW5kID0gJ2N1cmwgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7c3Rkb3V0OiBjaGVja1N0ZG91dH0gPSBhd2FpdCBleGVjKGNoZWNrQ29tbWFuZCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrU3Rkb3V0LnRyaW0oKSAhPT0gJzIwMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gVXNlIEVjc1JhbVJvbGUgY29uZmlnLCBQbGVhc2UgYmluZCBFY3NSYW1Sb2xlIHRvIHRoZSBob3N0LicsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBVc2UgRWNzUmFtUm9sZSBjb25maWcsIFBsZWFzZSBiaW5kIEVjc1JhbVJvbGUgdG8gdGhlIGhvc3QhJyArIGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGV4aXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHtzdGRvdXQ6IGN1cmxTdGRvdXR9ID0gYXdhaXQgZXhlYyhjdXJsQ29tbWFuZCk7XG4gICAgICAgICAgICBsZXQgcm9sZU5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYHJvbGVOYW1lLCBUaGUgY29uZmlndXJlZCByb2xlIG9mIHRoZSBob3N0OiBbJHtjdXJsU3Rkb3V0LnRyaW0oKX1dYCwge2RlZmF1bHRJbnB1dDogY3VybFN0ZG91dC50cmltKCl9KTtcbiAgICAgICAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgICAgICAgICByb2xlTmFtZTogcm9sZU5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1N0c1Rva2VuJykge1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdhY2Nlc3NLZXlJZDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdhY2Nlc3NLZXlTZWNyZXQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgbGV0IHNlY3VyaXR5VG9rZW4gPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ3NlY3VyaXR5VG9rZW46Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgaW5wdXRDb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHMnLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5SWQpLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleVNlY3JldCksXG4gICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogYXdhaXQgY2lwaGVyKHNlY3VyaXR5VG9rZW4pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdSYW1Sb2xlQXJuJykge1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdhY2Nlc3NLZXlJZDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdhY2Nlc3NLZXlTZWNyZXQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgbGV0IHJvbGVBcm4gPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ3JvbGVBcm4oZWc6IGFjczpyYW06OioqKioqKjpyb2xlLyoqKioqKik6Jyk7XG4gICAgICAgICAgICBsZXQgcm9sZVNlc3Npb25OYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdyb2xlU2Vzc2lvbk5hbWU6Jyk7XG4gICAgICAgICAgICBpbnB1dENvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhbV9yb2xlX2FybicsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlJZCksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5U2VjcmV0KSxcbiAgICAgICAgICAgICAgICByb2xlQXJuOiByb2xlQXJuLFxuICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogcm9sZVNlc3Npb25OYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdBSycpIHtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignYWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignYWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYWNjZXNzX2tleScsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlJZCksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5U2VjcmV0KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGNlcnRpZmljYXRpb24gbWV0aG9kIG11c3QgYmUgc2VsZWN0ZWQnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dENvbmZpZ0luZm8uZW5kcG9pbnQgPSBlbmRwb2ludFxuICAgICAgICBpbnB1dENvbmZpZ0luZm8ucmVnaW9uSWQgPSByZWdpb25JZFxuICAgICAgICBsZXQgZmlsZSA9IHBhdGguam9pbihjb25maWdTYXZlUGF0aCk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZSwgSlNPTi5zdHJpbmdpZnkoaW5wdXRDb25maWdJbmZvLCBudWxsLCAnXFx0JykpO1xuICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFlvdXIgY2RrIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gc2F2ZWQgc3VjY2Vzc2Z1bGx5IWApO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb25maWdTZXQob3B0aW9uczogQ29uZmlnU2V0T3B0aW9ucykge1xuICAgICAgICBsZXQgY29uZmlnU2F2ZVBhdGggPSAob3B0aW9ucy5nbG9iYWwgPyBHTE9CQUxfUEFUSCA6IExPQ0FMX1BBVEgpICsgQ09ORklHX05BTUU7XG4gICAgICAgIGxldCBtb2RlVHlwZSA9IG9wdGlvbnMubW9kZTtcbiAgICAgICAgbGV0IGNvbmZpZ0luZm86IGFueSA9IHt9O1xuICAgICAgICBsZXQgYWsgPSBvcHRpb25zLmFrID8gb3B0aW9ucy5hayA6ICcnO1xuICAgICAgICBsZXQgc2sgPSBvcHRpb25zLnNrID8gb3B0aW9ucy5zayA6ICcnO1xuICAgICAgICBsZXQgc3RzVG9rZW4gPSBvcHRpb25zLnN0cyA/IG9wdGlvbnMuc3RzIDogJyc7XG4gICAgICAgIGxldCByYW1Sb2xlQXJuID0gb3B0aW9ucy5yYW1Sb2xlQXJuPyBvcHRpb25zLnJhbVJvbGVBcm4gOiAnJztcbiAgICAgICAgbGV0IHJvbGVTZXNzaW9uTmFtZSA9IG9wdGlvbnMucm9sZVNlc3Npb25OYW1lPyBvcHRpb25zLnJvbGVTZXNzaW9uTmFtZSA6ICcnO1xuICAgICAgICBsZXQgcmFtUm9sZU5hbWUgPSBvcHRpb25zLnJhbVJvbGVOYW1lPyBvcHRpb25zLnJhbVJvbGVOYW1lIDogJyc7XG4gICAgICAgIGlmIChtb2RlVHlwZSA9PT0gJ0FLJyl7XG4gICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFrKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihzaylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZVR5cGUgPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhayksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoc2spLFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGNpcGhlcihzdHNUb2tlbilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZVR5cGUgPT09ICdSYW1Sb2xlQXJuJykge1xuICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFrKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihzayksXG4gICAgICAgICAgICAgICAgcm9sZUFybjogcmFtUm9sZUFybixcbiAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHJvbGVTZXNzaW9uTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtb2RlVHlwZSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XG4gICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlY3NfcmFtX3JvbGUnLFxuICAgICAgICAgICAgICAgIHJvbGVOYW1lOiByYW1Sb2xlTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGF1dGhlbnRpY2F0ZSBtb2RlIG11c3QgYmUgaW4gKEFLfFN0c1Rva2VufFJhbVJvbGVBcm58RWNzUmFtUm9sZSknLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmlsZSA9IHBhdGguam9pbihjb25maWdTYXZlUGF0aCk7XG4gICAgICAgIGNvbmZpZ0luZm8ucmVnaW9uSWQgPSBvcHRpb25zLnJlZ2lvbjtcbiAgICAgICAgY29uZmlnSW5mby5lbmRwb2ludCA9IG9wdGlvbnMuZW5kcG9pbnQ7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnSW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBZb3VyIGNkayBjb25maWd1cmF0aW9uIGhhcyBiZWVuIHNhdmVkIHN1Y2Nlc3NmdWxseSFgKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBhc3luYyBsb2FkQ2xpQ29uZmlnKG9wdGlvbnM6IExvYWRDb25maWdPcHRpb25zKSB7XG4gICAgICAgIGxldCBjb25maWdTYXZlUGF0aCA9IChvcHRpb25zLmdsb2JhbCA/IEdMT0JBTF9QQVRIIDogTE9DQUxfUEFUSCkgKyBDT05GSUdfTkFNRTtcbiAgICAgICAgbGV0IGNvbmZpZ3VyZUluZm9zID0gYXdhaXQgdGhpcy5nZXRDbGlDb25maWcob3B0aW9ucy5sb2FkRmlsZVBhdGgpXG4gICAgICAgIGxldCBtb2RlVHlwZSA9IE9iamVjdC5rZXlzKGNvbmZpZ3VyZUluZm9zKTtcbiAgICAgICAgbGV0IG1vZGVJbmRleCA9IHJlYWRsaW5lU3luYy5rZXlJblNlbGVjdChtb2RlVHlwZSwgJ1NlbGVjdCBhdXRoZW50aWNhdGUgbW9kZTonKTtcbiAgICAgICAgbGV0IHByb2ZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgbGV0IHByb2ZpbGVDb25maWc6IGFueSA9IHt9O1xuICAgICAgICBpZiAobW9kZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGEgY2VydGlmaWNhdGlvbiBtZXRob2QgbXVzdCBiZSBzZWxlY3RlZCcsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXhpdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdBSycpIHtcbiAgICAgICAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLkFLLm1hcCgoaXRlbTogeyBuYW1lOiBhbnk7IH0pID0+IGl0ZW0ubmFtZSlcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnU3RzVG9rZW4nKSB7XG4gICAgICAgICAgICBwcm9maWxlTmFtZXMgPSBjb25maWd1cmVJbmZvcy5TdHNUb2tlbi5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1JhbVJvbGVBcm4nKSB7XG4gICAgICAgICAgICBwcm9maWxlTmFtZXMgPSBjb25maWd1cmVJbmZvcy5SYW1Sb2xlQXJuLm1hcCgoaXRlbTogeyBuYW1lOiBhbnk7IH0pID0+IGl0ZW0ubmFtZSlcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgICAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLkVjc1JhbVJvbGUubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgICAgICB9XG4gICAgICAgIGxldCBwcm9maWxlSW5kZXggPSByZWFkbGluZVN5bmMua2V5SW5TZWxlY3QocHJvZmlsZU5hbWVzLCAnU2VsZWN0IEF1dGhlbnRpY2F0ZSBwcm9maWxlIG5hbWU6Jyk7XG4gICAgICAgIGlmIChwcm9maWxlSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBjZXJ0aWZpY2F0aW9uIHByb2ZpbGUgbXVzdCBiZSBzZWxlY3RlZCcsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbmRwb2ludCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2VuZHBvaW50JywgdHJ1ZSlcbiAgICAgICAgbGV0IHJlZ2lvbklkO1xuICAgICAgICBsZXQgY29uZmlnSW5mbzogYW55ID0ge307XG4gICAgICAgIGVuZHBvaW50ID0gZW5kcG9pbnQgPyBlbmRwb2ludCA6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nO1xuICAgICAgICBzd2l0Y2ggKG1vZGVUeXBlW21vZGVJbmRleF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ0FLJzpcbiAgICAgICAgICAgICAgICBwcm9maWxlQ29uZmlnID0gY29uZmlndXJlSW5mb3MuQUsuZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddIHx8ICFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhY2Nlc3NLZXlJZCBvciBhY2Nlc3NLZXlTZWNyZXQgQ2Fubm90IGJlIGVtcHR5IScsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FjY2Vzc19rZXknLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10pLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU3RzVG9rZW4nOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5TdHNUb2tlbi5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10gfHwgIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddIHx8ICFwcm9maWxlQ29uZmlnWydzZWN1cml0eVRva2VuJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYWNjZXNzS2V5SWQsIGFjY2Vzc0tleVNlY3JldCBvciBzZWN1cml0eVRva2VuIENhbm5vdCBiZSBlbXB0eSEnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHMnLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10pLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSksXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydzZWN1cml0eVRva2VuJ10pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1JhbVJvbGVBcm4nOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5SYW1Sb2xlQXJuLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmICghcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSB8fCAhcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10gfHwgIXByb2ZpbGVDb25maWdbJ3JvbGVBcm4nXSB8fCAhcHJvZmlsZUNvbmZpZ1sncm9sZVNlc3Npb25OYW1lJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYWNjZXNzS2V5SWQsIGFjY2Vzc0tleVNlY3JldCwgcm9sZUFybiBvciByb2xlU2Vzc2lvbk5hbWUgQ2Fubm90IGJlIGVtcHR5IScsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JhbV9yb2xlX2FybicsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddKSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFybjogcHJvZmlsZUNvbmZpZ1sncm9sZUFybiddLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHByb2ZpbGVDb25maWdbJ3JvbGVTZXNzaW9uTmFtZSddXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Vjc1JhbVJvbGUnOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5FY3NSYW1Sb2xlLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmICghcHJvZmlsZUNvbmZpZ1sncm9sZU5hbWUnXSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCByb2xlTmFtZSBDYW5ub3QgYmUgZW1wdHkhJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6IHByb2ZpbGVDb25maWdbJ3JvbGVOYW1lJ11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJlZ2lvbklkID0gcHJvZmlsZUNvbmZpZ1sncmVnaW9uJ10gPyBwcm9maWxlQ29uZmlnWydyZWdpb24nXSA6ICdjbi1oYW5nemhvdSc7XG4gICAgICAgIGNvbmZpZ0luZm8ucmVnaW9uSWQgPSByZWdpb25JZFxuICAgICAgICBjb25maWdJbmZvLmVuZHBvaW50ID0gZW5kcG9pbnRcbiAgICAgICAgbGV0IGZpbGUgPSBwYXRoLmpvaW4oY29uZmlnU2F2ZVBhdGgpO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KGNvbmZpZ0luZm8sIG51bGwsICdcXHQnKSk7XG4gICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgWW91ciBjZGsgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBsb2FkIGZyb20gQWxpeXVuIENsaSBjb25maWd1cmF0aW9uIHNhdmVkIHN1Y2Nlc3NmdWxseSAlcyAlcyFgLCBtb2RlVHlwZVttb2RlSW5kZXhdLCBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxpc3Qoc2VsZWN0b3JzOiBzdHJpbmdbXSkge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JMaXN0KHNlbGVjdG9ycyk7XG4gICAgICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBsZXQgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKTtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBzdGFja0luZm8uc3RhdHVzXG4gICAgICAgICAgICBkYXRhKHN0YWNrLmlkLCBzdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTeW50aGVzaXplIHRoZSBnaXZlbiBzZXQgb2Ygc3RhY2tzIChjYWxsZWQgd2hlbiB0aGUgdXNlciBydW5zICdjZGsgc3ludGgnKVxuICAgICAqXG4gICAgICogSU5QVVQ6IFN0YWNrIG5hbWVzIGNhbiBiZSBzdXBwbGllZCB1c2luZyBhIGdsb2IgZmlsdGVyLiBJZiBubyBzdGFja3MgYXJlXG4gICAgICogZ2l2ZW4sIGFsbCBzdGFja3MgZnJvbSB0aGUgYXBwbGljYXRpb24gYXJlIGltcGxpY3RseSBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIE9VVFBVVDogSWYgbW9yZSB0aGFuIG9uZSBzdGFjayBlbmRzIHVwIGJlaW5nIHNlbGVjdGVkLCBhbiBvdXRwdXQgZGlyZWN0b3J5XG4gICAgICogc2hvdWxkIGJlIHN1cHBsaWVkLCB3aGVyZSB0aGUgdGVtcGxhdGVzIHdpbGwgYmUgd3JpdHRlbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgc3ludGgoc3RhY2tOYW1lczogc3RyaW5nW10sIGV4Y2x1c2l2ZWx5OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGlmZihzdGFja05hbWVzLCBleGNsdXNpdmVseSk7XG5cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIHNpbmdsZSBzdGFjaywgcHJpbnQgaXQgdG8gU1RET1VUXG4gICAgICAgIGlmIChzdGFja3Muc3RhY2tDb3VudCA9PT0gMSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tzLmZpcnN0U3RhY2suaWQsIFNZTlRIX1NUQUNLKTtcbiAgICAgICAgICAgIHJldHVybiBzdGFja3MuZmlyc3RTdGFjay50ZW1wbGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrLmlkLCBTWU5USF9TVEFDSyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0ludGVnTW9kZSA9IHByb2Nlc3MuZW52LkNES19JTlRFR19NT0RFID09PSAnMSc7XG4gICAgICAgIGlmIChpc0ludGVnTW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YWNrcy5zdGFja0FydGlmYWN0cy5tYXAoKHMpID0+IHMudGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm90IG91dHB1dHRpbmcgdGVtcGxhdGUgdG8gc3Rkb3V0LCBsZXQncyBleHBsYWluIHRoaW5ncyB0byB0aGUgdXNlciBhIGxpdHRsZSBiaXQuLi5cbiAgICAgICAgc3VjY2VzcyhgU3VjY2Vzc2Z1bGx5IHN5bnRoZXNpemVkIHRvICR7Y29sb3JzLmJsdWUocGF0aC5yZXNvbHZlKHN0YWNrcy5hc3NlbWJseS5kaXJlY3RvcnkpKX1gKTtcbiAgICAgICAgcHJpbnQoXG4gICAgICAgICAgICBgU3VwcGx5IGEgc3RhY2sgaWQgKCR7c3RhY2tzLnN0YWNrQXJ0aWZhY3RzLm1hcCgocykgPT4gY29sb3JzLmdyZWVuKHMuaWQpKS5qb2luKCcsICcpfSkgdG8gZGlzcGxheSBpdHMgdGVtcGxhdGUuYCxcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZXBsb3kob3B0aW9uczogRGVwbG95T3B0aW9ucykge1xuICAgICAgICBjb25zdCBzbGVlcCA9IGZ1bmN0aW9uIChtczogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgICAgICAgfTtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVwbG95KG9wdGlvbnMuc3RhY2tOYW1lcywgb3B0aW9ucy5leGNsdXNpdmVseSk7XG4gICAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IG9wdGlvbnMuc3RhY2tOYW1lcy5sZW5ndGggIT09IDAgPyBvcHRpb25zLnN0YWNrTmFtZXNbMF0gOiBzdGFja3Muc3RhY2tBcnRpZmFjdHNbMF0uaWQ7XG4gICAgICAgIGxldCByZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpO1xuICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCB0ZW1wbGF0ZUJvZHkgPSBmcy5yZWFkRmlsZVN5bmMoYC4vY2RrLm91dC8ke3N0YWNrTmFtZX0udGVtcGxhdGUuanNvbmApO1xuICAgICAgICBsZXQgQ2xpZW50VG9rZW4gPSB1dWlkdjQoKTtcbiAgICAgICAgbGV0IGNvbnRlbnQ6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgU3RhY2tOYW1lOiBzdGFja05hbWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICBUaW1lb3V0SW5NaW51dGVzOiBvcHRpb25zLnRpbWVvdXQsXG4gICAgICAgICAgICBUZW1wbGF0ZUJvZHk6IHRlbXBsYXRlQm9keSxcbiAgICAgICAgICAgIENsaWVudFRva2VuOiBDbGllbnRUb2tlblxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMTtcbiAgICAgICAgICAgIGxldCBwYXJhcyA9IG9wdGlvbnMucGFyYW1ldGVycztcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhcykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1BhcmFtZXRlcnMuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlBhcmFtZXRlcktleSddID0ga2V5O1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1BhcmFtZXRlcnMuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlBhcmFtZXRlclZhbHVlJ10gPSBwYXJhc1trZXldO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9jYWxTdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKVxuICAgICAgICBjb25zdCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSlcbiAgICAgICAgaWYgKGxvY2FsU3RhY2tJbmZvLnN0YWNrSWQpIHtcbiAgICAgICAgICAgIGlmIChzdGFja0luZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgc3RhY2tcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1N0YWNrSWQnXSA9IHN0YWNrSW5mby5TdGFja0lkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhY2tTdGF0dXMgPSBzdGFja0luZm8uU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFja1VwZGF0ZVRpbWUgPSBzdGFja0luZm8uVXBkYXRlVGltZSA/IHN0YWNrSW5mby5VcGRhdGVUaW1lIDogc3RhY2tJbmZvLkNyZWF0ZVRpbWVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrU3RhdHVzLmluZGV4T2YoXCJJTl9QUk9HUkVTU1wiKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQudXBkYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCB1cGRhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQodXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUodXBkYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHVwZGF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ05vdFN1cHBvcnRlZCcgJiYgZS5tZXNzYWdlLnN0YXJ0c1dpdGgoJ1VwZGF0ZSB0aGUgY29tcGxldGVseSBzYW1lIHN0YWNrJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBzdGFja0luZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoJ1RoZSBzdGFjayBpcyBjb21wbGV0ZWx5IHRoZSBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIHVwZGF0ZS4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09ICdTZXJ2aWNlVW5hdmFpbGFibGUnIHx8IGUuY29kZSA9PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGkgPCAxMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQudXBkYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCB1cGRhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQodXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUodXBkYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHVwZGF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdHVzQXJyYXkgPSBbXCJVUERBVEVfRkFJTEVEXCIsIFwiVVBEQVRFX0NPTVBMRVRFXCIsIFwiUk9MTEJBQ0tfRkFJTEVEXCIsIFwiUk9MTEJBQ0tfQ09NUExFVEVcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YWNrSWRJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U3RhY2tJZEluZm9VcGRhdGVUaW1lID0gbmV3U3RhY2tJZEluZm8uVXBkYXRlVGltZSA/IG5ld1N0YWNrSWRJbmZvLlVwZGF0ZVRpbWUgOiBuZXdTdGFja0lkSW5mby5DcmVhdGVUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3U3RhY2tJZEluZm8uU3RhdHVzID09ICdVUERBVEVfSU5fUFJPR1JFU1MnIHx8IG5ld1N0YWNrSWRJbmZvLlN0YXR1cyA9PSAnUk9MTEJBQ0tfSU5fUFJPR1JFU1MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBuZXdTdGFja0lkSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudCh1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShuZXdTdGFja0lkSW5mby5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNBcnJheS5pbmNsdWRlcyhuZXdTdGFja0lkSW5mby5TdGF0dXMpICYmIG5ld1N0YWNrSWRJbmZvVXBkYXRlVGltZSAhPSBzdGFja1VwZGF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjaywgc2VydmljZSBpcyBTZXJ2aWNlVW5hdmFpbGFibGUgb3IgTGFzdFRva2VuUHJvY2Vzc2luZywgcGxlYXNlIGNoZWNrIHlvdSBzZXJ2aWNlIGVuZHBvaW50LicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gdXBkYXRlIHN0YWNrLCBiZWNhdXNlIHN0YWNrIHN0YXR1cyBpcyAlcycsIHN0YWNrU3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgc3RhY2tcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQuY3JlYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgY3JlYXRlUmVzdWx0LlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoY3JlYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGNyZWF0ZVJlc3VsdC5SZXF1ZXN0SWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoY3JlYXRlUmVzdWx0LlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQuY3JlYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgY3JlYXRlUmVzdWx0LlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoY3JlYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGNyZWF0ZVJlc3VsdC5SZXF1ZXN0SWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoY3JlYXRlUmVzdWx0LlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhY2tJZEluZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3U3RhY2tJZEluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBuZXdTdGFja0lkSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShuZXdTdGFja0lkSW5mby5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2ssIHNlcnZpY2UgaXMgU2VydmljZVVuYXZhaWxhYmxlIG9yIExhc3RUb2tlblByb2Nlc3NpbmcsIHBsZWFzZSBjaGVjayB5b3Ugc2VydmljZSBlbmRwb2ludC4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGNyZWF0ZSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzdGFja0luZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBzdGFjayBpcyBleGlzdCBzZW5kIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2ssIGJlY2F1c2Ugc3RhY2sgICVzIGlzIGV4aXN0IGluIHRoaXMgcmVnaW9uLicsIHN0YWNrTmFtZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHN0YWNrXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LmNyZWF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIGNyZWF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5SZXF1ZXN0ZWRJZDogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGNyZWF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LmNyZWF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIGNyZWF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5SZXF1ZXN0ZWRJZDogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGNyZWF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdTZXJ2aWNlVW5hdmFpbGFibGUnIHx8IGUuY29kZSA9PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDUwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YWNrSWRJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1N0YWNrSWRJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgbmV3U3RhY2tJZEluZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUobmV3U3RhY2tJZEluZm8uU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrLCBzZXJ2aWNlIGlzIFNlcnZpY2VVbmF2YWlsYWJsZSBvciBMYXN0VG9rZW5Qcm9jZXNzaW5nLCBwbGVhc2UgY2hlY2sgeW91IHNlcnZpY2UgZW5kcG9pbnQuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGlmZihvcHRpb25zOiBEaWZmT3B0aW9ucykge1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXN0cm95KG9wdGlvbnMuc3RhY2tOYW1lcyk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCByZWdpb25JbkxvY2FsID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLHRydWUpO1xuICAgICAgICByZWdpb25JbkxvY2FsID0gcmVnaW9uSW5Mb2NhbCA/IHJlZ2lvbkluTG9jYWw6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gb3B0aW9ucy5zdHJlYW0gfHwgcHJvY2Vzcy5zdGRlcnI7XG4gICAgICAgIGNvbnN0IGNvbnRleHRMaW5lcyA9IG9wdGlvbnMuY29udGV4dExpbmVzIHx8IDM7XG4gICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCk7XG4gICAgICAgICAgICBpZiAoIXN0YWNrSW5mby5zdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgc3RyZWFtLndyaXRlKGZvcm1hdCgnU3RhY2sgJXMgaGFzIG5vdCBiZWVuIGRlcGxveWVkLlxcbicsIGNvbG9ycy5ib2xkKHN0YWNrLmRpc3BsYXlOYW1lKSkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xpZW50LmdldFRlbXBsYXRlKHtSZWdpb25JZDogcmVnaW9uSW5Mb2NhbCwgU3RhY2tJZDogc3RhY2tJbmZvLnN0YWNrSWR9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkZXNlcmlhbGl6ZVN0cnVjdHVyZShyZXMuVGVtcGxhdGVCb2R5KTtcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtLndyaXRlKGZvcm1hdCgnU3RhY2sgJXNcXG4nLCBjb2xvcnMuYm9sZChzdGFjay5kaXNwbGF5TmFtZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpbnRTdGFja0RpZmYodGVtcGxhdGUsIHN0YWNrLCBjb250ZXh0TGluZXMsIHN0cmVhbSk7XG4gICAgICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIHN5bnRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2suaWQsIFNZTlRIX1NUQUNLKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCB0ZW1wbGF0ZTogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGV2ZW50KG9wdGlvbnM6IEV2ZW50T3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShbXSk7XG4gICAgICAgIGlmICghb3B0aW9ucy5zdGFja05hbWUpIHtcbiAgICAgICAgICAgIGVycm9yKCdJZiB3YW50IHRvIGdldCByZXNvdXJjZSBzdGFjayBldmVudHMsIHN0YWNrIG5hbWUgbXVzdCBiZSBTcGVjaWZpZWQhJylcbiAgICAgICAgICAgIGV4aXQoKVxuICAgICAgICB9XG4gICAgICAgIGlmICghc3RhY2tzLnN0YWNrSWRzLmluY2x1ZGVzKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSkge1xuICAgICAgICAgICAgZXJyb3IoYFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXN0LCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBpbnB1dCBzdGFjayBuYW1lIWApXG4gICAgICAgICAgICBleGl0KClcbiAgICAgICAgfVxuICAgICAgICBsZXQgTG9naWNhbFJlc291cmNlSWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBpZiAob3B0aW9ucy5sb2dpY2FsUmVzb3VyY2VJZCkge1xuICAgICAgICAgICAgTG9naWNhbFJlc291cmNlSWRzLnB1c2gob3B0aW9ucy5sb2dpY2FsUmVzb3VyY2VJZClcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLHRydWUpO1xuICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb246IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY2xpZW50XG4gICAgICAgICAgICAubGlzdFN0YWNrRXZlbnRzKHtcbiAgICAgICAgICAgICAgICBTdGFja0lkOiAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSkuc3RhY2tJZCxcbiAgICAgICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uLFxuICAgICAgICAgICAgICAgIExvZ2ljYWxSZXNvdXJjZUlkOiBMb2dpY2FsUmVzb3VyY2VJZHMsXG4gICAgICAgICAgICAgICAgUGFnZVNpemU6IG9wdGlvbnMucGFnZVNpemUgPyBOdW1iZXIob3B0aW9ucy5wYWdlU2l6ZSkgOiAxMCxcbiAgICAgICAgICAgICAgICBQYWdlTnVtYmVyOiBvcHRpb25zLnBhZ2VOdW1iZXIgPyBOdW1iZXIob3B0aW9ucy5wYWdlTnVtYmVyKSA6IDFcbiAgICAgICAgICAgIH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2sgJXMgXFxuIEV2ZW50cyBpczogXFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSwgY29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLkV2ZW50cywgbnVsbCwgXCJcXHRcIikpKTtcbiAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8ob3B0aW9ucy5zdGFja05hbWVbMF0sIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjayBldmVudHM6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb3V0cHV0KG9wdGlvbnM6IE91dFB1dE9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRlc3Ryb3koW10pO1xuICAgICAgICBpZiAoIW9wdGlvbnMuc3RhY2tOYW1lKSB7XG4gICAgICAgICAgICBlcnJvcignSWYgd2FudCB0byBnZXQgcmVzb3VyY2Ugc3RhY2sgb3V0cHV0LCBzdGFjayBuYW1lIG11c3QgYmUgU3BlY2lmaWVkIScpXG4gICAgICAgICAgICBleGl0KClcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YWNrcy5zdGFja0lkcy5pbmNsdWRlcyhvcHRpb25zLnN0YWNrTmFtZVswXSkpIHtcbiAgICAgICAgICAgIGVycm9yKGBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGlzdCwgUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgaW5wdXQgc3RhY2sgbmFtZSFgKVxuICAgICAgICAgICAgZXhpdCgpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJyx0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgIGNsaWVudFxuICAgICAgICAgICAgLmdldFN0YWNrKHtcbiAgICAgICAgICAgICAgICBTdGFja0lkOiAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSkuc3RhY2tJZCxcbiAgICAgICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uXG4gICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIFN0YWNrICVzIFxcbiBPdXRwdXQgaXM6IFxcbiAlcyBcXG5gLCBjb2xvcnMuYmx1ZShvcHRpb25zLnN0YWNrTmFtZVswXSksIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5PdXRwdXRzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBkZXN0cm95LmApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhvcHRpb25zLnN0YWNrTmFtZVswXSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHN0YWNrIGV2ZW50czogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFzeW5jIHJlc291cmNlKG9wdGlvbnM6IFJlc291cmNlT3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBsZXQgc3RhY2tOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBpZiAoKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCkpLnN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBzdGFja05hbWVzLnB1c2goc3RhY2suaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCByZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbjogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgICAgICAgY2xpZW50XG4gICAgICAgICAgICAgICAgLmxpc3RTdGFja1Jlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgICAgIFN0YWNrSWQ6IChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKSkuc3RhY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2sgJXMgXFxuIFJlc291cmNlIGlzOiBcXG4gJXMgXFxuYCwgY29sb3JzLmJsdWUoc3RhY2tOYW1lKSwgY29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLlJlc291cmNlcywgbnVsbCwgXCJcXHRcIikpKTtcbiAgICAgICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgc3RhY2sgcmVzb3VyY2U6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRTdGFja0J5TmFtZShzdGFja05hbWU6IHN0cmluZyl7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCByZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbjogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgIFBhZ2VTaXplOiAgMTAsXG4gICAgICAgICAgICBQYWdlTnVtYmVyOiAgMSxcbiAgICAgICAgICAgIFN0YWNrTmFtZTogW3N0YWNrTmFtZV1cbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5saXN0U3RhY2tzKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICBpZiAocmVzdWx0LlN0YWNrc1swXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuU3RhY2tzWzBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHVibGljIGFzeW5jIGxpc3RTdGFja3Mob3B0aW9uczogTGlzdFN0YWNrT3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yTGlzdChbXSk7XG4gICAgICAgIGxldCBwYXJhbXM6IGFueSA9IHt9O1xuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLHRydWUpO1xuICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb246IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgIFBhZ2VTaXplOiBvcHRpb25zLnBhZ2VTaXplID8gTnVtYmVyKG9wdGlvbnMucGFnZVNpemUpIDogMTAsXG4gICAgICAgICAgICBQYWdlTnVtYmVyOiBvcHRpb25zLnBhZ2VOdW1iZXIgPyBOdW1iZXIob3B0aW9ucy5wYWdlTnVtYmVyKSA6IDFcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFvcHRpb25zLmFsbCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RhY2tOYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuU3RhY2tOYW1lID0gc3RhY2tzLnN0YWNrSWRzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5TdGFja05hbWUgPSBvcHRpb25zLnN0YWNrTmFtZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjbGllbnQubGlzdFN0YWNrcyhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2tzIGxpc3QgaXM6XFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5TdGFja3MsIG51bGwsIFwiXFx0XCIpKSk7XG4gICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGxpc3Qgc3RhY2tzOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVzdHJveShvcHRpb25zOiBEZXN0cm95T3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBsZXQgc3RhY2tOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBpZiAoKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCkpLnN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBzdGFja05hbWVzLnB1c2goc3RhY2suaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5xdWlldCkge1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlybSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihcbiAgICAgICAgICAgICAgICAgICAgJ1RoZSBmb2xsb3dpbmcgc3RhY2socykgd2lsbCBiZSBkZXN0cm95ZWQoT25seSBkZXBsb3llZCBzdGFja3Mgd2lsbCBiZSBkaXNwbGF5ZWQpLlxcblxcbicgK1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzLnRvU3RyaW5nKCkgK1xuICAgICAgICAgICAgICAgICAgICAnXFxuXFxuUGxlYXNlIGNvbmZpcm0uKFkvTilcXG4nLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0gPT09ICduJyB8fCBjb25maXJtID09PSAnTicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybSA9PT0gJ3knIHx8IGNvbmZpcm0gPT09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJyx0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGZvciAobGV0IHN0YWNrTmFtZSBvZiBzdGFja05hbWVzKSB7XG4gICAgICAgICAgICBjbGllbnRcbiAgICAgICAgICAgICAgICAuZGVsZXRlU3RhY2soe1xuICAgICAgICAgICAgICAgICAgICBTdGFja0lkOiAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrTmFtZSkpLnN0YWNrSWQsXG4gICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICAgICAgfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgRGVsZXRlZFxcblJlcXVlc3RlZElkOiAlc2AsIGNvbG9ycy5ibHVlKHJlcy5SZXF1ZXN0SWQpKTtcbiAgICAgICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBkZWxldGUgc3RhY2s6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzeW5jU3RhY2tJbmZvKCkge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSB7fTtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGZpbGVDb250ZW50LCBudWxsLCAnXFx0JykpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0ZW1wOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgIC8vIHNlbGVjdG9yLmxlbmd0aCA9IDAgbWVhbnMgc2VsZWN0IGFsbCBzdGFja3MgZnJvbSB0aGlzIGFwcFxuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0Zvckxpc3QoW10pO1xuICAgICAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKFNUQUNLX0lORk8sIHN0YWNrLmlkKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdGFjayBoYXMgbm8gaW5mbywgdGhlbiBhZGQgaW5pdCB0YWcgZm9yIGl0XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3N0YWNrLmlkXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3N0YWNrLmlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBJTklUX1NUQUNLLFxuICAgICAgICAgICAgICAgICAgICBzdGFja0lkOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KHRlbXAsIG51bGwsICdcXHQnKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcbiAgICAgICAgbGV0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICBsZXQgaW5mbyA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpO1xuICAgICAgICBsZXQgc3RhY2tJbmZvID0gaW5mb1tzdGFja05hbWVdO1xuICAgICAgICBpZiAoIXN0YWNrSW5mbykge1xuICAgICAgICAgICAgc3RhY2tJbmZvID0gaW5mb1tzdGFja05hbWVdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gREVQTE9ZX1NUQUNLX0lEX0xFTkdUSCkge1xuICAgICAgICAgICAgc3RhY2tJbmZvLnN0YXR1cyA9IERFUExPWV9TVEFDSztcbiAgICAgICAgICAgIHN0YWNrSW5mby5zdGFja0lkID0gdmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YWNrSW5mby5zdGF0dXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gREVTVFJPWV9TVEFDSykge1xuICAgICAgICAgICAgICAgIHN0YWNrSW5mby5zdGFja0lkID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShpbmZvLCBudWxsLCAnXFx0JykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZmluZFN0YWNrSW5mbyhzdGFja05hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGVDb250ZW50KVtzdGFja05hbWVdO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yTGlzdChzZWxlY3RvcnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc2VsZWN0b3JzLCB7ZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrc30pO1xuXG4gICAgICAgIC8vIE5vIHZhbGlkYXRpb25cblxuICAgICAgICByZXR1cm4gc3RhY2tzO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yRGVzdHJveShzdGFja05hbWVzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5BbGxTdGFja3MsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE5vIHZhbGlkYXRpb25cblxuICAgICAgICByZXR1cm4gc3RhY2tzO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yRGVwbG95KHN0YWNrTmFtZXM6IHN0cmluZ1tdLCBleGNsdXNpdmVseT86IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzdGFja05hbWVzLCB7XG4gICAgICAgICAgICBleHRlbmQ6IGV4Y2x1c2l2ZWx5ID8gRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5Ob25lIDogRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5VcHN0cmVhbSxcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5Pbmx5U2luZ2xlLFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlU3RhY2tzKHN0YWNrcyk7XG5cbiAgICAgICAgcmV0dXJuIHN0YWNrcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNlbGVjdFN0YWNrc0ZvckRpZmYoc3RhY2tOYW1lczogc3RyaW5nW10sIGV4Y2x1c2l2ZWx5PzogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgICAgICAgIGV4dGVuZDogZXhjbHVzaXZlbHkgPyBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUgOiBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLlVwc3RyZWFtLFxuICAgICAgICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrcyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZVN0YWNrcyhzdGFja3MpO1xuXG4gICAgICAgIHJldHVybiBzdGFja3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgdGhlIHN0YWNrcyBmb3IgZXJyb3JzIGFuZCB3YXJuaW5ncyBhY2NvcmRpbmcgdG8gdGhlIENMSSdzIGN1cnJlbnQgc2V0dGluZ3NcbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIHZhbGlkYXRlU3RhY2tzKHN0YWNrczogU3RhY2tDb2xsZWN0aW9uKSB7XG4gICAgICAgIHN0YWNrcy5wcm9jZXNzTWV0YWRhdGFNZXNzYWdlcyh7XG4gICAgICAgICAgICBpZ25vcmVFcnJvcnM6IHRoaXMucHJvcHMuaWdub3JlRXJyb3JzLFxuICAgICAgICAgICAgc3RyaWN0OiB0aGlzLnByb3BzLnN0cmljdCxcbiAgICAgICAgICAgIHZlcmJvc2U6IHRoaXMucHJvcHMudmVyYm9zZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3NlbWJseSgpOiBQcm9taXNlPENsb3VkQXNzZW1ibHk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2xvdWRFeGVjdXRhYmxlLnN5bnRoZXNpemUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldENsaUNvbmZpZyhsb2FkRmlsZVBhdGg6IHN0cmluZykge1xuICAgICAgICBsZXQgZmlsZVBhdGg6IHN0cmluZztcbiAgICAgICAgbGV0IGNvbmZpZ3VyZUluZm86IGFueSA9IHt9O1xuICAgICAgICBsZXQgY29uZmlndXJlSW5mb3M6IGFueSA9IHt9O1xuICAgICAgICBsZXQgQUtQcm9maWxlTGlzdDogb2JqZWN0W10gPSBbXTtcbiAgICAgICAgbGV0IFN0c1Byb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBsZXQgUmFtUm9sZUFyblByb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBsZXQgRWNzUmFtUm9sZVByb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBpZiAobG9hZEZpbGVQYXRoKSB7XG4gICAgICAgICAgICBmaWxlUGF0aCA9IGxvYWRGaWxlUGF0aFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGhvbWVQYXRoID0gb3MuaG9tZWRpcigpO1xuICAgICAgICAgICAgZmlsZVBhdGggPSBob21lUGF0aCArIENMSV9DT05GSUdfRklMRTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IEFsbFByb2ZpbGVzID0gSlNPTi5wYXJzZShmaWxlKVsncHJvZmlsZXMnXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb2ZpbGUgb2YgQWxsUHJvZmlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogcHJvZmlsZS5hY2Nlc3Nfa2V5X2lkLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IHByb2ZpbGUuYWNjZXNzX2tleV9zZWNyZXQsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbjogcHJvZmlsZS5yZWdpb25faWQsXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IHByb2ZpbGUuc3RzX3Rva2VuLFxuICAgICAgICAgICAgICAgICAgICByb2xlQXJuOiBwcm9maWxlLnJhbV9yb2xlX2FybixcbiAgICAgICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiBwcm9maWxlLnJhbV9zZXNzaW9uX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiBwcm9maWxlLnJhbV9yb2xlX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGUubmFtZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwcm9maWxlLm1vZGUgPT09ICdBSycpIHtcbiAgICAgICAgICAgICAgICAgICAgQUtQcm9maWxlTGlzdC5wdXNoKGNvbmZpZ3VyZUluZm8pXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUluZm9zLkFLID0gQUtQcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnU3RzVG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIFN0c1Byb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuU3RzVG9rZW4gPSBTdHNQcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgICAgICAgICAgICAgICAgUmFtUm9sZUFyblByb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuUmFtUm9sZUFybiA9IFJhbVJvbGVBcm5Qcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgICAgICAgICAgICAgICAgRWNzUmFtUm9sZVByb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuRWNzUmFtUm9sZSA9IEVjc1JhbVJvbGVQcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY29uZmlndXJlSW5mb3MgfHwgT2JqZWN0LmtleXMoY29uZmlndXJlSW5mb3MpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXCJXQU5STklORzogUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgbW9kZSBhbmQgcHJvZmlsZSBjb25maWd1cmF0aW9uIGVudGVyZWQuXCIpO1xuICAgICAgICAgICAgICAgIGV4aXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25maWd1cmVJbmZvc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoXCJXQU5STklORzogUGxlYXNlIGNoZWNrIEFsaXl1biBDbGkgdG9vbCBjb25maWd1cmUgYWNjdXJhY3kgb2YgdGhlIGRlZmF1bHQgcGF0aCBvciBzcGVjaWZpZWQgcGF0aC5cIik7XG4gICAgICAgICAgICBleGl0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlmZk9wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBzdHJlYW0/OiBOb2RlSlMuV3JpdGFibGVTdHJlYW07XG4gICAgY29udGV4dExpbmVzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVwbG95T3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHNlbGVjdCB0aGUgZ2l2ZW4gc3RhY2tcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZXhjbHVzaXZlbHk/OiBib29sZWFuO1xuICAgIHBhcmFtZXRlcnM/OiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfTtcbiAgICB0aW1lb3V0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzdHJveU9wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuICAgIHF1aWV0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmVudE9wdGlvbnMge1xuICAgIHN0YWNrTmFtZTogc3RyaW5nW107XG4gICAgbG9naWNhbFJlc291cmNlSWQ6IHN0cmluZztcbiAgICBwYWdlTnVtYmVyOiBzdHJpbmc7XG4gICAgcGFnZVNpemU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdXRQdXRPcHRpb25zIHtcbiAgICBzdGFja05hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZU9wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RTdGFja09wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuICAgIHBhZ2VOdW1iZXI6IHN0cmluZztcbiAgICBwYWdlU2l6ZTogc3RyaW5nO1xuICAgIGFsbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1NldE9wdGlvbnN7XG4gICAgZ2xvYmFsOiBzdHJpbmc7XG4gICAgZW5kcG9pbnQ6IHN0cmluZztcbiAgICByZWdpb246IHN0cmluZztcbiAgICBtb2RlOiBzdHJpbmc7XG4gICAgYWs6IHN0cmluZztcbiAgICBzazogc3RyaW5nO1xuICAgIHN0czogc3RyaW5nO1xuICAgIHJhbVJvbGVBcm46IHN0cmluZztcbiAgICByb2xlU2Vzc2lvbk5hbWU6IHN0cmluZztcbiAgICByYW1Sb2xlTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRDb25maWdPcHRpb25zIHtcbiAgICBnbG9iYWw/OiBzdHJpbmc7XG4gICAgbG9hZEZpbGVQYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnIHtcbiAgICByZWFkb25seSBLZXk6IHN0cmluZztcbiAgICByZWFkb25seSBWYWx1ZTogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUFuZFVwZGF0ZUxhbmd1YWdlSW5mbyhsYW5ndWFnZTogc3RyaW5nKXtcbiAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFBST0pFQ1RfQ09ORklHKTtcbiAgICBsZXQgZmlsZUNvbnRlbnQ6IGFueTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBpbmZvID0gSlNPTi5wYXJzZShmaWxlQ29udGVudCk7XG4gICAgICAgIGluZm9bJ2xhbmd1YWdlSW5mbyddID0gbGFuZ3VhZ2U7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGluZm8sIG51bGwsICdcXHQnKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZExhbmd1YWdlSW5mbygpe1xuICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgUFJPSkVDVF9DT05GSUcpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGVDb250ZW50KVsnbGFuZ3VhZ2VJbmZvJ10udG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxufVxuIl19