import * as ros from '@alicloud/ros-cdk-core';
import { RosHttpsApplicationConfiguration } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHttpsApplicationConfiguration as HttpsApplicationConfigurationProperty };

/**
 * Properties for defining a `HttpsApplicationConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
 */
export interface HttpsApplicationConfigurationProps {

    /**
     * Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property altSvc: Function switch, default off. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly altSvc?: string | ros.IResolvable;

    /**
     * Property altSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly altSvcClear?: string | ros.IResolvable;

    /**
     * Property altSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
     */
    readonly altSvcMa?: string | ros.IResolvable;

    /**
     * Property altSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly altSvcPersist?: string | ros.IResolvable;

    /**
     * Property hsts: Whether to enable HSTS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly hsts?: string | ros.IResolvable;

    /**
     * Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly hstsIncludeSubdomains?: string | ros.IResolvable;

    /**
     * Property hstsMaxAge: The expiration time of HSTS, in seconds.
     */
    readonly hstsMaxAge?: string | ros.IResolvable;

    /**
     * Property hstsPreload: Whether to enable HSTS preloading. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly hstsPreload?: string | ros.IResolvable;

    /**
     * Property httpsForce: Whether to enable forced HTTPS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly httpsForce?: string | ros.IResolvable;

    /**
     * Property httpsForceCode: Forced HTTPS jump status code, value range:
     * 301
     * 302
     * 307
     * 308
     */
    readonly httpsForceCode?: string | ros.IResolvable;

    /**
     * Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly httpsNoSniDeny?: string | ros.IResolvable;

    /**
     * Property httpsSniVerify: Whether to enable SNI verification. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly httpsSniVerify?: string | ros.IResolvable;

    /**
     * Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    readonly httpsSniWhitelist?: string | ros.IResolvable;

    /**
     * Property paymentType: Payment Type.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
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
     * Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}

/**
 * Represents a `HttpsApplicationConfiguration`.
 */
export interface IHttpsApplicationConfiguration extends ros.IResource {
    readonly props: HttpsApplicationConfigurationProps;

    /**
     * Attribute AltSvc: Function switch, default off.
     */
    readonly attrAltSvc: ros.IResolvable | string;

    /**
     * Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default.
     */
    readonly attrAltSvcClear: ros.IResolvable | string;

    /**
     * Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
     */
    readonly attrAltSvcMa: ros.IResolvable | string;

    /**
     * Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default.
     */
    readonly attrAltSvcPersist: ros.IResolvable | string;

    /**
     * Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute ConfigType: The type of the configuration.
     */
    readonly attrConfigType: ros.IResolvable | string;

    /**
     * Attribute Hsts: Whether to enable HSTS. It is disabled by default.
     */
    readonly attrHsts: ros.IResolvable | string;

    /**
     * Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
     */
    readonly attrHstsIncludeSubdomains: ros.IResolvable | string;

    /**
     * Attribute HstsMaxAge: The expiration time of HSTS, in seconds.
     */
    readonly attrHstsMaxAge: ros.IResolvable | string;

    /**
     * Attribute HstsPreload: Whether to enable HSTS preloading. It is disabled by default.
     */
    readonly attrHstsPreload: ros.IResolvable | string;

    /**
     * Attribute HttpsForce: Whether to enable forced HTTPS. It is disabled by default.
     */
    readonly attrHttpsForce: ros.IResolvable | string;

    /**
     * Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.
     */
    readonly attrHttpsForceCode: ros.IResolvable | string;

    /**
     * Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default.
     */
    readonly attrHttpsNoSniDeny: ros.IResolvable | string;

    /**
     * Attribute HttpsSniVerify: Whether to enable SNI verification. It is disabled by default.
     */
    readonly attrHttpsSniVerify: ros.IResolvable | string;

    /**
     * Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    readonly attrHttpsSniWhitelist: ros.IResolvable | string;

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
     * Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly attrSiteVersion: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::HttpsApplicationConfiguration`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHttpsApplicationConfiguration`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
 */
export class HttpsApplicationConfiguration extends ros.Resource implements IHttpsApplicationConfiguration {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: HttpsApplicationConfigurationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AltSvc: Function switch, default off.
     */
    public readonly attrAltSvc: ros.IResolvable | string;

    /**
     * Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default.
     */
    public readonly attrAltSvcClear: ros.IResolvable | string;

    /**
     * Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
     */
    public readonly attrAltSvcMa: ros.IResolvable | string;

    /**
     * Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default.
     */
    public readonly attrAltSvcPersist: ros.IResolvable | string;

    /**
     * Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute ConfigType: The type of the configuration.
     */
    public readonly attrConfigType: ros.IResolvable | string;

    /**
     * Attribute Hsts: Whether to enable HSTS. It is disabled by default.
     */
    public readonly attrHsts: ros.IResolvable | string;

    /**
     * Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
     */
    public readonly attrHstsIncludeSubdomains: ros.IResolvable | string;

    /**
     * Attribute HstsMaxAge: The expiration time of HSTS, in seconds.
     */
    public readonly attrHstsMaxAge: ros.IResolvable | string;

    /**
     * Attribute HstsPreload: Whether to enable HSTS preloading. It is disabled by default.
     */
    public readonly attrHstsPreload: ros.IResolvable | string;

    /**
     * Attribute HttpsForce: Whether to enable forced HTTPS. It is disabled by default.
     */
    public readonly attrHttpsForce: ros.IResolvable | string;

    /**
     * Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.
     */
    public readonly attrHttpsForceCode: ros.IResolvable | string;

    /**
     * Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default.
     */
    public readonly attrHttpsNoSniDeny: ros.IResolvable | string;

    /**
     * Attribute HttpsSniVerify: Whether to enable SNI verification. It is disabled by default.
     */
    public readonly attrHttpsSniVerify: ros.IResolvable | string;

    /**
     * Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    public readonly attrHttpsSniWhitelist: ros.IResolvable | string;

    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable | string;

    /**
     * Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable | string;

    /**
     * Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable | string;

    /**
     * Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable | string;

    /**
     * Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HttpsApplicationConfigurationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosHttpsApplicationConfiguration = new RosHttpsApplicationConfiguration(this, id,  {
            siteId: props.siteId,
            hstsIncludeSubdomains: props.hstsIncludeSubdomains,
            altSvcMa: props.altSvcMa,
            ruleEnable: props.ruleEnable,
            altSvc: props.altSvc,
            httpsForceCode: props.httpsForceCode,
            httpsNoSniDeny: props.httpsNoSniDeny,
            hsts: props.hsts,
            hstsPreload: props.hstsPreload,
            hstsMaxAge: props.hstsMaxAge,
            sequence: props.sequence,
            httpsSniWhitelist: props.httpsSniWhitelist,
            altSvcPersist: props.altSvcPersist,
            httpsSniVerify: props.httpsSniVerify,
            altSvcClear: props.altSvcClear,
            httpsForce: props.httpsForce,
            paymentType: props.paymentType,
            rule: props.rule,
            siteVersion: props.siteVersion,
            ruleName: props.ruleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHttpsApplicationConfiguration;
        this.attrAltSvc = rosHttpsApplicationConfiguration.attrAltSvc;
        this.attrAltSvcClear = rosHttpsApplicationConfiguration.attrAltSvcClear;
        this.attrAltSvcMa = rosHttpsApplicationConfiguration.attrAltSvcMa;
        this.attrAltSvcPersist = rosHttpsApplicationConfiguration.attrAltSvcPersist;
        this.attrConfigId = rosHttpsApplicationConfiguration.attrConfigId;
        this.attrConfigType = rosHttpsApplicationConfiguration.attrConfigType;
        this.attrHsts = rosHttpsApplicationConfiguration.attrHsts;
        this.attrHstsIncludeSubdomains = rosHttpsApplicationConfiguration.attrHstsIncludeSubdomains;
        this.attrHstsMaxAge = rosHttpsApplicationConfiguration.attrHstsMaxAge;
        this.attrHstsPreload = rosHttpsApplicationConfiguration.attrHstsPreload;
        this.attrHttpsForce = rosHttpsApplicationConfiguration.attrHttpsForce;
        this.attrHttpsForceCode = rosHttpsApplicationConfiguration.attrHttpsForceCode;
        this.attrHttpsNoSniDeny = rosHttpsApplicationConfiguration.attrHttpsNoSniDeny;
        this.attrHttpsSniVerify = rosHttpsApplicationConfiguration.attrHttpsSniVerify;
        this.attrHttpsSniWhitelist = rosHttpsApplicationConfiguration.attrHttpsSniWhitelist;
        this.attrRule = rosHttpsApplicationConfiguration.attrRule;
        this.attrRuleEnable = rosHttpsApplicationConfiguration.attrRuleEnable;
        this.attrRuleName = rosHttpsApplicationConfiguration.attrRuleName;
        this.attrSequence = rosHttpsApplicationConfiguration.attrSequence;
        this.attrSiteVersion = rosHttpsApplicationConfiguration.attrSiteVersion;
    }
}
