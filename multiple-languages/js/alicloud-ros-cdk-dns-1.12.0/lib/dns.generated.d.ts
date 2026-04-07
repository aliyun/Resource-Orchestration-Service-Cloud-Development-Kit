import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccessStrategy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
 */
export interface RosAccessStrategyProps {
    /**
     * @Property defaultAddrPool: The default address pool of the access strategy.
     */
    readonly defaultAddrPool: Array<RosAccessStrategy.DefaultAddrPoolProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property defaultAddrPoolType: The type of the default address pool.
     */
    readonly defaultAddrPoolType: string | ros.IResolvable;
    /**
     * @Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
     */
    readonly defaultMinAvailableAddrNum: number | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the Dns instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property strategyMode: The mode of the access strategy.
     */
    readonly strategyMode: string | ros.IResolvable;
    /**
     * @Property strategyName: The name of the access strategy.
     */
    readonly strategyName: string | ros.IResolvable;
    /**
     * @Property accessMode: The access mode of the access strategy.
     */
    readonly accessMode?: string | ros.IResolvable;
    /**
     * @Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
     */
    readonly defaultLatencyOptimization?: string | ros.IResolvable;
    /**
     * @Property defaultLbaStrategy: The load balancing strategy of the default address pool.
     */
    readonly defaultLbaStrategy?: string | ros.IResolvable;
    /**
     * @Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
     */
    readonly defaultMaxReturnAddrNum?: number | ros.IResolvable;
    /**
     * @Property failoverAddrPool: The failover address pool of the access strategy.
     */
    readonly failoverAddrPool?: Array<RosAccessStrategy.FailoverAddrPoolProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property failoverAddrPoolType: The type of the failover address pool.
     */
    readonly failoverAddrPoolType?: string | ros.IResolvable;
    /**
     * @Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
     */
    readonly failoverLatencyOptimization?: string | ros.IResolvable;
    /**
     * @Property failoverLbaStrategy: The load balancing strategy of the failover address pool.
     */
    readonly failoverLbaStrategy?: string | ros.IResolvable;
    /**
     * @Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
     */
    readonly failoverMaxReturnAddrNum?: number | ros.IResolvable;
    /**
     * @Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
     */
    readonly failoverMinAvailableAddrNum?: number | ros.IResolvable;
    /**
     * @Property lines: The lines of the access strategy.
     */
    readonly lines?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::AccessStrategy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessStrategy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
 */
export declare class RosAccessStrategy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::AccessStrategy";
    /**
     * @Attribute StrategyId: The ID of the access strategy.
     */
    readonly attrStrategyId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property defaultAddrPool: The default address pool of the access strategy.
     */
    defaultAddrPool: Array<RosAccessStrategy.DefaultAddrPoolProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property defaultAddrPoolType: The type of the default address pool.
     */
    defaultAddrPoolType: string | ros.IResolvable;
    /**
     * @Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
     */
    defaultMinAvailableAddrNum: number | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the Dns instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property strategyMode: The mode of the access strategy.
     */
    strategyMode: string | ros.IResolvable;
    /**
     * @Property strategyName: The name of the access strategy.
     */
    strategyName: string | ros.IResolvable;
    /**
     * @Property accessMode: The access mode of the access strategy.
     */
    accessMode: string | ros.IResolvable | undefined;
    /**
     * @Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
     */
    defaultLatencyOptimization: string | ros.IResolvable | undefined;
    /**
     * @Property defaultLbaStrategy: The load balancing strategy of the default address pool.
     */
    defaultLbaStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
     */
    defaultMaxReturnAddrNum: number | ros.IResolvable | undefined;
    /**
     * @Property failoverAddrPool: The failover address pool of the access strategy.
     */
    failoverAddrPool: Array<RosAccessStrategy.FailoverAddrPoolProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property failoverAddrPoolType: The type of the failover address pool.
     */
    failoverAddrPoolType: string | ros.IResolvable | undefined;
    /**
     * @Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
     */
    failoverLatencyOptimization: string | ros.IResolvable | undefined;
    /**
     * @Property failoverLbaStrategy: The load balancing strategy of the failover address pool.
     */
    failoverLbaStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
     */
    failoverMaxReturnAddrNum: number | ros.IResolvable | undefined;
    /**
     * @Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
     */
    failoverMinAvailableAddrNum: number | ros.IResolvable | undefined;
    /**
     * @Property lines: The lines of the access strategy.
     */
    lines: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessStrategyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAccessStrategy {
    /**
     * @stability external
     */
    interface DefaultAddrPoolProperty {
        /**
         * @Property lbaWeight: The load balancing weight of the address pool.
         */
        readonly lbaWeight?: number | ros.IResolvable;
        /**
         * @Property identity: The ID of the address pool.
         */
        readonly identity?: string | ros.IResolvable;
    }
}
export declare namespace RosAccessStrategy {
    /**
     * @stability external
     */
    interface FailoverAddrPoolProperty {
        /**
         * @Property lbaWeight: The load balancing weight of the address pool.
         */
        readonly lbaWeight?: number | ros.IResolvable;
        /**
         * @Property identity: The ID of the address pool.
         */
        readonly identity?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosAddressPool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
 */
export interface RosAddressPoolProps {
    /**
     * @Property addr: The list of addresses in the address pool.
     */
    readonly addr: Array<RosAddressPool.AddrProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the GTM instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property lbaStrategy: The load balancing strategy. Valid values: RoundRobin, Weighted, FallbackToFirst.
     */
    readonly lbaStrategy: string | ros.IResolvable;
    /**
     * @Property name: The name of the address pool.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property type: The type of the address pool. Valid values: Ipv4, Ipv6, Domain.
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
     */
    readonly evaluationCount?: number | ros.IResolvable;
    /**
     * @Property interval: The interval between two consecutive health checks, in seconds.
     */
    readonly interval?: number | ros.IResolvable;
    /**
     * @Property ispCityNode: The list of ISP city nodes.
     */
    readonly ispCityNode?: Array<RosAddressPool.IspCityNodeProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property monitorExtendInfo: The extended information of the health check.
     */
    readonly monitorExtendInfo?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property monitorStatus: The monitoring status of the address pool.
     */
    readonly monitorStatus?: string | ros.IResolvable;
    /**
     * @Property protocolType: The protocol type.
     */
    readonly protocolType?: string | ros.IResolvable;
    /**
     * @Property timeout: The timeout period of a health check, in seconds.
     */
    readonly timeout?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::AddressPool`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AddressPool` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
 */
export declare class RosAddressPool extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::AddressPool";
    /**
     * @Attribute AddrPoolId: The ID of the address pool.
     */
    readonly attrAddrPoolId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addr: The list of addresses in the address pool.
     */
    addr: Array<RosAddressPool.AddrProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the GTM instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property lbaStrategy: The load balancing strategy. Valid values: RoundRobin, Weighted, FallbackToFirst.
     */
    lbaStrategy: string | ros.IResolvable;
    /**
     * @Property name: The name of the address pool.
     */
    name: string | ros.IResolvable;
    /**
     * @Property type: The type of the address pool. Valid values: Ipv4, Ipv6, Domain.
     */
    type: string | ros.IResolvable;
    /**
     * @Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
     */
    evaluationCount: number | ros.IResolvable | undefined;
    /**
     * @Property interval: The interval between two consecutive health checks, in seconds.
     */
    interval: number | ros.IResolvable | undefined;
    /**
     * @Property ispCityNode: The list of ISP city nodes.
     */
    ispCityNode: Array<RosAddressPool.IspCityNodeProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property monitorExtendInfo: The extended information of the health check.
     */
    monitorExtendInfo: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property monitorStatus: The monitoring status of the address pool.
     */
    monitorStatus: string | ros.IResolvable | undefined;
    /**
     * @Property protocolType: The protocol type.
     */
    protocolType: string | ros.IResolvable | undefined;
    /**
     * @Property timeout: The timeout period of a health check, in seconds.
     */
    timeout: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddressPoolProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAddressPool {
    /**
     * @stability external
     */
    interface AddrProperty {
        /**
         * @Property attributeInfo: The attribute information of the address.
         */
        readonly attributeInfo: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property lbaWeight: The weight of the address.
         */
        readonly lbaWeight?: number | ros.IResolvable;
        /**
         * @Property mode: The mode of the address. Valid values: Normal, Maintenance.
         */
        readonly mode: string | ros.IResolvable;
        /**
         * @Property addr: The address value.
         */
        readonly addr: string | ros.IResolvable;
        /**
         * @Property remark: The remark of the address.
         */
        readonly remark?: string | ros.IResolvable;
    }
}
export declare namespace RosAddressPool {
    /**
     * @stability external
     */
    interface IspCityNodeProperty {
        /**
         * @Property cityCode: The city code.
         */
        readonly cityCode?: string | ros.IResolvable;
        /**
         * @Property ispCode: The ISP code.
         */
        readonly ispCode?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosCacheDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
 */
export interface RosCacheDomainProps {
    /**
     * @Property cacheTtlMax: The maximum TTL value for cached records.
     */
    readonly cacheTtlMax: number | ros.IResolvable;
    /**
     * @Property cacheTtlMin: The minimum TTL value for cached records.
     */
    readonly cacheTtlMin: number | ros.IResolvable;
    /**
     * @Property domainName: The domain name of the DNS cache domain.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * @Property instanceId: The instance ID associated with the DNS cache domain.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property sourceDnsServer: List of source DNS servers.
     */
    readonly sourceDnsServer: Array<RosCacheDomain.SourceDnsServerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sourceEdns: Whether EDNS is enabled for the source DNS server.
     */
    readonly sourceEdns: string | ros.IResolvable;
    /**
     * @Property sourceProtocol: The protocol used by the source DNS server.
     */
    readonly sourceProtocol: string | ros.IResolvable;
    /**
     * @Property remark: Remark for the DNS cache domain.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::CacheDomain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CacheDomain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
 */
export declare class RosCacheDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::CacheDomain";
    /**
     * @Attribute DomainName: The domain name of the DNS cache.
     */
    readonly attrDomainName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cacheTtlMax: The maximum TTL value for cached records.
     */
    cacheTtlMax: number | ros.IResolvable;
    /**
     * @Property cacheTtlMin: The minimum TTL value for cached records.
     */
    cacheTtlMin: number | ros.IResolvable;
    /**
     * @Property domainName: The domain name of the DNS cache domain.
     */
    domainName: string | ros.IResolvable;
    /**
     * @Property instanceId: The instance ID associated with the DNS cache domain.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property sourceDnsServer: List of source DNS servers.
     */
    sourceDnsServer: Array<RosCacheDomain.SourceDnsServerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sourceEdns: Whether EDNS is enabled for the source DNS server.
     */
    sourceEdns: string | ros.IResolvable;
    /**
     * @Property sourceProtocol: The protocol used by the source DNS server.
     */
    sourceProtocol: string | ros.IResolvable;
    /**
     * @Property remark: Remark for the DNS cache domain.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCacheDomainProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCacheDomain {
    /**
     * @stability external
     */
    interface SourceDnsServerProperty {
        /**
         * @Property port: Port of the source DNS server.
         */
        readonly port: string | ros.IResolvable;
        /**
         * @Property host: Host of the source DNS server.
         */
        readonly host: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosCustomLine`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
 */
export interface RosCustomLineProps {
    /**
     * @Property domainName: The domain name associated with the custom line.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * @Property ipSegment: The list of IP segments for the custom line.
     */
    readonly ipSegment: Array<RosCustomLine.IpSegmentProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property lineName: The name of the custom line.
     */
    readonly lineName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::CustomLine`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomLine` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
 */
export declare class RosCustomLine extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::CustomLine";
    /**
     * @Attribute LineId: The ID of the custom line.
     */
    readonly attrLineId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: The domain name associated with the custom line.
     */
    domainName: string | ros.IResolvable;
    /**
     * @Property ipSegment: The list of IP segments for the custom line.
     */
    ipSegment: Array<RosCustomLine.IpSegmentProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property lineName: The name of the custom line.
     */
    lineName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomLineProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCustomLine {
    /**
     * @stability external
     */
    interface IpSegmentProperty {
        /**
         * @Property startIp: The start IP address of the segment.
         */
        readonly startIp?: string | ros.IResolvable;
        /**
         * @Property endIp: The end IP address of the segment.
         */
        readonly endIp?: string | ros.IResolvable;
    }
}
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::Domain`, which is used to add a domain name.
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
 * Properties for defining a `RosDomainAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainattachment
 */
export interface RosDomainAttachmentProps {
    /**
     * @Property domainNames: The list of domain names to attach.
     */
    readonly domainNames: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::DomainAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainattachment
 */
export declare class RosDomainAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::DomainAttachment";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainNames: The list of domain names to attach.
     */
    domainNames: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainAttachmentProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::DomainGroup`, which is used to add a domain name group.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::DomainRecord`, which is used to add a Domain Name System (DNS) record.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::Instance`, which is used to create an Alibaba Cloud DNS instance.
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
/**
 * Properties for defining a `RosMonitorConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
 */
export interface RosMonitorConfigProps {
    /**
     * @Property addrPoolId: The ID of the address pool.
     */
    readonly addrPoolId: string | ros.IResolvable;
    /**
     * @Property evaluationCount: The evaluation count of the monitor.
     */
    readonly evaluationCount: number | ros.IResolvable;
    /**
     * @Property interval: The interval of the monitor.
     */
    readonly interval: number | ros.IResolvable;
    /**
     * @Property ispCityNode: The ISP city node list.
     */
    readonly ispCityNode: Array<RosMonitorConfig.IspCityNodeProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property monitorExtendInfo: The extend info of the monitor.
     */
    readonly monitorExtendInfo: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property protocolType: The protocol type of the monitor.
     */
    readonly protocolType: string | ros.IResolvable;
    /**
     * @Property timeout: The timeout of the monitor.
     */
    readonly timeout: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::MonitorConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MonitorConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
 */
export declare class RosMonitorConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::MonitorConfig";
    /**
     * @Attribute MonitorConfigId: The ID of the monitor config.
     */
    readonly attrMonitorConfigId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addrPoolId: The ID of the address pool.
     */
    addrPoolId: string | ros.IResolvable;
    /**
     * @Property evaluationCount: The evaluation count of the monitor.
     */
    evaluationCount: number | ros.IResolvable;
    /**
     * @Property interval: The interval of the monitor.
     */
    interval: number | ros.IResolvable;
    /**
     * @Property ispCityNode: The ISP city node list.
     */
    ispCityNode: Array<RosMonitorConfig.IspCityNodeProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property monitorExtendInfo: The extend info of the monitor.
     */
    monitorExtendInfo: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property protocolType: The protocol type of the monitor.
     */
    protocolType: string | ros.IResolvable;
    /**
     * @Property timeout: The timeout of the monitor.
     */
    timeout: number | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitorConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosMonitorConfig {
    /**
     * @stability external
     */
    interface IspCityNodeProperty {
        /**
         * @Property cityCode: The city code of the ISP city node.
         */
        readonly cityCode?: string | ros.IResolvable;
        /**
         * @Property ispCode: The ISP code of the ISP city node.
         */
        readonly ispCode?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosRecoveryPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan
 */
export interface RosRecoveryPlanProps {
    /**
     * @Property faultAddrPool: The fault address pool of the recovery plan. The value must be encoded in UTF-8.
     */
    readonly faultAddrPool: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property name: The name of the recovery plan. The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property lang: The language of the request.
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * @Property remark: The remark of the recovery plan. The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::RecoveryPlan`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RecoveryPlan` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan
 */
export declare class RosRecoveryPlan extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::RecoveryPlan";
    /**
     * @Attribute RecoveryPlanId: The ID of the recovery plan.
     */
    readonly attrRecoveryPlanId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property faultAddrPool: The fault address pool of the recovery plan. The value must be encoded in UTF-8.
     */
    faultAddrPool: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property name: The name of the recovery plan. The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
     */
    name: string | ros.IResolvable;
    /**
     * @Property lang: The language of the request.
     */
    lang: string | ros.IResolvable | undefined;
    /**
     * @Property remark: The remark of the recovery plan. The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRecoveryPlanProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
