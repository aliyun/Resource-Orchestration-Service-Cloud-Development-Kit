import * as cxapi from '@alicloud/ros-cdk-cxapi';
import * as core from '@alicloud/ros-cdk-core';
export declare class SynthUtils {
    static synthesize(stack: core.Stack, options?: core.SynthesisOptions): cxapi.RosStackArtifact;
    /**
     * Synthesizes the stack and returns the resulting template.
     */
    static toRosTemplate(stack: core.Stack, options?: core.SynthesisOptions): any;
    /**
     * @returns Returns a subset of the synthesized template (only specific resource types).
     */
    static subset(stack: core.Stack, options: SubsetOptions): any;
}
export interface SubsetOptions {
    /**
     * Match all resources of the given type
     */
    resourceTypes?: string[];
}
