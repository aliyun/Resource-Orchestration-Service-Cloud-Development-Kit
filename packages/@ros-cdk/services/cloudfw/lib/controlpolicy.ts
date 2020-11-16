import * as ros from '@ros-cdk/core';
import { RosControlPolicy } from './cloudfw.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosControlPolicy as ControlPolicyProperty };

/**
 * Properties for defining a `ALIYUN::CLOUDFW::ControlPolicy`
 */
export interface ControlPolicyProps {

    /**
     * @Property aclAction: Traffic access control policy set by the cloud of a firewall.
     * accept: Release
     * drop: rejected
     * log: Observation
     */
    readonly aclAction: string;

    /**
     * @Property applicationName: Application types supported by the security policy.
     * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
     * NOTE ANY indicates that the policy is applied to all types of applications.
     */
    readonly applicationName: string;

    /**
     * @Property description: Security access control policy description information.
     */
    readonly description: string;

    /**
     * @Property destination: Security Access Control destination address policy.
     * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
     * When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
     * When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
     * When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
     */
    readonly destination: string;

    /**
     * @Property destinationType: Security Access Control destination address type of policy.
     * net: Destination network segment (CIDR)
     * group: destination address book
     * domain: The purpose domain
     * location: The purpose area
     */
    readonly destinationType: string;

    /**
     * @Property direction: Security access control traffic direction policies.
     * in: internal and external traffic access control
     * out: within the flow of external access control
     */
    readonly direction: string;

    /**
     * @Property newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
     * Description -1 indicates the lowest priority.
     */
    readonly newOrder: number;

    /**
     * @Property proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
     * Allowed values: ANY, TCP, UDP, ICMP
     */
    readonly proto: string;

    /**
     * @Property source: Security access control source address policy.
     * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
     * When SourceType as a group, Source name for the source address book. For example: db_group
     * When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
     */
    readonly source: string;

    /**
     * @Property sourceType: Security access control source address type of policy.
     * net: Source segment (CIDR)
     * group: source address book
     * location: the source area
     */
    readonly sourceType: string;

    /**
     * @Property destPort: Security access control policy access traffic destination port.
     * Note When DestPortType to port, set the item.
     */
    readonly destPort?: string;

    /**
     * @Property destPortGroup: Security access control policy access traffic destination port address book name.
     * Description DestPortType is group, set the item.
     */
    readonly destPortGroup?: string;

    /**
     * @Property destPortType: Security access control policy access destination port traffic type.
     * port: Port
     * group: port address book
     */
    readonly destPortType?: string;

    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::CLOUDFW::ControlPolicy`
 */
export class ControlPolicy extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute AclUuid: Security access control ID that uniquely identifies the policy.
     */
    public readonly attrAclUuid: any;

    /**
     * Create a new `ALIYUN::CLOUDFW::ControlPolicy`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ControlPolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosControlPolicy = new RosControlPolicy(this, id,  {
            destination: props.destination,
            applicationName: props.applicationName,
            description: props.description,
            sourceType: props.sourceType,
            destPort: props.destPort,
            aclAction: props.aclAction,
            destinationType: props.destinationType,
            direction: props.direction,
            source: props.source,
            destPortType: props.destPortType,
            proto: props.proto,
            regionId: props.regionId ? props.regionId : 'cn-hangzhou',
            newOrder: props.newOrder,
            destPortGroup: props.destPortGroup,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosControlPolicy;
        this.attrAclUuid = rosControlPolicy.attrAclUuid;
    }
}
