"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkToolkit = void 0;
const colors = require("colors/safe");
const fs = require("fs");
const path = require("path");
const readlineSync = require("readline-sync");
const cipher_1 = require("./util/cipher");
const util_1 = require("util");
const rosClient = require('@alicloud/ros-2019-09-10');
const os = require('os');
const child_process_1 = require("child_process");
const credentials_1 = require("@alicloud/credentials");
const cloud_assembly_1 = require("./api/cloud-assembly");
const logging_1 = require("./logging");
const process_1 = require("process");
const diff_1 = require("./diff");
const serialize_1 = require("./serialize");
const util_2 = require("util");
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
const exec = util_2.promisify(child_process_1.exec);
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
        let modeType = await CdkToolkit.getJson(CONFIG_NAME, 'type');
        let endpoint = await CdkToolkit.getJson(CONFIG_NAME, 'endpoint');
        let configInfo = {};
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
        let newAccessKeyId;
        let newAccessKeySecret;
        let newSecurityToken;
        const cred = new credentials_1.default(configInfo);
        try {
            newAccessKeyId = await cred.getAccessKeyId();
            newAccessKeySecret = await cred.getAccessKeySecret();
            newSecurityToken = await cred.getSecurityToken();
        }
        catch (e) {
            logging_1.error('WANRNING: Please check the accuracy of the credential information you import from CLI config!' + e.message);
            process_1.exit();
        }
        if (!newSecurityToken) {
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
        await this.syncStackInfo();
        const stacks = await this.selectStacksForDeploy(options.stackNames, options.exclusively);
        const stackName = options.stackNames.length !== 0 ? options.stackNames[0] : stacks.stackArtifacts[0].id;
        let region = await CdkToolkit.getJson(CONFIG_NAME, 'regionId');
        const client = await this.getRosClient();
        let templateBody = fs.readFileSync(`./cdk.out/${stackName}.template.json`);
        let content = {
            StackName: stackName.toString(),
            RegionId: region,
            TimeoutInMinutes: options.timeout,
            TemplateBody: templateBody,
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
        let stackInfo = await this.findStackInfo(stackName);
        if (stackInfo.stackId) {
            content['StackId'] = stackInfo.stackId;
            client.updateStack(content).then((res) => {
                this.updateStackInfo(stackName, res.StackId);
                logging_1.success(`\n ✅ The deployment(update stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(res.RequestId), colors.blue(res.StackId));
            }, (ex) => {
                // when reject, means the stack in ros has been deleted from console
                // so use create api to create a new stack
                if (ex.code == 'NotSupported' && ex.message.startsWith('Update the completely same stack')) {
                    this.updateStackInfo(stackName, stackInfo.stackId);
                    logging_1.success('The stack is completely the same, there is no need to update.');
                }
                else if (ex.code == 'StackNotFound') {
                    client.createStack(content).then((res) => {
                        this.updateStackInfo(stackName, res.StackId);
                        logging_1.success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(res.RequestId), colors.blue(res.StackId));
                    }, (ex2) => {
                        logging_1.error('fail to create stack(%s): %s %s', ex2.requestId, ex2.code, ex2.message);
                    });
                }
                else {
                    logging_1.error('fail to update stack: %s %s', ex.code, ex.message);
                }
            });
        }
        else {
            // fixed
            // bug: when updating, the console will display error: the stack name has been existing.
            // need ros client API: updateStack
            client.createStack(content).then((res) => {
                this.updateStackInfo(stackName, res.StackId);
                logging_1.success(`\n ✅ The deployment(create stack) has completed!\nRequestedId: %s\nStackId: %s`, colors.blue(res.RequestId), colors.blue(res.StackId));
            }, (ex) => {
                logging_1.error('fail to create stack: %s %s', ex.code, ex.message);
            });
        }
    }
    async diff(options) {
        let stacks = await this.selectStacksForDestroy(options.stackNames);
        const client = await this.getRosClient();
        let regionInLocal = await CdkToolkit.getJson(CONFIG_NAME, 'regionId');
        let temp = options.region ? options.region : regionInLocal;
        const stream = options.stream || process.stderr;
        const contextLines = options.contextLines || 3;
        for (let stack of stacks.stackArtifacts) {
            let stackInfo = await this.findStackInfo(stack.id);
            if (!stackInfo.stackId) {
                stream.write(util_1.format('Stack %s has not been deployed.\n', colors.bold(stack.displayName)));
                continue;
            }
            client.getTemplate({ RegionId: temp, StackId: stackInfo.stackId })
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
        client
            .listStackEvents({
            StackId: (await this.findStackInfo(options.stackName[0])).stackId,
            RegionId: options.region ? options.region : await CdkToolkit.getJson(CONFIG_NAME, 'regionId'),
            LogicalResourceId: LogicalResourceIds,
            PageSize: options.pageSize ? Number(options.pageSize) : 10,
            PageNumber: options.pageNumber ? Number(options.pageNumber) : 1
        })
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
    async resource(options) {
        await this.syncStackInfo();
        let stacks = await this.selectStacksForDestroy(options.stackNames);
        let stackNames = [];
        for (let stack of stacks.stackArtifacts) {
            if ((await this.findStackInfo(stack.id)).stackId) {
                stackNames.push(stack.id);
            }
        }
        const client = await this.getRosClient();
        for (let stackName of stackNames) {
            client
                .listStackResources({
                StackId: (await this.findStackInfo(stackName)).stackId,
                RegionId: options.region ? options.region : await CdkToolkit.getJson(CONFIG_NAME, 'regionId'),
            })
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
    async listStacks(options) {
        await this.syncStackInfo();
        const client = await this.getRosClient();
        let stacks = await this.selectStacksForList([]);
        let params = {};
        params = {
            RegionId: options.region ? options.region : await CdkToolkit.getJson(CONFIG_NAME, 'regionId'),
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
        client.listStacks(params)
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
        const client = await this.getRosClient();
        for (let stackName of stackNames) {
            client
                .deleteStack({
                StackId: (await this.findStackInfo(stackName)).stackId,
                RegionId: options.region ? options.region : await CdkToolkit.getJson(CONFIG_NAME, 'regionId'),
            })
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
                logging_1.error("WANRNING: Please check the accuracy of the mode and profele configuration entered.");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRvb2xraXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstdG9vbGtpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4Q0FBOEM7QUFDOUMsMENBQWlEO0FBQ2pELCtCQUE4QjtBQUM5QixNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUN0RCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsaURBQThDO0FBQzlDLHVEQUE0RDtBQUM1RCx5REFBZ0g7QUFFaEgsdUNBQWlFO0FBRWpFLHFDQUErQjtBQUMvQixpQ0FBd0M7QUFDeEMsMkNBQW1EO0FBQ25ELCtCQUFpQztBQUVqQyxNQUFNLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQztBQUMxQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDeEIsTUFBTSxXQUFXLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN2QyxNQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztBQUNyQyxNQUFNLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztBQUNsQyxNQUFNLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQztBQUMvQyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7QUFDMUIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDO0FBQzVCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQztBQUM5QixNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUM7QUFFaEMsTUFBTSxJQUFJLEdBQUcsZ0JBQVMsQ0FBQyxvQkFBSyxDQUFDLENBQUM7QUFtQzlCOzs7OztHQUtHO0FBQ0gsTUFBYSxVQUFVO0lBb0JyQixZQUE2QixLQUFzQjtRQUF0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtJQUFHLENBQUM7SUFuQi9DLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQWdCLEVBQUUsR0FBVyxF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QWE7b0JBQy9CLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtpQkFDbkIsQ0FBQTtnQkFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUN6QixhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO29CQUNqQyxjQUFjLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQTtpQkFDbEM7cUJBQ0ksSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtvQkFDcEMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtvQkFDbEMsY0FBYyxDQUFDLFFBQVEsR0FBSSxjQUFjLENBQUE7aUJBQzFDO3FCQUNJLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7b0JBQ3RDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtvQkFDekMsY0FBYyxDQUFDLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQTtpQkFDbEQ7cUJBQ0ksSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTtvQkFDdEMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO29CQUN6QyxjQUFjLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFBO2lCQUNsRDthQUNGO1lBQ0QsSUFBSSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzlELGVBQUssQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDO2dCQUM1RixjQUFJLEVBQUUsQ0FBQzthQUNSO1lBQ0QsT0FBTyxjQUFjLENBQUE7U0FDdEI7YUFBTTtZQUNMLGVBQUssQ0FBQyxrR0FBa0csQ0FBQyxDQUFDO1lBQzFHLGNBQUksRUFBRSxDQUFDO1NBQ1I7SUFDSCxDQUFDO0NBQ0Y7QUEvdEJELGdDQSt0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcclxuaW1wb3J0IHsgZGVjaXBoZXIsIGNpcGhlciB9IGZyb20gJy4vdXRpbC9jaXBoZXInO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICd1dGlsJztcclxuY29uc3Qgcm9zQ2xpZW50ID0gcmVxdWlyZSgnQGFsaWNsb3VkL3Jvcy0yMDE5LTA5LTEwJyk7XHJcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcclxuaW1wb3J0IHsgZXhlYyBhcyBfZXhlYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHMsIHsgQ29uZmlnIH0gZnJvbSAnQGFsaWNsb3VkL2NyZWRlbnRpYWxzJztcclxuaW1wb3J0IHsgQ2xvdWRBc3NlbWJseSwgRGVmYXVsdFNlbGVjdGlvbiwgRXh0ZW5kZWRTdGFja1NlbGVjdGlvbiwgU3RhY2tDb2xsZWN0aW9uIH0gZnJvbSAnLi9hcGkvY2xvdWQtYXNzZW1ibHknO1xyXG5pbXBvcnQgeyBDbG91ZEV4ZWN1dGFibGUgfSBmcm9tICcuL2FwaS9jbG91ZC1leGVjdXRhYmxlJztcclxuaW1wb3J0IHsgZGF0YSwgZXJyb3IsIHByaW50LCBzdWNjZXNzLCB3YXJuaW5nIH0gZnJvbSAnLi9sb2dnaW5nJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBleGl0IH0gZnJvbSAncHJvY2Vzcyc7XHJcbmltcG9ydCB7IHByaW50U3RhY2tEaWZmIH0gZnJvbSAnLi9kaWZmJztcclxuaW1wb3J0IHsgZGVzZXJpYWxpemVTdHJ1Y3R1cmUgfSBmcm9tICcuL3NlcmlhbGl6ZSc7XHJcbmltcG9ydCB7IHByb21pc2lmeSB9IGZyb20gJ3V0aWwnO1xyXG5cclxuY29uc3QgQ09ORklHX05BTUUgPSAnYWNjb3VudC5jb25maWcuanNvbic7XHJcbmNvbnN0IExPQ0FMX1BBVEggPSAnLi8nO1xyXG5jb25zdCBHTE9CQUxfUEFUSCA9IF9fZGlybmFtZSArICcvLi4vJztcclxuY29uc3QgU1RBQ0tfSU5GTyA9ICdzdGFjay5pbmZvLmpzb24nO1xyXG5jb25zdCBERVBMT1lfU1RBQ0tfSURfTEVOR1RIID0gMzY7XHJcbmNvbnN0IENMSV9DT05GSUdfRklMRSA9ICcvLmFsaXl1bi9jb25maWcuanNvbic7XHJcbmNvbnN0IElOSVRfU1RBQ0sgPSAnaW5pdCc7XHJcbmNvbnN0IFNZTlRIX1NUQUNLID0gJ3N5bnRoJztcclxuY29uc3QgREVQTE9ZX1NUQUNLID0gJ2RlcGxveSc7XHJcbmNvbnN0IERFU1RST1lfU1RBQ0sgPSAnZGVzdHJveSc7XHJcblxyXG5jb25zdCBleGVjID0gcHJvbWlzaWZ5KF9leGVjKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2RrVG9vbGtpdFByb3BzIHtcclxuICAvKipcclxuICAgKiBUaGUgQ2xvdWQgRXhlY3V0YWJsZVxyXG4gICAqL1xyXG4gIGNsb3VkRXhlY3V0YWJsZTogQ2xvdWRFeGVjdXRhYmxlO1xyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGJlIHZlcmJvc2VcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgdmVyYm9zZT86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIERvbid0IHN0b3Agb24gZXJyb3IgbWV0YWRhdGFcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgaWdub3JlRXJyb3JzPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVHJlYXQgd2FybmluZ3MgaW4gbWV0YWRhdGEgYXMgZXJyb3JzXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIHN0cmljdD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gKHNldHRpbmdzIGFuZCBjb250ZXh0KVxyXG4gICAqL1xyXG4gIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUb29sa2l0IGxvZ2ljXHJcbiAqXHJcbiAqIFRoZSB0b29sa2l0IHJ1bnMgdGhlIGBjbG91ZEV4ZWN1dGFibGVgIHRvIG9idGFpbiBhIGNsb3VkIGFzc2VtYmx5XHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2RrVG9vbGtpdCB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0SnNvbihmaWxlTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgYWxsb3dlZEVtcHR5OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGxldCBmaWxlUGF0aCA9IExPQ0FMX1BBVEggKyBmaWxlTmFtZTtcclxuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xyXG4gICAgICBsZXQgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZSlba2V5XTtcclxuICAgIH0gZWxzZSBpZiAoZmlsZU5hbWUgPT09IFNUQUNLX0lORk8pIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGZpbGVQYXRoID0gR0xPQkFMX1BBVEggKyBmaWxlTmFtZTtcclxuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xyXG4gICAgICBsZXQgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZSlba2V5XTtcclxuICAgIH1cclxuICAgIGlmICghYWxsb3dlZEVtcHR5KSB7XHJcbiAgICAgIGVycm9yKFwiUGxlYXNlIHVzZSAncm9zLWNkayBjb25maWcgKC1nKScgdG8gc2V0IHlvdXIgYWNjb3VudCBjb25maWd1cmF0aW9uIGZpcnN0bHkhXCIpO1xyXG4gICAgICBleGl0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb3BzOiBDZGtUb29sa2l0UHJvcHMpIHt9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRSb3NDbGllbnQoKSB7XHJcbiAgICBsZXQgbW9kZVR5cGUgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICd0eXBlJylcclxuICAgIGxldCBlbmRwb2ludCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2VuZHBvaW50JylcclxuICAgIGxldCBjb25maWdJbmZvOiBhbnkgPSB7fTtcclxuICAgIGxldCBjbGllbnQ7XHJcbiAgICBzd2l0Y2ggKG1vZGVUeXBlKXtcclxuICAgICAgY2FzZSAnZWNzX3JhbV9yb2xlJzpcclxuICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XHJcbiAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcclxuICAgICAgICAgIHJvbGVOYW1lOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyb2xlTmFtZScpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3N0cyc6XHJcbiAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xyXG4gICAgICAgICAgdHlwZTogJ3N0cycsXHJcbiAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5SWQnKSksXHJcbiAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2FjY2Vzc0tleVNlY3JldCcpKSxcclxuICAgICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGRlY2lwaGVyKGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3NlY3VyaXR5VG9rZW4nKSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmFtX3JvbGVfYXJuJzpcclxuICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XHJcbiAgICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcclxuICAgICAgICAgIGFjY2Vzc0tleUlkOiAgYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5SWQnKSksXHJcbiAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6ICBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlTZWNyZXQnKSksXHJcbiAgICAgICAgICByb2xlQXJuOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyb2xlQXJuJyksXHJcbiAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ3JvbGVTZXNzaW9uTmFtZScpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2FjY2Vzc19rZXknOlxyXG4gICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcclxuICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcclxuICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlJZCcpKSxcclxuICAgICAgICAgIGFjY2Vzc0tleVNlY3JldDogYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5U2VjcmV0JykpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3QWNjZXNzS2V5SWQ7XHJcbiAgICBsZXQgbmV3QWNjZXNzS2V5U2VjcmV0O1xyXG4gICAgbGV0IG5ld1NlY3VyaXR5VG9rZW47XHJcbiAgICBjb25zdCBjcmVkID0gbmV3IENyZWRlbnRpYWxzKGNvbmZpZ0luZm8pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbmV3QWNjZXNzS2V5SWQgPSBhd2FpdCBjcmVkLmdldEFjY2Vzc0tleUlkKCk7XHJcbiAgICAgIG5ld0FjY2Vzc0tleVNlY3JldCA9IGF3YWl0IGNyZWQuZ2V0QWNjZXNzS2V5U2VjcmV0KCk7XHJcbiAgICAgIG5ld1NlY3VyaXR5VG9rZW4gPSBhd2FpdCBjcmVkLmdldFNlY3VyaXR5VG9rZW4oKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZXJyb3IoXHJcbiAgICAgICAgJ1dBTlJOSU5HOiBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBjcmVkZW50aWFsIGluZm9ybWF0aW9uIHlvdSBpbXBvcnQgZnJvbSBDTEkgY29uZmlnIScgKyBlLm1lc3NhZ2UsXHJcbiAgICAgICk7XHJcbiAgICAgIGV4aXQoKTtcclxuICAgIH1cclxuICAgIGlmICghbmV3U2VjdXJpdHlUb2tlbikge1xyXG4gICAgICBjbGllbnQgPSBuZXcgcm9zQ2xpZW50KHtcclxuICAgICAgICBlbmRwb2ludDogZW5kcG9pbnQsXHJcbiAgICAgICAgYWNjZXNzS2V5SWQ6IG5ld0FjY2Vzc0tleUlkLFxyXG4gICAgICAgIGFjY2Vzc0tleVNlY3JldDogbmV3QWNjZXNzS2V5U2VjcmV0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNsaWVudCA9IG5ldyByb3NDbGllbnQoe1xyXG4gICAgICAgIGVuZHBvaW50OiBlbmRwb2ludCxcclxuICAgICAgICBhY2Nlc3NLZXlJZDogbmV3QWNjZXNzS2V5SWQsXHJcbiAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBuZXdBY2Nlc3NLZXlTZWNyZXQsXHJcbiAgICAgICAgc2VjdXJpdHlUb2tlbjogbmV3U2VjdXJpdHlUb2tlblxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGllbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgY29uZmlnKGdsb2JhbDogYm9vbGVhbikge1xyXG4gICAgbGV0IGNvbmZpZ1NhdmVQYXRoID0gKGdsb2JhbCA/IEdMT0JBTF9QQVRIIDogTE9DQUxfUEFUSCkgKyBDT05GSUdfTkFNRTtcclxuICAgIGxldCBtb2RlVHlwZSA9IFsnQUsnLCAnU3RzVG9rZW4nLCAnUmFtUm9sZUFybicsICdFY3NSYW1Sb2xlJ11cclxuICAgIGxldCBlbmRwb2ludCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignZW5kcG9pbnQob3B0aW9uYWwsIGRlZmF1bHQ6aHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tKTonLHtkZWZhdWx0SW5wdXQ6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nfSk7XHJcbiAgICBsZXQgcmVnaW9uSWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2RlZmF1bHRSZWdpb25JZChvcHRpb25hbCwgZGVmYXVsdDpjbi1oYW5nemhvdSk6Jywge2RlZmF1bHRJbnB1dDogJ2NuLWhhbmd6aG91J30pO1xyXG4gICAgbGV0IG1vZGVJbmRleCA9IHJlYWRsaW5lU3luYy5rZXlJblNlbGVjdChtb2RlVHlwZSwnQXV0aGVudGljYXRlIG1vZGU6Jyk7XHJcbiAgICBsZXQgaW5wdXRDb25maWdJbmZvOiBhbnkgPSB7fTtcclxuICAgIGxldCBjaGVja0NvbW1hbmQ6IHN0cmluZztcclxuICAgIGxldCBjdXJsQ29tbWFuZDogc3RyaW5nO1xyXG4gICAgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdFY3NSYW1Sb2xlJyl7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcclxuICAgICAgICAgIGNoZWNrQ29tbWFuZCA9ICdwb3dlcnNoZWxsIC1Db21tYW5kIFwiKGN1cmwgLVVSaSBodHRwOi8vMTAwLjEwMC4xMDAuMjAwL2xhdGVzdC9tZXRhLWRhdGEvUmFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzLykuU3RhdHVzQ29kZVwiJztcclxuICAgICAgICAgIGN1cmxDb21tYW5kID0gJ3Bvd2Vyc2hlbGwgLUNvbW1hbmQgXCIoY3VybCAtVVJpIGh0dHA6Ly8xMDAuMTAwLjEwMC4yMDAvbGF0ZXN0L21ldGEtZGF0YS9SYW0vc2VjdXJpdHktY3JlZGVudGlhbHMvKS5Db250ZW50XCInO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgY2hlY2tDb21tYW5kID0gJ2N1cmwgaHR0cDovLzEwMC4xMDAuMTAwLjIwMC9sYXRlc3QvbWV0YS1kYXRhL1JhbS9zZWN1cml0eS1jcmVkZW50aWFscy8gLW8gL2Rldi9udWxsIC1zIC13ICV7aHR0cF9jb2RlfSc7XHJcbiAgICAgICAgICBjdXJsQ29tbWFuZCA9ICdjdXJsIGh0dHA6Ly8xMDAuMTAwLjEwMC4yMDAvbGF0ZXN0L21ldGEtZGF0YS9SYW0vc2VjdXJpdHktY3JlZGVudGlhbHMvJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHsgc3Rkb3V0OiBjaGVja1N0ZG91dCB9ID0gYXdhaXQgZXhlYyhjaGVja0NvbW1hbmQpO1xyXG4gICAgICAgICAgaWYgKGNoZWNrU3Rkb3V0LnRyaW0oKSAhPT0gJzIwMCcpe1xyXG4gICAgICAgICAgICBlcnJvcihcclxuICAgICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gVXNlIEVjc1JhbVJvbGUgY29uZmlnLCBQbGVhc2UgYmluZCBFY3NSYW1Sb2xlIHRvIHRoZSBob3N0LicsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGV4aXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBlcnJvcihcclxuICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIFVzZSBFY3NSYW1Sb2xlIGNvbmZpZywgUGxlYXNlIGJpbmQgRWNzUmFtUm9sZSB0byB0aGUgaG9zdCEnICsgZS5tZXNzYWdlLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGV4aXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBzdGRvdXQ6IGN1cmxTdGRvdXQgfSA9IGF3YWl0IGV4ZWMoY3VybENvbW1hbmQpO1xyXG4gICAgICAgIGxldCByb2xlTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgcm9sZU5hbWUsIFRoZSBjb25maWd1cmVkIHJvbGUgb2YgdGhlIGhvc3Q6IFske2N1cmxTdGRvdXQudHJpbSgpfV1gLHtkZWZhdWx0SW5wdXQ6IGN1cmxTdGRvdXQudHJpbSgpfSk7XHJcbiAgICAgICAgaW5wdXRDb25maWdJbmZvID0ge1xyXG4gICAgICAgICAgdHlwZTogJ2Vjc19yYW1fcm9sZScsXHJcbiAgICAgICAgICByb2xlTmFtZTogcm9sZU5hbWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1N0c1Rva2VuJyl7XHJcbiAgICAgIGxldCBhY2Nlc3NLZXlJZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignYWNjZXNzS2V5SWQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xyXG4gICAgICBsZXQgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdhY2Nlc3NLZXlTZWNyZXQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xyXG4gICAgICBsZXQgc2VjdXJpdHlUb2tlbiA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignc2VjdXJpdHlUb2tlbjonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XHJcbiAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcclxuICAgICAgICB0eXBlOiAnc3RzJyxcclxuICAgICAgICBhY2Nlc3NLZXlJZDogIGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlJZCksXHJcbiAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiAgYXdhaXQgY2lwaGVyKGFjY2Vzc0tleVNlY3JldCksXHJcbiAgICAgICAgc2VjdXJpdHlUb2tlbjogIGF3YWl0IGNpcGhlcihzZWN1cml0eVRva2VuKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1JhbVJvbGVBcm4nKXtcclxuICAgICAgbGV0IGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdhY2Nlc3NLZXlJZDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XHJcbiAgICAgIGxldCBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2FjY2Vzc0tleVNlY3JldDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XHJcbiAgICAgIGxldCByb2xlQXJuID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdyb2xlQXJuKGVnOiBhY3M6cmFtOjoqKioqKio6cm9sZS8qKioqKiopOicpO1xyXG4gICAgICBsZXQgcm9sZVNlc3Npb25OYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdyb2xlU2Vzc2lvbk5hbWU6Jyk7XHJcbiAgICAgIGlucHV0Q29uZmlnSW5mbyA9IHtcclxuICAgICAgICB0eXBlOiAncmFtX3JvbGVfYXJuJyxcclxuICAgICAgICBhY2Nlc3NLZXlJZDogIGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlJZCksXHJcbiAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiAgYXdhaXQgY2lwaGVyKGFjY2Vzc0tleVNlY3JldCksXHJcbiAgICAgICAgcm9sZUFybjogcm9sZUFybixcclxuICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHJvbGVTZXNzaW9uTmFtZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0FLJykge1xyXG4gICAgICBsZXQgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2FjY2Vzc0tleUlkOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcclxuICAgICAgbGV0IGFjY2Vzc0tleVNlY3JldCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignYWNjZXNzS2V5U2VjcmV0OicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcclxuICAgICAgaW5wdXRDb25maWdJbmZvID0ge1xyXG4gICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcclxuICAgICAgICBhY2Nlc3NLZXlJZDogIGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlJZCksXHJcbiAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiAgYXdhaXQgY2lwaGVyKGFjY2Vzc0tleVNlY3JldClcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBlcnJvcihcclxuICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBjZXJ0aWZpY2F0aW9uIG1ldGhvZCBtdXN0IGJlIHNlbGVjdGVkJyxcclxuICAgICAgKTtcclxuICAgICAgZXhpdCgpO1xyXG4gICAgfVxyXG4gICAgaW5wdXRDb25maWdJbmZvLmVuZHBvaW50ID0gZW5kcG9pbnRcclxuICAgIGlucHV0Q29uZmlnSW5mby5yZWdpb25JZCA9IHJlZ2lvbklkXHJcbiAgICBsZXQgZmlsZSA9IHBhdGguam9pbihjb25maWdTYXZlUGF0aCk7XHJcbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KGlucHV0Q29uZmlnSW5mbywgbnVsbCwgJ1xcdCcpKTtcclxuICAgIHN1Y2Nlc3MoYFxcbiDinIUgWW91ciBjZGsgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkhYCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgbG9hZENsaUNvbmZpZyhvcHRpb25zOiBMb2FkQ29uZmlnT3B0aW9ucykge1xyXG4gICAgbGV0IGNvbmZpZ1NhdmVQYXRoID0gKG9wdGlvbnMuZ2xvYmFsID8gR0xPQkFMX1BBVEggOiBMT0NBTF9QQVRIKSArIENPTkZJR19OQU1FO1xyXG4gICAgbGV0IGNvbmZpZ3VyZUluZm9zID0gYXdhaXQgdGhpcy5nZXRDbGlDb25maWcob3B0aW9ucy5sb2FkRmlsZVBhdGgpXHJcbiAgICBsZXQgbW9kZVR5cGUgPSBPYmplY3Qua2V5cyhjb25maWd1cmVJbmZvcyk7XHJcbiAgICBsZXQgbW9kZUluZGV4ID0gcmVhZGxpbmVTeW5jLmtleUluU2VsZWN0KG1vZGVUeXBlLCdTZWxlY3QgYXV0aGVudGljYXRlIG1vZGU6Jyk7XHJcbiAgICBsZXQgcHJvZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgbGV0IHByb2ZpbGVDb25maWc6IGFueSA9IHt9O1xyXG4gICAgaWYgKG1vZGVJbmRleCA9PT0gLTEpIHtcclxuICAgICAgZXJyb3IoXHJcbiAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGEgY2VydGlmaWNhdGlvbiBtZXRob2QgbXVzdCBiZSBzZWxlY3RlZCcsXHJcbiAgICAgICk7XHJcbiAgICAgIGV4aXQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdBSycpIHtcclxuICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuQUsubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1N0c1Rva2VuJykge1xyXG4gICAgICBwcm9maWxlTmFtZXMgPSBjb25maWd1cmVJbmZvcy5TdHNUb2tlbi5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnUmFtUm9sZUFybicpIHtcclxuICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuUmFtUm9sZUFybi5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnRWNzUmFtUm9sZScpIHtcclxuICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuRWNzUmFtUm9sZS5tYXAoKGl0ZW06IHsgbmFtZTogYW55OyB9KSA9PiBpdGVtLm5hbWUpXHJcbiAgICB9XHJcbiAgICBsZXQgcHJvZmlsZUluZGV4ID0gcmVhZGxpbmVTeW5jLmtleUluU2VsZWN0KHByb2ZpbGVOYW1lcywnU2VsZWN0IEF1dGhlbnRpY2F0ZSBwcm9maWxlIG5hbWU6Jyk7XHJcbiAgICBpZiAocHJvZmlsZUluZGV4ID09PSAtMSkge1xyXG4gICAgICBlcnJvcihcclxuICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBjZXJ0aWZpY2F0aW9uIHByb2ZpbGUgbXVzdCBiZSBzZWxlY3RlZCcsXHJcbiAgICAgICk7XHJcbiAgICAgIGV4aXQoKTtcclxuICAgIH1cclxuICAgIGxldCBlbmRwb2ludCA9IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2VuZHBvaW50JywgdHJ1ZSlcclxuICAgIGxldCByZWdpb25JZDtcclxuICAgIGxldCBjb25maWdJbmZvOiBhbnkgPSB7fTtcclxuICAgIGVuZHBvaW50ID0gZW5kcG9pbnQgPyBlbmRwb2ludCA6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nO1xyXG4gICAgc3dpdGNoIChtb2RlVHlwZVttb2RlSW5kZXhdKXtcclxuICAgICAgY2FzZSAnQUsnOlxyXG4gICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5BSy5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcclxuICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10gfHwgIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddKSB7XHJcbiAgICAgICAgICBlcnJvcihcclxuICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGFjY2Vzc0tleUlkIG9yIGFjY2Vzc0tleVNlY3JldCBDYW5ub3QgYmUgZW1wdHkhJyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBleGl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpZ0luZm8gPSB7XHJcbiAgICAgICAgICB0eXBlOiAnYWNjZXNzX2tleScsXHJcbiAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10pLFxyXG4gICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10pXHJcbiAgICAgICAgfTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnU3RzVG9rZW4nOlxyXG4gICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5TdHNUb2tlbi5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcclxuICAgICAgICBpZiAoIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10gfHwgIXByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddIHx8ICEgcHJvZmlsZUNvbmZpZ1snc2VjdXJpdHlUb2tlbiddKSB7XHJcbiAgICAgICAgICBlcnJvcihcclxuICAgICAgICAgICAgJ1dBTlJOSU5HOiBJZiB3YW50IHRvIGRlcGxveSBvciBkZWxldGUgc3RhY2ssIGFjY2Vzc0tleUlkLCBhY2Nlc3NLZXlTZWNyZXQgb3Igc2VjdXJpdHlUb2tlbiBDYW5ub3QgYmUgZW1wdHkhJyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBleGl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpZ0luZm8gPSB7XHJcbiAgICAgICAgICB0eXBlOiAnc3RzJyxcclxuICAgICAgICAgIGFjY2Vzc0tleUlkOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSksXHJcbiAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSksXHJcbiAgICAgICAgICBzZWN1cml0eVRva2VuOiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snc2VjdXJpdHlUb2tlbiddKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ1JhbVJvbGVBcm4nOlxyXG4gICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5SYW1Sb2xlQXJuLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xyXG4gICAgICAgIGlmICghcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSB8fCAhcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10gfHwgIXByb2ZpbGVDb25maWdbJ3JvbGVBcm4nXSB8fCAhcHJvZmlsZUNvbmZpZ1sncm9sZVNlc3Npb25OYW1lJ10pIHtcclxuICAgICAgICAgIGVycm9yKFxyXG4gICAgICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYWNjZXNzS2V5SWQsIGFjY2Vzc0tleVNlY3JldCwgcm9sZUFybiBvciByb2xlU2Vzc2lvbk5hbWUgQ2Fubm90IGJlIGVtcHR5IScsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZXhpdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25maWdJbmZvID0ge1xyXG4gICAgICAgICAgdHlwZTogJ3JhbV9yb2xlX2FybicsXHJcbiAgICAgICAgICBhY2Nlc3NLZXlJZDogYXdhaXQgY2lwaGVyKHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10pLFxyXG4gICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhd2FpdCBjaXBoZXIocHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5U2VjcmV0J10pLFxyXG4gICAgICAgICAgcm9sZUFybjogcHJvZmlsZUNvbmZpZ1sncm9sZUFybiddLFxyXG4gICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiBwcm9maWxlQ29uZmlnWydyb2xlU2Vzc2lvbk5hbWUnXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Vjc1JhbVJvbGUnOlxyXG4gICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5FY3NSYW1Sb2xlLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xyXG4gICAgICAgIGlmICghcHJvZmlsZUNvbmZpZ1sncm9sZU5hbWUnXSkge1xyXG4gICAgICAgICAgZXJyb3IoXHJcbiAgICAgICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCByb2xlTmFtZSBDYW5ub3QgYmUgZW1wdHkhJyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBleGl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpZ0luZm8gPSB7XHJcbiAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcclxuICAgICAgICAgIHJvbGVOYW1lOiBwcm9maWxlQ29uZmlnWydyb2xlTmFtZSddXHJcbiAgICAgICAgfTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJlZ2lvbklkID0gcHJvZmlsZUNvbmZpZ1sncmVnaW9uJ10gPyBwcm9maWxlQ29uZmlnWydyZWdpb24nXSA6J2NuLWhhbmd6aG91JztcclxuICAgIGNvbmZpZ0luZm8ucmVnaW9uSWQgPSByZWdpb25JZFxyXG4gICAgY29uZmlnSW5mby5lbmRwb2ludCA9IGVuZHBvaW50XHJcbiAgICBsZXQgZmlsZSA9IHBhdGguam9pbihjb25maWdTYXZlUGF0aCk7XHJcbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KGNvbmZpZ0luZm8sIG51bGwsICdcXHQnKSk7XHJcbiAgICBzdWNjZXNzKGBcXG4g4pyFIFlvdXIgY2RrIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gbG9hZCBmcm9tIEFsaXl1biBDbGkgY29uZmlndXJhdGlvbiBzYXZlZCBzdWNjZXNzZnVsbHkgJXMgJXMhYCwgbW9kZVR5cGVbbW9kZUluZGV4XSwgcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGxpc3Qoc2VsZWN0b3JzOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XHJcbiAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0Zvckxpc3Qoc2VsZWN0b3JzKTtcclxuICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XHJcbiAgICAgIGxldCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpO1xyXG4gICAgICBsZXQgc3RhdHVzID0gc3RhY2tJbmZvLnN0YXR1c1xyXG4gICAgICBkYXRhKHN0YWNrLmlkLCBzdGF0dXMudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW50aGVzaXplIHRoZSBnaXZlbiBzZXQgb2Ygc3RhY2tzIChjYWxsZWQgd2hlbiB0aGUgdXNlciBydW5zICdjZGsgc3ludGgnKVxyXG4gICAqXHJcbiAgICogSU5QVVQ6IFN0YWNrIG5hbWVzIGNhbiBiZSBzdXBwbGllZCB1c2luZyBhIGdsb2IgZmlsdGVyLiBJZiBubyBzdGFja3MgYXJlXHJcbiAgICogZ2l2ZW4sIGFsbCBzdGFja3MgZnJvbSB0aGUgYXBwbGljYXRpb24gYXJlIGltcGxpY3RseSBzZWxlY3RlZC5cclxuICAgKlxyXG4gICAqIE9VVFBVVDogSWYgbW9yZSB0aGFuIG9uZSBzdGFjayBlbmRzIHVwIGJlaW5nIHNlbGVjdGVkLCBhbiBvdXRwdXQgZGlyZWN0b3J5XHJcbiAgICogc2hvdWxkIGJlIHN1cHBsaWVkLCB3aGVyZSB0aGUgdGVtcGxhdGVzIHdpbGwgYmUgd3JpdHRlbi5cclxuICAgKi9cclxuICBwdWJsaWMgYXN5bmMgc3ludGgoc3RhY2tOYW1lczogc3RyaW5nW10sIGV4Y2x1c2l2ZWx5OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xyXG4gICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEaWZmKHN0YWNrTmFtZXMsIGV4Y2x1c2l2ZWx5KTtcclxuXHJcbiAgICAvLyBpZiB3ZSBoYXZlIGEgc2luZ2xlIHN0YWNrLCBwcmludCBpdCB0byBTVERPVVRcclxuICAgIGlmIChzdGFja3Muc3RhY2tDb3VudCA9PT0gMSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja3MuZmlyc3RTdGFjay5pZCwgU1lOVEhfU1RBQ0spO1xyXG4gICAgICByZXR1cm4gc3RhY2tzLmZpcnN0U3RhY2sudGVtcGxhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFjay5pZCwgU1lOVEhfU1RBQ0spO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNJbnRlZ01vZGUgPSBwcm9jZXNzLmVudi5DREtfSU5URUdfTU9ERSA9PT0gJzEnO1xyXG4gICAgaWYgKGlzSW50ZWdNb2RlKSB7XHJcbiAgICAgIHJldHVybiBzdGFja3Muc3RhY2tBcnRpZmFjdHMubWFwKChzKSA9PiBzLnRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBub3Qgb3V0cHV0dGluZyB0ZW1wbGF0ZSB0byBzdGRvdXQsIGxldCdzIGV4cGxhaW4gdGhpbmdzIHRvIHRoZSB1c2VyIGEgbGl0dGxlIGJpdC4uLlxyXG4gICAgc3VjY2VzcyhgU3VjY2Vzc2Z1bGx5IHN5bnRoZXNpemVkIHRvICR7Y29sb3JzLmJsdWUocGF0aC5yZXNvbHZlKHN0YWNrcy5hc3NlbWJseS5kaXJlY3RvcnkpKX1gKTtcclxuICAgIHByaW50KFxyXG4gICAgICBgU3VwcGx5IGEgc3RhY2sgaWQgKCR7c3RhY2tzLnN0YWNrQXJ0aWZhY3RzLm1hcCgocykgPT4gY29sb3JzLmdyZWVuKHMuaWQpKS5qb2luKCcsICcpfSkgdG8gZGlzcGxheSBpdHMgdGVtcGxhdGUuYCxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBkZXBsb3kob3B0aW9uczogRGVwbG95T3B0aW9ucykge1xyXG4gICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XHJcbiAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRlcGxveShvcHRpb25zLnN0YWNrTmFtZXMsIG9wdGlvbnMuZXhjbHVzaXZlbHkpO1xyXG4gICAgY29uc3Qgc3RhY2tOYW1lID0gb3B0aW9ucy5zdGFja05hbWVzLmxlbmd0aCAhPT0gMCA/IG9wdGlvbnMuc3RhY2tOYW1lc1swXSA6IHN0YWNrcy5zdGFja0FydGlmYWN0c1swXS5pZDtcclxuICAgIGxldCByZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcpO1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcclxuICAgIGxldCB0ZW1wbGF0ZUJvZHkgPSBmcy5yZWFkRmlsZVN5bmMoYC4vY2RrLm91dC8ke3N0YWNrTmFtZX0udGVtcGxhdGUuanNvbmApO1xyXG4gICAgbGV0IGNvbnRlbnQ6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xyXG4gICAgICBTdGFja05hbWU6IHN0YWNrTmFtZS50b1N0cmluZygpLFxyXG4gICAgICBSZWdpb25JZDogcmVnaW9uLFxyXG4gICAgICBUaW1lb3V0SW5NaW51dGVzOiBvcHRpb25zLnRpbWVvdXQsXHJcbiAgICAgIFRlbXBsYXRlQm9keTogdGVtcGxhdGVCb2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5wYXJhbWV0ZXJzKSB7XHJcbiAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMTtcclxuICAgICAgbGV0IHBhcmFzID0gb3B0aW9ucy5wYXJhbWV0ZXJzO1xyXG4gICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYXMpIHtcclxuICAgICAgICBjb250ZW50WydQYXJhbWV0ZXJzLicgKyBjb3VudC50b1N0cmluZygpICsgJy5QYXJhbWV0ZXJLZXknXSA9IGtleTtcclxuICAgICAgICBjb250ZW50WydQYXJhbWV0ZXJzLicgKyBjb3VudC50b1N0cmluZygpICsgJy5QYXJhbWV0ZXJWYWx1ZSddID0gcGFyYXNba2V5XTtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrTmFtZSk7XHJcbiAgICBpZiAoc3RhY2tJbmZvLnN0YWNrSWQpIHtcclxuICAgICAgY29udGVudFsnU3RhY2tJZCddID0gc3RhY2tJbmZvLnN0YWNrSWQ7XHJcbiAgICAgIGNsaWVudC51cGRhdGVTdGFjayhjb250ZW50KS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgcmVzLlN0YWNrSWQpO1xyXG4gICAgICAgIHN1Y2Nlc3MoXHJcbiAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudCh1cGRhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxyXG4gICAgICAgICAgY29sb3JzLmJsdWUocmVzLlJlcXVlc3RJZCksXHJcbiAgICAgICAgICBjb2xvcnMuYmx1ZShyZXMuU3RhY2tJZCksXHJcbiAgICAgICAgKTtcclxuICAgICAgfSwgKGV4OiBhbnkpID0+IHtcclxuICAgICAgICAvLyB3aGVuIHJlamVjdCwgbWVhbnMgdGhlIHN0YWNrIGluIHJvcyBoYXMgYmVlbiBkZWxldGVkIGZyb20gY29uc29sZVxyXG4gICAgICAgIC8vIHNvIHVzZSBjcmVhdGUgYXBpIHRvIGNyZWF0ZSBhIG5ldyBzdGFja1xyXG4gICAgICAgIGlmIChleC5jb2RlID09ICdOb3RTdXBwb3J0ZWQnICYmIGV4Lm1lc3NhZ2Uuc3RhcnRzV2l0aCgnVXBkYXRlIHRoZSBjb21wbGV0ZWx5IHNhbWUgc3RhY2snKSkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBzdGFja0luZm8uc3RhY2tJZCk7XHJcbiAgICAgICAgICBzdWNjZXNzKCdUaGUgc3RhY2sgaXMgY29tcGxldGVseSB0aGUgc2FtZSwgdGhlcmUgaXMgbm8gbmVlZCB0byB1cGRhdGUuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcclxuICAgICAgICAgIGNsaWVudC5jcmVhdGVTdGFjayhjb250ZW50KS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIHJlcy5TdGFja0lkKTtcclxuICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLCBjb2xvcnMuYmx1ZShyZXMuUmVxdWVzdElkKSwgY29sb3JzLmJsdWUocmVzLlN0YWNrSWQpKTtcclxuICAgICAgICAgIH0sIChleDI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2soJXMpOiAlcyAlcycsIGV4Mi5yZXF1ZXN0SWQsIGV4Mi5jb2RlLCBleDIubWVzc2FnZSlcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjazogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBmaXhlZFxyXG4gICAgICAvLyBidWc6IHdoZW4gdXBkYXRpbmcsIHRoZSBjb25zb2xlIHdpbGwgZGlzcGxheSBlcnJvcjogdGhlIHN0YWNrIG5hbWUgaGFzIGJlZW4gZXhpc3RpbmcuXHJcbiAgICAgIC8vIG5lZWQgcm9zIGNsaWVudCBBUEk6IHVwZGF0ZVN0YWNrXHJcbiAgICAgIGNsaWVudC5jcmVhdGVTdGFjayhjb250ZW50KS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgcmVzLlN0YWNrSWQpO1xyXG4gICAgICAgIHN1Y2Nlc3MoXHJcbiAgICAgICAgICBgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLFxyXG4gICAgICAgICAgY29sb3JzLmJsdWUocmVzLlJlcXVlc3RJZCksXHJcbiAgICAgICAgICBjb2xvcnMuYmx1ZShyZXMuU3RhY2tJZCksXHJcbiAgICAgICAgKTtcclxuICAgICAgfSwgKGV4OiBhbnkpID0+IHtcclxuICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2s6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZGlmZihvcHRpb25zOiBEaWZmT3B0aW9ucykge1xyXG4gICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcclxuICAgIGxldCByZWdpb25JbkxvY2FsID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnKTtcclxuICAgIGxldCB0ZW1wID0gb3B0aW9ucy5yZWdpb24gPyBvcHRpb25zLnJlZ2lvbiA6IHJlZ2lvbkluTG9jYWw7XHJcbiAgICBjb25zdCBzdHJlYW0gPSBvcHRpb25zLnN0cmVhbSB8fCBwcm9jZXNzLnN0ZGVycjtcclxuICAgIGNvbnN0IGNvbnRleHRMaW5lcyA9IG9wdGlvbnMuY29udGV4dExpbmVzIHx8IDM7XHJcbiAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcclxuICAgICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFjay5pZCk7XHJcbiAgICAgIGlmICghc3RhY2tJbmZvLnN0YWNrSWQpIHtcclxuICAgICAgICBzdHJlYW0ud3JpdGUoZm9ybWF0KCdTdGFjayAlcyBoYXMgbm90IGJlZW4gZGVwbG95ZWQuXFxuJywgY29sb3JzLmJvbGQoc3RhY2suZGlzcGxheU5hbWUpKSk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgY2xpZW50LmdldFRlbXBsYXRlKHtSZWdpb25JZDogdGVtcCwgU3RhY2tJZDogc3RhY2tJbmZvLnN0YWNrSWR9KVxyXG4gICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkZXNlcmlhbGl6ZVN0cnVjdHVyZShyZXMuVGVtcGxhdGVCb2R5KTtcclxuICAgICAgICAgIHN0cmVhbS53cml0ZShmb3JtYXQoJ1N0YWNrICVzXFxuJywgY29sb3JzLmJvbGQoc3RhY2suZGlzcGxheU5hbWUpKSk7XHJcbiAgICAgICAgICBwcmludFN0YWNrRGlmZih0ZW1wbGF0ZSwgc3RhY2ssIGNvbnRleHRMaW5lcywgc3RyZWFtKTtcclxuICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XHJcbiAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gc3ludGguYCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrLmlkLCBTWU5USF9TVEFDSyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHRlbXBsYXRlOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGV2ZW50KG9wdGlvbnM6IEV2ZW50T3B0aW9ucyl7XHJcbiAgICBhd2FpdCB0aGlzLnN5bmNTdGFja0luZm8oKTtcclxuICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRlc3Ryb3koW10pO1xyXG4gICAgaWYoIW9wdGlvbnMuc3RhY2tOYW1lKXtcclxuICAgICAgZXJyb3IoJ0lmIHdhbnQgdG8gZ2V0IHJlc291cmNlIHN0YWNrIGV2ZW50cywgc3RhY2sgbmFtZSBtdXN0IGJlIFNwZWNpZmllZCEnKVxyXG4gICAgICBleGl0KClcclxuICAgIH1cclxuICAgIGlmKCFzdGFja3Muc3RhY2tJZHMuaW5jbHVkZXMob3B0aW9ucy5zdGFja05hbWVbMF0pKXtcclxuICAgICAgZXJyb3IoYFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXN0LCBQbGVhc2UgY2hlY2sgdGhlIGFjY3VyYWN5IG9mIHRoZSBpbnB1dCBzdGFjayBuYW1lIWApXHJcbiAgICAgIGV4aXQoKVxyXG4gICAgfVxyXG4gICAgbGV0IExvZ2ljYWxSZXNvdXJjZUlkczogIHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xyXG4gICAgaWYgKG9wdGlvbnMubG9naWNhbFJlc291cmNlSWQpe1xyXG4gICAgICBMb2dpY2FsUmVzb3VyY2VJZHMucHVzaChvcHRpb25zLmxvZ2ljYWxSZXNvdXJjZUlkKVxyXG4gICAgfVxyXG4gICAgY2xpZW50XHJcbiAgICAgIC5saXN0U3RhY2tFdmVudHMoe1xyXG4gICAgICAgIFN0YWNrSWQ6IChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8ob3B0aW9ucy5zdGFja05hbWVbMF0pKS5zdGFja0lkLFxyXG4gICAgICAgIFJlZ2lvbklkOiBvcHRpb25zLnJlZ2lvbiA/IG9wdGlvbnMucmVnaW9uIDogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnKSxcclxuICAgICAgICBMb2dpY2FsUmVzb3VyY2VJZDogTG9naWNhbFJlc291cmNlSWRzLFxyXG4gICAgICAgIFBhZ2VTaXplOiBvcHRpb25zLnBhZ2VTaXplID8gTnVtYmVyKG9wdGlvbnMucGFnZVNpemUpOiAxMCxcclxuICAgICAgICBQYWdlTnVtYmVyOiBvcHRpb25zLnBhZ2VOdW1iZXIgP051bWJlcihvcHRpb25zLnBhZ2VOdW1iZXIpOiAxXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2sgJXMgXFxuIEV2ZW50cyBpczogXFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSwgY29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLkV2ZW50cywgbnVsbCwgXCJcXHRcIikpKTtcclxuICAgICAgfSwgKGV4OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcclxuICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKG9wdGlvbnMuc3RhY2tOYW1lWzBdLCBERVNUUk9ZX1NUQUNLKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgc3RhY2sgZXZlbnRzOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgYXN5bmMgcmVzb3VyY2Uob3B0aW9uczogUmVzb3VyY2VPcHRpb25zKXtcclxuICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xyXG4gICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xyXG4gICAgbGV0IHN0YWNrTmFtZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcclxuICAgICAgaWYgKChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpKS5zdGFja0lkKSB7XHJcbiAgICAgICAgc3RhY2tOYW1lcy5wdXNoKHN0YWNrLmlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcclxuICAgIGZvciAobGV0IHN0YWNrTmFtZSBvZiBzdGFja05hbWVzKSB7XHJcbiAgICAgIGNsaWVudFxyXG4gICAgICAgIC5saXN0U3RhY2tSZXNvdXJjZXMoe1xyXG4gICAgICAgICAgU3RhY2tJZDogKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpKS5zdGFja0lkLFxyXG4gICAgICAgICAgUmVnaW9uSWQ6IG9wdGlvbnMucmVnaW9uID8gb3B0aW9ucy5yZWdpb24gOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2sgJXMgXFxuIFJlc291cmNlIGlzOiBcXG4gJXMgXFxuYCwgY29sb3JzLmJsdWUoc3RhY2tOYW1lKSwgY29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLlJlc291cmNlcywgbnVsbCwgXCJcXHRcIikpKTtcclxuICAgICAgICB9LCAoZXg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XHJcbiAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgc3RhY2sgcmVzb3VyY2U6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBsaXN0U3RhY2tzKG9wdGlvbnM6IExpc3RTdGFja09wdGlvbnMpe1xyXG4gICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xyXG4gICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yTGlzdChbXSk7XHJcbiAgICBsZXQgcGFyYW1zOiBhbnk9e307XHJcbiAgICBwYXJhbXMgPSB7XHJcbiAgICAgIFJlZ2lvbklkOiBvcHRpb25zLnJlZ2lvbiA/IG9wdGlvbnMucmVnaW9uIDogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnKSxcclxuICAgICAgUGFnZVNpemU6IG9wdGlvbnMucGFnZVNpemUgPyBOdW1iZXIob3B0aW9ucy5wYWdlU2l6ZSk6IDEwLFxyXG4gICAgICBQYWdlTnVtYmVyOiBvcHRpb25zLnBhZ2VOdW1iZXIgP051bWJlcihvcHRpb25zLnBhZ2VOdW1iZXIpOiAxXHJcbiAgICB9O1xyXG4gICAgaWYgKCFvcHRpb25zLmFsbCl7XHJcbiAgICAgIGlmIChvcHRpb25zLnN0YWNrTmFtZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcGFyYW1zLlN0YWNrTmFtZSA9IHN0YWNrcy5zdGFja0lkc1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgcGFyYW1zLlN0YWNrTmFtZSA9IG9wdGlvbnMuc3RhY2tOYW1lc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGllbnQubGlzdFN0YWNrcyhwYXJhbXMpXHJcbiAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIFRoZSBTdGFja3MgbGlzdCBpczpcXG4gJXMgXFxuYCwgY29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLlN0YWNrcywgbnVsbCwgXCJcXHRcIikpKTtcclxuICAgICAgfSwgKGV4OiBhbnkpID0+IHtcclxuICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGxpc3Qgc3RhY2tzOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGRlc3Ryb3kob3B0aW9uczogRGVzdHJveU9wdGlvbnMpIHtcclxuICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xyXG4gICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xyXG4gICAgbGV0IHN0YWNrTmFtZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcclxuICAgICAgaWYgKChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpKS5zdGFja0lkKSB7XHJcbiAgICAgICAgc3RhY2tOYW1lcy5wdXNoKHN0YWNrLmlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFvcHRpb25zLnF1aWV0KSB7XHJcbiAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgbGV0IGNvbmZpcm0gPSByZWFkbGluZVN5bmMucXVlc3Rpb24oXHJcbiAgICAgICAgICAgICdUaGUgZm9sbG93aW5nIHN0YWNrKHMpIHdpbGwgYmUgZGVzdHJveWVkKE9ubHkgZGVwbG95ZWQgc3RhY2tzIHdpbGwgYmUgZGlzcGxheWVkKS5cXG5cXG4nICtcclxuICAgICAgICAgICAgc3RhY2tOYW1lcy50b1N0cmluZygpICtcclxuICAgICAgICAgICAgJ1xcblxcblBsZWFzZSBjb25maXJtLihZL04pXFxuJyxcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChjb25maXJtID09PSAnbicgfHwgY29uZmlybSA9PT0gJ04nKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maXJtID09PSAneScgfHwgY29uZmlybSA9PT0gJ1knKSB7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XHJcbiAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xyXG4gICAgICBjbGllbnRcclxuICAgICAgICAuZGVsZXRlU3RhY2soe1xyXG4gICAgICAgICAgU3RhY2tJZDogKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpKS5zdGFja0lkLFxyXG4gICAgICAgICAgUmVnaW9uSWQ6IG9wdGlvbnMucmVnaW9uID8gb3B0aW9ucy5yZWdpb24gOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0spO1xyXG4gICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBEZWxldGVkXFxuUmVxdWVzdGVkSWQ6ICVzYCwgY29sb3JzLmJsdWUocmVzLlJlcXVlc3RJZCkpO1xyXG4gICAgICAgIH0sIChleDogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcclxuICAgICAgICAgICAgd2FybmluZyhgXFxuIOKdjCBUaGUgc3BlY2lmaWMgc3RhY2sgZG9lc24ndCBleGl0IGFuZCBpdCdzIGxvY2FsIHN0YXR1cyB3aWxsIGJlIHNldCB0byBkZXN0cm95LmApO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0spO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGRlbGV0ZSBzdGFjazogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBzeW5jU3RhY2tJbmZvKCkge1xyXG4gICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcclxuICAgIGxldCBmaWxlQ29udGVudCA9IHt9O1xyXG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XHJcbiAgICAgIGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZmlsZUNvbnRlbnQsIG51bGwsICdcXHQnKSk7XHJcbiAgICB9XHJcbiAgICBsZXQgdGVtcDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgLy8gc2VsZWN0b3IubGVuZ3RoID0gMCBtZWFucyBzZWxlY3QgYWxsIHN0YWNrcyBmcm9tIHRoaXMgYXBwXHJcbiAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0Zvckxpc3QoW10pO1xyXG4gICAgZm9yIChjb25zdCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcclxuICAgICAgbGV0IHZhbHVlID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKFNUQUNLX0lORk8sIHN0YWNrLmlkKTtcclxuICAgICAgLy8gaWYgdGhlIHN0YWNrIGhhcyBubyBpbmZvLCB0aGVuIGFkZCBpbml0IHRhZyBmb3IgaXRcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGVtcFtzdGFjay5pZF0gPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0ZW1wW3N0YWNrLmlkXSA9IHtcclxuICAgICAgICAgIHN0YXR1czogSU5JVF9TVEFDSyxcclxuICAgICAgICAgIHN0YWNrSWQ6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkodGVtcCwgbnVsbCwgJ1xcdCcpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgdXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xyXG4gICAgbGV0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xyXG4gICAgbGV0IGluZm8gPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcclxuICAgIGxldCBzdGFja0luZm8gPSBpbmZvW3N0YWNrTmFtZV07XHJcbiAgICBpZiAoIXN0YWNrSW5mbykge1xyXG4gICAgICBzdGFja0luZm8gPSBpbmZvW3N0YWNrTmFtZV0gPSB7fTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IERFUExPWV9TVEFDS19JRF9MRU5HVEgpIHtcclxuICAgICAgc3RhY2tJbmZvLnN0YXR1cyA9IERFUExPWV9TVEFDSztcclxuICAgICAgc3RhY2tJbmZvLnN0YWNrSWQgPSB2YWx1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhY2tJbmZvLnN0YXR1cyA9IHZhbHVlO1xyXG4gICAgICBpZiAodmFsdWUgPT09IERFU1RST1lfU1RBQ0spIHtcclxuICAgICAgICBzdGFja0luZm8uc3RhY2tJZCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGluZm8sIG51bGwsICdcXHQnKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGZpbmRTdGFja0luZm8oc3RhY2tOYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgU1RBQ0tfSU5GTyk7XHJcbiAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlQ29udGVudClbc3RhY2tOYW1lXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yTGlzdChzZWxlY3RvcnM6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcclxuICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzZWxlY3RvcnMsIHsgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrcyB9KTtcclxuXHJcbiAgICAvLyBObyB2YWxpZGF0aW9uXHJcblxyXG4gICAgcmV0dXJuIHN0YWNrcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yRGVzdHJveShzdGFja05hbWVzOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XHJcbiAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc3RhY2tOYW1lcywge1xyXG4gICAgICBkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb24uQWxsU3RhY2tzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTm8gdmFsaWRhdGlvblxyXG5cclxuICAgIHJldHVybiBzdGFja3M7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHNlbGVjdFN0YWNrc0ZvckRlcGxveShzdGFja05hbWVzOiBzdHJpbmdbXSwgZXhjbHVzaXZlbHk/OiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcclxuICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzdGFja05hbWVzLCB7XHJcbiAgICAgIGV4dGVuZDogZXhjbHVzaXZlbHkgPyBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUgOiBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLlVwc3RyZWFtLFxyXG4gICAgICBkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb24uT25seVNpbmdsZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHRoaXMudmFsaWRhdGVTdGFja3Moc3RhY2tzKTtcclxuXHJcbiAgICByZXR1cm4gc3RhY2tzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JEaWZmKHN0YWNrTmFtZXM6IHN0cmluZ1tdLCBleGNsdXNpdmVseT86IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xyXG4gICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcclxuICAgICAgZXh0ZW5kOiBleGNsdXNpdmVseSA/IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uTm9uZSA6IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uVXBzdHJlYW0sXHJcbiAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5BbGxTdGFja3MsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCB0aGlzLnZhbGlkYXRlU3RhY2tzKHN0YWNrcyk7XHJcblxyXG4gICAgcmV0dXJuIHN0YWNrcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlIHRoZSBzdGFja3MgZm9yIGVycm9ycyBhbmQgd2FybmluZ3MgYWNjb3JkaW5nIHRvIHRoZSBDTEkncyBjdXJyZW50IHNldHRpbmdzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhc3luYyB2YWxpZGF0ZVN0YWNrcyhzdGFja3M6IFN0YWNrQ29sbGVjdGlvbikge1xyXG4gICAgc3RhY2tzLnByb2Nlc3NNZXRhZGF0YU1lc3NhZ2VzKHtcclxuICAgICAgaWdub3JlRXJyb3JzOiB0aGlzLnByb3BzLmlnbm9yZUVycm9ycyxcclxuICAgICAgc3RyaWN0OiB0aGlzLnByb3BzLnN0cmljdCxcclxuICAgICAgdmVyYm9zZTogdGhpcy5wcm9wcy52ZXJib3NlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzc2VtYmx5KCk6IFByb21pc2U8Q2xvdWRBc3NlbWJseT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2xvdWRFeGVjdXRhYmxlLnN5bnRoZXNpemUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgZ2V0Q2xpQ29uZmlnKGxvYWRGaWxlUGF0aDogc3RyaW5nKSB7XHJcbiAgICBsZXQgZmlsZVBhdGg6IHN0cmluZztcclxuICAgIGxldCBjb25maWd1cmVJbmZvOiBhbnkgPSB7fTtcclxuICAgIGxldCBjb25maWd1cmVJbmZvczogYW55ID0ge307XHJcbiAgICBsZXQgQUtQcm9maWxlTGlzdDogb2JqZWN0W10gPSBbXTtcclxuICAgIGxldCBTdHNQcm9maWxlTGlzdDogb2JqZWN0W10gPSBbXTtcclxuICAgIGxldCBSYW1Sb2xlQXJuUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XHJcbiAgICBsZXQgRWNzUmFtUm9sZVByb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xyXG4gICAgaWYgKGxvYWRGaWxlUGF0aCkge1xyXG4gICAgICBmaWxlUGF0aCA9IGxvYWRGaWxlUGF0aFxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxldCBob21lUGF0aCA9IG9zLmhvbWVkaXIoKTtcclxuICAgICAgZmlsZVBhdGggPSBob21lUGF0aCArIENMSV9DT05GSUdfRklMRTtcclxuICAgIH1cclxuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xyXG4gICAgICBsZXQgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcclxuICAgICAgbGV0IEFsbFByb2ZpbGVzID0gSlNPTi5wYXJzZShmaWxlKVsncHJvZmlsZXMnXTtcclxuICAgICAgZm9yIChsZXQgcHJvZmlsZSBvZiBBbGxQcm9maWxlcykge1xyXG4gICAgICAgIGNvbmZpZ3VyZUluZm8gPSB7XHJcbiAgICAgICAgICBhY2Nlc3NLZXlJZDogcHJvZmlsZS5hY2Nlc3Nfa2V5X2lkLFxyXG4gICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBwcm9maWxlLmFjY2Vzc19rZXlfc2VjcmV0LFxyXG4gICAgICAgICAgcmVnaW9uOiBwcm9maWxlLnJlZ2lvbl9pZCxcclxuICAgICAgICAgIHNlY3VyaXR5VG9rZW46IHByb2ZpbGUuc3RzX3Rva2VuLFxyXG4gICAgICAgICAgcm9sZUFybjogcHJvZmlsZS5yYW1fcm9sZV9hcm4sXHJcbiAgICAgICAgICByb2xlU2Vzc2lvbk5hbWU6IHByb2ZpbGUucmFtX3Nlc3Npb25fbmFtZSxcclxuICAgICAgICAgIHJvbGVOYW1lOiBwcm9maWxlLnJhbV9yb2xlX25hbWUsXHJcbiAgICAgICAgICBuYW1lOiBwcm9maWxlLm5hbWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9maWxlLm1vZGUgPT09ICdBSycpIHtcclxuICAgICAgICAgIEFLUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxyXG4gICAgICAgICAgY29uZmlndXJlSW5mb3MuQUsgPSBBS1Byb2ZpbGVMaXN0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ1N0c1Rva2VuJykge1xyXG4gICAgICAgICAgU3RzUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxyXG4gICAgICAgICAgY29uZmlndXJlSW5mb3MuU3RzVG9rZW4gPSAgU3RzUHJvZmlsZUxpc3RcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnUmFtUm9sZUFybicpIHtcclxuICAgICAgICAgIFJhbVJvbGVBcm5Qcm9maWxlTGlzdC5wdXNoKGNvbmZpZ3VyZUluZm8pXHJcbiAgICAgICAgICBjb25maWd1cmVJbmZvcy5SYW1Sb2xlQXJuID0gUmFtUm9sZUFyblByb2ZpbGVMaXN0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ0Vjc1JhbVJvbGUnKSB7XHJcbiAgICAgICAgICBFY3NSYW1Sb2xlUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxyXG4gICAgICAgICAgY29uZmlndXJlSW5mb3MuRWNzUmFtUm9sZSA9IEVjc1JhbVJvbGVQcm9maWxlTGlzdFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIWNvbmZpZ3VyZUluZm9zIHx8IE9iamVjdC5rZXlzKGNvbmZpZ3VyZUluZm9zKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIGVycm9yKFwiV0FOUk5JTkc6IFBsZWFzZSBjaGVjayB0aGUgYWNjdXJhY3kgb2YgdGhlIG1vZGUgYW5kIHByb2ZlbGUgY29uZmlndXJhdGlvbiBlbnRlcmVkLlwiKTtcclxuICAgICAgICBleGl0KCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbmZpZ3VyZUluZm9zXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlcnJvcihcIldBTlJOSU5HOiBQbGVhc2UgY2hlY2sgQWxpeXVuIENsaSB0b29sIGNvbmZpZ3VyZSBhY2N1cmFjeSBvZiB0aGUgZGVmYXVsdCBwYXRoIG9yIHNwZWNpZmllZCBwYXRoLlwiKTtcclxuICAgICAgZXhpdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWZmT3B0aW9ucyB7XHJcbiAgcmVnaW9uPzogc3RyaW5nO1xyXG4gIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xyXG4gIHBhdGg6IHN0cmluZztcclxuICBzdHJlYW0/OiBOb2RlSlMuV3JpdGFibGVTdHJlYW07XHJcbiAgY29udGV4dExpbmVzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVwbG95T3B0aW9ucyB7XHJcbiAgc3RhY2tOYW1lczogc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIE9ubHkgc2VsZWN0IHRoZSBnaXZlbiBzdGFja1xyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICBleGNsdXNpdmVseT86IGJvb2xlYW47XHJcbiAgcGFyYW1ldGVycz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9O1xyXG4gIHRpbWVvdXQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZXN0cm95T3B0aW9ucyB7XHJcbiAgcmVnaW9uPzogc3RyaW5nO1xyXG4gIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xyXG4gIHF1aWV0PzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudE9wdGlvbnMge1xyXG4gIHJlZ2lvbj86IHN0cmluZztcclxuICBzdGFja05hbWU6IHN0cmluZ1tdO1xyXG4gIGxvZ2ljYWxSZXNvdXJjZUlkOiBzdHJpbmc7XHJcbiAgcGFnZU51bWJlcjogc3RyaW5nO1xyXG4gIHBhZ2VTaXplOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VPcHRpb25zIHtcclxuICByZWdpb24/OiBzdHJpbmc7XHJcbiAgc3RhY2tOYW1lczogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdFN0YWNrT3B0aW9ucyB7XHJcbiAgcmVnaW9uPzogc3RyaW5nO1xyXG4gIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xyXG4gIHBhZ2VOdW1iZXI6IHN0cmluZztcclxuICBwYWdlU2l6ZTogc3RyaW5nO1xyXG4gIGFsbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvYWRDb25maWdPcHRpb25zIHtcclxuICBnbG9iYWw/OiBzdHJpbmc7XHJcbiAgbG9hZEZpbGVQYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFnIHtcclxuICByZWFkb25seSBLZXk6IHN0cmluZztcclxuICByZWFkb25seSBWYWx1ZTogc3RyaW5nO1xyXG59XHJcbiJdfQ==