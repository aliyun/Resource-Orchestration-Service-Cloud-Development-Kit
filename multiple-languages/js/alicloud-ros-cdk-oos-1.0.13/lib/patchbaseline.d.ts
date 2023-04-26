import * as ros from '@alicloud/ros-cdk-core';
import { RosPatchBaseline } from './oos.generated';
export { RosPatchBaseline as PatchBaselineProperty };
/**
 * Properties for defining a `ALIYUN::OOS::PatchBaseline`
 */
export interface PatchBaselineProps {
    /**
     * Property approvalRules: The rules of scanning and installing patches for the specified operating system.
     */
    readonly approvalRules: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
 * A ROS resource type:  `ALIYUN::OOS::PatchBaseline`
 */
export declare class PatchBaseline extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    readonly attrApprovalRules: ros.IResolvable;
    /**
     * Attribute CreateTime: The time when the patch baseline was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute CreatedBy: The creator of the patch baseline.
     */
    readonly attrCreatedBy: ros.IResolvable;
    /**
     * Attribute Description: The description of the patch baseline.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute IsDefault: Indicates whether the patch baseline is set as the default patch baseline.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * Attribute OperationSystem: The type of the operating system.
     */
    readonly attrOperationSystem: ros.IResolvable;
    /**
     * Attribute PatchBaselineId: The ID of the patch baseline.
     */
    readonly attrPatchBaselineId: ros.IResolvable;
    /**
     * Attribute PatchBaselineName: The name of the patch baseline.
     */
    readonly attrPatchBaselineName: ros.IResolvable;
    /**
     * Attribute ShareType: The share type of the patch baseline.
     */
    readonly attrShareType: ros.IResolvable;
    /**
     * Attribute UpdatedBy: The user who last modified the patch baseline.
     */
    readonly attrUpdatedBy: ros.IResolvable;
    /**
     * Attribute UpdatedDate: The time when the patch baseline was last modified.
     */
    readonly attrUpdatedDate: ros.IResolvable;
    /**
     * Create a new `ALIYUN::OOS::PatchBaseline`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PatchBaselineProps, enableResourcePropertyConstraint?: boolean);
}
