import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::DNS::Domain`
 */
export interface RosDomainProps {
    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string;
    /**
     * @Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    readonly groupId?: string;
}
/**
 * A ROS template type:  `ALIYUN::DNS::Domain`
 */
export declare class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::Domain";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DnsServers: The DNS list for the domain name under resolution
     */
    readonly attrDnsServers: any;
    /**
     * @Attribute DomainId: Domain ID
     */
    readonly attrDomainId: any;
    /**
     * @Attribute DomainName: Domain name
     */
    readonly attrDomainName: any;
    /**
     * @Attribute GroupId: Domain name group ID
     */
    readonly attrGroupId: any;
    /**
     * @Attribute GroupName: The name of the domain name group
     */
    readonly attrGroupName: any;
    /**
     * @Attribute PunyCode: punycode returned only for a Chinese domain name
     */
    readonly attrPunyCode: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: Domain name
     */
    domainName: string;
    /**
     * @Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    groupId: string | undefined;
    /**
     * Create a new `ALIYUN::DNS::Domain`.
     *
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
/**
 * Properties for defining a `ALIYUN::DNS::DomainGroup`
 */
export interface RosDomainGroupProps {
    /**
     * @Property groupName: Domain name group name
     */
    readonly groupName: string;
}
/**
 * A ROS template type:  `ALIYUN::DNS::DomainGroup`
 */
export declare class RosDomainGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::DomainGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute GroupId: Domain name group ID
     */
    readonly attrGroupId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: Domain name group name
     */
    groupName: string;
    /**
     * Create a new `ALIYUN::DNS::DomainGroup`.
     *
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
 * Properties for defining a `ALIYUN::DNS::DomainRecord`
 */
export interface RosDomainRecordProps {
    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string;
    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    readonly rr: string;
    /**
     * @Property type: Parse record type, see parsing record type format
     */
    readonly type: string;
    /**
     * @Property value: Record value
     */
    readonly value: string;
    /**
     * @Property line: Parse the line, the default is default. See parsing line enumeration
     */
    readonly line?: string;
    /**
     * @Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
     */
    readonly priority?: number;
    /**
     * @Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
     */
    readonly ttl?: number;
}
/**
 * A ROS template type:  `ALIYUN::DNS::DomainRecord`
 */
export declare class RosDomainRecord extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::DomainRecord";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute RecordId: Parse the ID of the record
     */
    readonly attrRecordId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: Domain name
     */
    domainName: string;
    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    rr: string;
    /**
     * @Property type: Parse record type, see parsing record type format
     */
    type: string;
    /**
     * @Property value: Record value
     */
    value: string;
    /**
     * @Property line: Parse the line, the default is default. See parsing line enumeration
     */
    line: string | undefined;
    /**
     * @Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
     */
    priority: number | undefined;
    /**
     * @Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
     */
    ttl: number | undefined;
    /**
     * Create a new `ALIYUN::DNS::DomainRecord`.
     *
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
