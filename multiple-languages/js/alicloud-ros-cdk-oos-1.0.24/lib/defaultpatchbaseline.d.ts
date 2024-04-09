import * as ros from '@alicloud/ros-cdk-core';
import { RosDefaultPatchBaseline } from './oos.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::DefaultPatchBaseline`, which is used to register a default patch baseline.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDefaultPatchBaseline`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-defaultpatchbaseline
 */
export declare class DefaultPatchBaseline extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DefaultPatchBaselineProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    readonly attrApprovalRules: ros.IResolvable;
    /**
     * Attribute CreatedBy: The creator of the patch baseline.
     */
    readonly attrCreatedBy: ros.IResolvable;
    /**
     * Attribute CreatedDate: The time when the patch baseline was created.
     */
    readonly attrCreatedDate: ros.IResolvable;
    /**
     * Attribute Description: The description of the patch baseline.
     */
    readonly attrDescription: ros.IResolvable;
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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DefaultPatchBaselineProps, enableResourcePropertyConstraint?: boolean);
}
