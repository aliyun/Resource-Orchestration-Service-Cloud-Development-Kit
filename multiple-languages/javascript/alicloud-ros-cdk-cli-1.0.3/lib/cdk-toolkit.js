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
const credentials_1 = require("@alicloud/credentials");
const cloud_assembly_1 = require("./api/cloud-assembly");
const logging_1 = require("./logging");
const process_1 = require("process");
const diff_1 = require("./diff");
const serialize_1 = require("./serialize");
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
        let accessKeyId = await cipher_1.decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeyId'));
        let accessKeySecret = await cipher_1.decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeySecret'));
        let securityToken = await CdkToolkit.getJson(CONFIG_NAME, 'securityToken', true);
        let client;
        if (!securityToken) {
            client = new rosClient({
                endpoint: await CdkToolkit.getJson(CONFIG_NAME, 'endpoint'),
                accessKeyId: accessKeyId,
                accessKeySecret: accessKeySecret
            });
        }
        else {
            client = new rosClient({
                endpoint: await CdkToolkit.getJson(CONFIG_NAME, 'endpoint'),
                accessKeyId: accessKeyId,
                accessKeySecret: accessKeySecret,
                securityToken: await cipher_1.decipher(securityToken)
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
        let inputConfigInfo;
        let newAccessKeyId;
        let newAccessKeySecret;
        let newSecurityToken;
        let configInfo = {};
        if (modeType[modeIndex] === 'EcsRamRole') {
            let roleName = readlineSync.question('roleName:');
            inputConfigInfo = new credentials_1.Config({
                type: 'ecs_ram_role',
                roleName: roleName
            });
        }
        else if (modeType[modeIndex] === 'StsToken') {
            let accessKeyId = readlineSync.question('accessKeyId:', { hideEchoBack: true });
            let accessKeySecret = readlineSync.question('accessKeySecret:', { hideEchoBack: true });
            let securityToken = readlineSync.question('securityToken:', { hideEchoBack: true });
            inputConfigInfo = new credentials_1.Config({
                type: 'sts',
                accessKeyId: accessKeyId,
                accessKeySecret: accessKeySecret,
                securityToken: securityToken
            });
        }
        else if (modeType[modeIndex] === 'RamRoleArn') {
            let accessKeyId = readlineSync.question('accessKeyId:', { hideEchoBack: true });
            let accessKeySecret = readlineSync.question('accessKeySecret:', { hideEchoBack: true });
            let roleArn = readlineSync.question('roleArn(eg: acs:ram::******:role/******):');
            let roleSessionName = readlineSync.question('roleSessionName:');
            inputConfigInfo = new credentials_1.Config({
                type: 'ram_role_arn',
                accessKeyId: accessKeyId,
                accessKeySecret: accessKeySecret,
                roleArn: roleArn,
                roleSessionName: roleSessionName
            });
        }
        else if (modeType[modeIndex] === 'AK') {
            let accessKeyId = readlineSync.question('accessKeyId:', { hideEchoBack: true });
            let accessKeySecret = readlineSync.question('accessKeySecret:', { hideEchoBack: true });
            inputConfigInfo = new credentials_1.Config({
                type: 'access_key',
                accessKeyId: accessKeyId,
                accessKeySecret: accessKeySecret
            });
        }
        else {
            logging_1.error('WANRNING: If want to deploy or delete stack, a certification method must be selected');
            process_1.exit();
        }
        const cred = new credentials_1.default(inputConfigInfo);
        try {
            newAccessKeyId = await cred.getAccessKeyId();
            newAccessKeySecret = await cred.getAccessKeySecret();
            newSecurityToken = await cred.getSecurityToken();
        }
        catch (e) {
            logging_1.error('WANRNING: Please check the accuracy of the certification information entered!' + e.message);
            process_1.exit();
        }
        configInfo = {
            endpoint: endpoint,
            regionId: regionId,
            accessKeyId: await cipher_1.cipher(newAccessKeyId),
            accessKeySecret: await cipher_1.cipher(newAccessKeySecret)
        };
        if (newSecurityToken) {
            configInfo.securityToken = await cipher_1.cipher(newSecurityToken);
        }
        let file = path.join(configSavePath);
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
        let configInfo;
        let newAccessKeyId;
        let newAccessKeySecret;
        let newSecurityToken;
        let newConfig = {};
        endpoint = endpoint ? endpoint : 'https://ros.aliyuncs.com';
        switch (modeType[modeIndex]) {
            case 'AK':
                profileConfig = configureInfos.AK.find((profiles) => profiles.name === profileNames[profileIndex]);
                configInfo = new credentials_1.Config({
                    type: 'access_key',
                    accessKeyId: profileConfig['accessKeyId'],
                    accessKeySecret: profileConfig['accessKeySecret']
                });
                break;
            case 'StsToken':
                profileConfig = configureInfos.StsToken.find((profiles) => profiles.name === profileNames[profileIndex]);
                configInfo = new credentials_1.Config({
                    type: 'sts',
                    accessKeyId: profileConfig['accessKeyId'],
                    accessKeySecret: profileConfig['accessKeySecret'],
                    securityToken: profileConfig['securityToken']
                });
                break;
            case 'RamRoleArn':
                profileConfig = configureInfos.RamRoleArn.find((profiles) => profiles.name === profileNames[profileIndex]);
                configInfo = new credentials_1.Config({
                    type: 'ram_role_arn',
                    accessKeyId: profileConfig['accessKeyId'],
                    accessKeySecret: profileConfig['accessKeySecret'],
                    roleArn: profileConfig['roleArn'],
                    roleSessionName: profileConfig['roleSessionName']
                });
                break;
            case 'EcsRamRole':
                profileConfig = configureInfos.EcsRamRole.find((profiles) => profiles.name === profileNames[profileIndex]);
                configInfo = new credentials_1.Config({
                    type: 'ecs_ram_role',
                    roleName: profileConfig['roleName']
                });
                break;
        }
        regionId = profileConfig['region'] ? profileConfig['region'] : 'cn-hangzhou';
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
        newConfig = {
            accessKeyId: await cipher_1.cipher(newAccessKeyId),
            accessKeySecret: await cipher_1.cipher(newAccessKeySecret),
            endpoint: endpoint,
            regionId: regionId
        };
        if (newSecurityToken) {
            newConfig.securityToken = await cipher_1.cipher(newSecurityToken);
        }
        let file = path.join(configSavePath);
        fs.writeFileSync(file, JSON.stringify(newConfig, null, '\t'));
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
        if (!options.stackName) {
            logging_1.error('If want to get resource stack events, stack name must be Specified!');
            process_1.exit();
        }
        await this.syncStackInfo();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRvb2xraXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstdG9vbGtpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4Q0FBOEM7QUFDOUMsMENBQWlEO0FBQ2pELCtCQUE4QjtBQUM5QixNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUN0RCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsdURBQTREO0FBQzVELHlEQUFnSDtBQUVoSCx1Q0FBaUU7QUFFakUscUNBQStCO0FBQy9CLGlDQUF3QztBQUN4QywyQ0FBbUQ7QUFFbkQsTUFBTSxXQUFXLEdBQUcscUJBQXFCLENBQUM7QUFDMUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLE1BQU0sV0FBVyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDdkMsTUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7QUFDckMsTUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFDbEMsTUFBTSxlQUFlLEdBQUcsc0JBQXNCLENBQUM7QUFDL0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDO0FBQzFCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUM1QixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUM7QUFDOUIsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDO0FBbUNoQzs7Ozs7R0FLRztBQUNILE1BQWEsVUFBVTtJQW9CckIsWUFBNkIsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7SUFBRyxDQUFDO0lBbkIvQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFnQixFQUFFLEdBQVcsRUFBRSxlQUF3QixLQUFLO1FBQ3ZGLElBQUksUUFBUSxHQUFHLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDckMsSUFBSSxFQUFFLENB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QWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7b0JBQ2pDLGNBQWMsQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFBO2lCQUNsQztxQkFDSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO29CQUNwQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO29CQUNsQyxjQUFjLENBQUMsUUFBUSxHQUFJLGNBQWMsQ0FBQTtpQkFDMUM7cUJBQ0ksSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTtvQkFDdEMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO29CQUN6QyxjQUFjLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFBO2lCQUNsRDtxQkFDSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO29CQUN0QyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7b0JBQ3pDLGNBQWMsQ0FBQyxVQUFVLEdBQUcscUJBQXFCLENBQUE7aUJBQ2xEO2FBQ0Y7WUFDRCxJQUFJLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDOUQsZUFBSyxDQUFDLG9GQUFvRixDQUFDLENBQUM7Z0JBQzVGLGNBQUksRUFBRSxDQUFDO2FBQ1I7WUFDRCxPQUFPLGNBQWMsQ0FBQTtTQUN0QjthQUFNO1lBQ0wsZUFBSyxDQUFDLGtHQUFrRyxDQUFDLENBQUM7WUFDMUcsY0FBSSxFQUFFLENBQUM7U0FDUjtJQUNILENBQUM7Q0FDRjtBQXhxQkQsZ0NBd3FCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICdjb2xvcnMvc2FmZSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuaW1wb3J0IHsgZGVjaXBoZXIsIGNpcGhlciB9IGZyb20gJy4vdXRpbC9jaXBoZXInO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAndXRpbCc7XG5jb25zdCByb3NDbGllbnQgPSByZXF1aXJlKCdAYWxpY2xvdWQvcm9zLTIwMTktMDktMTAnKTtcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmltcG9ydCBDcmVkZW50aWFscywgeyBDb25maWcgfSBmcm9tICdAYWxpY2xvdWQvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHsgQ2xvdWRBc3NlbWJseSwgRGVmYXVsdFNlbGVjdGlvbiwgRXh0ZW5kZWRTdGFja1NlbGVjdGlvbiwgU3RhY2tDb2xsZWN0aW9uIH0gZnJvbSAnLi9hcGkvY2xvdWQtYXNzZW1ibHknO1xuaW1wb3J0IHsgQ2xvdWRFeGVjdXRhYmxlIH0gZnJvbSAnLi9hcGkvY2xvdWQtZXhlY3V0YWJsZSc7XG5pbXBvcnQgeyBkYXRhLCBlcnJvciwgcHJpbnQsIHN1Y2Nlc3MsIHdhcm5pbmcgfSBmcm9tICcuL2xvZ2dpbmcnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHsgZXhpdCB9IGZyb20gJ3Byb2Nlc3MnO1xuaW1wb3J0IHsgcHJpbnRTdGFja0RpZmYgfSBmcm9tICcuL2RpZmYnO1xuaW1wb3J0IHsgZGVzZXJpYWxpemVTdHJ1Y3R1cmUgfSBmcm9tICcuL3NlcmlhbGl6ZSc7XG5cbmNvbnN0IENPTkZJR19OQU1FID0gJ2FjY291bnQuY29uZmlnLmpzb24nO1xuY29uc3QgTE9DQUxfUEFUSCA9ICcuLyc7XG5jb25zdCBHTE9CQUxfUEFUSCA9IF9fZGlybmFtZSArICcvLi4vJztcbmNvbnN0IFNUQUNLX0lORk8gPSAnc3RhY2suaW5mby5qc29uJztcbmNvbnN0IERFUExPWV9TVEFDS19JRF9MRU5HVEggPSAzNjtcbmNvbnN0IENMSV9DT05GSUdfRklMRSA9ICcvLmFsaXl1bi9jb25maWcuanNvbic7XG5jb25zdCBJTklUX1NUQUNLID0gJ2luaXQnO1xuY29uc3QgU1lOVEhfU1RBQ0sgPSAnc3ludGgnO1xuY29uc3QgREVQTE9ZX1NUQUNLID0gJ2RlcGxveSc7XG5jb25zdCBERVNUUk9ZX1NUQUNLID0gJ2Rlc3Ryb3knO1xuXG5leHBvcnQgaW50ZXJmYWNlIENka1Rvb2xraXRQcm9wcyB7XG4gIC8qKlxuICAgKiBUaGUgQ2xvdWQgRXhlY3V0YWJsZVxuICAgKi9cbiAgY2xvdWRFeGVjdXRhYmxlOiBDbG91ZEV4ZWN1dGFibGU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gYmUgdmVyYm9zZVxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgdmVyYm9zZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERvbid0IHN0b3Agb24gZXJyb3IgbWV0YWRhdGFcbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGlnbm9yZUVycm9ycz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRyZWF0IHdhcm5pbmdzIGluIG1ldGFkYXRhIGFzIGVycm9yc1xuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgc3RyaWN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQXBwbGljYXRpb24gY29uZmlndXJhdGlvbiAoc2V0dGluZ3MgYW5kIGNvbnRleHQpXG4gICAqL1xuICBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uO1xufVxuXG4vKipcbiAqIFRvb2xraXQgbG9naWNcbiAqXG4gKiBUaGUgdG9vbGtpdCBydW5zIHRoZSBgY2xvdWRFeGVjdXRhYmxlYCB0byBvYnRhaW4gYSBjbG91ZCBhc3NlbWJseVxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIENka1Rvb2xraXQge1xuICBwcml2YXRlIHN0YXRpYyBhc3luYyBnZXRKc29uKGZpbGVOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCBhbGxvd2VkRW1wdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGxldCBmaWxlUGF0aCA9IExPQ0FMX1BBVEggKyBmaWxlTmFtZTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgIGxldCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZSlba2V5XTtcbiAgICB9IGVsc2UgaWYgKGZpbGVOYW1lID09PSBTVEFDS19JTkZPKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBmaWxlUGF0aCA9IEdMT0JBTF9QQVRIICsgZmlsZU5hbWU7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICBsZXQgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGUpW2tleV07XG4gICAgfVxuICAgIGlmICghYWxsb3dlZEVtcHR5KSB7XG4gICAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3Jvcy1jZGsgY29uZmlnICgtZyknIHRvIHNldCB5b3VyIGFjY291bnQgY29uZmlndXJhdGlvbiBmaXJzdGx5IVwiKTtcbiAgICAgIGV4aXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb3BzOiBDZGtUb29sa2l0UHJvcHMpIHt9XG5cbiAgcHVibGljIGFzeW5jIGdldFJvc0NsaWVudCgpIHtcbiAgICBsZXQgYWNjZXNzS2V5SWQgPSBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlJZCcpKTtcbiAgICBsZXQgYWNjZXNzS2V5U2VjcmV0ID0gYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5U2VjcmV0JykpO1xuICAgIGxldCBzZWN1cml0eVRva2VuID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnc2VjdXJpdHlUb2tlbicsIHRydWUpO1xuICAgIGxldCBjbGllbnQ7IFxuICAgIGlmICghc2VjdXJpdHlUb2tlbikge1xuICAgICAgY2xpZW50ID0gbmV3IHJvc0NsaWVudCh7XG4gICAgICAgIGVuZHBvaW50OiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdlbmRwb2ludCcpLFxuICAgICAgICBhY2Nlc3NLZXlJZDogYWNjZXNzS2V5SWQsXG4gICAgICAgIGFjY2Vzc0tleVNlY3JldDogYWNjZXNzS2V5U2VjcmV0XG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjbGllbnQgPSBuZXcgcm9zQ2xpZW50KHtcbiAgICAgICAgZW5kcG9pbnQ6IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2VuZHBvaW50JyksXG4gICAgICAgIGFjY2Vzc0tleUlkOiBhY2Nlc3NLZXlJZCxcbiAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhY2Nlc3NLZXlTZWNyZXQsXG4gICAgICAgIHNlY3VyaXR5VG9rZW46IGF3YWl0IGRlY2lwaGVyKHNlY3VyaXR5VG9rZW4pXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNsaWVudDtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjb25maWcoZ2xvYmFsOiBib29sZWFuKSB7XG4gICAgbGV0IGNvbmZpZ1NhdmVQYXRoID0gKGdsb2JhbCA/IEdMT0JBTF9QQVRIIDogTE9DQUxfUEFUSCkgKyBDT05GSUdfTkFNRTtcbiAgICBsZXQgbW9kZVR5cGUgPSBbJ0FLJywgJ1N0c1Rva2VuJywgJ1JhbVJvbGVBcm4nLCAnRWNzUmFtUm9sZSddXG4gICAgbGV0IGVuZHBvaW50ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdlbmRwb2ludChvcHRpb25hbCwgZGVmYXVsdDpodHRwczovL3Jvcy5hbGl5dW5jcy5jb20pOicse2RlZmF1bHRJbnB1dDogJ2h0dHBzOi8vcm9zLmFsaXl1bmNzLmNvbSd9KTtcbiAgICBsZXQgcmVnaW9uSWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2RlZmF1bHRSZWdpb25JZChvcHRpb25hbCwgZGVmYXVsdDpjbi1oYW5nemhvdSk6Jywge2RlZmF1bHRJbnB1dDogJ2NuLWhhbmd6aG91J30pO1xuICAgIGxldCBtb2RlSW5kZXggPSByZWFkbGluZVN5bmMua2V5SW5TZWxlY3QobW9kZVR5cGUsJ0F1dGhlbnRpY2F0ZSBtb2RlOicpO1xuICAgIGxldCBpbnB1dENvbmZpZ0luZm87XG4gICAgbGV0IG5ld0FjY2Vzc0tleUlkO1xuICAgIGxldCBuZXdBY2Nlc3NLZXlTZWNyZXQ7XG4gICAgbGV0IG5ld1NlY3VyaXR5VG9rZW47XG4gICAgbGV0IGNvbmZpZ0luZm86IGFueSA9IHt9O1xuICAgIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnRWNzUmFtUm9sZScpe1xuICAgICAgbGV0IHJvbGVOYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdyb2xlTmFtZTonKTtcbiAgICAgIGlucHV0Q29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgcm9sZU5hbWU6IHJvbGVOYW1lXG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1N0c1Rva2VuJyl7XG4gICAgICBsZXQgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2FjY2Vzc0tleUlkOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICAgIGxldCBhY2Nlc3NLZXlTZWNyZXQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2FjY2Vzc0tleVNlY3JldDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICBsZXQgc2VjdXJpdHlUb2tlbiA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignc2VjdXJpdHlUb2tlbjonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICBpbnB1dENvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgIGFjY2Vzc0tleUlkOiBhY2Nlc3NLZXlJZCxcbiAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhY2Nlc3NLZXlTZWNyZXQsXG4gICAgICAgIHNlY3VyaXR5VG9rZW46IHNlY3VyaXR5VG9rZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnUmFtUm9sZUFybicpe1xuICAgICAgbGV0IGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdhY2Nlc3NLZXlJZDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICBsZXQgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdhY2Nlc3NLZXlTZWNyZXQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgbGV0IHJvbGVBcm4gPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ3JvbGVBcm4oZWc6IGFjczpyYW06OioqKioqKjpyb2xlLyoqKioqKik6Jyk7XG4gICAgICBsZXQgcm9sZVNlc3Npb25OYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdyb2xlU2Vzc2lvbk5hbWU6Jyk7XG4gICAgICBpbnB1dENvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgdHlwZTogJ3JhbV9yb2xlX2FybicsXG4gICAgICAgIGFjY2Vzc0tleUlkOiBhY2Nlc3NLZXlJZCxcbiAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBhY2Nlc3NLZXlTZWNyZXQsXG4gICAgICAgIHJvbGVBcm46IHJvbGVBcm4sXG4gICAgICAgIHJvbGVTZXNzaW9uTmFtZTogcm9sZVNlc3Npb25OYW1lXG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ0FLJykge1xuICAgICAgbGV0IGFjY2Vzc0tleUlkID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdhY2Nlc3NLZXlJZDonLCB7aGlkZUVjaG9CYWNrOiB0cnVlfSk7XG4gICAgICBsZXQgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdhY2Nlc3NLZXlTZWNyZXQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgICAgaW5wdXRDb25maWdJbmZvID0gbmV3IENvbmZpZyh7XG4gICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgYWNjZXNzS2V5SWQ6IGFjY2Vzc0tleUlkLFxuICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGFjY2Vzc0tleVNlY3JldFxuICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZXJyb3IoXG4gICAgICAgICdXQU5STklORzogSWYgd2FudCB0byBkZXBsb3kgb3IgZGVsZXRlIHN0YWNrLCBhIGNlcnRpZmljYXRpb24gbWV0aG9kIG11c3QgYmUgc2VsZWN0ZWQnLFxuICAgICAgKTtcbiAgICAgIGV4aXQoKTtcbiAgICB9XG4gICAgY29uc3QgY3JlZCA9IG5ldyBDcmVkZW50aWFscyhpbnB1dENvbmZpZ0luZm8pO1xuICAgIHRyeSB7XG4gICAgICBuZXdBY2Nlc3NLZXlJZCA9IGF3YWl0IGNyZWQuZ2V0QWNjZXNzS2V5SWQoKTtcbiAgICAgIG5ld0FjY2Vzc0tleVNlY3JldCA9IGF3YWl0IGNyZWQuZ2V0QWNjZXNzS2V5U2VjcmV0KCk7XG4gICAgICBuZXdTZWN1cml0eVRva2VuID0gYXdhaXQgY3JlZC5nZXRTZWN1cml0eVRva2VuKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IoXG4gICAgICAgICdXQU5STklORzogUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgY2VydGlmaWNhdGlvbiBpbmZvcm1hdGlvbiBlbnRlcmVkIScgKyBlLm1lc3NhZ2UsXG4gICAgICApO1xuICAgICAgZXhpdCgpO1xuICAgIH1cbiAgICBjb25maWdJbmZvID0ge1xuICAgICAgZW5kcG9pbnQ6IGVuZHBvaW50LFxuICAgICAgcmVnaW9uSWQ6IHJlZ2lvbklkLFxuICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihuZXdBY2Nlc3NLZXlJZCksXG4gICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihuZXdBY2Nlc3NLZXlTZWNyZXQpXG4gICAgfTtcbiAgICBpZiAobmV3U2VjdXJpdHlUb2tlbikge1xuICAgICAgY29uZmlnSW5mby5zZWN1cml0eVRva2VuID0gYXdhaXQgY2lwaGVyKG5ld1NlY3VyaXR5VG9rZW4pXG4gICAgfVxuICAgIGxldCBmaWxlID0gcGF0aC5qb2luKGNvbmZpZ1NhdmVQYXRoKTtcbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KGNvbmZpZ0luZm8sIG51bGwsICdcXHQnKSk7XG4gICAgc3VjY2VzcyhgXFxuIOKchSBZb3VyIGNkayBjb25maWd1cmF0aW9uIGhhcyBiZWVuIHNhdmVkIHN1Y2Nlc3NmdWxseSFgKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBsb2FkQ2xpQ29uZmlnKG9wdGlvbnM6IExvYWRDb25maWdPcHRpb25zKSB7XG4gICAgbGV0IGNvbmZpZ1NhdmVQYXRoID0gKG9wdGlvbnMuZ2xvYmFsID8gR0xPQkFMX1BBVEggOiBMT0NBTF9QQVRIKSArIENPTkZJR19OQU1FO1xuICAgIGxldCBjb25maWd1cmVJbmZvcyA9IGF3YWl0IHRoaXMuZ2V0Q2xpQ29uZmlnKG9wdGlvbnMubG9hZEZpbGVQYXRoKVxuICAgIGxldCBtb2RlVHlwZSA9IE9iamVjdC5rZXlzKGNvbmZpZ3VyZUluZm9zKTtcbiAgICBsZXQgbW9kZUluZGV4ID0gcmVhZGxpbmVTeW5jLmtleUluU2VsZWN0KG1vZGVUeXBlLCdTZWxlY3QgYXV0aGVudGljYXRlIG1vZGU6Jyk7XG4gICAgbGV0IHByb2ZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgcHJvZmlsZUNvbmZpZzogYW55ID0ge307XG4gICAgaWYgKG1vZGVJbmRleCA9PT0gLTEpIHtcbiAgICAgIGVycm9yKFxuICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBjZXJ0aWZpY2F0aW9uIG1ldGhvZCBtdXN0IGJlIHNlbGVjdGVkJyxcbiAgICAgICk7XG4gICAgICBleGl0KCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1vZGVUeXBlW21vZGVJbmRleF0gPT09ICdBSycpIHtcbiAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLkFLLm1hcCgoaXRlbTogeyBuYW1lOiBhbnk7IH0pID0+IGl0ZW0ubmFtZSlcbiAgICB9XG4gICAgZWxzZSBpZiAobW9kZVR5cGVbbW9kZUluZGV4XSA9PT0gJ1N0c1Rva2VuJykge1xuICAgICAgcHJvZmlsZU5hbWVzID0gY29uZmlndXJlSW5mb3MuU3RzVG9rZW4ubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgIH1cbiAgICBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnUmFtUm9sZUFybicpIHtcbiAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLlJhbVJvbGVBcm4ubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgIH1cbiAgICBlbHNlIGlmIChtb2RlVHlwZVttb2RlSW5kZXhdID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgIHByb2ZpbGVOYW1lcyA9IGNvbmZpZ3VyZUluZm9zLkVjc1JhbVJvbGUubWFwKChpdGVtOiB7IG5hbWU6IGFueTsgfSkgPT4gaXRlbS5uYW1lKVxuICAgIH1cbiAgICBsZXQgcHJvZmlsZUluZGV4ID0gcmVhZGxpbmVTeW5jLmtleUluU2VsZWN0KHByb2ZpbGVOYW1lcywnU2VsZWN0IEF1dGhlbnRpY2F0ZSBwcm9maWxlIG5hbWU6Jyk7XG4gICAgaWYgKHByb2ZpbGVJbmRleCA9PT0gLTEpIHtcbiAgICAgIGVycm9yKFxuICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgYSBjZXJ0aWZpY2F0aW9uIHByb2ZpbGUgbXVzdCBiZSBzZWxlY3RlZCcsXG4gICAgICApO1xuICAgICAgZXhpdCgpO1xuICAgIH1cbiAgICBsZXQgZW5kcG9pbnQgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdlbmRwb2ludCcsIHRydWUpXG4gICAgbGV0IHJlZ2lvbklkO1xuICAgIGxldCBjb25maWdJbmZvO1xuICAgIGxldCBuZXdBY2Nlc3NLZXlJZDtcbiAgICBsZXQgbmV3QWNjZXNzS2V5U2VjcmV0O1xuICAgIGxldCBuZXdTZWN1cml0eVRva2VuO1xuICAgIGxldCBuZXdDb25maWc6IGFueSA9IHt9O1xuICAgIGVuZHBvaW50ID0gZW5kcG9pbnQgPyBlbmRwb2ludCA6ICdodHRwczovL3Jvcy5hbGl5dW5jcy5jb20nO1xuICAgIHN3aXRjaCAobW9kZVR5cGVbbW9kZUluZGV4XSl7XG4gICAgICBjYXNlICdBSyc6XG4gICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5BSy5maW5kKChwcm9maWxlczogeyBuYW1lOiBzdHJpbmc7IH0pID0+IHByb2ZpbGVzLm5hbWUgPT09IHByb2ZpbGVOYW1lc1twcm9maWxlSW5kZXhdKTtcbiAgICAgICAgY29uZmlnSW5mbyA9IG5ldyBDb25maWcoe1xuICAgICAgICAgIHR5cGU6ICdhY2Nlc3Nfa2V5JyxcbiAgICAgICAgICBhY2Nlc3NLZXlJZDogcHJvZmlsZUNvbmZpZ1snYWNjZXNzS2V5SWQnXSxcbiAgICAgICAgICBhY2Nlc3NLZXlTZWNyZXQ6IHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleVNlY3JldCddXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1N0c1Rva2VuJzpcbiAgICAgICAgcHJvZmlsZUNvbmZpZyA9IGNvbmZpZ3VyZUluZm9zLlN0c1Rva2VuLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XG4gICAgICAgICAgdHlwZTogJ3N0cycsXG4gICAgICAgICAgYWNjZXNzS2V5SWQ6IHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10sXG4gICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSxcbiAgICAgICAgICBzZWN1cml0eVRva2VuOiBwcm9maWxlQ29uZmlnWydzZWN1cml0eVRva2VuJ11cbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUmFtUm9sZUFybic6XG4gICAgICAgIHByb2ZpbGVDb25maWcgPSBjb25maWd1cmVJbmZvcy5SYW1Sb2xlQXJuLmZpbmQoKHByb2ZpbGVzOiB7IG5hbWU6IHN0cmluZzsgfSkgPT4gcHJvZmlsZXMubmFtZSA9PT0gcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICAgICAgICBjb25maWdJbmZvID0gbmV3IENvbmZpZyh7XG4gICAgICAgICAgdHlwZTogJ3JhbV9yb2xlX2FybicsXG4gICAgICAgICAgYWNjZXNzS2V5SWQ6IHByb2ZpbGVDb25maWdbJ2FjY2Vzc0tleUlkJ10sXG4gICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBwcm9maWxlQ29uZmlnWydhY2Nlc3NLZXlTZWNyZXQnXSxcbiAgICAgICAgICByb2xlQXJuOiBwcm9maWxlQ29uZmlnWydyb2xlQXJuJ10sXG4gICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiBwcm9maWxlQ29uZmlnWydyb2xlU2Vzc2lvbk5hbWUnXVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFY3NSYW1Sb2xlJzpcbiAgICAgICAgcHJvZmlsZUNvbmZpZyA9IGNvbmZpZ3VyZUluZm9zLkVjc1JhbVJvbGUuZmluZCgocHJvZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB9KSA9PiBwcm9maWxlcy5uYW1lID09PSBwcm9maWxlTmFtZXNbcHJvZmlsZUluZGV4XSk7XG4gICAgICAgIGNvbmZpZ0luZm8gPSBuZXcgQ29uZmlnKHtcbiAgICAgICAgICB0eXBlOiAnZWNzX3JhbV9yb2xlJyxcbiAgICAgICAgICByb2xlTmFtZTogcHJvZmlsZUNvbmZpZ1sncm9sZU5hbWUnXVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJlZ2lvbklkID0gcHJvZmlsZUNvbmZpZ1sncmVnaW9uJ10gPyBwcm9maWxlQ29uZmlnWydyZWdpb24nXSA6J2NuLWhhbmd6aG91JztcbiAgICBjb25zdCBjcmVkID0gbmV3IENyZWRlbnRpYWxzKGNvbmZpZ0luZm8pO1xuICAgIHRyeSB7XG4gICAgICBuZXdBY2Nlc3NLZXlJZCA9IGF3YWl0IGNyZWQuZ2V0QWNjZXNzS2V5SWQoKTtcbiAgICAgIG5ld0FjY2Vzc0tleVNlY3JldCA9IGF3YWl0IGNyZWQuZ2V0QWNjZXNzS2V5U2VjcmV0KCk7XG4gICAgICBuZXdTZWN1cml0eVRva2VuID0gYXdhaXQgY3JlZC5nZXRTZWN1cml0eVRva2VuKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IoXG4gICAgICAgICdXQU5STklORzogUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgY3JlZGVudGlhbCBpbmZvcm1hdGlvbiB5b3UgaW1wb3J0IGZyb20gQ0xJIGNvbmZpZyEnICsgZS5tZXNzYWdlLFxuICAgICAgKTtcbiAgICAgIGV4aXQoKTtcbiAgICB9XG4gICAgXG4gICAgbmV3Q29uZmlnID0ge1xuICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihuZXdBY2Nlc3NLZXlJZCksXG4gICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihuZXdBY2Nlc3NLZXlTZWNyZXQpLFxuICAgICAgZW5kcG9pbnQ6IGVuZHBvaW50LFxuICAgICAgcmVnaW9uSWQ6IHJlZ2lvbklkXG4gICAgfVxuICAgIGlmIChuZXdTZWN1cml0eVRva2VuKXtcbiAgICAgIG5ld0NvbmZpZy5zZWN1cml0eVRva2VuID0gYXdhaXQgY2lwaGVyKG5ld1NlY3VyaXR5VG9rZW4pXG4gICAgfVxuICAgIGxldCBmaWxlID0gcGF0aC5qb2luKGNvbmZpZ1NhdmVQYXRoKTtcbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIEpTT04uc3RyaW5naWZ5KG5ld0NvbmZpZywgbnVsbCwgJ1xcdCcpKTtcbiAgICBzdWNjZXNzKGBcXG4g4pyFIFlvdXIgY2RrIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gbG9hZCBmcm9tIEFsaXl1biBDbGkgY29uZmlndXJhdGlvbiBzYXZlZCBzdWNjZXNzZnVsbHkgJXMgJXMhYCwgbW9kZVR5cGVbbW9kZUluZGV4XSwgcHJvZmlsZU5hbWVzW3Byb2ZpbGVJbmRleF0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGxpc3Qoc2VsZWN0b3JzOiBzdHJpbmdbXSkge1xuICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yTGlzdChzZWxlY3RvcnMpO1xuICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICBsZXQgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKTtcbiAgICAgIGxldCBzdGF0dXMgPSBzdGFja0luZm8uc3RhdHVzXG4gICAgICBkYXRhKHN0YWNrLmlkLCBzdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRoZXNpemUgdGhlIGdpdmVuIHNldCBvZiBzdGFja3MgKGNhbGxlZCB3aGVuIHRoZSB1c2VyIHJ1bnMgJ2NkayBzeW50aCcpXG4gICAqXG4gICAqIElOUFVUOiBTdGFjayBuYW1lcyBjYW4gYmUgc3VwcGxpZWQgdXNpbmcgYSBnbG9iIGZpbHRlci4gSWYgbm8gc3RhY2tzIGFyZVxuICAgKiBnaXZlbiwgYWxsIHN0YWNrcyBmcm9tIHRoZSBhcHBsaWNhdGlvbiBhcmUgaW1wbGljdGx5IHNlbGVjdGVkLlxuICAgKlxuICAgKiBPVVRQVVQ6IElmIG1vcmUgdGhhbiBvbmUgc3RhY2sgZW5kcyB1cCBiZWluZyBzZWxlY3RlZCwgYW4gb3V0cHV0IGRpcmVjdG9yeVxuICAgKiBzaG91bGQgYmUgc3VwcGxpZWQsIHdoZXJlIHRoZSB0ZW1wbGF0ZXMgd2lsbCBiZSB3cml0dGVuLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIHN5bnRoKHN0YWNrTmFtZXM6IHN0cmluZ1tdLCBleGNsdXNpdmVseTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEaWZmKHN0YWNrTmFtZXMsIGV4Y2x1c2l2ZWx5KTtcblxuICAgIC8vIGlmIHdlIGhhdmUgYSBzaW5nbGUgc3RhY2ssIHByaW50IGl0IHRvIFNURE9VVFxuICAgIGlmIChzdGFja3Muc3RhY2tDb3VudCA9PT0gMSkge1xuICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tzLmZpcnN0U3RhY2suaWQsIFNZTlRIX1NUQUNLKTtcbiAgICAgIHJldHVybiBzdGFja3MuZmlyc3RTdGFjay50ZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrLmlkLCBTWU5USF9TVEFDSyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaXNJbnRlZ01vZGUgPSBwcm9jZXNzLmVudi5DREtfSU5URUdfTU9ERSA9PT0gJzEnO1xuICAgIGlmIChpc0ludGVnTW9kZSkge1xuICAgICAgcmV0dXJuIHN0YWNrcy5zdGFja0FydGlmYWN0cy5tYXAoKHMpID0+IHMudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIC8vIG5vdCBvdXRwdXR0aW5nIHRlbXBsYXRlIHRvIHN0ZG91dCwgbGV0J3MgZXhwbGFpbiB0aGluZ3MgdG8gdGhlIHVzZXIgYSBsaXR0bGUgYml0Li4uXG4gICAgc3VjY2VzcyhgU3VjY2Vzc2Z1bGx5IHN5bnRoZXNpemVkIHRvICR7Y29sb3JzLmJsdWUocGF0aC5yZXNvbHZlKHN0YWNrcy5hc3NlbWJseS5kaXJlY3RvcnkpKX1gKTtcbiAgICBwcmludChcbiAgICAgIGBTdXBwbHkgYSBzdGFjayBpZCAoJHtzdGFja3Muc3RhY2tBcnRpZmFjdHMubWFwKChzKSA9PiBjb2xvcnMuZ3JlZW4ocy5pZCkpLmpvaW4oJywgJyl9KSB0byBkaXNwbGF5IGl0cyB0ZW1wbGF0ZS5gLFxuICAgICk7XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGRlcGxveShvcHRpb25zOiBEZXBsb3lPcHRpb25zKSB7XG4gICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXBsb3kob3B0aW9ucy5zdGFja05hbWVzLCBvcHRpb25zLmV4Y2x1c2l2ZWx5KTtcbiAgICBjb25zdCBzdGFja05hbWUgPSBvcHRpb25zLnN0YWNrTmFtZXMubGVuZ3RoICE9PSAwID8gb3B0aW9ucy5zdGFja05hbWVzWzBdIDogc3RhY2tzLnN0YWNrQXJ0aWZhY3RzWzBdLmlkO1xuICAgIGxldCByZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcpO1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgbGV0IHRlbXBsYXRlQm9keSA9IGZzLnJlYWRGaWxlU3luYyhgLi9jZGsub3V0LyR7c3RhY2tOYW1lfS50ZW1wbGF0ZS5qc29uYCk7XG4gICAgbGV0IGNvbnRlbnQ6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xuICAgICAgU3RhY2tOYW1lOiBzdGFja05hbWUudG9TdHJpbmcoKSxcbiAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICBUaW1lb3V0SW5NaW51dGVzOiBvcHRpb25zLnRpbWVvdXQsXG4gICAgICBUZW1wbGF0ZUJvZHk6IHRlbXBsYXRlQm9keSxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMucGFyYW1ldGVycykge1xuICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSAxO1xuICAgICAgbGV0IHBhcmFzID0gb3B0aW9ucy5wYXJhbWV0ZXJzO1xuICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFzKSB7XG4gICAgICAgIGNvbnRlbnRbJ1BhcmFtZXRlcnMuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlBhcmFtZXRlcktleSddID0ga2V5O1xuICAgICAgICBjb250ZW50WydQYXJhbWV0ZXJzLicgKyBjb3VudC50b1N0cmluZygpICsgJy5QYXJhbWV0ZXJWYWx1ZSddID0gcGFyYXNba2V5XTtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpO1xuICAgIGlmIChzdGFja0luZm8uc3RhY2tJZCkge1xuICAgICAgY29udGVudFsnU3RhY2tJZCddID0gc3RhY2tJbmZvLnN0YWNrSWQ7XG4gICAgICBjbGllbnQudXBkYXRlU3RhY2soY29udGVudCkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCByZXMuU3RhY2tJZCk7XG4gICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQodXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICBjb2xvcnMuYmx1ZShyZXMuUmVxdWVzdElkKSxcbiAgICAgICAgICBjb2xvcnMuYmx1ZShyZXMuU3RhY2tJZCksXG4gICAgICAgICk7XG4gICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAvLyB3aGVuIHJlamVjdCwgbWVhbnMgdGhlIHN0YWNrIGluIHJvcyBoYXMgYmVlbiBkZWxldGVkIGZyb20gY29uc29sZVxuICAgICAgICAvLyBzbyB1c2UgY3JlYXRlIGFwaSB0byBjcmVhdGUgYSBuZXcgc3RhY2tcbiAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ05vdFN1cHBvcnRlZCcgJiYgZXgubWVzc2FnZS5zdGFydHNXaXRoKCdVcGRhdGUgdGhlIGNvbXBsZXRlbHkgc2FtZSBzdGFjaycpKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBzdGFja0luZm8uc3RhY2tJZCk7XG4gICAgICAgICAgc3VjY2VzcygnVGhlIHN0YWNrIGlzIGNvbXBsZXRlbHkgdGhlIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXBkYXRlLicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICBjbGllbnQuY3JlYXRlU3RhY2soY29udGVudCkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgcmVzLlN0YWNrSWQpO1xuICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLCBjb2xvcnMuYmx1ZShyZXMuUmVxdWVzdElkKSwgY29sb3JzLmJsdWUocmVzLlN0YWNrSWQpKTtcbiAgICAgICAgICB9LCAoZXgyOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGNyZWF0ZSBzdGFjayglcyk6ICVzICVzJywgZXgyLnJlcXVlc3RJZCwgZXgyLmNvZGUsIGV4Mi5tZXNzYWdlKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjazogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZml4ZWRcbiAgICAgIC8vIGJ1Zzogd2hlbiB1cGRhdGluZywgdGhlIGNvbnNvbGUgd2lsbCBkaXNwbGF5IGVycm9yOiB0aGUgc3RhY2sgbmFtZSBoYXMgYmVlbiBleGlzdGluZy5cbiAgICAgIC8vIG5lZWQgcm9zIGNsaWVudCBBUEk6IHVwZGF0ZVN0YWNrXG4gICAgICBjbGllbnQuY3JlYXRlU3RhY2soY29udGVudCkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCByZXMuU3RhY2tJZCk7XG4gICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoY3JlYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICBjb2xvcnMuYmx1ZShyZXMuUmVxdWVzdElkKSxcbiAgICAgICAgICBjb2xvcnMuYmx1ZShyZXMuU3RhY2tJZCksXG4gICAgICAgICk7XG4gICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2s6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkaWZmKG9wdGlvbnM6IERpZmZPcHRpb25zKSB7XG4gICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgbGV0IHJlZ2lvbkluTG9jYWwgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcpO1xuICAgIGxldCB0ZW1wID0gb3B0aW9ucy5yZWdpb24gPyBvcHRpb25zLnJlZ2lvbiA6IHJlZ2lvbkluTG9jYWw7XG4gICAgY29uc3Qgc3RyZWFtID0gb3B0aW9ucy5zdHJlYW0gfHwgcHJvY2Vzcy5zdGRlcnI7XG4gICAgY29uc3QgY29udGV4dExpbmVzID0gb3B0aW9ucy5jb250ZXh0TGluZXMgfHwgMztcbiAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgIGxldCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpO1xuICAgICAgaWYgKCFzdGFja0luZm8uc3RhY2tJZCkge1xuICAgICAgICBzdHJlYW0ud3JpdGUoZm9ybWF0KCdTdGFjayAlcyBoYXMgbm90IGJlZW4gZGVwbG95ZWQuXFxuJywgY29sb3JzLmJvbGQoc3RhY2suZGlzcGxheU5hbWUpKSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY2xpZW50LmdldFRlbXBsYXRlKHtSZWdpb25JZDogdGVtcCwgU3RhY2tJZDogc3RhY2tJbmZvLnN0YWNrSWR9KVxuICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRlc2VyaWFsaXplU3RydWN0dXJlKHJlcy5UZW1wbGF0ZUJvZHkpO1xuICAgICAgICAgIHN0cmVhbS53cml0ZShmb3JtYXQoJ1N0YWNrICVzXFxuJywgY29sb3JzLmJvbGQoc3RhY2suZGlzcGxheU5hbWUpKSk7XG4gICAgICAgICAgcHJpbnRTdGFja0RpZmYodGVtcGxhdGUsIHN0YWNrLCBjb250ZXh0TGluZXMsIHN0cmVhbSk7XG4gICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIHN5bnRoLmApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2suaWQsIFNZTlRIX1NUQUNLKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgdGVtcGxhdGU6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZXZlbnQob3B0aW9uczogRXZlbnRPcHRpb25zKXtcbiAgICBpZighb3B0aW9ucy5zdGFja05hbWUpe1xuICAgICAgZXJyb3IoJ0lmIHdhbnQgdG8gZ2V0IHJlc291cmNlIHN0YWNrIGV2ZW50cywgc3RhY2sgbmFtZSBtdXN0IGJlIFNwZWNpZmllZCEnKVxuICAgICAgZXhpdCgpXG4gICAgfVxuICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgIGxldCBMb2dpY2FsUmVzb3VyY2VJZHM6ICBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgaWYgKG9wdGlvbnMubG9naWNhbFJlc291cmNlSWQpe1xuICAgICAgTG9naWNhbFJlc291cmNlSWRzLnB1c2gob3B0aW9ucy5sb2dpY2FsUmVzb3VyY2VJZClcbiAgICB9XG4gICAgY2xpZW50XG4gICAgICAubGlzdFN0YWNrRXZlbnRzKHtcbiAgICAgICAgU3RhY2tJZDogKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhvcHRpb25zLnN0YWNrTmFtZVswXSkpLnN0YWNrSWQsXG4gICAgICAgIFJlZ2lvbklkOiBvcHRpb25zLnJlZ2lvbiA/IG9wdGlvbnMucmVnaW9uIDogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnKSxcbiAgICAgICAgTG9naWNhbFJlc291cmNlSWQ6IExvZ2ljYWxSZXNvdXJjZUlkcyxcbiAgICAgICAgUGFnZVNpemU6IG9wdGlvbnMucGFnZVNpemUgPyBOdW1iZXIob3B0aW9ucy5wYWdlU2l6ZSk6IDEwLFxuICAgICAgICBQYWdlTnVtYmVyOiBvcHRpb25zLnBhZ2VOdW1iZXIgP051bWJlcihvcHRpb25zLnBhZ2VOdW1iZXIpOiAxXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2sgJXMgXFxuIEV2ZW50cyBpczogXFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKG9wdGlvbnMuc3RhY2tOYW1lWzBdKSwgY29sb3JzLmJsdWUoSlNPTi5zdHJpbmdpZnkocmVzLkV2ZW50cywgbnVsbCwgXCJcXHRcIikpKTtcbiAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgIGlmIChleC5jb2RlID09ICdTdGFja05vdEZvdW5kJykge1xuICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhvcHRpb25zLnN0YWNrTmFtZVswXSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZ2V0IHN0YWNrIGV2ZW50czogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgcHVibGljIGFzeW5jIHJlc291cmNlKG9wdGlvbnM6IFJlc291cmNlT3B0aW9ucyl7IFxuICAgIGF3YWl0IHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRlc3Ryb3kob3B0aW9ucy5zdGFja05hbWVzKTtcbiAgICBsZXQgc3RhY2tOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgIGlmICgoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKSkuc3RhY2tJZCkge1xuICAgICAgICBzdGFja05hbWVzLnB1c2goc3RhY2suaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgIGZvciAobGV0IHN0YWNrTmFtZSBvZiBzdGFja05hbWVzKSB7XG4gICAgICBjbGllbnRcbiAgICAgICAgLmxpc3RTdGFja1Jlc291cmNlcyh7XG4gICAgICAgICAgU3RhY2tJZDogKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpKS5zdGFja0lkLFxuICAgICAgICAgIFJlZ2lvbklkOiBvcHRpb25zLnJlZ2lvbiA/IG9wdGlvbnMucmVnaW9uIDogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgVGhlIFN0YWNrICVzIFxcbiBSZXNvdXJjZSBpczogXFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKHN0YWNrTmFtZSksIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5SZXNvdXJjZXMsIG51bGwsIFwiXFx0XCIpKSk7XG4gICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIGRlc3Ryb3kuYCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGdldCBzdGFjayByZXNvdXJjZTogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGxpc3RTdGFja3Mob3B0aW9uczogTGlzdFN0YWNrT3B0aW9ucyl7XG4gICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICBsZXQgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JMaXN0KFtdKTtcbiAgICBsZXQgcGFyYW1zOiBhbnk9e307XG4gICAgcGFyYW1zID0ge1xuICAgICAgUmVnaW9uSWQ6IG9wdGlvbnMucmVnaW9uID8gb3B0aW9ucy5yZWdpb24gOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcpLFxuICAgICAgUGFnZVNpemU6IG9wdGlvbnMucGFnZVNpemUgPyBOdW1iZXIob3B0aW9ucy5wYWdlU2l6ZSk6IDEwLFxuICAgICAgUGFnZU51bWJlcjogb3B0aW9ucy5wYWdlTnVtYmVyID9OdW1iZXIob3B0aW9ucy5wYWdlTnVtYmVyKTogMVxuICAgIH07XG4gICAgaWYgKCFvcHRpb25zLmFsbCl7XG4gICAgICBpZiAob3B0aW9ucy5zdGFja05hbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBwYXJhbXMuU3RhY2tOYW1lID0gc3RhY2tzLnN0YWNrSWRzXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBwYXJhbXMuU3RhY2tOYW1lID0gb3B0aW9ucy5zdGFja05hbWVzXG4gICAgICB9XG4gICAgfVxuICAgIGNsaWVudC5saXN0U3RhY2tzKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgU3RhY2tzIGxpc3QgaXM6XFxuICVzIFxcbmAsIGNvbG9ycy5ibHVlKEpTT04uc3RyaW5naWZ5KHJlcy5TdGFja3MsIG51bGwsIFwiXFx0XCIpKSk7XG4gICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGxpc3Qgc3RhY2tzOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkZXN0cm95KG9wdGlvbnM6IERlc3Ryb3lPcHRpb25zKSB7XG4gICAgYXdhaXQgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgIGxldCBzdGFja05hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAobGV0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgaWYgKChhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpKS5zdGFja0lkKSB7XG4gICAgICAgIHN0YWNrTmFtZXMucHVzaChzdGFjay5pZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5xdWlldCkge1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgbGV0IGNvbmZpcm0gPSByZWFkbGluZVN5bmMucXVlc3Rpb24oXG4gICAgICAgICAgICAnVGhlIGZvbGxvd2luZyBzdGFjayhzKSB3aWxsIGJlIGRlc3Ryb3llZChPbmx5IGRlcGxveWVkIHN0YWNrcyB3aWxsIGJlIGRpc3BsYXllZCkuXFxuXFxuJyArXG4gICAgICAgICAgICBzdGFja05hbWVzLnRvU3RyaW5nKCkgK1xuICAgICAgICAgICAgJ1xcblxcblBsZWFzZSBjb25maXJtLihZL04pXFxuJyxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvbmZpcm0gPT09ICduJyB8fCBjb25maXJtID09PSAnTicpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpcm0gPT09ICd5JyB8fCBjb25maXJtID09PSAnWScpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldFJvc0NsaWVudCgpO1xuICAgIGZvciAobGV0IHN0YWNrTmFtZSBvZiBzdGFja05hbWVzKSB7XG4gICAgICBjbGllbnRcbiAgICAgICAgLmRlbGV0ZVN0YWNrKHtcbiAgICAgICAgICBTdGFja0lkOiAoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrTmFtZSkpLnN0YWNrSWQsXG4gICAgICAgICAgUmVnaW9uSWQ6IG9wdGlvbnMucmVnaW9uID8gb3B0aW9ucy5yZWdpb24gOiBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcpLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgIHN1Y2Nlc3MoYFxcbiDinIUgRGVsZXRlZFxcblJlcXVlc3RlZElkOiAlc2AsIGNvbG9ycy5ibHVlKHJlcy5SZXF1ZXN0SWQpKTtcbiAgICAgICAgfSwgKGV4OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICAgIHdhcm5pbmcoYFxcbiDinYwgVGhlIHNwZWNpZmljIHN0YWNrIGRvZXNuJ3QgZXhpdCBhbmQgaXQncyBsb2NhbCBzdGF0dXMgd2lsbCBiZSBzZXQgdG8gZGVzdHJveS5gKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgREVTVFJPWV9TVEFDSyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ2ZhaWwgdG8gZGVsZXRlIHN0YWNrOiAlcyAlcycsIGV4LmNvZGUsIGV4Lm1lc3NhZ2UpXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHN5bmNTdGFja0luZm8oKSB7XG4gICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcbiAgICBsZXQgZmlsZUNvbnRlbnQgPSB7fTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgIGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShmaWxlQ29udGVudCwgbnVsbCwgJ1xcdCcpKTtcbiAgICB9XG4gICAgbGV0IHRlbXA6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICAvLyBzZWxlY3Rvci5sZW5ndGggPSAwIG1lYW5zIHNlbGVjdCBhbGwgc3RhY2tzIGZyb20gdGhpcyBhcHBcbiAgICBjb25zdCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0Zvckxpc3QoW10pO1xuICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICBsZXQgdmFsdWUgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oU1RBQ0tfSU5GTywgc3RhY2suaWQpO1xuICAgICAgLy8gaWYgdGhlIHN0YWNrIGhhcyBubyBpbmZvLCB0aGVuIGFkZCBpbml0IHRhZyBmb3IgaXRcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0ZW1wW3N0YWNrLmlkXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcFtzdGFjay5pZF0gPSB7XG4gICAgICAgICAgc3RhdHVzOiBJTklUX1NUQUNLLFxuICAgICAgICAgIHN0YWNrSWQ6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeSh0ZW1wLCBudWxsLCAnXFx0JykpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB1cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBsZXQgZmlsZVBhdGggPSBwYXRoLmpvaW4oTE9DQUxfUEFUSCArIFNUQUNLX0lORk8pO1xuICAgIGxldCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICBsZXQgaW5mbyA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpO1xuICAgIGxldCBzdGFja0luZm8gPSBpbmZvW3N0YWNrTmFtZV07XG4gICAgaWYgKCFzdGFja0luZm8pIHtcbiAgICAgIHN0YWNrSW5mbyA9IGluZm9bc3RhY2tOYW1lXSA9IHt9O1xuICAgIH1cbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSBERVBMT1lfU1RBQ0tfSURfTEVOR1RIKSB7XG4gICAgICBzdGFja0luZm8uc3RhdHVzID0gREVQTE9ZX1NUQUNLO1xuICAgICAgc3RhY2tJbmZvLnN0YWNrSWQgPSB2YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGFja0luZm8uc3RhdHVzID0gdmFsdWU7XG4gICAgICBpZiAodmFsdWUgPT09IERFU1RST1lfU1RBQ0spIHtcbiAgICAgICAgc3RhY2tJbmZvLnN0YWNrSWQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShpbmZvLCBudWxsLCAnXFx0JykpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmaW5kU3RhY2tJbmZvKHN0YWNrTmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcbiAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpW3N0YWNrTmFtZV07XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlbGVjdFN0YWNrc0Zvckxpc3Qoc2VsZWN0b3JzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzZWxlY3RvcnMsIHsgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrcyB9KTtcblxuICAgIC8vIE5vIHZhbGlkYXRpb25cblxuICAgIHJldHVybiBzdGFja3M7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlbGVjdFN0YWNrc0ZvckRlc3Ryb3koc3RhY2tOYW1lczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc3RhY2tOYW1lcywge1xuICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrcyxcbiAgICB9KTtcblxuICAgIC8vIE5vIHZhbGlkYXRpb25cblxuICAgIHJldHVybiBzdGFja3M7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlbGVjdFN0YWNrc0ZvckRlcGxveShzdGFja05hbWVzOiBzdHJpbmdbXSwgZXhjbHVzaXZlbHk/OiBib29sZWFuKSB7XG4gICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgIGV4dGVuZDogZXhjbHVzaXZlbHkgPyBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUgOiBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLlVwc3RyZWFtLFxuICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLk9ubHlTaW5nbGUsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0aGlzLnZhbGlkYXRlU3RhY2tzKHN0YWNrcyk7XG5cbiAgICByZXR1cm4gc3RhY2tzO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JEaWZmKHN0YWNrTmFtZXM6IHN0cmluZ1tdLCBleGNsdXNpdmVseT86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc3RhY2tOYW1lcywge1xuICAgICAgZXh0ZW5kOiBleGNsdXNpdmVseSA/IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uTm9uZSA6IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uVXBzdHJlYW0sXG4gICAgICBkZWZhdWx0QmVoYXZpb3I6IERlZmF1bHRTZWxlY3Rpb24uQWxsU3RhY2tzLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdGhpcy52YWxpZGF0ZVN0YWNrcyhzdGFja3MpO1xuXG4gICAgcmV0dXJuIHN0YWNrcztcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGUgc3RhY2tzIGZvciBlcnJvcnMgYW5kIHdhcm5pbmdzIGFjY29yZGluZyB0byB0aGUgQ0xJJ3MgY3VycmVudCBzZXR0aW5nc1xuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyB2YWxpZGF0ZVN0YWNrcyhzdGFja3M6IFN0YWNrQ29sbGVjdGlvbikge1xuICAgIHN0YWNrcy5wcm9jZXNzTWV0YWRhdGFNZXNzYWdlcyh7XG4gICAgICBpZ25vcmVFcnJvcnM6IHRoaXMucHJvcHMuaWdub3JlRXJyb3JzLFxuICAgICAgc3RyaWN0OiB0aGlzLnByb3BzLnN0cmljdCxcbiAgICAgIHZlcmJvc2U6IHRoaXMucHJvcHMudmVyYm9zZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXNzZW1ibHkoKTogUHJvbWlzZTxDbG91ZEFzc2VtYmx5PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2xvdWRFeGVjdXRhYmxlLnN5bnRoZXNpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0Q2xpQ29uZmlnKGxvYWRGaWxlUGF0aDogc3RyaW5nKSB7XG4gICAgbGV0IGZpbGVQYXRoOiBzdHJpbmc7XG4gICAgbGV0IGNvbmZpZ3VyZUluZm86IGFueSA9IHt9O1xuICAgIGxldCBjb25maWd1cmVJbmZvczogYW55ID0ge307XG4gICAgbGV0IEFLUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XG4gICAgbGV0IFN0c1Byb2ZpbGVMaXN0OiBvYmplY3RbXSA9IFtdO1xuICAgIGxldCBSYW1Sb2xlQXJuUHJvZmlsZUxpc3Q6IG9iamVjdFtdID0gW107XG4gICAgbGV0IEVjc1JhbVJvbGVQcm9maWxlTGlzdDogb2JqZWN0W10gPSBbXTtcbiAgICBpZiAobG9hZEZpbGVQYXRoKSB7XG4gICAgICBmaWxlUGF0aCA9IGxvYWRGaWxlUGF0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBob21lUGF0aCA9IG9zLmhvbWVkaXIoKTtcbiAgICAgIGZpbGVQYXRoID0gaG9tZVBhdGggKyBDTElfQ09ORklHX0ZJTEU7XG4gICAgfVxuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgbGV0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgQWxsUHJvZmlsZXMgPSBKU09OLnBhcnNlKGZpbGUpWydwcm9maWxlcyddO1xuICAgICAgZm9yIChsZXQgcHJvZmlsZSBvZiBBbGxQcm9maWxlcykge1xuICAgICAgICBjb25maWd1cmVJbmZvID0ge1xuICAgICAgICAgIGFjY2Vzc0tleUlkOiBwcm9maWxlLmFjY2Vzc19rZXlfaWQsXG4gICAgICAgICAgYWNjZXNzS2V5U2VjcmV0OiBwcm9maWxlLmFjY2Vzc19rZXlfc2VjcmV0LFxuICAgICAgICAgIHJlZ2lvbjogcHJvZmlsZS5yZWdpb25faWQsXG4gICAgICAgICAgc2VjdXJpdHlUb2tlbjogcHJvZmlsZS5zdHNfdG9rZW4sXG4gICAgICAgICAgcm9sZUFybjogcHJvZmlsZS5yYW1fcm9sZV9hcm4sXG4gICAgICAgICAgcm9sZVNlc3Npb25OYW1lOiBwcm9maWxlLnJhbV9zZXNzaW9uX25hbWUsXG4gICAgICAgICAgcm9sZU5hbWU6IHByb2ZpbGUucmFtX3JvbGVfbmFtZSxcbiAgICAgICAgICBuYW1lOiBwcm9maWxlLm5hbWVcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ0FLJykge1xuICAgICAgICAgIEFLUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxuICAgICAgICAgIGNvbmZpZ3VyZUluZm9zLkFLID0gQUtQcm9maWxlTGlzdFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ1N0c1Rva2VuJykge1xuICAgICAgICAgIFN0c1Byb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICBjb25maWd1cmVJbmZvcy5TdHNUb2tlbiA9ICBTdHNQcm9maWxlTGlzdFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb2ZpbGUubW9kZSA9PT0gJ1JhbVJvbGVBcm4nKSB7XG4gICAgICAgICAgUmFtUm9sZUFyblByb2ZpbGVMaXN0LnB1c2goY29uZmlndXJlSW5mbylcbiAgICAgICAgICBjb25maWd1cmVJbmZvcy5SYW1Sb2xlQXJuID0gUmFtUm9sZUFyblByb2ZpbGVMaXN0XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvZmlsZS5tb2RlID09PSAnRWNzUmFtUm9sZScpIHtcbiAgICAgICAgICBFY3NSYW1Sb2xlUHJvZmlsZUxpc3QucHVzaChjb25maWd1cmVJbmZvKVxuICAgICAgICAgIGNvbmZpZ3VyZUluZm9zLkVjc1JhbVJvbGUgPSBFY3NSYW1Sb2xlUHJvZmlsZUxpc3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFjb25maWd1cmVJbmZvcyB8fCBPYmplY3Qua2V5cyhjb25maWd1cmVJbmZvcykubGVuZ3RoID09IDApIHtcbiAgICAgICAgZXJyb3IoXCJXQU5STklORzogUGxlYXNlIGNoZWNrIHRoZSBhY2N1cmFjeSBvZiB0aGUgbW9kZSBhbmQgcHJvZmVsZSBjb25maWd1cmF0aW9uIGVudGVyZWQuXCIpO1xuICAgICAgICBleGl0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29uZmlndXJlSW5mb3NcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IoXCJXQU5STklORzogUGxlYXNlIGNoZWNrIEFsaXl1biBDbGkgdG9vbCBjb25maWd1cmUgYWNjdXJhY3kgb2YgdGhlIGRlZmF1bHQgcGF0aCBvciBzcGVjaWZpZWQgcGF0aC5cIik7XG4gICAgICBleGl0KCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlmZk9wdGlvbnMge1xuICByZWdpb24/OiBzdHJpbmc7XG4gIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuICBwYXRoOiBzdHJpbmc7XG4gIHN0cmVhbT86IE5vZGVKUy5Xcml0YWJsZVN0cmVhbTtcbiAgY29udGV4dExpbmVzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVwbG95T3B0aW9ucyB7XG4gIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBPbmx5IHNlbGVjdCB0aGUgZ2l2ZW4gc3RhY2tcbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGV4Y2x1c2l2ZWx5PzogYm9vbGVhbjtcbiAgcGFyYW1ldGVycz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9O1xuICB0aW1lb3V0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzdHJveU9wdGlvbnMge1xuICByZWdpb24/OiBzdHJpbmc7XG4gIHN0YWNrTmFtZXM6IHN0cmluZ1tdO1xuICBxdWlldD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRPcHRpb25zIHtcbiAgcmVnaW9uPzogc3RyaW5nO1xuICBzdGFja05hbWU6IHN0cmluZ1tdO1xuICBsb2dpY2FsUmVzb3VyY2VJZDogc3RyaW5nO1xuICBwYWdlTnVtYmVyOiBzdHJpbmc7XG4gIHBhZ2VTaXplOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VPcHRpb25zIHtcbiAgcmVnaW9uPzogc3RyaW5nO1xuICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXN0U3RhY2tPcHRpb25zIHtcbiAgcmVnaW9uPzogc3RyaW5nO1xuICBzdGFja05hbWVzOiBzdHJpbmdbXTtcbiAgcGFnZU51bWJlcjogc3RyaW5nO1xuICBwYWdlU2l6ZTogc3RyaW5nO1xuICBhbGw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkQ29uZmlnT3B0aW9ucyB7XG4gIGdsb2JhbD86IHN0cmluZztcbiAgbG9hZEZpbGVQYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnIHtcbiAgcmVhZG9ubHkgS2V5OiBzdHJpbmc7XG4gIHJlYWRvbmx5IFZhbHVlOiBzdHJpbmc7XG59XG4iXX0=