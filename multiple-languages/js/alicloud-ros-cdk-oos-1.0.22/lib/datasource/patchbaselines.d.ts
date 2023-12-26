import * as ros from '@alicloud/ros-cdk-core';
import { RosPatchBaselines } from './oos.generated';
export { RosPatchBaselines as PatchBaselinesProperty };
/**
 * Properties for defining a `PatchBaselines`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
 */
export interface PatchBaselinesProps {
    /**
     * Property operationSystem: Operating system type.
     */
    readonly operationSystem?: string | ros.IResolvable;
    /**
     * Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName?: string | ros.IResolvable;
    /**
     * Property shareType: Patch baseline sharing type.
     */
    readonly shareType?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::PatchBaselines`, which is used to query patch baselines.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPatchBaselines`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
 */
export declare class PatchBaselines extends ros.Resource {
    /**
     * Attribute PatchBaselineNames: The list of patch baseline names.
     */
    readonly attrPatchBaselineNames: ros.IResolvable;
    /**
     * Attribute PatchBaselines: The list of patch baselines.
     */
    readonly attrPatchBaselines: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: PatchBaselinesProps, enableResourcePropertyConstraint?: boolean);
}
