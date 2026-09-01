import * as assembly from "./cloud-assembly";
export declare const VERSION_MISMATCH: string;
/**
 * Protocol utility class.
 */
export declare class Manifest {
    /**
     * Validates and saves the cloud assembly manifest to file.
     *
     * @param manifest - manifest.
     * @param filePath - output file path.
     */
    static saveAssemblyManifest(manifest: assembly.AssemblyManifest, filePath: string): void;
    /**
     * Load and validates the cloud assembly manifest from file.
     *
     * @param filePath - path to the manifest file.
     */
    static loadAssemblyManifest(filePath: string): assembly.AssemblyManifest;
    /**
     * Fetch the current schema version number.
     */
    static version(): string;
    /**
     * Deprecated
     * @deprecated use `saveAssemblyManifest()`
     */
    static save(manifest: assembly.AssemblyManifest, filePath: string): void;
    /**
     * Deprecated
     * @deprecated use `loadAssemblyManifest()`
     */
    static load(filePath: string): assembly.AssemblyManifest;
    private static validate;
    private static saveManifest;
    private static loadManifest;
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
    private static patchStackTagsOnRead;
    /**
     * See explanation on `patchStackTagsOnRead`
     *
     * Translate stack tags metadata if it has the "right" casing.
     */
    private static patchStackTagsOnWrite;
    /**
     * Recursively replace stack tags in the stack metadata
     */
    private static replaceStackTags;
    private constructor();
}
