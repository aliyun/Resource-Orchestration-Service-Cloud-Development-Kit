"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosTrigger = exports.RosProvisionConfig = exports.RosFunction = exports.RosCustomDomain = exports.RosConcurrencyConfig = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosConcurrencyConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosConcurrencyConfigProps`
 *
 * @returns the result of the validation.
 */
function RosConcurrencyConfigPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('reservedConcurrency', ros.requiredValidator)(properties.reservedConcurrency));
    if (properties.reservedConcurrency && (typeof properties.reservedConcurrency) !== 'object') {
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
function rosConcurrencyConfigPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosConcurrencyConfig extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosConcurrencyConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.functionName = props.functionName;
        this.reservedConcurrency = props.reservedConcurrency;
    }
    get rosProperties() {
        return {
            functionName: this.functionName,
            reservedConcurrency: this.reservedConcurrency,
        };
    }
    renderProperties(props) {
        return rosConcurrencyConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosConcurrencyConfig = RosConcurrencyConfig;
/**
 * The resource type name for this resource class.
 */
RosConcurrencyConfig.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::ConcurrencyConfig";
/**
 * Determine whether the given properties match those of a `RosCustomDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomDomainProps`
 *
 * @returns the result of the validation.
 */
function RosCustomDomainPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('certConfig', RosCustomDomain_CertConfigPropertyValidator)(properties.certConfig));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('tlsConfig', RosCustomDomain_TlsConfigPropertyValidator)(properties.tlsConfig));
    errors.collect(ros.propertyValidator('routeConfig', RosCustomDomain_RouteConfigPropertyValidator)(properties.routeConfig));
    errors.collect(ros.propertyValidator('authConfig', ros.requiredValidator)(properties.authConfig));
    errors.collect(ros.propertyValidator('authConfig', RosCustomDomain_AuthConfigPropertyValidator)(properties.authConfig));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if (properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
            data: properties.protocol,
            allowedValues: ["HTTP", "HTTPS", "HTTP,HTTPS"],
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
function rosCustomDomainPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosCustomDomain extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosCustomDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCustomDomain = RosCustomDomain;
/**
 * The resource type name for this resource class.
 */
RosCustomDomain.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::CustomDomain";
/**
 * Determine whether the given properties match those of a `AuthConfigProperty`
 *
 * @param properties - the TypeScript properties of a `AuthConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_AuthConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('authInfo', ros.validateString)(properties.authInfo));
    errors.collect(ros.propertyValidator('authType', ros.requiredValidator)(properties.authType));
    if (properties.authType && (typeof properties.authType) !== 'object') {
        errors.collect(ros.propertyValidator('authType', ros.validateAllowedValues)({
            data: properties.authType,
            allowedValues: ["anonymous", "function", "jwt"],
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
function rosCustomDomainAuthConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomDomain_AuthConfigPropertyValidator(properties).assertSuccess();
    return {
        'AuthInfo': ros.stringToRosTemplate(properties.authInfo),
        'AuthType': ros.stringToRosTemplate(properties.authType),
    };
}
/**
 * Determine whether the given properties match those of a `CertConfigProperty`
 *
 * @param properties - the TypeScript properties of a `CertConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_CertConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosCustomDomainCertConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomDomain_CertConfigPropertyValidator(properties).assertSuccess();
    return {
        'PrivateKey': ros.stringToRosTemplate(properties.privateKey),
        'CertName': ros.stringToRosTemplate(properties.certName),
        'Certificate': ros.stringToRosTemplate(properties.certificate),
    };
}
/**
 * Determine whether the given properties match those of a `EqualRulesProperty`
 *
 * @param properties - the TypeScript properties of a `EqualRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_EqualRulesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosCustomDomainEqualRulesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomDomain_EqualRulesPropertyValidator(properties).assertSuccess();
    return {
        'Replacement': ros.stringToRosTemplate(properties.replacement),
        'Match': ros.stringToRosTemplate(properties.match),
    };
}
/**
 * Determine whether the given properties match those of a `RegexRulesProperty`
 *
 * @param properties - the TypeScript properties of a `RegexRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_RegexRulesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosCustomDomainRegexRulesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomDomain_RegexRulesPropertyValidator(properties).assertSuccess();
    return {
        'Replacement': ros.stringToRosTemplate(properties.replacement),
        'Match': ros.stringToRosTemplate(properties.match),
    };
}
/**
 * Determine whether the given properties match those of a `RewriteConfigProperty`
 *
 * @param properties - the TypeScript properties of a `RewriteConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_RewriteConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.wildcardRules && (Array.isArray(properties.wildcardRules) || (typeof properties.wildcardRules) === 'string')) {
        errors.collect(ros.propertyValidator('wildcardRules', ros.validateLength)({
            data: properties.wildcardRules.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('wildcardRules', ros.listValidator(RosCustomDomain_WildcardRulesPropertyValidator))(properties.wildcardRules));
    if (properties.regexRules && (Array.isArray(properties.regexRules) || (typeof properties.regexRules) === 'string')) {
        errors.collect(ros.propertyValidator('regexRules', ros.validateLength)({
            data: properties.regexRules.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('regexRules', ros.listValidator(RosCustomDomain_RegexRulesPropertyValidator))(properties.regexRules));
    if (properties.equalRules && (Array.isArray(properties.equalRules) || (typeof properties.equalRules) === 'string')) {
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
function rosCustomDomainRewriteConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomDomain_RewriteConfigPropertyValidator(properties).assertSuccess();
    return {
        'WildcardRules': ros.listMapper(rosCustomDomainWildcardRulesPropertyToRosTemplate)(properties.wildcardRules),
        'RegexRules': ros.listMapper(rosCustomDomainRegexRulesPropertyToRosTemplate)(properties.regexRules),
        'EqualRules': ros.listMapper(rosCustomDomainEqualRulesPropertyToRosTemplate)(properties.equalRules),
    };
}
/**
 * Determine whether the given properties match those of a `RouteConfigProperty`
 *
 * @param properties - the TypeScript properties of a `RouteConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_RouteConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('routes', ros.requiredValidator)(properties.routes));
    if (properties.routes && (Array.isArray(properties.routes) || (typeof properties.routes) === 'string')) {
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
function rosCustomDomainRouteConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomDomain_RouteConfigPropertyValidator(properties).assertSuccess();
    return {
        'Routes': ros.listMapper(rosCustomDomainRoutesPropertyToRosTemplate)(properties.routes),
    };
}
/**
 * Determine whether the given properties match those of a `RoutesProperty`
 *
 * @param properties - the TypeScript properties of a `RoutesProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_RoutesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.requiredValidator)(properties.path));
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('qualifier', ros.requiredValidator)(properties.qualifier));
    errors.collect(ros.propertyValidator('qualifier', ros.validateString)(properties.qualifier));
    errors.collect(ros.propertyValidator('rewriteConfig', RosCustomDomain_RewriteConfigPropertyValidator)(properties.rewriteConfig));
    if (properties.methods && (Array.isArray(properties.methods) || (typeof properties.methods) === 'string')) {
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
function rosCustomDomainRoutesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomDomain_RoutesPropertyValidator(properties).assertSuccess();
    return {
        'Path': ros.stringToRosTemplate(properties.path),
        'FunctionName': ros.stringToRosTemplate(properties.functionName),
        'Qualifier': ros.stringToRosTemplate(properties.qualifier),
        'RewriteConfig': rosCustomDomainRewriteConfigPropertyToRosTemplate(properties.rewriteConfig),
        'Methods': ros.listMapper(ros.stringToRosTemplate)(properties.methods),
    };
}
/**
 * Determine whether the given properties match those of a `TlsConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TlsConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_TlsConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('minVersion', ros.requiredValidator)(properties.minVersion));
    errors.collect(ros.propertyValidator('minVersion', ros.validateString)(properties.minVersion));
    errors.collect(ros.propertyValidator('maxVersion', ros.validateString)(properties.maxVersion));
    errors.collect(ros.propertyValidator('cipherSuites', ros.requiredValidator)(properties.cipherSuites));
    if (properties.cipherSuites && (Array.isArray(properties.cipherSuites) || (typeof properties.cipherSuites) === 'string')) {
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
function rosCustomDomainTlsConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomDomain_TlsConfigPropertyValidator(properties).assertSuccess();
    return {
        'MinVersion': ros.stringToRosTemplate(properties.minVersion),
        'MaxVersion': ros.stringToRosTemplate(properties.maxVersion),
        'CipherSuites': ros.listMapper(ros.stringToRosTemplate)(properties.cipherSuites),
    };
}
/**
 * Determine whether the given properties match those of a `WafConfigProperty`
 *
 * @param properties - the TypeScript properties of a `WafConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_WafConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosCustomDomainWafConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomDomain_WafConfigPropertyValidator(properties).assertSuccess();
    return {
        'EnableWAF': ros.booleanToRosTemplate(properties.enableWaf),
    };
}
/**
 * Determine whether the given properties match those of a `WildcardRulesProperty`
 *
 * @param properties - the TypeScript properties of a `WildcardRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomDomain_WildcardRulesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosCustomDomainWildcardRulesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomDomain_WildcardRulesPropertyValidator(properties).assertSuccess();
    return {
        'Replacement': ros.stringToRosTemplate(properties.replacement),
        'Match': ros.stringToRosTemplate(properties.match),
    };
}
/**
 * Determine whether the given properties match those of a `RosFunctionProps`
 *
 * @param properties - the TypeScript properties of a `RosFunctionProps`
 *
 * @returns the result of the validation.
 */
function RosFunctionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.memorySize && (typeof properties.memorySize) !== 'object') {
        errors.collect(ros.propertyValidator('memorySize', ros.validateRange)({
            data: properties.memorySize,
            min: 128,
            max: 65536,
        }));
    }
    errors.collect(ros.propertyValidator('memorySize', ros.validateNumber)(properties.memorySize));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('tracingConfig', RosFunction_TracingConfigPropertyValidator)(properties.tracingConfig));
    errors.collect(ros.propertyValidator('vpcConfig', RosFunction_VpcConfigPropertyValidator)(properties.vpcConfig));
    if (properties.timeout && (typeof properties.timeout) !== 'object') {
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
    if (properties.cpu && (typeof properties.cpu) !== 'object') {
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
    if (properties.instanceConcurrency && (typeof properties.instanceConcurrency) !== 'object') {
        errors.collect(ros.propertyValidator('instanceConcurrency', ros.validateRange)({
            data: properties.instanceConcurrency,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('instanceConcurrency', ros.validateNumber)(properties.instanceConcurrency));
    if (properties.layers && (Array.isArray(properties.layers) || (typeof properties.layers) === 'string')) {
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
function rosFunctionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::Function`, which is used to create a Function Compute 3.0 function.
 * @Note This class does not contain additional functions, so it is recommended to use the `Function` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
 */
class RosFunction extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosFunctionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosFunction = RosFunction;
/**
 * The resource type name for this resource class.
 */
RosFunction.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::Function";
/**
 * Determine whether the given properties match those of a `AccelerationInfoProperty`
 *
 * @param properties - the TypeScript properties of a `AccelerationInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_AccelerationInfoPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionAccelerationInfoPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_AccelerationInfoPropertyValidator(properties).assertSuccess();
    return {
        'Status': ros.stringToRosTemplate(properties.status),
    };
}
/**
 * Determine whether the given properties match those of a `AuthConfigProperty`
 *
 * @param properties - the TypeScript properties of a `AuthConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_AuthConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionAuthConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_AuthConfigPropertyValidator(properties).assertSuccess();
    return {
        'UserName': ros.stringToRosTemplate(properties.userName),
        'Password': ros.stringToRosTemplate(properties.password),
    };
}
/**
 * Determine whether the given properties match those of a `CertConfigProperty`
 *
 * @param properties - the TypeScript properties of a `CertConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CertConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionCertConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_CertConfigPropertyValidator(properties).assertSuccess();
    return {
        'Insecure': ros.booleanToRosTemplate(properties.insecure),
        'RootCaCertBase64': ros.stringToRosTemplate(properties.rootCaCertBase64),
    };
}
/**
 * Determine whether the given properties match those of a `CodeProperty`
 *
 * @param properties - the TypeScript properties of a `CodeProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CodePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.sourceCode && (Array.isArray(properties.sourceCode) || (typeof properties.sourceCode) === 'string')) {
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
function rosFunctionCodePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_CodePropertyValidator(properties).assertSuccess();
    return {
        'SourceCode': ros.stringToRosTemplate(properties.sourceCode),
        'ZipFile': ros.stringToRosTemplate(properties.zipFile),
        'Checksum': ros.stringToRosTemplate(properties.checksum),
        'OssObjectName': ros.stringToRosTemplate(properties.ossObjectName),
        'OssBucketName': ros.stringToRosTemplate(properties.ossBucketName),
    };
}
/**
 * Determine whether the given properties match those of a `CustomContainerConfigProperty`
 *
 * @param properties - the TypeScript properties of a `CustomContainerConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CustomContainerConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('registryConfig', RosFunction_RegistryConfigPropertyValidator)(properties.registryConfig));
    errors.collect(ros.propertyValidator('resolvedImageUri', ros.validateString)(properties.resolvedImageUri));
    errors.collect(ros.propertyValidator('acrInstanceId', ros.validateString)(properties.acrInstanceId));
    errors.collect(ros.propertyValidator('accelerationInfo', RosFunction_AccelerationInfoPropertyValidator)(properties.accelerationInfo));
    if (properties.entrypoint && (Array.isArray(properties.entrypoint) || (typeof properties.entrypoint) === 'string')) {
        errors.collect(ros.propertyValidator('entrypoint', ros.validateLength)({
            data: properties.entrypoint.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('entrypoint', ros.listValidator(ros.validateString))(properties.entrypoint));
    if (properties.command && (Array.isArray(properties.command) || (typeof properties.command) === 'string')) {
        errors.collect(ros.propertyValidator('command', ros.validateLength)({
            data: properties.command.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    errors.collect(ros.propertyValidator('accelerationType', ros.validateString)(properties.accelerationType));
    if (properties.port && (typeof properties.port) !== 'object') {
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
function rosFunctionCustomContainerConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
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
/**
 * Determine whether the given properties match those of a `CustomDnsProperty`
 *
 * @param properties - the TypeScript properties of a `CustomDnsProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CustomDnsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.searches && (Array.isArray(properties.searches) || (typeof properties.searches) === 'string')) {
        errors.collect(ros.propertyValidator('searches', ros.validateLength)({
            data: properties.searches.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('searches', ros.listValidator(ros.validateString))(properties.searches));
    if (properties.dnsOptions && (Array.isArray(properties.dnsOptions) || (typeof properties.dnsOptions) === 'string')) {
        errors.collect(ros.propertyValidator('dnsOptions', ros.validateLength)({
            data: properties.dnsOptions.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('dnsOptions', ros.listValidator(RosFunction_DnsOptionsPropertyValidator))(properties.dnsOptions));
    if (properties.nameServers && (Array.isArray(properties.nameServers) || (typeof properties.nameServers) === 'string')) {
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
function rosFunctionCustomDnsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_CustomDnsPropertyValidator(properties).assertSuccess();
    return {
        'Searches': ros.listMapper(ros.stringToRosTemplate)(properties.searches),
        'DnsOptions': ros.listMapper(rosFunctionDnsOptionsPropertyToRosTemplate)(properties.dnsOptions),
        'NameServers': ros.listMapper(ros.stringToRosTemplate)(properties.nameServers),
    };
}
/**
 * Determine whether the given properties match those of a `CustomRuntimeConfigProperty`
 *
 * @param properties - the TypeScript properties of a `CustomRuntimeConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CustomRuntimeConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.args && (Array.isArray(properties.args) || (typeof properties.args) === 'string')) {
        errors.collect(ros.propertyValidator('args', ros.validateLength)({
            data: properties.args.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('args', ros.listValidator(ros.validateString))(properties.args));
    if (properties.command && (Array.isArray(properties.command) || (typeof properties.command) === 'string')) {
        errors.collect(ros.propertyValidator('command', ros.validateLength)({
            data: properties.command.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    if (properties.port && (typeof properties.port) !== 'object') {
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
function rosFunctionCustomRuntimeConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_CustomRuntimeConfigPropertyValidator(properties).assertSuccess();
    return {
        'Args': ros.listMapper(ros.stringToRosTemplate)(properties.args),
        'Command': ros.listMapper(ros.stringToRosTemplate)(properties.command),
        'Port': ros.numberToRosTemplate(properties.port),
        'HealthCheckConfig': rosFunctionCustomRuntimeConfigHealthCheckConfigPropertyToRosTemplate(properties.healthCheckConfig),
    };
}
/**
 * Determine whether the given properties match those of a `CustomRuntimeConfigHealthCheckConfigProperty`
 *
 * @param properties - the TypeScript properties of a `CustomRuntimeConfigHealthCheckConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CustomRuntimeConfigHealthCheckConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateNumber)(properties.timeoutSeconds));
    if (properties.initialDelaySeconds && (typeof properties.initialDelaySeconds) !== 'object') {
        errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateRange)({
            data: properties.initialDelaySeconds,
            min: 0,
            max: 120,
        }));
    }
    errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateNumber)(properties.initialDelaySeconds));
    if (properties.httpGetUrl && (Array.isArray(properties.httpGetUrl) || (typeof properties.httpGetUrl) === 'string')) {
        errors.collect(ros.propertyValidator('httpGetUrl', ros.validateLength)({
            data: properties.httpGetUrl.length,
            min: undefined,
            max: 2048,
        }));
    }
    errors.collect(ros.propertyValidator('httpGetUrl', ros.validateString)(properties.httpGetUrl));
    if (properties.periodSeconds && (typeof properties.periodSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('periodSeconds', ros.validateRange)({
            data: properties.periodSeconds,
            min: 1,
            max: 120,
        }));
    }
    errors.collect(ros.propertyValidator('periodSeconds', ros.validateNumber)(properties.periodSeconds));
    if (properties.failureThreshold && (typeof properties.failureThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('failureThreshold', ros.validateRange)({
            data: properties.failureThreshold,
            min: 1,
            max: 120,
        }));
    }
    errors.collect(ros.propertyValidator('failureThreshold', ros.validateNumber)(properties.failureThreshold));
    if (properties.successThreshold && (typeof properties.successThreshold) !== 'object') {
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
function rosFunctionCustomRuntimeConfigHealthCheckConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
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
/**
 * Determine whether the given properties match those of a `DnsOptionsProperty`
 *
 * @param properties - the TypeScript properties of a `DnsOptionsProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_DnsOptionsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionDnsOptionsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_DnsOptionsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Name': ros.stringToRosTemplate(properties.name),
    };
}
/**
 * Determine whether the given properties match those of a `GpuConfigProperty`
 *
 * @param properties - the TypeScript properties of a `GpuConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_GpuConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionGpuConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_GpuConfigPropertyValidator(properties).assertSuccess();
    return {
        'GpuMemorySize': ros.numberToRosTemplate(properties.gpuMemorySize),
        'GpuType': ros.stringToRosTemplate(properties.gpuType),
    };
}
/**
 * Determine whether the given properties match those of a `HealthCheckConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_HealthCheckConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateNumber)(properties.timeoutSeconds));
    if (properties.initialDelaySeconds && (typeof properties.initialDelaySeconds) !== 'object') {
        errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateRange)({
            data: properties.initialDelaySeconds,
            min: 0,
            max: 120,
        }));
    }
    errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateNumber)(properties.initialDelaySeconds));
    if (properties.httpGetUrl && (Array.isArray(properties.httpGetUrl) || (typeof properties.httpGetUrl) === 'string')) {
        errors.collect(ros.propertyValidator('httpGetUrl', ros.validateLength)({
            data: properties.httpGetUrl.length,
            min: undefined,
            max: 2048,
        }));
    }
    errors.collect(ros.propertyValidator('httpGetUrl', ros.validateString)(properties.httpGetUrl));
    if (properties.periodSeconds && (typeof properties.periodSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('periodSeconds', ros.validateRange)({
            data: properties.periodSeconds,
            min: 1,
            max: 120,
        }));
    }
    errors.collect(ros.propertyValidator('periodSeconds', ros.validateNumber)(properties.periodSeconds));
    if (properties.failureThreshold && (typeof properties.failureThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('failureThreshold', ros.validateRange)({
            data: properties.failureThreshold,
            min: 1,
            max: 120,
        }));
    }
    errors.collect(ros.propertyValidator('failureThreshold', ros.validateNumber)(properties.failureThreshold));
    if (properties.successThreshold && (typeof properties.successThreshold) !== 'object') {
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
function rosFunctionHealthCheckConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
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
/**
 * Determine whether the given properties match those of a `InitializerProperty`
 *
 * @param properties - the TypeScript properties of a `InitializerProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_InitializerPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionInitializerPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_InitializerPropertyValidator(properties).assertSuccess();
    return {
        'Timeout': ros.numberToRosTemplate(properties.timeout),
        'Handler': ros.stringToRosTemplate(properties.handler),
    };
}
/**
 * Determine whether the given properties match those of a `InstanceLifecycleConfigProperty`
 *
 * @param properties - the TypeScript properties of a `InstanceLifecycleConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_InstanceLifecycleConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionInstanceLifecycleConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_InstanceLifecycleConfigPropertyValidator(properties).assertSuccess();
    return {
        'PreStop': rosFunctionPreStopPropertyToRosTemplate(properties.preStop),
        'Initializer': rosFunctionInitializerPropertyToRosTemplate(properties.initializer),
    };
}
/**
 * Determine whether the given properties match those of a `LogConfigProperty`
 *
 * @param properties - the TypeScript properties of a `LogConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_LogConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionLogConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_LogConfigPropertyValidator(properties).assertSuccess();
    return {
        'Project': ros.stringToRosTemplate(properties.project),
        'LogBeginRule': ros.stringToRosTemplate(properties.logBeginRule),
        'Logstore': ros.stringToRosTemplate(properties.logstore),
        'EnableInstanceMetrics': ros.booleanToRosTemplate(properties.enableInstanceMetrics),
        'EnableRequestMetrics': ros.booleanToRosTemplate(properties.enableRequestMetrics),
    };
}
/**
 * Determine whether the given properties match those of a `MountPointsProperty`
 *
 * @param properties - the TypeScript properties of a `MountPointsProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_MountPointsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionMountPointsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_MountPointsPropertyValidator(properties).assertSuccess();
    return {
        'EnableTls': ros.booleanToRosTemplate(properties.enableTls),
        'ServerAddr': ros.stringToRosTemplate(properties.serverAddr),
        'MountDir': ros.stringToRosTemplate(properties.mountDir),
    };
}
/**
 * Determine whether the given properties match those of a `NasConfigProperty`
 *
 * @param properties - the TypeScript properties of a `NasConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_NasConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.mountPoints && (Array.isArray(properties.mountPoints) || (typeof properties.mountPoints) === 'string')) {
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
function rosFunctionNasConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_NasConfigPropertyValidator(properties).assertSuccess();
    return {
        'MountPoints': ros.listMapper(rosFunctionMountPointsPropertyToRosTemplate)(properties.mountPoints),
        'UserId': ros.numberToRosTemplate(properties.userId),
        'GroupId': ros.numberToRosTemplate(properties.groupId),
    };
}
/**
 * Determine whether the given properties match those of a `NetworkConfigProperty`
 *
 * @param properties - the TypeScript properties of a `NetworkConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_NetworkConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionNetworkConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_NetworkConfigPropertyValidator(properties).assertSuccess();
    return {
        'VpcId': ros.stringToRosTemplate(properties.vpcId),
        'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
        'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
    };
}
/**
 * Determine whether the given properties match those of a `OssMountConfigProperty`
 *
 * @param properties - the TypeScript properties of a `OssMountConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_OssMountConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.mountPoints && (Array.isArray(properties.mountPoints) || (typeof properties.mountPoints) === 'string')) {
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
function rosFunctionOssMountConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_OssMountConfigPropertyValidator(properties).assertSuccess();
    return {
        'MountPoints': ros.listMapper(rosFunctionOssMountConfigMountPointsPropertyToRosTemplate)(properties.mountPoints),
    };
}
/**
 * Determine whether the given properties match those of a `OssMountConfigMountPointsProperty`
 *
 * @param properties - the TypeScript properties of a `OssMountConfigMountPointsProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_OssMountConfigMountPointsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionOssMountConfigMountPointsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_OssMountConfigMountPointsPropertyValidator(properties).assertSuccess();
    return {
        'ReadOnly': ros.booleanToRosTemplate(properties.readOnly),
        'BucketName': ros.stringToRosTemplate(properties.bucketName),
        'Endpoint': ros.stringToRosTemplate(properties.endpoint),
        'BucketPath': ros.stringToRosTemplate(properties.bucketPath),
        'MountDir': ros.stringToRosTemplate(properties.mountDir),
    };
}
/**
 * Determine whether the given properties match those of a `PreStopProperty`
 *
 * @param properties - the TypeScript properties of a `PreStopProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_PreStopPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionPreStopPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_PreStopPropertyValidator(properties).assertSuccess();
    return {
        'Timeout': ros.numberToRosTemplate(properties.timeout),
        'Handler': ros.stringToRosTemplate(properties.handler),
    };
}
/**
 * Determine whether the given properties match those of a `RegistryConfigProperty`
 *
 * @param properties - the TypeScript properties of a `RegistryConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_RegistryConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionRegistryConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_RegistryConfigPropertyValidator(properties).assertSuccess();
    return {
        'CertConfig': rosFunctionCertConfigPropertyToRosTemplate(properties.certConfig),
        'NetworkConfig': rosFunctionNetworkConfigPropertyToRosTemplate(properties.networkConfig),
        'AuthConfig': rosFunctionAuthConfigPropertyToRosTemplate(properties.authConfig),
    };
}
/**
 * Determine whether the given properties match those of a `TracingConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TracingConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_TracingConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFunctionTracingConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_TracingConfigPropertyValidator(properties).assertSuccess();
    return {
        'Type': ros.stringToRosTemplate(properties.type),
        'Params': ros.hashMapper(ros.objectToRosTemplate)(properties.params),
    };
}
/**
 * Determine whether the given properties match those of a `VpcConfigProperty`
 *
 * @param properties - the TypeScript properties of a `VpcConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_VpcConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if (properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
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
function rosFunctionVpcConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_VpcConfigPropertyValidator(properties).assertSuccess();
    return {
        'VpcId': ros.stringToRosTemplate(properties.vpcId),
        'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
        'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
    };
}
/**
 * Determine whether the given properties match those of a `RosProvisionConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosProvisionConfigProps`
 *
 * @returns the result of the validation.
 */
function RosProvisionConfigPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('defaultTarget', ros.requiredValidator)(properties.defaultTarget));
    if (properties.defaultTarget && (typeof properties.defaultTarget) !== 'object') {
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
    if (properties.targetTrackingPolicies && (Array.isArray(properties.targetTrackingPolicies) || (typeof properties.targetTrackingPolicies) === 'string')) {
        errors.collect(ros.propertyValidator('targetTrackingPolicies', ros.validateLength)({
            data: properties.targetTrackingPolicies.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('targetTrackingPolicies', ros.listValidator(RosProvisionConfig_TargetTrackingPoliciesPropertyValidator))(properties.targetTrackingPolicies));
    if (properties.scheduledActions && (Array.isArray(properties.scheduledActions) || (typeof properties.scheduledActions) === 'string')) {
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
function rosProvisionConfigPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosProvisionConfig extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosProvisionConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosProvisionConfig = RosProvisionConfig;
/**
 * The resource type name for this resource class.
 */
RosProvisionConfig.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::ProvisionConfig";
/**
 * Determine whether the given properties match those of a `ScheduledActionsProperty`
 *
 * @param properties - the TypeScript properties of a `ScheduledActionsProperty`
 *
 * @returns the result of the validation.
 */
function RosProvisionConfig_ScheduledActionsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('scheduleExpression', ros.validateString)(properties.scheduleExpression));
    errors.collect(ros.propertyValidator('timeZone', ros.validateString)(properties.timeZone));
    errors.collect(ros.propertyValidator('target', ros.requiredValidator)(properties.target));
    if (properties.target && (typeof properties.target) !== 'object') {
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
function rosProvisionConfigScheduledActionsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
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
/**
 * Determine whether the given properties match those of a `TargetTrackingPoliciesProperty`
 *
 * @param properties - the TypeScript properties of a `TargetTrackingPoliciesProperty`
 *
 * @returns the result of the validation.
 */
function RosProvisionConfig_TargetTrackingPoliciesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('metricTarget', ros.requiredValidator)(properties.metricTarget));
    if (properties.metricTarget && (typeof properties.metricTarget) !== 'object') {
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
    if (properties.metricType && (typeof properties.metricType) !== 'object') {
        errors.collect(ros.propertyValidator('metricType', ros.validateAllowedValues)({
            data: properties.metricType,
            allowedValues: ["ProvisionedConcurrencyUtilization", "CPUUtilization", "GPUMemUtilization"],
        }));
    }
    errors.collect(ros.propertyValidator('metricType', ros.validateString)(properties.metricType));
    errors.collect(ros.propertyValidator('startTime', ros.validateString)(properties.startTime));
    errors.collect(ros.propertyValidator('minCapacity', ros.requiredValidator)(properties.minCapacity));
    if (properties.minCapacity && (typeof properties.minCapacity) !== 'object') {
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
    if (properties.maxCapacity && (typeof properties.maxCapacity) !== 'object') {
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
function rosProvisionConfigTargetTrackingPoliciesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
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
 * Determine whether the given properties match those of a `RosTriggerProps`
 *
 * @param properties - the TypeScript properties of a `RosTriggerProps`
 *
 * @returns the result of the validation.
 */
function RosTriggerPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosTriggerPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC3::Trigger`, which is used to create a Function Compute 3.0 trigger.
 * @Note This class does not contain additional functions, so it is recommended to use the `Trigger` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger
 */
class RosTrigger extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosTriggerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTrigger = RosTrigger;
/**
 * The resource type name for this resource class.
 */
RosTrigger.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC3::Trigger";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmMzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZjMy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQW1COUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxrQ0FBa0MsQ0FBQyxVQUFlO0lBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN0RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25HLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDcEgsSUFBRyxVQUFVLENBQUMsbUJBQW1CLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUN2RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0UsSUFBSSxFQUFFLFVBQVUsQ0FBQyxtQkFBbUI7WUFDcEMsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVB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RUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN0RixDQUFDOztBQWpITCxnQ0FrSEM7QUFqSEc7O0dBRUc7QUFDb0IsaUNBQXNCLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0NvbmN1cnJlbmN5Q29uZmlnYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjMy1jb25jdXJyZW5jeWNvbmZpZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0NvbmN1cnJlbmN5Q29uZmlnUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBmdW5jdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNlcnZlZENvbmN1cnJlbmN5OiBUbyBSRVNFUlZFIGNvbmN1cnJlbmN5LCBGVU5DVElPTlMgUkVTRVJWRSBhIHBvcnRpb24gT0YgQUNDT1VOVCBjb25jdXJyZW5jeSB0aGF0IGNhbm5vdCBiZSB1c2VkIGJ5IG90aGVyIGZ1bmN0aW9ucy4gUmVzZXJ2ZWQgY29uY3VycmVuY3kgaW5jbHVkZXMgdGhlIHRvdGFsIGNvbmN1cnJlbmN5IG9mIHJlc2VydmVkIGluc3RhbmNlcyBhbmQgaW5zdGFuY2VzIGJ5IHZvbHVtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNlcnZlZENvbmN1cnJlbmN5OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ29uY3VycmVuY3lDb25maWdQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ29uY3VycmVuY3lDb25maWdQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDb25jdXJyZW5jeUNvbmZpZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzZXJ2ZWRDb25jdXJyZW5jeScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZXNlcnZlZENvbmN1cnJlbmN5KSk7XG4gICAgaWYocHJvcGVydGllcy5yZXNlcnZlZENvbmN1cnJlbmN5ICYmICh0eXBlb2YgcHJvcGVydGllcy5yZXNlcnZlZENvbmN1cnJlbmN5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNlcnZlZENvbmN1cnJlbmN5Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVzZXJ2ZWRDb25jdXJyZW5jeSxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAzMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc2VydmVkQ29uY3VycmVuY3knLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucmVzZXJ2ZWRDb25jdXJyZW5jeSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDb25jdXJyZW5jeUNvbmZpZ1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkNvbmN1cnJlbmN5Q29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDb25jdXJyZW5jeUNvbmZpZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkNvbmN1cnJlbmN5Q29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NvbmN1cnJlbmN5Q29uZmlnUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDb25jdXJyZW5jeUNvbmZpZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdGdW5jdGlvbk5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSksXG4gICAgICAnUmVzZXJ2ZWRDb25jdXJyZW5jeSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzZXJ2ZWRDb25jdXJyZW5jeSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6RkMzOjpDb25jdXJyZW5jeUNvbmZpZ2AuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYENvbmN1cnJlbmN5Q29uZmlnYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYzMtY29uY3VycmVuY3ljb25maWdcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0NvbmN1cnJlbmN5Q29uZmlnIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpGQzM6OkNvbmN1cnJlbmN5Q29uZmlnXCI7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmdW5jdGlvbk5hbWU6IEZ1bmN0aW9uIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGZ1bmN0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc2VydmVkQ29uY3VycmVuY3k6IFRvIFJFU0VSVkUgY29uY3VycmVuY3ksIEZVTkNUSU9OUyBSRVNFUlZFIGEgcG9ydGlvbiBPRiBBQ0NPVU5UIGNvbmN1cnJlbmN5IHRoYXQgY2Fubm90IGJlIHVzZWQgYnkgb3RoZXIgZnVuY3Rpb25zLiBSZXNlcnZlZCBjb25jdXJyZW5jeSBpbmNsdWRlcyB0aGUgdG90YWwgY29uY3VycmVuY3kgb2YgcmVzZXJ2ZWQgaW5zdGFuY2VzIGFuZCBpbnN0YW5jZXMgYnkgdm9sdW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNlcnZlZENvbmN1cnJlbmN5OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ29uY3VycmVuY3lDb25maWdQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0NvbmN1cnJlbmN5Q29uZmlnLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5mdW5jdGlvbk5hbWUgPSBwcm9wcy5mdW5jdGlvbk5hbWU7XG4gICAgICAgIHRoaXMucmVzZXJ2ZWRDb25jdXJyZW5jeSA9IHByb3BzLnJlc2VydmVkQ29uY3VycmVuY3k7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiB0aGlzLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHJlc2VydmVkQ29uY3VycmVuY3k6IHRoaXMucmVzZXJ2ZWRDb25jdXJyZW5jeSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ29uY3VycmVuY3lDb25maWdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NDdXN0b21Eb21haW5gLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMzLWN1c3RvbWRvbWFpblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0N1c3RvbURvbWFpblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRoQ29uZmlnOiBQZXJtaXNzaW9uIGF1dGhlbnRpY2F0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0aENvbmZpZzogUm9zQ3VzdG9tRG9tYWluLkF1dGhDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lOiBEb21haW4gbmFtZS4gRmlsbCBpbiB0aGUgY3VzdG9tIGRvbWFpbiBuYW1lIHRoYXQgaGFzIGJlZW4gZmlsZWQgaW4gQWxpIGNsb3VkIG9yIGFjY2VzcyB0byB0aGUgcmVjb3JkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRvbWFpbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm90b2NvbDogUHJvdG9jb2wgdHlwZXMgc3VwcG9ydGVkIGJ5IHRoZSBkb21haW4gbmFtZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gSFRUUDogT25seSBIVFRQIHByb3RvY29sIGlzIHN1cHBvcnRlZC4gXG4gICAgICogLSBIVFRQUzogSFRUUFMgb25seSBpcyBzdXBwb3J0ZWQuIFxuICAgICAqIC0gSFRUUCxIVFRQUzogU3VwcG9ydHMgSFRUUCBhbmQgSFRUUFMgcHJvdG9jb2xzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb3RvY29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VydENvbmZpZzogSFRUUFMgY2VydGlmaWNhdGUgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VydENvbmZpZz86IFJvc0N1c3RvbURvbWFpbi5DZXJ0Q29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVDb25maWc6IFJvdXRpbmcgdGFibGU6IHBhdGggdG8gZnVuY3Rpb24gbWFwcGluZ3doZW4gYSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBhIGN1c3RvbSBkb21haW4gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlQ29uZmlnPzogUm9zQ3VzdG9tRG9tYWluLlJvdXRlQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGxzQ29uZmlnOiBUTFMgY29uZmlnLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRsc0NvbmZpZz86IFJvc0N1c3RvbURvbWFpbi5UbHNDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3YWZDb25maWc6IFdlYiBhcHBsaWNhdGlvbiBmaXJld2FsbCBjb25maWd1cmF0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdhZkNvbmZpZz86IFJvc0N1c3RvbURvbWFpbi5XYWZDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDdXN0b21Eb21haW5Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tRG9tYWluUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ3VzdG9tRG9tYWluUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZXJ0Q29uZmlnJywgUm9zQ3VzdG9tRG9tYWluX0NlcnRDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jZXJ0Q29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkb21haW5OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZG9tYWluTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGxzQ29uZmlnJywgUm9zQ3VzdG9tRG9tYWluX1Rsc0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRsc0NvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVDb25maWcnLCBSb3NDdXN0b21Eb21haW5fUm91dGVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5yb3V0ZUNvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXV0aENvbmZpZycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hdXRoQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRoQ29uZmlnJywgUm9zQ3VzdG9tRG9tYWluX0F1dGhDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5hdXRoQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90b2NvbCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcm90b2NvbCkpO1xuICAgIGlmKHByb3BlcnRpZXMucHJvdG9jb2wgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnByb3RvY29sKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90b2NvbCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByb3RvY29sLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkhUVFBcIixcIkhUVFBTXCIsXCJIVFRQLEhUVFBTXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvdG9jb2wnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvdG9jb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dhZkNvbmZpZycsIFJvc0N1c3RvbURvbWFpbl9XYWZDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy53YWZDb25maWcpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ3VzdG9tRG9tYWluUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6Q3VzdG9tRG9tYWluYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDdXN0b21Eb21haW5Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpDdXN0b21Eb21haW5gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ3VzdG9tRG9tYWluUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDdXN0b21Eb21haW5Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQXV0aENvbmZpZyc6IHJvc0N1c3RvbURvbWFpbkF1dGhDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hdXRoQ29uZmlnKSxcbiAgICAgICdEb21haW5OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kb21haW5OYW1lKSxcbiAgICAgICdQcm90b2NvbCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvdG9jb2wpLFxuICAgICAgJ0NlcnRDb25maWcnOiByb3NDdXN0b21Eb21haW5DZXJ0Q29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VydENvbmZpZyksXG4gICAgICAnUm91dGVDb25maWcnOiByb3NDdXN0b21Eb21haW5Sb3V0ZUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvdXRlQ29uZmlnKSxcbiAgICAgICdUbHNDb25maWcnOiByb3NDdXN0b21Eb21haW5UbHNDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50bHNDb25maWcpLFxuICAgICAgJ1dhZkNvbmZpZyc6IHJvc0N1c3RvbURvbWFpbldhZkNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndhZkNvbmZpZyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6RkMzOjpDdXN0b21Eb21haW5gLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBDdXN0b21Eb21haW5gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjMy1jdXN0b21kb21haW5cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0N1c3RvbURvbWFpbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RkMzOjpDdXN0b21Eb21haW5cIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRG9tYWluTmFtZTogVGhlIGRvbWFpbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEb21haW5OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRoQ29uZmlnOiBQZXJtaXNzaW9uIGF1dGhlbnRpY2F0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGF1dGhDb25maWc6IFJvc0N1c3RvbURvbWFpbi5BdXRoQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZG9tYWluTmFtZTogRG9tYWluIG5hbWUuIEZpbGwgaW4gdGhlIGN1c3RvbSBkb21haW4gbmFtZSB0aGF0IGhhcyBiZWVuIGZpbGVkIGluIEFsaSBjbG91ZCBvciBhY2Nlc3MgdG8gdGhlIHJlY29yZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZG9tYWluTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb3RvY29sOiBQcm90b2NvbCB0eXBlcyBzdXBwb3J0ZWQgYnkgdGhlIGRvbWFpbiBuYW1lLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBIVFRQOiBPbmx5IEhUVFAgcHJvdG9jb2wgaXMgc3VwcG9ydGVkLiBcbiAgICAgKiAtIEhUVFBTOiBIVFRQUyBvbmx5IGlzIHN1cHBvcnRlZC4gXG4gICAgICogLSBIVFRQLEhUVFBTOiBTdXBwb3J0cyBIVFRQIGFuZCBIVFRQUyBwcm90b2NvbHMuXG4gICAgICovXG4gICAgcHVibGljIHByb3RvY29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VydENvbmZpZzogSFRUUFMgY2VydGlmaWNhdGUgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGNlcnRDb25maWc6IFJvc0N1c3RvbURvbWFpbi5DZXJ0Q29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVDb25maWc6IFJvdXRpbmcgdGFibGU6IHBhdGggdG8gZnVuY3Rpb24gbWFwcGluZ3doZW4gYSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBhIGN1c3RvbSBkb21haW4gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByb3V0ZUNvbmZpZzogUm9zQ3VzdG9tRG9tYWluLlJvdXRlQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGxzQ29uZmlnOiBUTFMgY29uZmlnLlxuICAgICAqL1xuICAgIHB1YmxpYyB0bHNDb25maWc6IFJvc0N1c3RvbURvbWFpbi5UbHNDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3YWZDb25maWc6IFdlYiBhcHBsaWNhdGlvbiBmaXJld2FsbCBjb25maWd1cmF0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyB3YWZDb25maWc6IFJvc0N1c3RvbURvbWFpbi5XYWZDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDdXN0b21Eb21haW5Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0N1c3RvbURvbWFpbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRG9tYWluTmFtZSA9IHRoaXMuZ2V0QXR0KCdEb21haW5OYW1lJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmF1dGhDb25maWcgPSBwcm9wcy5hdXRoQ29uZmlnO1xuICAgICAgICB0aGlzLmRvbWFpbk5hbWUgPSBwcm9wcy5kb21haW5OYW1lO1xuICAgICAgICB0aGlzLnByb3RvY29sID0gcHJvcHMucHJvdG9jb2w7XG4gICAgICAgIHRoaXMuY2VydENvbmZpZyA9IHByb3BzLmNlcnRDb25maWc7XG4gICAgICAgIHRoaXMucm91dGVDb25maWcgPSBwcm9wcy5yb3V0ZUNvbmZpZztcbiAgICAgICAgdGhpcy50bHNDb25maWcgPSBwcm9wcy50bHNDb25maWc7XG4gICAgICAgIHRoaXMud2FmQ29uZmlnID0gcHJvcHMud2FmQ29uZmlnO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF1dGhDb25maWc6IHRoaXMuYXV0aENvbmZpZyxcbiAgICAgICAgICAgIGRvbWFpbk5hbWU6IHRoaXMuZG9tYWluTmFtZSxcbiAgICAgICAgICAgIHByb3RvY29sOiB0aGlzLnByb3RvY29sLFxuICAgICAgICAgICAgY2VydENvbmZpZzogdGhpcy5jZXJ0Q29uZmlnLFxuICAgICAgICAgICAgcm91dGVDb25maWc6IHRoaXMucm91dGVDb25maWcsXG4gICAgICAgICAgICB0bHNDb25maWc6IHRoaXMudGxzQ29uZmlnLFxuICAgICAgICAgICAgd2FmQ29uZmlnOiB0aGlzLndhZkNvbmZpZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ3VzdG9tRG9tYWluUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQ3VzdG9tRG9tYWluIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBdXRoQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGF1dGhJbmZvOiBBdXRoZW50aWNhdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGF1dGhJbmZvPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGF1dGhUeXBlOiBBdXRoZW50aWNhdGlvbiB0eXBlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYXV0aFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEF1dGhDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQXV0aENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbURvbWFpbl9BdXRoQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRoSW5mbycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hdXRoSW5mbykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXV0aFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYXV0aFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmF1dGhUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5hdXRoVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXV0aFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5hdXRoVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJhbm9ueW1vdXNcIixcImZ1bmN0aW9uXCIsXCJqd3RcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRoVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hdXRoVHlwZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJBdXRoQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6Q3VzdG9tRG9tYWluLkF1dGhDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEF1dGhDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpDdXN0b21Eb21haW4uQXV0aENvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDdXN0b21Eb21haW5BdXRoQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0N1c3RvbURvbWFpbl9BdXRoQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQXV0aEluZm8nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmF1dGhJbmZvKSxcbiAgICAgICdBdXRoVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXV0aFR5cGUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQ3VzdG9tRG9tYWluIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBDZXJ0Q29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByaXZhdGVLZXk6IFByaXZhdGUga2V5IGluIFBFTSBmb3JtYXQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcml2YXRlS2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY2VydE5hbWU6IENlcnRpZmljYXRlIG5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjZXJ0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNlcnRpZmljYXRlOiBDZXJ0aWZpY2F0ZXMgaW4gUEVNIGZvcm1hdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNlcnRpZmljYXRlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDZXJ0Q29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENlcnRDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDdXN0b21Eb21haW5fQ2VydENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpdmF0ZUtleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcml2YXRlS2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcml2YXRlS2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByaXZhdGVLZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlcnROYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNlcnROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZXJ0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jZXJ0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VydGlmaWNhdGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2VydGlmaWNhdGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlcnRpZmljYXRlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNlcnRpZmljYXRlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNlcnRDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpDdXN0b21Eb21haW4uQ2VydENvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ2VydENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkN1c3RvbURvbWFpbi5DZXJ0Q29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbURvbWFpbkNlcnRDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ3VzdG9tRG9tYWluX0NlcnRDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQcml2YXRlS2V5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcml2YXRlS2V5KSxcbiAgICAgICdDZXJ0TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VydE5hbWUpLFxuICAgICAgJ0NlcnRpZmljYXRlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZXJ0aWZpY2F0ZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NDdXN0b21Eb21haW4ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEVxdWFsUnVsZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVwbGFjZW1lbnQ6IFJlcGxhY2VtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVwbGFjZW1lbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXRjaDogTWF0Y2guXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtYXRjaDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRXF1YWxSdWxlc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBFcXVhbFJ1bGVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ3VzdG9tRG9tYWluX0VxdWFsUnVsZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcGxhY2VtZW50Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlcGxhY2VtZW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBsYWNlbWVudCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXBsYWNlbWVudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF0Y2gnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubWF0Y2gpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21hdGNoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1hdGNoKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkVxdWFsUnVsZXNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpDdXN0b21Eb21haW4uRXF1YWxSdWxlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXF1YWxSdWxlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkN1c3RvbURvbWFpbi5FcXVhbFJ1bGVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbURvbWFpbkVxdWFsUnVsZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ3VzdG9tRG9tYWluX0VxdWFsUnVsZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSZXBsYWNlbWVudCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVwbGFjZW1lbnQpLFxuICAgICAgJ01hdGNoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXRjaCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NDdXN0b21Eb21haW4ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlZ2V4UnVsZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVwbGFjZW1lbnQ6IFJlcGxhY2VtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVwbGFjZW1lbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXRjaDogTWF0Y2guXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtYXRjaDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVnZXhSdWxlc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWdleFJ1bGVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ3VzdG9tRG9tYWluX1JlZ2V4UnVsZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcGxhY2VtZW50Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlcGxhY2VtZW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBsYWNlbWVudCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXBsYWNlbWVudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF0Y2gnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubWF0Y2gpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21hdGNoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1hdGNoKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJlZ2V4UnVsZXNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpDdXN0b21Eb21haW4uUmVnZXhSdWxlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVnZXhSdWxlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkN1c3RvbURvbWFpbi5SZWdleFJ1bGVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbURvbWFpblJlZ2V4UnVsZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ3VzdG9tRG9tYWluX1JlZ2V4UnVsZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSZXBsYWNlbWVudCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVwbGFjZW1lbnQpLFxuICAgICAgJ01hdGNoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXRjaCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NDdXN0b21Eb21haW4ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJld3JpdGVDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgd2lsZGNhcmRSdWxlczogV2lsZGNhcmQgbWF0Y2hpbmcgcnVsZXMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB3aWxkY2FyZFJ1bGVzPzogQXJyYXk8Um9zQ3VzdG9tRG9tYWluLldpbGRjYXJkUnVsZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVnZXhSdWxlczogUmVndWxhciBtYXRjaGluZyBydWxlcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlZ2V4UnVsZXM/OiBBcnJheTxSb3NDdXN0b21Eb21haW4uUmVnZXhSdWxlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBlcXVhbFJ1bGVzOiBFeGFjdCBtYXRjaGluZyBydWxlcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVxdWFsUnVsZXM/OiBBcnJheTxSb3NDdXN0b21Eb21haW4uRXF1YWxSdWxlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJld3JpdGVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmV3cml0ZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbURvbWFpbl9SZXdyaXRlQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy53aWxkY2FyZFJ1bGVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMud2lsZGNhcmRSdWxlcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLndpbGRjYXJkUnVsZXMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3aWxkY2FyZFJ1bGVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLndpbGRjYXJkUnVsZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2lsZGNhcmRSdWxlcycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0N1c3RvbURvbWFpbl9XaWxkY2FyZFJ1bGVzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLndpbGRjYXJkUnVsZXMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZ2V4UnVsZXMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5yZWdleFJ1bGVzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMucmVnZXhSdWxlcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZ2V4UnVsZXMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVnZXhSdWxlcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdleFJ1bGVzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQ3VzdG9tRG9tYWluX1JlZ2V4UnVsZXNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMucmVnZXhSdWxlcykpO1xuICAgIGlmKHByb3BlcnRpZXMuZXF1YWxSdWxlcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmVxdWFsUnVsZXMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5lcXVhbFJ1bGVzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXF1YWxSdWxlcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5lcXVhbFJ1bGVzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VxdWFsUnVsZXMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NDdXN0b21Eb21haW5fRXF1YWxSdWxlc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5lcXVhbFJ1bGVzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJld3JpdGVDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpDdXN0b21Eb21haW4uUmV3cml0ZUNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmV3cml0ZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkN1c3RvbURvbWFpbi5SZXdyaXRlQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbURvbWFpblJld3JpdGVDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ3VzdG9tRG9tYWluX1Jld3JpdGVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdXaWxkY2FyZFJ1bGVzJzogcm9zLmxpc3RNYXBwZXIocm9zQ3VzdG9tRG9tYWluV2lsZGNhcmRSdWxlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy53aWxkY2FyZFJ1bGVzKSxcbiAgICAgICdSZWdleFJ1bGVzJzogcm9zLmxpc3RNYXBwZXIocm9zQ3VzdG9tRG9tYWluUmVnZXhSdWxlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yZWdleFJ1bGVzKSxcbiAgICAgICdFcXVhbFJ1bGVzJzogcm9zLmxpc3RNYXBwZXIocm9zQ3VzdG9tRG9tYWluRXF1YWxSdWxlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5lcXVhbFJ1bGVzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0N1c3RvbURvbWFpbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm91dGVDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcm91dGVzOiBQYXRoQ29uZmlnIEFycmF5XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByb3V0ZXM6IEFycmF5PFJvc0N1c3RvbURvbWFpbi5Sb3V0ZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3V0ZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3V0ZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbURvbWFpbl9Sb3V0ZUNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJvdXRlcykpO1xuICAgIGlmKHByb3BlcnRpZXMucm91dGVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMucm91dGVzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMucm91dGVzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJvdXRlcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZXMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NDdXN0b21Eb21haW5fUm91dGVzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnJvdXRlcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3V0ZUNvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkN1c3RvbURvbWFpbi5Sb3V0ZUNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm91dGVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpDdXN0b21Eb21haW4uUm91dGVDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ3VzdG9tRG9tYWluUm91dGVDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ3VzdG9tRG9tYWluX1JvdXRlQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUm91dGVzJzogcm9zLmxpc3RNYXBwZXIocm9zQ3VzdG9tRG9tYWluUm91dGVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnJvdXRlcyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NDdXN0b21Eb21haW4ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvdXRlc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXRoOiBIVFRQIHJlcXVlc3QgcGF0aCB3aGVuIGEgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggYSBjdXN0b20gZG9tYWluIG5hbWUsIGZvciBleGFtcGxlOiBcIlxcL2xvZ2luXFwvKlwiXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwYXRoOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBQYXRoIHRvIHRoZSBmdW5jdGlvbiwgZm9yIGV4YW1wbGU6IFwibG9naW5cIlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcXVhbGlmaWVyOiBTZXJ2aWNlIHZlcnNpb24gb3IgYWxpYXNcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHF1YWxpZmllcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJld3JpdGVDb25maWc6IFJld3JpdGUgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJld3JpdGVDb25maWc/OiBSb3NDdXN0b21Eb21haW4uUmV3cml0ZUNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1ldGhvZHM6IEhUVFAgcmVxdWVzdCBtZXRob2RzLiBWYWxpZCB2YWx1ZXM6IEhFQUQsIEdFVCwgUE9TVCwgUFVULCBERUxFVEUsIFBBVENILCBPUFRJT05TXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtZXRob2RzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvdXRlc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3V0ZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDdXN0b21Eb21haW5fUm91dGVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXRoJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGF0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmV3cml0ZUNvbmZpZycsIFJvc0N1c3RvbURvbWFpbl9SZXdyaXRlQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucmV3cml0ZUNvbmZpZykpO1xuICAgIGlmKHByb3BlcnRpZXMubWV0aG9kcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm1ldGhvZHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5tZXRob2RzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWV0aG9kcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tZXRob2RzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWV0aG9kcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMubWV0aG9kcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3V0ZXNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpDdXN0b21Eb21haW4uUm91dGVzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3V0ZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpDdXN0b21Eb21haW4uUm91dGVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbURvbWFpblJvdXRlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NDdXN0b21Eb21haW5fUm91dGVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUGF0aCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGF0aCksXG4gICAgICAnRnVuY3Rpb25OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mdW5jdGlvbk5hbWUpLFxuICAgICAgJ1F1YWxpZmllcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucXVhbGlmaWVyKSxcbiAgICAgICdSZXdyaXRlQ29uZmlnJzogcm9zQ3VzdG9tRG9tYWluUmV3cml0ZUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJld3JpdGVDb25maWcpLFxuICAgICAgJ01ldGhvZHMnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5tZXRob2RzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0N1c3RvbURvbWFpbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGxzQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1pblZlcnNpb246IE1pbmltdW0gc3VwcG9ydGVkIFRMUyB2ZXJzaW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWluVmVyc2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1heFZlcnNpb246IE1heGltdW0gc3VwcG9ydGVkIFRMUyB2ZXJzaW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4VmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjaXBoZXJTdWl0ZXM6IFRMUyBjaXBoZXIgc3VpdGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY2lwaGVyU3VpdGVzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGxzQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRsc0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbURvbWFpbl9UbHNDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21pblZlcnNpb24nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubWluVmVyc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWluVmVyc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5taW5WZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhWZXJzaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1heFZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NpcGhlclN1aXRlcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jaXBoZXJTdWl0ZXMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNpcGhlclN1aXRlcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmNpcGhlclN1aXRlcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmNpcGhlclN1aXRlcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NpcGhlclN1aXRlcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jaXBoZXJTdWl0ZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2lwaGVyU3VpdGVzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5jaXBoZXJTdWl0ZXMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGxzQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6Q3VzdG9tRG9tYWluLlRsc0NvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGxzQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6Q3VzdG9tRG9tYWluLlRsc0NvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDdXN0b21Eb21haW5UbHNDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ3VzdG9tRG9tYWluX1Rsc0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ01pblZlcnNpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1pblZlcnNpb24pLFxuICAgICAgJ01heFZlcnNpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heFZlcnNpb24pLFxuICAgICAgJ0NpcGhlclN1aXRlcyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmNpcGhlclN1aXRlcyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NDdXN0b21Eb21haW4ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFdhZkNvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBlbmFibGVXYWY6IFdoZXRoZXIgdG8gZW5hYmxlIFdBRi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVuYWJsZVdhZj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBXYWZDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgV2FmQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ3VzdG9tRG9tYWluX1dhZkNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlV2FmJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVXYWYpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiV2FmQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6Q3VzdG9tRG9tYWluLldhZkNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgV2FmQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6Q3VzdG9tRG9tYWluLldhZkNvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDdXN0b21Eb21haW5XYWZDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ3VzdG9tRG9tYWluX1dhZkNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0VuYWJsZVdBRic6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZVdhZiksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NDdXN0b21Eb21haW4ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFdpbGRjYXJkUnVsZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVwbGFjZW1lbnQ6IFJlcGxhY2VtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVwbGFjZW1lbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXRjaDogTWF0Y2guXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtYXRjaDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgV2lsZGNhcmRSdWxlc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBXaWxkY2FyZFJ1bGVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ3VzdG9tRG9tYWluX1dpbGRjYXJkUnVsZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcGxhY2VtZW50Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlcGxhY2VtZW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBsYWNlbWVudCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXBsYWNlbWVudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF0Y2gnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubWF0Y2gpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21hdGNoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1hdGNoKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIldpbGRjYXJkUnVsZXNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpDdXN0b21Eb21haW4uV2lsZGNhcmRSdWxlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgV2lsZGNhcmRSdWxlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkN1c3RvbURvbWFpbi5XaWxkY2FyZFJ1bGVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbURvbWFpbldpbGRjYXJkUnVsZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ3VzdG9tRG9tYWluX1dpbGRjYXJkUnVsZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSZXBsYWNlbWVudCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVwbGFjZW1lbnQpLFxuICAgICAgJ01hdGNoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXRjaCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NGdW5jdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYzMtZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NGdW5jdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmdW5jdGlvbk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBmdW5jdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBoYW5kbGVyOiBUaGUgaGFuZGxlciBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGFuZGxlcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bnRpbWU6IFRoZSBwcm9ncmFtbWluZyBsYW5ndWFnZSBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVudGltZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvZGU6IEZ1bmN0aW9uIGNvZGUgWklQIHBhY2thZ2UuIENob29zZSBvbmUgb2YgQ29kZSBhbmQgQ3VzdG9tQ29udGFpbmVyQ29uZmlnLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvZGU/OiBSb3NGdW5jdGlvbi5Db2RlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY3B1OiBUaGUgQ1BVIHNpemUgb2YgdGhlIGZ1bmN0aW9uIGluIHZDUFUgYXMgYSBtdWx0aXBsZSBvZiAwLjA1IHZDUFUuIFRoZSBtaW5pbXVtIHZhbHVlIGlzIDAuMDUgYW5kIHRoZSBtYXhpbXVtIHZhbHVlIGlzIDE2LiBBdCB0aGUgc2FtZSB0aW1lLCB0aGUgcmF0aW8gb2YgY3B1IHRvIG1lbW9yeVNpemUgKGluIEdCKSBzaG91bGQgYmUgYmV0d2VlbiAxOjEgYW5kIDE6NC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjcHU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY3VzdG9tQ29udGFpbmVyQ29uZmlnOiBDdXN0b20gY29udGFpbmVyIGNvbmZpZ3VyYXRpb24uIENob29zZSBvbmUgb2YgQ29kZSBhbmQgQ3VzdG9tQ29udGFpbmVyQ29uZmlnLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGN1c3RvbUNvbnRhaW5lckNvbmZpZz86IFJvc0Z1bmN0aW9uLkN1c3RvbUNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbURuczogQ3VzdG9tIEROUyBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGN1c3RvbURucz86IFJvc0Z1bmN0aW9uLkN1c3RvbURuc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbVJ1bnRpbWVDb25maWc6IEN1c3RvbSBydW50aW1lIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3VzdG9tUnVudGltZUNvbmZpZz86IFJvc0Z1bmN0aW9uLkN1c3RvbVJ1bnRpbWVDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRnVuY3Rpb24gZGVzY3JpcHRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlza1NpemU6IFRoZSBkaXNrIHNpemUgb2YgdGhlIGZ1bmN0aW9uLCBpbiBNQi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNrU2l6ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbnZpcm9ubWVudFZhcmlhYmxlczogVGhlIGVudmlyb25tZW50IHZhcmlhYmxlcyBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW52aXJvbm1lbnRWYXJpYWJsZXM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3B1Q29uZmlnOiBUaGUgR1BVIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdwdUNvbmZpZz86IFJvc0Z1bmN0aW9uLkdwdUNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlQ29uY3VycmVuY3k6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBjb25jdXJyZW50IGluc3RhbmNlcyBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VDb25jdXJyZW5jeT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUxpZmVjeWNsZUNvbmZpZzogVGhlIGluc3RhbmNlIGxpZmVjeWNsZSBjb25maWd1cmF0aW9uIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUxpZmVjeWNsZUNvbmZpZz86IFJvc0Z1bmN0aW9uLkluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRBY2Nlc3M6IFdoZXRoZXIgdGhlIGZ1bmN0aW9uIGNhbiBhY2Nlc3MgdGhlIEludGVybmV0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0QWNjZXNzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsYXllcnM6IFRoZSBsYXllcnMgb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxheWVycz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nQ29uZmlnOiBUaGUgbG9nIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ0NvbmZpZz86IFJvc0Z1bmN0aW9uLkxvZ0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1lbW9yeVNpemU6IFRoZSBtZW1vcnkgc2l6ZSBvZiB0aGUgZnVuY3Rpb24sIGluIE1CLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1lbW9yeVNpemU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFzQ29uZmlnOiBUaGUgTkFTIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hc0NvbmZpZz86IFJvc0Z1bmN0aW9uLk5hc0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9zc01vdW50Q29uZmlnOiBUaGUgT1NTIG1vdW50IGNvbmZpZ3VyYXRpb24gb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9zc01vdW50Q29uZmlnPzogUm9zRnVuY3Rpb24uT3NzTW91bnRDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb2xlOiBUaGUgdXNlciBpcyBhdXRob3JpemVkIHRvIHRoZSBSQU0gcm9sZSBvZiBGdW5jdGlvbiBDb21wdXRlLiBBZnRlciBzZXR0aW5nLCBGdW5jdGlvbiBDb21wdXRlIHdpbGwgYXNzdW1lIHRoZSByb2xlIGFuZCBnZW5lcmF0ZSB0ZW1wb3JhcnkgYWNjZXNzIGNyZWRlbnRpYWxzLiBUaGUgdGVtcG9yYXJ5IGFjY2VzcyBjcmVkZW50aWFscyBvZiB0aGlzIHJvbGUgY2FuIGJlIHVzZWQgaW4gZnVuY3Rpb25zIHRvIGFjY2VzcyBzcGVjaWZpZWQgQWxpYmFiYSBDbG91ZCBzZXJ2aWNlcywgc3VjaCBhcyBPU1MgYW5kIE9UUy5cbiAgICAgKi9cbiAgICByZWFkb25seSByb2xlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSB0aW1lb3V0IG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aW1lb3V0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYWNpbmdDb25maWc6IFRoZSB0cmFjaW5nIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYWNpbmdDb25maWc/OiBSb3NGdW5jdGlvbi5UcmFjaW5nQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjQ29uZmlnOiBUaGUgVlBDIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0NvbmZpZz86IFJvc0Z1bmN0aW9uLlZwY0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0Z1bmN0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0Z1bmN0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1lbW9yeVNpemUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1lbW9yeVNpemUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21lbW9yeVNpemUnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tZW1vcnlTaXplLFxuICAgICAgICAgICAgbWluOiAxMjgsXG4gICAgICAgICAgICBtYXg6IDY1NTM2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZW1vcnlTaXplJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1lbW9yeVNpemUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZGVzY3JpcHRpb24pIHx8ICh0eXBlb2YgcHJvcGVydGllcy5kZXNjcmlwdGlvbikgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyNTYsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFjaW5nQ29uZmlnJywgUm9zRnVuY3Rpb25fVHJhY2luZ0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRyYWNpbmdDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0NvbmZpZycsIFJvc0Z1bmN0aW9uX1ZwY0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZwY0NvbmZpZykpO1xuICAgIGlmKHByb3BlcnRpZXMudGltZW91dCAmJiAodHlwZW9mIHByb3BlcnRpZXMudGltZW91dCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRpbWVvdXQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDg2NDAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlTGlmZWN5Y2xlQ29uZmlnJywgUm9zRnVuY3Rpb25fSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUxpZmVjeWNsZUNvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGFuZGxlcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5oYW5kbGVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoYW5kbGVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhhbmRsZXIpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNwdSAmJiAodHlwZW9mIHByb3BlcnRpZXMuY3B1KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjcHUnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jcHUsXG4gICAgICAgICAgICBtaW46IDAuMDUsXG4gICAgICAgICAgICBtYXg6IDE2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjcHUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuY3B1KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjdXN0b21Db250YWluZXJDb25maWcnLCBSb3NGdW5jdGlvbl9DdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jdXN0b21Db250YWluZXJDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvZGUnLCBSb3NGdW5jdGlvbl9Db2RlUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm9sZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb2xlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldEFjY2VzcycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuaW50ZXJuZXRBY2Nlc3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bnRpbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucnVudGltZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVudGltZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ydW50aW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbnZpcm9ubWVudFZhcmlhYmxlcycsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuZW52aXJvbm1lbnRWYXJpYWJsZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2N1c3RvbVJ1bnRpbWVDb25maWcnLCBSb3NGdW5jdGlvbl9DdXN0b21SdW50aW1lQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY3VzdG9tUnVudGltZUNvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3B1Q29uZmlnJywgUm9zRnVuY3Rpb25fR3B1Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3B1Q29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvc3NNb3VudENvbmZpZycsIFJvc0Z1bmN0aW9uX09zc01vdW50Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMub3NzTW91bnRDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc2tTaXplJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmRpc2tTaXplKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjdXN0b21EbnMnLCBSb3NGdW5jdGlvbl9DdXN0b21EbnNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jdXN0b21EbnMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluc3RhbmNlQ29uY3VycmVuY3kgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlQ29uY3VycmVuY3kpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlQ29uY3VycmVuY3knLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZUNvbmN1cnJlbmN5LFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlQ29uY3VycmVuY3knLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW5zdGFuY2VDb25jdXJyZW5jeSkpO1xuICAgIGlmKHByb3BlcnRpZXMubGF5ZXJzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMubGF5ZXJzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubGF5ZXJzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGF5ZXJzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmxheWVycy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGF5ZXJzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5sYXllcnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hc0NvbmZpZycsIFJvc0Z1bmN0aW9uX05hc0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hc0NvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nQ29uZmlnJywgUm9zRnVuY3Rpb25fTG9nQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubG9nQ29uZmlnKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0Z1bmN0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0Z1bmN0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0Z1bmN0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0Z1bmN0aW9uTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSxcbiAgICAgICdIYW5kbGVyJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oYW5kbGVyKSxcbiAgICAgICdSdW50aW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydW50aW1lKSxcbiAgICAgICdDb2RlJzogcm9zRnVuY3Rpb25Db2RlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29kZSksXG4gICAgICAnQ3B1Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jcHUpLFxuICAgICAgJ0N1c3RvbUNvbnRhaW5lckNvbmZpZyc6IHJvc0Z1bmN0aW9uQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY3VzdG9tQ29udGFpbmVyQ29uZmlnKSxcbiAgICAgICdDdXN0b21EbnMnOiByb3NGdW5jdGlvbkN1c3RvbURuc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmN1c3RvbURucyksXG4gICAgICAnQ3VzdG9tUnVudGltZUNvbmZpZyc6IHJvc0Z1bmN0aW9uQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmN1c3RvbVJ1bnRpbWVDb25maWcpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICAnRGlza1NpemUnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpc2tTaXplKSxcbiAgICAgICdFbnZpcm9ubWVudFZhcmlhYmxlcyc6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmVudmlyb25tZW50VmFyaWFibGVzKSxcbiAgICAgICdHcHVDb25maWcnOiByb3NGdW5jdGlvbkdwdUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdwdUNvbmZpZyksXG4gICAgICAnSW5zdGFuY2VDb25jdXJyZW5jeSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VDb25jdXJyZW5jeSksXG4gICAgICAnSW5zdGFuY2VMaWZlY3ljbGVDb25maWcnOiByb3NGdW5jdGlvbkluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VMaWZlY3ljbGVDb25maWcpLFxuICAgICAgJ0ludGVybmV0QWNjZXNzJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRBY2Nlc3MpLFxuICAgICAgJ0xheWVycyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmxheWVycyksXG4gICAgICAnTG9nQ29uZmlnJzogcm9zRnVuY3Rpb25Mb2dDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dDb25maWcpLFxuICAgICAgJ01lbW9yeVNpemUnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1lbW9yeVNpemUpLFxuICAgICAgJ05hc0NvbmZpZyc6IHJvc0Z1bmN0aW9uTmFzQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFzQ29uZmlnKSxcbiAgICAgICdPc3NNb3VudENvbmZpZyc6IHJvc0Z1bmN0aW9uT3NzTW91bnRDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vc3NNb3VudENvbmZpZyksXG4gICAgICAnUm9sZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucm9sZSksXG4gICAgICAnVGltZW91dCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dCksXG4gICAgICAnVHJhY2luZ0NvbmZpZyc6IHJvc0Z1bmN0aW9uVHJhY2luZ0NvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyYWNpbmdDb25maWcpLFxuICAgICAgJ1ZwY0NvbmZpZyc6IHJvc0Z1bmN0aW9uVnBjQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjQ29uZmlnKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBGdW5jdGlvbiBDb21wdXRlIDMuMCBmdW5jdGlvbi5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgRnVuY3Rpb25gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjMy1mdW5jdGlvblxuICovXG5leHBvcnQgY2xhc3MgUm9zRnVuY3Rpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkZDMzo6RnVuY3Rpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQVJOOiBUaGUgQVJOIGZvciBBTElZVU46OlJPUzo6Q3VzdG9tUmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFybjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBGdW5jdGlvbklkOiBUaGUgZnVuY3Rpb24gSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZ1bmN0aW9uSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRnVuY3Rpb25OYW1lOiBUaGUgZnVuY3Rpb24gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRnVuY3Rpb25OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmdW5jdGlvbk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZnVuY3Rpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaGFuZGxlcjogVGhlIGhhbmRsZXIgb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVudGltZTogVGhlIHByb2dyYW1taW5nIGxhbmd1YWdlIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcnVudGltZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvZGU6IEZ1bmN0aW9uIGNvZGUgWklQIHBhY2thZ2UuIENob29zZSBvbmUgb2YgQ29kZSBhbmQgQ3VzdG9tQ29udGFpbmVyQ29uZmlnLlxuICAgICAqL1xuICAgIHB1YmxpYyBjb2RlOiBSb3NGdW5jdGlvbi5Db2RlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY3B1OiBUaGUgQ1BVIHNpemUgb2YgdGhlIGZ1bmN0aW9uIGluIHZDUFUgYXMgYSBtdWx0aXBsZSBvZiAwLjA1IHZDUFUuIFRoZSBtaW5pbXVtIHZhbHVlIGlzIDAuMDUgYW5kIHRoZSBtYXhpbXVtIHZhbHVlIGlzIDE2LiBBdCB0aGUgc2FtZSB0aW1lLCB0aGUgcmF0aW8gb2YgY3B1IHRvIG1lbW9yeVNpemUgKGluIEdCKSBzaG91bGQgYmUgYmV0d2VlbiAxOjEgYW5kIDE6NC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY3B1OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY3VzdG9tQ29udGFpbmVyQ29uZmlnOiBDdXN0b20gY29udGFpbmVyIGNvbmZpZ3VyYXRpb24uIENob29zZSBvbmUgb2YgQ29kZSBhbmQgQ3VzdG9tQ29udGFpbmVyQ29uZmlnLlxuICAgICAqL1xuICAgIHB1YmxpYyBjdXN0b21Db250YWluZXJDb25maWc6IFJvc0Z1bmN0aW9uLkN1c3RvbUNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbURuczogQ3VzdG9tIEROUyBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBjdXN0b21EbnM6IFJvc0Z1bmN0aW9uLkN1c3RvbURuc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbVJ1bnRpbWVDb25maWc6IEN1c3RvbSBydW50aW1lIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGN1c3RvbVJ1bnRpbWVDb25maWc6IFJvc0Z1bmN0aW9uLkN1c3RvbVJ1bnRpbWVDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRnVuY3Rpb24gZGVzY3JpcHRpb24uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlza1NpemU6IFRoZSBkaXNrIHNpemUgb2YgdGhlIGZ1bmN0aW9uLCBpbiBNQi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlza1NpemU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbnZpcm9ubWVudFZhcmlhYmxlczogVGhlIGVudmlyb25tZW50IHZhcmlhYmxlcyBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIGVudmlyb25tZW50VmFyaWFibGVzOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3B1Q29uZmlnOiBUaGUgR1BVIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBncHVDb25maWc6IFJvc0Z1bmN0aW9uLkdwdUNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlQ29uY3VycmVuY3k6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBjb25jdXJyZW50IGluc3RhbmNlcyBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlQ29uY3VycmVuY3k6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUxpZmVjeWNsZUNvbmZpZzogVGhlIGluc3RhbmNlIGxpZmVjeWNsZSBjb25maWd1cmF0aW9uIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VMaWZlY3ljbGVDb25maWc6IFJvc0Z1bmN0aW9uLkluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRBY2Nlc3M6IFdoZXRoZXIgdGhlIGZ1bmN0aW9uIGNhbiBhY2Nlc3MgdGhlIEludGVybmV0LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcm5ldEFjY2VzczogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsYXllcnM6IFRoZSBsYXllcnMgb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBsYXllcnM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nQ29uZmlnOiBUaGUgbG9nIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dDb25maWc6IFJvc0Z1bmN0aW9uLkxvZ0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1lbW9yeVNpemU6IFRoZSBtZW1vcnkgc2l6ZSBvZiB0aGUgZnVuY3Rpb24sIGluIE1CLlxuICAgICAqL1xuICAgIHB1YmxpYyBtZW1vcnlTaXplOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFzQ29uZmlnOiBUaGUgTkFTIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYXNDb25maWc6IFJvc0Z1bmN0aW9uLk5hc0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9zc01vdW50Q29uZmlnOiBUaGUgT1NTIG1vdW50IGNvbmZpZ3VyYXRpb24gb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBvc3NNb3VudENvbmZpZzogUm9zRnVuY3Rpb24uT3NzTW91bnRDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb2xlOiBUaGUgdXNlciBpcyBhdXRob3JpemVkIHRvIHRoZSBSQU0gcm9sZSBvZiBGdW5jdGlvbiBDb21wdXRlLiBBZnRlciBzZXR0aW5nLCBGdW5jdGlvbiBDb21wdXRlIHdpbGwgYXNzdW1lIHRoZSByb2xlIGFuZCBnZW5lcmF0ZSB0ZW1wb3JhcnkgYWNjZXNzIGNyZWRlbnRpYWxzLiBUaGUgdGVtcG9yYXJ5IGFjY2VzcyBjcmVkZW50aWFscyBvZiB0aGlzIHJvbGUgY2FuIGJlIHVzZWQgaW4gZnVuY3Rpb25zIHRvIGFjY2VzcyBzcGVjaWZpZWQgQWxpYmFiYSBDbG91ZCBzZXJ2aWNlcywgc3VjaCBhcyBPU1MgYW5kIE9UUy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcm9sZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSB0aW1lb3V0IG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGltZW91dDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYWNpbmdDb25maWc6IFRoZSB0cmFjaW5nIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmFjaW5nQ29uZmlnOiBSb3NGdW5jdGlvbi5UcmFjaW5nQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjQ29uZmlnOiBUaGUgVlBDIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyB2cGNDb25maWc6IFJvc0Z1bmN0aW9uLlZwY0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0Z1bmN0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NGdW5jdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQXJuID0gdGhpcy5nZXRBdHQoJ0FSTicpO1xuICAgICAgICB0aGlzLmF0dHJGdW5jdGlvbklkID0gdGhpcy5nZXRBdHQoJ0Z1bmN0aW9uSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyRnVuY3Rpb25OYW1lID0gdGhpcy5nZXRBdHQoJ0Z1bmN0aW9uTmFtZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5mdW5jdGlvbk5hbWUgPSBwcm9wcy5mdW5jdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IHByb3BzLmhhbmRsZXI7XG4gICAgICAgIHRoaXMucnVudGltZSA9IHByb3BzLnJ1bnRpbWU7XG4gICAgICAgIHRoaXMuY29kZSA9IHByb3BzLmNvZGU7XG4gICAgICAgIHRoaXMuY3B1ID0gcHJvcHMuY3B1O1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRhaW5lckNvbmZpZyA9IHByb3BzLmN1c3RvbUNvbnRhaW5lckNvbmZpZztcbiAgICAgICAgdGhpcy5jdXN0b21EbnMgPSBwcm9wcy5jdXN0b21EbnM7XG4gICAgICAgIHRoaXMuY3VzdG9tUnVudGltZUNvbmZpZyA9IHByb3BzLmN1c3RvbVJ1bnRpbWVDb25maWc7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kaXNrU2l6ZSA9IHByb3BzLmRpc2tTaXplO1xuICAgICAgICB0aGlzLmVudmlyb25tZW50VmFyaWFibGVzID0gcHJvcHMuZW52aXJvbm1lbnRWYXJpYWJsZXM7XG4gICAgICAgIHRoaXMuZ3B1Q29uZmlnID0gcHJvcHMuZ3B1Q29uZmlnO1xuICAgICAgICB0aGlzLmluc3RhbmNlQ29uY3VycmVuY3kgPSBwcm9wcy5pbnN0YW5jZUNvbmN1cnJlbmN5O1xuICAgICAgICB0aGlzLmluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnID0gcHJvcHMuaW5zdGFuY2VMaWZlY3ljbGVDb25maWc7XG4gICAgICAgIHRoaXMuaW50ZXJuZXRBY2Nlc3MgPSBwcm9wcy5pbnRlcm5ldEFjY2VzcztcbiAgICAgICAgdGhpcy5sYXllcnMgPSBwcm9wcy5sYXllcnM7XG4gICAgICAgIHRoaXMubG9nQ29uZmlnID0gcHJvcHMubG9nQ29uZmlnO1xuICAgICAgICB0aGlzLm1lbW9yeVNpemUgPSBwcm9wcy5tZW1vcnlTaXplO1xuICAgICAgICB0aGlzLm5hc0NvbmZpZyA9IHByb3BzLm5hc0NvbmZpZztcbiAgICAgICAgdGhpcy5vc3NNb3VudENvbmZpZyA9IHByb3BzLm9zc01vdW50Q29uZmlnO1xuICAgICAgICB0aGlzLnJvbGUgPSBwcm9wcy5yb2xlO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBwcm9wcy50aW1lb3V0O1xuICAgICAgICB0aGlzLnRyYWNpbmdDb25maWcgPSBwcm9wcy50cmFjaW5nQ29uZmlnO1xuICAgICAgICB0aGlzLnZwY0NvbmZpZyA9IHByb3BzLnZwY0NvbmZpZztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHRoaXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5oYW5kbGVyLFxuICAgICAgICAgICAgcnVudGltZTogdGhpcy5ydW50aW1lLFxuICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgICAgICAgY3B1OiB0aGlzLmNwdSxcbiAgICAgICAgICAgIGN1c3RvbUNvbnRhaW5lckNvbmZpZzogdGhpcy5jdXN0b21Db250YWluZXJDb25maWcsXG4gICAgICAgICAgICBjdXN0b21EbnM6IHRoaXMuY3VzdG9tRG5zLFxuICAgICAgICAgICAgY3VzdG9tUnVudGltZUNvbmZpZzogdGhpcy5jdXN0b21SdW50aW1lQ29uZmlnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkaXNrU2l6ZTogdGhpcy5kaXNrU2l6ZSxcbiAgICAgICAgICAgIGVudmlyb25tZW50VmFyaWFibGVzOiB0aGlzLmVudmlyb25tZW50VmFyaWFibGVzLFxuICAgICAgICAgICAgZ3B1Q29uZmlnOiB0aGlzLmdwdUNvbmZpZyxcbiAgICAgICAgICAgIGluc3RhbmNlQ29uY3VycmVuY3k6IHRoaXMuaW5zdGFuY2VDb25jdXJyZW5jeSxcbiAgICAgICAgICAgIGluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnOiB0aGlzLmluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnLFxuICAgICAgICAgICAgaW50ZXJuZXRBY2Nlc3M6IHRoaXMuaW50ZXJuZXRBY2Nlc3MsXG4gICAgICAgICAgICBsYXllcnM6IHRoaXMubGF5ZXJzLFxuICAgICAgICAgICAgbG9nQ29uZmlnOiB0aGlzLmxvZ0NvbmZpZyxcbiAgICAgICAgICAgIG1lbW9yeVNpemU6IHRoaXMubWVtb3J5U2l6ZSxcbiAgICAgICAgICAgIG5hc0NvbmZpZzogdGhpcy5uYXNDb25maWcsXG4gICAgICAgICAgICBvc3NNb3VudENvbmZpZzogdGhpcy5vc3NNb3VudENvbmZpZyxcbiAgICAgICAgICAgIHJvbGU6IHRoaXMucm9sZSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcbiAgICAgICAgICAgIHRyYWNpbmdDb25maWc6IHRoaXMudHJhY2luZ0NvbmZpZyxcbiAgICAgICAgICAgIHZwY0NvbmZpZzogdGhpcy52cGNDb25maWcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0Z1bmN0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFjY2VsZXJhdGlvbkluZm9Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhdHVzOiBBY2NlbGVyYXRpb24gc3RhdHVzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQWNjZWxlcmF0aW9uSW5mb1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBBY2NlbGVyYXRpb25JbmZvUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fQWNjZWxlcmF0aW9uSW5mb1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdHVzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXR1cykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJBY2NlbGVyYXRpb25JbmZvUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb24uQWNjZWxlcmF0aW9uSW5mb2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQWNjZWxlcmF0aW9uSW5mb1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLkFjY2VsZXJhdGlvbkluZm9gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25BY2NlbGVyYXRpb25JbmZvUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX0FjY2VsZXJhdGlvbkluZm9Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdTdGF0dXMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXR1cyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXV0aENvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB1c2VyTmFtZTogVGhlIHVzZXJuYW1lIHRoYXQgaXMgdXNlZCB0byBsb2cgb24gdG8gdGhlIGltYWdlIHJlcG9zaXRvcnkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB1c2VyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhc3N3b3JkOiBUaGUgcGFzc3dvcmQgb2YgdGhlIHVzZXJuYW1lIHRoYXQgaXMgdXNlZCB0byBsb2cgb24gdG8gdGhlIGltYWdlIHJlcG9zaXRvcnkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwYXNzd29yZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQXV0aENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBBdXRoQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fQXV0aENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlck5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudXNlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnVzZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXNzd29yZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wYXNzd29yZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzc3dvcmQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGFzc3dvcmQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQXV0aENvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLkF1dGhDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEF1dGhDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5BdXRoQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uQXV0aENvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9BdXRoQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVXNlck5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZXJOYW1lKSxcbiAgICAgICdQYXNzd29yZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFzc3dvcmQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENlcnRDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5zZWN1cmU6IFdoZXRoZXIgdG8gc2tpcCBjZXJ0aWZpY2F0ZSB2ZXJpZmljYXRpb24uIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbnNlY3VyZTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByb290Q2FDZXJ0QmFzZTY0OiBUaGUgY2VydGlmaWNhdGUgYXV0aG9yaXR5IChDQSkgY2VydGlmaWNhdGUgb2YgdGhlIGltYWdlIHJlcG9zaXRvcnkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByb290Q2FDZXJ0QmFzZTY0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ2VydENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDZXJ0Q29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fQ2VydENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zZWN1cmUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zZWN1cmUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc2VjdXJlJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5pbnNlY3VyZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm9vdENhQ2VydEJhc2U2NCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb290Q2FDZXJ0QmFzZTY0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNlcnRDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5DZXJ0Q29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDZXJ0Q29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb24uQ2VydENvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkNlcnRDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRnVuY3Rpb25fQ2VydENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0luc2VjdXJlJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zZWN1cmUpLFxuICAgICAgJ1Jvb3RDYUNlcnRCYXNlNjQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvb3RDYUNlcnRCYXNlNjQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvZGVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc291cmNlQ29kZTogKE5vZGUuanMsIFBIUCBhbmQgUHl0aG9uKSBUaGUgc291cmNlIGNvZGUgZm9yIHlvdXIgRkMgZnVuY3Rpb24uIElmIHlvdSBpbmNsdWRlIHRoaXMgcGFyYW1ldGVyIGluIGEgZnVuY3Rpb24gc291cmNlIGlubGluZSwgUk9TIHBsYWNlcyBpdCBpbiBhIGZpbGUgY2FsbGVkIGluZGV4ICh1dGYtOCBlbmNvZGVkKSBhbmQgdGhlbiBjb21wcmVzc2VzIGl0IHRvIGNyZWF0ZSBhIGRlcGxveW1lbnQgcGFja2FnZS4gRm9yIHRoZSBIYW5kbGVyIHByb3BlcnR5LCB0aGUgZmlyc3QgcGFydCBvZiB0aGUgaGFuZGxlciBpZGVudGlmaWVyIG11c3QgYmUgaW5kZXguIEZvciBleGFtcGxlOiBpbmRleC5oYW5kbGVyLlxuICAgICAqIFlvdXIgc291cmNlIGNvZGUgY2FuIGNvbnRhaW4gdXAgdG8gNDA5NiBjaGFyYWN0ZXJzLiBGb3IgSlNPTiwgeW91IG11c3QgdXNlIGJhY2tzbGFzaGVzIHRvIGVzY2FwZSBxdW90ZXMgYW5kIHNwZWNpYWwgY2hhcmFjdGVycywgc3VjaCBhcyBsaW5lIGJyZWFrcy5cbiAgICAgKiBQcmlvcml0eTogWmlwRmlsZSA+IFNvdXJjZUNvZGUgPiBPc3NCdWNrZXROYW1lJk9zc09iamVjdE5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzb3VyY2VDb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHppcEZpbGU6IEZ1bmN0aW9uIGNvZGUgQmFzZSA2NCBlbmNvZGluZyBvZiB0aGUgWklQIHBhY2thZ2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB6aXBGaWxlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNoZWNrc3VtOiBDUkMtNjQgdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIGNvZGUgcGFja2FnZS4gSWYgYSBjaGVja3N1bSBpcyBwcm92aWRlZCwgRnVuY3Rpb24gQ29tcHV0ZSB3aWxsIHZlcmlmeSB3aGV0aGVyIHRoZSBjaGVja3N1bSBvZiB0aGUgY29kZSBwYWNrYWdlIGlzIGNvbnNpc3RlbnQgd2l0aCB0aGUgcHJvdmlkZWQgY2hlY2tzdW0uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjaGVja3N1bT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvc3NPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgT1NTIG9iamVjdCB3aGVyZSB0aGUgY29kZSBwYWNrYWdlIGlzIHN0b3JlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9zc09iamVjdE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3NzQnVja2V0TmFtZTogVGhlIG5hbWUgb2YgdGhlIE9TUyBidWNrZXQgd2hlcmUgdGhlIGNvZGUgcGFja2FnZSBpcyBzdG9yZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvc3NCdWNrZXROYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ29kZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb2RlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fQ29kZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuc291cmNlQ29kZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNvdXJjZUNvZGUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zb3VyY2VDb2RlKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlQ29kZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zb3VyY2VDb2RlLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA0MDk2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VDb2RlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNvdXJjZUNvZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ppcEZpbGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuemlwRmlsZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hlY2tzdW0nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2hlY2tzdW0pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29zc09iamVjdE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3NzT2JqZWN0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3NzQnVja2V0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vc3NCdWNrZXROYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNvZGVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5Db2RlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb2RlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb24uQ29kZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkNvZGVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRnVuY3Rpb25fQ29kZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1NvdXJjZUNvZGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNvdXJjZUNvZGUpLFxuICAgICAgJ1ppcEZpbGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnppcEZpbGUpLFxuICAgICAgJ0NoZWNrc3VtJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jaGVja3N1bSksXG4gICAgICAnT3NzT2JqZWN0TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3NzT2JqZWN0TmFtZSksXG4gICAgICAnT3NzQnVja2V0TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3NzQnVja2V0TmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlZ2lzdHJ5Q29uZmlnOiBUaGUgY29uZmlndXJhdGlvbnMgb2YgdGhlIGltYWdlIHJlcG9zaXRvcnkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZWdpc3RyeUNvbmZpZz86IFJvc0Z1bmN0aW9uLlJlZ2lzdHJ5Q29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVzb2x2ZWRJbWFnZVVyaTogVGhlIGFjdHVhbCBkaWdlc3QgdmVyc2lvbiBvZiB0aGUgZGVwbG95ZWQgaW1hZ2UuIFRoZSBjb2RlIHZlcnNpb24gc3BlY2lmaWVkIGJ5IHRoaXMgZGlnZXN0IGlzIGFjdHVhbGx5IHVzZWQgd2hlbiB0aGUgZnVuY3Rpb24gaXMgc3RhcnRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlc29sdmVkSW1hZ2VVcmk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWNySW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBBQ1IgaW5zdGFuY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhY3JJbnN0YW5jZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGFjY2VsZXJhdGlvbkluZm86IEFjY2VsZXJhdGlvbiBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYWNjZWxlcmF0aW9uSW5mbz86IFJvc0Z1bmN0aW9uLkFjY2VsZXJhdGlvbkluZm9Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBlbnRyeXBvaW50OiBUaGUgZW50cnlwb2ludHMgdG8gcnVuIGluIHRoZSBjb250YWluZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlbnRyeXBvaW50PzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21tYW5kOiBUaGUgY29tbWFuZHMgdG8gcnVuIGluIHRoZSBjb250YWluZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb21tYW5kPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhY2NlbGVyYXRpb25UeXBlOiBXaGV0aGVyIHRvIGVuYWJsZSBtaXJyb3IgYWNjZWxlcmF0aW9uLiBEZWZhdWx0IG1lYW5zIHRvIHR1cm4gb24gbWlycm9yIGFjY2VsZXJhdGlvbiwgYW5kIE5vbmUgbWVhbnMgdG8gdHVybiBvZmYgbWlycm9yIGFjY2VsZXJhdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFjY2VsZXJhdGlvblR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcG9ydDogVGhlIHBvcnQgbnVtYmVyIG9mIHRoZSBjb250YWluZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwb3J0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhlYWx0aENoZWNrQ29uZmlnOiBIZWFsdGggY2hlY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhlYWx0aENoZWNrQ29uZmlnPzogUm9zRnVuY3Rpb24uSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpbWFnZTogVGhlIGltYWdlIGFkZHJlc3MuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbWFnZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEN1c3RvbUNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbl9DdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZ2lzdHJ5Q29uZmlnJywgUm9zRnVuY3Rpb25fUmVnaXN0cnlDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5yZWdpc3RyeUNvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb2x2ZWRJbWFnZVVyaScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXNvbHZlZEltYWdlVXJpKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY3JJbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFjckluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY2VsZXJhdGlvbkluZm8nLCBSb3NGdW5jdGlvbl9BY2NlbGVyYXRpb25JbmZvUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuYWNjZWxlcmF0aW9uSW5mbykpO1xuICAgIGlmKHByb3BlcnRpZXMuZW50cnlwb2ludCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmVudHJ5cG9pbnQpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5lbnRyeXBvaW50KSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW50cnlwb2ludCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5lbnRyeXBvaW50Lmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbnRyeXBvaW50Jywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5lbnRyeXBvaW50KSk7XG4gICAgaWYocHJvcGVydGllcy5jb21tYW5kICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuY29tbWFuZCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmNvbW1hbmQpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tYW5kJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNvbW1hbmQubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbW1hbmQnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmNvbW1hbmQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY2VsZXJhdGlvblR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWNjZWxlcmF0aW9uVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucG9ydCAmJiAodHlwZW9mIHByb3BlcnRpZXMucG9ydCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBvcnQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY1NTM1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hlYWx0aENoZWNrQ29uZmlnJywgUm9zRnVuY3Rpb25fSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5oZWFsdGhDaGVja0NvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW1hZ2UnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW1hZ2UpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb24uQ3VzdG9tQ29udGFpbmVyQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5DdXN0b21Db250YWluZXJDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25DdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRnVuY3Rpb25fQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUmVnaXN0cnlDb25maWcnOiByb3NGdW5jdGlvblJlZ2lzdHJ5Q29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVnaXN0cnlDb25maWcpLFxuICAgICAgJ1Jlc29sdmVkSW1hZ2VVcmknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc29sdmVkSW1hZ2VVcmkpLFxuICAgICAgJ0Fjckluc3RhbmNlSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFjckluc3RhbmNlSWQpLFxuICAgICAgJ0FjY2VsZXJhdGlvbkluZm8nOiByb3NGdW5jdGlvbkFjY2VsZXJhdGlvbkluZm9Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hY2NlbGVyYXRpb25JbmZvKSxcbiAgICAgICdFbnRyeXBvaW50Jzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZW50cnlwb2ludCksXG4gICAgICAnQ29tbWFuZCc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmNvbW1hbmQpLFxuICAgICAgJ0FjY2VsZXJhdGlvblR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFjY2VsZXJhdGlvblR5cGUpLFxuICAgICAgJ1BvcnQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvcnQpLFxuICAgICAgJ0hlYWx0aENoZWNrQ29uZmlnJzogcm9zRnVuY3Rpb25IZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhlYWx0aENoZWNrQ29uZmlnKSxcbiAgICAgICdJbWFnZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW1hZ2UpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEN1c3RvbURuc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZWFyY2hlczogTGlzdCBvZiBETlMgc2VhcmNoIGRvbWFpbnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZWFyY2hlcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZG5zT3B0aW9uczogTGlzdCBvZiBETlMgcmVzb2x1dGlvbiBjb25maWd1cmF0aW9ucyBpbiB0aGUgcmVzb2x2LmNvbmYgZmlsZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRuc09wdGlvbnM/OiBBcnJheTxSb3NGdW5jdGlvbi5EbnNPcHRpb25zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hbWVTZXJ2ZXJzOiBMaXN0IG9mIEROUyBzZXJ2ZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmFtZVNlcnZlcnM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ3VzdG9tRG5zUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEN1c3RvbURuc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0N1c3RvbURuc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VhcmNoZXMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zZWFyY2hlcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNlYXJjaGVzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VhcmNoZXMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2VhcmNoZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlYXJjaGVzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5zZWFyY2hlcykpO1xuICAgIGlmKHByb3BlcnRpZXMuZG5zT3B0aW9ucyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRuc09wdGlvbnMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5kbnNPcHRpb25zKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG5zT3B0aW9ucycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kbnNPcHRpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkbnNPcHRpb25zJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zRnVuY3Rpb25fRG5zT3B0aW9uc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5kbnNPcHRpb25zKSk7XG4gICAgaWYocHJvcGVydGllcy5uYW1lU2VydmVycyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm5hbWVTZXJ2ZXJzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubmFtZVNlcnZlcnMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lU2VydmVycycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5uYW1lU2VydmVycy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZVNlcnZlcnMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLm5hbWVTZXJ2ZXJzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkN1c3RvbURuc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLkN1c3RvbURuc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3VzdG9tRG5zUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb24uQ3VzdG9tRG5zYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uQ3VzdG9tRG5zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX0N1c3RvbURuc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1NlYXJjaGVzJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc2VhcmNoZXMpLFxuICAgICAgJ0Ruc09wdGlvbnMnOiByb3MubGlzdE1hcHBlcihyb3NGdW5jdGlvbkRuc09wdGlvbnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZG5zT3B0aW9ucyksXG4gICAgICAnTmFtZVNlcnZlcnMnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5uYW1lU2VydmVycyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhcmdzOiBJbnN0YW5jZSBzdGFydHVwIHBhcmFtZXRlcnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhcmdzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21tYW5kOiBJbnN0YW5jZSBzdGFydHVwIGNvbW1hbmRzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29tbWFuZD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcG9ydDogVGhlIGxpc3RlbmluZyBwb3J0IG9mIHRoZSBIVFRQIFNlcnZlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvcnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaGVhbHRoQ2hlY2tDb25maWc6IEhlYWx0aCBjaGVjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tDb25maWc/OiBSb3NGdW5jdGlvbi5DdXN0b21SdW50aW1lQ29uZmlnSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEN1c3RvbVJ1bnRpbWVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0N1c3RvbVJ1bnRpbWVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmFyZ3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5hcmdzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuYXJncykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FyZ3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYXJncy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXJncycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuYXJncykpO1xuICAgIGlmKHByb3BlcnRpZXMuY29tbWFuZCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmNvbW1hbmQpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5jb21tYW5kKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tbWFuZCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jb21tYW5kLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tYW5kJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5jb21tYW5kKSk7XG4gICAgaWYocHJvcGVydGllcy5wb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy5wb3J0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucG9ydCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGVhbHRoQ2hlY2tDb25maWcnLCBSb3NGdW5jdGlvbl9DdXN0b21SdW50aW1lQ29uZmlnSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5oZWFsdGhDaGVja0NvbmZpZykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDdXN0b21SdW50aW1lQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb24uQ3VzdG9tUnVudGltZUNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLkN1c3RvbVJ1bnRpbWVDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25DdXN0b21SdW50aW1lQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX0N1c3RvbVJ1bnRpbWVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdBcmdzJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuYXJncyksXG4gICAgICAnQ29tbWFuZCc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmNvbW1hbmQpLFxuICAgICAgJ1BvcnQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvcnQpLFxuICAgICAgJ0hlYWx0aENoZWNrQ29uZmlnJzogcm9zRnVuY3Rpb25DdXN0b21SdW50aW1lQ29uZmlnSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oZWFsdGhDaGVja0NvbmZpZyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tUnVudGltZUNvbmZpZ0hlYWx0aENoZWNrQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRpbWVvdXRTZWNvbmRzOiBUaGUgdGltZW91dCBmb3IgdGhlIGhlYWx0aCBjaGVjay5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRpbWVvdXRTZWNvbmRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluaXRpYWxEZWxheVNlY29uZHM6IFRoZSBpbml0aWFsIGRlbGF5IGZvciB0aGUgaGVhbHRoIGNoZWNrLiBUaGUgdmFsdWUgcmFuZ2UgaXMgMH4xMjAuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbml0aWFsRGVsYXlTZWNvbmRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGh0dHBHZXRVcmw6IENvbnRhaW5lciBjdXN0b20gaGVhbHRoIGNoZWNrIFVSTCBhZGRyZXNzLiBMZW5ndGggY2Fubm90IGV4Y2VlZCAyMDQ4IGNoYXJhY3RlcnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwR2V0VXJsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBlcmlvZFNlY29uZHM6IFRoZSBpbnRlcnZhbCBmb3IgdGhlIGhlYWx0aCBjaGVjay4gVGhlIHZhbHVlIHJhbmdlIGlzIDF+MTIwLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGVyaW9kU2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmYWlsdXJlVGhyZXNob2xkOiBUaGUgdGhyZXNob2xkIGZvciB0aGUgbnVtYmVyIG9mIGhlYWx0aCBjaGVjayBmYWlsdXJlcy4gV2hlbiB0aGlzIHZhbHVlIGlzIHJlYWNoZWQsIHRoZSBzeXN0ZW0gY29uc2lkZXJzIHRoZSBjaGVjayB0byBoYXZlIGZhaWxlZC4gVGhlIHZhbHVlIHJhbmdlIGlzIDF+MTIwLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZmFpbHVyZVRocmVzaG9sZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdWNjZXNzVGhyZXNob2xkOiBUaGUgdGhyZXNob2xkIGZvciB0aGUgbnVtYmVyIG9mIHN1Y2Nlc3NmdWwgaGVhbHRoIGNoZWNrcy4gV2hlbiB0aGlzIHZhbHVlIGlzIHJlYWNoZWQsIHRoZSBzeXN0ZW0gY29uc2lkZXJzIHRoZSBjaGVjayB0byBoYXZlIHN1Y2NlZWRlZC4gVGhlIHZhbHVlIHJhbmdlIGlzIDF+MTIwLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3VjY2Vzc1RocmVzaG9sZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEN1c3RvbVJ1bnRpbWVDb25maWdIZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDdXN0b21SdW50aW1lQ29uZmlnSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbl9DdXN0b21SdW50aW1lQ29uZmlnSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXRTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzKSk7XG4gICAgaWYocHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbml0aWFsRGVsYXlTZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbml0aWFsRGVsYXlTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmh0dHBHZXRVcmwgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5odHRwR2V0VXJsKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuaHR0cEdldFVybCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBHZXRVcmwnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaHR0cEdldFVybC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjA0OCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cEdldFVybCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5odHRwR2V0VXJsKSk7XG4gICAgaWYocHJvcGVydGllcy5wZXJpb2RTZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy5wZXJpb2RTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2RTZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2RTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZhaWx1cmVUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZhaWx1cmVUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCkpO1xuICAgIGlmKHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3VjY2Vzc1RocmVzaG9sZCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3VjY2Vzc1RocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkN1c3RvbVJ1bnRpbWVDb25maWdIZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLkN1c3RvbVJ1bnRpbWVDb25maWdIZWFsdGhDaGVja0NvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3VzdG9tUnVudGltZUNvbmZpZ0hlYWx0aENoZWNrQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb24uQ3VzdG9tUnVudGltZUNvbmZpZ0hlYWx0aENoZWNrQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uQ3VzdG9tUnVudGltZUNvbmZpZ0hlYWx0aENoZWNrQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX0N1c3RvbVJ1bnRpbWVDb25maWdIZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1RpbWVvdXRTZWNvbmRzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0U2Vjb25kcyksXG4gICAgICAnSW5pdGlhbERlbGF5U2Vjb25kcyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcyksXG4gICAgICAnSHR0cEdldFVybCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaHR0cEdldFVybCksXG4gICAgICAnUGVyaW9kU2Vjb25kcyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcyksXG4gICAgICAnRmFpbHVyZVRocmVzaG9sZCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCksXG4gICAgICAnU3VjY2Vzc1RocmVzaG9sZCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRG5zT3B0aW9uc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogVGhlIHZhbHVlIG9mIHRoZSBETlMgcmVzb2x1dGlvbiBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIEROUyByZXNvbHV0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRG5zT3B0aW9uc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBEbnNPcHRpb25zUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fRG5zT3B0aW9uc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJEbnNPcHRpb25zUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb24uRG5zT3B0aW9uc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRG5zT3B0aW9uc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLkRuc09wdGlvbnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25EbnNPcHRpb25zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX0Ruc09wdGlvbnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdWYWx1ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgJ05hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEdwdUNvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBncHVNZW1vcnlTaXplOiBHUFUgbWVtb3J5IHNwZWNpZmljYXRpb25zIGluIE1CLCBtdWx0aXBsZXMgb2YgMTAyNE1CLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZ3B1TWVtb3J5U2l6ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBncHVUeXBlOiBHUFUgaW5zdGFuY2UgdHlwZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGdwdVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBHcHVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgR3B1Q29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fR3B1Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncHVNZW1vcnlTaXplJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmdwdU1lbW9yeVNpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dwdVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3B1VHlwZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJHcHVDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5HcHVDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEdwdUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLkdwdUNvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkdwdUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9HcHVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdHcHVNZW1vcnlTaXplJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncHVNZW1vcnlTaXplKSxcbiAgICAgICdHcHVUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncHVUeXBlKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0Z1bmN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBIZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0U2Vjb25kczogVGhlIHRpbWVvdXQgZm9yIHRoZSBoZWFsdGggY2hlY2suXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lb3V0U2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpbml0aWFsRGVsYXlTZWNvbmRzOiBUaGUgaW5pdGlhbCBkZWxheSBmb3IgdGhlIGhlYWx0aCBjaGVjay4gVGhlIHZhbHVlIHJhbmdlIGlzIDB+MTIwLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaW5pdGlhbERlbGF5U2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBodHRwR2V0VXJsOiBDb250YWluZXIgY3VzdG9tIGhlYWx0aCBjaGVjayBVUkwgYWRkcmVzcy4gTGVuZ3RoIGNhbm5vdCBleGNlZWQgMjA0OCBjaGFyYWN0ZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaHR0cEdldFVybD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwZXJpb2RTZWNvbmRzOiBUaGUgaW50ZXJ2YWwgZm9yIHRoZSBoZWFsdGggY2hlY2suIFRoZSB2YWx1ZSByYW5nZSBpcyAxfjEyMC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBlcmlvZFNlY29uZHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZmFpbHVyZVRocmVzaG9sZDogVGhlIHRocmVzaG9sZCBmb3IgdGhlIG51bWJlciBvZiBoZWFsdGggY2hlY2sgZmFpbHVyZXMuIFdoZW4gdGhpcyB2YWx1ZSBpcyByZWFjaGVkLCB0aGUgc3lzdGVtIGNvbnNpZGVycyB0aGUgY2hlY2sgdG8gaGF2ZSBmYWlsZWQuIFRoZSB2YWx1ZSByYW5nZSBpcyAxfjEyMC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZhaWx1cmVUaHJlc2hvbGQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3VjY2Vzc1RocmVzaG9sZDogVGhlIHRocmVzaG9sZCBmb3IgdGhlIG51bWJlciBvZiBzdWNjZXNzZnVsIGhlYWx0aCBjaGVja3MuIFdoZW4gdGhpcyB2YWx1ZSBpcyByZWFjaGVkLCB0aGUgc3lzdGVtIGNvbnNpZGVycyB0aGUgY2hlY2sgdG8gaGF2ZSBzdWNjZWVkZWQuIFRoZSB2YWx1ZSByYW5nZSBpcyAxfjEyMC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN1Y2Nlc3NUaHJlc2hvbGQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBIZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0hlYWx0aENoZWNrQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0U2Vjb25kcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lb3V0U2Vjb25kcykpO1xuICAgIGlmKHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcyAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5pdGlhbERlbGF5U2Vjb25kcycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5pdGlhbERlbGF5U2Vjb25kcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzKSk7XG4gICAgaWYocHJvcGVydGllcy5odHRwR2V0VXJsICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuaHR0cEdldFVybCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmh0dHBHZXRVcmwpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwR2V0VXJsJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmh0dHBHZXRVcmwubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwNDgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBHZXRVcmwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaHR0cEdldFVybCkpO1xuICAgIGlmKHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcyAmJiAodHlwZW9mIHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyaW9kU2Vjb25kcycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyaW9kU2Vjb25kcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wZXJpb2RTZWNvbmRzKSk7XG4gICAgaWYocHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkICYmICh0eXBlb2YgcHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmYWlsdXJlVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmYWlsdXJlVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1Y2Nlc3NUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1Y2Nlc3NUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJIZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLkhlYWx0aENoZWNrQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLkhlYWx0aENoZWNrQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRnVuY3Rpb25fSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdUaW1lb3V0U2Vjb25kcyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dFNlY29uZHMpLFxuICAgICAgJ0luaXRpYWxEZWxheVNlY29uZHMnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMpLFxuICAgICAgJ0h0dHBHZXRVcmwnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmh0dHBHZXRVcmwpLFxuICAgICAgJ1BlcmlvZFNlY29uZHMnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMpLFxuICAgICAgJ0ZhaWx1cmVUaHJlc2hvbGQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQpLFxuICAgICAgJ1N1Y2Nlc3NUaHJlc2hvbGQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEluaXRpYWxpemVyUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSB0aW1lb3V0IGZvciB0aGUgY2FsbGJhY2sgbWV0aG9kLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGltZW91dD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBoYW5kbGVyOiBUaGUgZXhlY3V0aW9uIGVudHJ5IG9mIHRoZSBjYWxsYmFjayBtZXRob2QgaGFzIGEgc2ltaWxhciBtZWFuaW5nIHRvIHRoZSByZXF1ZXN0IGhhbmRsZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBoYW5kbGVyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSW5pdGlhbGl6ZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5pdGlhbGl6ZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbl9Jbml0aWFsaXplclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lb3V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoYW5kbGVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhhbmRsZXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSW5pdGlhbGl6ZXJQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5Jbml0aWFsaXplcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5pdGlhbGl6ZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5Jbml0aWFsaXplcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkluaXRpYWxpemVyUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX0luaXRpYWxpemVyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVGltZW91dCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dCksXG4gICAgICAnSGFuZGxlcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGFuZGxlciksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHJlU3RvcDogSW5zdGFuY2UgbGlmZWN5Y2xlIGNhbGxiYWNrIG1ldGhvZCBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJlU3RvcD86IFJvc0Z1bmN0aW9uLlByZVN0b3BQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpbml0aWFsaXplcjogSW5zdGFuY2UgbGlmZWN5Y2xlIGNhbGxiYWNrIG1ldGhvZCBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaW5pdGlhbGl6ZXI/OiBSb3NGdW5jdGlvbi5Jbml0aWFsaXplclByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbl9JbnN0YW5jZUxpZmVjeWNsZUNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJlU3RvcCcsIFJvc0Z1bmN0aW9uX1ByZVN0b3BQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5wcmVTdG9wKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbml0aWFsaXplcicsIFJvc0Z1bmN0aW9uX0luaXRpYWxpemVyUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5pdGlhbGl6ZXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5JbnN0YW5jZUxpZmVjeWNsZUNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5JbnN0YW5jZUxpZmVjeWNsZUNvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX0luc3RhbmNlTGlmZWN5Y2xlQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUHJlU3RvcCc6IHJvc0Z1bmN0aW9uUHJlU3RvcFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByZVN0b3ApLFxuICAgICAgJ0luaXRpYWxpemVyJzogcm9zRnVuY3Rpb25Jbml0aWFsaXplclByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluaXRpYWxpemVyKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0Z1bmN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHJvamVjdDogVGhlIHByb2plY3Qgb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJvamVjdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBsb2dCZWdpblJ1bGU6IFRoZSBsb2cgYmVnaW4gcnVsZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvZ0JlZ2luUnVsZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBsb2dzdG9yZTogVGhlIGxvZ3N0b3JlIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvZ3N0b3JlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVuYWJsZUluc3RhbmNlTWV0cmljczogV2hldGhlciB0byBlbmFibGUgdGhlIGluc3RhbmNlIG1ldHJpY3MuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlbmFibGVJbnN0YW5jZU1ldHJpY3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVuYWJsZVJlcXVlc3RNZXRyaWNzOiBXaGV0aGVyIHRvIGVuYWJsZSB0aGUgcmVxdWVzdCBtZXRyaWNzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW5hYmxlUmVxdWVzdE1ldHJpY3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTG9nQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExvZ0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0xvZ0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm9qZWN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dCZWdpblJ1bGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9nQmVnaW5SdWxlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dzdG9yZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dzdG9yZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlSW5zdGFuY2VNZXRyaWNzJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVJbnN0YW5jZU1ldHJpY3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZVJlcXVlc3RNZXRyaWNzJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVSZXF1ZXN0TWV0cmljcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJMb2dDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5Mb2dDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExvZ0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLkxvZ0NvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkxvZ0NvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9Mb2dDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQcm9qZWN0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm9qZWN0KSxcbiAgICAgICdMb2dCZWdpblJ1bGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ0JlZ2luUnVsZSksXG4gICAgICAnTG9nc3RvcmUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ3N0b3JlKSxcbiAgICAgICdFbmFibGVJbnN0YW5jZU1ldHJpY3MnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVJbnN0YW5jZU1ldHJpY3MpLFxuICAgICAgJ0VuYWJsZVJlcXVlc3RNZXRyaWNzJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5hYmxlUmVxdWVzdE1ldHJpY3MpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1vdW50UG9pbnRzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVuYWJsZVRsczogTW91bnQgdXNpbmcgdHJhbnNwb3J0IGVuY3J5cHRpb24uIE5vdGU6IE9ubHkgZ2VuZXJhbC1wdXJwb3NlIE5BUyBzdXBwb3J0cyB0cmFuc21pc3Npb24gZW5jcnlwdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVuYWJsZVRscz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VydmVyQWRkcjogTkFTIHNlcnZlciBhZGRyZXNzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmVyQWRkcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtb3VudERpcjogVGhlIG1vdW50IGRpcmVjdG9yeSBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtb3VudERpcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE1vdW50UG9pbnRzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1vdW50UG9pbnRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fTW91bnRQb2ludHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZVRscycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZW5hYmxlVGxzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2ZXJBZGRyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZlckFkZHIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vdW50RGlyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1vdW50RGlyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk1vdW50UG9pbnRzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb24uTW91bnRQb2ludHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1vdW50UG9pbnRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb24uTW91bnRQb2ludHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25Nb3VudFBvaW50c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9Nb3VudFBvaW50c1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0VuYWJsZVRscyc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZVRscyksXG4gICAgICAnU2VydmVyQWRkcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmVyQWRkciksXG4gICAgICAnTW91bnREaXInOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1vdW50RGlyKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0Z1bmN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBOYXNDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbW91bnRQb2ludHM6IFRoZSBtb3VudCBwb2ludHMgb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbW91bnRQb2ludHM/OiBBcnJheTxSb3NGdW5jdGlvbi5Nb3VudFBvaW50c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB1c2VySWQ6IFRoZSB1c2VyIElEIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHVzZXJJZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgZ3JvdXAgSUQgb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZ3JvdXBJZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE5hc0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBOYXNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbl9OYXNDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1vdW50UG9pbnRzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMubW91bnRQb2ludHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5tb3VudFBvaW50cykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vdW50UG9pbnRzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1vdW50UG9pbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb3VudFBvaW50cycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0Z1bmN0aW9uX01vdW50UG9pbnRzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLm1vdW50UG9pbnRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1c2VySWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudXNlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cElkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmdyb3VwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTmFzQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb24uTmFzQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBOYXNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5OYXNDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25OYXNDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRnVuY3Rpb25fTmFzQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnTW91bnRQb2ludHMnOiByb3MubGlzdE1hcHBlcihyb3NGdW5jdGlvbk1vdW50UG9pbnRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLm1vdW50UG9pbnRzKSxcbiAgICAgICdVc2VySWQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZXJJZCksXG4gICAgICAnR3JvdXBJZCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBJZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya0NvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVGhlIElEIG9mIHRoZSB2aXJ0dWFsIHByaXZhdGUgY2xvdWQgKFZQQykgdGhhdCBjYW4gYmUgdXNlZCB0byBjb25uZWN0IHRvIHRoZSBpbWFnZSByZXBvc2l0b3J5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSBJRCBvZiB0aGUgdlN3aXRjaCB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbm5lY3QgdG8gdGhlIGltYWdlIHJlcG9zaXRvcnkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2U3dpdGNoSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgc2VjdXJpdHkgZ3JvdXAgdGhhdCBjYW4gYmUgdXNlZCB0byBjb25uZWN0IHRvIHRoZSBpbWFnZSByZXBvc2l0b3J5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBOZXR3b3JrQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5ldHdvcmtDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbl9OZXR3b3JrQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52U3dpdGNoSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52U3dpdGNoSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlY3VyaXR5R3JvdXBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZWN1cml0eUdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlY3VyaXR5R3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZWN1cml0eUdyb3VwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTmV0d29ya0NvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLk5ldHdvcmtDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5ldHdvcmtDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5OZXR3b3JrQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uTmV0d29ya0NvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9OZXR3b3JrQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVnBjSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZwY0lkKSxcbiAgICAgICdWU3dpdGNoSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZTd2l0Y2hJZCksXG4gICAgICAnU2VjdXJpdHlHcm91cElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZWN1cml0eUdyb3VwSWQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE9zc01vdW50Q29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1vdW50UG9pbnRzOiBUaGUgbW91bnQgcG9pbnRzIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1vdW50UG9pbnRzPzogQXJyYXk8Um9zRnVuY3Rpb24uT3NzTW91bnRDb25maWdNb3VudFBvaW50c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE9zc01vdW50Q29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE9zc01vdW50Q29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fT3NzTW91bnRDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1vdW50UG9pbnRzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMubW91bnRQb2ludHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5tb3VudFBvaW50cykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vdW50UG9pbnRzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1vdW50UG9pbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb3VudFBvaW50cycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0Z1bmN0aW9uX09zc01vdW50Q29uZmlnTW91bnRQb2ludHNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMubW91bnRQb2ludHMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiT3NzTW91bnRDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5Pc3NNb3VudENvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgT3NzTW91bnRDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5Pc3NNb3VudENvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbk9zc01vdW50Q29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX09zc01vdW50Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnTW91bnRQb2ludHMnOiByb3MubGlzdE1hcHBlcihyb3NGdW5jdGlvbk9zc01vdW50Q29uZmlnTW91bnRQb2ludHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubW91bnRQb2ludHMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE9zc01vdW50Q29uZmlnTW91bnRQb2ludHNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVhZE9ubHk6IE1vdW50ZWQgT1NTIEJ1Y2tldCByZWFkLW9ubHkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZWFkT25seT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYnVja2V0TmFtZTogTW91bnRlZCBPU1MgQnVja2V0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYnVja2V0TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBlbmRwb2ludDogVGhlIGVuZHBvaW50IG9mIHRoZSBidWNrZXQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlbmRwb2ludD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBidWNrZXRQYXRoOiBNb3VudGVkIE9TUyBCdWNrZXQgcGF0aC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGJ1Y2tldFBhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbW91bnREaXI6IFRoZSBtb3VudCBkaXJlY3Rvcnkgb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbW91bnREaXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBPc3NNb3VudENvbmZpZ01vdW50UG9pbnRzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE9zc01vdW50Q29uZmlnTW91bnRQb2ludHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbl9Pc3NNb3VudENvbmZpZ01vdW50UG9pbnRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWFkT25seScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMucmVhZE9ubHkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYnVja2V0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5kcG9pbnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZW5kcG9pbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldFBhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYnVja2V0UGF0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnREaXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW91bnREaXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiT3NzTW91bnRDb25maWdNb3VudFBvaW50c1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLk9zc01vdW50Q29uZmlnTW91bnRQb2ludHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE9zc01vdW50Q29uZmlnTW91bnRQb2ludHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5Pc3NNb3VudENvbmZpZ01vdW50UG9pbnRzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uT3NzTW91bnRDb25maWdNb3VudFBvaW50c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9Pc3NNb3VudENvbmZpZ01vdW50UG9pbnRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUmVhZE9ubHknOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWFkT25seSksXG4gICAgICAnQnVja2V0TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYnVja2V0TmFtZSksXG4gICAgICAnRW5kcG9pbnQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuZHBvaW50KSxcbiAgICAgICdCdWNrZXRQYXRoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5idWNrZXRQYXRoKSxcbiAgICAgICdNb3VudERpcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubW91bnREaXIpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFByZVN0b3BQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGltZW91dDogVGhlIHRpbWVvdXQgZm9yIHRoZSBjYWxsYmFjayBtZXRob2QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lb3V0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhhbmRsZXI6IFRoZSBleGVjdXRpb24gZW50cnkgb2YgdGhlIGNhbGxiYWNrIG1ldGhvZCBoYXMgYSBzaW1pbGFyIG1lYW5pbmcgdG8gdGhlIHJlcXVlc3QgaGFuZGxlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhhbmRsZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQcmVTdG9wUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByZVN0b3BQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbl9QcmVTdG9wUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hhbmRsZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaGFuZGxlcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQcmVTdG9wUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb24uUHJlU3RvcGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJlU3RvcFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLlByZVN0b3BgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25QcmVTdG9wUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX1ByZVN0b3BQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdUaW1lb3V0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0KSxcbiAgICAgICdIYW5kbGVyJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oYW5kbGVyKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0Z1bmN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZWdpc3RyeUNvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjZXJ0Q29uZmlnOiBUaGUgY2VydGlmaWNhdGUgY29uZmlndXJhdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjZXJ0Q29uZmlnOiBSb3NGdW5jdGlvbi5DZXJ0Q29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmV0d29ya0NvbmZpZzogVGhlIG5ldHdvcmsgaW5mb3JtYXRpb24gb2YgdGhlIGltYWdlIHJlcG9zaXRvcnkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuZXR3b3JrQ29uZmlnPzogUm9zRnVuY3Rpb24uTmV0d29ya0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGF1dGhDb25maWc6IFRoZSBhdXRoZW50aWNhdGlvbiBpbmZvcm1hdGlvbiBvZiB0aGUgaW1hZ2UgcmVwb3NpdG9yeS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGF1dGhDb25maWc/OiBSb3NGdW5jdGlvbi5BdXRoQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZWdpc3RyeUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZWdpc3RyeUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX1JlZ2lzdHJ5Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZXJ0Q29uZmlnJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNlcnRDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlcnRDb25maWcnLCBSb3NGdW5jdGlvbl9DZXJ0Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2VydENvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV0d29ya0NvbmZpZycsIFJvc0Z1bmN0aW9uX05ldHdvcmtDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5uZXR3b3JrQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRoQ29uZmlnJywgUm9zRnVuY3Rpb25fQXV0aENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmF1dGhDb25maWcpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVnaXN0cnlDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5SZWdpc3RyeUNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVnaXN0cnlDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5SZWdpc3RyeUNvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvblJlZ2lzdHJ5Q29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX1JlZ2lzdHJ5Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQ2VydENvbmZpZyc6IHJvc0Z1bmN0aW9uQ2VydENvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNlcnRDb25maWcpLFxuICAgICAgJ05ldHdvcmtDb25maWcnOiByb3NGdW5jdGlvbk5ldHdvcmtDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uZXR3b3JrQ29uZmlnKSxcbiAgICAgICdBdXRoQ29uZmlnJzogcm9zRnVuY3Rpb25BdXRoQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXV0aENvbmZpZyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhY2luZ0NvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBUaGUgdHlwZSBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0eXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhcmFtczogTGluayB0cmFja2luZyBwYXJhbWV0ZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVHJhY2luZ0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUcmFjaW5nQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fVHJhY2luZ0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXJhbXMnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnBhcmFtcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUcmFjaW5nQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6RnVuY3Rpb24uVHJhY2luZ0NvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVHJhY2luZ0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLlRyYWNpbmdDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25UcmFjaW5nQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX1RyYWNpbmdDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50eXBlKSxcbiAgICAgICdQYXJhbXMnOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5wYXJhbXMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFZwY0NvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVGhlIElEIG9mIHRoZSBWUEMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2cGNJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2U3dpdGNoSWRzOiBUaGUgSURzIG9mIHRoZSBWU3dpdGNoLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdlN3aXRjaElkcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBUaGUgSUQgb2YgdGhlIHNlY3VyaXR5IGdyb3VwLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVnBjQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFZwY0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX1ZwY0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnZTd2l0Y2hJZHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy52U3dpdGNoSWRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudlN3aXRjaElkcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudlN3aXRjaElkcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndlN3aXRjaElkcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMudlN3aXRjaElkcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VjdXJpdHlHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlY3VyaXR5R3JvdXBJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJWcGNDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpGdW5jdGlvbi5WcGNDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFZwY0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OkZ1bmN0aW9uLlZwY0NvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvblZwY0NvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9WcGNDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdWcGNJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjSWQpLFxuICAgICAgJ1ZTd2l0Y2hJZHMnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy52U3dpdGNoSWRzKSxcbiAgICAgICdTZWN1cml0eUdyb3VwSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlY3VyaXR5R3JvdXBJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NQcm92aXNpb25Db25maWdgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMzLXByb3Zpc2lvbmNvbmZpZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1Byb3Zpc2lvbkNvbmZpZ1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWZhdWx0VGFyZ2V0OiBUaGUgbnVtYmVyIG9mIHRhcmdldCByZXNvdXJjZXMgdG8gcmVzZXJ2ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWZhdWx0VGFyZ2V0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZ1bmN0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFsd2F5c0FsbG9jYXRlQ3B1OiBXaGV0aGVyIENQVSBzaG91bGQgYWx3YXlzIGJlIGFsbG9jYXRlZDsgZGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhbHdheXNBbGxvY2F0ZUNwdT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWx3YXlzQWxsb2NhdGVHcHU6IFdoZXRoZXIgR1BVIHNob3VsZCBhbHdheXMgYmUgYWxsb2NhdGVkOyBkZWZhdWx0cyB0byB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsd2F5c0FsbG9jYXRlR3B1PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBxdWFsaWZpZXI6IEZ1bmN0aW9uIGFsaWFzIG9yIExBVEVTVC5cbiAgICAgKi9cbiAgICByZWFkb25seSBxdWFsaWZpZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2NoZWR1bGVkQWN0aW9uczogVGltaW5nIHBvbGljeSBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjaGVkdWxlZEFjdGlvbnM/OiBBcnJheTxSb3NQcm92aXNpb25Db25maWcuU2NoZWR1bGVkQWN0aW9uc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRUcmFja2luZ1BvbGljaWVzOiBUYXJnZXQgdHJhY2tpbmcgcG9saWN5IGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0VHJhY2tpbmdQb2xpY2llcz86IEFycmF5PFJvc1Byb3Zpc2lvbkNvbmZpZy5UYXJnZXRUcmFja2luZ1BvbGljaWVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1Byb3Zpc2lvbkNvbmZpZ1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQcm92aXNpb25Db25maWdQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NQcm92aXNpb25Db25maWdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlZmF1bHRUYXJnZXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVmYXVsdFRhcmdldCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVmYXVsdFRhcmdldCAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGVmYXVsdFRhcmdldCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVmYXVsdFRhcmdldCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlZmF1bHRUYXJnZXQsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjk5LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWZhdWx0VGFyZ2V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmRlZmF1bHRUYXJnZXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Fsd2F5c0FsbG9jYXRlQ3B1Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5hbHdheXNBbGxvY2F0ZUNwdSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFyZ2V0VHJhY2tpbmdQb2xpY2llcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRhcmdldFRyYWNraW5nUG9saWNpZXMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50YXJnZXRUcmFja2luZ1BvbGljaWVzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0VHJhY2tpbmdQb2xpY2llcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YXJnZXRUcmFja2luZ1BvbGljaWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldFRyYWNraW5nUG9saWNpZXMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NQcm92aXNpb25Db25maWdfVGFyZ2V0VHJhY2tpbmdQb2xpY2llc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy50YXJnZXRUcmFja2luZ1BvbGljaWVzKSk7XG4gICAgaWYocHJvcGVydGllcy5zY2hlZHVsZWRBY3Rpb25zICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2NoZWR1bGVkQWN0aW9ucykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNjaGVkdWxlZEFjdGlvbnMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzY2hlZHVsZWRBY3Rpb25zJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNjaGVkdWxlZEFjdGlvbnMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NoZWR1bGVkQWN0aW9ucycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc1Byb3Zpc2lvbkNvbmZpZ19TY2hlZHVsZWRBY3Rpb25zUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnNjaGVkdWxlZEFjdGlvbnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3F1YWxpZmllcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5xdWFsaWZpZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Fsd2F5c0FsbG9jYXRlR3B1Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5hbHdheXNBbGxvY2F0ZUdwdSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NQcm92aXNpb25Db25maWdQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkMzOjpQcm92aXNpb25Db25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1Byb3Zpc2lvbkNvbmZpZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OlByb3Zpc2lvbkNvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NQcm92aXNpb25Db25maWdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1Byb3Zpc2lvbkNvbmZpZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdEZWZhdWx0VGFyZ2V0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWZhdWx0VGFyZ2V0KSxcbiAgICAgICdGdW5jdGlvbk5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSksXG4gICAgICAnQWx3YXlzQWxsb2NhdGVDUFUnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hbHdheXNBbGxvY2F0ZUNwdSksXG4gICAgICAnQWx3YXlzQWxsb2NhdGVHUFUnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hbHdheXNBbGxvY2F0ZUdwdSksXG4gICAgICAnUXVhbGlmaWVyJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5xdWFsaWZpZXIpLFxuICAgICAgJ1NjaGVkdWxlZEFjdGlvbnMnOiByb3MubGlzdE1hcHBlcihyb3NQcm92aXNpb25Db25maWdTY2hlZHVsZWRBY3Rpb25zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnNjaGVkdWxlZEFjdGlvbnMpLFxuICAgICAgJ1RhcmdldFRyYWNraW5nUG9saWNpZXMnOiByb3MubGlzdE1hcHBlcihyb3NQcm92aXNpb25Db25maWdUYXJnZXRUcmFja2luZ1BvbGljaWVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhcmdldFRyYWNraW5nUG9saWNpZXMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkZDMzo6UHJvdmlzaW9uQ29uZmlnYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgUHJvdmlzaW9uQ29uZmlnYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYzMtcHJvdmlzaW9uY29uZmlnXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NQcm92aXNpb25Db25maWcgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkZDMzo6UHJvdmlzaW9uQ29uZmlnXCI7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWZhdWx0VGFyZ2V0OiBUaGUgbnVtYmVyIG9mIHRhcmdldCByZXNvdXJjZXMgdG8gcmVzZXJ2ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVmYXVsdFRhcmdldDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZnVuY3Rpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWx3YXlzQWxsb2NhdGVDcHU6IFdoZXRoZXIgQ1BVIHNob3VsZCBhbHdheXMgYmUgYWxsb2NhdGVkOyBkZWZhdWx0cyB0byB0cnVlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhbHdheXNBbGxvY2F0ZUNwdTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbHdheXNBbGxvY2F0ZUdwdTogV2hldGhlciBHUFUgc2hvdWxkIGFsd2F5cyBiZSBhbGxvY2F0ZWQ7IGRlZmF1bHRzIHRvIHRydWUuXG4gICAgICovXG4gICAgcHVibGljIGFsd2F5c0FsbG9jYXRlR3B1OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHF1YWxpZmllcjogRnVuY3Rpb24gYWxpYXMgb3IgTEFURVNULlxuICAgICAqL1xuICAgIHB1YmxpYyBxdWFsaWZpZXI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2hlZHVsZWRBY3Rpb25zOiBUaW1pbmcgcG9saWN5IGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHNjaGVkdWxlZEFjdGlvbnM6IEFycmF5PFJvc1Byb3Zpc2lvbkNvbmZpZy5TY2hlZHVsZWRBY3Rpb25zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldFRyYWNraW5nUG9saWNpZXM6IFRhcmdldCB0cmFja2luZyBwb2xpY3kgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFyZ2V0VHJhY2tpbmdQb2xpY2llczogQXJyYXk8Um9zUHJvdmlzaW9uQ29uZmlnLlRhcmdldFRyYWNraW5nUG9saWNpZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUHJvdmlzaW9uQ29uZmlnUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NQcm92aXNpb25Db25maWcuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRlZmF1bHRUYXJnZXQgPSBwcm9wcy5kZWZhdWx0VGFyZ2V0O1xuICAgICAgICB0aGlzLmZ1bmN0aW9uTmFtZSA9IHByb3BzLmZ1bmN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5hbHdheXNBbGxvY2F0ZUNwdSA9IHByb3BzLmFsd2F5c0FsbG9jYXRlQ3B1O1xuICAgICAgICB0aGlzLmFsd2F5c0FsbG9jYXRlR3B1ID0gcHJvcHMuYWx3YXlzQWxsb2NhdGVHcHU7XG4gICAgICAgIHRoaXMucXVhbGlmaWVyID0gcHJvcHMucXVhbGlmaWVyO1xuICAgICAgICB0aGlzLnNjaGVkdWxlZEFjdGlvbnMgPSBwcm9wcy5zY2hlZHVsZWRBY3Rpb25zO1xuICAgICAgICB0aGlzLnRhcmdldFRyYWNraW5nUG9saWNpZXMgPSBwcm9wcy50YXJnZXRUcmFja2luZ1BvbGljaWVzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlZmF1bHRUYXJnZXQ6IHRoaXMuZGVmYXVsdFRhcmdldCxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogdGhpcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBhbHdheXNBbGxvY2F0ZUNwdTogdGhpcy5hbHdheXNBbGxvY2F0ZUNwdSxcbiAgICAgICAgICAgIGFsd2F5c0FsbG9jYXRlR3B1OiB0aGlzLmFsd2F5c0FsbG9jYXRlR3B1LFxuICAgICAgICAgICAgcXVhbGlmaWVyOiB0aGlzLnF1YWxpZmllcixcbiAgICAgICAgICAgIHNjaGVkdWxlZEFjdGlvbnM6IHRoaXMuc2NoZWR1bGVkQWN0aW9ucyxcbiAgICAgICAgICAgIHRhcmdldFRyYWNraW5nUG9saWNpZXM6IHRoaXMudGFyZ2V0VHJhY2tpbmdQb2xpY2llcyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zUHJvdmlzaW9uQ29uZmlnUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zUHJvdmlzaW9uQ29uZmlnIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZWRBY3Rpb25zUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNjaGVkdWxlRXhwcmVzc2lvbjogQ3JvbiBleHByZXNzaW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2NoZWR1bGVFeHByZXNzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRpbWVab25lOiBUaW1lIHpvbmVzLiBzdGFydFRpbWUsIGVuZFRpbWUsIGFuZCBzY2hlZHVsZUV4cHJlc3Npb24gdGltZXMgbmVlZCB0byBiZSBpbiBVVEMgd2hlbiB0aGUgdGltZXpvbmUgYXJndW1lbnQgaXMgZW1wdHkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lWm9uZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0YXJnZXQ6IFRoZSBudW1iZXIgb2YgdGFyZ2V0IHJlc291cmNlcyB0byByZXNlcnZlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGFyZ2V0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW5kVGltZTogUG9saWN5IGV4cGlyYXRpb24gdGltZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVuZFRpbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnRUaW1lOiBQb2xpY3kgc3RhcnQgdGltZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0VGltZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBQb2xpY3kgbmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFNjaGVkdWxlZEFjdGlvbnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2NoZWR1bGVkQWN0aW9uc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1Byb3Zpc2lvbkNvbmZpZ19TY2hlZHVsZWRBY3Rpb25zUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzY2hlZHVsZUV4cHJlc3Npb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2NoZWR1bGVFeHByZXNzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lWm9uZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50aW1lWm9uZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhcmdldCkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFyZ2V0ICYmICh0eXBlb2YgcHJvcGVydGllcy50YXJnZXQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhcmdldCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyOTksXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50YXJnZXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuZFRpbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZW5kVGltZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnRUaW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0VGltZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU2NoZWR1bGVkQWN0aW9uc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OlByb3Zpc2lvbkNvbmZpZy5TY2hlZHVsZWRBY3Rpb25zYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTY2hlZHVsZWRBY3Rpb25zUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6UHJvdmlzaW9uQ29uZmlnLlNjaGVkdWxlZEFjdGlvbnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUHJvdmlzaW9uQ29uZmlnU2NoZWR1bGVkQWN0aW9uc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NQcm92aXNpb25Db25maWdfU2NoZWR1bGVkQWN0aW9uc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1NjaGVkdWxlRXhwcmVzc2lvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2NoZWR1bGVFeHByZXNzaW9uKSxcbiAgICAgICdUaW1lWm9uZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZVpvbmUpLFxuICAgICAgJ1RhcmdldCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGFyZ2V0KSxcbiAgICAgICdFbmRUaW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmRUaW1lKSxcbiAgICAgICdTdGFydFRpbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXJ0VGltZSksXG4gICAgICAnTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NQcm92aXNpb25Db25maWcge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhcmdldFRyYWNraW5nUG9saWNpZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWV0cmljVGFyZ2V0OiBUcmFja2luZyB2YWx1ZXMgZm9yIG1ldHJpY3MuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtZXRyaWNUYXJnZXQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aW1lWm9uZTogVGltZSB6b25lcy4gc3RhcnRUaW1lLCBlbmRUaW1lLCBhbmQgc2NoZWR1bGVFeHByZXNzaW9uIHRpbWVzIG5lZWQgdG8gYmUgaW4gVVRDIHdoZW4gdGhlIHRpbWV6b25lIGFyZ3VtZW50IGlzIGVtcHR5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGltZVpvbmU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW5kVGltZTogUG9saWN5IGVuZCB0aW1lIChVVEMpLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW5kVGltZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtZXRyaWNUeXBlOiBUcmFja2luZyB0YXJnZXQgdHlwZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gUHJvdmlzaW9uZWRDb25jdXJyZW5jeVV0aWxpemF0aW9uOiByZXNlcnZlIGEgcGF0dGVybiBpbnN0YW5jZSBjb25jdXJyZW50IGRlZ3JlZSBvZiB1dGlsaXphdGlvbi4gXG4gICAgICogLSBDUFVVdGlsaXphdGlvbjogQ1BVIHV0aWxpemF0aW9uLiBcbiAgICAgKiAtIEdQVU1lbVV0aWxpemF0aW9uOiBHUFUgdXRpbGl6YXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtZXRyaWNUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhcnRUaW1lOiBQb2xpY3kgc3RhcnQgdGltZSAoVVRDKS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0VGltZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtaW5DYXBhY2l0eTogVGhlIG1pbmltdW0gb2YgdGhlIHNocmlua2FnZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1pbkNhcGFjaXR5OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZTogUG9saWN5IG5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWF4Q2FwYWNpdHk6IFRoZSBtYXhpbXVtIG9mIHRoZSBleHBhbnNpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtYXhDYXBhY2l0eTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFyZ2V0VHJhY2tpbmdQb2xpY2llc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYXJnZXRUcmFja2luZ1BvbGljaWVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUHJvdmlzaW9uQ29uZmlnX1RhcmdldFRyYWNraW5nUG9saWNpZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21ldHJpY1RhcmdldCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tZXRyaWNUYXJnZXQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1ldHJpY1RhcmdldCAmJiAodHlwZW9mIHByb3BlcnRpZXMubWV0cmljVGFyZ2V0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZXRyaWNUYXJnZXQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tZXRyaWNUYXJnZXQsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZXRyaWNUYXJnZXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWV0cmljVGFyZ2V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lWm9uZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50aW1lWm9uZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5kVGltZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lbmRUaW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZXRyaWNUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm1ldHJpY1R5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1ldHJpY1R5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1ldHJpY1R5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21ldHJpY1R5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tZXRyaWNUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlByb3Zpc2lvbmVkQ29uY3VycmVuY3lVdGlsaXphdGlvblwiLFwiQ1BVVXRpbGl6YXRpb25cIixcIkdQVU1lbVV0aWxpemF0aW9uXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWV0cmljVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tZXRyaWNUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydFRpbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnRUaW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtaW5DYXBhY2l0eScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5taW5DYXBhY2l0eSkpO1xuICAgIGlmKHByb3BlcnRpZXMubWluQ2FwYWNpdHkgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1pbkNhcGFjaXR5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtaW5DYXBhY2l0eScsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1pbkNhcGFjaXR5LFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDI5OSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWluQ2FwYWNpdHknLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWluQ2FwYWNpdHkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhDYXBhY2l0eScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tYXhDYXBhY2l0eSkpO1xuICAgIGlmKHByb3BlcnRpZXMubWF4Q2FwYWNpdHkgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1heENhcGFjaXR5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhDYXBhY2l0eScsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1heENhcGFjaXR5LFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDI5OSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4Q2FwYWNpdHknLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWF4Q2FwYWNpdHkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGFyZ2V0VHJhY2tpbmdQb2xpY2llc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OlByb3Zpc2lvbkNvbmZpZy5UYXJnZXRUcmFja2luZ1BvbGljaWVzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYXJnZXRUcmFja2luZ1BvbGljaWVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6UHJvdmlzaW9uQ29uZmlnLlRhcmdldFRyYWNraW5nUG9saWNpZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUHJvdmlzaW9uQ29uZmlnVGFyZ2V0VHJhY2tpbmdQb2xpY2llc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NQcm92aXNpb25Db25maWdfVGFyZ2V0VHJhY2tpbmdQb2xpY2llc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ01ldHJpY1RhcmdldCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWV0cmljVGFyZ2V0KSxcbiAgICAgICdUaW1lWm9uZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZVpvbmUpLFxuICAgICAgJ0VuZFRpbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuZFRpbWUpLFxuICAgICAgJ01ldHJpY1R5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1ldHJpY1R5cGUpLFxuICAgICAgJ1N0YXJ0VGltZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnRUaW1lKSxcbiAgICAgICdNaW5DYXBhY2l0eSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWluQ2FwYWNpdHkpLFxuICAgICAgJ05hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgICAgJ01heENhcGFjaXR5Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXhDYXBhY2l0eSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NUcmlnZ2VyYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjMy10cmlnZ2VyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVHJpZ2dlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmdW5jdGlvbk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBmdW5jdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmlnZ2VyQ29uZmlnOiBUcmlnZ2VyIGNvbmZpZy5cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmlnZ2VyQ29uZmlnOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJpZ2dlck5hbWU6IE5hbWUgb2YgdGhlIHRyaWdnZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJpZ2dlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmlnZ2VyVHlwZTogVHlwZSBvZiB0aGUgdHJpZ2dlci5cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmlnZ2VyVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgdHJpZ2dlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnZvY2F0aW9uUm9sZTogSW52b2NhdGlvbiByb2xlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludm9jYXRpb25Sb2xlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHF1YWxpZmllcjogUXVhbGlmaWVyIG9mIHRoZSB0cmlnZ2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHF1YWxpZmllcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VBcm46IFNvdXJjZSBBUk4gb2YgdGhlIHRyaWdnZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlQXJuPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1RyaWdnZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVHJpZ2dlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1RyaWdnZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyaWdnZXJUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRyaWdnZXJUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmlnZ2VyVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50cmlnZ2VyVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyaWdnZXJOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRyaWdnZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmlnZ2VyTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50cmlnZ2VyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlQXJuJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNvdXJjZUFybikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJpZ2dlckNvbmZpZycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50cmlnZ2VyQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmlnZ2VyQ29uZmlnJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy50cmlnZ2VyQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnZvY2F0aW9uUm9sZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnZvY2F0aW9uUm9sZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NUcmlnZ2VyUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDMzo6VHJpZ2dlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVHJpZ2dlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzM6OlRyaWdnZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVHJpZ2dlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVHJpZ2dlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdGdW5jdGlvbk5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSksXG4gICAgICAnVHJpZ2dlckNvbmZpZyc6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRyaWdnZXJDb25maWcpLFxuICAgICAgJ1RyaWdnZXJOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50cmlnZ2VyTmFtZSksXG4gICAgICAnVHJpZ2dlclR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyaWdnZXJUeXBlKSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgJ0ludm9jYXRpb25Sb2xlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnZvY2F0aW9uUm9sZSksXG4gICAgICAnUXVhbGlmaWVyJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5xdWFsaWZpZXIpLFxuICAgICAgJ1NvdXJjZUFybic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc291cmNlQXJuKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpGQzM6OlRyaWdnZXJgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIEZ1bmN0aW9uIENvbXB1dGUgMy4wIHRyaWdnZXIuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFRyaWdnZXJgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjMy10cmlnZ2VyXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NUcmlnZ2VyIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpGQzM6OlRyaWdnZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRnVuY3Rpb25OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRyaWdnZXJJZDogVGhlIHRyaWdnZXIgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUcmlnZ2VySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVHJpZ2dlck5hbWU6IFRyaWdnZXIgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyaWdnZXJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVybEludGVybmV0OiBUaGUgcHVibGljIGRvbWFpbiBhZGRyZXNzLiBZb3UgY2FuIGFjY2VzcyBIVFRQIHRyaWdnZXJzIG92ZXIgdGhlIEludGVybmV0IGJ5IHVzaW5nIEhUVFAgb3IgSFRUUFMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVcmxJbnRlcm5ldDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBVcmxJbnRyYW5ldDogVGhlIHByaXZhdGUgZW5kcG9pbnQuIEluIGEgVlBDLCB5b3UgY2FuIGFjY2VzcyBIVFRQIHRyaWdnZXJzIGJ5IHVzaW5nIEhUVFAgb3IgSFRUUFMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVcmxJbnRyYW5ldDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIGZ1bmN0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyaWdnZXJDb25maWc6IFRyaWdnZXIgY29uZmlnLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmlnZ2VyQ29uZmlnOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJpZ2dlck5hbWU6IE5hbWUgb2YgdGhlIHRyaWdnZXIuXG4gICAgICovXG4gICAgcHVibGljIHRyaWdnZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJpZ2dlclR5cGU6IFR5cGUgb2YgdGhlIHRyaWdnZXIuXG4gICAgICovXG4gICAgcHVibGljIHRyaWdnZXJUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIHRoZSB0cmlnZ2VyLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludm9jYXRpb25Sb2xlOiBJbnZvY2F0aW9uIHJvbGUuXG4gICAgICovXG4gICAgcHVibGljIGludm9jYXRpb25Sb2xlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcXVhbGlmaWVyOiBRdWFsaWZpZXIgb2YgdGhlIHRyaWdnZXIuXG4gICAgICovXG4gICAgcHVibGljIHF1YWxpZmllcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZUFybjogU291cmNlIEFSTiBvZiB0aGUgdHJpZ2dlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgc291cmNlQXJuOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVHJpZ2dlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVHJpZ2dlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRnVuY3Rpb25OYW1lID0gdGhpcy5nZXRBdHQoJ0Z1bmN0aW9uTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJUcmlnZ2VySWQgPSB0aGlzLmdldEF0dCgnVHJpZ2dlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0clRyaWdnZXJOYW1lID0gdGhpcy5nZXRBdHQoJ1RyaWdnZXJOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clVybEludGVybmV0ID0gdGhpcy5nZXRBdHQoJ1VybEludGVybmV0Jyk7XG4gICAgICAgIHRoaXMuYXR0clVybEludHJhbmV0ID0gdGhpcy5nZXRBdHQoJ1VybEludHJhbmV0Jyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZ1bmN0aW9uTmFtZSA9IHByb3BzLmZ1bmN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50cmlnZ2VyQ29uZmlnID0gcHJvcHMudHJpZ2dlckNvbmZpZztcbiAgICAgICAgdGhpcy50cmlnZ2VyTmFtZSA9IHByb3BzLnRyaWdnZXJOYW1lO1xuICAgICAgICB0aGlzLnRyaWdnZXJUeXBlID0gcHJvcHMudHJpZ2dlclR5cGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pbnZvY2F0aW9uUm9sZSA9IHByb3BzLmludm9jYXRpb25Sb2xlO1xuICAgICAgICB0aGlzLnF1YWxpZmllciA9IHByb3BzLnF1YWxpZmllcjtcbiAgICAgICAgdGhpcy5zb3VyY2VBcm4gPSBwcm9wcy5zb3VyY2VBcm47XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiB0aGlzLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHRyaWdnZXJDb25maWc6IHRoaXMudHJpZ2dlckNvbmZpZyxcbiAgICAgICAgICAgIHRyaWdnZXJOYW1lOiB0aGlzLnRyaWdnZXJOYW1lLFxuICAgICAgICAgICAgdHJpZ2dlclR5cGU6IHRoaXMudHJpZ2dlclR5cGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGludm9jYXRpb25Sb2xlOiB0aGlzLmludm9jYXRpb25Sb2xlLFxuICAgICAgICAgICAgcXVhbGlmaWVyOiB0aGlzLnF1YWxpZmllcixcbiAgICAgICAgICAgIHNvdXJjZUFybjogdGhpcy5zb3VyY2VBcm4sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1RyaWdnZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==