"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manifest = exports.VERSION_MISMATCH = void 0;
const fs = require("fs");
const jsonschema = require("jsonschema");
const semver = require("semver");
const assembly = require("./cloud-assembly");
// this prefix is used by the CLI to identify this specific error.
// in which case we want to instruct the user to upgrade his CLI.
// see exec.ts#createAssembly
exports.VERSION_MISMATCH = "Cloud assembly schema version mismatch";
// tslint:disable: no-var-requires
// eslint-disable-next-line @typescript-eslint/no-require-imports
const ASSEMBLY_SCHEMA = require("../schema/cloud-assembly.schema.json");
/**
 * Version is shared for both manifests
 */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const SCHEMA_VERSION = require("../schema/cloud-assembly.version.json").version;
// tslint:enable: no-var-requires
/**
 * Protocol utility class.
 */
class Manifest {
    /**
     * Validates and saves the cloud assembly manifest to file.
     *
     * @param manifest - manifest.
     * @param filePath - output file path.
     */
    static saveAssemblyManifest(manifest, filePath) {
        Manifest.saveManifest(manifest, filePath, ASSEMBLY_SCHEMA, Manifest.patchStackTagsOnWrite);
    }
    /**
     * Load and validates the cloud assembly manifest from file.
     *
     * @param filePath - path to the manifest file.
     */
    static loadAssemblyManifest(filePath) {
        return Manifest.loadManifest(filePath, ASSEMBLY_SCHEMA, Manifest.patchStackTagsOnRead);
    }
    /**
     * Fetch the current schema version number.
     */
    static version() {
        return SCHEMA_VERSION;
    }
    /**
     * Deprecated
     * @deprecated use `saveAssemblyManifest()`
     */
    static save(manifest, filePath) {
        return this.saveAssemblyManifest(manifest, filePath);
    }
    /**
     * Deprecated
     * @deprecated use `loadAssemblyManifest()`
     */
    static load(filePath) {
        return this.loadAssemblyManifest(filePath);
    }
    static validate(manifest, schema) {
        function parseVersion(version) {
            const ver = semver.valid(version);
            if (!ver) {
                throw new Error(`Invalid semver string: "${version}"`);
            }
            return ver;
        }
        const maxSupported = parseVersion(Manifest.version());
        const actual = parseVersion(manifest.version);
        // first validate the version should be accepted.
        if (semver.gt(actual, maxSupported)) {
            // we use a well known error prefix so that the CLI can identify this specific error
            // and print some more context to the user.
            throw new Error(`${exports.VERSION_MISMATCH}: Maximum schema version supported is ${maxSupported}, but found ${actual}`);
        }
        // now validate the format is good.
        const validator = new jsonschema.Validator();
        const result = validator.validate(manifest, schema, {
            // does exist but is not in the TypeScript definitions
            nestedErrors: true,
            allowUnknownAttributes: false,
        });
        if (!result.valid) {
            throw new Error(`Invalid assembly manifest:\n${result}`);
        }
    }
    static saveManifest(manifest, filePath, schema, preprocess) {
        let withVersion = { ...manifest, version: Manifest.version() };
        Manifest.validate(withVersion, schema);
        if (preprocess) {
            withVersion = preprocess(withVersion);
        }
        fs.writeFileSync(filePath, JSON.stringify(withVersion, undefined, 2));
    }
    static loadManifest(filePath, schema, preprocess) {
        let obj = JSON.parse(fs.readFileSync(filePath, { encoding: "utf-8" }));
        if (preprocess) {
            obj = preprocess(obj);
        }
        Manifest.validate(obj, schema);
        return obj;
    }
    /**
     * This requires some explaining...
     *
     * We previously used `{ Key, Value }` for the object that represents a stack tag. (Notice the casing)
     *
     * When that object moved to this package, it had to be JSII compliant, which meant the property
     * names must be `camelCased`, and not `PascalCased`. This meant it no longer matches the structure in the `manifest.json` file.
     * In order to support current manifest files, we have to translate the `PascalCased` representation to the new `camelCased` one.
     *
     * Note that the serialization itself still writes `PascalCased` because it relates to how ROS expects it.
     *
     * Ideally, we would start writing the `camelCased` and translate to how ROS expects it when needed. But this requires nasty
     * backwards-compatibility code and it just doesn't seem to be worth the effort.
     */
    static patchStackTagsOnRead(manifest) {
        return Manifest.replaceStackTags(manifest, tags => tags.map((diskTag) => ({
            key: diskTag.Key,
            value: diskTag.Value,
        })));
    }
    /**
     * See explanation on `patchStackTagsOnRead`
     *
     * Translate stack tags metadata if it has the "right" casing.
     */
    static patchStackTagsOnWrite(manifest) {
        return Manifest.replaceStackTags(manifest, tags => tags.map(memTag => 
        // Might already be uppercased (because stack synthesis generates it in final form yet)
        ('Key' in memTag ? memTag : { Key: memTag.key, Value: memTag.value })));
    }
    /**
     * Recursively replace stack tags in the stack metadata
     */
    static replaceStackTags(manifest, fn) {
        // Need to add in the `noUndefined`s because otherwise jest snapshot tests are going to freak out
        // about the keys with values that are `undefined` (even though they would never be JSON.stringified)
        return noUndefined({
            ...manifest,
            artifacts: mapValues(manifest.artifacts, artifact => {
                if (artifact.type !== assembly.ArtifactType.ALIYUN_ROS_STACK) {
                    return artifact;
                }
                return noUndefined({
                    ...artifact,
                    metadata: mapValues(artifact.metadata, metadataEntries => metadataEntries.map(metadataEntry => {
                        if (metadataEntry.type !== assembly.ArtifactMetadataEntryType.STACK_TAGS || !metadataEntry.data) {
                            return metadataEntry;
                        }
                        return {
                            ...metadataEntry,
                            data: fn(metadataEntry.data),
                        };
                    })),
                });
            }),
        });
    }
    constructor() { }
}
exports.Manifest = Manifest;
function mapValues(xs, fn) {
    if (!xs) {
        return undefined;
    }
    const ret = {};
    for (const [k, v] of Object.entries(xs)) {
        ret[k] = fn(v);
    }
    return ret;
}
function noUndefined(xs) {
    const ret = {};
    for (const [k, v] of Object.entries(xs)) {
        if (v !== undefined) {
            ret[k] = v;
        }
    }
    return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuaWZlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYW5pZmVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5QkFBeUI7QUFDekIseUNBQXlDO0FBQ3pDLGlDQUFpQztBQUNqQyw2Q0FBNkM7QUFFN0Msa0VBQWtFO0FBQ2xFLGlFQUFpRTtBQUNqRSw2QkFBNkI7QUFDaEIsUUFBQSxnQkFBZ0IsR0FDekIsd0NBQXdDLENBQUM7QUFFN0Msa0NBQWtDO0FBRWxDLGlFQUFpRTtBQUNqRSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUV4RTs7R0FFRztBQUNILGlFQUFpRTtBQUNqRSxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFaEYsaUNBQWlDO0FBRWpDOztHQUVHO0FBQ0gsTUFBYSxRQUFRO0lBQ25COzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLG9CQUFvQixDQUM5QixRQUFtQyxFQUNuQyxRQUFnQjtRQUVsQixRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLG9CQUFvQixDQUM5QixRQUFnQjtRQUVsQixPQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFtQyxFQUFFLFFBQWdCO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFD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QUFFLE9BQU8sYUFBYSxDQUFDO3lCQUFFO3dCQUMxSCxPQUFPOzRCQUNMLEdBQUcsYUFBYTs0QkFDaEIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBdUMsQ0FBQzt5QkFDaEUsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQztpQkFDeUIsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBdUIsQ0FBQztDQUN6QjtBQXJLRCw0QkFxS0M7QUFJRCxTQUFTLFNBQVMsQ0FBTyxFQUFpQyxFQUFFLEVBQWU7SUFDekUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUFFLE9BQU8sU0FBUyxDQUFDO0tBQUU7SUFDOUIsTUFBTSxHQUFHLEdBQWtDLEVBQUUsQ0FBQztJQUM5QyxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN2QyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsU0FBUyxXQUFXLENBQW1CLEVBQUs7SUFDMUMsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO0lBQ3BCLEtBQUssTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNuQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1o7S0FDRjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0ICogYXMganNvbnNjaGVtYSBmcm9tIFwianNvbnNjaGVtYVwiO1xuaW1wb3J0ICogYXMgc2VtdmVyIGZyb20gXCJzZW12ZXJcIjtcbmltcG9ydCAqIGFzIGFzc2VtYmx5IGZyb20gXCIuL2Nsb3VkLWFzc2VtYmx5XCI7XG5cbi8vIHRoaXMgcHJlZml4IGlzIHVzZWQgYnkgdGhlIENMSSB0byBpZGVudGlmeSB0aGlzIHNwZWNpZmljIGVycm9yLlxuLy8gaW4gd2hpY2ggY2FzZSB3ZSB3YW50IHRvIGluc3RydWN0IHRoZSB1c2VyIHRvIHVwZ3JhZGUgaGlzIENMSS5cbi8vIHNlZSBleGVjLnRzI2NyZWF0ZUFzc2VtYmx5XG5leHBvcnQgY29uc3QgVkVSU0lPTl9NSVNNQVRDSDogc3RyaW5nID1cbiAgICBcIkNsb3VkIGFzc2VtYmx5IHNjaGVtYSB2ZXJzaW9uIG1pc21hdGNoXCI7XG5cbi8vIHRzbGludDpkaXNhYmxlOiBuby12YXItcmVxdWlyZXNcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbmNvbnN0IEFTU0VNQkxZX1NDSEVNQSA9IHJlcXVpcmUoXCIuLi9zY2hlbWEvY2xvdWQtYXNzZW1ibHkuc2NoZW1hLmpzb25cIik7XG5cbi8qKlxuICogVmVyc2lvbiBpcyBzaGFyZWQgZm9yIGJvdGggbWFuaWZlc3RzXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG5jb25zdCBTQ0hFTUFfVkVSU0lPTiA9IHJlcXVpcmUoXCIuLi9zY2hlbWEvY2xvdWQtYXNzZW1ibHkudmVyc2lvbi5qc29uXCIpLnZlcnNpb247XG5cbi8vIHRzbGludDplbmFibGU6IG5vLXZhci1yZXF1aXJlc1xuXG4vKipcbiAqIFByb3RvY29sIHV0aWxpdHkgY2xhc3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYW5pZmVzdCB7XG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYW5kIHNhdmVzIHRoZSBjbG91ZCBhc3NlbWJseSBtYW5pZmVzdCB0byBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0gbWFuaWZlc3QgLSBtYW5pZmVzdC5cbiAgICogQHBhcmFtIGZpbGVQYXRoIC0gb3V0cHV0IGZpbGUgcGF0aC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2F2ZUFzc2VtYmx5TWFuaWZlc3QoXG4gICAgICBtYW5pZmVzdDogYXNzZW1ibHkuQXNzZW1ibHlNYW5pZmVzdCxcbiAgICAgIGZpbGVQYXRoOiBzdHJpbmdcbiAgKSB7XG4gICAgTWFuaWZlc3Quc2F2ZU1hbmlmZXN0KG1hbmlmZXN0LCBmaWxlUGF0aCwgQVNTRU1CTFlfU0NIRU1BLCBNYW5pZmVzdC5wYXRjaFN0YWNrVGFnc09uV3JpdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgYW5kIHZhbGlkYXRlcyB0aGUgY2xvdWQgYXNzZW1ibHkgbWFuaWZlc3QgZnJvbSBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVBhdGggLSBwYXRoIHRvIHRoZSBtYW5pZmVzdCBmaWxlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBsb2FkQXNzZW1ibHlNYW5pZmVzdChcbiAgICAgIGZpbGVQYXRoOiBzdHJpbmdcbiAgKTogYXNzZW1ibHkuQXNzZW1ibHlNYW5pZmVzdCB7XG4gICAgcmV0dXJuIE1hbmlmZXN0LmxvYWRNYW5pZmVzdChmaWxlUGF0aCwgQVNTRU1CTFlfU0NIRU1BLCBNYW5pZmVzdC5wYXRjaFN0YWNrVGFnc09uUmVhZCk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggdGhlIGN1cnJlbnQgc2NoZW1hIHZlcnNpb24gbnVtYmVyLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJzaW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNDSEVNQV9WRVJTSU9OO1xuICB9XG5cbiAgLyoqXG4gICAqIERlcHJlY2F0ZWRcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBzYXZlQXNzZW1ibHlNYW5pZmVzdCgpYFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzYXZlKG1hbmlmZXN0OiBhc3NlbWJseS5Bc3NlbWJseU1hbmlmZXN0LCBmaWxlUGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZUFzc2VtYmx5TWFuaWZlc3QobWFuaWZlc3QsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXByZWNhdGVkXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgbG9hZEFzc2VtYmx5TWFuaWZlc3QoKWBcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbG9hZChmaWxlUGF0aDogc3RyaW5nKTogYXNzZW1ibHkuQXNzZW1ibHlNYW5pZmVzdCB7XG4gICAgcmV0dXJuIHRoaXMubG9hZEFzc2VtYmx5TWFuaWZlc3QoZmlsZVBhdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgdmFsaWRhdGUoXG4gICAgICBtYW5pZmVzdDogeyB2ZXJzaW9uOiBzdHJpbmcgfSxcbiAgICAgIHNjaGVtYToganNvbnNjaGVtYS5TY2hlbWFcbiAgKSB7XG4gICAgZnVuY3Rpb24gcGFyc2VWZXJzaW9uKHZlcnNpb246IHN0cmluZykge1xuICAgICAgY29uc3QgdmVyID0gc2VtdmVyLnZhbGlkKHZlcnNpb24pO1xuICAgICAgaWYgKCF2ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNlbXZlciBzdHJpbmc6IFwiJHt2ZXJzaW9ufVwiYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmVyO1xuICAgIH1cblxuICAgIGNvbnN0IG1heFN1cHBvcnRlZCA9IHBhcnNlVmVyc2lvbihNYW5pZmVzdC52ZXJzaW9uKCkpO1xuICAgIGNvbnN0IGFjdHVhbCA9IHBhcnNlVmVyc2lvbihtYW5pZmVzdC52ZXJzaW9uKTtcblxuICAgIC8vIGZpcnN0IHZhbGlkYXRlIHRoZSB2ZXJzaW9uIHNob3VsZCBiZSBhY2NlcHRlZC5cbiAgICBpZiAoc2VtdmVyLmd0KGFjdHVhbCwgbWF4U3VwcG9ydGVkKSkge1xuICAgICAgLy8gd2UgdXNlIGEgd2VsbCBrbm93biBlcnJvciBwcmVmaXggc28gdGhhdCB0aGUgQ0xJIGNhbiBpZGVudGlmeSB0aGlzIHNwZWNpZmljIGVycm9yXG4gICAgICAvLyBhbmQgcHJpbnQgc29tZSBtb3JlIGNvbnRleHQgdG8gdGhlIHVzZXIuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYCR7VkVSU0lPTl9NSVNNQVRDSH06IE1heGltdW0gc2NoZW1hIHZlcnNpb24gc3VwcG9ydGVkIGlzICR7bWF4U3VwcG9ydGVkfSwgYnV0IGZvdW5kICR7YWN0dWFsfWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gbm93IHZhbGlkYXRlIHRoZSBmb3JtYXQgaXMgZ29vZC5cbiAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcganNvbnNjaGVtYS5WYWxpZGF0b3IoKTtcbiAgICBjb25zdCByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdGUobWFuaWZlc3QsIHNjaGVtYSwge1xuICAgICAgLy8gZG9lcyBleGlzdCBidXQgaXMgbm90IGluIHRoZSBUeXBlU2NyaXB0IGRlZmluaXRpb25zXG4gICAgICBuZXN0ZWRFcnJvcnM6IHRydWUsXG5cbiAgICAgIGFsbG93VW5rbm93bkF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgIH0gYXMgYW55KTtcbiAgICBpZiAoIXJlc3VsdC52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGFzc2VtYmx5IG1hbmlmZXN0OlxcbiR7cmVzdWx0fWApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHNhdmVNYW5pZmVzdChtYW5pZmVzdDogYW55LCBmaWxlUGF0aDogc3RyaW5nLCBzY2hlbWE6IGpzb25zY2hlbWEuU2NoZW1hLCBwcmVwcm9jZXNzPzogKG9iajogYW55KSA9PiBhbnkpIHtcbiAgICBsZXQgd2l0aFZlcnNpb24gPSB7IC4uLm1hbmlmZXN0LCB2ZXJzaW9uOiBNYW5pZmVzdC52ZXJzaW9uKCkgfTtcbiAgICBNYW5pZmVzdC52YWxpZGF0ZSh3aXRoVmVyc2lvbiwgc2NoZW1hKTtcbiAgICBpZiAocHJlcHJvY2Vzcykge1xuICAgICAgd2l0aFZlcnNpb24gPSBwcmVwcm9jZXNzKHdpdGhWZXJzaW9uKTtcbiAgICB9XG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkod2l0aFZlcnNpb24sIHVuZGVmaW5lZCwgMikpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgbG9hZE1hbmlmZXN0KFxuICAgICAgZmlsZVBhdGg6IHN0cmluZyxcbiAgICAgIHNjaGVtYToganNvbnNjaGVtYS5TY2hlbWEsXG4gICAgICBwcmVwcm9jZXNzPzogKG9iajogYW55KSA9PiBhbnlcbiAgKSB7XG4gICAgbGV0IG9iaiA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCB7IGVuY29kaW5nOiBcInV0Zi04XCIgfSkpO1xuICAgIGlmIChwcmVwcm9jZXNzKSB7XG4gICAgICBvYmogPSBwcmVwcm9jZXNzKG9iaik7XG4gICAgfVxuICAgIE1hbmlmZXN0LnZhbGlkYXRlKG9iaiwgc2NoZW1hKTtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgcmVxdWlyZXMgc29tZSBleHBsYWluaW5nLi4uXG4gICAqXG4gICAqIFdlIHByZXZpb3VzbHkgdXNlZCBgeyBLZXksIFZhbHVlIH1gIGZvciB0aGUgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyBhIHN0YWNrIHRhZy4gKE5vdGljZSB0aGUgY2FzaW5nKVxuICAgKlxuICAgKiBXaGVuIHRoYXQgb2JqZWN0IG1vdmVkIHRvIHRoaXMgcGFja2FnZSwgaXQgaGFkIHRvIGJlIEpTSUkgY29tcGxpYW50LCB3aGljaCBtZWFudCB0aGUgcHJvcGVydHlcbiAgICogbmFtZXMgbXVzdCBiZSBgY2FtZWxDYXNlZGAsIGFuZCBub3QgYFBhc2NhbENhc2VkYC4gVGhpcyBtZWFudCBpdCBubyBsb25nZXIgbWF0Y2hlcyB0aGUgc3RydWN0dXJlIGluIHRoZSBgbWFuaWZlc3QuanNvbmAgZmlsZS5cbiAgICogSW4gb3JkZXIgdG8gc3VwcG9ydCBjdXJyZW50IG1hbmlmZXN0IGZpbGVzLCB3ZSBoYXZlIHRvIHRyYW5zbGF0ZSB0aGUgYFBhc2NhbENhc2VkYCByZXByZXNlbnRhdGlvbiB0byB0aGUgbmV3IGBjYW1lbENhc2VkYCBvbmUuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGUgc2VyaWFsaXphdGlvbiBpdHNlbGYgc3RpbGwgd3JpdGVzIGBQYXNjYWxDYXNlZGAgYmVjYXVzZSBpdCByZWxhdGVzIHRvIGhvdyBST1MgZXhwZWN0cyBpdC5cbiAgICpcbiAgICogSWRlYWxseSwgd2Ugd291bGQgc3RhcnQgd3JpdGluZyB0aGUgYGNhbWVsQ2FzZWRgIGFuZCB0cmFuc2xhdGUgdG8gaG93IFJPUyBleHBlY3RzIGl0IHdoZW4gbmVlZGVkLiBCdXQgdGhpcyByZXF1aXJlcyBuYXN0eVxuICAgKiBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBjb2RlIGFuZCBpdCBqdXN0IGRvZXNuJ3Qgc2VlbSB0byBiZSB3b3J0aCB0aGUgZWZmb3J0LlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcGF0Y2hTdGFja1RhZ3NPblJlYWQobWFuaWZlc3Q6IGFzc2VtYmx5LkFzc2VtYmx5TWFuaWZlc3QpIHtcbiAgICByZXR1cm4gTWFuaWZlc3QucmVwbGFjZVN0YWNrVGFncyhtYW5pZmVzdCwgdGFncyA9PiB0YWdzLm1hcCgoZGlza1RhZzogYW55KSA9PiAoe1xuICAgICAga2V5OiBkaXNrVGFnLktleSxcbiAgICAgIHZhbHVlOiBkaXNrVGFnLlZhbHVlLFxuICAgIH0pKSk7XG4gIH1cblxuICAvKipcbiAgICogU2VlIGV4cGxhbmF0aW9uIG9uIGBwYXRjaFN0YWNrVGFnc09uUmVhZGBcbiAgICpcbiAgICogVHJhbnNsYXRlIHN0YWNrIHRhZ3MgbWV0YWRhdGEgaWYgaXQgaGFzIHRoZSBcInJpZ2h0XCIgY2FzaW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcGF0Y2hTdGFja1RhZ3NPbldyaXRlKG1hbmlmZXN0OiBhc3NlbWJseS5Bc3NlbWJseU1hbmlmZXN0KSB7XG4gICAgcmV0dXJuIE1hbmlmZXN0LnJlcGxhY2VTdGFja1RhZ3MobWFuaWZlc3QsIHRhZ3MgPT4gdGFncy5tYXAobWVtVGFnID0+XG4gICAgICAgIC8vIE1pZ2h0IGFscmVhZHkgYmUgdXBwZXJjYXNlZCAoYmVjYXVzZSBzdGFjayBzeW50aGVzaXMgZ2VuZXJhdGVzIGl0IGluIGZpbmFsIGZvcm0geWV0KVxuICAgICAgICAoJ0tleScgaW4gbWVtVGFnID8gbWVtVGFnIDogeyBLZXk6IG1lbVRhZy5rZXksIFZhbHVlOiBtZW1UYWcudmFsdWUgfSkgYXMgYW55LFxuICAgICkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IHJlcGxhY2Ugc3RhY2sgdGFncyBpbiB0aGUgc3RhY2sgbWV0YWRhdGFcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlcGxhY2VTdGFja1RhZ3MobWFuaWZlc3Q6IGFzc2VtYmx5LkFzc2VtYmx5TWFuaWZlc3QsIGZuOiBFbmRvZnVuY3Rvcjxhc3NlbWJseS5TdGFja1RhZ3NNZXRhZGF0YUVudHJ5Pik6IGFzc2VtYmx5LkFzc2VtYmx5TWFuaWZlc3Qge1xuICAgIC8vIE5lZWQgdG8gYWRkIGluIHRoZSBgbm9VbmRlZmluZWRgcyBiZWNhdXNlIG90aGVyd2lzZSBqZXN0IHNuYXBzaG90IHRlc3RzIGFyZSBnb2luZyB0byBmcmVhayBvdXRcbiAgICAvLyBhYm91dCB0aGUga2V5cyB3aXRoIHZhbHVlcyB0aGF0IGFyZSBgdW5kZWZpbmVkYCAoZXZlbiB0aG91Z2ggdGhleSB3b3VsZCBuZXZlciBiZSBKU09OLnN0cmluZ2lmaWVkKVxuICAgIHJldHVybiBub1VuZGVmaW5lZCh7XG4gICAgICAuLi5tYW5pZmVzdCxcbiAgICAgIGFydGlmYWN0czogbWFwVmFsdWVzKG1hbmlmZXN0LmFydGlmYWN0cywgYXJ0aWZhY3QgPT4ge1xuICAgICAgICBpZiAoYXJ0aWZhY3QudHlwZSAhPT0gYXNzZW1ibHkuQXJ0aWZhY3RUeXBlLkFMSVlVTl9ST1NfU1RBQ0spIHsgcmV0dXJuIGFydGlmYWN0OyB9XG4gICAgICAgIHJldHVybiBub1VuZGVmaW5lZCh7XG4gICAgICAgICAgLi4uYXJ0aWZhY3QsXG4gICAgICAgICAgbWV0YWRhdGE6IG1hcFZhbHVlcyhhcnRpZmFjdC5tZXRhZGF0YSwgbWV0YWRhdGFFbnRyaWVzID0+IG1ldGFkYXRhRW50cmllcy5tYXAobWV0YWRhdGFFbnRyeSA9PiB7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGFFbnRyeS50eXBlICE9PSBhc3NlbWJseS5BcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLlNUQUNLX1RBR1MgfHwgIW1ldGFkYXRhRW50cnkuZGF0YSkgeyByZXR1cm4gbWV0YWRhdGFFbnRyeTsgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4ubWV0YWRhdGFFbnRyeSxcbiAgICAgICAgICAgICAgZGF0YTogZm4obWV0YWRhdGFFbnRyeS5kYXRhIGFzIGFzc2VtYmx5LlN0YWNrVGFnc01ldGFkYXRhRW50cnkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSksXG4gICAgICAgIH0gYXMgYXNzZW1ibHkuQXJ0aWZhY3RNYW5pZmVzdCk7XG4gICAgICB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxufVxuXG50eXBlIEVuZG9mdW5jdG9yPEE+ID0gKHg6IEEpID0+IEE7XG5cbmZ1bmN0aW9uIG1hcFZhbHVlczxBLCBCPih4czogUmVjb3JkPHN0cmluZywgQT4gfCB1bmRlZmluZWQsIGZuOiAoeDogQSkgPT4gQik6IFJlY29yZDxzdHJpbmcsIEI+IHwgdW5kZWZpbmVkIHtcbiAgaWYgKCF4cykgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG4gIGNvbnN0IHJldDogUmVjb3JkPHN0cmluZywgQj4gfCB1bmRlZmluZWQgPSB7fTtcbiAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoeHMpKSB7XG4gICAgcmV0W2tdID0gZm4odik7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbm9VbmRlZmluZWQ8QSBleHRlbmRzIG9iamVjdD4oeHM6IEEpOiBBIHtcbiAgY29uc3QgcmV0OiBhbnkgPSB7fTtcbiAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoeHMpKSB7XG4gICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0W2tdID0gdjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiJdfQ==