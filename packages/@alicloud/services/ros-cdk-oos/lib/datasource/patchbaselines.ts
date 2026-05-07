import * as ros from '@alicloud/ros-cdk-core';
import { RosPatchBaselines } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property shareType: Patch baseline sharing type.
     */
    readonly shareType?: string | ros.IResolvable;
}

/**
 * Represents a `PatchBaselines`.
 */
export interface IPatchBaselines extends ros.IResource {
    readonly props: PatchBaselinesProps;

    /**
     * Attribute PatchBaselineNames: The list of patch baseline names.
     */
    readonly attrPatchBaselineNames: ros.IResolvable | string;

    /**
     * Attribute PatchBaselines: The list of patch baselines.
     */
    readonly attrPatchBaselines: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::PatchBaselines`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPatchBaselines`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
 */
export class PatchBaselines extends ros.Resource implements IPatchBaselines {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PatchBaselinesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute PatchBaselineNames: The list of patch baseline names.
     */
    public readonly attrPatchBaselineNames: ros.IResolvable | string;

    /**
     * Attribute PatchBaselines: The list of patch baselines.
     */
    public readonly attrPatchBaselines: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PatchBaselinesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPatchBaselines = new RosPatchBaselines(this, id,  {
            patchBaselineName: props.patchBaselineName,
            operationSystem: props.operationSystem,
            shareType: props.shareType,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPatchBaselines;
        this.attrPatchBaselineNames = rosPatchBaselines.attrPatchBaselineNames;
        this.attrPatchBaselines = rosPatchBaselines.attrPatchBaselines;
    }
}
