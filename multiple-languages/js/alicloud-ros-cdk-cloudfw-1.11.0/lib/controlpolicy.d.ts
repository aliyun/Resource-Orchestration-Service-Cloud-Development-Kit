import * as ros from '@alicloud/ros-cdk-core';
import { RosControlPolicy } from './cloudfw.generated';
export { RosControlPolicy as ControlPolicyProperty };
/**
 * Properties for defining a `ControlPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
 */
export interface ControlPolicyProps {
    /**
     * Property aclAction: Traffic access control policy set by the cloud of a firewall.
     * accept: Release
     * drop: rejected
     * log: Observation
     */
    readonly aclAction: string | ros.IResolvable;
    /**
     * Property description: Security access control policy description information.
     */
    readonly description: string | ros.IResolvable;
    /**
     * Property destination: Security Access Control destination address policy.
     * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4\/24
     * When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
     * When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
     * When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
     */
    readonly destination: string | ros.IResolvable;
    /**
     * Property destinationType: Security Access Control destination address type of policy.
     * net: Destination network segment (CIDR)
     * group: destination address book
     * domain: The purpose domain
     * location: The purpose area
     */
    readonly destinationType: string | ros.IResolvable;
    /**
     * Property direction: Security access control traffic direction policies.
     * in: internal and external traffic access control
     * out: within the flow of external access control
     */
    readonly direction: string | ros.IResolvable;
    /**
     * Property newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
     * Description -1 indicates the lowest priority.
     */
    readonly newOrder: number | ros.IResolvable;
    /**
     * Property proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
     * Allowed values: ANY, TCP, UDP, ICMP
     */
    readonly proto: string | ros.IResolvable;
    /**
     * Property source: Security access control source address policy.
     * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0\/24
     * When SourceType as a group, Source name for the source address book. For example: db_group
     * When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
     */
    readonly source: string | ros.IResolvable;
    /**
     * Property sourceType: Security access control source address type of policy.
     * net: Source segment (CIDR)
     * group: source address book
     * location: the source area
     */
    readonly sourceType: string | ros.IResolvable;
    /**
     * Property applicationName: Application types supported by the security policy.
     * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
     * NOTE ANY indicates that the policy is applied to all types of applications.
     * Either ApplicationNameList or ApplicationName must be passed, not both.
     */
    readonly applicationName?: string | ros.IResolvable;
    /**
     * Property applicationNameList: List of application types supported by the access control policy.
     */
    readonly applicationNameList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property destPort: Security access control policy access traffic destination port.
     * Note When DestPortType to port, set the item.
     */
    readonly destPort?: string | ros.IResolvable;
    /**
     * Property destPortGroup: Security access control policy access traffic destination port address book name.
     * Description DestPortType is group, set the item.
     */
    readonly destPortGroup?: string | ros.IResolvable;
    /**
     * Property destPortType: Security access control policy access destination port traffic type.
     * port: Port
     * group: port address book
     */
    readonly destPortType?: string | ros.IResolvable;
    /**
     * Property domainResolveType: The domain name resolution method of the access control policy. Value:
     * - FQDN: Based on FQDN
     * - DNS: Based on DNS dynamic resolution
     * - FQDN_AND_DNS: Based on FQDN and DNS dynamic resolution
     */
    readonly domainResolveType?: string | ros.IResolvable;
    /**
     * Property endTime: The end time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
     * Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
     */
    readonly endTime?: number | ros.IResolvable;
    /**
     * Property ipVersion: IP version. Valid values:
     * - 4: IPv4
     * - 6: IPv6
     */
    readonly ipVersion?: string | ros.IResolvable;
    /**
     * Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string | ros.IResolvable;
    /**
     * Property release: The enabled state of the access control policy. This policy is enabled by default when it is created. Valid values:
     * - true: Access control policy is enabled
     * - false: Access control policy is not enabled
     */
    readonly release?: boolean | ros.IResolvable;
    /**
     * Property repeatDays: A collection of repeated dates of policy validity for an access control policy.
     * When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
     * When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
     * Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
     * When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
     * Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
     */
    readonly repeatDays?: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * Property repeatEndTime: The repeated end time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
     * Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
     */
    readonly repeatEndTime?: string | ros.IResolvable;
    /**
     * Property repeatStartTime: The repeated start time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
     * Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
     */
    readonly repeatStartTime?: string | ros.IResolvable;
    /**
     * Property repeatType: The repetition type of the policy validity period for an access control policy. Valid values:
     * - Permanent (default)
     * - None
     * - Daily
     * - Weekly
     * - Monthly.
     */
    readonly repeatType?: string | ros.IResolvable;
    /**
     * Property startTime: The start time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
     * Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
     */
    readonly startTime?: number | ros.IResolvable;
}
/**
 * Represents a `ControlPolicy`.
 */
export interface IControlPolicy extends ros.IResource {
    readonly props: ControlPolicyProps;
    /**
     * Attribute AclUuid: Security access control ID that uniquely identifies the policy.
     */
    readonly attrAclUuid: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CLOUDFW::ControlPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosControlPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
 */
export declare class ControlPolicy extends ros.Resource implements IControlPolicy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ControlPolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AclUuid: Security access control ID that uniquely identifies the policy.
     */
    readonly attrAclUuid: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ControlPolicyProps, enableResourcePropertyConstraint?: boolean);
}
