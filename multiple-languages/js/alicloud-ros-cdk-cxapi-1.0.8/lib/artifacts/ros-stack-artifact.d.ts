import * as cxschema from "@alicloud/ros-cdk-assembly-schema";
import { CloudArtifact } from "../cloud-artifact";
import { CloudAssembly } from "../cloud-assembly";
export declare class RosStackArtifact extends CloudArtifact {
    /**
     * The file name of the template.
     */
    readonly templateFile: string;
    /**
     * The original name as defined in the CDK app.
     */
    readonly originalName: string;
    /**
     * ROS parameters to pass to the stack.
     */
    readonly parameters: {
        [id: string]: string;
    };
    /**
     * The physical name of this stack.
     */
    readonly stackName: string;
    /**
     * A string that represents this stack. Should only be used in user interfaces.
     * If the stackName and artifactId are the same, it will just return that. Otherwise,
     * it will return something like "<artifactId> (<stackName>)"
     */
    readonly displayName: string;
    /**
     * The physical name of this stack.
     * @deprecated renamed to `stackName`
     */
    readonly name: string;
    readonly tags: any;
    private _template;
    constructor(assembly: CloudAssembly, artifactId: string, artifact: cxschema.ArtifactManifest);
    /**
     * The ROS template for this stack.
     */
    get template(): any;
    private tagsFromMetadata;
}
//# sourceMappingURL=ros-stack-artifact.d.ts.map