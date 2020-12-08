"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosVersion = exports.RosTrigger = exports.RosService = exports.RosProvisionConfig = exports.RosFunctionInvoker = exports.RosFunction = exports.RosCustomDomain = exports.RosAlias = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAliasProps`
 *
 * @param properties - the TypeScript properties of a `RosAliasProps`
 *
 * @returns the result of the validation.
 */
function RosAliasPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('versionId', ros.validateString)(properties.versionId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if (properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
        errors.collect(ros.propertyValidator('serviceName', ros.validateLength)({
            data: properties.serviceName.length,
            min: 1,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('additionalVersion', ros.validateString)(properties.additionalVersion));
    errors.collect(ros.propertyValidator('aliasName', ros.requiredValidator)(properties.aliasName));
    errors.collect(ros.propertyValidator('aliasName', ros.validateString)(properties.aliasName));
    if (properties.additionalWeight && (typeof properties.additionalWeight) !== 'object') {
        errors.collect(ros.propertyValidator('additionalWeight', ros.validateRange)({
            data: properties.additionalWeight,
            min: 0,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('additionalWeight', ros.validateNumber)(properties.additionalWeight));
    return errors.wrap('supplied properties not correct for "RosAliasProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Alias` resource
 *
 * @param properties - the TypeScript properties of a `RosAliasProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Alias` resource.
 */
// @ts-ignore TS6133
function rosAliasPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAliasPropsValidator(properties).assertSuccess();
    }
    return {
        AliasName: ros.stringToRosTemplate(properties.aliasName),
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
        AdditionalVersion: ros.stringToRosTemplate(properties.additionalVersion),
        AdditionalWeight: ros.numberToRosTemplate(properties.additionalWeight),
        Description: ros.stringToRosTemplate(properties.description),
        VersionId: ros.stringToRosTemplate(properties.versionId),
    };
}
/**
 * A ROS template type:  `ALIYUN::FC::Alias`
 */
class RosAlias extends ros.RosResource {
    /**
     * Create a new `ALIYUN::FC::Alias`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAlias.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAliasName = ros.Token.asString(this.getAtt('AliasName'));
        this.attrServiceName = ros.Token.asString(this.getAtt('ServiceName'));
        this.attrVersionId = ros.Token.asString(this.getAtt('VersionId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aliasName = props.aliasName;
        this.serviceName = props.serviceName;
        this.additionalVersion = props.additionalVersion;
        this.additionalWeight = props.additionalWeight;
        this.description = props.description;
        this.versionId = props.versionId;
    }
    get rosProperties() {
        return {
            aliasName: this.aliasName,
            serviceName: this.serviceName,
            additionalVersion: this.additionalVersion,
            additionalWeight: this.additionalWeight,
            description: this.description,
            versionId: this.versionId,
        };
    }
    renderProperties(props) {
        return rosAliasPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAlias = RosAlias;
/**
 * The resource type name for this resource class.
 */
RosAlias.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Alias";
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
    errors.collect(ros.propertyValidator('apiVersion', ros.validateString)(properties.apiVersion));
    errors.collect(ros.propertyValidator('certConfig', RosCustomDomain_CertConfigPropertyValidator)(properties.certConfig));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('routeConfig', RosCustomDomain_RouteConfigPropertyValidator)(properties.routeConfig));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    return errors.wrap('supplied properties not correct for "RosCustomDomainProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::CustomDomain` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::CustomDomain` resource.
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
        DomainName: ros.stringToRosTemplate(properties.domainName),
        Protocol: ros.stringToRosTemplate(properties.protocol),
        ApiVersion: ros.stringToRosTemplate(properties.apiVersion),
        CertConfig: rosCustomDomainCertConfigPropertyToRosTemplate(properties.certConfig),
        RouteConfig: rosCustomDomainRouteConfigPropertyToRosTemplate(properties.routeConfig),
    };
}
/**
 * A ROS template type:  `ALIYUN::FC::CustomDomain`
 */
class RosCustomDomain extends ros.RosResource {
    /**
     * Create a new `ALIYUN::FC::CustomDomain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCustomDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomain = ros.Token.asString(this.getAtt('Domain'));
        this.attrDomainName = ros.Token.asString(this.getAtt('DomainName'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.protocol = props.protocol;
        this.apiVersion = props.apiVersion;
        this.certConfig = props.certConfig;
        this.routeConfig = props.routeConfig;
    }
    get rosProperties() {
        return {
            domainName: this.domainName,
            protocol: this.protocol,
            apiVersion: this.apiVersion,
            certConfig: this.certConfig,
            routeConfig: this.routeConfig,
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
RosCustomDomain.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::CustomDomain";
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::CustomDomain.CertConfig` resource
 *
 * @param properties - the TypeScript properties of a `CertConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::CustomDomain.CertConfig` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainCertConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomDomain_CertConfigPropertyValidator(properties).assertSuccess();
    return {
        PrivateKey: ros.stringToRosTemplate(properties.privateKey),
        CertName: ros.stringToRosTemplate(properties.certName),
        Certificate: ros.stringToRosTemplate(properties.certificate),
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
    errors.collect(ros.propertyValidator('routes', ros.listValidator(RosCustomDomain_RoutesPropertyValidator))(properties.routes));
    return errors.wrap('supplied properties not correct for "RouteConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::CustomDomain.RouteConfig` resource
 *
 * @param properties - the TypeScript properties of a `RouteConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::CustomDomain.RouteConfig` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainRouteConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomDomain_RouteConfigPropertyValidator(properties).assertSuccess();
    return {
        Routes: ros.listMapper(rosCustomDomainRoutesPropertyToRosTemplate)(properties.routes),
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
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('qualifier', ros.validateString)(properties.qualifier));
    return errors.wrap('supplied properties not correct for "RoutesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::CustomDomain.Routes` resource
 *
 * @param properties - the TypeScript properties of a `RoutesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::CustomDomain.Routes` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainRoutesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomDomain_RoutesPropertyValidator(properties).assertSuccess();
    return {
        Path: ros.stringToRosTemplate(properties.path),
        FunctionName: ros.stringToRosTemplate(properties.functionName),
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
        Qualifier: ros.stringToRosTemplate(properties.qualifier),
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
            max: 3072,
        }));
    }
    errors.collect(ros.propertyValidator('memorySize', ros.validateNumber)(properties.memorySize));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 600,
        }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('handler', ros.requiredValidator)(properties.handler));
    errors.collect(ros.propertyValidator('handler', ros.validateString)(properties.handler));
    errors.collect(ros.propertyValidator('customContainerConfig', RosFunction_CustomContainerConfigPropertyValidator)(properties.customContainerConfig));
    errors.collect(ros.propertyValidator('code', RosFunction_CodePropertyValidator)(properties.code));
    errors.collect(ros.propertyValidator('asyncConfiguration', RosFunction_AsyncConfigurationPropertyValidator)(properties.asyncConfiguration));
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('caPort', ros.validateNumber)(properties.caPort));
    errors.collect(ros.propertyValidator('runtime', ros.requiredValidator)(properties.runtime));
    errors.collect(ros.propertyValidator('runtime', ros.validateString)(properties.runtime));
    errors.collect(ros.propertyValidator('environmentVariables', ros.hashValidator(ros.validateAny))(properties.environmentVariables));
    errors.collect(ros.propertyValidator('initializer', ros.validateString)(properties.initializer));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if (properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
        errors.collect(ros.propertyValidator('serviceName', ros.validateLength)({
            data: properties.serviceName.length,
            min: 1,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('initializationTimeout', ros.validateNumber)(properties.initializationTimeout));
    if (properties.instanceConcurrency && (typeof properties.instanceConcurrency) !== 'object') {
        errors.collect(ros.propertyValidator('instanceConcurrency', ros.validateRange)({
            data: properties.instanceConcurrency,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('instanceConcurrency', ros.validateNumber)(properties.instanceConcurrency));
    return errors.wrap('supplied properties not correct for "RosFunctionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Function` resource
 *
 * @param properties - the TypeScript properties of a `RosFunctionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Function` resource.
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
        FunctionName: ros.stringToRosTemplate(properties.functionName),
        Handler: ros.stringToRosTemplate(properties.handler),
        Runtime: ros.stringToRosTemplate(properties.runtime),
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
        AsyncConfiguration: rosFunctionAsyncConfigurationPropertyToRosTemplate(properties.asyncConfiguration),
        CAPort: ros.numberToRosTemplate(properties.caPort),
        Code: rosFunctionCodePropertyToRosTemplate(properties.code),
        CustomContainerConfig: rosFunctionCustomContainerConfigPropertyToRosTemplate(properties.customContainerConfig),
        Description: ros.stringToRosTemplate(properties.description),
        EnvironmentVariables: ros.hashMapper(ros.objectToRosTemplate)(properties.environmentVariables),
        InitializationTimeout: ros.numberToRosTemplate(properties.initializationTimeout),
        Initializer: ros.stringToRosTemplate(properties.initializer),
        InstanceConcurrency: ros.numberToRosTemplate(properties.instanceConcurrency),
        MemorySize: ros.numberToRosTemplate(properties.memorySize),
        Timeout: ros.numberToRosTemplate(properties.timeout),
    };
}
/**
 * A ROS template type:  `ALIYUN::FC::Function`
 */
class RosFunction extends ros.RosResource {
    /**
     * Create a new `ALIYUN::FC::Function`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosFunction.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = ros.Token.asString(this.getAtt('ARN'));
        this.attrFunctionId = ros.Token.asString(this.getAtt('FunctionId'));
        this.attrFunctionName = ros.Token.asString(this.getAtt('FunctionName'));
        this.attrServiceName = ros.Token.asString(this.getAtt('ServiceName'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.functionName = props.functionName;
        this.handler = props.handler;
        this.runtime = props.runtime;
        this.serviceName = props.serviceName;
        this.asyncConfiguration = props.asyncConfiguration;
        this.caPort = props.caPort;
        this.code = props.code;
        this.customContainerConfig = props.customContainerConfig;
        this.description = props.description;
        this.environmentVariables = props.environmentVariables;
        this.initializationTimeout = props.initializationTimeout;
        this.initializer = props.initializer;
        this.instanceConcurrency = props.instanceConcurrency;
        this.memorySize = props.memorySize;
        this.timeout = props.timeout;
    }
    get rosProperties() {
        return {
            functionName: this.functionName,
            handler: this.handler,
            runtime: this.runtime,
            serviceName: this.serviceName,
            asyncConfiguration: this.asyncConfiguration,
            caPort: this.caPort,
            code: this.code,
            customContainerConfig: this.customContainerConfig,
            description: this.description,
            environmentVariables: this.environmentVariables,
            initializationTimeout: this.initializationTimeout,
            initializer: this.initializer,
            instanceConcurrency: this.instanceConcurrency,
            memorySize: this.memorySize,
            timeout: this.timeout,
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
RosFunction.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Function";
/**
 * Determine whether the given properties match those of a `AsyncConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `AsyncConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_AsyncConfigurationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('destination', RosFunction_DestinationPropertyValidator)(properties.destination));
    if (properties.maxAsyncEventAgeInSeconds && (typeof properties.maxAsyncEventAgeInSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('maxAsyncEventAgeInSeconds', ros.validateRange)({
            data: properties.maxAsyncEventAgeInSeconds,
            min: 1,
            max: 2592000,
        }));
    }
    errors.collect(ros.propertyValidator('maxAsyncEventAgeInSeconds', ros.validateNumber)(properties.maxAsyncEventAgeInSeconds));
    if (properties.maxAsyncRetryAttempts && (typeof properties.maxAsyncRetryAttempts) !== 'object') {
        errors.collect(ros.propertyValidator('maxAsyncRetryAttempts', ros.validateRange)({
            data: properties.maxAsyncRetryAttempts,
            min: 0,
            max: 8,
        }));
    }
    errors.collect(ros.propertyValidator('maxAsyncRetryAttempts', ros.validateNumber)(properties.maxAsyncRetryAttempts));
    return errors.wrap('supplied properties not correct for "AsyncConfigurationProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.AsyncConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `AsyncConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.AsyncConfiguration` resource.
 */
// @ts-ignore TS6133
function rosFunctionAsyncConfigurationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_AsyncConfigurationPropertyValidator(properties).assertSuccess();
    return {
        Destination: rosFunctionDestinationPropertyToRosTemplate(properties.destination),
        MaxAsyncEventAgeInSeconds: ros.numberToRosTemplate(properties.maxAsyncEventAgeInSeconds),
        MaxAsyncRetryAttempts: ros.numberToRosTemplate(properties.maxAsyncRetryAttempts),
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
    errors.collect(ros.propertyValidator('ossObjectName', ros.validateString)(properties.ossObjectName));
    errors.collect(ros.propertyValidator('ossBucketName', ros.validateString)(properties.ossBucketName));
    return errors.wrap('supplied properties not correct for "CodeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.Code` resource
 *
 * @param properties - the TypeScript properties of a `CodeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.Code` resource.
 */
// @ts-ignore TS6133
function rosFunctionCodePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_CodePropertyValidator(properties).assertSuccess();
    return {
        SourceCode: ros.stringToRosTemplate(properties.sourceCode),
        ZipFile: ros.stringToRosTemplate(properties.zipFile),
        OssObjectName: ros.stringToRosTemplate(properties.ossObjectName),
        OssBucketName: ros.stringToRosTemplate(properties.ossBucketName),
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
    errors.collect(ros.propertyValidator('args', ros.validateString)(properties.args));
    errors.collect(ros.propertyValidator('command', ros.validateString)(properties.command));
    errors.collect(ros.propertyValidator('image', ros.requiredValidator)(properties.image));
    errors.collect(ros.propertyValidator('image', ros.validateString)(properties.image));
    return errors.wrap('supplied properties not correct for "CustomContainerConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.CustomContainerConfig` resource
 *
 * @param properties - the TypeScript properties of a `CustomContainerConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.CustomContainerConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionCustomContainerConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_CustomContainerConfigPropertyValidator(properties).assertSuccess();
    return {
        Args: ros.stringToRosTemplate(properties.args),
        Command: ros.stringToRosTemplate(properties.command),
        Image: ros.stringToRosTemplate(properties.image),
    };
}
/**
 * Determine whether the given properties match those of a `DestinationProperty`
 *
 * @param properties - the TypeScript properties of a `DestinationProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_DestinationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('onSuccess', ros.validateString)(properties.onSuccess));
    errors.collect(ros.propertyValidator('onFailure', ros.validateString)(properties.onFailure));
    return errors.wrap('supplied properties not correct for "DestinationProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.Destination` resource
 *
 * @param properties - the TypeScript properties of a `DestinationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.Destination` resource.
 */
// @ts-ignore TS6133
function rosFunctionDestinationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_DestinationPropertyValidator(properties).assertSuccess();
    return {
        OnSuccess: ros.stringToRosTemplate(properties.onSuccess),
        OnFailure: ros.stringToRosTemplate(properties.onFailure),
    };
}
/**
 * Determine whether the given properties match those of a `RosFunctionInvokerProps`
 *
 * @param properties - the TypeScript properties of a `RosFunctionInvokerProps`
 *
 * @returns the result of the validation.
 */
function RosFunctionInvokerPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('executeVersion', ros.validateNumber)(properties.executeVersion));
    errors.collect(ros.propertyValidator('serviceRegionId', ros.validateString)(properties.serviceRegionId));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if (properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
        errors.collect(ros.propertyValidator('serviceName', ros.validateLength)({
            data: properties.serviceName.length,
            min: 1,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('async', ros.validateBoolean)(properties.async));
    errors.collect(ros.propertyValidator('event', ros.validateString)(properties.event));
    errors.collect(ros.propertyValidator('qualifier', ros.validateString)(properties.qualifier));
    errors.collect(ros.propertyValidator('checkError', ros.validateBoolean)(properties.checkError));
    return errors.wrap('supplied properties not correct for "RosFunctionInvokerProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::FunctionInvoker` resource
 *
 * @param properties - the TypeScript properties of a `RosFunctionInvokerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::FunctionInvoker` resource.
 */
// @ts-ignore TS6133
function rosFunctionInvokerPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosFunctionInvokerPropsValidator(properties).assertSuccess();
    }
    return {
        FunctionName: ros.stringToRosTemplate(properties.functionName),
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
        Async: ros.booleanToRosTemplate(properties.async),
        CheckError: ros.booleanToRosTemplate(properties.checkError),
        Event: ros.stringToRosTemplate(properties.event),
        ExecuteVersion: ros.numberToRosTemplate(properties.executeVersion),
        Qualifier: ros.stringToRosTemplate(properties.qualifier),
        ServiceRegionId: ros.stringToRosTemplate(properties.serviceRegionId),
    };
}
/**
 * A ROS template type:  `ALIYUN::FC::FunctionInvoker`
 */
class RosFunctionInvoker extends ros.RosResource {
    /**
     * Create a new `ALIYUN::FC::FunctionInvoker`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosFunctionInvoker.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrResult = ros.Token.asString(this.getAtt('Result'));
        this.attrResultType = ros.Token.asString(this.getAtt('ResultType'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.functionName = props.functionName;
        this.serviceName = props.serviceName;
        this.async = props.async;
        this.checkError = props.checkError;
        this.event = props.event;
        this.executeVersion = props.executeVersion;
        this.qualifier = props.qualifier;
        this.serviceRegionId = props.serviceRegionId;
    }
    get rosProperties() {
        return {
            functionName: this.functionName,
            serviceName: this.serviceName,
            async: this.async,
            checkError: this.checkError,
            event: this.event,
            executeVersion: this.executeVersion,
            qualifier: this.qualifier,
            serviceRegionId: this.serviceRegionId,
        };
    }
    renderProperties(props) {
        return rosFunctionInvokerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosFunctionInvoker = RosFunctionInvoker;
/**
 * The resource type name for this resource class.
 */
RosFunctionInvoker.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::FunctionInvoker";
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
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('target', ros.requiredValidator)(properties.target));
    errors.collect(ros.propertyValidator('target', ros.validateNumber)(properties.target));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if (properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
        errors.collect(ros.propertyValidator('serviceName', ros.validateLength)({
            data: properties.serviceName.length,
            min: 1,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('qualifier', ros.requiredValidator)(properties.qualifier));
    errors.collect(ros.propertyValidator('qualifier', ros.validateString)(properties.qualifier));
    return errors.wrap('supplied properties not correct for "RosProvisionConfigProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::ProvisionConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosProvisionConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::ProvisionConfig` resource.
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
        FunctionName: ros.stringToRosTemplate(properties.functionName),
        Qualifier: ros.stringToRosTemplate(properties.qualifier),
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
        Target: ros.numberToRosTemplate(properties.target),
    };
}
/**
 * A ROS template type:  `ALIYUN::FC::ProvisionConfig`
 */
class RosProvisionConfig extends ros.RosResource {
    /**
     * Create a new `ALIYUN::FC::ProvisionConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosProvisionConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFunctionName = ros.Token.asString(this.getAtt('FunctionName'));
        this.attrQualifier = ros.Token.asString(this.getAtt('Qualifier'));
        this.attrResource = ros.Token.asString(this.getAtt('Resource'));
        this.attrServiceName = ros.Token.asString(this.getAtt('ServiceName'));
        this.attrTarget = ros.Token.asString(this.getAtt('Target'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.functionName = props.functionName;
        this.qualifier = props.qualifier;
        this.serviceName = props.serviceName;
        this.target = props.target;
    }
    get rosProperties() {
        return {
            functionName: this.functionName,
            qualifier: this.qualifier,
            serviceName: this.serviceName,
            target: this.target,
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
RosProvisionConfig.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::ProvisionConfig";
/**
 * Determine whether the given properties match those of a `RosServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceProps`
 *
 * @returns the result of the validation.
 */
function RosServicePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('internetAccess', ros.validateBoolean)(properties.internetAccess));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('vpcConfig', RosService_VpcConfigPropertyValidator)(properties.vpcConfig));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if (properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
        errors.collect(ros.propertyValidator('serviceName', ros.validateLength)({
            data: properties.serviceName.length,
            min: 1,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('nasConfig', RosService_NasConfigPropertyValidator)(properties.nasConfig));
    errors.collect(ros.propertyValidator('logConfig', RosService_LogConfigPropertyValidator)(properties.logConfig));
    return errors.wrap('supplied properties not correct for "RosServiceProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Service` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Service` resource.
 */
// @ts-ignore TS6133
function rosServicePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosServicePropsValidator(properties).assertSuccess();
    }
    return {
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
        DeletionForce: ros.booleanToRosTemplate(properties.deletionForce),
        Description: ros.stringToRosTemplate(properties.description),
        InternetAccess: ros.booleanToRosTemplate(properties.internetAccess),
        LogConfig: rosServiceLogConfigPropertyToRosTemplate(properties.logConfig),
        NasConfig: rosServiceNasConfigPropertyToRosTemplate(properties.nasConfig),
        Role: ros.stringToRosTemplate(properties.role),
        Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
        VpcConfig: rosServiceVpcConfigPropertyToRosTemplate(properties.vpcConfig),
    };
}
/**
 * A ROS template type:  `ALIYUN::FC::Service`
 */
class RosService extends ros.RosResource {
    /**
     * Create a new `ALIYUN::FC::Service`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosService.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServiceId = ros.Token.asString(this.getAtt('ServiceId'));
        this.attrServiceName = ros.Token.asString(this.getAtt('ServiceName'));
        this.attrTags = ros.Token.asString(this.getAtt('Tags'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceName = props.serviceName;
        this.deletionForce = props.deletionForce;
        this.description = props.description;
        this.internetAccess = props.internetAccess;
        this.logConfig = props.logConfig;
        this.nasConfig = props.nasConfig;
        this.role = props.role;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::FC::Service", props.tags, { tagPropertyName: 'tags' });
        this.vpcConfig = props.vpcConfig;
    }
    get rosProperties() {
        return {
            serviceName: this.serviceName,
            deletionForce: this.deletionForce,
            description: this.description,
            internetAccess: this.internetAccess,
            logConfig: this.logConfig,
            nasConfig: this.nasConfig,
            role: this.role,
            tags: this.tags.renderTags(),
            vpcConfig: this.vpcConfig,
        };
    }
    renderProperties(props) {
        return rosServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosService = RosService;
/**
 * The resource type name for this resource class.
 */
RosService.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Service";
/**
 * Determine whether the given properties match those of a `LogConfigProperty`
 *
 * @param properties - the TypeScript properties of a `LogConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosService_LogConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('logstore', ros.validateString)(properties.logstore));
    return errors.wrap('supplied properties not correct for "LogConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.LogConfig` resource
 *
 * @param properties - the TypeScript properties of a `LogConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.LogConfig` resource.
 */
// @ts-ignore TS6133
function rosServiceLogConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosService_LogConfigPropertyValidator(properties).assertSuccess();
    return {
        Project: ros.stringToRosTemplate(properties.project),
        Logstore: ros.stringToRosTemplate(properties.logstore),
    };
}
/**
 * Determine whether the given properties match those of a `MountPointsProperty`
 *
 * @param properties - the TypeScript properties of a `MountPointsProperty`
 *
 * @returns the result of the validation.
 */
function RosService_MountPointsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverAddr', ros.requiredValidator)(properties.serverAddr));
    errors.collect(ros.propertyValidator('serverAddr', ros.validateString)(properties.serverAddr));
    errors.collect(ros.propertyValidator('mountDir', ros.requiredValidator)(properties.mountDir));
    errors.collect(ros.propertyValidator('mountDir', ros.validateString)(properties.mountDir));
    return errors.wrap('supplied properties not correct for "MountPointsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.MountPoints` resource
 *
 * @param properties - the TypeScript properties of a `MountPointsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.MountPoints` resource.
 */
// @ts-ignore TS6133
function rosServiceMountPointsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosService_MountPointsPropertyValidator(properties).assertSuccess();
    return {
        ServerAddr: ros.stringToRosTemplate(properties.serverAddr),
        MountDir: ros.stringToRosTemplate(properties.mountDir),
    };
}
/**
 * Determine whether the given properties match those of a `NasConfigProperty`
 *
 * @param properties - the TypeScript properties of a `NasConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosService_NasConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountPoints', ros.requiredValidator)(properties.mountPoints));
    errors.collect(ros.propertyValidator('mountPoints', ros.listValidator(RosService_MountPointsPropertyValidator))(properties.mountPoints));
    errors.collect(ros.propertyValidator('userId', ros.requiredValidator)(properties.userId));
    if (properties.userId && (typeof properties.userId) !== 'object') {
        errors.collect(ros.propertyValidator('userId', ros.validateRange)({
            data: properties.userId,
            min: -1,
            max: 65534,
        }));
    }
    errors.collect(ros.propertyValidator('userId', ros.validateNumber)(properties.userId));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    if (properties.groupId && (typeof properties.groupId) !== 'object') {
        errors.collect(ros.propertyValidator('groupId', ros.validateRange)({
            data: properties.groupId,
            min: -1,
            max: 65534,
        }));
    }
    errors.collect(ros.propertyValidator('groupId', ros.validateNumber)(properties.groupId));
    return errors.wrap('supplied properties not correct for "NasConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.NasConfig` resource
 *
 * @param properties - the TypeScript properties of a `NasConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.NasConfig` resource.
 */
// @ts-ignore TS6133
function rosServiceNasConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosService_NasConfigPropertyValidator(properties).assertSuccess();
    return {
        MountPoints: ros.listMapper(rosServiceMountPointsPropertyToRosTemplate)(properties.mountPoints),
        UserId: ros.numberToRosTemplate(properties.userId),
        GroupId: ros.numberToRosTemplate(properties.groupId),
    };
}
/**
 * Determine whether the given properties match those of a `VpcConfigProperty`
 *
 * @param properties - the TypeScript properties of a `VpcConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosService_VpcConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.requiredValidator)(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateAny))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    return errors.wrap('supplied properties not correct for "VpcConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.VpcConfig` resource
 *
 * @param properties - the TypeScript properties of a `VpcConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.VpcConfig` resource.
 */
// @ts-ignore TS6133
function rosServiceVpcConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosService_VpcConfigPropertyValidator(properties).assertSuccess();
    return {
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        VSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.vSwitchIds),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
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
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('triggerType', ros.requiredValidator)(properties.triggerType));
    errors.collect(ros.propertyValidator('triggerType', ros.validateString)(properties.triggerType));
    errors.collect(ros.propertyValidator('triggerName', ros.requiredValidator)(properties.triggerName));
    errors.collect(ros.propertyValidator('triggerName', ros.validateString)(properties.triggerName));
    errors.collect(ros.propertyValidator('sourceArn', ros.validateString)(properties.sourceArn));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if (properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
        errors.collect(ros.propertyValidator('serviceName', ros.validateLength)({
            data: properties.serviceName.length,
            min: 1,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('triggerConfig', ros.requiredValidator)(properties.triggerConfig));
    errors.collect(ros.propertyValidator('triggerConfig', ros.hashValidator(ros.validateAny))(properties.triggerConfig));
    errors.collect(ros.propertyValidator('invocationRole', ros.validateString)(properties.invocationRole));
    errors.collect(ros.propertyValidator('qualifier', ros.validateString)(properties.qualifier));
    return errors.wrap('supplied properties not correct for "RosTriggerProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Trigger` resource
 *
 * @param properties - the TypeScript properties of a `RosTriggerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Trigger` resource.
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
        FunctionName: ros.stringToRosTemplate(properties.functionName),
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
        TriggerConfig: ros.hashMapper(ros.objectToRosTemplate)(properties.triggerConfig),
        TriggerName: ros.stringToRosTemplate(properties.triggerName),
        TriggerType: ros.stringToRosTemplate(properties.triggerType),
        InvocationRole: ros.stringToRosTemplate(properties.invocationRole),
        Qualifier: ros.stringToRosTemplate(properties.qualifier),
        SourceArn: ros.stringToRosTemplate(properties.sourceArn),
    };
}
/**
 * A ROS template type:  `ALIYUN::FC::Trigger`
 */
class RosTrigger extends ros.RosResource {
    /**
     * Create a new `ALIYUN::FC::Trigger`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosTrigger.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFunctionName = ros.Token.asString(this.getAtt('FunctionName'));
        this.attrServiceName = ros.Token.asString(this.getAtt('ServiceName'));
        this.attrTriggerId = ros.Token.asString(this.getAtt('TriggerId'));
        this.attrTriggerName = ros.Token.asString(this.getAtt('TriggerName'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.functionName = props.functionName;
        this.serviceName = props.serviceName;
        this.triggerConfig = props.triggerConfig;
        this.triggerName = props.triggerName;
        this.triggerType = props.triggerType;
        this.invocationRole = props.invocationRole;
        this.qualifier = props.qualifier;
        this.sourceArn = props.sourceArn;
    }
    get rosProperties() {
        return {
            functionName: this.functionName,
            serviceName: this.serviceName,
            triggerConfig: this.triggerConfig,
            triggerName: this.triggerName,
            triggerType: this.triggerType,
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
RosTrigger.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Trigger";
/**
 * Determine whether the given properties match those of a `RosVersionProps`
 *
 * @param properties - the TypeScript properties of a `RosVersionProps`
 *
 * @returns the result of the validation.
 */
function RosVersionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if (properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
        errors.collect(ros.propertyValidator('serviceName', ros.validateLength)({
            data: properties.serviceName.length,
            min: 1,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    return errors.wrap('supplied properties not correct for "RosVersionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Version` resource
 *
 * @param properties - the TypeScript properties of a `RosVersionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Version` resource.
 */
// @ts-ignore TS6133
function rosVersionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVersionPropsValidator(properties).assertSuccess();
    }
    return {
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
        Description: ros.stringToRosTemplate(properties.description),
    };
}
/**
 * A ROS template type:  `ALIYUN::FC::Version`
 */
class RosVersion extends ros.RosResource {
    /**
     * Create a new `ALIYUN::FC::Version`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVersion.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServiceName = ros.Token.asString(this.getAtt('ServiceName'));
        this.attrVersionId = ros.Token.asString(this.getAtt('VersionId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceName = props.serviceName;
        this.description = props.description;
    }
    get rosProperties() {
        return {
            serviceName: this.serviceName,
            description: this.description,
        };
    }
    renderProperties(props) {
        return rosVersionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVersion = RosVersion;
/**
 * The resource type name for this resource class.
 */
RosVersion.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Version";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmMuZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmMuZ2VuZXJhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5REFBeUQ7OztBQUV6RCw4Q0FBOEM7QUFzQzlDOzs7Ozs7R0FNRztBQUNILFNBQVMsc0JBQXNCLENBQUMsVUFBZTtJQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLElBQUcsVUFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDbEgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRSxJQUFJLEVBQUUsVUFBVSxDQUFD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QztBQUNOLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQWEsVUFBVyxTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBa0MzQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCLEVBQUUsZ0NBQXlDO1FBQzNHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ2hDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7QUE1REwsZ0NBNkRDO0FBNURHOztHQUVHO0FBQ29CLGlDQUFzQixHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkZDOjpBbGlhc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBbGlhc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGlhc05hbWU6IEFsaWFzIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBhbGlhc05hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhZGRpdGlvbmFsVmVyc2lvbjogQWRkaXRpb25hbCB2ZXJzaW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWRkaXRpb25hbFZlcnNpb24/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWRkaXRpb25hbFdlaWdodDogVHJhZmZpYyB3ZWlnaHQgb2YgYWRkaXRpb25hbCB2ZXJzaW9uLiBGcm9tIDAgdG8gMTAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFkZGl0aW9uYWxXZWlnaHQ/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFZlcnNpb24gZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2ZXJzaW9uSWQ6IFZlcnNpb24gSURcbiAgICAgKi9cbiAgICByZWFkb25seSB2ZXJzaW9uSWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQWxpYXNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWxpYXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBbGlhc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmVyc2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZlcnNpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5zZXJ2aWNlTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc2VydmljZU5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zZXJ2aWNlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEyOCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FkZGl0aW9uYWxWZXJzaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFkZGl0aW9uYWxWZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGlhc05hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYWxpYXNOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGlhc05hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWxpYXNOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5hZGRpdGlvbmFsV2VpZ2h0ICYmICh0eXBlb2YgcHJvcGVydGllcy5hZGRpdGlvbmFsV2VpZ2h0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhZGRpdGlvbmFsV2VpZ2h0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYWRkaXRpb25hbFdlaWdodCxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhZGRpdGlvbmFsV2VpZ2h0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmFkZGl0aW9uYWxXZWlnaHQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQWxpYXNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkFsaWFzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBbGlhc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6QWxpYXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQWxpYXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FsaWFzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQWxpYXNOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFsaWFzTmFtZSksXG4gICAgICBTZXJ2aWNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICBBZGRpdGlvbmFsVmVyc2lvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hZGRpdGlvbmFsVmVyc2lvbiksXG4gICAgICBBZGRpdGlvbmFsV2VpZ2h0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFkZGl0aW9uYWxXZWlnaHQpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgVmVyc2lvbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZlcnNpb25JZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6RkM6OkFsaWFzYFxuICovXG5leHBvcnQgY2xhc3MgUm9zQWxpYXMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkZDOjpBbGlhc1wiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFsaWFzTmFtZTogVGhlIGFsaWFzIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsaWFzTmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlTmFtZTogVGhlIHNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZU5hbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVmVyc2lvbklkOiBUaGUgdmVyc2lvbiBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVmVyc2lvbklkOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGlhc05hbWU6IEFsaWFzIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgYWxpYXNOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFkZGl0aW9uYWxWZXJzaW9uOiBBZGRpdGlvbmFsIHZlcnNpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkaXRpb25hbFZlcnNpb246IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhZGRpdGlvbmFsV2VpZ2h0OiBUcmFmZmljIHdlaWdodCBvZiBhZGRpdGlvbmFsIHZlcnNpb24uIEZyb20gMCB0byAxMDAuXG4gICAgICovXG4gICAgcHVibGljIGFkZGl0aW9uYWxXZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVmVyc2lvbiBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZlcnNpb25JZDogVmVyc2lvbiBJRFxuICAgICAqL1xuICAgIHB1YmxpYyB2ZXJzaW9uSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpGQzo6QWxpYXNgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FsaWFzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBbGlhcy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQWxpYXNOYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdBbGlhc05hbWUnKSk7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdTZXJ2aWNlTmFtZScpKTtcbiAgICAgICAgdGhpcy5hdHRyVmVyc2lvbklkID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdWZXJzaW9uSWQnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFsaWFzTmFtZSA9IHByb3BzLmFsaWFzTmFtZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHByb3BzLnNlcnZpY2VOYW1lO1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxWZXJzaW9uID0gcHJvcHMuYWRkaXRpb25hbFZlcnNpb247XG4gICAgICAgIHRoaXMuYWRkaXRpb25hbFdlaWdodCA9IHByb3BzLmFkZGl0aW9uYWxXZWlnaHQ7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy52ZXJzaW9uSWQgPSBwcm9wcy52ZXJzaW9uSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxpYXNOYW1lOiB0aGlzLmFsaWFzTmFtZSxcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiB0aGlzLnNlcnZpY2VOYW1lLFxuICAgICAgICAgICAgYWRkaXRpb25hbFZlcnNpb246IHRoaXMuYWRkaXRpb25hbFZlcnNpb24sXG4gICAgICAgICAgICBhZGRpdGlvbmFsV2VpZ2h0OiB0aGlzLmFkZGl0aW9uYWxXZWlnaHQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHZlcnNpb25JZDogdGhpcy52ZXJzaW9uSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0FsaWFzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpGQzo6Q3VzdG9tRG9tYWluYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0N1c3RvbURvbWFpblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lOiBkb21haW4gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRvbWFpbk5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm90b2NvbDogSFRUUCBvciBIVFRQLEhUVFBTXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvdG9jb2w6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcGlWZXJzaW9uOiBhcGkgdmVyc2lvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwaVZlcnNpb24/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VydENvbmZpZzogY2VydGlmaWNhdGUgaW5mb1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlcnRDb25maWc/OiBSb3NDdXN0b21Eb21haW4uQ2VydENvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlQ29uZmlnOiBSb3V0aW5nIHRhYmxlOiBwYXRoIHRvIGZ1bmN0aW9uIG1hcHBpbmd3aGVuIGEgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggYSBjdXN0b20gZG9tYWluIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZUNvbmZpZz86IFJvc0N1c3RvbURvbWFpbi5Sb3V0ZUNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0N1c3RvbURvbWFpblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDdXN0b21Eb21haW5Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDdXN0b21Eb21haW5Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwaVZlcnNpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXBpVmVyc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VydENvbmZpZycsIFJvc0N1c3RvbURvbWFpbl9DZXJ0Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2VydENvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kb21haW5OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkb21haW5OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRlQ29uZmlnJywgUm9zQ3VzdG9tRG9tYWluX1JvdXRlQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucm91dGVDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb3RvY29sJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByb3RvY29sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90b2NvbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm90b2NvbCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDdXN0b21Eb21haW5Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkN1c3RvbURvbWFpbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tRG9tYWluUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpDdXN0b21Eb21haW5gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ3VzdG9tRG9tYWluUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDdXN0b21Eb21haW5Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBEb21haW5OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpLFxuICAgICAgUHJvdG9jb2w6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvdG9jb2wpLFxuICAgICAgQXBpVmVyc2lvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hcGlWZXJzaW9uKSxcbiAgICAgIENlcnRDb25maWc6IHJvc0N1c3RvbURvbWFpbkNlcnRDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZXJ0Q29uZmlnKSxcbiAgICAgIFJvdXRlQ29uZmlnOiByb3NDdXN0b21Eb21haW5Sb3V0ZUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvdXRlQ29uZmlnKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpGQzo6Q3VzdG9tRG9tYWluYFxuICovXG5leHBvcnQgY2xhc3MgUm9zQ3VzdG9tRG9tYWluIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpGQzo6Q3VzdG9tRG9tYWluXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRG9tYWluOiBUaGUgZG9tYWluIHdpdGggcHJvdG9jb2wuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEb21haW46IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRG9tYWluTmFtZTogVGhlIGRvbWFpbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEb21haW5OYW1lOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lOiBkb21haW4gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBkb21haW5OYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvdG9jb2w6IEhUVFAgb3IgSFRUUCxIVFRQU1xuICAgICAqL1xuICAgIHB1YmxpYyBwcm90b2NvbDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwaVZlcnNpb246IGFwaSB2ZXJzaW9uXG4gICAgICovXG4gICAgcHVibGljIGFwaVZlcnNpb246IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZXJ0Q29uZmlnOiBjZXJ0aWZpY2F0ZSBpbmZvXG4gICAgICovXG4gICAgcHVibGljIGNlcnRDb25maWc6IFJvc0N1c3RvbURvbWFpbi5DZXJ0Q29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVDb25maWc6IFJvdXRpbmcgdGFibGU6IHBhdGggdG8gZnVuY3Rpb24gbWFwcGluZ3doZW4gYSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBhIGN1c3RvbSBkb21haW4gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByb3V0ZUNvbmZpZzogUm9zQ3VzdG9tRG9tYWluLlJvdXRlQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RkM6OkN1c3RvbURvbWFpbmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ3VzdG9tRG9tYWluUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDdXN0b21Eb21haW4uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckRvbWFpbiA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnRG9tYWluJykpO1xuICAgICAgICB0aGlzLmF0dHJEb21haW5OYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdEb21haW5OYW1lJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kb21haW5OYW1lID0gcHJvcHMuZG9tYWluTmFtZTtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3BzLnByb3RvY29sO1xuICAgICAgICB0aGlzLmFwaVZlcnNpb24gPSBwcm9wcy5hcGlWZXJzaW9uO1xuICAgICAgICB0aGlzLmNlcnRDb25maWcgPSBwcm9wcy5jZXJ0Q29uZmlnO1xuICAgICAgICB0aGlzLnJvdXRlQ29uZmlnID0gcHJvcHMucm91dGVDb25maWc7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9tYWluTmFtZTogdGhpcy5kb21haW5OYW1lLFxuICAgICAgICAgICAgcHJvdG9jb2w6IHRoaXMucHJvdG9jb2wsXG4gICAgICAgICAgICBhcGlWZXJzaW9uOiB0aGlzLmFwaVZlcnNpb24sXG4gICAgICAgICAgICBjZXJ0Q29uZmlnOiB0aGlzLmNlcnRDb25maWcsXG4gICAgICAgICAgICByb3V0ZUNvbmZpZzogdGhpcy5yb3V0ZUNvbmZpZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ3VzdG9tRG9tYWluUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQ3VzdG9tRG9tYWluIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBDZXJ0Q29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByaXZhdGVLZXk6IHByaXZhdGUga2V5XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcml2YXRlS2V5OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY2VydE5hbWU6IGN1c3RvbSBjZXJ0aWZpY2F0ZSBuYW1lXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjZXJ0TmFtZTogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNlcnRpZmljYXRlOiBjZXJ0aWZpY2F0ZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY2VydGlmaWNhdGU6IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYENlcnRDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ2VydENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbURvbWFpbl9DZXJ0Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcml2YXRlS2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByaXZhdGVLZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaXZhdGVLZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJpdmF0ZUtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VydE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2VydE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlcnROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNlcnROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZXJ0aWZpY2F0ZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jZXJ0aWZpY2F0ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VydGlmaWNhdGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2VydGlmaWNhdGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ2VydENvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6Q3VzdG9tRG9tYWluLkNlcnRDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENlcnRDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkN1c3RvbURvbWFpbi5DZXJ0Q29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbURvbWFpbkNlcnRDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ3VzdG9tRG9tYWluX0NlcnRDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFByaXZhdGVLZXk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpdmF0ZUtleSksXG4gICAgICBDZXJ0TmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZXJ0TmFtZSksXG4gICAgICBDZXJ0aWZpY2F0ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZXJ0aWZpY2F0ZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NDdXN0b21Eb21haW4ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvdXRlQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJvdXRlczogUGF0aENvbmZpZyBBcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcm91dGVzOiBBcnJheTxSb3NDdXN0b21Eb21haW4uUm91dGVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm91dGVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm91dGVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDdXN0b21Eb21haW5fUm91dGVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRlcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yb3V0ZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRlcycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0N1c3RvbURvbWFpbl9Sb3V0ZXNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMucm91dGVzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvdXRlQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpDdXN0b21Eb21haW4uUm91dGVDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvdXRlQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpDdXN0b21Eb21haW4uUm91dGVDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ3VzdG9tRG9tYWluUm91dGVDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ3VzdG9tRG9tYWluX1JvdXRlQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBSb3V0ZXM6IHJvcy5saXN0TWFwcGVyKHJvc0N1c3RvbURvbWFpblJvdXRlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yb3V0ZXMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQ3VzdG9tRG9tYWluIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb3V0ZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGF0aDogSFRUUCByZXF1ZXN0IHBhdGggd2hlbiBhIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGEgY3VzdG9tIGRvbWFpbiBuYW1lLCBmb3IgZXhhbXBsZTogXCIvbG9naW4vKlwiXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwYXRoOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBQYXRoIHRvIHRoZSBmdW5jdGlvbiwgZm9yIGV4YW1wbGU6IFwibG9naW5cIlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFBhdGggdG8gdGhlIHNlcnZpY2UsIGZvciBleGFtcGxlOiBcImJsb2dTZXJ2aWNlXCJcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcXVhbGlmaWVyOiBTZXJ2aWNlIHZlcnNpb24gb3IgYWxpYXNcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHF1YWxpZmllcj86IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvdXRlc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3V0ZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDdXN0b21Eb21haW5fUm91dGVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXRoJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGF0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdxdWFsaWZpZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucXVhbGlmaWVyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvdXRlc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6Q3VzdG9tRG9tYWluLlJvdXRlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm91dGVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpDdXN0b21Eb21haW4uUm91dGVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbURvbWFpblJvdXRlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NDdXN0b21Eb21haW5fUm91dGVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBQYXRoOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhdGgpLFxuICAgICAgRnVuY3Rpb25OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSksXG4gICAgICBTZXJ2aWNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICBRdWFsaWZpZXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucXVhbGlmaWVyKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RkM6OkZ1bmN0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0Z1bmN0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZ1bmN0aW9uTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhhbmRsZXI6IFRoZSBmdW5jdGlvbiBleGVjdXRpb24gZW50cnkgcG9pbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGFuZGxlcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bnRpbWU6IFRoZSBmdW5jdGlvbiBydW50aW1lIGVudmlyb25tZW50LiBTdXBwb3J0aW5nIG5vZGVqczYsIG5vZGVqczgsIG5vZGVqczEwLCBub2RlanMxMiwgcHl0aG9uMi43LCBweXRob24zLCBqYXZhOCwgY3VzdG9tLCBjdXN0b20tY29udGFpbmVyIGFuZCBzbyBvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ1bnRpbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhc3luY0NvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24gb2YgYXN5bmNocm9ub3VzIGZ1bmN0aW9uIGNhbGxzXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXN5bmNDb25maWd1cmF0aW9uPzogUm9zRnVuY3Rpb24uQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2FQb3J0OiBDdXN0b20gcnVudGltZSBhbmQgY3VzdG9tIGNvbnRhaW5lciBydW50aW1lIGRlZGljYXRlZCBmaWVsZHMsIHdoaWNoIHJlcHJlc2VudCB0aGUgcG9ydCB0aGF0IHRoZSBzdGFydGVkIGN1c3RvbSBodHRwIHNlcnZlciBsaXN0ZW5zIHRvLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA5MDAwXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2FQb3J0PzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvZGU6IFRoZSBjb2RlIHRoYXQgY29udGFpbnMgdGhlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvZGU/OiBSb3NGdW5jdGlvbi5Db2RlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY3VzdG9tQ29udGFpbmVyQ29uZmlnOiBDdXN0b20gY29udGFpbmVyIHJ1bnRpbWUgcmVsYXRlZCBjb25maWd1cmF0aW9uLiBBZnRlciBjb25maWd1cmF0aW9uLCB0aGUgZnVuY3Rpb24gY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBjdXN0b20gY29udGFpbmVyIHRvIGV4ZWN1dGUgdGhlIGZ1bmN0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3VzdG9tQ29udGFpbmVyQ29uZmlnPzogUm9zRnVuY3Rpb24uQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IEZ1bmN0aW9uIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW52aXJvbm1lbnRWYXJpYWJsZXM6IFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBzZXQgZm9yIHRoZSBmdW5jdGlvbiwgeW91IGNhbiBnZXQgdGhlIHZhbHVlIG9mIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW52aXJvbm1lbnRWYXJpYWJsZXM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5pdGlhbGl6YXRpb25UaW1lb3V0OiB0aGUgbWF4IGV4ZWN1dGlvbiB0aW1lIG9mIHRoZSBpbml0aWFsaXplciwgaW4gc2Vjb25kXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5pdGlhbGl6YXRpb25UaW1lb3V0PzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluaXRpYWxpemVyOiB0aGUgZW50cnkgcG9pbnQgb2YgdGhlIGluaXRpYWxpemVyXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5pdGlhbGl6ZXI/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VDb25jdXJyZW5jeTogRnVuY3Rpb24gaW5zdGFuY2UgY29uY3VycmVuY3kuIFZhbHVlIGNhbiBiZSBiZXR3ZWVuIDEgdG8gMTAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlQ29uY3VycmVuY3k/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWVtb3J5U2l6ZTogVGhlIGFtb3VudCBvZiBtZW1vcnkgdGhhdOKAmXMgdXNlZCB0byBydW4gZnVuY3Rpb24sIGluIE1CLiBGdW5jdGlvbiBDb21wdXRlIHVzZXMgdGhpcyB2YWx1ZSB0byBhbGxvY2F0ZSBDUFUgcmVzb3VyY2VzIHByb3BvcnRpb25hbGx5LiBEZWZhdWx0cyB0byAxMjggTUIuIEl0IGNhbiBiZSBtdWx0aXBsZSBvZiA2NCBNQiBhbmQgYmV0d2VlbiAxMjggTUIgYW5kIDMwNzIgTUIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWVtb3J5U2l6ZT86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaGUgbWF4aW11bSB0aW1lIGR1cmF0aW9uIGEgZnVuY3Rpb24gY2FuIHJ1biwgaW4gc2Vjb25kcy4gQWZ0ZXIgd2hpY2ggRnVuY3Rpb24gQ29tcHV0ZSB0ZXJtaW5hdGVzIHRoZSBleGVjdXRpb24uIERlZmF1bHRzIHRvIDMgc2Vjb25kcywgYW5kIGNhbiBiZSBiZXR3ZWVuIDEgdG8gNjAwIHNlY29uZHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZW91dD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NGdW5jdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NGdW5jdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5tZW1vcnlTaXplICYmICh0eXBlb2YgcHJvcGVydGllcy5tZW1vcnlTaXplKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZW1vcnlTaXplJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWVtb3J5U2l6ZSxcbiAgICAgICAgICAgIG1pbjogMTI4LFxuICAgICAgICAgICAgbWF4OiAzMDcyLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZW1vcnlTaXplJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1lbW9yeVNpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy50aW1lb3V0ICYmICh0eXBlb2YgcHJvcGVydGllcy50aW1lb3V0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGltZW91dCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hhbmRsZXInLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaGFuZGxlcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGFuZGxlcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5oYW5kbGVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjdXN0b21Db250YWluZXJDb25maWcnLCBSb3NGdW5jdGlvbl9DdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jdXN0b21Db250YWluZXJDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvZGUnLCBSb3NGdW5jdGlvbl9Db2RlUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXN5bmNDb25maWd1cmF0aW9uJywgUm9zRnVuY3Rpb25fQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuYXN5bmNDb25maWd1cmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjYVBvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuY2FQb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydW50aW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJ1bnRpbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bnRpbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucnVudGltZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW52aXJvbm1lbnRWYXJpYWJsZXMnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmVudmlyb25tZW50VmFyaWFibGVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbml0aWFsaXplcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbml0aWFsaXplcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2VydmljZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5pdGlhbGl6YXRpb25UaW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmluaXRpYWxpemF0aW9uVGltZW91dCkpO1xuICAgIGlmKHByb3BlcnRpZXMuaW5zdGFuY2VDb25jdXJyZW5jeSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW5zdGFuY2VDb25jdXJyZW5jeSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VDb25jdXJyZW5jeScsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluc3RhbmNlQ29uY3VycmVuY3ksXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VDb25jdXJyZW5jeScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pbnN0YW5jZUNvbmN1cnJlbmN5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0Z1bmN0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRnVuY3Rpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NGdW5jdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEZ1bmN0aW9uTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mdW5jdGlvbk5hbWUpLFxuICAgICAgSGFuZGxlcjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oYW5kbGVyKSxcbiAgICAgIFJ1bnRpbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucnVudGltZSksXG4gICAgICBTZXJ2aWNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICBBc3luY0NvbmZpZ3VyYXRpb246IHJvc0Z1bmN0aW9uQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXN5bmNDb25maWd1cmF0aW9uKSxcbiAgICAgIENBUG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jYVBvcnQpLFxuICAgICAgQ29kZTogcm9zRnVuY3Rpb25Db2RlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29kZSksXG4gICAgICBDdXN0b21Db250YWluZXJDb25maWc6IHJvc0Z1bmN0aW9uQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY3VzdG9tQ29udGFpbmVyQ29uZmlnKSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIEVudmlyb25tZW50VmFyaWFibGVzOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5lbnZpcm9ubWVudFZhcmlhYmxlcyksXG4gICAgICBJbml0aWFsaXphdGlvblRpbWVvdXQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5pdGlhbGl6YXRpb25UaW1lb3V0KSxcbiAgICAgIEluaXRpYWxpemVyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluaXRpYWxpemVyKSxcbiAgICAgIEluc3RhbmNlQ29uY3VycmVuY3k6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VDb25jdXJyZW5jeSksXG4gICAgICBNZW1vcnlTaXplOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1lbW9yeVNpemUpLFxuICAgICAgVGltZW91dDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpGQzo6RnVuY3Rpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NGdW5jdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RkM6OkZ1bmN0aW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQVJOOiBUaGUgQVJOIGZvciBBTElZVU46OlJPUzo6Q3VzdG9tUmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFybjogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBGdW5jdGlvbklkOiBUaGUgZnVuY3Rpb24gSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZ1bmN0aW9uSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRnVuY3Rpb25OYW1lOiBUaGUgZnVuY3Rpb24gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRnVuY3Rpb25OYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNlcnZpY2VOYW1lOiBUaGUgc2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlTmFtZTogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIGZ1bmN0aW9uTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhhbmRsZXI6IFRoZSBmdW5jdGlvbiBleGVjdXRpb24gZW50cnkgcG9pbnQuXG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZXI6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBydW50aW1lOiBUaGUgZnVuY3Rpb24gcnVudGltZSBlbnZpcm9ubWVudC4gU3VwcG9ydGluZyBub2RlanM2LCBub2RlanM4LCBub2RlanMxMCwgbm9kZWpzMTIsIHB5dGhvbjIuNywgcHl0aG9uMywgamF2YTgsIGN1c3RvbSwgY3VzdG9tLWNvbnRhaW5lciBhbmQgc28gb25cbiAgICAgKi9cbiAgICBwdWJsaWMgcnVudGltZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhc3luY0NvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24gb2YgYXN5bmNocm9ub3VzIGZ1bmN0aW9uIGNhbGxzXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jQ29uZmlndXJhdGlvbjogUm9zRnVuY3Rpb24uQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2FQb3J0OiBDdXN0b20gcnVudGltZSBhbmQgY3VzdG9tIGNvbnRhaW5lciBydW50aW1lIGRlZGljYXRlZCBmaWVsZHMsIHdoaWNoIHJlcHJlc2VudCB0aGUgcG9ydCB0aGF0IHRoZSBzdGFydGVkIGN1c3RvbSBodHRwIHNlcnZlciBsaXN0ZW5zIHRvLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA5MDAwXG4gICAgICovXG4gICAgcHVibGljIGNhUG9ydDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvZGU6IFRoZSBjb2RlIHRoYXQgY29udGFpbnMgdGhlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBjb2RlOiBSb3NGdW5jdGlvbi5Db2RlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY3VzdG9tQ29udGFpbmVyQ29uZmlnOiBDdXN0b20gY29udGFpbmVyIHJ1bnRpbWUgcmVsYXRlZCBjb25maWd1cmF0aW9uLiBBZnRlciBjb25maWd1cmF0aW9uLCB0aGUgZnVuY3Rpb24gY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBjdXN0b20gY29udGFpbmVyIHRvIGV4ZWN1dGUgdGhlIGZ1bmN0aW9uXG4gICAgICovXG4gICAgcHVibGljIGN1c3RvbUNvbnRhaW5lckNvbmZpZzogUm9zRnVuY3Rpb24uQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IEZ1bmN0aW9uIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW52aXJvbm1lbnRWYXJpYWJsZXM6IFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBzZXQgZm9yIHRoZSBmdW5jdGlvbiwgeW91IGNhbiBnZXQgdGhlIHZhbHVlIG9mIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIGVudmlyb25tZW50VmFyaWFibGVzOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5pdGlhbGl6YXRpb25UaW1lb3V0OiB0aGUgbWF4IGV4ZWN1dGlvbiB0aW1lIG9mIHRoZSBpbml0aWFsaXplciwgaW4gc2Vjb25kXG4gICAgICovXG4gICAgcHVibGljIGluaXRpYWxpemF0aW9uVGltZW91dDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluaXRpYWxpemVyOiB0aGUgZW50cnkgcG9pbnQgb2YgdGhlIGluaXRpYWxpemVyXG4gICAgICovXG4gICAgcHVibGljIGluaXRpYWxpemVyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VDb25jdXJyZW5jeTogRnVuY3Rpb24gaW5zdGFuY2UgY29uY3VycmVuY3kuIFZhbHVlIGNhbiBiZSBiZXR3ZWVuIDEgdG8gMTAwLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUNvbmN1cnJlbmN5OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWVtb3J5U2l6ZTogVGhlIGFtb3VudCBvZiBtZW1vcnkgdGhhdOKAmXMgdXNlZCB0byBydW4gZnVuY3Rpb24sIGluIE1CLiBGdW5jdGlvbiBDb21wdXRlIHVzZXMgdGhpcyB2YWx1ZSB0byBhbGxvY2F0ZSBDUFUgcmVzb3VyY2VzIHByb3BvcnRpb25hbGx5LiBEZWZhdWx0cyB0byAxMjggTUIuIEl0IGNhbiBiZSBtdWx0aXBsZSBvZiA2NCBNQiBhbmQgYmV0d2VlbiAxMjggTUIgYW5kIDMwNzIgTUIuXG4gICAgICovXG4gICAgcHVibGljIG1lbW9yeVNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaGUgbWF4aW11bSB0aW1lIGR1cmF0aW9uIGEgZnVuY3Rpb24gY2FuIHJ1biwgaW4gc2Vjb25kcy4gQWZ0ZXIgd2hpY2ggRnVuY3Rpb24gQ29tcHV0ZSB0ZXJtaW5hdGVzIHRoZSBleGVjdXRpb24uIERlZmF1bHRzIHRvIDMgc2Vjb25kcywgYW5kIGNhbiBiZSBiZXR3ZWVuIDEgdG8gNjAwIHNlY29uZHMuXG4gICAgICovXG4gICAgcHVibGljIHRpbWVvdXQ6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpGQzo6RnVuY3Rpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0Z1bmN0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NGdW5jdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQXJuID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdBUk4nKSk7XG4gICAgICAgIHRoaXMuYXR0ckZ1bmN0aW9uSWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0Z1bmN0aW9uSWQnKSk7XG4gICAgICAgIHRoaXMuYXR0ckZ1bmN0aW9uTmFtZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnRnVuY3Rpb25OYW1lJykpO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlTmFtZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnU2VydmljZU5hbWUnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZ1bmN0aW9uTmFtZSA9IHByb3BzLmZ1bmN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gcHJvcHMuaGFuZGxlcjtcbiAgICAgICAgdGhpcy5ydW50aW1lID0gcHJvcHMucnVudGltZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHByb3BzLnNlcnZpY2VOYW1lO1xuICAgICAgICB0aGlzLmFzeW5jQ29uZmlndXJhdGlvbiA9IHByb3BzLmFzeW5jQ29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5jYVBvcnQgPSBwcm9wcy5jYVBvcnQ7XG4gICAgICAgIHRoaXMuY29kZSA9IHByb3BzLmNvZGU7XG4gICAgICAgIHRoaXMuY3VzdG9tQ29udGFpbmVyQ29uZmlnID0gcHJvcHMuY3VzdG9tQ29udGFpbmVyQ29uZmlnO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnRWYXJpYWJsZXMgPSBwcm9wcy5lbnZpcm9ubWVudFZhcmlhYmxlcztcbiAgICAgICAgdGhpcy5pbml0aWFsaXphdGlvblRpbWVvdXQgPSBwcm9wcy5pbml0aWFsaXphdGlvblRpbWVvdXQ7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZXIgPSBwcm9wcy5pbml0aWFsaXplcjtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbmN1cnJlbmN5ID0gcHJvcHMuaW5zdGFuY2VDb25jdXJyZW5jeTtcbiAgICAgICAgdGhpcy5tZW1vcnlTaXplID0gcHJvcHMubWVtb3J5U2l6ZTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gcHJvcHMudGltZW91dDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHRoaXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5oYW5kbGVyLFxuICAgICAgICAgICAgcnVudGltZTogdGhpcy5ydW50aW1lLFxuICAgICAgICAgICAgc2VydmljZU5hbWU6IHRoaXMuc2VydmljZU5hbWUsXG4gICAgICAgICAgICBhc3luY0NvbmZpZ3VyYXRpb246IHRoaXMuYXN5bmNDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgY2FQb3J0OiB0aGlzLmNhUG9ydCxcbiAgICAgICAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgICAgICAgIGN1c3RvbUNvbnRhaW5lckNvbmZpZzogdGhpcy5jdXN0b21Db250YWluZXJDb25maWcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGVudmlyb25tZW50VmFyaWFibGVzOiB0aGlzLmVudmlyb25tZW50VmFyaWFibGVzLFxuICAgICAgICAgICAgaW5pdGlhbGl6YXRpb25UaW1lb3V0OiB0aGlzLmluaXRpYWxpemF0aW9uVGltZW91dCxcbiAgICAgICAgICAgIGluaXRpYWxpemVyOiB0aGlzLmluaXRpYWxpemVyLFxuICAgICAgICAgICAgaW5zdGFuY2VDb25jdXJyZW5jeTogdGhpcy5pbnN0YW5jZUNvbmN1cnJlbmN5LFxuICAgICAgICAgICAgbWVtb3J5U2l6ZTogdGhpcy5tZW1vcnlTaXplLFxuICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NGdW5jdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0Z1bmN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc3luY0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGVzdGluYXRpb246IFNldCBkZXN0aW5hdGlvbiBvZiBhc3luY2hyb25vdXMgZnVuY3Rpb24gY2FsbHNcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRlc3RpbmF0aW9uPzogUm9zRnVuY3Rpb24uRGVzdGluYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzOiBDb25maWd1cmUgdGhlIG1heGltdW0gbGlmZXRpbWUgb2YgbWVzc2FnZXMuIFRoZSBkdXJhdGlvbiBpcyBjYWxjdWxhdGVkIGZyb20gdGhlIHRpbWUgdGhlIGFzeW5jaHJvbm91cyBjYWxsIGlzIHRyaWdnZXJlZCwgYW5kIGVuZHMgd2hlbiB0aGUgbWVzc2FnZSBpcyBkZXF1ZXVlZCBmb3IgcHJvY2Vzc2luZy4gSWYgdGhpcyBwZXJpb2Qgb2YgdGltZSBpcyBsb25nZXIgdGhhbiB0aGUgc2V0dGluZyB2YWx1ZSBvZiBNYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzLCB0aGUgbWVzc2FnZSB3aWxsIGJlIGRpc2NhcmRlZC4gVGhlIHVuY29uc3VtZWQgbWVzc2FnZXMgd2lsbCBiZSBjb3VudGVkIGluIHRoZSBjbG91ZCBtb25pdG9yaW5nIEFzeW5jRXZlbnRFeHBpcmVkRHJvcHBlZCBpbmRpY2F0b3IuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzPzogbnVtYmVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1heEFzeW5jUmV0cnlBdHRlbXB0czogQ29uZmlndXJlIHRoZSBudW1iZXIgb2YgcmV0cmllc1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4QXN5bmNSZXRyeUF0dGVtcHRzPzogbnVtYmVyO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEFzeW5jQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0FzeW5jQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzdGluYXRpb24nLCBSb3NGdW5jdGlvbl9EZXN0aW5hdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRlc3RpbmF0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5tYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy5tYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWF4QXN5bmNFdmVudEFnZUluU2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMjU5MjAwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4QXN5bmNFdmVudEFnZUluU2Vjb25kcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5tYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzKSk7XG4gICAgaWYocHJvcGVydGllcy5tYXhBc3luY1JldHJ5QXR0ZW1wdHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1heEFzeW5jUmV0cnlBdHRlbXB0cykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4QXN5bmNSZXRyeUF0dGVtcHRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWF4QXN5bmNSZXRyeUF0dGVtcHRzLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiA4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhBc3luY1JldHJ5QXR0ZW1wdHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWF4QXN5bmNSZXRyeUF0dGVtcHRzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkFzeW5jQ29uZmlndXJhdGlvblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uQXN5bmNDb25maWd1cmF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBBc3luY0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkFzeW5jQ29uZmlndXJhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkFzeW5jQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9Bc3luY0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIERlc3RpbmF0aW9uOiByb3NGdW5jdGlvbkRlc3RpbmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzdGluYXRpb24pLFxuICAgICAgTWF4QXN5bmNFdmVudEFnZUluU2Vjb25kczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzKSxcbiAgICAgIE1heEFzeW5jUmV0cnlBdHRlbXB0czogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXhBc3luY1JldHJ5QXR0ZW1wdHMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvZGVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc291cmNlQ29kZTogKE5vZGUuanMsIFBIUCBhbmQgUHl0aG9uKSBUaGUgc291cmNlIGNvZGUgZm9yIHlvdXIgRkMgZnVuY3Rpb24uIElmIHlvdSBpbmNsdWRlIHRoaXMgcGFyYW1ldGVyIGluIGEgZnVuY3Rpb24gc291cmNlIGlubGluZSwgUk9TIHBsYWNlcyBpdCBpbiBhIGZpbGUgY2FsbGVkIGluZGV4ICh1dGYtOCBlbmNvZGVkKSBhbmQgdGhlbiBjb21wcmVzc2VzIGl0IHRvIGNyZWF0ZSBhIGRlcGxveW1lbnQgcGFja2FnZS4gRm9yIHRoZSBIYW5kbGVyIHByb3BlcnR5LCB0aGUgZmlyc3QgcGFydCBvZiB0aGUgaGFuZGxlciBpZGVudGlmaWVyIG11c3QgYmUgaW5kZXguIEZvciBleGFtcGxlOiBpbmRleC5oYW5kbGVyLlxuICAgICAqIFlvdXIgc291cmNlIGNvZGUgY2FuIGNvbnRhaW4gdXAgdG8gNDA5NiBjaGFyYWN0ZXJzLiBGb3IgSlNPTiwgeW91IG11c3QgdXNlIGJhY2tzbGFzaGVzIHRvIGVzY2FwZSBxdW90ZXMgYW5kIHNwZWNpYWwgY2hhcmFjdGVycywgc3VjaCBhcyBsaW5lIGJyZWFrcy5cbiAgICAgKiBQcmlvcml0eTogWmlwRmlsZSA+IFNvdXJjZUNvZGUgPiBPc3NCdWNrZXROYW1lJk9zc09iamVjdE5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzb3VyY2VDb2RlPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHppcEZpbGU6IEJhc2U2NCBlbmNvZGVkIHppcCBmaWxlIGNvbnRlbnQuXG4gICAgICogUHJpb3JpdHk6IFppcEZpbGUgPiBTb3VyY2VDb2RlID4gT3NzQnVja2V0TmFtZSZPc3NPYmplY3ROYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgemlwRmlsZT86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvc3NPYmplY3ROYW1lOiBPU1Mgb2JqZWN0IG5hbWUuXG4gICAgICogUHJpb3JpdHk6IFppcEZpbGUgPiBTb3VyY2VDb2RlID4gT3NzQnVja2V0TmFtZSZPc3NPYmplY3ROYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3NzT2JqZWN0TmFtZT86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvc3NCdWNrZXROYW1lOiBPU1MgYnVja2V0IG5hbWUuXG4gICAgICogUHJpb3JpdHk6IFppcEZpbGUgPiBTb3VyY2VDb2RlID4gT3NzQnVja2V0TmFtZSZPc3NPYmplY3ROYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3NzQnVja2V0TmFtZT86IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYENvZGVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29kZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0NvZGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNvdXJjZUNvZGUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zb3VyY2VDb2RlKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc291cmNlQ29kZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZUNvZGUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc291cmNlQ29kZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNDA5NixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlQ29kZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zb3VyY2VDb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd6aXBGaWxlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnppcEZpbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29zc09iamVjdE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3NzT2JqZWN0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3NzQnVja2V0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vc3NCdWNrZXROYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNvZGVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkNvZGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvZGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkNvZGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25Db2RlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX0NvZGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNvdXJjZUNvZGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc291cmNlQ29kZSksXG4gICAgICBaaXBGaWxlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnppcEZpbGUpLFxuICAgICAgT3NzT2JqZWN0TmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vc3NPYmplY3ROYW1lKSxcbiAgICAgIE9zc0J1Y2tldE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3NzQnVja2V0TmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGFyZ3M6IENvbnRhaW5lciBzdGFydHVwIHBhcmFtZXRlcnMuIEZvciBleGFtcGxlOiBbXCItYXJnMVwiLCBcInZhbHVlMVwiXVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYXJncz86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21tYW5kOiBDb250YWluZXIgc3RhcnQgY29tbWFuZC4gRm9yIGV4YW1wbGU6IFtcIi9jb2RlL215c2VydmVyXCJdXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb21tYW5kPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGltYWdlOiBDb250YWluZXIgaW1hZ2UgYWRkcmVzcy4gRm9yIGV4YW1wbGU6IHJlZ2lzdHJ5LXZwYy5jbi1oYW5nemhvdS5hbGl5dW5jcy5jb20vZmMtZGVtby9oZWxsb3dvcmxkOnYxYmV0YTFcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGltYWdlOiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcmdzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFyZ3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbW1hbmQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29tbWFuZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW1hZ2UnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW1hZ2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ltYWdlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmltYWdlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkN1c3RvbUNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uQ3VzdG9tQ29udGFpbmVyQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkN1c3RvbUNvbnRhaW5lckNvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkN1c3RvbUNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9DdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIEFyZ3M6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXJncyksXG4gICAgICBDb21tYW5kOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbW1hbmQpLFxuICAgICAgSW1hZ2U6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW1hZ2UpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIERlc3RpbmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9uU3VjY2VzczogV2hlbiB0aGUgZnVuY3Rpb24gaXMgaW52b2tlZCBzdWNjZXNzZnVsbHksIEZDIHdpbGwgY2FsbCB0aGUgdGFyZ2V0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9uU3VjY2Vzcz86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvbkZhaWx1cmU6IFdoZW4gdGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgZmFpbGVkIChzeXN0ZW0gZXJyb3Igb3IgZnVuY3Rpb24gaW50ZXJuYWwgZXJyb3IpLCBGQyB3aWxsIGNhbGwgdGhlIHRhcmdldCBjb3JyZXNwb25kaW5nIHRvIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvbkZhaWx1cmU/OiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBEZXN0aW5hdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBEZXN0aW5hdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0Rlc3RpbmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvblN1Y2Nlc3MnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub25TdWNjZXNzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvbkZhaWx1cmUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub25GYWlsdXJlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkRlc3RpbmF0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5EZXN0aW5hdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRGVzdGluYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkRlc3RpbmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uRGVzdGluYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRnVuY3Rpb25fRGVzdGluYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE9uU3VjY2Vzczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vblN1Y2Nlc3MpLFxuICAgICAgT25GYWlsdXJlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9uRmFpbHVyZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkZDOjpGdW5jdGlvbkludm9rZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRnVuY3Rpb25JbnZva2VyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZ1bmN0aW9uTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFzeW5jOiBJbnZvY2F0aW9uIHR5cGUsIFN5bmMgb3IgQXN5bmMuIERlZmF1bHRzIHRvIFN5bmMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXN5bmM/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNoZWNrRXJyb3I6IFdoZXRoZXIgY2hlY2sgZXJyb3IgZm9yIGZ1bmN0aW9uIGludm9jYXRpb24gcmVzdWx0LlxuICAgICAqIElmIHNldCB0cnVlIGFuZCBmdW5jdGlvbiBpbnZvY2F0aW9uIHJlc3VsdCBoYXMgZXJyb3IsIHRoZSByZXNvdXJjZSBjcmVhdGlvbiB3aWxsIGJlIHJlZ2FyZCBhcyBmYWlsZWQuXG4gICAgICogRGVmYXVsdCBpcyBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNoZWNrRXJyb3I/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGV2ZW50OiBUaGlzIHZhbHVlIGlzIHBhc3NlZCB0byBmdW5jdGlvbiBhcyB1dGYtOCBlbmNvZGVkIHN0cmluZy5JdOKAmXMgZnVuY3Rpb27igJlzIHJlc3BvbnNpYmlsaXR5IHRvIGludGVycHJldCB0aGUgdmFsdWUuXG4gICAgICogSWYgdGhlIHZhbHVlIG5lZWRzIHRvIGJlIGJpbmFyeSwgZW5jb2RlIGl0IHZpYSBiYXNlNjQgYmVmb3JlIHBhc3NpbmcgdG8gdGhpcyBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICByZWFkb25seSBldmVudD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBleGVjdXRlVmVyc2lvbjogSWYgdGhlIHByb3BlcnR5IGlzIG5vdCBzcGVjaWZpZWQgZm9yIGNyZWF0aW9uIGFuZCB1cGRhdGUsIHRoZSBmdW5jdGlvbiB3aWxsIG5vdCBiZSBpbnZva2VkLiBUaGUgY2hhbmdlIG9mIHRoZSBwcm9wZXJ0eSBsZWFkcyB0byB0aGUgaW52b2tlIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBleGVjdXRlVmVyc2lvbj86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBxdWFsaWZpZXI6IHNlcnZpY2UgdmVyc2lvbiwgY2FuIGJlIHZlcnNpb25JZCBvciBhbGlhc05hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBxdWFsaWZpZXI/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZVJlZ2lvbklkOiBXaGljaCByZWdpb24gc2VydmljZSBiZWxvbmdzIHRvLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VSZWdpb25JZD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NGdW5jdGlvbkludm9rZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRnVuY3Rpb25JbnZva2VyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25JbnZva2VyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleGVjdXRlVmVyc2lvbicsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5leGVjdXRlVmVyc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVJlZ2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VSZWdpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2VydmljZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXN5bmMnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmFzeW5jKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdldmVudCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ldmVudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hlY2tFcnJvcicsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuY2hlY2tFcnJvcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NGdW5jdGlvbkludm9rZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uSW52b2tlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRnVuY3Rpb25JbnZva2VyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbkludm9rZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25JbnZva2VyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NGdW5jdGlvbkludm9rZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBGdW5jdGlvbk5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSxcbiAgICAgIFNlcnZpY2VOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSxcbiAgICAgIEFzeW5jOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hc3luYyksXG4gICAgICBDaGVja0Vycm9yOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jaGVja0Vycm9yKSxcbiAgICAgIEV2ZW50OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmV2ZW50KSxcbiAgICAgIEV4ZWN1dGVWZXJzaW9uOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmV4ZWN1dGVWZXJzaW9uKSxcbiAgICAgIFF1YWxpZmllcjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5xdWFsaWZpZXIpLFxuICAgICAgU2VydmljZVJlZ2lvbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VSZWdpb25JZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6RkM6OkZ1bmN0aW9uSW52b2tlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0Z1bmN0aW9uSW52b2tlciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RkM6OkZ1bmN0aW9uSW52b2tlclwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlc3VsdDogRGVwZW5kcyBvbiByZXN1bHQgdHlwZTpcbk5vUmVzdWx0OiBBc3luYyBpbnZva2UgaGFzIG5vIHJlc3VsdC5cblN1Y2Nlc3M6IFRoZSByZXNwb25zZSBvZiB0aGUgZnVuY3Rpb24uIFRoZSByZXNwb25zZSBzaG91bGQgYmUgdXRmLTggZW5jb2RlZCBzdHJpbmcsIG90aGVyd2lzZSBST1Mgd2lsbCByZXBvcnQgYW4gZXJyb3IuIElmIHRoZSByZXNwb25zZSBpcyBiaW5hcnksIGVuY29kZSBpdCB2aWEgYmFzZTY0IGJlZm9yZSBpdCBpcyByZXR1cm5lZC5cbkZhaWx1cmU6IEVycm9yIE1lc3NhZ2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXN1bHQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzdWx0VHlwZTogUmVzdWx0IHR5cGU6XG5Ob1Jlc3VsdDogQXN5bmMgaW52b2tlIGhhcyBubyByZXN1bHQuXG5TdWNjZXNzOiBTeW5jIGludm9rZSBzdWNjZWVkcy5cbkZhaWx1cmU6IFN5bmMgaW52b2tlIGZhaWxzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzdWx0VHlwZTogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIGZ1bmN0aW9uTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhc3luYzogSW52b2NhdGlvbiB0eXBlLCBTeW5jIG9yIEFzeW5jLiBEZWZhdWx0cyB0byBTeW5jLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGVja0Vycm9yOiBXaGV0aGVyIGNoZWNrIGVycm9yIGZvciBmdW5jdGlvbiBpbnZvY2F0aW9uIHJlc3VsdC5cbiAgICAgKiBJZiBzZXQgdHJ1ZSBhbmQgZnVuY3Rpb24gaW52b2NhdGlvbiByZXN1bHQgaGFzIGVycm9yLCB0aGUgcmVzb3VyY2UgY3JlYXRpb24gd2lsbCBiZSByZWdhcmQgYXMgZmFpbGVkLlxuICAgICAqIERlZmF1bHQgaXMgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgY2hlY2tFcnJvcjogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBldmVudDogVGhpcyB2YWx1ZSBpcyBwYXNzZWQgdG8gZnVuY3Rpb24gYXMgdXRmLTggZW5jb2RlZCBzdHJpbmcuSXTigJlzIGZ1bmN0aW9u4oCZcyByZXNwb25zaWJpbGl0eSB0byBpbnRlcnByZXQgdGhlIHZhbHVlLlxuICAgICAqIElmIHRoZSB2YWx1ZSBuZWVkcyB0byBiZSBiaW5hcnksIGVuY29kZSBpdCB2aWEgYmFzZTY0IGJlZm9yZSBwYXNzaW5nIHRvIHRoaXMgcHJvcGVydHkuXG4gICAgICovXG4gICAgcHVibGljIGV2ZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXhlY3V0ZVZlcnNpb246IElmIHRoZSBwcm9wZXJ0eSBpcyBub3Qgc3BlY2lmaWVkIGZvciBjcmVhdGlvbiBhbmQgdXBkYXRlLCB0aGUgZnVuY3Rpb24gd2lsbCBub3QgYmUgaW52b2tlZC4gVGhlIGNoYW5nZSBvZiB0aGUgcHJvcGVydHkgbGVhZHMgdG8gdGhlIGludm9rZSBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIGV4ZWN1dGVWZXJzaW9uOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcXVhbGlmaWVyOiBzZXJ2aWNlIHZlcnNpb24sIGNhbiBiZSB2ZXJzaW9uSWQgb3IgYWxpYXNOYW1lXG4gICAgICovXG4gICAgcHVibGljIHF1YWxpZmllcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VSZWdpb25JZDogV2hpY2ggcmVnaW9uIHNlcnZpY2UgYmVsb25ncyB0by5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZVJlZ2lvbklkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RkM6OkZ1bmN0aW9uSW52b2tlcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRnVuY3Rpb25JbnZva2VyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NGdW5jdGlvbkludm9rZXIuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clJlc3VsdCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnUmVzdWx0JykpO1xuICAgICAgICB0aGlzLmF0dHJSZXN1bHRUeXBlID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdSZXN1bHRUeXBlJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5mdW5jdGlvbk5hbWUgPSBwcm9wcy5mdW5jdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBwcm9wcy5zZXJ2aWNlTmFtZTtcbiAgICAgICAgdGhpcy5hc3luYyA9IHByb3BzLmFzeW5jO1xuICAgICAgICB0aGlzLmNoZWNrRXJyb3IgPSBwcm9wcy5jaGVja0Vycm9yO1xuICAgICAgICB0aGlzLmV2ZW50ID0gcHJvcHMuZXZlbnQ7XG4gICAgICAgIHRoaXMuZXhlY3V0ZVZlcnNpb24gPSBwcm9wcy5leGVjdXRlVmVyc2lvbjtcbiAgICAgICAgdGhpcy5xdWFsaWZpZXIgPSBwcm9wcy5xdWFsaWZpZXI7XG4gICAgICAgIHRoaXMuc2VydmljZVJlZ2lvbklkID0gcHJvcHMuc2VydmljZVJlZ2lvbklkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogdGhpcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIGFzeW5jOiB0aGlzLmFzeW5jLFxuICAgICAgICAgICAgY2hlY2tFcnJvcjogdGhpcy5jaGVja0Vycm9yLFxuICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICBleGVjdXRlVmVyc2lvbjogdGhpcy5leGVjdXRlVmVyc2lvbixcbiAgICAgICAgICAgIHF1YWxpZmllcjogdGhpcy5xdWFsaWZpZXIsXG4gICAgICAgICAgICBzZXJ2aWNlUmVnaW9uSWQ6IHRoaXMuc2VydmljZVJlZ2lvbklkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NGdW5jdGlvbkludm9rZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkZDOjpQcm92aXNpb25Db25maWdgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUHJvdmlzaW9uQ29uZmlnUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZ1bmN0aW9uTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHF1YWxpZmllcjogU2VydmljZSdzIGFsaWFzLlxuICAgICAqIEV4YW1wbGUgOiBcIkxBVEVTVFwiXG4gICAgICovXG4gICAgcmVhZG9ubHkgcXVhbGlmaWVyOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0OiBOdW1iZXIgb2YgcHJvdmlzaW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0OiBudW1iZXI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUHJvdmlzaW9uQ29uZmlnUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1Byb3Zpc2lvbkNvbmZpZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1Byb3Zpc2lvbkNvbmZpZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhcmdldCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRhcmdldCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2VydmljZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NQcm92aXNpb25Db25maWdQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlByb3Zpc2lvbkNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUHJvdmlzaW9uQ29uZmlnUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpQcm92aXNpb25Db25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUHJvdmlzaW9uQ29uZmlnUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQcm92aXNpb25Db25maWdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBGdW5jdGlvbk5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSxcbiAgICAgIFF1YWxpZmllcjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5xdWFsaWZpZXIpLFxuICAgICAgU2VydmljZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZU5hbWUpLFxuICAgICAgVGFyZ2V0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6RkM6OlByb3Zpc2lvbkNvbmZpZ2BcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1Byb3Zpc2lvbkNvbmZpZyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RkM6OlByb3Zpc2lvbkNvbmZpZ1wiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEZ1bmN0aW9uTmFtZTogVGhlIGZ1bmN0aW9uIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZ1bmN0aW9uTmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBRdWFsaWZpZXI6IFRoZSBzZXJ2aWNlIGFsaWFzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJRdWFsaWZpZXI6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzb3VyY2U6IFRoZSByZXNvdXJjZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2U6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2VydmljZU5hbWU6IFRoZSBzZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRhcmdldDogTnVtYmVyIG9mIHByb3Zpc2lvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFyZ2V0OiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmdW5jdGlvbk5hbWU6IEZ1bmN0aW9uIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZnVuY3Rpb25OYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcXVhbGlmaWVyOiBTZXJ2aWNlJ3MgYWxpYXMuXG4gICAgICogRXhhbXBsZSA6IFwiTEFURVNUXCJcbiAgICAgKi9cbiAgICBwdWJsaWMgcXVhbGlmaWVyOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldDogTnVtYmVyIG9mIHByb3Zpc2lvblxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpGQzo6UHJvdmlzaW9uQ29uZmlnYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NQcm92aXNpb25Db25maWdQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1Byb3Zpc2lvbkNvbmZpZy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRnVuY3Rpb25OYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdGdW5jdGlvbk5hbWUnKSk7XG4gICAgICAgIHRoaXMuYXR0clF1YWxpZmllciA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnUXVhbGlmaWVyJykpO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnUmVzb3VyY2UnKSk7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdTZXJ2aWNlTmFtZScpKTtcbiAgICAgICAgdGhpcy5hdHRyVGFyZ2V0ID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdUYXJnZXQnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZ1bmN0aW9uTmFtZSA9IHByb3BzLmZ1bmN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5xdWFsaWZpZXIgPSBwcm9wcy5xdWFsaWZpZXI7XG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBwcm9wcy5zZXJ2aWNlTmFtZTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBwcm9wcy50YXJnZXQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiB0aGlzLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHF1YWxpZmllcjogdGhpcy5xdWFsaWZpZXIsXG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1Byb3Zpc2lvbkNvbmZpZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RkM6OlNlcnZpY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU2VydmljZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGlvbkZvcmNlOiBXaGV0aGVyIGZvcmNlIGRlbGV0ZSB0aGUgc2VydmljZSB3aXRob3V0IHdhaXRpbmcgZm9yIG5ldHdvcmsgaW50ZXJmYWNlcyB0byBiZSBjbGVhbmVkIHVwIGlmIFZwY0NvbmZpZyBpcyBzcGVjaWZpZWQuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRpb25Gb3JjZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFNlcnZpY2UgZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcm5ldEFjY2VzczogU2V0IGl0IHRvIHRydWUgdG8gZW5hYmxlIEludGVybmV0IGFjY2Vzcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldEFjY2Vzcz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nQ29uZmlnOiBMb2cgY29uZmlndXJhdGlvbi4gRnVuY3Rpb24gQ29tcHV0ZSBwdXNoZXMgZnVuY3Rpb24gZXhlY3V0aW9uIGxvZ3MgdG8gdGhlIGNvbmZpZ3VyZWQgbG9nIHN0b3JlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ0NvbmZpZz86IFJvc1NlcnZpY2UuTG9nQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFzQ29uZmlnOiBOQVMgY29uZmlndXJhdGlvbi4gRnVuY3Rpb24gQ29tcHV0ZSB1c2VzIGEgc3BlY2lmaWVkIE5BUyBjb25maWd1cmVkIG9uIHRoZSBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hc0NvbmZpZz86IFJvc1NlcnZpY2UuTmFzQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm9sZTogVGhlIHJvbGUgZ3JhbnRzIEZ1bmN0aW9uIENvbXB1dGUgdGhlIHBlcm1pc3Npb24gdG8gYWNjZXNzIHVzZXLigJlzIGNsb3VkIHJlc291cmNlcywgc3VjaCBhcyBwdXNoaW5nIGxvZ3MgdG8gdXNlcuKAmXMgbG9nIHN0b3JlLiBUaGUgdGVtcG9yYXJ5IFNUUyB0b2tlbiBnZW5lcmF0ZWQgZnJvbSB0aGlzIHJvbGUgY2FuIGJlIHJldHJpZXZlZCBmcm9tIGZ1bmN0aW9uIGNvbnRleHQgYW5kIHVzZWQgdG8gYWNjZXNzIGNsb3VkIHJlc291cmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSByb2xlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIHNlcnZpY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgc2VydmljZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiByb3MuUm9zVGFnW107XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjQ29uZmlnOiBWUEMgY29uZmlndXJhdGlvbi4gRnVuY3Rpb24gQ29tcHV0ZSB1c2VzIHRoZSBjb25maWcgdG8gc2V0dXAgRU5JIGluIHRoZSBzcGVjaWZpYyBWUEMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjQ29uZmlnPzogUm9zU2VydmljZS5WcGNDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTZXJ2aWNlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NlcnZpY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZXJ2aWNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb2xlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJvbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0QWNjZXNzJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5pbnRlcm5ldEFjY2VzcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGV0aW9uRm9yY2UnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmRlbGV0aW9uRm9yY2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0NvbmZpZycsIFJvc1NlcnZpY2VfVnBjQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMudnBjQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VydmljZU5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2VydmljZU5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy50YWdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlUm9zVGFnKSkocHJvcGVydGllcy50YWdzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYXNDb25maWcnLCBSb3NTZXJ2aWNlX05hc0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hc0NvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nQ29uZmlnJywgUm9zU2VydmljZV9Mb2dDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5sb2dDb25maWcpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zU2VydmljZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU2VydmljZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZXJ2aWNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NTZXJ2aWNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgU2VydmljZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZU5hbWUpLFxuICAgICAgRGVsZXRpb25Gb3JjZTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVsZXRpb25Gb3JjZSksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBJbnRlcm5ldEFjY2Vzczogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRBY2Nlc3MpLFxuICAgICAgTG9nQ29uZmlnOiByb3NTZXJ2aWNlTG9nQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9nQ29uZmlnKSxcbiAgICAgIE5hc0NvbmZpZzogcm9zU2VydmljZU5hc0NvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hc0NvbmZpZyksXG4gICAgICBSb2xlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvbGUpLFxuICAgICAgVGFnczogcm9zLmxpc3RNYXBwZXIocm9zLnJvc1RhZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGFncyksXG4gICAgICBWcGNDb25maWc6IHJvc1NlcnZpY2VWcGNDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNDb25maWcpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkZDOjpTZXJ2aWNlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zU2VydmljZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RkM6OlNlcnZpY2VcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlSWQ6IFRoZSBzZXJ2aWNlIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2VydmljZU5hbWU6IFRoZSBzZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRhZ3M6IFRhZ3Mgb2Ygc2VydmljZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFnczogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGVsZXRlIHRoZSBzZXJ2aWNlIHdpdGhvdXQgd2FpdGluZyBmb3IgbmV0d29yayBpbnRlcmZhY2VzIHRvIGJlIGNsZWFuZWQgdXAgaWYgVnBjQ29uZmlnIGlzIHNwZWNpZmllZC4gRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVsZXRpb25Gb3JjZTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogU2VydmljZSBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0QWNjZXNzOiBTZXQgaXQgdG8gdHJ1ZSB0byBlbmFibGUgSW50ZXJuZXQgYWNjZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcm5ldEFjY2VzczogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dDb25maWc6IExvZyBjb25maWd1cmF0aW9uLiBGdW5jdGlvbiBDb21wdXRlIHB1c2hlcyBmdW5jdGlvbiBleGVjdXRpb24gbG9ncyB0byB0aGUgY29uZmlndXJlZCBsb2cgc3RvcmUuXG4gICAgICovXG4gICAgcHVibGljIGxvZ0NvbmZpZzogUm9zU2VydmljZS5Mb2dDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXNDb25maWc6IE5BUyBjb25maWd1cmF0aW9uLiBGdW5jdGlvbiBDb21wdXRlIHVzZXMgYSBzcGVjaWZpZWQgTkFTIGNvbmZpZ3VyZWQgb24gdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIG5hc0NvbmZpZzogUm9zU2VydmljZS5OYXNDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb2xlOiBUaGUgcm9sZSBncmFudHMgRnVuY3Rpb24gQ29tcHV0ZSB0aGUgcGVybWlzc2lvbiB0byBhY2Nlc3MgdXNlcuKAmXMgY2xvdWQgcmVzb3VyY2VzLCBzdWNoIGFzIHB1c2hpbmcgbG9ncyB0byB1c2Vy4oCZcyBsb2cgc3RvcmUuIFRoZSB0ZW1wb3JhcnkgU1RTIHRva2VuIGdlbmVyYXRlZCBmcm9tIHRoaXMgcm9sZSBjYW4gYmUgcmV0cmlldmVkIGZyb20gZnVuY3Rpb24gY29udGV4dCBhbmQgdXNlZCB0byBhY2Nlc3MgY2xvdWQgcmVzb3VyY2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyByb2xlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gc2VydmljZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBzZXJ2aWNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IHRhZ3M6IHJvcy5UYWdNYW5hZ2VyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0NvbmZpZzogVlBDIGNvbmZpZ3VyYXRpb24uIEZ1bmN0aW9uIENvbXB1dGUgdXNlcyB0aGUgY29uZmlnIHRvIHNldHVwIEVOSSBpbiB0aGUgc3BlY2lmaWMgVlBDLlxuICAgICAqL1xuICAgIHB1YmxpYyB2cGNDb25maWc6IFJvc1NlcnZpY2UuVnBjQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RkM6OlNlcnZpY2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1NlcnZpY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1NlcnZpY2UuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnU2VydmljZUlkJykpO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlTmFtZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnU2VydmljZU5hbWUnKSk7XG4gICAgICAgIHRoaXMuYXR0clRhZ3MgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1RhZ3MnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gcHJvcHMuc2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMuZGVsZXRpb25Gb3JjZSA9IHByb3BzLmRlbGV0aW9uRm9yY2U7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pbnRlcm5ldEFjY2VzcyA9IHByb3BzLmludGVybmV0QWNjZXNzO1xuICAgICAgICB0aGlzLmxvZ0NvbmZpZyA9IHByb3BzLmxvZ0NvbmZpZztcbiAgICAgICAgdGhpcy5uYXNDb25maWcgPSBwcm9wcy5uYXNDb25maWc7XG4gICAgICAgIHRoaXMucm9sZSA9IHByb3BzLnJvbGU7XG4gICAgICAgIHRoaXMudGFncyA9IG5ldyByb3MuVGFnTWFuYWdlcihyb3MuVGFnVHlwZS5TVEFOREFSRCwgXCJBTElZVU46OkZDOjpTZXJ2aWNlXCIsIHByb3BzLnRhZ3MsIHsgdGFnUHJvcGVydHlOYW1lOiAndGFncycgfSk7XG4gICAgICAgIHRoaXMudnBjQ29uZmlnID0gcHJvcHMudnBjQ29uZmlnO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiB0aGlzLnNlcnZpY2VOYW1lLFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogdGhpcy5kZWxldGlvbkZvcmNlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbnRlcm5ldEFjY2VzczogdGhpcy5pbnRlcm5ldEFjY2VzcyxcbiAgICAgICAgICAgIGxvZ0NvbmZpZzogdGhpcy5sb2dDb25maWcsXG4gICAgICAgICAgICBuYXNDb25maWc6IHRoaXMubmFzQ29uZmlnLFxuICAgICAgICAgICAgcm9sZTogdGhpcy5yb2xlLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLnJlbmRlclRhZ3MoKSxcbiAgICAgICAgICAgIHZwY0NvbmZpZzogdGhpcy52cGNDb25maWcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1NlcnZpY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHJvamVjdDogVGhlIHByb2plY3QgbmFtZSBvZiBMb2dzIHNlcnZpY2VcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByb2plY3Q/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbG9nc3RvcmU6IFRoZSBsb2cgc3RvcmUgbmFtZSBvZiBMb2dzIHNlcnZpY2VcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvZ3N0b3JlPzogc3RyaW5nO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTG9nQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExvZ0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlcnZpY2VfTG9nQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb2plY3QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ3N0b3JlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvZ3N0b3JlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkxvZ0NvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZS5Mb2dDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExvZ0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZS5Mb2dDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VydmljZUxvZ0NvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTZXJ2aWNlX0xvZ0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgUHJvamVjdDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm9qZWN0KSxcbiAgICAgIExvZ3N0b3JlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ3N0b3JlKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1NlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1vdW50UG9pbnRzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNlcnZlckFkZHI6IFRoZSBhZGRyZXNzIG9mIE5BUyBpbnN0YW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNlcnZlckFkZHI6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtb3VudERpcjogQSBsb2NhbCBtb3VudCBwb2ludC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1vdW50RGlyOiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBNb3VudFBvaW50c1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNb3VudFBvaW50c1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlcnZpY2VfTW91bnRQb2ludHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlckFkZHInLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmVyQWRkcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmVyQWRkcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2ZXJBZGRyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb3VudERpcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tb3VudERpcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnREaXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW91bnREaXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTW91bnRQb2ludHNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2UuTW91bnRQb2ludHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1vdW50UG9pbnRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLk1vdW50UG9pbnRzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlcnZpY2VNb3VudFBvaW50c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTZXJ2aWNlX01vdW50UG9pbnRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBTZXJ2ZXJBZGRyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZlckFkZHIpLFxuICAgICAgTW91bnREaXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubW91bnREaXIpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTmFzQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1vdW50UG9pbnRzOiBNb3VudCBwb2ludHNcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1vdW50UG9pbnRzOiBBcnJheTxSb3NTZXJ2aWNlLk1vdW50UG9pbnRzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHVzZXJJZDogVXNlciBJRFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdXNlcklkOiBudW1iZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogR3JvdXAgSURcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGdyb3VwSWQ6IG51bWJlcjtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE5hc0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBOYXNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZXJ2aWNlX05hc0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnRQb2ludHMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubW91bnRQb2ludHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vdW50UG9pbnRzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zU2VydmljZV9Nb3VudFBvaW50c1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5tb3VudFBvaW50cykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnVzZXJJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMudXNlcklkICYmICh0eXBlb2YgcHJvcGVydGllcy51c2VySWQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJJZCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnVzZXJJZCxcbiAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICBtYXg6IDY1NTM0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1c2VySWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudXNlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdyb3VwSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmdyb3VwSWQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmdyb3VwSWQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5ncm91cElkLFxuICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgIG1heDogNjU1MzQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJOYXNDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2UuTmFzQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBOYXNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2UuTmFzQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlcnZpY2VOYXNDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zU2VydmljZV9OYXNDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE1vdW50UG9pbnRzOiByb3MubGlzdE1hcHBlcihyb3NTZXJ2aWNlTW91bnRQb2ludHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubW91bnRQb2ludHMpLFxuICAgICAgVXNlcklkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZXJJZCksXG4gICAgICBHcm91cElkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwSWQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVnBjQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZwY0lkOiBWUEMgSURcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdlN3aXRjaElkczogTGlzdCBvZiBWU3dpdGNoIElEc1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdlN3aXRjaElkczogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFNlY3VyaXR5IGdyb3VwIElEXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ6IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFZwY0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBWcGNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZXJ2aWNlX1ZwY0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2U3dpdGNoSWRzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZTd2l0Y2hJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnZTd2l0Y2hJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlY3VyaXR5R3JvdXBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZWN1cml0eUdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlY3VyaXR5R3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZWN1cml0eUdyb3VwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVnBjQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLlZwY0NvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVnBjQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLlZwY0NvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZXJ2aWNlVnBjQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1NlcnZpY2VfVnBjQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBWcGNJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNJZCksXG4gICAgICBWU3dpdGNoSWRzOiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy52U3dpdGNoSWRzKSxcbiAgICAgIFNlY3VyaXR5R3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZWN1cml0eUdyb3VwSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpGQzo6VHJpZ2dlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NUcmlnZ2VyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBmdW5jdGlvbk5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJpZ2dlckNvbmZpZzogRXZlbnQgc291cmNlIHNwZWNpZmljIHRyaWdnZXIgY29uZmlndXJhdGlvbi4gVGhlIHZhbHVlIGlzIGRpZmZlcmVudCBhY2NvcmRpbmcgdG8gdHJpZ2dlciB0eXBlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyaWdnZXJDb25maWc6IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmlnZ2VyTmFtZTogVHJpZ2dlciBuYW1lLlxuICAgICAqIEV4YW1wbGUgOiBcImltYWdlX3Jlc2l6ZVwiXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJpZ2dlck5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmlnZ2VyVHlwZTogVHJpZ2dlciB0eXBlLCBlLmcuIG9zcywgdGltZXIsIGxvZ3MuIFRoaXMgZGV0ZXJtaW5lcyBob3cgdGhlIHRyaWdnZXIgY29uZmlnIGlzIGludGVycHJldGVkLlxuICAgICAqIEV4YW1wbGUgOiBcIm9zc1wiXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJpZ2dlclR5cGU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnZvY2F0aW9uUm9sZTogVGhlIHJvbGUgZ3JhbnRzIGV2ZW50IHNvdXJjZSB0aGUgcGVybWlzc2lvbiB0byBydW4gZnVuY3Rpb24gb24gYmVoYWxmIG9mIHVzZXIuIFRoaXMgaXMgb3B0aW9uYWwgZm9yIHNvbWUgdHJpZ2dlcnMuXG4gICAgICogRXhhbXBsZSA6IFwiYWNzOnJhbTo6MTIzNDU2Nzg5MDpyb2xlL2ZjLXRlc3RcIlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludm9jYXRpb25Sb2xlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHF1YWxpZmllcjogc2VydmljZSB2ZXJzaW9uIG9yIGFsaWFzLlxuICAgICAqIEV4YW1wbGUgOiBcIkxBVEVTVFwiXG4gICAgICovXG4gICAgcmVhZG9ubHkgcXVhbGlmaWVyPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZUFybjogVGhlIEFsaXl1biBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIGV2ZW50IHNvdXJjZS4gVGhpcyBpcyBvcHRpb25hbCBmb3Igc29tZSB0cmlnZ2Vycy5cbiAgICAgKiBFeGFtcGxlIDogXCJhY3M6b3NzOmNuLXNoYW5naGFpOjEyMzQ1Om15YnVja2V0XCJcbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VBcm4/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zVHJpZ2dlclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NUcmlnZ2VyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVHJpZ2dlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJpZ2dlclR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudHJpZ2dlclR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyaWdnZXJUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRyaWdnZXJUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmlnZ2VyTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50cmlnZ2VyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJpZ2dlck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHJpZ2dlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZUFybicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zb3VyY2VBcm4pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5zZXJ2aWNlTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc2VydmljZU5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zZXJ2aWNlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEyOCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyaWdnZXJDb25maWcnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudHJpZ2dlckNvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJpZ2dlckNvbmZpZycsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMudHJpZ2dlckNvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW52b2NhdGlvblJvbGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW52b2NhdGlvblJvbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3F1YWxpZmllcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5xdWFsaWZpZXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVHJpZ2dlclByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6VHJpZ2dlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVHJpZ2dlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6VHJpZ2dlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NUcmlnZ2VyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NUcmlnZ2VyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRnVuY3Rpb25OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSksXG4gICAgICBTZXJ2aWNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICBUcmlnZ2VyQ29uZmlnOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50cmlnZ2VyQ29uZmlnKSxcbiAgICAgIFRyaWdnZXJOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyaWdnZXJOYW1lKSxcbiAgICAgIFRyaWdnZXJUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyaWdnZXJUeXBlKSxcbiAgICAgIEludm9jYXRpb25Sb2xlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmludm9jYXRpb25Sb2xlKSxcbiAgICAgIFF1YWxpZmllcjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5xdWFsaWZpZXIpLFxuICAgICAgU291cmNlQXJuOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNvdXJjZUFybiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6RkM6OlRyaWdnZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NUcmlnZ2VyIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpGQzo6VHJpZ2dlclwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZ1bmN0aW9uTmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZU5hbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVHJpZ2dlcklkOiBUaGUgdHJpZ2dlciBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyaWdnZXJJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUcmlnZ2VyTmFtZTogVHJpZ2dlciBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJpZ2dlck5hbWU6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZnVuY3Rpb25OYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmlnZ2VyQ29uZmlnOiBFdmVudCBzb3VyY2Ugc3BlY2lmaWMgdHJpZ2dlciBjb25maWd1cmF0aW9uLiBUaGUgdmFsdWUgaXMgZGlmZmVyZW50IGFjY29yZGluZyB0byB0cmlnZ2VyIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHRyaWdnZXJDb25maWc6IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmlnZ2VyTmFtZTogVHJpZ2dlciBuYW1lLlxuICAgICAqIEV4YW1wbGUgOiBcImltYWdlX3Jlc2l6ZVwiXG4gICAgICovXG4gICAgcHVibGljIHRyaWdnZXJOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJpZ2dlclR5cGU6IFRyaWdnZXIgdHlwZSwgZS5nLiBvc3MsIHRpbWVyLCBsb2dzLiBUaGlzIGRldGVybWluZXMgaG93IHRoZSB0cmlnZ2VyIGNvbmZpZyBpcyBpbnRlcnByZXRlZC5cbiAgICAgKiBFeGFtcGxlIDogXCJvc3NcIlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmlnZ2VyVHlwZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludm9jYXRpb25Sb2xlOiBUaGUgcm9sZSBncmFudHMgZXZlbnQgc291cmNlIHRoZSBwZXJtaXNzaW9uIHRvIHJ1biBmdW5jdGlvbiBvbiBiZWhhbGYgb2YgdXNlci4gVGhpcyBpcyBvcHRpb25hbCBmb3Igc29tZSB0cmlnZ2Vycy5cbiAgICAgKiBFeGFtcGxlIDogXCJhY3M6cmFtOjoxMjM0NTY3ODkwOnJvbGUvZmMtdGVzdFwiXG4gICAgICovXG4gICAgcHVibGljIGludm9jYXRpb25Sb2xlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcXVhbGlmaWVyOiBzZXJ2aWNlIHZlcnNpb24gb3IgYWxpYXMuXG4gICAgICogRXhhbXBsZSA6IFwiTEFURVNUXCJcbiAgICAgKi9cbiAgICBwdWJsaWMgcXVhbGlmaWVyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlQXJuOiBUaGUgQWxpeXVuIFJlc291cmNlIE5hbWUgKEFSTikgb2YgZXZlbnQgc291cmNlLiBUaGlzIGlzIG9wdGlvbmFsIGZvciBzb21lIHRyaWdnZXJzLlxuICAgICAqIEV4YW1wbGUgOiBcImFjczpvc3M6Y24tc2hhbmdoYWk6MTIzNDU6bXlidWNrZXRcIlxuICAgICAqL1xuICAgIHB1YmxpYyBzb3VyY2VBcm46IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpGQzo6VHJpZ2dlcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVHJpZ2dlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVHJpZ2dlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRnVuY3Rpb25OYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdGdW5jdGlvbk5hbWUnKSk7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdTZXJ2aWNlTmFtZScpKTtcbiAgICAgICAgdGhpcy5hdHRyVHJpZ2dlcklkID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdUcmlnZ2VySWQnKSk7XG4gICAgICAgIHRoaXMuYXR0clRyaWdnZXJOYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdUcmlnZ2VyTmFtZScpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZnVuY3Rpb25OYW1lID0gcHJvcHMuZnVuY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gcHJvcHMuc2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMudHJpZ2dlckNvbmZpZyA9IHByb3BzLnRyaWdnZXJDb25maWc7XG4gICAgICAgIHRoaXMudHJpZ2dlck5hbWUgPSBwcm9wcy50cmlnZ2VyTmFtZTtcbiAgICAgICAgdGhpcy50cmlnZ2VyVHlwZSA9IHByb3BzLnRyaWdnZXJUeXBlO1xuICAgICAgICB0aGlzLmludm9jYXRpb25Sb2xlID0gcHJvcHMuaW52b2NhdGlvblJvbGU7XG4gICAgICAgIHRoaXMucXVhbGlmaWVyID0gcHJvcHMucXVhbGlmaWVyO1xuICAgICAgICB0aGlzLnNvdXJjZUFybiA9IHByb3BzLnNvdXJjZUFybjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHRoaXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2VydmljZU5hbWU6IHRoaXMuc2VydmljZU5hbWUsXG4gICAgICAgICAgICB0cmlnZ2VyQ29uZmlnOiB0aGlzLnRyaWdnZXJDb25maWcsXG4gICAgICAgICAgICB0cmlnZ2VyTmFtZTogdGhpcy50cmlnZ2VyTmFtZSxcbiAgICAgICAgICAgIHRyaWdnZXJUeXBlOiB0aGlzLnRyaWdnZXJUeXBlLFxuICAgICAgICAgICAgaW52b2NhdGlvblJvbGU6IHRoaXMuaW52b2NhdGlvblJvbGUsXG4gICAgICAgICAgICBxdWFsaWZpZXI6IHRoaXMucXVhbGlmaWVyLFxuICAgICAgICAgICAgc291cmNlQXJuOiB0aGlzLnNvdXJjZUFybixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVHJpZ2dlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RkM6OlZlcnNpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVmVyc2lvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVmVyc2lvbiBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1ZlcnNpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVmVyc2lvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1ZlcnNpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VydmljZU5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2VydmljZU5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1ZlcnNpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlZlcnNpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZlcnNpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlZlcnNpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVmVyc2lvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVmVyc2lvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFNlcnZpY2VOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpGQzo6VmVyc2lvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1ZlcnNpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkZDOjpWZXJzaW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2VydmljZU5hbWU6IFRoZSBzZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZlcnNpb25JZDogVGhlIHZlcnNpb24gSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZlcnNpb25JZDogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBWZXJzaW9uIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RkM6OlZlcnNpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1ZlcnNpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1ZlcnNpb24uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdTZXJ2aWNlTmFtZScpKTtcbiAgICAgICAgdGhpcy5hdHRyVmVyc2lvbklkID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdWZXJzaW9uSWQnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gcHJvcHMuc2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NWZXJzaW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=