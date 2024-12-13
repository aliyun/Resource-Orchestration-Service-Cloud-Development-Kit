import * as cxschema from "@alicloud/ros-cdk-assembly-schema";
import { CloudArtifact } from "../cloud-artifact";
import { CloudAssembly } from "../cloud-assembly";
export declare class TreeCloudArtifact extends CloudArtifact {
    readonly file: string;
    constructor(assembly: CloudAssembly, name: string, artifact: cxschema.ArtifactManifest);
}
