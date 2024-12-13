import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-instance
 */
export interface RosInstanceProps {
    /**
     * @Property payType: The billing method of the firewall instance. Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo).
     *  If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
     */
    readonly region: string | ros.IResolvable;
    /**
     * @Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests. You can add protection nodes to increase protection capabilities.
     */
    readonly additionalProtectionNodes?: number | ros.IResolvable;
    /**
     * @Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur. After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
     */
    readonly apiSecurity?: boolean | ros.IResolvable;
    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property botAppProtection: Bot management module for App protection.
     */
    readonly botAppProtection?: boolean | ros.IResolvable;
    /**
     * @Property botWebProtection: Bot management module for Web application protection.
     */
    readonly botWebProtection?: boolean | ros.IResolvable;
    /**
     * @Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.
     */
    readonly domainsExtension?: number | ros.IResolvable;
    /**
     * @Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions. In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
     */
    readonly elasticQps?: number | ros.IResolvable;
    /**
     * @Property exclusiveIpAddress: Excluesive IP address number.
     */
    readonly exclusiveIpAddress?: number | ros.IResolvable;
    /**
     * @Property fraudDetection: You can enable this feature only after you enable the bot management module. If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
     */
    readonly fraudDetection?: boolean | ros.IResolvable;
    /**
     * @Property ignoreExisting: Whether to ignore existing WAF3 instance
     * False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored.
     * If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;
    /**
     * @Property intelligentLoadBalancing: Intelligent load balancer for WAF instance.
     */
    readonly intelligentLoadBalancing?: boolean | ros.IResolvable;
    /**
     * @Property logService: Log service for WAF instance.
     */
    readonly logService?: boolean | ros.IResolvable;
    /**
     * @Property logStorage: Log storage capacity.
     */
    readonly logStorage?: number | ros.IResolvable;
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
     * @Property qpsExtension: Extended QPS.
     */
    readonly qpsExtension?: number | ros.IResolvable;
    /**
     * @Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.
     */
    readonly trafficBillingProtectionThreshold?: number | ros.IResolvable;
    /**
     * @Property wafVersion: The version of WAF3.0.
     *
     */
    readonly wafVersion?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::WAF3::Instance`, which is used to create a Web Application Firewall (WAF) 3.0 instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF3::Instance";
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
     * @Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo).
     *  If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
     */
    region: string | ros.IResolvable;
    /**
     * @Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests. You can add protection nodes to increase protection capabilities.
     */
    additionalProtectionNodes: number | ros.IResolvable | undefined;
    /**
     * @Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur. After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
     */
    apiSecurity: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property botAppProtection: Bot management module for App protection.
     */
    botAppProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property botWebProtection: Bot management module for Web application protection.
     */
    botWebProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.
     */
    domainsExtension: number | ros.IResolvable | undefined;
    /**
     * @Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions. In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
     */
    elasticQps: number | ros.IResolvable | undefined;
    /**
     * @Property exclusiveIpAddress: Excluesive IP address number.
     */
    exclusiveIpAddress: number | ros.IResolvable | undefined;
    /**
     * @Property fraudDetection: You can enable this feature only after you enable the bot management module. If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
     */
    fraudDetection: boolean | ros.IResolvable | undefined;
    /**
     * @Property ignoreExisting: Whether to ignore existing WAF3 instance
     * False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored.
     * If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.
     */
    ignoreExisting: boolean | ros.IResolvable | undefined;
    /**
     * @Property intelligentLoadBalancing: Intelligent load balancer for WAF instance.
     */
    intelligentLoadBalancing: boolean | ros.IResolvable | undefined;
    /**
     * @Property logService: Log service for WAF instance.
     */
    logService: boolean | ros.IResolvable | undefined;
    /**
     * @Property logStorage: Log storage capacity.
     */
    logStorage: number | ros.IResolvable | undefined;
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
     * @Property qpsExtension: Extended QPS.
     */
    qpsExtension: number | ros.IResolvable | undefined;
    /**
     * @Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.
     */
    trafficBillingProtectionThreshold: number | ros.IResolvable | undefined;
    /**
     * @Property wafVersion: The version of WAF3.0.
     *
     */
    wafVersion: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosTGW`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-tgw
 */
export interface RosTGWProps {
    /**
     * @Property instanceId: The ID of the WAF instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property listen: Listening information.
     */
    readonly listen: RosTGW.ListenProperty | ros.IResolvable;
    /**
     * @Property redirect: Forwarding information.
     */
    readonly redirect?: RosTGW.RedirectProperty | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::WAF3::TGW`, which is used to add a resource to Web Application Firewall (WAF) in transparent proxy mode.
 * @Note This class does not contain additional functions, so it is recommended to use the `TGW` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-tgw
 */
export declare class RosTGW extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF3::TGW";
    /**
     * @Attribute InstanceId: The ID of the WAF instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute Port: Access the cloud product port of WAF.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * @Attribute ResourceProduct: Access to WAF cloud products.
     */
    readonly attrResourceProduct: ros.IResolvable;
    /**
     * @Attribute TgwId: The protection object ID of the transparent access resource.
     */
    readonly attrTgwId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the WAF instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property listen: Listening information.
     */
    listen: RosTGW.ListenProperty | ros.IResolvable;
    /**
     * @Property redirect: Forwarding information.
     */
    redirect: RosTGW.RedirectProperty | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTGWProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosTGW {
    /**
     * @stability external
     */
    interface CertificatesProperty {
        /**
         * @Property appliedType: The certificate type for the HTTPS protocol. Valid values:
     * default: Indicates the default certificate.
     * extension: Indicates an extended certificate.
         */
        readonly appliedType?: string | ros.IResolvable;
        /**
         * @Property certificateId: The ID of the certificate that was added.
         */
        readonly certificateId?: string | ros.IResolvable;
    }
}
export declare namespace RosTGW {
    /**
     * @stability external
     */
    interface ListenProperty {
        /**
         * @Property customCiphers: Customize the encryption suite list. This parameter is used only when CipherSuite is set to 99.
         */
        readonly customCiphers?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tlsVersion: The TLS version to be added. This parameter is used only when the value of HttpsPorts is not empty (indicating that the domain name uses the HTTPS protocol). Values:
     * tlsv1
     * tlsv1.1
     * tlsv1.2
         */
        readonly tlsVersion?: string | ros.IResolvable;
        /**
         * @Property http2Enabled: Whether to enable HTTP2. This parameter is used only when the value of HttpsPorts is not empty (indicating that the domain name uses the HTTPS protocol). Values:
     * true: Enable HTTP2.
     * false (default): Disable HTTP2.
         */
        readonly http2Enabled?: boolean | ros.IResolvable;
        /**
         * @Property cipherSuite: The type of encryption suite to be added. This parameter is used only when the value of HttpsPorts is not empty (indicating that the domain name uses the HTTPS protocol). Values:
     * 1: Indicates adding all encryption suites.
     * 2: Indicates adding a strong encryption suite. This value can be selected only when the value of TLSVersion is tlsv1.2.
     * 99: Indicates adding a custom encryption suite.
         */
        readonly cipherSuite?: number | ros.IResolvable;
        /**
         * @Property enableTlSv3: Whether to support TSL1.3 version. This parameter is used only when the value of HttpsPorts is not empty (indicating that the domain name uses the HTTPS protocol). Value:
     * true: indicates that TSL1.3 version is supported.
     * false: indicates that TSL1.3 version is not supported.
         */
        readonly enableTlSv3?: boolean | ros.IResolvable;
        /**
         * @Property port: Access the cloud product port of WAF.
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property resourceProduct: Access to WAF cloud products.
         */
        readonly resourceProduct: string | ros.IResolvable;
        /**
         * @Property certificates: The domain name bound to the certificate.
         */
        readonly certificates?: Array<RosTGW.CertificatesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property protocol: Protocol type
         */
        readonly protocol: string | ros.IResolvable;
        /**
         * @Property resourceInstanceId: The instance ID of the cloud product connected to WAF.
         */
        readonly resourceInstanceId: string | ros.IResolvable;
    }
}
export declare namespace RosTGW {
    /**
     * @stability external
     */
    interface RedirectProperty {
        /**
         * @Property xffHeaders: Sets a custom field list for obtaining the client IP, expressed in the format of ["header1", "header2", ...].
         */
        readonly xffHeaders?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property writeTimeout: Write timeout duration, unit: seconds. Value range: 1~3600.
         */
        readonly writeTimeout?: number | ros.IResolvable;
        /**
         * @Property xffHeaderMode: The way WAF obtains the client's real IP. Value:
     * 0 (default): indicates that the client access traffic is not forwarded by other seven-layer proxies before reaching WAF.
     * 1: indicates that WAF reads the first value of the X-Forwarded-For (XFF) field in the request header as the client IP.
     * 2: indicates that WAF reads the custom field value set by you in the request header as the client IP.
         */
        readonly xffHeaderMode?: number | ros.IResolvable;
        /**
         * @Property keepalive: Whether to maintain a long connection. Value:
     * true (default): indicates to maintain a long connection.
     * false: indicates not to maintain a long connection.
         */
        readonly keepalive?: boolean | ros.IResolvable;
        /**
         * @Property requestHeaders: The traffic tag field and value of the domain name, used to tag traffic processed by WAF.
         */
        readonly requestHeaders?: Array<RosTGW.RequestHeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property keepaliveRequests: The number of requests for multiplexing long connections. Value range: 60~1000, unit: number.
         */
        readonly keepaliveRequests?: number | ros.IResolvable;
        /**
         * @Property keepaliveTimeout: Idle long connection timeout, value range: 1~60, default 15, unit: second.
         */
        readonly keepaliveTimeout?: number | ros.IResolvable;
        /**
         * @Property readTimeout: Read timeout duration, unit: seconds. Value range: 1~3600.
         */
        readonly readTimeout?: number | ros.IResolvable;
        /**
         * @Property xffProto: X-Forward-For-Proto The protocol of WAF. Value:
     * true (default): indicates that the protocol of WAF is transmitted.
     * false: indicates that the protocol of WAF is not transmitted.
         */
        readonly xffProto?: boolean | ros.IResolvable;
    }
}
export declare namespace RosTGW {
    /**
     * @stability external
     */
    interface RequestHeadersProperty {
        /**
         * @Property value: Customize the value set by the request header field.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The specified custom request header field.
         */
        readonly key?: string | ros.IResolvable;
    }
}
