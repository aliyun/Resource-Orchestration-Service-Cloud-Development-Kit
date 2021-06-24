"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = exports.Context = exports.Configuration = exports.TRANSIENT_CONTEXT_KEY = exports.USER_DEFAULTS = exports.PROJECT_CONTEXT = exports.PROJECT_CONFIG = void 0;
const fs = require("fs-extra");
const os = require("os");
const fs_path = require("path");
const logging_1 = require("./logging");
const objects_1 = require("./util/objects");
exports.PROJECT_CONFIG = 'cdk.json';
exports.PROJECT_CONTEXT = 'cdk.context.json';
exports.USER_DEFAULTS = '~/.cdk.json';
/**
 * If a context value is an object with this key set to a truthy value, it won't be saved to cdk.context.json
 */
exports.TRANSIENT_CONTEXT_KEY = '$dontSaveContext';
const CONTEXT_KEY = 'context';
/**
 * All sources of settings combined
 */
class Configuration {
    constructor(commandLineArguments) {
        this.settings = new Settings();
        this.context = new Context();
        this.defaultConfig = new Settings({
            versionReporting: true,
            pathMetadata: true,
            output: 'cdk.out',
        });
        this.loaded = false;
        this.commandLineArguments = commandLineArguments
            ? Settings.fromCommandLineArguments(commandLineArguments)
            : new Settings();
        this.commandLineContext = this.commandLineArguments.subSettings([CONTEXT_KEY]).makeReadOnly();
    }
    get projectConfig() {
        if (!this._projectConfig) {
            throw new Error('#load has not been called yet!');
        }
        return this._projectConfig;
    }
    get projectContext() {
        if (!this._projectContext) {
            throw new Error('#load has not been called yet!');
        }
        return this._projectContext;
    }
    /**
     * Load all config
     */
    async load() {
        const userConfig = await loadAndLog(exports.USER_DEFAULTS);
        this._projectConfig = await loadAndLog(exports.PROJECT_CONFIG);
        this._projectContext = await loadAndLog(exports.PROJECT_CONTEXT);
        this.context = new Context(this.commandLineContext, this.projectConfig.subSettings([CONTEXT_KEY]).makeReadOnly(), this.projectContext);
        // Build settings from what's left
        this.settings = this.defaultConfig
            .merge(userConfig)
            .merge(this.projectConfig)
            .merge(this.commandLineArguments)
            .makeReadOnly();
        logging_1.debug('merged settings:', this.settings.all);
        this.loaded = true;
        return this;
    }
    /**
     * Save the project context
     */
    async saveContext() {
        if (!this.loaded) {
            return this;
        } // Avoid overwriting files with nothing
        await this.projectContext.save(exports.PROJECT_CONTEXT);
        return this;
    }
}
exports.Configuration = Configuration;
async function loadAndLog(fileName) {
    const ret = new Settings();
    await ret.load(fileName);
    if (!ret.empty) {
        logging_1.debug(fileName + ':', JSON.stringify(ret.all, undefined, 2));
    }
    return ret;
}
/**
 * Class that supports overlaying property bags
 *
 * Reads come from the first property bag that can has the given key,
 * writes go to the first property bag that is not readonly. A write
 * will remove the value from all property bags after the first
 * writable one.
 */
class Context {
    constructor(...bags) {
        this.bags = bags.length > 0 ? bags : [new Settings()];
    }
    get keys() {
        return Object.keys(this.all);
    }
    has(key) {
        return this.keys.indexOf(key) > -1;
    }
    get all() {
        let ret = new Settings();
        // In reverse order so keys to the left overwrite keys to the right of them
        for (const bag of [...this.bags].reverse()) {
            ret = ret.merge(bag);
        }
        return ret.all;
    }
    get(key) {
        for (const bag of this.bags) {
            const v = bag.get([key]);
            if (v !== undefined) {
                return v;
            }
        }
        return undefined;
    }
    set(key, value) {
        for (const bag of this.bags) {
            if (bag.readOnly) {
                continue;
            }
            // All bags past the first one have the value erased
            bag.set([key], value);
            value = undefined;
        }
    }
    unset(key) {
        this.set(key, undefined);
    }
    clear() {
        for (const key of this.keys) {
            this.unset(key);
        }
    }
}
exports.Context = Context;
/**
 * A single bag of settings
 */
class Settings {
    constructor(settings = {}, readOnly = false) {
        this.settings = settings;
        this.readOnly = readOnly;
    }
    /**
     * Parse Settings out of CLI arguments.
     * @param argv the received CLI arguments.
     * @returns a new Settings object.
     */
    static fromCommandLineArguments(argv) {
        const context = this.parseStringContextListToObject(argv);
        const tags = this.parseStringTagsListToObject(argv);
        return new Settings({
            app: argv.app,
            browser: argv.browser,
            context,
            tags,
            language: argv.language,
            pathMetadata: argv.pathMetadata,
            assetMetadata: argv.assetMetadata,
            profile: argv.profile,
            plugin: argv.plugin,
            requireApproval: argv.requireApproval,
            toolkitStackName: argv.toolkitStackName,
            toolkitBucket: {
                bucketName: argv.bootstrapBucketName,
                kmsKeyId: argv.bootstrapKmsKeyId,
            },
            versionReporting: argv.versionReporting,
            staging: argv.staging,
            output: argv.output,
        });
    }
    static mergeAll(...settings) {
        let ret = new Settings();
        for (const setting of settings) {
            ret = ret.merge(setting);
        }
        return ret;
    }
    static parseStringContextListToObject(argv) {
        const context = {};
        for (const assignment of argv.context || []) {
            const parts = assignment.split(/=(.*)/, 2);
            if (parts.length === 2) {
                logging_1.debug('CLI argument context: %s=%s', parts[0], parts[1]);
                if (parts[0].match(/^aliyun:.+/)) {
                    throw new Error(`User-provided context cannot use keys prefixed with 'aliyun:', but ${parts[0]} was provided.`);
                }
                context[parts[0]] = parts[1];
            }
            else {
                logging_1.warning('Context argument is not an assignment (key=value): %s', assignment);
            }
        }
        return context;
    }
    static parseStringTagsListToObject(argv) {
        const tags = [];
        for (const assignment of argv.tags || []) {
            const parts = assignment.split('=', 2);
            if (parts.length === 2) {
                logging_1.debug('CLI argument tags: %s=%s', parts[0], parts[1]);
                tags.push({
                    Key: parts[0],
                    Value: parts[1],
                });
            }
            else {
                logging_1.warning('Tags argument is not an assignment (key=value): %s', assignment);
            }
        }
        return tags;
    }
    async load(fileName) {
        if (this.readOnly) {
            throw new Error(`Can't load ${fileName}: settings object is readonly`);
        }
        this.settings = {};
        const expanded = expandHomeDir(fileName);
        if (await fs.pathExists(expanded)) {
            this.settings = await fs.readJson(expanded);
        }
        return this;
    }
    async save(fileName) {
        const expanded = expandHomeDir(fileName);
        await fs.writeJson(expanded, stripTransientValues(this.settings), { spaces: 2 });
        return this;
    }
    get all() {
        return this.get([]);
    }
    merge(other) {
        return new Settings(objects_1.deepMerge(this.settings, other.settings));
    }
    subSettings(keyPrefix) {
        return new Settings(this.get(keyPrefix) || {}, false);
    }
    makeReadOnly() {
        return new Settings(this.settings, true);
    }
    clear() {
        if (this.readOnly) {
            throw new Error('Cannot clear(): settings are readonly');
        }
        this.settings = {};
    }
    get empty() {
        return Object.keys(this.settings).length === 0;
    }
    get(path) {
        return objects_1.deepClone(objects_1.deepGet(this.settings, path));
    }
    set(path, value) {
        if (this.readOnly) {
            throw new Error(`Can't set ${path}: settings object is readonly`);
        }
        if (path.length === 0) {
            // deepSet can't handle this case
            this.settings = value;
        }
        else {
            objects_1.deepSet(this.settings, path, value);
        }
        return this;
    }
    unset(path) {
        this.set(path, undefined);
    }
}
exports.Settings = Settings;
function expandHomeDir(x) {
    if (x.startsWith('~')) {
        return fs_path.join(os.homedir(), x.substr(1));
    }
    return x;
}
/**
 * Return all context value that are not transient context values
 */
function stripTransientValues(obj) {
    const ret = {};
    for (const [key, value] of Object.entries(obj)) {
        if (!isTransientValue(value)) {
            ret[key] = value;
        }
    }
    return ret;
}
/**
 * Return whether the given value is a transient context value
 *
 * Values that are objects with a magic key set to a truthy value are considered transient.
 */
function isTransientValue(value) {
    return typeof value === 'object' && value !== null && value[exports.TRANSIENT_CONTEXT_KEY];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBK0I7QUFDL0IseUJBQXlCO0FBQ3pCLGdDQUFnQztBQUVoQyx1Q0FBMkM7QUFDM0MsNENBQXdFO0FBSTNELFFBQUEsY0FBYyxHQUFHLFVBQVUsQ0FBQztBQUM1QixRQUFBLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQztBQUNyQyxRQUFBLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFFM0M7O0dBRUc7QUFDVSxRQUFBLHFCQUFxQixHQUFHLGtCQUFrQixDQUFDO0FBRXhELE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQztBQUk5Qjs7R0FFRztBQUNILE1BQWEsYUFBYTtJQWdCeEIsWUFBWSxvQkFBZ0M7UUFmckMsYUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDMUIsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFZixrQkFBYSxHQUFHLElBQUksUUFBUSxDQUFDO1lBQzNDLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsTUFBTSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDO1FBTUssV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CO1lBQzlDLENBQUMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsb0JBQW9CLENBQUM7WUFDekQsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hHLENBQUM7SUFFRCxJQUFZLGFBQWE7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FB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cm9tICdmcy1leHRyYSc7XG5pbXBvcnQgKiBhcyBvcyBmcm9tICdvcyc7XG5pbXBvcnQgKiBhcyBmc19wYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi9jZGstdG9vbGtpdCc7XG5pbXBvcnQgeyBkZWJ1Zywgd2FybmluZyB9IGZyb20gJy4vbG9nZ2luZyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UsIGRlZXBHZXQsIGRlZXBDbG9uZSwgZGVlcFNldCB9IGZyb20gJy4vdXRpbC9vYmplY3RzJztcblxuZXhwb3J0IHR5cGUgU2V0dGluZ3NNYXAgPSB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuXG5leHBvcnQgY29uc3QgUFJPSkVDVF9DT05GSUcgPSAnY2RrLmpzb24nO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfQ09OVEVYVCA9ICdjZGsuY29udGV4dC5qc29uJztcbmV4cG9ydCBjb25zdCBVU0VSX0RFRkFVTFRTID0gJ34vLmNkay5qc29uJztcblxuLyoqXG4gKiBJZiBhIGNvbnRleHQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdGhpcyBrZXkgc2V0IHRvIGEgdHJ1dGh5IHZhbHVlLCBpdCB3b24ndCBiZSBzYXZlZCB0byBjZGsuY29udGV4dC5qc29uXG4gKi9cbmV4cG9ydCBjb25zdCBUUkFOU0lFTlRfQ09OVEVYVF9LRVkgPSAnJGRvbnRTYXZlQ29udGV4dCc7XG5cbmNvbnN0IENPTlRFWFRfS0VZID0gJ2NvbnRleHQnO1xuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7IHJlYWRvbmx5IFtuYW1lOiBzdHJpbmddOiB1bmtub3duIH07XG5cbi8qKlxuICogQWxsIHNvdXJjZXMgb2Ygc2V0dGluZ3MgY29tYmluZWRcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xuICBwdWJsaWMgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoKTtcbiAgcHVibGljIGNvbnRleHQgPSBuZXcgQ29udGV4dCgpO1xuXG4gIHB1YmxpYyByZWFkb25seSBkZWZhdWx0Q29uZmlnID0gbmV3IFNldHRpbmdzKHtcbiAgICB2ZXJzaW9uUmVwb3J0aW5nOiB0cnVlLFxuICAgIHBhdGhNZXRhZGF0YTogdHJ1ZSxcbiAgICBvdXRwdXQ6ICdjZGsub3V0JyxcbiAgfSk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBjb21tYW5kTGluZUFyZ3VtZW50czogU2V0dGluZ3M7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZExpbmVDb250ZXh0OiBTZXR0aW5ncztcbiAgcHJpdmF0ZSBfcHJvamVjdENvbmZpZz86IFNldHRpbmdzO1xuICBwcml2YXRlIF9wcm9qZWN0Q29udGV4dD86IFNldHRpbmdzO1xuICBwcml2YXRlIGxvYWRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbW1hbmRMaW5lQXJndW1lbnRzPzogQXJndW1lbnRzKSB7XG4gICAgdGhpcy5jb21tYW5kTGluZUFyZ3VtZW50cyA9IGNvbW1hbmRMaW5lQXJndW1lbnRzXG4gICAgICA/IFNldHRpbmdzLmZyb21Db21tYW5kTGluZUFyZ3VtZW50cyhjb21tYW5kTGluZUFyZ3VtZW50cylcbiAgICAgIDogbmV3IFNldHRpbmdzKCk7XG4gICAgdGhpcy5jb21tYW5kTGluZUNvbnRleHQgPSB0aGlzLmNvbW1hbmRMaW5lQXJndW1lbnRzLnN1YlNldHRpbmdzKFtDT05URVhUX0tFWV0pLm1ha2VSZWFkT25seSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgcHJvamVjdENvbmZpZygpIHtcbiAgICBpZiAoIXRoaXMuX3Byb2plY3RDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignI2xvYWQgaGFzIG5vdCBiZWVuIGNhbGxlZCB5ZXQhJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0Q29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgcHJvamVjdENvbnRleHQoKSB7XG4gICAgaWYgKCF0aGlzLl9wcm9qZWN0Q29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCcjbG9hZCBoYXMgbm90IGJlZW4gY2FsbGVkIHlldCEnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3RDb250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgYWxsIGNvbmZpZ1xuICAgKi9cbiAgcHVibGljIGFzeW5jIGxvYWQoKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgY29uc3QgdXNlckNvbmZpZyA9IGF3YWl0IGxvYWRBbmRMb2coVVNFUl9ERUZBVUxUUyk7XG4gICAgdGhpcy5fcHJvamVjdENvbmZpZyA9IGF3YWl0IGxvYWRBbmRMb2coUFJPSkVDVF9DT05GSUcpO1xuICAgIHRoaXMuX3Byb2plY3RDb250ZXh0ID0gYXdhaXQgbG9hZEFuZExvZyhQUk9KRUNUX0NPTlRFWFQpO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gbmV3IENvbnRleHQoXG4gICAgICB0aGlzLmNvbW1hbmRMaW5lQ29udGV4dCxcbiAgICAgIHRoaXMucHJvamVjdENvbmZpZy5zdWJTZXR0aW5ncyhbQ09OVEVYVF9LRVldKS5tYWtlUmVhZE9ubHkoKSxcbiAgICAgIHRoaXMucHJvamVjdENvbnRleHQsXG4gICAgKTtcblxuICAgIC8vIEJ1aWxkIHNldHRpbmdzIGZyb20gd2hhdCdzIGxlZnRcbiAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5kZWZhdWx0Q29uZmlnXG4gICAgICAubWVyZ2UodXNlckNvbmZpZylcbiAgICAgIC5tZXJnZSh0aGlzLnByb2plY3RDb25maWcpXG4gICAgICAubWVyZ2UodGhpcy5jb21tYW5kTGluZUFyZ3VtZW50cylcbiAgICAgIC5tYWtlUmVhZE9ubHkoKTtcblxuICAgIGRlYnVnKCdtZXJnZWQgc2V0dGluZ3M6JywgdGhpcy5zZXR0aW5ncy5hbGwpO1xuXG4gICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgcHJvamVjdCBjb250ZXh0XG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc2F2ZUNvbnRleHQoKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgaWYgKCF0aGlzLmxvYWRlZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSAvLyBBdm9pZCBvdmVyd3JpdGluZyBmaWxlcyB3aXRoIG5vdGhpbmdcblxuICAgIGF3YWl0IHRoaXMucHJvamVjdENvbnRleHQuc2F2ZShQUk9KRUNUX0NPTlRFWFQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEFuZExvZyhmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxTZXR0aW5ncz4ge1xuICBjb25zdCByZXQgPSBuZXcgU2V0dGluZ3MoKTtcbiAgYXdhaXQgcmV0LmxvYWQoZmlsZU5hbWUpO1xuICBpZiAoIXJldC5lbXB0eSkge1xuICAgIGRlYnVnKGZpbGVOYW1lICsgJzonLCBKU09OLnN0cmluZ2lmeShyZXQuYWxsLCB1bmRlZmluZWQsIDIpKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIENsYXNzIHRoYXQgc3VwcG9ydHMgb3ZlcmxheWluZyBwcm9wZXJ0eSBiYWdzXG4gKlxuICogUmVhZHMgY29tZSBmcm9tIHRoZSBmaXJzdCBwcm9wZXJ0eSBiYWcgdGhhdCBjYW4gaGFzIHRoZSBnaXZlbiBrZXksXG4gKiB3cml0ZXMgZ28gdG8gdGhlIGZpcnN0IHByb3BlcnR5IGJhZyB0aGF0IGlzIG5vdCByZWFkb25seS4gQSB3cml0ZVxuICogd2lsbCByZW1vdmUgdGhlIHZhbHVlIGZyb20gYWxsIHByb3BlcnR5IGJhZ3MgYWZ0ZXIgdGhlIGZpcnN0XG4gKiB3cml0YWJsZSBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBiYWdzOiBTZXR0aW5nc1tdO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmJhZ3M6IFNldHRpbmdzW10pIHtcbiAgICB0aGlzLmJhZ3MgPSBiYWdzLmxlbmd0aCA+IDAgPyBiYWdzIDogW25ldyBTZXR0aW5ncygpXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQga2V5cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBoYXMoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5rZXlzLmluZGV4T2Yoa2V5KSA+IC0xO1xuICB9XG5cbiAgcHVibGljIGdldCBhbGwoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgbGV0IHJldCA9IG5ldyBTZXR0aW5ncygpO1xuXG4gICAgLy8gSW4gcmV2ZXJzZSBvcmRlciBzbyBrZXlzIHRvIHRoZSBsZWZ0IG92ZXJ3cml0ZSBrZXlzIHRvIHRoZSByaWdodCBvZiB0aGVtXG4gICAgZm9yIChjb25zdCBiYWcgb2YgWy4uLnRoaXMuYmFnc10ucmV2ZXJzZSgpKSB7XG4gICAgICByZXQgPSByZXQubWVyZ2UoYmFnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0LmFsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGZvciAoY29uc3QgYmFnIG9mIHRoaXMuYmFncykge1xuICAgICAgY29uc3QgdiA9IGJhZy5nZXQoW2tleV0pO1xuICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IGJhZyBvZiB0aGlzLmJhZ3MpIHtcbiAgICAgIGlmIChiYWcucmVhZE9ubHkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEFsbCBiYWdzIHBhc3QgdGhlIGZpcnN0IG9uZSBoYXZlIHRoZSB2YWx1ZSBlcmFzZWRcbiAgICAgIGJhZy5zZXQoW2tleV0sIHZhbHVlKTtcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1bnNldChrZXk6IHN0cmluZykge1xuICAgIHRoaXMuc2V0KGtleSwgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLmtleXMpIHtcbiAgICAgIHRoaXMudW5zZXQoa2V5KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIHNpbmdsZSBiYWcgb2Ygc2V0dGluZ3NcbiAqL1xuZXhwb3J0IGNsYXNzIFNldHRpbmdzIHtcbiAgLyoqXG4gICAqIFBhcnNlIFNldHRpbmdzIG91dCBvZiBDTEkgYXJndW1lbnRzLlxuICAgKiBAcGFyYW0gYXJndiB0aGUgcmVjZWl2ZWQgQ0xJIGFyZ3VtZW50cy5cbiAgICogQHJldHVybnMgYSBuZXcgU2V0dGluZ3Mgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tQ29tbWFuZExpbmVBcmd1bWVudHMoYXJndjogQXJndW1lbnRzKTogU2V0dGluZ3Mge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLnBhcnNlU3RyaW5nQ29udGV4dExpc3RUb09iamVjdChhcmd2KTtcbiAgICBjb25zdCB0YWdzID0gdGhpcy5wYXJzZVN0cmluZ1RhZ3NMaXN0VG9PYmplY3QoYXJndik7XG5cbiAgICByZXR1cm4gbmV3IFNldHRpbmdzKHtcbiAgICAgIGFwcDogYXJndi5hcHAsXG4gICAgICBicm93c2VyOiBhcmd2LmJyb3dzZXIsXG4gICAgICBjb250ZXh0LFxuICAgICAgdGFncyxcbiAgICAgIGxhbmd1YWdlOiBhcmd2Lmxhbmd1YWdlLFxuICAgICAgcGF0aE1ldGFkYXRhOiBhcmd2LnBhdGhNZXRhZGF0YSxcbiAgICAgIGFzc2V0TWV0YWRhdGE6IGFyZ3YuYXNzZXRNZXRhZGF0YSxcbiAgICAgIHByb2ZpbGU6IGFyZ3YucHJvZmlsZSxcbiAgICAgIHBsdWdpbjogYXJndi5wbHVnaW4sXG4gICAgICByZXF1aXJlQXBwcm92YWw6IGFyZ3YucmVxdWlyZUFwcHJvdmFsLFxuICAgICAgdG9vbGtpdFN0YWNrTmFtZTogYXJndi50b29sa2l0U3RhY2tOYW1lLFxuICAgICAgdG9vbGtpdEJ1Y2tldDoge1xuICAgICAgICBidWNrZXROYW1lOiBhcmd2LmJvb3RzdHJhcEJ1Y2tldE5hbWUsXG4gICAgICAgIGttc0tleUlkOiBhcmd2LmJvb3RzdHJhcEttc0tleUlkLFxuICAgICAgfSxcbiAgICAgIHZlcnNpb25SZXBvcnRpbmc6IGFyZ3YudmVyc2lvblJlcG9ydGluZyxcbiAgICAgIHN0YWdpbmc6IGFyZ3Yuc3RhZ2luZyxcbiAgICAgIG91dHB1dDogYXJndi5vdXRwdXQsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG1lcmdlQWxsKC4uLnNldHRpbmdzOiBTZXR0aW5nc1tdKTogU2V0dGluZ3Mge1xuICAgIGxldCByZXQgPSBuZXcgU2V0dGluZ3MoKTtcbiAgICBmb3IgKGNvbnN0IHNldHRpbmcgb2Ygc2V0dGluZ3MpIHtcbiAgICAgIHJldCA9IHJldC5tZXJnZShzZXR0aW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHBhcnNlU3RyaW5nQ29udGV4dExpc3RUb09iamVjdChhcmd2OiBBcmd1bWVudHMpOiBhbnkge1xuICAgIGNvbnN0IGNvbnRleHQ6IGFueSA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBhc3NpZ25tZW50IG9mIChhcmd2IGFzIGFueSkuY29udGV4dCB8fCBbXSkge1xuICAgICAgY29uc3QgcGFydHMgPSBhc3NpZ25tZW50LnNwbGl0KC89KC4qKS8sIDIpO1xuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBkZWJ1ZygnQ0xJIGFyZ3VtZW50IGNvbnRleHQ6ICVzPSVzJywgcGFydHNbMF0sIHBhcnRzWzFdKTtcbiAgICAgICAgaWYgKHBhcnRzWzBdLm1hdGNoKC9eYWxpeXVuOi4rLykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVXNlci1wcm92aWRlZCBjb250ZXh0IGNhbm5vdCB1c2Uga2V5cyBwcmVmaXhlZCB3aXRoICdhbGl5dW46JywgYnV0ICR7cGFydHNbMF19IHdhcyBwcm92aWRlZC5gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dFtwYXJ0c1swXV0gPSBwYXJ0c1sxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm5pbmcoJ0NvbnRleHQgYXJndW1lbnQgaXMgbm90IGFuIGFzc2lnbm1lbnQgKGtleT12YWx1ZSk6ICVzJywgYXNzaWdubWVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VTdHJpbmdUYWdzTGlzdFRvT2JqZWN0KGFyZ3Y6IEFyZ3VtZW50cyk6IFRhZ1tdIHtcbiAgICBjb25zdCB0YWdzOiBUYWdbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBhc3NpZ25tZW50IG9mIChhcmd2IGFzIGFueSkudGFncyB8fCBbXSkge1xuICAgICAgY29uc3QgcGFydHMgPSBhc3NpZ25tZW50LnNwbGl0KCc9JywgMik7XG4gICAgICBpZiAocGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGRlYnVnKCdDTEkgYXJndW1lbnQgdGFnczogJXM9JXMnLCBwYXJ0c1swXSwgcGFydHNbMV0pO1xuICAgICAgICB0YWdzLnB1c2goe1xuICAgICAgICAgIEtleTogcGFydHNbMF0sXG4gICAgICAgICAgVmFsdWU6IHBhcnRzWzFdLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm5pbmcoJ1RhZ3MgYXJndW1lbnQgaXMgbm90IGFuIGFzc2lnbm1lbnQgKGtleT12YWx1ZSk6ICVzJywgYXNzaWdubWVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YWdzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NNYXAgPSB7fSwgcHVibGljIHJlYWRvbmx5IHJlYWRPbmx5ID0gZmFsc2UpIHt9XG5cbiAgcHVibGljIGFzeW5jIGxvYWQoZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dGhpcz4ge1xuICAgIGlmICh0aGlzLnJlYWRPbmx5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGxvYWQgJHtmaWxlTmFtZX06IHNldHRpbmdzIG9iamVjdCBpcyByZWFkb25seWApO1xuICAgIH1cbiAgICB0aGlzLnNldHRpbmdzID0ge307XG5cbiAgICBjb25zdCBleHBhbmRlZCA9IGV4cGFuZEhvbWVEaXIoZmlsZU5hbWUpO1xuICAgIGlmIChhd2FpdCBmcy5wYXRoRXhpc3RzKGV4cGFuZGVkKSkge1xuICAgICAgdGhpcy5zZXR0aW5ncyA9IGF3YWl0IGZzLnJlYWRKc29uKGV4cGFuZGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzYXZlKGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHRoaXM+IHtcbiAgICBjb25zdCBleHBhbmRlZCA9IGV4cGFuZEhvbWVEaXIoZmlsZU5hbWUpO1xuICAgIGF3YWl0IGZzLndyaXRlSnNvbihleHBhbmRlZCwgc3RyaXBUcmFuc2llbnRWYWx1ZXModGhpcy5zZXR0aW5ncyksIHsgc3BhY2VzOiAyIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGdldCBhbGwoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoW10pO1xuICB9XG5cbiAgcHVibGljIG1lcmdlKG90aGVyOiBTZXR0aW5ncyk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4gbmV3IFNldHRpbmdzKGRlZXBNZXJnZSh0aGlzLnNldHRpbmdzLCBvdGhlci5zZXR0aW5ncykpO1xuICB9XG5cbiAgcHVibGljIHN1YlNldHRpbmdzKGtleVByZWZpeDogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gbmV3IFNldHRpbmdzKHRoaXMuZ2V0KGtleVByZWZpeCkgfHwge30sIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBtYWtlUmVhZE9ubHkoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiBuZXcgU2V0dGluZ3ModGhpcy5zZXR0aW5ncywgdHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNsZWFyKCk6IHNldHRpbmdzIGFyZSByZWFkb25seScpO1xuICAgIH1cbiAgICB0aGlzLnNldHRpbmdzID0ge307XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldHRpbmdzKS5sZW5ndGggPT09IDA7XG4gIH1cblxuICBwdWJsaWMgZ2V0KHBhdGg6IHN0cmluZ1tdKTogYW55IHtcbiAgICByZXR1cm4gZGVlcENsb25lKGRlZXBHZXQodGhpcy5zZXR0aW5ncywgcGF0aCkpO1xuICB9XG5cbiAgcHVibGljIHNldChwYXRoOiBzdHJpbmdbXSwgdmFsdWU6IGFueSk6IFNldHRpbmdzIHtcbiAgICBpZiAodGhpcy5yZWFkT25seSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBzZXQgJHtwYXRofTogc2V0dGluZ3Mgb2JqZWN0IGlzIHJlYWRvbmx5YCk7XG4gICAgfVxuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gZGVlcFNldCBjYW4ndCBoYW5kbGUgdGhpcyBjYXNlXG4gICAgICB0aGlzLnNldHRpbmdzID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZXBTZXQodGhpcy5zZXR0aW5ncywgcGF0aCwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyB1bnNldChwYXRoOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc2V0KHBhdGgsIHVuZGVmaW5lZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXhwYW5kSG9tZURpcih4OiBzdHJpbmcpIHtcbiAgaWYgKHguc3RhcnRzV2l0aCgnficpKSB7XG4gICAgcmV0dXJuIGZzX3BhdGguam9pbihvcy5ob21lZGlyKCksIHguc3Vic3RyKDEpKTtcbiAgfVxuICByZXR1cm4geDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYWxsIGNvbnRleHQgdmFsdWUgdGhhdCBhcmUgbm90IHRyYW5zaWVudCBjb250ZXh0IHZhbHVlc1xuICovXG5mdW5jdGlvbiBzdHJpcFRyYW5zaWVudFZhbHVlcyhvYmo6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgY29uc3QgcmV0OiBhbnkgPSB7fTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xuICAgIGlmICghaXNUcmFuc2llbnRWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHJldFtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogUmV0dXJuIHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGlzIGEgdHJhbnNpZW50IGNvbnRleHQgdmFsdWVcbiAqXG4gKiBWYWx1ZXMgdGhhdCBhcmUgb2JqZWN0cyB3aXRoIGEgbWFnaWMga2V5IHNldCB0byBhIHRydXRoeSB2YWx1ZSBhcmUgY29uc2lkZXJlZCB0cmFuc2llbnQuXG4gKi9cbmZ1bmN0aW9uIGlzVHJhbnNpZW50VmFsdWUodmFsdWU6IGFueSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAodmFsdWUgYXMgYW55KVtUUkFOU0lFTlRfQ09OVEVYVF9LRVldO1xufVxuIl19