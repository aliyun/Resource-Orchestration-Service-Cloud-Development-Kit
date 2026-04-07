import * as ros from '@alicloud/ros-cdk-core';
import { RosPolicy } from './hbr.generated';
export { RosPolicy as PolicyProperty };
/**
 * Properties for defining a `Policy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy
 */
export interface PolicyProps {
    /**
     * Property policyName: The name of the policy.
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * Property policyType: The type of the policy.
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * Property rules: The rules of the policy.
     */
    readonly rules: Array<RosPolicy.RulesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property policyDescription: The description of the policy.
     */
    readonly policyDescription?: string | ros.IResolvable;
}
/**
 * Represents a `Policy`.
 */
export interface IPolicy extends ros.IResource {
    readonly props: PolicyProps;
    /**
     * Attribute PolicyId: The ID of the policy.
     */
    readonly attrPolicyId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::Policy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy
 */
export declare class Policy extends ros.Resource implements IPolicy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PolicyId: The ID of the policy.
     */
    readonly attrPolicyId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PolicyProps, enableResourcePropertyConstraint?: boolean);
}
