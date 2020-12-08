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
        Manifest.saveManifest(manifest, filePath, ASSEMBLY_SCHEMA);
    }
    /**
     * Load and validates the cloud assembly manifest from file.
     *
     * @param filePath - path to the manifest file.
     */
    static loadAssemblyManifest(filePath) {
        return Manifest.loadManifest(filePath, ASSEMBLY_SCHEMA, (obj) => Manifest.patchStackTags(obj));
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
    static saveManifest(manifest, filePath, schema) {
        const withVersion = { ...manifest, version: Manifest.version() };
        Manifest.validate(withVersion, schema);
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
    static patchStackTags(manifest) {
        for (const artifact of Object.values(manifest.artifacts || [])) {
            if (artifact.type === assembly.ArtifactType.ALIYUN_ROS_STACK) {
                for (const metadataEntries of Object.values(artifact.metadata || [])) {
                    for (const metadataEntry of metadataEntries) {
                        if (metadataEntry.type ===
                            assembly.ArtifactMetadataEntryType.STACK_TAGS &&
                            metadataEntry.data) {
                            const metadataAny = metadataEntry;
                            metadataAny.data = metadataAny.data.map((t) => ({
                                key: t.Key,
                                value: t.Value,
                            }));
                        }
                    }
                }
            }
        }
        return manifest;
    }
    constructor() { }
}
exports.Manifest = Manifest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuaWZlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYW5pZmVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5QkFBeUI7QUFDekIseUNBQXlDO0FBQ3pDLGlDQUFpQztBQUNqQyw2Q0FBNkM7QUFFN0Msa0VBQWtFO0FBQ2xFLGlFQUFpRTtBQUNqRSw2QkFBNkI7QUFDaEIsUUFBQSxnQkFBZ0IsR0FDM0Isd0NBQXdDLENBQUM7QUFFM0Msa0NBQWtDO0FBRWxDLGlFQUFpRTtBQUNqRSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUV4RTs7R0FFRztBQUNILGlFQUFpRTtBQUNqRSxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFaEYsaUNBQWlDO0FBRWpDOztHQUVHO0FBQ0gsTUFBYSxRQUFRO0lBQ25COzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLG9CQUFvQixDQUNoQyxRQUFtQyxFQUNuQyxRQUFnQjtRQUVoQixRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsb0JBQW9CLENBQ2hDLFFBQWdCO1FBRWhCLE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDOUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQW1DLEVBQUUsUUFBZ0I7UUFDdEUsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FB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LENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsRUFBRTtvQkFDcEUsS0FBSyxNQUFNLGFBQWEsSUFBSSxlQUFlLEVBQUU7d0JBQzNDLElBQ0UsYUFBYSxDQUFDLElBQUk7NEJBQ2hCLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVOzRCQUMvQyxhQUFhLENBQUMsSUFBSSxFQUNsQjs0QkFDQSxNQUFNLFdBQVcsR0FBRyxhQUFvQixDQUFDOzRCQUN6QyxXQUFXLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dDQUNuRCxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUc7Z0NBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLOzZCQUNmLENBQUMsQ0FBQyxDQUFDO3lCQUNMO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxnQkFBdUIsQ0FBQztDQUN6QjtBQXJKRCw0QkFxSkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCAqIGFzIGpzb25zY2hlbWEgZnJvbSBcImpzb25zY2hlbWFcIjtcbmltcG9ydCAqIGFzIHNlbXZlciBmcm9tIFwic2VtdmVyXCI7XG5pbXBvcnQgKiBhcyBhc3NlbWJseSBmcm9tIFwiLi9jbG91ZC1hc3NlbWJseVwiO1xuXG4vLyB0aGlzIHByZWZpeCBpcyB1c2VkIGJ5IHRoZSBDTEkgdG8gaWRlbnRpZnkgdGhpcyBzcGVjaWZpYyBlcnJvci5cbi8vIGluIHdoaWNoIGNhc2Ugd2Ugd2FudCB0byBpbnN0cnVjdCB0aGUgdXNlciB0byB1cGdyYWRlIGhpcyBDTEkuXG4vLyBzZWUgZXhlYy50cyNjcmVhdGVBc3NlbWJseVxuZXhwb3J0IGNvbnN0IFZFUlNJT05fTUlTTUFUQ0g6IHN0cmluZyA9XG4gIFwiQ2xvdWQgYXNzZW1ibHkgc2NoZW1hIHZlcnNpb24gbWlzbWF0Y2hcIjtcblxuLy8gdHNsaW50OmRpc2FibGU6IG5vLXZhci1yZXF1aXJlc1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuY29uc3QgQVNTRU1CTFlfU0NIRU1BID0gcmVxdWlyZShcIi4uL3NjaGVtYS9jbG91ZC1hc3NlbWJseS5zY2hlbWEuanNvblwiKTtcblxuLyoqXG4gKiBWZXJzaW9uIGlzIHNoYXJlZCBmb3IgYm90aCBtYW5pZmVzdHNcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbmNvbnN0IFNDSEVNQV9WRVJTSU9OID0gcmVxdWlyZShcIi4uL3NjaGVtYS9jbG91ZC1hc3NlbWJseS52ZXJzaW9uLmpzb25cIikudmVyc2lvbjtcblxuLy8gdHNsaW50OmVuYWJsZTogbm8tdmFyLXJlcXVpcmVzXG5cbi8qKlxuICogUHJvdG9jb2wgdXRpbGl0eSBjbGFzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE1hbmlmZXN0IHtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhbmQgc2F2ZXMgdGhlIGNsb3VkIGFzc2VtYmx5IG1hbmlmZXN0IHRvIGZpbGUuXG4gICAqXG4gICAqIEBwYXJhbSBtYW5pZmVzdCAtIG1hbmlmZXN0LlxuICAgKiBAcGFyYW0gZmlsZVBhdGggLSBvdXRwdXQgZmlsZSBwYXRoLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzYXZlQXNzZW1ibHlNYW5pZmVzdChcbiAgICBtYW5pZmVzdDogYXNzZW1ibHkuQXNzZW1ibHlNYW5pZmVzdCxcbiAgICBmaWxlUGF0aDogc3RyaW5nXG4gICkge1xuICAgIE1hbmlmZXN0LnNhdmVNYW5pZmVzdChtYW5pZmVzdCwgZmlsZVBhdGgsIEFTU0VNQkxZX1NDSEVNQSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBhbmQgdmFsaWRhdGVzIHRoZSBjbG91ZCBhc3NlbWJseSBtYW5pZmVzdCBmcm9tIGZpbGUuXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlUGF0aCAtIHBhdGggdG8gdGhlIG1hbmlmZXN0IGZpbGUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGxvYWRBc3NlbWJseU1hbmlmZXN0KFxuICAgIGZpbGVQYXRoOiBzdHJpbmdcbiAgKTogYXNzZW1ibHkuQXNzZW1ibHlNYW5pZmVzdCB7XG4gICAgcmV0dXJuIE1hbmlmZXN0LmxvYWRNYW5pZmVzdChmaWxlUGF0aCwgQVNTRU1CTFlfU0NIRU1BLCAob2JqKSA9PlxuICAgICAgTWFuaWZlc3QucGF0Y2hTdGFja1RhZ3Mob2JqKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggdGhlIGN1cnJlbnQgc2NoZW1hIHZlcnNpb24gbnVtYmVyLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJzaW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNDSEVNQV9WRVJTSU9OO1xuICB9XG5cbiAgLyoqXG4gICAqIERlcHJlY2F0ZWRcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBzYXZlQXNzZW1ibHlNYW5pZmVzdCgpYFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzYXZlKG1hbmlmZXN0OiBhc3NlbWJseS5Bc3NlbWJseU1hbmlmZXN0LCBmaWxlUGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZUFzc2VtYmx5TWFuaWZlc3QobWFuaWZlc3QsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXByZWNhdGVkXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgbG9hZEFzc2VtYmx5TWFuaWZlc3QoKWBcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbG9hZChmaWxlUGF0aDogc3RyaW5nKTogYXNzZW1ibHkuQXNzZW1ibHlNYW5pZmVzdCB7XG4gICAgcmV0dXJuIHRoaXMubG9hZEFzc2VtYmx5TWFuaWZlc3QoZmlsZVBhdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgdmFsaWRhdGUoXG4gICAgbWFuaWZlc3Q6IHsgdmVyc2lvbjogc3RyaW5nIH0sXG4gICAgc2NoZW1hOiBqc29uc2NoZW1hLlNjaGVtYVxuICApIHtcbiAgICBmdW5jdGlvbiBwYXJzZVZlcnNpb24odmVyc2lvbjogc3RyaW5nKSB7XG4gICAgICBjb25zdCB2ZXIgPSBzZW12ZXIudmFsaWQodmVyc2lvbik7XG4gICAgICBpZiAoIXZlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2VtdmVyIHN0cmluZzogXCIke3ZlcnNpb259XCJgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2ZXI7XG4gICAgfVxuXG4gICAgY29uc3QgbWF4U3VwcG9ydGVkID0gcGFyc2VWZXJzaW9uKE1hbmlmZXN0LnZlcnNpb24oKSk7XG4gICAgY29uc3QgYWN0dWFsID0gcGFyc2VWZXJzaW9uKG1hbmlmZXN0LnZlcnNpb24pO1xuXG4gICAgLy8gZmlyc3QgdmFsaWRhdGUgdGhlIHZlcnNpb24gc2hvdWxkIGJlIGFjY2VwdGVkLlxuICAgIGlmIChzZW12ZXIuZ3QoYWN0dWFsLCBtYXhTdXBwb3J0ZWQpKSB7XG4gICAgICAvLyB3ZSB1c2UgYSB3ZWxsIGtub3duIGVycm9yIHByZWZpeCBzbyB0aGF0IHRoZSBDTEkgY2FuIGlkZW50aWZ5IHRoaXMgc3BlY2lmaWMgZXJyb3JcbiAgICAgIC8vIGFuZCBwcmludCBzb21lIG1vcmUgY29udGV4dCB0byB0aGUgdXNlci5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCR7VkVSU0lPTl9NSVNNQVRDSH06IE1heGltdW0gc2NoZW1hIHZlcnNpb24gc3VwcG9ydGVkIGlzICR7bWF4U3VwcG9ydGVkfSwgYnV0IGZvdW5kICR7YWN0dWFsfWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gbm93IHZhbGlkYXRlIHRoZSBmb3JtYXQgaXMgZ29vZC5cbiAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcganNvbnNjaGVtYS5WYWxpZGF0b3IoKTtcbiAgICBjb25zdCByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdGUobWFuaWZlc3QsIHNjaGVtYSwge1xuICAgICAgLy8gZG9lcyBleGlzdCBidXQgaXMgbm90IGluIHRoZSBUeXBlU2NyaXB0IGRlZmluaXRpb25zXG4gICAgICBuZXN0ZWRFcnJvcnM6IHRydWUsXG5cbiAgICAgIGFsbG93VW5rbm93bkF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgIH0gYXMgYW55KTtcbiAgICBpZiAoIXJlc3VsdC52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGFzc2VtYmx5IG1hbmlmZXN0OlxcbiR7cmVzdWx0fWApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHNhdmVNYW5pZmVzdChcbiAgICBtYW5pZmVzdDogYW55LFxuICAgIGZpbGVQYXRoOiBzdHJpbmcsXG4gICAgc2NoZW1hOiBqc29uc2NoZW1hLlNjaGVtYVxuICApIHtcbiAgICBjb25zdCB3aXRoVmVyc2lvbiA9IHsgLi4ubWFuaWZlc3QsIHZlcnNpb246IE1hbmlmZXN0LnZlcnNpb24oKSB9O1xuICAgIE1hbmlmZXN0LnZhbGlkYXRlKHdpdGhWZXJzaW9uLCBzY2hlbWEpO1xuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KHdpdGhWZXJzaW9uLCB1bmRlZmluZWQsIDIpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGxvYWRNYW5pZmVzdChcbiAgICBmaWxlUGF0aDogc3RyaW5nLFxuICAgIHNjaGVtYToganNvbnNjaGVtYS5TY2hlbWEsXG4gICAgcHJlcHJvY2Vzcz86IChvYmo6IGFueSkgPT4gYW55XG4gICkge1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgeyBlbmNvZGluZzogXCJ1dGYtOFwiIH0pKTtcbiAgICBpZiAocHJlcHJvY2Vzcykge1xuICAgICAgb2JqID0gcHJlcHJvY2VzcyhvYmopO1xuICAgIH1cbiAgICBNYW5pZmVzdC52YWxpZGF0ZShvYmosIHNjaGVtYSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHJlcXVpcmVzIHNvbWUgZXhwbGFpbmluZy4uLlxuICAgKlxuICAgKiBXZSBwcmV2aW91c2x5IHVzZWQgYHsgS2V5LCBWYWx1ZSB9YCBmb3IgdGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgYSBzdGFjayB0YWcuIChOb3RpY2UgdGhlIGNhc2luZylcbiAgICpcbiAgICogV2hlbiB0aGF0IG9iamVjdCBtb3ZlZCB0byB0aGlzIHBhY2thZ2UsIGl0IGhhZCB0byBiZSBKU0lJIGNvbXBsaWFudCwgd2hpY2ggbWVhbnQgdGhlIHByb3BlcnR5XG4gICAqIG5hbWVzIG11c3QgYmUgYGNhbWVsQ2FzZWRgLCBhbmQgbm90IGBQYXNjYWxDYXNlZGAuIFRoaXMgbWVhbnQgaXQgbm8gbG9uZ2VyIG1hdGNoZXMgdGhlIHN0cnVjdHVyZSBpbiB0aGUgYG1hbmlmZXN0Lmpzb25gIGZpbGUuXG4gICAqIEluIG9yZGVyIHRvIHN1cHBvcnQgY3VycmVudCBtYW5pZmVzdCBmaWxlcywgd2UgaGF2ZSB0byB0cmFuc2xhdGUgdGhlIGBQYXNjYWxDYXNlZGAgcmVwcmVzZW50YXRpb24gdG8gdGhlIG5ldyBgY2FtZWxDYXNlZGAgb25lLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhlIHNlcmlhbGl6YXRpb24gaXRzZWxmIHN0aWxsIHdyaXRlcyBgUGFzY2FsQ2FzZWRgIGJlY2F1c2UgaXQgcmVsYXRlcyB0byBob3cgUk9TIGV4cGVjdHMgaXQuXG4gICAqXG4gICAqIElkZWFsbHksIHdlIHdvdWxkIHN0YXJ0IHdyaXRpbmcgdGhlIGBjYW1lbENhc2VkYCBhbmQgdHJhbnNsYXRlIHRvIGhvdyBST1MgZXhwZWN0cyBpdCB3aGVuIG5lZWRlZC4gQnV0IHRoaXMgcmVxdWlyZXMgbmFzdHlcbiAgICogYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgY29kZSBhbmQgaXQganVzdCBkb2Vzbid0IHNlZW0gdG8gYmUgd29ydGggdGhlIGVmZm9ydC5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHBhdGNoU3RhY2tUYWdzKG1hbmlmZXN0OiBhc3NlbWJseS5Bc3NlbWJseU1hbmlmZXN0KSB7XG4gICAgZm9yIChjb25zdCBhcnRpZmFjdCBvZiBPYmplY3QudmFsdWVzKG1hbmlmZXN0LmFydGlmYWN0cyB8fCBbXSkpIHtcbiAgICAgIGlmIChhcnRpZmFjdC50eXBlID09PSBhc3NlbWJseS5BcnRpZmFjdFR5cGUuQUxJWVVOX1JPU19TVEFDSykge1xuICAgICAgICBmb3IgKGNvbnN0IG1ldGFkYXRhRW50cmllcyBvZiBPYmplY3QudmFsdWVzKGFydGlmYWN0Lm1ldGFkYXRhIHx8IFtdKSkge1xuICAgICAgICAgIGZvciAoY29uc3QgbWV0YWRhdGFFbnRyeSBvZiBtZXRhZGF0YUVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgbWV0YWRhdGFFbnRyeS50eXBlID09PVxuICAgICAgICAgICAgICAgIGFzc2VtYmx5LkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuU1RBQ0tfVEFHUyAmJlxuICAgICAgICAgICAgICBtZXRhZGF0YUVudHJ5LmRhdGFcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjb25zdCBtZXRhZGF0YUFueSA9IG1ldGFkYXRhRW50cnkgYXMgYW55O1xuICAgICAgICAgICAgICBtZXRhZGF0YUFueS5kYXRhID0gbWV0YWRhdGFBbnkuZGF0YS5tYXAoKHQ6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgICBrZXk6IHQuS2V5LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0LlZhbHVlLFxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hbmlmZXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=