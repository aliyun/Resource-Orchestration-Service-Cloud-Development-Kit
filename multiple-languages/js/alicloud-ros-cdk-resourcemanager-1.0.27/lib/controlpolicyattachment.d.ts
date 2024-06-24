import * as ros from '@alicloud/ros-cdk-core';
import { RosControlPolicyAttachment } from './resourcemanager.generated';
export { RosControlPolicyAttachment as ControlPolicyAttachmentProperty };
/**
 * Properties for defining a `ControlPolicyAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicyattachment
 */
export interface ControlPolicyAttachmentProps {
    /**
     * Property policyId: PolicyId
     */
    readonly policyId: string | ros.IResolvable;
    /**
     * Property targetId: TargetId
     */
    readonly targetId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::ControlPolicyAttachment`, which is used to attach a custom control policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosControlPolicyAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicyattachment
 */
export declare class ControlPolicyAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ControlPolicyAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AttachDate: AttachDate
     */
    readonly attrAttachDate: ros.IResolvable;
    /**
     * Attribute Description: Description
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute PolicyId: PolicyId
     */
    readonly attrPolicyId: ros.IResolvable;
    /**
     * Attribute PolicyName: PolicyName
     */
    readonly attrPolicyName: ros.IResolvable;
    /**
     * Attribute PolicyType: PolicyType
     */
    readonly attrPolicyType: ros.IResolvable;
    /**
     * Attribute TargetId: TargetId
     */
    readonly attrTargetId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ControlPolicyAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
