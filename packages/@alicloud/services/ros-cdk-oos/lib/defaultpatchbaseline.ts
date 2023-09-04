import * as ros from '@alicloud/ros-cdk-core';
import { RosDefaultPatchBaseline } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDefaultPatchBaseline as DefaultPatchBaselineProperty };

/**
 * Properties for defining a `ALIYUN::OOS::DefaultPatchBaseline`
 */
export interface DefaultPatchBaselineProps {

    /**
     * Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::OOS::DefaultPatchBaseline`
 */
export class DefaultPatchBaseline extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    public readonly attrApprovalRules: ros.IResolvable;

    /**
     * Attribute CreatedBy: The creator of the patch baseline.
     */
    public readonly attrCreatedBy: ros.IResolvable;

    /**
     * Attribute CreatedDate: The time when the patch baseline was created.
     */
    public readonly attrCreatedDate: ros.IResolvable;

    /**
     * Attribute Description: The description of the patch baseline.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute OperationSystem: The type of the operating system.
     */
    public readonly attrOperationSystem: ros.IResolvable;

    /**
     * Attribute PatchBaselineId: The ID of the patch baseline.
     */
    public readonly attrPatchBaselineId: ros.IResolvable;

    /**
     * Attribute PatchBaselineName: The name of the patch baseline.
     */
    public readonly attrPatchBaselineName: ros.IResolvable;

    /**
     * Attribute ShareType: The share type of the patch baseline.
     */
    public readonly attrShareType: ros.IResolvable;

    /**
     * Attribute UpdatedBy: The user who last modified the patch baseline.
     */
    public readonly attrUpdatedBy: ros.IResolvable;

    /**
     * Attribute UpdatedDate: The time when the patch baseline was last modified.
     */
    public readonly attrUpdatedDate: ros.IResolvable;

    /**
     * Create a new `ALIYUN::OOS::DefaultPatchBaseline`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DefaultPatchBaselineProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDefaultPatchBaseline = new RosDefaultPatchBaseline(this, id,  {
            patchBaselineName: props.patchBaselineName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDefaultPatchBaseline;
        this.attrApprovalRules = rosDefaultPatchBaseline.attrApprovalRules;
        this.attrCreatedBy = rosDefaultPatchBaseline.attrCreatedBy;
        this.attrCreatedDate = rosDefaultPatchBaseline.attrCreatedDate;
        this.attrDescription = rosDefaultPatchBaseline.attrDescription;
        this.attrOperationSystem = rosDefaultPatchBaseline.attrOperationSystem;
        this.attrPatchBaselineId = rosDefaultPatchBaseline.attrPatchBaselineId;
        this.attrPatchBaselineName = rosDefaultPatchBaseline.attrPatchBaselineName;
        this.attrShareType = rosDefaultPatchBaseline.attrShareType;
        this.attrUpdatedBy = rosDefaultPatchBaseline.attrUpdatedBy;
        this.attrUpdatedDate = rosDefaultPatchBaseline.attrUpdatedDate;
    }
}
