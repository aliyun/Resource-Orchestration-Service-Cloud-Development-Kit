import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCompressionRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
 */
export interface RosCompressionRuleProps {
    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property brotli: Brotli compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly brotli?: string | ros.IResolvable;
    /**
     * @Property gzip: Gzip compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly gzip?: string | ros.IResolvable;
    /**
     * @Property paymentType: Payment Type.
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly ruleEnable?: string | ros.IResolvable;
    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;
    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;
    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
    /**
     * @Property zstd: Zstd compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly zstd?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::CompressionRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CompressionRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
 */
export declare class RosCompressionRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::CompressionRule";
    /**
     * @Attribute Brotli: Brotli compression.
     */
    readonly attrBrotli: ros.IResolvable;
    /**
     * @Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable;
    /**
     * @Attribute ConfigType: The type of the configuration.
     */
    readonly attrConfigType: ros.IResolvable;
    /**
     * @Attribute Gzip: Gzip compression.
     */
    readonly attrGzip: ros.IResolvable;
    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRule: ros.IResolvable;
    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleEnable: ros.IResolvable;
    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleName: ros.IResolvable;
    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly attrSequence: ros.IResolvable;
    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly attrSiteVersion: ros.IResolvable;
    /**
     * @Attribute Zstd: Zstd compression.
     */
    readonly attrZstd: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property brotli: Brotli compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    brotli: string | ros.IResolvable | undefined;
    /**
     * @Property gzip: Gzip compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    gzip: string | ros.IResolvable | undefined;
    /**
     * @Property paymentType: Payment Type.
     */
    paymentType: string | ros.IResolvable | undefined;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    rule: string | ros.IResolvable | undefined;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enable.
     * off: Disable.
     */
    ruleEnable: string | ros.IResolvable | undefined;
    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    ruleName: string | ros.IResolvable | undefined;
    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    sequence: number | ros.IResolvable | undefined;
    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    siteVersion: number | ros.IResolvable | undefined;
    /**
     * @Property zstd: Zstd compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    zstd: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCompressionRuleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosCustomScenePolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
 */
export interface RosCustomScenePolicyProps {
    /**
     * @Property createTime: The time when the policy takes effect.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly createTime: string | ros.IResolvable;
    /**
     * @Property customScenePolicyName: The policy name.
     */
    readonly customScenePolicyName: string | ros.IResolvable;
    /**
     * @Property endTime: The time when the policy expires.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly endTime: string | ros.IResolvable;
    /**
     * @Property objects: The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
     */
    readonly objects: string | ros.IResolvable;
    /**
     * @Property template: The name of the policy template. Valid value:
     * promotion: major events.
     */
    readonly template: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::CustomScenePolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomScenePolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
 */
export declare class RosCustomScenePolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::CustomScenePolicy";
    /**
     * @Attribute CreateTime: The time when the policy takes effect.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CustomScenePolicyName: The name of the policy.
     */
    readonly attrCustomScenePolicyName: ros.IResolvable;
    /**
     * @Attribute EndTime: The time when the policy expires.
     */
    readonly attrEndTime: ros.IResolvable;
    /**
     * @Attribute Objects: The IDs of websites associated.
     */
    readonly attrObjects: ros.IResolvable;
    /**
     * @Attribute PolicyId: The Id of the Policy.
     */
    readonly attrPolicyId: ros.IResolvable;
    /**
     * @Attribute Template: The name of the policy template.
     */
    readonly attrTemplate: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property createTime: The time when the policy takes effect.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    createTime: string | ros.IResolvable;
    /**
     * @Property customScenePolicyName: The policy name.
     */
    customScenePolicyName: string | ros.IResolvable;
    /**
     * @Property endTime: The time when the policy expires.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    endTime: string | ros.IResolvable;
    /**
     * @Property objects: The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
     */
    objects: string | ros.IResolvable;
    /**
     * @Property template: The name of the policy template. Valid value:
     * promotion: major events.
     */
    template: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomScenePolicyProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosEdgeContainerApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
 */
export interface RosEdgeContainerAppProps {
    /**
     * @Property edgeContainerAppName: The name of the application. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
     */
    readonly edgeContainerAppName: string | ros.IResolvable;
    /**
     * @Property servicePort: The server port. Valid values: 1 to 65535.
     */
    readonly servicePort: number | ros.IResolvable;
    /**
     * @Property targetPort: The backend port, which is also the service port of the application. Valid values: 1 to 65535.
     */
    readonly targetPort: number | ros.IResolvable;
    /**
     * @Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy. Valid values: 1 to 10. Default value: 5.
     */
    readonly healthCheckFailTimes?: number | ros.IResolvable;
    /**
     * @Property healthCheckHost: The domain name that is used for health checks. This parameter is empty by default.
     */
    readonly healthCheckHost?: string | ros.IResolvable;
    /**
     * @Property healthCheckHttpCode: The HTTP status code returned for a successful health check. Valid values:
     * http_2xx (default)http_3xx
     */
    readonly healthCheckHttpCode?: string | ros.IResolvable;
    /**
     * @Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds. Valid values: 1 to 50. Default value: 5.
     */
    readonly healthCheckInterval?: number | ros.IResolvable;
    /**
     * @Property healthCheckMethod: The HTTP request method for health checks. Valid values:
     * HEAD (default): requests the headers of the resource.
     * GET: requests the specified resource and returns both the headers and entity body.
     */
    readonly healthCheckMethod?: string | ros.IResolvable;
    /**
     * @Property healthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
     */
    readonly healthCheckPort?: number | ros.IResolvable;
    /**
     * @Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy. Valid values: 1 to 10. Default value: 2.
     */
    readonly healthCheckSuccTimes?: number | ros.IResolvable;
    /**
     * @Property healthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
     */
    readonly healthCheckTimeout?: number | ros.IResolvable;
    /**
     * @Property healthCheckType: The health check type. By default, this parameter is left empty. Valid values:
     * l4: Layer 4 health check.
     * l7: Layer 7 health check.
     *
     */
    readonly healthCheckType?: string | ros.IResolvable;
    /**
     * @Property healthCheckUri: The URI used for health checks. The URI must be 1 to 80 characters in length. Default value: "\/".
     */
    readonly healthCheckUri?: string | ros.IResolvable;
    /**
     * @Property remarks: The remarks. This parameter is empty by default.
     */
    readonly remarks?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::EdgeContainerApp`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EdgeContainerApp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
 */
export declare class RosEdgeContainerApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::EdgeContainerApp";
    /**
     * @Attribute AppStatus: The status of the application.
     */
    readonly attrAppStatus: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the application was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DomainName: The domain name that is associated with the application. If no domain name is associated with the application, the value is an empty string.
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * @Attribute EdgeContainerAppName: The name of the application.
     */
    readonly attrEdgeContainerAppName: ros.IResolvable;
    /**
     * @Attribute GatewayType: The type of the gateway.
     */
    readonly attrGatewayType: ros.IResolvable;
    /**
     * @Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.
     */
    readonly attrHealthCheckFailTimes: ros.IResolvable;
    /**
     * @Attribute HealthCheckHost: The domain name that is used for health checks.
     */
    readonly attrHealthCheckHost: ros.IResolvable;
    /**
     * @Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.
     */
    readonly attrHealthCheckHttpCode: ros.IResolvable;
    /**
     * @Attribute HealthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
     */
    readonly attrHealthCheckInterval: ros.IResolvable;
    /**
     * @Attribute HealthCheckMethod: The HTTP request method for health checks.
     */
    readonly attrHealthCheckMethod: ros.IResolvable;
    /**
     * @Attribute HealthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
     */
    readonly attrHealthCheckPort: ros.IResolvable;
    /**
     * @Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
     */
    readonly attrHealthCheckSuccTimes: ros.IResolvable;
    /**
     * @Attribute HealthCheckTimeout: The timeout period of a health check response.
     */
    readonly attrHealthCheckTimeout: ros.IResolvable;
    /**
     * @Attribute HealthCheckType: The health check type.
     */
    readonly attrHealthCheckType: ros.IResolvable;
    /**
     * @Attribute HealthCheckUri: The URI used for health checks.
     */
    readonly attrHealthCheckUri: ros.IResolvable;
    /**
     * @Attribute QuicCid: Indicates whether QUIC is enabled.
     */
    readonly attrQuicCid: ros.IResolvable;
    /**
     * @Attribute Remarks: The remarks. This parameter is empty by default.
     */
    readonly attrRemarks: ros.IResolvable;
    /**
     * @Attribute ServicePort: The server port.
     */
    readonly attrServicePort: ros.IResolvable;
    /**
     * @Attribute TargetPort: The backend port, which is also the service port of the application.
     */
    readonly attrTargetPort: ros.IResolvable;
    /**
     * @Attribute UpdateTime: The time when the application was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * @Attribute VersionCount: The number of versions of the application.
     */
    readonly attrVersionCount: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property edgeContainerAppName: The name of the application. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
     */
    edgeContainerAppName: string | ros.IResolvable;
    /**
     * @Property servicePort: The server port. Valid values: 1 to 65535.
     */
    servicePort: number | ros.IResolvable;
    /**
     * @Property targetPort: The backend port, which is also the service port of the application. Valid values: 1 to 65535.
     */
    targetPort: number | ros.IResolvable;
    /**
     * @Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy. Valid values: 1 to 10. Default value: 5.
     */
    healthCheckFailTimes: number | ros.IResolvable | undefined;
    /**
     * @Property healthCheckHost: The domain name that is used for health checks. This parameter is empty by default.
     */
    healthCheckHost: string | ros.IResolvable | undefined;
    /**
     * @Property healthCheckHttpCode: The HTTP status code returned for a successful health check. Valid values:
     * http_2xx (default)http_3xx
     */
    healthCheckHttpCode: string | ros.IResolvable | undefined;
    /**
     * @Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds. Valid values: 1 to 50. Default value: 5.
     */
    healthCheckInterval: number | ros.IResolvable | undefined;
    /**
     * @Property healthCheckMethod: The HTTP request method for health checks. Valid values:
     * HEAD (default): requests the headers of the resource.
     * GET: requests the specified resource and returns both the headers and entity body.
     */
    healthCheckMethod: string | ros.IResolvable | undefined;
    /**
     * @Property healthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
     */
    healthCheckPort: number | ros.IResolvable | undefined;
    /**
     * @Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy. Valid values: 1 to 10. Default value: 2.
     */
    healthCheckSuccTimes: number | ros.IResolvable | undefined;
    /**
     * @Property healthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
     */
    healthCheckTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property healthCheckType: The health check type. By default, this parameter is left empty. Valid values:
     * l4: Layer 4 health check.
     * l7: Layer 7 health check.
     *
     */
    healthCheckType: string | ros.IResolvable | undefined;
    /**
     * @Property healthCheckUri: The URI used for health checks. The URI must be 1 to 80 characters in length. Default value: "\/".
     */
    healthCheckUri: string | ros.IResolvable | undefined;
    /**
     * @Property remarks: The remarks. This parameter is empty by default.
     */
    remarks: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEdgeContainerAppProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosHttpsApplicationConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
 */
export interface RosHttpsApplicationConfigurationProps {
    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property altSvc: Function switch, default off. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly altSvc?: string | ros.IResolvable;
    /**
     * @Property altSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly altSvcClear?: string | ros.IResolvable;
    /**
     * @Property altSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
     */
    readonly altSvcMa?: string | ros.IResolvable;
    /**
     * @Property altSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly altSvcPersist?: string | ros.IResolvable;
    /**
     * @Property hsts: Whether to enable HSTS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly hsts?: string | ros.IResolvable;
    /**
     * @Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly hstsIncludeSubdomains?: string | ros.IResolvable;
    /**
     * @Property hstsMaxAge: The expiration time of HSTS, in seconds.
     */
    readonly hstsMaxAge?: string | ros.IResolvable;
    /**
     * @Property hstsPreload: Whether to enable HSTS preloading. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly hstsPreload?: string | ros.IResolvable;
    /**
     * @Property httpsForce: Whether to enable forced HTTPS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly httpsForce?: string | ros.IResolvable;
    /**
     * @Property httpsForceCode: Forced HTTPS jump status code, value range:
     * 301
     * 302
     * 307
     * 308
     */
    readonly httpsForceCode?: string | ros.IResolvable;
    /**
     * @Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly httpsNoSniDeny?: string | ros.IResolvable;
    /**
     * @Property httpsSniVerify: Whether to enable SNI verification. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly httpsSniVerify?: string | ros.IResolvable;
    /**
     * @Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    readonly httpsSniWhitelist?: string | ros.IResolvable;
    /**
     * @Property paymentType: Payment Type.
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly ruleEnable?: string | ros.IResolvable;
    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;
    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;
    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::HttpsApplicationConfiguration`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpsApplicationConfiguration` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
 */
export declare class RosHttpsApplicationConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::HttpsApplicationConfiguration";
    /**
     * @Attribute AltSvc: Function switch, default off.
     */
    readonly attrAltSvc: ros.IResolvable;
    /**
     * @Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default.
     */
    readonly attrAltSvcClear: ros.IResolvable;
    /**
     * @Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
     */
    readonly attrAltSvcMa: ros.IResolvable;
    /**
     * @Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default.
     */
    readonly attrAltSvcPersist: ros.IResolvable;
    /**
     * @Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable;
    /**
     * @Attribute ConfigType: The type of the configuration.
     */
    readonly attrConfigType: ros.IResolvable;
    /**
     * @Attribute Hsts: Whether to enable HSTS. It is disabled by default.
     */
    readonly attrHsts: ros.IResolvable;
    /**
     * @Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
     */
    readonly attrHstsIncludeSubdomains: ros.IResolvable;
    /**
     * @Attribute HstsMaxAge: The expiration time of HSTS, in seconds.
     */
    readonly attrHstsMaxAge: ros.IResolvable;
    /**
     * @Attribute HstsPreload: Whether to enable HSTS preloading. It is disabled by default.
     */
    readonly attrHstsPreload: ros.IResolvable;
    /**
     * @Attribute HttpsForce: Whether to enable forced HTTPS. It is disabled by default.
     */
    readonly attrHttpsForce: ros.IResolvable;
    /**
     * @Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.
     */
    readonly attrHttpsForceCode: ros.IResolvable;
    /**
     * @Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default.
     */
    readonly attrHttpsNoSniDeny: ros.IResolvable;
    /**
     * @Attribute HttpsSniVerify: Whether to enable SNI verification. It is disabled by default.
     */
    readonly attrHttpsSniVerify: ros.IResolvable;
    /**
     * @Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    readonly attrHttpsSniWhitelist: ros.IResolvable;
    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRule: ros.IResolvable;
    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleEnable: ros.IResolvable;
    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleName: ros.IResolvable;
    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly attrSequence: ros.IResolvable;
    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly attrSiteVersion: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property altSvc: Function switch, default off. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    altSvc: string | ros.IResolvable | undefined;
    /**
     * @Property altSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    altSvcClear: string | ros.IResolvable | undefined;
    /**
     * @Property altSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
     */
    altSvcMa: string | ros.IResolvable | undefined;
    /**
     * @Property altSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    altSvcPersist: string | ros.IResolvable | undefined;
    /**
     * @Property hsts: Whether to enable HSTS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    hsts: string | ros.IResolvable | undefined;
    /**
     * @Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    hstsIncludeSubdomains: string | ros.IResolvable | undefined;
    /**
     * @Property hstsMaxAge: The expiration time of HSTS, in seconds.
     */
    hstsMaxAge: string | ros.IResolvable | undefined;
    /**
     * @Property hstsPreload: Whether to enable HSTS preloading. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    hstsPreload: string | ros.IResolvable | undefined;
    /**
     * @Property httpsForce: Whether to enable forced HTTPS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    httpsForce: string | ros.IResolvable | undefined;
    /**
     * @Property httpsForceCode: Forced HTTPS jump status code, value range:
     * 301
     * 302
     * 307
     * 308
     */
    httpsForceCode: string | ros.IResolvable | undefined;
    /**
     * @Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    httpsNoSniDeny: string | ros.IResolvable | undefined;
    /**
     * @Property httpsSniVerify: Whether to enable SNI verification. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    httpsSniVerify: string | ros.IResolvable | undefined;
    /**
     * @Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    httpsSniWhitelist: string | ros.IResolvable | undefined;
    /**
     * @Property paymentType: Payment Type.
     */
    paymentType: string | ros.IResolvable | undefined;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    rule: string | ros.IResolvable | undefined;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    ruleEnable: string | ros.IResolvable | undefined;
    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    ruleName: string | ros.IResolvable | undefined;
    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    sequence: number | ros.IResolvable | undefined;
    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    siteVersion: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHttpsApplicationConfigurationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosImageTransform`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform
 */
export interface RosImageTransformProps {
    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property enable: Indicates whether the image transformations feature is enabled. Valid values:
     * on: Enabled.
     * off: Disabled.
     */
    readonly enable?: string | ros.IResolvable;
    /**
     * @Property paymentType: Payment Type.
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly ruleEnable?: string | ros.IResolvable;
    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;
    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;
    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::ImageTransform`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageTransform` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform
 */
export declare class RosImageTransform extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::ImageTransform";
    /**
     * @Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable;
    /**
     * @Attribute ConfigType: The type of the configuration.
     */
    readonly attrConfigType: ros.IResolvable;
    /**
     * @Attribute Enable: Indicates whether the image transformations feature is enabled.
     */
    readonly attrEnable: ros.IResolvable;
    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRule: ros.IResolvable;
    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleEnable: ros.IResolvable;
    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleName: ros.IResolvable;
    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly attrSequence: ros.IResolvable;
    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly attrSiteVersion: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property enable: Indicates whether the image transformations feature is enabled. Valid values:
     * on: Enabled.
     * off: Disabled.
     */
    enable: string | ros.IResolvable | undefined;
    /**
     * @Property paymentType: Payment Type.
     */
    paymentType: string | ros.IResolvable | undefined;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    rule: string | ros.IResolvable | undefined;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    ruleEnable: string | ros.IResolvable | undefined;
    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    ruleName: string | ros.IResolvable | undefined;
    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    sequence: number | ros.IResolvable | undefined;
    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    siteVersion: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageTransformProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosKvNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
 */
export interface RosKvNamespaceProps {
    /**
     * @Property kvNamespace: The name of the namespace.
     */
    readonly kvNamespace: string | ros.IResolvable;
    /**
     * @Property description: The description of the namespace.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::KvNamespace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `KvNamespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
 */
export declare class RosKvNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::KvNamespace";
    /**
     * @Attribute Description: The description of the namespace.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute KvCapacity: The available capacity of the namespace. Unit: bytes.
     */
    readonly attrKvCapacity: ros.IResolvable;
    /**
     * @Attribute KvCapacityString: The available capacity of the namespace.
     */
    readonly attrKvCapacityString: ros.IResolvable;
    /**
     * @Attribute KvCapacityUsed: The used capacity of the namespace. Unit: bytes.
     */
    readonly attrKvCapacityUsed: ros.IResolvable;
    /**
     * @Attribute KvCapacityUsedString: The used capacity of the namespace.
     */
    readonly attrKvCapacityUsedString: ros.IResolvable;
    /**
     * @Attribute KvNamespace: The name of the namespace.
     */
    readonly attrKvNamespace: ros.IResolvable;
    /**
     * @Attribute NamespaceId: The ID of the namespace.
     */
    readonly attrNamespaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property kvNamespace: The name of the namespace.
     */
    kvNamespace: string | ros.IResolvable;
    /**
     * @Property description: The description of the namespace.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKvNamespaceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
