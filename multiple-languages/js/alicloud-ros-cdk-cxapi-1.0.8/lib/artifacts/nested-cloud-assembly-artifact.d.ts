import * as cxschema from "@alicloud/ros-cdk-assembly-schema";
import { CloudArtifact } from "../cloud-artifact";
import { CloudAssembly } from "../cloud-assembly";
/**
 * Asset manifest is a description of a set of assets which need to be built and published
 */
export declare class NestedCloudAssemblyArtifact extends CloudArtifact {
    /**
     * The relative directory name of the asset manifest
     */
    readonly directoryName: string;
    /**
     * Display name
     */
    readonly displayName: string;
    /**
     * Cache for the inner assembly loading
     */
    private _nestedAssembly?;
    constructor(assembly: CloudAssembly, name: string, artifact: cxschema.ArtifactManifest);
    /**
     * Full path to the nested assembly directory
     */
    get fullPath(): string;
    /**
     * The nested Assembly
     */
    get nestedAssembly(): CloudAssembly;
}
//# sourceMappingURL=nested-cloud-assembly-artifact.d.ts.map