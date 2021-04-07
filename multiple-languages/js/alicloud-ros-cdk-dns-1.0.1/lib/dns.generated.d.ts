import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::DNS::Domain`
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
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDomain.TagsProperty[];
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
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosDomain.TagsProperty[] | undefined;
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
 * Properties for defining a `ALIYUN::DNS::DomainGroup`
 */
export interface RosDomainGroupProps {
    /**
     * @Property groupName: Domain name group name
     */
    readonly groupName: string | ros.IResolvable;
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
    readonly attrGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: Domain name group name
     */
    groupName: string | ros.IResolvable;
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
