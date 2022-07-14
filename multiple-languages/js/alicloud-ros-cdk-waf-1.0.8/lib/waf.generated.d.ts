import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::WAF::AclRule`
 */
export interface RosAclRuleProps {
    /**
     * @Property domain: Domain name.
     */
    readonly domain: string | ros.IResolvable;
    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
     */
    readonly rules: string | ros.IResolvable;
    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string | ros.IResolvable;
    /**
     * @Property ruleId: Precise access control rule ID
     */
    readonly ruleId?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::WAF::AclRule`
 */
export declare class RosAclRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::AclRule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domain: Domain name.
     */
    domain: string | ros.IResolvable;
    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
     */
    rules: string | ros.IResolvable;
    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    region: string | ros.IResolvable | undefined;
    /**
     * @Property ruleId: Precise access control rule ID
     */
    ruleId: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::WAF::AclRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAclRuleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::WAF::Domain`
 */
export interface RosDomainProps {
    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * @Property instanceId: Instance id
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property isAccessProduct: Is there a seven-layer agency before WAF
     */
    readonly isAccessProduct: string | ros.IResolvable;
    /**
     * @Property sourceIps: Back to source IP configuration
     */
    readonly sourceIps: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clusterType: Cluster type
     */
    readonly clusterType?: string | ros.IResolvable;
    /**
     * @Property connectionTime: Connection timeout
     */
    readonly connectionTime?: number | ros.IResolvable;
    /**
     * @Property http2Port: Http2 port configuration
     */
    readonly http2Port?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property httpPort: Http port configuration
     */
    readonly httpPort?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property httpsPort: Https port configuration
     */
    readonly httpsPort?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property httpsRedirect: Https forced redirect configuration
     */
    readonly httpsRedirect?: string | ros.IResolvable;
    /**
     * @Property httpToUserIp: Http back to source
     */
    readonly httpToUserIp?: string | ros.IResolvable;
    /**
     * @Property loadBalancing: Load balancing configuration
     */
    readonly loadBalancing?: string | ros.IResolvable;
    /**
     * @Property logHeaders: Domain traffic tagging
     */
    readonly logHeaders?: Array<RosDomain.LogHeadersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property readTime: Read connection timeout period
     */
    readonly readTime?: number | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group Id
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property writeTime: Write connection timeout period
     */
    readonly writeTime?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::WAF::Domain`
 */
export declare class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::Domain";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClusterType: Cluster type
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * @Attribute Cname: CNAME assigned by WAF instance
     */
    readonly attrCname: ros.IResolvable;
    /**
     * @Attribute DomainName: Domain name
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * @Attribute Http2Port: Http2 port configuration
     */
    readonly attrHttp2Port: ros.IResolvable;
    /**
     * @Attribute HttpPort: Http port configuration
     */
    readonly attrHttpPort: ros.IResolvable;
    /**
     * @Attribute HttpToUserIp: Http back to source
     */
    readonly attrHttpToUserIp: ros.IResolvable;
    /**
     * @Attribute HttpsPort: Https port configuration
     */
    readonly attrHttpsPort: ros.IResolvable;
    /**
     * @Attribute HttpsRedirect: Https forced redirect configuration
     */
    readonly attrHttpsRedirect: ros.IResolvable;
    /**
     * @Attribute InstanceId: Instance id
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute IsAccessProduct: Is there a seven-layer agency before WAF
     */
    readonly attrIsAccessProduct: ros.IResolvable;
    /**
     * @Attribute LoadBalancing: Load balancing configuration
     */
    readonly attrLoadBalancing: ros.IResolvable;
    /**
     * @Attribute LogHeaders: Domain traffic tagging
     */
    readonly attrLogHeaders: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: Resource group Id
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SourceIps: Back to source IP configuration
     */
    readonly attrSourceIps: ros.IResolvable;
    /**
     * @Attribute Version: Optimistic lock version
     */
    readonly attrVersion: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: Domain name
     */
    domainName: string | ros.IResolvable;
    /**
     * @Property instanceId: Instance id
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property isAccessProduct: Is there a seven-layer agency before WAF
     */
    isAccessProduct: string | ros.IResolvable;
    /**
     * @Property sourceIps: Back to source IP configuration
     */
    sourceIps: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clusterType: Cluster type
     */
    clusterType: string | ros.IResolvable | undefined;
    /**
     * @Property connectionTime: Connection timeout
     */
    connectionTime: number | ros.IResolvable | undefined;
    /**
     * @Property http2Port: Http2 port configuration
     */
    http2Port: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property httpPort: Http port configuration
     */
    httpPort: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property httpsPort: Https port configuration
     */
    httpsPort: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property httpsRedirect: Https forced redirect configuration
     */
    httpsRedirect: string | ros.IResolvable | undefined;
    /**
     * @Property httpToUserIp: Http back to source
     */
    httpToUserIp: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancing: Load balancing configuration
     */
    loadBalancing: string | ros.IResolvable | undefined;
    /**
     * @Property logHeaders: Domain traffic tagging
     */
    logHeaders: Array<RosDomain.LogHeadersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property readTime: Read connection timeout period
     */
    readTime: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group Id
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property writeTime: Write connection timeout period
     */
    writeTime: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::WAF::Domain`.
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
    interface LogHeadersProperty {
        /**
         * @Property v: The value of the traffic tag of the domain name
         */
        readonly v?: string | ros.IResolvable;
        /**
         * @Property k: The field name of the traffic tag of the domain name
         */
        readonly k?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::WAF::DomainConfig`
 */
export interface RosDomainConfigProps {
    /**
     * @Property domain: Domain name.
     */
    readonly domain: string | ros.IResolvable;
    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
     * 0: none.
     * 1: expressed.
     */
    readonly isAccessProduct: number | ros.IResolvable;
    /**
     * @Property protocols: The domain supports access protocols, values:
     * http: expressed support for the HTTP protocol.
     * https: support for HTTPS protocol.
     * http, https: supports HTTP, HTTPS protocol.
     */
    readonly protocols: string | ros.IResolvable;
    /**
     * @Property httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
     * Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    readonly httpPort?: string | ros.IResolvable;
    /**
     * @Property httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
     * Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    readonly httpsPort?: string | ros.IResolvable;
    /**
     * @Property httpsRedirect: HTTPS is turned forcefully jump the argument:
     * 0: off (default)
     * 1: Turn
     * Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
     */
    readonly httpsRedirect?: number | ros.IResolvable;
    /**
     * @Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
     * 0: off (default)
     * 1: Turn
     * Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
     */
    readonly httpToUserIp?: number | ros.IResolvable;
    /**
     * @Property loadBalancing: Back to the source load balancing policy values:
     * 0: IP Hash way.
     * 1: represents a polling mode.
     */
    readonly loadBalancing?: number | ros.IResolvable;
    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string | ros.IResolvable;
    /**
     * @Property rsType: Back to the source address type the domain name values:
     * 0: back to the source to IP.
     * 1: Indicates the domain name back to the source.
     */
    readonly rsType?: number | ros.IResolvable;
    /**
     * @Property sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
     */
    readonly sourceIps?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::WAF::DomainConfig`
 */
export declare class RosDomainConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::DomainConfig";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Cname: CNAME assigned by WAF instance.
     */
    readonly attrCname: ros.IResolvable;
    /**
     * @Attribute ProtocolType: agreement type:0: indicates that the HTTP protocol is supported.1: indicates that the HTTPS protocol is supported.2: indicates that both HTTP and HTTPS protocols are supported.
     */
    readonly attrProtocolType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domain: Domain name.
     */
    domain: string | ros.IResolvable;
    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
     * 0: none.
     * 1: expressed.
     */
    isAccessProduct: number | ros.IResolvable;
    /**
     * @Property protocols: The domain supports access protocols, values:
     * http: expressed support for the HTTP protocol.
     * https: support for HTTPS protocol.
     * http, https: supports HTTP, HTTPS protocol.
     */
    protocols: string | ros.IResolvable;
    /**
     * @Property httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
     * Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    httpPort: string | ros.IResolvable | undefined;
    /**
     * @Property httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
     * Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    httpsPort: string | ros.IResolvable | undefined;
    /**
     * @Property httpsRedirect: HTTPS is turned forcefully jump the argument:
     * 0: off (default)
     * 1: Turn
     * Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
     */
    httpsRedirect: number | ros.IResolvable | undefined;
    /**
     * @Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
     * 0: off (default)
     * 1: Turn
     * Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
     */
    httpToUserIp: number | ros.IResolvable | undefined;
    /**
     * @Property loadBalancing: Back to the source load balancing policy values:
     * 0: IP Hash way.
     * 1: represents a polling mode.
     */
    loadBalancing: number | ros.IResolvable | undefined;
    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    region: string | ros.IResolvable | undefined;
    /**
     * @Property rsType: Back to the source address type the domain name values:
     * 0: back to the source to IP.
     * 1: Indicates the domain name back to the source.
     */
    rsType: number | ros.IResolvable | undefined;
    /**
     * @Property sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
     */
    sourceIps: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::WAF::DomainConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainConfigProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::WAF::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property bigScreen:
     */
    readonly bigScreen: string | ros.IResolvable;
    /**
     * @Property exclusiveIpPackage:
     */
    readonly exclusiveIpPackage: string | ros.IResolvable;
    /**
     * @Property extBandwidth:
     */
    readonly extBandwidth: string | ros.IResolvable;
    /**
     * @Property extDomainPackage:
     */
    readonly extDomainPackage: string | ros.IResolvable;
    /**
     * @Property logStorage:
     */
    readonly logStorage: string | ros.IResolvable;
    /**
     * @Property logTime:
     */
    readonly logTime: string | ros.IResolvable;
    /**
     * @Property packageCode:
     */
    readonly packageCode: string | ros.IResolvable;
    /**
     * @Property prefessionalService:
     */
    readonly prefessionalService: string | ros.IResolvable;
    /**
     * @Property subscriptionType: Subscription type of the instance
     */
    readonly subscriptionType: string | ros.IResolvable;
    /**
     * @Property wafLog:
     */
    readonly wafLog: string | ros.IResolvable;
    /**
     * @Property period:
     */
    readonly period?: string | ros.IResolvable;
    /**
     * @Property renewalStatus:
     */
    readonly renewalStatus?: string | ros.IResolvable;
    /**
     * @Property renewPeriod:
     */
    readonly renewPeriod?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::WAF::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute EndDate: Due date of the instance
     */
    readonly attrEndDate: ros.IResolvable;
    /**
     * @Attribute InDebt: Instance is overdue
     */
    readonly attrInDebt: ros.IResolvable;
    /**
     * @Attribute InstanceId: Instance ID
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute RemainDay: Number of available days for WAF Trial version
     */
    readonly attrRemainDay: ros.IResolvable;
    /**
     * @Attribute SubscriptionType: Subscription type of the instance
     */
    readonly attrSubscriptionType: ros.IResolvable;
    /**
     * @Attribute Trial: Trial version
     */
    readonly attrTrial: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bigScreen:
     */
    bigScreen: string | ros.IResolvable;
    /**
     * @Property exclusiveIpPackage:
     */
    exclusiveIpPackage: string | ros.IResolvable;
    /**
     * @Property extBandwidth:
     */
    extBandwidth: string | ros.IResolvable;
    /**
     * @Property extDomainPackage:
     */
    extDomainPackage: string | ros.IResolvable;
    /**
     * @Property logStorage:
     */
    logStorage: string | ros.IResolvable;
    /**
     * @Property logTime:
     */
    logTime: string | ros.IResolvable;
    /**
     * @Property packageCode:
     */
    packageCode: string | ros.IResolvable;
    /**
     * @Property prefessionalService:
     */
    prefessionalService: string | ros.IResolvable;
    /**
     * @Property subscriptionType: Subscription type of the instance
     */
    subscriptionType: string | ros.IResolvable;
    /**
     * @Property wafLog:
     */
    wafLog: string | ros.IResolvable;
    /**
     * @Property period:
     */
    period: string | ros.IResolvable | undefined;
    /**
     * @Property renewalStatus:
     */
    renewalStatus: string | ros.IResolvable | undefined;
    /**
     * @Property renewPeriod:
     */
    renewPeriod: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::WAF::Instance`.
     *
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
 * Properties for defining a `ALIYUN::WAF::LogServiceEnable`
 */
export interface RosLogServiceEnableProps {
    /**
     * @Property domain: The domain name that is added to WAF.
     */
    readonly domain: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the WAF instance.
     * You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::WAF::LogServiceEnable`
 */
export declare class RosLogServiceEnable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::LogServiceEnable";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Domain: The domain name that is added to WAF.
     */
    readonly attrDomain: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the WAF instance.
You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domain: The domain name that is added to WAF.
     */
    domain: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the WAF instance.
     * You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::WAF::LogServiceEnable`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLogServiceEnableProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::WAF::WafSwitch`
 */
export interface RosWafSwitchProps {
    /**
     * @Property domain: Domain name.
     */
    readonly domain: string | ros.IResolvable;
    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property serviceOn: Web attack protection switch, the value of:
     * 0: closed.
     * 1: indicate on.
     */
    readonly serviceOn: number | ros.IResolvable;
    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::WAF::WafSwitch`
 */
export declare class RosWafSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::WafSwitch";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domain: Domain name.
     */
    domain: string | ros.IResolvable;
    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property serviceOn: Web attack protection switch, the value of:
     * 0: closed.
     * 1: indicate on.
     */
    serviceOn: number | ros.IResolvable;
    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    region: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::WAF::WafSwitch`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWafSwitchProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
