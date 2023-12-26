import * as ros from '@alicloud/ros-cdk-core';
import { RosPatchBaseline } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPatchBaseline as PatchBaselineProperty };

/**
 * Properties for defining a `PatchBaseline`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-patchbaseline
 */
export interface PatchBaselineProps {

    /**
     * Property approvalRules: The rules of scanning and installing patches for the specified operating system.
     */
    readonly approvalRules: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property operationSystem: The type of the operating system.
     */
    readonly operationSystem: string | ros.IResolvable;

    /**
     * Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName: string | ros.IResolvable;

    /**
     * Property description: The description of the patch baseline.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::PatchBaseline`, which is used to create a patch baseline.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPatchBaseline`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-patchbaseline
 */
export class PatchBaseline extends ros.Resource {

    /**
     * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    public readonly attrApprovalRules: ros.IResolvable;

    /**
     * Attribute CreateTime: The time when the patch baseline was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute CreatedBy: The creator of the patch baseline.
     */
    public readonly attrCreatedBy: ros.IResolvable;

    /**
     * Attribute Description: The description of the patch baseline.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute IsDefault: Indicates whether the patch baseline is set as the default patch baseline.
     */
    public readonly attrIsDefault: ros.IResolvable;

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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PatchBaselineProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPatchBaseline = new RosPatchBaseline(this, id,  {
            description: props.description,
            patchBaselineName: props.patchBaselineName,
            operationSystem: props.operationSystem,
            approvalRules: props.approvalRules,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPatchBaseline;
        this.attrApprovalRules = rosPatchBaseline.attrApprovalRules;
        this.attrCreateTime = rosPatchBaseline.attrCreateTime;
        this.attrCreatedBy = rosPatchBaseline.attrCreatedBy;
        this.attrDescription = rosPatchBaseline.attrDescription;
        this.attrIsDefault = rosPatchBaseline.attrIsDefault;
        this.attrOperationSystem = rosPatchBaseline.attrOperationSystem;
        this.attrPatchBaselineId = rosPatchBaseline.attrPatchBaselineId;
        this.attrPatchBaselineName = rosPatchBaseline.attrPatchBaselineName;
        this.attrShareType = rosPatchBaseline.attrShareType;
        this.attrUpdatedBy = rosPatchBaseline.attrUpdatedBy;
        this.attrUpdatedDate = rosPatchBaseline.attrUpdatedDate;
    }
}
