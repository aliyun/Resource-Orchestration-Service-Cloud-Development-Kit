import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupIngress } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityGroupIngress as SecurityGroupIngressProperty };

/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroupIngress`
 */
export interface SecurityGroupIngressProps {

    /**
     * Property ipProtocol: Ip protocol for in rule.
     */
    readonly ipProtocol: string | ros.IResolvable;

    /**
     * Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
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
     * Property sourceCidrIp: Source CIDR Ip Address range. Only IPV4 supported.
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
     * Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
     */
    readonly sourcePortRange?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::SecurityGroupIngress`
 */
export class SecurityGroupIngress extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::ECS::SecurityGroupIngress`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupIngressProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSecurityGroupIngress = new RosSecurityGroupIngress(this, id,  {
            sourceGroupId: props.sourceGroupId,
            policy: props.policy,
            portRange: props.portRange,
            description: props.description,
            sourcePortRange: props.sourcePortRange,
            priority: props.priority === undefined || props.priority === null ? 1 : props.priority,
            securityGroupId: props.securityGroupId,
            sourceCidrIp: props.sourceCidrIp,
            sourceGroupOwnerId: props.sourceGroupOwnerId,
            ipProtocol: props.ipProtocol,
            ipv6SourceCidrIp: props.ipv6SourceCidrIp,
            nicType: props.nicType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroupIngress;
    }
}
