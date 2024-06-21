import * as ros from '@alicloud/ros-cdk-core';
import { RosPatchBaseline } from './oos.generated';
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::PatchBaseline`, which is used to query a patch baseline.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPatchBaseline`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
 */
export declare class PatchBaseline extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PatchBaselineProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ApprovalRules: Accept the rules.
     */
    readonly attrApprovalRules: ros.IResolvable;
    /**
     * Attribute ApprovedPatches: Approved patch list.
     */
    readonly attrApprovedPatches: ros.IResolvable;
    /**
     * Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
     */
    readonly attrApprovedPatchesEnableNonSecurity: ros.IResolvable;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute CreatedBy: Patch baseline creator.
     */
    readonly attrCreatedBy: ros.IResolvable;
    /**
     * Attribute Description: Patches baseline description information.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute IsDefault: Whether it is the default patch baseline.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * Attribute OperationSystem: Operating system type.
     */
    readonly attrOperationSystem: ros.IResolvable;
    /**
     * Attribute PatchBaselineId: Patch baseline ID.
     */
    readonly attrPatchBaselineId: ros.IResolvable;
    /**
     * Attribute PatchBaselineName: The name of the patch baseline.
     */
    readonly attrPatchBaselineName: ros.IResolvable;
    /**
     * Attribute RejectedPatches: Reject the name of the patch.
     */
    readonly attrRejectedPatches: ros.IResolvable;
    /**
     * Attribute RejectedPatchesAction: The operation of rejecting the patch.
     */
    readonly attrRejectedPatchesAction: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: Approve whether the patch includes updates other than security
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute ShareType: Patch baseline sharing type.
     */
    readonly attrShareType: ros.IResolvable;
    /**
     * Attribute Sources: Patch source configuration list.
     */
    readonly attrSources: ros.IResolvable;
    /**
     * Attribute Tags: Tags of patch baseline.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute UpdatedBy: Patch baseline updater.
     */
    readonly attrUpdatedBy: ros.IResolvable;
    /**
     * Attribute UpdatedDate: Update time.
     */
    readonly attrUpdatedDate: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PatchBaselineProps, enableResourcePropertyConstraint?: boolean);
}
