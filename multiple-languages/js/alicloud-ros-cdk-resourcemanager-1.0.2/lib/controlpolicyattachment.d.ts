import * as ros from '@alicloud/ros-cdk-core';
import { RosControlPolicyAttachment } from './resourcemanager.generated';
export { RosControlPolicyAttachment as ControlPolicyAttachmentProperty };
/**
 * Properties for defining a `ALIYUN::ResourceManager::ControlPolicyAttachment`
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
 * A ROS resource type:  `ALIYUN::ResourceManager::ControlPolicyAttachment`
 */
export declare class ControlPolicyAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
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
     * Create a new `ALIYUN::ResourceManager::ControlPolicyAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ControlPolicyAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
