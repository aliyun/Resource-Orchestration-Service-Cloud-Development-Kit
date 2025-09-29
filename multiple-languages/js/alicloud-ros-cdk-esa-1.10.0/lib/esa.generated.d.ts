import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-certificate
 */
export interface RosCertificateProps {
    /**
     * @Property createdType: The certificate type.
     * - cas (Certificate Center Certificate)
     * - upload (custom upload certificate)
     * - free( Free certificate).
     */
    readonly createdType: string | ros.IResolvable;
    /**
     * @Property domains: A list of domain names. Multiple domain names are separated by commas.
     */
    readonly domains: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites interface.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property casId: Cloud certificate ID.
     */
    readonly casId?: string | ros.IResolvable;
    /**
     * @Property certId: The certificate Id.
     */
    readonly certId?: string | ros.IResolvable;
    /**
     * @Property certificate: Certificate content.
     */
    readonly certificate?: string | ros.IResolvable;
    /**
     * @Property certName: The certificate name.
     */
    readonly certName?: string | ros.IResolvable;
    /**
     * @Property privateKey: The certificate private key.
     */
    readonly privateKey?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::Certificate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Certificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-certificate
 */
export declare class RosCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::Certificate";
    /**
     * @Attribute ApplyCode: Certificate application error code.
     */
    readonly attrApplyCode: ros.IResolvable;
    /**
     * @Attribute ApplyMessage: Certificate application error message.
     */
    readonly attrApplyMessage: ros.IResolvable;
    /**
     * @Attribute CasId: Cloud certificate ID.
     */
    readonly attrCasId: ros.IResolvable;
    /**
     * @Attribute CertId: The certificate Id.
     */
    readonly attrCertId: ros.IResolvable;
    /**
     * @Attribute CertName: The certificate name.
     */
    readonly attrCertName: ros.IResolvable;
    /**
     * @Attribute Certificate: Certificate content.
     */
    readonly attrCertificate: ros.IResolvable;
    /**
     * @Attribute CommonName: Common Name (CN) field of the certificate.
     */
    readonly attrCommonName: ros.IResolvable;
    /**
     * @Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DCV: DCV information.
     */
    readonly attrDcv: ros.IResolvable;
    /**
     * @Attribute Domains: A list of domain names. Multiple domain names are separated by commas.
     */
    readonly attrDomains: ros.IResolvable;
    /**
     * @Attribute FingerprintSha256: SHA256 fingerprint of the certificate.
     */
    readonly attrFingerprintSha256: ros.IResolvable;
    /**
     * @Attribute Issuer: Certificate issuer.
     */
    readonly attrIssuer: ros.IResolvable;
    /**
     * @Attribute IssuerCN: Common name of the certificate issuer.
     */
    readonly attrIssuerCn: ros.IResolvable;
    /**
     * @Attribute NotAfter: End time of the certificate validity period.
     */
    readonly attrNotAfter: ros.IResolvable;
    /**
     * @Attribute NotBefore: Start time of the certificate validity period.
     */
    readonly attrNotBefore: ros.IResolvable;
    /**
     * @Attribute PubAlg: Certificate public key algorithm.
     */
    readonly attrPubAlg: ros.IResolvable;
    /**
     * @Attribute SerialNumber: Serial number of the certificate.
     */
    readonly attrSerialNumber: ros.IResolvable;
    /**
     * @Attribute SigAlg: Certificate signature algorithm.
     */
    readonly attrSigAlg: ros.IResolvable;
    /**
     * @Attribute SiteId: The site ID, which can be obtained by calling the ListSites interface.
     */
    readonly attrSiteId: ros.IResolvable;
    /**
     * @Attribute SiteName: Site name.
     */
    readonly attrSiteName: ros.IResolvable;
    /**
     * @Attribute UpdateTime: Update time.
     */
    readonly attrUpdateTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property createdType: The certificate type.
     * - cas (Certificate Center Certificate)
     * - upload (custom upload certificate)
     * - free( Free certificate).
     */
    createdType: string | ros.IResolvable;
    /**
     * @Property domains: A list of domain names. Multiple domain names are separated by commas.
     */
    domains: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites interface.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property casId: Cloud certificate ID.
     */
    casId: string | ros.IResolvable | undefined;
    /**
     * @Property certId: The certificate Id.
     */
    certId: string | ros.IResolvable | undefined;
    /**
     * @Property certificate: Certificate content.
     */
    certificate: string | ros.IResolvable | undefined;
    /**
     * @Property certName: The certificate name.
     */
    certName: string | ros.IResolvable | undefined;
    /**
     * @Property privateKey: The certificate private key.
     */
    privateKey: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCertificateProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosClientCaCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcacertificate
 */
export interface RosClientCaCertificateProps {
    /**
     * @Property certificate: Certificate content.
     */
    readonly certificate: string | ros.IResolvable;
    /**
     * @Property siteId: Site Id.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property clientCaCertName: The certificate name.
     */
    readonly clientCaCertName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::ClientCaCertificate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClientCaCertificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcacertificate
 */
export declare class RosClientCaCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::ClientCaCertificate";
    /**
     * @Attribute Certificate: Certificate content.
     */
    readonly attrCertificate: ros.IResolvable;
    /**
     * @Attribute ClientCaCertId: ClientCaCertificate Id.
     */
    readonly attrClientCaCertId: ros.IResolvable;
    /**
     * @Attribute ClientCaCertName: The certificate name.
     */
    readonly attrClientCaCertName: ros.IResolvable;
    /**
     * @Attribute CommonName: The certificate common name.
     */
    readonly attrCommonName: ros.IResolvable;
    /**
     * @Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Issuer: Certificate Authority.
     */
    readonly attrIssuer: ros.IResolvable;
    /**
     * @Attribute NotAfter: The expiration date of the certificate validity period.
     */
    readonly attrNotAfter: ros.IResolvable;
    /**
     * @Attribute NotBefore: The start time of the certificate validity period.
     */
    readonly attrNotBefore: ros.IResolvable;
    /**
     * @Attribute PubkeyAlgorithm: Certificate public key algorithm.
     */
    readonly attrPubkeyAlgorithm: ros.IResolvable;
    /**
     * @Attribute SAN: Alternate certificate subject name.
     */
    readonly attrSan: ros.IResolvable;
    /**
     * @Attribute SignatureAlgorithm: Certificate signature algorithm.
     */
    readonly attrSignatureAlgorithm: ros.IResolvable;
    /**
     * @Attribute SiteId: Site Id.
     */
    readonly attrSiteId: ros.IResolvable;
    /**
     * @Attribute SiteName: The website name.
     */
    readonly attrSiteName: ros.IResolvable;
    /**
     * @Attribute Type: The certificate type.
     */
    readonly attrType: ros.IResolvable;
    /**
     * @Attribute UpdateTime: Update time.
     */
    readonly attrUpdateTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property certificate: Certificate content.
     */
    certificate: string | ros.IResolvable;
    /**
     * @Property siteId: Site Id.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property clientCaCertName: The certificate name.
     */
    clientCaCertName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClientCaCertificateProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosClientCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcertificate
 */
export interface RosClientCertificateProps {
    /**
     * @Property siteId: Site Id.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property validityDays: Certificate validity period.
     */
    readonly validityDays: number | ros.IResolvable;
    /**
     * @Property csr: Certificate signing request content.
     */
    readonly csr?: string | ros.IResolvable;
    /**
     * @Property pkeyType: The private key algorithm type.
     */
    readonly pkeyType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::ClientCertificate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClientCertificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcertificate
 */
export declare class RosClientCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::ClientCertificate";
    /**
     * @Attribute CACertificateId: The ID of the CA certificate.
     */
    readonly attrCaCertificateId: ros.IResolvable;
    /**
     * @Attribute Certificate: Certificate content.
     */
    readonly attrCertificate: ros.IResolvable;
    /**
     * @Attribute ClientCertId: ClientCertificate Id.
     */
    readonly attrClientCertId: ros.IResolvable;
    /**
     * @Attribute ClientCertificateName: The certificate name.
     */
    readonly attrClientCertificateName: ros.IResolvable;
    /**
     * @Attribute CommonName: The Common Name of the certificate.
     */
    readonly attrCommonName: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the certificate was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Issuer: The certificate authority (CA) that issued the certificate.
     */
    readonly attrIssuer: ros.IResolvable;
    /**
     * @Attribute NotAfter: The time when the certificate expires.
     */
    readonly attrNotAfter: ros.IResolvable;
    /**
     * @Attribute NotBefore: The time when the certificate takes effect.
     */
    readonly attrNotBefore: ros.IResolvable;
    /**
     * @Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.
     */
    readonly attrPubkeyAlgorithm: ros.IResolvable;
    /**
     * @Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
     */
    readonly attrSan: ros.IResolvable;
    /**
     * @Attribute SignatureAlgorithm: The signature algorithm of the certificate.
     */
    readonly attrSignatureAlgorithm: ros.IResolvable;
    /**
     * @Attribute SiteId: Site Id.
     */
    readonly attrSiteId: ros.IResolvable;
    /**
     * @Attribute SiteName: The website name.
     */
    readonly attrSiteName: ros.IResolvable;
    /**
     * @Attribute Type: The certificate type.
     */
    readonly attrType: ros.IResolvable;
    /**
     * @Attribute UpdateTime: The time when the certificate was updated.
     */
    readonly attrUpdateTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property siteId: Site Id.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property validityDays: Certificate validity period.
     */
    validityDays: number | ros.IResolvable;
    /**
     * @Property csr: Certificate signing request content.
     */
    csr: string | ros.IResolvable | undefined;
    /**
     * @Property pkeyType: The private key algorithm type.
     */
    pkeyType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClientCertificateProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosEdgeContainerAppRecord`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapprecord
 */
export interface RosEdgeContainerAppRecordProps {
    /**
     * @Property appId: The application ID.
     */
    readonly appId: string | ros.IResolvable;
    /**
     * @Property recordName: The associated domain name.
     */
    readonly recordName: string | ros.IResolvable;
    /**
     * @Property siteId: The website ID.
     */
    readonly siteId: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::EdgeContainerAppRecord`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EdgeContainerAppRecord` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapprecord
 */
export declare class RosEdgeContainerAppRecord extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::EdgeContainerAppRecord";
    /**
     * @Attribute AppId: The application ID.
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute Cname: The CNAME of the associated domain name.
     */
    readonly attrCname: ros.IResolvable;
    /**
     * @Attribute ConfigId: The configuration ID of the associated domain name.
     */
    readonly attrConfigId: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the domain name was added. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute RecordId: The record ID of the associated domain name.
     */
    readonly attrRecordId: ros.IResolvable;
    /**
     * @Attribute RecordName: The associated domain name.
     */
    readonly attrRecordName: ros.IResolvable;
    /**
     * @Attribute SchemdId: The scheduling domain ID of the associated domain name.
     */
    readonly attrSchemdId: ros.IResolvable;
    /**
     * @Attribute SiteId: The website ID.
     */
    readonly attrSiteId: ros.IResolvable;
    /**
     * @Attribute UpdateTime: The time when the scheduling domain ID or CNAME was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    readonly attrUpdateTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appId: The application ID.
     */
    appId: string | ros.IResolvable;
    /**
     * @Property recordName: The associated domain name.
     */
    recordName: string | ros.IResolvable;
    /**
     * @Property siteId: The website ID.
     */
    siteId: number | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEdgeContainerAppRecordProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosHttpRequestHeaderModificationRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httprequestheadermodificationrule
 */
export interface RosHttpRequestHeaderModificationRuleProps {
    /**
     * @Property requestHeaderModification: The configurations of modifying request headers. You can add, delete, or modify a request header.
     */
    readonly requestHeaderModification: Array<RosHttpRequestHeaderModificationRule.RequestHeaderModificationProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - on: open.
     * - off: close.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::HttpRequestHeaderModificationRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpRequestHeaderModificationRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httprequestheadermodificationrule
 */
export declare class RosHttpRequestHeaderModificationRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::HttpRequestHeaderModificationRule";
    /**
     * @Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable;
    /**
     * @Attribute ConfigType: The configuration type. You can use this parameter to check the global configuration or rule configuration.
     */
    readonly attrConfigType: ros.IResolvable;
    /**
     * @Attribute RequestHeaderModification: The configurations of modifying request headers. You can add, delete, or modify a request header.
     */
    readonly attrRequestHeaderModification: ros.IResolvable;
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
     * @Property requestHeaderModification: The configurations of modifying request headers. You can add, delete, or modify a request header.
     */
    requestHeaderModification: Array<RosHttpRequestHeaderModificationRule.RequestHeaderModificationProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property siteId: The site ID.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    rule: string | ros.IResolvable | undefined;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - on: open.
     * - off: close.
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
    constructor(scope: ros.Construct, id: string, props: RosHttpRequestHeaderModificationRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosHttpRequestHeaderModificationRule {
    /**
     * @stability external
     */
    interface RequestHeaderModificationProperty {
        /**
         * @Property type: Value type. Value range:
     * - `static`:static mode.
     * - `dynamic`:dynamic mode.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: Request header value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property operation: Mode of operation. Value range:
     * - `add`: add.
     * - `del`: delete
     * - `modify`: change.
         */
        readonly operation: string | ros.IResolvable;
        /**
         * @Property name: Request Header Name.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosHttpResponseHeaderModificationRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpresponseheadermodificationrule
 */
export interface RosHttpResponseHeaderModificationRuleProps {
    /**
     * @Property responseHeaderModification: Modify response headers, supporting add, delete, and modify operations.
     */
    readonly responseHeaderModification: Array<RosHttpResponseHeaderModificationRule.ResponseHeaderModificationProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::HttpResponseHeaderModificationRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpResponseHeaderModificationRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpresponseheadermodificationrule
 */
export declare class RosHttpResponseHeaderModificationRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::HttpResponseHeaderModificationRule";
    /**
     * @Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable;
    /**
     * @Attribute ConfigType: The configuration type.
     */
    readonly attrConfigType: ros.IResolvable;
    /**
     * @Attribute ResponseHeaderModification: Modify response headers, supporting add, delete, and modify operations.
     */
    readonly attrResponseHeaderModification: ros.IResolvable;
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
     * @Property responseHeaderModification: Modify response headers, supporting add, delete, and modify operations.
     */
    responseHeaderModification: Array<RosHttpResponseHeaderModificationRule.ResponseHeaderModificationProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property siteId: The site ID.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    rule: string | ros.IResolvable | undefined;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
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
    constructor(scope: ros.Construct, id: string, props: RosHttpResponseHeaderModificationRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosHttpResponseHeaderModificationRule {
    /**
     * @stability external
     */
    interface ResponseHeaderModificationProperty {
        /**
         * @Property type: The value type. Value range:
     * - `static`: Static mode.
     * - `dynamic`: Dynamic mode.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: The response header value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property operation: Operation method. Possible values:
     * - `add`: Add
     * - `del`: Delete
     * - `modify`: Modify.
         */
        readonly operation: string | ros.IResolvable;
        /**
         * @Property name: The response header name.
         */
        readonly name: string | ros.IResolvable;
    }
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
 * Properties for defining a `RosHttpsBasicConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsbasicconfiguration
 */
export interface RosHttpsBasicConfigurationProps {
    /**
     * @Property siteId: Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
     */
    readonly ciphersuite?: string | ros.IResolvable;
    /**
     * @Property ciphersuiteGroup: Cipher suite group. Default is all cipher suites. Possible values:
     * - all: All cipher suites.
     * - strict: Strong cipher suites.
     * - custom: Custom cipher suites.
     */
    readonly ciphersuiteGroup?: string | ros.IResolvable;
    /**
     * @Property http2: Indicates whether HTTP2 is enabled. Default is on. Possible values:
     * - on: Enabled.
     * - off: Disabled.
     */
    readonly http2?: string | ros.IResolvable;
    /**
     * @Property http3: Whether to enable HTTP3, which is enabled by default. The value can be:
     * - on: Enabled.
     * - off: Disabled.
     */
    readonly http3?: string | ros.IResolvable;
    /**
     * @Property https: Whether to enable HTTPS. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly https?: string | ros.IResolvable;
    /**
     * @Property ocspStapling: Indicates whether OCSP is enabled. Default is off. Possible values:
     * - on: Enabled.
     * - off: Disabled.
     */
    readonly ocspStapling?: string | ros.IResolvable;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * -  Match all incoming requests: value set to true
     * -  Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - on: open.
     * - off: close.
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
     * @Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly tls10?: string | ros.IResolvable;
    /**
     * @Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly tls11?: string | ros.IResolvable;
    /**
     * @Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly tls12?: string | ros.IResolvable;
    /**
     * @Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly tls13?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::HttpsBasicConfiguration`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpsBasicConfiguration` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsbasicconfiguration
 */
export declare class RosHttpsBasicConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::HttpsBasicConfiguration";
    /**
     * @Attribute Ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
     */
    readonly attrCiphersuite: ros.IResolvable;
    /**
     * @Attribute CiphersuiteGroup: Cipher suite group. Default is all cipher suites.
     */
    readonly attrCiphersuiteGroup: ros.IResolvable;
    /**
     * @Attribute ConfigId: ConfigId of the configuration.
     */
    readonly attrConfigId: ros.IResolvable;
    /**
     * @Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
     */
    readonly attrConfigType: ros.IResolvable;
    /**
     * @Attribute Http2: Indicates whether HTTP2 is enabled. Default is on.
     */
    readonly attrHttp2: ros.IResolvable;
    /**
     * @Attribute Http3: Whether to enable HTTP3, which is enabled by default.
     */
    readonly attrHttp3: ros.IResolvable;
    /**
     * @Attribute Https: Whether to enable HTTPS. Default is enabled.
     */
    readonly attrHttps: ros.IResolvable;
    /**
     * @Attribute OcspStapling: Indicates whether OCSP is enabled. Default is off.
     */
    readonly attrOcspStapling: ros.IResolvable;
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
     * @Attribute Tls10: Whether to enable TLS1.0. Default is disabled.
     */
    readonly attrTls10: ros.IResolvable;
    /**
     * @Attribute Tls11: Whether to enable TLS1.1. Default is enabled.
     */
    readonly attrTls11: ros.IResolvable;
    /**
     * @Attribute Tls12: Whether to enable TLS1.2. Default is enabled.
     */
    readonly attrTls12: ros.IResolvable;
    /**
     * @Attribute Tls13: Whether to enable TLS1.3. Default is enabled.
     */
    readonly attrTls13: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property siteId: Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
     */
    ciphersuite: string | ros.IResolvable | undefined;
    /**
     * @Property ciphersuiteGroup: Cipher suite group. Default is all cipher suites. Possible values:
     * - all: All cipher suites.
     * - strict: Strong cipher suites.
     * - custom: Custom cipher suites.
     */
    ciphersuiteGroup: string | ros.IResolvable | undefined;
    /**
     * @Property http2: Indicates whether HTTP2 is enabled. Default is on. Possible values:
     * - on: Enabled.
     * - off: Disabled.
     */
    http2: string | ros.IResolvable | undefined;
    /**
     * @Property http3: Whether to enable HTTP3, which is enabled by default. The value can be:
     * - on: Enabled.
     * - off: Disabled.
     */
    http3: string | ros.IResolvable | undefined;
    /**
     * @Property https: Whether to enable HTTPS. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    https: string | ros.IResolvable | undefined;
    /**
     * @Property ocspStapling: Indicates whether OCSP is enabled. Default is off. Possible values:
     * - on: Enabled.
     * - off: Disabled.
     */
    ocspStapling: string | ros.IResolvable | undefined;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * -  Match all incoming requests: value set to true
     * -  Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    rule: string | ros.IResolvable | undefined;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - on: open.
     * - off: close.
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
     * @Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    tls10: string | ros.IResolvable | undefined;
    /**
     * @Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    tls11: string | ros.IResolvable | undefined;
    /**
     * @Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    tls12: string | ros.IResolvable | undefined;
    /**
     * @Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    tls13: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHttpsBasicConfigurationProps, enableResourcePropertyConstraint: boolean);
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
/**
 * Properties for defining a `RosNetworkOptimization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-networkoptimization
 */
export interface RosNetworkOptimizationProps {
    /**
     * @Property siteId: Site ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property grpc: Whether to enable GRPC, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    readonly grpc?: string | ros.IResolvable;
    /**
     * @Property http2Origin: Whether to enable HTTP2 origin, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    readonly http2Origin?: string | ros.IResolvable;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
     */
    readonly ruleEnable?: string | ros.IResolvable;
    /**
     * @Property ruleName: Rule name.
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
     * @Property smartRouting: Whether to enable smart routing service, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    readonly smartRouting?: string | ros.IResolvable;
    /**
     * @Property uploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
     */
    readonly uploadMaxFilesize?: number | ros.IResolvable;
    /**
     * @Property websocket: Whether to enable Websocket, default is enabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    readonly websocket?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::NetworkOptimization`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkOptimization` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-networkoptimization
 */
export declare class RosNetworkOptimization extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::NetworkOptimization";
    /**
     * @Attribute ConfigId: ConfigId of the configuration, which can be obtained by calling the ListNetworkOptimizations.
     */
    readonly attrConfigId: ros.IResolvable;
    /**
     * @Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
     */
    readonly attrConfigType: ros.IResolvable;
    /**
     * @Attribute Grpc: Whether to enable GRPC, default is disabled.
     */
    readonly attrGrpc: ros.IResolvable;
    /**
     * @Attribute Http2Origin: Whether to enable HTTP2 origin, default is disabled.
     */
    readonly attrHttp2Origin: ros.IResolvable;
    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRule: ros.IResolvable;
    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleEnable: ros.IResolvable;
    /**
     * @Attribute RuleName: Rule name.
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
     * @Attribute SmartRouting: Whether to enable smart routing service, default is disabled.
     */
    readonly attrSmartRouting: ros.IResolvable;
    /**
     * @Attribute UploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
     */
    readonly attrUploadMaxFilesize: ros.IResolvable;
    /**
     * @Attribute Websocket: Whether to enable Websocket, default is enabled.
     */
    readonly attrWebsocket: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property siteId: Site ID.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property grpc: Whether to enable GRPC, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    grpc: string | ros.IResolvable | undefined;
    /**
     * @Property http2Origin: Whether to enable HTTP2 origin, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    http2Origin: string | ros.IResolvable | undefined;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    rule: string | ros.IResolvable | undefined;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
     */
    ruleEnable: string | ros.IResolvable | undefined;
    /**
     * @Property ruleName: Rule name.
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
     * @Property smartRouting: Whether to enable smart routing service, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    smartRouting: string | ros.IResolvable | undefined;
    /**
     * @Property uploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
     */
    uploadMaxFilesize: number | ros.IResolvable | undefined;
    /**
     * @Property websocket: Whether to enable Websocket, default is enabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    websocket: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkOptimizationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosOriginPool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originpool
 */
export interface RosOriginPoolProps {
    /**
     * @Property originPoolName: The source address pool name.
     */
    readonly originPoolName: string | ros.IResolvable;
    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property enabled: Whether the source address pool is enabled:
     * - `true`: Enabled;
     * - `false`: Not enabled.
     */
    readonly enabled?: boolean | ros.IResolvable;
    /**
     * @Property origins: The Source station information added to the source address pool. Multiple Source stations use arrays to transfer values.
     */
    readonly origins?: Array<RosOriginPool.OriginsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::OriginPool`.
 * @Note This class does not contain additional functions, so it is recommended to use the `OriginPool` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originpool
 */
export declare class RosOriginPool extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::OriginPool";
    /**
     * @Attribute Enabled: Whether the source address pool is enabled:.
     */
    readonly attrEnabled: ros.IResolvable;
    /**
     * @Attribute OriginPoolId: OriginPool Id.
     */
    readonly attrOriginPoolId: ros.IResolvable;
    /**
     * @Attribute OriginPoolName: The source address pool name.
     */
    readonly attrOriginPoolName: ros.IResolvable;
    /**
     * @Attribute Origins: The Source station information added to the source address pool. Multiple Source stations use arrays to transfer values.
     */
    readonly attrOrigins: ros.IResolvable;
    /**
     * @Attribute RecordName: The domain name assigned to the source address pool can be used as the source address recorded under the site.
     */
    readonly attrRecordName: ros.IResolvable;
    /**
     * @Attribute ReferenceLBCount: How many load balancers are referenced.
     */
    readonly attrReferenceLbCount: ros.IResolvable;
    /**
     * @Attribute References: The source address pool is referred to when the source address pool is configured by the load balancer or recorded as the source station.
     */
    readonly attrReferences: ros.IResolvable;
    /**
     * @Attribute SiteId: The site ID.
     */
    readonly attrSiteId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property originPoolName: The source address pool name.
     */
    originPoolName: string | ros.IResolvable;
    /**
     * @Property siteId: The site ID.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property enabled: Whether the source address pool is enabled:
     * - `true`: Enabled;
     * - `false`: Not enabled.
     */
    enabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property origins: The Source station information added to the source address pool. Multiple Source stations use arrays to transfer values.
     */
    origins: Array<RosOriginPool.OriginsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOriginPoolProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosOriginPool {
    /**
     * @stability external
     */
    interface AuthConfProperty {
        /**
         * @Property secretKey: The SecretKey to be passed when AuthType is set to private_cross_account or private.
         */
        readonly secretKey?: string | ros.IResolvable;
        /**
         * @Property version: The signature version to be transmitted when the source station is AWS S3.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property region: The Region of the source station to be transmitted when the source station is AWS S3.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property accessKey: The AccessKey to be passed when AuthType is set to private_cross_account or private.
         */
        readonly accessKey?: string | ros.IResolvable;
        /**
         * @Property authType: Authentication type.
     * - `public`: public read\/write, which is used when the source station is OSS or S3 and is public read\/write;
     * - `private_same_account`: Used when the same account is private, the source station is OSS, and the authentication type is private authentication of the same account;
     * - `private_cross_account`: private cross-account, used when the origin station is OSS and the authentication type is cross-account private authentication;
     * - `private`: Used when the source station is S3 and the authentication type is private.
         */
        readonly authType?: string | ros.IResolvable;
    }
}
export declare namespace RosOriginPool {
    /**
     * @stability external
     */
    interface OriginsProperty {
        /**
         * @Property type: Source station type:
     * ip_domain: ip or domain name type origin station;
     * - `OSS`:OSS address source station;
     * - `S3`:AWS S3 Source station.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property header: The request header that is sent when returning to the source. Only Host is supported.
         */
        readonly header?: string | ros.IResolvable;
        /**
         * @Property address: Origin Address.
         */
        readonly address?: string | ros.IResolvable;
        /**
         * @Property enabled: Whether the source station is enabled:
     * - `true`: Enabled;
     * - `false`: Not enabled.
         */
        readonly enabled?: boolean | ros.IResolvable;
        /**
         * @Property authConf: The authentication information. When the source Station is an OSS or S3 and other source stations need to be authenticated, the authentication-related configuration information needs to be transmitted.
         */
        readonly authConf?: RosOriginPool.AuthConfProperty | ros.IResolvable;
        /**
         * @Property originId: Origin ID.
         */
        readonly originId?: number | ros.IResolvable;
        /**
         * @Property weight: The weight, an integer between 0 and 100.
         */
        readonly weight?: number | ros.IResolvable;
        /**
         * @Property name: The name of the origin, which must be unique within an origin address.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosOriginRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
 */
export interface RosOriginRuleProps {
    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property dnsRecord: Overwrite the DNS resolution record of the origin request.
     */
    readonly dnsRecord?: string | ros.IResolvable;
    /**
     * @Property follow302Enable: Return Source 302 follow switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly follow302Enable?: string | ros.IResolvable;
    /**
     * @Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
     */
    readonly follow302MaxTries?: number | ros.IResolvable;
    /**
     * @Property follow302RetainArgs: Retain the original request parameter switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly follow302RetainArgs?: string | ros.IResolvable;
    /**
     * @Property follow302RetainHeader: Retain the original request header switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly follow302RetainHeader?: string | ros.IResolvable;
    /**
     * @Property follow302TargetHost: Modify the source host after 302.
     */
    readonly follow302TargetHost?: string | ros.IResolvable;
    /**
     * @Property originHost: The HOST carried in the back-to-origin request.
     */
    readonly originHost?: string | ros.IResolvable;
    /**
     * @Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
     */
    readonly originHttpPort?: number | ros.IResolvable;
    /**
     * @Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.
     */
    readonly originHttpsPort?: number | ros.IResolvable;
    /**
     * @Property originMtls: The mtls switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly originMtls?: string | ros.IResolvable;
    /**
     * @Property originReadTimeout: Read timeout interval of the source station (s).
     */
    readonly originReadTimeout?: number | ros.IResolvable;
    /**
     * @Property originScheme: The protocol used by the back-to-origin request. Value range:
     * - `http`: uses the http protocol to return to the source.
     * - `https`: uses the https protocol to return to the source.
     * - `follow`: follows the Client Protocol back to the source.
     */
    readonly originScheme?: string | ros.IResolvable;
    /**
     * @Property originSni: SNI carried in the back-to-origin request.
     */
    readonly originSni?: string | ros.IResolvable;
    /**
     * @Property originVerify: Source station certificate verification switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly originVerify?: string | ros.IResolvable;
    /**
     * @Property range: Use the range sharding method to download the file from the source. Value range:
     * - `on`: Open.
     * - `off`: off.
     * - `force`: force.
     */
    readonly range?: string | ros.IResolvable;
    /**
     * @Property rangeChunkSize: range shard size.
     */
    readonly rangeChunkSize?: string | ros.IResolvable;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::OriginRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `OriginRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
 */
export declare class RosOriginRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::OriginRule";
    /**
     * @Attribute ConfigId: Back-to-source rule configuration ID.
     */
    readonly attrConfigId: ros.IResolvable;
    /**
     * @Attribute ConfigType: The configuration type. You can use this parameter to check the global configuration or rule configuration.
     */
    readonly attrConfigType: ros.IResolvable;
    /**
     * @Attribute DnsRecord: Overwrite the DNS resolution record of the origin request.
     */
    readonly attrDnsRecord: ros.IResolvable;
    /**
     * @Attribute Follow302Enable: Return Source 302 follow switch.
     */
    readonly attrFollow302Enable: ros.IResolvable;
    /**
     * @Attribute Follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
     */
    readonly attrFollow302MaxTries: ros.IResolvable;
    /**
     * @Attribute Follow302RetainArgs: Retain the original request parameter switch.
     */
    readonly attrFollow302RetainArgs: ros.IResolvable;
    /**
     * @Attribute Follow302RetainHeader: Retain the original request header switch.
     */
    readonly attrFollow302RetainHeader: ros.IResolvable;
    /**
     * @Attribute Follow302TargetHost: Modify the source host after 302.
     */
    readonly attrFollow302TargetHost: ros.IResolvable;
    /**
     * @Attribute OriginHost: The HOST carried in the back-to-origin request.
     */
    readonly attrOriginHost: ros.IResolvable;
    /**
     * @Attribute OriginHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
     */
    readonly attrOriginHttpPort: ros.IResolvable;
    /**
     * @Attribute OriginHttpsPort: The port of the origin station accessed when the HTTPS protocol is used to return to the origin.
     */
    readonly attrOriginHttpsPort: ros.IResolvable;
    /**
     * @Attribute OriginMtls: The mtls switch.
     */
    readonly attrOriginMtls: ros.IResolvable;
    /**
     * @Attribute OriginReadTimeout: Read timeout interval of the source station (s).
     */
    readonly attrOriginReadTimeout: ros.IResolvable;
    /**
     * @Attribute OriginScheme: The protocol used by the back-to-origin request.
     */
    readonly attrOriginScheme: ros.IResolvable;
    /**
     * @Attribute OriginSni: SNI carried in the back-to-origin request.
     */
    readonly attrOriginSni: ros.IResolvable;
    /**
     * @Attribute OriginVerify: Source station certificate verification switch.
     */
    readonly attrOriginVerify: ros.IResolvable;
    /**
     * @Attribute Range: Use the range sharding method to download the file from the source.
     */
    readonly attrRange: ros.IResolvable;
    /**
     * @Attribute RangeChunkSize: range shard size.
     */
    readonly attrRangeChunkSize: ros.IResolvable;
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
     * @Property siteId: The site ID.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property dnsRecord: Overwrite the DNS resolution record of the origin request.
     */
    dnsRecord: string | ros.IResolvable | undefined;
    /**
     * @Property follow302Enable: Return Source 302 follow switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    follow302Enable: string | ros.IResolvable | undefined;
    /**
     * @Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
     */
    follow302MaxTries: number | ros.IResolvable | undefined;
    /**
     * @Property follow302RetainArgs: Retain the original request parameter switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    follow302RetainArgs: string | ros.IResolvable | undefined;
    /**
     * @Property follow302RetainHeader: Retain the original request header switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    follow302RetainHeader: string | ros.IResolvable | undefined;
    /**
     * @Property follow302TargetHost: Modify the source host after 302.
     */
    follow302TargetHost: string | ros.IResolvable | undefined;
    /**
     * @Property originHost: The HOST carried in the back-to-origin request.
     */
    originHost: string | ros.IResolvable | undefined;
    /**
     * @Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
     */
    originHttpPort: number | ros.IResolvable | undefined;
    /**
     * @Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.
     */
    originHttpsPort: number | ros.IResolvable | undefined;
    /**
     * @Property originMtls: The mtls switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    originMtls: string | ros.IResolvable | undefined;
    /**
     * @Property originReadTimeout: Read timeout interval of the source station (s).
     */
    originReadTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property originScheme: The protocol used by the back-to-origin request. Value range:
     * - `http`: uses the http protocol to return to the source.
     * - `https`: uses the https protocol to return to the source.
     * - `follow`: follows the Client Protocol back to the source.
     */
    originScheme: string | ros.IResolvable | undefined;
    /**
     * @Property originSni: SNI carried in the back-to-origin request.
     */
    originSni: string | ros.IResolvable | undefined;
    /**
     * @Property originVerify: Source station certificate verification switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    originVerify: string | ros.IResolvable | undefined;
    /**
     * @Property range: Use the range sharding method to download the file from the source. Value range:
     * - `on`: Open.
     * - `off`: off.
     * - `force`: force.
     */
    range: string | ros.IResolvable | undefined;
    /**
     * @Property rangeChunkSize: range shard size.
     */
    rangeChunkSize: string | ros.IResolvable | undefined;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    rule: string | ros.IResolvable | undefined;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
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
    constructor(scope: ros.Construct, id: string, props: RosOriginRuleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosRedirectRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-redirectrule
 */
export interface RosRedirectRuleProps {
    /**
     * @Property reserveQueryString: Indicates whether the feature of retaining the query string is enabled. Valid values:
     * on
     * off.
     */
    readonly reserveQueryString: string | ros.IResolvable;
    /**
     * @Property siteId: The website ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property statusCode: The response code that you want to use to indicate URL redirection. Valid values:
     * *   301
     * *   302
     * *   303
     * *   307
     * *   308.
     */
    readonly statusCode: number | ros.IResolvable;
    /**
     * @Property targetUrl: The destination URL to which requests are redirected.
     */
    readonly targetUrl: string | ros.IResolvable;
    /**
     * @Property type: The redirect type. Valid value:
     * *   static.
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     *  Match all incoming requests: value set to true
     *  Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on
     * off.
     */
    readonly ruleEnable?: string | ros.IResolvable;
    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;
    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::RedirectRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RedirectRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-redirectrule
 */
export declare class RosRedirectRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::RedirectRule";
    /**
     * @Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable;
    /**
     * @Attribute ConfigType: The type of the configuration.
     */
    readonly attrConfigType: ros.IResolvable;
    /**
     * @Attribute ReserveQueryString: Indicates whether the feature of retaining the query string is enabled.
     */
    readonly attrReserveQueryString: ros.IResolvable;
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
     * @Attribute StatusCode: The response code that you want to use to indicate URL redirection.
     */
    readonly attrStatusCode: ros.IResolvable;
    /**
     * @Attribute TargetUrl: The destination URL to which requests are redirected.
     */
    readonly attrTargetUrl: ros.IResolvable;
    /**
     * @Attribute Type: The redirect type.
     */
    readonly attrType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property reserveQueryString: Indicates whether the feature of retaining the query string is enabled. Valid values:
     * on
     * off.
     */
    reserveQueryString: string | ros.IResolvable;
    /**
     * @Property siteId: The website ID.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property statusCode: The response code that you want to use to indicate URL redirection. Valid values:
     * *   301
     * *   302
     * *   303
     * *   307
     * *   308.
     */
    statusCode: number | ros.IResolvable;
    /**
     * @Property targetUrl: The destination URL to which requests are redirected.
     */
    targetUrl: string | ros.IResolvable;
    /**
     * @Property type: The redirect type. Valid value:
     * *   static.
     */
    type: string | ros.IResolvable;
    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     *  Match all incoming requests: value set to true
     *  Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    rule: string | ros.IResolvable | undefined;
    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on
     * off.
     */
    ruleEnable: string | ros.IResolvable | undefined;
    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    ruleName: string | ros.IResolvable | undefined;
    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    siteVersion: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRedirectRuleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosScheduledPreloadJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadjob
 */
export interface RosScheduledPreloadJobProps {
    /**
     * @Property insertWay: The method to submit the URLs to be prefetched.
     */
    readonly insertWay: string | ros.IResolvable;
    /**
     * @Property scheduledPreloadJobName: The name of the scheduled prefetch task.
     */
    readonly scheduledPreloadJobName: string | ros.IResolvable;
    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property ossUrl: Preheat OSS files regularly and fill in the OSS file address. Note: The OSS file contains the URL that you need to warm up.
     */
    readonly ossUrl?: string | ros.IResolvable;
    /**
     * @Property urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode.
     */
    readonly urlList?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::ScheduledPreloadJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScheduledPreloadJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadjob
 */
export declare class RosScheduledPreloadJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::ScheduledPreloadJob";
    /**
     * @Attribute CreateTime: The time when the task was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Domains: The domain names to be prefetched.
     */
    readonly attrDomains: ros.IResolvable;
    /**
     * @Attribute ErrorInfo: The error message.
     */
    readonly attrErrorInfo: ros.IResolvable;
    /**
     * @Attribute FailedFileOss: OSS address of failed file.
     */
    readonly attrFailedFileOss: ros.IResolvable;
    /**
     * @Attribute FileId: The ID of the URL list file, which can be used during downloads.
     */
    readonly attrFileId: ros.IResolvable;
    /**
     * @Attribute InsertWay: The method to submit the URLs to be prefetched.
     */
    readonly attrInsertWay: ros.IResolvable;
    /**
     * @Attribute ScheduledPreloadJobId: The ID of the prefetch task.
     */
    readonly attrScheduledPreloadJobId: ros.IResolvable;
    /**
     * @Attribute ScheduledPreloadJobName: The task name.
     */
    readonly attrScheduledPreloadJobName: ros.IResolvable;
    /**
     * @Attribute SiteId: The site ID.
     */
    readonly attrSiteId: ros.IResolvable;
    /**
     * @Attribute TaskSubmitted: The number of submitted prefetch tasks.
     */
    readonly attrTaskSubmitted: ros.IResolvable;
    /**
     * @Attribute TaskType: The task type. Valid values: refresh and preload.
     */
    readonly attrTaskType: ros.IResolvable;
    /**
     * @Attribute UrlCount: The total number of URLs.
     */
    readonly attrUrlCount: ros.IResolvable;
    /**
     * @Attribute UrlSubmitted: The number of submitted URLs.
     */
    readonly attrUrlSubmitted: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property insertWay: The method to submit the URLs to be prefetched.
     */
    insertWay: string | ros.IResolvable;
    /**
     * @Property scheduledPreloadJobName: The name of the scheduled prefetch task.
     */
    scheduledPreloadJobName: string | ros.IResolvable;
    /**
     * @Property siteId: The site ID.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property ossUrl: Preheat OSS files regularly and fill in the OSS file address. Note: The OSS file contains the URL that you need to warm up.
     */
    ossUrl: string | ros.IResolvable | undefined;
    /**
     * @Property urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode.
     */
    urlList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScheduledPreloadJobProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSiteDeliveryTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-sitedeliverytask
 */
export interface RosSiteDeliveryTaskProps {
    /**
     * @Property businessType: Real-time log type. Valid values:
     * - `dcdn_log_access_l1 (default)`: access log.
     * - `dcdn_log_er`: Edge Routine logs.
     * - `dcdn_log_waf`: firewall logs.
     * - `dcdn_log_ipa`: TCP\/UDP proxy logs.
     */
    readonly businessType: string | ros.IResolvable;
    /**
     * @Property dataCenter: Data Center. Values:
     * - `cn`: Mainland China.
     * - `sg`: Global (excluding Mainland China).
     */
    readonly dataCenter: string | ros.IResolvable;
    /**
     * @Property deliveryType: Delivery Type:
     * - `sls`: Alibaba Cloud Simple Log Service (SLS).
     * - `http`: Http service.
     * - `aws3`: Amazon s3 service.
     * - `oss`: Alibaba Cloud Object Storage Service.
     * - `kafka`: Kafka service.
     * - `aws3cmpt`: Amazon s3 Compatible Service.
     */
    readonly deliveryType: string | ros.IResolvable;
    /**
     * @Property fieldName: The list of delivery fields to be modified, separated by commas.
     */
    readonly fieldName: string | ros.IResolvable;
    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property taskName: The name of the delivery task.
     */
    readonly taskName: string | ros.IResolvable;
    /**
     * @Property discardRate: If the discard rate is not filled, the default value is 0.
     */
    readonly discardRate?: number | ros.IResolvable;
    /**
     * @Property httpDelivery: HTTP delivery configuration parameters.
     */
    readonly httpDelivery?: RosSiteDeliveryTask.HttpDeliveryProperty | ros.IResolvable;
    /**
     * @Property kafkaDelivery: Kafka delivery configuration parameters.
     */
    readonly kafkaDelivery?: RosSiteDeliveryTask.KafkaDeliveryProperty | ros.IResolvable;
    /**
     * @Property ossDelivery: OSS delivery configuration.
     */
    readonly ossDelivery?: RosSiteDeliveryTask.OssDeliveryProperty | ros.IResolvable;
    /**
     * @Property s3Delivery: S3\/S3 compatible delivery configuration parameters.
     */
    readonly s3Delivery?: RosSiteDeliveryTask.S3DeliveryProperty | ros.IResolvable;
    /**
     * @Property slsDelivery: SLS delivery configuration.
     */
    readonly slsDelivery?: RosSiteDeliveryTask.SlsDeliveryProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::SiteDeliveryTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SiteDeliveryTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-sitedeliverytask
 */
export declare class RosSiteDeliveryTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::SiteDeliveryTask";
    /**
     * @Attribute BusinessType: Real-time log type.
     */
    readonly attrBusinessType: ros.IResolvable;
    /**
     * @Attribute DataCenter: Data Center.
     */
    readonly attrDataCenter: ros.IResolvable;
    /**
     * @Attribute DeliveryType: Delivery Type:.
     */
    readonly attrDeliveryType: ros.IResolvable;
    /**
     * @Attribute DiscardRate: If the discard rate is not filled, the default value is 0.
     */
    readonly attrDiscardRate: ros.IResolvable;
    /**
     * @Attribute FieldName: The list of delivery fields to be modified, separated by commas.
     */
    readonly attrFieldName: ros.IResolvable;
    /**
     * @Attribute FilterRules: The filtering rules.
     */
    readonly attrFilterRules: ros.IResolvable;
    /**
     * @Attribute SinkConfig: The delivery configuration.
     */
    readonly attrSinkConfig: ros.IResolvable;
    /**
     * @Attribute SiteId: The site ID.
     */
    readonly attrSiteId: ros.IResolvable;
    /**
     * @Attribute SiteName: The website name.
     */
    readonly attrSiteName: ros.IResolvable;
    /**
     * @Attribute TaskName: The task name.
     */
    readonly attrTaskName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property businessType: Real-time log type. Valid values:
     * - `dcdn_log_access_l1 (default)`: access log.
     * - `dcdn_log_er`: Edge Routine logs.
     * - `dcdn_log_waf`: firewall logs.
     * - `dcdn_log_ipa`: TCP\/UDP proxy logs.
     */
    businessType: string | ros.IResolvable;
    /**
     * @Property dataCenter: Data Center. Values:
     * - `cn`: Mainland China.
     * - `sg`: Global (excluding Mainland China).
     */
    dataCenter: string | ros.IResolvable;
    /**
     * @Property deliveryType: Delivery Type:
     * - `sls`: Alibaba Cloud Simple Log Service (SLS).
     * - `http`: Http service.
     * - `aws3`: Amazon s3 service.
     * - `oss`: Alibaba Cloud Object Storage Service.
     * - `kafka`: Kafka service.
     * - `aws3cmpt`: Amazon s3 Compatible Service.
     */
    deliveryType: string | ros.IResolvable;
    /**
     * @Property fieldName: The list of delivery fields to be modified, separated by commas.
     */
    fieldName: string | ros.IResolvable;
    /**
     * @Property siteId: The site ID.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property taskName: The name of the delivery task.
     */
    taskName: string | ros.IResolvable;
    /**
     * @Property discardRate: If the discard rate is not filled, the default value is 0.
     */
    discardRate: number | ros.IResolvable | undefined;
    /**
     * @Property httpDelivery: HTTP delivery configuration parameters.
     */
    httpDelivery: RosSiteDeliveryTask.HttpDeliveryProperty | ros.IResolvable | undefined;
    /**
     * @Property kafkaDelivery: Kafka delivery configuration parameters.
     */
    kafkaDelivery: RosSiteDeliveryTask.KafkaDeliveryProperty | ros.IResolvable | undefined;
    /**
     * @Property ossDelivery: OSS delivery configuration.
     */
    ossDelivery: RosSiteDeliveryTask.OssDeliveryProperty | ros.IResolvable | undefined;
    /**
     * @Property s3Delivery: S3\/S3 compatible delivery configuration parameters.
     */
    s3Delivery: RosSiteDeliveryTask.S3DeliveryProperty | ros.IResolvable | undefined;
    /**
     * @Property slsDelivery: SLS delivery configuration.
     */
    slsDelivery: RosSiteDeliveryTask.SlsDeliveryProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSiteDeliveryTaskProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    interface HeaderParamProperty {
        /**
         * @Property staticValue: The static variable.
         */
        readonly staticValue?: string | ros.IResolvable;
    }
}
export declare namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    interface HttpDeliveryProperty {
        /**
         * @Property compress: The compression method. By default, data is not compressed.
         */
        readonly compress?: string | ros.IResolvable;
        /**
         * @Property logBodySuffix: The suffix of the log delivery package.
         */
        readonly logBodySuffix?: string | ros.IResolvable;
        /**
         * @Property headerParam: The custom headers.
         */
        readonly headerParam?: RosSiteDeliveryTask.HeaderParamProperty | ros.IResolvable;
        /**
         * @Property standardAuthParam: The authentication configurations.
         */
        readonly standardAuthParam?: RosSiteDeliveryTask.StandardAuthParamProperty | ros.IResolvable;
        /**
         * @Property standardAuthOn: Specifies whether to use server authentication.
         */
        readonly standardAuthOn?: boolean | ros.IResolvable;
        /**
         * @Property logBodyPrefix: The prefix of the log delivery package.
         */
        readonly logBodyPrefix?: string | ros.IResolvable;
        /**
         * @Property queryParam: The custom query parameters.
         */
        readonly queryParam?: RosSiteDeliveryTask.QueryParamProperty | ros.IResolvable;
        /**
         * @Property destUrl: The address of the HTTP server.
         */
        readonly destUrl: string | ros.IResolvable;
        /**
         * @Property maxBatchSize: The maximum number of entries for each delivery.Notice The field type is Long, and the precision may be lost during serialization\/deserialization. Please note that the value must not be greater than 9007199254740991.
         */
        readonly maxBatchSize?: number | ros.IResolvable;
        /**
         * @Property transformTimeout: The timeout period. Unit: seconds.Notice The field type is Long, and the precision may be lost during serialization\/deserialization. Please note that the value must not be greater than 9007199254740991.
         */
        readonly transformTimeout?: number | ros.IResolvable;
        /**
         * @Property maxRetry: The maximum number of retries.Notice The field type is Long, and the precision may be lost during serialization\/deserialization. Please note that the value must not be greater than 9007199254740991.
         */
        readonly maxRetry?: number | ros.IResolvable;
        /**
         * @Property maxBatchMb: The maximum size of data for each delivery. Unit: MB.Notice The field type is Long, and the precision may be lost during serialization\/deserialization. Please note that the value must not be greater than 9007199254740991.
         */
        readonly maxBatchMb?: number | ros.IResolvable;
    }
}
export declare namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    interface KafkaDeliveryProperty {
        /**
         * @Property compress: The compression method. By default, data is not compressed.
         */
        readonly compress?: string | ros.IResolvable;
        /**
         * @Property userName: The username.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property machanismType: The encryption method.
         */
        readonly machanismType?: string | ros.IResolvable;
        /**
         * @Property brokers: The brokers.
         */
        readonly brokers?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property balancer: The load balancing method.
         */
        readonly balancer?: string | ros.IResolvable;
        /**
         * @Property topic: The topic.
         */
        readonly topic?: string | ros.IResolvable;
        /**
         * @Property userAuth: Specifies whether to enable authentication.
         */
        readonly userAuth?: boolean | ros.IResolvable;
        /**
         * @Property password: The password.
         */
        readonly password?: string | ros.IResolvable;
    }
}
export declare namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    interface OssDeliveryProperty {
        /**
         * @Property bucketName: The name of the OSS bucket.
         */
        readonly bucketName?: string | ros.IResolvable;
        /**
         * @Property region: The region in which the bucket is located.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property prefixPath: The prefix of the path in which you want to store logs.
         */
        readonly prefixPath?: string | ros.IResolvable;
        /**
         * @Property aliuid: The account ID.
         */
        readonly aliuid?: string | ros.IResolvable;
    }
}
export declare namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    interface QueryParamProperty {
        /**
         * @Property staticValue: The static variable.
         */
        readonly staticValue?: string | ros.IResolvable;
    }
}
export declare namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    interface S3DeliveryProperty {
        /**
         * @Property secretKey: The secret access key of your Amazon S3 account.
         */
        readonly secretKey?: string | ros.IResolvable;
        /**
         * @Property endpoint: The endpoint. This parameter is required when the S3Cmpt parameter is set to true.
         */
        readonly endpoint?: string | ros.IResolvable;
        /**
         * @Property vertifyType: Authentication Type.
         */
        readonly vertifyType?: string | ros.IResolvable;
        /**
         * @Property region: The region ID of the service.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property serverSideEncryption: Server-side encryption.
         */
        readonly serverSideEncryption?: boolean | ros.IResolvable;
        /**
         * @Property bucketPath: The directory in the bucket.
         */
        readonly bucketPath?: string | ros.IResolvable;
        /**
         * @Property prefixPath: The prefix of the path in which you want to store logs.
         */
        readonly prefixPath?: string | ros.IResolvable;
        /**
         * @Property accessKey: The access key ID of your Amazon S3 account.
         */
        readonly accessKey?: string | ros.IResolvable;
        /**
         * @Property s3Cmpt: Specifies whether the service is compatible with Amazon S3.
         */
        readonly s3Cmpt?: boolean | ros.IResolvable;
    }
}
export declare namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    interface SlsDeliveryProperty {
        /**
         * @Property slsProject: The name of the SLS project.
         */
        readonly slsProject?: string | ros.IResolvable;
        /**
         * @Property slsRegion: The region in which the SLS project resides.
         */
        readonly slsRegion?: string | ros.IResolvable;
        /**
         * @Property slsLogStore: The name of the Logstore.
         */
        readonly slsLogStore?: string | ros.IResolvable;
    }
}
export declare namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    interface StandardAuthParamProperty {
        /**
         * @Property privateKey: The private key.
         */
        readonly privateKey?: string | ros.IResolvable;
        /**
         * @Property urlPath: The URI path for server authentication.
         */
        readonly urlPath?: string | ros.IResolvable;
        /**
         * @Property expiredTime: The validity period of the signature.Note The value must be greater than 0. We recommend that you specify a value that is greater than 300.
         */
        readonly expiredTime?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosWaitingRoom`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
 */
export interface RosWaitingRoomProps {
    /**
     * @Property cookieName: The name of the custom cookie.
     */
    readonly cookieName: string | ros.IResolvable;
    /**
     * @Property hostNameAndPath: The hostname and path.
     */
    readonly hostNameAndPath: Array<RosWaitingRoom.HostNameAndPathProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property newUsersPerMinute: The maximum number of new users per minute.
     */
    readonly newUsersPerMinute: number | ros.IResolvable;
    /**
     * @Property queuingMethod: The queuing method. Value:
     * - `random`: Users gain access to the origin randomly, regardless of the arrival time.
     * - `fifo`: Users gain access to the origin in order of arrival.
     * - `Passthrough`: Users pass through the waiting room and go straight to the origin.
     * - `Reject-all`: Users are blocked from reaching the origin.
     */
    readonly queuingMethod: string | ros.IResolvable;
    /**
     * @Property queuingStatusCode: Waiting room status code. Value:
     * - `200`
     * - `202`
     * - `429`.
     */
    readonly queuingStatusCode: number | ros.IResolvable;
    /**
     * @Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin. Unit: minutes.
     */
    readonly sessionDuration: number | ros.IResolvable;
    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * @Property status: Waiting room enabled status. Value:
     * - 'on': Enable waiting room
     * - 'off': Disabled waiting room
     */
    readonly status: string | ros.IResolvable;
    /**
     * @Property totalActiveUsers: The maximum number of active users.
     */
    readonly totalActiveUsers: string | ros.IResolvable;
    /**
     * @Property waitingRoomName: The name of the waiting room.
     */
    readonly waitingRoomName: string | ros.IResolvable;
    /**
     * @Property waitingRoomType: The type of the waiting room, support:
     * - `default`: Indicates the default type.
     * - `custom`: indicates a custom type.
     */
    readonly waitingRoomType: string | ros.IResolvable;
    /**
     * @Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter. The incoming content needs to be base64 encoded.
     */
    readonly customPageHtml?: string | ros.IResolvable;
    /**
     * @Property description: Waiting room description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property disableSessionRenewalEnable: Specifies whether to disable session renewal. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    readonly disableSessionRenewalEnable?: string | ros.IResolvable;
    /**
     * @Property jsonResponseEnable: The JSON response. If the accept request header contains "application\/json", JSON data is returned. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    readonly jsonResponseEnable?: string | ros.IResolvable;
    /**
     * @Property language: The language of the waiting room page. When the waiting room type is the default type, it needs to be passed in. The following types are supported:
     * - `enus`: English.
     * - `zhcn`: Simplified Chinese.
     * - `zhhk`: Traditional Chinese.
     */
    readonly language?: string | ros.IResolvable;
    /**
     * @Property queueAllEnable: Specifies whether to queue all requests. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    readonly queueAllEnable?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::WaitingRoom`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WaitingRoom` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
 */
export declare class RosWaitingRoom extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::WaitingRoom";
    /**
     * @Attribute CookieName: Custom Cookie name.
     */
    readonly attrCookieName: ros.IResolvable;
    /**
     * @Attribute CustomPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter. The incoming content needs to be base64 encoded.
     */
    readonly attrCustomPageHtml: ros.IResolvable;
    /**
     * @Attribute Description: Waiting room description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DisableSessionRenewalEnable: Disable session renewal.
     */
    readonly attrDisableSessionRenewalEnable: ros.IResolvable;
    /**
     * @Attribute HostNameAndPath: Host name and path.
     */
    readonly attrHostNameAndPath: ros.IResolvable;
    /**
     * @Attribute JsonResponseEnable: The JSON response. If the accept request header contains "application/json", JSON data is returned.
     */
    readonly attrJsonResponseEnable: ros.IResolvable;
    /**
     * @Attribute Language: The language of the waiting room page. When the waiting room type is the default type, it needs to be passed in.
     */
    readonly attrLanguage: ros.IResolvable;
    /**
     * @Attribute NewUsersPerMinute: Number of new users per minute.
     */
    readonly attrNewUsersPerMinute: ros.IResolvable;
    /**
     * @Attribute QueueAllEnable: All in line.
     */
    readonly attrQueueAllEnable: ros.IResolvable;
    /**
     * @Attribute QueuingMethod: Way of queuing.
     */
    readonly attrQueuingMethod: ros.IResolvable;
    /**
     * @Attribute QueuingStatusCode: Waiting room status code.
     */
    readonly attrQueuingStatusCode: ros.IResolvable;
    /**
     * @Attribute SessionDuration: Session duration in minutes.
     */
    readonly attrSessionDuration: ros.IResolvable;
    /**
     * @Attribute TotalActiveUsers: Total number of active users.
     */
    readonly attrTotalActiveUsers: ros.IResolvable;
    /**
     * @Attribute WaitingRoomId: The waiting room ID.
     */
    readonly attrWaitingRoomId: ros.IResolvable;
    /**
     * @Attribute WaitingRoomName: The name of the waiting room.
     */
    readonly attrWaitingRoomName: ros.IResolvable;
    /**
     * @Attribute WaitingRoomType: Waiting room type, support:.
     */
    readonly attrWaitingRoomType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cookieName: The name of the custom cookie.
     */
    cookieName: string | ros.IResolvable;
    /**
     * @Property hostNameAndPath: The hostname and path.
     */
    hostNameAndPath: Array<RosWaitingRoom.HostNameAndPathProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property newUsersPerMinute: The maximum number of new users per minute.
     */
    newUsersPerMinute: number | ros.IResolvable;
    /**
     * @Property queuingMethod: The queuing method. Value:
     * - `random`: Users gain access to the origin randomly, regardless of the arrival time.
     * - `fifo`: Users gain access to the origin in order of arrival.
     * - `Passthrough`: Users pass through the waiting room and go straight to the origin.
     * - `Reject-all`: Users are blocked from reaching the origin.
     */
    queuingMethod: string | ros.IResolvable;
    /**
     * @Property queuingStatusCode: Waiting room status code. Value:
     * - `200`
     * - `202`
     * - `429`.
     */
    queuingStatusCode: number | ros.IResolvable;
    /**
     * @Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin. Unit: minutes.
     */
    sessionDuration: number | ros.IResolvable;
    /**
     * @Property siteId: The site ID.
     */
    siteId: number | ros.IResolvable;
    /**
     * @Property status: Waiting room enabled status. Value:
     * - 'on': Enable waiting room
     * - 'off': Disabled waiting room
     */
    status: string | ros.IResolvable;
    /**
     * @Property totalActiveUsers: The maximum number of active users.
     */
    totalActiveUsers: string | ros.IResolvable;
    /**
     * @Property waitingRoomName: The name of the waiting room.
     */
    waitingRoomName: string | ros.IResolvable;
    /**
     * @Property waitingRoomType: The type of the waiting room, support:
     * - `default`: Indicates the default type.
     * - `custom`: indicates a custom type.
     */
    waitingRoomType: string | ros.IResolvable;
    /**
     * @Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter. The incoming content needs to be base64 encoded.
     */
    customPageHtml: string | ros.IResolvable | undefined;
    /**
     * @Property description: Waiting room description.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property disableSessionRenewalEnable: Specifies whether to disable session renewal. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    disableSessionRenewalEnable: string | ros.IResolvable | undefined;
    /**
     * @Property jsonResponseEnable: The JSON response. If the accept request header contains "application\/json", JSON data is returned. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    jsonResponseEnable: string | ros.IResolvable | undefined;
    /**
     * @Property language: The language of the waiting room page. When the waiting room type is the default type, it needs to be passed in. The following types are supported:
     * - `enus`: English.
     * - `zhcn`: Simplified Chinese.
     * - `zhhk`: Traditional Chinese.
     */
    language: string | ros.IResolvable | undefined;
    /**
     * @Property queueAllEnable: Specifies whether to queue all requests. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    queueAllEnable: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitingRoomProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosWaitingRoom {
    /**
     * @stability external
     */
    interface HostNameAndPathProperty {
        /**
         * @Property path: The path.
         */
        readonly path: string | ros.IResolvable;
        /**
         * @Property subdomain: The subdomain.
         */
        readonly subdomain: string | ros.IResolvable;
        /**
         * @Property domain: The domain name.
         */
        readonly domain: string | ros.IResolvable;
    }
}
