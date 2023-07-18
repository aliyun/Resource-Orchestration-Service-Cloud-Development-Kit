import * as ros from '@alicloud/ros-cdk-core';
import { RosPatchBaselines } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPatchBaselines as PatchBaselinesProperty };

/**
 * Properties for defining a `DATASOURCE::OOS::PatchBaselines`
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
 * A ROS resource type:  `DATASOURCE::OOS::PatchBaselines`
 */
export class PatchBaselines extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute PatchBaselineNames: The list of patch baseline names.
     */
    public readonly attrPatchBaselineNames: ros.IResolvable;

    /**
     * Attribute PatchBaselines: The list of patch baselines.
     */
    public readonly attrPatchBaselines: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::OOS::PatchBaselines`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PatchBaselinesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPatchBaselines = new RosPatchBaselines(this, id,  {
            patchBaselineName: props.patchBaselineName,
            operationSystem: props.operationSystem,
            shareType: props.shareType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPatchBaselines;
        this.attrPatchBaselineNames = rosPatchBaselines.attrPatchBaselineNames;
        this.attrPatchBaselines = rosPatchBaselines.attrPatchBaselines;
    }
}
