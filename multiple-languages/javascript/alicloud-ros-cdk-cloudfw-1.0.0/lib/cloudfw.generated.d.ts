import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::CLOUDFW::AddressBook`
 */
export interface RosAddressBookProps {
    /**
     * @Property description: Address book description.
     */
    readonly description: string;
    /**
     * @Property groupName: Name Address book.
     */
    readonly groupName: string;
    /**
     * @Property groupType: Type the address book, the optional values ​​are:
     * ip: IP Address Book
     * domain: domain name address book
     * port: Port Address Book
     * tag: ECS label address book
     */
    readonly groupType: string;
    /**
     * @Property addressList: Address list of the address book, between multiple addresses separated by commas.
     * Note: When GroupType ip, it must be set to port or domain.
     * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
     * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
     * When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
     */
    readonly addressList?: string;
    /**
     * @Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
     */
    readonly autoAddTagEcs?: boolean | ros.IResolvable;
    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string;
    /**
     * @Property tagList:
     */
    readonly tagList?: Array<RosAddressBook.TagListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tagRelation: The relationship between the labels to be matched more ECS.
     * and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
     * or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
     */
    readonly tagRelation?: string;
}
/**
 * A ROS template type:  `ALIYUN::CLOUDFW::AddressBook`
 */
export declare class RosAddressBook extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::AddressBook";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute GroupUuid: After a successful return to the address book to add unique identification ID.
     */
    readonly attrGroupUuid: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: Address book description.
     */
    description: string;
    /**
     * @Property groupName: Name Address book.
     */
    groupName: string;
    /**
     * @Property groupType: Type the address book, the optional values ​​are:
     * ip: IP Address Book
     * domain: domain name address book
     * port: Port Address Book
     * tag: ECS label address book
     */
    groupType: string;
    /**
     * @Property addressList: Address list of the address book, between multiple addresses separated by commas.
     * Note: When GroupType ip, it must be set to port or domain.
     * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
     * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
     * When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
     */
    addressList: string | undefined;
    /**
     * @Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
     */
    autoAddTagEcs: boolean | ros.IResolvable | undefined;
    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    regionId: string | undefined;
    /**
     * @Property tagList:
     */
    tagList: Array<RosAddressBook.TagListProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tagRelation: The relationship between the labels to be matched more ECS.
     * and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
     * or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
     */
    tagRelation: string | undefined;
    /**
     * Create a new `ALIYUN::CLOUDFW::AddressBook`.
     *
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
        readonly tagKey?: string;
        /**
         * @Property tagValue: ECS tag value to be matched.
         */
        readonly tagValue?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::CLOUDFW::ControlPolicy`
 */
export interface RosControlPolicyProps {
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
 * A ROS template type:  `ALIYUN::CLOUDFW::ControlPolicy`
 */
export declare class RosControlPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::ControlPolicy";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AclUuid: Security access control ID that uniquely identifies the policy.
     */
    readonly attrAclUuid: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclAction: Traffic access control policy set by the cloud of a firewall.
     * accept: Release
     * drop: rejected
     * log: Observation
     */
    aclAction: string;
    /**
     * @Property applicationName: Application types supported by the security policy.
     * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
     * NOTE ANY indicates that the policy is applied to all types of applications.
     */
    applicationName: string;
    /**
     * @Property description: Security access control policy description information.
     */
    description: string;
    /**
     * @Property destination: Security Access Control destination address policy.
     * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
     * When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
     * When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
     * When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
     */
    destination: string;
    /**
     * @Property destinationType: Security Access Control destination address type of policy.
     * net: Destination network segment (CIDR)
     * group: destination address book
     * domain: The purpose domain
     * location: The purpose area
     */
    destinationType: string;
    /**
     * @Property direction: Security access control traffic direction policies.
     * in: internal and external traffic access control
     * out: within the flow of external access control
     */
    direction: string;
    /**
     * @Property newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
     * Description -1 indicates the lowest priority.
     */
    newOrder: number;
    /**
     * @Property proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
     * Allowed values: ANY, TCP, UDP, ICMP
     */
    proto: string;
    /**
     * @Property source: Security access control source address policy.
     * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
     * When SourceType as a group, Source name for the source address book. For example: db_group
     * When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
     */
    source: string;
    /**
     * @Property sourceType: Security access control source address type of policy.
     * net: Source segment (CIDR)
     * group: source address book
     * location: the source area
     */
    sourceType: string;
    /**
     * @Property destPort: Security access control policy access traffic destination port.
     * Note When DestPortType to port, set the item.
     */
    destPort: string | undefined;
    /**
     * @Property destPortGroup: Security access control policy access traffic destination port address book name.
     * Description DestPortType is group, set the item.
     */
    destPortGroup: string | undefined;
    /**
     * @Property destPortType: Security access control policy access destination port traffic type.
     * port: Port
     * group: port address book
     */
    destPortType: string | undefined;
    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    regionId: string | undefined;
    /**
     * Create a new `ALIYUN::CLOUDFW::ControlPolicy`.
     *
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
