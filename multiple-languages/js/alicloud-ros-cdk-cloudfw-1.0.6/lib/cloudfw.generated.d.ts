import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::CLOUDFW::AddressBook`
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
     * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
     * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
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
     * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
     * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
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
        readonly tagKey?: string | ros.IResolvable;
        /**
         * @Property tagValue: ECS tag value to be matched.
         */
        readonly tagValue?: string | ros.IResolvable;
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
    readonly aclAction: string | ros.IResolvable;
    /**
     * @Property applicationName: Application types supported by the security policy.
     * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
     * NOTE ANY indicates that the policy is applied to all types of applications.
     */
    readonly applicationName: string | ros.IResolvable;
    /**
     * @Property description: Security access control policy description information.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property destination: Security Access Control destination address policy.
     * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
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
     * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
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
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string | ros.IResolvable;
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
     * @Property applicationName: Application types supported by the security policy.
     * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
     * NOTE ANY indicates that the policy is applied to all types of applications.
     */
    applicationName: string | ros.IResolvable;
    /**
     * @Property description: Security access control policy description information.
     */
    description: string | ros.IResolvable;
    /**
     * @Property destination: Security Access Control destination address policy.
     * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
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
     * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
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
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    regionId: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `ALIYUN::CLOUDFW::VpcFirewallControlPolicy`
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
    readonly applicationName: string | ros.IResolvable;
    /**
     * @Property description: The description of the access control policy.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property destination: The destination address in the access control policy.
     * Set this parameter in the following way:
     * If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
     * Example: 10.2.3.0/24.
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
     * If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.
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
     * @Property lang: The natural language of the request and response. Valid values:
     * zh: Chinese
     * en: English
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CLOUDFW::VpcFirewallControlPolicy`
 */
export declare class RosVpcFirewallControlPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::VpcFirewallControlPolicy";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
    applicationName: string | ros.IResolvable;
    /**
     * @Property description: The description of the access control policy.
     */
    description: string | ros.IResolvable;
    /**
     * @Property destination: The destination address in the access control policy.
     * Set this parameter in the following way:
     * If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
     * Example: 10.2.3.0/24.
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
     * If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.
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
     * @Property lang: The natural language of the request and response. Valid values:
     * zh: Chinese
     * en: English
     */
    lang: string | ros.IResolvable | undefined;
    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    regionId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CLOUDFW::VpcFirewallControlPolicy`.
     *
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
//# sourceMappingURL=cloudfw.generated.d.ts.map