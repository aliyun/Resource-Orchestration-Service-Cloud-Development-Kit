import * as ros from '@alicloud/ros-cdk-core';
import { RosDefaultPatchBaseline } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDefaultPatchBaseline as DefaultPatchBaselineProperty };

/**
 * Properties for defining a `DefaultPatchBaseline`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-defaultpatchbaseline
 */
export interface DefaultPatchBaselineProps {

    /**
     * Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName: string | ros.IResolvable;
}

/**
 * Represents a `DefaultPatchBaseline`.
 */
export interface IDefaultPatchBaseline extends ros.IResource {
    readonly props: DefaultPatchBaselineProps;

    /**
     * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    readonly attrApprovalRules: ros.IResolvable | string;

    /**
     * Attribute CreatedBy: The creator of the patch baseline.
     */
    readonly attrCreatedBy: ros.IResolvable | string;

    /**
     * Attribute CreatedDate: The time when the patch baseline was created.
     */
    readonly attrCreatedDate: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the patch baseline.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute OperationSystem: The type of the operating system.
     */
    readonly attrOperationSystem: ros.IResolvable | string;

    /**
     * Attribute PatchBaselineId: The ID of the patch baseline.
     */
    readonly attrPatchBaselineId: ros.IResolvable | string;

    /**
     * Attribute PatchBaselineName: The name of the patch baseline.
     */
    readonly attrPatchBaselineName: ros.IResolvable | string;

    /**
     * Attribute ShareType: The share type of the patch baseline.
     */
    readonly attrShareType: ros.IResolvable | string;

    /**
     * Attribute UpdatedBy: The user who last modified the patch baseline.
     */
    readonly attrUpdatedBy: ros.IResolvable | string;

    /**
     * Attribute UpdatedDate: The time when the patch baseline was last modified.
     */
    readonly attrUpdatedDate: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::DefaultPatchBaseline`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDefaultPatchBaseline`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-defaultpatchbaseline
 */
export class DefaultPatchBaseline extends ros.Resource implements IDefaultPatchBaseline {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DefaultPatchBaselineProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    public readonly attrApprovalRules: ros.IResolvable | string;

    /**
     * Attribute CreatedBy: The creator of the patch baseline.
     */
    public readonly attrCreatedBy: ros.IResolvable | string;

    /**
     * Attribute CreatedDate: The time when the patch baseline was created.
     */
    public readonly attrCreatedDate: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the patch baseline.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute OperationSystem: The type of the operating system.
     */
    public readonly attrOperationSystem: ros.IResolvable | string;

    /**
     * Attribute PatchBaselineId: The ID of the patch baseline.
     */
    public readonly attrPatchBaselineId: ros.IResolvable | string;

    /**
     * Attribute PatchBaselineName: The name of the patch baseline.
     */
    public readonly attrPatchBaselineName: ros.IResolvable | string;

    /**
     * Attribute ShareType: The share type of the patch baseline.
     */
    public readonly attrShareType: ros.IResolvable | string;

    /**
     * Attribute UpdatedBy: The user who last modified the patch baseline.
     */
    public readonly attrUpdatedBy: ros.IResolvable | string;

    /**
     * Attribute UpdatedDate: The time when the patch baseline was last modified.
     */
    public readonly attrUpdatedDate: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DefaultPatchBaselineProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
