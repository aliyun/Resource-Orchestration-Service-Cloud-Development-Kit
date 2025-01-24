// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosConcurrencyConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig
 */
export interface RosConcurrencyConfigProps {

    /**
     * @Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * @Property reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions. Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
     */
    readonly reservedConcurrency: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosConcurrencyConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosConcurrencyConfigProps`
 *
 * @returns the result of the validation.
 */
function RosConcurrencyConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('reservedConcurrency', ros.requiredValidator)(properties.reservedConcurrency));
    if(properties.reservedConcurrency && (typeof properties.reservedConcurrency) !== 'object') {
        errors.collect(ros.propertyValidator('reservedConcurrency', ros.validateRange)({
            data: properties.reservedConcurrency,
            min: undefined,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('reservedConcurrency', ros.validateNumber)(properties.reservedConcurrency));
    return errors.wrap('supplied properties not correct for "RosConcurrencyConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::ConcurrencyConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosConcurrencyConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::ConcurrencyConfig` resource.
 */
// @ts-ignore TS6133
function rosConcurrencyConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConcurrencyConfigPropsValidator(properties).assertSuccess();
    }
    return {
      'FunctionName': ros.stringToRosTemplate(properties.functionName),
      'ReservedConcurrency': ros.numberToRosTemplate(properties.reservedConcurrency),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::ConcurrencyConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConcurrencyConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig
 */
export class RosConcurrencyConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::ConcurrencyConfig";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property functionName: Function name.
     */
    public functionName: string | ros.IResolvable;

    /**
     * @Property reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions. Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
     */
    public reservedConcurrency: number | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConcurrencyConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConcurrencyConfig.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.functionName = props.functionName;
        this.reservedConcurrency = props.reservedConcurrency;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            functionName: this.functionName,
            reservedConcurrency: this.reservedConcurrency,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConcurrencyConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCustomDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
 */
export interface RosCustomDomainProps {

    /**
     * @Property authConfig: Permission authentication configuration.
     */
    readonly authConfig: RosCustomDomain.AuthConfigProperty | ros.IResolvable;

    /**
     * @Property domainName: Domain name. Fill in the custom domain name that has been filed in Ali cloud or access to the record.
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property protocol: Protocol types supported by the domain name. Valid values:
     * - HTTP: Only HTTP protocol is supported. 
     * - HTTPS: HTTPS only is supported. 
     * - HTTP,HTTPS: Supports HTTP and HTTPS protocols.
     */
    readonly protocol: string | ros.IResolvable;

    /**
     * @Property certConfig: HTTPS certificate information.
     */
    readonly certConfig?: RosCustomDomain.CertConfigProperty | ros.IResolvable;

    /**
     * @Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
     */
    readonly routeConfig?: RosCustomDomain.RouteConfigProperty | ros.IResolvable;

    /**
     * @Property tlsConfig: TLS config.
     */
    readonly tlsConfig?: RosCustomDomain.TlsConfigProperty | ros.IResolvable;

    /**
     * @Property wafConfig: Web application firewall configuration information.
     */
    readonly wafConfig?: RosCustomDomain.WafConfigProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomDomainProps`
 *
 * @returns the result of the validation.
 */
function RosCustomDomainPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('certConfig', RosCustomDomain_CertConfigPropertyValidator)(properties.certConfig));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('tlsConfig', RosCustomDomain_TlsConfigPropertyValidator)(properties.tlsConfig));
    errors.collect(ros.propertyValidator('routeConfig', RosCustomDomain_RouteConfigPropertyValidator)(properties.routeConfig));
    errors.collect(ros.propertyValidator('authConfig', ros.requiredValidator)(properties.authConfig));
    errors.collect(ros.propertyValidator('authConfig', RosCustomDomain_AuthConfigPropertyValidator)(properties.authConfig));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["HTTP","HTTPS","HTTP,HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('wafConfig', RosCustomDomain_WafConfigPropertyValidator)(properties.wafConfig));
    return errors.wrap('supplied properties not correct for "RosCustomDomainProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomDomainPropsValidator(properties).assertSuccess();
    }
    return {
      'AuthConfig': rosCustomDomainAuthConfigPropertyToRosTemplate(properties.authConfig),
      'DomainName': ros.stringToRosTemplate(properties.domainName),
      'Protocol': ros.stringToRosTemplate(properties.protocol),
      'CertConfig': rosCustomDomainCertConfigPropertyToRosTemplate(properties.certConfig),
      'RouteConfig': rosCustomDomainRouteConfigPropertyToRosTemplate(properties.routeConfig),
      'TlsConfig': rosCustomDomainTlsConfigPropertyToRosTemplate(properties.tlsConfig),
      'WafConfig': rosCustomDomainWafConfigPropertyToRosTemplate(properties.wafConfig),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::CustomDomain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomDomain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
 */
export class RosCustomDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::CustomDomain";

    /**
     * @Attribute DomainName: The domain name
     */
    public readonly attrDomainName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property authConfig: Permission authentication configuration.
     */
    public authConfig: RosCustomDomain.AuthConfigProperty | ros.IResolvable;

    /**
     * @Property domainName: Domain name. Fill in the custom domain name that has been filed in Ali cloud or access to the record.
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property protocol: Protocol types supported by the domain name. Valid values:
     * - HTTP: Only HTTP protocol is supported. 
     * - HTTPS: HTTPS only is supported. 
     * - HTTP,HTTPS: Supports HTTP and HTTPS protocols.
     */
    public protocol: string | ros.IResolvable;

    /**
     * @Property certConfig: HTTPS certificate information.
     */
    public certConfig: RosCustomDomain.CertConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
     */
    public routeConfig: RosCustomDomain.RouteConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property tlsConfig: TLS config.
     */
    public tlsConfig: RosCustomDomain.TlsConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property wafConfig: Web application firewall configuration information.
     */
    public wafConfig: RosCustomDomain.WafConfigProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainName = this.getAtt('DomainName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.authConfig = props.authConfig;
        this.domainName = props.domainName;
        this.protocol = props.protocol;
        this.certConfig = props.certConfig;
        this.routeConfig = props.routeConfig;
        this.tlsConfig = props.tlsConfig;
        this.wafConfig = props.wafConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            authConfig: this.authConfig,
            domainName: this.domainName,
            protocol: this.protocol,
            certConfig: this.certConfig,
            routeConfig: this.routeConfig,
            tlsConfig: this.tlsConfig,
            wafConfig: this.wafConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCustomDomain {
    /**
     * @stability external
     */
    export interface AuthConfigProperty {
        /**
         * @Property authInfo: Authentication information.
         */
        readonly authInfo?: string | ros.IResolvable;
        /**
         * @Property authType: Authentication type.
         */
        readonly authType: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AuthConfigProperty`
 *
 * @param properties - the TypeScript properties of a `AuthConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_AuthConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('authInfo', ros.validateString)(properties.authInfo));
    errors.collect(ros.propertyValidator('authType', ros.requiredValidator)(properties.authType));
    if(properties.authType && (typeof properties.authType) !== 'object') {
        errors.collect(ros.propertyValidator('authType', ros.validateAllowedValues)({
          data: properties.authType,
          allowedValues: ["anonymous","function","jwt"],
        }));
    }
    errors.collect(ros.propertyValidator('authType', ros.validateString)(properties.authType));
    return errors.wrap('supplied properties not correct for "AuthConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.AuthConfig` resource
 *
 * @param properties - the TypeScript properties of a `AuthConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.AuthConfig` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainAuthConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomDomain_AuthConfigPropertyValidator(properties).assertSuccess();
    return {
      'AuthInfo': ros.stringToRosTemplate(properties.authInfo),
      'AuthType': ros.stringToRosTemplate(properties.authType),
    };
}

export namespace RosCustomDomain {
    /**
     * @stability external
     */
    export interface CertConfigProperty {
        /**
         * @Property privateKey: Private key in PEM format.
         */
        readonly privateKey: string | ros.IResolvable;
        /**
         * @Property certName: Certificate name.
         */
        readonly certName: string | ros.IResolvable;
        /**
         * @Property certificate: Certificates in PEM format.
         */
        readonly certificate: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CertConfigProperty`
 *
 * @param properties - the TypeScript properties of a `CertConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_CertConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('privateKey', ros.requiredValidator)(properties.privateKey));
    errors.collect(ros.propertyValidator('privateKey', ros.validateString)(properties.privateKey));
    errors.collect(ros.propertyValidator('certName', ros.requiredValidator)(properties.certName));
    errors.collect(ros.propertyValidator('certName', ros.validateString)(properties.certName));
    errors.collect(ros.propertyValidator('certificate', ros.requiredValidator)(properties.certificate));
    errors.collect(ros.propertyValidator('certificate', ros.validateString)(properties.certificate));
    return errors.wrap('supplied properties not correct for "CertConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.CertConfig` resource
 *
 * @param properties - the TypeScript properties of a `CertConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.CertConfig` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainCertConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomDomain_CertConfigPropertyValidator(properties).assertSuccess();
    return {
      'PrivateKey': ros.stringToRosTemplate(properties.privateKey),
      'CertName': ros.stringToRosTemplate(properties.certName),
      'Certificate': ros.stringToRosTemplate(properties.certificate),
    };
}

export namespace RosCustomDomain {
    /**
     * @stability external
     */
    export interface EqualRulesProperty {
        /**
         * @Property replacement: Replacement.
         */
        readonly replacement: string | ros.IResolvable;
        /**
         * @Property match: Match.
         */
        readonly match: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EqualRulesProperty`
 *
 * @param properties - the TypeScript properties of a `EqualRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_EqualRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('replacement', ros.requiredValidator)(properties.replacement));
    errors.collect(ros.propertyValidator('replacement', ros.validateString)(properties.replacement));
    errors.collect(ros.propertyValidator('match', ros.requiredValidator)(properties.match));
    errors.collect(ros.propertyValidator('match', ros.validateString)(properties.match));
    return errors.wrap('supplied properties not correct for "EqualRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.EqualRules` resource
 *
 * @param properties - the TypeScript properties of a `EqualRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.EqualRules` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainEqualRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomDomain_EqualRulesPropertyValidator(properties).assertSuccess();
    return {
      'Replacement': ros.stringToRosTemplate(properties.replacement),
      'Match': ros.stringToRosTemplate(properties.match),
    };
}

export namespace RosCustomDomain {
    /**
     * @stability external
     */
    export interface RegexRulesProperty {
        /**
         * @Property replacement: Replacement.
         */
        readonly replacement: string | ros.IResolvable;
        /**
         * @Property match: Match.
         */
        readonly match: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RegexRulesProperty`
 *
 * @param properties - the TypeScript properties of a `RegexRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_RegexRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('replacement', ros.requiredValidator)(properties.replacement));
    errors.collect(ros.propertyValidator('replacement', ros.validateString)(properties.replacement));
    errors.collect(ros.propertyValidator('match', ros.requiredValidator)(properties.match));
    errors.collect(ros.propertyValidator('match', ros.validateString)(properties.match));
    return errors.wrap('supplied properties not correct for "RegexRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.RegexRules` resource
 *
 * @param properties - the TypeScript properties of a `RegexRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.RegexRules` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainRegexRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomDomain_RegexRulesPropertyValidator(properties).assertSuccess();
    return {
      'Replacement': ros.stringToRosTemplate(properties.replacement),
      'Match': ros.stringToRosTemplate(properties.match),
    };
}

export namespace RosCustomDomain {
    /**
     * @stability external
     */
    export interface RewriteConfigProperty {
        /**
         * @Property wildcardRules: Wildcard matching rules.
         */
        readonly wildcardRules?: Array<RosCustomDomain.WildcardRulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property regexRules: Regular matching rules.
         */
        readonly regexRules?: Array<RosCustomDomain.RegexRulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property equalRules: Exact matching rules.
         */
        readonly equalRules?: Array<RosCustomDomain.EqualRulesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RewriteConfigProperty`
 *
 * @param properties - the TypeScript properties of a `RewriteConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_RewriteConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.wildcardRules && (Array.isArray(properties.wildcardRules) || (typeof properties.wildcardRules) === 'string')) {
        errors.collect(ros.propertyValidator('wildcardRules', ros.validateLength)({
            data: properties.wildcardRules.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('wildcardRules', ros.listValidator(RosCustomDomain_WildcardRulesPropertyValidator))(properties.wildcardRules));
    if(properties.regexRules && (Array.isArray(properties.regexRules) || (typeof properties.regexRules) === 'string')) {
        errors.collect(ros.propertyValidator('regexRules', ros.validateLength)({
            data: properties.regexRules.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('regexRules', ros.listValidator(RosCustomDomain_RegexRulesPropertyValidator))(properties.regexRules));
    if(properties.equalRules && (Array.isArray(properties.equalRules) || (typeof properties.equalRules) === 'string')) {
        errors.collect(ros.propertyValidator('equalRules', ros.validateLength)({
            data: properties.equalRules.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('equalRules', ros.listValidator(RosCustomDomain_EqualRulesPropertyValidator))(properties.equalRules));
    return errors.wrap('supplied properties not correct for "RewriteConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.RewriteConfig` resource
 *
 * @param properties - the TypeScript properties of a `RewriteConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.RewriteConfig` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainRewriteConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomDomain_RewriteConfigPropertyValidator(properties).assertSuccess();
    return {
      'WildcardRules': ros.listMapper(rosCustomDomainWildcardRulesPropertyToRosTemplate)(properties.wildcardRules),
      'RegexRules': ros.listMapper(rosCustomDomainRegexRulesPropertyToRosTemplate)(properties.regexRules),
      'EqualRules': ros.listMapper(rosCustomDomainEqualRulesPropertyToRosTemplate)(properties.equalRules),
    };
}

export namespace RosCustomDomain {
    /**
     * @stability external
     */
    export interface RouteConfigProperty {
        /**
         * @Property routes: PathConfig Array
         */
        readonly routes: Array<RosCustomDomain.RoutesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RouteConfigProperty`
 *
 * @param properties - the TypeScript properties of a `RouteConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_RouteConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('routes', ros.requiredValidator)(properties.routes));
    if(properties.routes && (Array.isArray(properties.routes) || (typeof properties.routes) === 'string')) {
        errors.collect(ros.propertyValidator('routes', ros.validateLength)({
            data: properties.routes.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('routes', ros.listValidator(RosCustomDomain_RoutesPropertyValidator))(properties.routes));
    return errors.wrap('supplied properties not correct for "RouteConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.RouteConfig` resource
 *
 * @param properties - the TypeScript properties of a `RouteConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.RouteConfig` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainRouteConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomDomain_RouteConfigPropertyValidator(properties).assertSuccess();
    return {
      'Routes': ros.listMapper(rosCustomDomainRoutesPropertyToRosTemplate)(properties.routes),
    };
}

export namespace RosCustomDomain {
    /**
     * @stability external
     */
    export interface RoutesProperty {
        /**
         * @Property path: HTTP request path when a function is called with a custom domain name, for example: "\/login\/*"
         */
        readonly path: string | ros.IResolvable;
        /**
         * @Property functionName: Path to the function, for example: "login"
         */
        readonly functionName: string | ros.IResolvable;
        /**
         * @Property qualifier: Service version or alias
         */
        readonly qualifier: string | ros.IResolvable;
        /**
         * @Property rewriteConfig: Rewrite configuration.
         */
        readonly rewriteConfig?: RosCustomDomain.RewriteConfigProperty | ros.IResolvable;
        /**
         * @Property methods: HTTP request methods. Valid values: HEAD, GET, POST, PUT, DELETE, PATCH, OPTIONS
         */
        readonly methods?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RoutesProperty`
 *
 * @param properties - the TypeScript properties of a `RoutesProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_RoutesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.requiredValidator)(properties.path));
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('qualifier', ros.requiredValidator)(properties.qualifier));
    errors.collect(ros.propertyValidator('qualifier', ros.validateString)(properties.qualifier));
    errors.collect(ros.propertyValidator('rewriteConfig', RosCustomDomain_RewriteConfigPropertyValidator)(properties.rewriteConfig));
    if(properties.methods && (Array.isArray(properties.methods) || (typeof properties.methods) === 'string')) {
        errors.collect(ros.propertyValidator('methods', ros.validateLength)({
            data: properties.methods.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('methods', ros.listValidator(ros.validateString))(properties.methods));
    return errors.wrap('supplied properties not correct for "RoutesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.Routes` resource
 *
 * @param properties - the TypeScript properties of a `RoutesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.Routes` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainRoutesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomDomain_RoutesPropertyValidator(properties).assertSuccess();
    return {
      'Path': ros.stringToRosTemplate(properties.path),
      'FunctionName': ros.stringToRosTemplate(properties.functionName),
      'Qualifier': ros.stringToRosTemplate(properties.qualifier),
      'RewriteConfig': rosCustomDomainRewriteConfigPropertyToRosTemplate(properties.rewriteConfig),
      'Methods': ros.listMapper(ros.stringToRosTemplate)(properties.methods),
    };
}

export namespace RosCustomDomain {
    /**
     * @stability external
     */
    export interface TlsConfigProperty {
        /**
         * @Property minVersion: Minimum supported TLS version.
         */
        readonly minVersion: string | ros.IResolvable;
        /**
         * @Property maxVersion: Maximum supported TLS version.
         */
        readonly maxVersion?: string | ros.IResolvable;
        /**
         * @Property cipherSuites: TLS cipher suites.
         */
        readonly cipherSuites: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TlsConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TlsConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_TlsConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('minVersion', ros.requiredValidator)(properties.minVersion));
    errors.collect(ros.propertyValidator('minVersion', ros.validateString)(properties.minVersion));
    errors.collect(ros.propertyValidator('maxVersion', ros.validateString)(properties.maxVersion));
    errors.collect(ros.propertyValidator('cipherSuites', ros.requiredValidator)(properties.cipherSuites));
    if(properties.cipherSuites && (Array.isArray(properties.cipherSuites) || (typeof properties.cipherSuites) === 'string')) {
        errors.collect(ros.propertyValidator('cipherSuites', ros.validateLength)({
            data: properties.cipherSuites.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('cipherSuites', ros.listValidator(ros.validateString))(properties.cipherSuites));
    return errors.wrap('supplied properties not correct for "TlsConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.TlsConfig` resource
 *
 * @param properties - the TypeScript properties of a `TlsConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.TlsConfig` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainTlsConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomDomain_TlsConfigPropertyValidator(properties).assertSuccess();
    return {
      'MinVersion': ros.stringToRosTemplate(properties.minVersion),
      'MaxVersion': ros.stringToRosTemplate(properties.maxVersion),
      'CipherSuites': ros.listMapper(ros.stringToRosTemplate)(properties.cipherSuites),
    };
}

export namespace RosCustomDomain {
    /**
     * @stability external
     */
    export interface WafConfigProperty {
        /**
         * @Property enableWaf: Whether to enable WAF.
         */
        readonly enableWaf?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WafConfigProperty`
 *
 * @param properties - the TypeScript properties of a `WafConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_WafConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableWaf', ros.validateBoolean)(properties.enableWaf));
    return errors.wrap('supplied properties not correct for "WafConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.WafConfig` resource
 *
 * @param properties - the TypeScript properties of a `WafConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.WafConfig` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainWafConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomDomain_WafConfigPropertyValidator(properties).assertSuccess();
    return {
      'EnableWAF': ros.booleanToRosTemplate(properties.enableWaf),
    };
}

export namespace RosCustomDomain {
    /**
     * @stability external
     */
    export interface WildcardRulesProperty {
        /**
         * @Property replacement: Replacement.
         */
        readonly replacement: string | ros.IResolvable;
        /**
         * @Property match: Match.
         */
        readonly match: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WildcardRulesProperty`
 *
 * @param properties - the TypeScript properties of a `WildcardRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_WildcardRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('replacement', ros.requiredValidator)(properties.replacement));
    errors.collect(ros.propertyValidator('replacement', ros.validateString)(properties.replacement));
    errors.collect(ros.propertyValidator('match', ros.requiredValidator)(properties.match));
    errors.collect(ros.propertyValidator('match', ros.validateString)(properties.match));
    return errors.wrap('supplied properties not correct for "WildcardRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.WildcardRules` resource
 *
 * @param properties - the TypeScript properties of a `WildcardRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::CustomDomain.WildcardRules` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainWildcardRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomDomain_WildcardRulesPropertyValidator(properties).assertSuccess();
    return {
      'Replacement': ros.stringToRosTemplate(properties.replacement),
      'Match': ros.stringToRosTemplate(properties.match),
    };
}

/**
 * Properties for defining a `RosFunction`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
 */
export interface RosFunctionProps {

    /**
     * @Property functionName: The name of the function.
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * @Property handler: The handler of the function.
     */
    readonly handler: string | ros.IResolvable;

    /**
     * @Property runtime: The programming language of the function.
     */
    readonly runtime: string | ros.IResolvable;

    /**
     * @Property code: Function code ZIP package. Choose one of Code and CustomContainerConfig.
     */
    readonly code?: RosFunction.CodeProperty | ros.IResolvable;

    /**
     * @Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
     */
    readonly cpu?: number | ros.IResolvable;

    /**
     * @Property customContainerConfig: Custom container configuration. Choose one of Code and CustomContainerConfig.
     */
    readonly customContainerConfig?: RosFunction.CustomContainerConfigProperty | ros.IResolvable;

    /**
     * @Property customDns: Custom DNS configuration.
     */
    readonly customDns?: RosFunction.CustomDnsProperty | ros.IResolvable;

    /**
     * @Property customRuntimeConfig: Custom runtime configuration.
     */
    readonly customRuntimeConfig?: RosFunction.CustomRuntimeConfigProperty | ros.IResolvable;

    /**
     * @Property description: Function description.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property diskSize: The disk size of the function, in MB.
     */
    readonly diskSize?: number | ros.IResolvable;

    /**
     * @Property environmentVariables: The environment variables of the function.
     */
    readonly environmentVariables?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property gpuConfig: The GPU configuration of the function.
     */
    readonly gpuConfig?: RosFunction.GpuConfigProperty | ros.IResolvable;

    /**
     * @Property instanceConcurrency: The maximum number of concurrent instances of the function.
     */
    readonly instanceConcurrency?: number | ros.IResolvable;

    /**
     * @Property instanceLifecycleConfig: The instance lifecycle configuration of the function.
     */
    readonly instanceLifecycleConfig?: RosFunction.InstanceLifecycleConfigProperty | ros.IResolvable;

    /**
     * @Property internetAccess: Whether the function can access the Internet.
     */
    readonly internetAccess?: boolean | ros.IResolvable;

    /**
     * @Property layers: The layers of the function.
     */
    readonly layers?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property logConfig: The log configuration of the function.
     */
    readonly logConfig?: RosFunction.LogConfigProperty | ros.IResolvable;

    /**
     * @Property memorySize: The memory size of the function, in MB.
     */
    readonly memorySize?: number | ros.IResolvable;

    /**
     * @Property nasConfig: The NAS configuration of the function.
     */
    readonly nasConfig?: RosFunction.NasConfigProperty | ros.IResolvable;

    /**
     * @Property ossMountConfig: The OSS mount configuration of the function.
     */
    readonly ossMountConfig?: RosFunction.OssMountConfigProperty | ros.IResolvable;

    /**
     * @Property role: The user is authorized to the RAM role of Function Compute. After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
     */
    readonly role?: string | ros.IResolvable;

    /**
     * @Property timeout: The timeout of the function.
     */
    readonly timeout?: number | ros.IResolvable;

    /**
     * @Property tracingConfig: The tracing configuration of the function.
     */
    readonly tracingConfig?: RosFunction.TracingConfigProperty | ros.IResolvable;

    /**
     * @Property vpcConfig: The VPC configuration of the function.
     */
    readonly vpcConfig?: RosFunction.VpcConfigProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFunctionProps`
 *
 * @param properties - the TypeScript properties of a `RosFunctionProps`
 *
 * @returns the result of the validation.
 */
function RosFunctionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.memorySize && (typeof properties.memorySize) !== 'object') {
        errors.collect(ros.propertyValidator('memorySize', ros.validateRange)({
            data: properties.memorySize,
            min: 128,
            max: 65536,
          }));
    }
    errors.collect(ros.propertyValidator('memorySize', ros.validateNumber)(properties.memorySize));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('tracingConfig', RosFunction_TracingConfigPropertyValidator)(properties.tracingConfig));
    errors.collect(ros.propertyValidator('vpcConfig', RosFunction_VpcConfigPropertyValidator)(properties.vpcConfig));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('instanceLifecycleConfig', RosFunction_InstanceLifecycleConfigPropertyValidator)(properties.instanceLifecycleConfig));
    errors.collect(ros.propertyValidator('handler', ros.requiredValidator)(properties.handler));
    errors.collect(ros.propertyValidator('handler', ros.validateString)(properties.handler));
    if(properties.cpu && (typeof properties.cpu) !== 'object') {
        errors.collect(ros.propertyValidator('cpu', ros.validateRange)({
            data: properties.cpu,
            min: 0.05,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('cpu', ros.validateNumber)(properties.cpu));
    errors.collect(ros.propertyValidator('customContainerConfig', RosFunction_CustomContainerConfigPropertyValidator)(properties.customContainerConfig));
    errors.collect(ros.propertyValidator('code', RosFunction_CodePropertyValidator)(properties.code));
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('internetAccess', ros.validateBoolean)(properties.internetAccess));
    errors.collect(ros.propertyValidator('runtime', ros.requiredValidator)(properties.runtime));
    errors.collect(ros.propertyValidator('runtime', ros.validateString)(properties.runtime));
    errors.collect(ros.propertyValidator('environmentVariables', ros.hashValidator(ros.validateAny))(properties.environmentVariables));
    errors.collect(ros.propertyValidator('customRuntimeConfig', RosFunction_CustomRuntimeConfigPropertyValidator)(properties.customRuntimeConfig));
    errors.collect(ros.propertyValidator('gpuConfig', RosFunction_GpuConfigPropertyValidator)(properties.gpuConfig));
    errors.collect(ros.propertyValidator('ossMountConfig', RosFunction_OssMountConfigPropertyValidator)(properties.ossMountConfig));
    errors.collect(ros.propertyValidator('diskSize', ros.validateNumber)(properties.diskSize));
    errors.collect(ros.propertyValidator('customDns', RosFunction_CustomDnsPropertyValidator)(properties.customDns));
    if(properties.instanceConcurrency && (typeof properties.instanceConcurrency) !== 'object') {
        errors.collect(ros.propertyValidator('instanceConcurrency', ros.validateRange)({
            data: properties.instanceConcurrency,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('instanceConcurrency', ros.validateNumber)(properties.instanceConcurrency));
    if(properties.layers && (Array.isArray(properties.layers) || (typeof properties.layers) === 'string')) {
        errors.collect(ros.propertyValidator('layers', ros.validateLength)({
            data: properties.layers.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('layers', ros.listValidator(ros.validateString))(properties.layers));
    errors.collect(ros.propertyValidator('nasConfig', RosFunction_NasConfigPropertyValidator)(properties.nasConfig));
    errors.collect(ros.propertyValidator('logConfig', RosFunction_LogConfigPropertyValidator)(properties.logConfig));
    return errors.wrap('supplied properties not correct for "RosFunctionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function` resource
 *
 * @param properties - the TypeScript properties of a `RosFunctionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function` resource.
 */
// @ts-ignore TS6133
function rosFunctionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFunctionPropsValidator(properties).assertSuccess();
    }
    return {
      'FunctionName': ros.stringToRosTemplate(properties.functionName),
      'Handler': ros.stringToRosTemplate(properties.handler),
      'Runtime': ros.stringToRosTemplate(properties.runtime),
      'Code': rosFunctionCodePropertyToRosTemplate(properties.code),
      'Cpu': ros.numberToRosTemplate(properties.cpu),
      'CustomContainerConfig': rosFunctionCustomContainerConfigPropertyToRosTemplate(properties.customContainerConfig),
      'CustomDns': rosFunctionCustomDnsPropertyToRosTemplate(properties.customDns),
      'CustomRuntimeConfig': rosFunctionCustomRuntimeConfigPropertyToRosTemplate(properties.customRuntimeConfig),
      'Description': ros.stringToRosTemplate(properties.description),
      'DiskSize': ros.numberToRosTemplate(properties.diskSize),
      'EnvironmentVariables': ros.hashMapper(ros.objectToRosTemplate)(properties.environmentVariables),
      'GpuConfig': rosFunctionGpuConfigPropertyToRosTemplate(properties.gpuConfig),
      'InstanceConcurrency': ros.numberToRosTemplate(properties.instanceConcurrency),
      'InstanceLifecycleConfig': rosFunctionInstanceLifecycleConfigPropertyToRosTemplate(properties.instanceLifecycleConfig),
      'InternetAccess': ros.booleanToRosTemplate(properties.internetAccess),
      'Layers': ros.listMapper(ros.stringToRosTemplate)(properties.layers),
      'LogConfig': rosFunctionLogConfigPropertyToRosTemplate(properties.logConfig),
      'MemorySize': ros.numberToRosTemplate(properties.memorySize),
      'NasConfig': rosFunctionNasConfigPropertyToRosTemplate(properties.nasConfig),
      'OssMountConfig': rosFunctionOssMountConfigPropertyToRosTemplate(properties.ossMountConfig),
      'Role': ros.stringToRosTemplate(properties.role),
      'Timeout': ros.numberToRosTemplate(properties.timeout),
      'TracingConfig': rosFunctionTracingConfigPropertyToRosTemplate(properties.tracingConfig),
      'VpcConfig': rosFunctionVpcConfigPropertyToRosTemplate(properties.vpcConfig),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::Function`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Function` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
 */
export class RosFunction extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::Function";

    /**
     * @Attribute ARN: The ARN for ALIYUN::ROS::CustomResource
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute FunctionId: The function ID
     */
    public readonly attrFunctionId: ros.IResolvable;

    /**
     * @Attribute FunctionName: The function name
     */
    public readonly attrFunctionName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property functionName: The name of the function.
     */
    public functionName: string | ros.IResolvable;

    /**
     * @Property handler: The handler of the function.
     */
    public handler: string | ros.IResolvable;

    /**
     * @Property runtime: The programming language of the function.
     */
    public runtime: string | ros.IResolvable;

    /**
     * @Property code: Function code ZIP package. Choose one of Code and CustomContainerConfig.
     */
    public code: RosFunction.CodeProperty | ros.IResolvable | undefined;

    /**
     * @Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
     */
    public cpu: number | ros.IResolvable | undefined;

    /**
     * @Property customContainerConfig: Custom container configuration. Choose one of Code and CustomContainerConfig.
     */
    public customContainerConfig: RosFunction.CustomContainerConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property customDns: Custom DNS configuration.
     */
    public customDns: RosFunction.CustomDnsProperty | ros.IResolvable | undefined;

    /**
     * @Property customRuntimeConfig: Custom runtime configuration.
     */
    public customRuntimeConfig: RosFunction.CustomRuntimeConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property description: Function description.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property diskSize: The disk size of the function, in MB.
     */
    public diskSize: number | ros.IResolvable | undefined;

    /**
     * @Property environmentVariables: The environment variables of the function.
     */
    public environmentVariables: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property gpuConfig: The GPU configuration of the function.
     */
    public gpuConfig: RosFunction.GpuConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property instanceConcurrency: The maximum number of concurrent instances of the function.
     */
    public instanceConcurrency: number | ros.IResolvable | undefined;

    /**
     * @Property instanceLifecycleConfig: The instance lifecycle configuration of the function.
     */
    public instanceLifecycleConfig: RosFunction.InstanceLifecycleConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property internetAccess: Whether the function can access the Internet.
     */
    public internetAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property layers: The layers of the function.
     */
    public layers: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property logConfig: The log configuration of the function.
     */
    public logConfig: RosFunction.LogConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property memorySize: The memory size of the function, in MB.
     */
    public memorySize: number | ros.IResolvable | undefined;

    /**
     * @Property nasConfig: The NAS configuration of the function.
     */
    public nasConfig: RosFunction.NasConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property ossMountConfig: The OSS mount configuration of the function.
     */
    public ossMountConfig: RosFunction.OssMountConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property role: The user is authorized to the RAM role of Function Compute. After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
     */
    public role: string | ros.IResolvable | undefined;

    /**
     * @Property timeout: The timeout of the function.
     */
    public timeout: number | ros.IResolvable | undefined;

    /**
     * @Property tracingConfig: The tracing configuration of the function.
     */
    public tracingConfig: RosFunction.TracingConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property vpcConfig: The VPC configuration of the function.
     */
    public vpcConfig: RosFunction.VpcConfigProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFunctionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFunction.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('ARN');
        this.attrFunctionId = this.getAtt('FunctionId');
        this.attrFunctionName = this.getAtt('FunctionName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.functionName = props.functionName;
        this.handler = props.handler;
        this.runtime = props.runtime;
        this.code = props.code;
        this.cpu = props.cpu;
        this.customContainerConfig = props.customContainerConfig;
        this.customDns = props.customDns;
        this.customRuntimeConfig = props.customRuntimeConfig;
        this.description = props.description;
        this.diskSize = props.diskSize;
        this.environmentVariables = props.environmentVariables;
        this.gpuConfig = props.gpuConfig;
        this.instanceConcurrency = props.instanceConcurrency;
        this.instanceLifecycleConfig = props.instanceLifecycleConfig;
        this.internetAccess = props.internetAccess;
        this.layers = props.layers;
        this.logConfig = props.logConfig;
        this.memorySize = props.memorySize;
        this.nasConfig = props.nasConfig;
        this.ossMountConfig = props.ossMountConfig;
        this.role = props.role;
        this.timeout = props.timeout;
        this.tracingConfig = props.tracingConfig;
        this.vpcConfig = props.vpcConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            functionName: this.functionName,
            handler: this.handler,
            runtime: this.runtime,
            code: this.code,
            cpu: this.cpu,
            customContainerConfig: this.customContainerConfig,
            customDns: this.customDns,
            customRuntimeConfig: this.customRuntimeConfig,
            description: this.description,
            diskSize: this.diskSize,
            environmentVariables: this.environmentVariables,
            gpuConfig: this.gpuConfig,
            instanceConcurrency: this.instanceConcurrency,
            instanceLifecycleConfig: this.instanceLifecycleConfig,
            internetAccess: this.internetAccess,
            layers: this.layers,
            logConfig: this.logConfig,
            memorySize: this.memorySize,
            nasConfig: this.nasConfig,
            ossMountConfig: this.ossMountConfig,
            role: this.role,
            timeout: this.timeout,
            tracingConfig: this.tracingConfig,
            vpcConfig: this.vpcConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFunctionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface AccelerationInfoProperty {
        /**
         * @Property status: Acceleration status.
         */
        readonly status?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AccelerationInfoProperty`
 *
 * @param properties - the TypeScript properties of a `AccelerationInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_AccelerationInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    return errors.wrap('supplied properties not correct for "AccelerationInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.AccelerationInfo` resource
 *
 * @param properties - the TypeScript properties of a `AccelerationInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.AccelerationInfo` resource.
 */
// @ts-ignore TS6133
function rosFunctionAccelerationInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_AccelerationInfoPropertyValidator(properties).assertSuccess();
    return {
      'Status': ros.stringToRosTemplate(properties.status),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface AuthConfigProperty {
        /**
         * @Property userName: The username that is used to log on to the image repository.
         */
        readonly userName: string | ros.IResolvable;
        /**
         * @Property password: The password of the username that is used to log on to the image repository.
         */
        readonly password: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AuthConfigProperty`
 *
 * @param properties - the TypeScript properties of a `AuthConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_AuthConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "AuthConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.AuthConfig` resource
 *
 * @param properties - the TypeScript properties of a `AuthConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.AuthConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionAuthConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_AuthConfigPropertyValidator(properties).assertSuccess();
    return {
      'UserName': ros.stringToRosTemplate(properties.userName),
      'Password': ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface CertConfigProperty {
        /**
         * @Property insecure: Whether to skip certificate verification. Default value is false.
         */
        readonly insecure: boolean | ros.IResolvable;
        /**
         * @Property rootCaCertBase64: The certificate authority (CA) certificate of the image repository.
         */
        readonly rootCaCertBase64?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CertConfigProperty`
 *
 * @param properties - the TypeScript properties of a `CertConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CertConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('insecure', ros.requiredValidator)(properties.insecure));
    errors.collect(ros.propertyValidator('insecure', ros.validateBoolean)(properties.insecure));
    errors.collect(ros.propertyValidator('rootCaCertBase64', ros.validateString)(properties.rootCaCertBase64));
    return errors.wrap('supplied properties not correct for "CertConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.CertConfig` resource
 *
 * @param properties - the TypeScript properties of a `CertConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.CertConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionCertConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_CertConfigPropertyValidator(properties).assertSuccess();
    return {
      'Insecure': ros.booleanToRosTemplate(properties.insecure),
      'RootCaCertBase64': ros.stringToRosTemplate(properties.rootCaCertBase64),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface CodeProperty {
        /**
         * @Property sourceCode: (Node.js, PHP and Python) The source code for your FC function. If you include this parameter in a function source inline, ROS places it in a file called index (utf-8 encoded) and then compresses it to create a deployment package. For the Handler property, the first part of the handler identifier must be index. For example: index.handler.
     * Your source code can contain up to 4096 characters. For JSON, you must use backslashes to escape quotes and special characters, such as line breaks.
     * Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
         */
        readonly sourceCode?: string | ros.IResolvable;
        /**
         * @Property zipFile: Function code Base 64 encoding of the ZIP package.
         */
        readonly zipFile?: string | ros.IResolvable;
        /**
         * @Property checksum: CRC-64 value of the function code package. If a checksum is provided, Function Compute will verify whether the checksum of the code package is consistent with the provided checksum.
         */
        readonly checksum?: string | ros.IResolvable;
        /**
         * @Property ossObjectName: The name of the OSS object where the code package is stored.
         */
        readonly ossObjectName?: string | ros.IResolvable;
        /**
         * @Property ossBucketName: The name of the OSS bucket where the code package is stored.
         */
        readonly ossBucketName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CodeProperty`
 *
 * @param properties - the TypeScript properties of a `CodeProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CodePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.sourceCode && (Array.isArray(properties.sourceCode) || (typeof properties.sourceCode) === 'string')) {
        errors.collect(ros.propertyValidator('sourceCode', ros.validateLength)({
            data: properties.sourceCode.length,
            min: undefined,
            max: 4096,
          }));
    }
    errors.collect(ros.propertyValidator('sourceCode', ros.validateString)(properties.sourceCode));
    errors.collect(ros.propertyValidator('zipFile', ros.validateString)(properties.zipFile));
    errors.collect(ros.propertyValidator('checksum', ros.validateString)(properties.checksum));
    errors.collect(ros.propertyValidator('ossObjectName', ros.validateString)(properties.ossObjectName));
    errors.collect(ros.propertyValidator('ossBucketName', ros.validateString)(properties.ossBucketName));
    return errors.wrap('supplied properties not correct for "CodeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.Code` resource
 *
 * @param properties - the TypeScript properties of a `CodeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.Code` resource.
 */
// @ts-ignore TS6133
function rosFunctionCodePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_CodePropertyValidator(properties).assertSuccess();
    return {
      'SourceCode': ros.stringToRosTemplate(properties.sourceCode),
      'ZipFile': ros.stringToRosTemplate(properties.zipFile),
      'Checksum': ros.stringToRosTemplate(properties.checksum),
      'OssObjectName': ros.stringToRosTemplate(properties.ossObjectName),
      'OssBucketName': ros.stringToRosTemplate(properties.ossBucketName),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface CustomContainerConfigProperty {
        /**
         * @Property registryConfig: The configurations of the image repository.
         */
        readonly registryConfig?: RosFunction.RegistryConfigProperty | ros.IResolvable;
        /**
         * @Property resolvedImageUri: The actual digest version of the deployed image. The code version specified by this digest is actually used when the function is started.
         */
        readonly resolvedImageUri?: string | ros.IResolvable;
        /**
         * @Property acrInstanceId: The ID of the ACR instance.
         */
        readonly acrInstanceId?: string | ros.IResolvable;
        /**
         * @Property accelerationInfo: Acceleration configuration.
         */
        readonly accelerationInfo?: RosFunction.AccelerationInfoProperty | ros.IResolvable;
        /**
         * @Property entrypoint: The entrypoints to run in the container.
         */
        readonly entrypoint?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property command: The commands to run in the container.
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property accelerationType: Whether to enable mirror acceleration. Default means to turn on mirror acceleration, and None means to turn off mirror acceleration.
         */
        readonly accelerationType?: string | ros.IResolvable;
        /**
         * @Property port: The port number of the container.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property healthCheckConfig: Health check configuration.
         */
        readonly healthCheckConfig?: RosFunction.HealthCheckConfigProperty | ros.IResolvable;
        /**
         * @Property image: The image address.
         */
        readonly image?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CustomContainerConfigProperty`
 *
 * @param properties - the TypeScript properties of a `CustomContainerConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CustomContainerConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('registryConfig', RosFunction_RegistryConfigPropertyValidator)(properties.registryConfig));
    errors.collect(ros.propertyValidator('resolvedImageUri', ros.validateString)(properties.resolvedImageUri));
    errors.collect(ros.propertyValidator('acrInstanceId', ros.validateString)(properties.acrInstanceId));
    errors.collect(ros.propertyValidator('accelerationInfo', RosFunction_AccelerationInfoPropertyValidator)(properties.accelerationInfo));
    if(properties.entrypoint && (Array.isArray(properties.entrypoint) || (typeof properties.entrypoint) === 'string')) {
        errors.collect(ros.propertyValidator('entrypoint', ros.validateLength)({
            data: properties.entrypoint.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('entrypoint', ros.listValidator(ros.validateString))(properties.entrypoint));
    if(properties.command && (Array.isArray(properties.command) || (typeof properties.command) === 'string')) {
        errors.collect(ros.propertyValidator('command', ros.validateLength)({
            data: properties.command.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    errors.collect(ros.propertyValidator('accelerationType', ros.validateString)(properties.accelerationType));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('healthCheckConfig', RosFunction_HealthCheckConfigPropertyValidator)(properties.healthCheckConfig));
    errors.collect(ros.propertyValidator('image', ros.validateString)(properties.image));
    return errors.wrap('supplied properties not correct for "CustomContainerConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.CustomContainerConfig` resource
 *
 * @param properties - the TypeScript properties of a `CustomContainerConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.CustomContainerConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionCustomContainerConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_CustomContainerConfigPropertyValidator(properties).assertSuccess();
    return {
      'RegistryConfig': rosFunctionRegistryConfigPropertyToRosTemplate(properties.registryConfig),
      'ResolvedImageUri': ros.stringToRosTemplate(properties.resolvedImageUri),
      'AcrInstanceId': ros.stringToRosTemplate(properties.acrInstanceId),
      'AccelerationInfo': rosFunctionAccelerationInfoPropertyToRosTemplate(properties.accelerationInfo),
      'Entrypoint': ros.listMapper(ros.stringToRosTemplate)(properties.entrypoint),
      'Command': ros.listMapper(ros.stringToRosTemplate)(properties.command),
      'AccelerationType': ros.stringToRosTemplate(properties.accelerationType),
      'Port': ros.numberToRosTemplate(properties.port),
      'HealthCheckConfig': rosFunctionHealthCheckConfigPropertyToRosTemplate(properties.healthCheckConfig),
      'Image': ros.stringToRosTemplate(properties.image),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface CustomDnsProperty {
        /**
         * @Property searches: List of DNS search domains.
         */
        readonly searches?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property dnsOptions: List of DNS resolution configurations in the resolv.conf file.
         */
        readonly dnsOptions?: Array<RosFunction.DnsOptionsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property nameServers: List of DNS servers.
         */
        readonly nameServers?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CustomDnsProperty`
 *
 * @param properties - the TypeScript properties of a `CustomDnsProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CustomDnsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.searches && (Array.isArray(properties.searches) || (typeof properties.searches) === 'string')) {
        errors.collect(ros.propertyValidator('searches', ros.validateLength)({
            data: properties.searches.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('searches', ros.listValidator(ros.validateString))(properties.searches));
    if(properties.dnsOptions && (Array.isArray(properties.dnsOptions) || (typeof properties.dnsOptions) === 'string')) {
        errors.collect(ros.propertyValidator('dnsOptions', ros.validateLength)({
            data: properties.dnsOptions.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('dnsOptions', ros.listValidator(RosFunction_DnsOptionsPropertyValidator))(properties.dnsOptions));
    if(properties.nameServers && (Array.isArray(properties.nameServers) || (typeof properties.nameServers) === 'string')) {
        errors.collect(ros.propertyValidator('nameServers', ros.validateLength)({
            data: properties.nameServers.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('nameServers', ros.listValidator(ros.validateString))(properties.nameServers));
    return errors.wrap('supplied properties not correct for "CustomDnsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.CustomDns` resource
 *
 * @param properties - the TypeScript properties of a `CustomDnsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.CustomDns` resource.
 */
// @ts-ignore TS6133
function rosFunctionCustomDnsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_CustomDnsPropertyValidator(properties).assertSuccess();
    return {
      'Searches': ros.listMapper(ros.stringToRosTemplate)(properties.searches),
      'DnsOptions': ros.listMapper(rosFunctionDnsOptionsPropertyToRosTemplate)(properties.dnsOptions),
      'NameServers': ros.listMapper(ros.stringToRosTemplate)(properties.nameServers),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface CustomRuntimeConfigProperty {
        /**
         * @Property args: Instance startup parameters.
         */
        readonly args?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property command: Instance startup commands.
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property port: The listening port of the HTTP Server.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property healthCheckConfig: Health check configuration.
         */
        readonly healthCheckConfig?: RosFunction.CustomRuntimeConfigHealthCheckConfigProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CustomRuntimeConfigProperty`
 *
 * @param properties - the TypeScript properties of a `CustomRuntimeConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CustomRuntimeConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.args && (Array.isArray(properties.args) || (typeof properties.args) === 'string')) {
        errors.collect(ros.propertyValidator('args', ros.validateLength)({
            data: properties.args.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('args', ros.listValidator(ros.validateString))(properties.args));
    if(properties.command && (Array.isArray(properties.command) || (typeof properties.command) === 'string')) {
        errors.collect(ros.propertyValidator('command', ros.validateLength)({
            data: properties.command.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('healthCheckConfig', RosFunction_CustomRuntimeConfigHealthCheckConfigPropertyValidator)(properties.healthCheckConfig));
    return errors.wrap('supplied properties not correct for "CustomRuntimeConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.CustomRuntimeConfig` resource
 *
 * @param properties - the TypeScript properties of a `CustomRuntimeConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.CustomRuntimeConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionCustomRuntimeConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_CustomRuntimeConfigPropertyValidator(properties).assertSuccess();
    return {
      'Args': ros.listMapper(ros.stringToRosTemplate)(properties.args),
      'Command': ros.listMapper(ros.stringToRosTemplate)(properties.command),
      'Port': ros.numberToRosTemplate(properties.port),
      'HealthCheckConfig': rosFunctionCustomRuntimeConfigHealthCheckConfigPropertyToRosTemplate(properties.healthCheckConfig),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface CustomRuntimeConfigHealthCheckConfigProperty {
        /**
         * @Property timeoutSeconds: The timeout for the health check.
         */
        readonly timeoutSeconds?: number | ros.IResolvable;
        /**
         * @Property initialDelaySeconds: The initial delay for the health check. The value range is 0~120. The default value is 0.
         */
        readonly initialDelaySeconds?: number | ros.IResolvable;
        /**
         * @Property httpGetUrl: Container custom health check URL address. Length cannot exceed 2048 characters.
         */
        readonly httpGetUrl?: string | ros.IResolvable;
        /**
         * @Property periodSeconds: The interval for the health check. The value range is 1~120. The default value is 3.
         */
        readonly periodSeconds?: number | ros.IResolvable;
        /**
         * @Property failureThreshold: The threshold for the number of health check failures. When this value is reached, the system considers the check to have failed. The value range is 1~120. The default value is 3.
         */
        readonly failureThreshold?: number | ros.IResolvable;
        /**
         * @Property successThreshold: The threshold for the number of successful health checks. When this value is reached, the system considers the check to have succeeded. The value range is 1~120. The default value is 1.
         */
        readonly successThreshold?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CustomRuntimeConfigHealthCheckConfigProperty`
 *
 * @param properties - the TypeScript properties of a `CustomRuntimeConfigHealthCheckConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CustomRuntimeConfigHealthCheckConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateNumber)(properties.timeoutSeconds));
    if(properties.initialDelaySeconds && (typeof properties.initialDelaySeconds) !== 'object') {
        errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateRange)({
            data: properties.initialDelaySeconds,
            min: 0,
            max: 120,
          }));
    }
    errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateNumber)(properties.initialDelaySeconds));
    if(properties.httpGetUrl && (Array.isArray(properties.httpGetUrl) || (typeof properties.httpGetUrl) === 'string')) {
        errors.collect(ros.propertyValidator('httpGetUrl', ros.validateLength)({
            data: properties.httpGetUrl.length,
            min: undefined,
            max: 2048,
          }));
    }
    errors.collect(ros.propertyValidator('httpGetUrl', ros.validateString)(properties.httpGetUrl));
    if(properties.periodSeconds && (typeof properties.periodSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('periodSeconds', ros.validateRange)({
            data: properties.periodSeconds,
            min: 1,
            max: 120,
          }));
    }
    errors.collect(ros.propertyValidator('periodSeconds', ros.validateNumber)(properties.periodSeconds));
    if(properties.failureThreshold && (typeof properties.failureThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('failureThreshold', ros.validateRange)({
            data: properties.failureThreshold,
            min: 1,
            max: 120,
          }));
    }
    errors.collect(ros.propertyValidator('failureThreshold', ros.validateNumber)(properties.failureThreshold));
    if(properties.successThreshold && (typeof properties.successThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('successThreshold', ros.validateRange)({
            data: properties.successThreshold,
            min: 1,
            max: 120,
          }));
    }
    errors.collect(ros.propertyValidator('successThreshold', ros.validateNumber)(properties.successThreshold));
    return errors.wrap('supplied properties not correct for "CustomRuntimeConfigHealthCheckConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.CustomRuntimeConfigHealthCheckConfig` resource
 *
 * @param properties - the TypeScript properties of a `CustomRuntimeConfigHealthCheckConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.CustomRuntimeConfigHealthCheckConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionCustomRuntimeConfigHealthCheckConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_CustomRuntimeConfigHealthCheckConfigPropertyValidator(properties).assertSuccess();
    return {
      'TimeoutSeconds': ros.numberToRosTemplate(properties.timeoutSeconds),
      'InitialDelaySeconds': ros.numberToRosTemplate(properties.initialDelaySeconds),
      'HttpGetUrl': ros.stringToRosTemplate(properties.httpGetUrl),
      'PeriodSeconds': ros.numberToRosTemplate(properties.periodSeconds),
      'FailureThreshold': ros.numberToRosTemplate(properties.failureThreshold),
      'SuccessThreshold': ros.numberToRosTemplate(properties.successThreshold),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface DnsOptionsProperty {
        /**
         * @Property value: The value of the DNS resolution configuration.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: The name of the DNS resolution configuration.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DnsOptionsProperty`
 *
 * @param properties - the TypeScript properties of a `DnsOptionsProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_DnsOptionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "DnsOptionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.DnsOptions` resource
 *
 * @param properties - the TypeScript properties of a `DnsOptionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.DnsOptions` resource.
 */
// @ts-ignore TS6133
function rosFunctionDnsOptionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_DnsOptionsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface GpuConfigProperty {
        /**
         * @Property gpuMemorySize: GPU memory specifications in MB, multiples of 1024MB.
         */
        readonly gpuMemorySize?: number | ros.IResolvable;
        /**
         * @Property gpuType: GPU instance type.
         */
        readonly gpuType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `GpuConfigProperty`
 *
 * @param properties - the TypeScript properties of a `GpuConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_GpuConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('gpuMemorySize', ros.validateNumber)(properties.gpuMemorySize));
    errors.collect(ros.propertyValidator('gpuType', ros.validateString)(properties.gpuType));
    return errors.wrap('supplied properties not correct for "GpuConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.GpuConfig` resource
 *
 * @param properties - the TypeScript properties of a `GpuConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.GpuConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionGpuConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_GpuConfigPropertyValidator(properties).assertSuccess();
    return {
      'GpuMemorySize': ros.numberToRosTemplate(properties.gpuMemorySize),
      'GpuType': ros.stringToRosTemplate(properties.gpuType),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface HealthCheckConfigProperty {
        /**
         * @Property timeoutSeconds: The timeout for the health check.
         */
        readonly timeoutSeconds?: number | ros.IResolvable;
        /**
         * @Property initialDelaySeconds: The initial delay for the health check. The value range is 0~120. The default value is 0.
         */
        readonly initialDelaySeconds?: number | ros.IResolvable;
        /**
         * @Property httpGetUrl: Container custom health check URL address. Length cannot exceed 2048 characters.
         */
        readonly httpGetUrl?: string | ros.IResolvable;
        /**
         * @Property periodSeconds: The interval for the health check. The value range is 1~120. The default value is 3.
         */
        readonly periodSeconds?: number | ros.IResolvable;
        /**
         * @Property failureThreshold: The threshold for the number of health check failures. When this value is reached, the system considers the check to have failed. The value range is 1~120. The default value is 3.
         */
        readonly failureThreshold?: number | ros.IResolvable;
        /**
         * @Property successThreshold: The threshold for the number of successful health checks. When this value is reached, the system considers the check to have succeeded. The value range is 1~120. The default value is 1.
         */
        readonly successThreshold?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HealthCheckConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_HealthCheckConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateNumber)(properties.timeoutSeconds));
    if(properties.initialDelaySeconds && (typeof properties.initialDelaySeconds) !== 'object') {
        errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateRange)({
            data: properties.initialDelaySeconds,
            min: 0,
            max: 120,
          }));
    }
    errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateNumber)(properties.initialDelaySeconds));
    if(properties.httpGetUrl && (Array.isArray(properties.httpGetUrl) || (typeof properties.httpGetUrl) === 'string')) {
        errors.collect(ros.propertyValidator('httpGetUrl', ros.validateLength)({
            data: properties.httpGetUrl.length,
            min: undefined,
            max: 2048,
          }));
    }
    errors.collect(ros.propertyValidator('httpGetUrl', ros.validateString)(properties.httpGetUrl));
    if(properties.periodSeconds && (typeof properties.periodSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('periodSeconds', ros.validateRange)({
            data: properties.periodSeconds,
            min: 1,
            max: 120,
          }));
    }
    errors.collect(ros.propertyValidator('periodSeconds', ros.validateNumber)(properties.periodSeconds));
    if(properties.failureThreshold && (typeof properties.failureThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('failureThreshold', ros.validateRange)({
            data: properties.failureThreshold,
            min: 1,
            max: 120,
          }));
    }
    errors.collect(ros.propertyValidator('failureThreshold', ros.validateNumber)(properties.failureThreshold));
    if(properties.successThreshold && (typeof properties.successThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('successThreshold', ros.validateRange)({
            data: properties.successThreshold,
            min: 1,
            max: 120,
          }));
    }
    errors.collect(ros.propertyValidator('successThreshold', ros.validateNumber)(properties.successThreshold));
    return errors.wrap('supplied properties not correct for "HealthCheckConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.HealthCheckConfig` resource
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.HealthCheckConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionHealthCheckConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_HealthCheckConfigPropertyValidator(properties).assertSuccess();
    return {
      'TimeoutSeconds': ros.numberToRosTemplate(properties.timeoutSeconds),
      'InitialDelaySeconds': ros.numberToRosTemplate(properties.initialDelaySeconds),
      'HttpGetUrl': ros.stringToRosTemplate(properties.httpGetUrl),
      'PeriodSeconds': ros.numberToRosTemplate(properties.periodSeconds),
      'FailureThreshold': ros.numberToRosTemplate(properties.failureThreshold),
      'SuccessThreshold': ros.numberToRosTemplate(properties.successThreshold),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface InitializerProperty {
        /**
         * @Property timeout: The timeout for the callback method.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property handler: The execution entry of the callback method has a similar meaning to the request handler.
         */
        readonly handler?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InitializerProperty`
 *
 * @param properties - the TypeScript properties of a `InitializerProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_InitializerPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('handler', ros.validateString)(properties.handler));
    return errors.wrap('supplied properties not correct for "InitializerProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.Initializer` resource
 *
 * @param properties - the TypeScript properties of a `InitializerProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.Initializer` resource.
 */
// @ts-ignore TS6133
function rosFunctionInitializerPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_InitializerPropertyValidator(properties).assertSuccess();
    return {
      'Timeout': ros.numberToRosTemplate(properties.timeout),
      'Handler': ros.stringToRosTemplate(properties.handler),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface InstanceLifecycleConfigProperty {
        /**
         * @Property preStop: Instance lifecycle callback method configuration.
         */
        readonly preStop?: RosFunction.PreStopProperty | ros.IResolvable;
        /**
         * @Property initializer: Instance lifecycle callback method configuration.
         */
        readonly initializer?: RosFunction.InitializerProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InstanceLifecycleConfigProperty`
 *
 * @param properties - the TypeScript properties of a `InstanceLifecycleConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_InstanceLifecycleConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('preStop', RosFunction_PreStopPropertyValidator)(properties.preStop));
    errors.collect(ros.propertyValidator('initializer', RosFunction_InitializerPropertyValidator)(properties.initializer));
    return errors.wrap('supplied properties not correct for "InstanceLifecycleConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.InstanceLifecycleConfig` resource
 *
 * @param properties - the TypeScript properties of a `InstanceLifecycleConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.InstanceLifecycleConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionInstanceLifecycleConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_InstanceLifecycleConfigPropertyValidator(properties).assertSuccess();
    return {
      'PreStop': rosFunctionPreStopPropertyToRosTemplate(properties.preStop),
      'Initializer': rosFunctionInitializerPropertyToRosTemplate(properties.initializer),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface LogConfigProperty {
        /**
         * @Property project: The project of the function.
         */
        readonly project?: string | ros.IResolvable;
        /**
         * @Property logBeginRule: The log begin rule.
         */
        readonly logBeginRule?: string | ros.IResolvable;
        /**
         * @Property logstore: The logstore of the function.
         */
        readonly logstore?: string | ros.IResolvable;
        /**
         * @Property enableInstanceMetrics: Whether to enable the instance metrics.
         */
        readonly enableInstanceMetrics?: boolean | ros.IResolvable;
        /**
         * @Property enableRequestMetrics: Whether to enable the request metrics.
         */
        readonly enableRequestMetrics?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LogConfigProperty`
 *
 * @param properties - the TypeScript properties of a `LogConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_LogConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('logBeginRule', ros.validateString)(properties.logBeginRule));
    errors.collect(ros.propertyValidator('logstore', ros.validateString)(properties.logstore));
    errors.collect(ros.propertyValidator('enableInstanceMetrics', ros.validateBoolean)(properties.enableInstanceMetrics));
    errors.collect(ros.propertyValidator('enableRequestMetrics', ros.validateBoolean)(properties.enableRequestMetrics));
    return errors.wrap('supplied properties not correct for "LogConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.LogConfig` resource
 *
 * @param properties - the TypeScript properties of a `LogConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.LogConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionLogConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_LogConfigPropertyValidator(properties).assertSuccess();
    return {
      'Project': ros.stringToRosTemplate(properties.project),
      'LogBeginRule': ros.stringToRosTemplate(properties.logBeginRule),
      'Logstore': ros.stringToRosTemplate(properties.logstore),
      'EnableInstanceMetrics': ros.booleanToRosTemplate(properties.enableInstanceMetrics),
      'EnableRequestMetrics': ros.booleanToRosTemplate(properties.enableRequestMetrics),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface MountPointsProperty {
        /**
         * @Property enableTls: Mount using transport encryption. Note: Only general-purpose NAS supports transmission encryption.
         */
        readonly enableTls?: boolean | ros.IResolvable;
        /**
         * @Property serverAddr: NAS server address.
         */
        readonly serverAddr?: string | ros.IResolvable;
        /**
         * @Property mountDir: The mount directory of the function.
         */
        readonly mountDir?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MountPointsProperty`
 *
 * @param properties - the TypeScript properties of a `MountPointsProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_MountPointsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableTls', ros.validateBoolean)(properties.enableTls));
    errors.collect(ros.propertyValidator('serverAddr', ros.validateString)(properties.serverAddr));
    errors.collect(ros.propertyValidator('mountDir', ros.validateString)(properties.mountDir));
    return errors.wrap('supplied properties not correct for "MountPointsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.MountPoints` resource
 *
 * @param properties - the TypeScript properties of a `MountPointsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.MountPoints` resource.
 */
// @ts-ignore TS6133
function rosFunctionMountPointsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_MountPointsPropertyValidator(properties).assertSuccess();
    return {
      'EnableTls': ros.booleanToRosTemplate(properties.enableTls),
      'ServerAddr': ros.stringToRosTemplate(properties.serverAddr),
      'MountDir': ros.stringToRosTemplate(properties.mountDir),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface NasConfigProperty {
        /**
         * @Property mountPoints: The mount points of the function.
         */
        readonly mountPoints?: Array<RosFunction.MountPointsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property userId: The user ID of the function.
         */
        readonly userId?: number | ros.IResolvable;
        /**
         * @Property groupId: The group ID of the function.
         */
        readonly groupId?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NasConfigProperty`
 *
 * @param properties - the TypeScript properties of a `NasConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_NasConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.mountPoints && (Array.isArray(properties.mountPoints) || (typeof properties.mountPoints) === 'string')) {
        errors.collect(ros.propertyValidator('mountPoints', ros.validateLength)({
            data: properties.mountPoints.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('mountPoints', ros.listValidator(RosFunction_MountPointsPropertyValidator))(properties.mountPoints));
    errors.collect(ros.propertyValidator('userId', ros.validateNumber)(properties.userId));
    errors.collect(ros.propertyValidator('groupId', ros.validateNumber)(properties.groupId));
    return errors.wrap('supplied properties not correct for "NasConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.NasConfig` resource
 *
 * @param properties - the TypeScript properties of a `NasConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.NasConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionNasConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_NasConfigPropertyValidator(properties).assertSuccess();
    return {
      'MountPoints': ros.listMapper(rosFunctionMountPointsPropertyToRosTemplate)(properties.mountPoints),
      'UserId': ros.numberToRosTemplate(properties.userId),
      'GroupId': ros.numberToRosTemplate(properties.groupId),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface NetworkConfigProperty {
        /**
         * @Property vpcId: The ID of the virtual private cloud (VPC) that can be used to connect to the image repository.
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch that can be used to connect to the image repository.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group that can be used to connect to the image repository.
         */
        readonly securityGroupId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NetworkConfigProperty`
 *
 * @param properties - the TypeScript properties of a `NetworkConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_NetworkConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    return errors.wrap('supplied properties not correct for "NetworkConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.NetworkConfig` resource
 *
 * @param properties - the TypeScript properties of a `NetworkConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.NetworkConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionNetworkConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_NetworkConfigPropertyValidator(properties).assertSuccess();
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface OssMountConfigProperty {
        /**
         * @Property mountPoints: The mount points of the function.
         */
        readonly mountPoints?: Array<RosFunction.OssMountConfigMountPointsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `OssMountConfigProperty`
 *
 * @param properties - the TypeScript properties of a `OssMountConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_OssMountConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.mountPoints && (Array.isArray(properties.mountPoints) || (typeof properties.mountPoints) === 'string')) {
        errors.collect(ros.propertyValidator('mountPoints', ros.validateLength)({
            data: properties.mountPoints.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('mountPoints', ros.listValidator(RosFunction_OssMountConfigMountPointsPropertyValidator))(properties.mountPoints));
    return errors.wrap('supplied properties not correct for "OssMountConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.OssMountConfig` resource
 *
 * @param properties - the TypeScript properties of a `OssMountConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.OssMountConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionOssMountConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_OssMountConfigPropertyValidator(properties).assertSuccess();
    return {
      'MountPoints': ros.listMapper(rosFunctionOssMountConfigMountPointsPropertyToRosTemplate)(properties.mountPoints),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface OssMountConfigMountPointsProperty {
        /**
         * @Property readOnly: Mounted OSS Bucket read-only.
         */
        readonly readOnly?: boolean | ros.IResolvable;
        /**
         * @Property bucketName: Mounted OSS Bucket.
         */
        readonly bucketName?: string | ros.IResolvable;
        /**
         * @Property endpoint: The endpoint of the bucket.
         */
        readonly endpoint?: string | ros.IResolvable;
        /**
         * @Property bucketPath: Mounted OSS Bucket path.
         */
        readonly bucketPath?: string | ros.IResolvable;
        /**
         * @Property mountDir: The mount directory of the function.
         */
        readonly mountDir?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `OssMountConfigMountPointsProperty`
 *
 * @param properties - the TypeScript properties of a `OssMountConfigMountPointsProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_OssMountConfigMountPointsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('readOnly', ros.validateBoolean)(properties.readOnly));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('bucketPath', ros.validateString)(properties.bucketPath));
    errors.collect(ros.propertyValidator('mountDir', ros.validateString)(properties.mountDir));
    return errors.wrap('supplied properties not correct for "OssMountConfigMountPointsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.OssMountConfigMountPoints` resource
 *
 * @param properties - the TypeScript properties of a `OssMountConfigMountPointsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.OssMountConfigMountPoints` resource.
 */
// @ts-ignore TS6133
function rosFunctionOssMountConfigMountPointsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_OssMountConfigMountPointsPropertyValidator(properties).assertSuccess();
    return {
      'ReadOnly': ros.booleanToRosTemplate(properties.readOnly),
      'BucketName': ros.stringToRosTemplate(properties.bucketName),
      'Endpoint': ros.stringToRosTemplate(properties.endpoint),
      'BucketPath': ros.stringToRosTemplate(properties.bucketPath),
      'MountDir': ros.stringToRosTemplate(properties.mountDir),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface PreStopProperty {
        /**
         * @Property timeout: The timeout for the callback method.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property handler: The execution entry of the callback method has a similar meaning to the request handler.
         */
        readonly handler?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PreStopProperty`
 *
 * @param properties - the TypeScript properties of a `PreStopProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_PreStopPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('handler', ros.validateString)(properties.handler));
    return errors.wrap('supplied properties not correct for "PreStopProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.PreStop` resource
 *
 * @param properties - the TypeScript properties of a `PreStopProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.PreStop` resource.
 */
// @ts-ignore TS6133
function rosFunctionPreStopPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_PreStopPropertyValidator(properties).assertSuccess();
    return {
      'Timeout': ros.numberToRosTemplate(properties.timeout),
      'Handler': ros.stringToRosTemplate(properties.handler),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface RegistryConfigProperty {
        /**
         * @Property certConfig: The certificate configurations.
         */
        readonly certConfig: RosFunction.CertConfigProperty | ros.IResolvable;
        /**
         * @Property networkConfig: The network information of the image repository.
         */
        readonly networkConfig?: RosFunction.NetworkConfigProperty | ros.IResolvable;
        /**
         * @Property authConfig: The authentication information of the image repository.
         */
        readonly authConfig?: RosFunction.AuthConfigProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RegistryConfigProperty`
 *
 * @param properties - the TypeScript properties of a `RegistryConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_RegistryConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('certConfig', ros.requiredValidator)(properties.certConfig));
    errors.collect(ros.propertyValidator('certConfig', RosFunction_CertConfigPropertyValidator)(properties.certConfig));
    errors.collect(ros.propertyValidator('networkConfig', RosFunction_NetworkConfigPropertyValidator)(properties.networkConfig));
    errors.collect(ros.propertyValidator('authConfig', RosFunction_AuthConfigPropertyValidator)(properties.authConfig));
    return errors.wrap('supplied properties not correct for "RegistryConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.RegistryConfig` resource
 *
 * @param properties - the TypeScript properties of a `RegistryConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.RegistryConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionRegistryConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_RegistryConfigPropertyValidator(properties).assertSuccess();
    return {
      'CertConfig': rosFunctionCertConfigPropertyToRosTemplate(properties.certConfig),
      'NetworkConfig': rosFunctionNetworkConfigPropertyToRosTemplate(properties.networkConfig),
      'AuthConfig': rosFunctionAuthConfigPropertyToRosTemplate(properties.authConfig),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface TracingConfigProperty {
        /**
         * @Property type: The type of the function.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property params: Link tracking parameters.
         */
        readonly params?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TracingConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TracingConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_TracingConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('params', ros.hashValidator(ros.validateAny))(properties.params));
    return errors.wrap('supplied properties not correct for "TracingConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.TracingConfig` resource
 *
 * @param properties - the TypeScript properties of a `TracingConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.TracingConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionTracingConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_TracingConfigPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Params': ros.hashMapper(ros.objectToRosTemplate)(properties.params),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface VpcConfigProperty {
        /**
         * @Property vpcId: The ID of the VPC.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property vSwitchIds: The IDs of the VSwitch.
         */
        readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group.
         */
        readonly securityGroupId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `VpcConfigProperty`
 *
 * @param properties - the TypeScript properties of a `VpcConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_VpcConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    return errors.wrap('supplied properties not correct for "VpcConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.VpcConfig` resource
 *
 * @param properties - the TypeScript properties of a `VpcConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Function.VpcConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionVpcConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_VpcConfigPropertyValidator(properties).assertSuccess();
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
    };
}

/**
 * Properties for defining a `RosProvisionConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig
 */
export interface RosProvisionConfigProps {

    /**
     * @Property defaultTarget: The number of target resources to reserve.
     */
    readonly defaultTarget: number | ros.IResolvable;

    /**
     * @Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * @Property alwaysAllocateCpu: Whether CPU should always be allocated; defaults to true.
     */
    readonly alwaysAllocateCpu?: boolean | ros.IResolvable;

    /**
     * @Property alwaysAllocateGpu: Whether GPU should always be allocated; defaults to true.
     */
    readonly alwaysAllocateGpu?: boolean | ros.IResolvable;

    /**
     * @Property qualifier: Function alias or LATEST.
     */
    readonly qualifier?: string | ros.IResolvable;

    /**
     * @Property scheduledActions: Timing policy configuration.
     */
    readonly scheduledActions?: Array<RosProvisionConfig.ScheduledActionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property targetTrackingPolicies: Target tracking policy configuration.
     */
    readonly targetTrackingPolicies?: Array<RosProvisionConfig.TargetTrackingPoliciesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosProvisionConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosProvisionConfigProps`
 *
 * @returns the result of the validation.
 */
function RosProvisionConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('defaultTarget', ros.requiredValidator)(properties.defaultTarget));
    if(properties.defaultTarget && (typeof properties.defaultTarget) !== 'object') {
        errors.collect(ros.propertyValidator('defaultTarget', ros.validateRange)({
            data: properties.defaultTarget,
            min: undefined,
            max: 299,
          }));
    }
    errors.collect(ros.propertyValidator('defaultTarget', ros.validateNumber)(properties.defaultTarget));
    errors.collect(ros.propertyValidator('alwaysAllocateCpu', ros.validateBoolean)(properties.alwaysAllocateCpu));
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    if(properties.targetTrackingPolicies && (Array.isArray(properties.targetTrackingPolicies) || (typeof properties.targetTrackingPolicies) === 'string')) {
        errors.collect(ros.propertyValidator('targetTrackingPolicies', ros.validateLength)({
            data: properties.targetTrackingPolicies.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('targetTrackingPolicies', ros.listValidator(RosProvisionConfig_TargetTrackingPoliciesPropertyValidator))(properties.targetTrackingPolicies));
    if(properties.scheduledActions && (Array.isArray(properties.scheduledActions) || (typeof properties.scheduledActions) === 'string')) {
        errors.collect(ros.propertyValidator('scheduledActions', ros.validateLength)({
            data: properties.scheduledActions.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('scheduledActions', ros.listValidator(RosProvisionConfig_ScheduledActionsPropertyValidator))(properties.scheduledActions));
    errors.collect(ros.propertyValidator('qualifier', ros.validateString)(properties.qualifier));
    errors.collect(ros.propertyValidator('alwaysAllocateGpu', ros.validateBoolean)(properties.alwaysAllocateGpu));
    return errors.wrap('supplied properties not correct for "RosProvisionConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::ProvisionConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosProvisionConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::ProvisionConfig` resource.
 */
// @ts-ignore TS6133
function rosProvisionConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProvisionConfigPropsValidator(properties).assertSuccess();
    }
    return {
      'DefaultTarget': ros.numberToRosTemplate(properties.defaultTarget),
      'FunctionName': ros.stringToRosTemplate(properties.functionName),
      'AlwaysAllocateCPU': ros.booleanToRosTemplate(properties.alwaysAllocateCpu),
      'AlwaysAllocateGPU': ros.booleanToRosTemplate(properties.alwaysAllocateGpu),
      'Qualifier': ros.stringToRosTemplate(properties.qualifier),
      'ScheduledActions': ros.listMapper(rosProvisionConfigScheduledActionsPropertyToRosTemplate)(properties.scheduledActions),
      'TargetTrackingPolicies': ros.listMapper(rosProvisionConfigTargetTrackingPoliciesPropertyToRosTemplate)(properties.targetTrackingPolicies),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::ProvisionConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProvisionConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig
 */
export class RosProvisionConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::ProvisionConfig";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property defaultTarget: The number of target resources to reserve.
     */
    public defaultTarget: number | ros.IResolvable;

    /**
     * @Property functionName: Function name.
     */
    public functionName: string | ros.IResolvable;

    /**
     * @Property alwaysAllocateCpu: Whether CPU should always be allocated; defaults to true.
     */
    public alwaysAllocateCpu: boolean | ros.IResolvable | undefined;

    /**
     * @Property alwaysAllocateGpu: Whether GPU should always be allocated; defaults to true.
     */
    public alwaysAllocateGpu: boolean | ros.IResolvable | undefined;

    /**
     * @Property qualifier: Function alias or LATEST.
     */
    public qualifier: string | ros.IResolvable | undefined;

    /**
     * @Property scheduledActions: Timing policy configuration.
     */
    public scheduledActions: Array<RosProvisionConfig.ScheduledActionsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property targetTrackingPolicies: Target tracking policy configuration.
     */
    public targetTrackingPolicies: Array<RosProvisionConfig.TargetTrackingPoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProvisionConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProvisionConfig.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.defaultTarget = props.defaultTarget;
        this.functionName = props.functionName;
        this.alwaysAllocateCpu = props.alwaysAllocateCpu;
        this.alwaysAllocateGpu = props.alwaysAllocateGpu;
        this.qualifier = props.qualifier;
        this.scheduledActions = props.scheduledActions;
        this.targetTrackingPolicies = props.targetTrackingPolicies;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            defaultTarget: this.defaultTarget,
            functionName: this.functionName,
            alwaysAllocateCpu: this.alwaysAllocateCpu,
            alwaysAllocateGpu: this.alwaysAllocateGpu,
            qualifier: this.qualifier,
            scheduledActions: this.scheduledActions,
            targetTrackingPolicies: this.targetTrackingPolicies,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProvisionConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosProvisionConfig {
    /**
     * @stability external
     */
    export interface ScheduledActionsProperty {
        /**
         * @Property scheduleExpression: Cron expression.
         */
        readonly scheduleExpression?: string | ros.IResolvable;
        /**
         * @Property timeZone: Time zones. startTime, endTime, and scheduleExpression times need to be in UTC when the timezone argument is empty.
         */
        readonly timeZone?: string | ros.IResolvable;
        /**
         * @Property target: The number of target resources to reserve.
         */
        readonly target: number | ros.IResolvable;
        /**
         * @Property endTime: Policy expiration time.
         */
        readonly endTime?: string | ros.IResolvable;
        /**
         * @Property startTime: Policy start time.
         */
        readonly startTime?: string | ros.IResolvable;
        /**
         * @Property name: Policy name.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ScheduledActionsProperty`
 *
 * @param properties - the TypeScript properties of a `ScheduledActionsProperty`
 *
 * @returns the result of the validation.
 */
function RosProvisionConfig_ScheduledActionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('scheduleExpression', ros.validateString)(properties.scheduleExpression));
    errors.collect(ros.propertyValidator('timeZone', ros.validateString)(properties.timeZone));
    errors.collect(ros.propertyValidator('target', ros.requiredValidator)(properties.target));
    if(properties.target && (typeof properties.target) !== 'object') {
        errors.collect(ros.propertyValidator('target', ros.validateRange)({
            data: properties.target,
            min: undefined,
            max: 299,
          }));
    }
    errors.collect(ros.propertyValidator('target', ros.validateNumber)(properties.target));
    errors.collect(ros.propertyValidator('endTime', ros.validateString)(properties.endTime));
    errors.collect(ros.propertyValidator('startTime', ros.validateString)(properties.startTime));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "ScheduledActionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::ProvisionConfig.ScheduledActions` resource
 *
 * @param properties - the TypeScript properties of a `ScheduledActionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::ProvisionConfig.ScheduledActions` resource.
 */
// @ts-ignore TS6133
function rosProvisionConfigScheduledActionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosProvisionConfig_ScheduledActionsPropertyValidator(properties).assertSuccess();
    return {
      'ScheduleExpression': ros.stringToRosTemplate(properties.scheduleExpression),
      'TimeZone': ros.stringToRosTemplate(properties.timeZone),
      'Target': ros.numberToRosTemplate(properties.target),
      'EndTime': ros.stringToRosTemplate(properties.endTime),
      'StartTime': ros.stringToRosTemplate(properties.startTime),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosProvisionConfig {
    /**
     * @stability external
     */
    export interface TargetTrackingPoliciesProperty {
        /**
         * @Property metricTarget: Tracking values for metrics.
         */
        readonly metricTarget: number | ros.IResolvable;
        /**
         * @Property timeZone: Time zones. startTime, endTime, and scheduleExpression times need to be in UTC when the timezone argument is empty.
         */
        readonly timeZone?: string | ros.IResolvable;
        /**
         * @Property endTime: Policy end time (UTC).
         */
        readonly endTime?: string | ros.IResolvable;
        /**
         * @Property metricType: Tracking target type. Valid values:
     * - ProvisionedConcurrencyUtilization: reserve a pattern instance concurrent degree of utilization. 
     * - CPUUtilization: CPU utilization. 
     * - GPUMemUtilization: GPU utilization.
         */
        readonly metricType: string | ros.IResolvable;
        /**
         * @Property startTime: Policy start time (UTC).
         */
        readonly startTime?: string | ros.IResolvable;
        /**
         * @Property minCapacity: The minimum of the shrinkage.
         */
        readonly minCapacity: number | ros.IResolvable;
        /**
         * @Property name: Policy name.
         */
        readonly name: string | ros.IResolvable;
        /**
         * @Property maxCapacity: The maximum of the expansion.
         */
        readonly maxCapacity: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TargetTrackingPoliciesProperty`
 *
 * @param properties - the TypeScript properties of a `TargetTrackingPoliciesProperty`
 *
 * @returns the result of the validation.
 */
function RosProvisionConfig_TargetTrackingPoliciesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('metricTarget', ros.requiredValidator)(properties.metricTarget));
    if(properties.metricTarget && (typeof properties.metricTarget) !== 'object') {
        errors.collect(ros.propertyValidator('metricTarget', ros.validateRange)({
            data: properties.metricTarget,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('metricTarget', ros.validateNumber)(properties.metricTarget));
    errors.collect(ros.propertyValidator('timeZone', ros.validateString)(properties.timeZone));
    errors.collect(ros.propertyValidator('endTime', ros.validateString)(properties.endTime));
    errors.collect(ros.propertyValidator('metricType', ros.requiredValidator)(properties.metricType));
    if(properties.metricType && (typeof properties.metricType) !== 'object') {
        errors.collect(ros.propertyValidator('metricType', ros.validateAllowedValues)({
          data: properties.metricType,
          allowedValues: ["ProvisionedConcurrencyUtilization","CPUUtilization","GPUMemUtilization"],
        }));
    }
    errors.collect(ros.propertyValidator('metricType', ros.validateString)(properties.metricType));
    errors.collect(ros.propertyValidator('startTime', ros.validateString)(properties.startTime));
    errors.collect(ros.propertyValidator('minCapacity', ros.requiredValidator)(properties.minCapacity));
    if(properties.minCapacity && (typeof properties.minCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('minCapacity', ros.validateRange)({
            data: properties.minCapacity,
            min: undefined,
            max: 299,
          }));
    }
    errors.collect(ros.propertyValidator('minCapacity', ros.validateNumber)(properties.minCapacity));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('maxCapacity', ros.requiredValidator)(properties.maxCapacity));
    if(properties.maxCapacity && (typeof properties.maxCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('maxCapacity', ros.validateRange)({
            data: properties.maxCapacity,
            min: undefined,
            max: 299,
          }));
    }
    errors.collect(ros.propertyValidator('maxCapacity', ros.validateNumber)(properties.maxCapacity));
    return errors.wrap('supplied properties not correct for "TargetTrackingPoliciesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::ProvisionConfig.TargetTrackingPolicies` resource
 *
 * @param properties - the TypeScript properties of a `TargetTrackingPoliciesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::ProvisionConfig.TargetTrackingPolicies` resource.
 */
// @ts-ignore TS6133
function rosProvisionConfigTargetTrackingPoliciesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosProvisionConfig_TargetTrackingPoliciesPropertyValidator(properties).assertSuccess();
    return {
      'MetricTarget': ros.numberToRosTemplate(properties.metricTarget),
      'TimeZone': ros.stringToRosTemplate(properties.timeZone),
      'EndTime': ros.stringToRosTemplate(properties.endTime),
      'MetricType': ros.stringToRosTemplate(properties.metricType),
      'StartTime': ros.stringToRosTemplate(properties.startTime),
      'MinCapacity': ros.numberToRosTemplate(properties.minCapacity),
      'Name': ros.stringToRosTemplate(properties.name),
      'MaxCapacity': ros.numberToRosTemplate(properties.maxCapacity),
    };
}

/**
 * Properties for defining a `RosTrigger`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger
 */
export interface RosTriggerProps {

    /**
     * @Property functionName: The name of the function.
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * @Property triggerConfig: Trigger config.
     */
    readonly triggerConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property triggerName: Name of the trigger.
     */
    readonly triggerName: string | ros.IResolvable;

    /**
     * @Property triggerType: Type of the trigger.
     */
    readonly triggerType: string | ros.IResolvable;

    /**
     * @Property description: Description of the trigger.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property invocationRole: Invocation role.
     */
    readonly invocationRole?: string | ros.IResolvable;

    /**
     * @Property qualifier: Qualifier of the trigger.
     */
    readonly qualifier?: string | ros.IResolvable;

    /**
     * @Property sourceArn: Source ARN of the trigger.
     */
    readonly sourceArn?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTriggerProps`
 *
 * @param properties - the TypeScript properties of a `RosTriggerProps`
 *
 * @returns the result of the validation.
 */
function RosTriggerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('triggerType', ros.requiredValidator)(properties.triggerType));
    errors.collect(ros.propertyValidator('triggerType', ros.validateString)(properties.triggerType));
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('triggerName', ros.requiredValidator)(properties.triggerName));
    errors.collect(ros.propertyValidator('triggerName', ros.validateString)(properties.triggerName));
    errors.collect(ros.propertyValidator('sourceArn', ros.validateString)(properties.sourceArn));
    errors.collect(ros.propertyValidator('triggerConfig', ros.requiredValidator)(properties.triggerConfig));
    errors.collect(ros.propertyValidator('triggerConfig', ros.hashValidator(ros.validateAny))(properties.triggerConfig));
    errors.collect(ros.propertyValidator('invocationRole', ros.validateString)(properties.invocationRole));
    errors.collect(ros.propertyValidator('qualifier', ros.validateString)(properties.qualifier));
    return errors.wrap('supplied properties not correct for "RosTriggerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC3::Trigger` resource
 *
 * @param properties - the TypeScript properties of a `RosTriggerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC3::Trigger` resource.
 */
// @ts-ignore TS6133
function rosTriggerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTriggerPropsValidator(properties).assertSuccess();
    }
    return {
      'FunctionName': ros.stringToRosTemplate(properties.functionName),
      'TriggerConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.triggerConfig),
      'TriggerName': ros.stringToRosTemplate(properties.triggerName),
      'TriggerType': ros.stringToRosTemplate(properties.triggerType),
      'Description': ros.stringToRosTemplate(properties.description),
      'InvocationRole': ros.stringToRosTemplate(properties.invocationRole),
      'Qualifier': ros.stringToRosTemplate(properties.qualifier),
      'SourceArn': ros.stringToRosTemplate(properties.sourceArn),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::Trigger`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Trigger` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger
 */
export class RosTrigger extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::Trigger";

    /**
     * @Attribute FunctionName: Function name.
     */
    public readonly attrFunctionName: ros.IResolvable;

    /**
     * @Attribute TriggerId: The trigger ID.
     */
    public readonly attrTriggerId: ros.IResolvable;

    /**
     * @Attribute TriggerName: Trigger name.
     */
    public readonly attrTriggerName: ros.IResolvable;

    /**
     * @Attribute UrlInternet: The public domain address. You can access HTTP triggers over the Internet by using HTTP or HTTPS.
     */
    public readonly attrUrlInternet: ros.IResolvable;

    /**
     * @Attribute UrlIntranet: The private endpoint. In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
     */
    public readonly attrUrlIntranet: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property functionName: The name of the function.
     */
    public functionName: string | ros.IResolvable;

    /**
     * @Property triggerConfig: Trigger config.
     */
    public triggerConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property triggerName: Name of the trigger.
     */
    public triggerName: string | ros.IResolvable;

    /**
     * @Property triggerType: Type of the trigger.
     */
    public triggerType: string | ros.IResolvable;

    /**
     * @Property description: Description of the trigger.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property invocationRole: Invocation role.
     */
    public invocationRole: string | ros.IResolvable | undefined;

    /**
     * @Property qualifier: Qualifier of the trigger.
     */
    public qualifier: string | ros.IResolvable | undefined;

    /**
     * @Property sourceArn: Source ARN of the trigger.
     */
    public sourceArn: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTriggerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTrigger.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFunctionName = this.getAtt('FunctionName');
        this.attrTriggerId = this.getAtt('TriggerId');
        this.attrTriggerName = this.getAtt('TriggerName');
        this.attrUrlInternet = this.getAtt('UrlInternet');
        this.attrUrlIntranet = this.getAtt('UrlIntranet');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.functionName = props.functionName;
        this.triggerConfig = props.triggerConfig;
        this.triggerName = props.triggerName;
        this.triggerType = props.triggerType;
        this.description = props.description;
        this.invocationRole = props.invocationRole;
        this.qualifier = props.qualifier;
        this.sourceArn = props.sourceArn;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            functionName: this.functionName,
            triggerConfig: this.triggerConfig,
            triggerName: this.triggerName,
            triggerType: this.triggerType,
            description: this.description,
            invocationRole: this.invocationRole,
            qualifier: this.qualifier,
            sourceArn: this.sourceArn,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTriggerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
