import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAddressBook`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-addressbook
 */
export interface RosAddressBookProps {
    /**
     * @Property description: Address book description.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property groupName: Name Address book.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * @Property groupType: Type the address book, the optional values ​​are:
     * ip: IP Address Book
     * domain: domain name address book
     * port: Port Address Book
     * tag: ECS label address book
     */
    readonly groupType: string | ros.IResolvable;
    /**
     * @Property addressList: Address list of the address book, between multiple addresses separated by commas.
     * Note: When GroupType ip, it must be set to port or domain.
     * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4\/32, 1.2.3.0\/24
     * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100\/200
     * When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
     */
    readonly addressList?: string | ros.IResolvable;
    /**
     * @Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
     */
    readonly autoAddTagEcs?: boolean | ros.IResolvable;
    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string | ros.IResolvable;
    /**
     * @Property tagList:
     */
    readonly tagList?: Array<RosAddressBook.TagListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tagRelation: The relationship between the labels to be matched more ECS.
     * and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
     * or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
     */
    readonly tagRelation?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::AddressBook`, which is used to create an address book that is used for access control. Address books include IP address books, Elastic Compute Service (ECS) tag-based address books, port address books, and domain address books.
 * @Note This class does not contain additional functions, so it is recommended to use the `AddressBook` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-addressbook
 */
export declare class RosAddressBook extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::AddressBook";
    /**
     * @Attribute GroupUuid: After a successful return to the address book to add unique identification ID.
     */
    readonly attrGroupUuid: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: Address book description.
     */
    description: string | ros.IResolvable;
    /**
     * @Property groupName: Name Address book.
     */
    groupName: string | ros.IResolvable;
    /**
     * @Property groupType: Type the address book, the optional values ​​are:
     * ip: IP Address Book
     * domain: domain name address book
     * port: Port Address Book
     * tag: ECS label address book
     */
    groupType: string | ros.IResolvable;
    /**
     * @Property addressList: Address list of the address book, between multiple addresses separated by commas.
     * Note: When GroupType ip, it must be set to port or domain.
     * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4\/32, 1.2.3.0\/24
     * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100\/200
     * When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
     */
    addressList: string | ros.IResolvable | undefined;
    /**
     * @Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
     */
    autoAddTagEcs: boolean | ros.IResolvable | undefined;
    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    regionId: string | ros.IResolvable | undefined;
    /**
     * @Property tagList:
     */
    tagList: Array<RosAddressBook.TagListProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tagRelation: The relationship between the labels to be matched more ECS.
     * and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
     * or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
     */
    tagRelation: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddressBookProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAddressBook {
    /**
     * @stability external
     */
    interface TagListProperty {
        /**
         * @Property tagKey: ECS labels to be matched Key.
         */
        readonly tagKey?: string | ros.IResolvable;
        /**
         * @Property tagValue: ECS tag value to be matched.
         */
        readonly tagValue?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosAllFwSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-allfwswitch
 */
export interface RosAllFwSwitchProps {
    /**
     * @Property instanceId: The ID of the cloud firewall instance.
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::AllFwSwitch`, which is used to enable all firewalls.
 * @Note This class does not contain additional functions, so it is recommended to use the `AllFwSwitch` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-allfwswitch
 */
export declare class RosAllFwSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::AllFwSwitch";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the cloud firewall instance.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAllFwSwitchProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosControlPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
 */
export interface RosControlPolicyProps {
    /**
     * @Property aclAction: Traffic access control policy set by the cloud of a firewall.
     * accept: Release
     * drop: rejected
     * log: Observation
     */
    readonly aclAction: string | ros.IResolvable;
    /**
     * @Property description: Security access control policy description information.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property destination: Security Access Control destination address policy.
     * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4\/24
     * When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
     * When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
     * When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
     */
    readonly destination: string | ros.IResolvable;
    /**
     * @Property destinationType: Security Access Control destination address type of policy.
     * net: Destination network segment (CIDR)
     * group: destination address book
     * domain: The purpose domain
     * location: The purpose area
     */
    readonly destinationType: string | ros.IResolvable;
    /**
     * @Property direction: Security access control traffic direction policies.
     * in: internal and external traffic access control
     * out: within the flow of external access control
     */
    readonly direction: string | ros.IResolvable;
    /**
     * @Property newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
     * Description -1 indicates the lowest priority.
     */
    readonly newOrder: number | ros.IResolvable;
    /**
     * @Property proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
     * Allowed values: ANY, TCP, UDP, ICMP
     */
    readonly proto: string | ros.IResolvable;
    /**
     * @Property source: Security access control source address policy.
     * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0\/24
     * When SourceType as a group, Source name for the source address book. For example: db_group
     * When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
     */
    readonly source: string | ros.IResolvable;
    /**
     * @Property sourceType: Security access control source address type of policy.
     * net: Source segment (CIDR)
     * group: source address book
     * location: the source area
     */
    readonly sourceType: string | ros.IResolvable;
    /**
     * @Property applicationName: Application types supported by the security policy.
     * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
     * NOTE ANY indicates that the policy is applied to all types of applications.
     * Either ApplicationNameList or ApplicationName must be passed, not both.
     */
    readonly applicationName?: string | ros.IResolvable;
    /**
     * @Property applicationNameList: List of application types supported by the access control policy.
     */
    readonly applicationNameList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property destPort: Security access control policy access traffic destination port.
     * Note When DestPortType to port, set the item.
     */
    readonly destPort?: string | ros.IResolvable;
    /**
     * @Property destPortGroup: Security access control policy access traffic destination port address book name.
     * Description DestPortType is group, set the item.
     */
    readonly destPortGroup?: string | ros.IResolvable;
    /**
     * @Property destPortType: Security access control policy access destination port traffic type.
     * port: Port
     * group: port address book
     */
    readonly destPortType?: string | ros.IResolvable;
    /**
     * @Property domainResolveType: The domain name resolution method of the access control policy. Value:
     * - FQDN: Based on FQDN
     * - DNS: Based on DNS dynamic resolution
     * - FQDN_AND_DNS: Based on FQDN and DNS dynamic resolution
     */
    readonly domainResolveType?: string | ros.IResolvable;
    /**
     * @Property endTime: The end time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
     * Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
     */
    readonly endTime?: number | ros.IResolvable;
    /**
     * @Property ipVersion: IP version. Valid values:
     * - 4: IPv4
     * - 6: IPv6
     */
    readonly ipVersion?: string | ros.IResolvable;
    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string | ros.IResolvable;
    /**
     * @Property release: The enabled state of the access control policy. This policy is enabled by default when it is created. Valid values:
     * - true: Access control policy is enabled
     * - false: Access control policy is not enabled
     */
    readonly release?: boolean | ros.IResolvable;
    /**
     * @Property repeatDays: A collection of repeated dates of policy validity for an access control policy.
     * When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
     * When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
     * Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
     * When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
     * Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
     */
    readonly repeatDays?: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property repeatEndTime: The repeated end time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
     * Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
     */
    readonly repeatEndTime?: string | ros.IResolvable;
    /**
     * @Property repeatStartTime: The repeated start time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
     * Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
     */
    readonly repeatStartTime?: string | ros.IResolvable;
    /**
     * @Property repeatType: The repetition type of the policy validity period for an access control policy. Valid values:
     * - Permanent (default)
     * - None
     * - Daily
     * - Weekly
     * - Monthly.
     */
    readonly repeatType?: string | ros.IResolvable;
    /**
     * @Property startTime: The start time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
     * Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
     */
    readonly startTime?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::ControlPolicy`, which is used to add an access control policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `ControlPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
 */
export declare class RosControlPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::ControlPolicy";
    /**
     * @Attribute AclUuid: Security access control ID that uniquely identifies the policy.
     */
    readonly attrAclUuid: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclAction: Traffic access control policy set by the cloud of a firewall.
     * accept: Release
     * drop: rejected
     * log: Observation
     */
    aclAction: string | ros.IResolvable;
    /**
     * @Property description: Security access control policy description information.
     */
    description: string | ros.IResolvable;
    /**
     * @Property destination: Security Access Control destination address policy.
     * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4\/24
     * When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
     * When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
     * When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
     */
    destination: string | ros.IResolvable;
    /**
     * @Property destinationType: Security Access Control destination address type of policy.
     * net: Destination network segment (CIDR)
     * group: destination address book
     * domain: The purpose domain
     * location: The purpose area
     */
    destinationType: string | ros.IResolvable;
    /**
     * @Property direction: Security access control traffic direction policies.
     * in: internal and external traffic access control
     * out: within the flow of external access control
     */
    direction: string | ros.IResolvable;
    /**
     * @Property newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
     * Description -1 indicates the lowest priority.
     */
    newOrder: number | ros.IResolvable;
    /**
     * @Property proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
     * Allowed values: ANY, TCP, UDP, ICMP
     */
    proto: string | ros.IResolvable;
    /**
     * @Property source: Security access control source address policy.
     * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0\/24
     * When SourceType as a group, Source name for the source address book. For example: db_group
     * When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
     */
    source: string | ros.IResolvable;
    /**
     * @Property sourceType: Security access control source address type of policy.
     * net: Source segment (CIDR)
     * group: source address book
     * location: the source area
     */
    sourceType: string | ros.IResolvable;
    /**
     * @Property applicationName: Application types supported by the security policy.
     * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
     * NOTE ANY indicates that the policy is applied to all types of applications.
     * Either ApplicationNameList or ApplicationName must be passed, not both.
     */
    applicationName: string | ros.IResolvable | undefined;
    /**
     * @Property applicationNameList: List of application types supported by the access control policy.
     */
    applicationNameList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property destPort: Security access control policy access traffic destination port.
     * Note When DestPortType to port, set the item.
     */
    destPort: string | ros.IResolvable | undefined;
    /**
     * @Property destPortGroup: Security access control policy access traffic destination port address book name.
     * Description DestPortType is group, set the item.
     */
    destPortGroup: string | ros.IResolvable | undefined;
    /**
     * @Property destPortType: Security access control policy access destination port traffic type.
     * port: Port
     * group: port address book
     */
    destPortType: string | ros.IResolvable | undefined;
    /**
     * @Property domainResolveType: The domain name resolution method of the access control policy. Value:
     * - FQDN: Based on FQDN
     * - DNS: Based on DNS dynamic resolution
     * - FQDN_AND_DNS: Based on FQDN and DNS dynamic resolution
     */
    domainResolveType: string | ros.IResolvable | undefined;
    /**
     * @Property endTime: The end time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
     * Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
     */
    endTime: number | ros.IResolvable | undefined;
    /**
     * @Property ipVersion: IP version. Valid values:
     * - 4: IPv4
     * - 6: IPv6
     */
    ipVersion: string | ros.IResolvable | undefined;
    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    regionId: string | ros.IResolvable | undefined;
    /**
     * @Property release: The enabled state of the access control policy. This policy is enabled by default when it is created. Valid values:
     * - true: Access control policy is enabled
     * - false: Access control policy is not enabled
     */
    release: boolean | ros.IResolvable | undefined;
    /**
     * @Property repeatDays: A collection of repeated dates of policy validity for an access control policy.
     * When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
     * When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
     * Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
     * When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
     * Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
     */
    repeatDays: Array<number | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property repeatEndTime: The repeated end time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
     * Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
     */
    repeatEndTime: string | ros.IResolvable | undefined;
    /**
     * @Property repeatStartTime: The repeated start time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
     * Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
     */
    repeatStartTime: string | ros.IResolvable | undefined;
    /**
     * @Property repeatType: The repetition type of the policy validity period for an access control policy. Valid values:
     * - Permanent (default)
     * - None
     * - Daily
     * - Weekly
     * - Monthly.
     */
    repeatType: string | ros.IResolvable | undefined;
    /**
     * @Property startTime: The start time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
     * Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
     */
    startTime: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosControlPolicyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosFwSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
 */
export interface RosFwSwitchProps {
    /**
     * @Property ipaddrList: The IP address list.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    readonly ipaddrList?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property regionList: The region list.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    readonly regionList?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceTypeList: The asset type list. Valid values:
     * - BastionHostIP: Bastion machine exit IP.
     * - BastionHostIngressIP: The entrance IP of the fortress machine.
     * - EcsEIP: ECS EIP.
     * - EcsPublicIP: ECS public network IP.
     * - EIP: Elastic Public IP.
     * - EniEIP: Elastic Network card EIP.
     * - NatEIP: NAT EIP.
     * - SlbEIP: SLB EIP.
     * - SlbPublicIP: SLB public network IP.
     * - NatPublicIP: NAT public IP
     * - HAVIP: High Availability Virtual IP.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    readonly resourceTypeList?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::FwSwitch`, which is used to enable a firewall.
 * @Note This class does not contain additional functions, so it is recommended to use the `FwSwitch` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
 */
export declare class RosFwSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::FwSwitch";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ipaddrList: The IP address list.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    ipaddrList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property regionList: The region list.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    regionList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceTypeList: The asset type list. Valid values:
     * - BastionHostIP: Bastion machine exit IP.
     * - BastionHostIngressIP: The entrance IP of the fortress machine.
     * - EcsEIP: ECS EIP.
     * - EcsPublicIP: ECS public network IP.
     * - EIP: Elastic Public IP.
     * - EniEIP: Elastic Network card EIP.
     * - NatEIP: NAT EIP.
     * - SlbEIP: SLB EIP.
     * - SlbPublicIP: SLB public network IP.
     * - NatPublicIP: NAT public IP
     * - HAVIP: High Availability Virtual IP.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    resourceTypeList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFwSwitchProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
 */
export interface RosInstanceProps {
    /**
     * @Property payType: The billing method of the firewall instance. Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
     */
    readonly accountNum?: number | ros.IResolvable;
    /**
     * @Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control. This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
     */
    readonly aclExtension?: number | ros.IResolvable;
    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property bandwidth: Public network processing capability. Valid values: 10 to 15000. Unit: Mbps.
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * @Property ignoreExisting: Whether to ignore existing cloud firewall instance
     * False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored.
     * If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;
    /**
     * @Property ipNum: The number of public IPs that can be protected. Valid values: 20 to 4000.PremiumVersion: [20, 1000]
     */
    readonly ipNum?: number | ros.IResolvable;
    /**
     * @Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default. If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
     */
    readonly logAnalysis?: boolean | ros.IResolvable;
    /**
     * @Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity
     */
    readonly logStorage?: number | ros.IResolvable;
    /**
     * @Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc. After the member account is managed by the current account, there will be no need to purchase it separately.
     */
    readonly multiAccountManagement?: boolean | ros.IResolvable;
    /**
     * @Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall. The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
     */
    readonly natBandwidth?: number | ros.IResolvable;
    /**
     * @Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable. Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
     */
    readonly natFirewallNum?: number | ros.IResolvable;
    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property spec: The version of Cloud Firewall.
     */
    readonly spec?: string | ros.IResolvable;
    /**
     * @Property vpcBandwidth: VPC network processing capability. Valid values: 1000 to 15000. Unit: Mbps.
     */
    readonly vpcBandwidth?: number | ros.IResolvable;
    /**
     * @Property vpcFirewallNum: The number of protected VPCs. It will be ignored when spec = "premium_version". Valid values between 2 and 500.
     */
    readonly vpcFirewallNum?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::Instance`, which is used to create a Cloud Firewall instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::Instance";
    /**
     * @Attribute InstanceId: Instance Id.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property payType: The billing method of the firewall instance. Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    payType: string | ros.IResolvable;
    /**
     * @Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
     */
    accountNum: number | ros.IResolvable | undefined;
    /**
     * @Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control. This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
     */
    aclExtension: number | ros.IResolvable | undefined;
    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property bandwidth: Public network processing capability. Valid values: 10 to 15000. Unit: Mbps.
     */
    bandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property ignoreExisting: Whether to ignore existing cloud firewall instance
     * False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored.
     * If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
     */
    ignoreExisting: boolean | ros.IResolvable | undefined;
    /**
     * @Property ipNum: The number of public IPs that can be protected. Valid values: 20 to 4000.PremiumVersion: [20, 1000]
     */
    ipNum: number | ros.IResolvable | undefined;
    /**
     * @Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default. If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
     */
    logAnalysis: boolean | ros.IResolvable | undefined;
    /**
     * @Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity
     */
    logStorage: number | ros.IResolvable | undefined;
    /**
     * @Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc. After the member account is managed by the current account, there will be no need to purchase it separately.
     */
    multiAccountManagement: boolean | ros.IResolvable | undefined;
    /**
     * @Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall. The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
     */
    natBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable. Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
     */
    natFirewallNum: number | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property spec: The version of Cloud Firewall.
     */
    spec: string | ros.IResolvable | undefined;
    /**
     * @Property vpcBandwidth: VPC network processing capability. Valid values: 1000 to 15000. Unit: Mbps.
     */
    vpcBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property vpcFirewallNum: The number of protected VPCs. It will be ignored when spec = "premium_version". Valid values between 2 and 500.
     */
    vpcFirewallNum: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosNatFirewallControlPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
 */
export interface RosNatFirewallControlPolicyProps {
    /**
     * @Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values:
     * accept: allows the traffic.
     * drop: denies the traffic.
     * log: monitors the traffic.
     */
    readonly aclAction: string | ros.IResolvable;
    /**
     * @Property applicationNameList: The application types supported by the access control policy.
     */
    readonly applicationNameList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of the access control policy.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property destination: The destination address in the access control policy.
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
     * @Property destinationType: The type of the destination address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     * domain: domain name
     */
    readonly destinationType: string | ros.IResolvable;
    /**
     * @Property direction: The direction of the traffic to which the access control policy applies. Valid values:
     * out: outbound traffic
     */
    readonly direction: string | ros.IResolvable;
    /**
     * @Property natGatewayId: The ID of the NAT gateway.
     */
    readonly natGatewayId: string | ros.IResolvable;
    /**
     * @Property newOrder: The priority of the access control policy. The priority value starts from 1. A small priority value indicates a high priority.
     */
    readonly newOrder: number | ros.IResolvable;
    /**
     * @Property proto: The protocol type in the access control policy.Valid values:
     * ANY: all types of protocols
     * TCP
     * UDP
     * ICMP
     */
    readonly proto: string | ros.IResolvable;
    /**
     * @Property source: The source address in the access control policy.Valid values:
     * If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0\/24
     * If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group
     */
    readonly source: string | ros.IResolvable;
    /**
     * @Property sourceType: The type of the source address in the access control policy.Valid values:
     * net: source CIDR block
     * group: source address book
     */
    readonly sourceType: string | ros.IResolvable;
    /**
     * @Property destPort: The destination port in the access control policy. Valid values:
     * If Proto is set to ICMP, DestPort is automatically left empty.
     * If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
     * If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
     */
    readonly destPort?: number | ros.IResolvable;
    /**
     * @Property destPortGroup: The name of the destination port address book in the access control policy.
     */
    readonly destPortGroup?: string | ros.IResolvable;
    /**
     * @Property destPortType: The type of the destination port in the access control policy. Valid values:
     * net: source CIDR block
     * group: source address book
     */
    readonly destPortType?: string | ros.IResolvable;
    /**
     * @Property domainResolveType: The domain name resolution method of the access control policy. Valid values:
     * 0: fully qualified domain name (FQDN)-based resolution
     * 1: Domain Name System (DNS)-based dynamic resolution
     * 2: FQDN and DNS-based dynamic resolution
     */
    readonly domainResolveType?: number | ros.IResolvable;
    /**
     * @Property endTime: The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
     */
    readonly endTime?: string | ros.IResolvable;
    /**
     * @Property ipVersion: The IP version supported by the access control policy. Valid values:
     * 4: IPv4 (default)
     */
    readonly ipVersion?: number | ros.IResolvable;
    /**
     * @Property release: Specifies whether to enable the access control policy. By default, an access control policy is enabled after it is created. Valid values:
     * true
     * false
     */
    readonly release?: boolean | ros.IResolvable;
    /**
     * @Property repeatDays: The days of a week or of a month on which the access control policy takes effect.
     * If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: [].
     * If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
     * If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
     */
    readonly repeatDays?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property repeatEndTime: The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
     */
    readonly repeatEndTime?: string | ros.IResolvable;
    /**
     * @Property repeatStartTime: The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
     */
    readonly repeatStartTime?: string | ros.IResolvable;
    /**
     * @Property repeatType: The recurrence type for the access control policy to take effect. Valid values:
     * Permanent (default): The policy always takes effect.
     * None: The policy takes effect for only once.
     * Daily: The policy takes effect on a daily basis.
     * Weekly: The policy takes effect on a weekly basis.
     * Monthly: The policy takes effect on a monthly basis.
     */
    readonly repeatType?: string | ros.IResolvable;
    /**
     * @Property startTime: The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
     */
    readonly startTime?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::NatFirewallControlPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatFirewallControlPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
 */
export declare class RosNatFirewallControlPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::NatFirewallControlPolicy";
    /**
     * @Attribute AclUuid: The unique ID of the access control policy.
     */
    readonly attrAclUuid: ros.IResolvable;
    /**
     * @Attribute Direction: The direction of the traffic to which the access control policy applies.
     */
    readonly attrDirection: ros.IResolvable;
    /**
     * @Attribute NatGatewayId: The ID of the NAT gateway.
     */
    readonly attrNatGatewayId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values:
     * accept: allows the traffic.
     * drop: denies the traffic.
     * log: monitors the traffic.
     */
    aclAction: string | ros.IResolvable;
    /**
     * @Property applicationNameList: The application types supported by the access control policy.
     */
    applicationNameList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of the access control policy.
     */
    description: string | ros.IResolvable;
    /**
     * @Property destination: The destination address in the access control policy.
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
    destination: string | ros.IResolvable;
    /**
     * @Property destinationType: The type of the destination address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     * domain: domain name
     */
    destinationType: string | ros.IResolvable;
    /**
     * @Property direction: The direction of the traffic to which the access control policy applies. Valid values:
     * out: outbound traffic
     */
    direction: string | ros.IResolvable;
    /**
     * @Property natGatewayId: The ID of the NAT gateway.
     */
    natGatewayId: string | ros.IResolvable;
    /**
     * @Property newOrder: The priority of the access control policy. The priority value starts from 1. A small priority value indicates a high priority.
     */
    newOrder: number | ros.IResolvable;
    /**
     * @Property proto: The protocol type in the access control policy.Valid values:
     * ANY: all types of protocols
     * TCP
     * UDP
     * ICMP
     */
    proto: string | ros.IResolvable;
    /**
     * @Property source: The source address in the access control policy.Valid values:
     * If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0\/24
     * If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group
     */
    source: string | ros.IResolvable;
    /**
     * @Property sourceType: The type of the source address in the access control policy.Valid values:
     * net: source CIDR block
     * group: source address book
     */
    sourceType: string | ros.IResolvable;
    /**
     * @Property destPort: The destination port in the access control policy. Valid values:
     * If Proto is set to ICMP, DestPort is automatically left empty.
     * If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
     * If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
     */
    destPort: number | ros.IResolvable | undefined;
    /**
     * @Property destPortGroup: The name of the destination port address book in the access control policy.
     */
    destPortGroup: string | ros.IResolvable | undefined;
    /**
     * @Property destPortType: The type of the destination port in the access control policy. Valid values:
     * net: source CIDR block
     * group: source address book
     */
    destPortType: string | ros.IResolvable | undefined;
    /**
     * @Property domainResolveType: The domain name resolution method of the access control policy. Valid values:
     * 0: fully qualified domain name (FQDN)-based resolution
     * 1: Domain Name System (DNS)-based dynamic resolution
     * 2: FQDN and DNS-based dynamic resolution
     */
    domainResolveType: number | ros.IResolvable | undefined;
    /**
     * @Property endTime: The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
     */
    endTime: string | ros.IResolvable | undefined;
    /**
     * @Property ipVersion: The IP version supported by the access control policy. Valid values:
     * 4: IPv4 (default)
     */
    ipVersion: number | ros.IResolvable | undefined;
    /**
     * @Property release: Specifies whether to enable the access control policy. By default, an access control policy is enabled after it is created. Valid values:
     * true
     * false
     */
    release: boolean | ros.IResolvable | undefined;
    /**
     * @Property repeatDays: The days of a week or of a month on which the access control policy takes effect.
     * If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: [].
     * If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
     * If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
     */
    repeatDays: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property repeatEndTime: The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
     */
    repeatEndTime: string | ros.IResolvable | undefined;
    /**
     * @Property repeatStartTime: The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
     */
    repeatStartTime: string | ros.IResolvable | undefined;
    /**
     * @Property repeatType: The recurrence type for the access control policy to take effect. Valid values:
     * Permanent (default): The policy always takes effect.
     * None: The policy takes effect for only once.
     * Daily: The policy takes effect on a daily basis.
     * Weekly: The policy takes effect on a weekly basis.
     * Monthly: The policy takes effect on a monthly basis.
     */
    repeatType: string | ros.IResolvable | undefined;
    /**
     * @Property startTime: The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
     */
    startTime: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatFirewallControlPolicyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosVpcFirewallControlPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy
 */
export interface RosVpcFirewallControlPolicyProps {
    /**
     * @Property aclAction: The action that Cloud Firewall performs on the traffic. Valid values:
     * accept: allows the traffic.
     * drop: denies the traffic.
     * log: monitors the traffic.
     */
    readonly aclAction: string | ros.IResolvable;
    /**
     * @Property description: The description of the access control policy.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property destination: The destination address in the access control policy.
     * Set this parameter in the following way:
     * If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
     * Example: 10.2.3.0\/24.
     * If the DestinationType parameter is set to group, set the value to the name of an address book.
     * Example: db_group.
     * If the DestinationType parameter is set to domain, set the value to a domain name.
     * Example: *.aliyuncs.com.
     */
    readonly destination: string | ros.IResolvable;
    /**
     * @Property destinationType: The type of the destination address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     * domain: domain name
     */
    readonly destinationType: string | ros.IResolvable;
    /**
     * @Property newOrder: The priority of the access control policy.
     * The priority value starts from 1. A smaller priority value indicates a higher priority.
     * Note The value of -1 indicates the lowest priority.
     */
    readonly newOrder: string | ros.IResolvable;
    /**
     * @Property proto: The type of the security protocol in the access control policy.
     */
    readonly proto: string | ros.IResolvable;
    /**
     * @Property source: The source address in the access control policy.
     * If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0\/24.
     * If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
     */
    readonly source: string | ros.IResolvable;
    /**
     * @Property sourceType: The type of the source address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     */
    readonly sourceType: string | ros.IResolvable;
    /**
     * @Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy.
     * If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
     * that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
     * If the VPC firewall is used to protect Express Connect, set the value to the ID of
     * the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
     * Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
     */
    readonly vpcFirewallId: string | ros.IResolvable;
    /**
     * @Property applicationName: The application type that the access control policy supports.
     * Valid values:
     * ANY (indicates that all application types are supported)
     * FTP
     * HTTP
     * HTTPS
     * MySQL
     * SMTP
     * SMTPS
     * RDP
     * VNC
     * SSH
     * Redis
     * MQTT
     * MongoDB
     * Memcache
     * SSL
     */
    readonly applicationName?: string | ros.IResolvable;
    /**
     * @Property applicationNameList: List of application types supported by the access control policy.
     */
    readonly applicationNameList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property destPort: The destination port in the access control policy.
     * Note This parameter must be specified if the DestPortType parameter is set to port.
     */
    readonly destPort?: string | ros.IResolvable;
    /**
     * @Property destPortGroup: The address book of destination ports in the access control policy.
     * Note This parameter must be specified if the DestPortType parameter is set to group.
     */
    readonly destPortGroup?: string | ros.IResolvable;
    /**
     * @Property destPortType: The type of the destination port in the access control policy. Valid values:
     * port: port
     * group: address book
     */
    readonly destPortType?: string | ros.IResolvable;
    /**
     * @Property endTime: The end time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
     * Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
     */
    readonly endTime?: number | ros.IResolvable;
    /**
     * @Property lang: The natural language of the request and response. Valid values:
     * zh: Chinese
     * en: English
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * @Property memberUid: Member account UID of current Alibaba Cloud account.
     */
    readonly memberUid?: string | ros.IResolvable;
    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string | ros.IResolvable;
    /**
     * @Property release: The enabled state of the access control policy. This policy is enabled by default when it is created. Value:
     * - true: Access control policy is enabled
     * - false: Access control policy is not enabled
     */
    readonly release?: boolean | ros.IResolvable;
    /**
     * @Property repeatDays: A collection of repeated dates of policy validity for an access control policy.
     * When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
     * When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
     * Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
     * When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
     * Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
     */
    readonly repeatDays?: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property repeatEndTime: The repeated end time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
     * Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
     */
    readonly repeatEndTime?: string | ros.IResolvable;
    /**
     * @Property repeatStartTime: The repeated start time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
     * Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
     */
    readonly repeatStartTime?: string | ros.IResolvable;
    /**
     * @Property repeatType: The repetition type of the policy validity period for an access control policy. Valid values:
     * - Permanent (default)
     * - None
     * - Daily
     * - Weekly
     * - Monthly.
     */
    readonly repeatType?: string | ros.IResolvable;
    /**
     * @Property startTime: The start time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
     * Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
     */
    readonly startTime?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::VpcFirewallControlPolicy`, which is used to add an access control policy to a policy group of a virtual private cloud (VPC) firewall.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpcFirewallControlPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy
 */
export declare class RosVpcFirewallControlPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::VpcFirewallControlPolicy";
    /**
     * @Attribute AclUuid: The unique ID of the access control policy.
     */
    readonly attrAclUuid: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclAction: The action that Cloud Firewall performs on the traffic. Valid values:
     * accept: allows the traffic.
     * drop: denies the traffic.
     * log: monitors the traffic.
     */
    aclAction: string | ros.IResolvable;
    /**
     * @Property description: The description of the access control policy.
     */
    description: string | ros.IResolvable;
    /**
     * @Property destination: The destination address in the access control policy.
     * Set this parameter in the following way:
     * If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
     * Example: 10.2.3.0\/24.
     * If the DestinationType parameter is set to group, set the value to the name of an address book.
     * Example: db_group.
     * If the DestinationType parameter is set to domain, set the value to a domain name.
     * Example: *.aliyuncs.com.
     */
    destination: string | ros.IResolvable;
    /**
     * @Property destinationType: The type of the destination address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     * domain: domain name
     */
    destinationType: string | ros.IResolvable;
    /**
     * @Property newOrder: The priority of the access control policy.
     * The priority value starts from 1. A smaller priority value indicates a higher priority.
     * Note The value of -1 indicates the lowest priority.
     */
    newOrder: string | ros.IResolvable;
    /**
     * @Property proto: The type of the security protocol in the access control policy.
     */
    proto: string | ros.IResolvable;
    /**
     * @Property source: The source address in the access control policy.
     * If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0\/24.
     * If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
     */
    source: string | ros.IResolvable;
    /**
     * @Property sourceType: The type of the source address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     */
    sourceType: string | ros.IResolvable;
    /**
     * @Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy.
     * If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
     * that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
     * If the VPC firewall is used to protect Express Connect, set the value to the ID of
     * the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
     * Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
     */
    vpcFirewallId: string | ros.IResolvable;
    /**
     * @Property applicationName: The application type that the access control policy supports.
     * Valid values:
     * ANY (indicates that all application types are supported)
     * FTP
     * HTTP
     * HTTPS
     * MySQL
     * SMTP
     * SMTPS
     * RDP
     * VNC
     * SSH
     * Redis
     * MQTT
     * MongoDB
     * Memcache
     * SSL
     */
    applicationName: string | ros.IResolvable | undefined;
    /**
     * @Property applicationNameList: List of application types supported by the access control policy.
     */
    applicationNameList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property destPort: The destination port in the access control policy.
     * Note This parameter must be specified if the DestPortType parameter is set to port.
     */
    destPort: string | ros.IResolvable | undefined;
    /**
     * @Property destPortGroup: The address book of destination ports in the access control policy.
     * Note This parameter must be specified if the DestPortType parameter is set to group.
     */
    destPortGroup: string | ros.IResolvable | undefined;
    /**
     * @Property destPortType: The type of the destination port in the access control policy. Valid values:
     * port: port
     * group: address book
     */
    destPortType: string | ros.IResolvable | undefined;
    /**
     * @Property endTime: The end time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
     * Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
     */
    endTime: number | ros.IResolvable | undefined;
    /**
     * @Property lang: The natural language of the request and response. Valid values:
     * zh: Chinese
     * en: English
     */
    lang: string | ros.IResolvable | undefined;
    /**
     * @Property memberUid: Member account UID of current Alibaba Cloud account.
     */
    memberUid: string | ros.IResolvable | undefined;
    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    regionId: string | ros.IResolvable | undefined;
    /**
     * @Property release: The enabled state of the access control policy. This policy is enabled by default when it is created. Value:
     * - true: Access control policy is enabled
     * - false: Access control policy is not enabled
     */
    release: boolean | ros.IResolvable | undefined;
    /**
     * @Property repeatDays: A collection of repeated dates of policy validity for an access control policy.
     * When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
     * When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
     * Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
     * When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
     * Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
     */
    repeatDays: Array<number | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property repeatEndTime: The repeated end time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
     * Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
     */
    repeatEndTime: string | ros.IResolvable | undefined;
    /**
     * @Property repeatStartTime: The repeated start time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
     * Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
     */
    repeatStartTime: string | ros.IResolvable | undefined;
    /**
     * @Property repeatType: The repetition type of the policy validity period for an access control policy. Valid values:
     * - Permanent (default)
     * - None
     * - Daily
     * - Weekly
     * - Monthly.
     */
    repeatType: string | ros.IResolvable | undefined;
    /**
     * @Property startTime: The start time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
     * Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
     */
    startTime: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcFirewallControlPolicyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
