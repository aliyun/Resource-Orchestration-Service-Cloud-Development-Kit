import * as ros from '@alicloud/ros-cdk-core';
import { RosPolicy } from './kms.generated';
export { RosPolicy as PolicyProperty };
/**
 * Properties for defining a `Policy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policy
 */
export interface PolicyProps {
    /**
     * Property policyName: The name of the permission policy.
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Policy`.
 */
export interface IPolicy extends ros.IResource {
    readonly props: PolicyProps;
    /**
     * Attribute Description: The policy description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute KmsInstanceId: KMS instance accessed by this policy.
     */
    readonly attrKmsInstanceId: ros.IResolvable | string;
    /**
     * Attribute NetworkRules: The network access rule that is associated with the permission policy.
     */
    readonly attrNetworkRules: ros.IResolvable | string;
    /**
     * Attribute Permissions: A list of operations that can be performed.
     */
    readonly attrPermissions: ros.IResolvable | string;
    /**
     * Attribute PolicyName: The name of the permission policy.
     */
    readonly attrPolicyName: ros.IResolvable | string;
    /**
     * Attribute Resources: A list of keys and secrets that are allowed to access.
     */
    readonly attrResources: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KMS::Policy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policy
 */
export declare class Policy extends ros.Resource implements IPolicy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Description: The policy description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute KmsInstanceId: KMS instance accessed by this policy.
     */
    readonly attrKmsInstanceId: ros.IResolvable | string;
    /**
     * Attribute NetworkRules: The network access rule that is associated with the permission policy.
     */
    readonly attrNetworkRules: ros.IResolvable | string;
    /**
     * Attribute Permissions: A list of operations that can be performed.
     */
    readonly attrPermissions: ros.IResolvable | string;
    /**
     * Attribute PolicyName: The name of the permission policy.
     */
    readonly attrPolicyName: ros.IResolvable | string;
    /**
     * Attribute Resources: A list of keys and secrets that are allowed to access.
     */
    readonly attrResources: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PolicyProps, enableResourcePropertyConstraint?: boolean);
}
