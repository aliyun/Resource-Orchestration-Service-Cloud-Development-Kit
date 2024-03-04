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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::PatchBaseline`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPatchBaseline`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
 */
export class PatchBaseline extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PatchBaselineProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ApprovalRules: Accept the rules.
     */
    public readonly attrApprovalRules: ros.IResolvable;

    /**
     * Attribute ApprovedPatches: Approved patch list.
     */
    public readonly attrApprovedPatches: ros.IResolvable;

    /**
     * Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
     */
    public readonly attrApprovedPatchesEnableNonSecurity: ros.IResolvable;

    /**
     * Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute CreatedBy: Patch baseline creator.
     */
    public readonly attrCreatedBy: ros.IResolvable;

    /**
     * Attribute Description: Patches baseline description information.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute IsDefault: Whether it is the default patch baseline.
     */
    public readonly attrIsDefault: ros.IResolvable;

    /**
     * Attribute OperationSystem: Operating system type.
     */
    public readonly attrOperationSystem: ros.IResolvable;

    /**
     * Attribute PatchBaselineId: Patch baseline ID.
     */
    public readonly attrPatchBaselineId: ros.IResolvable;

    /**
     * Attribute PatchBaselineName: The name of the patch baseline.
     */
    public readonly attrPatchBaselineName: ros.IResolvable;

    /**
     * Attribute RejectedPatches: Reject the name of the patch.
     */
    public readonly attrRejectedPatches: ros.IResolvable;

    /**
     * Attribute RejectedPatchesAction: The operation of rejecting the patch.
     */
    public readonly attrRejectedPatchesAction: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: Approve whether the patch includes updates other than security
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute ShareType: Patch baseline sharing type.
     */
    public readonly attrShareType: ros.IResolvable;

    /**
     * Attribute Sources: Patch source configuration list.
     */
    public readonly attrSources: ros.IResolvable;

    /**
     * Attribute Tags: Tags of patch baseline.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute UpdatedBy: Patch baseline updater.
     */
    public readonly attrUpdatedBy: ros.IResolvable;

    /**
     * Attribute UpdatedDate: Update time.
     */
    public readonly attrUpdatedDate: ros.IResolvable;

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
