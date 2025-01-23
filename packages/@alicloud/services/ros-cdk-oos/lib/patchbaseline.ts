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
     * Property approvedPatches: Approved patch list.
     */
    readonly approvedPatches?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property approvedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
     */
    readonly approvedPatchesEnableNonSecurity?: boolean | ros.IResolvable;

    /**
     * Property description: The description of the patch baseline.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property rejectedPatches: Rejected patch list.
     */
    readonly rejectedPatches?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property rejectedPatchesAction: The operation of rejecting the patch.
     */
    readonly rejectedPatchesAction?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property sources: Patch source configuration list.
     */
    readonly sources?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property tags: Tags of patch baseline.
     */
    readonly tags?: RosPatchBaseline.TagsProperty[];
}

/**
 * Represents a `PatchBaseline`.
 */
export interface IPatchBaseline extends ros.IResource {
    readonly props: PatchBaselineProps;

    /**
     * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    readonly attrApprovalRules: ros.IResolvable | string;

    /**
     * Attribute ApprovedPatches: Approved patch list.
     */
    readonly attrApprovedPatches: ros.IResolvable | string;

    /**
     * Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
     */
    readonly attrApprovedPatchesEnableNonSecurity: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the patch baseline was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreatedBy: The creator of the patch baseline.
     */
    readonly attrCreatedBy: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the patch baseline.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute IsDefault: Indicates whether the patch baseline is set as the default patch baseline.
     */
    readonly attrIsDefault: ros.IResolvable | string;

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
     * Attribute RejectedPatches: Reject the name of the patch.
     */
    readonly attrRejectedPatches: ros.IResolvable | string;

    /**
     * Attribute RejectedPatchesAction: The ID of the resource group.
     */
    readonly attrRejectedPatchesAction: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: Approve whether the patch includes updates other than security
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute ShareType: The share type of the patch baseline.
     */
    readonly attrShareType: ros.IResolvable | string;

    /**
     * Attribute Sources: Patch source configuration list.
     */
    readonly attrSources: ros.IResolvable | string;

    /**
     * Attribute Tags: Tags of patch baseline.
     */
    readonly attrTags: ros.IResolvable | string;

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
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::PatchBaseline`, which is used to create a patch baseline.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPatchBaseline`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-patchbaseline
 */
export class PatchBaseline extends ros.Resource implements IPatchBaseline {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PatchBaselineProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    public readonly attrApprovalRules: ros.IResolvable | string;

    /**
     * Attribute ApprovedPatches: Approved patch list.
     */
    public readonly attrApprovedPatches: ros.IResolvable | string;

    /**
     * Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
     */
    public readonly attrApprovedPatchesEnableNonSecurity: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the patch baseline was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreatedBy: The creator of the patch baseline.
     */
    public readonly attrCreatedBy: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the patch baseline.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute IsDefault: Indicates whether the patch baseline is set as the default patch baseline.
     */
    public readonly attrIsDefault: ros.IResolvable | string;

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
     * Attribute RejectedPatches: Reject the name of the patch.
     */
    public readonly attrRejectedPatches: ros.IResolvable | string;

    /**
     * Attribute RejectedPatchesAction: The ID of the resource group.
     */
    public readonly attrRejectedPatchesAction: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: Approve whether the patch includes updates other than security
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute ShareType: The share type of the patch baseline.
     */
    public readonly attrShareType: ros.IResolvable | string;

    /**
     * Attribute Sources: Patch source configuration list.
     */
    public readonly attrSources: ros.IResolvable | string;

    /**
     * Attribute Tags: Tags of patch baseline.
     */
    public readonly attrTags: ros.IResolvable | string;

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
    constructor(scope: ros.Construct, id: string, props: PatchBaselineProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPatchBaseline = new RosPatchBaseline(this, id,  {
            approvedPatches: props.approvedPatches,
            rejectedPatchesAction: props.rejectedPatchesAction,
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            patchBaselineName: props.patchBaselineName,
            approvedPatchesEnableNonSecurity: props.approvedPatchesEnableNonSecurity,
            operationSystem: props.operationSystem,
            approvalRules: props.approvalRules,
            sources: props.sources,
            tags: props.tags,
            rejectedPatches: props.rejectedPatches,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPatchBaseline;
        this.attrApprovalRules = rosPatchBaseline.attrApprovalRules;
        this.attrApprovedPatches = rosPatchBaseline.attrApprovedPatches;
        this.attrApprovedPatchesEnableNonSecurity = rosPatchBaseline.attrApprovedPatchesEnableNonSecurity;
        this.attrCreateTime = rosPatchBaseline.attrCreateTime;
        this.attrCreatedBy = rosPatchBaseline.attrCreatedBy;
        this.attrDescription = rosPatchBaseline.attrDescription;
        this.attrIsDefault = rosPatchBaseline.attrIsDefault;
        this.attrOperationSystem = rosPatchBaseline.attrOperationSystem;
        this.attrPatchBaselineId = rosPatchBaseline.attrPatchBaselineId;
        this.attrPatchBaselineName = rosPatchBaseline.attrPatchBaselineName;
        this.attrRejectedPatches = rosPatchBaseline.attrRejectedPatches;
        this.attrRejectedPatchesAction = rosPatchBaseline.attrRejectedPatchesAction;
        this.attrResourceGroupId = rosPatchBaseline.attrResourceGroupId;
        this.attrShareType = rosPatchBaseline.attrShareType;
        this.attrSources = rosPatchBaseline.attrSources;
        this.attrTags = rosPatchBaseline.attrTags;
        this.attrUpdatedBy = rosPatchBaseline.attrUpdatedBy;
        this.attrUpdatedDate = rosPatchBaseline.attrUpdatedDate;
    }
}
