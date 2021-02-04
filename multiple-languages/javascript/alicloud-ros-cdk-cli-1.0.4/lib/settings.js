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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBK0I7QUFDL0IseUJBQXlCO0FBQ3pCLGdDQUFnQztBQUVoQyx1Q0FBMkM7QUFDM0MsNENBQXdFO0FBSTNELFFBQUEsY0FBYyxHQUFHLFVBQVUsQ0FBQztBQUM1QixRQUFBLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQztBQUNyQyxRQUFBLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFFM0M7O0dBRUc7QUFDVSxRQUFBLHFCQUFxQixHQUFHLGtCQUFrQixDQUFDO0FBRXhELE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQztBQUk5Qjs7R0FFRztBQUNILE1BQWEsYUFBYTtJQWdCeEIsWUFBWSxvQkFBZ0M7UUFmckMsYUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDMUIsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFZixrQkFBYSxHQUFHLElBQUksUUFBUSxDQUFDO1lBQzNDLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsTUFBTSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDO1FBTUssV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CO1lBQzlDLENBQUMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsb0JBQW9CLENBQUM7WUFDekQsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hHLENBQUM7SUFFRCxJQUFZLGFBQWE7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFZLGNBQWM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxJQUFJO1FBQ2YsTUFBTSxVQUFVLEdBQUcsTUFBTSxVQUFVLENBQUMscUJBQWEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxVQUFVLENBQUMsc0JBQWMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxVQUFVLENBQUMsdUJBQWUsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUM1RCxJQUFJLENBQUMsY0FBYyxDQUNwQixDQUFDO1FBRUYsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWE7YUFDL0IsS0FBSyxDQUFDLFVBQVUsQ0FBQzthQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO2FBQ2hDLFlBQVksRUFBRSxDQUFDO1FBRWxCLGVBQUssQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLFdBQVc7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYixDQUFDLHVDQUF1QztRQUV6QyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLHVCQUFlLENBQUMsQ0FBQztRQUVoRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQTdFRCxzQ0E2RUM7QUFFRCxLQUFLLFVBQVUsVUFBVSxDQUFDLFFBQWdCO0lBQ3hDLE1BQU0sR0FBRyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7SUFDM0IsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO1FBQ2QsZUFBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlEO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILE1BQWEsT0FBTztJQUdsQixZQUFZLEdBQUcsSUFBZ0I7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sR0FBRyxDQUFDLEdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBVyxHQUFHO1FBQ1osSUFBSSxHQUFHLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUV6QiwyRUFBMkU7UUFDM0UsS0FBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzFDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxHQUFHLENBQUMsR0FBVztRQUNwQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDM0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUNuQixPQUFPLENBQUMsQ0FBQzthQUNWO1NBQ0Y7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU0sR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQ2hDLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUMzQixJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLFNBQVM7YUFDVjtZQUVELG9EQUFvRDtZQUNwRCxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEIsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0sS0FBSztRQUNWLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztDQUNGO0FBekRELDBCQXlEQztBQUVEOztHQUVHO0FBQ0gsTUFBYSxRQUFRO0lBOEVuQixZQUFvQixXQUF3QixFQUFFLEVBQWtCLFdBQVcsS0FBSztRQUE1RCxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUFrQixhQUFRLEdBQVIsUUFBUSxDQUFRO0lBQUcsQ0FBQztJQTdFcEY7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFlO1FBQ3BELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEQsT0FBTyxJQUFJLFFBQVEsQ0FBQztZQUNsQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTztZQUNQLElBQUk7WUFDSixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLGFBQWEsRUFBRTtnQkFDYixVQUFVLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtnQkFDcEMsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7YUFDakM7WUFDRCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFvQjtRQUM1QyxJQUFJLEdBQUcsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQzlCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU8sTUFBTSxDQUFDLDhCQUE4QixDQUFDLElBQWU7UUFDM0QsTUFBTSxPQUFPLEdBQVEsRUFBRSxDQUFDO1FBRXhCLEtBQUssTUFBTSxVQUFVLElBQUssSUFBWSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUU7WUFDcEQsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdEIsZUFBSyxDQUFDLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekQsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNoQyxNQUFNLElBQUksS0FBSyxDQUNiLHNFQUFzRSxLQUFLLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUMvRixDQUFDO2lCQUNIO2dCQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0wsaUJBQU8sQ0FBQyx1REFBdUQsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUM5RTtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxJQUFlO1FBQ3hELE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQztRQUV2QixLQUFLLE1BQU0sVUFBVSxJQUFLLElBQVksQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFO1lBQ2pELE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLGVBQUssQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ1IsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ2hCLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLGlCQUFPLENBQUMsb0RBQW9ELEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDM0U7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUlNLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBZ0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxRQUFRLCtCQUErQixDQUFDLENBQUM7U0FDeEU7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVuQixNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0M7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQWdCO1FBQ2hDLE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQWU7UUFDMUIsT0FBTyxJQUFJLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLFdBQVcsQ0FBQyxTQUFtQjtRQUNwQyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxZQUFZO1FBQ2pCLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxHQUFHLENBQUMsSUFBYztRQUN2QixPQUFPLG1CQUFTLENBQUMsaUJBQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLEdBQUcsQ0FBQyxJQUFjLEVBQUUsS0FBVTtRQUNuQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLElBQUksK0JBQStCLENBQUMsQ0FBQztTQUNuRTtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckIsaUNBQWlDO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxpQkFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQWM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBbkpELDRCQW1KQztBQUVELFNBQVMsYUFBYSxDQUFDLENBQVM7SUFDOUIsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLG9CQUFvQixDQUFDLEdBQTJCO0lBQ3ZELE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztJQUNwQixLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNsQjtLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMsZ0JBQWdCLENBQUMsS0FBVTtJQUNsQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFLLEtBQWEsQ0FBQyw2QkFBcUIsQ0FBQyxDQUFDO0FBQzlGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcy1leHRyYSc7XHJcbmltcG9ydCAqIGFzIG9zIGZyb20gJ29zJztcclxuaW1wb3J0ICogYXMgZnNfcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi9jZGstdG9vbGtpdCc7XHJcbmltcG9ydCB7IGRlYnVnLCB3YXJuaW5nIH0gZnJvbSAnLi9sb2dnaW5nJztcclxuaW1wb3J0IHsgZGVlcE1lcmdlLCBkZWVwR2V0LCBkZWVwQ2xvbmUsIGRlZXBTZXQgfSBmcm9tICcuL3V0aWwvb2JqZWN0cyc7XHJcblxyXG5leHBvcnQgdHlwZSBTZXR0aW5nc01hcCA9IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcblxyXG5leHBvcnQgY29uc3QgUFJPSkVDVF9DT05GSUcgPSAnY2RrLmpzb24nO1xyXG5leHBvcnQgY29uc3QgUFJPSkVDVF9DT05URVhUID0gJ2Nkay5jb250ZXh0Lmpzb24nO1xyXG5leHBvcnQgY29uc3QgVVNFUl9ERUZBVUxUUyA9ICd+Ly5jZGsuanNvbic7XHJcblxyXG4vKipcclxuICogSWYgYSBjb250ZXh0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHRoaXMga2V5IHNldCB0byBhIHRydXRoeSB2YWx1ZSwgaXQgd29uJ3QgYmUgc2F2ZWQgdG8gY2RrLmNvbnRleHQuanNvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRSQU5TSUVOVF9DT05URVhUX0tFWSA9ICckZG9udFNhdmVDb250ZXh0JztcclxuXHJcbmNvbnN0IENPTlRFWFRfS0VZID0gJ2NvbnRleHQnO1xyXG5cclxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0geyByZWFkb25seSBbbmFtZTogc3RyaW5nXTogdW5rbm93biB9O1xyXG5cclxuLyoqXHJcbiAqIEFsbCBzb3VyY2VzIG9mIHNldHRpbmdzIGNvbWJpbmVkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcbiAgcHVibGljIHNldHRpbmdzID0gbmV3IFNldHRpbmdzKCk7XHJcbiAgcHVibGljIGNvbnRleHQgPSBuZXcgQ29udGV4dCgpO1xyXG5cclxuICBwdWJsaWMgcmVhZG9ubHkgZGVmYXVsdENvbmZpZyA9IG5ldyBTZXR0aW5ncyh7XHJcbiAgICB2ZXJzaW9uUmVwb3J0aW5nOiB0cnVlLFxyXG4gICAgcGF0aE1ldGFkYXRhOiB0cnVlLFxyXG4gICAgb3V0cHV0OiAnY2RrLm91dCcsXHJcbiAgfSk7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZExpbmVBcmd1bWVudHM6IFNldHRpbmdzO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZExpbmVDb250ZXh0OiBTZXR0aW5ncztcclxuICBwcml2YXRlIF9wcm9qZWN0Q29uZmlnPzogU2V0dGluZ3M7XHJcbiAgcHJpdmF0ZSBfcHJvamVjdENvbnRleHQ/OiBTZXR0aW5ncztcclxuICBwcml2YXRlIGxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb21tYW5kTGluZUFyZ3VtZW50cz86IEFyZ3VtZW50cykge1xyXG4gICAgdGhpcy5jb21tYW5kTGluZUFyZ3VtZW50cyA9IGNvbW1hbmRMaW5lQXJndW1lbnRzXHJcbiAgICAgID8gU2V0dGluZ3MuZnJvbUNvbW1hbmRMaW5lQXJndW1lbnRzKGNvbW1hbmRMaW5lQXJndW1lbnRzKVxyXG4gICAgICA6IG5ldyBTZXR0aW5ncygpO1xyXG4gICAgdGhpcy5jb21tYW5kTGluZUNvbnRleHQgPSB0aGlzLmNvbW1hbmRMaW5lQXJndW1lbnRzLnN1YlNldHRpbmdzKFtDT05URVhUX0tFWV0pLm1ha2VSZWFkT25seSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgcHJvamVjdENvbmZpZygpIHtcclxuICAgIGlmICghdGhpcy5fcHJvamVjdENvbmZpZykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJyNsb2FkIGhhcyBub3QgYmVlbiBjYWxsZWQgeWV0IScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3RDb25maWc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBwcm9qZWN0Q29udGV4dCgpIHtcclxuICAgIGlmICghdGhpcy5fcHJvamVjdENvbnRleHQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCcjbG9hZCBoYXMgbm90IGJlZW4gY2FsbGVkIHlldCEnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0Q29udGV4dDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgYWxsIGNvbmZpZ1xyXG4gICAqL1xyXG4gIHB1YmxpYyBhc3luYyBsb2FkKCk6IFByb21pc2U8dGhpcz4ge1xyXG4gICAgY29uc3QgdXNlckNvbmZpZyA9IGF3YWl0IGxvYWRBbmRMb2coVVNFUl9ERUZBVUxUUyk7XHJcbiAgICB0aGlzLl9wcm9qZWN0Q29uZmlnID0gYXdhaXQgbG9hZEFuZExvZyhQUk9KRUNUX0NPTkZJRyk7XHJcbiAgICB0aGlzLl9wcm9qZWN0Q29udGV4dCA9IGF3YWl0IGxvYWRBbmRMb2coUFJPSkVDVF9DT05URVhUKTtcclxuXHJcbiAgICB0aGlzLmNvbnRleHQgPSBuZXcgQ29udGV4dChcclxuICAgICAgdGhpcy5jb21tYW5kTGluZUNvbnRleHQsXHJcbiAgICAgIHRoaXMucHJvamVjdENvbmZpZy5zdWJTZXR0aW5ncyhbQ09OVEVYVF9LRVldKS5tYWtlUmVhZE9ubHkoKSxcclxuICAgICAgdGhpcy5wcm9qZWN0Q29udGV4dCxcclxuICAgICk7XHJcblxyXG4gICAgLy8gQnVpbGQgc2V0dGluZ3MgZnJvbSB3aGF0J3MgbGVmdFxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuZGVmYXVsdENvbmZpZ1xyXG4gICAgICAubWVyZ2UodXNlckNvbmZpZylcclxuICAgICAgLm1lcmdlKHRoaXMucHJvamVjdENvbmZpZylcclxuICAgICAgLm1lcmdlKHRoaXMuY29tbWFuZExpbmVBcmd1bWVudHMpXHJcbiAgICAgIC5tYWtlUmVhZE9ubHkoKTtcclxuXHJcbiAgICBkZWJ1ZygnbWVyZ2VkIHNldHRpbmdzOicsIHRoaXMuc2V0dGluZ3MuYWxsKTtcclxuXHJcbiAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTYXZlIHRoZSBwcm9qZWN0IGNvbnRleHRcclxuICAgKi9cclxuICBwdWJsaWMgYXN5bmMgc2F2ZUNvbnRleHQoKTogUHJvbWlzZTx0aGlzPiB7XHJcbiAgICBpZiAoIXRoaXMubG9hZGVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSAvLyBBdm9pZCBvdmVyd3JpdGluZyBmaWxlcyB3aXRoIG5vdGhpbmdcclxuXHJcbiAgICBhd2FpdCB0aGlzLnByb2plY3RDb250ZXh0LnNhdmUoUFJPSkVDVF9DT05URVhUKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRBbmRMb2coZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8U2V0dGluZ3M+IHtcclxuICBjb25zdCByZXQgPSBuZXcgU2V0dGluZ3MoKTtcclxuICBhd2FpdCByZXQubG9hZChmaWxlTmFtZSk7XHJcbiAgaWYgKCFyZXQuZW1wdHkpIHtcclxuICAgIGRlYnVnKGZpbGVOYW1lICsgJzonLCBKU09OLnN0cmluZ2lmeShyZXQuYWxsLCB1bmRlZmluZWQsIDIpKTtcclxuICB9XHJcbiAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgc3VwcG9ydHMgb3ZlcmxheWluZyBwcm9wZXJ0eSBiYWdzXHJcbiAqXHJcbiAqIFJlYWRzIGNvbWUgZnJvbSB0aGUgZmlyc3QgcHJvcGVydHkgYmFnIHRoYXQgY2FuIGhhcyB0aGUgZ2l2ZW4ga2V5LFxyXG4gKiB3cml0ZXMgZ28gdG8gdGhlIGZpcnN0IHByb3BlcnR5IGJhZyB0aGF0IGlzIG5vdCByZWFkb25seS4gQSB3cml0ZVxyXG4gKiB3aWxsIHJlbW92ZSB0aGUgdmFsdWUgZnJvbSBhbGwgcHJvcGVydHkgYmFncyBhZnRlciB0aGUgZmlyc3RcclxuICogd3JpdGFibGUgb25lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbnRleHQge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgYmFnczogU2V0dGluZ3NbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYmFnczogU2V0dGluZ3NbXSkge1xyXG4gICAgdGhpcy5iYWdzID0gYmFncy5sZW5ndGggPiAwID8gYmFncyA6IFtuZXcgU2V0dGluZ3MoKV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGtleXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYWxsKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXMoa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmtleXMuaW5kZXhPZihrZXkpID4gLTE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGFsbCgpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcclxuICAgIGxldCByZXQgPSBuZXcgU2V0dGluZ3MoKTtcclxuXHJcbiAgICAvLyBJbiByZXZlcnNlIG9yZGVyIHNvIGtleXMgdG8gdGhlIGxlZnQgb3ZlcndyaXRlIGtleXMgdG8gdGhlIHJpZ2h0IG9mIHRoZW1cclxuICAgIGZvciAoY29uc3QgYmFnIG9mIFsuLi50aGlzLmJhZ3NdLnJldmVyc2UoKSkge1xyXG4gICAgICByZXQgPSByZXQubWVyZ2UoYmFnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0LmFsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgZm9yIChjb25zdCBiYWcgb2YgdGhpcy5iYWdzKSB7XHJcbiAgICAgIGNvbnN0IHYgPSBiYWcuZ2V0KFtrZXldKTtcclxuICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgZm9yIChjb25zdCBiYWcgb2YgdGhpcy5iYWdzKSB7XHJcbiAgICAgIGlmIChiYWcucmVhZE9ubHkpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQWxsIGJhZ3MgcGFzdCB0aGUgZmlyc3Qgb25lIGhhdmUgdGhlIHZhbHVlIGVyYXNlZFxyXG4gICAgICBiYWcuc2V0KFtrZXldLCB2YWx1ZSk7XHJcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVuc2V0KGtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldChrZXksIHVuZGVmaW5lZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLmtleXMpIHtcclxuICAgICAgdGhpcy51bnNldChrZXkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgc2luZ2xlIGJhZyBvZiBzZXR0aW5nc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzIHtcclxuICAvKipcclxuICAgKiBQYXJzZSBTZXR0aW5ncyBvdXQgb2YgQ0xJIGFyZ3VtZW50cy5cclxuICAgKiBAcGFyYW0gYXJndiB0aGUgcmVjZWl2ZWQgQ0xJIGFyZ3VtZW50cy5cclxuICAgKiBAcmV0dXJucyBhIG5ldyBTZXR0aW5ncyBvYmplY3QuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tQ29tbWFuZExpbmVBcmd1bWVudHMoYXJndjogQXJndW1lbnRzKTogU2V0dGluZ3Mge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMucGFyc2VTdHJpbmdDb250ZXh0TGlzdFRvT2JqZWN0KGFyZ3YpO1xyXG4gICAgY29uc3QgdGFncyA9IHRoaXMucGFyc2VTdHJpbmdUYWdzTGlzdFRvT2JqZWN0KGFyZ3YpO1xyXG5cclxuICAgIHJldHVybiBuZXcgU2V0dGluZ3Moe1xyXG4gICAgICBhcHA6IGFyZ3YuYXBwLFxyXG4gICAgICBicm93c2VyOiBhcmd2LmJyb3dzZXIsXHJcbiAgICAgIGNvbnRleHQsXHJcbiAgICAgIHRhZ3MsXHJcbiAgICAgIGxhbmd1YWdlOiBhcmd2Lmxhbmd1YWdlLFxyXG4gICAgICBwYXRoTWV0YWRhdGE6IGFyZ3YucGF0aE1ldGFkYXRhLFxyXG4gICAgICBhc3NldE1ldGFkYXRhOiBhcmd2LmFzc2V0TWV0YWRhdGEsXHJcbiAgICAgIHByb2ZpbGU6IGFyZ3YucHJvZmlsZSxcclxuICAgICAgcGx1Z2luOiBhcmd2LnBsdWdpbixcclxuICAgICAgcmVxdWlyZUFwcHJvdmFsOiBhcmd2LnJlcXVpcmVBcHByb3ZhbCxcclxuICAgICAgdG9vbGtpdFN0YWNrTmFtZTogYXJndi50b29sa2l0U3RhY2tOYW1lLFxyXG4gICAgICB0b29sa2l0QnVja2V0OiB7XHJcbiAgICAgICAgYnVja2V0TmFtZTogYXJndi5ib290c3RyYXBCdWNrZXROYW1lLFxyXG4gICAgICAgIGttc0tleUlkOiBhcmd2LmJvb3RzdHJhcEttc0tleUlkLFxyXG4gICAgICB9LFxyXG4gICAgICB2ZXJzaW9uUmVwb3J0aW5nOiBhcmd2LnZlcnNpb25SZXBvcnRpbmcsXHJcbiAgICAgIHN0YWdpbmc6IGFyZ3Yuc3RhZ2luZyxcclxuICAgICAgb3V0cHV0OiBhcmd2Lm91dHB1dCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBtZXJnZUFsbCguLi5zZXR0aW5nczogU2V0dGluZ3NbXSk6IFNldHRpbmdzIHtcclxuICAgIGxldCByZXQgPSBuZXcgU2V0dGluZ3MoKTtcclxuICAgIGZvciAoY29uc3Qgc2V0dGluZyBvZiBzZXR0aW5ncykge1xyXG4gICAgICByZXQgPSByZXQubWVyZ2Uoc2V0dGluZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VTdHJpbmdDb250ZXh0TGlzdFRvT2JqZWN0KGFyZ3Y6IEFyZ3VtZW50cyk6IGFueSB7XHJcbiAgICBjb25zdCBjb250ZXh0OiBhbnkgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGFzc2lnbm1lbnQgb2YgKGFyZ3YgYXMgYW55KS5jb250ZXh0IHx8IFtdKSB7XHJcbiAgICAgIGNvbnN0IHBhcnRzID0gYXNzaWdubWVudC5zcGxpdCgvPSguKikvLCAyKTtcclxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIGRlYnVnKCdDTEkgYXJndW1lbnQgY29udGV4dDogJXM9JXMnLCBwYXJ0c1swXSwgcGFydHNbMV0pO1xyXG4gICAgICAgIGlmIChwYXJ0c1swXS5tYXRjaCgvXmFsaXl1bjouKy8pKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgIGBVc2VyLXByb3ZpZGVkIGNvbnRleHQgY2Fubm90IHVzZSBrZXlzIHByZWZpeGVkIHdpdGggJ2FsaXl1bjonLCBidXQgJHtwYXJ0c1swXX0gd2FzIHByb3ZpZGVkLmAsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZXh0W3BhcnRzWzBdXSA9IHBhcnRzWzFdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdhcm5pbmcoJ0NvbnRleHQgYXJndW1lbnQgaXMgbm90IGFuIGFzc2lnbm1lbnQgKGtleT12YWx1ZSk6ICVzJywgYXNzaWdubWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VTdHJpbmdUYWdzTGlzdFRvT2JqZWN0KGFyZ3Y6IEFyZ3VtZW50cyk6IFRhZ1tdIHtcclxuICAgIGNvbnN0IHRhZ3M6IFRhZ1tdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBhc3NpZ25tZW50IG9mIChhcmd2IGFzIGFueSkudGFncyB8fCBbXSkge1xyXG4gICAgICBjb25zdCBwYXJ0cyA9IGFzc2lnbm1lbnQuc3BsaXQoJz0nLCAyKTtcclxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIGRlYnVnKCdDTEkgYXJndW1lbnQgdGFnczogJXM9JXMnLCBwYXJ0c1swXSwgcGFydHNbMV0pO1xyXG4gICAgICAgIHRhZ3MucHVzaCh7XHJcbiAgICAgICAgICBLZXk6IHBhcnRzWzBdLFxyXG4gICAgICAgICAgVmFsdWU6IHBhcnRzWzFdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdhcm5pbmcoJ1RhZ3MgYXJndW1lbnQgaXMgbm90IGFuIGFzc2lnbm1lbnQgKGtleT12YWx1ZSk6ICVzJywgYXNzaWdubWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YWdzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NNYXAgPSB7fSwgcHVibGljIHJlYWRvbmx5IHJlYWRPbmx5ID0gZmFsc2UpIHt9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBsb2FkKGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHRoaXM+IHtcclxuICAgIGlmICh0aGlzLnJlYWRPbmx5KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgbG9hZCAke2ZpbGVOYW1lfTogc2V0dGluZ3Mgb2JqZWN0IGlzIHJlYWRvbmx5YCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldHRpbmdzID0ge307XHJcblxyXG4gICAgY29uc3QgZXhwYW5kZWQgPSBleHBhbmRIb21lRGlyKGZpbGVOYW1lKTtcclxuICAgIGlmIChhd2FpdCBmcy5wYXRoRXhpc3RzKGV4cGFuZGVkKSkge1xyXG4gICAgICB0aGlzLnNldHRpbmdzID0gYXdhaXQgZnMucmVhZEpzb24oZXhwYW5kZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHNhdmUoZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dGhpcz4ge1xyXG4gICAgY29uc3QgZXhwYW5kZWQgPSBleHBhbmRIb21lRGlyKGZpbGVOYW1lKTtcclxuICAgIGF3YWl0IGZzLndyaXRlSnNvbihleHBhbmRlZCwgc3RyaXBUcmFuc2llbnRWYWx1ZXModGhpcy5zZXR0aW5ncyksIHsgc3BhY2VzOiAyIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGFsbCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KFtdKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtZXJnZShvdGhlcjogU2V0dGluZ3MpOiBTZXR0aW5ncyB7XHJcbiAgICByZXR1cm4gbmV3IFNldHRpbmdzKGRlZXBNZXJnZSh0aGlzLnNldHRpbmdzLCBvdGhlci5zZXR0aW5ncykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1YlNldHRpbmdzKGtleVByZWZpeDogc3RyaW5nW10pIHtcclxuICAgIHJldHVybiBuZXcgU2V0dGluZ3ModGhpcy5nZXQoa2V5UHJlZml4KSB8fCB7fSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1ha2VSZWFkT25seSgpOiBTZXR0aW5ncyB7XHJcbiAgICByZXR1cm4gbmV3IFNldHRpbmdzKHRoaXMuc2V0dGluZ3MsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgaWYgKHRoaXMucmVhZE9ubHkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY2xlYXIoKTogc2V0dGluZ3MgYXJlIHJlYWRvbmx5Jyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldHRpbmdzID0ge307XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc2V0dGluZ3MpLmxlbmd0aCA9PT0gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQocGF0aDogc3RyaW5nW10pOiBhbnkge1xyXG4gICAgcmV0dXJuIGRlZXBDbG9uZShkZWVwR2V0KHRoaXMuc2V0dGluZ3MsIHBhdGgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQocGF0aDogc3RyaW5nW10sIHZhbHVlOiBhbnkpOiBTZXR0aW5ncyB7XHJcbiAgICBpZiAodGhpcy5yZWFkT25seSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHNldCAke3BhdGh9OiBzZXR0aW5ncyBvYmplY3QgaXMgcmVhZG9ubHlgKTtcclxuICAgIH1cclxuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAvLyBkZWVwU2V0IGNhbid0IGhhbmRsZSB0aGlzIGNhc2VcclxuICAgICAgdGhpcy5zZXR0aW5ncyA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVlcFNldCh0aGlzLnNldHRpbmdzLCBwYXRoLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1bnNldChwYXRoOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5zZXQocGF0aCwgdW5kZWZpbmVkKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4cGFuZEhvbWVEaXIoeDogc3RyaW5nKSB7XHJcbiAgaWYgKHguc3RhcnRzV2l0aCgnficpKSB7XHJcbiAgICByZXR1cm4gZnNfcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgeC5zdWJzdHIoMSkpO1xyXG4gIH1cclxuICByZXR1cm4geDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhbGwgY29udGV4dCB2YWx1ZSB0aGF0IGFyZSBub3QgdHJhbnNpZW50IGNvbnRleHQgdmFsdWVzXHJcbiAqL1xyXG5mdW5jdGlvbiBzdHJpcFRyYW5zaWVudFZhbHVlcyhvYmo6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcclxuICBjb25zdCByZXQ6IGFueSA9IHt9O1xyXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcclxuICAgIGlmICghaXNUcmFuc2llbnRWYWx1ZSh2YWx1ZSkpIHtcclxuICAgICAgcmV0W2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybiB3aGV0aGVyIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIHRyYW5zaWVudCBjb250ZXh0IHZhbHVlXHJcbiAqXHJcbiAqIFZhbHVlcyB0aGF0IGFyZSBvYmplY3RzIHdpdGggYSBtYWdpYyBrZXkgc2V0IHRvIGEgdHJ1dGh5IHZhbHVlIGFyZSBjb25zaWRlcmVkIHRyYW5zaWVudC5cclxuICovXHJcbmZ1bmN0aW9uIGlzVHJhbnNpZW50VmFsdWUodmFsdWU6IGFueSkge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsICYmICh2YWx1ZSBhcyBhbnkpW1RSQU5TSUVOVF9DT05URVhUX0tFWV07XHJcbn1cclxuIl19