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
    static async getJson(fileName, key) {
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
        logging_1.error("Please use 'ros config (-g)' to set your account configuration firstly!");
        process_1.exit();
    }
    async getRosClient() {
        let accessKeyId = await cipher_1.decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeyId'));
        let accessKeySecret = await cipher_1.decipher(await CdkToolkit.getJson(CONFIG_NAME, 'accessKeySecret'));
        const client = new rosClient({
            endpoint: await CdkToolkit.getJson(CONFIG_NAME, 'endpoint'),
            accessKeyId: accessKeyId,
            accessKeySecret: accessKeySecret,
        });
        return client;
    }
    async config(global) {
        let configSavePath = (global ? GLOBAL_PATH : LOCAL_PATH) + CONFIG_NAME;
        let endpoint = readlineSync.question('endpoint(optional, default:https://ros.aliyuncs.com):');
        let accessKeyId = readlineSync.question('accessKeyId:', { hideEchoBack: true });
        let accessKeySecret = readlineSync.question('accessKeySecret:', { hideEchoBack: true });
        let regionId = readlineSync.question('defaultRegionId(optional, default:cn-hangzhou):');
        endpoint = endpoint ? endpoint : 'https://ros.aliyuncs.com';
        regionId = regionId ? regionId : 'cn-hangzhou';
        if (endpoint.length === 0 || accessKeyId.length === 0 || accessKeySecret.length === 0) {
            logging_1.error('WANRNING: If want to deploy or delete stack, the endpoint, accessKeyId and accessKeySecret must be provided.');
        }
        let configInfo = {
            endpoint: endpoint,
            regionId: regionId,
            accessKeyId: await cipher_1.cipher(accessKeyId),
            accessKeySecret: await cipher_1.cipher(accessKeySecret),
        };
        let file = path.join(configSavePath);
        fs.writeFileSync(file, JSON.stringify(configInfo, null, '\t'));
        logging_1.success(`\n ✅ Your cdk configuration has been saved successfully!`);
    }
    async list(selectors) {
        this.syncStackInfo();
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
        this.syncStackInfo();
        const stacks = await this.selectStacksForDiff(stackNames, exclusively);
        // if we have a single stack, print it to STDOUT
        if (stacks.stackCount === 1) {
            this.updateStackInfo(stacks.firstStack.id, SYNTH_STACK);
            return stacks.firstStack.template;
        }
        else {
            for (let stack of stacks.stackArtifacts) {
                this.updateStackInfo(stack.id, SYNTH_STACK);
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
        this.syncStackInfo();
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
    async destroy(options) {
        this.syncStackInfo();
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
}
exports.CdkToolkit = CdkToolkit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRvb2xraXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstdG9vbGtpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4Q0FBOEM7QUFDOUMsMENBQWlEO0FBQ2pELCtCQUE4QjtBQUM5QixNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUV0RCx5REFBZ0g7QUFFaEgsdUNBQWlFO0FBRWpFLHFDQUErQjtBQUMvQixpQ0FBd0M7QUFDeEMsMkNBQW1EO0FBRW5ELE1BQU0sV0FBVyxHQUFHLHFCQUFxQixDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQztBQUN4QixNQUFNLFdBQVcsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3ZDLE1BQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDO0FBQ3JDLE1BQU0sc0JBQXNCLEdBQUcsRUFBRSxDQUFDO0FBRWxDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUMxQixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDNUIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDO0FBQzlCLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQztBQW1DaEM7Ozs7O0dBS0c7QUFDSCxNQUFhLFVBQVU7SUFpQnJCLFlBQTZCLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCO0lBQUcsQ0FBQztJQWhCL0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBZ0IsRUFBRSxHQUFXO1FBQ3hELElBQUksUUFBUSxHQUFHLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDckMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEQsT0FB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QUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUNyQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFFBQVE7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQXJXRCxnQ0FxV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmltcG9ydCB7IGRlY2lwaGVyLCBjaXBoZXIgfSBmcm9tICcuL3V0aWwvY2lwaGVyJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ3V0aWwnO1xuY29uc3Qgcm9zQ2xpZW50ID0gcmVxdWlyZSgnQGFsaWNsb3VkL3Jvcy0yMDE5LTA5LTEwJyk7XG5cbmltcG9ydCB7IENsb3VkQXNzZW1ibHksIERlZmF1bHRTZWxlY3Rpb24sIEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24sIFN0YWNrQ29sbGVjdGlvbiB9IGZyb20gJy4vYXBpL2Nsb3VkLWFzc2VtYmx5JztcbmltcG9ydCB7IENsb3VkRXhlY3V0YWJsZSB9IGZyb20gJy4vYXBpL2Nsb3VkLWV4ZWN1dGFibGUnO1xuaW1wb3J0IHsgZGF0YSwgZXJyb3IsIHByaW50LCBzdWNjZXNzLCB3YXJuaW5nIH0gZnJvbSAnLi9sb2dnaW5nJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCB7IGV4aXQgfSBmcm9tICdwcm9jZXNzJztcbmltcG9ydCB7IHByaW50U3RhY2tEaWZmIH0gZnJvbSAnLi9kaWZmJztcbmltcG9ydCB7IGRlc2VyaWFsaXplU3RydWN0dXJlIH0gZnJvbSAnLi9zZXJpYWxpemUnO1xuXG5jb25zdCBDT05GSUdfTkFNRSA9ICdhY2NvdW50LmNvbmZpZy5qc29uJztcbmNvbnN0IExPQ0FMX1BBVEggPSAnLi8nO1xuY29uc3QgR0xPQkFMX1BBVEggPSBfX2Rpcm5hbWUgKyAnLy4uLyc7XG5jb25zdCBTVEFDS19JTkZPID0gJ3N0YWNrLmluZm8uanNvbic7XG5jb25zdCBERVBMT1lfU1RBQ0tfSURfTEVOR1RIID0gMzY7XG5cbmNvbnN0IElOSVRfU1RBQ0sgPSAnaW5pdCc7XG5jb25zdCBTWU5USF9TVEFDSyA9ICdzeW50aCc7XG5jb25zdCBERVBMT1lfU1RBQ0sgPSAnZGVwbG95JztcbmNvbnN0IERFU1RST1lfU1RBQ0sgPSAnZGVzdHJveSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrVG9vbGtpdFByb3BzIHtcbiAgLyoqXG4gICAqIFRoZSBDbG91ZCBFeGVjdXRhYmxlXG4gICAqL1xuICBjbG91ZEV4ZWN1dGFibGU6IENsb3VkRXhlY3V0YWJsZTtcblxuICAvKipcbiAgICogV2hldGhlciB0byBiZSB2ZXJib3NlXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICB2ZXJib3NlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRG9uJ3Qgc3RvcCBvbiBlcnJvciBtZXRhZGF0YVxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgaWdub3JlRXJyb3JzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHJlYXQgd2FybmluZ3MgaW4gbWV0YWRhdGEgYXMgZXJyb3JzXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBzdHJpY3Q/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uIChzZXR0aW5ncyBhbmQgY29udGV4dClcbiAgICovXG4gIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb247XG59XG5cbi8qKlxuICogVG9vbGtpdCBsb2dpY1xuICpcbiAqIFRoZSB0b29sa2l0IHJ1bnMgdGhlIGBjbG91ZEV4ZWN1dGFibGVgIHRvIG9idGFpbiBhIGNsb3VkIGFzc2VtYmx5XG4gKlxuICovXG5leHBvcnQgY2xhc3MgQ2RrVG9vbGtpdCB7XG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIGdldEpzb24oZmlsZU5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcpIHtcbiAgICBsZXQgZmlsZVBhdGggPSBMT0NBTF9QQVRIICsgZmlsZU5hbWU7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICBsZXQgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGUpW2tleV07XG4gICAgfSBlbHNlIGlmIChmaWxlTmFtZSA9PT0gU1RBQ0tfSU5GTykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZmlsZVBhdGggPSBHTE9CQUxfUEFUSCArIGZpbGVOYW1lO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgbGV0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlKVtrZXldO1xuICAgIH1cbiAgICBlcnJvcihcIlBsZWFzZSB1c2UgJ3JvcyBjb25maWcgKC1nKScgdG8gc2V0IHlvdXIgYWNjb3VudCBjb25maWd1cmF0aW9uIGZpcnN0bHkhXCIpO1xuICAgIGV4aXQoKTtcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb3BzOiBDZGtUb29sa2l0UHJvcHMpIHt9XG5cbiAgcHVibGljIGFzeW5jIGdldFJvc0NsaWVudCgpIHtcbiAgICBsZXQgYWNjZXNzS2V5SWQgPSBhd2FpdCBkZWNpcGhlcihhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdhY2Nlc3NLZXlJZCcpKTtcbiAgICBsZXQgYWNjZXNzS2V5U2VjcmV0ID0gYXdhaXQgZGVjaXBoZXIoYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAnYWNjZXNzS2V5U2VjcmV0JykpO1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyByb3NDbGllbnQoe1xuICAgICAgZW5kcG9pbnQ6IGF3YWl0IENka1Rvb2xraXQuZ2V0SnNvbihDT05GSUdfTkFNRSwgJ2VuZHBvaW50JyksXG4gICAgICBhY2Nlc3NLZXlJZDogYWNjZXNzS2V5SWQsXG4gICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGFjY2Vzc0tleVNlY3JldCxcbiAgICB9KTtcbiAgICByZXR1cm4gY2xpZW50O1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGNvbmZpZyhnbG9iYWw6IGJvb2xlYW4pIHtcbiAgICBsZXQgY29uZmlnU2F2ZVBhdGggPSAoZ2xvYmFsID8gR0xPQkFMX1BBVEggOiBMT0NBTF9QQVRIKSArIENPTkZJR19OQU1FO1xuICAgIGxldCBlbmRwb2ludCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignZW5kcG9pbnQob3B0aW9uYWwsIGRlZmF1bHQ6aHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tKTonKTtcbiAgICBsZXQgYWNjZXNzS2V5SWQgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ2FjY2Vzc0tleUlkOicsIHtoaWRlRWNob0JhY2s6IHRydWV9KTtcbiAgICBsZXQgYWNjZXNzS2V5U2VjcmV0ID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdhY2Nlc3NLZXlTZWNyZXQ6Jywge2hpZGVFY2hvQmFjazogdHJ1ZX0pO1xuICAgIGxldCByZWdpb25JZCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignZGVmYXVsdFJlZ2lvbklkKG9wdGlvbmFsLCBkZWZhdWx0OmNuLWhhbmd6aG91KTonKTtcbiAgICBlbmRwb2ludCA9IGVuZHBvaW50ID8gZW5kcG9pbnQgOiAnaHR0cHM6Ly9yb3MuYWxpeXVuY3MuY29tJztcbiAgICByZWdpb25JZCA9IHJlZ2lvbklkID8gcmVnaW9uSWQgOiAnY24taGFuZ3pob3UnO1xuICAgIGlmIChlbmRwb2ludC5sZW5ndGggPT09IDAgfHwgYWNjZXNzS2V5SWQubGVuZ3RoID09PSAwIHx8IGFjY2Vzc0tleVNlY3JldC5sZW5ndGggPT09IDApIHtcbiAgICAgIGVycm9yKFxuICAgICAgICAnV0FOUk5JTkc6IElmIHdhbnQgdG8gZGVwbG95IG9yIGRlbGV0ZSBzdGFjaywgdGhlIGVuZHBvaW50LCBhY2Nlc3NLZXlJZCBhbmQgYWNjZXNzS2V5U2VjcmV0IG11c3QgYmUgcHJvdmlkZWQuJyxcbiAgICAgICk7XG4gICAgfVxuICAgIGxldCBjb25maWdJbmZvID0ge1xuICAgICAgZW5kcG9pbnQ6IGVuZHBvaW50LFxuICAgICAgcmVnaW9uSWQ6IHJlZ2lvbklkLFxuICAgICAgYWNjZXNzS2V5SWQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlJZCksXG4gICAgICBhY2Nlc3NLZXlTZWNyZXQ6IGF3YWl0IGNpcGhlcihhY2Nlc3NLZXlTZWNyZXQpLFxuICAgIH07XG4gICAgbGV0IGZpbGUgPSBwYXRoLmpvaW4oY29uZmlnU2F2ZVBhdGgpO1xuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnSW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgICBzdWNjZXNzKGBcXG4g4pyFIFlvdXIgY2RrIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gc2F2ZWQgc3VjY2Vzc2Z1bGx5IWApO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGxpc3Qoc2VsZWN0b3JzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yTGlzdChzZWxlY3RvcnMpO1xuICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICBsZXQgc3RhY2tJbmZvID0gYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKTtcbiAgICAgIGxldCBzdGF0dXMgPSBzdGFja0luZm8uc3RhdHVzXG4gICAgICBkYXRhKHN0YWNrLmlkLCBzdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRoZXNpemUgdGhlIGdpdmVuIHNldCBvZiBzdGFja3MgKGNhbGxlZCB3aGVuIHRoZSB1c2VyIHJ1bnMgJ2NkayBzeW50aCcpXG4gICAqXG4gICAqIElOUFVUOiBTdGFjayBuYW1lcyBjYW4gYmUgc3VwcGxpZWQgdXNpbmcgYSBnbG9iIGZpbHRlci4gSWYgbm8gc3RhY2tzIGFyZVxuICAgKiBnaXZlbiwgYWxsIHN0YWNrcyBmcm9tIHRoZSBhcHBsaWNhdGlvbiBhcmUgaW1wbGljdGx5IHNlbGVjdGVkLlxuICAgKlxuICAgKiBPVVRQVVQ6IElmIG1vcmUgdGhhbiBvbmUgc3RhY2sgZW5kcyB1cCBiZWluZyBzZWxlY3RlZCwgYW4gb3V0cHV0IGRpcmVjdG9yeVxuICAgKiBzaG91bGQgYmUgc3VwcGxpZWQsIHdoZXJlIHRoZSB0ZW1wbGF0ZXMgd2lsbCBiZSB3cml0dGVuLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIHN5bnRoKHN0YWNrTmFtZXM6IHN0cmluZ1tdLCBleGNsdXNpdmVseTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEaWZmKHN0YWNrTmFtZXMsIGV4Y2x1c2l2ZWx5KTtcblxuICAgIC8vIGlmIHdlIGhhdmUgYSBzaW5nbGUgc3RhY2ssIHByaW50IGl0IHRvIFNURE9VVFxuICAgIGlmIChzdGFja3Muc3RhY2tDb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tzLmZpcnN0U3RhY2suaWQsIFNZTlRIX1NUQUNLKTtcbiAgICAgIHJldHVybiBzdGFja3MuZmlyc3RTdGFjay50ZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgc3RhY2sgb2Ygc3RhY2tzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrLmlkLCBTWU5USF9TVEFDSyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaXNJbnRlZ01vZGUgPSBwcm9jZXNzLmVudi5DREtfSU5URUdfTU9ERSA9PT0gJzEnO1xuICAgIGlmIChpc0ludGVnTW9kZSkge1xuICAgICAgcmV0dXJuIHN0YWNrcy5zdGFja0FydGlmYWN0cy5tYXAoKHMpID0+IHMudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIC8vIG5vdCBvdXRwdXR0aW5nIHRlbXBsYXRlIHRvIHN0ZG91dCwgbGV0J3MgZXhwbGFpbiB0aGluZ3MgdG8gdGhlIHVzZXIgYSBsaXR0bGUgYml0Li4uXG4gICAgc3VjY2VzcyhgU3VjY2Vzc2Z1bGx5IHN5bnRoZXNpemVkIHRvICR7Y29sb3JzLmJsdWUocGF0aC5yZXNvbHZlKHN0YWNrcy5hc3NlbWJseS5kaXJlY3RvcnkpKX1gKTtcbiAgICBwcmludChcbiAgICAgIGBTdXBwbHkgYSBzdGFjayBpZCAoJHtzdGFja3Muc3RhY2tBcnRpZmFjdHMubWFwKChzKSA9PiBjb2xvcnMuZ3JlZW4ocy5pZCkpLmpvaW4oJywgJyl9KSB0byBkaXNwbGF5IGl0cyB0ZW1wbGF0ZS5gLFxuICAgICk7XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGRlcGxveShvcHRpb25zOiBEZXBsb3lPcHRpb25zKSB7XG4gICAgdGhpcy5zeW5jU3RhY2tJbmZvKCk7XG4gICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JEZXBsb3kob3B0aW9ucy5zdGFja05hbWVzLCBvcHRpb25zLmV4Y2x1c2l2ZWx5KTtcbiAgICBjb25zdCBzdGFja05hbWUgPSBvcHRpb25zLnN0YWNrTmFtZXMubGVuZ3RoICE9PSAwID8gb3B0aW9ucy5zdGFja05hbWVzWzBdIDogc3RhY2tzLnN0YWNrQXJ0aWZhY3RzWzBdLmlkO1xuICAgIGxldCByZWdpb24gPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcpO1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgbGV0IHRlbXBsYXRlQm9keSA9IGZzLnJlYWRGaWxlU3luYyhgLi9jZGsub3V0LyR7c3RhY2tOYW1lfS50ZW1wbGF0ZS5qc29uYCk7XG4gICAgbGV0IGNvbnRlbnQ6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge1xuICAgICAgU3RhY2tOYW1lOiBzdGFja05hbWUudG9TdHJpbmcoKSxcbiAgICAgIFJlZ2lvbklkOiByZWdpb24sXG4gICAgICBUaW1lb3V0SW5NaW51dGVzOiBvcHRpb25zLnRpbWVvdXQsXG4gICAgICBUZW1wbGF0ZUJvZHk6IHRlbXBsYXRlQm9keSxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMucGFyYW1ldGVycykge1xuICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSAxO1xuICAgICAgbGV0IHBhcmFzID0gb3B0aW9ucy5wYXJhbWV0ZXJzO1xuICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFzKSB7XG4gICAgICAgIGNvbnRlbnRbJ1BhcmFtZXRlcnMuJyArIGNvdW50LnRvU3RyaW5nKCkgKyAnLlBhcmFtZXRlcktleSddID0ga2V5O1xuICAgICAgICBjb250ZW50WydQYXJhbWV0ZXJzLicgKyBjb3VudC50b1N0cmluZygpICsgJy5QYXJhbWV0ZXJWYWx1ZSddID0gcGFyYXNba2V5XTtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0YWNrSW5mbyA9IGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpO1xuICAgIGlmIChzdGFja0luZm8uc3RhY2tJZCkge1xuICAgICAgY29udGVudFsnU3RhY2tJZCddID0gc3RhY2tJbmZvLnN0YWNrSWQ7XG4gICAgICBjbGllbnQudXBkYXRlU3RhY2soY29udGVudCkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCByZXMuU3RhY2tJZCk7XG4gICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQodXBkYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICBjb2xvcnMuYmx1ZShyZXMuUmVxdWVzdElkKSxcbiAgICAgICAgICBjb2xvcnMuYmx1ZShyZXMuU3RhY2tJZCksXG4gICAgICAgICk7XG4gICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICAvLyB3aGVuIHJlamVjdCwgbWVhbnMgdGhlIHN0YWNrIGluIHJvcyBoYXMgYmVlbiBkZWxldGVkIGZyb20gY29uc29sZVxuICAgICAgICAvLyBzbyB1c2UgY3JlYXRlIGFwaSB0byBjcmVhdGUgYSBuZXcgc3RhY2tcbiAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ05vdFN1cHBvcnRlZCcgJiYgZXgubWVzc2FnZS5zdGFydHNXaXRoKCdVcGRhdGUgdGhlIGNvbXBsZXRlbHkgc2FtZSBzdGFjaycpKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBzdGFja0luZm8uc3RhY2tJZCk7XG4gICAgICAgICAgc3VjY2VzcygnVGhlIHN0YWNrIGlzIGNvbXBsZXRlbHkgdGhlIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXBkYXRlLicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXguY29kZSA9PSAnU3RhY2tOb3RGb3VuZCcpIHtcbiAgICAgICAgICBjbGllbnQuY3JlYXRlU3RhY2soY29udGVudCkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZSwgcmVzLlN0YWNrSWQpO1xuICAgICAgICAgICAgc3VjY2VzcyhgXFxuIOKchSBUaGUgZGVwbG95bWVudChjcmVhdGUgc3RhY2spIGhhcyBjb21wbGV0ZWQhXFxuUmVxdWVzdGVkSWQ6ICVzXFxuU3RhY2tJZDogJXNgLCBjb2xvcnMuYmx1ZShyZXMuUmVxdWVzdElkKSwgY29sb3JzLmJsdWUocmVzLlN0YWNrSWQpKTtcbiAgICAgICAgICB9LCAoZXgyOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGNyZWF0ZSBzdGFjayglcyk6ICVzICVzJywgZXgyLnJlcXVlc3RJZCwgZXgyLmNvZGUsIGV4Mi5tZXNzYWdlKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGVycm9yKCdmYWlsIHRvIHVwZGF0ZSBzdGFjazogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZml4ZWRcbiAgICAgIC8vIGJ1Zzogd2hlbiB1cGRhdGluZywgdGhlIGNvbnNvbGUgd2lsbCBkaXNwbGF5IGVycm9yOiB0aGUgc3RhY2sgbmFtZSBoYXMgYmVlbiBleGlzdGluZy5cbiAgICAgIC8vIG5lZWQgcm9zIGNsaWVudCBBUEk6IHVwZGF0ZVN0YWNrXG4gICAgICBjbGllbnQuY3JlYXRlU3RhY2soY29udGVudCkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCByZXMuU3RhY2tJZCk7XG4gICAgICAgIHN1Y2Nlc3MoXG4gICAgICAgICAgYFxcbiDinIUgVGhlIGRlcGxveW1lbnQoY3JlYXRlIHN0YWNrKSBoYXMgY29tcGxldGVkIVxcblJlcXVlc3RlZElkOiAlc1xcblN0YWNrSWQ6ICVzYCxcbiAgICAgICAgICBjb2xvcnMuYmx1ZShyZXMuUmVxdWVzdElkKSxcbiAgICAgICAgICBjb2xvcnMuYmx1ZShyZXMuU3RhY2tJZCksXG4gICAgICAgICk7XG4gICAgICB9LCAoZXg6IGFueSkgPT4ge1xuICAgICAgICBlcnJvcignZmFpbCB0byBjcmVhdGUgc3RhY2s6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkaWZmKG9wdGlvbnM6IERpZmZPcHRpb25zKSB7XG4gICAgbGV0IHN0YWNrcyA9IGF3YWl0IHRoaXMuc2VsZWN0U3RhY2tzRm9yRGVzdHJveShvcHRpb25zLnN0YWNrTmFtZXMpO1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZ2V0Um9zQ2xpZW50KCk7XG4gICAgbGV0IHJlZ2lvbkluTG9jYWwgPSBhd2FpdCBDZGtUb29sa2l0LmdldEpzb24oQ09ORklHX05BTUUsICdyZWdpb25JZCcpO1xuICAgIGxldCB0ZW1wID0gb3B0aW9ucy5yZWdpb24gPyBvcHRpb25zLnJlZ2lvbiA6IHJlZ2lvbkluTG9jYWw7XG4gICAgY29uc3Qgc3RyZWFtID0gb3B0aW9ucy5zdHJlYW0gfHwgcHJvY2Vzcy5zdGRlcnI7XG4gICAgY29uc3QgY29udGV4dExpbmVzID0gb3B0aW9ucy5jb250ZXh0TGluZXMgfHwgMztcbiAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgIGxldCBzdGFja0luZm8gPSBhd2FpdCB0aGlzLmZpbmRTdGFja0luZm8oc3RhY2suaWQpO1xuICAgICAgaWYgKCFzdGFja0luZm8uc3RhY2tJZCkge1xuICAgICAgICBzdHJlYW0ud3JpdGUoZm9ybWF0KCdTdGFjayAlcyBoYXMgbm90IGJlZW4gZGVwbG95ZWQuXFxuJywgY29sb3JzLmJvbGQoc3RhY2suZGlzcGxheU5hbWUpKSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY2xpZW50LmdldFRlbXBsYXRlKHtSZWdpb25JZDogdGVtcCwgU3RhY2tJZDogc3RhY2tJbmZvLnN0YWNrSWR9KVxuICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRlc2VyaWFsaXplU3RydWN0dXJlKHJlcy5UZW1wbGF0ZUJvZHkpO1xuICAgICAgICAgIHN0cmVhbS53cml0ZShmb3JtYXQoJ1N0YWNrICVzXFxuJywgY29sb3JzLmJvbGQoc3RhY2suZGlzcGxheU5hbWUpKSk7XG4gICAgICAgICAgcHJpbnRTdGFja0RpZmYodGVtcGxhdGUsIHN0YWNrLCBjb250ZXh0TGluZXMsIHN0cmVhbSk7XG4gICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIHN5bnRoLmApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2suaWQsIFNZTlRIX1NUQUNLKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignZmFpbCB0byBnZXQgdGVtcGxhdGU6ICVzICVzJywgZXguY29kZSwgZXgubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGVzdHJveShvcHRpb25zOiBEZXN0cm95T3B0aW9ucykge1xuICAgIHRoaXMuc3luY1N0YWNrSW5mbygpO1xuICAgIGxldCBzdGFja3MgPSBhd2FpdCB0aGlzLnNlbGVjdFN0YWNrc0ZvckRlc3Ryb3kob3B0aW9ucy5zdGFja05hbWVzKTtcbiAgICBsZXQgc3RhY2tOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGxldCBzdGFjayBvZiBzdGFja3Muc3RhY2tBcnRpZmFjdHMpIHtcbiAgICAgIGlmICgoYXdhaXQgdGhpcy5maW5kU3RhY2tJbmZvKHN0YWNrLmlkKSkuc3RhY2tJZCkge1xuICAgICAgICBzdGFja05hbWVzLnB1c2goc3RhY2suaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMucXVpZXQpIHtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGxldCBjb25maXJtID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKFxuICAgICAgICAgICAgJ1RoZSBmb2xsb3dpbmcgc3RhY2socykgd2lsbCBiZSBkZXN0cm95ZWQoT25seSBkZXBsb3llZCBzdGFja3Mgd2lsbCBiZSBkaXNwbGF5ZWQpLlxcblxcbicgK1xuICAgICAgICAgICAgc3RhY2tOYW1lcy50b1N0cmluZygpICtcbiAgICAgICAgICAgICdcXG5cXG5QbGVhc2UgY29uZmlybS4oWS9OKVxcbicsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb25maXJtID09PSAnbicgfHwgY29uZmlybSA9PT0gJ04nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maXJtID09PSAneScgfHwgY29uZmlybSA9PT0gJ1knKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5nZXRSb3NDbGllbnQoKTtcbiAgICBmb3IgKGxldCBzdGFja05hbWUgb2Ygc3RhY2tOYW1lcykge1xuICAgICAgY2xpZW50XG4gICAgICAgIC5kZWxldGVTdGFjayh7XG4gICAgICAgICAgU3RhY2tJZDogKGF3YWl0IHRoaXMuZmluZFN0YWNrSW5mbyhzdGFja05hbWUpKS5zdGFja0lkLFxuICAgICAgICAgIFJlZ2lvbklkOiBvcHRpb25zLnJlZ2lvbiA/IG9wdGlvbnMucmVnaW9uIDogYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKENPTkZJR19OQU1FLCAncmVnaW9uSWQnKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGFja0luZm8oc3RhY2tOYW1lLCBERVNUUk9ZX1NUQUNLKTtcbiAgICAgICAgICBzdWNjZXNzKGBcXG4g4pyFIERlbGV0ZWRcXG5SZXF1ZXN0ZWRJZDogJXNgLCBjb2xvcnMuYmx1ZShyZXMuUmVxdWVzdElkKSk7XG4gICAgICAgIH0sIChleDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGV4LmNvZGUgPT0gJ1N0YWNrTm90Rm91bmQnKSB7XG4gICAgICAgICAgICB3YXJuaW5nKGBcXG4g4p2MIFRoZSBzcGVjaWZpYyBzdGFjayBkb2Vzbid0IGV4aXQgYW5kIGl0J3MgbG9jYWwgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIGRlc3Ryb3kuYCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrSW5mbyhzdGFja05hbWUsIERFU1RST1lfU1RBQ0spO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdmYWlsIHRvIGRlbGV0ZSBzdGFjazogJXMgJXMnLCBleC5jb2RlLCBleC5tZXNzYWdlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzeW5jU3RhY2tJbmZvKCkge1xuICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgU1RBQ0tfSU5GTyk7XG4gICAgbGV0IGZpbGVDb250ZW50ID0ge307XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZmlsZUNvbnRlbnQsIG51bGwsICdcXHQnKSk7XG4gICAgfVxuICAgIGxldCB0ZW1wOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgLy8gc2VsZWN0b3IubGVuZ3RoID0gMCBtZWFucyBzZWxlY3QgYWxsIHN0YWNrcyBmcm9tIHRoaXMgYXBwXG4gICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgdGhpcy5zZWxlY3RTdGFja3NGb3JMaXN0KFtdKTtcbiAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgbGV0IHZhbHVlID0gYXdhaXQgQ2RrVG9vbGtpdC5nZXRKc29uKFNUQUNLX0lORk8sIHN0YWNrLmlkKTtcbiAgICAgIC8vIGlmIHRoZSBzdGFjayBoYXMgbm8gaW5mbywgdGhlbiBhZGQgaW5pdCB0YWcgZm9yIGl0XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGVtcFtzdGFjay5pZF0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBbc3RhY2suaWRdID0ge1xuICAgICAgICAgIHN0YXR1czogSU5JVF9TVEFDSyxcbiAgICAgICAgICBzdGFja0lkOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkodGVtcCwgbnVsbCwgJ1xcdCcpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdXBkYXRlU3RhY2tJbmZvKHN0YWNrTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKExPQ0FMX1BBVEggKyBTVEFDS19JTkZPKTtcbiAgICBsZXQgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7XG4gICAgbGV0IGluZm8gPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcbiAgICBsZXQgc3RhY2tJbmZvID0gaW5mb1tzdGFja05hbWVdO1xuICAgIGlmICghc3RhY2tJbmZvKSB7XG4gICAgICBzdGFja0luZm8gPSBpbmZvW3N0YWNrTmFtZV0gPSB7fTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gREVQTE9ZX1NUQUNLX0lEX0xFTkdUSCkge1xuICAgICAgc3RhY2tJbmZvLnN0YXR1cyA9IERFUExPWV9TVEFDSztcbiAgICAgIHN0YWNrSW5mby5zdGFja0lkID0gdmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhY2tJbmZvLnN0YXR1cyA9IHZhbHVlO1xuICAgICAgaWYgKHZhbHVlID09PSBERVNUUk9ZX1NUQUNLKSB7XG4gICAgICAgIHN0YWNrSW5mby5zdGFja0lkID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoaW5mbywgbnVsbCwgJ1xcdCcpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZmluZFN0YWNrSW5mbyhzdGFja05hbWU6IHN0cmluZykge1xuICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihMT0NBTF9QQVRIICsgU1RBQ0tfSU5GTyk7XG4gICAgbGV0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGVDb250ZW50KVtzdGFja05hbWVdO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JMaXN0KHNlbGVjdG9yczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBhc3NlbWJseSA9IGF3YWl0IHRoaXMuYXNzZW1ibHkoKTtcbiAgICBjb25zdCBzdGFja3MgPSBhd2FpdCBhc3NlbWJseS5zZWxlY3RTdGFja3Moc2VsZWN0b3JzLCB7IGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5BbGxTdGFja3MgfSk7XG5cbiAgICAvLyBObyB2YWxpZGF0aW9uXG5cbiAgICByZXR1cm4gc3RhY2tzO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JEZXN0cm95KHN0YWNrTmFtZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5BbGxTdGFja3MsXG4gICAgfSk7XG5cbiAgICAvLyBObyB2YWxpZGF0aW9uXG5cbiAgICByZXR1cm4gc3RhY2tzO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzZWxlY3RTdGFja3NGb3JEZXBsb3koc3RhY2tOYW1lczogc3RyaW5nW10sIGV4Y2x1c2l2ZWx5PzogYm9vbGVhbikge1xuICAgIGNvbnN0IGFzc2VtYmx5ID0gYXdhaXQgdGhpcy5hc3NlbWJseSgpO1xuICAgIGNvbnN0IHN0YWNrcyA9IGF3YWl0IGFzc2VtYmx5LnNlbGVjdFN0YWNrcyhzdGFja05hbWVzLCB7XG4gICAgICBleHRlbmQ6IGV4Y2x1c2l2ZWx5ID8gRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5Ob25lIDogRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5VcHN0cmVhbSxcbiAgICAgIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbi5Pbmx5U2luZ2xlLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdGhpcy52YWxpZGF0ZVN0YWNrcyhzdGFja3MpO1xuXG4gICAgcmV0dXJuIHN0YWNrcztcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2VsZWN0U3RhY2tzRm9yRGlmZihzdGFja05hbWVzOiBzdHJpbmdbXSwgZXhjbHVzaXZlbHk/OiBib29sZWFuKSB7XG4gICAgY29uc3QgYXNzZW1ibHkgPSBhd2FpdCB0aGlzLmFzc2VtYmx5KCk7XG4gICAgY29uc3Qgc3RhY2tzID0gYXdhaXQgYXNzZW1ibHkuc2VsZWN0U3RhY2tzKHN0YWNrTmFtZXMsIHtcbiAgICAgIGV4dGVuZDogZXhjbHVzaXZlbHkgPyBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUgOiBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLlVwc3RyZWFtLFxuICAgICAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrcyxcbiAgICB9KTtcblxuICAgIGF3YWl0IHRoaXMudmFsaWRhdGVTdGFja3Moc3RhY2tzKTtcblxuICAgIHJldHVybiBzdGFja3M7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgdGhlIHN0YWNrcyBmb3IgZXJyb3JzIGFuZCB3YXJuaW5ncyBhY2NvcmRpbmcgdG8gdGhlIENMSSdzIGN1cnJlbnQgc2V0dGluZ3NcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgdmFsaWRhdGVTdGFja3Moc3RhY2tzOiBTdGFja0NvbGxlY3Rpb24pIHtcbiAgICBzdGFja3MucHJvY2Vzc01ldGFkYXRhTWVzc2FnZXMoe1xuICAgICAgaWdub3JlRXJyb3JzOiB0aGlzLnByb3BzLmlnbm9yZUVycm9ycyxcbiAgICAgIHN0cmljdDogdGhpcy5wcm9wcy5zdHJpY3QsXG4gICAgICB2ZXJib3NlOiB0aGlzLnByb3BzLnZlcmJvc2UsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzc2VtYmx5KCk6IFByb21pc2U8Q2xvdWRBc3NlbWJseT4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNsb3VkRXhlY3V0YWJsZS5zeW50aGVzaXplKCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWZmT3B0aW9ucyB7XG4gIHJlZ2lvbj86IHN0cmluZztcbiAgc3RhY2tOYW1lczogc3RyaW5nW107XG4gIHBhdGg6IHN0cmluZztcbiAgc3RyZWFtPzogTm9kZUpTLldyaXRhYmxlU3RyZWFtO1xuICBjb250ZXh0TGluZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXBsb3lPcHRpb25zIHtcbiAgc3RhY2tOYW1lczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE9ubHkgc2VsZWN0IHRoZSBnaXZlbiBzdGFja1xuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZXhjbHVzaXZlbHk/OiBib29sZWFuO1xuICBwYXJhbWV0ZXJzPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkIH07XG4gIHRpbWVvdXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXN0cm95T3B0aW9ucyB7XG4gIHJlZ2lvbj86IHN0cmluZztcbiAgc3RhY2tOYW1lczogc3RyaW5nW107XG4gIHF1aWV0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWcge1xuICByZWFkb25seSBLZXk6IHN0cmluZztcbiAgcmVhZG9ubHkgVmFsdWU6IHN0cmluZztcbn1cbiJdfQ==