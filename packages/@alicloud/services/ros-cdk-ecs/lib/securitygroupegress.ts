import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupEgress } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityGroupEgress as SecurityGroupEgressProperty };

/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroupEgress`
 */
export interface SecurityGroupEgressProps {

    /**
     * Property ipProtocol: Ip protocol for in rule.
     */
    readonly ipProtocol: string;

    /**
     * Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
     */
    readonly portRange: string;

    /**
     * Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    readonly description?: string;

    /**
     * Property destCidrIp: Dest CIDR Ip Address range. Only IPV4 supported.
     */
    readonly destCidrIp?: string;

    /**
     * Property destGroupId: Dest Group Id
     */
    readonly destGroupId?: string;

    /**
     * Property destGroupOwnerId: Dest Group Owner Account ID
     */
    readonly destGroupOwnerId?: string;

    /**
     * Property ipv6DestCidrIp: Destination IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    readonly ipv6DestCidrIp?: string;

    /**
     * Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    readonly nicType?: string;

    /**
     * Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    readonly policy?: string;

    /**
     * Property priority: Authorization policies priority range[1, 100]
     */
    readonly priority?: number;

    /**
     * Property securityGroupId: Id of the security group.
     */
    readonly securityGroupId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::SecurityGroupEgress`
 */
export class SecurityGroupEgress extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::ECS::SecurityGroupEgress`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupEgressProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSecurityGroupEgress = new RosSecurityGroupEgress(this, id,  {
            policy: props.policy,
            portRange: props.portRange,
            description: props.description,
            priority: props.priority ? props.priority : 1,
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
