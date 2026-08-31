import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupEgress } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property destCidrIp: The destination IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
     */
    readonly destCidrIp?: string | ros.IResolvable;

    /**
     * Property destGroupId: The destination security group ID to which access permissions need to be set.
     * Set at least one of the DestGroupId, DestCidrIp, Ipv6DestCidrIp, or DestPrefixListId parameters.
     * - If DestGroupId is specified without the DestCidrIp parameter, the NicType parameter can only take the value intranet.
     * - If both DestGroupId and DestCidrIp are specified, DestCidrIp is assumed to prevail.
     * You should pay attention to:
     * - Enterprise Security groups do not support authorized security group access.
     * - The maximum number of authorized security groups supported by ordinary security groups is 20.
     */
    readonly destGroupId?: string | ros.IResolvable;

    /**
     * Property destGroupOwnerId: When setting security group rules across accounts, the Ali Cloud account ID of the destination security group.
     * - If neither DestGroupOwnerId nor DestGroupOwnerAccount is set, it is considered to set the access rights of your other security group.
     * - If you have set the parameter DestCidrIp, the parameter DestGroupOwnerId is invalid.
     */
    readonly destGroupOwnerId?: string | ros.IResolvable;

    /**
     * Property destPrefixListId: The ID of the destination prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
     * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
     * If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
     */
    readonly destPrefixListId?: string | ros.IResolvable;

    /**
     * Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set. CIDR format and IPv6 format IP address range are supported.
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
 * Represents a `SecurityGroupEgress`.
 */
export interface ISecurityGroupEgress extends ros.IResource {
    readonly props: SecurityGroupEgressProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::SecurityGroupEgress`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroupEgress`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegress
 */
export class SecurityGroupEgress extends ros.Resource implements ISecurityGroupEgress {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SecurityGroupEgressProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupEgressProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSecurityGroupEgress = new RosSecurityGroupEgress(this, id,  {
            policy: props.policy,
            portRange: props.portRange,
            description: props.description,
            destPrefixListId: props.destPrefixListId,
            priority: props.priority === undefined || props.priority === null ? 1 : props.priority,
            securityGroupId: props.securityGroupId,
            destGroupOwnerId: props.destGroupOwnerId,
            ipProtocol: props.ipProtocol,
            destCidrIp: props.destCidrIp,
            nicType: props.nicType,
            ipv6DestCidrIp: props.ipv6DestCidrIp,
            destGroupId: props.destGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroupEgress;
    }
}
