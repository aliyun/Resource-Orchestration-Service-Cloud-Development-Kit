"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shorten = exports.padRight = exports.padLeft = exports.readLanguageInfo = exports.writeAndUpdateLanguageInfo = exports.CdkToolkit = void 0;
const colors = require("colors/safe");
const fs = require("fs");
const path = require("path");
const readlineSync = require("readline-sync");
const util = require("util");
const cipher_1 = require("./util/cipher");
const util_1 = require("util");
const display_1 = require("./util/display");
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
const exec = util_2.promisify(child_process_1.exec);
const requestOptions = {
    headers: {
        'User-Agent': "ROS-CLI-" + JSON.parse(fs.readFileSync(PACKAGE_JSON).toString())['version'] + "::" + readLanguageInfo()
    },
    timeout: 15000
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
                    process_1.exit(1);
                }
            }
            catch (e) {
                logging_1.error('WANRNING: If want to Use EcsRamRole config, Please bind EcsRamRole to the host!' + e.message);
                process_1.exit(1);
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
            process_1.exit(1);
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
            process_1.exit(1);
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
        let content = {
            StackName: stackName.toString(),
            RegionId: region,
            TimeoutInMinutes: options.timeout,
            TemplateBody: templateBody,
            ClientToken: ClientToken
        };
        let sync = options.sync;
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
        const stackInfo = await this.getStackByName(stackName);
        if (localStackInfo.stackId) {
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
                                await this.syncUpdateStack(client, content, requestOptions);
                            }
                            const updateResult = await client.updateStack(content, requestOptions);
                            await this.updateStackInfo(stackName, updateResult.StackId);
                            logging_1.success(`\n ✅ The deployment(update stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(updateResult.RequestId), colors.blue(updateResult.StackId));
                            process_1.exit(0);
                        }
                        catch (e) {
                            if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack')) {
                                await this.updateStackInfo(stackName, stackInfo.StackId);
                                logging_1.success('The stack is completely the same, there is no need to update.');
                                process_1.exit(0);
                            }
                            else if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                                await sleep(5000);
                                let i = 0;
                                while (i < 11) {
                                    try {
                                        if (sync) {
                                            logging_1.print('%s: deploying...', colors.bold(stackName));
                                            await this.syncUpdateStack(client, content, requestOptions);
                                        }
                                        const updateResult = await client.updateStack(content, requestOptions);
                                        await this.updateStackInfo(stackName, updateResult.StackId);
                                        logging_1.success(`\n ✅ The deployment(update stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(updateResult.RequestId), colors.blue(updateResult.StackId));
                                        process_1.exit(0);
                                        break;
                                    }
                                    catch (e) {
                                        if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                                            await sleep(5000);
                                            i++;
                                        }
                                        else {
                                            logging_1.error('fail to update stack: %s %s', e.code, e.message);
                                            process_1.exit(1);
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
                                        process_1.exit(0);
                                    }
                                    else if (statusArray.includes(newStackIdInfo.Status) && newStackIdInfoUpdateTime != stackUpdateTime) {
                                        await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                                        logging_1.success(`\n ✅ The deployment(update stack) has completed!\nStackId: %s`, colors.blue(newStackIdInfo.StackId));
                                        process_1.exit(0);
                                    }
                                    else {
                                        logging_1.error('fail to update stack, service is ServiceUnavailable or LastTokenProcessing, please check you service endpoint.');
                                        process_1.exit(1);
                                    }
                                }
                            }
                            else {
                                logging_1.error('fail to update stack: %s %s', e.code, e.message);
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
                        await this.syncDeployStack(client, content, requestOptions);
                    }
                    const createResult = await client.createStack(content, requestOptions);
                    await this.updateStackInfo(stackName, createResult.StackId);
                    logging_1.success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(createResult.RequestId), colors.blue(createResult.StackId));
                    process_1.exit(0);
                }
                catch (e) {
                    if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                        await sleep(5000);
                        let i = 0;
                        while (i < 11) {
                            try {
                                if (sync) {
                                    logging_1.print('%s: deploying...', colors.bold(stackName));
                                    await this.syncDeployStack(client, content, requestOptions);
                                }
                                const createResult = await client.createStack(content, requestOptions);
                                await this.updateStackInfo(stackName, createResult.StackId);
                                logging_1.success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(createResult.RequestId), colors.blue(createResult.StackId));
                                process_1.exit(0);
                                break;
                            }
                            catch (e) {
                                if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                                    await sleep(5000);
                                    i++;
                                }
                                else {
                                    logging_1.error('fail to create stack: %s %s', e.code, e.message);
                                    process_1.exit(1);
                                    break;
                                }
                            }
                        }
                        if (i >= 11) {
                            const newStackIdInfo = await this.getStackByName(stackName);
                            if (newStackIdInfo) {
                                await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                                logging_1.success(`\n ✅ The deployment(create stack) has completed!\nStackId: %s`, colors.blue(newStackIdInfo.StackId));
                                process_1.exit(0);
                            }
                            else {
                                logging_1.error('fail to create stack, service is ServiceUnavailable or LastTokenProcessing, please check you service endpoint.');
                                process_1.exit(1);
                            }
                        }
                    }
                    else {
                        logging_1.error('fail to create stack: %s %s', e.code, e.message);
                        process_1.exit(1);
                    }
                }
            }
        }
        else {
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
                        await this.syncDeployStack(client, content, requestOptions);
                    }
                    const createResult = await client.createStack(content, requestOptions);
                    await this.updateStackInfo(stackName, createResult.StackId);
                    logging_1.success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(createResult.RequestId), colors.blue(createResult.StackId));
                    process_1.exit(0);
                }
                catch (e) {
                    if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                        await sleep(5000);
                        let i = 0;
                        while (i < 11) {
                            try {
                                if (sync) {
                                    logging_1.print('%s: deploying...', colors.bold(stackName));
                                    await this.syncDeployStack(client, content, requestOptions);
                                }
                                const createResult = await client.createStack(content, requestOptions);
                                await this.updateStackInfo(stackName, createResult.StackId);
                                logging_1.success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(createResult.RequestId), colors.blue(createResult.StackId));
                                process_1.exit(0);
                                break;
                            }
                            catch (e) {
                                if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                                    await sleep(5000);
                                    i++;
                                }
                                else {
                                    logging_1.error('fail to create stack: %s %s', e.code, e.message);
                                    process_1.exit(1);
                                    break;
                                }
                            }
                        }
                        if (i >= 11) {
                            const newStackIdInfo = await this.getStackByName(stackName);
                            if (newStackIdInfo) {
                                await this.updateStackInfo(stackName, newStackIdInfo.StackId);
                                logging_1.success(`\n ✅ The deployment(create stack) has completed!\nStackId: %s`, colors.blue(newStackIdInfo.StackId));
                                process_1.exit(0);
                            }
                            else {
                                logging_1.error('fail to create stack, service is ServiceUnavailable or LastTokenProcessing, please check you service endpoint.');
                                process_1.exit(1);
                            }
                        }
                    }
                    else {
                        logging_1.error('fail to create stack: %s %s', e.code, e.message);
                        process_1.exit(1);
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
            process_1.exit(1);
        }
        if (!stacks.stackIds.includes(options.stackName[0])) {
            logging_1.error(`The specific stack doesn't exist, Please check the accuracy of the input stack name!`);
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
            process_1.exit(1);
        }
        if (!stacks.stackIds.includes(options.stackName[0])) {
            logging_1.error(`The specific stack doesn't exist, Please check the accuracy of the input stack name!`);
            process_1.exit(1);
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
    async generateStackInfo() {
        let filePath = path.join(LOCAL_PATH + STACK_INFO);
        let stacks = await this.selectStacksForList([]);
        let stackNames = [];
        let StackInfos = {};
        stackNames = stacks.stackIds;
        for (let stackName of stackNames) {
            const stackInfo = await this.getStackByName(stackName);
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
                process_1.exit(1);
            }
            return configureInfos;
        }
        else {
            logging_1.error("WANRNING: Please check Aliyun Cli tool configure accuracy of the default path or specified path.");
            process_1.exit(1);
        }
    }
    async syncDeployStack(client, content, requestOptions) {
        try {
            const createResult = await client.createStack(content, requestOptions);
            const block = new display_1.RewritableBlock(stream);
            withDefaultPrinterObj = setInterval(async function () {
                await CdkToolkit.withDefaultPrinter(client, content, requestOptions, createResult.StackId, block);
            }, 3000);
            while (true) {
                let params = {
                    RegionId: content['RegionId'],
                    StackId: createResult.StackId
                };
                const getStackResult = await client.getStack(params, requestOptions);
                const status = getStackResult.Status;
                const statusReason = getStackResult.StatusReason;
                const stackName = getStackResult.StackName;
                const regComplete = RegExp(/COMPLETE/);
                const regFailed = RegExp(/FAILED/);
                if (regComplete.exec(status) || regFailed.exec(status)) {
                    clearInterval(withDefaultPrinterObj);
                    await CdkToolkit.withDefaultPrinter(client, content, requestOptions, createResult.StackId, block);
                    logging_1.success(`\n ✅ The deployment(sync deploy stack) has finished!\nstatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(getStackResult.StackId));
                    await this.updateStackInfo(stackName, createResult.StackId);
                    break;
                }
            }
            process_1.exit(0);
        }
        catch (e) {
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
    static async withDefaultPrinter(client, content, requestOptions, stackId, block) {
        const lines = new Array();
        const resources = await CdkToolkit.getResources(client, content, requestOptions, stackId);
        for (let resource of resources) {
            lines.push(util.format(colors.blue('|%s | %s | %s | %s | %s') + '\n', padLeft(12, resource.CreateTime), padRight(20, resource.Status), padRight(23, resource.ResourceType), shorten(40, resource.PhysicalResourceId), resource.LogicalResourceId));
        }
        block.displayLines(lines);
    }
    async syncUpdateStack(client, content, requestOptions) {
        try {
            let params = {
                RegionId: content['RegionId'],
                StackId: content['StackId']
            };
            const getOriginalStackResult = await client.getStack(params, requestOptions);
            const originalUpdateTime = getOriginalStackResult.UpdateTime ? getOriginalStackResult.UpdateTime : "";
            const createResult = await client.updateStack(content, requestOptions);
            // Wait for the stack state to change after updating it
            await sleep(5000);
            const block = new display_1.RewritableBlock(stream);
            withDefaultPrinterObj = setInterval(async function () {
                await CdkToolkit.withDefaultPrinter(client, content, requestOptions, createResult.StackId, block);
            }, 3000);
            while (true) {
                const getNewStackResult = await client.getStack(params, requestOptions);
                const status = getNewStackResult.Status;
                const statusReason = getNewStackResult.StatusReason;
                const stackName = getNewStackResult.StackName;
                const newUpdateTime = getNewStackResult.UpdateTime ? getNewStackResult.UpdateTime : "";
                if (newUpdateTime == originalUpdateTime) {
                    // stack update in progress or update did not begin
                    continue;
                }
                const regComplete = RegExp(/COMPLETE/);
                const regFailed = RegExp(/FAILED/);
                if (regComplete.exec(status) || regFailed.exec(status)) {
                    clearInterval(withDefaultPrinterObj);
                    await CdkToolkit.withDefaultPrinter(client, content, requestOptions, createResult.StackId, block);
                    logging_1.success(`\n ✅ The deployment(sync update stack) has finished!\nstatus: %s\nStatusReason: %s\nStackId: %s`, colors.blue(status), colors.blue(statusReason), colors.blue(getNewStackResult.StackId));
                    await this.updateStackInfo(stackName, createResult.StackId);
                    process_1.exit(0);
                    break;
                }
                else {
                    await sleep(5000);
                }
            }
        }
        catch (e) {
            logging_1.error('fail to sync update stack: %s %s', e.code, e.message);
            clearInterval(withDefaultPrinterObj);
            process_1.exit(1);
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
    return ' '.repeat(Math.max(0, n - x.length)) + x;
}
exports.padLeft = padLeft;
function padRight(n, x) {
    return x + ' '.repeat(Math.max(0, n - x.length));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRvb2xraXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstdG9vbGtpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4Q0FBOEM7QUFDOUMsNkJBQTZCO0FBQzdCLDBDQUErQztBQUMvQywrQkFBNEI7QUFDNUIsNENBQWlEO0FBQ2pELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ3RELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlEQUE0QztBQUM1Qyx1REFBMEQ7QUFDMUQseURBQThHO0FBRTlHLHVDQUErRDtBQUMvRCx5Q0FBeUQ7QUFDekQscUNBQTZCO0FBQzdCLGlDQUFzQztBQUN0QywyQ0FBaUQ7QUFDakQsK0JBQStCO0FBRS9CLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRW5ELE1BQU0sV0FBVyxHQUFHLHFCQUFxQixDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQztBQUN4QixNQUFNLFdBQVcsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3ZDLE1BQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDO0FBQ3JDLE1BQU0sc0JBQXNCLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLE1BQU0sZUFBZSxHQUFHLHNCQUFzQixDQUFDO0FBQy9DLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUMxQixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDNUIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDO0FBQzlCLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQztBQUNoQyxNQUFN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Q0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFGRCw0QkFFQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxRQUFnQixFQUFFLENBQVM7SUFDL0MsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLFFBQVEsRUFBRTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQUU7SUFDdkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUpELDBCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ3V0aWwnO1xuaW1wb3J0IHtkZWNpcGhlciwgY2lwaGVyfSBmcm9tICcuL3V0aWwvY2lwaGVyJztcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICd1dGlsJztcbmltcG9ydCB7IFJld3JpdGFibGVCbG9jayB9IGZyb20gJy4vdXRpbC9kaXNwbGF5JztcbmNvbnN0IHJvc0NsaWVudCA9IHJlcXVpcmUoJ0BhbGljbG91ZC9yb3MtMjAxOS0wOS0xMCcpO1xuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbmltcG9ydCB7ZXhlYyBhcyBfZXhlY30gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgQ3JlZGVudGlhbHMsIHtDb25maWd9IGZyb20gJ0BhbGljbG91ZC9jcmVkZW50aWFscyc7XG5pbXBvcnQge0Nsb3VkQXNzZW1ibHksIERlZmF1bHRTZWxlY3Rpb24sIEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24sIFN0YWNrQ29sbGVjdGlvbn0gZnJvbSAnLi9hcGkvY2xvdWQtYXNzZW1ibHknO1xuaW1wb3J0IHtDbG91ZEV4ZWN1dGFibGV9IGZyb20gJy4vYXBpL2Nsb3VkLWV4ZWN1dGFibGUnO1xuaW1wb3J0IHtkYXRhLCBlcnJvciwgcHJpbnQsIHN1Y2Nlc3MsIHdhcm5pbmd9IGZyb20gJy4vbG9nZ2luZyc7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb24sIFBST0pFQ1RfQ09ORklHfSBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCB7ZXhpdH0gZnJvbSAncHJvY2Vzcyc7XG5pbXBvcnQge3ByaW50U3RhY2tEaWZmfSBmcm9tICcuL2RpZmYnO1xuaW1wb3J0IHtkZXNlcmlhbGl6ZVN0cnVjdHVyZX0gZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHtwcm9taXNpZnl9IGZyb20gJ3V0aWwnO1xuXG5jb25zdCBnZW5lcmF0ZVNhZmVJZCA9IHJlcXVpcmUoJ2dlbmVyYXRlLXNhZmUtaWQnKTtcblxuY29uc3QgQ09ORklHX05BTUUgPSAnYWNjb3VudC5jb25maWcuanNvbic7XG5jb25zdCBMT0NBTF9QQVRIID0gJy4vJztcbmNvbnN0IEdMT0JBTF9QQVRIID0gX19kaXJuYW1lICsgJy8uLi8nO1xuY29uc3QgU1RBQ0tfSU5GTyA9ICdzdGFjay5pbmZvLmpzb24nO1xuY29uc3QgREVQTE9ZX1NUQUNLX0lEX0xFTkdUSCA9IDM2O1xuY29uc3QgQ0xJX0NPTkZJR19GSUxFID0gJy8uYWxpeXVuL2NvbmZpZy5qc29uJztcbmNvbnN0IElOSVRfU1RBQ0sgPSAnaW5pdCc7XG5jb25zdCBTWU5USF9TVEFDSyA9ICdzeW50aCc7XG5jb25zdCBERVBMT1lfU1RBQ0sgPSAnZGVwbG95JztcbmNvbnN0IERFU1RST1lfU1RBQ0sgPSAnZGVzdHJveSc7XG5jb25zdCBQQUNLQUdFX0pTT04gPSBfX2Rpcm5hbWUgKyAnLy4uL3BhY2thZ2UuanNvbic7XG5cbmNvbnN0IGV4ZWMgPSBwcm9taXNpZnkoX2V4ZWMpO1xuXG5jb25zdCByZXF1ZXN0T3B0aW9uczogeyBbbmFtZTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgICAnVXNlci1BZ2VudCc6IFwiUk9TLUNMSS1cIiArIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFBBQ0tBR0VfSlNPTikudG9TdHJpbmcoKSlbJ3ZlcnNpb24nXSArIFwiOjpcIiArIHJlYWRMYW5ndWFnZUluZm8oKVxuICAgIH0sXG4gICAgdGltZW91dDogMTUwMDBcbn07XG5cbmNvbnN0IHNsZWVwID0gZnVuY3Rpb24gKG1zOiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn07XG5cblxuY29uc3Qgc3RyZWFtID0gcHJvY2Vzcy5zdGRvdXQ7XG5cblxubGV0IHdpdGhEZWZhdWx0UHJpbnRlck9iajogYW55O1xuXG5cblxuZXhwb3J0IGludGVyZmFjZSBDZGtUb29sa2l0UHJvcHMge1xuICAgIC8qKlxuICAgICAqIFRoZSBDbG91ZCBFeGVjdXRhYmxlXG4gICAgICovXG4gICAgY2xvdWRFeGVjdXRhYmxlOiBDbG91ZEV4ZWN1dGFibGU7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGJlIHZlcmJvc2VcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgdmVyYm9zZT86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBEb24ndCBzdG9wIG9uIGVycm9yIG1ldGFkYXRhXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGlnbm9yZUVycm9ycz86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUcmVhdCB3YXJuaW5ncyBpbiBtZXRhZGF0YSBhcyBlcnJvcnNcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgc3RyaWN0PzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gKHNldHRpbmdzIGFuZCBjb250ZXh0KVxuICAgICAqL1xuICAgIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb247XG59XG5cbi8qKlxuICogVG9vbGtpdCBsb2dpY1xuICpcbiAqIFRoZSB0b29sa2l0IHJ1bnMgdGhlIGBjbG91ZEV4ZWN1dGFibGVgIHRvIG9idGFpbiBhIGNsb3VkIGFzc2VtYmx5XG4gKlxuICovXG5leHBvcnQgY2xhc3MgQ2RrVG9vbGtpdCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0SnNvbihmaWxlTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgYWxsb3dlZEVtcHR5OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gTE9DQUxfUEFUSCArIGZpbGVOYW1lO1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZSlba2V5XTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlTmFtZSA9PT0gU1RBQ0tfSU5GTykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBmaWxlUGF0aCA9IEdMT0JBTF9QQVRIICsgZmlsZU5hbWU7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlKVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWxsb3dlZEVtcHR5KSB7XG4gICAgICAgICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIHRvIHNldCB5b3VyIGFjY291bnQgY29uZmlndXJhdGlvbiBmaXJzdGx5IVwiKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb3BzOiBDZGtUb29sa2l0UHJvcHMpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0Um9zQ2xpZW50KCkge1xuICAgICAgICBsZXQgbW9kZVR5cGUgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICd0eXBlJywgdHJ1ZSlcbiAgICAgICAgbGV0IGVuZHBvaW50ID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnZW5kcG9pbnQnLCB0cnVlKVxuICAgICAgICBsZXQgY29uZmlnSW5mbzogYW55O1xuICAgICAgICBsZXQgY2xpZW50O1xuICAgICAgICBzd2l0Y2ggKG1vZGVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdlY3NfcmFtX3JvbGUnOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyb2xlTmFtZScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdHMnOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlJZCcpKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlTZWNyZXQnKSksXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3NlY3VyaXR5VG9rZW4nKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JhbV9yb2xlX2Fybic6XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleUlkJykpLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFybjogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncm9sZUFybicpLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JvbGVTZXNzaW9uTmFtZScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhY2Nlc3Nfa2V5JzpcbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleUlkJykpLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVuZHBvaW50ID0gZW5kcG9pbnQgPyBlbmRwb2ludCA6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nO1xuICAgICAgICBsZXQgbmV3QWNjZXNzS2V5SWQ6IHN0cmluZztcbiAgICAgICAgbGV0IG5ld0FjY2Vzc0tleVNlY3JldDogc3RyaW5nO1xuICAgICAgICBsZXQgbmV3U2VjdXJpdHlUb2tlbjogc3RyaW5nO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ld0FjY2Vzc0tleUlkID0gbmV3QWNjZXNzS2V5SWQgPyBuZXdBY2Nlc3NLZXlJZCA6IHByb2Nlc3MuZW52LkFDQ0VTU19LRVlfSURcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBuZXdBY2Nlc3NLZXlTZWNyZXQgPSBuZXdBY2Nlc3NLZXlTZWNyZXQgPyBuZXdBY2Nlc3NLZXlTZWNyZXQgOiBwcm9jZXNzLmVudi5BQ0NFU1NfS0VZX1NFQ1JFVFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ld1NlY3VyaXR5VG9rZW4gPSBuZXdTZWN1cml0eVRva2VuID8gbmV3U2VjdXJpdHlUb2tlbiA6IHByb2Nlc3MuZW52LlNFQ1VSSVRZX1RPS0VOXG4gICAgICAgIGlmIChjb25maWdJbmZvKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWQgPSBuZXcgQ3JlZGVudGlhbHMoY29uZmlnSW5mbyk7XG4gICAgICAgICAgICAgICAgbmV3QWNjZXNzS2V5SWQgPSBhd2FpdCBjcmVkLmdldEFjY2Vzc0tleUlkKCk7XG4gICAgICAgICAgICAgICAgbmV3QWNjZXNzS2V5U2VjcmV0ID0gYXdhaXQgY3JlZC5nZXRBY2Nlc3NLZXlTZWNyZXQoKTtcbiAgICAgICAgICAgICAgICBuZXdTZWN1cml0eVRva2VuID0gYXdhaXQgY3JlZC5nZXRTZWN1cml0eVRva2VuKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdXQU5STklORzogUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgY3JlZGVudGlhbCBpbmZvcm1hdGlvbiB5b3UgaW1wb3J0IGZyb20gQ0xJIGNvbmZpZyEnICsgZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmV3QWNjZXNzS2V5SWQgfHwgIW5ld0FjY2Vzc0tleVNlY3JldCkge1xuICAgICAgICAgICAgZXJyb3IoXCJQbGVhc2UgdXNlICdyb3MtY2RrIGNvbmZpZyAoLWcpJyBvciBzZXQgZW52aXJvbm1lbnQgdG8gc2V0IHlvdXIgYWNjb3VudCBjb25maWd1cmF0aW9uIGZpcnN0bHkhXCIpO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfSBlbHNlIGlmICghbmV3U2VjdXJpdHlUb2tlbikge1xuICAgICAgICAgICAgY2xpZW50ID0gbmV3IHJvc0NsaWVudCh7XG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGVuZHBvaW50LFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBuZXdBY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IG5ld0FjY2Vzc0tleVNlY3JldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGllbnQgPSBuZXcgcm9zQ2xpZW50KHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IG5ld0FjY2Vzc0tleUlkLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogbmV3QWNjZXNzS2V5U2VjcmV0LFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IG5ld1NlY3VyaXR5VG9rZW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBodHRwTW9kdWxlID0gY2xpZW50LmVuZHBvaW50LnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykgPyBodHRwcyA6IGh0dHA7XG4gICAgICAgIGNsaWVudC5rZWVwQWxpdmVBZ2VudCA9IG5ldyBodHRwTW9kdWxlLkFnZW50KHtcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZU1zZWNzOiAxNTAwMFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29uZmlnKGdsb2JhbDogYm9vbGVhbikge1xuICAgICAgICBsZXQgY29uZmlnU2F2ZVBhdGggPSAoZ2xvYmFsID8gR0xPQkFMX1BBVEggOiBMT0NBTF9QQVRIKSArIENPTkZJR19OQU1FO1xuICAgICAgICBsZXQgbW9kZVR5cGUgPSBbJ0FLJywgJ1N0c1Rva2VuJywgJ1JhbVJvbGVBcm4nLCAnRWNzUmFtUm9sZSddXG4gICAgICAgIGxldCBlbmRwb2ludCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignZW5kcG9pbnQob3B0aW9uYWwsIGRlZmF1bHQ6aHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tKTonLCB7ZGVmYXVsdElucHV0OiAnaHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tJ30pO1xuICAgICAgICBsZXQgcmVnaW9uSWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2RlZmF1bHRSZWdpb25JZChvcHRpb25hbCwgZGVmYXVsdDpjbi1oYW5nemhvdSk6Jywge2RlZmF1bHRJbnB1dDogJ2NuLWhhbmd6aG91J30pO1xuICAgICAgICBsZXQgbW9kZUluZGV4ID0gcmVhZGxpbmVTeW5jLmtleUluU2VsZWN0KG1vZGVUeXBlLCAnQXV0aGVudGljYXRlIG1vZGU6Jyk7XG4gICAgICAgIGxldCBpbnB1dENvbmZpZ0luZm86IGFueSA9IHt9O1xuICAgICAgICBsZXQgY2hlY2tDb21tYW5kOiBzdHJpbmc7XG4gICAgICAgIGxldCBjdXJsQ29tbWFuZDogc3RyaW5nO1xuICAgICAgICBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgICAgICAgICAgICAgIGNoZWNrQ29tbWFuZCA9ICdwb3dlcnNoZWxsIC1Db21tYW5kIFwiKGN1cmwgLVVSaSBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLykuU3RhdHVzQ29kZVwiJztcbiAgICAgICAgICAgICAgICBjdXJsQ29tbWFuZCA9ICdwb3dlcnNoZWxsIC1Db21tYW5kIFwiKGN1cmwgLVVSaSBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLykuQ29udGVudFwiJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hlY2tDb21tYW5kID0gJ2N1cmwgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8gLW8gL2Rldi9udWxsIC1zIC13ICV7aHR0cF9jb2RlfSc7XG4gICAgICAgICAgICAgICAgY3VybENvbW1hbmQgPSAnY3VybCBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtzdGRvdXQ6IGNoZWNrU3Rkb3V0fSA9IGF3YWl0IGV4ZWMoY2hlY2tDb21tYW5kKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tTdGRvdXQudHJpbSgpICE9PSAnMjAwJykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBVc2UgRWNzUmFtUm9sZSBjb25maWcsIFBsZWFzZSBiaW5kIEVjc1JhbVJvbGUgdG8gdGhlIGhvc3QuJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBVc2UgRWNzUmFtUm9sZSBjb25maWcsIFBsZWFzZSBiaW5kIEVjc1JhbVJvbGUgdG8gdGhlIGhvc3QhJyArIGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7c3Rkb3V0OiBjdXJsU3Rkb3V0fSA9IGF3YWl0IGV4ZWMoY3VybENvbW1hbmQpO1xuICAgICAgICAgICAgbGV0IHJvbGVOYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGByb2xlTmFtZSwgVGhlIGNvbmZpZ3VyZWQgcm9sZSBvZiB0aGUgaG9zdDogWyR7Y3VybFN0ZG91dC50cmltKCl9XWAsIHtkZWZhdWx0SW5wdXQ6IGN1cmxTdGRvdXQudHJpbSgpfSk7XG4gICAgICAgICAgICBpbnB1dENvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgcm9sZU5hbWU6IHJvbGVOYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignYWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignYWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIGxldCBzZWN1cml0eVRva2VuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdzZWN1cml0eVRva2VuOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RzJyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleUlkKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlTZWNyZXQpLFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGNpcGhlcihzZWN1cml0eVRva2VuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignYWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignYWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIGxldCByb2xlQXJuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdyb2xlQXJuKGVnOiBhY3M6cmFtOjoqKioqKio6cm9sZS8qKioqKiopOicpO1xuICAgICAgICAgICAgbGV0IHJvbGVTZXNzaW9uTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbigncm9sZVNlc3Npb25OYW1lOicpO1xuICAgICAgICAgICAgaW5wdXRDb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyYW1fcm9sZV9hcm4nLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5SWQpLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleVNlY3JldCksXG4gICAgICAgICAgICAgICAgcm9sZUFybjogcm9sZUFybixcbiAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHJvbGVTZXNzaW9uTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnQUsnKSB7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2FjY2Vzc0tleUlkOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2FjY2Vzc0tleVNlY3JldDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICBpbnB1dENvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FjY2Vzc19rZXknLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5SWQpLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleVNlY3JldClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBjZXJ0aWZpY2F0aW9uIG1ldGhvZCBtdXN0IGJlIHNlbGVjdGVkJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0Q29uZmlnSW5mby5lbmRwb2ludCA9IGVuZHBvaW50XG4gICAgICAgIGlucHV0Q29uZmlnSW5mby5yZWdpb25JZCA9IHJlZ2lvbklkXG4gICAgICAgIGxldCBmaWxlID0gcGF0aC5qb2luKGNvbmZpZ1NhdmVQYXRoKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlLCBKU09OLnN0cmluZ2lmeShpbnB1dENvbmZpZ0luZm8sIG51bGwsICdcXHQnKSk7XG4gICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgWW91ciBjZGsgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkhYCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbmZpZ1NldChvcHRpb25zOiBDb25maWdTZXRPcHRpb25zKSB7XG4gICAgICAgIGxldCBjb25maWdTYXZlUGF0aCA9IChvcHRpb25zLmdsb2JhbCA/IEdMT0JBTF9QQVRIIDogTE9DQUxfUEFUSCkgKyBDT05GSUdfTkFNRTtcbiAgICAgICAgbGV0IG1vZGVUeXBlID0gb3B0aW9ucy5tb2RlO1xuICAgICAgICBsZXQgY29uZmlnSW5mbzogYW55ID0ge307XG4gICAgICAgIGxldCBhayA9IG9wdGlvbnMuYWsgPyBvcHRpb25zLmFrIDogJyc7XG4gICAgICAgIGxldCBzayA9IG9wdGlvbnMuc2sgPyBvcHRpb25zLnNrIDogJyc7XG4gICAgICAgIGxldCBzdHNUb2tlbiA9IG9wdGlvbnMuc3RzID8gb3B0aW9ucy5zdHMgOiAnJztcbiAgICAgICAgbGV0IHJhbVJvbGVBcm4gPSBvcHRpb25zLnJhbVJvbGVBcm4gPyBvcHRpb25zLnJhbVJvbGVBcm4gOiAnJztcbiAgICAgICAgbGV0IHJvbGVTZXNzaW9uTmFtZSA9IG9wdGlvbnMucm9sZVNlc3Npb25OYW1lID8gb3B0aW9ucy5yb2xlU2Vzc2lvbk5hbWUgOiAnJztcbiAgICAgICAgbGV0IHJhbVJvbGVOYW1lID0gb3B0aW9ucy5yYW1Sb2xlTmFtZSA/IG9wdGlvbnMucmFtUm9sZU5hbWUgOiAnJztcbiAgICAgICAgaWYgKG1vZGVUeXBlID09PSAnQUsnKSB7XG4gICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFrKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihzaylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGUgPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhayksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoc2spLFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGNpcGhlcihzdHNUb2tlbilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGUgPT09ICdSYW1Sb2xlQXJuJykge1xuICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFrKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihzayksXG4gICAgICAgICAgICAgICAgcm9sZUFybjogcmFtUm9sZUFybixcbiAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHJvbGVTZXNzaW9uTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XG4gICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlY3NfcmFtX3JvbGUnLFxuICAgICAgICAgICAgICAgIHJvbGVOYW1lOiByYW1Sb2xlTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGF1dGhlbnRpY2F0ZSBtb2RlIG11c3QgYmUgaW4gKEFLfFN0c1Rva2VufFJhbVJvbGVBcm58RWNzUmFtUm9sZSknLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbGUgPSBwYXRoLmpvaW4oY29uZmlnU2F2ZVBhdGgpO1xuICAgICAgICBjb25maWdJbmZvLnJlZ2lvbklkID0gb3B0aW9ucy5yZWdpb247XG4gICAgICAgIGNvbmZpZ0luZm8uZW5kcG9pbnQgPSBvcHRpb25zLmVuZHBvaW50O1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KGNvbmZpZ0luZm8sIG51bGwsICdcXHQnKSk7XG4gICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgWW91ciBjZGsgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkhYCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYXN5bmMgbG9hZENsaUNvbmZpZyhvcHRpb25zOiBMb2FkQ29uZmlnT3B0aW9ucykge1xuICAgICAgICBsZXQgY29uZmlnU2F2ZVBhdGggPSAob3B0aW9ucy5nbG9iYWwgPyBHTE9CQUxfUEFUSCA6IExPQ0FMX1BBVEgpICsgQ09ORklHX05BTUU7XG4gICAgICAgIGxldCBjb25maWd1cmVJbmZvcyA9IGF3YWl0IHRoaXMuZ2V0Q2xpQ29uZmlnKG9wdGlvbnMubG9hZEZpbGVQYXRoKVxuICAgICAgICBsZXQgbW9kZVR5cGUgPSBPYmplY3Qua2V5cyhjb25maWd1cmVJbmZvcyk7XG4gICAgICAgIGxldCBtb2RlSW5kZXggPSByZWFkbGluZVN5bmMua2V5SW5TZWxlY3QobW9kZVR5cGUsICdTZWxlY3QgYXV0aGVudGljYXRlIG1vZGU6Jyk7XG4gICAgICAgIGxldCBwcm9maWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBwcm9maWxlQ29uZmlnOiBhbnkgPSB7fTtcbiAgICAgICAgaWYgKG1vZGVJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGNlcnRpZmljYXRpb24gbWV0aG9kIG11c3QgYmUgc2VsZWN0ZWQnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0FLJykge1xuICAgICAgICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuQUsubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLlN0c1Rva2VuLm1hcCgoaXRlbTogeyBuYW1lOiBhbnk7IH0pID0+IGl0ZW0ubmFtZSlcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgICAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLlJhbVJvbGVBcm4ubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdFY3NSYW1Sb2xlJykge1xuICAgICAgICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuRWNzUmFtUm9sZS5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb2ZpbGVJbmRleCA9IHJlYWRsaW5lU3luYy5rZXlJblNlbGVjdChwcm9maWxlTmFtZXMsICdTZWxlY3QgQXV0aGVudGljYXRlIHByb2ZpbGUgbmFtZTonKTtcbiAgICAgICAgaWYgKHByb2ZpbGVJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGNlcnRpZmljYXRpb24gcHJvZmlsZSBtdXN0IGJlIHNlbGVjdGVkJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbmRwb2ludCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2VuZHBvaW50JywgdHJ1ZSlcbiAgICAgICAgbGV0IHJlZ2lvbklkO1xuICAgICAgICBsZXQgY29uZmlnSW5mbzogYW55ID0ge307XG4gICAgICAgIGVuZHBvaW50ID0gZW5kcG9pbnQgPyBlbmRwb2ludCA6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nO1xuICAgICAgICBzd2l0Y2ggKG1vZGVUeXBlW21vZGVJbmRleF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ0FLJzpcbiAgICAgICAgICAgICAgICBwcm9maWxlQ29uZmlnID0gY29uZmlndXJlSW5mb3MuQUsuZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddIHx8ICFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhY2Nlc3NLZXlJZCBvciBhY2Nlc3NLZXlTZWNyZXQgQ2Fubm90IGJlIGVtcHR5IScsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1N0c1Rva2VuJzpcbiAgICAgICAgICAgICAgICBwcm9maWxlQ29uZmlnID0gY29uZmlndXJlSW5mb3MuU3RzVG9rZW4uZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddIHx8ICFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSB8fCAhcHJvZmlsZUNvbmZpZ1snc2VjdXJpdHlUb2tlbiddKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGFjY2Vzc0tleUlkLCBhY2Nlc3NLZXlTZWNyZXQgb3Igc2VjdXJpdHlUb2tlbiBDYW5ub3QgYmUgZW1wdHkhJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddKSxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ3NlY3VyaXR5VG9rZW4nXSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUmFtUm9sZUFybic6XG4gICAgICAgICAgICAgICAgcHJvZmlsZUNvbmZpZyA9IGNvbmZpZ3VyZUluZm9zLlJhbVJvbGVBcm4uZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddIHx8ICFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSB8fCAhcHJvZmlsZUNvbmZpZ1sncm9sZUFybiddIHx8ICFwcm9maWxlQ29uZmlnWydyb2xlU2Vzc2lvbk5hbWUnXSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhY2Nlc3NLZXlJZCwgYWNjZXNzS2V5U2VjcmV0LCByb2xlQXJuIG9yIHJvbGVTZXNzaW9uTmFtZSBDYW5ub3QgYmUgZW1wdHkhJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JhbV9yb2xlX2FybicsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddKSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFybjogcHJvZmlsZUNvbmZpZ1sncm9sZUFybiddLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHByb2ZpbGVDb25maWdbJ3JvbGVTZXNzaW9uTmFtZSddXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Vjc1JhbVJvbGUnOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5FY3NSYW1Sb2xlLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmICghcHJvZmlsZUNvbmZpZ1sncm9sZU5hbWUnXSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCByb2xlTmFtZSBDYW5ub3QgYmUgZW1wdHkhJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiBwcm9maWxlQ29uZmlnWydyb2xlTmFtZSddXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZWdpb25JZCA9IHByb2ZpbGVDb25maWdbJ3JlZ2lvbiddID8gcHJvZmlsZUNvbmZpZ1sncmVnaW9uJ10gOiAnY24taGFuZ3pob3UnO1xuICAgICAgICBjb25maWdJbmZvLnJlZ2lvbklkID0gcmVnaW9uSWRcbiAgICAgICAgY29uZmlnSW5mby5lbmRwb2ludCA9IGVuZHBvaW50XG4gICAgICAgIGxldCBmaWxlID0gcGF0aC5qb2luKGNvbmZpZ1NhdmVQYXRoKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlLCBKU09OLnN0cmluZ2lmeShjb25maWdJbmZvLCBudWxsLCAnXFx0JykpO1xuICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFlvdXIgY2RrIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gbG9hZCBmcm9tIEFsaXl1biBDbGkgY29uZmlndXJhdGlvbiBzYXZlZCBzdWNjZXNzZnVsbHkgJXMgJXMhYCwgbW9kZVR5cGVbbW9kZUluZGV4XSwgcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsaXN0KHNlbGVjdG9yczogc3RyaW5nW10pIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yTGlzdChzZWxlY3RvcnMpO1xuICAgICAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCk7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gc3RhY2tJbmZvLnN0YXR1c1xuICAgICAgICAgICAgZGF0YShzdGFjay5pZCwgc3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3ludGhlc2l6ZSB0aGUgZ2l2ZW4gc2V0IG9mIHN0YWNrcyAoY2FsbGVkIHdoZW4gdGhlIHVzZXIgcnVucyAnY2RrIHN5bnRoJylcbiAgICAgKlxuICAgICAqIElOUFVUOiBTdGFjayBuYW1lcyBjYW4gYmUgc3VwcGxpZWQgdXNpbmcgYSBnbG9iIGZpbHRlci4gSWYgbm8gc3RhY2tzIGFyZVxuICAgICAqIGdpdmVuLCBhbGwgc3RhY2tzIGZyb20gdGhlIGFwcGxpY2F0aW9uIGFyZSBpbXBsaWN0bHkgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBPVVRQVVQ6IElmIG1vcmUgdGhhbiBvbmUgc3RhY2sgZW5kcyB1cCBiZWluZyBzZWxlY3RlZCwgYW4gb3V0cHV0IGRpcmVjdG9yeVxuICAgICAqIHNob3VsZCBiZSBzdXBwbGllZCwgd2hlcmUgdGhlIHRlbXBsYXRlcyB3aWxsIGJlIHdyaXR0ZW4uXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHN5bnRoKHN0YWNrTmFtZXM6IHN0cmluZ1tdLCBleGNsdXNpdmVseTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRpZmYoc3RhY2tOYW1lcywgZXhjbHVzaXZlbHkpO1xuXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBzaW5nbGUgc3RhY2ssIHByaW50IGl0IHRvIFNURE9VVFxuICAgICAgICBpZiAoc3RhY2tzLnN0YWNrQ291bnQgPT09IDEpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrcy5maXJzdFN0YWNrLmlkLCBTWU5USF9TVEFDSyk7XG4gICAgICAgICAgICByZXR1cm4gc3RhY2tzLmZpcnN0U3RhY2sudGVtcGxhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFjay5pZCwgU1lOVEhfU1RBQ0spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNJbnRlZ01vZGUgPSBwcm9jZXNzLmVudi5DREtfSU5URUdfTU9ERSA9PT0gJzEnO1xuICAgICAgICBpZiAoaXNJbnRlZ01vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFja3Muc3RhY2tBcnRpZmFjdHMubWFwKChzKSA9PiBzLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdCBvdXRwdXR0aW5nIHRlbXBsYXRlIHRvIHN0ZG91dCwgbGV0J3MgZXhwbGFpbiB0aGluZ3MgdG8gdGhlIHVzZXIgYSBsaXR0bGUgYml0Li4uXG4gICAgICAgIHN1Y2Nlc3MoYFN1Y2Nlc3NmdWxseSBzeW50aGVzaXplZCB0byAke2NvbG9ycy5ibHVlKHBhdGgucmVzb2x2ZShzdGFja3MuYXNzZW1ibHkuZGlyZWN0b3J5KSl9YCk7XG4gICAgICAgIHByaW50KFxuICAgICAgICAgICAgYFN1cHBseSBhIHN0YWNrIGlkICgke3N0YWNrcy5zdGFja0FydGlmYWN0cy5tYXAoKHMpID0+IGNvbG9ycy5ncmVlbihzLmlkKSkuam9pbignLCAnKX0pIHRvIGRpc3BsYXkgaXRzIHRlbXBsYXRlLmAsXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVwbG95KG9wdGlvbnM6IERlcGxveU9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVwbG95KG9wdGlvbnMuc3RhY2tOYW1lcywgb3B0aW9ucy5leGNsdXNpdmVseSk7XG4gICAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IG9wdGlvbnMuc3RhY2tOYW1lcy5sZW5ndGggIT09IDAgPyBvcHRpb25zLnN0YWNrTmFtZXNbMF0gOiBzdGFja3Muc3RhY2tBcnRpZmFjdHNbMF0uaWQ7XG4gICAgICAgIGxldCByZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpO1xuICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCB0ZW1wbGF0ZUJvZHkgPSBmcy5yZWFkRmlsZVN5bmMoYC4vY2RrLm91dC8ke3N0YWNrTmFtZX0udGVtcGxhdGUuanNvbmApO1xuICAgICAgICBsZXQgQ2xpZW50VG9rZW4gPSBnZW5lcmF0ZVNhZmVJZCgpO1xuICAgICAgICBsZXQgY29udGVudDogeyBbbmFtZTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBTdGFja05hbWU6IHN0YWNrTmFtZS50b1N0cmluZygpLFxuICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgIFRpbWVvdXRJbk1pbnV0ZXM6IG9wdGlvbnMudGltZW91dCxcbiAgICAgICAgICAgIFRlbXBsYXRlQm9keTogdGVtcGxhdGVCb2R5LFxuICAgICAgICAgICAgQ2xpZW50VG9rZW46IENsaWVudFRva2VuXG4gICAgICAgIH07XG4gICAgICAgIGxldCBzeW5jID0gb3B0aW9ucy5zeW5jXG5cbiAgICAgICAgaWYgKHN0YWNrcy5zdGFja0FydGlmYWN0c1swXS50YWdzKSB7XG4gICAgICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDE7XG4gICAgICAgICAgICBsZXQgcGFyYXMgPSBzdGFja3Muc3RhY2tBcnRpZmFjdHNbMF0udGFncztcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhcykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1RhZ3MuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLktleSddID0ga2V5O1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1RhZ3MuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlZhbHVlJ10gPSBwYXJhc1trZXldO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5wYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDE7XG4gICAgICAgICAgICBsZXQgcGFyYXMgPSBvcHRpb25zLnBhcmFtZXRlcnM7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYXMpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50WydQYXJhbWV0ZXJzLicgKyBjb3VudC50b1N0cmluZygpICsgJy5QYXJhbWV0ZXJLZXknXSA9IGtleTtcbiAgICAgICAgICAgICAgICBjb250ZW50WydQYXJhbWV0ZXJzLicgKyBjb3VudC50b1N0cmluZygpICsgJy5QYXJhbWV0ZXJWYWx1ZSddID0gcGFyYXNba2V5XTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvY2FsU3RhY2tJbmZvID0gYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrTmFtZSlcbiAgICAgICAgY29uc3Qgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUpXG4gICAgICAgIGlmIChsb2NhbFN0YWNrSW5mby5zdGFja0lkKSB7XG4gICAgICAgICAgICBpZiAoc3RhY2tJbmZvICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHN0YWNrXG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RhY2tJbmZvLnN0YWNrSWQgIT09IHN0YWNrSW5mby5TdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjaywgYmVjYXVzZSBzdGFjayBsb2NhbCBpbmZvIGRvc2Ugbm90IG1hdGNoIHRoZSByZW1vdGUgc2VydmVyLicpXG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFsnU3RhY2tJZCddID0gc3RhY2tJbmZvLlN0YWNrSWQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFja1N0YXR1cyA9IHN0YWNrSW5mby5TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWNrVXBkYXRlVGltZSA9IHN0YWNrSW5mby5VcGRhdGVUaW1lID8gc3RhY2tJbmZvLlVwZGF0ZVRpbWUgOiBzdGFja0luZm8uQ3JlYXRlVGltZVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tTdGF0dXMuaW5kZXhPZihcIklOX1BST0dSRVNTXCIpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCclczogZGVwbG95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc3luY1VwZGF0ZVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC51cGRhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHVwZGF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudCh1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZSh1cGRhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUodXBkYXRlUmVzdWx0LlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ05vdFN1cHBvcnRlZCcgJiYgZS5tZXNzYWdlLnN0YXJ0c1dpdGgoJ1VwZGF0ZSB0aGUgY29tcGxldGVseSBzYW1lIHN0YWNrJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBzdGFja0luZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoJ1RoZSBzdGFjayBpcyBjb21wbGV0ZWx5IHRoZSBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIHVwZGF0ZS4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCclczogZGVwbG95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc3luY1VwZGF0ZVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC51cGRhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHVwZGF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudCh1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZSh1cGRhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUodXBkYXRlUmVzdWx0LlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXNBcnJheSA9IFtcIlVQREFURV9GQUlMRURcIiwgXCJVUERBVEVfQ09NUExFVEVcIiwgXCJST0xMQkFDS19GQUlMRURcIiwgXCJST0xMQkFDS19DT01QTEVURVwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhY2tJZEluZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTdGFja0lkSW5mb1VwZGF0ZVRpbWUgPSBuZXdTdGFja0lkSW5mby5VcGRhdGVUaW1lID8gbmV3U3RhY2tJZEluZm8uVXBkYXRlVGltZSA6IG5ld1N0YWNrSWRJbmZvLkNyZWF0ZVRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdTdGFja0lkSW5mby5TdGF0dXMgPT0gJ1VQREFURV9JTl9QUk9HUkVTUycgfHwgbmV3U3RhY2tJZEluZm8uU3RhdHVzID09ICdST0xMQkFDS19JTl9QUk9HUkVTUycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNBcnJheS5pbmNsdWRlcyhuZXdTdGFja0lkSW5mby5TdGF0dXMpICYmIG5ld1N0YWNrSWRJbmZvVXBkYXRlVGltZSAhPSBzdGFja1VwZGF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKG5ld1N0YWNrSWRJbmZvLlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2ssIHNlcnZpY2UgaXMgU2VydmljZVVuYXZhaWxhYmxlIG9yIExhc3RUb2tlblByb2Nlc3NpbmcsIHBsZWFzZSBjaGVjayB5b3Ugc2VydmljZSBlbmRwb2ludC4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjaywgYmVjYXVzZSBzdGFjayBzdGF0dXMgaXMgJXMnLCBzdGFja1N0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHN0YWNrXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCclczogZGVwbG95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN5bmNEZXBsb3lTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LmNyZWF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIGNyZWF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5SZXF1ZXN0ZWRJZDogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGNyZWF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJyVzOiBkZXBsb3lpbmcuLi4nLCBjb2xvcnMuYm9sZChzdGFja05hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc3luY0RlcGxveVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LmNyZWF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIGNyZWF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5SZXF1ZXN0ZWRJZDogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGNyZWF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhY2tJZEluZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3U3RhY2tJZEluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBuZXdTdGFja0lkSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShuZXdTdGFja0lkSW5mby5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGNyZWF0ZSBzdGFjaywgc2VydmljZSBpcyBTZXJ2aWNlVW5hdmFpbGFibGUgb3IgTGFzdFRva2VuUHJvY2Vzc2luZywgcGxlYXNlIGNoZWNrIHlvdSBzZXJ2aWNlIGVuZHBvaW50LicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RhY2tJbmZvICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RhY2sgaXMgZXhpc3Qgc2VuZCBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrLCBiZWNhdXNlIHN0YWNrICAlcyBpcyBleGlzdCBpbiB0aGlzIHJlZ2lvbi4nLCBzdGFja05hbWUpXG4gICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgc3RhY2tcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJyVzOiBkZXBsb3lpbmcuLi4nLCBjb2xvcnMuYm9sZChzdGFja05hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc3luY0RlcGxveVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LmNyZWF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIGNyZWF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5SZXF1ZXN0ZWRJZDogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGNyZWF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJyVzOiBkZXBsb3lpbmcuLi4nLCBjb2xvcnMuYm9sZChzdGFja05hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc3luY0RlcGxveVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LmNyZWF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIGNyZWF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5SZXF1ZXN0ZWRJZDogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGNyZWF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhY2tJZEluZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3U3RhY2tJZEluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBuZXdTdGFja0lkSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShuZXdTdGFja0lkSW5mby5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGNyZWF0ZSBzdGFjaywgc2VydmljZSBpcyBTZXJ2aWNlVW5hdmFpbGFibGUgb3IgTGFzdFRva2VuUHJvY2Vzc2luZywgcGxlYXNlIGNoZWNrIHlvdSBzZXJ2aWNlIGVuZHBvaW50LicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGlmZihvcHRpb25zOiBEaWZmT3B0aW9ucykge1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXN0cm95KG9wdGlvbnMuc3RhY2tOYW1lcyk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCByZWdpb25JbkxvY2FsID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uSW5Mb2NhbCA9IHJlZ2lvbkluTG9jYWwgPyByZWdpb25JbkxvY2FsIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBvcHRpb25zLnN0cmVhbSB8fCBwcm9jZXNzLnN0ZGVycjtcbiAgICAgICAgY29uc3QgY29udGV4dExpbmVzID0gb3B0aW9ucy5jb250ZXh0TGluZXMgfHwgMztcbiAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBsZXQgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKTtcbiAgICAgICAgICAgIGlmICghc3RhY2tJbmZvLnN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBzdHJlYW0ud3JpdGUoZm9ybWF0KCdTdGFjayAlcyBoYXMgbm90IGJlZW4gZGVwbG95ZWQuXFxuJywgY29sb3JzLmJvbGQoc3RhY2suZGlzcGxheU5hbWUpKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGllbnQuZ2V0VGVtcGxhdGUoe1JlZ2lvbklkOiByZWdpb25JbkxvY2FsLCBTdGFja0lkOiBzdGFja0luZm8uc3RhY2tJZH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRlc2VyaWFsaXplU3RydWN0dXJlKHJlcy5UZW1wbGF0ZUJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW0ud3JpdGUoZm9ybWF0KCdTdGFjayAlc1xcbicsIGNvbG9ycy5ib2xkKHN0YWNrLmRpc3BsYXlOYW1lKSkpO1xuICAgICAgICAgICAgICAgICAgICBwcmludFN0YWNrRGlmZih0ZW1wbGF0ZSwgc3RhY2ssIGNvbnRleHRMaW5lcywgc3RyZWFtKTtcbiAgICAgICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gc3ludGguYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFjay5pZCwgU1lOVEhfU1RBQ0spO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHRlbXBsYXRlOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZXZlbnQob3B0aW9uczogRXZlbnRPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXN0cm95KFtdKTtcbiAgICAgICAgaWYgKCFvcHRpb25zLnN0YWNrTmFtZSkge1xuICAgICAgICAgICAgZXJyb3IoJ0lmIHdhbnQgdG8gZ2V0IHJlc291cmNlIHN0YWNrIGV2ZW50cywgc3RhY2sgbmFtZSBtdXN0IGJlIFNwZWNpZmllZCEnKVxuICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICB9XG4gICAgICAgIGlmICghc3RhY2tzLnN0YWNrSWRzLmluY2x1ZGVzKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSkge1xuICAgICAgICAgICAgZXJyb3IoYFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXN0LCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBpbnB1dCBzdGFjayBuYW1lIWApXG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IExvZ2ljYWxSZXNvdXJjZUlkczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubG9naWNhbFJlc291cmNlSWQpIHtcbiAgICAgICAgICAgIExvZ2ljYWxSZXNvdXJjZUlkcy5wdXNoKG9wdGlvbnMubG9naWNhbFJlc291cmNlSWQpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY2xpZW50XG4gICAgICAgICAgICAubGlzdFN0YWNrRXZlbnRzKHtcbiAgICAgICAgICAgICAgICBTdGFja0lkOiAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSkuc3RhY2tJZCxcbiAgICAgICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uLFxuICAgICAgICAgICAgICAgIExvZ2ljYWxSZXNvdXJjZUlkOiBMb2dpY2FsUmVzb3VyY2VJZHMsXG4gICAgICAgICAgICAgICAgUGFnZVNpemU6IG9wdGlvbnMucGFnZVNpemUgPyBOdW1iZXIob3B0aW9ucy5wYWdlU2l6ZSkgOiAxMCxcbiAgICAgICAgICAgICAgICBQYWdlTnVtYmVyOiBvcHRpb25zLnBhZ2VOdW1iZXIgPyBOdW1iZXIob3B0aW9ucy5wYWdlTnVtYmVyKSA6IDFcbiAgICAgICAgICAgIH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2sgJXMgXFxuIEV2ZW50cyBpczogXFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSwgY29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLkV2ZW50cywgbnVsbCwgXCJcXHRcIikpKTtcbiAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8ob3B0aW9ucy5zdGFja05hbWVbMF0sIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjayBldmVudHM6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb3V0cHV0KG9wdGlvbnM6IE91dFB1dE9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRlc3Ryb3koW10pO1xuICAgICAgICBpZiAoIW9wdGlvbnMuc3RhY2tOYW1lKSB7XG4gICAgICAgICAgICBlcnJvcignSWYgd2FudCB0byBnZXQgcmVzb3VyY2Ugc3RhY2sgb3V0cHV0LCBzdGFjayBuYW1lIG11c3QgYmUgU3BlY2lmaWVkIScpXG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGFja3Muc3RhY2tJZHMuaW5jbHVkZXMob3B0aW9ucy5zdGFja05hbWVbMF0pKSB7XG4gICAgICAgICAgICBlcnJvcihgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpc3QsIFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIGlucHV0IHN0YWNrIG5hbWUhYClcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBjbGllbnRcbiAgICAgICAgICAgIC5nZXRTdGFjayh7XG4gICAgICAgICAgICAgICAgU3RhY2tJZDogKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhvcHRpb25zLnN0YWNrTmFtZVswXSkpLnN0YWNrSWQsXG4gICAgICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvblxuICAgICAgICAgICAgfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBTdGFjayAlcyBcXG4gT3V0cHV0IGlzOiBcXG4gJXMgXFxuYCwgY29sb3JzLmJsdWUob3B0aW9ucy5zdGFja05hbWVbMF0pLCBjb2xvcnMuYmx1ZShKU09OLnN0cmluZ2lmeShyZXMuT3V0cHV0cywgbnVsbCwgXCJcXHRcIikpKTtcbiAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8ob3B0aW9ucy5zdGFja05hbWVbMF0sIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjayBldmVudHM6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBhc3luYyByZXNvdXJjZShvcHRpb25zOiBSZXNvdXJjZU9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRlc3Ryb3kob3B0aW9ucy5zdGFja05hbWVzKTtcbiAgICAgICAgbGV0IHN0YWNrTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgaWYgKChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpKS5zdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgc3RhY2tOYW1lcy5wdXNoKHN0YWNrLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgICAgICAgY2xpZW50XG4gICAgICAgICAgICAgICAgLmxpc3RTdGFja1Jlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgICAgIFN0YWNrSWQ6IChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKSkuc3RhY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2sgJXMgXFxuIFJlc291cmNlIGlzOiBcXG4gJXMgXFxuYCwgY29sb3JzLmJsdWUoc3RhY2tOYW1lKSwgY29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLlJlc291cmNlcywgbnVsbCwgXCJcXHRcIikpKTtcbiAgICAgICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgc3RhY2sgcmVzb3VyY2U6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdlbmVyYXRlU3RhY2tJbmZvKCkge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JMaXN0KFtdKTtcbiAgICAgICAgbGV0IHN0YWNrTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBTdGFja0luZm9zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgIHN0YWNrTmFtZXMgPSBzdGFja3Muc3RhY2tJZHNcbiAgICAgICAgZm9yIChsZXQgc3RhY2tOYW1lIG9mIHN0YWNrTmFtZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lKVxuICAgICAgICAgICAgaWYgKHN0YWNrSW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFN0YWNrSW5mb3Nbc3RhY2tOYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBERVBMT1lfU1RBQ0ssXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrSWQ6IHN0YWNrSW5mby5TdGFja0lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTdGFja0luZm9zW3N0YWNrTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogSU5JVF9TVEFDSyxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tJZDogbnVsbFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoU3RhY2tJbmZvcywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBnZW5lcmF0ZSBzdGFjayBpbmZvIGhhcyBjb21wbGV0ZWQhYCxcbiAgICAgICAgKTtcbiAgICAgICAgZXhpdCgwKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRTdGFja0J5TmFtZShzdGFja05hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgIFBhZ2VTaXplOiAxMCxcbiAgICAgICAgICAgIFBhZ2VOdW1iZXI6IDEsXG4gICAgICAgICAgICBTdGFja05hbWU6IFtzdGFja05hbWVdXG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQubGlzdFN0YWNrcyhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5TdGFja3NbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LlN0YWNrc1swXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1YmxpYyBhc3luYyBsaXN0U3RhY2tzKG9wdGlvbnM6IExpc3RTdGFja09wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0Zvckxpc3QoW10pO1xuICAgICAgICBsZXQgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgIFBhZ2VTaXplOiBvcHRpb25zLnBhZ2VTaXplID8gTnVtYmVyKG9wdGlvbnMucGFnZVNpemUpIDogMTAsXG4gICAgICAgICAgICBQYWdlTnVtYmVyOiBvcHRpb25zLnBhZ2VOdW1iZXIgPyBOdW1iZXIob3B0aW9ucy5wYWdlTnVtYmVyKSA6IDFcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFvcHRpb25zLmFsbCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RhY2tOYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuU3RhY2tOYW1lID0gc3RhY2tzLnN0YWNrSWRzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5TdGFja05hbWUgPSBvcHRpb25zLnN0YWNrTmFtZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjbGllbnQubGlzdFN0YWNrcyhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2tzIGxpc3QgaXM6XFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5TdGFja3MsIG51bGwsIFwiXFx0XCIpKSk7XG4gICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGxpc3Qgc3RhY2tzOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVzdHJveShvcHRpb25zOiBEZXN0cm95T3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBsZXQgc3RhY2tOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBpZiAoKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCkpLnN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBzdGFja05hbWVzLnB1c2goc3RhY2suaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5xdWlldCkge1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlybSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihcbiAgICAgICAgICAgICAgICAgICAgJ1RoZSBmb2xsb3dpbmcgc3RhY2socykgd2lsbCBiZSBkZXN0cm95ZWQoT25seSBkZXBsb3llZCBzdGFja3Mgd2lsbCBiZSBkaXNwbGF5ZWQpLlxcblxcbicgK1xuICAgICAgICAgICAgICAgICAgICBzdGFja05hbWVzLnRvU3RyaW5nKCkgK1xuICAgICAgICAgICAgICAgICAgICAnXFxuXFxuUGxlYXNlIGNvbmZpcm0uKFkvTilcXG4nLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0gPT09ICduJyB8fCBjb25maXJtID09PSAnTicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybSA9PT0gJ3knIHx8IGNvbmZpcm0gPT09ICdZJykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2tOYW1lIG9mIHN0YWNrTmFtZXMpIHtcbiAgICAgICAgICAgIGNsaWVudFxuICAgICAgICAgICAgICAgIC5kZWxldGVTdGFjayh7XG4gICAgICAgICAgICAgICAgICAgIFN0YWNrSWQ6IChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKSkuc3RhY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBEZWxldGVkXFxuUmVxdWVzdGVkSWQ6ICVzYCwgY29sb3JzLmJsdWUocmVzLlJlcXVlc3RJZCkpO1xuICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBkZXN0cm95LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGRlbGV0ZSBzdGFjazogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHN5bmNTdGFja0luZm8oKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgU1RBQ0tfSU5GTyk7XG4gICAgICAgIGxldCBmaWxlQ29udGVudCA9IHt9O1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZmlsZUNvbnRlbnQsIG51bGwsICdcXHQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRlbXA6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICAgICAgLy8gc2VsZWN0b3IubGVuZ3RoID0gMCBtZWFucyBzZWxlY3QgYWxsIHN0YWNrcyBmcm9tIHRoaXMgYXBwXG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yTGlzdChbXSk7XG4gICAgICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oU1RBQ0tfSU5GTywgc3RhY2suaWQpO1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0YWNrIGhhcyBubyBpbmZvLCB0aGVuIGFkZCBpbml0IHRhZyBmb3IgaXRcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRlbXBbc3RhY2suaWRdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBbc3RhY2suaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IElOSVRfU1RBQ0ssXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrSWQ6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkodGVtcCwgbnVsbCwgJ1xcdCcpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBpbmZvID0gSlNPTi5wYXJzZShmaWxlQ29udGVudCk7XG4gICAgICAgIGxldCBzdGFja0luZm8gPSBpbmZvW3N0YWNrTmFtZV07XG4gICAgICAgIGlmICghc3RhY2tJbmZvKSB7XG4gICAgICAgICAgICBzdGFja0luZm8gPSBpbmZvW3N0YWNrTmFtZV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSBERVBMT1lfU1RBQ0tfSURfTEVOR1RIKSB7XG4gICAgICAgICAgICBzdGFja0luZm8uc3RhdHVzID0gREVQTE9ZX1NUQUNLO1xuICAgICAgICAgICAgc3RhY2tJbmZvLnN0YWNrSWQgPSB2YWx1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhY2tJbmZvLnN0YXR1cyA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBERVNUUk9ZX1NUQUNLKSB7XG4gICAgICAgICAgICAgICAgc3RhY2tJbmZvLnN0YWNrSWQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGluZm8sIG51bGwsICdcXHQnKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBmaW5kU3RhY2tJbmZvKHN0YWNrTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgU1RBQ0tfSU5GTyk7XG4gICAgICAgIGxldCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpW3N0YWNrTmFtZV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JMaXN0KHNlbGVjdG9yczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzZWxlY3RvcnMsIHtkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb24uQWxsU3RhY2tzfSk7XG5cbiAgICAgICAgLy8gTm8gdmFsaWRhdGlvblxuXG4gICAgICAgIHJldHVybiBzdGFja3M7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JEZXN0cm95KHN0YWNrTmFtZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc3RhY2tOYW1lcywge1xuICAgICAgICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrcyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTm8gdmFsaWRhdGlvblxuXG4gICAgICAgIHJldHVybiBzdGFja3M7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JEZXBsb3koc3RhY2tOYW1lczogc3RyaW5nW10sIGV4Y2x1c2l2ZWx5PzogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgICAgICAgIGV4dGVuZDogZXhjbHVzaXZlbHkgPyBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUgOiBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLlVwc3RyZWFtLFxuICAgICAgICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLk9ubHlTaW5nbGUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGVTdGFja3Moc3RhY2tzKTtcblxuICAgICAgICByZXR1cm4gc3RhY2tzO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yRGlmZihzdGFja05hbWVzOiBzdHJpbmdbXSwgZXhjbHVzaXZlbHk/OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc3RhY2tOYW1lcywge1xuICAgICAgICAgICAgZXh0ZW5kOiBleGNsdXNpdmVseSA/IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uTm9uZSA6IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uVXBzdHJlYW0sXG4gICAgICAgICAgICBkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb24uQWxsU3RhY2tzLFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlU3RhY2tzKHN0YWNrcyk7XG5cbiAgICAgICAgcmV0dXJuIHN0YWNrcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSB0aGUgc3RhY2tzIGZvciBlcnJvcnMgYW5kIHdhcm5pbmdzIGFjY29yZGluZyB0byB0aGUgQ0xJJ3MgY3VycmVudCBzZXR0aW5nc1xuICAgICAqL1xuICAgIHByaXZhdGUgYXN5bmMgdmFsaWRhdGVTdGFja3Moc3RhY2tzOiBTdGFja0NvbGxlY3Rpb24pIHtcbiAgICAgICAgc3RhY2tzLnByb2Nlc3NNZXRhZGF0YU1lc3NhZ2VzKHtcbiAgICAgICAgICAgIGlnbm9yZUVycm9yczogdGhpcy5wcm9wcy5pZ25vcmVFcnJvcnMsXG4gICAgICAgICAgICBzdHJpY3Q6IHRoaXMucHJvcHMuc3RyaWN0LFxuICAgICAgICAgICAgdmVyYm9zZTogdGhpcy5wcm9wcy52ZXJib3NlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzc2VtYmx5KCk6IFByb21pc2U8Q2xvdWRBc3NlbWJseT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jbG91ZEV4ZWN1dGFibGUuc3ludGhlc2l6ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0Q2xpQ29uZmlnKGxvYWRGaWxlUGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aDogc3RyaW5nO1xuICAgICAgICBsZXQgY29uZmlndXJlSW5mbzogYW55ID0ge307XG4gICAgICAgIGxldCBjb25maWd1cmVJbmZvczogYW55ID0ge307XG4gICAgICAgIGxldCBBS1Byb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBsZXQgU3RzUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XG4gICAgICAgIGxldCBSYW1Sb2xlQXJuUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XG4gICAgICAgIGxldCBFY3NSYW1Sb2xlUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XG4gICAgICAgIGlmIChsb2FkRmlsZVBhdGgpIHtcbiAgICAgICAgICAgIGZpbGVQYXRoID0gbG9hZEZpbGVQYXRoXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaG9tZVBhdGggPSBvcy5ob21lZGlyKCk7XG4gICAgICAgICAgICBmaWxlUGF0aCA9IGhvbWVQYXRoICsgQ0xJX0NPTkZJR19GSUxFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBsZXQgQWxsUHJvZmlsZXMgPSBKU09OLnBhcnNlKGZpbGUpWydwcm9maWxlcyddO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvZmlsZSBvZiBBbGxQcm9maWxlcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBwcm9maWxlLmFjY2Vzc19rZXlfaWQsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogcHJvZmlsZS5hY2Nlc3Nfa2V5X3NlY3JldCxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiBwcm9maWxlLnJlZ2lvbl9pZCxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogcHJvZmlsZS5zdHNfdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBcm46IHByb2ZpbGUucmFtX3JvbGVfYXJuLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHByb2ZpbGUucmFtX3Nlc3Npb25fbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6IHByb2ZpbGUucmFtX3JvbGVfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvZmlsZS5uYW1lXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ0FLJykge1xuICAgICAgICAgICAgICAgICAgICBBS1Byb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuQUsgPSBBS1Byb2ZpbGVMaXN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9maWxlLm1vZGUgPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgU3RzUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvcy5TdHNUb2tlbiA9IFN0c1Byb2ZpbGVMaXN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9maWxlLm1vZGUgPT09ICdSYW1Sb2xlQXJuJykge1xuICAgICAgICAgICAgICAgICAgICBSYW1Sb2xlQXJuUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvcy5SYW1Sb2xlQXJuID0gUmFtUm9sZUFyblByb2ZpbGVMaXN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9maWxlLm1vZGUgPT09ICdFY3NSYW1Sb2xlJykge1xuICAgICAgICAgICAgICAgICAgICBFY3NSYW1Sb2xlUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvcy5FY3NSYW1Sb2xlID0gRWNzUmFtUm9sZVByb2ZpbGVMaXN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjb25maWd1cmVJbmZvcyB8fCBPYmplY3Qua2V5cyhjb25maWd1cmVJbmZvcykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBlcnJvcihcIldBTlJOSU5HOiBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBtb2RlIGFuZCBwcm9maWxlIGNvbmZpZ3VyYXRpb24gZW50ZXJlZC5cIik7XG4gICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25maWd1cmVJbmZvc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoXCJXQU5STklORzogUGxlYXNlIGNoZWNrIEFsaXl1biBDbGkgdG9vbCBjb25maWd1cmUgYWNjdXJhY3kgb2YgdGhlIGRlZmF1bHQgcGF0aCBvciBzcGVjaWZpZWQgcGF0aC5cIik7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzeW5jRGVwbG95U3RhY2soY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY3JlYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LmNyZWF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBuZXcgUmV3cml0YWJsZUJsb2NrKHN0cmVhbSk7XG4gICAgICAgICAgICB3aXRoRGVmYXVsdFByaW50ZXJPYmogPSBzZXRJbnRlcnZhbChhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBjcmVhdGVSZXN1bHQuU3RhY2tJZCwgYmxvY2spXG4gICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgUmVnaW9uSWQ6IGNvbnRlbnRbJ1JlZ2lvbklkJ10sXG4gICAgICAgICAgICAgICAgICAgIFN0YWNrSWQ6IGNyZWF0ZVJlc3VsdC5TdGFja0lkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRTdGFja1Jlc3VsdCA9IGF3YWl0IGNsaWVudC5nZXRTdGFjayhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGdldFN0YWNrUmVzdWx0LlN0YXR1c1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1JlYXNvbiA9IGdldFN0YWNrUmVzdWx0LlN0YXR1c1JlYXNvblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IGdldFN0YWNrUmVzdWx0LlN0YWNrTmFtZVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0NvbXBsZXRlID0gUmVnRXhwKC9DT01QTEVURS8pXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnRmFpbGVkID0gUmVnRXhwKC9GQUlMRUQvKVxuICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykgfHwgcmVnRmFpbGVkLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIGNyZWF0ZVJlc3VsdC5TdGFja0lkLCBibG9jaylcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHN5bmMgZGVwbG95IHN0YWNrKSBoYXMgZmluaXNoZWQhXFxuc3RhdHVzOiAlc1xcblN0YXR1c1JlYXNvbjogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzUmVhc29uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGdldFN0YWNrUmVzdWx0LlN0YWNrSWQpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgY3JlYXRlUmVzdWx0LlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyBjcmVhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBnZXRSZXNvdXJjZXMoY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSwgc3RhY2tJZDogYW55KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0U3RhY2tSZXNvdXJjZXNSZXN1bHQgPSBhd2FpdCBjbGllbnQubGlzdFN0YWNrUmVzb3VyY2VzKHtcbiAgICAgICAgICAgICAgICBTdGFja0lkOiBzdGFja0lkLFxuICAgICAgICAgICAgICAgIFJlZ2lvbklkOiBjb250ZW50WydSZWdpb25JZCddLFxuICAgICAgICAgICAgfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICByZXR1cm4gbGlzdFN0YWNrUmVzb3VyY2VzUmVzdWx0LlJlc291cmNlc1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgbmV3IHN0YWNrIHJlc291cmNlOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIHdpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQ6IGFueSwgY29udGVudDogYW55LCByZXF1ZXN0T3B0aW9uczogYW55LCBzdGFja0lkOiBhbnksIGJsb2NrOiBhbnkpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBDZGtUb29sa2l0LmdldFJlc291cmNlcyhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBzdGFja0lkKVxuICAgICAgICBmb3IgKGxldCByZXNvdXJjZSBvZiByZXNvdXJjZXMpIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2godXRpbC5mb3JtYXQoY29sb3JzLmJsdWUoJ3wlcyB8ICVzIHwgJXMgfCAlcyB8ICVzJykgKyAnXFxuJyxcbiAgICAgICAgICAgICAgICBwYWRMZWZ0KDEyLCByZXNvdXJjZS5DcmVhdGVUaW1lKSxcbiAgICAgICAgICAgICAgICBwYWRSaWdodCgyMCwgcmVzb3VyY2UuU3RhdHVzKSxcbiAgICAgICAgICAgICAgICBwYWRSaWdodCgyMywgcmVzb3VyY2UuUmVzb3VyY2VUeXBlKSxcbiAgICAgICAgICAgICAgICBzaG9ydGVuKDQwLCByZXNvdXJjZS5QaHlzaWNhbFJlc291cmNlSWQpLFxuICAgICAgICAgICAgICAgIHJlc291cmNlLkxvZ2ljYWxSZXNvdXJjZUlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgYmxvY2suZGlzcGxheUxpbmVzKGxpbmVzKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhc3luYyBzeW5jVXBkYXRlU3RhY2soY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBSZWdpb25JZDogY29udGVudFsnUmVnaW9uSWQnXSxcbiAgICAgICAgICAgICAgICBTdGFja0lkOiBjb250ZW50WydTdGFja0lkJ11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBnZXRPcmlnaW5hbFN0YWNrUmVzdWx0ID0gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZVRpbWUgPSBnZXRPcmlnaW5hbFN0YWNrUmVzdWx0LlVwZGF0ZVRpbWUgPyBnZXRPcmlnaW5hbFN0YWNrUmVzdWx0LlVwZGF0ZVRpbWUgOiBcIlwiXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQudXBkYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAvLyBXYWl0IGZvciB0aGUgc3RhY2sgc3RhdGUgdG8gY2hhbmdlIGFmdGVyIHVwZGF0aW5nIGl0XG4gICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDAwKTtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gbmV3IFJld3JpdGFibGVCbG9jayhzdHJlYW0pO1xuICAgICAgICAgICAgd2l0aERlZmF1bHRQcmludGVyT2JqID0gc2V0SW50ZXJ2YWwoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgY3JlYXRlUmVzdWx0LlN0YWNrSWQsIGJsb2NrKVxuICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdldE5ld1N0YWNrUmVzdWx0ID0gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZ2V0TmV3U3RhY2tSZXN1bHQuU3RhdHVzXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzUmVhc29uID0gZ2V0TmV3U3RhY2tSZXN1bHQuU3RhdHVzUmVhc29uXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tOYW1lID0gZ2V0TmV3U3RhY2tSZXN1bHQuU3RhY2tOYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VXBkYXRlVGltZSA9IGdldE5ld1N0YWNrUmVzdWx0LlVwZGF0ZVRpbWUgPyBnZXROZXdTdGFja1Jlc3VsdC5VcGRhdGVUaW1lIDogXCJcIlxuICAgICAgICAgICAgICAgIGlmIChuZXdVcGRhdGVUaW1lID09IG9yaWdpbmFsVXBkYXRlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzdGFjayB1cGRhdGUgaW4gcHJvZ3Jlc3Mgb3IgdXBkYXRlIGRpZCBub3QgYmVnaW5cbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnQ29tcGxldGUgPSBSZWdFeHAoL0NPTVBMRVRFLylcbiAgICAgICAgICAgICAgICBjb25zdCByZWdGYWlsZWQgPSBSZWdFeHAoL0ZBSUxFRC8pXG4gICAgICAgICAgICAgICAgaWYgKHJlZ0NvbXBsZXRlLmV4ZWMoc3RhdHVzKSB8fCByZWdGYWlsZWQuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgY3JlYXRlUmVzdWx0LlN0YWNrSWQsIGJsb2NrKVxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoc3luYyB1cGRhdGUgc3RhY2spIGhhcyBmaW5pc2hlZCFcXG5zdGF0dXM6ICVzXFxuU3RhdHVzUmVhc29uOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXNSZWFzb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoZ2V0TmV3U3RhY2tSZXN1bHQuU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgY3JlYXRlUmVzdWx0LlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIHVwZGF0ZSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWZmT3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIHN0cmVhbT86IE5vZGVKUy5Xcml0YWJsZVN0cmVhbTtcbiAgICBjb250ZXh0TGluZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXBsb3lPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIE9ubHkgc2VsZWN0IHRoZSBnaXZlbiBzdGFja1xuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBleGNsdXNpdmVseT86IGJvb2xlYW47XG4gICAgcGFyYW1ldGVycz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9O1xuICAgIHRpbWVvdXQ6IHN0cmluZztcbiAgICBzeW5jOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlc3Ryb3lPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbiAgICBxdWlldD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRPcHRpb25zIHtcbiAgICBzdGFja05hbWU6IHN0cmluZ1tdO1xuICAgIGxvZ2ljYWxSZXNvdXJjZUlkOiBzdHJpbmc7XG4gICAgcGFnZU51bWJlcjogc3RyaW5nO1xuICAgIHBhZ2VTaXplOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3V0UHV0T3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXN0U3RhY2tPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbiAgICBwYWdlTnVtYmVyOiBzdHJpbmc7XG4gICAgcGFnZVNpemU6IHN0cmluZztcbiAgICBhbGw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTZXRPcHRpb25zIHtcbiAgICBnbG9iYWw6IHN0cmluZztcbiAgICBlbmRwb2ludDogc3RyaW5nO1xuICAgIHJlZ2lvbjogc3RyaW5nO1xuICAgIG1vZGU6IHN0cmluZztcbiAgICBhazogc3RyaW5nO1xuICAgIHNrOiBzdHJpbmc7XG4gICAgc3RzOiBzdHJpbmc7XG4gICAgcmFtUm9sZUFybjogc3RyaW5nO1xuICAgIHJvbGVTZXNzaW9uTmFtZTogc3RyaW5nO1xuICAgIHJhbVJvbGVOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZENvbmZpZ09wdGlvbnMge1xuICAgIGdsb2JhbD86IHN0cmluZztcbiAgICBsb2FkRmlsZVBhdGg6IHN0cmluZztcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIFRhZyB7XG4gICAgcmVhZG9ubHkgS2V5OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgVmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlQW5kVXBkYXRlTGFuZ3VhZ2VJbmZvKGxhbmd1YWdlOiBzdHJpbmcpIHtcbiAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFBST0pFQ1RfQ09ORklHKTtcbiAgICBsZXQgZmlsZUNvbnRlbnQ6IGFueTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBpbmZvID0gSlNPTi5wYXJzZShmaWxlQ29udGVudCk7XG4gICAgICAgIGluZm9bJ2xhbmd1YWdlSW5mbyddID0gbGFuZ3VhZ2U7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGluZm8sIG51bGwsICdcXHQnKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZExhbmd1YWdlSW5mbygpIHtcbiAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFBST0pFQ1RfQ09ORklHKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgbGV0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlQ29udGVudClbJ2xhbmd1YWdlSW5mbyddLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFkTGVmdChuOiBudW1iZXIsIHg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcgJy5yZXBlYXQoTWF0aC5tYXgoMCwgbiAtIHgubGVuZ3RoKSkgKyB4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFkUmlnaHQobjogbnVtYmVyLCB4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB4ICsgJyAnLnJlcGVhdChNYXRoLm1heCgwLCBuIC0geC5sZW5ndGgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3J0ZW4obWF4V2lkdGg6IG51bWJlciwgcDogc3RyaW5nKSB7XG4gICAgaWYgKHAubGVuZ3RoIDw9IG1heFdpZHRoKSB7IHJldHVybiBwOyB9XG4gICAgY29uc3QgaGFsZiA9IE1hdGguZmxvb3IoKG1heFdpZHRoIC0gMykgLyAyKTtcbiAgICByZXR1cm4gcC5zdWJzdHIoMCwgaGFsZikgKyAnLi4uJyArIHAuc3Vic3RyKHAubGVuZ3RoIC0gaGFsZik7XG59XG4iXX0=