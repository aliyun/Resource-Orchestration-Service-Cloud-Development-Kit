import * as ros from '@alicloud/ros-cdk-core';
import { RosPatchBaseline } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPatchBaseline as PatchBaselineProperty };

/**
 * Properties for defining a `PatchBaseline`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
 */
export interface PatchBaselineProps {

    /**
     * Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `PatchBaseline`.
 */
export interface IPatchBaseline extends ros.IResource {
    readonly props: PatchBaselineProps;

    /**
     * Attribute ApprovalRules: Accept the rules.
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
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreatedBy: Patch baseline creator.
     */
    readonly attrCreatedBy: ros.IResolvable | string;

    /**
     * Attribute Description: Patches baseline description information.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute IsDefault: Whether it is the default patch baseline.
     */
    readonly attrIsDefault: ros.IResolvable | string;

    /**
     * Attribute OperationSystem: Operating system type.
     */
    readonly attrOperationSystem: ros.IResolvable | string;

    /**
     * Attribute PatchBaselineId: Patch baseline ID.
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
     * Attribute RejectedPatchesAction: The operation of rejecting the patch.
     */
    readonly attrRejectedPatchesAction: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: Approve whether the patch includes updates other than security
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute ShareType: Patch baseline sharing type.
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
     * Attribute UpdatedBy: Patch baseline updater.
     */
    readonly attrUpdatedBy: ros.IResolvable | string;

    /**
     * Attribute UpdatedDate: Update time.
     */
    readonly attrUpdatedDate: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::PatchBaseline`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPatchBaseline`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
 */
export class PatchBaseline extends ros.Resource implements IPatchBaseline {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PatchBaselineProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ApprovalRules: Accept the rules.
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
     * Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreatedBy: Patch baseline creator.
     */
    public readonly attrCreatedBy: ros.IResolvable | string;

    /**
     * Attribute Description: Patches baseline description information.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute IsDefault: Whether it is the default patch baseline.
     */
    public readonly attrIsDefault: ros.IResolvable | string;

    /**
     * Attribute OperationSystem: Operating system type.
     */
    public readonly attrOperationSystem: ros.IResolvable | string;

    /**
     * Attribute PatchBaselineId: Patch baseline ID.
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
     * Attribute RejectedPatchesAction: The operation of rejecting the patch.
     */
    public readonly attrRejectedPatchesAction: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: Approve whether the patch includes updates other than security
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute ShareType: Patch baseline sharing type.
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
     * Attribute UpdatedBy: Patch baseline updater.
     */
    public readonly attrUpdatedBy: ros.IResolvable | string;

    /**
     * Attribute UpdatedDate: Update time.
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
            patchBaselineName: props.patchBaselineName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
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
