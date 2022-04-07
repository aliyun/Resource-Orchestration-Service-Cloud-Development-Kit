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
const OUTPUTS_JSON = 'stack.outputs.json';
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
        const stackInfo = await this.getStackByName(stackName);
        if (localStackInfo.stackId) {
            if (stackInfo !== null) {
                // update stack
                if (localStackInfo.stackId !== stackInfo.StackId) {
                    logging_1.error('fail to update stack, because stack local info dose not match the remote server.');
                    process_1.exit(1);
                }
                if (resourceGroupId) {
                    logging_1.error('fail to update stack, cannot support set resource-group-id params to this operation.');
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
                                await this.syncUpdateStack(client, content, requestOptions, outputs, skipIfNoChanges);
                            }
                            const updateResult = await client.updateStack(content, requestOptions);
                            await this.updateStackInfo(stackName, updateResult.StackId);
                            logging_1.success(`\n ✅ The deployment(update stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(updateResult.RequestId), colors.blue(updateResult.StackId));
                            process_1.exit(0);
                        }
                        catch (e) {
                            if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack') && skipIfNoChanges) {
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
                                            await this.syncUpdateStack(client, content, requestOptions, outputs, skipIfNoChanges);
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
                        await this.syncDeployStack(client, content, requestOptions, outputs);
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
                                    await this.syncDeployStack(client, content, requestOptions, outputs);
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
                        await this.syncDeployStack(client, content, requestOptions, outputs);
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
                                    await this.syncDeployStack(client, content, requestOptions, outputs);
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
    async syncDeployStack(client, content, requestOptions, outputsFile) {
        try {
            const stackOutputs = {};
            const createResult = await client.createStack(content, requestOptions);
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
    async syncUpdateStack(client, content, requestOptions, outputsFile, skipIfNoChanges) {
        try {
            let params = {
                RegionId: content['RegionId'],
                StackId: content['StackId']
            };
            const stackOutputs = {};
            const getOriginalStackResult = await client.getStack(params, requestOptions);
            const originalUpdateTime = getOriginalStackResult.UpdateTime ? getOriginalStackResult.UpdateTime : "";
            const createResult = await client.updateStack(content, requestOptions);
            // Wait for the stack state to change after updating it
            await sleep(5000);
            const block = new display_1.RewritableBlock(stream);
            withDefaultPrinterObj = setInterval(async function () {
                await CdkToolkit.withDefaultPrinter(client, content, requestOptions, createResult.StackId, block, 'update');
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
                        await CdkToolkit.withDefaultPrinter(client, content, requestOptions, createResult.StackId, block, 'update');
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
                        await this.updateStackInfo(stackName, createResult.StackId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRvb2xraXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstdG9vbGtpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4Q0FBOEM7QUFDOUMsNkJBQTZCO0FBQzdCLDBDQUErQztBQUMvQywrQkFBNEI7QUFDNUIsNENBQStDO0FBRS9DLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ3RELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlEQUE0QztBQUM1Qyx1REFBMEQ7QUFDMUQseURBQThHO0FBRTlHLHVDQUErRDtBQUMvRCx5Q0FBeUQ7QUFDekQscUNBQTZCO0FBQzdCLGlDQUFzQztBQUN0QywyQ0FBaUQ7QUFDakQsK0JBQStCO0FBRS9CLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRW5ELE1BQU0sV0FBVyxHQUFHLHFCQUFxQixDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQztBQUN4QixNQUFNLFdBQVcsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3ZDLE1BQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDO0FBQ3JDLE1BQU0sc0JBQXNCLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLE1BQU0sZUFBZSxHQUFHLHNCQUFzQixDQUFDO0FBQy9DLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUMxQixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDNUIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDO0FBQzlCLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQztBQUNoQyxNQUFN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LENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFORCwwQkFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICdjb2xvcnMvc2FmZSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICd1dGlsJztcbmltcG9ydCB7ZGVjaXBoZXIsIGNpcGhlcn0gZnJvbSAnLi91dGlsL2NpcGhlcic7XG5pbXBvcnQge2Zvcm1hdH0gZnJvbSAndXRpbCc7XG5pbXBvcnQge1Jld3JpdGFibGVCbG9ja30gZnJvbSAnLi91dGlsL2Rpc3BsYXknO1xuXG5jb25zdCByb3NDbGllbnQgPSByZXF1aXJlKCdAYWxpY2xvdWQvcm9zLTIwMTktMDktMTAnKTtcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5jb25zdCBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJyk7XG5pbXBvcnQge2V4ZWMgYXMgX2V4ZWN9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IENyZWRlbnRpYWxzLCB7Q29uZmlnfSBmcm9tICdAYWxpY2xvdWQvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHtDbG91ZEFzc2VtYmx5LCBEZWZhdWx0U2VsZWN0aW9uLCBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLCBTdGFja0NvbGxlY3Rpb259IGZyb20gJy4vYXBpL2Nsb3VkLWFzc2VtYmx5JztcbmltcG9ydCB7Q2xvdWRFeGVjdXRhYmxlfSBmcm9tICcuL2FwaS9jbG91ZC1leGVjdXRhYmxlJztcbmltcG9ydCB7ZGF0YSwgZXJyb3IsIHByaW50LCBzdWNjZXNzLCB3YXJuaW5nfSBmcm9tICcuL2xvZ2dpbmcnO1xuaW1wb3J0IHtDb25maWd1cmF0aW9uLCBQUk9KRUNUX0NPTkZJR30gZnJvbSAnLi9zZXR0aW5ncyc7XG5pbXBvcnQge2V4aXR9IGZyb20gJ3Byb2Nlc3MnO1xuaW1wb3J0IHtwcmludFN0YWNrRGlmZn0gZnJvbSAnLi9kaWZmJztcbmltcG9ydCB7ZGVzZXJpYWxpemVTdHJ1Y3R1cmV9IGZyb20gJy4vc2VyaWFsaXplJztcbmltcG9ydCB7cHJvbWlzaWZ5fSBmcm9tICd1dGlsJztcblxuY29uc3QgZ2VuZXJhdGVTYWZlSWQgPSByZXF1aXJlKCdnZW5lcmF0ZS1zYWZlLWlkJyk7XG5cbmNvbnN0IENPTkZJR19OQU1FID0gJ2FjY291bnQuY29uZmlnLmpzb24nO1xuY29uc3QgTE9DQUxfUEFUSCA9ICcuLyc7XG5jb25zdCBHTE9CQUxfUEFUSCA9IF9fZGlybmFtZSArICcvLi4vJztcbmNvbnN0IFNUQUNLX0lORk8gPSAnc3RhY2suaW5mby5qc29uJztcbmNvbnN0IERFUExPWV9TVEFDS19JRF9MRU5HVEggPSAzNjtcbmNvbnN0IENMSV9DT05GSUdfRklMRSA9ICcvLmFsaXl1bi9jb25maWcuanNvbic7XG5jb25zdCBJTklUX1NUQUNLID0gJ2luaXQnO1xuY29uc3QgU1lOVEhfU1RBQ0sgPSAnc3ludGgnO1xuY29uc3QgREVQTE9ZX1NUQUNLID0gJ2RlcGxveSc7XG5jb25zdCBERVNUUk9ZX1NUQUNLID0gJ2Rlc3Ryb3knO1xuY29uc3QgUEFDS0FHRV9KU09OID0gX19kaXJuYW1lICsgJy8uLi9wYWNrYWdlLmpzb24nO1xuY29uc3QgT1VUUFVUU19KU09OID0gJ3N0YWNrLm91dHB1dHMuanNvbic7XG5cbmNvbnN0IGV4ZWMgPSBwcm9taXNpZnkoX2V4ZWMpO1xuXG5jb25zdCByZXF1ZXN0T3B0aW9uczogeyBbbmFtZTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgICAnVXNlci1BZ2VudCc6IFwiUk9TLUNMSS1cIiArIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFBBQ0tBR0VfSlNPTikudG9TdHJpbmcoKSlbJ3ZlcnNpb24nXSArIFwiOjpcIiArIHJlYWRMYW5ndWFnZUluZm8oKVxuICAgIH0sXG4gICAgdGltZW91dDogMTUwMDBcbn07XG5cbmNvbnN0IHNsZWVwID0gZnVuY3Rpb24gKG1zOiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn07XG5cblxuY29uc3Qgc3RyZWFtID0gcHJvY2Vzcy5zdGRvdXQ7XG5cblxubGV0IHdpdGhEZWZhdWx0UHJpbnRlck9iajogYW55O1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrVG9vbGtpdFByb3BzIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQ2xvdWQgRXhlY3V0YWJsZVxuICAgICAqL1xuICAgIGNsb3VkRXhlY3V0YWJsZTogQ2xvdWRFeGVjdXRhYmxlO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBiZSB2ZXJib3NlXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHZlcmJvc2U/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogRG9uJ3Qgc3RvcCBvbiBlcnJvciBtZXRhZGF0YVxuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBpZ25vcmVFcnJvcnM/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVHJlYXQgd2FybmluZ3MgaW4gbWV0YWRhdGEgYXMgZXJyb3JzXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHN0cmljdD86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uIChzZXR0aW5ncyBhbmQgY29udGV4dClcbiAgICAgKi9cbiAgICBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uO1xufVxuXG4vKipcbiAqIFRvb2xraXQgbG9naWNcbiAqXG4gKiBUaGUgdG9vbGtpdCBydW5zIHRoZSBgY2xvdWRFeGVjdXRhYmxlYCB0byBvYnRhaW4gYSBjbG91ZCBhc3NlbWJseVxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIENka1Rvb2xraXQge1xuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGdldEpzb24oZmlsZU5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcsIGFsbG93ZWRFbXB0eTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IExPQ0FMX1BBVEggKyBmaWxlTmFtZTtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGUpW2tleV07XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZU5hbWUgPT09IFNUQUNLX0lORk8pIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZmlsZVBhdGggPSBHTE9CQUxfUEFUSCArIGZpbGVOYW1lO1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZSlba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFsbG93ZWRFbXB0eSkge1xuICAgICAgICAgICAgZXJyb3IoXCJQbGVhc2UgdXNlICdyb3MtY2RrIGNvbmZpZyAoLWcpJyB0byBzZXQgeW91ciBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZmlyc3RseSFcIik7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwcm9wczogQ2RrVG9vbGtpdFByb3BzKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldFJvc0NsaWVudCgpIHtcbiAgICAgICAgbGV0IG1vZGVUeXBlID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAndHlwZScsIHRydWUpXG4gICAgICAgIGxldCBlbmRwb2ludCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2VuZHBvaW50JywgdHJ1ZSlcbiAgICAgICAgbGV0IGNvbmZpZ0luZm86IGFueTtcbiAgICAgICAgbGV0IGNsaWVudDtcbiAgICAgICAgc3dpdGNoIChtb2RlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZWNzX3JhbV9yb2xlJzpcbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlY3NfcmFtX3JvbGUnLFxuICAgICAgICAgICAgICAgICAgICByb2xlTmFtZTogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncm9sZU5hbWUnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RzJzpcbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHMnLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5SWQnKSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5U2VjcmV0JykpLFxuICAgICAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdzZWN1cml0eVRva2VuJykpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyYW1fcm9sZV9hcm4nOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JhbV9yb2xlX2FybicsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlJZCcpKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlTZWNyZXQnKSksXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBcm46IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JvbGVBcm4nKSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyb2xlU2Vzc2lvbk5hbWUnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWNjZXNzX2tleSc6XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWNjZXNzX2tleScsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlJZCcpKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlTZWNyZXQnKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbmRwb2ludCA9IGVuZHBvaW50ID8gZW5kcG9pbnQgOiAnaHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tJztcbiAgICAgICAgbGV0IG5ld0FjY2Vzc0tleUlkOiBzdHJpbmc7XG4gICAgICAgIGxldCBuZXdBY2Nlc3NLZXlTZWNyZXQ6IHN0cmluZztcbiAgICAgICAgbGV0IG5ld1NlY3VyaXR5VG9rZW46IHN0cmluZztcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBuZXdBY2Nlc3NLZXlJZCA9IG5ld0FjY2Vzc0tleUlkID8gbmV3QWNjZXNzS2V5SWQgOiBwcm9jZXNzLmVudi5BQ0NFU1NfS0VZX0lEXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbmV3QWNjZXNzS2V5U2VjcmV0ID0gbmV3QWNjZXNzS2V5U2VjcmV0ID8gbmV3QWNjZXNzS2V5U2VjcmV0IDogcHJvY2Vzcy5lbnYuQUNDRVNTX0tFWV9TRUNSRVRcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBuZXdTZWN1cml0eVRva2VuID0gbmV3U2VjdXJpdHlUb2tlbiA/IG5ld1NlY3VyaXR5VG9rZW4gOiBwcm9jZXNzLmVudi5TRUNVUklUWV9UT0tFTlxuICAgICAgICBpZiAoY29uZmlnSW5mbykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjcmVkID0gbmV3IENyZWRlbnRpYWxzKGNvbmZpZ0luZm8pO1xuICAgICAgICAgICAgICAgIG5ld0FjY2Vzc0tleUlkID0gYXdhaXQgY3JlZC5nZXRBY2Nlc3NLZXlJZCgpO1xuICAgICAgICAgICAgICAgIG5ld0FjY2Vzc0tleVNlY3JldCA9IGF3YWl0IGNyZWQuZ2V0QWNjZXNzS2V5U2VjcmV0KCk7XG4gICAgICAgICAgICAgICAgbmV3U2VjdXJpdHlUb2tlbiA9IGF3YWl0IGNyZWQuZ2V0U2VjdXJpdHlUb2tlbigpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIGNyZWRlbnRpYWwgaW5mb3JtYXRpb24geW91IGltcG9ydCBmcm9tIENMSSBjb25maWchJyArIGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5ld0FjY2Vzc0tleUlkIHx8ICFuZXdBY2Nlc3NLZXlTZWNyZXQpIHtcbiAgICAgICAgICAgIGVycm9yKFwiUGxlYXNlIHVzZSAncm9zLWNkayBjb25maWcgKC1nKScgb3Igc2V0IGVudmlyb25tZW50IHRvIHNldCB5b3VyIGFjY291bnQgY29uZmlndXJhdGlvbiBmaXJzdGx5IVwiKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW5ld1NlY3VyaXR5VG9rZW4pIHtcbiAgICAgICAgICAgIGNsaWVudCA9IG5ldyByb3NDbGllbnQoe1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBlbmRwb2ludCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogbmV3QWNjZXNzS2V5SWQsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBuZXdBY2Nlc3NLZXlTZWNyZXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xpZW50ID0gbmV3IHJvc0NsaWVudCh7XG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGVuZHBvaW50LFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBuZXdBY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IG5ld0FjY2Vzc0tleVNlY3JldCxcbiAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBuZXdTZWN1cml0eVRva2VuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaHR0cE1vZHVsZSA9IGNsaWVudC5lbmRwb2ludC5zdGFydHNXaXRoKCdodHRwczovLycpID8gaHR0cHMgOiBodHRwO1xuICAgICAgICBjbGllbnQua2VlcEFsaXZlQWdlbnQgPSBuZXcgaHR0cE1vZHVsZS5BZ2VudCh7XG4gICAgICAgICAgICBrZWVwQWxpdmU6IHRydWUsXG4gICAgICAgICAgICBrZWVwQWxpdmVNc2VjczogMTUwMDBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbmZpZyhnbG9iYWw6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvbmZpZ1NhdmVQYXRoID0gKGdsb2JhbCA/IEdMT0JBTF9QQVRIIDogTE9DQUxfUEFUSCkgKyBDT05GSUdfTkFNRTtcbiAgICAgICAgbGV0IG1vZGVUeXBlID0gWydBSycsICdTdHNUb2tlbicsICdSYW1Sb2xlQXJuJywgJ0Vjc1JhbVJvbGUnXVxuICAgICAgICBsZXQgZW5kcG9pbnQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2VuZHBvaW50KG9wdGlvbmFsLCBkZWZhdWx0Omh0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbSk6Jywge2RlZmF1bHRJbnB1dDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbSd9KTtcbiAgICAgICAgbGV0IHJlZ2lvbklkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdkZWZhdWx0UmVnaW9uSWQob3B0aW9uYWwsIGRlZmF1bHQ6Y24taGFuZ3pob3UpOicsIHtkZWZhdWx0SW5wdXQ6ICdjbi1oYW5nemhvdSd9KTtcbiAgICAgICAgbGV0IG1vZGVJbmRleCA9IHJlYWRsaW5lU3luYy5rZXlJblNlbGVjdChtb2RlVHlwZSwgJ0F1dGhlbnRpY2F0ZSBtb2RlOicpO1xuICAgICAgICBsZXQgaW5wdXRDb25maWdJbmZvOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IGNoZWNrQ29tbWFuZDogc3RyaW5nO1xuICAgICAgICBsZXQgY3VybENvbW1hbmQ6IHN0cmluZztcbiAgICAgICAgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdFY3NSYW1Sb2xlJykge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICAgICAgICAgICAgICBjaGVja0NvbW1hbmQgPSAncG93ZXJzaGVsbCAtQ29tbWFuZCBcIihjdXJsIC1VUmkgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8pLlN0YXR1c0NvZGVcIic7XG4gICAgICAgICAgICAgICAgY3VybENvbW1hbmQgPSAncG93ZXJzaGVsbCAtQ29tbWFuZCBcIihjdXJsIC1VUmkgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8pLkNvbnRlbnRcIic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoZWNrQ29tbWFuZCA9ICdjdXJsIGh0dHA6Ly8xMDAuMTAwLjEwMC4yMDAvbGF0ZXN0L21ldGEtZGF0YS9SYW0vc2VjdXJpdHktY3JlZGVudGlhbHMvIC1vIC9kZXYvbnVsbCAtcyAtdyAle2h0dHBfY29kZX0nO1xuICAgICAgICAgICAgICAgIGN1cmxDb21tYW5kID0gJ2N1cmwgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7c3Rkb3V0OiBjaGVja1N0ZG91dH0gPSBhd2FpdCBleGVjKGNoZWNrQ29tbWFuZCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrU3Rkb3V0LnRyaW0oKSAhPT0gJzIwMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gVXNlIEVjc1JhbVJvbGUgY29uZmlnLCBQbGVhc2UgYmluZCBFY3NSYW1Sb2xlIHRvIHRoZSBob3N0LicsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gVXNlIEVjc1JhbVJvbGUgY29uZmlnLCBQbGVhc2UgYmluZCBFY3NSYW1Sb2xlIHRvIHRoZSBob3N0IScgKyBlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qge3N0ZG91dDogY3VybFN0ZG91dH0gPSBhd2FpdCBleGVjKGN1cmxDb21tYW5kKTtcbiAgICAgICAgICAgIGxldCByb2xlTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgcm9sZU5hbWUsIFRoZSBjb25maWd1cmVkIHJvbGUgb2YgdGhlIGhvc3Q6IFske2N1cmxTdGRvdXQudHJpbSgpfV1gLCB7ZGVmYXVsdElucHV0OiBjdXJsU3Rkb3V0LnRyaW0oKX0pO1xuICAgICAgICAgICAgaW5wdXRDb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlY3NfcmFtX3JvbGUnLFxuICAgICAgICAgICAgICAgIHJvbGVOYW1lOiByb2xlTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnU3RzVG9rZW4nKSB7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2FjY2Vzc0tleUlkOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2FjY2Vzc0tleVNlY3JldDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICBsZXQgc2VjdXJpdHlUb2tlbiA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignc2VjdXJpdHlUb2tlbjonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICBpbnB1dENvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlJZCksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5U2VjcmV0KSxcbiAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBhd2FpdCBjaXBoZXIoc2VjdXJpdHlUb2tlbilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1JhbVJvbGVBcm4nKSB7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2FjY2Vzc0tleUlkOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2FjY2Vzc0tleVNlY3JldDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICBsZXQgcm9sZUFybiA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbigncm9sZUFybihlZzogYWNzOnJhbTo6KioqKioqOnJvbGUvKioqKioqKTonKTtcbiAgICAgICAgICAgIGxldCByb2xlU2Vzc2lvbk5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ3JvbGVTZXNzaW9uTmFtZTonKTtcbiAgICAgICAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleUlkKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlTZWNyZXQpLFxuICAgICAgICAgICAgICAgIHJvbGVBcm46IHJvbGVBcm4sXG4gICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiByb2xlU2Vzc2lvbk5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0FLJykge1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdhY2Nlc3NLZXlJZDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdhY2Nlc3NLZXlTZWNyZXQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgaW5wdXRDb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleUlkKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlTZWNyZXQpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGEgY2VydGlmaWNhdGlvbiBtZXRob2QgbXVzdCBiZSBzZWxlY3RlZCcsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dENvbmZpZ0luZm8uZW5kcG9pbnQgPSBlbmRwb2ludFxuICAgICAgICBpbnB1dENvbmZpZ0luZm8ucmVnaW9uSWQgPSByZWdpb25JZFxuICAgICAgICBsZXQgZmlsZSA9IHBhdGguam9pbihjb25maWdTYXZlUGF0aCk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZSwgSlNPTi5zdHJpbmdpZnkoaW5wdXRDb25maWdJbmZvLCBudWxsLCAnXFx0JykpO1xuICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFlvdXIgY2RrIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gc2F2ZWQgc3VjY2Vzc2Z1bGx5IWApO1xuICAgICAgICBleGl0KDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb25maWdTZXQob3B0aW9uczogQ29uZmlnU2V0T3B0aW9ucykge1xuICAgICAgICBsZXQgY29uZmlnU2F2ZVBhdGggPSAob3B0aW9ucy5nbG9iYWwgPyBHTE9CQUxfUEFUSCA6IExPQ0FMX1BBVEgpICsgQ09ORklHX05BTUU7XG4gICAgICAgIGxldCBtb2RlVHlwZSA9IG9wdGlvbnMubW9kZTtcbiAgICAgICAgbGV0IGNvbmZpZ0luZm86IGFueSA9IHt9O1xuICAgICAgICBsZXQgYWsgPSBvcHRpb25zLmFrID8gb3B0aW9ucy5hayA6ICcnO1xuICAgICAgICBsZXQgc2sgPSBvcHRpb25zLnNrID8gb3B0aW9ucy5zayA6ICcnO1xuICAgICAgICBsZXQgc3RzVG9rZW4gPSBvcHRpb25zLnN0cyA/IG9wdGlvbnMuc3RzIDogJyc7XG4gICAgICAgIGxldCByYW1Sb2xlQXJuID0gb3B0aW9ucy5yYW1Sb2xlQXJuID8gb3B0aW9ucy5yYW1Sb2xlQXJuIDogJyc7XG4gICAgICAgIGxldCByb2xlU2Vzc2lvbk5hbWUgPSBvcHRpb25zLnJvbGVTZXNzaW9uTmFtZSA/IG9wdGlvbnMucm9sZVNlc3Npb25OYW1lIDogJyc7XG4gICAgICAgIGxldCByYW1Sb2xlTmFtZSA9IG9wdGlvbnMucmFtUm9sZU5hbWUgPyBvcHRpb25zLnJhbVJvbGVOYW1lIDogJyc7XG4gICAgICAgIGlmIChtb2RlVHlwZSA9PT0gJ0FLJykge1xuICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYWNjZXNzX2tleScsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhayksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoc2spXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlID09PSAnU3RzVG9rZW4nKSB7XG4gICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHMnLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWspLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHNrKSxcbiAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBhd2FpdCBjaXBoZXIoc3RzVG9rZW4pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhbV9yb2xlX2FybicsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhayksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoc2spLFxuICAgICAgICAgICAgICAgIHJvbGVBcm46IHJhbVJvbGVBcm4sXG4gICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiByb2xlU2Vzc2lvbk5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGUgPT09ICdFY3NSYW1Sb2xlJykge1xuICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgICAgICAgICByb2xlTmFtZTogcmFtUm9sZU5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBhdXRoZW50aWNhdGUgbW9kZSBtdXN0IGJlIGluIChBS3xTdHNUb2tlbnxSYW1Sb2xlQXJufEVjc1JhbVJvbGUpJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaWxlID0gcGF0aC5qb2luKGNvbmZpZ1NhdmVQYXRoKTtcbiAgICAgICAgY29uZmlnSW5mby5yZWdpb25JZCA9IG9wdGlvbnMucmVnaW9uO1xuICAgICAgICBjb25maWdJbmZvLmVuZHBvaW50ID0gb3B0aW9ucy5lbmRwb2ludDtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlLCBKU09OLnN0cmluZ2lmeShjb25maWdJbmZvLCBudWxsLCAnXFx0JykpO1xuICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFlvdXIgY2RrIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gc2F2ZWQgc3VjY2Vzc2Z1bGx5IWApO1xuICAgICAgICBleGl0KDApO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFzeW5jIGxvYWRDbGlDb25maWcob3B0aW9uczogTG9hZENvbmZpZ09wdGlvbnMpIHtcbiAgICAgICAgbGV0IGNvbmZpZ1NhdmVQYXRoID0gKG9wdGlvbnMuZ2xvYmFsID8gR0xPQkFMX1BBVEggOiBMT0NBTF9QQVRIKSArIENPTkZJR19OQU1FO1xuICAgICAgICBsZXQgY29uZmlndXJlSW5mb3MgPSBhd2FpdCB0aGlzLmdldENsaUNvbmZpZyhvcHRpb25zLmxvYWRGaWxlUGF0aClcbiAgICAgICAgbGV0IG1vZGVUeXBlID0gT2JqZWN0LmtleXMoY29uZmlndXJlSW5mb3MpO1xuICAgICAgICBsZXQgbW9kZUluZGV4ID0gcmVhZGxpbmVTeW5jLmtleUluU2VsZWN0KG1vZGVUeXBlLCAnU2VsZWN0IGF1dGhlbnRpY2F0ZSBtb2RlOicpO1xuICAgICAgICBsZXQgcHJvZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBsZXQgcHJvZmlsZUNvbmZpZzogYW55ID0ge307XG4gICAgICAgIGlmIChtb2RlSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBjZXJ0aWZpY2F0aW9uIG1ldGhvZCBtdXN0IGJlIHNlbGVjdGVkJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdBSycpIHtcbiAgICAgICAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLkFLLm1hcCgoaXRlbTogeyBuYW1lOiBhbnk7IH0pID0+IGl0ZW0ubmFtZSlcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnU3RzVG9rZW4nKSB7XG4gICAgICAgICAgICBwcm9maWxlTmFtZXMgPSBjb25maWd1cmVJbmZvcy5TdHNUb2tlbi5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1JhbVJvbGVBcm4nKSB7XG4gICAgICAgICAgICBwcm9maWxlTmFtZXMgPSBjb25maWd1cmVJbmZvcy5SYW1Sb2xlQXJuLm1hcCgoaXRlbTogeyBuYW1lOiBhbnk7IH0pID0+IGl0ZW0ubmFtZSlcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgICAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLkVjc1JhbVJvbGUubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgICAgICB9XG4gICAgICAgIGxldCBwcm9maWxlSW5kZXggPSByZWFkbGluZVN5bmMua2V5SW5TZWxlY3QocHJvZmlsZU5hbWVzLCAnU2VsZWN0IEF1dGhlbnRpY2F0ZSBwcm9maWxlIG5hbWU6Jyk7XG4gICAgICAgIGlmIChwcm9maWxlSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBjZXJ0aWZpY2F0aW9uIHByb2ZpbGUgbXVzdCBiZSBzZWxlY3RlZCcsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZW5kcG9pbnQgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdlbmRwb2ludCcsIHRydWUpXG4gICAgICAgIGxldCByZWdpb25JZDtcbiAgICAgICAgbGV0IGNvbmZpZ0luZm86IGFueSA9IHt9O1xuICAgICAgICBlbmRwb2ludCA9IGVuZHBvaW50ID8gZW5kcG9pbnQgOiAnaHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tJztcbiAgICAgICAgc3dpdGNoIChtb2RlVHlwZVttb2RlSW5kZXhdKSB7XG4gICAgICAgICAgICBjYXNlICdBSyc6XG4gICAgICAgICAgICAgICAgcHJvZmlsZUNvbmZpZyA9IGNvbmZpZ3VyZUluZm9zLkFLLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmICghcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSB8fCAhcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10pIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYWNjZXNzS2V5SWQgb3IgYWNjZXNzS2V5U2VjcmV0IENhbm5vdCBiZSBlbXB0eSEnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWNjZXNzX2tleScsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTdHNUb2tlbic6XG4gICAgICAgICAgICAgICAgcHJvZmlsZUNvbmZpZyA9IGNvbmZpZ3VyZUluZm9zLlN0c1Rva2VuLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmICghcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSB8fCAhcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10gfHwgIXByb2ZpbGVDb25maWdbJ3NlY3VyaXR5VG9rZW4nXSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhY2Nlc3NLZXlJZCwgYWNjZXNzS2V5U2VjcmV0IG9yIHNlY3VyaXR5VG9rZW4gQ2Fubm90IGJlIGVtcHR5IScsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHMnLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10pLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSksXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydzZWN1cml0eVRva2VuJ10pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1JhbVJvbGVBcm4nOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5SYW1Sb2xlQXJuLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmICghcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSB8fCAhcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10gfHwgIXByb2ZpbGVDb25maWdbJ3JvbGVBcm4nXSB8fCAhcHJvZmlsZUNvbmZpZ1sncm9sZVNlc3Npb25OYW1lJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYWNjZXNzS2V5SWQsIGFjY2Vzc0tleVNlY3JldCwgcm9sZUFybiBvciByb2xlU2Vzc2lvbk5hbWUgQ2Fubm90IGJlIGVtcHR5IScsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyYW1fcm9sZV9hcm4nLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10pLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSksXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBcm46IHByb2ZpbGVDb25maWdbJ3JvbGVBcm4nXSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiBwcm9maWxlQ29uZmlnWydyb2xlU2Vzc2lvbk5hbWUnXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdFY3NSYW1Sb2xlJzpcbiAgICAgICAgICAgICAgICBwcm9maWxlQ29uZmlnID0gY29uZmlndXJlSW5mb3MuRWNzUmFtUm9sZS5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ3JvbGVOYW1lJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgcm9sZU5hbWUgQ2Fubm90IGJlIGVtcHR5IScsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlY3NfcmFtX3JvbGUnLFxuICAgICAgICAgICAgICAgICAgICByb2xlTmFtZTogcHJvZmlsZUNvbmZpZ1sncm9sZU5hbWUnXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmVnaW9uSWQgPSBwcm9maWxlQ29uZmlnWydyZWdpb24nXSA/IHByb2ZpbGVDb25maWdbJ3JlZ2lvbiddIDogJ2NuLWhhbmd6aG91JztcbiAgICAgICAgY29uZmlnSW5mby5yZWdpb25JZCA9IHJlZ2lvbklkXG4gICAgICAgIGNvbmZpZ0luZm8uZW5kcG9pbnQgPSBlbmRwb2ludFxuICAgICAgICBsZXQgZmlsZSA9IHBhdGguam9pbihjb25maWdTYXZlUGF0aCk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnSW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBZb3VyIGNkayBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGxvYWQgZnJvbSBBbGl5dW4gQ2xpIGNvbmZpZ3VyYXRpb24gc2F2ZWQgc3VjY2Vzc2Z1bGx5ICVzICVzIWAsIG1vZGVUeXBlW21vZGVJbmRleF0sIHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgZXhpdCgwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgbGlzdChzZWxlY3RvcnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0Zvckxpc3Qoc2VsZWN0b3JzKTtcbiAgICAgICAgZm9yIChjb25zdCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgIGxldCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpO1xuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHN0YWNrSW5mby5zdGF0dXNcbiAgICAgICAgICAgIGRhdGEoc3RhY2suaWQsIHN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN5bnRoZXNpemUgdGhlIGdpdmVuIHNldCBvZiBzdGFja3MgKGNhbGxlZCB3aGVuIHRoZSB1c2VyIHJ1bnMgJ2NkayBzeW50aCcpXG4gICAgICpcbiAgICAgKiBJTlBVVDogU3RhY2sgbmFtZXMgY2FuIGJlIHN1cHBsaWVkIHVzaW5nIGEgZ2xvYiBmaWx0ZXIuIElmIG5vIHN0YWNrcyBhcmVcbiAgICAgKiBnaXZlbiwgYWxsIHN0YWNrcyBmcm9tIHRoZSBhcHBsaWNhdGlvbiBhcmUgaW1wbGljdGx5IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogT1VUUFVUOiBJZiBtb3JlIHRoYW4gb25lIHN0YWNrIGVuZHMgdXAgYmVpbmcgc2VsZWN0ZWQsIGFuIG91dHB1dCBkaXJlY3RvcnlcbiAgICAgKiBzaG91bGQgYmUgc3VwcGxpZWQsIHdoZXJlIHRoZSB0ZW1wbGF0ZXMgd2lsbCBiZSB3cml0dGVuLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBzeW50aChzdGFja05hbWVzOiBzdHJpbmdbXSwgZXhjbHVzaXZlbHk6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEaWZmKHN0YWNrTmFtZXMsIGV4Y2x1c2l2ZWx5KTtcblxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgc2luZ2xlIHN0YWNrLCBwcmludCBpdCB0byBTVERPVVRcbiAgICAgICAgaWYgKHN0YWNrcy5zdGFja0NvdW50ID09PSAxKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja3MuZmlyc3RTdGFjay5pZCwgU1lOVEhfU1RBQ0spO1xuICAgICAgICAgICAgcmV0dXJuIHN0YWNrcy5maXJzdFN0YWNrLnRlbXBsYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2suaWQsIFNZTlRIX1NUQUNLKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzSW50ZWdNb2RlID0gcHJvY2Vzcy5lbnYuQ0RLX0lOVEVHX01PREUgPT09ICcxJztcbiAgICAgICAgaWYgKGlzSW50ZWdNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhY2tzLnN0YWNrQXJ0aWZhY3RzLm1hcCgocykgPT4gcy50ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBub3Qgb3V0cHV0dGluZyB0ZW1wbGF0ZSB0byBzdGRvdXQsIGxldCdzIGV4cGxhaW4gdGhpbmdzIHRvIHRoZSB1c2VyIGEgbGl0dGxlIGJpdC4uLlxuICAgICAgICBzdWNjZXNzKGBTdWNjZXNzZnVsbHkgc3ludGhlc2l6ZWQgdG8gJHtjb2xvcnMuYmx1ZShwYXRoLnJlc29sdmUoc3RhY2tzLmFzc2VtYmx5LmRpcmVjdG9yeSkpfWApO1xuICAgICAgICBwcmludChcbiAgICAgICAgICAgIGBTdXBwbHkgYSBzdGFjayBpZCAoJHtzdGFja3Muc3RhY2tBcnRpZmFjdHMubWFwKChzKSA9PiBjb2xvcnMuZ3JlZW4ocy5pZCkpLmpvaW4oJywgJyl9KSB0byBkaXNwbGF5IGl0cyB0ZW1wbGF0ZS5gLFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlcGxveShvcHRpb25zOiBEZXBsb3lPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRlcGxveShvcHRpb25zLnN0YWNrTmFtZXMsIG9wdGlvbnMuZXhjbHVzaXZlbHkpO1xuICAgICAgICBjb25zdCBzdGFja05hbWUgPSBvcHRpb25zLnN0YWNrTmFtZXMubGVuZ3RoICE9PSAwID8gb3B0aW9ucy5zdGFja05hbWVzWzBdIDogc3RhY2tzLnN0YWNrQXJ0aWZhY3RzWzBdLmlkO1xuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgdGVtcGxhdGVCb2R5ID0gZnMucmVhZEZpbGVTeW5jKGAuL2Nkay5vdXQvJHtzdGFja05hbWV9LnRlbXBsYXRlLmpzb25gKTtcbiAgICAgICAgbGV0IENsaWVudFRva2VuID0gZ2VuZXJhdGVTYWZlSWQoKTtcbiAgICAgICAgbGV0IGRpc2FibGVSb2xsYmFjayA9IG9wdGlvbnMuZGlzYWJsZVJvbGxiYWNrXG4gICAgICAgIGxldCBjb250ZW50OiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIFN0YWNrTmFtZTogc3RhY2tOYW1lLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uLFxuICAgICAgICAgICAgVGltZW91dEluTWludXRlczogb3B0aW9ucy50aW1lb3V0LFxuICAgICAgICAgICAgVGVtcGxhdGVCb2R5OiB0ZW1wbGF0ZUJvZHksXG4gICAgICAgICAgICBDbGllbnRUb2tlbjogQ2xpZW50VG9rZW4sXG4gICAgICAgICAgICBEaXNhYmxlUm9sbGJhY2s6IGRpc2FibGVSb2xsYmFja1xuICAgICAgICB9O1xuICAgICAgICBsZXQgc3luYyA9IG9wdGlvbnMuc3luY1xuICAgICAgICBsZXQgb3V0cHV0cyA9IG9wdGlvbnMub3V0cHV0c0ZpbGVcbiAgICAgICAgbGV0IHNraXBJZk5vQ2hhbmdlcyA9IG9wdGlvbnMuc2tpcElmTm9DaGFuZ2VzXG4gICAgICAgIGxldCByZXNvdXJjZUdyb3VwSWQgPSBvcHRpb25zLnJlc291cmNlR3JvdXBJZFxuXG4gICAgICAgIGlmIChyZXNvdXJjZUdyb3VwSWQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRbJ1Jlc291cmNlR3JvdXBJZCddID0gcmVzb3VyY2VHcm91cElkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhY2tzLnN0YWNrQXJ0aWZhY3RzWzBdLnRhZ3MpIHtcbiAgICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMTtcbiAgICAgICAgICAgIGxldCBwYXJhcyA9IHN0YWNrcy5zdGFja0FydGlmYWN0c1swXS50YWdzO1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFzKSB7XG4gICAgICAgICAgICAgICAgY29udGVudFsnVGFncy4nICsgY291bnQudG9TdHJpbmcoKSArICcuS2V5J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgY29udGVudFsnVGFncy4nICsgY291bnQudG9TdHJpbmcoKSArICcuVmFsdWUnXSA9IHBhcmFzW2tleV07XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMTtcbiAgICAgICAgICAgIGxldCBwYXJhcyA9IG9wdGlvbnMucGFyYW1ldGVycztcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhcykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1BhcmFtZXRlcnMuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlBhcmFtZXRlcktleSddID0ga2V5O1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1BhcmFtZXRlcnMuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlBhcmFtZXRlclZhbHVlJ10gPSBwYXJhc1trZXldO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9jYWxTdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKVxuICAgICAgICBjb25zdCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSlcbiAgICAgICAgaWYgKGxvY2FsU3RhY2tJbmZvLnN0YWNrSWQpIHtcbiAgICAgICAgICAgIGlmIChzdGFja0luZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgc3RhY2tcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdGFja0luZm8uc3RhY2tJZCAhPT0gc3RhY2tJbmZvLlN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gdXBkYXRlIHN0YWNrLCBiZWNhdXNlIHN0YWNrIGxvY2FsIGluZm8gZG9zZSBub3QgbWF0Y2ggdGhlIHJlbW90ZSBzZXJ2ZXIuJylcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlR3JvdXBJZCkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2ssIGNhbm5vdCBzdXBwb3J0IHNldCByZXNvdXJjZS1ncm91cC1pZCBwYXJhbXMgdG8gdGhpcyBvcGVyYXRpb24uJylcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50WydTdGFja0lkJ10gPSBzdGFja0luZm8uU3RhY2tJZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWNrU3RhdHVzID0gc3RhY2tJbmZvLlN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhY2tVcGRhdGVUaW1lID0gc3RhY2tJbmZvLlVwZGF0ZVRpbWUgPyBzdGFja0luZm8uVXBkYXRlVGltZSA6IHN0YWNrSW5mby5DcmVhdGVUaW1lXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1N0YXR1cy5pbmRleE9mKFwiSU5fUFJPR1JFU1NcIikgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJyVzOiBkZXBsb3lpbmcuLi4nLCBjb2xvcnMuYm9sZChzdGFja05hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zeW5jVXBkYXRlU3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgb3V0cHV0cywgc2tpcElmTm9DaGFuZ2VzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQudXBkYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCB1cGRhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQodXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUodXBkYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHVwZGF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdOb3RTdXBwb3J0ZWQnICYmIGUubWVzc2FnZS5zdGFydHNXaXRoKCdVcGRhdGUgdGhlIGNvbXBsZXRlbHkgc2FtZSBzdGFjaycpICYmIHNraXBJZk5vQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHN0YWNrSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygnVGhlIHN0YWNrIGlzIGNvbXBsZXRlbHkgdGhlIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXBkYXRlLicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDUwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJyVzOiBkZXBsb3lpbmcuLi4nLCBjb2xvcnMuYm9sZChzdGFja05hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zeW5jVXBkYXRlU3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgb3V0cHV0cywgc2tpcElmTm9DaGFuZ2VzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQudXBkYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCB1cGRhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQodXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUodXBkYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHVwZGF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdTZXJ2aWNlVW5hdmFpbGFibGUnIHx8IGUuY29kZSA9PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdHVzQXJyYXkgPSBbXCJVUERBVEVfRkFJTEVEXCIsIFwiVVBEQVRFX0NPTVBMRVRFXCIsIFwiUk9MTEJBQ0tfRkFJTEVEXCIsIFwiUk9MTEJBQ0tfQ09NUExFVEVcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YWNrSWRJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U3RhY2tJZEluZm9VcGRhdGVUaW1lID0gbmV3U3RhY2tJZEluZm8uVXBkYXRlVGltZSA/IG5ld1N0YWNrSWRJbmZvLlVwZGF0ZVRpbWUgOiBuZXdTdGFja0lkSW5mby5DcmVhdGVUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3U3RhY2tJZEluZm8uU3RhdHVzID09ICdVUERBVEVfSU5fUFJPR1JFU1MnIHx8IG5ld1N0YWNrSWRJbmZvLlN0YXR1cyA9PSAnUk9MTEJBQ0tfSU5fUFJPR1JFU1MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBuZXdTdGFja0lkSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudCh1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShuZXdTdGFja0lkSW5mby5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzQXJyYXkuaW5jbHVkZXMobmV3U3RhY2tJZEluZm8uU3RhdHVzKSAmJiBuZXdTdGFja0lkSW5mb1VwZGF0ZVRpbWUgIT0gc3RhY2tVcGRhdGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBuZXdTdGFja0lkSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudCh1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShuZXdTdGFja0lkSW5mby5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gdXBkYXRlIHN0YWNrLCBzZXJ2aWNlIGlzIFNlcnZpY2VVbmF2YWlsYWJsZSBvciBMYXN0VG9rZW5Qcm9jZXNzaW5nLCBwbGVhc2UgY2hlY2sgeW91IHNlcnZpY2UgZW5kcG9pbnQuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2ssIGJlY2F1c2Ugc3RhY2sgc3RhdHVzIGlzICVzJywgc3RhY2tTdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBzdGFja1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnJXM6IGRlcGxveWluZy4uLicsIGNvbG9ycy5ib2xkKHN0YWNrTmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zeW5jRGVwbG95U3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgb3V0cHV0cylcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC5jcmVhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBjcmVhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoY3JlYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCclczogZGVwbG95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN5bmNEZXBsb3lTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBvdXRwdXRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC5jcmVhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBjcmVhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoY3JlYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdTZXJ2aWNlVW5hdmFpbGFibGUnIHx8IGUuY29kZSA9PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDUwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YWNrSWRJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1N0YWNrSWRJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgbmV3U3RhY2tJZEluZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUobmV3U3RhY2tJZEluZm8uU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2ssIHNlcnZpY2UgaXMgU2VydmljZVVuYXZhaWxhYmxlIG9yIExhc3RUb2tlblByb2Nlc3NpbmcsIHBsZWFzZSBjaGVjayB5b3Ugc2VydmljZSBlbmRwb2ludC4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0YWNrSW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIHN0YWNrIGlzIGV4aXN0IHNlbmQgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGNyZWF0ZSBzdGFjaywgYmVjYXVzZSBzdGFjayAgJXMgaXMgZXhpc3QgaW4gdGhpcyByZWdpb24uJywgc3RhY2tOYW1lKVxuICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHN0YWNrXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCclczogZGVwbG95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN5bmNEZXBsb3lTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBvdXRwdXRzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC5jcmVhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBjcmVhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoY3JlYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCclczogZGVwbG95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN5bmNEZXBsb3lTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBvdXRwdXRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC5jcmVhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBjcmVhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoY3JlYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdTZXJ2aWNlVW5hdmFpbGFibGUnIHx8IGUuY29kZSA9PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDUwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YWNrSWRJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1N0YWNrSWRJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgbmV3U3RhY2tJZEluZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUobmV3U3RhY2tJZEluZm8uU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2ssIHNlcnZpY2UgaXMgU2VydmljZVVuYXZhaWxhYmxlIG9yIExhc3RUb2tlblByb2Nlc3NpbmcsIHBsZWFzZSBjaGVjayB5b3Ugc2VydmljZSBlbmRwb2ludC4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRpZmYob3B0aW9uczogRGlmZk9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uSW5Mb2NhbCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbkluTG9jYWwgPSByZWdpb25JbkxvY2FsID8gcmVnaW9uSW5Mb2NhbCA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gb3B0aW9ucy5zdHJlYW0gfHwgcHJvY2Vzcy5zdGRlcnI7XG4gICAgICAgIGNvbnN0IGNvbnRleHRMaW5lcyA9IG9wdGlvbnMuY29udGV4dExpbmVzIHx8IDM7XG4gICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCk7XG4gICAgICAgICAgICBpZiAoIXN0YWNrSW5mby5zdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgc3RyZWFtLndyaXRlKGZvcm1hdCgnU3RhY2sgJXMgaGFzIG5vdCBiZWVuIGRlcGxveWVkIG9yIHN0YWNrIGRvZXNuXFwndCBleGlzdCBpbiB0aGUgc3RhY2suaW5mby5qc29uIGZpbGUgXFxuJywgY29sb3JzLmJvbGQoc3RhY2suZGlzcGxheU5hbWUpKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGllbnQuZ2V0VGVtcGxhdGUoe1JlZ2lvbklkOiByZWdpb25JbkxvY2FsLCBTdGFja0lkOiBzdGFja0luZm8uc3RhY2tJZH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRlc2VyaWFsaXplU3RydWN0dXJlKHJlcy5UZW1wbGF0ZUJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW0ud3JpdGUoZm9ybWF0KCdTdGFjayAlc1xcbicsIGNvbG9ycy5ib2xkKHN0YWNrLmRpc3BsYXlOYW1lKSkpO1xuICAgICAgICAgICAgICAgICAgICBwcmludFN0YWNrRGlmZih0ZW1wbGF0ZSwgc3RhY2ssIGNvbnRleHRMaW5lcywgc3RyZWFtKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBzeW50aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrLmlkLCBTWU5USF9TVEFDSyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgdGVtcGxhdGU6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGV2ZW50KG9wdGlvbnM6IEV2ZW50T3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShbXSk7XG4gICAgICAgIGxldCBzdGFja0lkID0gKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhvcHRpb25zLnN0YWNrTmFtZVswXSkpLnN0YWNrSWRcbiAgICAgICAgaWYgKCFvcHRpb25zLnN0YWNrTmFtZSkge1xuICAgICAgICAgICAgZXJyb3IoJ0lmIHdhbnQgdG8gZ2V0IHJlc291cmNlIHN0YWNrIGV2ZW50cywgc3RhY2sgbmFtZSBtdXN0IGJlIFNwZWNpZmllZCEnKVxuICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICB9XG4gICAgICAgIGlmICghc3RhY2tzLnN0YWNrSWRzLmluY2x1ZGVzKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSkge1xuICAgICAgICAgICAgZXJyb3IoYFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXN0LCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBpbnB1dCBzdGFjayBuYW1lIWApXG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGFja0lkKSB7XG4gICAgICAgICAgICBlcnJvcihgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHN0YWNrLmluZm8uanNvbiBmaWxlLCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBzdGFjazogJXMhYCwgb3B0aW9ucy5zdGFja05hbWVbMF0pXG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IExvZ2ljYWxSZXNvdXJjZUlkczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubG9naWNhbFJlc291cmNlSWQpIHtcbiAgICAgICAgICAgIExvZ2ljYWxSZXNvdXJjZUlkcy5wdXNoKG9wdGlvbnMubG9naWNhbFJlc291cmNlSWQpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY2xpZW50XG4gICAgICAgICAgICAubGlzdFN0YWNrRXZlbnRzKHtcbiAgICAgICAgICAgICAgICBTdGFja0lkOiBzdGFja0lkLFxuICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICAgICAgTG9naWNhbFJlc291cmNlSWQ6IExvZ2ljYWxSZXNvdXJjZUlkcyxcbiAgICAgICAgICAgICAgICBQYWdlU2l6ZTogb3B0aW9ucy5wYWdlU2l6ZSA/IE51bWJlcihvcHRpb25zLnBhZ2VTaXplKSA6IDEwLFxuICAgICAgICAgICAgICAgIFBhZ2VOdW1iZXI6IG9wdGlvbnMucGFnZU51bWJlciA/IE51bWJlcihvcHRpb25zLnBhZ2VOdW1iZXIpIDogMVxuICAgICAgICAgICAgfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBTdGFjayAlcyBcXG4gRXZlbnRzIGlzOiBcXG4gJXMgXFxuYCwgY29sb3JzLmJsdWUob3B0aW9ucy5zdGFja05hbWVbMF0pLCBjb2xvcnMuYmx1ZShKU09OLnN0cmluZ2lmeShyZXMuRXZlbnRzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8ob3B0aW9ucy5zdGFja05hbWVbMF0sIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjayBldmVudHM6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG91dHB1dChvcHRpb25zOiBPdXRQdXRPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXN0cm95KFtdKTtcbiAgICAgICAgbGV0IHN0YWNrSWQgPSAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSkuc3RhY2tJZFxuICAgICAgICBpZiAoIW9wdGlvbnMuc3RhY2tOYW1lKSB7XG4gICAgICAgICAgICBlcnJvcignSWYgd2FudCB0byBnZXQgcmVzb3VyY2Ugc3RhY2sgb3V0cHV0LCBzdGFjayBuYW1lIG11c3QgYmUgU3BlY2lmaWVkIScpXG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGFja3Muc3RhY2tJZHMuaW5jbHVkZXMob3B0aW9ucy5zdGFja05hbWVbMF0pKSB7XG4gICAgICAgICAgICBlcnJvcihgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpc3QsIFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIGlucHV0IHN0YWNrIG5hbWUhYClcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YWNrSWQpIHtcbiAgICAgICAgICAgIGVycm9yKGBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGlzdCBpbiB0aGUgc3RhY2suaW5mby5qc29uIGZpbGUsIFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIHN0YWNrOiAlcyFgLCBvcHRpb25zLnN0YWNrTmFtZVswXSlcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBjbGllbnRcbiAgICAgICAgICAgIC5nZXRTdGFjayh7XG4gICAgICAgICAgICAgICAgU3RhY2tJZDogc3RhY2tJZCxcbiAgICAgICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uXG4gICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIFN0YWNrICVzIFxcbiBPdXRwdXQgaXM6IFxcbiAlcyBcXG5gLCBjb2xvcnMuYmx1ZShvcHRpb25zLnN0YWNrTmFtZVswXSksIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5PdXRwdXRzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8ob3B0aW9ucy5zdGFja05hbWVbMF0sIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjayBvdXRwdXRzOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFzeW5jIHJlc291cmNlKG9wdGlvbnM6IFJlc291cmNlT3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBsZXQgc3RhY2tOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBpZiAoKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCkpLnN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBzdGFja05hbWVzLnB1c2goc3RhY2suaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoYFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXN0IGluIHRoZSBzdGFjay5pbmZvLmpzb24gZmlsZSwgUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgc3RhY2s6ICVzIWAsIHN0YWNrLmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCByZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpO1xuICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGZvciAobGV0IHN0YWNrTmFtZSBvZiBzdGFja05hbWVzKSB7XG4gICAgICAgICAgICBjbGllbnRcbiAgICAgICAgICAgICAgICAubGlzdFN0YWNrUmVzb3VyY2VzKHtcbiAgICAgICAgICAgICAgICAgICAgU3RhY2tJZDogKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpKS5zdGFja0lkLFxuICAgICAgICAgICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uLFxuICAgICAgICAgICAgICAgIH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBTdGFjayAlcyBcXG4gUmVzb3VyY2UgaXM6IFxcbiAlcyBcXG5gLCBjb2xvcnMuYmx1ZShzdGFja05hbWUpLCBjb2xvcnMuYmx1ZShKU09OLnN0cmluZ2lmeShyZXMuUmVzb3VyY2VzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIGRlc3Ryb3kuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHN0YWNrIHJlc291cmNlOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdlbmVyYXRlU3RhY2tJbmZvKCkge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JMaXN0KFtdKTtcbiAgICAgICAgbGV0IHN0YWNrTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBTdGFja0luZm9zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgIHN0YWNrTmFtZXMgPSBzdGFja3Muc3RhY2tJZHNcbiAgICAgICAgZm9yIChsZXQgc3RhY2tOYW1lIG9mIHN0YWNrTmFtZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lKVxuICAgICAgICAgICAgaWYgKHN0YWNrSW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFN0YWNrSW5mb3Nbc3RhY2tOYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBERVBMT1lfU1RBQ0ssXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrSWQ6IHN0YWNrSW5mby5TdGFja0lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTdGFja0luZm9zW3N0YWNrTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogSU5JVF9TVEFDSyxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tJZDogbnVsbFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoU3RhY2tJbmZvcywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBnZW5lcmF0ZSBzdGFjayBpbmZvIGhhcyBjb21wbGV0ZWQhYCxcbiAgICAgICAgKTtcbiAgICAgICAgZXhpdCgwKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRTdGFja0J5TmFtZShzdGFja05hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgIFBhZ2VTaXplOiAxMCxcbiAgICAgICAgICAgIFBhZ2VOdW1iZXI6IDEsXG4gICAgICAgICAgICBTdGFja05hbWU6IFtzdGFja05hbWVdXG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQubGlzdFN0YWNrcyhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5TdGFja3NbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LlN0YWNrc1swXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1YmxpYyBhc3luYyBsaXN0U3RhY2tzKG9wdGlvbnM6IExpc3RTdGFja09wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0Zvckxpc3QoW10pO1xuICAgICAgICBsZXQgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgIFBhZ2VTaXplOiBvcHRpb25zLnBhZ2VTaXplID8gTnVtYmVyKG9wdGlvbnMucGFnZVNpemUpIDogMTAsXG4gICAgICAgICAgICBQYWdlTnVtYmVyOiBvcHRpb25zLnBhZ2VOdW1iZXIgPyBOdW1iZXIob3B0aW9ucy5wYWdlTnVtYmVyKSA6IDFcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFvcHRpb25zLmFsbCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RhY2tOYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuU3RhY2tOYW1lID0gc3RhY2tzLnN0YWNrSWRzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5TdGFja05hbWUgPSBvcHRpb25zLnN0YWNrTmFtZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjbGllbnQubGlzdFN0YWNrcyhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2tzIGxpc3QgaXM6XFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5TdGFja3MsIG51bGwsIFwiXFx0XCIpKSk7XG4gICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBsaXN0IHN0YWNrczogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZXN0cm95KG9wdGlvbnM6IERlc3Ryb3lPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXN0cm95KG9wdGlvbnMuc3RhY2tOYW1lcyk7XG4gICAgICAgIGxldCBzdGFja05hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBsZXQgc3luYyA9IG9wdGlvbnMuc3luY1xuICAgICAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgIGlmICgoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKSkuc3RhY2tJZCkge1xuICAgICAgICAgICAgICAgIHN0YWNrTmFtZXMucHVzaChzdGFjay5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLnF1aWV0KSB7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBjb25maXJtID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAnVGhlIGZvbGxvd2luZyBzdGFjayhzKSB3aWxsIGJlIGRlc3Ryb3llZChPbmx5IGRlcGxveWVkIHN0YWNrcyB3aWxsIGJlIGRpc3BsYXllZCkuXFxuXFxuJyArXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrTmFtZXMudG9TdHJpbmcoKSArXG4gICAgICAgICAgICAgICAgICAgICdcXG5cXG5QbGVhc2UgY29uZmlybS4oWS9OKVxcbicsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybSA9PT0gJ24nIHx8IGNvbmZpcm0gPT09ICdOJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb25maXJtID09PSAneScgfHwgY29uZmlybSA9PT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQ6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgICAgIFN0YWNrSWQ6IChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKSkuc3RhY2tJZCxcbiAgICAgICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgcHJpbnQoJyVzOiBkZXN0cm95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zeW5jRGVzdHJveVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGllbnQuZGVsZXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgRGVsZXRlZFxcblJlcXVlc3RlZElkOiAlc2AsIGNvbG9ycy5ibHVlKHJlcy5SZXF1ZXN0SWQpKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBkZXN0cm95LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGRlbGV0ZSBzdGFjazogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc3luY1N0YWNrSW5mbygpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcbiAgICAgICAgbGV0IGZpbGVDb250ZW50ID0ge307XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShmaWxlQ29udGVudCwgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGVtcDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgICAgICAvLyBzZWxlY3Rvci5sZW5ndGggPSAwIG1lYW5zIHNlbGVjdCBhbGwgc3RhY2tzIGZyb20gdGhpcyBhcHBcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JMaXN0KFtdKTtcbiAgICAgICAgZm9yIChjb25zdCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihTVEFDS19JTkZPLCBzdGFjay5pZCk7XG4gICAgICAgICAgICAvLyBpZiB0aGUgc3RhY2sgaGFzIG5vIGluZm8sIHRoZW4gYWRkIGluaXQgdGFnIGZvciBpdFxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGVtcFtzdGFjay5pZF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGVtcFtzdGFjay5pZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogSU5JVF9TVEFDSyxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tJZDogbnVsbFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeSh0ZW1wLCBudWxsLCAnXFx0JykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgU1RBQ0tfSU5GTyk7XG4gICAgICAgIGxldCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGluZm8gPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcbiAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGluZm9bc3RhY2tOYW1lXTtcbiAgICAgICAgaWYgKCFzdGFja0luZm8pIHtcbiAgICAgICAgICAgIHN0YWNrSW5mbyA9IGluZm9bc3RhY2tOYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IERFUExPWV9TVEFDS19JRF9MRU5HVEgpIHtcbiAgICAgICAgICAgIHN0YWNrSW5mby5zdGF0dXMgPSBERVBMT1lfU1RBQ0s7XG4gICAgICAgICAgICBzdGFja0luZm8uc3RhY2tJZCA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFja0luZm8uc3RhdHVzID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IERFU1RST1lfU1RBQ0spIHtcbiAgICAgICAgICAgICAgICBzdGFja0luZm8uc3RhY2tJZCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoaW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGZpbmRTdGFja0luZm8oc3RhY2tOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcbiAgICAgICAgbGV0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlQ29udGVudClbc3RhY2tOYW1lXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNlbGVjdFN0YWNrc0Zvckxpc3Qoc2VsZWN0b3JzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHNlbGVjdG9ycywge2RlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5BbGxTdGFja3N9KTtcblxuICAgICAgICAvLyBObyB2YWxpZGF0aW9uXG5cbiAgICAgICAgcmV0dXJuIHN0YWNrcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNlbGVjdFN0YWNrc0ZvckRlc3Ryb3koc3RhY2tOYW1lczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzdGFja05hbWVzLCB7XG4gICAgICAgICAgICBkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb24uQWxsU3RhY2tzLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBObyB2YWxpZGF0aW9uXG5cbiAgICAgICAgcmV0dXJuIHN0YWNrcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNlbGVjdFN0YWNrc0ZvckRlcGxveShzdGFja05hbWVzOiBzdHJpbmdbXSwgZXhjbHVzaXZlbHk/OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc3RhY2tOYW1lcywge1xuICAgICAgICAgICAgZXh0ZW5kOiBleGNsdXNpdmVseSA/IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uTm9uZSA6IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uVXBzdHJlYW0sXG4gICAgICAgICAgICBkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb24uT25seVNpbmdsZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZVN0YWNrcyhzdGFja3MpO1xuXG4gICAgICAgIHJldHVybiBzdGFja3M7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JEaWZmKHN0YWNrTmFtZXM6IHN0cmluZ1tdLCBleGNsdXNpdmVseT86IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzdGFja05hbWVzLCB7XG4gICAgICAgICAgICBleHRlbmQ6IGV4Y2x1c2l2ZWx5ID8gRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5Ob25lIDogRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5VcHN0cmVhbSxcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5BbGxTdGFja3MsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGVTdGFja3Moc3RhY2tzKTtcblxuICAgICAgICByZXR1cm4gc3RhY2tzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHRoZSBzdGFja3MgZm9yIGVycm9ycyBhbmQgd2FybmluZ3MgYWNjb3JkaW5nIHRvIHRoZSBDTEkncyBjdXJyZW50IHNldHRpbmdzXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyB2YWxpZGF0ZVN0YWNrcyhzdGFja3M6IFN0YWNrQ29sbGVjdGlvbikge1xuICAgICAgICBzdGFja3MucHJvY2Vzc01ldGFkYXRhTWVzc2FnZXMoe1xuICAgICAgICAgICAgaWdub3JlRXJyb3JzOiB0aGlzLnByb3BzLmlnbm9yZUVycm9ycyxcbiAgICAgICAgICAgIHN0cmljdDogdGhpcy5wcm9wcy5zdHJpY3QsXG4gICAgICAgICAgICB2ZXJib3NlOiB0aGlzLnByb3BzLnZlcmJvc2UsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXNzZW1ibHkoKTogUHJvbWlzZTxDbG91ZEFzc2VtYmx5PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNsb3VkRXhlY3V0YWJsZS5zeW50aGVzaXplKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRDbGlDb25maWcobG9hZEZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoOiBzdHJpbmc7XG4gICAgICAgIGxldCBjb25maWd1cmVJbmZvOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IGNvbmZpZ3VyZUluZm9zOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IEFLUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XG4gICAgICAgIGxldCBTdHNQcm9maWxlTGlzdDogb2JqZWN0W10gPSBbXTtcbiAgICAgICAgbGV0IFJhbVJvbGVBcm5Qcm9maWxlTGlzdDogb2JqZWN0W10gPSBbXTtcbiAgICAgICAgbGV0IEVjc1JhbVJvbGVQcm9maWxlTGlzdDogb2JqZWN0W10gPSBbXTtcbiAgICAgICAgaWYgKGxvYWRGaWxlUGF0aCkge1xuICAgICAgICAgICAgZmlsZVBhdGggPSBsb2FkRmlsZVBhdGhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBob21lUGF0aCA9IG9zLmhvbWVkaXIoKTtcbiAgICAgICAgICAgIGZpbGVQYXRoID0gaG9tZVBhdGggKyBDTElfQ09ORklHX0ZJTEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGxldCBBbGxQcm9maWxlcyA9IEpTT04ucGFyc2UoZmlsZSlbJ3Byb2ZpbGVzJ107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9maWxlIG9mIEFsbFByb2ZpbGVzKSB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IHByb2ZpbGUuYWNjZXNzX2tleV9pZCxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBwcm9maWxlLmFjY2Vzc19rZXlfc2VjcmV0LFxuICAgICAgICAgICAgICAgICAgICByZWdpb246IHByb2ZpbGUucmVnaW9uX2lkLFxuICAgICAgICAgICAgICAgICAgICBzZWN1cml0eVRva2VuOiBwcm9maWxlLnN0c190b2tlbixcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFybjogcHJvZmlsZS5yYW1fcm9sZV9hcm4sXG4gICAgICAgICAgICAgICAgICAgIHJvbGVTZXNzaW9uTmFtZTogcHJvZmlsZS5yYW1fc2Vzc2lvbl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICByb2xlTmFtZTogcHJvZmlsZS5yYW1fcm9sZV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlLm5hbWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvZmlsZS5tb2RlID09PSAnQUsnKSB7XG4gICAgICAgICAgICAgICAgICAgIEFLUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvcy5BSyA9IEFLUHJvZmlsZUxpc3RcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ1N0c1Rva2VuJykge1xuICAgICAgICAgICAgICAgICAgICBTdHNQcm9maWxlTGlzdC5wdXNoKGNvbmZpZ3VyZUluZm8pXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUluZm9zLlN0c1Rva2VuID0gU3RzUHJvZmlsZUxpc3RcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ1JhbVJvbGVBcm4nKSB7XG4gICAgICAgICAgICAgICAgICAgIFJhbVJvbGVBcm5Qcm9maWxlTGlzdC5wdXNoKGNvbmZpZ3VyZUluZm8pXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUluZm9zLlJhbVJvbGVBcm4gPSBSYW1Sb2xlQXJuUHJvZmlsZUxpc3RcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIEVjc1JhbVJvbGVQcm9maWxlTGlzdC5wdXNoKGNvbmZpZ3VyZUluZm8pXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUluZm9zLkVjc1JhbVJvbGUgPSBFY3NSYW1Sb2xlUHJvZmlsZUxpc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ3VyZUluZm9zIHx8IE9iamVjdC5rZXlzKGNvbmZpZ3VyZUluZm9zKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGVycm9yKFwiV0FOUk5JTkc6IFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIG1vZGUgYW5kIHByb2ZpbGUgY29uZmlndXJhdGlvbiBlbnRlcmVkLlwiKTtcbiAgICAgICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3VyZUluZm9zXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcihcIldBTlJOSU5HOiBQbGVhc2UgY2hlY2sgQWxpeXVuIENsaSB0b29sIGNvbmZpZ3VyZSBhY2N1cmFjeSBvZiB0aGUgZGVmYXVsdCBwYXRoIG9yIHNwZWNpZmllZCBwYXRoLlwiKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHN5bmNEZXBsb3lTdGFjayhjbGllbnQ6IGFueSwgY29udGVudDogYW55LCByZXF1ZXN0T3B0aW9uczogYW55LCBvdXRwdXRzRmlsZTogYm9vbGVhbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2tPdXRwdXRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgICAgICBjb25zdCBjcmVhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQuY3JlYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICBjb25zdCBibG9jayA9IG5ldyBSZXdyaXRhYmxlQmxvY2soc3RyZWFtKTtcbiAgICAgICAgICAgIHdpdGhEZWZhdWx0UHJpbnRlck9iaiA9IHNldEludGVydmFsKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBjcmVhdGVSZXN1bHQuU3RhY2tJZCwgYmxvY2ssICdkZXBsb3knKVxuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMDApXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWdpb25JZDogY29udGVudFsnUmVnaW9uSWQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YWNrSWQ6IGNyZWF0ZVJlc3VsdC5TdGFja0lkXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldFN0YWNrUmVzdWx0ID0gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGdldFN0YWNrUmVzdWx0LlN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNSZWFzb24gPSBnZXRTdGFja1Jlc3VsdC5TdGF0dXNSZWFzb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tOYW1lID0gZ2V0U3RhY2tSZXN1bHQuU3RhY2tOYW1lXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dHMgPSBnZXRTdGFja1Jlc3VsdC5PdXRwdXRzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0NvbXBsZXRlID0gUmVnRXhwKC9DT01QTEVURS8pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0ZhaWxlZCA9IFJlZ0V4cCgvRkFJTEVELylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0NvbXBsZXRlLmV4ZWMoc3RhdHVzKSB8fCByZWdGYWlsZWQuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBjcmVhdGVSZXN1bHQuU3RhY2tJZCwgYmxvY2ssICdkZXBsb3knKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCdcXG5PdXRwdXRzOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrT3V0cHV0c1tzdGFja05hbWVdID0gb3V0cHV0cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG91dHB1dCBvZiBvdXRwdXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb3V0cHV0WydPdXRwdXRWYWx1ZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBvdXRwdXRbJ091dHB1dEtleSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IG91dHB1dFsnRGVzY3JpcHRpb24nXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJ1xcbiBLZXk6ICVzICBWYWx1ZTogJXMgRGVzY3JpcHRpb246ICVzJywgY29sb3JzLmN5YW4oa2V5KSwgY29sb3JzLmN5YW4odmFsdWUpLCBjb2xvcnMuY3lhbihkZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0c0ZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4oTE9DQUxfUEFUSCArIE9VVFBVVFNfSlNPTiksIEpTT04uc3RyaW5naWZ5KHN0YWNrT3V0cHV0cywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHN5bmMgZGVwbG95IHN0YWNrKSBoYXMgZmluaXNoZWQhXFxuc3RhdHVzOiAlc1xcblN0YXR1c1JlYXNvbjogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXNSZWFzb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGdldFN0YWNrUmVzdWx0LlN0YWNrSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBjcmVhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVnQ29tcGxldGUuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy50b1N0cmluZygpID09ICdDUkVBVEVfUk9MTEJBQ0tfQ09NUExFVEUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWdGYWlsZWQuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnVGhyb3R0bGluZy5Vc2VyJyB8fCBlLmNvZGUgPT0gJ1Rocm90dGxpbmcnIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZy5BUEknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgzMDAwMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgY3JlYXRlIHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIGNyZWF0ZSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGdldFJlc291cmNlcyhjbGllbnQ6IGFueSwgY29udGVudDogYW55LCByZXF1ZXN0T3B0aW9uczogYW55LCBzdGFja0lkOiBhbnkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RTdGFja1Jlc291cmNlc1Jlc3VsdCA9IGF3YWl0IGNsaWVudC5saXN0U3RhY2tSZXNvdXJjZXMoe1xuICAgICAgICAgICAgICAgIFN0YWNrSWQ6IHN0YWNrSWQsXG4gICAgICAgICAgICAgICAgUmVnaW9uSWQ6IGNvbnRlbnRbJ1JlZ2lvbklkJ10sXG4gICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIHJldHVybiBsaXN0U3RhY2tSZXNvdXJjZXNSZXN1bHQuUmVzb3VyY2VzXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBuZXcgc3RhY2sgcmVzb3VyY2U6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgd2l0aERlZmF1bHRQcmludGVyKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIHN0YWNrSWQ6IGFueSwgYmxvY2s6IGFueSwgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBDZGtUb29sa2l0LmdldFJlc291cmNlcyhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBzdGFja0lkKVxuICAgICAgICBpZiAoYWN0aW9uICE9PSAnZGVzdHJveScpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJlc291cmNlIG9mIHJlc291cmNlcykge1xuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2godXRpbC5mb3JtYXQoY29sb3JzLmJsdWUoJ3wlcyB8JXMgfCAlcyB8ICVzIHwgJXMgfCAlcycpICsgJ1xcbicsXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIzLCByZXNvdXJjZS5TdGFja05hbWUpLFxuICAgICAgICAgICAgICAgICAgICBwYWRMZWZ0KDEyLCByZXNvdXJjZS5DcmVhdGVUaW1lKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjAsIHJlc291cmNlLlN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIzLCByZXNvdXJjZS5SZXNvdXJjZVR5cGUpLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydGVuKDQwLCByZXNvdXJjZS5QaHlzaWNhbFJlc291cmNlSWQpLFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5Mb2dpY2FsUmVzb3VyY2VJZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcmVzb3VyY2Ugb2YgcmVzb3VyY2VzKSB7XG4gICAgICAgICAgICAgICAgbGluZXMucHVzaCh1dGlsLmZvcm1hdChjb2xvcnMuYmx1ZSgnfCVzIHwgJXMgfCAlcyB8ICVzIHwgJXMnKSArICdcXG4nLFxuICAgICAgICAgICAgICAgICAgICBwYWRSaWdodCgyMywgcmVzb3VyY2UuU3RhY2tOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjAsIHJlc291cmNlLlN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIzLCByZXNvdXJjZS5SZXNvdXJjZVR5cGUpLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydGVuKDQwLCByZXNvdXJjZS5QaHlzaWNhbFJlc291cmNlSWQpLFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5Mb2dpY2FsUmVzb3VyY2VJZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJsb2NrLmRpc3BsYXlMaW5lcyhsaW5lcylcbiAgICB9XG5cblxuICAgIHByaXZhdGUgYXN5bmMgc3luY1VwZGF0ZVN0YWNrKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIG91dHB1dHNGaWxlOiBib29sZWFuLCBza2lwSWZOb0NoYW5nZXM6IGJvb2xlYW4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgUmVnaW9uSWQ6IGNvbnRlbnRbJ1JlZ2lvbklkJ10sXG4gICAgICAgICAgICAgICAgU3RhY2tJZDogY29udGVudFsnU3RhY2tJZCddXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgc3RhY2tPdXRwdXRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgICAgICBjb25zdCBnZXRPcmlnaW5hbFN0YWNrUmVzdWx0ID0gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZVRpbWUgPSBnZXRPcmlnaW5hbFN0YWNrUmVzdWx0LlVwZGF0ZVRpbWUgPyBnZXRPcmlnaW5hbFN0YWNrUmVzdWx0LlVwZGF0ZVRpbWUgOiBcIlwiXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQudXBkYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAvLyBXYWl0IGZvciB0aGUgc3RhY2sgc3RhdGUgdG8gY2hhbmdlIGFmdGVyIHVwZGF0aW5nIGl0XG4gICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDAwKTtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gbmV3IFJld3JpdGFibGVCbG9jayhzdHJlYW0pO1xuICAgICAgICAgICAgd2l0aERlZmF1bHRQcmludGVyT2JqID0gc2V0SW50ZXJ2YWwoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIGNyZWF0ZVJlc3VsdC5TdGFja0lkLCBibG9jaywgJ3VwZGF0ZScpXG4gICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0TmV3U3RhY2tSZXN1bHQgPSBhd2FpdCBjbGllbnQuZ2V0U3RhY2socGFyYW1zLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZ2V0TmV3U3RhY2tSZXN1bHQuU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1JlYXNvbiA9IGdldE5ld1N0YWNrUmVzdWx0LlN0YXR1c1JlYXNvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFja05hbWUgPSBnZXROZXdTdGFja1Jlc3VsdC5TdGFja05hbWVcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGdldE5ld1N0YWNrUmVzdWx0Lk91dHB1dHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VXBkYXRlVGltZSA9IGdldE5ld1N0YWNrUmVzdWx0LlVwZGF0ZVRpbWUgPyBnZXROZXdTdGFja1Jlc3VsdC5VcGRhdGVUaW1lIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VXBkYXRlVGltZSA9PSBvcmlnaW5hbFVwZGF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YWNrIHVwZGF0ZSBpbiBwcm9ncmVzcyBvciB1cGRhdGUgZGlkIG5vdCBiZWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdDb21wbGV0ZSA9IFJlZ0V4cCgvQ09NUExFVEUvKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdGYWlsZWQgPSBSZWdFeHAoL0ZBSUxFRC8pXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykgfHwgcmVnRmFpbGVkLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgY3JlYXRlUmVzdWx0LlN0YWNrSWQsIGJsb2NrLCAndXBkYXRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnXFxuT3V0cHV0czonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja091dHB1dHNbc3RhY2tOYW1lXSA9IG91dHB1dHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvdXRwdXQgb2Ygb3V0cHV0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG91dHB1dFsnT3V0cHV0VmFsdWUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gb3V0cHV0WydPdXRwdXRLZXknXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBvdXRwdXRbJ0Rlc2NyaXB0aW9uJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCdcXG4gS2V5OiAlcyAgVmFsdWU6ICVzIERlc2NyaXB0aW9uOiAlcycsIGNvbG9ycy5jeWFuKGtleSksIGNvbG9ycy5jeWFuKHZhbHVlKSwgY29sb3JzLmN5YW4oZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dHNGaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKExPQ0FMX1BBVEggKyBPVVRQVVRTX0pTT04pLCBKU09OLnN0cmluZ2lmeShzdGFja091dHB1dHMsIG51bGwsICdcXHQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHN5bmMgdXBkYXRlIHN0YWNrKSBoYXMgZmluaXNoZWQhXFxuc3RhdHVzOiAlc1xcblN0YXR1c1JlYXNvbjogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXNSZWFzb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGdldE5ld1N0YWNrUmVzdWx0LlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgY3JlYXRlUmVzdWx0LlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0NvbXBsZXRlLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudG9TdHJpbmcoKSA9PSAnUk9MTEJBQ0tfQ09NUExFVEUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWdGYWlsZWQuZXhlYyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDUwMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdUaHJvdHRsaW5nLlVzZXInIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZycgfHwgZS5jb2RlID09ICdUaHJvdHRsaW5nLkFQSScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDMwMDAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyB1cGRhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnTm90U3VwcG9ydGVkJyAmJiBlLm1lc3NhZ2Uuc3RhcnRzV2l0aCgnVXBkYXRlIHRoZSBjb21wbGV0ZWx5IHNhbWUgc3RhY2snKSAmJiBza2lwSWZOb0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhjb250ZW50WydTdGFja05hbWUnXSwgY29udGVudFsnU3RhY2tJZCddKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCdUaGUgc3RhY2sgaXMgY29tcGxldGVseSB0aGUgc2FtZSwgdGhlcmUgaXMgbm8gbmVlZCB0byB1cGRhdGUuJylcbiAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgdXBkYXRlIHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHN5bmNEZXN0cm95U3RhY2soY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgY2xpZW50LmRlbGV0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBuZXcgUmV3cml0YWJsZUJsb2NrKHN0cmVhbSk7XG4gICAgICAgICAgICB3aXRoRGVmYXVsdFByaW50ZXJPYmogPSBzZXRJbnRlcnZhbChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgY29udGVudFsnU3RhY2tJZCddLCBibG9jaywgJ2Rlc3Ryb3knKVxuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMDApXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWdpb25JZDogY29udGVudFsnUmVnaW9uSWQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YWNrSWQ6IGNvbnRlbnRbJ1N0YWNrSWQnXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTdGFja1Jlc3VsdCA9IGF3YWl0IGNsaWVudC5nZXRTdGFjayhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBnZXRTdGFja1Jlc3VsdC5TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzUmVhc29uID0gZ2V0U3RhY2tSZXN1bHQuU3RhdHVzUmVhc29uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IGdldFN0YWNrUmVzdWx0LlN0YWNrTmFtZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdDb21wbGV0ZSA9IFJlZ0V4cCgvQ09NUExFVEUvKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdGYWlsZWQgPSBSZWdFeHAoL0ZBSUxFRC8pXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykgfHwgcmVnRmFpbGVkLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgQ2RrVG9vbGtpdC53aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgY29udGVudFsnU3RhY2tJZCddLCBibG9jaywgJ2Rlc3Ryb3knKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgdGFzayhzeW5jIGRlc3Ryb3kgc3RhY2spIGhhcyBmaW5pc2hlZCFcXG5zdGF0dXM6ICVzXFxuU3RhdHVzUmVhc29uOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1c1JlYXNvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoZ2V0U3RhY2tSZXN1bHQuU3RhY2tJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0NvbXBsZXRlLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVnRmFpbGVkLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1Rocm90dGxpbmcuVXNlcicgfHwgZS5jb2RlID09ICdUaHJvdHRsaW5nJyB8fCBlLmNvZGUgPT0gJ1Rocm90dGxpbmcuQVBJJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMzAwMDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIGRlc3Ryb3kgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgZGVzdHJveSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWZmT3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIHN0cmVhbT86IE5vZGVKUy5Xcml0YWJsZVN0cmVhbTtcbiAgICBjb250ZXh0TGluZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXBsb3lPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIE9ubHkgc2VsZWN0IHRoZSBnaXZlbiBzdGFja1xuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBleGNsdXNpdmVseT86IGJvb2xlYW47XG4gICAgcGFyYW1ldGVycz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9O1xuICAgIHRpbWVvdXQ6IHN0cmluZztcbiAgICBzeW5jOiBib29sZWFuO1xuICAgIG91dHB1dHNGaWxlOiBib29sZWFuO1xuICAgIHNraXBJZk5vQ2hhbmdlczogYm9vbGVhbjtcbiAgICBkaXNhYmxlUm9sbGJhY2s6IGJvb2xlYW47XG4gICAgcmVzb3VyY2VHcm91cElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzdHJveU9wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuICAgIHF1aWV0PzogYm9vbGVhbjtcbiAgICBzeW5jOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50T3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lOiBzdHJpbmdbXTtcbiAgICBsb2dpY2FsUmVzb3VyY2VJZDogc3RyaW5nO1xuICAgIHBhZ2VOdW1iZXI6IHN0cmluZztcbiAgICBwYWdlU2l6ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE91dFB1dE9wdGlvbnMge1xuICAgIHN0YWNrTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlT3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdFN0YWNrT3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG4gICAgcGFnZU51bWJlcjogc3RyaW5nO1xuICAgIHBhZ2VTaXplOiBzdHJpbmc7XG4gICAgYWxsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnU2V0T3B0aW9ucyB7XG4gICAgZ2xvYmFsOiBzdHJpbmc7XG4gICAgZW5kcG9pbnQ6IHN0cmluZztcbiAgICByZWdpb246IHN0cmluZztcbiAgICBtb2RlOiBzdHJpbmc7XG4gICAgYWs6IHN0cmluZztcbiAgICBzazogc3RyaW5nO1xuICAgIHN0czogc3RyaW5nO1xuICAgIHJhbVJvbGVBcm46IHN0cmluZztcbiAgICByb2xlU2Vzc2lvbk5hbWU6IHN0cmluZztcbiAgICByYW1Sb2xlTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRDb25maWdPcHRpb25zIHtcbiAgICBnbG9iYWw/OiBzdHJpbmc7XG4gICAgbG9hZEZpbGVQYXRoOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBUYWcge1xuICAgIHJlYWRvbmx5IEtleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IFZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUFuZFVwZGF0ZUxhbmd1YWdlSW5mbyhsYW5ndWFnZTogc3RyaW5nKSB7XG4gICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBQUk9KRUNUX0NPTkZJRyk7XG4gICAgbGV0IGZpbGVDb250ZW50OiBhbnk7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgIGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICBsZXQgaW5mbyA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpO1xuICAgICAgICBpbmZvWydsYW5ndWFnZUluZm8nXSA9IGxhbmd1YWdlO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShpbmZvLCBudWxsLCAnXFx0JykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRMYW5ndWFnZUluZm8oKSB7XG4gICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBQUk9KRUNUX0NPTkZJRyk7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgIGxldCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpWydsYW5ndWFnZUluZm8nXS50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZExlZnQobjogbnVtYmVyLCB4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh4KSB7XG4gICAgICAgIHJldHVybiAnICcucmVwZWF0KE1hdGgubWF4KDAsIG4gLSB4Lmxlbmd0aCkpICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJydcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZFJpZ2h0KG46IG51bWJlciwgeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoeCkge1xuICAgICAgICByZXR1cm4geCArICcgJy5yZXBlYXQoTWF0aC5tYXgoMCwgbiAtIHgubGVuZ3RoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvcnRlbihtYXhXaWR0aDogbnVtYmVyLCBwOiBzdHJpbmcpIHtcbiAgICBpZiAocC5sZW5ndGggPD0gbWF4V2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIGNvbnN0IGhhbGYgPSBNYXRoLmZsb29yKChtYXhXaWR0aCAtIDMpIC8gMik7XG4gICAgcmV0dXJuIHAuc3Vic3RyKDAsIGhhbGYpICsgJy4uLicgKyBwLnN1YnN0cihwLmxlbmd0aCAtIGhhbGYpO1xufSJdfQ==