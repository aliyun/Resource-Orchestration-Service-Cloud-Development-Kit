"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosVersion = exports.RosTrigger = exports.RosService = exports.RosProvisionConfig = exports.RosLayer = exports.RosFunctionInvoker = exports.RosFunction = exports.RosCustomDomain = exports.RosAlias = void 0;
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
        'AliasName': ros.stringToRosTemplate(properties.aliasName),
        'ServiceName': ros.stringToRosTemplate(properties.serviceName),
        'AdditionalVersion': ros.stringToRosTemplate(properties.additionalVersion),
        'AdditionalWeight': ros.numberToRosTemplate(properties.additionalWeight),
        'Description': ros.stringToRosTemplate(properties.description),
        'VersionId': ros.stringToRosTemplate(properties.versionId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Alias`, which is used to create an Alias.
 * @Note This class does not contain additional functions, so it is recommended to use the `Alias` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-alias
 */
class RosAlias extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAlias.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAliasName = this.getAtt('AliasName');
        this.attrServiceName = this.getAtt('ServiceName');
        this.attrVersionId = this.getAtt('VersionId');
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
        'DomainName': ros.stringToRosTemplate(properties.domainName),
        'Protocol': ros.stringToRosTemplate(properties.protocol),
        'ApiVersion': ros.stringToRosTemplate(properties.apiVersion),
        'CertConfig': rosCustomDomainCertConfigPropertyToRosTemplate(properties.certConfig),
        'RouteConfig': rosCustomDomainRouteConfigPropertyToRosTemplate(properties.routeConfig),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::CustomDomain`, which is used to create a custom domain name.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomDomain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-customdomain
 */
class RosCustomDomain extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCustomDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomain = this.getAtt('Domain');
        this.attrDomainName = this.getAtt('DomainName');
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
        'PrivateKey': ros.stringToRosTemplate(properties.privateKey),
        'CertName': ros.stringToRosTemplate(properties.certName),
        'Certificate': ros.stringToRosTemplate(properties.certificate),
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
        'Path': ros.stringToRosTemplate(properties.path),
        'FunctionName': ros.stringToRosTemplate(properties.functionName),
        'ServiceName': ros.stringToRosTemplate(properties.serviceName),
        'Qualifier': ros.stringToRosTemplate(properties.qualifier),
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
            max: 32768,
        }));
    }
    errors.collect(ros.propertyValidator('memorySize', ros.validateNumber)(properties.memorySize));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
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
    errors.collect(ros.propertyValidator('cpu', ros.validateNumber)(properties.cpu));
    errors.collect(ros.propertyValidator('customHealthCheckConfig', RosFunction_CustomHealthCheckConfigPropertyValidator)(properties.customHealthCheckConfig));
    errors.collect(ros.propertyValidator('customContainerConfig', RosFunction_CustomContainerConfigPropertyValidator)(properties.customContainerConfig));
    errors.collect(ros.propertyValidator('code', RosFunction_CodePropertyValidator)(properties.code));
    errors.collect(ros.propertyValidator('asyncConfiguration', RosFunction_AsyncConfigurationPropertyValidator)(properties.asyncConfiguration));
    errors.collect(ros.propertyValidator('caPort', ros.validateNumber)(properties.caPort));
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('runtime', ros.requiredValidator)(properties.runtime));
    errors.collect(ros.propertyValidator('runtime', ros.validateString)(properties.runtime));
    errors.collect(ros.propertyValidator('environmentVariables', ros.hashValidator(ros.validateAny))(properties.environmentVariables));
    errors.collect(ros.propertyValidator('customRuntimeConfig', RosFunction_CustomRuntimeConfigPropertyValidator)(properties.customRuntimeConfig));
    errors.collect(ros.propertyValidator('initializationTimeout', ros.validateNumber)(properties.initializationTimeout));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if (properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
        errors.collect(ros.propertyValidator('serviceName', ros.validateLength)({
            data: properties.serviceName.length,
            min: 1,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('initializer', ros.validateString)(properties.initializer));
    errors.collect(ros.propertyValidator('gpuMemorySize', ros.validateNumber)(properties.gpuMemorySize));
    if (properties.diskSize && (typeof properties.diskSize) !== 'object') {
        errors.collect(ros.propertyValidator('diskSize', ros.validateAllowedValues)({
            data: properties.diskSize,
            allowedValues: [512, 10240],
        }));
    }
    errors.collect(ros.propertyValidator('diskSize', ros.validateNumber)(properties.diskSize));
    errors.collect(ros.propertyValidator('customDns', RosFunction_CustomDNSPropertyValidator)(properties.customDns));
    if (properties.instanceConcurrency && (typeof properties.instanceConcurrency) !== 'object') {
        errors.collect(ros.propertyValidator('instanceConcurrency', ros.validateRange)({
            data: properties.instanceConcurrency,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('instanceConcurrency', ros.validateNumber)(properties.instanceConcurrency));
    if (properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
            data: properties.instanceType,
            allowedValues: ["e1", "c1", "fc.gpu.tesla.1", "fc.gpu.ampere.1", "g1"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if (properties.instanceSoftConcurrency && (typeof properties.instanceSoftConcurrency) !== 'object') {
        errors.collect(ros.propertyValidator('instanceSoftConcurrency', ros.validateRange)({
            data: properties.instanceSoftConcurrency,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('instanceSoftConcurrency', ros.validateNumber)(properties.instanceSoftConcurrency));
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
        'FunctionName': ros.stringToRosTemplate(properties.functionName),
        'Handler': ros.stringToRosTemplate(properties.handler),
        'Runtime': ros.stringToRosTemplate(properties.runtime),
        'ServiceName': ros.stringToRosTemplate(properties.serviceName),
        'AsyncConfiguration': rosFunctionAsyncConfigurationPropertyToRosTemplate(properties.asyncConfiguration),
        'CAPort': ros.numberToRosTemplate(properties.caPort),
        'Code': rosFunctionCodePropertyToRosTemplate(properties.code),
        'Cpu': ros.numberToRosTemplate(properties.cpu),
        'CustomContainerConfig': rosFunctionCustomContainerConfigPropertyToRosTemplate(properties.customContainerConfig),
        'CustomDNS': rosFunctionCustomDNSPropertyToRosTemplate(properties.customDns),
        'CustomHealthCheckConfig': rosFunctionCustomHealthCheckConfigPropertyToRosTemplate(properties.customHealthCheckConfig),
        'CustomRuntimeConfig': rosFunctionCustomRuntimeConfigPropertyToRosTemplate(properties.customRuntimeConfig),
        'Description': ros.stringToRosTemplate(properties.description),
        'DiskSize': ros.numberToRosTemplate(properties.diskSize),
        'EnvironmentVariables': ros.hashMapper(ros.objectToRosTemplate)(properties.environmentVariables),
        'GpuMemorySize': ros.numberToRosTemplate(properties.gpuMemorySize),
        'InitializationTimeout': ros.numberToRosTemplate(properties.initializationTimeout),
        'Initializer': ros.stringToRosTemplate(properties.initializer),
        'InstanceConcurrency': ros.numberToRosTemplate(properties.instanceConcurrency),
        'InstanceLifecycleConfig': rosFunctionInstanceLifecycleConfigPropertyToRosTemplate(properties.instanceLifecycleConfig),
        'InstanceSoftConcurrency': ros.numberToRosTemplate(properties.instanceSoftConcurrency),
        'InstanceType': ros.stringToRosTemplate(properties.instanceType),
        'MemorySize': ros.numberToRosTemplate(properties.memorySize),
        'Timeout': ros.numberToRosTemplate(properties.timeout),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Function`, which is used to create a function. Functions must be associated with services. All functions of a service share the same attributes as the service, such as service authorization and log configurations.
 * @Note This class does not contain additional functions, so it is recommended to use the `Function` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-function
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
        this.attrServiceId = this.getAtt('ServiceId');
        this.attrServiceName = this.getAtt('ServiceName');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.functionName = props.functionName;
        this.handler = props.handler;
        this.runtime = props.runtime;
        this.serviceName = props.serviceName;
        this.asyncConfiguration = props.asyncConfiguration;
        this.caPort = props.caPort;
        this.code = props.code;
        this.cpu = props.cpu;
        this.customContainerConfig = props.customContainerConfig;
        this.customDns = props.customDns;
        this.customHealthCheckConfig = props.customHealthCheckConfig;
        this.customRuntimeConfig = props.customRuntimeConfig;
        this.description = props.description;
        this.diskSize = props.diskSize;
        this.environmentVariables = props.environmentVariables;
        this.gpuMemorySize = props.gpuMemorySize;
        this.initializationTimeout = props.initializationTimeout;
        this.initializer = props.initializer;
        this.instanceConcurrency = props.instanceConcurrency;
        this.instanceLifecycleConfig = props.instanceLifecycleConfig;
        this.instanceSoftConcurrency = props.instanceSoftConcurrency;
        this.instanceType = props.instanceType;
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
            cpu: this.cpu,
            customContainerConfig: this.customContainerConfig,
            customDns: this.customDns,
            customHealthCheckConfig: this.customHealthCheckConfig,
            customRuntimeConfig: this.customRuntimeConfig,
            description: this.description,
            diskSize: this.diskSize,
            environmentVariables: this.environmentVariables,
            gpuMemorySize: this.gpuMemorySize,
            initializationTimeout: this.initializationTimeout,
            initializer: this.initializer,
            instanceConcurrency: this.instanceConcurrency,
            instanceLifecycleConfig: this.instanceLifecycleConfig,
            instanceSoftConcurrency: this.instanceSoftConcurrency,
            instanceType: this.instanceType,
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
    errors.collect(ros.propertyValidator('statefulInvocation', ros.validateBoolean)(properties.statefulInvocation));
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
        'Destination': rosFunctionDestinationPropertyToRosTemplate(properties.destination),
        'MaxAsyncEventAgeInSeconds': ros.numberToRosTemplate(properties.maxAsyncEventAgeInSeconds),
        'StatefulInvocation': ros.booleanToRosTemplate(properties.statefulInvocation),
        'MaxAsyncRetryAttempts': ros.numberToRosTemplate(properties.maxAsyncRetryAttempts),
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
        'SourceCode': ros.stringToRosTemplate(properties.sourceCode),
        'ZipFile': ros.stringToRosTemplate(properties.zipFile),
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
    errors.collect(ros.propertyValidator('args', ros.validateString)(properties.args));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('command', ros.validateString)(properties.command));
    errors.collect(ros.propertyValidator('accelerationType', ros.validateString)(properties.accelerationType));
    errors.collect(ros.propertyValidator('webServerMode', ros.validateBoolean)(properties.webServerMode));
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
        'Args': ros.stringToRosTemplate(properties.args),
        'InstanceId': ros.stringToRosTemplate(properties.instanceId),
        'Command': ros.stringToRosTemplate(properties.command),
        'AccelerationType': ros.stringToRosTemplate(properties.accelerationType),
        'WebServerMode': ros.booleanToRosTemplate(properties.webServerMode),
        'Image': ros.stringToRosTemplate(properties.image),
    };
}
/**
 * Determine whether the given properties match those of a `CustomDNSProperty`
 *
 * @param properties - the TypeScript properties of a `CustomDNSProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CustomDNSPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('searches', ros.listValidator(ros.validateString))(properties.searches));
    errors.collect(ros.propertyValidator('dnsOptions', ros.listValidator(RosFunction_DnsOptionsPropertyValidator))(properties.dnsOptions));
    errors.collect(ros.propertyValidator('nameServers', ros.listValidator(ros.validateString))(properties.nameServers));
    return errors.wrap('supplied properties not correct for "CustomDNSProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.CustomDNS` resource
 *
 * @param properties - the TypeScript properties of a `CustomDNSProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.CustomDNS` resource.
 */
// @ts-ignore TS6133
function rosFunctionCustomDNSPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_CustomDNSPropertyValidator(properties).assertSuccess();
    return {
        'Searches': ros.listMapper(ros.stringToRosTemplate)(properties.searches),
        'DnsOptions': ros.listMapper(rosFunctionDnsOptionsPropertyToRosTemplate)(properties.dnsOptions),
        'NameServers': ros.listMapper(ros.stringToRosTemplate)(properties.nameServers),
    };
}
/**
 * Determine whether the given properties match those of a `CustomHealthCheckConfigProperty`
 *
 * @param properties - the TypeScript properties of a `CustomHealthCheckConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_CustomHealthCheckConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.timeoutSeconds && (typeof properties.timeoutSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateRange)({
            data: properties.timeoutSeconds,
            min: 1,
            max: 3,
        }));
    }
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
    return errors.wrap('supplied properties not correct for "CustomHealthCheckConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.CustomHealthCheckConfig` resource
 *
 * @param properties - the TypeScript properties of a `CustomHealthCheckConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.CustomHealthCheckConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionCustomHealthCheckConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_CustomHealthCheckConfigPropertyValidator(properties).assertSuccess();
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
    errors.collect(ros.propertyValidator('args', ros.listValidator(ros.validateString))(properties.args));
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    return errors.wrap('supplied properties not correct for "CustomRuntimeConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.CustomRuntimeConfig` resource
 *
 * @param properties - the TypeScript properties of a `CustomRuntimeConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.CustomRuntimeConfig` resource.
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
        'OnSuccess': ros.stringToRosTemplate(properties.onSuccess),
        'OnFailure': ros.stringToRosTemplate(properties.onFailure),
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
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "DnsOptionsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.DnsOptions` resource
 *
 * @param properties - the TypeScript properties of a `DnsOptionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.DnsOptions` resource.
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
    errors.collect(ros.propertyValidator('preFreeze', RosFunction_PreFreezePropertyValidator)(properties.preFreeze));
    return errors.wrap('supplied properties not correct for "InstanceLifecycleConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.InstanceLifecycleConfig` resource
 *
 * @param properties - the TypeScript properties of a `InstanceLifecycleConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.InstanceLifecycleConfig` resource.
 */
// @ts-ignore TS6133
function rosFunctionInstanceLifecycleConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_InstanceLifecycleConfigPropertyValidator(properties).assertSuccess();
    return {
        'PreStop': rosFunctionPreStopPropertyToRosTemplate(properties.preStop),
        'PreFreeze': rosFunctionPreFreezePropertyToRosTemplate(properties.preFreeze),
    };
}
/**
 * Determine whether the given properties match those of a `PreFreezeProperty`
 *
 * @param properties - the TypeScript properties of a `PreFreezeProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_PreFreezePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('handler', ros.validateString)(properties.handler));
    return errors.wrap('supplied properties not correct for "PreFreezeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.PreFreeze` resource
 *
 * @param properties - the TypeScript properties of a `PreFreezeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.PreFreeze` resource.
 */
// @ts-ignore TS6133
function rosFunctionPreFreezePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunction_PreFreezePropertyValidator(properties).assertSuccess();
    return {
        'Timeout': ros.numberToRosTemplate(properties.timeout),
        'Handler': ros.stringToRosTemplate(properties.handler),
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.PreStop` resource
 *
 * @param properties - the TypeScript properties of a `PreStopProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Function.PreStop` resource.
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
        'FunctionName': ros.stringToRosTemplate(properties.functionName),
        'ServiceName': ros.stringToRosTemplate(properties.serviceName),
        'Async': ros.booleanToRosTemplate(properties.async),
        'CheckError': ros.booleanToRosTemplate(properties.checkError),
        'Event': ros.stringToRosTemplate(properties.event),
        'ExecuteVersion': ros.numberToRosTemplate(properties.executeVersion),
        'Qualifier': ros.stringToRosTemplate(properties.qualifier),
        'ServiceRegionId': ros.stringToRosTemplate(properties.serviceRegionId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::FunctionInvoker`, which is used to invoke a function.
 * @Note This class does not contain additional functions, so it is recommended to use the `FunctionInvoker` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-functioninvoker
 */
class RosFunctionInvoker extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosFunctionInvoker.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrResult = this.getAtt('Result');
        this.attrResultType = this.getAtt('ResultType');
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
 * Determine whether the given properties match those of a `RosLayerProps`
 *
 * @param properties - the TypeScript properties of a `RosLayerProps`
 *
 * @returns the result of the validation.
 */
function RosLayerPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('compatibleRuntime', ros.requiredValidator)(properties.compatibleRuntime));
    if (properties.compatibleRuntime && (Array.isArray(properties.compatibleRuntime) || (typeof properties.compatibleRuntime) === 'string')) {
        errors.collect(ros.propertyValidator('compatibleRuntime', ros.validateLength)({
            data: properties.compatibleRuntime.length,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('compatibleRuntime', ros.listValidator(ros.validateString))(properties.compatibleRuntime));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('layerName', ros.requiredValidator)(properties.layerName));
    if (properties.layerName && (Array.isArray(properties.layerName) || (typeof properties.layerName) === 'string')) {
        errors.collect(ros.propertyValidator('layerName', ros.validateLength)({
            data: properties.layerName.length,
            min: 1,
            max: 64,
        }));
    }
    if (properties.layerName && (typeof properties.layerName) !== 'object') {
        errors.collect(ros.propertyValidator('layerName', ros.validateAllowedPattern)({
            data: properties.layerName,
            reg: /[a-zA-Z][_a-zA-Z0-9-]+/
        }));
    }
    errors.collect(ros.propertyValidator('layerName', ros.validateString)(properties.layerName));
    errors.collect(ros.propertyValidator('code', ros.requiredValidator)(properties.code));
    errors.collect(ros.propertyValidator('code', RosLayer_CodePropertyValidator)(properties.code));
    return errors.wrap('supplied properties not correct for "RosLayerProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Layer` resource
 *
 * @param properties - the TypeScript properties of a `RosLayerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Layer` resource.
 */
// @ts-ignore TS6133
function rosLayerPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosLayerPropsValidator(properties).assertSuccess();
    }
    return {
        'Code': rosLayerCodePropertyToRosTemplate(properties.code),
        'CompatibleRuntime': ros.listMapper(ros.stringToRosTemplate)(properties.compatibleRuntime),
        'LayerName': ros.stringToRosTemplate(properties.layerName),
        'Description': ros.stringToRosTemplate(properties.description),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Layer`, which is used to publish layer versions.
 * @Note This class does not contain additional functions, so it is recommended to use the `Layer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-layer
 */
class RosLayer extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosLayer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrLayerName = this.getAtt('LayerName');
        this.attrVersion = this.getAtt('Version');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.code = props.code;
        this.compatibleRuntime = props.compatibleRuntime;
        this.layerName = props.layerName;
        this.description = props.description;
    }
    get rosProperties() {
        return {
            code: this.code,
            compatibleRuntime: this.compatibleRuntime,
            layerName: this.layerName,
            description: this.description,
        };
    }
    renderProperties(props) {
        return rosLayerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosLayer = RosLayer;
/**
 * The resource type name for this resource class.
 */
RosLayer.ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Layer";
/**
 * Determine whether the given properties match those of a `CodeProperty`
 *
 * @param properties - the TypeScript properties of a `CodeProperty`
 *
 * @returns the result of the validation.
 */
function RosLayer_CodePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zipFile', ros.validateString)(properties.zipFile));
    errors.collect(ros.propertyValidator('ossObjectName', ros.validateString)(properties.ossObjectName));
    errors.collect(ros.propertyValidator('ossBucketName', ros.validateString)(properties.ossBucketName));
    return errors.wrap('supplied properties not correct for "CodeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Layer.Code` resource
 *
 * @param properties - the TypeScript properties of a `CodeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Layer.Code` resource.
 */
// @ts-ignore TS6133
function rosLayerCodePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosLayer_CodePropertyValidator(properties).assertSuccess();
    return {
        'ZipFile': ros.stringToRosTemplate(properties.zipFile),
        'OssObjectName': ros.stringToRosTemplate(properties.ossObjectName),
        'OssBucketName': ros.stringToRosTemplate(properties.ossBucketName),
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
        'FunctionName': ros.stringToRosTemplate(properties.functionName),
        'Qualifier': ros.stringToRosTemplate(properties.qualifier),
        'ServiceName': ros.stringToRosTemplate(properties.serviceName),
        'Target': ros.numberToRosTemplate(properties.target),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::ProvisionConfig`, which is used to create provisioned instances in Function Compute.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProvisionConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
 */
class RosProvisionConfig extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosProvisionConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFunctionName = this.getAtt('FunctionName');
        this.attrQualifier = this.getAtt('Qualifier');
        this.attrResource = this.getAtt('Resource');
        this.attrServiceName = this.getAtt('ServiceName');
        this.attrTarget = this.getAtt('Target');
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
    errors.collect(ros.propertyValidator('tracingConfig', RosService_TracingConfigPropertyValidator)(properties.tracingConfig));
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
    errors.collect(ros.propertyValidator('ossMountConfig', RosService_OssMountConfigPropertyValidator)(properties.ossMountConfig));
    if (properties.vpcBindings && (Array.isArray(properties.vpcBindings) || (typeof properties.vpcBindings) === 'string')) {
        errors.collect(ros.propertyValidator('vpcBindings', ros.validateLength)({
            data: properties.vpcBindings.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('vpcBindings', ros.listValidator(ros.validateString))(properties.vpcBindings));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosService_TagsPropertyValidator))(properties.tags));
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
        'ServiceName': ros.stringToRosTemplate(properties.serviceName),
        'DeletionForce': ros.booleanToRosTemplate(properties.deletionForce),
        'Description': ros.stringToRosTemplate(properties.description),
        'InternetAccess': ros.booleanToRosTemplate(properties.internetAccess),
        'LogConfig': rosServiceLogConfigPropertyToRosTemplate(properties.logConfig),
        'NasConfig': rosServiceNasConfigPropertyToRosTemplate(properties.nasConfig),
        'OssMountConfig': rosServiceOssMountConfigPropertyToRosTemplate(properties.ossMountConfig),
        'Role': ros.stringToRosTemplate(properties.role),
        'Tags': ros.listMapper(rosServiceTagsPropertyToRosTemplate)(properties.tags),
        'TracingConfig': rosServiceTracingConfigPropertyToRosTemplate(properties.tracingConfig),
        'VpcBindings': ros.listMapper(ros.stringToRosTemplate)(properties.vpcBindings),
        'VpcConfig': rosServiceVpcConfigPropertyToRosTemplate(properties.vpcConfig),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Service`, which is used to create a service in Function Compute.
 * @Note This class does not contain additional functions, so it is recommended to use the `Service` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-service
 */
class RosService extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosService.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInternetAccess = this.getAtt('InternetAccess');
        this.attrLogProject = this.getAtt('LogProject');
        this.attrLogstore = this.getAtt('Logstore');
        this.attrRole = this.getAtt('Role');
        this.attrServiceId = this.getAtt('ServiceId');
        this.attrServiceName = this.getAtt('ServiceName');
        this.attrTags = this.getAtt('Tags');
        this.attrVpcId = this.getAtt('VpcId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceName = props.serviceName;
        this.deletionForce = props.deletionForce;
        this.description = props.description;
        this.internetAccess = props.internetAccess;
        this.logConfig = props.logConfig;
        this.nasConfig = props.nasConfig;
        this.ossMountConfig = props.ossMountConfig;
        this.role = props.role;
        this.tags = props.tags;
        this.tracingConfig = props.tracingConfig;
        this.vpcBindings = props.vpcBindings;
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
            ossMountConfig: this.ossMountConfig,
            role: this.role,
            tags: this.tags,
            tracingConfig: this.tracingConfig,
            vpcBindings: this.vpcBindings,
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
    errors.collect(ros.propertyValidator('logBeginRule', ros.validateString)(properties.logBeginRule));
    errors.collect(ros.propertyValidator('logstore', ros.validateString)(properties.logstore));
    errors.collect(ros.propertyValidator('enableRequestMetrics', ros.validateBoolean)(properties.enableRequestMetrics));
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
        'Project': ros.stringToRosTemplate(properties.project),
        'LogBeginRule': ros.stringToRosTemplate(properties.logBeginRule),
        'Logstore': ros.stringToRosTemplate(properties.logstore),
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
function RosService_NasConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountPoints', ros.requiredValidator)(properties.mountPoints));
    if (properties.mountPoints && (Array.isArray(properties.mountPoints) || (typeof properties.mountPoints) === 'string')) {
        errors.collect(ros.propertyValidator('mountPoints', ros.validateLength)({
            data: properties.mountPoints.length,
            min: undefined,
            max: 5,
        }));
    }
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
        'MountPoints': ros.listMapper(rosServiceMountPointsPropertyToRosTemplate)(properties.mountPoints),
        'UserId': ros.numberToRosTemplate(properties.userId),
        'GroupId': ros.numberToRosTemplate(properties.groupId),
    };
}
/**
 * Determine whether the given properties match those of a `OssMountConfigProperty`
 *
 * @param properties - the TypeScript properties of a `OssMountConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosService_OssMountConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountPoints', ros.requiredValidator)(properties.mountPoints));
    if (properties.mountPoints && (Array.isArray(properties.mountPoints) || (typeof properties.mountPoints) === 'string')) {
        errors.collect(ros.propertyValidator('mountPoints', ros.validateLength)({
            data: properties.mountPoints.length,
            min: undefined,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('mountPoints', ros.listValidator(RosService_OssMountConfigMountPointsPropertyValidator))(properties.mountPoints));
    return errors.wrap('supplied properties not correct for "OssMountConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.OssMountConfig` resource
 *
 * @param properties - the TypeScript properties of a `OssMountConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.OssMountConfig` resource.
 */
// @ts-ignore TS6133
function rosServiceOssMountConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosService_OssMountConfigPropertyValidator(properties).assertSuccess();
    return {
        'MountPoints': ros.listMapper(rosServiceOssMountConfigMountPointsPropertyToRosTemplate)(properties.mountPoints),
    };
}
/**
 * Determine whether the given properties match those of a `OssMountConfigMountPointsProperty`
 *
 * @param properties - the TypeScript properties of a `OssMountConfigMountPointsProperty`
 *
 * @returns the result of the validation.
 */
function RosService_OssMountConfigMountPointsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('readOnly', ros.requiredValidator)(properties.readOnly));
    errors.collect(ros.propertyValidator('readOnly', ros.validateBoolean)(properties.readOnly));
    errors.collect(ros.propertyValidator('bucketName', ros.requiredValidator)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketPath', ros.requiredValidator)(properties.bucketPath));
    errors.collect(ros.propertyValidator('bucketPath', ros.validateString)(properties.bucketPath));
    errors.collect(ros.propertyValidator('endPoint', ros.requiredValidator)(properties.endPoint));
    errors.collect(ros.propertyValidator('endPoint', ros.validateString)(properties.endPoint));
    errors.collect(ros.propertyValidator('mountDir', ros.requiredValidator)(properties.mountDir));
    errors.collect(ros.propertyValidator('mountDir', ros.validateString)(properties.mountDir));
    return errors.wrap('supplied properties not correct for "OssMountConfigMountPointsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.OssMountConfigMountPoints` resource
 *
 * @param properties - the TypeScript properties of a `OssMountConfigMountPointsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.OssMountConfigMountPoints` resource.
 */
// @ts-ignore TS6133
function rosServiceOssMountConfigMountPointsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosService_OssMountConfigMountPointsPropertyValidator(properties).assertSuccess();
    return {
        'ReadOnly': ros.booleanToRosTemplate(properties.readOnly),
        'BucketName': ros.stringToRosTemplate(properties.bucketName),
        'BucketPath': ros.stringToRosTemplate(properties.bucketPath),
        'EndPoint': ros.stringToRosTemplate(properties.endPoint),
        'MountDir': ros.stringToRosTemplate(properties.mountDir),
    };
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosService_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.Tags` resource.
 */
// @ts-ignore TS6133
function rosServiceTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosService_TagsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `TracingConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TracingConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosService_TracingConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('params', ros.hashValidator(ros.validateAny))(properties.params));
    return errors.wrap('supplied properties not correct for "TracingConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.TracingConfig` resource
 *
 * @param properties - the TypeScript properties of a `TracingConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::Service.TracingConfig` resource.
 */
// @ts-ignore TS6133
function rosServiceTracingConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosService_TracingConfigPropertyValidator(properties).assertSuccess();
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
function RosService_VpcConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.requiredValidator)(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
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
        'VpcId': ros.stringToRosTemplate(properties.vpcId),
        'ZoneId': ros.stringToRosTemplate(properties.zoneId),
        'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
        'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
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
        'FunctionName': ros.stringToRosTemplate(properties.functionName),
        'ServiceName': ros.stringToRosTemplate(properties.serviceName),
        'TriggerConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.triggerConfig),
        'TriggerName': ros.stringToRosTemplate(properties.triggerName),
        'TriggerType': ros.stringToRosTemplate(properties.triggerType),
        'InvocationRole': ros.stringToRosTemplate(properties.invocationRole),
        'Qualifier': ros.stringToRosTemplate(properties.qualifier),
        'SourceArn': ros.stringToRosTemplate(properties.sourceArn),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Trigger`, which is used to trigger the invocation of a function.
 * @Note This class does not contain additional functions, so it is recommended to use the `Trigger` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-trigger
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
        this.attrServiceName = this.getAtt('ServiceName');
        this.attrTriggerId = this.getAtt('TriggerId');
        this.attrTriggerName = this.getAtt('TriggerName');
        this.attrUrlInternet = this.getAtt('UrlInternet');
        this.attrUrlIntranet = this.getAtt('UrlIntranet');
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
        'ServiceName': ros.stringToRosTemplate(properties.serviceName),
        'Description': ros.stringToRosTemplate(properties.description),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Version`, which is used to release a Version.
 * @Note This class does not contain additional functions, so it is recommended to use the `Version` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-version
 */
class RosVersion extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVersion.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServiceName = this.getAtt('ServiceName');
        this.attrVersionId = this.getAtt('VersionId');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmMuZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmMuZ2VuZXJhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5REFBeUQ7OztBQUV6RCw4Q0FBOEM7QUF1QzlDOzs7Ozs7R0FNRztBQUNILFNBQVMsc0JBQXNCLENBQUMsVUFBZTtJQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLElBQUcsVUFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDbEgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRSxJQUFJLEVBQUUsVUFBVSxDQUFD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Q0FBQzs7QUFyREwsZ0NBc0RDO0FBckRHOztHQUVHO0FBQ29CLGlDQUFzQixHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NBbGlhc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy1hbGlhc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FsaWFzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFsaWFzTmFtZTogQWxpYXMgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsaWFzTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFkZGl0aW9uYWxWZXJzaW9uOiBBZGRpdGlvbmFsIHZlcnNpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBhZGRpdGlvbmFsVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhZGRpdGlvbmFsV2VpZ2h0OiBUcmFmZmljIHdlaWdodCBvZiBhZGRpdGlvbmFsIHZlcnNpb24uIEZyb20gMCB0byAxMDAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWRkaXRpb25hbFdlaWdodD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVmVyc2lvbiBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZlcnNpb25JZDogVmVyc2lvbiBJRFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZlcnNpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBbGlhc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBbGlhc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FsaWFzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2ZXJzaW9uSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmVyc2lvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2VydmljZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWRkaXRpb25hbFZlcnNpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWRkaXRpb25hbFZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsaWFzTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hbGlhc05hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsaWFzTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hbGlhc05hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmFkZGl0aW9uYWxXZWlnaHQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmFkZGl0aW9uYWxXZWlnaHQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FkZGl0aW9uYWxXZWlnaHQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5hZGRpdGlvbmFsV2VpZ2h0LFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FkZGl0aW9uYWxXZWlnaHQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuYWRkaXRpb25hbFdlaWdodCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBbGlhc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6QWxpYXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FsaWFzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpBbGlhc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBbGlhc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQWxpYXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQWxpYXNOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hbGlhc05hbWUpLFxuICAgICAgJ1NlcnZpY2VOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICAnQWRkaXRpb25hbFZlcnNpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFkZGl0aW9uYWxWZXJzaW9uKSxcbiAgICAgICdBZGRpdGlvbmFsV2VpZ2h0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hZGRpdGlvbmFsV2VpZ2h0KSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgJ1ZlcnNpb25JZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmVyc2lvbklkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpGQzo6QWxpYXNgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhbiBBbGlhcy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQWxpYXNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjLWFsaWFzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBbGlhcyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RkM6OkFsaWFzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFsaWFzTmFtZTogVGhlIGFsaWFzIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsaWFzTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlTmFtZTogVGhlIHNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVmVyc2lvbklkOiBUaGUgdmVyc2lvbiBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVmVyc2lvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGlhc05hbWU6IEFsaWFzIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgYWxpYXNOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFkZGl0aW9uYWxWZXJzaW9uOiBBZGRpdGlvbmFsIHZlcnNpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkaXRpb25hbFZlcnNpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhZGRpdGlvbmFsV2VpZ2h0OiBUcmFmZmljIHdlaWdodCBvZiBhZGRpdGlvbmFsIHZlcnNpb24uIEZyb20gMCB0byAxMDAuXG4gICAgICovXG4gICAgcHVibGljIGFkZGl0aW9uYWxXZWlnaHQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVmVyc2lvbiBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZlcnNpb25JZDogVmVyc2lvbiBJRFxuICAgICAqL1xuICAgIHB1YmxpYyB2ZXJzaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBbGlhc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQWxpYXMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFsaWFzTmFtZSA9IHRoaXMuZ2V0QXR0KCdBbGlhc05hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZU5hbWUgPSB0aGlzLmdldEF0dCgnU2VydmljZU5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyVmVyc2lvbklkID0gdGhpcy5nZXRBdHQoJ1ZlcnNpb25JZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hbGlhc05hbWUgPSBwcm9wcy5hbGlhc05hbWU7XG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBwcm9wcy5zZXJ2aWNlTmFtZTtcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsVmVyc2lvbiA9IHByb3BzLmFkZGl0aW9uYWxWZXJzaW9uO1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxXZWlnaHQgPSBwcm9wcy5hZGRpdGlvbmFsV2VpZ2h0O1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudmVyc2lvbklkID0gcHJvcHMudmVyc2lvbklkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFsaWFzTmFtZTogdGhpcy5hbGlhc05hbWUsXG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxWZXJzaW9uOiB0aGlzLmFkZGl0aW9uYWxWZXJzaW9uLFxuICAgICAgICAgICAgYWRkaXRpb25hbFdlaWdodDogdGhpcy5hZGRpdGlvbmFsV2VpZ2h0LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB2ZXJzaW9uSWQ6IHRoaXMudmVyc2lvbklkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBbGlhc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0N1c3RvbURvbWFpbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy1jdXN0b21kb21haW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDdXN0b21Eb21haW5Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZG9tYWluTmFtZTogZG9tYWluIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBkb21haW5OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvdG9jb2w6IEhUVFAgb3IgSFRUUCxIVFRQU1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb3RvY29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBpVmVyc2lvbjogYXBpIHZlcnNpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBhcGlWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlcnRDb25maWc6IGNlcnRpZmljYXRlIGluZm9cbiAgICAgKi9cbiAgICByZWFkb25seSBjZXJ0Q29uZmlnPzogUm9zQ3VzdG9tRG9tYWluLkNlcnRDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZUNvbmZpZzogUm91dGluZyB0YWJsZTogcGF0aCB0byBmdW5jdGlvbiBtYXBwaW5nd2hlbiBhIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGEgY3VzdG9tIGRvbWFpbiBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVDb25maWc/OiBSb3NDdXN0b21Eb21haW4uUm91dGVDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDdXN0b21Eb21haW5Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tRG9tYWluUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ3VzdG9tRG9tYWluUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcGlWZXJzaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFwaVZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlcnRDb25maWcnLCBSb3NDdXN0b21Eb21haW5fQ2VydENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNlcnRDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZG9tYWluTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kb21haW5OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZUNvbmZpZycsIFJvc0N1c3RvbURvbWFpbl9Sb3V0ZUNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJvdXRlQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90b2NvbCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcm90b2NvbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvdG9jb2wnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvdG9jb2wpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ3VzdG9tRG9tYWluUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpDdXN0b21Eb21haW5gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0N1c3RvbURvbWFpblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6Q3VzdG9tRG9tYWluYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbURvbWFpblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ3VzdG9tRG9tYWluUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0RvbWFpbk5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpLFxuICAgICAgJ1Byb3RvY29sJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm90b2NvbCksXG4gICAgICAnQXBpVmVyc2lvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXBpVmVyc2lvbiksXG4gICAgICAnQ2VydENvbmZpZyc6IHJvc0N1c3RvbURvbWFpbkNlcnRDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZXJ0Q29uZmlnKSxcbiAgICAgICdSb3V0ZUNvbmZpZyc6IHJvc0N1c3RvbURvbWFpblJvdXRlQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucm91dGVDb25maWcpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkZDOjpDdXN0b21Eb21haW5gLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGN1c3RvbSBkb21haW4gbmFtZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQ3VzdG9tRG9tYWluYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy1jdXN0b21kb21haW5cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0N1c3RvbURvbWFpbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RkM6OkN1c3RvbURvbWFpblwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEb21haW46IFRoZSBkb21haW4gd2l0aCBwcm90b2NvbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRvbWFpbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEb21haW5OYW1lOiBUaGUgZG9tYWluIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRvbWFpbk5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRvbWFpbk5hbWU6IGRvbWFpbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIGRvbWFpbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm90b2NvbDogSFRUUCBvciBIVFRQLEhUVFBTXG4gICAgICovXG4gICAgcHVibGljIHByb3RvY29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBpVmVyc2lvbjogYXBpIHZlcnNpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgYXBpVmVyc2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlcnRDb25maWc6IGNlcnRpZmljYXRlIGluZm9cbiAgICAgKi9cbiAgICBwdWJsaWMgY2VydENvbmZpZzogUm9zQ3VzdG9tRG9tYWluLkNlcnRDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZUNvbmZpZzogUm91dGluZyB0YWJsZTogcGF0aCB0byBmdW5jdGlvbiBtYXBwaW5nd2hlbiBhIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGEgY3VzdG9tIGRvbWFpbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJvdXRlQ29uZmlnOiBSb3NDdXN0b21Eb21haW4uUm91dGVDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDdXN0b21Eb21haW5Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0N1c3RvbURvbWFpbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRG9tYWluID0gdGhpcy5nZXRBdHQoJ0RvbWFpbicpO1xuICAgICAgICB0aGlzLmF0dHJEb21haW5OYW1lID0gdGhpcy5nZXRBdHQoJ0RvbWFpbk5hbWUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZG9tYWluTmFtZSA9IHByb3BzLmRvbWFpbk5hbWU7XG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBwcm9wcy5wcm90b2NvbDtcbiAgICAgICAgdGhpcy5hcGlWZXJzaW9uID0gcHJvcHMuYXBpVmVyc2lvbjtcbiAgICAgICAgdGhpcy5jZXJ0Q29uZmlnID0gcHJvcHMuY2VydENvbmZpZztcbiAgICAgICAgdGhpcy5yb3V0ZUNvbmZpZyA9IHByb3BzLnJvdXRlQ29uZmlnO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbWFpbk5hbWU6IHRoaXMuZG9tYWluTmFtZSxcbiAgICAgICAgICAgIHByb3RvY29sOiB0aGlzLnByb3RvY29sLFxuICAgICAgICAgICAgYXBpVmVyc2lvbjogdGhpcy5hcGlWZXJzaW9uLFxuICAgICAgICAgICAgY2VydENvbmZpZzogdGhpcy5jZXJ0Q29uZmlnLFxuICAgICAgICAgICAgcm91dGVDb25maWc6IHRoaXMucm91dGVDb25maWcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0N1c3RvbURvbWFpblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0N1c3RvbURvbWFpbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2VydENvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcml2YXRlS2V5OiBwcml2YXRlIGtleVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJpdmF0ZUtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNlcnROYW1lOiBjdXN0b20gY2VydGlmaWNhdGUgbmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY2VydE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjZXJ0aWZpY2F0ZTogY2VydGlmaWNhdGVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNlcnRpZmljYXRlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDZXJ0Q29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENlcnRDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDdXN0b21Eb21haW5fQ2VydENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpdmF0ZUtleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcml2YXRlS2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcml2YXRlS2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByaXZhdGVLZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlcnROYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNlcnROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZXJ0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jZXJ0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VydGlmaWNhdGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2VydGlmaWNhdGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlcnRpZmljYXRlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNlcnRpZmljYXRlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNlcnRDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkN1c3RvbURvbWFpbi5DZXJ0Q29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDZXJ0Q29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpDdXN0b21Eb21haW4uQ2VydENvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDdXN0b21Eb21haW5DZXJ0Q29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0N1c3RvbURvbWFpbl9DZXJ0Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUHJpdmF0ZUtleSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpdmF0ZUtleSksXG4gICAgICAnQ2VydE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNlcnROYW1lKSxcbiAgICAgICdDZXJ0aWZpY2F0ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VydGlmaWNhdGUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQ3VzdG9tRG9tYWluIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb3V0ZUNvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByb3V0ZXM6IFBhdGhDb25maWcgQXJyYXlcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJvdXRlczogQXJyYXk8Um9zQ3VzdG9tRG9tYWluLlJvdXRlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvdXRlQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvdXRlQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ3VzdG9tRG9tYWluX1JvdXRlQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZXMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucm91dGVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZXMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NDdXN0b21Eb21haW5fUm91dGVzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnJvdXRlcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3V0ZUNvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6Q3VzdG9tRG9tYWluLlJvdXRlQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3V0ZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6Q3VzdG9tRG9tYWluLlJvdXRlQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbURvbWFpblJvdXRlQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0N1c3RvbURvbWFpbl9Sb3V0ZUNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1JvdXRlcyc6IHJvcy5saXN0TWFwcGVyKHJvc0N1c3RvbURvbWFpblJvdXRlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yb3V0ZXMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQ3VzdG9tRG9tYWluIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb3V0ZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGF0aDogSFRUUCByZXF1ZXN0IHBhdGggd2hlbiBhIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGEgY3VzdG9tIGRvbWFpbiBuYW1lLCBmb3IgZXhhbXBsZTogXCJcXC9sb2dpblxcLypcIlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGF0aDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogUGF0aCB0byB0aGUgZnVuY3Rpb24sIGZvciBleGFtcGxlOiBcImxvZ2luXCJcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZ1bmN0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBQYXRoIHRvIHRoZSBzZXJ2aWNlLCBmb3IgZXhhbXBsZTogXCJibG9nU2VydmljZVwiXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHF1YWxpZmllcjogU2VydmljZSB2ZXJzaW9uIG9yIGFsaWFzXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBxdWFsaWZpZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3V0ZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm91dGVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ3VzdG9tRG9tYWluX1JvdXRlc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGF0aCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Z1bmN0aW9uTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5mdW5jdGlvbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Z1bmN0aW9uTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5mdW5jdGlvbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3V0ZXNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkN1c3RvbURvbWFpbi5Sb3V0ZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvdXRlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6Q3VzdG9tRG9tYWluLlJvdXRlc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDdXN0b21Eb21haW5Sb3V0ZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ3VzdG9tRG9tYWluX1JvdXRlc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1BhdGgnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhdGgpLFxuICAgICAgJ0Z1bmN0aW9uTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSxcbiAgICAgICdTZXJ2aWNlTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZU5hbWUpLFxuICAgICAgJ1F1YWxpZmllcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucXVhbGlmaWVyKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0Z1bmN0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjLWZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRnVuY3Rpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaGFuZGxlcjogVGhlIGZ1bmN0aW9uIGV4ZWN1dGlvbiBlbnRyeSBwb2ludC5cbiAgICAgKi9cbiAgICByZWFkb25seSBoYW5kbGVyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVudGltZTogVGhlIGZ1bmN0aW9uIHJ1bnRpbWUgZW52aXJvbm1lbnQuIFN1cHBvcnRpbmcgbm9kZWpzMTbjgIFub2RlanMxNOOAgW5vZGVqczEy44CBbm9kZWpzMTDjgIFub2RlanM444CBbm9kZWpzNuOAgW5vZGVqczQuNOOAgXB5dGhvbjMuMTDjgIFweXRob24zLjnjgIFweXRob24z44CBcHl0aG9uMi4344CBamF2YTEx44CBamF2YTjjgIFnbzHjgIFwaHA3LjLjgIFkb3RuZXRjb3JlMy4x44CBZG90bmV0Y29yZTIuMeOAgWN1c3RvbS5kZWJpYW4xMOOAgWN1c3RvbeWSjGN1c3RvbS1jb250YWluZXIgYW5kIHNvIG9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVudGltZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFzeW5jQ29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiBvZiBhc3luY2hyb25vdXMgZnVuY3Rpb24gY2FsbHNcbiAgICAgKi9cbiAgICByZWFkb25seSBhc3luY0NvbmZpZ3VyYXRpb24/OiBSb3NGdW5jdGlvbi5Bc3luY0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjYVBvcnQ6IEN1c3RvbSBydW50aW1lIGFuZCBjdXN0b20gY29udGFpbmVyIHJ1bnRpbWUgZGVkaWNhdGVkIGZpZWxkcywgd2hpY2ggcmVwcmVzZW50IHRoZSBwb3J0IHRoYXQgdGhlIHN0YXJ0ZWQgY3VzdG9tIGh0dHAgc2VydmVyIGxpc3RlbnMgdG8uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDkwMDBcbiAgICAgKi9cbiAgICByZWFkb25seSBjYVBvcnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29kZTogVGhlIGNvZGUgdGhhdCBjb250YWlucyB0aGUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29kZT86IFJvc0Z1bmN0aW9uLkNvZGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjcHU6IFRoZSBudW1iZXIgb2YgdkNQVXMgb2YgdGhlIGZ1bmN0aW9uLiBUaGUgdmFsdWUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDAuMDUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3B1PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbUNvbnRhaW5lckNvbmZpZzogQ3VzdG9tIGNvbnRhaW5lciBydW50aW1lIHJlbGF0ZWQgY29uZmlndXJhdGlvbi4gQWZ0ZXIgY29uZmlndXJhdGlvbiwgdGhlIGZ1bmN0aW9uIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgY3VzdG9tIGNvbnRhaW5lciB0byBleGVjdXRlIHRoZSBmdW5jdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGN1c3RvbUNvbnRhaW5lckNvbmZpZz86IFJvc0Z1bmN0aW9uLkN1c3RvbUNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbURuczogVGhlIGN1c3RvbSBETlMgY29uZmlndXJhdGlvbnMgb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGN1c3RvbURucz86IFJvc0Z1bmN0aW9uLkN1c3RvbUROU1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbUhlYWx0aENoZWNrQ29uZmlnOiBUaGUgaGVhbHRoIGNoZWNrIGNvbmZpZ3VyYXRpb25zIGZvciB0aGUgY3VzdG9tIHJ1bnRpbWUgYW5kIGN1c3RvbSBjb250YWluZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3VzdG9tSGVhbHRoQ2hlY2tDb25maWc/OiBSb3NGdW5jdGlvbi5DdXN0b21IZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbVJ1bnRpbWVDb25maWc6IEN1c3RvbSBydW50aW1lIHJlbGF0ZWQgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBjdXN0b21SdW50aW1lQ29uZmlnPzogUm9zRnVuY3Rpb24uQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBGdW5jdGlvbiBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpc2tTaXplOiBUaGUgZGlzayBzaXplIG9mIHRoZSBmdW5jdGlvbi4gVW5pdDogTUIuIFZhbGlkIHZhbHVlczogNTEyIGFuZCAxMDI0MC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNrU2l6ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbnZpcm9ubWVudFZhcmlhYmxlczogVGhlIGVudmlyb25tZW50IHZhcmlhYmxlIHNldCBmb3IgdGhlIGZ1bmN0aW9uLCB5b3UgY2FuIGdldCB0aGUgdmFsdWUgb2YgdGhlIGVudmlyb25tZW50IHZhcmlhYmxlIGluIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbnZpcm9ubWVudFZhcmlhYmxlcz86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncHVNZW1vcnlTaXplOiBUaGUgR1BVIG1lbW9yeSBjYXBhY2l0eSBmb3IgdGhlIGZ1bmN0aW9uLiBVbml0OiBNQi4gVGhlIHZhbHVlIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxLDAyNC5cbiAgICAgKi9cbiAgICByZWFkb25seSBncHVNZW1vcnlTaXplPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluaXRpYWxpemF0aW9uVGltZW91dDogdGhlIG1heCBleGVjdXRpb24gdGltZSBvZiB0aGUgaW5pdGlhbGl6ZXIsIGluIHNlY29uZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluaXRpYWxpemF0aW9uVGltZW91dD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbml0aWFsaXplcjogdGhlIGVudHJ5IHBvaW50IG9mIHRoZSBpbml0aWFsaXplclxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluaXRpYWxpemVyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlQ29uY3VycmVuY3k6IEZ1bmN0aW9uIGluc3RhbmNlIGNvbmN1cnJlbmN5LiBWYWx1ZSBjYW4gYmUgYmV0d2VlbiAxIHRvIDEwMC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNvbmN1cnJlbmN5PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnOiBUaGUgY29uZmlndXJhdGlvbiBvZiB0aGUgaW5zdGFuY2UgbGlmZWN5Y2xlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnPzogUm9zRnVuY3Rpb24uSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZVNvZnRDb25jdXJyZW5jeTogVGhlIHNvZnQgY29uY3VycmVuY3kgb2YgdGhlIGluc3RhbmNlLiBZb3UgY2FuIHVzZSB0aGlzIHBhcmFtZXRlciB0byBpbXBsZW1lbnQgZ3JhY2VmdWwgc2NhbGUtdXAgb2YgaW5zdGFuY2VzLiBJZiB0aGUgbnVtYmVyIG9mIGNvbmN1cnJlbnQgcmVxdWVzdHMgb24gYW4gaW5zdGFuY2UgaXMgZ3JlYXRlciB0aGFuIHRoZSB2YWx1ZSBvZiBzb2Z0IGNvbmN1cnJlbmN5LCBhbiBpbnN0YW5jZSBzY2FsZS11cCBpcyB0cmlnZ2VyZWQuIEZvciBleGFtcGxlLCBpZiB5b3VyIGluc3RhbmNlIHJlcXVpcmVzIGEgbG9uZyB0aW1lIHRvIHN0YXJ0LCB5b3UgY2FuIHNwZWNpZnkgYSBzdWl0YWJsZSBzb2Z0IGNvbmN1cnJlbmN5IHRvIHN0YXJ0IHRoZSBpbnN0YW5jZSBpbiBhZHZhbmNlLlRoZSB2YWx1ZSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGF0IG9mIHRoZSBpbnN0YW5jZUNvbmN1cnJlbmN5IHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZVNvZnRDb25jdXJyZW5jeT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZVR5cGU6IEluc3RhbmNlIHR5cGUuIFZhbHVlOmUxOiBmbGV4aWJsZSBpbnN0YW5jZS4gTWVtb3J5IHNpemUgYmV0d2VlbiAxMjggYW5kIDMwNzJjMTogcGVyZm9ybWFuY2UgaW5zdGFuY2UuIE1lbW9yeSBzaXplIGFsbG93IHZhbHVlcyBhcmUgNDA5NiwgODE5MiwgMTYzODQgYW5kIDMyNzY4XG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1lbW9yeVNpemU6IFRoZSBhbW91bnQgb2YgbWVtb3J5IHRoYXTigJlzIHVzZWQgdG8gcnVuIGZ1bmN0aW9uLCBpbiBNQi4gRnVuY3Rpb24gQ29tcHV0ZSB1c2VzIHRoaXMgdmFsdWUgdG8gYWxsb2NhdGUgQ1BVIHJlc291cmNlcyBwcm9wb3J0aW9uYWxseS4gRGVmYXVsdHMgdG8gMTI4IE1CLiBJdCBjYW4gYmUgbXVsdGlwbGUgb2YgNjQgTUIgYW5kIGJldHdlZW4gMTI4IE1CIGFuZCAzMDcyIE1CLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1lbW9yeVNpemU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dDogVGhlIG1heGltdW0gdGltZSBkdXJhdGlvbiBhIGZ1bmN0aW9uIGNhbiBydW4sIGluIHNlY29uZHMuIEFmdGVyIHdoaWNoIEZ1bmN0aW9uIENvbXB1dGUgdGVybWluYXRlcyB0aGUgZXhlY3V0aW9uLiBEZWZhdWx0cyB0byAzIHNlY29uZHMsIGFuZCBjYW4gYmUgYmV0d2VlbiAxIHRvIDg2NDAwIHNlY29uZHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZW91dD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NGdW5jdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NGdW5jdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5tZW1vcnlTaXplICYmICh0eXBlb2YgcHJvcGVydGllcy5tZW1vcnlTaXplKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZW1vcnlTaXplJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWVtb3J5U2l6ZSxcbiAgICAgICAgICAgIG1pbjogMTI4LFxuICAgICAgICAgICAgbWF4OiAzMjc2OCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWVtb3J5U2l6ZScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5tZW1vcnlTaXplKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGlmKHByb3BlcnRpZXMudGltZW91dCAmJiAodHlwZW9mIHByb3BlcnRpZXMudGltZW91dCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRpbWVvdXQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDg2NDAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlTGlmZWN5Y2xlQ29uZmlnJywgUm9zRnVuY3Rpb25fSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUxpZmVjeWNsZUNvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGFuZGxlcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5oYW5kbGVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoYW5kbGVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhhbmRsZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NwdScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5jcHUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2N1c3RvbUhlYWx0aENoZWNrQ29uZmlnJywgUm9zRnVuY3Rpb25fQ3VzdG9tSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jdXN0b21IZWFsdGhDaGVja0NvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3VzdG9tQ29udGFpbmVyQ29uZmlnJywgUm9zRnVuY3Rpb25fQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY3VzdG9tQ29udGFpbmVyQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb2RlJywgUm9zRnVuY3Rpb25fQ29kZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FzeW5jQ29uZmlndXJhdGlvbicsIFJvc0Z1bmN0aW9uX0FzeW5jQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFzeW5jQ29uZmlndXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2FQb3J0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmNhUG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVudGltZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ydW50aW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydW50aW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJ1bnRpbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Vudmlyb25tZW50VmFyaWFibGVzJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5lbnZpcm9ubWVudFZhcmlhYmxlcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3VzdG9tUnVudGltZUNvbmZpZycsIFJvc0Z1bmN0aW9uX0N1c3RvbVJ1bnRpbWVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jdXN0b21SdW50aW1lQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbml0aWFsaXphdGlvblRpbWVvdXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW5pdGlhbGl6YXRpb25UaW1lb3V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VydmljZU5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2VydmljZU5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbml0aWFsaXplcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbml0aWFsaXplcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3B1TWVtb3J5U2l6ZScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5ncHVNZW1vcnlTaXplKSk7XG4gICAgaWYocHJvcGVydGllcy5kaXNrU2l6ZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGlza1NpemUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc2tTaXplJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGlza1NpemUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogWzUxMiwxMDI0MF0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXNrU2l6ZScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5kaXNrU2l6ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3VzdG9tRG5zJywgUm9zRnVuY3Rpb25fQ3VzdG9tRE5TUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY3VzdG9tRG5zKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZUNvbmN1cnJlbmN5ICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnN0YW5jZUNvbmN1cnJlbmN5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUNvbmN1cnJlbmN5Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5zdGFuY2VDb25jdXJyZW5jeSxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUNvbmN1cnJlbmN5Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmluc3RhbmNlQ29uY3VycmVuY3kpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluc3RhbmNlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiZTFcIixcImMxXCIsXCJmYy5ncHUudGVzbGEuMVwiLFwiZmMuZ3B1LmFtcGVyZS4xXCIsXCJnMVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZVR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluc3RhbmNlU29mdENvbmN1cnJlbmN5ICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnN0YW5jZVNvZnRDb25jdXJyZW5jeSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VTb2Z0Q29uY3VycmVuY3knLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZVNvZnRDb25jdXJyZW5jeSxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZVNvZnRDb25jdXJyZW5jeScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pbnN0YW5jZVNvZnRDb25jdXJyZW5jeSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NGdW5jdGlvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0Z1bmN0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRnVuY3Rpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnRnVuY3Rpb25OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mdW5jdGlvbk5hbWUpLFxuICAgICAgJ0hhbmRsZXInOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhhbmRsZXIpLFxuICAgICAgJ1J1bnRpbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJ1bnRpbWUpLFxuICAgICAgJ1NlcnZpY2VOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICAnQXN5bmNDb25maWd1cmF0aW9uJzogcm9zRnVuY3Rpb25Bc3luY0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hc3luY0NvbmZpZ3VyYXRpb24pLFxuICAgICAgJ0NBUG9ydCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2FQb3J0KSxcbiAgICAgICdDb2RlJzogcm9zRnVuY3Rpb25Db2RlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29kZSksXG4gICAgICAnQ3B1Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jcHUpLFxuICAgICAgJ0N1c3RvbUNvbnRhaW5lckNvbmZpZyc6IHJvc0Z1bmN0aW9uQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY3VzdG9tQ29udGFpbmVyQ29uZmlnKSxcbiAgICAgICdDdXN0b21ETlMnOiByb3NGdW5jdGlvbkN1c3RvbUROU1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmN1c3RvbURucyksXG4gICAgICAnQ3VzdG9tSGVhbHRoQ2hlY2tDb25maWcnOiByb3NGdW5jdGlvbkN1c3RvbUhlYWx0aENoZWNrQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY3VzdG9tSGVhbHRoQ2hlY2tDb25maWcpLFxuICAgICAgJ0N1c3RvbVJ1bnRpbWVDb25maWcnOiByb3NGdW5jdGlvbkN1c3RvbVJ1bnRpbWVDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jdXN0b21SdW50aW1lQ29uZmlnKSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgJ0Rpc2tTaXplJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaXNrU2l6ZSksXG4gICAgICAnRW52aXJvbm1lbnRWYXJpYWJsZXMnOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5lbnZpcm9ubWVudFZhcmlhYmxlcyksXG4gICAgICAnR3B1TWVtb3J5U2l6ZSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3B1TWVtb3J5U2l6ZSksXG4gICAgICAnSW5pdGlhbGl6YXRpb25UaW1lb3V0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbml0aWFsaXphdGlvblRpbWVvdXQpLFxuICAgICAgJ0luaXRpYWxpemVyJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbml0aWFsaXplciksXG4gICAgICAnSW5zdGFuY2VDb25jdXJyZW5jeSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VDb25jdXJyZW5jeSksXG4gICAgICAnSW5zdGFuY2VMaWZlY3ljbGVDb25maWcnOiByb3NGdW5jdGlvbkluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VMaWZlY3ljbGVDb25maWcpLFxuICAgICAgJ0luc3RhbmNlU29mdENvbmN1cnJlbmN5Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZVNvZnRDb25jdXJyZW5jeSksXG4gICAgICAnSW5zdGFuY2VUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZVR5cGUpLFxuICAgICAgJ01lbW9yeVNpemUnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1lbW9yeVNpemUpLFxuICAgICAgJ1RpbWVvdXQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVvdXQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkZDOjpGdW5jdGlvbmAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgZnVuY3Rpb24uIEZ1bmN0aW9ucyBtdXN0IGJlIGFzc29jaWF0ZWQgd2l0aCBzZXJ2aWNlcy4gQWxsIGZ1bmN0aW9ucyBvZiBhIHNlcnZpY2Ugc2hhcmUgdGhlIHNhbWUgYXR0cmlidXRlcyBhcyB0aGUgc2VydmljZSwgc3VjaCBhcyBzZXJ2aWNlIGF1dGhvcml6YXRpb24gYW5kIGxvZyBjb25maWd1cmF0aW9ucy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgRnVuY3Rpb25gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjLWZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NGdW5jdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RkM6OkZ1bmN0aW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFSTjogVGhlIEFSTiBmb3IgQUxJWVVOOjpST1M6OkN1c3RvbVJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcm46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRnVuY3Rpb25JZDogVGhlIGZ1bmN0aW9uIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGdW5jdGlvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEZ1bmN0aW9uTmFtZTogVGhlIGZ1bmN0aW9uIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZ1bmN0aW9uTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlSWQ6IFRoZSBzZXJ2aWNlIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2VydmljZU5hbWU6IFRoZSBzZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmdW5jdGlvbk5hbWU6IEZ1bmN0aW9uIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZnVuY3Rpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaGFuZGxlcjogVGhlIGZ1bmN0aW9uIGV4ZWN1dGlvbiBlbnRyeSBwb2ludC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bnRpbWU6IFRoZSBmdW5jdGlvbiBydW50aW1lIGVudmlyb25tZW50LiBTdXBwb3J0aW5nIG5vZGVqczE244CBbm9kZWpzMTTjgIFub2RlanMxMuOAgW5vZGVqczEw44CBbm9kZWpzOOOAgW5vZGVqczbjgIFub2RlanM0LjTjgIFweXRob24zLjEw44CBcHl0aG9uMy4544CBcHl0aG9uM+OAgXB5dGhvbjIuN+OAgWphdmExMeOAgWphdmE444CBZ28x44CBcGhwNy4y44CBZG90bmV0Y29yZTMuMeOAgWRvdG5ldGNvcmUyLjHjgIFjdXN0b20uZGViaWFuMTDjgIFjdXN0b23lkoxjdXN0b20tY29udGFpbmVyIGFuZCBzbyBvblxuICAgICAqL1xuICAgIHB1YmxpYyBydW50aW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFzeW5jQ29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiBvZiBhc3luY2hyb25vdXMgZnVuY3Rpb24gY2FsbHNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmNDb25maWd1cmF0aW9uOiBSb3NGdW5jdGlvbi5Bc3luY0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjYVBvcnQ6IEN1c3RvbSBydW50aW1lIGFuZCBjdXN0b20gY29udGFpbmVyIHJ1bnRpbWUgZGVkaWNhdGVkIGZpZWxkcywgd2hpY2ggcmVwcmVzZW50IHRoZSBwb3J0IHRoYXQgdGhlIHN0YXJ0ZWQgY3VzdG9tIGh0dHAgc2VydmVyIGxpc3RlbnMgdG8uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDkwMDBcbiAgICAgKi9cbiAgICBwdWJsaWMgY2FQb3J0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29kZTogVGhlIGNvZGUgdGhhdCBjb250YWlucyB0aGUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGNvZGU6IFJvc0Z1bmN0aW9uLkNvZGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjcHU6IFRoZSBudW1iZXIgb2YgdkNQVXMgb2YgdGhlIGZ1bmN0aW9uLiBUaGUgdmFsdWUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDAuMDUuXG4gICAgICovXG4gICAgcHVibGljIGNwdTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbUNvbnRhaW5lckNvbmZpZzogQ3VzdG9tIGNvbnRhaW5lciBydW50aW1lIHJlbGF0ZWQgY29uZmlndXJhdGlvbi4gQWZ0ZXIgY29uZmlndXJhdGlvbiwgdGhlIGZ1bmN0aW9uIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgY3VzdG9tIGNvbnRhaW5lciB0byBleGVjdXRlIHRoZSBmdW5jdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBjdXN0b21Db250YWluZXJDb25maWc6IFJvc0Z1bmN0aW9uLkN1c3RvbUNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbURuczogVGhlIGN1c3RvbSBETlMgY29uZmlndXJhdGlvbnMgb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBjdXN0b21EbnM6IFJvc0Z1bmN0aW9uLkN1c3RvbUROU1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbUhlYWx0aENoZWNrQ29uZmlnOiBUaGUgaGVhbHRoIGNoZWNrIGNvbmZpZ3VyYXRpb25zIGZvciB0aGUgY3VzdG9tIHJ1bnRpbWUgYW5kIGN1c3RvbSBjb250YWluZXIuXG4gICAgICovXG4gICAgcHVibGljIGN1c3RvbUhlYWx0aENoZWNrQ29uZmlnOiBSb3NGdW5jdGlvbi5DdXN0b21IZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbVJ1bnRpbWVDb25maWc6IEN1c3RvbSBydW50aW1lIHJlbGF0ZWQgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgY3VzdG9tUnVudGltZUNvbmZpZzogUm9zRnVuY3Rpb24uQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBGdW5jdGlvbiBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpc2tTaXplOiBUaGUgZGlzayBzaXplIG9mIHRoZSBmdW5jdGlvbi4gVW5pdDogTUIuIFZhbGlkIHZhbHVlczogNTEyIGFuZCAxMDI0MC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlza1NpemU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbnZpcm9ubWVudFZhcmlhYmxlczogVGhlIGVudmlyb25tZW50IHZhcmlhYmxlIHNldCBmb3IgdGhlIGZ1bmN0aW9uLCB5b3UgY2FuIGdldCB0aGUgdmFsdWUgb2YgdGhlIGVudmlyb25tZW50IHZhcmlhYmxlIGluIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW52aXJvbm1lbnRWYXJpYWJsZXM6IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncHVNZW1vcnlTaXplOiBUaGUgR1BVIG1lbW9yeSBjYXBhY2l0eSBmb3IgdGhlIGZ1bmN0aW9uLiBVbml0OiBNQi4gVGhlIHZhbHVlIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxLDAyNC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3B1TWVtb3J5U2l6ZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluaXRpYWxpemF0aW9uVGltZW91dDogdGhlIG1heCBleGVjdXRpb24gdGltZSBvZiB0aGUgaW5pdGlhbGl6ZXIsIGluIHNlY29uZFxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0aWFsaXphdGlvblRpbWVvdXQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbml0aWFsaXplcjogdGhlIGVudHJ5IHBvaW50IG9mIHRoZSBpbml0aWFsaXplclxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0aWFsaXplcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlQ29uY3VycmVuY3k6IEZ1bmN0aW9uIGluc3RhbmNlIGNvbmN1cnJlbmN5LiBWYWx1ZSBjYW4gYmUgYmV0d2VlbiAxIHRvIDEwMC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VDb25jdXJyZW5jeTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnOiBUaGUgY29uZmlndXJhdGlvbiBvZiB0aGUgaW5zdGFuY2UgbGlmZWN5Y2xlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUxpZmVjeWNsZUNvbmZpZzogUm9zRnVuY3Rpb24uSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZVNvZnRDb25jdXJyZW5jeTogVGhlIHNvZnQgY29uY3VycmVuY3kgb2YgdGhlIGluc3RhbmNlLiBZb3UgY2FuIHVzZSB0aGlzIHBhcmFtZXRlciB0byBpbXBsZW1lbnQgZ3JhY2VmdWwgc2NhbGUtdXAgb2YgaW5zdGFuY2VzLiBJZiB0aGUgbnVtYmVyIG9mIGNvbmN1cnJlbnQgcmVxdWVzdHMgb24gYW4gaW5zdGFuY2UgaXMgZ3JlYXRlciB0aGFuIHRoZSB2YWx1ZSBvZiBzb2Z0IGNvbmN1cnJlbmN5LCBhbiBpbnN0YW5jZSBzY2FsZS11cCBpcyB0cmlnZ2VyZWQuIEZvciBleGFtcGxlLCBpZiB5b3VyIGluc3RhbmNlIHJlcXVpcmVzIGEgbG9uZyB0aW1lIHRvIHN0YXJ0LCB5b3UgY2FuIHNwZWNpZnkgYSBzdWl0YWJsZSBzb2Z0IGNvbmN1cnJlbmN5IHRvIHN0YXJ0IHRoZSBpbnN0YW5jZSBpbiBhZHZhbmNlLlRoZSB2YWx1ZSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGF0IG9mIHRoZSBpbnN0YW5jZUNvbmN1cnJlbmN5IHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VTb2Z0Q29uY3VycmVuY3k6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZVR5cGU6IEluc3RhbmNlIHR5cGUuIFZhbHVlOmUxOiBmbGV4aWJsZSBpbnN0YW5jZS4gTWVtb3J5IHNpemUgYmV0d2VlbiAxMjggYW5kIDMwNzJjMTogcGVyZm9ybWFuY2UgaW5zdGFuY2UuIE1lbW9yeSBzaXplIGFsbG93IHZhbHVlcyBhcmUgNDA5NiwgODE5MiwgMTYzODQgYW5kIDMyNzY4XG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1lbW9yeVNpemU6IFRoZSBhbW91bnQgb2YgbWVtb3J5IHRoYXTigJlzIHVzZWQgdG8gcnVuIGZ1bmN0aW9uLCBpbiBNQi4gRnVuY3Rpb24gQ29tcHV0ZSB1c2VzIHRoaXMgdmFsdWUgdG8gYWxsb2NhdGUgQ1BVIHJlc291cmNlcyBwcm9wb3J0aW9uYWxseS4gRGVmYXVsdHMgdG8gMTI4IE1CLiBJdCBjYW4gYmUgbXVsdGlwbGUgb2YgNjQgTUIgYW5kIGJldHdlZW4gMTI4IE1CIGFuZCAzMDcyIE1CLlxuICAgICAqL1xuICAgIHB1YmxpYyBtZW1vcnlTaXplOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dDogVGhlIG1heGltdW0gdGltZSBkdXJhdGlvbiBhIGZ1bmN0aW9uIGNhbiBydW4sIGluIHNlY29uZHMuIEFmdGVyIHdoaWNoIEZ1bmN0aW9uIENvbXB1dGUgdGVybWluYXRlcyB0aGUgZXhlY3V0aW9uLiBEZWZhdWx0cyB0byAzIHNlY29uZHMsIGFuZCBjYW4gYmUgYmV0d2VlbiAxIHRvIDg2NDAwIHNlY29uZHMuXG4gICAgICovXG4gICAgcHVibGljIHRpbWVvdXQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NGdW5jdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRnVuY3Rpb24uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFybiA9IHRoaXMuZ2V0QXR0KCdBUk4nKTtcbiAgICAgICAgdGhpcy5hdHRyRnVuY3Rpb25JZCA9IHRoaXMuZ2V0QXR0KCdGdW5jdGlvbklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckZ1bmN0aW9uTmFtZSA9IHRoaXMuZ2V0QXR0KCdGdW5jdGlvbk5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZUlkID0gdGhpcy5nZXRBdHQoJ1NlcnZpY2VJZCcpO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlTmFtZSA9IHRoaXMuZ2V0QXR0KCdTZXJ2aWNlTmFtZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5mdW5jdGlvbk5hbWUgPSBwcm9wcy5mdW5jdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IHByb3BzLmhhbmRsZXI7XG4gICAgICAgIHRoaXMucnVudGltZSA9IHByb3BzLnJ1bnRpbWU7XG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBwcm9wcy5zZXJ2aWNlTmFtZTtcbiAgICAgICAgdGhpcy5hc3luY0NvbmZpZ3VyYXRpb24gPSBwcm9wcy5hc3luY0NvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMuY2FQb3J0ID0gcHJvcHMuY2FQb3J0O1xuICAgICAgICB0aGlzLmNvZGUgPSBwcm9wcy5jb2RlO1xuICAgICAgICB0aGlzLmNwdSA9IHByb3BzLmNwdTtcbiAgICAgICAgdGhpcy5jdXN0b21Db250YWluZXJDb25maWcgPSBwcm9wcy5jdXN0b21Db250YWluZXJDb25maWc7XG4gICAgICAgIHRoaXMuY3VzdG9tRG5zID0gcHJvcHMuY3VzdG9tRG5zO1xuICAgICAgICB0aGlzLmN1c3RvbUhlYWx0aENoZWNrQ29uZmlnID0gcHJvcHMuY3VzdG9tSGVhbHRoQ2hlY2tDb25maWc7XG4gICAgICAgIHRoaXMuY3VzdG9tUnVudGltZUNvbmZpZyA9IHByb3BzLmN1c3RvbVJ1bnRpbWVDb25maWc7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kaXNrU2l6ZSA9IHByb3BzLmRpc2tTaXplO1xuICAgICAgICB0aGlzLmVudmlyb25tZW50VmFyaWFibGVzID0gcHJvcHMuZW52aXJvbm1lbnRWYXJpYWJsZXM7XG4gICAgICAgIHRoaXMuZ3B1TWVtb3J5U2l6ZSA9IHByb3BzLmdwdU1lbW9yeVNpemU7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6YXRpb25UaW1lb3V0ID0gcHJvcHMuaW5pdGlhbGl6YXRpb25UaW1lb3V0O1xuICAgICAgICB0aGlzLmluaXRpYWxpemVyID0gcHJvcHMuaW5pdGlhbGl6ZXI7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb25jdXJyZW5jeSA9IHByb3BzLmluc3RhbmNlQ29uY3VycmVuY3k7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VMaWZlY3ljbGVDb25maWcgPSBwcm9wcy5pbnN0YW5jZUxpZmVjeWNsZUNvbmZpZztcbiAgICAgICAgdGhpcy5pbnN0YW5jZVNvZnRDb25jdXJyZW5jeSA9IHByb3BzLmluc3RhbmNlU29mdENvbmN1cnJlbmN5O1xuICAgICAgICB0aGlzLmluc3RhbmNlVHlwZSA9IHByb3BzLmluc3RhbmNlVHlwZTtcbiAgICAgICAgdGhpcy5tZW1vcnlTaXplID0gcHJvcHMubWVtb3J5U2l6ZTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gcHJvcHMudGltZW91dDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHRoaXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5oYW5kbGVyLFxuICAgICAgICAgICAgcnVudGltZTogdGhpcy5ydW50aW1lLFxuICAgICAgICAgICAgc2VydmljZU5hbWU6IHRoaXMuc2VydmljZU5hbWUsXG4gICAgICAgICAgICBhc3luY0NvbmZpZ3VyYXRpb246IHRoaXMuYXN5bmNDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgY2FQb3J0OiB0aGlzLmNhUG9ydCxcbiAgICAgICAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgICAgICAgIGNwdTogdGhpcy5jcHUsXG4gICAgICAgICAgICBjdXN0b21Db250YWluZXJDb25maWc6IHRoaXMuY3VzdG9tQ29udGFpbmVyQ29uZmlnLFxuICAgICAgICAgICAgY3VzdG9tRG5zOiB0aGlzLmN1c3RvbURucyxcbiAgICAgICAgICAgIGN1c3RvbUhlYWx0aENoZWNrQ29uZmlnOiB0aGlzLmN1c3RvbUhlYWx0aENoZWNrQ29uZmlnLFxuICAgICAgICAgICAgY3VzdG9tUnVudGltZUNvbmZpZzogdGhpcy5jdXN0b21SdW50aW1lQ29uZmlnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkaXNrU2l6ZTogdGhpcy5kaXNrU2l6ZSxcbiAgICAgICAgICAgIGVudmlyb25tZW50VmFyaWFibGVzOiB0aGlzLmVudmlyb25tZW50VmFyaWFibGVzLFxuICAgICAgICAgICAgZ3B1TWVtb3J5U2l6ZTogdGhpcy5ncHVNZW1vcnlTaXplLFxuICAgICAgICAgICAgaW5pdGlhbGl6YXRpb25UaW1lb3V0OiB0aGlzLmluaXRpYWxpemF0aW9uVGltZW91dCxcbiAgICAgICAgICAgIGluaXRpYWxpemVyOiB0aGlzLmluaXRpYWxpemVyLFxuICAgICAgICAgICAgaW5zdGFuY2VDb25jdXJyZW5jeTogdGhpcy5pbnN0YW5jZUNvbmN1cnJlbmN5LFxuICAgICAgICAgICAgaW5zdGFuY2VMaWZlY3ljbGVDb25maWc6IHRoaXMuaW5zdGFuY2VMaWZlY3ljbGVDb25maWcsXG4gICAgICAgICAgICBpbnN0YW5jZVNvZnRDb25jdXJyZW5jeTogdGhpcy5pbnN0YW5jZVNvZnRDb25jdXJyZW5jeSxcbiAgICAgICAgICAgIGluc3RhbmNlVHlwZTogdGhpcy5pbnN0YW5jZVR5cGUsXG4gICAgICAgICAgICBtZW1vcnlTaXplOiB0aGlzLm1lbW9yeVNpemUsXG4gICAgICAgICAgICB0aW1lb3V0OiB0aGlzLnRpbWVvdXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0Z1bmN0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzeW5jQ29uZmlndXJhdGlvblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkZXN0aW5hdGlvbjogU2V0IGRlc3RpbmF0aW9uIG9mIGFzeW5jaHJvbm91cyBmdW5jdGlvbiBjYWxsc1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVzdGluYXRpb24/OiBSb3NGdW5jdGlvbi5EZXN0aW5hdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1heEFzeW5jRXZlbnRBZ2VJblNlY29uZHM6IENvbmZpZ3VyZSB0aGUgbWF4aW11bSBsaWZldGltZSBvZiBtZXNzYWdlcy4gVGhlIGR1cmF0aW9uIGlzIGNhbGN1bGF0ZWQgZnJvbSB0aGUgdGltZSB0aGUgYXN5bmNocm9ub3VzIGNhbGwgaXMgdHJpZ2dlcmVkLCBhbmQgZW5kcyB3aGVuIHRoZSBtZXNzYWdlIGlzIGRlcXVldWVkIGZvciBwcm9jZXNzaW5nLiBJZiB0aGlzIHBlcmlvZCBvZiB0aW1lIGlzIGxvbmdlciB0aGFuIHRoZSBzZXR0aW5nIHZhbHVlIG9mIE1heEFzeW5jRXZlbnRBZ2VJblNlY29uZHMsIHRoZSBtZXNzYWdlIHdpbGwgYmUgZGlzY2FyZGVkLiBUaGUgdW5jb25zdW1lZCBtZXNzYWdlcyB3aWxsIGJlIGNvdW50ZWQgaW4gdGhlIGNsb3VkIG1vbml0b3JpbmcgQXN5bmNFdmVudEV4cGlyZWREcm9wcGVkIGluZGljYXRvci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1heEFzeW5jRXZlbnRBZ2VJblNlY29uZHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhdGVmdWxJbnZvY2F0aW9uOiBXaGV0aGVyIGVuYWJsZSBzdGF0ZWZ1bCBpbnZvY2F0aW9uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGF0ZWZ1bEludm9jYXRpb24/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1heEFzeW5jUmV0cnlBdHRlbXB0czogQ29uZmlndXJlIHRoZSBudW1iZXIgb2YgcmV0cmllc1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4QXN5bmNSZXRyeUF0dGVtcHRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEFzeW5jQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0FzeW5jQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzdGluYXRpb24nLCBSb3NGdW5jdGlvbl9EZXN0aW5hdGlvblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRlc3RpbmF0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5tYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy5tYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWF4QXN5bmNFdmVudEFnZUluU2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMjU5MjAwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4QXN5bmNFdmVudEFnZUluU2Vjb25kcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5tYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0ZWZ1bEludm9jYXRpb24nLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLnN0YXRlZnVsSW52b2NhdGlvbikpO1xuICAgIGlmKHByb3BlcnRpZXMubWF4QXN5bmNSZXRyeUF0dGVtcHRzICYmICh0eXBlb2YgcHJvcGVydGllcy5tYXhBc3luY1JldHJ5QXR0ZW1wdHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heEFzeW5jUmV0cnlBdHRlbXB0cycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1heEFzeW5jUmV0cnlBdHRlbXB0cyxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogOCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4QXN5bmNSZXRyeUF0dGVtcHRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1heEFzeW5jUmV0cnlBdHRlbXB0cykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJBc3luY0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkFzeW5jQ29uZmlndXJhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5Bc3luY0NvbmZpZ3VyYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25Bc3luY0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRnVuY3Rpb25fQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnRGVzdGluYXRpb24nOiByb3NGdW5jdGlvbkRlc3RpbmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzdGluYXRpb24pLFxuICAgICAgJ01heEFzeW5jRXZlbnRBZ2VJblNlY29uZHMnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heEFzeW5jRXZlbnRBZ2VJblNlY29uZHMpLFxuICAgICAgJ1N0YXRlZnVsSW52b2NhdGlvbic6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXRlZnVsSW52b2NhdGlvbiksXG4gICAgICAnTWF4QXN5bmNSZXRyeUF0dGVtcHRzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXhBc3luY1JldHJ5QXR0ZW1wdHMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvZGVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc291cmNlQ29kZTogKE5vZGUuanMsIFBIUCBhbmQgUHl0aG9uKSBUaGUgc291cmNlIGNvZGUgZm9yIHlvdXIgRkMgZnVuY3Rpb24uIElmIHlvdSBpbmNsdWRlIHRoaXMgcGFyYW1ldGVyIGluIGEgZnVuY3Rpb24gc291cmNlIGlubGluZSwgUk9TIHBsYWNlcyBpdCBpbiBhIGZpbGUgY2FsbGVkIGluZGV4ICh1dGYtOCBlbmNvZGVkKSBhbmQgdGhlbiBjb21wcmVzc2VzIGl0IHRvIGNyZWF0ZSBhIGRlcGxveW1lbnQgcGFja2FnZS4gRm9yIHRoZSBIYW5kbGVyIHByb3BlcnR5LCB0aGUgZmlyc3QgcGFydCBvZiB0aGUgaGFuZGxlciBpZGVudGlmaWVyIG11c3QgYmUgaW5kZXguIEZvciBleGFtcGxlOiBpbmRleC5oYW5kbGVyLlxuICAgICAqIFlvdXIgc291cmNlIGNvZGUgY2FuIGNvbnRhaW4gdXAgdG8gNDA5NiBjaGFyYWN0ZXJzLiBGb3IgSlNPTiwgeW91IG11c3QgdXNlIGJhY2tzbGFzaGVzIHRvIGVzY2FwZSBxdW90ZXMgYW5kIHNwZWNpYWwgY2hhcmFjdGVycywgc3VjaCBhcyBsaW5lIGJyZWFrcy5cbiAgICAgKiBQcmlvcml0eTogWmlwRmlsZSA+IFNvdXJjZUNvZGUgPiBPc3NCdWNrZXROYW1lJk9zc09iamVjdE5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzb3VyY2VDb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHppcEZpbGU6IEJhc2U2NCBlbmNvZGVkIHppcCBmaWxlIGNvbnRlbnQuXG4gICAgICogUHJpb3JpdHk6IFppcEZpbGUgPiBTb3VyY2VDb2RlID4gT3NzQnVja2V0TmFtZSZPc3NPYmplY3ROYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgemlwRmlsZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvc3NPYmplY3ROYW1lOiBPU1Mgb2JqZWN0IG5hbWUuXG4gICAgICogUHJpb3JpdHk6IFppcEZpbGUgPiBTb3VyY2VDb2RlID4gT3NzQnVja2V0TmFtZSZPc3NPYmplY3ROYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3NzT2JqZWN0TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvc3NCdWNrZXROYW1lOiBPU1MgYnVja2V0IG5hbWUuXG4gICAgICogUHJpb3JpdHk6IFppcEZpbGUgPiBTb3VyY2VDb2RlID4gT3NzQnVja2V0TmFtZSZPc3NPYmplY3ROYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3NzQnVja2V0TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYENvZGVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29kZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0NvZGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNvdXJjZUNvZGUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zb3VyY2VDb2RlKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc291cmNlQ29kZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZUNvZGUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc291cmNlQ29kZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNDA5NixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlQ29kZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zb3VyY2VDb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd6aXBGaWxlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnppcEZpbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29zc09iamVjdE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3NzT2JqZWN0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3NzQnVja2V0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vc3NCdWNrZXROYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNvZGVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkNvZGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvZGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkNvZGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25Db2RlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX0NvZGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdTb3VyY2VDb2RlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3VyY2VDb2RlKSxcbiAgICAgICdaaXBGaWxlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy56aXBGaWxlKSxcbiAgICAgICdPc3NPYmplY3ROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vc3NPYmplY3ROYW1lKSxcbiAgICAgICdPc3NCdWNrZXROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vc3NCdWNrZXROYW1lKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0Z1bmN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBDdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYXJnczogQ29udGFpbmVyIHN0YXJ0dXAgcGFyYW1ldGVycy4gRm9yIGV4YW1wbGU6IFtcIi1hcmcxXCIsIFwidmFsdWUxXCJdXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhcmdzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgQ29udGFpbmVyIFJlZ2lzdHJ5IEVudGVycHJpc2UgRWRpdGlvbiBpbnN0YW5jZS4gSWYgeW91IHVzZSBhbiBFbnRlcnByaXNlIEVkaXRpb24gaW5zdGFuY2UgZm9yIHRoZSBjb250YWluZXIgaW1hZ2UsIHlvdSBtdXN0IGFkZCB0aGUgaW5zdGFuY2UgSUQuIFRoZSBkZWZhdWx0IHJlc29sdXRpb24gSVAgYWRkcmVzcyBvZiB0aGUgaW5zdGFuY2UgbXVzdCBiZSB0aGUgSVAgYWRkcmVzcyBvZiB0aGUgdmlydHVhbCBwcml2YXRlIGNsb3VkIChWUEMpIHRoYXQgdGhlIGluc3RhbmNlIGJlbG9uZ3MuIEFsaWJhYmEgQ2xvdWQgRE5TIFByaXZhdGVab25lIGNhbm5vdCBiZSB1c2VkIGZvciBkb21haW4gbmFtZSByZXNvbHV0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21tYW5kOiBDb250YWluZXIgc3RhcnQgY29tbWFuZC4gRm9yIGV4YW1wbGU6IFtcIlxcL2NvZGVcXC9teXNlcnZlclwiXVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29tbWFuZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhY2NlbGVyYXRpb25UeXBlOiBXaGV0aGVyIHRvIGVuYWJsZSBpbWFnZSBhY2NlbGVyYXRpb24uIFZhbGlkIFZhbHVlczpcbiAgICAgKiBEZWZhdWx0OiBJbmRpY2F0ZXMgdGhhdCBpbWFnZSBhY2NlbGVyYXRpb24gaXMgZW5hYmxlZC5cbiAgICAgKiBOb25lOiBJbmRpY2F0ZXMgdGhhdCBpbWFnZSBhY2NlbGVyYXRpb24gaXMgZGlzYWJsZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhY2NlbGVyYXRpb25UeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHdlYlNlcnZlck1vZGU6IFNwZWNpZmllcyB3aGV0aGVyIHRoZSB3ZWIgc2VydmVyIG1vZGUgaXMgdXNlZCBmb3IgaW1hZ2UgcnVubmluZy5cbiAgICAgKiBBIHZhbHVlIG9mIHRydWUgaW5kaWNhdGVzIHRoYXQgYSB3ZWIgc2VydmVyIGlzIGltcGxlbWVudGVkIGluIHlvdXIgY29udGFpbmVyIGltYWdlIHRvIGxpc3RlbiBvbiBwb3J0cyBhbmQgcHJvY2VzcyByZXF1ZXN0cy5cbiAgICAgKiBBIHZhbHVlIG9mIGZhbHNlIGluZGljYXRlcyB0aGF0IHRoZSBjb250YWluZXIgbXVzdCBhY3RpdmVseSBleGl0IHRoZSBwcm9jZXNzIGFmdGVyIGl0IHJ1bnMsIGFuZCB0aGUgZXhpdCBjb2RlIGlzIDAuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogdHJ1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHdlYlNlcnZlck1vZGU/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGltYWdlOiBDb250YWluZXIgaW1hZ2UgYWRkcmVzcy4gRm9yIGV4YW1wbGU6IHJlZ2lzdHJ5LXZwYy5jbi1oYW5nemhvdS5hbGl5dW5jcy5jb21cXC9mYy1kZW1vXFwvaGVsbG93b3JsZDp2MWJldGExXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbWFnZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEN1c3RvbUNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0N1c3RvbUNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXJncycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hcmdzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbW1hbmQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29tbWFuZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZWxlcmF0aW9uVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hY2NlbGVyYXRpb25UeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3ZWJTZXJ2ZXJNb2RlJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy53ZWJTZXJ2ZXJNb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbWFnZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbWFnZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW1hZ2UnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW1hZ2UpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5DdXN0b21Db250YWluZXJDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEN1c3RvbUNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uQ3VzdG9tQ29udGFpbmVyQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX0N1c3RvbUNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0FyZ3MnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFyZ3MpLFxuICAgICAgJ0luc3RhbmNlSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpLFxuICAgICAgJ0NvbW1hbmQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbW1hbmQpLFxuICAgICAgJ0FjY2VsZXJhdGlvblR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFjY2VsZXJhdGlvblR5cGUpLFxuICAgICAgJ1dlYlNlcnZlck1vZGUnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy53ZWJTZXJ2ZXJNb2RlKSxcbiAgICAgICdJbWFnZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW1hZ2UpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEN1c3RvbUROU1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZWFyY2hlczogVGhlIHZhbHVlIG9mIHRoZSBETlMgc2VhcmNoIGRvbWFpbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNlYXJjaGVzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkbnNPcHRpb25zOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRuc09wdGlvbnM/OiBBcnJheTxSb3NGdW5jdGlvbi5EbnNPcHRpb25zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hbWVTZXJ2ZXJzOiBUaGUgSVAgYWRkcmVzcyBvZiB0aGUgRE5TIHNlcnZlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hbWVTZXJ2ZXJzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEN1c3RvbUROU1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDdXN0b21ETlNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbl9DdXN0b21ETlNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlYXJjaGVzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5zZWFyY2hlcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG5zT3B0aW9ucycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0Z1bmN0aW9uX0Ruc09wdGlvbnNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuZG5zT3B0aW9ucykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZVNlcnZlcnMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLm5hbWVTZXJ2ZXJzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkN1c3RvbUROU1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uQ3VzdG9tRE5TYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDdXN0b21ETlNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkN1c3RvbUROU2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkN1c3RvbUROU1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9DdXN0b21ETlNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdTZWFyY2hlcyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnNlYXJjaGVzKSxcbiAgICAgICdEbnNPcHRpb25zJzogcm9zLmxpc3RNYXBwZXIocm9zRnVuY3Rpb25EbnNPcHRpb25zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmRuc09wdGlvbnMpLFxuICAgICAgJ05hbWVTZXJ2ZXJzJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubmFtZVNlcnZlcnMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEN1c3RvbUhlYWx0aENoZWNrQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRpbWVvdXRTZWNvbmRzOiBUaGUgdGltZW91dCBwZXJpb2Qgb2YgaGVhbHRoIGNoZWNrcy4gVmFsaWQgdmFsdWVzOiAxIHRvIDMuIERlZmF1bHQgdmFsdWU6IDEuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lb3V0U2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpbml0aWFsRGVsYXlTZWNvbmRzOiBUaGUgZGVsYXkgYmV0d2VlbiB0aGUgY29udGFpbmVyIHN0YXJ0dXAgYW5kIHRoZSBoZWFsdGggY2hlY2suIFZhbGlkIHZhbHVlczogMCB0byAxMjAuIERlZmF1bHQgdmFsdWU6IDAuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbml0aWFsRGVsYXlTZWNvbmRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGh0dHBHZXRVcmw6IFRoZSBoZWFsdGggY2hlY2sgVVJMIG9mIHRoZSBjdXN0b20gY29udGFpbmVyLiBUaGUgY29udGVudCBjYW4gYmUgdXAgdG8gMiwwNDggY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBodHRwR2V0VXJsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBlcmlvZFNlY29uZHM6IFRoZSBoZWFsdGggY2hlY2sgcGVyaW9kLiBWYWx1ZSByYW5nZTogMSB0byAxMjAuIERlZmF1bHQgdmFsdWU6IDMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwZXJpb2RTZWNvbmRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGZhaWx1cmVUaHJlc2hvbGQ6IFRoZSB0aHJlc2hvbGQgZm9yIGhlYWx0aCBjaGVjayBmYWlsdXJlcy4gV2hlbiB0aGlzIHZhbHVlIGlzIHJlYWNoZWQsIHRoZSBzeXN0ZW0gY29uc2lkZXJzIHRoZSBjaGVjayBmYWlsZWQuIFZhbHVlIHJhbmdlOiAxIHRvIDEyMC4gRGVmYXVsdCB2YWx1ZTogMy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZhaWx1cmVUaHJlc2hvbGQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3VjY2Vzc1RocmVzaG9sZDogVGhlIHRocmVzaG9sZCBmb3IgaGVhbHRoIGNoZWNrIHN1Y2Nlc3Nlcy4gV2hlbiB0aGlzIHZhbHVlIGlzIHJlYWNoZWQsIHRoZSBzeXN0ZW0gY29uc2lkZXJzIHRoZSBjaGVjayBzdWNjZWVkZWQuIFZhbHVlIHJhbmdlOiAxIHRvIDEyMC4gRGVmYXVsdCB2YWx1ZTogMS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN1Y2Nlc3NUaHJlc2hvbGQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDdXN0b21IZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDdXN0b21IZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0N1c3RvbUhlYWx0aENoZWNrQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy50aW1lb3V0U2Vjb25kcyAmJiAodHlwZW9mIHByb3BlcnRpZXMudGltZW91dFNlY29uZHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXRTZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGltZW91dFNlY29uZHMsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDMsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXRTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzKSk7XG4gICAgaWYocHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbml0aWFsRGVsYXlTZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbml0aWFsRGVsYXlTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmh0dHBHZXRVcmwgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5odHRwR2V0VXJsKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuaHR0cEdldFVybCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBHZXRVcmwnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaHR0cEdldFVybC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjA0OCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cEdldFVybCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5odHRwR2V0VXJsKSk7XG4gICAgaWYocHJvcGVydGllcy5wZXJpb2RTZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy5wZXJpb2RTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2RTZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2RTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZhaWx1cmVUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZhaWx1cmVUaHJlc2hvbGQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCkpO1xuICAgIGlmKHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3VjY2Vzc1RocmVzaG9sZCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3VjY2Vzc1RocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkN1c3RvbUhlYWx0aENoZWNrQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5DdXN0b21IZWFsdGhDaGVja0NvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3VzdG9tSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkN1c3RvbUhlYWx0aENoZWNrQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uQ3VzdG9tSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRnVuY3Rpb25fQ3VzdG9tSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdUaW1lb3V0U2Vjb25kcyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dFNlY29uZHMpLFxuICAgICAgJ0luaXRpYWxEZWxheVNlY29uZHMnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMpLFxuICAgICAgJ0h0dHBHZXRVcmwnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmh0dHBHZXRVcmwpLFxuICAgICAgJ1BlcmlvZFNlY29uZHMnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMpLFxuICAgICAgJ0ZhaWx1cmVUaHJlc2hvbGQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQpLFxuICAgICAgJ1N1Y2Nlc3NUaHJlc2hvbGQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEN1c3RvbVJ1bnRpbWVDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYXJnczogVGhlIHN0YXJ0dXAgcGFyYW1ldGVycy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFyZ3M/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbW1hbmQ6IFRoZSBzdGFydHVwIGNvbW1hbmQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb21tYW5kPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEN1c3RvbVJ1bnRpbWVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0N1c3RvbVJ1bnRpbWVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FyZ3MnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmFyZ3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbW1hbmQnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmNvbW1hbmQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uQ3VzdG9tUnVudGltZUNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uQ3VzdG9tUnVudGltZUNvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkN1c3RvbVJ1bnRpbWVDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRnVuY3Rpb25fQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0FyZ3MnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5hcmdzKSxcbiAgICAgICdDb21tYW5kJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29tbWFuZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRGVzdGluYXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb25TdWNjZXNzOiBXaGVuIHRoZSBmdW5jdGlvbiBpcyBpbnZva2VkIHN1Y2Nlc3NmdWxseSwgRkMgd2lsbCBjYWxsIHRoZSB0YXJnZXQgY29ycmVzcG9uZGluZyB0byB0aGUgY29uZmlndXJhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb25TdWNjZXNzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9uRmFpbHVyZTogV2hlbiB0aGUgZnVuY3Rpb24gaXMgaW52b2tlZCBmYWlsZWQgKHN5c3RlbSBlcnJvciBvciBmdW5jdGlvbiBpbnRlcm5hbCBlcnJvciksIEZDIHdpbGwgY2FsbCB0aGUgdGFyZ2V0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9uRmFpbHVyZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYERlc3RpbmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERlc3RpbmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fRGVzdGluYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29uU3VjY2VzcycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vblN1Y2Nlc3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29uRmFpbHVyZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vbkZhaWx1cmUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRGVzdGluYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkRlc3RpbmF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBEZXN0aW5hdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uRGVzdGluYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25EZXN0aW5hdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9EZXN0aW5hdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ09uU3VjY2Vzcyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub25TdWNjZXNzKSxcbiAgICAgICdPbkZhaWx1cmUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9uRmFpbHVyZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRG5zT3B0aW9uc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuYW1lOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYERuc09wdGlvbnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRG5zT3B0aW9uc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0Ruc09wdGlvbnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJEbnNPcHRpb25zUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5EbnNPcHRpb25zYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBEbnNPcHRpb25zUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5EbnNPcHRpb25zYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uRG5zT3B0aW9uc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9EbnNPcHRpb25zUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVmFsdWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgICdOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0Z1bmN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZUxpZmVjeWNsZUNvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcmVTdG9wOiBUaGUgY29uZmlndXJhdGlvbiBvZiBsaWZlY3ljbGUgY2FsbGJhY2tzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJlU3RvcD86IFJvc0Z1bmN0aW9uLlByZVN0b3BQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcmVGcmVlemU6IFRoZSBjb25maWd1cmF0aW9uIG9mIGxpZmVjeWNsZSBjYWxsYmFja3MuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcmVGcmVlemU/OiBSb3NGdW5jdGlvbi5QcmVGcmVlemVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByZVN0b3AnLCBSb3NGdW5jdGlvbl9QcmVTdG9wUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJlU3RvcCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJlRnJlZXplJywgUm9zRnVuY3Rpb25fUHJlRnJlZXplUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJlRnJlZXplKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5JbnN0YW5jZUxpZmVjeWNsZUNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRnVuY3Rpb25fSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQcmVTdG9wJzogcm9zRnVuY3Rpb25QcmVTdG9wUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJlU3RvcCksXG4gICAgICAnUHJlRnJlZXplJzogcm9zRnVuY3Rpb25QcmVGcmVlemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmVGcmVlemUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFByZUZyZWV6ZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaGUgdGltZW91dCBwZXJpb2QgZm9yIHRoZSBleGVjdXRpb24uIFVuaXQ6IHNlY29uZHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lb3V0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhhbmRsZXI6IFRoZSBoYW5kbGVyIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhhbmRsZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQcmVGcmVlemVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJlRnJlZXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fUHJlRnJlZXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hhbmRsZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaGFuZGxlcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQcmVGcmVlemVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLlByZUZyZWV6ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJlRnJlZXplUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5QcmVGcmVlemVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25QcmVGcmVlemVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRnVuY3Rpb25fUHJlRnJlZXplUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVGltZW91dCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dCksXG4gICAgICAnSGFuZGxlcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGFuZGxlciksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJlU3RvcFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaGUgdGltZW91dCBwZXJpb2QgZm9yIHRoZSBleGVjdXRpb24uIFVuaXQ6IHNlY29uZHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lb3V0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhhbmRsZXI6IFRoZSBoYW5kbGVyIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhhbmRsZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQcmVTdG9wUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByZVN0b3BQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbl9QcmVTdG9wUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hhbmRsZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaGFuZGxlcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQcmVTdG9wUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5QcmVTdG9wYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmVTdG9wUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5QcmVTdG9wYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uUHJlU3RvcFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9QcmVTdG9wUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVGltZW91dCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dCksXG4gICAgICAnSGFuZGxlcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGFuZGxlciksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NGdW5jdGlvbkludm9rZXJgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtZnVuY3Rpb25pbnZva2VyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRnVuY3Rpb25JbnZva2VyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZ1bmN0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFzeW5jOiBJbnZvY2F0aW9uIHR5cGUsIFN5bmMgb3IgQXN5bmMuIERlZmF1bHRzIHRvIFN5bmMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXN5bmM/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNoZWNrRXJyb3I6IFdoZXRoZXIgY2hlY2sgZXJyb3IgZm9yIGZ1bmN0aW9uIGludm9jYXRpb24gcmVzdWx0LlxuICAgICAqIElmIHNldCB0cnVlIGFuZCBmdW5jdGlvbiBpbnZvY2F0aW9uIHJlc3VsdCBoYXMgZXJyb3IsIHRoZSByZXNvdXJjZSBjcmVhdGlvbiB3aWxsIGJlIHJlZ2FyZCBhcyBmYWlsZWQuXG4gICAgICogRGVmYXVsdCBpcyBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNoZWNrRXJyb3I/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGV2ZW50OiBUaGlzIHZhbHVlIGlzIHBhc3NlZCB0byBmdW5jdGlvbiBhcyB1dGYtOCBlbmNvZGVkIHN0cmluZy5JdOKAmXMgZnVuY3Rpb27igJlzIHJlc3BvbnNpYmlsaXR5IHRvIGludGVycHJldCB0aGUgdmFsdWUuXG4gICAgICogSWYgdGhlIHZhbHVlIG5lZWRzIHRvIGJlIGJpbmFyeSwgZW5jb2RlIGl0IHZpYSBiYXNlNjQgYmVmb3JlIHBhc3NpbmcgdG8gdGhpcyBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICByZWFkb25seSBldmVudD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBleGVjdXRlVmVyc2lvbjogSWYgdGhlIHByb3BlcnR5IGlzIG5vdCBzcGVjaWZpZWQgZm9yIGNyZWF0aW9uIGFuZCB1cGRhdGUsIHRoZSBmdW5jdGlvbiB3aWxsIG5vdCBiZSBpbnZva2VkLiBUaGUgY2hhbmdlIG9mIHRoZSBwcm9wZXJ0eSBsZWFkcyB0byB0aGUgaW52b2tlIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBleGVjdXRlVmVyc2lvbj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBxdWFsaWZpZXI6IHNlcnZpY2UgdmVyc2lvbiwgY2FuIGJlIHZlcnNpb25JZCBvciBhbGlhc05hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBxdWFsaWZpZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZVJlZ2lvbklkOiBXaGljaCByZWdpb24gc2VydmljZSBiZWxvbmdzIHRvLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VSZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NGdW5jdGlvbkludm9rZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRnVuY3Rpb25JbnZva2VyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25JbnZva2VyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleGVjdXRlVmVyc2lvbicsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5leGVjdXRlVmVyc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVJlZ2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VSZWdpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2VydmljZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXN5bmMnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmFzeW5jKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdldmVudCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ldmVudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hlY2tFcnJvcicsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuY2hlY2tFcnJvcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NGdW5jdGlvbkludm9rZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uSW52b2tlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRnVuY3Rpb25JbnZva2VyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbkludm9rZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25JbnZva2VyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NGdW5jdGlvbkludm9rZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnRnVuY3Rpb25OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mdW5jdGlvbk5hbWUpLFxuICAgICAgJ1NlcnZpY2VOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICAnQXN5bmMnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hc3luYyksXG4gICAgICAnQ2hlY2tFcnJvcic6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNoZWNrRXJyb3IpLFxuICAgICAgJ0V2ZW50Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ldmVudCksXG4gICAgICAnRXhlY3V0ZVZlcnNpb24nOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmV4ZWN1dGVWZXJzaW9uKSxcbiAgICAgICdRdWFsaWZpZXInOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnF1YWxpZmllciksXG4gICAgICAnU2VydmljZVJlZ2lvbklkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlUmVnaW9uSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkZDOjpGdW5jdGlvbkludm9rZXJgLCB3aGljaCBpcyB1c2VkIHRvIGludm9rZSBhIGZ1bmN0aW9uLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBGdW5jdGlvbkludm9rZXJgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjLWZ1bmN0aW9uaW52b2tlclxuICovXG5leHBvcnQgY2xhc3MgUm9zRnVuY3Rpb25JbnZva2VyIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpGQzo6RnVuY3Rpb25JbnZva2VyXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlc3VsdDogRGVwZW5kcyBvbiByZXN1bHQgdHlwZTpcbk5vUmVzdWx0OiBBc3luYyBpbnZva2UgaGFzIG5vIHJlc3VsdC5cblN1Y2Nlc3M6IFRoZSByZXNwb25zZSBvZiB0aGUgZnVuY3Rpb24uIFRoZSByZXNwb25zZSBzaG91bGQgYmUgdXRmLTggZW5jb2RlZCBzdHJpbmcsIG90aGVyd2lzZSBST1Mgd2lsbCByZXBvcnQgYW4gZXJyb3IuIElmIHRoZSByZXNwb25zZSBpcyBiaW5hcnksIGVuY29kZSBpdCB2aWEgYmFzZTY0IGJlZm9yZSBpdCBpcyByZXR1cm5lZC5cbkZhaWx1cmU6IEVycm9yIE1lc3NhZ2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXN1bHQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzdWx0VHlwZTogUmVzdWx0IHR5cGU6XG5Ob1Jlc3VsdDogQXN5bmMgaW52b2tlIGhhcyBubyByZXN1bHQuXG5TdWNjZXNzOiBTeW5jIGludm9rZSBzdWNjZWVkcy5cbkZhaWx1cmU6IFN5bmMgaW52b2tlIGZhaWxzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzdWx0VHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIGZ1bmN0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhc3luYzogSW52b2NhdGlvbiB0eXBlLCBTeW5jIG9yIEFzeW5jLiBEZWZhdWx0cyB0byBTeW5jLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGVja0Vycm9yOiBXaGV0aGVyIGNoZWNrIGVycm9yIGZvciBmdW5jdGlvbiBpbnZvY2F0aW9uIHJlc3VsdC5cbiAgICAgKiBJZiBzZXQgdHJ1ZSBhbmQgZnVuY3Rpb24gaW52b2NhdGlvbiByZXN1bHQgaGFzIGVycm9yLCB0aGUgcmVzb3VyY2UgY3JlYXRpb24gd2lsbCBiZSByZWdhcmQgYXMgZmFpbGVkLlxuICAgICAqIERlZmF1bHQgaXMgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgY2hlY2tFcnJvcjogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBldmVudDogVGhpcyB2YWx1ZSBpcyBwYXNzZWQgdG8gZnVuY3Rpb24gYXMgdXRmLTggZW5jb2RlZCBzdHJpbmcuSXTigJlzIGZ1bmN0aW9u4oCZcyByZXNwb25zaWJpbGl0eSB0byBpbnRlcnByZXQgdGhlIHZhbHVlLlxuICAgICAqIElmIHRoZSB2YWx1ZSBuZWVkcyB0byBiZSBiaW5hcnksIGVuY29kZSBpdCB2aWEgYmFzZTY0IGJlZm9yZSBwYXNzaW5nIHRvIHRoaXMgcHJvcGVydHkuXG4gICAgICovXG4gICAgcHVibGljIGV2ZW50OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXhlY3V0ZVZlcnNpb246IElmIHRoZSBwcm9wZXJ0eSBpcyBub3Qgc3BlY2lmaWVkIGZvciBjcmVhdGlvbiBhbmQgdXBkYXRlLCB0aGUgZnVuY3Rpb24gd2lsbCBub3QgYmUgaW52b2tlZC4gVGhlIGNoYW5nZSBvZiB0aGUgcHJvcGVydHkgbGVhZHMgdG8gdGhlIGludm9rZSBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIGV4ZWN1dGVWZXJzaW9uOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcXVhbGlmaWVyOiBzZXJ2aWNlIHZlcnNpb24sIGNhbiBiZSB2ZXJzaW9uSWQgb3IgYWxpYXNOYW1lXG4gICAgICovXG4gICAgcHVibGljIHF1YWxpZmllcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VSZWdpb25JZDogV2hpY2ggcmVnaW9uIHNlcnZpY2UgYmVsb25ncyB0by5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZVJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRnVuY3Rpb25JbnZva2VyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NGdW5jdGlvbkludm9rZXIuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clJlc3VsdCA9IHRoaXMuZ2V0QXR0KCdSZXN1bHQnKTtcbiAgICAgICAgdGhpcy5hdHRyUmVzdWx0VHlwZSA9IHRoaXMuZ2V0QXR0KCdSZXN1bHRUeXBlJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZ1bmN0aW9uTmFtZSA9IHByb3BzLmZ1bmN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHByb3BzLnNlcnZpY2VOYW1lO1xuICAgICAgICB0aGlzLmFzeW5jID0gcHJvcHMuYXN5bmM7XG4gICAgICAgIHRoaXMuY2hlY2tFcnJvciA9IHByb3BzLmNoZWNrRXJyb3I7XG4gICAgICAgIHRoaXMuZXZlbnQgPSBwcm9wcy5ldmVudDtcbiAgICAgICAgdGhpcy5leGVjdXRlVmVyc2lvbiA9IHByb3BzLmV4ZWN1dGVWZXJzaW9uO1xuICAgICAgICB0aGlzLnF1YWxpZmllciA9IHByb3BzLnF1YWxpZmllcjtcbiAgICAgICAgdGhpcy5zZXJ2aWNlUmVnaW9uSWQgPSBwcm9wcy5zZXJ2aWNlUmVnaW9uSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiB0aGlzLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiB0aGlzLnNlcnZpY2VOYW1lLFxuICAgICAgICAgICAgYXN5bmM6IHRoaXMuYXN5bmMsXG4gICAgICAgICAgICBjaGVja0Vycm9yOiB0aGlzLmNoZWNrRXJyb3IsXG4gICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgICAgIGV4ZWN1dGVWZXJzaW9uOiB0aGlzLmV4ZWN1dGVWZXJzaW9uLFxuICAgICAgICAgICAgcXVhbGlmaWVyOiB0aGlzLnF1YWxpZmllcixcbiAgICAgICAgICAgIHNlcnZpY2VSZWdpb25JZDogdGhpcy5zZXJ2aWNlUmVnaW9uSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0Z1bmN0aW9uSW52b2tlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0xheWVyYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjLWxheWVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zTGF5ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29kZTogVGhlIGNvZGUgb2YgbGF5ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29kZTogUm9zTGF5ZXIuQ29kZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbXBhdGlibGVSdW50aW1lOiBUaGUgcnVudGltZSBlbnZpcm9ubWVudCBzdXBwb3J0ZWQgYnkgdGhlIGxheWVyLiBGb3IgZXhhbXBsZTpub2RlanMxMiwgbm9kZWpzMTAsIG5vZGVqczgsIG5vZGVqczYsIHB5dGhvbjMsIGFuZCBweXRob24yLjdcbiAgICAgKi9cbiAgICByZWFkb25seSBjb21wYXRpYmxlUnVudGltZTogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsYXllck5hbWU6IFRoZSBuYW1lIG9mIGxheWVyXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGF5ZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgbGF5ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zTGF5ZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTGF5ZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NMYXllclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGF0aWJsZVJ1bnRpbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29tcGF0aWJsZVJ1bnRpbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNvbXBhdGlibGVSdW50aW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuY29tcGF0aWJsZVJ1bnRpbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5jb21wYXRpYmxlUnVudGltZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBhdGlibGVSdW50aW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNvbXBhdGlibGVSdW50aW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21wYXRpYmxlUnVudGltZScsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuY29tcGF0aWJsZVJ1bnRpbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsYXllck5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubGF5ZXJOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5sYXllck5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5sYXllck5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5sYXllck5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsYXllck5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubGF5ZXJOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBpZihwcm9wZXJ0aWVzLmxheWVyTmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubGF5ZXJOYW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsYXllck5hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubGF5ZXJOYW1lLFxuICAgICAgICAgIHJlZzogL1thLXpBLVpdW19hLXpBLVowLTktXSsvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsYXllck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubGF5ZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb2RlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvZGUnLCBSb3NMYXllcl9Db2RlUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29kZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NMYXllclByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6TGF5ZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0xheWVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpMYXllcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NMYXllclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zTGF5ZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQ29kZSc6IHJvc0xheWVyQ29kZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvZGUpLFxuICAgICAgJ0NvbXBhdGlibGVSdW50aW1lJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29tcGF0aWJsZVJ1bnRpbWUpLFxuICAgICAgJ0xheWVyTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubGF5ZXJOYW1lKSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkZDOjpMYXllcmAsIHdoaWNoIGlzIHVzZWQgdG8gcHVibGlzaCBsYXllciB2ZXJzaW9ucy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgTGF5ZXJgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjLWxheWVyXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NMYXllciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RkM6OkxheWVyXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFybjogVGhlIG5hbWUgb2YgdGhlIGxheWVyIHJlc291cmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXJuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIExheWVyTmFtZTogVGhlIG5hbWUgb2YgbGF5ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxheWVyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWZXJzaW9uOiBUaGUgdmVyc2lvbiBvZiB0aGUgbGF5ZXIgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWZXJzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb2RlOiBUaGUgY29kZSBvZiBsYXllci5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29kZTogUm9zTGF5ZXIuQ29kZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbXBhdGlibGVSdW50aW1lOiBUaGUgcnVudGltZSBlbnZpcm9ubWVudCBzdXBwb3J0ZWQgYnkgdGhlIGxheWVyLiBGb3IgZXhhbXBsZTpub2RlanMxMiwgbm9kZWpzMTAsIG5vZGVqczgsIG5vZGVqczYsIHB5dGhvbjMsIGFuZCBweXRob24yLjdcbiAgICAgKi9cbiAgICBwdWJsaWMgY29tcGF0aWJsZVJ1bnRpbWU6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGF5ZXJOYW1lOiBUaGUgbmFtZSBvZiBsYXllclxuICAgICAqL1xuICAgIHB1YmxpYyBsYXllck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBsYXllci5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NMYXllclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTGF5ZXIuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFybiA9IHRoaXMuZ2V0QXR0KCdBcm4nKTtcbiAgICAgICAgdGhpcy5hdHRyTGF5ZXJOYW1lID0gdGhpcy5nZXRBdHQoJ0xheWVyTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJWZXJzaW9uID0gdGhpcy5nZXRBdHQoJ1ZlcnNpb24nKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY29kZSA9IHByb3BzLmNvZGU7XG4gICAgICAgIHRoaXMuY29tcGF0aWJsZVJ1bnRpbWUgPSBwcm9wcy5jb21wYXRpYmxlUnVudGltZTtcbiAgICAgICAgdGhpcy5sYXllck5hbWUgPSBwcm9wcy5sYXllck5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICAgICAgICBjb21wYXRpYmxlUnVudGltZTogdGhpcy5jb21wYXRpYmxlUnVudGltZSxcbiAgICAgICAgICAgIGxheWVyTmFtZTogdGhpcy5sYXllck5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zTGF5ZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NMYXllciB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ29kZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB6aXBGaWxlOiBUaGUgZnVuY3Rpb24gY29kZSB0aGF0IGlzIGVuY29kZWQgaW4gQmFzZTY0LiBcbiAgICAgKiBQcmlvcml0eTogWmlwRmlsZSA+IE9zc0J1Y2tldE5hbWUmT3NzT2JqZWN0TmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHppcEZpbGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3NzT2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIE9TUyBvYmplY3QgdGhhdCBzdG9yZXMgdGhlIFpJUCBwYWNrYWdlIG9mIHRoZSBmdW5jdGlvbiBjb2RlLiBcbiAgICAgKiBQcmlvcml0eTogWmlwRmlsZSA+IE9zc0J1Y2tldE5hbWUmT3NzT2JqZWN0TmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9zc09iamVjdE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3NzQnVja2V0TmFtZTogVGhlIG5hbWUgb2YgdGhlIE9iamVjdCBTdG9yYWdlIFNlcnZpY2UgKE9TUykgYnVja2V0IHRoYXQgXG4gICAgICogc3RvcmVzIHRoZSBaSVAgcGFja2FnZSBvZiB0aGUgZnVuY3Rpb24gY29kZS5cbiAgICAgKiBQcmlvcml0eTogWmlwRmlsZSA+IE9zc0J1Y2tldE5hbWUmT3NzT2JqZWN0TmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG9zc0J1Y2tldE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDb2RlUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvZGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NMYXllcl9Db2RlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd6aXBGaWxlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnppcEZpbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29zc09iamVjdE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3NzT2JqZWN0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3NzQnVja2V0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vc3NCdWNrZXROYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNvZGVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkxheWVyLkNvZGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvZGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkxheWVyLkNvZGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTGF5ZXJDb2RlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0xheWVyX0NvZGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdaaXBGaWxlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy56aXBGaWxlKSxcbiAgICAgICdPc3NPYmplY3ROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vc3NPYmplY3ROYW1lKSxcbiAgICAgICdPc3NCdWNrZXROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vc3NCdWNrZXROYW1lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1Byb3Zpc2lvbkNvbmZpZ2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy1wcm92aXNpb25jb25maWdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NQcm92aXNpb25Db25maWdQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcXVhbGlmaWVyOiBTZXJ2aWNlJ3MgYWxpYXMuXG4gICAgICogRXhhbXBsZSA6IFwiTEFURVNUXCJcbiAgICAgKi9cbiAgICByZWFkb25seSBxdWFsaWZpZXI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXQ6IE51bWJlciBvZiBwcm92aXNpb25cbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NQcm92aXNpb25Db25maWdQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUHJvdmlzaW9uQ29uZmlnUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUHJvdmlzaW9uQ29uZmlnUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGFyZ2V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGFyZ2V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VydmljZU5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2VydmljZU5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdxdWFsaWZpZXInLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucXVhbGlmaWVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdxdWFsaWZpZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucXVhbGlmaWVyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1Byb3Zpc2lvbkNvbmZpZ1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6UHJvdmlzaW9uQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQcm92aXNpb25Db25maWdQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlByb3Zpc2lvbkNvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NQcm92aXNpb25Db25maWdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1Byb3Zpc2lvbkNvbmZpZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdGdW5jdGlvbk5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSksXG4gICAgICAnUXVhbGlmaWVyJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5xdWFsaWZpZXIpLFxuICAgICAgJ1NlcnZpY2VOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICAnVGFyZ2V0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkZDOjpQcm92aXNpb25Db25maWdgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBwcm92aXNpb25lZCBpbnN0YW5jZXMgaW4gRnVuY3Rpb24gQ29tcHV0ZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgUHJvdmlzaW9uQ29uZmlnYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy1wcm92aXNpb25jb25maWdcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1Byb3Zpc2lvbkNvbmZpZyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RkM6OlByb3Zpc2lvbkNvbmZpZ1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBGdW5jdGlvbk5hbWU6IFRoZSBmdW5jdGlvbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGdW5jdGlvbk5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUXVhbGlmaWVyOiBUaGUgc2VydmljZSBhbGlhc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUXVhbGlmaWVyOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlc291cmNlOiBUaGUgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNlcnZpY2VOYW1lOiBUaGUgc2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUYXJnZXQ6IE51bWJlciBvZiBwcm92aXNpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhcmdldDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIGZ1bmN0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHF1YWxpZmllcjogU2VydmljZSdzIGFsaWFzLlxuICAgICAqIEV4YW1wbGUgOiBcIkxBVEVTVFwiXG4gICAgICovXG4gICAgcHVibGljIHF1YWxpZmllcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXQ6IE51bWJlciBvZiBwcm92aXNpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFyZ2V0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUHJvdmlzaW9uQ29uZmlnUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NQcm92aXNpb25Db25maWcuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckZ1bmN0aW9uTmFtZSA9IHRoaXMuZ2V0QXR0KCdGdW5jdGlvbk5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyUXVhbGlmaWVyID0gdGhpcy5nZXRBdHQoJ1F1YWxpZmllcicpO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZSA9IHRoaXMuZ2V0QXR0KCdSZXNvdXJjZScpO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlTmFtZSA9IHRoaXMuZ2V0QXR0KCdTZXJ2aWNlTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJUYXJnZXQgPSB0aGlzLmdldEF0dCgnVGFyZ2V0Jyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZ1bmN0aW9uTmFtZSA9IHByb3BzLmZ1bmN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5xdWFsaWZpZXIgPSBwcm9wcy5xdWFsaWZpZXI7XG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBwcm9wcy5zZXJ2aWNlTmFtZTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBwcm9wcy50YXJnZXQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiB0aGlzLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHF1YWxpZmllcjogdGhpcy5xdWFsaWZpZXIsXG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1Byb3Zpc2lvbkNvbmZpZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1NlcnZpY2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtc2VydmljZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1NlcnZpY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsZXRpb25Gb3JjZTogV2hldGhlciBmb3JjZSBkZWxldGUgdGhlIHNlcnZpY2Ugd2l0aG91dCB3YWl0aW5nIGZvciBuZXR3b3JrIGludGVyZmFjZXMgdG8gYmUgY2xlYW5lZCB1cCBpZiBWcGNDb25maWcgaXMgc3BlY2lmaWVkLiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uRm9yY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBTZXJ2aWNlIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRBY2Nlc3M6IFNldCBpdCB0byB0cnVlIHRvIGVuYWJsZSBJbnRlcm5ldCBhY2Nlc3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRBY2Nlc3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ0NvbmZpZzogTG9nIGNvbmZpZ3VyYXRpb24uIEZ1bmN0aW9uIENvbXB1dGUgcHVzaGVzIGZ1bmN0aW9uIGV4ZWN1dGlvbiBsb2dzIHRvIHRoZSBjb25maWd1cmVkIGxvZyBzdG9yZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dDb25maWc/OiBSb3NTZXJ2aWNlLkxvZ0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hc0NvbmZpZzogTkFTIGNvbmZpZ3VyYXRpb24uIEZ1bmN0aW9uIENvbXB1dGUgdXNlcyBhIHNwZWNpZmllZCBOQVMgY29uZmlndXJlZCBvbiB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYXNDb25maWc/OiBSb3NTZXJ2aWNlLk5hc0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9zc01vdW50Q29uZmlnOiBUaGUgT1NTIG1vdW50IGNvbmZpZ3VyYXRpb25zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9zc01vdW50Q29uZmlnPzogUm9zU2VydmljZS5Pc3NNb3VudENvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvbGU6IFRoZSByb2xlIGdyYW50cyBGdW5jdGlvbiBDb21wdXRlIHRoZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyB1c2Vy4oCZcyBjbG91ZCByZXNvdXJjZXMsIHN1Y2ggYXMgcHVzaGluZyBsb2dzIHRvIHVzZXLigJlzIGxvZyBzdG9yZS4gVGhlIHRlbXBvcmFyeSBTVFMgdG9rZW4gZ2VuZXJhdGVkIGZyb20gdGhpcyByb2xlIGNhbiBiZSByZXRyaWV2ZWQgZnJvbSBmdW5jdGlvbiBjb250ZXh0IGFuZCB1c2VkIHRvIGFjY2VzcyBjbG91ZCByZXNvdXJjZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm9sZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBzZXJ2aWNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIHNlcnZpY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zU2VydmljZS5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFjaW5nQ29uZmlnOiBUaGUgVHJhY2luZyBBbmFseXNpcyBjb25maWd1cmF0aW9uLiBBZnRlciBGdW5jdGlvbiBDb21wdXRlIGludGVncmF0ZXMgd2l0aCBUcmFjaW5nIEFuYWx5c2lzLCB5b3UgY2FuIHJlY29yZCB0aGUgc3RheSB0aW1lIG9mIGEgcmVxdWVzdCBpbiBGdW5jdGlvbiBDb21wdXRlLCB2aWV3IHRoZSBjb2xkIHN0YXJ0IHRpbWUgZm9yIGEgZnVuY3Rpb24sIGFuZCByZWNvcmQgdGhlIGV4ZWN1dGlvbiB0aW1lIG9mIGEgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhY2luZ0NvbmZpZz86IFJvc1NlcnZpY2UuVHJhY2luZ0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0JpbmRpbmdzOiBGdW5jdGlvbiBJbnZvY2F0aW9uIG9ubHkgYnkgU3BlY2lmaWVkIFZQQ3MuIFxuICAgICAqIEJ5IGRlZmF1bHQsIHlvdSBjYW4gaW52b2tlIHRoZSBmdW5jdGlvbiBieSB1c2luZyB0aGUgSW50ZXJuZXQgZW5kcG9pbnQgYW5kIGludGVybmFsIGVuZHBvaW50IGFmdGVyIGEgZnVuY3Rpb24gaXMgY3JlYXRlZC4gSWYgeW91IHdhbnQgdGhlIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25seSBieSB1c2luZyBzcGVjaWZpZWQgVlBDcywgYnV0IG5vdCB0aGUgSW50ZXJuZXQgZW5kcG9pbnQgb3IgaW50ZXJuYWwgZW5kcG9pbnQsIHlvdSBtdXN0IGJpbmQgdGhlIHNwZWNpZmllZCBWUENzIHRvIHRoZSBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0JpbmRpbmdzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNDb25maWc6IFZQQyBjb25maWd1cmF0aW9uLiBGdW5jdGlvbiBDb21wdXRlIHVzZXMgdGhlIGNvbmZpZyB0byBzZXR1cCBFTkkgaW4gdGhlIHNwZWNpZmljIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNDb25maWc/OiBSb3NTZXJ2aWNlLlZwY0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1NlcnZpY2VQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU2VydmljZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlcnZpY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvbGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucm9sZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJuZXRBY2Nlc3MnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmludGVybmV0QWNjZXNzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsZXRpb25Gb3JjZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZGVsZXRpb25Gb3JjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhY2luZ0NvbmZpZycsIFJvc1NlcnZpY2VfVHJhY2luZ0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRyYWNpbmdDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0NvbmZpZycsIFJvc1NlcnZpY2VfVnBjQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMudnBjQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VydmljZU5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2VydmljZU5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvc3NNb3VudENvbmZpZycsIFJvc1NlcnZpY2VfT3NzTW91bnRDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5vc3NNb3VudENvbmZpZykpO1xuICAgIGlmKHByb3BlcnRpZXMudnBjQmluZGluZ3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy52cGNCaW5kaW5ncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnZwY0JpbmRpbmdzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjQmluZGluZ3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudnBjQmluZGluZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNCaW5kaW5ncycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMudnBjQmluZGluZ3MpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZ3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YWdzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFncykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFncy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MubGlzdFZhbGlkYXRvcihSb3NTZXJ2aWNlX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMudGFncykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFzQ29uZmlnJywgUm9zU2VydmljZV9OYXNDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5uYXNDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ0NvbmZpZycsIFJvc1NlcnZpY2VfTG9nQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubG9nQ29uZmlnKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NlcnZpY2VQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2VgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NlcnZpY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2VgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VydmljZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU2VydmljZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdTZXJ2aWNlTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZU5hbWUpLFxuICAgICAgJ0RlbGV0aW9uRm9yY2UnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxldGlvbkZvcmNlKSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgJ0ludGVybmV0QWNjZXNzJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRBY2Nlc3MpLFxuICAgICAgJ0xvZ0NvbmZpZyc6IHJvc1NlcnZpY2VMb2dDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dDb25maWcpLFxuICAgICAgJ05hc0NvbmZpZyc6IHJvc1NlcnZpY2VOYXNDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYXNDb25maWcpLFxuICAgICAgJ09zc01vdW50Q29uZmlnJzogcm9zU2VydmljZU9zc01vdW50Q29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3NzTW91bnRDb25maWcpLFxuICAgICAgJ1JvbGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvbGUpLFxuICAgICAgJ1RhZ3MnOiByb3MubGlzdE1hcHBlcihyb3NTZXJ2aWNlVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICAgICdUcmFjaW5nQ29uZmlnJzogcm9zU2VydmljZVRyYWNpbmdDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50cmFjaW5nQ29uZmlnKSxcbiAgICAgICdWcGNCaW5kaW5ncyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnZwY0JpbmRpbmdzKSxcbiAgICAgICdWcGNDb25maWcnOiByb3NTZXJ2aWNlVnBjQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjQ29uZmlnKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpGQzo6U2VydmljZWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgc2VydmljZSBpbiBGdW5jdGlvbiBDb21wdXRlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBTZXJ2aWNlYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy1zZXJ2aWNlXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NTZXJ2aWNlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpGQzo6U2VydmljZVwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnRlcm5ldEFjY2VzczogV2hldGhlciBlbmFibGUgSW50ZXJuZXQgYWNjZXNzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnRlcm5ldEFjY2Vzczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBMb2dQcm9qZWN0OiBMb2cgcHJvamVjdCBvZiBzZXJ2aWNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2dQcm9qZWN0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIExvZ3N0b3JlOiBMb2cgc3RvcmUgb2Ygc2VydmljZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9nc3RvcmU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUm9sZTogUm9sZSBvZiBzZXJ2aWNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb2xlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNlcnZpY2VJZDogVGhlIHNlcnZpY2UgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlTmFtZTogVGhlIHNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVGFnczogVGFncyBvZiBzZXJ2aWNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYWdzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZwY0lkOiBWUEMgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsZXRpb25Gb3JjZTogV2hldGhlciBmb3JjZSBkZWxldGUgdGhlIHNlcnZpY2Ugd2l0aG91dCB3YWl0aW5nIGZvciBuZXR3b3JrIGludGVyZmFjZXMgdG8gYmUgY2xlYW5lZCB1cCBpZiBWcGNDb25maWcgaXMgc3BlY2lmaWVkLiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGlvbkZvcmNlOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBTZXJ2aWNlIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRBY2Nlc3M6IFNldCBpdCB0byB0cnVlIHRvIGVuYWJsZSBJbnRlcm5ldCBhY2Nlc3MuXG4gICAgICovXG4gICAgcHVibGljIGludGVybmV0QWNjZXNzOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ0NvbmZpZzogTG9nIGNvbmZpZ3VyYXRpb24uIEZ1bmN0aW9uIENvbXB1dGUgcHVzaGVzIGZ1bmN0aW9uIGV4ZWN1dGlvbiBsb2dzIHRvIHRoZSBjb25maWd1cmVkIGxvZyBzdG9yZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nQ29uZmlnOiBSb3NTZXJ2aWNlLkxvZ0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hc0NvbmZpZzogTkFTIGNvbmZpZ3VyYXRpb24uIEZ1bmN0aW9uIENvbXB1dGUgdXNlcyBhIHNwZWNpZmllZCBOQVMgY29uZmlndXJlZCBvbiB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFzQ29uZmlnOiBSb3NTZXJ2aWNlLk5hc0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9zc01vdW50Q29uZmlnOiBUaGUgT1NTIG1vdW50IGNvbmZpZ3VyYXRpb25zLlxuICAgICAqL1xuICAgIHB1YmxpYyBvc3NNb3VudENvbmZpZzogUm9zU2VydmljZS5Pc3NNb3VudENvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvbGU6IFRoZSByb2xlIGdyYW50cyBGdW5jdGlvbiBDb21wdXRlIHRoZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyB1c2Vy4oCZcyBjbG91ZCByZXNvdXJjZXMsIHN1Y2ggYXMgcHVzaGluZyBsb2dzIHRvIHVzZXLigJlzIGxvZyBzdG9yZS4gVGhlIHRlbXBvcmFyeSBTVFMgdG9rZW4gZ2VuZXJhdGVkIGZyb20gdGhpcyByb2xlIGNhbiBiZSByZXRyaWV2ZWQgZnJvbSBmdW5jdGlvbiBjb250ZXh0IGFuZCB1c2VkIHRvIGFjY2VzcyBjbG91ZCByZXNvdXJjZXMuXG4gICAgICovXG4gICAgcHVibGljIHJvbGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBzZXJ2aWNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIHNlcnZpY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnczogUm9zU2VydmljZS5UYWdzUHJvcGVydHlbXSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFjaW5nQ29uZmlnOiBUaGUgVHJhY2luZyBBbmFseXNpcyBjb25maWd1cmF0aW9uLiBBZnRlciBGdW5jdGlvbiBDb21wdXRlIGludGVncmF0ZXMgd2l0aCBUcmFjaW5nIEFuYWx5c2lzLCB5b3UgY2FuIHJlY29yZCB0aGUgc3RheSB0aW1lIG9mIGEgcmVxdWVzdCBpbiBGdW5jdGlvbiBDb21wdXRlLCB2aWV3IHRoZSBjb2xkIHN0YXJ0IHRpbWUgZm9yIGEgZnVuY3Rpb24sIGFuZCByZWNvcmQgdGhlIGV4ZWN1dGlvbiB0aW1lIG9mIGEgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIHRyYWNpbmdDb25maWc6IFJvc1NlcnZpY2UuVHJhY2luZ0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0JpbmRpbmdzOiBGdW5jdGlvbiBJbnZvY2F0aW9uIG9ubHkgYnkgU3BlY2lmaWVkIFZQQ3MuIFxuICAgICAqIEJ5IGRlZmF1bHQsIHlvdSBjYW4gaW52b2tlIHRoZSBmdW5jdGlvbiBieSB1c2luZyB0aGUgSW50ZXJuZXQgZW5kcG9pbnQgYW5kIGludGVybmFsIGVuZHBvaW50IGFmdGVyIGEgZnVuY3Rpb24gaXMgY3JlYXRlZC4gSWYgeW91IHdhbnQgdGhlIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25seSBieSB1c2luZyBzcGVjaWZpZWQgVlBDcywgYnV0IG5vdCB0aGUgSW50ZXJuZXQgZW5kcG9pbnQgb3IgaW50ZXJuYWwgZW5kcG9pbnQsIHlvdSBtdXN0IGJpbmQgdGhlIHNwZWNpZmllZCBWUENzIHRvIHRoZSBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyB2cGNCaW5kaW5nczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNDb25maWc6IFZQQyBjb25maWd1cmF0aW9uLiBGdW5jdGlvbiBDb21wdXRlIHVzZXMgdGhlIGNvbmZpZyB0byBzZXR1cCBFTkkgaW4gdGhlIHNwZWNpZmljIFZQQy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdnBjQ29uZmlnOiBSb3NTZXJ2aWNlLlZwY0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1NlcnZpY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1NlcnZpY2UuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckludGVybmV0QWNjZXNzID0gdGhpcy5nZXRBdHQoJ0ludGVybmV0QWNjZXNzJyk7XG4gICAgICAgIHRoaXMuYXR0ckxvZ1Byb2plY3QgPSB0aGlzLmdldEF0dCgnTG9nUHJvamVjdCcpO1xuICAgICAgICB0aGlzLmF0dHJMb2dzdG9yZSA9IHRoaXMuZ2V0QXR0KCdMb2dzdG9yZScpO1xuICAgICAgICB0aGlzLmF0dHJSb2xlID0gdGhpcy5nZXRBdHQoJ1JvbGUnKTtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZUlkID0gdGhpcy5nZXRBdHQoJ1NlcnZpY2VJZCcpO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlTmFtZSA9IHRoaXMuZ2V0QXR0KCdTZXJ2aWNlTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJUYWdzID0gdGhpcy5nZXRBdHQoJ1RhZ3MnKTtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSB0aGlzLmdldEF0dCgnVnBjSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBwcm9wcy5zZXJ2aWNlTmFtZTtcbiAgICAgICAgdGhpcy5kZWxldGlvbkZvcmNlID0gcHJvcHMuZGVsZXRpb25Gb3JjZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmludGVybmV0QWNjZXNzID0gcHJvcHMuaW50ZXJuZXRBY2Nlc3M7XG4gICAgICAgIHRoaXMubG9nQ29uZmlnID0gcHJvcHMubG9nQ29uZmlnO1xuICAgICAgICB0aGlzLm5hc0NvbmZpZyA9IHByb3BzLm5hc0NvbmZpZztcbiAgICAgICAgdGhpcy5vc3NNb3VudENvbmZpZyA9IHByb3BzLm9zc01vdW50Q29uZmlnO1xuICAgICAgICB0aGlzLnJvbGUgPSBwcm9wcy5yb2xlO1xuICAgICAgICB0aGlzLnRhZ3MgPSBwcm9wcy50YWdzO1xuICAgICAgICB0aGlzLnRyYWNpbmdDb25maWcgPSBwcm9wcy50cmFjaW5nQ29uZmlnO1xuICAgICAgICB0aGlzLnZwY0JpbmRpbmdzID0gcHJvcHMudnBjQmluZGluZ3M7XG4gICAgICAgIHRoaXMudnBjQ29uZmlnID0gcHJvcHMudnBjQ29uZmlnO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiB0aGlzLnNlcnZpY2VOYW1lLFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogdGhpcy5kZWxldGlvbkZvcmNlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbnRlcm5ldEFjY2VzczogdGhpcy5pbnRlcm5ldEFjY2VzcyxcbiAgICAgICAgICAgIGxvZ0NvbmZpZzogdGhpcy5sb2dDb25maWcsXG4gICAgICAgICAgICBuYXNDb25maWc6IHRoaXMubmFzQ29uZmlnLFxuICAgICAgICAgICAgb3NzTW91bnRDb25maWc6IHRoaXMub3NzTW91bnRDb25maWcsXG4gICAgICAgICAgICByb2xlOiB0aGlzLnJvbGUsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgICAgICB0cmFjaW5nQ29uZmlnOiB0aGlzLnRyYWNpbmdDb25maWcsXG4gICAgICAgICAgICB2cGNCaW5kaW5nczogdGhpcy52cGNCaW5kaW5ncyxcbiAgICAgICAgICAgIHZwY0NvbmZpZzogdGhpcy52cGNDb25maWcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1NlcnZpY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHJvamVjdDogVGhlIHByb2plY3QgbmFtZSBvZiBMb2dzIHNlcnZpY2VcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByb2plY3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbG9nQmVnaW5SdWxlOiBUaGUgbG9nIHJvdGF0aW9uIHJ1bGUuIExvZyBhcmUgc3BsaXQgYmFzZWQgb24gdGhlIHJ1bGUuIFRoZSBsb2cgYmxvY2tzIG9idGFpbmVkIGFmdGVyIHRoZSBzcGxpdHRpbmcgYXJlIHdyaXR0ZW4gdG8gTG9nIFNlcnZpY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBOb25lOiBkaXNhYmxlcyB0aGUgbG9nIHNwbGl0dGluZyBydWxlLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAqIERlZmF1bHRSZWdleDogc2V0cyB0aGUgbG9nIHNwbGl0dGluZyBydWxlIHRvIHRoZSBkZWZhdWx0IHJlZ3VsYXIgZXhwcmVzc2lvbi4gSWYgeW91IHNldCB0aGlzIHBhcmFtZXRlciB0byBEZWZhdWx0UmVnZXgsIGxvZ3MgYXJlIHNwbGl0IGJhc2VkIG9uIHRoZSBkYXRhIGluIGEgbG9nLiBGb3IgZXhhbXBsZSwgdGhlIGxpbmUgdGhhdCBjb250YWlucyAyMDIxLTEwLTEwIGluIHRoZSBsb2cgaXMgY29uc2lkZXJlZCBhcyB0aGUgZmlyc3QgbGluZSBvZiBhIGxvZyBibG9jay4gVGhlIGZpcnN0IGxpbmUgYW5kIHRoZSBmb2xsb3dpbmcgY29uc2VjdXRpdmUgbGluZXMgdGhhdCBkbyBub3QgY29udGFpbiBkYXRlcyBpbiB0aGUgbG9nIGFyZSB3cml0dGVuIHRvIExvZyBTZXJ2aWNlIGFzIGEgd2hvbGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBsb2dCZWdpblJ1bGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbG9nc3RvcmU6IFRoZSBsb2cgc3RvcmUgbmFtZSBvZiBMb2dzIHNlcnZpY2VcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvZ3N0b3JlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVuYWJsZVJlcXVlc3RNZXRyaWNzOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgdGhlIHJlcXVlc3QtbGV2ZWwgbWV0cmljcy4gSWYgeW91IGVuYWJsZSB0aGlzIGZlYXR1cmUsIHlvdSBjYW4gdmlldyB0aGUgdGltZSBhbmQgbWVtb3J5IHRoYXQgYXJlIGNvbnN1bWVkIGZvciBhIHNwZWNpZmljIGludm9jYXRpb24gb2YgZWFjaCBmdW5jdGlvbiBpbiB0aGUgc2VydmljZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGZhbHNlOiBkaXNhYmxlcyByZXF1ZXN0LWxldmVsIG1ldHJpY3MuXG4gICAgICogdHJ1ZTogZW5hYmxlcyByZXF1ZXN0LWxldmVsIG1ldHJpY3MuIERlZmF1bHQgdmFsdWU6IHRydWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlbmFibGVSZXF1ZXN0TWV0cmljcz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBMb2dDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTG9nQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2VydmljZV9Mb2dDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3QnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvamVjdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nQmVnaW5SdWxlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvZ0JlZ2luUnVsZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nc3RvcmUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9nc3RvcmUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZVJlcXVlc3RNZXRyaWNzJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVSZXF1ZXN0TWV0cmljcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJMb2dDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2UuTG9nQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBMb2dDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2UuTG9nQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlcnZpY2VMb2dDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zU2VydmljZV9Mb2dDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQcm9qZWN0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm9qZWN0KSxcbiAgICAgICdMb2dCZWdpblJ1bGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ0JlZ2luUnVsZSksXG4gICAgICAnTG9nc3RvcmUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ3N0b3JlKSxcbiAgICAgICdFbmFibGVSZXF1ZXN0TWV0cmljcyc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZVJlcXVlc3RNZXRyaWNzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1NlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1vdW50UG9pbnRzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNlcnZlckFkZHI6IFRoZSBhZGRyZXNzIG9mIE5BUyBpbnN0YW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNlcnZlckFkZHI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtb3VudERpcjogQSBsb2NhbCBtb3VudCBwb2ludC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1vdW50RGlyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBNb3VudFBvaW50c1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNb3VudFBvaW50c1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlcnZpY2VfTW91bnRQb2ludHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlckFkZHInLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmVyQWRkcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmVyQWRkcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2ZXJBZGRyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb3VudERpcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tb3VudERpcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnREaXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW91bnREaXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTW91bnRQb2ludHNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2UuTW91bnRQb2ludHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1vdW50UG9pbnRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLk1vdW50UG9pbnRzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlcnZpY2VNb3VudFBvaW50c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTZXJ2aWNlX01vdW50UG9pbnRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnU2VydmVyQWRkcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmVyQWRkciksXG4gICAgICAnTW91bnREaXInOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1vdW50RGlyKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1NlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE5hc0NvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtb3VudFBvaW50czogTW91bnQgcG9pbnRzXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtb3VudFBvaW50czogQXJyYXk8Um9zU2VydmljZS5Nb3VudFBvaW50c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB1c2VySWQ6IFVzZXIgSURcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHVzZXJJZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGdyb3VwSWQ6IEdyb3VwIElEXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBncm91cElkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBOYXNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTmFzQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2VydmljZV9OYXNDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vdW50UG9pbnRzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm1vdW50UG9pbnRzKSk7XG4gICAgaWYocHJvcGVydGllcy5tb3VudFBvaW50cyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm1vdW50UG9pbnRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubW91bnRQb2ludHMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb3VudFBvaW50cycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tb3VudFBvaW50cy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnRQb2ludHMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NTZXJ2aWNlX01vdW50UG9pbnRzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLm1vdW50UG9pbnRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1c2VySWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudXNlcklkKSk7XG4gICAgaWYocHJvcGVydGllcy51c2VySWQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnVzZXJJZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlcklkJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudXNlcklkLFxuICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgIG1heDogNjU1MzQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJJZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy51c2VySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZ3JvdXBJZCAmJiAodHlwZW9mIHByb3BlcnRpZXMuZ3JvdXBJZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmdyb3VwSWQsXG4gICAgICAgICAgICBtaW46IC0xLFxuICAgICAgICAgICAgbWF4OiA2NTUzNCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk5hc0NvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZS5OYXNDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5hc0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZS5OYXNDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VydmljZU5hc0NvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTZXJ2aWNlX05hc0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ01vdW50UG9pbnRzJzogcm9zLmxpc3RNYXBwZXIocm9zU2VydmljZU1vdW50UG9pbnRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLm1vdW50UG9pbnRzKSxcbiAgICAgICdVc2VySWQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZXJJZCksXG4gICAgICAnR3JvdXBJZCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBJZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBPc3NNb3VudENvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtb3VudFBvaW50czogVGhlIE9TUyBtb3VudCBwb2ludCBjb25maWd1cmF0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1vdW50UG9pbnRzOiBBcnJheTxSb3NTZXJ2aWNlLk9zc01vdW50Q29uZmlnTW91bnRQb2ludHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBPc3NNb3VudENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBPc3NNb3VudENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlcnZpY2VfT3NzTW91bnRDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vdW50UG9pbnRzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm1vdW50UG9pbnRzKSk7XG4gICAgaWYocHJvcGVydGllcy5tb3VudFBvaW50cyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm1vdW50UG9pbnRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubW91bnRQb2ludHMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb3VudFBvaW50cycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tb3VudFBvaW50cy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnRQb2ludHMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NTZXJ2aWNlX09zc01vdW50Q29uZmlnTW91bnRQb2ludHNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMubW91bnRQb2ludHMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiT3NzTW91bnRDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2UuT3NzTW91bnRDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE9zc01vdW50Q29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLk9zc01vdW50Q29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlcnZpY2VPc3NNb3VudENvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTZXJ2aWNlX09zc01vdW50Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnTW91bnRQb2ludHMnOiByb3MubGlzdE1hcHBlcihyb3NTZXJ2aWNlT3NzTW91bnRDb25maWdNb3VudFBvaW50c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5tb3VudFBvaW50cyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBPc3NNb3VudENvbmZpZ01vdW50UG9pbnRzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlYWRPbmx5OiBXaGV0aGVyIHRoZSBvc3MgYnVja2V0IGlzIHJlYWQtb25seVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVhZE9ubHk6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYnVja2V0TmFtZTogbW91bnQgT1NTIGJ1Y2tldCBuYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYnVja2V0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGJ1Y2tldFBhdGg6IFBhdGggb2YgdGhlIG1vdW50ZWQgT1NTIEJ1Y2tldC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGJ1Y2tldFBhdGg6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBlbmRQb2ludDogT1NTIGFjY2VzcyBhZGRyZXNzLFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW5kUG9pbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtb3VudERpcjogQSBsb2NhbCBtb3VudCBwb2ludC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1vdW50RGlyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBPc3NNb3VudENvbmZpZ01vdW50UG9pbnRzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE9zc01vdW50Q29uZmlnTW91bnRQb2ludHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZXJ2aWNlX09zc01vdW50Q29uZmlnTW91bnRQb2ludHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlYWRPbmx5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlYWRPbmx5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWFkT25seScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMucmVhZE9ubHkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYnVja2V0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5idWNrZXROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXRQYXRoJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJ1Y2tldFBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldFBhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYnVja2V0UGF0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5kUG9pbnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZW5kUG9pbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuZFBvaW50Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVuZFBvaW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb3VudERpcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tb3VudERpcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnREaXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW91bnREaXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiT3NzTW91bnRDb25maWdNb3VudFBvaW50c1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZS5Pc3NNb3VudENvbmZpZ01vdW50UG9pbnRzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBPc3NNb3VudENvbmZpZ01vdW50UG9pbnRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLk9zc01vdW50Q29uZmlnTW91bnRQb2ludHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VydmljZU9zc01vdW50Q29uZmlnTW91bnRQb2ludHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zU2VydmljZV9Pc3NNb3VudENvbmZpZ01vdW50UG9pbnRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUmVhZE9ubHknOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWFkT25seSksXG4gICAgICAnQnVja2V0TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYnVja2V0TmFtZSksXG4gICAgICAnQnVja2V0UGF0aCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYnVja2V0UGF0aCksXG4gICAgICAnRW5kUG9pbnQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuZFBvaW50KSxcbiAgICAgICdNb3VudERpcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubW91bnREaXIpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGFnc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXk6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZXJ2aWNlX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlRhZ3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2UuVGFnc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZS5UYWdzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlcnZpY2VUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1NlcnZpY2VfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICAnS2V5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhY2luZ0NvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBUaGUgdHlwZSBvZiB0aGUgdHJhY2luZyBhbmFseXNpcyBzeXN0ZW0uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0eXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhcmFtczogVGhlIHRyYWNpbmcgYW5hbHlzaXMgcGFyYW1ldGVycy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFRyYWNpbmdDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVHJhY2luZ0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlcnZpY2VfVHJhY2luZ0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXJhbXMnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnBhcmFtcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUcmFjaW5nQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLlRyYWNpbmdDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRyYWNpbmdDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2UuVHJhY2luZ0NvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZXJ2aWNlVHJhY2luZ0NvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTZXJ2aWNlX1RyYWNpbmdDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50eXBlKSxcbiAgICAgICdQYXJhbXMnOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5wYXJhbXMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVnBjQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZwY0lkOiBWUEMgSURcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgem9uZUlkOiBab25lIElkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB6b25lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdlN3aXRjaElkczogTGlzdCBvZiBWU3dpdGNoIElEc1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdlN3aXRjaElkczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFNlY3VyaXR5IGdyb3VwIElEXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFZwY0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBWcGNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZXJ2aWNlX1ZwY0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd6b25lSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuem9uZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2U3dpdGNoSWRzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZTd2l0Y2hJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnZTd2l0Y2hJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlY3VyaXR5R3JvdXBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZWN1cml0eUdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlY3VyaXR5R3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZWN1cml0eUdyb3VwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVnBjQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLlZwY0NvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVnBjQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLlZwY0NvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZXJ2aWNlVnBjQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1NlcnZpY2VfVnBjQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVnBjSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZwY0lkKSxcbiAgICAgICdab25lSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnpvbmVJZCksXG4gICAgICAnVlN3aXRjaElkcyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnZTd2l0Y2hJZHMpLFxuICAgICAgJ1NlY3VyaXR5R3JvdXBJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VjdXJpdHlHcm91cElkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1RyaWdnZXJgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtdHJpZ2dlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1RyaWdnZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZ1bmN0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmlnZ2VyQ29uZmlnOiBFdmVudCBzb3VyY2Ugc3BlY2lmaWMgdHJpZ2dlciBjb25maWd1cmF0aW9uLiBUaGUgdmFsdWUgaXMgZGlmZmVyZW50IGFjY29yZGluZyB0byB0cmlnZ2VyIHR5cGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJpZ2dlckNvbmZpZzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyaWdnZXJOYW1lOiBUcmlnZ2VyIG5hbWUuXG4gICAgICogRXhhbXBsZSA6IFwiaW1hZ2VfcmVzaXplXCJcbiAgICAgKi9cbiAgICByZWFkb25seSB0cmlnZ2VyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyaWdnZXJUeXBlOiBUcmlnZ2VyIHR5cGUsIGUuZy4gb3NzLCB0aW1lciwgbG9ncy4gVGhpcyBkZXRlcm1pbmVzIGhvdyB0aGUgdHJpZ2dlciBjb25maWcgaXMgaW50ZXJwcmV0ZWQuXG4gICAgICogRXhhbXBsZSA6IFwib3NzXCJcbiAgICAgKi9cbiAgICByZWFkb25seSB0cmlnZ2VyVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludm9jYXRpb25Sb2xlOiBUaGUgcm9sZSBncmFudHMgZXZlbnQgc291cmNlIHRoZSBwZXJtaXNzaW9uIHRvIHJ1biBmdW5jdGlvbiBvbiBiZWhhbGYgb2YgdXNlci4gVGhpcyBpcyBvcHRpb25hbCBmb3Igc29tZSB0cmlnZ2Vycy5cbiAgICAgKiBFeGFtcGxlIDogXCJhY3M6cmFtOjoxMjM0NTY3ODkwOnJvbGVcXC9mYy10ZXN0XCJcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnZvY2F0aW9uUm9sZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBxdWFsaWZpZXI6IHNlcnZpY2UgdmVyc2lvbiBvciBhbGlhcy5cbiAgICAgKiBFeGFtcGxlIDogXCJMQVRFU1RcIlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHF1YWxpZmllcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VBcm46IFRoZSBBbGl5dW4gUmVzb3VyY2UgTmFtZSAoQVJOKSBvZiBldmVudCBzb3VyY2UuIFRoaXMgaXMgb3B0aW9uYWwgZm9yIHNvbWUgdHJpZ2dlcnMuXG4gICAgICogRXhhbXBsZSA6IFwiYWNzOm9zczpjbi1zaGFuZ2hhaToxMjM0NTpteWJ1Y2tldFwiXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlQXJuPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1RyaWdnZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVHJpZ2dlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1RyaWdnZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Z1bmN0aW9uTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5mdW5jdGlvbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Z1bmN0aW9uTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5mdW5jdGlvbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyaWdnZXJUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRyaWdnZXJUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmlnZ2VyVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50cmlnZ2VyVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJpZ2dlck5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudHJpZ2dlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyaWdnZXJOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRyaWdnZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VBcm4nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc291cmNlQXJuKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VydmljZU5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2VydmljZU5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmlnZ2VyQ29uZmlnJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRyaWdnZXJDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyaWdnZXJDb25maWcnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnRyaWdnZXJDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludm9jYXRpb25Sb2xlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmludm9jYXRpb25Sb2xlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdxdWFsaWZpZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucXVhbGlmaWVyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1RyaWdnZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlRyaWdnZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RyaWdnZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlRyaWdnZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVHJpZ2dlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVHJpZ2dlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdGdW5jdGlvbk5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSksXG4gICAgICAnU2VydmljZU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSxcbiAgICAgICdUcmlnZ2VyQ29uZmlnJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudHJpZ2dlckNvbmZpZyksXG4gICAgICAnVHJpZ2dlck5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyaWdnZXJOYW1lKSxcbiAgICAgICdUcmlnZ2VyVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHJpZ2dlclR5cGUpLFxuICAgICAgJ0ludm9jYXRpb25Sb2xlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnZvY2F0aW9uUm9sZSksXG4gICAgICAnUXVhbGlmaWVyJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5xdWFsaWZpZXIpLFxuICAgICAgJ1NvdXJjZUFybic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc291cmNlQXJuKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpGQzo6VHJpZ2dlcmAsIHdoaWNoIGlzIHVzZWQgdG8gdHJpZ2dlciB0aGUgaW52b2NhdGlvbiBvZiBhIGZ1bmN0aW9uLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBUcmlnZ2VyYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy10cmlnZ2VyXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NUcmlnZ2VyIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpGQzo6VHJpZ2dlclwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBGdW5jdGlvbk5hbWU6IEZ1bmN0aW9uIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGdW5jdGlvbk5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRyaWdnZXJJZDogVGhlIHRyaWdnZXIgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUcmlnZ2VySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVHJpZ2dlck5hbWU6IFRyaWdnZXIgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyaWdnZXJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVybEludGVybmV0OiBUaGUgcHVibGljIGRvbWFpbiBhZGRyZXNzLiBZb3UgY2FuIGFjY2VzcyBIVFRQIHRyaWdnZXJzIG92ZXIgdGhlIEludGVybmV0IGJ5IHVzaW5nIEhUVFAgb3IgSFRUUFMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVcmxJbnRlcm5ldDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBVcmxJbnRyYW5ldDogVGhlIHByaXZhdGUgZW5kcG9pbnQuIEluIGEgVlBDLCB5b3UgY2FuIGFjY2VzcyBIVFRQIHRyaWdnZXJzIGJ5IHVzaW5nIEhUVFAgb3IgSFRUUFMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVcmxJbnRyYW5ldDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBmdW5jdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyaWdnZXJDb25maWc6IEV2ZW50IHNvdXJjZSBzcGVjaWZpYyB0cmlnZ2VyIGNvbmZpZ3VyYXRpb24uIFRoZSB2YWx1ZSBpcyBkaWZmZXJlbnQgYWNjb3JkaW5nIHRvIHRyaWdnZXIgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdHJpZ2dlckNvbmZpZzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyaWdnZXJOYW1lOiBUcmlnZ2VyIG5hbWUuXG4gICAgICogRXhhbXBsZSA6IFwiaW1hZ2VfcmVzaXplXCJcbiAgICAgKi9cbiAgICBwdWJsaWMgdHJpZ2dlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmlnZ2VyVHlwZTogVHJpZ2dlciB0eXBlLCBlLmcuIG9zcywgdGltZXIsIGxvZ3MuIFRoaXMgZGV0ZXJtaW5lcyBob3cgdGhlIHRyaWdnZXIgY29uZmlnIGlzIGludGVycHJldGVkLlxuICAgICAqIEV4YW1wbGUgOiBcIm9zc1wiXG4gICAgICovXG4gICAgcHVibGljIHRyaWdnZXJUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW52b2NhdGlvblJvbGU6IFRoZSByb2xlIGdyYW50cyBldmVudCBzb3VyY2UgdGhlIHBlcm1pc3Npb24gdG8gcnVuIGZ1bmN0aW9uIG9uIGJlaGFsZiBvZiB1c2VyLiBUaGlzIGlzIG9wdGlvbmFsIGZvciBzb21lIHRyaWdnZXJzLlxuICAgICAqIEV4YW1wbGUgOiBcImFjczpyYW06OjEyMzQ1Njc4OTA6cm9sZVxcL2ZjLXRlc3RcIlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnZvY2F0aW9uUm9sZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHF1YWxpZmllcjogc2VydmljZSB2ZXJzaW9uIG9yIGFsaWFzLlxuICAgICAqIEV4YW1wbGUgOiBcIkxBVEVTVFwiXG4gICAgICovXG4gICAgcHVibGljIHF1YWxpZmllcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZUFybjogVGhlIEFsaXl1biBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIGV2ZW50IHNvdXJjZS4gVGhpcyBpcyBvcHRpb25hbCBmb3Igc29tZSB0cmlnZ2Vycy5cbiAgICAgKiBFeGFtcGxlIDogXCJhY3M6b3NzOmNuLXNoYW5naGFpOjEyMzQ1Om15YnVja2V0XCJcbiAgICAgKi9cbiAgICBwdWJsaWMgc291cmNlQXJuOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVHJpZ2dlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVHJpZ2dlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRnVuY3Rpb25OYW1lID0gdGhpcy5nZXRBdHQoJ0Z1bmN0aW9uTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlTmFtZSA9IHRoaXMuZ2V0QXR0KCdTZXJ2aWNlTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJUcmlnZ2VySWQgPSB0aGlzLmdldEF0dCgnVHJpZ2dlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0clRyaWdnZXJOYW1lID0gdGhpcy5nZXRBdHQoJ1RyaWdnZXJOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clVybEludGVybmV0ID0gdGhpcy5nZXRBdHQoJ1VybEludGVybmV0Jyk7XG4gICAgICAgIHRoaXMuYXR0clVybEludHJhbmV0ID0gdGhpcy5nZXRBdHQoJ1VybEludHJhbmV0Jyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZ1bmN0aW9uTmFtZSA9IHByb3BzLmZ1bmN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHByb3BzLnNlcnZpY2VOYW1lO1xuICAgICAgICB0aGlzLnRyaWdnZXJDb25maWcgPSBwcm9wcy50cmlnZ2VyQ29uZmlnO1xuICAgICAgICB0aGlzLnRyaWdnZXJOYW1lID0gcHJvcHMudHJpZ2dlck5hbWU7XG4gICAgICAgIHRoaXMudHJpZ2dlclR5cGUgPSBwcm9wcy50cmlnZ2VyVHlwZTtcbiAgICAgICAgdGhpcy5pbnZvY2F0aW9uUm9sZSA9IHByb3BzLmludm9jYXRpb25Sb2xlO1xuICAgICAgICB0aGlzLnF1YWxpZmllciA9IHByb3BzLnF1YWxpZmllcjtcbiAgICAgICAgdGhpcy5zb3VyY2VBcm4gPSBwcm9wcy5zb3VyY2VBcm47XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiB0aGlzLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiB0aGlzLnNlcnZpY2VOYW1lLFxuICAgICAgICAgICAgdHJpZ2dlckNvbmZpZzogdGhpcy50cmlnZ2VyQ29uZmlnLFxuICAgICAgICAgICAgdHJpZ2dlck5hbWU6IHRoaXMudHJpZ2dlck5hbWUsXG4gICAgICAgICAgICB0cmlnZ2VyVHlwZTogdGhpcy50cmlnZ2VyVHlwZSxcbiAgICAgICAgICAgIGludm9jYXRpb25Sb2xlOiB0aGlzLmludm9jYXRpb25Sb2xlLFxuICAgICAgICAgICAgcXVhbGlmaWVyOiB0aGlzLnF1YWxpZmllcixcbiAgICAgICAgICAgIHNvdXJjZUFybjogdGhpcy5zb3VyY2VBcm4sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1RyaWdnZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NWZXJzaW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjLXZlcnNpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NWZXJzaW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBWZXJzaW9uIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zVmVyc2lvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NWZXJzaW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVmVyc2lvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5zZXJ2aWNlTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc2VydmljZU5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zZXJ2aWNlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEyOCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVmVyc2lvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6VmVyc2lvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVmVyc2lvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6VmVyc2lvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NWZXJzaW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NWZXJzaW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ1NlcnZpY2VOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpGQzo6VmVyc2lvbmAsIHdoaWNoIGlzIHVzZWQgdG8gcmVsZWFzZSBhIFZlcnNpb24uXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFZlcnNpb25gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjLXZlcnNpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1ZlcnNpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkZDOjpWZXJzaW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNlcnZpY2VOYW1lOiBUaGUgc2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWZXJzaW9uSWQ6IFRoZSB2ZXJzaW9uIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWZXJzaW9uSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVmVyc2lvbiBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1ZlcnNpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1ZlcnNpb24uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gdGhpcy5nZXRBdHQoJ1NlcnZpY2VOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clZlcnNpb25JZCA9IHRoaXMuZ2V0QXR0KCdWZXJzaW9uSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBwcm9wcy5zZXJ2aWNlTmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiB0aGlzLnNlcnZpY2VOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1ZlcnNpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==