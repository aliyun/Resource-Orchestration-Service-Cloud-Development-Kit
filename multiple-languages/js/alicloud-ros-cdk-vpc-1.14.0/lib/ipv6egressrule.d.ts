import * as ros from '@alicloud/ros-cdk-core';
import { RosIpv6EgressRule } from './vpc.generated';
export { RosIpv6EgressRule as Ipv6EgressRuleProperty };
/**
 * Properties for defining a `Ipv6EgressRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6egressrule
 */
export interface Ipv6EgressRuleProps {
    /**
     * Property instanceId: The ID of the IPv6 address for which you want to create an egress-only rule.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property ipv6GatewayId: The ID of the IPv6 gateway.
     */
    readonly ipv6GatewayId: string | ros.IResolvable;
    /**
     * Property description: The description of the egress-only rule.
     * The description must be 0 to 256 characters in length and cannot start with `http:\/\/` or `https:\/\/`.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property instanceType: The type of the instance to which you want to apply the egress-only rule. Valid values:
     * *   IPv6Address (default)
     * *   IPv6Prefix.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * Property ipv6EgressRuleName: The name of the egress-only rule.
     * The name must be 0 to 128 characters in length and cannot start with `http:\/\/` or `https:\/\/`.
     */
    readonly ipv6EgressRuleName?: string | ros.IResolvable;
}
/**
 * Represents a `Ipv6EgressRule`.
 */
export interface IIpv6EgressRule extends ros.IResource {
    readonly props: Ipv6EgressRuleProps;
    /**
     * Attribute Description: The description of the egress-only rule.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the IPv6 address for which you want to create an egress-only rule.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceType: The type of the instance to which you want to apply the egress-only rule.
     */
    readonly attrInstanceType: ros.IResolvable | string;
    /**
     * Attribute Ipv6EgressRuleId: The ID of the egress-only rule that you want to delete.
     */
    readonly attrIpv6EgressRuleId: ros.IResolvable | string;
    /**
     * Attribute Ipv6EgressRuleName: The name of the egress-only rule.
     */
    readonly attrIpv6EgressRuleName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::Ipv6EgressRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpv6EgressRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6egressrule
 */
export declare class Ipv6EgressRule extends ros.Resource implements IIpv6EgressRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: Ipv6EgressRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Description: The description of the egress-only rule.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the IPv6 address for which you want to create an egress-only rule.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceType: The type of the instance to which you want to apply the egress-only rule.
     */
    readonly attrInstanceType: ros.IResolvable | string;
    /**
     * Attribute Ipv6EgressRuleId: The ID of the egress-only rule that you want to delete.
     */
    readonly attrIpv6EgressRuleId: ros.IResolvable | string;
    /**
     * Attribute Ipv6EgressRuleName: The name of the egress-only rule.
     */
    readonly attrIpv6EgressRuleName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Ipv6EgressRuleProps, enableResourcePropertyConstraint?: boolean);
}
