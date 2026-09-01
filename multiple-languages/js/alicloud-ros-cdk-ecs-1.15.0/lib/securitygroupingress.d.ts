import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupIngress } from './ecs.generated';
export { RosSecurityGroupIngress as SecurityGroupIngressProperty };
/**
 * Properties for defining a `SecurityGroupIngress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingress
 */
export interface SecurityGroupIngressProps {
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
     * Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    readonly ipv6SourceCidrIp?: string | ros.IResolvable;
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
    /**
     * Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
     */
    readonly sourceCidrIp?: string | ros.IResolvable;
    /**
     * Property sourceGroupId: Source Group Id
     */
    readonly sourceGroupId?: string | ros.IResolvable;
    /**
     * Property sourceGroupOwnerId: Source Group Owner Account ID
     */
    readonly sourceGroupOwnerId?: string | ros.IResolvable;
    /**
     * Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP\/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (\/). Correct example: 1\/200. Incorrect example: 200\/1.ICMP: -1\/-1.GRE: -1\/-1.ALL: -1\/-1.
     */
    readonly sourcePortRange?: string | ros.IResolvable;
    /**
     * Property sourcePrefixListId: The ID of the source prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
     * - If a security group is in the classic network, you cannot configure prefix lists in the security group rules.
     * - If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
     */
    readonly sourcePrefixListId?: string | ros.IResolvable;
}
/**
 * Represents a `SecurityGroupIngress`.
 */
export interface ISecurityGroupIngress extends ros.IResource {
    readonly props: SecurityGroupIngressProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::SecurityGroupIngress`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroupIngress`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingress
 */
export declare class SecurityGroupIngress extends ros.Resource implements ISecurityGroupIngress {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SecurityGroupIngressProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupIngressProps, enableResourcePropertyConstraint?: boolean);
}
