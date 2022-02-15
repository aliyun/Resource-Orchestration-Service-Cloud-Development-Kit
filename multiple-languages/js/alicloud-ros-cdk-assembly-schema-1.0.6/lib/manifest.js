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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuaWZlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYW5pZmVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5QkFBeUI7QUFDekIseUNBQXlDO0FBQ3pDLGlDQUFpQztBQUNqQyw2Q0FBNkM7QUFFN0Msa0VBQWtFO0FBQ2xFLGlFQUFpRTtBQUNqRSw2QkFBNkI7QUFDaEIsUUFBQSxnQkFBZ0IsR0FDM0Isd0NBQXdDLENBQUM7QUFFM0Msa0NBQWtDO0FBRWxDLGlFQUFpRTtBQUNqRSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUV4RTs7R0FFRztBQUNILGlFQUFpRTtBQUNqRSxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFaEYsaUNBQWlDO0FBRWpDOztHQUVHO0FBQ0gsTUFBYSxRQUFRO0lBQ25COzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLG9CQUFvQixDQUNoQyxRQUFtQyxFQUNuQyxRQUFnQjtRQUVoQixRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLG9CQUFvQixDQUNoQyxRQUFnQjtRQUVoQixPQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFtQyxFQUFFLFFBQWdCO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFD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QUFFLE9BQU8sYUFBYSxDQUFDO3lCQUFFO3dCQUMxSCxPQUFPOzRCQUNMLEdBQUcsYUFBYTs0QkFDaEIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBdUMsQ0FBQzt5QkFDaEUsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQztpQkFDeUIsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBdUIsQ0FBQztDQUN6QjtBQXJLRCw0QkFxS0M7QUFJRCxTQUFTLFNBQVMsQ0FBTyxFQUFpQyxFQUFFLEVBQWU7SUFDekUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUFFLE9BQU8sU0FBUyxDQUFDO0tBQUU7SUFDOUIsTUFBTSxHQUFHLEdBQWtDLEVBQUUsQ0FBQztJQUM5QyxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN2QyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsU0FBUyxXQUFXLENBQW1CLEVBQUs7SUFDMUMsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO0lBQ3BCLEtBQUssTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNuQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1o7S0FDRjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0ICogYXMganNvbnNjaGVtYSBmcm9tIFwianNvbnNjaGVtYVwiO1xuaW1wb3J0ICogYXMgc2VtdmVyIGZyb20gXCJzZW12ZXJcIjtcbmltcG9ydCAqIGFzIGFzc2VtYmx5IGZyb20gXCIuL2Nsb3VkLWFzc2VtYmx5XCI7XG5cbi8vIHRoaXMgcHJlZml4IGlzIHVzZWQgYnkgdGhlIENMSSB0byBpZGVudGlmeSB0aGlzIHNwZWNpZmljIGVycm9yLlxuLy8gaW4gd2hpY2ggY2FzZSB3ZSB3YW50IHRvIGluc3RydWN0IHRoZSB1c2VyIHRvIHVwZ3JhZGUgaGlzIENMSS5cbi8vIHNlZSBleGVjLnRzI2NyZWF0ZUFzc2VtYmx5XG5leHBvcnQgY29uc3QgVkVSU0lPTl9NSVNNQVRDSDogc3RyaW5nID1cbiAgXCJDbG91ZCBhc3NlbWJseSBzY2hlbWEgdmVyc2lvbiBtaXNtYXRjaFwiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogbm8tdmFyLXJlcXVpcmVzXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG5jb25zdCBBU1NFTUJMWV9TQ0hFTUEgPSByZXF1aXJlKFwiLi4vc2NoZW1hL2Nsb3VkLWFzc2VtYmx5LnNjaGVtYS5qc29uXCIpO1xuXG4vKipcbiAqIFZlcnNpb24gaXMgc2hhcmVkIGZvciBib3RoIG1hbmlmZXN0c1xuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuY29uc3QgU0NIRU1BX1ZFUlNJT04gPSByZXF1aXJlKFwiLi4vc2NoZW1hL2Nsb3VkLWFzc2VtYmx5LnZlcnNpb24uanNvblwiKS52ZXJzaW9uO1xuXG4vLyB0c2xpbnQ6ZW5hYmxlOiBuby12YXItcmVxdWlyZXNcblxuLyoqXG4gKiBQcm90b2NvbCB1dGlsaXR5IGNsYXNzLlxuICovXG5leHBvcnQgY2xhc3MgTWFuaWZlc3Qge1xuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBzYXZlcyB0aGUgY2xvdWQgYXNzZW1ibHkgbWFuaWZlc3QgdG8gZmlsZS5cbiAgICpcbiAgICogQHBhcmFtIG1hbmlmZXN0IC0gbWFuaWZlc3QuXG4gICAqIEBwYXJhbSBmaWxlUGF0aCAtIG91dHB1dCBmaWxlIHBhdGguXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNhdmVBc3NlbWJseU1hbmlmZXN0KFxuICAgIG1hbmlmZXN0OiBhc3NlbWJseS5Bc3NlbWJseU1hbmlmZXN0LFxuICAgIGZpbGVQYXRoOiBzdHJpbmdcbiAgKSB7XG4gICAgTWFuaWZlc3Quc2F2ZU1hbmlmZXN0KG1hbmlmZXN0LCBmaWxlUGF0aCwgQVNTRU1CTFlfU0NIRU1BLCBNYW5pZmVzdC5wYXRjaFN0YWNrVGFnc09uV3JpdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgYW5kIHZhbGlkYXRlcyB0aGUgY2xvdWQgYXNzZW1ibHkgbWFuaWZlc3QgZnJvbSBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVBhdGggLSBwYXRoIHRvIHRoZSBtYW5pZmVzdCBmaWxlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBsb2FkQXNzZW1ibHlNYW5pZmVzdChcbiAgICBmaWxlUGF0aDogc3RyaW5nXG4gICk6IGFzc2VtYmx5LkFzc2VtYmx5TWFuaWZlc3Qge1xuICAgIHJldHVybiBNYW5pZmVzdC5sb2FkTWFuaWZlc3QoZmlsZVBhdGgsIEFTU0VNQkxZX1NDSEVNQSwgTWFuaWZlc3QucGF0Y2hTdGFja1RhZ3NPblJlYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIHRoZSBjdXJyZW50IHNjaGVtYSB2ZXJzaW9uIG51bWJlci5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBTQ0hFTUFfVkVSU0lPTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXByZWNhdGVkXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgc2F2ZUFzc2VtYmx5TWFuaWZlc3QoKWBcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2F2ZShtYW5pZmVzdDogYXNzZW1ibHkuQXNzZW1ibHlNYW5pZmVzdCwgZmlsZVBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnNhdmVBc3NlbWJseU1hbmlmZXN0KG1hbmlmZXN0LCBmaWxlUGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogRGVwcmVjYXRlZFxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYGxvYWRBc3NlbWJseU1hbmlmZXN0KClgXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGxvYWQoZmlsZVBhdGg6IHN0cmluZyk6IGFzc2VtYmx5LkFzc2VtYmx5TWFuaWZlc3Qge1xuICAgIHJldHVybiB0aGlzLmxvYWRBc3NlbWJseU1hbmlmZXN0KGZpbGVQYXRoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHZhbGlkYXRlKFxuICAgIG1hbmlmZXN0OiB7IHZlcnNpb246IHN0cmluZyB9LFxuICAgIHNjaGVtYToganNvbnNjaGVtYS5TY2hlbWFcbiAgKSB7XG4gICAgZnVuY3Rpb24gcGFyc2VWZXJzaW9uKHZlcnNpb246IHN0cmluZykge1xuICAgICAgY29uc3QgdmVyID0gc2VtdmVyLnZhbGlkKHZlcnNpb24pO1xuICAgICAgaWYgKCF2ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNlbXZlciBzdHJpbmc6IFwiJHt2ZXJzaW9ufVwiYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmVyO1xuICAgIH1cblxuICAgIGNvbnN0IG1heFN1cHBvcnRlZCA9IHBhcnNlVmVyc2lvbihNYW5pZmVzdC52ZXJzaW9uKCkpO1xuICAgIGNvbnN0IGFjdHVhbCA9IHBhcnNlVmVyc2lvbihtYW5pZmVzdC52ZXJzaW9uKTtcblxuICAgIC8vIGZpcnN0IHZhbGlkYXRlIHRoZSB2ZXJzaW9uIHNob3VsZCBiZSBhY2NlcHRlZC5cbiAgICBpZiAoc2VtdmVyLmd0KGFjdHVhbCwgbWF4U3VwcG9ydGVkKSkge1xuICAgICAgLy8gd2UgdXNlIGEgd2VsbCBrbm93biBlcnJvciBwcmVmaXggc28gdGhhdCB0aGUgQ0xJIGNhbiBpZGVudGlmeSB0aGlzIHNwZWNpZmljIGVycm9yXG4gICAgICAvLyBhbmQgcHJpbnQgc29tZSBtb3JlIGNvbnRleHQgdG8gdGhlIHVzZXIuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGAke1ZFUlNJT05fTUlTTUFUQ0h9OiBNYXhpbXVtIHNjaGVtYSB2ZXJzaW9uIHN1cHBvcnRlZCBpcyAke21heFN1cHBvcnRlZH0sIGJ1dCBmb3VuZCAke2FjdHVhbH1gXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIG5vdyB2YWxpZGF0ZSB0aGUgZm9ybWF0IGlzIGdvb2QuXG4gICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IGpzb25zY2hlbWEuVmFsaWRhdG9yKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gdmFsaWRhdG9yLnZhbGlkYXRlKG1hbmlmZXN0LCBzY2hlbWEsIHtcbiAgICAgIC8vIGRvZXMgZXhpc3QgYnV0IGlzIG5vdCBpbiB0aGUgVHlwZVNjcmlwdCBkZWZpbml0aW9uc1xuICAgICAgbmVzdGVkRXJyb3JzOiB0cnVlLFxuXG4gICAgICBhbGxvd1Vua25vd25BdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICB9IGFzIGFueSk7XG4gICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhc3NlbWJseSBtYW5pZmVzdDpcXG4ke3Jlc3VsdH1gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzYXZlTWFuaWZlc3QobWFuaWZlc3Q6IGFueSwgZmlsZVBhdGg6IHN0cmluZywgc2NoZW1hOiBqc29uc2NoZW1hLlNjaGVtYSwgcHJlcHJvY2Vzcz86IChvYmo6IGFueSkgPT4gYW55KSB7XG4gICAgbGV0IHdpdGhWZXJzaW9uID0geyAuLi5tYW5pZmVzdCwgdmVyc2lvbjogTWFuaWZlc3QudmVyc2lvbigpIH07XG4gICAgTWFuaWZlc3QudmFsaWRhdGUod2l0aFZlcnNpb24sIHNjaGVtYSk7XG4gICAgaWYgKHByZXByb2Nlc3MpIHtcbiAgICAgIHdpdGhWZXJzaW9uID0gcHJlcHJvY2Vzcyh3aXRoVmVyc2lvbik7XG4gICAgfVxuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KHdpdGhWZXJzaW9uLCB1bmRlZmluZWQsIDIpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGxvYWRNYW5pZmVzdChcbiAgICBmaWxlUGF0aDogc3RyaW5nLFxuICAgIHNjaGVtYToganNvbnNjaGVtYS5TY2hlbWEsXG4gICAgcHJlcHJvY2Vzcz86IChvYmo6IGFueSkgPT4gYW55XG4gICkge1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgeyBlbmNvZGluZzogXCJ1dGYtOFwiIH0pKTtcbiAgICBpZiAocHJlcHJvY2Vzcykge1xuICAgICAgb2JqID0gcHJlcHJvY2VzcyhvYmopO1xuICAgIH1cbiAgICBNYW5pZmVzdC52YWxpZGF0ZShvYmosIHNjaGVtYSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHJlcXVpcmVzIHNvbWUgZXhwbGFpbmluZy4uLlxuICAgKlxuICAgKiBXZSBwcmV2aW91c2x5IHVzZWQgYHsgS2V5LCBWYWx1ZSB9YCBmb3IgdGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgYSBzdGFjayB0YWcuIChOb3RpY2UgdGhlIGNhc2luZylcbiAgICpcbiAgICogV2hlbiB0aGF0IG9iamVjdCBtb3ZlZCB0byB0aGlzIHBhY2thZ2UsIGl0IGhhZCB0byBiZSBKU0lJIGNvbXBsaWFudCwgd2hpY2ggbWVhbnQgdGhlIHByb3BlcnR5XG4gICAqIG5hbWVzIG11c3QgYmUgYGNhbWVsQ2FzZWRgLCBhbmQgbm90IGBQYXNjYWxDYXNlZGAuIFRoaXMgbWVhbnQgaXQgbm8gbG9uZ2VyIG1hdGNoZXMgdGhlIHN0cnVjdHVyZSBpbiB0aGUgYG1hbmlmZXN0Lmpzb25gIGZpbGUuXG4gICAqIEluIG9yZGVyIHRvIHN1cHBvcnQgY3VycmVudCBtYW5pZmVzdCBmaWxlcywgd2UgaGF2ZSB0byB0cmFuc2xhdGUgdGhlIGBQYXNjYWxDYXNlZGAgcmVwcmVzZW50YXRpb24gdG8gdGhlIG5ldyBgY2FtZWxDYXNlZGAgb25lLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhlIHNlcmlhbGl6YXRpb24gaXRzZWxmIHN0aWxsIHdyaXRlcyBgUGFzY2FsQ2FzZWRgIGJlY2F1c2UgaXQgcmVsYXRlcyB0byBob3cgUk9TIGV4cGVjdHMgaXQuXG4gICAqXG4gICAqIElkZWFsbHksIHdlIHdvdWxkIHN0YXJ0IHdyaXRpbmcgdGhlIGBjYW1lbENhc2VkYCBhbmQgdHJhbnNsYXRlIHRvIGhvdyBST1MgZXhwZWN0cyBpdCB3aGVuIG5lZWRlZC4gQnV0IHRoaXMgcmVxdWlyZXMgbmFzdHlcbiAgICogYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgY29kZSBhbmQgaXQganVzdCBkb2Vzbid0IHNlZW0gdG8gYmUgd29ydGggdGhlIGVmZm9ydC5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHBhdGNoU3RhY2tUYWdzT25SZWFkKG1hbmlmZXN0OiBhc3NlbWJseS5Bc3NlbWJseU1hbmlmZXN0KSB7XG4gICAgcmV0dXJuIE1hbmlmZXN0LnJlcGxhY2VTdGFja1RhZ3MobWFuaWZlc3QsIHRhZ3MgPT4gdGFncy5tYXAoKGRpc2tUYWc6IGFueSkgPT4gKHtcbiAgICAgIGtleTogZGlza1RhZy5LZXksXG4gICAgICB2YWx1ZTogZGlza1RhZy5WYWx1ZSxcbiAgICB9KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlZSBleHBsYW5hdGlvbiBvbiBgcGF0Y2hTdGFja1RhZ3NPblJlYWRgXG4gICAqXG4gICAqIFRyYW5zbGF0ZSBzdGFjayB0YWdzIG1ldGFkYXRhIGlmIGl0IGhhcyB0aGUgXCJyaWdodFwiIGNhc2luZy5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHBhdGNoU3RhY2tUYWdzT25Xcml0ZShtYW5pZmVzdDogYXNzZW1ibHkuQXNzZW1ibHlNYW5pZmVzdCkge1xuICAgIHJldHVybiBNYW5pZmVzdC5yZXBsYWNlU3RhY2tUYWdzKG1hbmlmZXN0LCB0YWdzID0+IHRhZ3MubWFwKG1lbVRhZyA9PlxuICAgICAgICAvLyBNaWdodCBhbHJlYWR5IGJlIHVwcGVyY2FzZWQgKGJlY2F1c2Ugc3RhY2sgc3ludGhlc2lzIGdlbmVyYXRlcyBpdCBpbiBmaW5hbCBmb3JtIHlldClcbiAgICAgICAgKCdLZXknIGluIG1lbVRhZyA/IG1lbVRhZyA6IHsgS2V5OiBtZW1UYWcua2V5LCBWYWx1ZTogbWVtVGFnLnZhbHVlIH0pIGFzIGFueSxcbiAgICApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWN1cnNpdmVseSByZXBsYWNlIHN0YWNrIHRhZ3MgaW4gdGhlIHN0YWNrIG1ldGFkYXRhXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyByZXBsYWNlU3RhY2tUYWdzKG1hbmlmZXN0OiBhc3NlbWJseS5Bc3NlbWJseU1hbmlmZXN0LCBmbjogRW5kb2Z1bmN0b3I8YXNzZW1ibHkuU3RhY2tUYWdzTWV0YWRhdGFFbnRyeT4pOiBhc3NlbWJseS5Bc3NlbWJseU1hbmlmZXN0IHtcbiAgICAvLyBOZWVkIHRvIGFkZCBpbiB0aGUgYG5vVW5kZWZpbmVkYHMgYmVjYXVzZSBvdGhlcndpc2UgamVzdCBzbmFwc2hvdCB0ZXN0cyBhcmUgZ29pbmcgdG8gZnJlYWsgb3V0XG4gICAgLy8gYWJvdXQgdGhlIGtleXMgd2l0aCB2YWx1ZXMgdGhhdCBhcmUgYHVuZGVmaW5lZGAgKGV2ZW4gdGhvdWdoIHRoZXkgd291bGQgbmV2ZXIgYmUgSlNPTi5zdHJpbmdpZmllZClcbiAgICByZXR1cm4gbm9VbmRlZmluZWQoe1xuICAgICAgLi4ubWFuaWZlc3QsXG4gICAgICBhcnRpZmFjdHM6IG1hcFZhbHVlcyhtYW5pZmVzdC5hcnRpZmFjdHMsIGFydGlmYWN0ID0+IHtcbiAgICAgICAgaWYgKGFydGlmYWN0LnR5cGUgIT09IGFzc2VtYmx5LkFydGlmYWN0VHlwZS5BTElZVU5fUk9TX1NUQUNLKSB7IHJldHVybiBhcnRpZmFjdDsgfVxuICAgICAgICByZXR1cm4gbm9VbmRlZmluZWQoe1xuICAgICAgICAgIC4uLmFydGlmYWN0LFxuICAgICAgICAgIG1ldGFkYXRhOiBtYXBWYWx1ZXMoYXJ0aWZhY3QubWV0YWRhdGEsIG1ldGFkYXRhRW50cmllcyA9PiBtZXRhZGF0YUVudHJpZXMubWFwKG1ldGFkYXRhRW50cnkgPT4ge1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhRW50cnkudHlwZSAhPT0gYXNzZW1ibHkuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5TVEFDS19UQUdTIHx8ICFtZXRhZGF0YUVudHJ5LmRhdGEpIHsgcmV0dXJuIG1ldGFkYXRhRW50cnk7IH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLm1ldGFkYXRhRW50cnksXG4gICAgICAgICAgICAgIGRhdGE6IGZuKG1ldGFkYXRhRW50cnkuZGF0YSBhcyBhc3NlbWJseS5TdGFja1RhZ3NNZXRhZGF0YUVudHJ5KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkpLFxuICAgICAgICB9IGFzIGFzc2VtYmx5LkFydGlmYWN0TWFuaWZlc3QpO1xuICAgICAgfSksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbn1cblxudHlwZSBFbmRvZnVuY3RvcjxBPiA9ICh4OiBBKSA9PiBBO1xuXG5mdW5jdGlvbiBtYXBWYWx1ZXM8QSwgQj4oeHM6IFJlY29yZDxzdHJpbmcsIEE+IHwgdW5kZWZpbmVkLCBmbjogKHg6IEEpID0+IEIpOiBSZWNvcmQ8c3RyaW5nLCBCPiB8IHVuZGVmaW5lZCB7XG4gIGlmICgheHMpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuICBjb25zdCByZXQ6IFJlY29yZDxzdHJpbmcsIEI+IHwgdW5kZWZpbmVkID0ge307XG4gIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHhzKSkge1xuICAgIHJldFtrXSA9IGZuKHYpO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG5vVW5kZWZpbmVkPEEgZXh0ZW5kcyBvYmplY3Q+KHhzOiBBKTogQSB7XG4gIGNvbnN0IHJldDogYW55ID0ge307XG4gIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHhzKSkge1xuICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldFtrXSA9IHY7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG4iXX0=