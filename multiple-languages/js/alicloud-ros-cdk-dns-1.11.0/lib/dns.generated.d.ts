import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
 */
export interface RosDomainProps {
    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * @Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    readonly groupId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDomain.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::Domain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
 */
export declare class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::Domain";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute DnsServers: The DNS list for the domain name under resolution
     */
    readonly attrDnsServers: ros.IResolvable;
    /**
     * @Attribute DomainId: Domain ID
     */
    readonly attrDomainId: ros.IResolvable;
    /**
     * @Attribute DomainName: Domain name
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * @Attribute GroupId: Domain name group ID
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * @Attribute GroupName: The name of the domain name group
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * @Attribute PunyCode: punycode returned only for a Chinese domain name
     */
    readonly attrPunyCode: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: Domain name
     */
    domainName: string | ros.IResolvable;
    /**
     * @Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    groupId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosDomain.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDomain {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDomainGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
 */
export interface RosDomainGroupProps {
    /**
     * @Property groupName: Domain name group name
     */
    readonly groupName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::DomainGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
 */
export declare class RosDomainGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::DomainGroup";
    /**
     * @Attribute GroupId: Domain name group ID
     */
    readonly attrGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: Domain name group name
     */
    groupName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDomainRecord`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
 */
export interface RosDomainRecordProps {
    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    readonly rr: string | ros.IResolvable;
    /**
     * @Property type: Parse record type, see parsing record type format
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property value: Record value
     */
    readonly value: string | ros.IResolvable;
    /**
     * @Property line: Parse the line, the default is default. See parsing line enumeration
     */
    readonly line?: string | ros.IResolvable;
    /**
     * @Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * @Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
     */
    readonly ttl?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::DomainRecord`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainRecord` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
 */
export declare class RosDomainRecord extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::DomainRecord";
    /**
     * @Attribute RecordId: Parse the ID of the record
     */
    readonly attrRecordId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: Domain name
     */
    domainName: string | ros.IResolvable;
    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    rr: string | ros.IResolvable;
    /**
     * @Property type: Parse record type, see parsing record type format
     */
    type: string | ros.IResolvable;
    /**
     * @Property value: Record value
     */
    value: string | ros.IResolvable;
    /**
     * @Property line: Parse the line, the default is default. See parsing line enumeration
     */
    line: string | ros.IResolvable | undefined;
    /**
     * @Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
     */
    priority: number | ros.IResolvable | undefined;
    /**
     * @Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
     */
    ttl: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainRecordProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
 */
export interface RosInstanceProps {
    /**
     * @Property dnsSecurity: The DNS security policy. Valid values:
     * - no: No protection against DNS attacks is provided.
     * - basic: Basic protection against DNS attacks is provided.
     * - advanced: Advanced protection against DNS attacks is provided.
     */
    readonly dnsSecurity: string | ros.IResolvable;
    /**
     * @Property domainNumbers: The number of domain names.
     */
    readonly domainNumbers: number | ros.IResolvable;
    /**
     * @Property period: The subscription duration. Valid values:
     * - If unit is month: 1, 2, 3, 6
     * - If unit is year: 1, 2
     */
    readonly period: number | ros.IResolvable;
    /**
     * @Property periodUnit: The subscription duration unit.
     */
    readonly periodUnit: string | ros.IResolvable;
    /**
     * @Property version: The edition of Alibaba Cloud DNS. Valid values:
     * If create hosted public zone:
     * - version_personal: Personal Edition.
     * - version_enterprise_basic: Enterprise Standard Edition.
     * - version_enterprise_advanced: Enterprise Ultimate Edition.
     * If create cached public zone:
     * - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
     */
    readonly version: string | ros.IResolvable;
    /**
     * @Property domain: The domain name that you want to bind to the instance. If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
     */
    readonly domain?: string | ros.IResolvable;
    /**
     * @Property instanceType: The type of the instance. Valid values:
     * - HostedPublicZone: Hosted Public Zone
     * - CachedPublicZone: Cached Public Zone.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property renewalStatus: The renewal method. Valid values:
     * - AutoRenewal: The instance is automatically renewed.
     * - ManualRenewal: The instance is manually renewed.
     * Default value: ManualRenewal.
     */
    readonly renewalStatus?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::Instance";
    /**
     * @Attribute InstanceId: DNS instance id.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dnsSecurity: The DNS security policy. Valid values:
     * - no: No protection against DNS attacks is provided.
     * - basic: Basic protection against DNS attacks is provided.
     * - advanced: Advanced protection against DNS attacks is provided.
     */
    dnsSecurity: string | ros.IResolvable;
    /**
     * @Property domainNumbers: The number of domain names.
     */
    domainNumbers: number | ros.IResolvable;
    /**
     * @Property period: The subscription duration. Valid values:
     * - If unit is month: 1, 2, 3, 6
     * - If unit is year: 1, 2
     */
    period: number | ros.IResolvable;
    /**
     * @Property periodUnit: The subscription duration unit.
     */
    periodUnit: string | ros.IResolvable;
    /**
     * @Property version: The edition of Alibaba Cloud DNS. Valid values:
     * If create hosted public zone:
     * - version_personal: Personal Edition.
     * - version_enterprise_basic: Enterprise Standard Edition.
     * - version_enterprise_advanced: Enterprise Ultimate Edition.
     * If create cached public zone:
     * - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
     */
    version: string | ros.IResolvable;
    /**
     * @Property domain: The domain name that you want to bind to the instance. If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
     */
    domain: string | ros.IResolvable | undefined;
    /**
     * @Property instanceType: The type of the instance. Valid values:
     * - HostedPublicZone: Hosted Public Zone
     * - CachedPublicZone: Cached Public Zone.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property renewalStatus: The renewal method. Valid values:
     * - AutoRenewal: The instance is automatically renewed.
     * - ManualRenewal: The instance is manually renewed.
     * Default value: ManualRenewal.
     */
    renewalStatus: string | ros.IResolvable | undefined;
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
