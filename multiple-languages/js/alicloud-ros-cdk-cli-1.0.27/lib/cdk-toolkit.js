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
                                await this.syncUpdateStack(client, content, requestOptions, outputs, skipIfNoChanges, stackName, localStackInfo, stackUpdateTime);
                            }
                            await this.rosUpdateStack(client, content, requestOptions, stackName, localStackInfo, stackUpdateTime);
                            process_1.exit(0);
                        }
                        catch (e) {
                            if (e.code == 'NotSupported' && e.message.startsWith('Update the completely same stack') && skipIfNoChanges) {
                                await this.updateStackInfo(stackName, stackInfo.StackId);
                                logging_1.success('The stack is completely the same, there is no need to update.');
                                process_1.exit(0);
                            }
                            else {
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
                        await this.syncDeployStack(client, content, requestOptions, outputs, resourceGroupId, stackName);
                    }
                    await this.rosCreateStack(client, content, requestOptions, resourceGroupId, stackName);
                    process_1.exit(0);
                }
                catch (e) {
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
                        await this.syncDeployStack(client, content, requestOptions, outputs, resourceGroupId, stackName);
                    }
                    await this.rosCreateStack(client, content, requestOptions, resourceGroupId, stackName);
                    process_1.exit(0);
                }
                catch (e) {
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
    async syncDeployStack(client, content, requestOptions, outputsFile, resourceGroupId, stackName) {
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
    async syncUpdateStack(client, content, requestOptions, outputsFile, skipIfNoChanges, stackName, localStackInfo, stackUpdateTime) {
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
    async rosUpdateStack(client, content, requestOptions, stackName, localStackInfo, stackUpdateTime) {
        let updateResultRequestId;
        let updateErrorRequestId;
        let networkErrorException;
        let updateResult;
        try {
            updateResult = await client.updateStack(content, requestOptions);
            updateResultRequestId = updateResult.RequestId;
        }
        catch (e) {
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
    async rosCreateStack(client, content, requestOptions, resourceGroupId, stackName) {
        let createResultRequestId;
        let createErrorRequestId;
        let networkErrorException;
        let createResult;
        try {
            createResult = await client.createStack(content, requestOptions);
            createResultRequestId = createResult.RequestId;
        }
        catch (e) {
            createErrorRequestId = e.data.RequestId;
            if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                networkErrorException = true;
            }
            else if (createErrorRequestId) {
                logging_1.error('fail to sync update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, createErrorRequestId, e.message);
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
                    createErrorRequestId = e.data.RequestId;
                    if (e.code == 'ServiceUnavailable' || e.code == 'LastTokenProcessing') {
                        networkErrorException = true;
                    }
                    else if (createErrorRequestId) {
                        logging_1.error('fail to sync update stack: ErrorCode: %s\nRequestedId: %s\nErrorMessage:%s', e.code, createErrorRequestId, e.message);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRvb2xraXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstdG9vbGtpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4Q0FBOEM7QUFDOUMsNkJBQTZCO0FBQzdCLDBDQUErQztBQUMvQywrQkFBNEI7QUFDNUIsNENBQStDO0FBRS9DLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ3RELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlEQUE0QztBQUM1Qyx1REFBMEQ7QUFDMUQseURBQThHO0FBRTlHLHVDQUErRDtBQUMvRCx5Q0FBeUQ7QUFDekQscUNBQTZCO0FBQzdCLGlDQUFzQztBQUN0QywyQ0FBaUQ7QUFDakQsK0JBQStCO0FBRS9CLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRW5ELE1BQU0sV0FBVyxHQUFHLHFCQUFxQixDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQztBQUN4QixNQUFNLFdBQVcsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3ZDLE1BQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDO0FBQ3JDLE1BQU0sc0JBQXNCLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLE1BQU0sZUFBZSxHQUFHLHNCQUFzQixDQUFDO0FBQy9DLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUMxQixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDNUIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDO0FBQzlCLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQztBQUNoQyxNQUFN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UEQsMEJBT0M7QUFFRCxTQUFnQixRQUFRLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDekMsSUFBSSxDQUFDLEVBQUU7UUFDSCxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNwRDtTQUFNO1FBQ0gsT0FBTyxFQUFFLENBQUE7S0FDWjtBQUNMLENBQUM7QUFORCw0QkFNQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxRQUFnQixFQUFFLENBQVM7SUFDL0MsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLFFBQVEsRUFBRTtRQUN0QixPQUFPLENBQUMsQ0FBQztLQUNaO0lBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDakUsQ0FBQztBQU5ELDBCQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ3V0aWwnO1xuaW1wb3J0IHtkZWNpcGhlciwgY2lwaGVyfSBmcm9tICcuL3V0aWwvY2lwaGVyJztcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICd1dGlsJztcbmltcG9ydCB7UmV3cml0YWJsZUJsb2NrfSBmcm9tICcuL3V0aWwvZGlzcGxheSc7XG5cbmNvbnN0IHJvc0NsaWVudCA9IHJlcXVpcmUoJ0BhbGljbG91ZC9yb3MtMjAxOS0wOS0xMCcpO1xuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbmltcG9ydCB7ZXhlYyBhcyBfZXhlY30gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgQ3JlZGVudGlhbHMsIHtDb25maWd9IGZyb20gJ0BhbGljbG91ZC9jcmVkZW50aWFscyc7XG5pbXBvcnQge0Nsb3VkQXNzZW1ibHksIERlZmF1bHRTZWxlY3Rpb24sIEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24sIFN0YWNrQ29sbGVjdGlvbn0gZnJvbSAnLi9hcGkvY2xvdWQtYXNzZW1ibHknO1xuaW1wb3J0IHtDbG91ZEV4ZWN1dGFibGV9IGZyb20gJy4vYXBpL2Nsb3VkLWV4ZWN1dGFibGUnO1xuaW1wb3J0IHtkYXRhLCBlcnJvciwgcHJpbnQsIHN1Y2Nlc3MsIHdhcm5pbmd9IGZyb20gJy4vbG9nZ2luZyc7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb24sIFBST0pFQ1RfQ09ORklHfSBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCB7ZXhpdH0gZnJvbSAncHJvY2Vzcyc7XG5pbXBvcnQge3ByaW50U3RhY2tEaWZmfSBmcm9tICcuL2RpZmYnO1xuaW1wb3J0IHtkZXNlcmlhbGl6ZVN0cnVjdHVyZX0gZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHtwcm9taXNpZnl9IGZyb20gJ3V0aWwnO1xuXG5jb25zdCBnZW5lcmF0ZVNhZmVJZCA9IHJlcXVpcmUoJ2dlbmVyYXRlLXNhZmUtaWQnKTtcblxuY29uc3QgQ09ORklHX05BTUUgPSAnYWNjb3VudC5jb25maWcuanNvbic7XG5jb25zdCBMT0NBTF9QQVRIID0gJy4vJztcbmNvbnN0IEdMT0JBTF9QQVRIID0gX19kaXJuYW1lICsgJy8uLi8nO1xuY29uc3QgU1RBQ0tfSU5GTyA9ICdzdGFjay5pbmZvLmpzb24nO1xuY29uc3QgREVQTE9ZX1NUQUNLX0lEX0xFTkdUSCA9IDM2O1xuY29uc3QgQ0xJX0NPTkZJR19GSUxFID0gJy8uYWxpeXVuL2NvbmZpZy5qc29uJztcbmNvbnN0IElOSVRfU1RBQ0sgPSAnaW5pdCc7XG5jb25zdCBTWU5USF9TVEFDSyA9ICdzeW50aCc7XG5jb25zdCBERVBMT1lfU1RBQ0sgPSAnZGVwbG95JztcbmNvbnN0IERFU1RST1lfU1RBQ0sgPSAnZGVzdHJveSc7XG5jb25zdCBQQUNLQUdFX0pTT04gPSBfX2Rpcm5hbWUgKyAnLy4uL3BhY2thZ2UuanNvbic7XG5jb25zdCBPVVRQVVRTX0pTT04gPSAnc3RhY2sub3V0cHV0cy5qc29uJztcblxuY29uc3QgZXhlYyA9IHByb21pc2lmeShfZXhlYyk7XG5cbmNvbnN0IHJlcXVlc3RPcHRpb25zOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdVc2VyLUFnZW50JzogXCJST1MtQ0xJLVwiICsgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoUEFDS0FHRV9KU09OKS50b1N0cmluZygpKVsndmVyc2lvbiddICsgXCI6OlwiICsgcmVhZExhbmd1YWdlSW5mbygpXG4gICAgfSxcbiAgICB0aW1lb3V0OiA5MDAwMFxufTtcblxuY29uc3Qgc2xlZXAgPSBmdW5jdGlvbiAobXM6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufTtcblxuXG5jb25zdCBzdHJlYW0gPSBwcm9jZXNzLnN0ZG91dDtcblxuXG5sZXQgd2l0aERlZmF1bHRQcmludGVyT2JqOiBhbnk7XG5cblxuZXhwb3J0IGludGVyZmFjZSBDZGtUb29sa2l0UHJvcHMge1xuICAgIC8qKlxuICAgICAqIFRoZSBDbG91ZCBFeGVjdXRhYmxlXG4gICAgICovXG4gICAgY2xvdWRFeGVjdXRhYmxlOiBDbG91ZEV4ZWN1dGFibGU7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGJlIHZlcmJvc2VcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgdmVyYm9zZT86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBEb24ndCBzdG9wIG9uIGVycm9yIG1ldGFkYXRhXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGlnbm9yZUVycm9ycz86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUcmVhdCB3YXJuaW5ncyBpbiBtZXRhZGF0YSBhcyBlcnJvcnNcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgc3RyaWN0PzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gKHNldHRpbmdzIGFuZCBjb250ZXh0KVxuICAgICAqL1xuICAgIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb247XG59XG5cbi8qKlxuICogVG9vbGtpdCBsb2dpY1xuICpcbiAqIFRoZSB0b29sa2l0IHJ1bnMgdGhlIGBjbG91ZEV4ZWN1dGFibGVgIHRvIG9idGFpbiBhIGNsb3VkIGFzc2VtYmx5XG4gKlxuICovXG5leHBvcnQgY2xhc3MgQ2RrVG9vbGtpdCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0SnNvbihmaWxlTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgYWxsb3dlZEVtcHR5OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gTE9DQUxfUEFUSCArIGZpbGVOYW1lO1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZSlba2V5XTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlTmFtZSA9PT0gU1RBQ0tfSU5GTykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBmaWxlUGF0aCA9IEdMT0JBTF9QQVRIICsgZmlsZU5hbWU7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlKVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWxsb3dlZEVtcHR5KSB7XG4gICAgICAgICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIHRvIHNldCB5b3VyIGFjY291bnQgY29uZmlndXJhdGlvbiBmaXJzdGx5IVwiKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb3BzOiBDZGtUb29sa2l0UHJvcHMpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0Um9zQ2xpZW50KCkge1xuICAgICAgICBsZXQgbW9kZVR5cGUgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICd0eXBlJywgdHJ1ZSlcbiAgICAgICAgbGV0IGVuZHBvaW50ID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnZW5kcG9pbnQnLCB0cnVlKVxuICAgICAgICBsZXQgY29uZmlnSW5mbzogYW55O1xuICAgICAgICBsZXQgY2xpZW50O1xuICAgICAgICBzd2l0Y2ggKG1vZGVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdlY3NfcmFtX3JvbGUnOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyb2xlTmFtZScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdHMnOlxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlJZCcpKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlTZWNyZXQnKSksXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3NlY3VyaXR5VG9rZW4nKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JhbV9yb2xlX2Fybic6XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleUlkJykpLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFybjogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncm9sZUFybicpLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JvbGVTZXNzaW9uTmFtZScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhY2Nlc3Nfa2V5JzpcbiAgICAgICAgICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleUlkJykpLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVuZHBvaW50ID0gZW5kcG9pbnQgPyBlbmRwb2ludCA6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nO1xuICAgICAgICBsZXQgbmV3QWNjZXNzS2V5SWQ6IHN0cmluZztcbiAgICAgICAgbGV0IG5ld0FjY2Vzc0tleVNlY3JldDogc3RyaW5nO1xuICAgICAgICBsZXQgbmV3U2VjdXJpdHlUb2tlbjogc3RyaW5nO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ld0FjY2Vzc0tleUlkID0gbmV3QWNjZXNzS2V5SWQgPyBuZXdBY2Nlc3NLZXlJZCA6IHByb2Nlc3MuZW52LkFDQ0VTU19LRVlfSURcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBuZXdBY2Nlc3NLZXlTZWNyZXQgPSBuZXdBY2Nlc3NLZXlTZWNyZXQgPyBuZXdBY2Nlc3NLZXlTZWNyZXQgOiBwcm9jZXNzLmVudi5BQ0NFU1NfS0VZX1NFQ1JFVFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ld1NlY3VyaXR5VG9rZW4gPSBuZXdTZWN1cml0eVRva2VuID8gbmV3U2VjdXJpdHlUb2tlbiA6IHByb2Nlc3MuZW52LlNFQ1VSSVRZX1RPS0VOXG4gICAgICAgIGlmIChjb25maWdJbmZvKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWQgPSBuZXcgQ3JlZGVudGlhbHMoY29uZmlnSW5mbyk7XG4gICAgICAgICAgICAgICAgbmV3QWNjZXNzS2V5SWQgPSBhd2FpdCBjcmVkLmdldEFjY2Vzc0tleUlkKCk7XG4gICAgICAgICAgICAgICAgbmV3QWNjZXNzS2V5U2VjcmV0ID0gYXdhaXQgY3JlZC5nZXRBY2Nlc3NLZXlTZWNyZXQoKTtcbiAgICAgICAgICAgICAgICBuZXdTZWN1cml0eVRva2VuID0gYXdhaXQgY3JlZC5nZXRTZWN1cml0eVRva2VuKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdXQU5STklORzogUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgY3JlZGVudGlhbCBpbmZvcm1hdGlvbiB5b3UgaW1wb3J0IGZyb20gQ0xJIGNvbmZpZyEnICsgZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmV3QWNjZXNzS2V5SWQgfHwgIW5ld0FjY2Vzc0tleVNlY3JldCkge1xuICAgICAgICAgICAgZXJyb3IoXCJQbGVhc2UgdXNlICdyb3MtY2RrIGNvbmZpZyAoLWcpJyBvciBzZXQgZW52aXJvbm1lbnQgdG8gc2V0IHlvdXIgYWNjb3VudCBjb25maWd1cmF0aW9uIGZpcnN0bHkhXCIpO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfSBlbHNlIGlmICghbmV3U2VjdXJpdHlUb2tlbikge1xuICAgICAgICAgICAgY2xpZW50ID0gbmV3IHJvc0NsaWVudCh7XG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGVuZHBvaW50LFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBuZXdBY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IG5ld0FjY2Vzc0tleVNlY3JldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGllbnQgPSBuZXcgcm9zQ2xpZW50KHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IG5ld0FjY2Vzc0tleUlkLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogbmV3QWNjZXNzS2V5U2VjcmV0LFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IG5ld1NlY3VyaXR5VG9rZW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBodHRwTW9kdWxlID0gY2xpZW50LmVuZHBvaW50LnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykgPyBodHRwcyA6IGh0dHA7XG4gICAgICAgIGNsaWVudC5rZWVwQWxpdmVBZ2VudCA9IG5ldyBodHRwTW9kdWxlLkFnZW50KHtcbiAgICAgICAgICAgIGtlZXBBbGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGtlZXBBbGl2ZU1zZWNzOiAxNTAwMFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29uZmlnKGdsb2JhbDogYm9vbGVhbikge1xuICAgICAgICBsZXQgY29uZmlnU2F2ZVBhdGggPSAoZ2xvYmFsID8gR0xPQkFMX1BBVEggOiBMT0NBTF9QQVRIKSArIENPTkZJR19OQU1FO1xuICAgICAgICBsZXQgbW9kZVR5cGUgPSBbJ0FLJywgJ1N0c1Rva2VuJywgJ1JhbVJvbGVBcm4nLCAnRWNzUmFtUm9sZSddXG4gICAgICAgIGxldCBlbmRwb2ludCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignZW5kcG9pbnQob3B0aW9uYWwsIGRlZmF1bHQ6aHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tKTonLCB7ZGVmYXVsdElucHV0OiAnaHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tJ30pO1xuICAgICAgICBsZXQgcmVnaW9uSWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2RlZmF1bHRSZWdpb25JZChvcHRpb25hbCwgZGVmYXVsdDpjbi1oYW5nemhvdSk6Jywge2RlZmF1bHRJbnB1dDogJ2NuLWhhbmd6aG91J30pO1xuICAgICAgICBsZXQgbW9kZUluZGV4ID0gcmVhZGxpbmVTeW5jLmtleUluU2VsZWN0KG1vZGVUeXBlLCAnQXV0aGVudGljYXRlIG1vZGU6Jyk7XG4gICAgICAgIGxldCBpbnB1dENvbmZpZ0luZm86IGFueSA9IHt9O1xuICAgICAgICBsZXQgY2hlY2tDb21tYW5kOiBzdHJpbmc7XG4gICAgICAgIGxldCBjdXJsQ29tbWFuZDogc3RyaW5nO1xuICAgICAgICBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgICAgICAgICAgICAgIGNoZWNrQ29tbWFuZCA9ICdwb3dlcnNoZWxsIC1Db21tYW5kIFwiKGN1cmwgLVVSaSBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLykuU3RhdHVzQ29kZVwiJztcbiAgICAgICAgICAgICAgICBjdXJsQ29tbWFuZCA9ICdwb3dlcnNoZWxsIC1Db21tYW5kIFwiKGN1cmwgLVVSaSBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLykuQ29udGVudFwiJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hlY2tDb21tYW5kID0gJ2N1cmwgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8gLW8gL2Rldi9udWxsIC1zIC13ICV7aHR0cF9jb2RlfSc7XG4gICAgICAgICAgICAgICAgY3VybENvbW1hbmQgPSAnY3VybCBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtzdGRvdXQ6IGNoZWNrU3Rkb3V0fSA9IGF3YWl0IGV4ZWMoY2hlY2tDb21tYW5kKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tTdGRvdXQudHJpbSgpICE9PSAnMjAwJykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBVc2UgRWNzUmFtUm9sZSBjb25maWcsIFBsZWFzZSBiaW5kIEVjc1JhbVJvbGUgdG8gdGhlIGhvc3QuJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBVc2UgRWNzUmFtUm9sZSBjb25maWcsIFBsZWFzZSBiaW5kIEVjc1JhbVJvbGUgdG8gdGhlIGhvc3QhJyArIGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7c3Rkb3V0OiBjdXJsU3Rkb3V0fSA9IGF3YWl0IGV4ZWMoY3VybENvbW1hbmQpO1xuICAgICAgICAgICAgbGV0IHJvbGVOYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGByb2xlTmFtZSwgVGhlIGNvbmZpZ3VyZWQgcm9sZSBvZiB0aGUgaG9zdDogWyR7Y3VybFN0ZG91dC50cmltKCl9XWAsIHtkZWZhdWx0SW5wdXQ6IGN1cmxTdGRvdXQudHJpbSgpfSk7XG4gICAgICAgICAgICBpbnB1dENvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgcm9sZU5hbWU6IHJvbGVOYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignYWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignYWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIGxldCBzZWN1cml0eVRva2VuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdzZWN1cml0eVRva2VuOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RzJyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleUlkKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlTZWNyZXQpLFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGNpcGhlcihzZWN1cml0eVRva2VuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignYWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgICAgICAgbGV0IGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignYWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIGxldCByb2xlQXJuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdyb2xlQXJuKGVnOiBhY3M6cmFtOjoqKioqKio6cm9sZS8qKioqKiopOicpO1xuICAgICAgICAgICAgbGV0IHJvbGVTZXNzaW9uTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbigncm9sZVNlc3Npb25OYW1lOicpO1xuICAgICAgICAgICAgaW5wdXRDb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyYW1fcm9sZV9hcm4nLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5SWQpLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleVNlY3JldCksXG4gICAgICAgICAgICAgICAgcm9sZUFybjogcm9sZUFybixcbiAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHJvbGVTZXNzaW9uTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnQUsnKSB7XG4gICAgICAgICAgICBsZXQgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2FjY2Vzc0tleUlkOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2FjY2Vzc0tleVNlY3JldDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICAgICAgICBpbnB1dENvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FjY2Vzc19rZXknLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIoYWNjZXNzS2V5SWQpLFxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKGFjY2Vzc0tleVNlY3JldClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBjZXJ0aWZpY2F0aW9uIG1ldGhvZCBtdXN0IGJlIHNlbGVjdGVkJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0Q29uZmlnSW5mby5lbmRwb2ludCA9IGVuZHBvaW50XG4gICAgICAgIGlucHV0Q29uZmlnSW5mby5yZWdpb25JZCA9IHJlZ2lvbklkXG4gICAgICAgIGxldCBmaWxlID0gcGF0aC5qb2luKGNvbmZpZ1NhdmVQYXRoKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlLCBKU09OLnN0cmluZ2lmeShpbnB1dENvbmZpZ0luZm8sIG51bGwsICdcXHQnKSk7XG4gICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgWW91ciBjZGsgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkhYCk7XG4gICAgICAgIGV4aXQoMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbmZpZ1NldChvcHRpb25zOiBDb25maWdTZXRPcHRpb25zKSB7XG4gICAgICAgIGxldCBjb25maWdTYXZlUGF0aCA9IChvcHRpb25zLmdsb2JhbCA/IEdMT0JBTF9QQVRIIDogTE9DQUxfUEFUSCkgKyBDT05GSUdfTkFNRTtcbiAgICAgICAgbGV0IG1vZGVUeXBlID0gb3B0aW9ucy5tb2RlO1xuICAgICAgICBsZXQgY29uZmlnSW5mbzogYW55ID0ge307XG4gICAgICAgIGxldCBhayA9IG9wdGlvbnMuYWsgPyBvcHRpb25zLmFrIDogJyc7XG4gICAgICAgIGxldCBzayA9IG9wdGlvbnMuc2sgPyBvcHRpb25zLnNrIDogJyc7XG4gICAgICAgIGxldCBzdHNUb2tlbiA9IG9wdGlvbnMuc3RzID8gb3B0aW9ucy5zdHMgOiAnJztcbiAgICAgICAgbGV0IHJhbVJvbGVBcm4gPSBvcHRpb25zLnJhbVJvbGVBcm4gPyBvcHRpb25zLnJhbVJvbGVBcm4gOiAnJztcbiAgICAgICAgbGV0IHJvbGVTZXNzaW9uTmFtZSA9IG9wdGlvbnMucm9sZVNlc3Npb25OYW1lID8gb3B0aW9ucy5yb2xlU2Vzc2lvbk5hbWUgOiAnJztcbiAgICAgICAgbGV0IHJhbVJvbGVOYW1lID0gb3B0aW9ucy5yYW1Sb2xlTmFtZSA/IG9wdGlvbnMucmFtUm9sZU5hbWUgOiAnJztcbiAgICAgICAgaWYgKG1vZGVUeXBlID09PSAnQUsnKSB7XG4gICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFrKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihzaylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGUgPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhayksXG4gICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIoc2spLFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGNpcGhlcihzdHNUb2tlbilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGUgPT09ICdSYW1Sb2xlQXJuJykge1xuICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKGFrKSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihzayksXG4gICAgICAgICAgICAgICAgcm9sZUFybjogcmFtUm9sZUFybixcbiAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHJvbGVTZXNzaW9uTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XG4gICAgICAgICAgICBjb25maWdJbmZvID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlY3NfcmFtX3JvbGUnLFxuICAgICAgICAgICAgICAgIHJvbGVOYW1lOiByYW1Sb2xlTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGF1dGhlbnRpY2F0ZSBtb2RlIG11c3QgYmUgaW4gKEFLfFN0c1Rva2VufFJhbVJvbGVBcm58RWNzUmFtUm9sZSknLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbGUgPSBwYXRoLmpvaW4oY29uZmlnU2F2ZVBhdGgpO1xuICAgICAgICBjb25maWdJbmZvLnJlZ2lvbklkID0gb3B0aW9ucy5yZWdpb247XG4gICAgICAgIGNvbmZpZ0luZm8uZW5kcG9pbnQgPSBvcHRpb25zLmVuZHBvaW50O1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KGNvbmZpZ0luZm8sIG51bGwsICdcXHQnKSk7XG4gICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgWW91ciBjZGsgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkhYCk7XG4gICAgICAgIGV4aXQoMCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYXN5bmMgbG9hZENsaUNvbmZpZyhvcHRpb25zOiBMb2FkQ29uZmlnT3B0aW9ucykge1xuICAgICAgICBsZXQgY29uZmlnU2F2ZVBhdGggPSAob3B0aW9ucy5nbG9iYWwgPyBHTE9CQUxfUEFUSCA6IExPQ0FMX1BBVEgpICsgQ09ORklHX05BTUU7XG4gICAgICAgIGxldCBjb25maWd1cmVJbmZvcyA9IGF3YWl0IHRoaXMuZ2V0Q2xpQ29uZmlnKG9wdGlvbnMubG9hZEZpbGVQYXRoKVxuICAgICAgICBsZXQgbW9kZVR5cGUgPSBPYmplY3Qua2V5cyhjb25maWd1cmVJbmZvcyk7XG4gICAgICAgIGxldCBtb2RlSW5kZXggPSByZWFkbGluZVN5bmMua2V5SW5TZWxlY3QobW9kZVR5cGUsICdTZWxlY3QgYXV0aGVudGljYXRlIG1vZGU6Jyk7XG4gICAgICAgIGxldCBwcm9maWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBwcm9maWxlQ29uZmlnOiBhbnkgPSB7fTtcbiAgICAgICAgaWYgKG1vZGVJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGNlcnRpZmljYXRpb24gbWV0aG9kIG11c3QgYmUgc2VsZWN0ZWQnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0FLJykge1xuICAgICAgICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuQUsubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdTdHNUb2tlbicpIHtcbiAgICAgICAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLlN0c1Rva2VuLm1hcCgoaXRlbTogeyBuYW1lOiBhbnk7IH0pID0+IGl0ZW0ubmFtZSlcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgICAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLlJhbVJvbGVBcm4ubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgICAgICB9IGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdFY3NSYW1Sb2xlJykge1xuICAgICAgICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuRWNzUmFtUm9sZS5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb2ZpbGVJbmRleCA9IHJlYWRsaW5lU3luYy5rZXlJblNlbGVjdChwcm9maWxlTmFtZXMsICdTZWxlY3QgQXV0aGVudGljYXRlIHByb2ZpbGUgbmFtZTonKTtcbiAgICAgICAgaWYgKHByb2ZpbGVJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGNlcnRpZmljYXRpb24gcHJvZmlsZSBtdXN0IGJlIHNlbGVjdGVkJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBleGl0KDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbmRwb2ludCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2VuZHBvaW50JywgdHJ1ZSlcbiAgICAgICAgbGV0IHJlZ2lvbklkO1xuICAgICAgICBsZXQgY29uZmlnSW5mbzogYW55ID0ge307XG4gICAgICAgIGVuZHBvaW50ID0gZW5kcG9pbnQgPyBlbmRwb2ludCA6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nO1xuICAgICAgICBzd2l0Y2ggKG1vZGVUeXBlW21vZGVJbmRleF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ0FLJzpcbiAgICAgICAgICAgICAgICBwcm9maWxlQ29uZmlnID0gY29uZmlndXJlSW5mb3MuQUsuZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddIHx8ICFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhY2Nlc3NLZXlJZCBvciBhY2Nlc3NLZXlTZWNyZXQgQ2Fubm90IGJlIGVtcHR5IScsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbmZpZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1N0c1Rva2VuJzpcbiAgICAgICAgICAgICAgICBwcm9maWxlQ29uZmlnID0gY29uZmlndXJlSW5mb3MuU3RzVG9rZW4uZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddIHx8ICFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSB8fCAhcHJvZmlsZUNvbmZpZ1snc2VjdXJpdHlUb2tlbiddKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGFjY2Vzc0tleUlkLCBhY2Nlc3NLZXlTZWNyZXQgb3Igc2VjdXJpdHlUb2tlbiBDYW5ub3QgYmUgZW1wdHkhJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddKSxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlUb2tlbjogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ3NlY3VyaXR5VG9rZW4nXSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUmFtUm9sZUFybic6XG4gICAgICAgICAgICAgICAgcHJvZmlsZUNvbmZpZyA9IGNvbmZpZ3VyZUluZm9zLlJhbVJvbGVBcm4uZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlJZCddIHx8ICFwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSB8fCAhcHJvZmlsZUNvbmZpZ1sncm9sZUFybiddIHx8ICFwcm9maWxlQ29uZmlnWydyb2xlU2Vzc2lvbk5hbWUnXSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhY2Nlc3NLZXlJZCwgYWNjZXNzS2V5U2VjcmV0LCByb2xlQXJuIG9yIHJvbGVTZXNzaW9uTmFtZSBDYW5ub3QgYmUgZW1wdHkhJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JhbV9yb2xlX2FybicsXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSksXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddKSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFybjogcHJvZmlsZUNvbmZpZ1sncm9sZUFybiddLFxuICAgICAgICAgICAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHByb2ZpbGVDb25maWdbJ3JvbGVTZXNzaW9uTmFtZSddXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Vjc1JhbVJvbGUnOlxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5FY3NSYW1Sb2xlLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmICghcHJvZmlsZUNvbmZpZ1sncm9sZU5hbWUnXSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCByb2xlTmFtZSBDYW5ub3QgYmUgZW1wdHkhJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiBwcm9maWxlQ29uZmlnWydyb2xlTmFtZSddXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZWdpb25JZCA9IHByb2ZpbGVDb25maWdbJ3JlZ2lvbiddID8gcHJvZmlsZUNvbmZpZ1sncmVnaW9uJ10gOiAnY24taGFuZ3pob3UnO1xuICAgICAgICBjb25maWdJbmZvLnJlZ2lvbklkID0gcmVnaW9uSWRcbiAgICAgICAgY29uZmlnSW5mby5lbmRwb2ludCA9IGVuZHBvaW50XG4gICAgICAgIGxldCBmaWxlID0gcGF0aC5qb2luKGNvbmZpZ1NhdmVQYXRoKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlLCBKU09OLnN0cmluZ2lmeShjb25maWdJbmZvLCBudWxsLCAnXFx0JykpO1xuICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFlvdXIgY2RrIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gbG9hZCBmcm9tIEFsaXl1biBDbGkgY29uZmlndXJhdGlvbiBzYXZlZCBzdWNjZXNzZnVsbHkgJXMgJXMhYCwgbW9kZVR5cGVbbW9kZUluZGV4XSwgcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICBleGl0KDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsaXN0KHNlbGVjdG9yczogc3RyaW5nW10pIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yTGlzdChzZWxlY3RvcnMpO1xuICAgICAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCk7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gc3RhY2tJbmZvLnN0YXR1c1xuICAgICAgICAgICAgZGF0YShzdGFjay5pZCwgc3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3ludGhlc2l6ZSB0aGUgZ2l2ZW4gc2V0IG9mIHN0YWNrcyAoY2FsbGVkIHdoZW4gdGhlIHVzZXIgcnVucyAnY2RrIHN5bnRoJylcbiAgICAgKlxuICAgICAqIElOUFVUOiBTdGFjayBuYW1lcyBjYW4gYmUgc3VwcGxpZWQgdXNpbmcgYSBnbG9iIGZpbHRlci4gSWYgbm8gc3RhY2tzIGFyZVxuICAgICAqIGdpdmVuLCBhbGwgc3RhY2tzIGZyb20gdGhlIGFwcGxpY2F0aW9uIGFyZSBpbXBsaWN0bHkgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBPVVRQVVQ6IElmIG1vcmUgdGhhbiBvbmUgc3RhY2sgZW5kcyB1cCBiZWluZyBzZWxlY3RlZCwgYW4gb3V0cHV0IGRpcmVjdG9yeVxuICAgICAqIHNob3VsZCBiZSBzdXBwbGllZCwgd2hlcmUgdGhlIHRlbXBsYXRlcyB3aWxsIGJlIHdyaXR0ZW4uXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHN5bnRoKHN0YWNrTmFtZXM6IHN0cmluZ1tdLCBleGNsdXNpdmVseTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRpZmYoc3RhY2tOYW1lcywgZXhjbHVzaXZlbHkpO1xuXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBzaW5nbGUgc3RhY2ssIHByaW50IGl0IHRvIFNURE9VVFxuICAgICAgICBpZiAoc3RhY2tzLnN0YWNrQ291bnQgPT09IDEpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrcy5maXJzdFN0YWNrLmlkLCBTWU5USF9TVEFDSyk7XG4gICAgICAgICAgICByZXR1cm4gc3RhY2tzLmZpcnN0U3RhY2sudGVtcGxhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFjay5pZCwgU1lOVEhfU1RBQ0spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNJbnRlZ01vZGUgPSBwcm9jZXNzLmVudi5DREtfSU5URUdfTU9ERSA9PT0gJzEnO1xuICAgICAgICBpZiAoaXNJbnRlZ01vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFja3Muc3RhY2tBcnRpZmFjdHMubWFwKChzKSA9PiBzLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdCBvdXRwdXR0aW5nIHRlbXBsYXRlIHRvIHN0ZG91dCwgbGV0J3MgZXhwbGFpbiB0aGluZ3MgdG8gdGhlIHVzZXIgYSBsaXR0bGUgYml0Li4uXG4gICAgICAgIHN1Y2Nlc3MoYFN1Y2Nlc3NmdWxseSBzeW50aGVzaXplZCB0byAke2NvbG9ycy5ibHVlKHBhdGgucmVzb2x2ZShzdGFja3MuYXNzZW1ibHkuZGlyZWN0b3J5KSl9YCk7XG4gICAgICAgIHByaW50KFxuICAgICAgICAgICAgYFN1cHBseSBhIHN0YWNrIGlkICgke3N0YWNrcy5zdGFja0FydGlmYWN0cy5tYXAoKHMpID0+IGNvbG9ycy5ncmVlbihzLmlkKSkuam9pbignLCAnKX0pIHRvIGRpc3BsYXkgaXRzIHRlbXBsYXRlLmAsXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVwbG95KG9wdGlvbnM6IERlcGxveU9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVwbG95KG9wdGlvbnMuc3RhY2tOYW1lcywgb3B0aW9ucy5leGNsdXNpdmVseSk7XG4gICAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IG9wdGlvbnMuc3RhY2tOYW1lcy5sZW5ndGggIT09IDAgPyBvcHRpb25zLnN0YWNrTmFtZXNbMF0gOiBzdGFja3Muc3RhY2tBcnRpZmFjdHNbMF0uaWQ7XG4gICAgICAgIGxldCByZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpO1xuICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCB0ZW1wbGF0ZUJvZHkgPSBmcy5yZWFkRmlsZVN5bmMoYC4vY2RrLm91dC8ke3N0YWNrTmFtZX0udGVtcGxhdGUuanNvbmApO1xuICAgICAgICBsZXQgQ2xpZW50VG9rZW4gPSBnZW5lcmF0ZVNhZmVJZCgpO1xuICAgICAgICBsZXQgZGlzYWJsZVJvbGxiYWNrID0gb3B0aW9ucy5kaXNhYmxlUm9sbGJhY2tcbiAgICAgICAgbGV0IGNvbnRlbnQ6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgU3RhY2tOYW1lOiBzdGFja05hbWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICBUaW1lb3V0SW5NaW51dGVzOiBvcHRpb25zLnRpbWVvdXQsXG4gICAgICAgICAgICBUZW1wbGF0ZUJvZHk6IHRlbXBsYXRlQm9keSxcbiAgICAgICAgICAgIENsaWVudFRva2VuOiBDbGllbnRUb2tlbixcbiAgICAgICAgICAgIERpc2FibGVSb2xsYmFjazogZGlzYWJsZVJvbGxiYWNrXG4gICAgICAgIH07XG4gICAgICAgIGxldCBzeW5jID0gb3B0aW9ucy5zeW5jXG4gICAgICAgIGxldCBvdXRwdXRzID0gb3B0aW9ucy5vdXRwdXRzRmlsZVxuICAgICAgICBsZXQgc2tpcElmTm9DaGFuZ2VzID0gb3B0aW9ucy5za2lwSWZOb0NoYW5nZXNcbiAgICAgICAgbGV0IHJlc291cmNlR3JvdXBJZCA9IG9wdGlvbnMucmVzb3VyY2VHcm91cElkXG4gICAgICAgIHJlcXVlc3RPcHRpb25zWydtZXRob2QnXSA9ICdQT1NUJ1xuXG4gICAgICAgIGlmIChyZXNvdXJjZUdyb3VwSWQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRbJ1Jlc291cmNlR3JvdXBJZCddID0gcmVzb3VyY2VHcm91cElkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhY2tzLnN0YWNrQXJ0aWZhY3RzWzBdLnRhZ3MpIHtcbiAgICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMTtcbiAgICAgICAgICAgIGxldCBwYXJhcyA9IHN0YWNrcy5zdGFja0FydGlmYWN0c1swXS50YWdzO1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFzKSB7XG4gICAgICAgICAgICAgICAgY29udGVudFsnVGFncy4nICsgY291bnQudG9TdHJpbmcoKSArICcuS2V5J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgY29udGVudFsnVGFncy4nICsgY291bnQudG9TdHJpbmcoKSArICcuVmFsdWUnXSA9IHBhcmFzW2tleV07XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMTtcbiAgICAgICAgICAgIGxldCBwYXJhcyA9IG9wdGlvbnMucGFyYW1ldGVycztcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhcykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1BhcmFtZXRlcnMuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlBhcmFtZXRlcktleSddID0ga2V5O1xuICAgICAgICAgICAgICAgIGNvbnRlbnRbJ1BhcmFtZXRlcnMuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlBhcmFtZXRlclZhbHVlJ10gPSBwYXJhc1trZXldO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9jYWxTdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2tOYW1lKVxuICAgICAgICBpZiAobG9jYWxTdGFja0luZm8uc3RhY2tJZCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5SWQobG9jYWxTdGFja0luZm8uc3RhY2tJZClcbiAgICAgICAgICAgIGlmIChzdGFja0luZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgc3RhY2tcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdGFja0luZm8uc3RhY2tJZCAhPT0gc3RhY2tJbmZvLlN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gdXBkYXRlIHN0YWNrLCBiZWNhdXNlIHN0YWNrIGxvY2FsIGluZm8gZG9zZSBub3QgbWF0Y2ggdGhlIHJlbW90ZSBzZXJ2ZXIuJylcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50WydTdGFja0lkJ10gPSBzdGFja0luZm8uU3RhY2tJZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWNrU3RhdHVzID0gc3RhY2tJbmZvLlN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhY2tVcGRhdGVUaW1lID0gc3RhY2tJbmZvLlVwZGF0ZVRpbWUgPyBzdGFja0luZm8uVXBkYXRlVGltZSA6IHN0YWNrSW5mby5DcmVhdGVUaW1lXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1N0YXR1cy5pbmRleE9mKFwiSU5fUFJPR1JFU1NcIikgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJyVzOiBkZXBsb3lpbmcuLi4nLCBjb2xvcnMuYm9sZChzdGFja05hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zeW5jVXBkYXRlU3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgb3V0cHV0cywgc2tpcElmTm9DaGFuZ2VzLCBzdGFja05hbWUsIGxvY2FsU3RhY2tJbmZvLCBzdGFja1VwZGF0ZVRpbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucm9zVXBkYXRlU3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgc3RhY2tOYW1lLCBsb2NhbFN0YWNrSW5mbywgc3RhY2tVcGRhdGVUaW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdOb3RTdXBwb3J0ZWQnICYmIGUubWVzc2FnZS5zdGFydHNXaXRoKCdVcGRhdGUgdGhlIGNvbXBsZXRlbHkgc2FtZSBzdGFjaycpICYmIHNraXBJZk5vQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHN0YWNrSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygnVGhlIHN0YWNrIGlzIGNvbXBsZXRlbHkgdGhlIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXBkYXRlLicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2s6IEVycm9yQ29kZTogJXNcXG5SZXF1ZXN0ZWRJZDogJXNcXG5FcnJvck1lc3NhZ2U6JXMnLCBlLmNvZGUsIGUuZGF0YS5SZXF1ZXN0SWQsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjaywgYmVjYXVzZSBzdGFjayBzdGF0dXMgaXMgJXMnLCBzdGFja1N0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHN0YWNrXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCclczogZGVwbG95aW5nLi4uJywgY29sb3JzLmJvbGQoc3RhY2tOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN5bmNEZXBsb3lTdGFjayhjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCBvdXRwdXRzLCByZXNvdXJjZUdyb3VwSWQsIHN0YWNrTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJvc0NyZWF0ZVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIHJlc291cmNlR3JvdXBJZCwgc3RhY2tOYW1lKVxuICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2s6IEVycm9yQ29kZTogJXNcXG5SZXF1ZXN0ZWRJZDogJXNcXG5FcnJvck1lc3NhZ2U6JXMnLCBlLmNvZGUsIGUuZGF0YS5SZXF1ZXN0SWQsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lLCByZXNvdXJjZUdyb3VwSWQpXG4gICAgICAgICAgICBpZiAoc3RhY2tJbmZvICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RhY2sgaXMgZXhpc3Qgc2VuZCBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrLCBiZWNhdXNlIHN0YWNrICAlcyBpcyBleGlzdCBpbiB0aGlzIHJlZ2lvbi4nLCBzdGFja05hbWUpXG4gICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgc3RhY2tcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJyVzOiBkZXBsb3lpbmcuLi4nLCBjb2xvcnMuYm9sZChzdGFja05hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc3luY0RlcGxveVN0YWNrKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIG91dHB1dHMsIHJlc291cmNlR3JvdXBJZCwgc3RhY2tOYW1lKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucm9zQ3JlYXRlU3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucywgcmVzb3VyY2VHcm91cElkLCBzdGFja05hbWUpXG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGNyZWF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgZS5kYXRhLlJlcXVlc3RJZCwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRpZmYob3B0aW9uczogRGlmZk9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uSW5Mb2NhbCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbkluTG9jYWwgPSByZWdpb25JbkxvY2FsID8gcmVnaW9uSW5Mb2NhbCA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gb3B0aW9ucy5zdHJlYW0gfHwgcHJvY2Vzcy5zdGRlcnI7XG4gICAgICAgIGNvbnN0IGNvbnRleHRMaW5lcyA9IG9wdGlvbnMuY29udGV4dExpbmVzIHx8IDM7XG4gICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCk7XG4gICAgICAgICAgICBpZiAoIXN0YWNrSW5mby5zdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgc3RyZWFtLndyaXRlKGZvcm1hdCgnU3RhY2sgJXMgaGFzIG5vdCBiZWVuIGRlcGxveWVkIG9yIHN0YWNrIGRvZXNuXFwndCBleGlzdCBpbiB0aGUgc3RhY2suaW5mby5qc29uIGZpbGUgXFxuJywgY29sb3JzLmJvbGQoc3RhY2suZGlzcGxheU5hbWUpKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGllbnQuZ2V0VGVtcGxhdGUoe1JlZ2lvbklkOiByZWdpb25JbkxvY2FsLCBTdGFja0lkOiBzdGFja0luZm8uc3RhY2tJZH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRlc2VyaWFsaXplU3RydWN0dXJlKHJlcy5UZW1wbGF0ZUJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW0ud3JpdGUoZm9ybWF0KCdTdGFjayAlc1xcbicsIGNvbG9ycy5ib2xkKHN0YWNrLmRpc3BsYXlOYW1lKSkpO1xuICAgICAgICAgICAgICAgICAgICBwcmludFN0YWNrRGlmZih0ZW1wbGF0ZSwgc3RhY2ssIGNvbnRleHRMaW5lcywgc3RyZWFtKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBzeW50aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrLmlkLCBTWU5USF9TVEFDSyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgdGVtcGxhdGU6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGV2ZW50KG9wdGlvbnM6IEV2ZW50T3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShbXSk7XG4gICAgICAgIGxldCBzdGFja0lkID0gKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhvcHRpb25zLnN0YWNrTmFtZVswXSkpLnN0YWNrSWRcbiAgICAgICAgaWYgKCFvcHRpb25zLnN0YWNrTmFtZSkge1xuICAgICAgICAgICAgZXJyb3IoJ0lmIHdhbnQgdG8gZ2V0IHJlc291cmNlIHN0YWNrIGV2ZW50cywgc3RhY2sgbmFtZSBtdXN0IGJlIFNwZWNpZmllZCEnKVxuICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICB9XG4gICAgICAgIGlmICghc3RhY2tzLnN0YWNrSWRzLmluY2x1ZGVzKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSkge1xuICAgICAgICAgICAgZXJyb3IoYFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXN0LCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBpbnB1dCBzdGFjayBuYW1lIWApXG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGFja0lkKSB7XG4gICAgICAgICAgICBlcnJvcihgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHN0YWNrLmluZm8uanNvbiBmaWxlLCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBzdGFjazogJXMhYCwgb3B0aW9ucy5zdGFja05hbWVbMF0pXG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IExvZ2ljYWxSZXNvdXJjZUlkczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubG9naWNhbFJlc291cmNlSWQpIHtcbiAgICAgICAgICAgIExvZ2ljYWxSZXNvdXJjZUlkcy5wdXNoKG9wdGlvbnMubG9naWNhbFJlc291cmNlSWQpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY2xpZW50XG4gICAgICAgICAgICAubGlzdFN0YWNrRXZlbnRzKHtcbiAgICAgICAgICAgICAgICBTdGFja0lkOiBzdGFja0lkLFxuICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICAgICAgTG9naWNhbFJlc291cmNlSWQ6IExvZ2ljYWxSZXNvdXJjZUlkcyxcbiAgICAgICAgICAgICAgICBQYWdlU2l6ZTogb3B0aW9ucy5wYWdlU2l6ZSA/IE51bWJlcihvcHRpb25zLnBhZ2VTaXplKSA6IDEwLFxuICAgICAgICAgICAgICAgIFBhZ2VOdW1iZXI6IG9wdGlvbnMucGFnZU51bWJlciA/IE51bWJlcihvcHRpb25zLnBhZ2VOdW1iZXIpIDogMVxuICAgICAgICAgICAgfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBTdGFjayAlcyBcXG4gRXZlbnRzIGlzOiBcXG4gJXMgXFxuYCwgY29sb3JzLmJsdWUob3B0aW9ucy5zdGFja05hbWVbMF0pLCBjb2xvcnMuYmx1ZShKU09OLnN0cmluZ2lmeShyZXMuRXZlbnRzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8ob3B0aW9ucy5zdGFja05hbWVbMF0sIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjayBldmVudHM6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG91dHB1dChvcHRpb25zOiBPdXRQdXRPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgICAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXN0cm95KFtdKTtcbiAgICAgICAgbGV0IHN0YWNrSWQgPSAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSkuc3RhY2tJZFxuICAgICAgICBpZiAoIW9wdGlvbnMuc3RhY2tOYW1lKSB7XG4gICAgICAgICAgICBlcnJvcignSWYgd2FudCB0byBnZXQgcmVzb3VyY2Ugc3RhY2sgb3V0cHV0LCBzdGFjayBuYW1lIG11c3QgYmUgU3BlY2lmaWVkIScpXG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGFja3Muc3RhY2tJZHMuaW5jbHVkZXMob3B0aW9ucy5zdGFja05hbWVbMF0pKSB7XG4gICAgICAgICAgICBlcnJvcihgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpc3QsIFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIGlucHV0IHN0YWNrIG5hbWUhYClcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YWNrSWQpIHtcbiAgICAgICAgICAgIGVycm9yKGBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGlzdCBpbiB0aGUgc3RhY2suaW5mby5qc29uIGZpbGUsIFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIHN0YWNrOiAlcyFgLCBvcHRpb25zLnN0YWNrTmFtZVswXSlcbiAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBjbGllbnRcbiAgICAgICAgICAgIC5nZXRTdGFjayh7XG4gICAgICAgICAgICAgICAgU3RhY2tJZDogc3RhY2tJZCxcbiAgICAgICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uXG4gICAgICAgICAgICB9LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIFN0YWNrICVzIFxcbiBPdXRwdXQgaXM6IFxcbiAlcyBcXG5gLCBjb2xvcnMuYmx1ZShvcHRpb25zLnN0YWNrTmFtZVswXSksIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5PdXRwdXRzLCBudWxsLCBcIlxcdFwiKSkpO1xuICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8ob3B0aW9ucy5zdGFja05hbWVbMF0sIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjayBvdXRwdXRzOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFzeW5jIHJlc291cmNlKG9wdGlvbnM6IFJlc291cmNlT3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcbiAgICAgICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgICAgICBsZXQgc3RhY2tOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgICAgICBpZiAoKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCkpLnN0YWNrSWQpIHtcbiAgICAgICAgICAgICAgICBzdGFja05hbWVzLnB1c2goc3RhY2suaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvcihgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHN0YWNrLmluZm8uanNvbiBmaWxlLCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBzdGFjazogJXMhYCwgc3RhY2suaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgZm9yIChsZXQgc3RhY2tOYW1lIG9mIHN0YWNrTmFtZXMpIHtcbiAgICAgICAgICAgIGNsaWVudFxuICAgICAgICAgICAgICAgIC5saXN0U3RhY2tSZXNvdXJjZXMoe1xuICAgICAgICAgICAgICAgICAgICBTdGFja0lkOiAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrTmFtZSkpLnN0YWNrSWQsXG4gICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICAgICAgfSwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIFN0YWNrICVzIFxcbiBSZXNvdXJjZSBpczogXFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKHN0YWNrTmFtZSksIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5SZXNvdXJjZXMsIG51bGwsIFwiXFx0XCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgc3RhY2sgcmVzb3VyY2U6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2VuZXJhdGVTdGFja0luZm8ob3B0aW9uczogR2VuZXJhdGVTdGFja0luZm9PcHRpb25zKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgU1RBQ0tfSU5GTyk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0Zvckxpc3QoW10pO1xuICAgICAgICBsZXQgc3RhY2tOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgbGV0IFN0YWNrSW5mb3M6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICAgICAgc3RhY2tOYW1lcyA9IHN0YWNrcy5zdGFja0lkc1xuICAgICAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUsIG9wdGlvbnMucmVzb3VyY2VHcm91cElkKVxuICAgICAgICAgICAgaWYgKHN0YWNrSW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFN0YWNrSW5mb3Nbc3RhY2tOYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBERVBMT1lfU1RBQ0ssXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrSWQ6IHN0YWNrSW5mby5TdGFja0lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTdGFja0luZm9zW3N0YWNrTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogSU5JVF9TVEFDSyxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tJZDogbnVsbFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoU3RhY2tJbmZvcywgbnVsbCwgJ1xcdCcpKTtcbiAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBnZW5lcmF0ZSBzdGFjayBpbmZvIGhhcyBjb21wbGV0ZWQhYCxcbiAgICAgICAgKTtcbiAgICAgICAgZXhpdCgwKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRTdGFja0J5TmFtZShzdGFja05hbWU6IHN0cmluZywgcmVzb3VyY2VHcm91cElkOiBhbnkpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgbGV0IHBhcmFtczogeyBbbmFtZTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBSZWdpb25JZDogcmVnaW9uLFxuICAgICAgICAgICAgUGFnZVNpemU6IDEwLFxuICAgICAgICAgICAgUGFnZU51bWJlcjogMSxcbiAgICAgICAgICAgIFN0YWNrTmFtZTogW3N0YWNrTmFtZV1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJlc291cmNlR3JvdXBJZCkge1xuICAgICAgICAgICAgcGFyYW1zWydSZXNvdXJjZUdyb3VwSWQnXSA9IHJlc291cmNlR3JvdXBJZFxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQubGlzdFN0YWNrcyhwYXJhbXMsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5TdGFja3NbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LlN0YWNrc1swXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0U3RhY2tCeUlkKHN0YWNrSWQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgICAgICBsZXQgcmVnaW9uID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnLCB0cnVlKTtcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uID8gcmVnaW9uIDogcHJvY2Vzcy5lbnYuUkVHSU9OX0lEO1xuICAgICAgICBsZXQgcGFyYW1zOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICBTdGFja0lkOiBzdGFja0lkXG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1YmxpYyBhc3luYyBsaXN0U3RhY2tzKG9wdGlvbnM6IExpc3RTdGFja09wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0Zvckxpc3QoW10pO1xuICAgICAgICBsZXQgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IHJlZ2lvbiA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JlZ2lvbklkJywgdHJ1ZSk7XG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbiA/IHJlZ2lvbiA6IHByb2Nlc3MuZW52LlJFR0lPTl9JRDtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgUmVnaW9uSWQ6IHJlZ2lvbixcbiAgICAgICAgICAgIFBhZ2VTaXplOiBvcHRpb25zLnBhZ2VTaXplID8gTnVtYmVyKG9wdGlvbnMucGFnZVNpemUpIDogMTAsXG4gICAgICAgICAgICBQYWdlTnVtYmVyOiBvcHRpb25zLnBhZ2VOdW1iZXIgPyBOdW1iZXIob3B0aW9ucy5wYWdlTnVtYmVyKSA6IDFcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFvcHRpb25zLmFsbCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RhY2tOYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuU3RhY2tOYW1lID0gc3RhY2tzLnN0YWNrSWRzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5TdGFja05hbWUgPSBvcHRpb25zLnN0YWNrTmFtZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5yZXNvdXJjZUdyb3VwSWQpIHtcbiAgICAgICAgICAgIHBhcmFtcy5SZXNvdXJjZUdyb3VwSWQgPSBvcHRpb25zLnJlc291cmNlR3JvdXBJZFxuICAgICAgICB9XG4gICAgICAgIGNsaWVudC5saXN0U3RhY2tzKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBTdGFja3MgbGlzdCBpczpcXG4gJXMgXFxuYCwgY29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLlN0YWNrcywgbnVsbCwgXCJcXHRcIikpKTtcbiAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGxpc3Qgc3RhY2tzOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlc3Ryb3kob3B0aW9uczogRGVzdHJveU9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRlc3Ryb3kob3B0aW9ucy5zdGFja05hbWVzKTtcbiAgICAgICAgbGV0IHN0YWNrTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBzeW5jID0gb3B0aW9ucy5zeW5jXG4gICAgICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgaWYgKChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpKS5zdGFja0lkKSB7XG4gICAgICAgICAgICAgICAgc3RhY2tOYW1lcy5wdXNoKHN0YWNrLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMucXVpZXQpIHtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpcm0gPSByZWFkbGluZVN5bmMucXVlc3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICdUaGUgZm9sbG93aW5nIHN0YWNrKHMpIHdpbGwgYmUgZGVzdHJveWVkKE9ubHkgZGVwbG95ZWQgc3RhY2tzIHdpbGwgYmUgZGlzcGxheWVkKS5cXG5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tOYW1lcy50b1N0cmluZygpICtcbiAgICAgICAgICAgICAgICAgICAgJ1xcblxcblBsZWFzZSBjb25maXJtLihZL04pXFxuJyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtID09PSAnbicgfHwgY29uZmlybSA9PT0gJ04nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0gPT09ICd5JyB8fCBjb25maXJtID09PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCByZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcsIHRydWUpO1xuICAgICAgICByZWdpb24gPSByZWdpb24gPyByZWdpb24gOiBwcm9jZXNzLmVudi5SRUdJT05fSUQ7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgICAgIGZvciAobGV0IHN0YWNrTmFtZSBvZiBzdGFja05hbWVzKSB7XG4gICAgICAgICAgICBsZXQgY29udGVudDogeyBbbmFtZTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICAgICAgU3RhY2tJZDogKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpKS5zdGFja0lkLFxuICAgICAgICAgICAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICBwcmludCgnJXM6IGRlc3Ryb3lpbmcuLi4nLCBjb2xvcnMuYm9sZChzdGFja05hbWUpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN5bmNEZXN0cm95U3RhY2soY2xpZW50LCBjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsaWVudC5kZWxldGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBEZWxldGVkXFxuUmVxdWVzdGVkSWQ6ICVzYCwgY29sb3JzLmJsdWUocmVzLlJlcXVlc3RJZCkpO1xuICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIGRlc3Ryb3kuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZGVsZXRlIHN0YWNrOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzeW5jU3RhY2tJbmZvKCkge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSB7fTtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGZpbGVDb250ZW50LCBudWxsLCAnXFx0JykpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0ZW1wOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgIC8vIHNlbGVjdG9yLmxlbmd0aCA9IDAgbWVhbnMgc2VsZWN0IGFsbCBzdGFja3MgZnJvbSB0aGlzIGFwcFxuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0Zvckxpc3QoW10pO1xuICAgICAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKFNUQUNLX0lORk8sIHN0YWNrLmlkKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdGFjayBoYXMgbm8gaW5mbywgdGhlbiBhZGQgaW5pdCB0YWcgZm9yIGl0XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3N0YWNrLmlkXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3N0YWNrLmlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBJTklUX1NUQUNLLFxuICAgICAgICAgICAgICAgICAgICBzdGFja0lkOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KHRlbXAsIG51bGwsICdcXHQnKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcbiAgICAgICAgbGV0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICBsZXQgaW5mbyA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpO1xuICAgICAgICBsZXQgc3RhY2tJbmZvID0gaW5mb1tzdGFja05hbWVdO1xuICAgICAgICBpZiAoIXN0YWNrSW5mbykge1xuICAgICAgICAgICAgc3RhY2tJbmZvID0gaW5mb1tzdGFja05hbWVdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gREVQTE9ZX1NUQUNLX0lEX0xFTkdUSCkge1xuICAgICAgICAgICAgc3RhY2tJbmZvLnN0YXR1cyA9IERFUExPWV9TVEFDSztcbiAgICAgICAgICAgIHN0YWNrSW5mby5zdGFja0lkID0gdmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YWNrSW5mby5zdGF0dXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gREVTVFJPWV9TVEFDSykge1xuICAgICAgICAgICAgICAgIHN0YWNrSW5mby5zdGFja0lkID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShpbmZvLCBudWxsLCAnXFx0JykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZmluZFN0YWNrSW5mbyhzdGFja05hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGVDb250ZW50KVtzdGFja05hbWVdO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yTGlzdChzZWxlY3RvcnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgICAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc2VsZWN0b3JzLCB7ZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrc30pO1xuXG4gICAgICAgIC8vIE5vIHZhbGlkYXRpb25cblxuICAgICAgICByZXR1cm4gc3RhY2tzO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yRGVzdHJveShzdGFja05hbWVzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5BbGxTdGFja3MsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE5vIHZhbGlkYXRpb25cblxuICAgICAgICByZXR1cm4gc3RhY2tzO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yRGVwbG95KHN0YWNrTmFtZXM6IHN0cmluZ1tdLCBleGNsdXNpdmVseT86IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzdGFja05hbWVzLCB7XG4gICAgICAgICAgICBleHRlbmQ6IGV4Y2x1c2l2ZWx5ID8gRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5Ob25lIDogRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5VcHN0cmVhbSxcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5Pbmx5U2luZ2xlLFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlU3RhY2tzKHN0YWNrcyk7XG5cbiAgICAgICAgcmV0dXJuIHN0YWNrcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNlbGVjdFN0YWNrc0ZvckRpZmYoc3RhY2tOYW1lczogc3RyaW5nW10sIGV4Y2x1c2l2ZWx5PzogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICAgICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgICAgICAgIGV4dGVuZDogZXhjbHVzaXZlbHkgPyBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUgOiBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLlVwc3RyZWFtLFxuICAgICAgICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrcyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZVN0YWNrcyhzdGFja3MpO1xuXG4gICAgICAgIHJldHVybiBzdGFja3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgdGhlIHN0YWNrcyBmb3IgZXJyb3JzIGFuZCB3YXJuaW5ncyBhY2NvcmRpbmcgdG8gdGhlIENMSSdzIGN1cnJlbnQgc2V0dGluZ3NcbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIHZhbGlkYXRlU3RhY2tzKHN0YWNrczogU3RhY2tDb2xsZWN0aW9uKSB7XG4gICAgICAgIHN0YWNrcy5wcm9jZXNzTWV0YWRhdGFNZXNzYWdlcyh7XG4gICAgICAgICAgICBpZ25vcmVFcnJvcnM6IHRoaXMucHJvcHMuaWdub3JlRXJyb3JzLFxuICAgICAgICAgICAgc3RyaWN0OiB0aGlzLnByb3BzLnN0cmljdCxcbiAgICAgICAgICAgIHZlcmJvc2U6IHRoaXMucHJvcHMudmVyYm9zZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3NlbWJseSgpOiBQcm9taXNlPENsb3VkQXNzZW1ibHk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2xvdWRFeGVjdXRhYmxlLnN5bnRoZXNpemUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldENsaUNvbmZpZyhsb2FkRmlsZVBhdGg6IHN0cmluZykge1xuICAgICAgICBsZXQgZmlsZVBhdGg6IHN0cmluZztcbiAgICAgICAgbGV0IGNvbmZpZ3VyZUluZm86IGFueSA9IHt9O1xuICAgICAgICBsZXQgY29uZmlndXJlSW5mb3M6IGFueSA9IHt9O1xuICAgICAgICBsZXQgQUtQcm9maWxlTGlzdDogb2JqZWN0W10gPSBbXTtcbiAgICAgICAgbGV0IFN0c1Byb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBsZXQgUmFtUm9sZUFyblByb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBsZXQgRWNzUmFtUm9sZVByb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgICAgICBpZiAobG9hZEZpbGVQYXRoKSB7XG4gICAgICAgICAgICBmaWxlUGF0aCA9IGxvYWRGaWxlUGF0aFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGhvbWVQYXRoID0gb3MuaG9tZWRpcigpO1xuICAgICAgICAgICAgZmlsZVBhdGggPSBob21lUGF0aCArIENMSV9DT05GSUdfRklMRTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IEFsbFByb2ZpbGVzID0gSlNPTi5wYXJzZShmaWxlKVsncHJvZmlsZXMnXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb2ZpbGUgb2YgQWxsUHJvZmlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmVJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogcHJvZmlsZS5hY2Nlc3Nfa2V5X2lkLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IHByb2ZpbGUuYWNjZXNzX2tleV9zZWNyZXQsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbjogcHJvZmlsZS5yZWdpb25faWQsXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5VG9rZW46IHByb2ZpbGUuc3RzX3Rva2VuLFxuICAgICAgICAgICAgICAgICAgICByb2xlQXJuOiBwcm9maWxlLnJhbV9yb2xlX2FybixcbiAgICAgICAgICAgICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiBwcm9maWxlLnJhbV9zZXNzaW9uX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiBwcm9maWxlLnJhbV9yb2xlX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGUubmFtZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwcm9maWxlLm1vZGUgPT09ICdBSycpIHtcbiAgICAgICAgICAgICAgICAgICAgQUtQcm9maWxlTGlzdC5wdXNoKGNvbmZpZ3VyZUluZm8pXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZUluZm9zLkFLID0gQUtQcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnU3RzVG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIFN0c1Byb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuU3RzVG9rZW4gPSBTdHNQcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgICAgICAgICAgICAgICAgUmFtUm9sZUFyblByb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuUmFtUm9sZUFybiA9IFJhbVJvbGVBcm5Qcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgICAgICAgICAgICAgICAgRWNzUmFtUm9sZVByb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlSW5mb3MuRWNzUmFtUm9sZSA9IEVjc1JhbVJvbGVQcm9maWxlTGlzdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY29uZmlndXJlSW5mb3MgfHwgT2JqZWN0LmtleXMoY29uZmlndXJlSW5mb3MpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoXCJXQU5STklORzogUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgbW9kZSBhbmQgcHJvZmlsZSBjb25maWd1cmF0aW9uIGVudGVyZWQuXCIpO1xuICAgICAgICAgICAgICAgIGV4aXQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uZmlndXJlSW5mb3NcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKFwiV0FOUk5JTkc6IFBsZWFzZSBjaGVjayBBbGl5dW4gQ2xpIHRvb2wgY29uZmlndXJlIGFjY3VyYWN5IG9mIHRoZSBkZWZhdWx0IHBhdGggb3Igc3BlY2lmaWVkIHBhdGguXCIpO1xuICAgICAgICAgICAgZXhpdCgxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc3luY0RlcGxveVN0YWNrKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIG91dHB1dHNGaWxlOiBib29sZWFuLCByZXNvdXJjZUdyb3VwSWQ6IGFueSwgc3RhY2tOYW1lOiBhbnkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBjcmVhdGVSZXN1bHRSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgIGxldCBjcmVhdGVFcnJvclJlcXVlc3RJZDogYW55O1xuICAgICAgICAgICAgbGV0IG5ldHdvcmtFcnJvckV4Y2VwdGlvbjogYW55O1xuICAgICAgICAgICAgbGV0IGNyZWF0ZVJlc3VsdDogYW55O1xuICAgICAgICAgICAgY29uc3Qgc3RhY2tPdXRwdXRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC5jcmVhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICBjcmVhdGVSZXN1bHRSZXF1ZXN0SWQgPSBjcmVhdGVSZXN1bHQuUmVxdWVzdElkXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlRXJyb3JSZXF1ZXN0SWQgPSBlLmRhdGEuUmVxdWVzdElkXG4gICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvckV4Y2VwdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVFcnJvclJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIGNyZWF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgY3JlYXRlRXJyb3JSZXF1ZXN0SWQsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoIWNyZWF0ZVJlc3VsdFJlcXVlc3RJZCAmJiAhY3JlYXRlRXJyb3JSZXF1ZXN0SWQpIHx8IG5ldHdvcmtFcnJvckV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBzbGVlcFRpbWUgPSA1MDAwO1xuICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHNsZWVwVGltZSk7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNyZWF0ZVJlc3VsdFJlcXVlc3RJZDogYW55O1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3JlYXRlRXJyb3JSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ldHdvcmtFcnJvckV4Y2VwdGlvbjogYW55O1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3JlYXRlUmVzdWx0OiBhbnk7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQuY3JlYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVSZXN1bHRSZXF1ZXN0SWQgPSBjcmVhdGVSZXN1bHQuUmVxdWVzdElkXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUVycm9yUmVxdWVzdElkID0gZS5kYXRhLlJlcXVlc3RJZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yRXhjZXB0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3JlYXRlRXJyb3JSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIGNyZWF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgY3JlYXRlRXJyb3JSZXF1ZXN0SWQsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCghY3JlYXRlUmVzdWx0UmVxdWVzdElkICYmICFjcmVhdGVFcnJvclJlcXVlc3RJZCkgfHwgbmV0d29ya0Vycm9yRXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xlZXBUaW1lIDwgMjAwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGVlcFRpbWUgPSBzbGVlcFRpbWUgKyA1MDAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcChzbGVlcFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBjcmVhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoY3JlYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhY2tJZEluZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZSwgcmVzb3VyY2VHcm91cElkKVxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3U3RhY2tJZEluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgbmV3U3RhY2tJZEluZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUobmV3U3RhY2tJZEluZm8uU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gY3JlYXRlIHN0YWNrLCBwbGVhc2UgY2hlY2sgeW91IHNlcnZpY2UgZW5kcG9pbnQuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gbmV3IFJld3JpdGFibGVCbG9jayhzdHJlYW0pO1xuICAgICAgICAgICAgd2l0aERlZmF1bHRQcmludGVyT2JqID0gc2V0SW50ZXJ2YWwoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIGNyZWF0ZVJlc3VsdC5TdGFja0lkLCBibG9jaywgJ2RlcGxveScpXG4gICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMClcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lvbklkOiBjb250ZW50WydSZWdpb25JZCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhY2tJZDogY3JlYXRlUmVzdWx0LlN0YWNrSWRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0U3RhY2tSZXN1bHQgPSBhd2FpdCBjbGllbnQuZ2V0U3RhY2socGFyYW1zLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZ2V0U3RhY2tSZXN1bHQuU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1JlYXNvbiA9IGdldFN0YWNrUmVzdWx0LlN0YXR1c1JlYXNvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFja05hbWUgPSBnZXRTdGFja1Jlc3VsdC5TdGFja05hbWVcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGdldFN0YWNrUmVzdWx0Lk91dHB1dHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnQ29tcGxldGUgPSBSZWdFeHAoL0NPTVBMRVRFLylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRmFpbGVkID0gUmVnRXhwKC9GQUlMRUQvKVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnQ29tcGxldGUuZXhlYyhzdGF0dXMpIHx8IHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIGNyZWF0ZVJlc3VsdC5TdGFja0lkLCBibG9jaywgJ2RlcGxveScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJ1xcbk91dHB1dHM6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tPdXRwdXRzW3N0YWNrTmFtZV0gPSBvdXRwdXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3V0cHV0IG9mIG91dHB1dHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvdXRwdXRbJ091dHB1dFZhbHVlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IG91dHB1dFsnT3V0cHV0S2V5J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gb3V0cHV0WydEZXNjcmlwdGlvbiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnXFxuIEtleTogJXMgIFZhbHVlOiAlcyBEZXNjcmlwdGlvbjogJXMnLCBjb2xvcnMuY3lhbihrZXkpLCBjb2xvcnMuY3lhbih2YWx1ZSksIGNvbG9ycy5jeWFuKGRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXRzRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihMT0NBTF9QQVRIICsgT1VUUFVUU19KU09OKSwgSlNPTi5zdHJpbmdpZnkoc3RhY2tPdXRwdXRzLCBudWxsLCAnXFx0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoc3luYyBkZXBsb3kgc3RhY2spIGhhcyBmaW5pc2hlZCFcXG5zdGF0dXM6ICVzXFxuU3RhdHVzUmVhc29uOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1c1JlYXNvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoZ2V0U3RhY2tSZXN1bHQuU3RhY2tJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIGNyZWF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnRvU3RyaW5nKCkgPT0gJ0NSRUFURV9ST0xMQkFDS19DT01QTEVURScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdUaHJvdHRsaW5nLlVzZXInIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZycgfHwgZS5jb2RlID09ICdUaHJvdHRsaW5nLkFQSScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDMwMDAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyBjcmVhdGUgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgY3JlYXRlIHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0UmVzb3VyY2VzKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIHN0YWNrSWQ6IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbGlzdFN0YWNrUmVzb3VyY2VzUmVzdWx0ID0gYXdhaXQgY2xpZW50Lmxpc3RTdGFja1Jlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgU3RhY2tJZDogc3RhY2tJZCxcbiAgICAgICAgICAgICAgICBSZWdpb25JZDogY29udGVudFsnUmVnaW9uSWQnXSxcbiAgICAgICAgICAgIH0sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgcmV0dXJuIGxpc3RTdGFja1Jlc291cmNlc1Jlc3VsdC5SZXNvdXJjZXNcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IG5ldyBzdGFjayByZXNvdXJjZTogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB3aXRoRGVmYXVsdFByaW50ZXIoY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSwgc3RhY2tJZDogYW55LCBibG9jazogYW55LCBhY3Rpb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGNvbnN0IHJlc291cmNlcyA9IGF3YWl0IENka1Rvb2xraXQuZ2V0UmVzb3VyY2VzKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIHN0YWNrSWQpXG4gICAgICAgIGlmIChhY3Rpb24gIT09ICdkZXN0cm95Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgcmVzb3VyY2Ugb2YgcmVzb3VyY2VzKSB7XG4gICAgICAgICAgICAgICAgbGluZXMucHVzaCh1dGlsLmZvcm1hdChjb2xvcnMuYmx1ZSgnfCVzIHwlcyB8ICVzIHwgJXMgfCAlcyB8ICVzJykgKyAnXFxuJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjMsIHJlc291cmNlLlN0YWNrTmFtZSksXG4gICAgICAgICAgICAgICAgICAgIHBhZExlZnQoMTIsIHJlc291cmNlLkNyZWF0ZVRpbWUpLFxuICAgICAgICAgICAgICAgICAgICBwYWRSaWdodCgyMCwgcmVzb3VyY2UuU3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjMsIHJlc291cmNlLlJlc291cmNlVHlwZSksXG4gICAgICAgICAgICAgICAgICAgIHNob3J0ZW4oNDAsIHJlc291cmNlLlBoeXNpY2FsUmVzb3VyY2VJZCksXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLkxvZ2ljYWxSZXNvdXJjZUlkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCByZXNvdXJjZSBvZiByZXNvdXJjZXMpIHtcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKHV0aWwuZm9ybWF0KGNvbG9ycy5ibHVlKCd8JXMgfCAlcyB8ICVzIHwgJXMgfCAlcycpICsgJ1xcbicsXG4gICAgICAgICAgICAgICAgICAgIHBhZFJpZ2h0KDIzLCByZXNvdXJjZS5TdGFja05hbWUpLFxuICAgICAgICAgICAgICAgICAgICBwYWRSaWdodCgyMCwgcmVzb3VyY2UuU3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkUmlnaHQoMjMsIHJlc291cmNlLlJlc291cmNlVHlwZSksXG4gICAgICAgICAgICAgICAgICAgIHNob3J0ZW4oNDAsIHJlc291cmNlLlBoeXNpY2FsUmVzb3VyY2VJZCksXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLkxvZ2ljYWxSZXNvdXJjZUlkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYmxvY2suZGlzcGxheUxpbmVzKGxpbmVzKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhc3luYyBzeW5jVXBkYXRlU3RhY2soY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSwgb3V0cHV0c0ZpbGU6IGJvb2xlYW4sIHNraXBJZk5vQ2hhbmdlczogYm9vbGVhbiwgc3RhY2tOYW1lOiBhbnksIGxvY2FsU3RhY2tJbmZvOiBhbnksIHN0YWNrVXBkYXRlVGltZTogYW55KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIFJlZ2lvbklkOiBjb250ZW50WydSZWdpb25JZCddLFxuICAgICAgICAgICAgICAgIFN0YWNrSWQ6IGNvbnRlbnRbJ1N0YWNrSWQnXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCB1cGRhdGVSZXN1bHRSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgIGxldCB1cGRhdGVFcnJvclJlcXVlc3RJZDogYW55O1xuICAgICAgICAgICAgbGV0IG5ldHdvcmtFcnJvckV4Y2VwdGlvbjogYW55O1xuICAgICAgICAgICAgbGV0IHVwZGF0ZVJlc3VsdDogYW55O1xuICAgICAgICAgICAgY29uc3Qgc3RhY2tPdXRwdXRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgICAgICBjb25zdCBnZXRPcmlnaW5hbFN0YWNrUmVzdWx0ID0gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZVRpbWUgPSBnZXRPcmlnaW5hbFN0YWNrUmVzdWx0LlVwZGF0ZVRpbWUgPyBnZXRPcmlnaW5hbFN0YWNrUmVzdWx0LlVwZGF0ZVRpbWUgOiBcIlwiXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC51cGRhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICB1cGRhdGVSZXN1bHRSZXF1ZXN0SWQgPSB1cGRhdGVSZXN1bHQuUmVxdWVzdElkXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRXJyb3JSZXF1ZXN0SWQgPSBlLmRhdGEuUmVxdWVzdElkXG4gICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnU2VydmljZVVuYXZhaWxhYmxlJyB8fCBlLmNvZGUgPT0gJ0xhc3RUb2tlblByb2Nlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvckV4Y2VwdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh1cGRhdGVFcnJvclJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIHVwZGF0ZSBzdGFjazogRXJyb3JDb2RlOiAlc1xcblJlcXVlc3RlZElkOiAlc1xcbkVycm9yTWVzc2FnZTolcycsIGUuY29kZSwgdXBkYXRlRXJyb3JSZXF1ZXN0SWQsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCghdXBkYXRlUmVzdWx0UmVxdWVzdElkICYmICF1cGRhdGVFcnJvclJlcXVlc3RJZCkgfHwgbmV0d29ya0Vycm9yRXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNsZWVwVGltZSA9IDUwMDA7XG4gICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoc2xlZXBUaW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCAxMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlUmVzdWx0UmVxdWVzdElkOiBhbnk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVFcnJvclJlcXVlc3RJZDogYW55O1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV0d29ya0Vycm9yRXhjZXB0aW9uOiBhbnk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVSZXN1bHQ6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC51cGRhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlc3VsdFJlcXVlc3RJZCA9IHVwZGF0ZVJlc3VsdC5SZXF1ZXN0SWRcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRXJyb3JSZXF1ZXN0SWQgPSBlLmRhdGEuUmVxdWVzdElkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdTZXJ2aWNlVW5hdmFpbGFibGUnIHx8IGUuY29kZSA9PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3JFeGNlcHRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh1cGRhdGVFcnJvclJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgdXBkYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuUmVxdWVzdGVkSWQ6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJywgZS5jb2RlLCB1cGRhdGVFcnJvclJlcXVlc3RJZCwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKCF1cGRhdGVSZXN1bHRSZXF1ZXN0SWQgJiYgIXVwZGF0ZUVycm9yUmVxdWVzdElkKSB8fCBuZXR3b3JrRXJyb3JFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGVlcFRpbWUgPCAyMDAwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWVwVGltZSA9IHNsZWVwVGltZSArIDUwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHNsZWVwVGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHVwZGF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5SZXF1ZXN0ZWRJZDogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZSh1cGRhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHVwZGF0ZVJlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSA+PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdHVzQXJyYXkgPSBbXCJVUERBVEVfRkFJTEVEXCIsIFwiVVBEQVRFX0NPTVBMRVRFXCIsIFwiUk9MTEJBQ0tfRkFJTEVEXCIsIFwiUk9MTEJBQ0tfQ09NUExFVEVcIl1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhY2tJZEluZm8gPSBhd2FpdCB0aGlzLmdldFN0YWNrQnlJZChsb2NhbFN0YWNrSW5mby5zdGFja0lkKVxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U3RhY2tJZEluZm9VcGRhdGVUaW1lID0gbmV3U3RhY2tJZEluZm8uVXBkYXRlVGltZSA/IG5ld1N0YWNrSWRJbmZvLlVwZGF0ZVRpbWUgOiBuZXdTdGFja0lkSW5mby5DcmVhdGVUaW1lXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdTdGFja0lkSW5mby5TdGF0dXMgPT0gJ1VQREFURV9JTl9QUk9HUkVTUycgfHwgbmV3U3RhY2tJZEluZm8uU3RhdHVzID09ICdST0xMQkFDS19JTl9QUk9HUkVTUycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgbmV3U3RhY2tJZEluZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUobmV3U3RhY2tJZEluZm8uU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1c0FycmF5LmluY2x1ZGVzKG5ld1N0YWNrSWRJbmZvLlN0YXR1cykgJiYgbmV3U3RhY2tJZEluZm9VcGRhdGVUaW1lICE9IHN0YWNrVXBkYXRlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBuZXdTdGFja0lkSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQodXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShuZXdTdGFja0lkSW5mby5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2ssIHBsZWFzZSBjaGVjayB5b3Ugc2VydmljZSBlbmRwb2ludC4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2FpdCBmb3IgdGhlIHN0YWNrIHN0YXRlIHRvIGNoYW5nZSBhZnRlciB1cGRhdGluZyBpdFxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IG5ldyBSZXdyaXRhYmxlQmxvY2soc3RyZWFtKTtcbiAgICAgICAgICAgIHdpdGhEZWZhdWx0UHJpbnRlck9iaiA9IHNldEludGVydmFsKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBDZGtUb29sa2l0LndpdGhEZWZhdWx0UHJpbnRlcihjbGllbnQsIGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zLCB1cGRhdGVSZXN1bHQuU3RhY2tJZCwgYmxvY2ssICd1cGRhdGUnKVxuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMDApXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldE5ld1N0YWNrUmVzdWx0ID0gYXdhaXQgY2xpZW50LmdldFN0YWNrKHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGdldE5ld1N0YWNrUmVzdWx0LlN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNSZWFzb24gPSBnZXROZXdTdGFja1Jlc3VsdC5TdGF0dXNSZWFzb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tOYW1lID0gZ2V0TmV3U3RhY2tSZXN1bHQuU3RhY2tOYW1lXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dHMgPSBnZXROZXdTdGFja1Jlc3VsdC5PdXRwdXRzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1VwZGF0ZVRpbWUgPSBnZXROZXdTdGFja1Jlc3VsdC5VcGRhdGVUaW1lID8gZ2V0TmV3U3RhY2tSZXN1bHQuVXBkYXRlVGltZSA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1VwZGF0ZVRpbWUgPT0gb3JpZ2luYWxVcGRhdGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFjayB1cGRhdGUgaW4gcHJvZ3Jlc3Mgb3IgdXBkYXRlIGRpZCBub3QgYmVnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnQ29tcGxldGUgPSBSZWdFeHAoL0NPTVBMRVRFLylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRmFpbGVkID0gUmVnRXhwKC9GQUlMRUQvKVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnQ29tcGxldGUuZXhlYyhzdGF0dXMpIHx8IHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIHVwZGF0ZVJlc3VsdC5TdGFja0lkLCBibG9jaywgJ3VwZGF0ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQoJ1xcbk91dHB1dHM6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tPdXRwdXRzW3N0YWNrTmFtZV0gPSBvdXRwdXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3V0cHV0IG9mIG91dHB1dHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvdXRwdXRbJ091dHB1dFZhbHVlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IG91dHB1dFsnT3V0cHV0S2V5J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gb3V0cHV0WydEZXNjcmlwdGlvbiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludCgnXFxuIEtleTogJXMgIFZhbHVlOiAlcyBEZXNjcmlwdGlvbjogJXMnLCBjb2xvcnMuY3lhbihrZXkpLCBjb2xvcnMuY3lhbih2YWx1ZSksIGNvbG9ycy5jeWFuKGRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXRzRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihMT0NBTF9QQVRIICsgT1VUUFVUU19KU09OKSwgSlNPTi5zdHJpbmdpZnkoc3RhY2tPdXRwdXRzLCBudWxsLCAnXFx0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChzeW5jIHVwZGF0ZSBzdGFjaykgaGFzIGZpbmlzaGVkIVxcbnN0YXR1czogJXNcXG5TdGF0dXNSZWFzb246ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKHN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzUmVhc29uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShnZXROZXdTdGFja1Jlc3VsdC5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHVwZGF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnRvU3RyaW5nKCkgPT0gJ1JPTExCQUNLX0NPTVBMRVRFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVnRmFpbGVkLmV4ZWMoc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnVGhyb3R0bGluZy5Vc2VyJyB8fCBlLmNvZGUgPT0gJ1Rocm90dGxpbmcnIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZy5BUEknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgzMDAwMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgdXBkYXRlIHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ05vdFN1cHBvcnRlZCcgJiYgZS5tZXNzYWdlLnN0YXJ0c1dpdGgoJ1VwZGF0ZSB0aGUgY29tcGxldGVseSBzYW1lIHN0YWNrJykgJiYgc2tpcElmTm9DaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oY29udGVudFsnU3RhY2tOYW1lJ10sIGNvbnRlbnRbJ1N0YWNrSWQnXSk7XG4gICAgICAgICAgICAgICAgc3VjY2VzcygnVGhlIHN0YWNrIGlzIGNvbXBsZXRlbHkgdGhlIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXBkYXRlLicpXG4gICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIHVwZGF0ZSBzdGFjazogJXMgJXMnLCBlLmNvZGUsIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzeW5jRGVzdHJveVN0YWNrKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5kZWxldGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gbmV3IFJld3JpdGFibGVCbG9jayhzdHJlYW0pO1xuICAgICAgICAgICAgd2l0aERlZmF1bHRQcmludGVyT2JqID0gc2V0SW50ZXJ2YWwoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIGNvbnRlbnRbJ1N0YWNrSWQnXSwgYmxvY2ssICdkZXN0cm95JylcbiAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDAwKVxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaW9uSWQ6IGNvbnRlbnRbJ1JlZ2lvbklkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFja0lkOiBjb250ZW50WydTdGFja0lkJ11cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0U3RhY2tSZXN1bHQgPSBhd2FpdCBjbGllbnQuZ2V0U3RhY2socGFyYW1zLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZ2V0U3RhY2tSZXN1bHQuU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1JlYXNvbiA9IGdldFN0YWNrUmVzdWx0LlN0YXR1c1JlYXNvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFja05hbWUgPSBnZXRTdGFja1Jlc3VsdC5TdGFja05hbWVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnQ29tcGxldGUgPSBSZWdFeHAoL0NPTVBMRVRFLylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRmFpbGVkID0gUmVnRXhwKC9GQUlMRUQvKVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnQ29tcGxldGUuZXhlYyhzdGF0dXMpIHx8IHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2l0aERlZmF1bHRQcmludGVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENka1Rvb2xraXQud2l0aERlZmF1bHRQcmludGVyKGNsaWVudCwgY29udGVudCwgcmVxdWVzdE9wdGlvbnMsIGNvbnRlbnRbJ1N0YWNrSWQnXSwgYmxvY2ssICdkZXN0cm95JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcbiDinIUgVGhlIHRhc2soc3luYyBkZXN0cm95IHN0YWNrKSBoYXMgZmluaXNoZWQhXFxuc3RhdHVzOiAlc1xcblN0YXR1c1JlYXNvbjogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUoc3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShzdGF0dXNSZWFzb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGdldFN0YWNrUmVzdWx0LlN0YWNrSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWdDb21wbGV0ZS5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlZ0ZhaWxlZC5leGVjKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0KDIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdUaHJvdHRsaW5nLlVzZXInIHx8IGUuY29kZSA9PSAnVGhyb3R0bGluZycgfHwgZS5jb2RlID09ICdUaHJvdHRsaW5nLkFQSScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDMwMDAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyBkZXN0cm95IHN0YWNrOiAlcyAlcycsIGUuY29kZSwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aXRoRGVmYXVsdFByaW50ZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvcignZmFpbCB0byBzeW5jIGRlc3Ryb3kgc3RhY2s6ICVzICVzJywgZS5jb2RlLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHdpdGhEZWZhdWx0UHJpbnRlck9iaik7XG4gICAgICAgICAgICBleGl0KDEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHJvc1VwZGF0ZVN0YWNrKGNsaWVudDogYW55LCBjb250ZW50OiBhbnksIHJlcXVlc3RPcHRpb25zOiBhbnksIHN0YWNrTmFtZTogYW55LCBsb2NhbFN0YWNrSW5mbzogYW55LCBzdGFja1VwZGF0ZVRpbWU6IGFueSkge1xuICAgICAgICBsZXQgdXBkYXRlUmVzdWx0UmVxdWVzdElkOiBhbnk7XG4gICAgICAgIGxldCB1cGRhdGVFcnJvclJlcXVlc3RJZDogYW55O1xuICAgICAgICBsZXQgbmV0d29ya0Vycm9yRXhjZXB0aW9uOiBhbnk7XG4gICAgICAgIGxldCB1cGRhdGVSZXN1bHQ6IGFueTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHVwZGF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC51cGRhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIHVwZGF0ZVJlc3VsdFJlcXVlc3RJZCA9IHVwZGF0ZVJlc3VsdC5SZXF1ZXN0SWRcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdXBkYXRlRXJyb3JSZXF1ZXN0SWQgPSBlLmRhdGEuUmVxdWVzdElkXG4gICAgICAgICAgICBpZiAoZS5jb2RlID09ICdTZXJ2aWNlVW5hdmFpbGFibGUnIHx8IGUuY29kZSA9PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3JFeGNlcHRpb24gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh1cGRhdGVFcnJvclJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgdXBkYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuUmVxdWVzdGVkSWQ6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJywgZS5jb2RlLCB1cGRhdGVFcnJvclJlcXVlc3RJZCwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKCF1cGRhdGVSZXN1bHRSZXF1ZXN0SWQgJiYgIXVwZGF0ZUVycm9yUmVxdWVzdElkKSB8fCBuZXR3b3JrRXJyb3JFeGNlcHRpb24pIHtcbiAgICAgICAgICAgIGxldCBzbGVlcFRpbWUgPSA1MDAwO1xuICAgICAgICAgICAgYXdhaXQgc2xlZXAoc2xlZXBUaW1lKTtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgMTEpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXBkYXRlUmVzdWx0UmVxdWVzdElkOiBhbnk7XG4gICAgICAgICAgICAgICAgbGV0IHVwZGF0ZUVycm9yUmVxdWVzdElkOiBhbnk7XG4gICAgICAgICAgICAgICAgbGV0IG5ldHdvcmtFcnJvckV4Y2VwdGlvbjogYW55O1xuICAgICAgICAgICAgICAgIGxldCB1cGRhdGVSZXN1bHQ6IGFueTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVSZXN1bHQgPSBhd2FpdCBjbGllbnQudXBkYXRlU3RhY2soY29udGVudCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlc3VsdFJlcXVlc3RJZCA9IHVwZGF0ZVJlc3VsdC5SZXF1ZXN0SWRcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUVycm9yUmVxdWVzdElkID0gZS5kYXRhLlJlcXVlc3RJZFxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdTZXJ2aWNlVW5hdmFpbGFibGUnIHx8IGUuY29kZSA9PSAnTGFzdFRva2VuUHJvY2Vzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvckV4Y2VwdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodXBkYXRlRXJyb3JSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHN5bmMgdXBkYXRlIHN0YWNrOiBFcnJvckNvZGU6ICVzXFxuUmVxdWVzdGVkSWQ6ICVzXFxuRXJyb3JNZXNzYWdlOiVzJywgZS5jb2RlLCB1cGRhdGVFcnJvclJlcXVlc3RJZCwgZS5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoIXVwZGF0ZVJlc3VsdFJlcXVlc3RJZCAmJiAhdXBkYXRlRXJyb3JSZXF1ZXN0SWQpIHx8IG5ldHdvcmtFcnJvckV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xlZXBUaW1lIDwgMjAwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsZWVwVGltZSA9IHNsZWVwVGltZSArIDUwMDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcChzbGVlcFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHVwZGF0ZVJlc3VsdC5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudCh1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZSh1cGRhdGVSZXN1bHQuUmVxdWVzdElkKSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUodXBkYXRlUmVzdWx0LlN0YWNrSWQpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgPj0gMTEpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhdHVzQXJyYXkgPSBbXCJVUERBVEVfRkFJTEVEXCIsIFwiVVBEQVRFX0NPTVBMRVRFXCIsIFwiUk9MTEJBQ0tfRkFJTEVEXCIsIFwiUk9MTEJBQ0tfQ09NUExFVEVcIl1cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGFja0lkSW5mbyA9IGF3YWl0IHRoaXMuZ2V0U3RhY2tCeUlkKGxvY2FsU3RhY2tJbmZvLnN0YWNrSWQpXG4gICAgICAgICAgICAgICAgbGV0IG5ld1N0YWNrSWRJbmZvVXBkYXRlVGltZSA9IG5ld1N0YWNrSWRJbmZvLlVwZGF0ZVRpbWUgPyBuZXdTdGFja0lkSW5mby5VcGRhdGVUaW1lIDogbmV3U3RhY2tJZEluZm8uQ3JlYXRlVGltZVxuICAgICAgICAgICAgICAgIGlmIChuZXdTdGFja0lkSW5mby5TdGF0dXMgPT0gJ1VQREFURV9JTl9QUk9HUkVTUycgfHwgbmV3U3RhY2tJZEluZm8uU3RhdHVzID09ICdST0xMQkFDS19JTl9QUk9HUkVTUycpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBuZXdTdGFja0lkSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KHVwZGF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShuZXdTdGFja0lkSW5mby5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzQXJyYXkuaW5jbHVkZXMobmV3U3RhY2tJZEluZm8uU3RhdHVzKSAmJiBuZXdTdGFja0lkSW5mb1VwZGF0ZVRpbWUgIT0gc3RhY2tVcGRhdGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgbmV3U3RhY2tJZEluZm8uU3RhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudCh1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmJsdWUobmV3U3RhY2tJZEluZm8uU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcignZmFpbCB0byB1cGRhdGUgc3RhY2ssIHBsZWFzZSBjaGVjayB5b3Ugc2VydmljZSBlbmRwb2ludC4nKVxuICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgdXBkYXRlUmVzdWx0LlN0YWNrSWQpO1xuICAgICAgICBzdWNjZXNzKFxuICAgICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQodXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICAgIGNvbG9ycy5ibHVlKHVwZGF0ZVJlc3VsdC5SZXF1ZXN0SWQpLFxuICAgICAgICAgICAgY29sb3JzLmJsdWUodXBkYXRlUmVzdWx0LlN0YWNrSWQpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgcm9zQ3JlYXRlU3RhY2soY2xpZW50OiBhbnksIGNvbnRlbnQ6IGFueSwgcmVxdWVzdE9wdGlvbnM6IGFueSwgcmVzb3VyY2VHcm91cElkOiBhbnksIHN0YWNrTmFtZTogYW55KSB7XG4gICAgICAgIGxldCBjcmVhdGVSZXN1bHRSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgbGV0IGNyZWF0ZUVycm9yUmVxdWVzdElkOiBhbnk7XG4gICAgICAgIGxldCBuZXR3b3JrRXJyb3JFeGNlcHRpb246IGFueTtcbiAgICAgICAgbGV0IGNyZWF0ZVJlc3VsdDogYW55O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY3JlYXRlUmVzdWx0ID0gYXdhaXQgY2xpZW50LmNyZWF0ZVN0YWNrKGNvbnRlbnQsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAgICAgY3JlYXRlUmVzdWx0UmVxdWVzdElkID0gY3JlYXRlUmVzdWx0LlJlcXVlc3RJZFxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjcmVhdGVFcnJvclJlcXVlc3RJZCA9IGUuZGF0YS5SZXF1ZXN0SWRcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvckV4Y2VwdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNyZWF0ZUVycm9yUmVxdWVzdElkKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyB1cGRhdGUgc3RhY2s6IEVycm9yQ29kZTogJXNcXG5SZXF1ZXN0ZWRJZDogJXNcXG5FcnJvck1lc3NhZ2U6JXMnLCBlLmNvZGUsIGNyZWF0ZUVycm9yUmVxdWVzdElkLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgZXhpdCgxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoIWNyZWF0ZVJlc3VsdFJlcXVlc3RJZCAmJiAhY3JlYXRlRXJyb3JSZXF1ZXN0SWQpIHx8IG5ldHdvcmtFcnJvckV4Y2VwdGlvbikge1xuICAgICAgICAgICAgbGV0IHNsZWVwVGltZSA9IDUwMDA7XG4gICAgICAgICAgICBhd2FpdCBzbGVlcChzbGVlcFRpbWUpO1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCAxMSkge1xuICAgICAgICAgICAgICAgIGxldCBjcmVhdGVSZXN1bHRSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgICAgICBsZXQgY3JlYXRlRXJyb3JSZXF1ZXN0SWQ6IGFueTtcbiAgICAgICAgICAgICAgICBsZXQgbmV0d29ya0Vycm9yRXhjZXB0aW9uOiBhbnk7XG4gICAgICAgICAgICAgICAgbGV0IGNyZWF0ZVJlc3VsdDogYW55O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJlc3VsdCA9IGF3YWl0IGNsaWVudC5jcmVhdGVTdGFjayhjb250ZW50LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUmVzdWx0UmVxdWVzdElkID0gY3JlYXRlUmVzdWx0LlJlcXVlc3RJZFxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRXJyb3JSZXF1ZXN0SWQgPSBlLmRhdGEuUmVxdWVzdElkXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ1NlcnZpY2VVbmF2YWlsYWJsZScgfHwgZS5jb2RlID09ICdMYXN0VG9rZW5Qcm9jZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yRXhjZXB0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVFcnJvclJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gc3luYyB1cGRhdGUgc3RhY2s6IEVycm9yQ29kZTogJXNcXG5SZXF1ZXN0ZWRJZDogJXNcXG5FcnJvck1lc3NhZ2U6JXMnLCBlLmNvZGUsIGNyZWF0ZUVycm9yUmVxdWVzdElkLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCghY3JlYXRlUmVzdWx0UmVxdWVzdElkICYmICFjcmVhdGVFcnJvclJlcXVlc3RJZCkgfHwgbmV0d29ya0Vycm9yRXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGVlcFRpbWUgPCAyMDAwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xlZXBUaW1lID0gc2xlZXBUaW1lICsgNTAwMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKHNsZWVwVGltZSk7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgY3JlYXRlUmVzdWx0LlN0YWNrSWQpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5SZXF1ZXN0ZWRJZDogJXNcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycy5ibHVlKGNyZWF0ZVJlc3VsdC5SZXF1ZXN0SWQpLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuU3RhY2tJZCksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBleGl0KDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSA+PSAxMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YWNrSWRJbmZvID0gYXdhaXQgdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUsIHJlc291cmNlR3JvdXBJZClcbiAgICAgICAgICAgICAgICBpZiAobmV3U3RhY2tJZEluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBuZXdTdGFja0lkSW5mby5TdGFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXG4g4pyFIFRoZSBkZXBsb3ltZW50KGNyZWF0ZSBzdGFjaykgaGFzIGNvbXBsZXRlZCFcXG5TdGFja0lkOiAlc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuYmx1ZShuZXdTdGFja0lkSW5mby5TdGFja0lkKSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGNyZWF0ZSBzdGFjaywgcGxlYXNlIGNoZWNrIHlvdSBzZXJ2aWNlIGVuZHBvaW50LicpXG4gICAgICAgICAgICAgICAgICAgIGV4aXQoMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBjcmVhdGVSZXN1bHQuU3RhY2tJZCk7XG4gICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxuICAgICAgICAgICAgY29sb3JzLmJsdWUoY3JlYXRlUmVzdWx0LlJlcXVlc3RJZCksXG4gICAgICAgICAgICBjb2xvcnMuYmx1ZShjcmVhdGVSZXN1bHQuU3RhY2tJZCksXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpZmZPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbiAgICBwYXRoOiBzdHJpbmc7XG4gICAgc3RyZWFtPzogTm9kZUpTLldyaXRhYmxlU3RyZWFtO1xuICAgIGNvbnRleHRMaW5lczogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlcGxveU9wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuXG4gICAgLyoqXG4gICAgICogT25seSBzZWxlY3QgdGhlIGdpdmVuIHN0YWNrXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGV4Y2x1c2l2ZWx5PzogYm9vbGVhbjtcbiAgICBwYXJhbWV0ZXJzPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkIH07XG4gICAgdGltZW91dDogc3RyaW5nO1xuICAgIHN5bmM6IGJvb2xlYW47XG4gICAgb3V0cHV0c0ZpbGU6IGJvb2xlYW47XG4gICAgc2tpcElmTm9DaGFuZ2VzOiBib29sZWFuO1xuICAgIGRpc2FibGVSb2xsYmFjazogYm9vbGVhbjtcbiAgICByZXNvdXJjZUdyb3VwSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXN0cm95T3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lczogc3RyaW5nW107XG4gICAgcXVpZXQ/OiBib29sZWFuO1xuICAgIHN5bmM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRPcHRpb25zIHtcbiAgICBzdGFja05hbWU6IHN0cmluZ1tdO1xuICAgIGxvZ2ljYWxSZXNvdXJjZUlkOiBzdHJpbmc7XG4gICAgcGFnZU51bWJlcjogc3RyaW5nO1xuICAgIHBhZ2VTaXplOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3V0UHV0T3B0aW9ucyB7XG4gICAgc3RhY2tOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VPcHRpb25zIHtcbiAgICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW5lcmF0ZVN0YWNrSW5mb09wdGlvbnMge1xuICAgIHJlc291cmNlR3JvdXBJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RTdGFja09wdGlvbnMge1xuICAgIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuICAgIHBhZ2VOdW1iZXI6IHN0cmluZztcbiAgICBwYWdlU2l6ZTogc3RyaW5nO1xuICAgIGFsbDogc3RyaW5nO1xuICAgIHJlc291cmNlR3JvdXBJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1NldE9wdGlvbnMge1xuICAgIGdsb2JhbDogc3RyaW5nO1xuICAgIGVuZHBvaW50OiBzdHJpbmc7XG4gICAgcmVnaW9uOiBzdHJpbmc7XG4gICAgbW9kZTogc3RyaW5nO1xuICAgIGFrOiBzdHJpbmc7XG4gICAgc2s6IHN0cmluZztcbiAgICBzdHM6IHN0cmluZztcbiAgICByYW1Sb2xlQXJuOiBzdHJpbmc7XG4gICAgcm9sZVNlc3Npb25OYW1lOiBzdHJpbmc7XG4gICAgcmFtUm9sZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkQ29uZmlnT3B0aW9ucyB7XG4gICAgZ2xvYmFsPzogc3RyaW5nO1xuICAgIGxvYWRGaWxlUGF0aDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnIHtcbiAgICByZWFkb25seSBLZXk6IHN0cmluZztcbiAgICByZWFkb25seSBWYWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVBbmRVcGRhdGVMYW5ndWFnZUluZm8obGFuZ3VhZ2U6IHN0cmluZykge1xuICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgUFJPSkVDVF9DT05GSUcpO1xuICAgIGxldCBmaWxlQ29udGVudDogYW55O1xuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGluZm8gPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcbiAgICAgICAgaW5mb1snbGFuZ3VhZ2VJbmZvJ10gPSBsYW5ndWFnZTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoaW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkTGFuZ3VhZ2VJbmZvKCkge1xuICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgUFJPSkVDVF9DT05GSUcpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGVDb250ZW50KVsnbGFuZ3VhZ2VJbmZvJ10udG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJydcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWRMZWZ0KG46IG51bWJlciwgeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoeCkge1xuICAgICAgICByZXR1cm4gJyAnLnJlcGVhdChNYXRoLm1heCgwLCBuIC0geC5sZW5ndGgpKSArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWRSaWdodChuOiBudW1iZXIsIHg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHgpIHtcbiAgICAgICAgcmV0dXJuIHggKyAnICcucmVwZWF0KE1hdGgubWF4KDAsIG4gLSB4Lmxlbmd0aCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3J0ZW4obWF4V2lkdGg6IG51bWJlciwgcDogc3RyaW5nKSB7XG4gICAgaWYgKHAubGVuZ3RoIDw9IG1heFdpZHRoKSB7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgICBjb25zdCBoYWxmID0gTWF0aC5mbG9vcigobWF4V2lkdGggLSAzKSAvIDIpO1xuICAgIHJldHVybiBwLnN1YnN0cigwLCBoYWxmKSArICcuLi4nICsgcC5zdWJzdHIocC5sZW5ndGggLSBoYWxmKTtcbn0iXX0=