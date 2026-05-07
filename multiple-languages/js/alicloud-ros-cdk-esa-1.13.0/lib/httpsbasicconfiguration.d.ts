import * as ros from '@alicloud/ros-cdk-core';
import { RosHttpsBasicConfiguration } from './esa.generated';
export { RosHttpsBasicConfiguration as HttpsBasicConfigurationProperty };
/**
 * Properties for defining a `HttpsBasicConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsbasicconfiguration
 */
export interface HttpsBasicConfigurationProps {
    /**
     * Property siteId: Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
     */
    readonly ciphersuite?: string | ros.IResolvable;
    /**
     * Property ciphersuiteGroup: Cipher suite group. Default is all cipher suites. Possible values:
     * - all: All cipher suites.
     * - strict: Strong cipher suites.
     * - custom: Custom cipher suites.
     */
    readonly ciphersuiteGroup?: string | ros.IResolvable;
    /**
     * Property http2: Indicates whether HTTP2 is enabled. Default is on. Possible values:
     * - on: Enabled.
     * - off: Disabled.
     */
    readonly http2?: string | ros.IResolvable;
    /**
     * Property http3: Whether to enable HTTP3, which is enabled by default. The value can be:
     * - on: Enabled.
     * - off: Disabled.
     */
    readonly http3?: string | ros.IResolvable;
    /**
     * Property https: Whether to enable HTTPS. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly https?: string | ros.IResolvable;
    /**
     * Property ocspStapling: Indicates whether OCSP is enabled. Default is off. Possible values:
     * - on: Enabled.
     * - off: Disabled.
     */
    readonly ocspStapling?: string | ros.IResolvable;
    /**
     * Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * -  Match all incoming requests: value set to true
     * -  Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;
    /**
     * Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - on: open.
     * - off: close.
     */
    readonly ruleEnable?: string | ros.IResolvable;
    /**
     * Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;
    /**
     * Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;
    /**
     * Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly tls10?: string | ros.IResolvable;
    /**
     * Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly tls11?: string | ros.IResolvable;
    /**
     * Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly tls12?: string | ros.IResolvable;
    /**
     * Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly tls13?: string | ros.IResolvable;
}
/**
 * Represents a `HttpsBasicConfiguration`.
 */
export interface IHttpsBasicConfiguration extends ros.IResource {
    readonly props: HttpsBasicConfigurationProps;
    /**
     * Attribute Ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
     */
    readonly attrCiphersuite: ros.IResolvable | string;
    /**
     * Attribute CiphersuiteGroup: Cipher suite group. Default is all cipher suites.
     */
    readonly attrCiphersuiteGroup: ros.IResolvable | string;
    /**
     * Attribute ConfigId: ConfigId of the configuration.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
     */
    readonly attrConfigType: ros.IResolvable | string;
    /**
     * Attribute Http2: Indicates whether HTTP2 is enabled. Default is on.
     */
    readonly attrHttp2: ros.IResolvable | string;
    /**
     * Attribute Http3: Whether to enable HTTP3, which is enabled by default.
     */
    readonly attrHttp3: ros.IResolvable | string;
    /**
     * Attribute Https: Whether to enable HTTPS. Default is enabled.
     */
    readonly attrHttps: ros.IResolvable | string;
    /**
     * Attribute OcspStapling: Indicates whether OCSP is enabled. Default is off.
     */
    readonly attrOcspStapling: ros.IResolvable | string;
    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRule: ros.IResolvable | string;
    /**
     * Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleEnable: ros.IResolvable | string;
    /**
     * Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleName: ros.IResolvable | string;
    /**
     * Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly attrSequence: ros.IResolvable | string;
    /**
     * Attribute Tls10: Whether to enable TLS1.0. Default is disabled.
     */
    readonly attrTls10: ros.IResolvable | string;
    /**
     * Attribute Tls11: Whether to enable TLS1.1. Default is enabled.
     */
    readonly attrTls11: ros.IResolvable | string;
    /**
     * Attribute Tls12: Whether to enable TLS1.2. Default is enabled.
     */
    readonly attrTls12: ros.IResolvable | string;
    /**
     * Attribute Tls13: Whether to enable TLS1.3. Default is enabled.
     */
    readonly attrTls13: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::HttpsBasicConfiguration`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHttpsBasicConfiguration`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsbasicconfiguration
 */
export declare class HttpsBasicConfiguration extends ros.Resource implements IHttpsBasicConfiguration {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HttpsBasicConfigurationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
     */
    readonly attrCiphersuite: ros.IResolvable | string;
    /**
     * Attribute CiphersuiteGroup: Cipher suite group. Default is all cipher suites.
     */
    readonly attrCiphersuiteGroup: ros.IResolvable | string;
    /**
     * Attribute ConfigId: ConfigId of the configuration.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
     */
    readonly attrConfigType: ros.IResolvable | string;
    /**
     * Attribute Http2: Indicates whether HTTP2 is enabled. Default is on.
     */
    readonly attrHttp2: ros.IResolvable | string;
    /**
     * Attribute Http3: Whether to enable HTTP3, which is enabled by default.
     */
    readonly attrHttp3: ros.IResolvable | string;
    /**
     * Attribute Https: Whether to enable HTTPS. Default is enabled.
     */
    readonly attrHttps: ros.IResolvable | string;
    /**
     * Attribute OcspStapling: Indicates whether OCSP is enabled. Default is off.
     */
    readonly attrOcspStapling: ros.IResolvable | string;
    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRule: ros.IResolvable | string;
    /**
     * Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleEnable: ros.IResolvable | string;
    /**
     * Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleName: ros.IResolvable | string;
    /**
     * Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly attrSequence: ros.IResolvable | string;
    /**
     * Attribute Tls10: Whether to enable TLS1.0. Default is disabled.
     */
    readonly attrTls10: ros.IResolvable | string;
    /**
     * Attribute Tls11: Whether to enable TLS1.1. Default is enabled.
     */
    readonly attrTls11: ros.IResolvable | string;
    /**
     * Attribute Tls12: Whether to enable TLS1.2. Default is enabled.
     */
    readonly attrTls12: ros.IResolvable | string;
    /**
     * Attribute Tls13: Whether to enable TLS1.3. Default is enabled.
     */
    readonly attrTls13: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HttpsBasicConfigurationProps, enableResourcePropertyConstraint?: boolean);
}
