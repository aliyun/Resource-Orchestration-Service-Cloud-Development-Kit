import * as cxapi from "@alicloud/ros-cdk-cxapi";
import { IConstruct, SynthesisOptions, ISynthesisSession } from "../construct-compat";
export declare function synthesize(root: IConstruct, options?: SynthesisOptions): cxapi.CloudAssembly;
/**
 * Interface for constructs that want to do something custom during synthesis
 *
 * This feature is intended for use by official ROS CDK libraries only; 3rd party
 * library authors and CDK users should not use this function.
 */
export interface ICustomSynthesis {
    /**
     * Called when the construct is synthesized
     */
    onSynthesize(session: ISynthesisSession): void;
}
export declare function addCustomSynthesis(construct: IConstruct, synthesis: ICustomSynthesis): void;
