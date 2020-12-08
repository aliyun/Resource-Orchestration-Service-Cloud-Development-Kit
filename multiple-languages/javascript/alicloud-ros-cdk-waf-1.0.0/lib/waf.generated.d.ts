import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::WAF::AclRule`
 */
export interface RosAclRuleProps {
    /**
     * @Property domain: Domain name.
     */
    readonly domain: string;
    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string;
    /**
     * @Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
     */
    readonly rules: string;
    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string;
    /**
     * @Property ruleId: Precise access control rule ID
     */
    readonly ruleId?: number;
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
    domain: string;
    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    instanceId: string;
    /**
     * @Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
     */
    rules: string;
    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    region: string | undefined;
    /**
     * @Property ruleId: Precise access control rule ID
     */
    ruleId: number | undefined;
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
    readonly domainName: string;
    /**
     * @Property instanceId: Instance id
     */
    readonly instanceId: string;
    /**
     * @Property isAccessProduct: Is there a seven-layer agency before WAF
     */
    readonly isAccessProduct: string;
    /**
     * @Property sourceIps: Back to source IP configuration
     */
    readonly sourceIps: string[];
    /**
     * @Property clusterType: Cluster type
     */
    readonly clusterType?: string;
    /**
     * @Property connectionTime: Connection timeout
     */
    readonly connectionTime?: number;
    /**
     * @Property http2Port: Http2 port configuration
     */
    readonly http2Port?: string[];
    /**
     * @Property httpPort: Http port configuration
     */
    readonly httpPort?: string[];
    /**
     * @Property httpsPort: Https port configuration
     */
    readonly httpsPort?: string[];
    /**
     * @Property httpsRedirect: Https forced redirect configuration
     */
    readonly httpsRedirect?: string;
    /**
     * @Property httpToUserIp: Http back to source
     */
    readonly httpToUserIp?: string;
    /**
     * @Property loadBalancing: Load balancing configuration
     */
    readonly loadBalancing?: string;
    /**
     * @Property logHeaders: Domain traffic tagging
     */
    readonly logHeaders?: Array<RosDomain.LogHeadersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property readTime: Read connection timeout period
     */
    readonly readTime?: number;
    /**
     * @Property resourceGroupId: Resource group Id
     */
    readonly resourceGroupId?: string;
    /**
     * @Property writeTime: Write connection timeout period
     */
    readonly writeTime?: number;
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
    readonly attrClusterType: any;
    /**
     * @Attribute Cname: CNAME assigned by WAF instance
     */
    readonly attrCname: any;
    /**
     * @Attribute DomainName: Domain name
     */
    readonly attrDomainName: any;
    /**
     * @Attribute Http2Port: Http2 port configuration
     */
    readonly attrHttp2Port: any;
    /**
     * @Attribute HttpPort: Http port configuration
     */
    readonly attrHttpPort: any;
    /**
     * @Attribute HttpToUserIp: Http back to source
     */
    readonly attrHttpToUserIp: any;
    /**
     * @Attribute HttpsPort: Https port configuration
     */
    readonly attrHttpsPort: any;
    /**
     * @Attribute HttpsRedirect: Https forced redirect configuration
     */
    readonly attrHttpsRedirect: any;
    /**
     * @Attribute InstanceId: Instance id
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute IsAccessProduct: Is there a seven-layer agency before WAF
     */
    readonly attrIsAccessProduct: any;
    /**
     * @Attribute LoadBalancing: Load balancing configuration
     */
    readonly attrLoadBalancing: any;
    /**
     * @Attribute LogHeaders: Domain traffic tagging
     */
    readonly attrLogHeaders: any;
    /**
     * @Attribute ResourceGroupId: Resource group Id
     */
    readonly attrResourceGroupId: any;
    /**
     * @Attribute SourceIps: Back to source IP configuration
     */
    readonly attrSourceIps: any;
    /**
     * @Attribute Version: Optimistic lock version
     */
    readonly attrVersion: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: Domain name
     */
    domainName: string;
    /**
     * @Property instanceId: Instance id
     */
    instanceId: string;
    /**
     * @Property isAccessProduct: Is there a seven-layer agency before WAF
     */
    isAccessProduct: string;
    /**
     * @Property sourceIps: Back to source IP configuration
     */
    sourceIps: string[];
    /**
     * @Property clusterType: Cluster type
     */
    clusterType: string | undefined;
    /**
     * @Property connectionTime: Connection timeout
     */
    connectionTime: number | undefined;
    /**
     * @Property http2Port: Http2 port configuration
     */
    http2Port: string[] | undefined;
    /**
     * @Property httpPort: Http port configuration
     */
    httpPort: string[] | undefined;
    /**
     * @Property httpsPort: Https port configuration
     */
    httpsPort: string[] | undefined;
    /**
     * @Property httpsRedirect: Https forced redirect configuration
     */
    httpsRedirect: string | undefined;
    /**
     * @Property httpToUserIp: Http back to source
     */
    httpToUserIp: string | undefined;
    /**
     * @Property loadBalancing: Load balancing configuration
     */
    loadBalancing: string | undefined;
    /**
     * @Property logHeaders: Domain traffic tagging
     */
    logHeaders: Array<RosDomain.LogHeadersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property readTime: Read connection timeout period
     */
    readTime: number | undefined;
    /**
     * @Property resourceGroupId: Resource group Id
     */
    resourceGroupId: string | undefined;
    /**
     * @Property writeTime: Write connection timeout period
     */
    writeTime: number | undefined;
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
        readonly v?: string;
        /**
         * @Property k: The field name of the traffic tag of the domain name
         */
        readonly k?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::WAF::DomainConfig`
 */
export interface RosDomainConfigProps {
    /**
     * @Property domain: Domain name.
     */
    readonly domain: string;
    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string;
    /**
     * @Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
     * 0: none.
     * 1: expressed.
     */
    readonly isAccessProduct: number;
    /**
     * @Property protocols: The domain supports access protocols, values:
     * http: expressed support for the HTTP protocol.
     * https: support for HTTPS protocol.
     * http, https: supports HTTP, HTTPS protocol.
     */
    readonly protocols: string;
    /**
     * @Property httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
     * Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    readonly httpPort?: string;
    /**
     * @Property httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
     * Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    readonly httpsPort?: string;
    /**
     * @Property httpsRedirect: HTTPS is turned forcefully jump the argument:
     * 0: off (default)
     * 1: Turn
     * Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
     */
    readonly httpsRedirect?: number;
    /**
     * @Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
     * 0: off (default)
     * 1: Turn
     * Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
     */
    readonly httpToUserIp?: number;
    /**
     * @Property loadBalancing: Back to the source load balancing policy values:
     * 0: IP Hash way.
     * 1: represents a polling mode.
     */
    readonly loadBalancing?: number;
    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string;
    /**
     * @Property rsType: Back to the source address type the domain name values:
     * 0: back to the source to IP.
     * 1: Indicates the domain name back to the source.
     */
    readonly rsType?: number;
    /**
     * @Property sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
     */
    readonly sourceIps?: string;
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
    readonly attrCname: any;
    /**
     * @Attribute ProtocolType: agreement type:0: indicates that the HTTP protocol is supported.1: indicates that the HTTPS protocol is supported.2: indicates that both HTTP and HTTPS protocols are supported.
     */
    readonly attrProtocolType: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domain: Domain name.
     */
    domain: string;
    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    instanceId: string;
    /**
     * @Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
     * 0: none.
     * 1: expressed.
     */
    isAccessProduct: number;
    /**
     * @Property protocols: The domain supports access protocols, values:
     * http: expressed support for the HTTP protocol.
     * https: support for HTTPS protocol.
     * http, https: supports HTTP, HTTPS protocol.
     */
    protocols: string;
    /**
     * @Property httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
     * Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    httpPort: string | undefined;
    /**
     * @Property httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
     * Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    httpsPort: string | undefined;
    /**
     * @Property httpsRedirect: HTTPS is turned forcefully jump the argument:
     * 0: off (default)
     * 1: Turn
     * Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
     */
    httpsRedirect: number | undefined;
    /**
     * @Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
     * 0: off (default)
     * 1: Turn
     * Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
     */
    httpToUserIp: number | undefined;
    /**
     * @Property loadBalancing: Back to the source load balancing policy values:
     * 0: IP Hash way.
     * 1: represents a polling mode.
     */
    loadBalancing: number | undefined;
    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    region: string | undefined;
    /**
     * @Property rsType: Back to the source address type the domain name values:
     * 0: back to the source to IP.
     * 1: Indicates the domain name back to the source.
     */
    rsType: number | undefined;
    /**
     * @Property sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
     */
    sourceIps: string | undefined;
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
    readonly bigScreen: string;
    /**
     * @Property exclusiveIpPackage:
     */
    readonly exclusiveIpPackage: string;
    /**
     * @Property extBandwidth:
     */
    readonly extBandwidth: string;
    /**
     * @Property extDomainPackage:
     */
    readonly extDomainPackage: string;
    /**
     * @Property logStorage:
     */
    readonly logStorage: string;
    /**
     * @Property logTime:
     */
    readonly logTime: string;
    /**
     * @Property packageCode:
     */
    readonly packageCode: string;
    /**
     * @Property prefessionalService:
     */
    readonly prefessionalService: string;
    /**
     * @Property subscriptionType: Subscription type of the instance
     */
    readonly subscriptionType: string;
    /**
     * @Property wafLog:
     */
    readonly wafLog: string;
    /**
     * @Property period:
     */
    readonly period?: string;
    /**
     * @Property renewalStatus:
     */
    readonly renewalStatus?: string;
    /**
     * @Property renewPeriod:
     */
    readonly renewPeriod?: string;
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
    readonly attrEndDate: any;
    /**
     * @Attribute InDebt: Instance is overdue
     */
    readonly attrInDebt: any;
    /**
     * @Attribute InstanceId: Instance ID
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute RemainDay: Number of available days for WAF Trial version
     */
    readonly attrRemainDay: any;
    /**
     * @Attribute SubscriptionType: Subscription type of the instance
     */
    readonly attrSubscriptionType: any;
    /**
     * @Attribute Trial: Trial version
     */
    readonly attrTrial: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bigScreen:
     */
    bigScreen: string;
    /**
     * @Property exclusiveIpPackage:
     */
    exclusiveIpPackage: string;
    /**
     * @Property extBandwidth:
     */
    extBandwidth: string;
    /**
     * @Property extDomainPackage:
     */
    extDomainPackage: string;
    /**
     * @Property logStorage:
     */
    logStorage: string;
    /**
     * @Property logTime:
     */
    logTime: string;
    /**
     * @Property packageCode:
     */
    packageCode: string;
    /**
     * @Property prefessionalService:
     */
    prefessionalService: string;
    /**
     * @Property subscriptionType: Subscription type of the instance
     */
    subscriptionType: string;
    /**
     * @Property wafLog:
     */
    wafLog: string;
    /**
     * @Property period:
     */
    period: string | undefined;
    /**
     * @Property renewalStatus:
     */
    renewalStatus: string | undefined;
    /**
     * @Property renewPeriod:
     */
    renewPeriod: string | undefined;
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
 * Properties for defining a `ALIYUN::WAF::WafSwitch`
 */
export interface RosWafSwitchProps {
    /**
     * @Property domain: Domain name.
     */
    readonly domain: string;
    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string;
    /**
     * @Property serviceOn: Web attack protection switch, the value of:
     * 0: closed.
     * 1: indicate on.
     */
    readonly serviceOn: number;
    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string;
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
    domain: string;
    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    instanceId: string;
    /**
     * @Property serviceOn: Web attack protection switch, the value of:
     * 0: closed.
     * 1: indicate on.
     */
    serviceOn: number;
    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    region: string | undefined;
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
