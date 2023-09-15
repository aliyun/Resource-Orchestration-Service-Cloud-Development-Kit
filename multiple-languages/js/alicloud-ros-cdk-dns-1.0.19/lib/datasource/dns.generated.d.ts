import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::DNS::DomainGroups`
 */
export interface RosDomainGroupsProps {
    /**
     * @Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    readonly keyWord?: string | ros.IResolvable;
    /**
     * @Property lang: The language type.
     */
    readonly lang?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::DNS::DomainGroups`
 */
export declare class RosDomainGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DNS::DomainGroups";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DomainGroupIds: The list of The DNS domain group ids.
     */
    readonly attrDomainGroupIds: ros.IResolvable;
    /**
     * @Attribute DomainGroups: The information about DNS domain groups.
     */
    readonly attrDomainGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    keyWord: string | ros.IResolvable | undefined;
    /**
     * @Property lang: The language type.
     */
    lang: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::DNS::DomainGroups`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainGroupsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::DNS::DomainRecords`
 */
export interface RosDomainRecordsProps {
    /**
     * @Property domainName: The domain name for which you want to query DNS records.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * @Property direction: The order in which the returned DNS records are sorted.
     */
    readonly direction?: string | ros.IResolvable;
    /**
     * @Property groupId: The ID of the domain name group.
     */
    readonly groupId?: string | ros.IResolvable;
    /**
     * @Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    readonly keyWord?: string | ros.IResolvable;
    /**
     * @Property lang: The language type.
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * @Property line: The line based on which the system queries DNS records.
     */
    readonly line?: string | ros.IResolvable;
    /**
     * @Property orderBy: The method that is used to sort the returned DNS records.
     */
    readonly orderBy?: string | ros.IResolvable;
    /**
     * @Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.
     */
    readonly rrKeyWord?: string | ros.IResolvable;
    /**
     * @Property searchMode: The search mode.
     */
    readonly searchMode?: string | ros.IResolvable;
    /**
     * @Property status: The status of the DNS records to query.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property type: The type of the DNS records to query.
     */
    readonly type?: string | ros.IResolvable;
    /**
     * @Property typeKeyWord: The type keyword based on which the system queries DNS records.
     */
    readonly typeKeyWord?: string | ros.IResolvable;
    /**
     * @Property valueKeyWord: The record value keyword based on which the system queries DNS records.
     */
    readonly valueKeyWord?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::DNS::DomainRecords`
 */
export declare class RosDomainRecords extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DNS::DomainRecords";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DomainRecordIds: The list of The DNS domain record ids.
     */
    readonly attrDomainRecordIds: ros.IResolvable;
    /**
     * @Attribute DomainRecords: The information about DNS records.
     */
    readonly attrDomainRecords: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: The domain name for which you want to query DNS records.
     */
    domainName: string | ros.IResolvable;
    /**
     * @Property direction: The order in which the returned DNS records are sorted.
     */
    direction: string | ros.IResolvable | undefined;
    /**
     * @Property groupId: The ID of the domain name group.
     */
    groupId: string | ros.IResolvable | undefined;
    /**
     * @Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    keyWord: string | ros.IResolvable | undefined;
    /**
     * @Property lang: The language type.
     */
    lang: string | ros.IResolvable | undefined;
    /**
     * @Property line: The line based on which the system queries DNS records.
     */
    line: string | ros.IResolvable | undefined;
    /**
     * @Property orderBy: The method that is used to sort the returned DNS records.
     */
    orderBy: string | ros.IResolvable | undefined;
    /**
     * @Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.
     */
    rrKeyWord: string | ros.IResolvable | undefined;
    /**
     * @Property searchMode: The search mode.
     */
    searchMode: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the DNS records to query.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property type: The type of the DNS records to query.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @Property typeKeyWord: The type keyword based on which the system queries DNS records.
     */
    typeKeyWord: string | ros.IResolvable | undefined;
    /**
     * @Property valueKeyWord: The record value keyword based on which the system queries DNS records.
     */
    valueKeyWord: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::DNS::DomainRecords`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainRecordsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::DNS::Domains`
 */
export interface RosDomainsProps {
    /**
     * @Property groupId: The ID of the domain name group. If you do not specify this parameter, all domain names are queried by default.
     */
    readonly groupId?: string | ros.IResolvable;
    /**
     * @Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    readonly keyWord?: string | ros.IResolvable;
    /**
     * @Property lang: The language type.
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property searchMode: The search mode.
     */
    readonly searchMode?: string | ros.IResolvable;
    /**
     * @Property starmark: Specifies whether to query the starmark of the domain name.
     */
    readonly starmark?: boolean | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::DNS::Domains`
 */
export declare class RosDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DNS::Domains";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DomainIds: The list of The DNS domain ids.
     */
    readonly attrDomainIds: ros.IResolvable;
    /**
     * @Attribute Domains: The information about DNS domains.
     */
    readonly attrDomains: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupId: The ID of the domain name group. If you do not specify this parameter, all domain names are queried by default.
     */
    groupId: string | ros.IResolvable | undefined;
    /**
     * @Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    keyWord: string | ros.IResolvable | undefined;
    /**
     * @Property lang: The language type.
     */
    lang: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property searchMode: The search mode.
     */
    searchMode: string | ros.IResolvable | undefined;
    /**
     * @Property starmark: Specifies whether to query the starmark of the domain name.
     */
    starmark: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::DNS::Domains`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
