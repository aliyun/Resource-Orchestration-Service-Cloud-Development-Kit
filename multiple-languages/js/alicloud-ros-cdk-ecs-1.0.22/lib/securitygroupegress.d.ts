import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupEgress } from './ecs.generated';
export { RosSecurityGroupEgress as SecurityGroupEgressProperty };
/**
 * Properties for defining a `SecurityGroupEgress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegress
 */
export interface SecurityGroupEgressProps {
    /**
     * Property ipProtocol: Ip protocol for in rule.
     */
    readonly ipProtocol: string | ros.IResolvable;
    /**
     * Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1\/200'For icmp|gre|all protocel, the port range should be '-1\/-1'
     */
    readonly portRange: string | ros.IResolvable;
    /**
     * Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property destCidrIp: Dest CIDR Ip Address range. Only IPV4 supported.
     */
    readonly destCidrIp?: string | ros.IResolvable;
    /**
     * Property destGroupId: Dest Group Id
     */
    readonly destGroupId?: string | ros.IResolvable;
    /**
     * Property destGroupOwnerId: Dest Group Owner Account ID
     */
    readonly destGroupOwnerId?: string | ros.IResolvable;
    /**
     * Property destPrefixListId: The ID of the destination prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
     * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
     * If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
     */
    readonly destPrefixListId?: string | ros.IResolvable;
    /**
     * Property ipv6DestCidrIp: Destination IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    readonly ipv6DestCidrIp?: string | ros.IResolvable;
    /**
     * Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    readonly nicType?: string | ros.IResolvable;
    /**
     * Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    readonly policy?: string | ros.IResolvable;
    /**
     * Property priority: Authorization policies priority range[1, 100]
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * Property securityGroupId: Id of the security group.
     */
    readonly securityGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::SecurityGroupEgress`, which is used to create an outbound access rule for a security group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroupEgress`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegress
 */
export declare class SecurityGroupEgress extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupEgressProps, enableResourcePropertyConstraint?: boolean);
}
