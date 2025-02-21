import * as ros from '@alicloud/ros-cdk-core';
import { RosControlPolicy } from './resourcemanager.generated';
export { RosControlPolicy as ControlPolicyProperty };
/**
 * Properties for defining a `ControlPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
 */
export interface ControlPolicyProps {
    /**
     * Property controlPolicyName: PolicyName
     */
    readonly controlPolicyName: string | ros.IResolvable;
    /**
     * Property effectScope: EffectScope
     */
    readonly effectScope: string | ros.IResolvable;
    /**
     * Property policyDocument: PolicyDocument
     */
    readonly policyDocument: string | ros.IResolvable;
    /**
     * Property description: Description
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * Represents a `ControlPolicy`.
 */
export interface IControlPolicy extends ros.IResource {
    readonly props: ControlPolicyProps;
    /**
     * Attribute AttachmentCount: AttachmentCount
     */
    readonly attrAttachmentCount: ros.IResolvable | string;
    /**
     * Attribute ControlPolicyName: PolicyName
     */
    readonly attrControlPolicyName: ros.IResolvable | string;
    /**
     * Attribute Description: Description
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EffectScope: EffectScope
     */
    readonly attrEffectScope: ros.IResolvable | string;
    /**
     * Attribute PolicyDocument: PolicyDocument
     */
    readonly attrPolicyDocument: ros.IResolvable | string;
    /**
     * Attribute PolicyId: PolicyId
     */
    readonly attrPolicyId: ros.IResolvable | string;
    /**
     * Attribute PolicyType: PolicyType
     */
    readonly attrPolicyType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::ControlPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosControlPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
 */
export declare class ControlPolicy extends ros.Resource implements IControlPolicy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ControlPolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AttachmentCount: AttachmentCount
     */
    readonly attrAttachmentCount: ros.IResolvable | string;
    /**
     * Attribute ControlPolicyName: PolicyName
     */
    readonly attrControlPolicyName: ros.IResolvable | string;
    /**
     * Attribute Description: Description
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EffectScope: EffectScope
     */
    readonly attrEffectScope: ros.IResolvable | string;
    /**
     * Attribute PolicyDocument: PolicyDocument
     */
    readonly attrPolicyDocument: ros.IResolvable | string;
    /**
     * Attribute PolicyId: PolicyId
     */
    readonly attrPolicyId: ros.IResolvable | string;
    /**
     * Attribute PolicyType: PolicyType
     */
    readonly attrPolicyType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ControlPolicyProps, enableResourcePropertyConstraint?: boolean);
}
