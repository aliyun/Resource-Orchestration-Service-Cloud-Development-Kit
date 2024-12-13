import * as ros from '@alicloud/ros-cdk-core';
import { RosNatFirewallControlPolicy } from './cloudfw.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNatFirewallControlPolicy as NatFirewallControlPolicyProperty };

/**
 * Properties for defining a `NatFirewallControlPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
 */
export interface NatFirewallControlPolicyProps {

    /**
     * Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values:
     * accept: allows the traffic.
     * drop: denies the traffic.
     * log: monitors the traffic.
     */
    readonly aclAction: string | ros.IResolvable;

    /**
     * Property applicationNameList: The application types supported by the access control policy.
     */
    readonly applicationNameList: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property description: The description of the access control policy.
     */
    readonly description: string | ros.IResolvable;

    /**
     * Property destination: The destination address in the access control policy.
     * Valid values:
     * If DestinationType is set to net, the value of this parameter is a CIDR block.
     * Example: 1.2.XX.XX\/24
     * If DestinationType is set to group, the value of this parameter is an address book.
     * Example: db_group
     * If DestinationType is set to domain, the value of this parameter is a domain name.
     * Example: *.aliyuncs.com
     * DestinationType is set to location, the value of this parameter is a location.
     * Example: ["BJ11", "ZB"]
     */
    readonly destination: string | ros.IResolvable;

    /**
     * Property destinationType: The type of the destination address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     * domain: domain name
     */
    readonly destinationType: string | ros.IResolvable;

    /**
     * Property direction: The direction of the traffic to which the access control policy applies. Valid values:
     * out: outbound traffic
     */
    readonly direction: string | ros.IResolvable;

    /**
     * Property natGatewayId: The ID of the NAT gateway.
     */
    readonly natGatewayId: string | ros.IResolvable;

    /**
     * Property newOrder: The priority of the access control policy. The priority value starts from 1. A small priority value indicates a high priority.
     */
    readonly newOrder: number | ros.IResolvable;

    /**
     * Property proto: The protocol type in the access control policy.Valid values:
     * ANY: all types of protocols
     * TCP
     * UDP
     * ICMP
     */
    readonly proto: string | ros.IResolvable;

    /**
     * Property source: The source address in the access control policy.Valid values:
     * If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0\/24
     * If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group
     */
    readonly source: string | ros.IResolvable;

    /**
     * Property sourceType: The type of the source address in the access control policy.Valid values:
     * net: source CIDR block
     * group: source address book
     */
    readonly sourceType: string | ros.IResolvable;

    /**
     * Property destPort: The destination port in the access control policy. Valid values:
     * If Proto is set to ICMP, DestPort is automatically left empty.
     * If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
     * If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
     */
    readonly destPort?: number | ros.IResolvable;

    /**
     * Property destPortGroup: The name of the destination port address book in the access control policy.
     */
    readonly destPortGroup?: string | ros.IResolvable;

    /**
     * Property destPortType: The type of the destination port in the access control policy. Valid values:
     * net: source CIDR block
     * group: source address book
     */
    readonly destPortType?: string | ros.IResolvable;

    /**
     * Property domainResolveType: The domain name resolution method of the access control policy. Valid values:
     * 0: fully qualified domain name (FQDN)-based resolution
     * 1: Domain Name System (DNS)-based dynamic resolution
     * 2: FQDN and DNS-based dynamic resolution
     */
    readonly domainResolveType?: number | ros.IResolvable;

    /**
     * Property endTime: The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
     */
    readonly endTime?: string | ros.IResolvable;

    /**
     * Property ipVersion: The IP version supported by the access control policy. Valid values:
     * 4: IPv4 (default)
     */
    readonly ipVersion?: number | ros.IResolvable;

    /**
     * Property release: Specifies whether to enable the access control policy. By default, an access control policy is enabled after it is created. Valid values:
     * true
     * false
     */
    readonly release?: boolean | ros.IResolvable;

    /**
     * Property repeatDays: The days of a week or of a month on which the access control policy takes effect.
     * If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: [].
     * If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
     * If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
     */
    readonly repeatDays?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property repeatEndTime: The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
     */
    readonly repeatEndTime?: string | ros.IResolvable;

    /**
     * Property repeatStartTime: The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
     */
    readonly repeatStartTime?: string | ros.IResolvable;

    /**
     * Property repeatType: The recurrence type for the access control policy to take effect. Valid values:
     * Permanent (default): The policy always takes effect.
     * None: The policy takes effect for only once.
     * Daily: The policy takes effect on a daily basis.
     * Weekly: The policy takes effect on a weekly basis.
     * Monthly: The policy takes effect on a monthly basis.
     */
    readonly repeatType?: string | ros.IResolvable;

    /**
     * Property startTime: The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
     */
    readonly startTime?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CLOUDFW::NatFirewallControlPolicy`, which is used to add an access control policy for a NAT firewall.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNatFirewallControlPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
 */
export class NatFirewallControlPolicy extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NatFirewallControlPolicyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AclUuid: The unique ID of the access control policy.
     */
    public readonly attrAclUuid: ros.IResolvable;

    /**
     * Attribute Direction: The direction of the traffic to which the access control policy applies.
     */
    public readonly attrDirection: ros.IResolvable;

    /**
     * Attribute NatGatewayId: The ID of the NAT gateway.
     */
    public readonly attrNatGatewayId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NatFirewallControlPolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNatFirewallControlPolicy = new RosNatFirewallControlPolicy(this, id,  {
            destination: props.destination,
            description: props.description,
            endTime: props.endTime,
            ipVersion: props.ipVersion === undefined || props.ipVersion === null ? 4 : props.ipVersion,
            sourceType: props.sourceType,
            destPort: props.destPort,
            applicationNameList: props.applicationNameList,
            startTime: props.startTime,
            aclAction: props.aclAction,
            destinationType: props.destinationType,
            direction: props.direction === undefined || props.direction === null ? 'out' : props.direction,
            source: props.source,
            destPortType: props.destPortType,
            proto: props.proto,
            repeatEndTime: props.repeatEndTime,
            domainResolveType: props.domainResolveType,
            repeatDays: props.repeatDays,
            repeatType: props.repeatType,
            repeatStartTime: props.repeatStartTime,
            natGatewayId: props.natGatewayId,
            release: props.release,
            newOrder: props.newOrder,
            destPortGroup: props.destPortGroup,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNatFirewallControlPolicy;
        this.attrAclUuid = rosNatFirewallControlPolicy.attrAclUuid;
        this.attrDirection = rosNatFirewallControlPolicy.attrDirection;
        this.attrNatGatewayId = rosNatFirewallControlPolicy.attrNatGatewayId;
    }
}
