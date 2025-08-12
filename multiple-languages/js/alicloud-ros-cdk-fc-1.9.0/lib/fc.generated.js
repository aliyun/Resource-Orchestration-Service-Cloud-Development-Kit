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
            allowedValues: ["e1", "c1", "fc.gpu.tesla.1", "fc.gpu.ampere.1", "fc.gpu.ada.1", "g1"],
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Function`, which is used to create a function. A function must belong to a service. All functions of a service share the same attributes as the service, such as the service authorization and log configurations.
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
    errors.collect(ros.propertyValidator('checkAsyncInvocation', RosFunctionInvoker_CheckAsyncInvocationPropertyValidator)(properties.checkAsyncInvocation));
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
        'CheckAsyncInvocation': rosFunctionInvokerCheckAsyncInvocationPropertyToRosTemplate(properties.checkAsyncInvocation),
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
        this.checkAsyncInvocation = props.checkAsyncInvocation;
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
            checkAsyncInvocation: this.checkAsyncInvocation,
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
 * Determine whether the given properties match those of a `CheckAsyncInvocationProperty`
 *
 * @param properties - the TypeScript properties of a `CheckAsyncInvocationProperty`
 *
 * @returns the result of the validation.
 */
function RosFunctionInvoker_CheckAsyncInvocationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('checkTimes', ros.requiredValidator)(properties.checkTimes));
    if (properties.checkTimes && (typeof properties.checkTimes) !== 'object') {
        errors.collect(ros.propertyValidator('checkTimes', ros.validateRange)({
            data: properties.checkTimes,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('checkTimes', ros.validateNumber)(properties.checkTimes));
    errors.collect(ros.propertyValidator('checkInterval', ros.requiredValidator)(properties.checkInterval));
    if (properties.checkInterval && (typeof properties.checkInterval) !== 'object') {
        errors.collect(ros.propertyValidator('checkInterval', ros.validateRange)({
            data: properties.checkInterval,
            min: 10,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('checkInterval', ros.validateNumber)(properties.checkInterval));
    errors.collect(ros.propertyValidator('enabled', ros.requiredValidator)(properties.enabled));
    errors.collect(ros.propertyValidator('enabled', ros.validateBoolean)(properties.enabled));
    return errors.wrap('supplied properties not correct for "CheckAsyncInvocationProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::FunctionInvoker.CheckAsyncInvocation` resource
 *
 * @param properties - the TypeScript properties of a `CheckAsyncInvocationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::FunctionInvoker.CheckAsyncInvocation` resource.
 */
// @ts-ignore TS6133
function rosFunctionInvokerCheckAsyncInvocationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosFunctionInvoker_CheckAsyncInvocationPropertyValidator(properties).assertSuccess();
    return {
        'CheckTimes': ros.numberToRosTemplate(properties.checkTimes),
        'CheckInterval': ros.numberToRosTemplate(properties.checkInterval),
        'Enabled': ros.booleanToRosTemplate(properties.enabled),
    };
}
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
            reg: /^[a-zA-Z][_a-zA-Z0-9-]+$/
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Layer`, which is used to release a layer version.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmMuZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmMuZ2VuZXJhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5REFBeUQ7OztBQUV6RCw4Q0FBOEM7QUF1QzlDOzs7Ozs7R0FNRztBQUNILFNBQVMsc0JBQXNCLENBQUMsVUFBZTtJQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLElBQUcsVUFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDbEgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRSxJQUFJLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNO1lBQ25DLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUM3RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDaEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RixJQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLGdCQUFnQixDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ2pGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4RSxJQUFJLEVBQUUsVUFBVSxDQUFDLGdCQUFnQjtZQUNqQyxHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxHQUFHO1NBQ1QsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUywwQkFBMEIsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQzFGLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3REO0lBQ0QsT0FBTztRQUNMLFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUMxRCxhQUFhLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDOUQsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUMxRSxrQkFBa0IsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQ3hFLGFBQWEsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM5RCxXQUFXLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7S0FDM0QsQ0FBQztBQUNOLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUFzRHpDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsZ0NBQXlDO1FBQ3pHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU5QyxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7WUFDekMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzVCLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7QUF2RkwsNEJBd0ZDO0FBdkZHOztHQUVHO0FBQ29CLCtCQUFzQixHQUFHLG1CQUFtQixDQUFDO0FBc0h4RTs7Ozs7O0dBTUc7QUFDSCxTQUFTLDZCQUE2QixDQUFDLFVBQWU7SUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsMkNBQTJDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN4SCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsNENBQTRDLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMzSCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMzRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsNERBQTRELENBQUMsQ0FBQztBQUNyRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsaUNBQWlDLENBQUMsVUFBZSxFQUFFLGdDQUF5QztJQUNqRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsSUFBRyxnQ0FBZ0MsRUFBRTtRQUNqQyw2QkFBNkIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUM3RDtJQUNELE9BQU87UUFDTCxZQUFZLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDNUQsVUFBVSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3hELFlBQVksRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUM1RCxZQUFZLEVBQUUsOENBQThDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUNuRixhQUFhLEVBQUUsK0NBQStDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztLQUN2RixDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUE0Q2hEOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTJCLEVBQUUsZ0NBQXlDO1FBQ2hILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDaEMsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLGlDQUFpQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUMzRixDQUFDOztBQTFFTCwwQ0EyRUM7QUExRUc7O0dBRUc7QUFDb0Isc0NBQXNCLEdBQUcsMEJBQTBCLENBQUM7QUE0Ri9FOzs7Ozs7R0FNRztBQUNILFNBQVMsMkNBQTJDLENBQUMsVUFBZTtJQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMzRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsMERBQTBELENBQUMsQ0FBQztBQUNuRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsOENBQThDLENBQUMsVUFBZTtJQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsMkNBQTJDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEUsT0FBTztRQUNMLFlBQVksRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUM1RCxVQUFVLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDeEQsYUFBYSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0tBQy9ELENBQUM7QUFDTixDQUFDO0FBYUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyw0Q0FBNEMsQ0FBQyxVQUFlO0lBQ2pFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0gsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLDJEQUEyRCxDQUFDLENBQUM7QUFDcEYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLCtDQUErQyxDQUFDLFVBQWU7SUFDcEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELDRDQUE0QyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pFLE9BQU87UUFDTCxRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7S0FDeEYsQ0FBQztBQUNOLENBQUM7QUF5QkQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyx1Q0FBdUMsQ0FBQyxVQUFlO0lBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25GLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN0RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25HLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLHNEQUFzRCxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLDBDQUEwQyxDQUFDLFVBQWU7SUFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELHVDQUF1QyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3BFLE9BQU87UUFDTCxNQUFNLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEQsY0FBYyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ2hFLGFBQWEsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM5RCxXQUFXLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7S0FDM0QsQ0FBQztBQUNOLENBQUM7QUFpSUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyx5QkFBeUIsQ0FBQyxVQUFlO0lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLElBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNyRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2xFLElBQUksRUFBRSxVQUFVLENBQUMsVUFBVTtZQUMzQixHQUFHLEVBQUUsR0FBRztZQUNSLEdBQUcsRUFBRSxLQUFLO1NBQ1gsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxJQUFHLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDL0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvRCxJQUFJLEVBQUUsVUFBVSxDQUFDLE9BQU87WUFDeEIsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsS0FBSztTQUNYLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLG9EQUFvRCxDQUFDLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUMzSixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLG9EQUFvRCxDQUFDLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUMzSixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsRUFBRSxrREFBa0QsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDckosTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLGlDQUFpQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsK0NBQStDLENBQUMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQzVJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ25JLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLGdEQUFnRCxDQUFDLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUMvSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNySCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsSUFBRyxVQUFVLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNsSCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDbkMsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsR0FBRztTQUNULENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNyRyxJQUFHLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDakUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzFFLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUTtZQUN6QixhQUFhLEVBQUUsQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDO1NBQzNCLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2pILElBQUcsVUFBVSxDQUFDLG1CQUFtQixJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsbUJBQW1CLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNFLElBQUksRUFBRSxVQUFVLENBQUMsbUJBQW1CO1lBQ3BDLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDakgsSUFBRyxVQUFVLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3pFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUM5RSxJQUFJLEVBQUUsVUFBVSxDQUFDLFlBQVk7WUFDN0IsYUFBYSxFQUFFLENBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxjQUFjLEVBQUMsSUFBSSxDQUFDO1NBQ2xGLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25HLElBQUcsVUFBVSxDQUFDLHVCQUF1QixJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsdUJBQXVCLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDL0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQy9FLElBQUksRUFBRSxVQUFVLENBQUMsdUJBQXVCO1lBQ3hDLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDekgsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLHdEQUF3RCxDQUFDLENBQUM7QUFDakYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLDZCQUE2QixDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDN0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDekQ7SUFDRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ2hFLFNBQVMsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUN0RCxTQUFTLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDdEQsYUFBYSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzlELG9CQUFvQixFQUFFLGtEQUFrRCxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUN2RyxRQUFRLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDcEQsTUFBTSxFQUFFLG9DQUFvQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDN0QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQzlDLHVCQUF1QixFQUFFLHFEQUFxRCxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNoSCxXQUFXLEVBQUUseUNBQXlDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUM1RSx5QkFBeUIsRUFBRSx1REFBdUQsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7UUFDdEgscUJBQXFCLEVBQUUsbURBQW1ELENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO1FBQzFHLGFBQWEsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM5RCxVQUFVLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDeEQsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7UUFDaEcsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2xFLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7UUFDbEYsYUFBYSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzlELHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7UUFDOUUseUJBQXlCLEVBQUUsdURBQXVELENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO1FBQ3RILHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7UUFDdEYsY0FBYyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ2hFLFlBQVksRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUM1RCxTQUFTLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7S0FDdkQsQ0FBQztBQUNOLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxXQUFZLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUEwSjVDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsZ0NBQXlDO1FBQzVHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7UUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsdUJBQXVCLENBQUM7UUFDN0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7UUFDdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUM7UUFDckQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztRQUM3RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDO1FBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixxQkFBcUIsRUFBRSxJQUFJLENBQUMscUJBQXFCO1lBQ2pELFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6Qix1QkFBdUIsRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQ3JELG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDN0MsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO1lBQy9DLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMscUJBQXFCO1lBQ2pELFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1lBQzdDLHVCQUF1QixFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDckQsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtZQUNyRCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN4QixDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8sNkJBQTZCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7O0FBak9MLGtDQWtPQztBQWpPRzs7R0FFRztBQUNvQixrQ0FBc0IsR0FBRyxzQkFBc0IsQ0FBQztBQXVQM0U7Ozs7OztHQU1HO0FBQ0gsU0FBUywrQ0FBK0MsQ0FBQyxVQUFlO0lBQ3BFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSx3Q0FBd0MsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3ZILElBQUcsVUFBVSxDQUFDLHlCQUF5QixJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMseUJBQXlCLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDbkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pGLElBQUksRUFBRSxVQUFVLENBQUMseUJBQXlCO1lBQzFDLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLE9BQU87U0FDYixDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFDN0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDaEgsSUFBRyxVQUFVLENBQUMscUJBQXFCLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUMzRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0UsSUFBSSxFQUFFLFVBQVUsQ0FBQyxxQkFBcUI7WUFDdEMsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNQLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNySCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0VBQWtFLENBQUMsQ0FBQztBQUMzRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsa0RBQWtELENBQUMsVUFBZTtJQUN2RSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsK0NBQStDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUUsT0FBTztRQUNMLGFBQWEsRUFBRSwyQ0FBMkMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2xGLDJCQUEyQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7UUFDMUYsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUM3RSx1QkFBdUIsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO0tBQ25GLENBQUM7QUFDTixDQUFDO0FBOEJEOzs7Ozs7R0FNRztBQUNILFNBQVMsaUNBQWlDLENBQUMsVUFBZTtJQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxJQUFHLFVBQVUsQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQy9HLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUNsQyxHQUFHLEVBQUUsU0FBUztZQUNkLEdBQUcsRUFBRSxJQUFJO1NBQ1YsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDckcsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUM7QUFDN0UsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLG9DQUFvQyxDQUFDLFVBQWU7SUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELGlDQUFpQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzlELE9BQU87UUFDTCxZQUFZLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDNUQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3RELGVBQWUsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNsRSxlQUFlLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDbkUsQ0FBQztBQUNOLENBQUM7QUFzQ0Q7Ozs7OztHQU1HO0FBQ0gsU0FBUyxrREFBa0QsQ0FBQyxVQUFlO0lBQ3ZFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDdEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckYsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLHFFQUFxRSxDQUFDLENBQUM7QUFDOUYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHFEQUFxRCxDQUFDLFVBQWU7SUFDMUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELGtEQUFrRCxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQy9FLE9BQU87UUFDTCxNQUFNLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEQsWUFBWSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzVELFNBQVMsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUN0RCxrQkFBa0IsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQ3hFLGVBQWUsRUFBRSxHQUFHLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNuRSxPQUFPLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7S0FDbkQsQ0FBQztBQUNOLENBQUM7QUFxQkQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxzQ0FBc0MsQ0FBQyxVQUFlO0lBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzlHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN2SSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMseURBQXlELENBQUMsQ0FBQztBQUNsRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMseUNBQXlDLENBQUMsVUFBZTtJQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsc0NBQXNDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkUsT0FBTztRQUNMLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDeEUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsMENBQTBDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQy9GLGFBQWEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7S0FDL0UsQ0FBQztBQUNOLENBQUM7QUFpQ0Q7Ozs7OztHQU1HO0FBQ0gsU0FBUyxvREFBb0QsQ0FBQyxVQUFlO0lBQ3pFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLElBQUcsVUFBVSxDQUFDLGNBQWMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUM3RSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxjQUFjO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDUCxDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLElBQUcsVUFBVSxDQUFDLG1CQUFtQixJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsbUJBQW1CLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNFLElBQUksRUFBRSxVQUFVLENBQUMsbUJBQW1CO1lBQ3BDLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDakgsSUFBRyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUMvRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ25FLElBQUksRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU07WUFDbEMsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsSUFBSTtTQUNWLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9GLElBQUcsVUFBVSxDQUFDLGFBQWEsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUMzRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3JFLElBQUksRUFBRSxVQUFVLENBQUMsYUFBYTtZQUM5QixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxHQUFHO1NBQ1QsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDckcsSUFBRyxVQUFVLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNqRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxnQkFBZ0I7WUFDakMsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsR0FBRztTQUNULENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMzRyxJQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLGdCQUFnQixDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ2pGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4RSxJQUFJLEVBQUUsVUFBVSxDQUFDLGdCQUFnQjtZQUNqQyxHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxHQUFHO1NBQ1QsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO0FBQ2hHLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyx1REFBdUQsQ0FBQyxVQUFlO0lBQzVFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxvREFBb0QsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNqRixPQUFPO1FBQ0wsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDcEUscUJBQXFCLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztRQUM5RSxZQUFZLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDNUQsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2xFLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7UUFDeEUsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztLQUN6RSxDQUFDO0FBQ04sQ0FBQztBQWlCRDs7Ozs7O0dBTUc7QUFDSCxTQUFTLGdEQUFnRCxDQUFDLFVBQWU7SUFDckUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUcsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7QUFDNUYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLG1EQUFtRCxDQUFDLFVBQWU7SUFDeEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELGdEQUFnRCxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdFLE9BQU87UUFDTCxNQUFNLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2hFLFNBQVMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7S0FDdkUsQ0FBQztBQUNOLENBQUM7QUFpQkQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyx3Q0FBd0MsQ0FBQyxVQUFlO0lBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkRBQTJELENBQUMsQ0FBQztBQUNwRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsMkNBQTJDLENBQUMsVUFBZTtJQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsd0NBQXdDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckUsT0FBTztRQUNMLFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUMxRCxXQUFXLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7S0FDM0QsQ0FBQztBQUNOLENBQUM7QUFpQkQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyx1Q0FBdUMsQ0FBQyxVQUFlO0lBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkYsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLDBEQUEwRCxDQUFDLENBQUM7QUFDbkYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLDBDQUEwQyxDQUFDLFVBQWU7SUFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELHVDQUF1QyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3BFLE9BQU87UUFDTCxPQUFPLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbEQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO0tBQ2pELENBQUM7QUFDTixDQUFDO0FBaUJEOzs7Ozs7R0FNRztBQUNILFNBQVMsb0RBQW9ELENBQUMsVUFBZTtJQUN6RSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsb0NBQW9DLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsc0NBQXNDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNqSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUVBQXVFLENBQUMsQ0FBQztBQUNoRyxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsdURBQXVELENBQUMsVUFBZTtJQUM1RSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsb0RBQW9ELENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDakYsT0FBTztRQUNMLFNBQVMsRUFBRSx1Q0FBdUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3RFLFdBQVcsRUFBRSx5Q0FBeUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0tBQzdFLENBQUM7QUFDTixDQUFDO0FBaUJEOzs7Ozs7R0FNRztBQUNILFNBQVMsc0NBQXNDLENBQUMsVUFBZTtJQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekYsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLHlEQUF5RCxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHlDQUF5QyxDQUFDLFVBQWU7SUFDOUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELHNDQUFzQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ25FLE9BQU87UUFDTCxTQUFTLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDdEQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0tBQ3ZELENBQUM7QUFDTixDQUFDO0FBaUJEOzs7Ozs7R0FNRztBQUNILFNBQVMsb0NBQW9DLENBQUMsVUFBZTtJQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekYsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLHVEQUF1RCxDQUFDLENBQUM7QUFDaEYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHVDQUF1QyxDQUFDLFVBQWU7SUFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELG9DQUFvQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2pFLE9BQU87UUFDTCxTQUFTLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDdEQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0tBQ3ZELENBQUM7QUFDTixDQUFDO0FBeUREOzs7Ozs7R0FNRztBQUNILFNBQVMsZ0NBQWdDLENBQUMsVUFBZTtJQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDdkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQ2xILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDcEUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTTtZQUNuQyxHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxHQUFHO1NBQ1QsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNoRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBRSx3REFBd0QsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDekosT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLCtEQUErRCxDQUFDLENBQUM7QUFDeEYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLG9DQUFvQyxDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDcEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMsZ0NBQWdDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDaEU7SUFDRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ2hFLGFBQWEsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM5RCxPQUFPLEVBQUUsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbkQsc0JBQXNCLEVBQUUsMkRBQTJELENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO1FBQ3BILFlBQVksRUFBRSxHQUFHLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUM3RCxPQUFPLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbEQsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDcEUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQzFELGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO0tBQ3ZFLENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsa0JBQW1CLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUF5RW5EOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQThCLEVBQUUsZ0NBQXlDO1FBQ25ILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztJQUNqRCxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO1lBQy9DLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDeEMsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLG9DQUFvQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUM5RixDQUFDOztBQS9HTCxnREFnSEM7QUEvR0c7O0dBRUc7QUFDb0IseUNBQXNCLEdBQUcsNkJBQTZCLENBQUM7QUFxSWxGOzs7Ozs7R0FNRztBQUNILFNBQVMsd0RBQXdELENBQUMsVUFBZTtJQUM3RSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbEcsSUFBRyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3JFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbEUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxVQUFVO1lBQzNCLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEcsSUFBRyxVQUFVLENBQUMsYUFBYSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDckUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhO1lBQzlCLEdBQUcsRUFBRSxFQUFFO1lBQ1AsR0FBRyxFQUFFLFNBQVM7U0FDZixDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNyRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0VBQW9FLENBQUMsQ0FBQztBQUM3RixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsMkRBQTJELENBQUMsVUFBZTtJQUNoRixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsd0RBQXdELENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckYsT0FBTztRQUNMLFlBQVksRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUM1RCxlQUFlLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDbEUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0tBQ3hELENBQUM7QUFDTixDQUFDO0FBNkJEOzs7Ozs7R0FNRztBQUNILFNBQVMsc0JBQXNCLENBQUMsVUFBZTtJQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ2hILElBQUcsVUFBVSxDQUFDLGlCQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLGlCQUFpQixDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDcEksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzFFLElBQUksRUFBRSxVQUFVLENBQUMsaUJBQWlCLENBQUMsTUFBTTtZQUN6QyxHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxTQUFTO1NBQ2YsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNoSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRyxJQUFHLFVBQVUsQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQzVHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNqQyxHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxFQUFFO1NBQ1IsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELElBQUcsVUFBVSxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNuRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDNUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxTQUFTO1lBQzFCLEdBQUcsRUFBRSwwQkFBMEI7U0FDaEMsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSw4QkFBOEIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9GLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUywwQkFBMEIsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQzFGLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3REO0lBQ0QsT0FBTztRQUNMLE1BQU0sRUFBRSxpQ0FBaUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzFELG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO1FBQzFGLFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUMxRCxhQUFhLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7S0FDL0QsQ0FBQztBQUNOLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUE0Q3pDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsZ0NBQXlDO1FBQ3pHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDaEMsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLDBCQUEwQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNwRixDQUFDOztBQXpFTCw0QkEwRUM7QUF6RUc7O0dBRUc7QUFDb0IsK0JBQXNCLEdBQUcsbUJBQW1CLENBQUM7QUErRnhFOzs7Ozs7R0FNRztBQUNILFNBQVMsOEJBQThCLENBQUMsVUFBZTtJQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDckcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNyRyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0RBQW9ELENBQUMsQ0FBQztBQUM3RSxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsaUNBQWlDLENBQUMsVUFBZTtJQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsOEJBQThCLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0QsT0FBTztRQUNMLFNBQVMsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUN0RCxlQUFlLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDbEUsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ25FLENBQUM7QUFDTixDQUFDO0FBOEJEOzs7Ozs7R0FNRztBQUNILFNBQVMsZ0NBQWdDLENBQUMsVUFBZTtJQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsSUFBRyxVQUFVLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNsSCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDbkMsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsR0FBRztTQUNULENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQywrREFBK0QsQ0FBQyxDQUFDO0FBQ3hGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyxvQ0FBb0MsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQ3BHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLGdDQUFnQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ2hFO0lBQ0QsT0FBTztRQUNMLGNBQWMsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUNoRSxXQUFXLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDMUQsYUFBYSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzlELFFBQVEsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztLQUNyRCxDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBdURuRDs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUE4QixFQUFFLGdDQUF5QztRQUNuSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLG9DQUFvQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUM5RixDQUFDOztBQXRGTCxnREF1RkM7QUF0Rkc7O0dBRUc7QUFDb0IseUNBQXNCLEdBQUcsNkJBQTZCLENBQUM7QUF5SmxGOzs7Ozs7R0FNRztBQUNILFNBQVMsd0JBQXdCLENBQUMsVUFBZTtJQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25GLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN4RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDdEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLHlDQUF5QyxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDNUgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLHFDQUFxQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDaEgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLElBQUcsVUFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDbEgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRSxJQUFJLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNO1lBQ25DLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSwwQ0FBMEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQy9ILElBQUcsVUFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDbEgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRSxJQUFJLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNO1lBQ25DLEdBQUcsRUFBRSxTQUFTO1lBQ2QsR0FBRyxFQUFFLEVBQUU7U0FDUixDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEgsSUFBRyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUM3RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzdELElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDNUIsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLHFDQUFxQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDaEgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLHFDQUFxQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDaEgsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLHVEQUF1RCxDQUFDLENBQUM7QUFDaEYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLDRCQUE0QixDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDNUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDeEQ7SUFDRCxPQUFPO1FBQ0wsYUFBYSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzlELGVBQWUsRUFBRSxHQUFHLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNuRSxhQUFhLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDOUQsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDckUsV0FBVyxFQUFFLHdDQUF3QyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDM0UsV0FBVyxFQUFFLHdDQUF3QyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDM0UsZ0JBQWdCLEVBQUUsNkNBQTZDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztRQUMxRixNQUFNLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzVFLGVBQWUsRUFBRSw0Q0FBNEMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3ZGLGFBQWEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDOUUsV0FBVyxFQUFFLHdDQUF3QyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7S0FDNUUsQ0FBQztBQUNOLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUE4RzNDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCLEVBQUUsZ0NBQXlDO1FBQzNHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzVCLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7QUFoS0wsZ0NBaUtDO0FBaEtHOztHQUVHO0FBQ29CLGlDQUFzQixHQUFHLHFCQUFxQixDQUFDO0FBMEwxRTs7Ozs7O0dBTUc7QUFDSCxTQUFTLHFDQUFxQyxDQUFDLFVBQWU7SUFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25HLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDM0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDcEgsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLHlEQUF5RCxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHdDQUF3QyxDQUFDLFVBQWU7SUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELHFDQUFxQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xFLE9BQU87UUFDTCxTQUFTLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDdEQsY0FBYyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ2hFLFVBQVUsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN4RCxzQkFBc0IsRUFBRSxHQUFHLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO0tBQ2xGLENBQUM7QUFDTixDQUFDO0FBaUJEOzs7Ozs7R0FNRztBQUNILFNBQVMsdUNBQXVDLENBQUMsVUFBZTtJQUM1RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMzRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkRBQTJELENBQUMsQ0FBQztBQUNwRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsMENBQTBDLENBQUMsVUFBZTtJQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsdUNBQXVDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDcEUsT0FBTztRQUNMLFlBQVksRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUM1RCxVQUFVLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7S0FDekQsQ0FBQztBQUNOLENBQUM7QUFxQkQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxxQ0FBcUMsQ0FBQyxVQUFlO0lBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQ2xILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDcEUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTTtZQUNuQyxHQUFHLEVBQUUsU0FBUztZQUNkLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN6SSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUYsSUFBRyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQzdELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUQsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNO1lBQ3ZCLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDUCxHQUFHLEVBQUUsS0FBSztTQUNYLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RixJQUFHLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDL0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvRCxJQUFJLEVBQUUsVUFBVSxDQUFDLE9BQU87WUFDeEIsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNQLEdBQUcsRUFBRSxLQUFLO1NBQ1gsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekYsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLHlEQUF5RCxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHdDQUF3QyxDQUFDLFVBQWU7SUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELHFDQUFxQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xFLE9BQU87UUFDTCxhQUFhLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDakcsUUFBUSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3BELFNBQVMsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztLQUN2RCxDQUFDO0FBQ04sQ0FBQztBQWFEOzs7Ozs7R0FNRztBQUNILFNBQVMsMENBQTBDLENBQUMsVUFBZTtJQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsSUFBRyxVQUFVLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNsSCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDbkMsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsQ0FBQztTQUNQLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdkosT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLDhEQUE4RCxDQUFDLENBQUM7QUFDdkYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLDZDQUE2QyxDQUFDLFVBQWU7SUFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELDBDQUEwQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZFLE9BQU87UUFDTCxhQUFhLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyx3REFBd0QsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7S0FDaEgsQ0FBQztBQUNOLENBQUM7QUE2QkQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxxREFBcUQsQ0FBQyxVQUFlO0lBQzFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9GLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9GLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENB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QUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNoQyxDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8sNEJBQTRCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7O0FBckRMLGdDQXNEQztBQXJERzs7R0FFRztBQUNvQixpQ0FBc0IsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQWxpYXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtYWxpYXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBbGlhc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGlhc05hbWU6IEFsaWFzIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBhbGlhc05hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhZGRpdGlvbmFsVmVyc2lvbjogQWRkaXRpb25hbCB2ZXJzaW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWRkaXRpb25hbFZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWRkaXRpb25hbFdlaWdodDogVHJhZmZpYyB3ZWlnaHQgb2YgYWRkaXRpb25hbCB2ZXJzaW9uLiBGcm9tIDAgdG8gMTAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFkZGl0aW9uYWxXZWlnaHQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFZlcnNpb24gZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2ZXJzaW9uSWQ6IFZlcnNpb24gSURcbiAgICAgKi9cbiAgICByZWFkb25seSB2ZXJzaW9uSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQWxpYXNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWxpYXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBbGlhc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmVyc2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZlcnNpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5zZXJ2aWNlTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc2VydmljZU5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zZXJ2aWNlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEyOCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FkZGl0aW9uYWxWZXJzaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFkZGl0aW9uYWxWZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGlhc05hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYWxpYXNOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGlhc05hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWxpYXNOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5hZGRpdGlvbmFsV2VpZ2h0ICYmICh0eXBlb2YgcHJvcGVydGllcy5hZGRpdGlvbmFsV2VpZ2h0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhZGRpdGlvbmFsV2VpZ2h0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYWRkaXRpb25hbFdlaWdodCxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhZGRpdGlvbmFsV2VpZ2h0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmFkZGl0aW9uYWxXZWlnaHQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQWxpYXNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkFsaWFzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBbGlhc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6QWxpYXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQWxpYXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FsaWFzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FsaWFzTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWxpYXNOYW1lKSxcbiAgICAgICdTZXJ2aWNlTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZU5hbWUpLFxuICAgICAgJ0FkZGl0aW9uYWxWZXJzaW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hZGRpdGlvbmFsVmVyc2lvbiksXG4gICAgICAnQWRkaXRpb25hbFdlaWdodCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWRkaXRpb25hbFdlaWdodCksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgICdWZXJzaW9uSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZlcnNpb25JZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6RkM6OkFsaWFzYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYW4gQWxpYXMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEFsaWFzYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy1hbGlhc1xuICovXG5leHBvcnQgY2xhc3MgUm9zQWxpYXMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkZDOjpBbGlhc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBbGlhc05hbWU6IFRoZSBhbGlhcyBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBbGlhc05hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2VydmljZU5hbWU6IFRoZSBzZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZlcnNpb25JZDogVGhlIHZlcnNpb24gSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZlcnNpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWxpYXNOYW1lOiBBbGlhcyBuYW1lXG4gICAgICovXG4gICAgcHVibGljIGFsaWFzTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhZGRpdGlvbmFsVmVyc2lvbjogQWRkaXRpb25hbCB2ZXJzaW9uXG4gICAgICovXG4gICAgcHVibGljIGFkZGl0aW9uYWxWZXJzaW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWRkaXRpb25hbFdlaWdodDogVHJhZmZpYyB3ZWlnaHQgb2YgYWRkaXRpb25hbCB2ZXJzaW9uLiBGcm9tIDAgdG8gMTAwLlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRpdGlvbmFsV2VpZ2h0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFZlcnNpb24gZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2ZXJzaW9uSWQ6IFZlcnNpb24gSURcbiAgICAgKi9cbiAgICBwdWJsaWMgdmVyc2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQWxpYXNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0FsaWFzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBbGlhc05hbWUgPSB0aGlzLmdldEF0dCgnQWxpYXNOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gdGhpcy5nZXRBdHQoJ1NlcnZpY2VOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clZlcnNpb25JZCA9IHRoaXMuZ2V0QXR0KCdWZXJzaW9uSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYWxpYXNOYW1lID0gcHJvcHMuYWxpYXNOYW1lO1xuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gcHJvcHMuc2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMuYWRkaXRpb25hbFZlcnNpb24gPSBwcm9wcy5hZGRpdGlvbmFsVmVyc2lvbjtcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsV2VpZ2h0ID0gcHJvcHMuYWRkaXRpb25hbFdlaWdodDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnZlcnNpb25JZCA9IHByb3BzLnZlcnNpb25JZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbGlhc05hbWU6IHRoaXMuYWxpYXNOYW1lLFxuICAgICAgICAgICAgc2VydmljZU5hbWU6IHRoaXMuc2VydmljZU5hbWUsXG4gICAgICAgICAgICBhZGRpdGlvbmFsVmVyc2lvbjogdGhpcy5hZGRpdGlvbmFsVmVyc2lvbixcbiAgICAgICAgICAgIGFkZGl0aW9uYWxXZWlnaHQ6IHRoaXMuYWRkaXRpb25hbFdlaWdodCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdmVyc2lvbklkOiB0aGlzLnZlcnNpb25JZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQWxpYXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NDdXN0b21Eb21haW5gLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtY3VzdG9tZG9tYWluXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ3VzdG9tRG9tYWluUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRvbWFpbk5hbWU6IGRvbWFpbiBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG9tYWluTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb3RvY29sOiBIVFRQIG9yIEhUVFAsSFRUUFNcbiAgICAgKi9cbiAgICByZWFkb25seSBwcm90b2NvbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwaVZlcnNpb246IGFwaSB2ZXJzaW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBpVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZXJ0Q29uZmlnOiBjZXJ0aWZpY2F0ZSBpbmZvXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VydENvbmZpZz86IFJvc0N1c3RvbURvbWFpbi5DZXJ0Q29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVDb25maWc6IFJvdXRpbmcgdGFibGU6IHBhdGggdG8gZnVuY3Rpb24gbWFwcGluZ3doZW4gYSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBhIGN1c3RvbSBkb21haW4gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlQ29uZmlnPzogUm9zQ3VzdG9tRG9tYWluLlJvdXRlQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ3VzdG9tRG9tYWluUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0N1c3RvbURvbWFpblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbURvbWFpblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBpVmVyc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hcGlWZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZXJ0Q29uZmlnJywgUm9zQ3VzdG9tRG9tYWluX0NlcnRDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jZXJ0Q29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkb21haW5OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZG9tYWluTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVDb25maWcnLCBSb3NDdXN0b21Eb21haW5fUm91dGVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5yb3V0ZUNvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvdG9jb2wnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJvdG9jb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb3RvY29sJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb3RvY29sKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0N1c3RvbURvbWFpblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6Q3VzdG9tRG9tYWluYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDdXN0b21Eb21haW5Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkN1c3RvbURvbWFpbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDdXN0b21Eb21haW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0N1c3RvbURvbWFpblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdEb21haW5OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kb21haW5OYW1lKSxcbiAgICAgICdQcm90b2NvbCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvdG9jb2wpLFxuICAgICAgJ0FwaVZlcnNpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwaVZlcnNpb24pLFxuICAgICAgJ0NlcnRDb25maWcnOiByb3NDdXN0b21Eb21haW5DZXJ0Q29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VydENvbmZpZyksXG4gICAgICAnUm91dGVDb25maWcnOiByb3NDdXN0b21Eb21haW5Sb3V0ZUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvdXRlQ29uZmlnKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpGQzo6Q3VzdG9tRG9tYWluYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBjdXN0b20gZG9tYWluIG5hbWUuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEN1c3RvbURvbWFpbmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtY3VzdG9tZG9tYWluXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDdXN0b21Eb21haW4gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkZDOjpDdXN0b21Eb21haW5cIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRG9tYWluOiBUaGUgZG9tYWluIHdpdGggcHJvdG9jb2wuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEb21haW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRG9tYWluTmFtZTogVGhlIGRvbWFpbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEb21haW5OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lOiBkb21haW4gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBkb21haW5OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvdG9jb2w6IEhUVFAgb3IgSFRUUCxIVFRQU1xuICAgICAqL1xuICAgIHB1YmxpYyBwcm90b2NvbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwaVZlcnNpb246IGFwaSB2ZXJzaW9uXG4gICAgICovXG4gICAgcHVibGljIGFwaVZlcnNpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZXJ0Q29uZmlnOiBjZXJ0aWZpY2F0ZSBpbmZvXG4gICAgICovXG4gICAgcHVibGljIGNlcnRDb25maWc6IFJvc0N1c3RvbURvbWFpbi5DZXJ0Q29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVDb25maWc6IFJvdXRpbmcgdGFibGU6IHBhdGggdG8gZnVuY3Rpb24gbWFwcGluZ3doZW4gYSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBhIGN1c3RvbSBkb21haW4gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByb3V0ZUNvbmZpZzogUm9zQ3VzdG9tRG9tYWluLlJvdXRlQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ3VzdG9tRG9tYWluUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDdXN0b21Eb21haW4uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckRvbWFpbiA9IHRoaXMuZ2V0QXR0KCdEb21haW4nKTtcbiAgICAgICAgdGhpcy5hdHRyRG9tYWluTmFtZSA9IHRoaXMuZ2V0QXR0KCdEb21haW5OYW1lJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRvbWFpbk5hbWUgPSBwcm9wcy5kb21haW5OYW1lO1xuICAgICAgICB0aGlzLnByb3RvY29sID0gcHJvcHMucHJvdG9jb2w7XG4gICAgICAgIHRoaXMuYXBpVmVyc2lvbiA9IHByb3BzLmFwaVZlcnNpb247XG4gICAgICAgIHRoaXMuY2VydENvbmZpZyA9IHByb3BzLmNlcnRDb25maWc7XG4gICAgICAgIHRoaXMucm91dGVDb25maWcgPSBwcm9wcy5yb3V0ZUNvbmZpZztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb21haW5OYW1lOiB0aGlzLmRvbWFpbk5hbWUsXG4gICAgICAgICAgICBwcm90b2NvbDogdGhpcy5wcm90b2NvbCxcbiAgICAgICAgICAgIGFwaVZlcnNpb246IHRoaXMuYXBpVmVyc2lvbixcbiAgICAgICAgICAgIGNlcnRDb25maWc6IHRoaXMuY2VydENvbmZpZyxcbiAgICAgICAgICAgIHJvdXRlQ29uZmlnOiB0aGlzLnJvdXRlQ29uZmlnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NDdXN0b21Eb21haW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NDdXN0b21Eb21haW4ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENlcnRDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHJpdmF0ZUtleTogcHJpdmF0ZSBrZXlcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByaXZhdGVLZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjZXJ0TmFtZTogY3VzdG9tIGNlcnRpZmljYXRlIG5hbWVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNlcnROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY2VydGlmaWNhdGU6IGNlcnRpZmljYXRlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjZXJ0aWZpY2F0ZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ2VydENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDZXJ0Q29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ3VzdG9tRG9tYWluX0NlcnRDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaXZhdGVLZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJpdmF0ZUtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpdmF0ZUtleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcml2YXRlS2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZXJ0TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jZXJ0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VydE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2VydE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlcnRpZmljYXRlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNlcnRpZmljYXRlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZXJ0aWZpY2F0ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jZXJ0aWZpY2F0ZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDZXJ0Q29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpDdXN0b21Eb21haW4uQ2VydENvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ2VydENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6Q3VzdG9tRG9tYWluLkNlcnRDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ3VzdG9tRG9tYWluQ2VydENvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NDdXN0b21Eb21haW5fQ2VydENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ByaXZhdGVLZXknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByaXZhdGVLZXkpLFxuICAgICAgJ0NlcnROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZXJ0TmFtZSksXG4gICAgICAnQ2VydGlmaWNhdGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNlcnRpZmljYXRlKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0N1c3RvbURvbWFpbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm91dGVDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcm91dGVzOiBQYXRoQ29uZmlnIEFycmF5XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByb3V0ZXM6IEFycmF5PFJvc0N1c3RvbURvbWFpbi5Sb3V0ZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3V0ZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3V0ZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbURvbWFpbl9Sb3V0ZUNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJvdXRlcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQ3VzdG9tRG9tYWluX1JvdXRlc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5yb3V0ZXMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm91dGVDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkN1c3RvbURvbWFpbi5Sb3V0ZUNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm91dGVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkN1c3RvbURvbWFpbi5Sb3V0ZUNvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDdXN0b21Eb21haW5Sb3V0ZUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NDdXN0b21Eb21haW5fUm91dGVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSb3V0ZXMnOiByb3MubGlzdE1hcHBlcihyb3NDdXN0b21Eb21haW5Sb3V0ZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucm91dGVzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0N1c3RvbURvbWFpbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm91dGVzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhdGg6IEhUVFAgcmVxdWVzdCBwYXRoIHdoZW4gYSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBhIGN1c3RvbSBkb21haW4gbmFtZSwgZm9yIGV4YW1wbGU6IFwiXFwvbG9naW5cXC8qXCJcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBhdGg6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmdW5jdGlvbk5hbWU6IFBhdGggdG8gdGhlIGZ1bmN0aW9uLCBmb3IgZXhhbXBsZTogXCJsb2dpblwiXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBmdW5jdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogUGF0aCB0byB0aGUgc2VydmljZSwgZm9yIGV4YW1wbGU6IFwiYmxvZ1NlcnZpY2VcIlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBxdWFsaWZpZXI6IFNlcnZpY2UgdmVyc2lvbiBvciBhbGlhc1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcXVhbGlmaWVyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm91dGVzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvdXRlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbURvbWFpbl9Sb3V0ZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhdGgnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucGF0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGF0aCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3F1YWxpZmllcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5xdWFsaWZpZXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm91dGVzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpDdXN0b21Eb21haW4uUm91dGVzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3V0ZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkN1c3RvbURvbWFpbi5Sb3V0ZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ3VzdG9tRG9tYWluUm91dGVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0N1c3RvbURvbWFpbl9Sb3V0ZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQYXRoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXRoKSxcbiAgICAgICdGdW5jdGlvbk5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSksXG4gICAgICAnU2VydmljZU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSxcbiAgICAgICdRdWFsaWZpZXInOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnF1YWxpZmllciksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NGdW5jdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy1mdW5jdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0Z1bmN0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZ1bmN0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhhbmRsZXI6IFRoZSBmdW5jdGlvbiBleGVjdXRpb24gZW50cnkgcG9pbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGFuZGxlcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bnRpbWU6IFRoZSBmdW5jdGlvbiBydW50aW1lIGVudmlyb25tZW50LiBTdXBwb3J0aW5nIG5vZGVqczE244CBbm9kZWpzMTTjgIFub2RlanMxMuOAgW5vZGVqczEw44CBbm9kZWpzOOOAgW5vZGVqczbjgIFub2RlanM0LjTjgIFweXRob24zLjEw44CBcHl0aG9uMy4544CBcHl0aG9uM+OAgXB5dGhvbjIuN+OAgWphdmExMeOAgWphdmE444CBZ28x44CBcGhwNy4y44CBZG90bmV0Y29yZTMuMeOAgWRvdG5ldGNvcmUyLjHjgIFjdXN0b20uZGViaWFuMTDjgIFjdXN0b23lkoxjdXN0b20tY29udGFpbmVyIGFuZCBzbyBvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ1bnRpbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhc3luY0NvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24gb2YgYXN5bmNocm9ub3VzIGZ1bmN0aW9uIGNhbGxzXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXN5bmNDb25maWd1cmF0aW9uPzogUm9zRnVuY3Rpb24uQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2FQb3J0OiBDdXN0b20gcnVudGltZSBhbmQgY3VzdG9tIGNvbnRhaW5lciBydW50aW1lIGRlZGljYXRlZCBmaWVsZHMsIHdoaWNoIHJlcHJlc2VudCB0aGUgcG9ydCB0aGF0IHRoZSBzdGFydGVkIGN1c3RvbSBodHRwIHNlcnZlciBsaXN0ZW5zIHRvLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA5MDAwXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2FQb3J0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvZGU6IFRoZSBjb2RlIHRoYXQgY29udGFpbnMgdGhlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvZGU/OiBSb3NGdW5jdGlvbi5Db2RlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY3B1OiBUaGUgbnVtYmVyIG9mIHZDUFVzIG9mIHRoZSBmdW5jdGlvbi4gVGhlIHZhbHVlIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAwLjA1LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNwdT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjdXN0b21Db250YWluZXJDb25maWc6IEN1c3RvbSBjb250YWluZXIgcnVudGltZSByZWxhdGVkIGNvbmZpZ3VyYXRpb24uIEFmdGVyIGNvbmZpZ3VyYXRpb24sIHRoZSBmdW5jdGlvbiBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIGN1c3RvbSBjb250YWluZXIgdG8gZXhlY3V0ZSB0aGUgZnVuY3Rpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBjdXN0b21Db250YWluZXJDb25maWc/OiBSb3NGdW5jdGlvbi5DdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjdXN0b21EbnM6IFRoZSBjdXN0b20gRE5TIGNvbmZpZ3VyYXRpb25zIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBjdXN0b21EbnM/OiBSb3NGdW5jdGlvbi5DdXN0b21ETlNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjdXN0b21IZWFsdGhDaGVja0NvbmZpZzogVGhlIGhlYWx0aCBjaGVjayBjb25maWd1cmF0aW9ucyBmb3IgdGhlIGN1c3RvbSBydW50aW1lIGFuZCBjdXN0b20gY29udGFpbmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGN1c3RvbUhlYWx0aENoZWNrQ29uZmlnPzogUm9zRnVuY3Rpb24uQ3VzdG9tSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjdXN0b21SdW50aW1lQ29uZmlnOiBDdXN0b20gcnVudGltZSByZWxhdGVkIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3VzdG9tUnVudGltZUNvbmZpZz86IFJvc0Z1bmN0aW9uLkN1c3RvbVJ1bnRpbWVDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRnVuY3Rpb24gZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNrU2l6ZTogVGhlIGRpc2sgc2l6ZSBvZiB0aGUgZnVuY3Rpb24uIFVuaXQ6IE1CLiBWYWxpZCB2YWx1ZXM6IDUxMiBhbmQgMTAyNDAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlza1NpemU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW52aXJvbm1lbnRWYXJpYWJsZXM6IFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBzZXQgZm9yIHRoZSBmdW5jdGlvbiwgeW91IGNhbiBnZXQgdGhlIHZhbHVlIG9mIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW52aXJvbm1lbnRWYXJpYWJsZXM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3B1TWVtb3J5U2l6ZTogVGhlIEdQVSBtZW1vcnkgY2FwYWNpdHkgZm9yIHRoZSBmdW5jdGlvbi4gVW5pdDogTUIuIFRoZSB2YWx1ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMSwwMjQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3B1TWVtb3J5U2l6ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbml0aWFsaXphdGlvblRpbWVvdXQ6IHRoZSBtYXggZXhlY3V0aW9uIHRpbWUgb2YgdGhlIGluaXRpYWxpemVyLCBpbiBzZWNvbmRcbiAgICAgKi9cbiAgICByZWFkb25seSBpbml0aWFsaXphdGlvblRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5pdGlhbGl6ZXI6IHRoZSBlbnRyeSBwb2ludCBvZiB0aGUgaW5pdGlhbGl6ZXJcbiAgICAgKi9cbiAgICByZWFkb25seSBpbml0aWFsaXplcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUNvbmN1cnJlbmN5OiBGdW5jdGlvbiBpbnN0YW5jZSBjb25jdXJyZW5jeS4gVmFsdWUgY2FuIGJlIGJldHdlZW4gMSB0byAxMDAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VDb25jdXJyZW5jeT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUxpZmVjeWNsZUNvbmZpZzogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGluc3RhbmNlIGxpZmVjeWNsZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUxpZmVjeWNsZUNvbmZpZz86IFJvc0Z1bmN0aW9uLkluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VTb2Z0Q29uY3VycmVuY3k6IFRoZSBzb2Z0IGNvbmN1cnJlbmN5IG9mIHRoZSBpbnN0YW5jZS4gWW91IGNhbiB1c2UgdGhpcyBwYXJhbWV0ZXIgdG8gaW1wbGVtZW50IGdyYWNlZnVsIHNjYWxlLXVwIG9mIGluc3RhbmNlcy4gSWYgdGhlIG51bWJlciBvZiBjb25jdXJyZW50IHJlcXVlc3RzIG9uIGFuIGluc3RhbmNlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgdmFsdWUgb2Ygc29mdCBjb25jdXJyZW5jeSwgYW4gaW5zdGFuY2Ugc2NhbGUtdXAgaXMgdHJpZ2dlcmVkLiBGb3IgZXhhbXBsZSwgaWYgeW91ciBpbnN0YW5jZSByZXF1aXJlcyBhIGxvbmcgdGltZSB0byBzdGFydCwgeW91IGNhbiBzcGVjaWZ5IGEgc3VpdGFibGUgc29mdCBjb25jdXJyZW5jeSB0byBzdGFydCB0aGUgaW5zdGFuY2UgaW4gYWR2YW5jZS5UaGUgdmFsdWUgbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhhdCBvZiB0aGUgaW5zdGFuY2VDb25jdXJyZW5jeSBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VTb2Z0Q29uY3VycmVuY3k/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VUeXBlOiBJbnN0YW5jZSB0eXBlLiBWYWx1ZTotIGUxOiBFbGFzdGljIEluc3RhbmNlLi0gYzE6IFBlcmZvcm1hbmNlIEluc3RhbmNlLi0gZmMuZ3B1LnRlc2xhLjE6IEdQVSBUZXNsYSBTZXJpZXMgSW5zdGFuY2UgVHlwZS4tIGZjLmdwdS5hbXBlcmUuMTogR1BVIEFtcGVyZSBTZXJpZXMgSW5zdGFuY2UgVHlwZS4tIGZjLmdwdS5hZGEuMTogR1BVIEFkYSBTZXJpZXMgSW5zdGFuY2UgVHlwZS4tIGcxOiBTYW1lIGFzIGZjLmdwdS50ZXNsYS4xLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtZW1vcnlTaXplOiBUaGUgYW1vdW50IG9mIG1lbW9yeSB0aGF04oCZcyB1c2VkIHRvIHJ1biBmdW5jdGlvbiwgaW4gTUIuIEZ1bmN0aW9uIENvbXB1dGUgdXNlcyB0aGlzIHZhbHVlIHRvIGFsbG9jYXRlIENQVSByZXNvdXJjZXMgcHJvcG9ydGlvbmFsbHkuIERlZmF1bHRzIHRvIDEyOCBNQi4gSXQgY2FuIGJlIG11bHRpcGxlIG9mIDY0IE1CIGFuZCBiZXR3ZWVuIDEyOCBNQiBhbmQgMzI3NjggTUIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWVtb3J5U2l6ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaGUgbWF4aW11bSB0aW1lIGR1cmF0aW9uIGEgZnVuY3Rpb24gY2FuIHJ1biwgaW4gc2Vjb25kcy4gQWZ0ZXIgd2hpY2ggRnVuY3Rpb24gQ29tcHV0ZSB0ZXJtaW5hdGVzIHRoZSBleGVjdXRpb24uIERlZmF1bHRzIHRvIDMgc2Vjb25kcywgYW5kIGNhbiBiZSBiZXR3ZWVuIDEgdG8gODY0MDAgc2Vjb25kcy5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aW1lb3V0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0Z1bmN0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0Z1bmN0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1lbW9yeVNpemUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1lbW9yeVNpemUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21lbW9yeVNpemUnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tZW1vcnlTaXplLFxuICAgICAgICAgICAgbWluOiAxMjgsXG4gICAgICAgICAgICBtYXg6IDMyNzY4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZW1vcnlTaXplJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1lbW9yeVNpemUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy50aW1lb3V0ICYmICh0eXBlb2YgcHJvcGVydGllcy50aW1lb3V0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGltZW91dCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogODY0MDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZW91dCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VMaWZlY3ljbGVDb25maWcnLCBSb3NGdW5jdGlvbl9JbnN0YW5jZUxpZmVjeWNsZUNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoYW5kbGVyJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmhhbmRsZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hhbmRsZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaGFuZGxlcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3B1Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmNwdSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3VzdG9tSGVhbHRoQ2hlY2tDb25maWcnLCBSb3NGdW5jdGlvbl9DdXN0b21IZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmN1c3RvbUhlYWx0aENoZWNrQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjdXN0b21Db250YWluZXJDb25maWcnLCBSb3NGdW5jdGlvbl9DdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jdXN0b21Db250YWluZXJDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvZGUnLCBSb3NGdW5jdGlvbl9Db2RlUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXN5bmNDb25maWd1cmF0aW9uJywgUm9zRnVuY3Rpb25fQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuYXN5bmNDb25maWd1cmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjYVBvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuY2FQb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydW50aW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJ1bnRpbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bnRpbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucnVudGltZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW52aXJvbm1lbnRWYXJpYWJsZXMnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmVudmlyb25tZW50VmFyaWFibGVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjdXN0b21SdW50aW1lQ29uZmlnJywgUm9zRnVuY3Rpb25fQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmN1c3RvbVJ1bnRpbWVDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luaXRpYWxpemF0aW9uVGltZW91dCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pbml0aWFsaXphdGlvblRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5zZXJ2aWNlTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc2VydmljZU5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zZXJ2aWNlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEyOCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luaXRpYWxpemVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluaXRpYWxpemVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncHVNZW1vcnlTaXplJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmdwdU1lbW9yeVNpemUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRpc2tTaXplICYmICh0eXBlb2YgcHJvcGVydGllcy5kaXNrU2l6ZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlza1NpemUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kaXNrU2l6ZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbNTEyLDEwMjQwXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc2tTaXplJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmRpc2tTaXplKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjdXN0b21EbnMnLCBSb3NGdW5jdGlvbl9DdXN0b21ETlNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jdXN0b21EbnMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluc3RhbmNlQ29uY3VycmVuY3kgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlQ29uY3VycmVuY3kpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlQ29uY3VycmVuY3knLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZUNvbmN1cnJlbmN5LFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlQ29uY3VycmVuY3knLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW5zdGFuY2VDb25jdXJyZW5jeSkpO1xuICAgIGlmKHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnN0YW5jZVR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluc3RhbmNlVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJlMVwiLFwiYzFcIixcImZjLmdwdS50ZXNsYS4xXCIsXCJmYy5ncHUuYW1wZXJlLjFcIixcImZjLmdwdS5hZGEuMVwiLFwiZzFcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZVNvZnRDb25jdXJyZW5jeSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW5zdGFuY2VTb2Z0Q29uY3VycmVuY3kpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlU29mdENvbmN1cnJlbmN5Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5zdGFuY2VTb2Z0Q29uY3VycmVuY3ksXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VTb2Z0Q29uY3VycmVuY3knLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW5zdGFuY2VTb2Z0Q29uY3VycmVuY3kpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRnVuY3Rpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NGdW5jdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0Z1bmN0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0Z1bmN0aW9uTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSxcbiAgICAgICdIYW5kbGVyJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oYW5kbGVyKSxcbiAgICAgICdSdW50aW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydW50aW1lKSxcbiAgICAgICdTZXJ2aWNlTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZU5hbWUpLFxuICAgICAgJ0FzeW5jQ29uZmlndXJhdGlvbic6IHJvc0Z1bmN0aW9uQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXN5bmNDb25maWd1cmF0aW9uKSxcbiAgICAgICdDQVBvcnQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNhUG9ydCksXG4gICAgICAnQ29kZSc6IHJvc0Z1bmN0aW9uQ29kZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvZGUpLFxuICAgICAgJ0NwdSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY3B1KSxcbiAgICAgICdDdXN0b21Db250YWluZXJDb25maWcnOiByb3NGdW5jdGlvbkN1c3RvbUNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmN1c3RvbUNvbnRhaW5lckNvbmZpZyksXG4gICAgICAnQ3VzdG9tRE5TJzogcm9zRnVuY3Rpb25DdXN0b21ETlNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jdXN0b21EbnMpLFxuICAgICAgJ0N1c3RvbUhlYWx0aENoZWNrQ29uZmlnJzogcm9zRnVuY3Rpb25DdXN0b21IZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmN1c3RvbUhlYWx0aENoZWNrQ29uZmlnKSxcbiAgICAgICdDdXN0b21SdW50aW1lQ29uZmlnJzogcm9zRnVuY3Rpb25DdXN0b21SdW50aW1lQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY3VzdG9tUnVudGltZUNvbmZpZyksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgICdEaXNrU2l6ZSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlza1NpemUpLFxuICAgICAgJ0Vudmlyb25tZW50VmFyaWFibGVzJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZW52aXJvbm1lbnRWYXJpYWJsZXMpLFxuICAgICAgJ0dwdU1lbW9yeVNpemUnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdwdU1lbW9yeVNpemUpLFxuICAgICAgJ0luaXRpYWxpemF0aW9uVGltZW91dCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5pdGlhbGl6YXRpb25UaW1lb3V0KSxcbiAgICAgICdJbml0aWFsaXplcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5pdGlhbGl6ZXIpLFxuICAgICAgJ0luc3RhbmNlQ29uY3VycmVuY3knOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlQ29uY3VycmVuY3kpLFxuICAgICAgJ0luc3RhbmNlTGlmZWN5Y2xlQ29uZmlnJzogcm9zRnVuY3Rpb25JbnN0YW5jZUxpZmVjeWNsZUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnKSxcbiAgICAgICdJbnN0YW5jZVNvZnRDb25jdXJyZW5jeSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VTb2Z0Q29uY3VycmVuY3kpLFxuICAgICAgJ0luc3RhbmNlVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSxcbiAgICAgICdNZW1vcnlTaXplJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tZW1vcnlTaXplKSxcbiAgICAgICdUaW1lb3V0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpGQzo6RnVuY3Rpb25gLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGZ1bmN0aW9uLiBBIGZ1bmN0aW9uIG11c3QgYmVsb25nIHRvIGEgc2VydmljZS4gQWxsIGZ1bmN0aW9ucyBvZiBhIHNlcnZpY2Ugc2hhcmUgdGhlIHNhbWUgYXR0cmlidXRlcyBhcyB0aGUgc2VydmljZSwgc3VjaCBhcyB0aGUgc2VydmljZSBhdXRob3JpemF0aW9uIGFuZCBsb2cgY29uZmlndXJhdGlvbnMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEZ1bmN0aW9uYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy1mdW5jdGlvblxuICovXG5leHBvcnQgY2xhc3MgUm9zRnVuY3Rpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkZDOjpGdW5jdGlvblwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBUk46IFRoZSBBUk4gZm9yIEFMSVlVTjo6Uk9TOjpDdXN0b21SZXNvdXJjZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXJuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEZ1bmN0aW9uSWQ6IFRoZSBmdW5jdGlvbiBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRnVuY3Rpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBGdW5jdGlvbk5hbWU6IFRoZSBmdW5jdGlvbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGdW5jdGlvbk5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2VydmljZUlkOiBUaGUgc2VydmljZSBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNlcnZpY2VOYW1lOiBUaGUgc2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIGZ1bmN0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhhbmRsZXI6IFRoZSBmdW5jdGlvbiBleGVjdXRpb24gZW50cnkgcG9pbnQuXG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZXI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBydW50aW1lOiBUaGUgZnVuY3Rpb24gcnVudGltZSBlbnZpcm9ubWVudC4gU3VwcG9ydGluZyBub2RlanMxNuOAgW5vZGVqczE044CBbm9kZWpzMTLjgIFub2RlanMxMOOAgW5vZGVqczjjgIFub2RlanM244CBbm9kZWpzNC4044CBcHl0aG9uMy4xMOOAgXB5dGhvbjMuOeOAgXB5dGhvbjPjgIFweXRob24yLjfjgIFqYXZhMTHjgIFqYXZhOOOAgWdvMeOAgXBocDcuMuOAgWRvdG5ldGNvcmUzLjHjgIFkb3RuZXRjb3JlMi4x44CBY3VzdG9tLmRlYmlhbjEw44CBY3VzdG9t5ZKMY3VzdG9tLWNvbnRhaW5lciBhbmQgc28gb25cbiAgICAgKi9cbiAgICBwdWJsaWMgcnVudGltZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhc3luY0NvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24gb2YgYXN5bmNocm9ub3VzIGZ1bmN0aW9uIGNhbGxzXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jQ29uZmlndXJhdGlvbjogUm9zRnVuY3Rpb24uQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2FQb3J0OiBDdXN0b20gcnVudGltZSBhbmQgY3VzdG9tIGNvbnRhaW5lciBydW50aW1lIGRlZGljYXRlZCBmaWVsZHMsIHdoaWNoIHJlcHJlc2VudCB0aGUgcG9ydCB0aGF0IHRoZSBzdGFydGVkIGN1c3RvbSBodHRwIHNlcnZlciBsaXN0ZW5zIHRvLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA5MDAwXG4gICAgICovXG4gICAgcHVibGljIGNhUG9ydDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvZGU6IFRoZSBjb2RlIHRoYXQgY29udGFpbnMgdGhlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBjb2RlOiBSb3NGdW5jdGlvbi5Db2RlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY3B1OiBUaGUgbnVtYmVyIG9mIHZDUFVzIG9mIHRoZSBmdW5jdGlvbi4gVGhlIHZhbHVlIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAwLjA1LlxuICAgICAqL1xuICAgIHB1YmxpYyBjcHU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjdXN0b21Db250YWluZXJDb25maWc6IEN1c3RvbSBjb250YWluZXIgcnVudGltZSByZWxhdGVkIGNvbmZpZ3VyYXRpb24uIEFmdGVyIGNvbmZpZ3VyYXRpb24sIHRoZSBmdW5jdGlvbiBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIGN1c3RvbSBjb250YWluZXIgdG8gZXhlY3V0ZSB0aGUgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgY3VzdG9tQ29udGFpbmVyQ29uZmlnOiBSb3NGdW5jdGlvbi5DdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjdXN0b21EbnM6IFRoZSBjdXN0b20gRE5TIGNvbmZpZ3VyYXRpb25zIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgY3VzdG9tRG5zOiBSb3NGdW5jdGlvbi5DdXN0b21ETlNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjdXN0b21IZWFsdGhDaGVja0NvbmZpZzogVGhlIGhlYWx0aCBjaGVjayBjb25maWd1cmF0aW9ucyBmb3IgdGhlIGN1c3RvbSBydW50aW1lIGFuZCBjdXN0b20gY29udGFpbmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBjdXN0b21IZWFsdGhDaGVja0NvbmZpZzogUm9zRnVuY3Rpb24uQ3VzdG9tSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjdXN0b21SdW50aW1lQ29uZmlnOiBDdXN0b20gcnVudGltZSByZWxhdGVkIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGN1c3RvbVJ1bnRpbWVDb25maWc6IFJvc0Z1bmN0aW9uLkN1c3RvbVJ1bnRpbWVDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRnVuY3Rpb24gZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNrU2l6ZTogVGhlIGRpc2sgc2l6ZSBvZiB0aGUgZnVuY3Rpb24uIFVuaXQ6IE1CLiBWYWxpZCB2YWx1ZXM6IDUxMiBhbmQgMTAyNDAuXG4gICAgICovXG4gICAgcHVibGljIGRpc2tTaXplOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW52aXJvbm1lbnRWYXJpYWJsZXM6IFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBzZXQgZm9yIHRoZSBmdW5jdGlvbiwgeW91IGNhbiBnZXQgdGhlIHZhbHVlIG9mIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIGVudmlyb25tZW50VmFyaWFibGVzOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3B1TWVtb3J5U2l6ZTogVGhlIEdQVSBtZW1vcnkgY2FwYWNpdHkgZm9yIHRoZSBmdW5jdGlvbi4gVW5pdDogTUIuIFRoZSB2YWx1ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMSwwMjQuXG4gICAgICovXG4gICAgcHVibGljIGdwdU1lbW9yeVNpemU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbml0aWFsaXphdGlvblRpbWVvdXQ6IHRoZSBtYXggZXhlY3V0aW9uIHRpbWUgb2YgdGhlIGluaXRpYWxpemVyLCBpbiBzZWNvbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdGlhbGl6YXRpb25UaW1lb3V0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5pdGlhbGl6ZXI6IHRoZSBlbnRyeSBwb2ludCBvZiB0aGUgaW5pdGlhbGl6ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdGlhbGl6ZXI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUNvbmN1cnJlbmN5OiBGdW5jdGlvbiBpbnN0YW5jZSBjb25jdXJyZW5jeS4gVmFsdWUgY2FuIGJlIGJldHdlZW4gMSB0byAxMDAuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlQ29uY3VycmVuY3k6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUxpZmVjeWNsZUNvbmZpZzogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGluc3RhbmNlIGxpZmVjeWNsZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VMaWZlY3ljbGVDb25maWc6IFJvc0Z1bmN0aW9uLkluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VTb2Z0Q29uY3VycmVuY3k6IFRoZSBzb2Z0IGNvbmN1cnJlbmN5IG9mIHRoZSBpbnN0YW5jZS4gWW91IGNhbiB1c2UgdGhpcyBwYXJhbWV0ZXIgdG8gaW1wbGVtZW50IGdyYWNlZnVsIHNjYWxlLXVwIG9mIGluc3RhbmNlcy4gSWYgdGhlIG51bWJlciBvZiBjb25jdXJyZW50IHJlcXVlc3RzIG9uIGFuIGluc3RhbmNlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgdmFsdWUgb2Ygc29mdCBjb25jdXJyZW5jeSwgYW4gaW5zdGFuY2Ugc2NhbGUtdXAgaXMgdHJpZ2dlcmVkLiBGb3IgZXhhbXBsZSwgaWYgeW91ciBpbnN0YW5jZSByZXF1aXJlcyBhIGxvbmcgdGltZSB0byBzdGFydCwgeW91IGNhbiBzcGVjaWZ5IGEgc3VpdGFibGUgc29mdCBjb25jdXJyZW5jeSB0byBzdGFydCB0aGUgaW5zdGFuY2UgaW4gYWR2YW5jZS5UaGUgdmFsdWUgbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhhdCBvZiB0aGUgaW5zdGFuY2VDb25jdXJyZW5jeSBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlU29mdENvbmN1cnJlbmN5OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VUeXBlOiBJbnN0YW5jZSB0eXBlLiBWYWx1ZTotIGUxOiBFbGFzdGljIEluc3RhbmNlLi0gYzE6IFBlcmZvcm1hbmNlIEluc3RhbmNlLi0gZmMuZ3B1LnRlc2xhLjE6IEdQVSBUZXNsYSBTZXJpZXMgSW5zdGFuY2UgVHlwZS4tIGZjLmdwdS5hbXBlcmUuMTogR1BVIEFtcGVyZSBTZXJpZXMgSW5zdGFuY2UgVHlwZS4tIGZjLmdwdS5hZGEuMTogR1BVIEFkYSBTZXJpZXMgSW5zdGFuY2UgVHlwZS4tIGcxOiBTYW1lIGFzIGZjLmdwdS50ZXNsYS4xLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtZW1vcnlTaXplOiBUaGUgYW1vdW50IG9mIG1lbW9yeSB0aGF04oCZcyB1c2VkIHRvIHJ1biBmdW5jdGlvbiwgaW4gTUIuIEZ1bmN0aW9uIENvbXB1dGUgdXNlcyB0aGlzIHZhbHVlIHRvIGFsbG9jYXRlIENQVSByZXNvdXJjZXMgcHJvcG9ydGlvbmFsbHkuIERlZmF1bHRzIHRvIDEyOCBNQi4gSXQgY2FuIGJlIG11bHRpcGxlIG9mIDY0IE1CIGFuZCBiZXR3ZWVuIDEyOCBNQiBhbmQgMzI3NjggTUIuXG4gICAgICovXG4gICAgcHVibGljIG1lbW9yeVNpemU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaGUgbWF4aW11bSB0aW1lIGR1cmF0aW9uIGEgZnVuY3Rpb24gY2FuIHJ1biwgaW4gc2Vjb25kcy4gQWZ0ZXIgd2hpY2ggRnVuY3Rpb24gQ29tcHV0ZSB0ZXJtaW5hdGVzIHRoZSBleGVjdXRpb24uIERlZmF1bHRzIHRvIDMgc2Vjb25kcywgYW5kIGNhbiBiZSBiZXR3ZWVuIDEgdG8gODY0MDAgc2Vjb25kcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGltZW91dDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0Z1bmN0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NGdW5jdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQXJuID0gdGhpcy5nZXRBdHQoJ0FSTicpO1xuICAgICAgICB0aGlzLmF0dHJGdW5jdGlvbklkID0gdGhpcy5nZXRBdHQoJ0Z1bmN0aW9uSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyRnVuY3Rpb25OYW1lID0gdGhpcy5nZXRBdHQoJ0Z1bmN0aW9uTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlSWQgPSB0aGlzLmdldEF0dCgnU2VydmljZUlkJyk7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gdGhpcy5nZXRBdHQoJ1NlcnZpY2VOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZ1bmN0aW9uTmFtZSA9IHByb3BzLmZ1bmN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gcHJvcHMuaGFuZGxlcjtcbiAgICAgICAgdGhpcy5ydW50aW1lID0gcHJvcHMucnVudGltZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHByb3BzLnNlcnZpY2VOYW1lO1xuICAgICAgICB0aGlzLmFzeW5jQ29uZmlndXJhdGlvbiA9IHByb3BzLmFzeW5jQ29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5jYVBvcnQgPSBwcm9wcy5jYVBvcnQ7XG4gICAgICAgIHRoaXMuY29kZSA9IHByb3BzLmNvZGU7XG4gICAgICAgIHRoaXMuY3B1ID0gcHJvcHMuY3B1O1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRhaW5lckNvbmZpZyA9IHByb3BzLmN1c3RvbUNvbnRhaW5lckNvbmZpZztcbiAgICAgICAgdGhpcy5jdXN0b21EbnMgPSBwcm9wcy5jdXN0b21EbnM7XG4gICAgICAgIHRoaXMuY3VzdG9tSGVhbHRoQ2hlY2tDb25maWcgPSBwcm9wcy5jdXN0b21IZWFsdGhDaGVja0NvbmZpZztcbiAgICAgICAgdGhpcy5jdXN0b21SdW50aW1lQ29uZmlnID0gcHJvcHMuY3VzdG9tUnVudGltZUNvbmZpZztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmRpc2tTaXplID0gcHJvcHMuZGlza1NpemU7XG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnRWYXJpYWJsZXMgPSBwcm9wcy5lbnZpcm9ubWVudFZhcmlhYmxlcztcbiAgICAgICAgdGhpcy5ncHVNZW1vcnlTaXplID0gcHJvcHMuZ3B1TWVtb3J5U2l6ZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXphdGlvblRpbWVvdXQgPSBwcm9wcy5pbml0aWFsaXphdGlvblRpbWVvdXQ7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZXIgPSBwcm9wcy5pbml0aWFsaXplcjtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbmN1cnJlbmN5ID0gcHJvcHMuaW5zdGFuY2VDb25jdXJyZW5jeTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUxpZmVjeWNsZUNvbmZpZyA9IHByb3BzLmluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnO1xuICAgICAgICB0aGlzLmluc3RhbmNlU29mdENvbmN1cnJlbmN5ID0gcHJvcHMuaW5zdGFuY2VTb2Z0Q29uY3VycmVuY3k7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VUeXBlID0gcHJvcHMuaW5zdGFuY2VUeXBlO1xuICAgICAgICB0aGlzLm1lbW9yeVNpemUgPSBwcm9wcy5tZW1vcnlTaXplO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBwcm9wcy50aW1lb3V0O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogdGhpcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoYW5kbGVyOiB0aGlzLmhhbmRsZXIsXG4gICAgICAgICAgICBydW50aW1lOiB0aGlzLnJ1bnRpbWUsXG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIGFzeW5jQ29uZmlndXJhdGlvbjogdGhpcy5hc3luY0NvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICBjYVBvcnQ6IHRoaXMuY2FQb3J0LFxuICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgICAgICAgY3B1OiB0aGlzLmNwdSxcbiAgICAgICAgICAgIGN1c3RvbUNvbnRhaW5lckNvbmZpZzogdGhpcy5jdXN0b21Db250YWluZXJDb25maWcsXG4gICAgICAgICAgICBjdXN0b21EbnM6IHRoaXMuY3VzdG9tRG5zLFxuICAgICAgICAgICAgY3VzdG9tSGVhbHRoQ2hlY2tDb25maWc6IHRoaXMuY3VzdG9tSGVhbHRoQ2hlY2tDb25maWcsXG4gICAgICAgICAgICBjdXN0b21SdW50aW1lQ29uZmlnOiB0aGlzLmN1c3RvbVJ1bnRpbWVDb25maWcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRpc2tTaXplOiB0aGlzLmRpc2tTaXplLFxuICAgICAgICAgICAgZW52aXJvbm1lbnRWYXJpYWJsZXM6IHRoaXMuZW52aXJvbm1lbnRWYXJpYWJsZXMsXG4gICAgICAgICAgICBncHVNZW1vcnlTaXplOiB0aGlzLmdwdU1lbW9yeVNpemUsXG4gICAgICAgICAgICBpbml0aWFsaXphdGlvblRpbWVvdXQ6IHRoaXMuaW5pdGlhbGl6YXRpb25UaW1lb3V0LFxuICAgICAgICAgICAgaW5pdGlhbGl6ZXI6IHRoaXMuaW5pdGlhbGl6ZXIsXG4gICAgICAgICAgICBpbnN0YW5jZUNvbmN1cnJlbmN5OiB0aGlzLmluc3RhbmNlQ29uY3VycmVuY3ksXG4gICAgICAgICAgICBpbnN0YW5jZUxpZmVjeWNsZUNvbmZpZzogdGhpcy5pbnN0YW5jZUxpZmVjeWNsZUNvbmZpZyxcbiAgICAgICAgICAgIGluc3RhbmNlU29mdENvbmN1cnJlbmN5OiB0aGlzLmluc3RhbmNlU29mdENvbmN1cnJlbmN5LFxuICAgICAgICAgICAgaW5zdGFuY2VUeXBlOiB0aGlzLmluc3RhbmNlVHlwZSxcbiAgICAgICAgICAgIG1lbW9yeVNpemU6IHRoaXMubWVtb3J5U2l6ZSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRnVuY3Rpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRlc3RpbmF0aW9uOiBTZXQgZGVzdGluYXRpb24gb2YgYXN5bmNocm9ub3VzIGZ1bmN0aW9uIGNhbGxzXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkZXN0aW5hdGlvbj86IFJvc0Z1bmN0aW9uLkRlc3RpbmF0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWF4QXN5bmNFdmVudEFnZUluU2Vjb25kczogQ29uZmlndXJlIHRoZSBtYXhpbXVtIGxpZmV0aW1lIG9mIG1lc3NhZ2VzLiBUaGUgZHVyYXRpb24gaXMgY2FsY3VsYXRlZCBmcm9tIHRoZSB0aW1lIHRoZSBhc3luY2hyb25vdXMgY2FsbCBpcyB0cmlnZ2VyZWQsIGFuZCBlbmRzIHdoZW4gdGhlIG1lc3NhZ2UgaXMgZGVxdWV1ZWQgZm9yIHByb2Nlc3NpbmcuIElmIHRoaXMgcGVyaW9kIG9mIHRpbWUgaXMgbG9uZ2VyIHRoYW4gdGhlIHNldHRpbmcgdmFsdWUgb2YgTWF4QXN5bmNFdmVudEFnZUluU2Vjb25kcywgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBkaXNjYXJkZWQuIFRoZSB1bmNvbnN1bWVkIG1lc3NhZ2VzIHdpbGwgYmUgY291bnRlZCBpbiB0aGUgY2xvdWQgbW9uaXRvcmluZyBBc3luY0V2ZW50RXhwaXJlZERyb3BwZWQgaW5kaWNhdG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4QXN5bmNFdmVudEFnZUluU2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGF0ZWZ1bEludm9jYXRpb246IFdoZXRoZXIgZW5hYmxlIHN0YXRlZnVsIGludm9jYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXRlZnVsSW52b2NhdGlvbj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWF4QXN5bmNSZXRyeUF0dGVtcHRzOiBDb25maWd1cmUgdGhlIG51bWJlciBvZiByZXRyaWVzXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtYXhBc3luY1JldHJ5QXR0ZW1wdHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBBc3luY0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fQXN5bmNDb25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXN0aW5hdGlvbicsIFJvc0Z1bmN0aW9uX0Rlc3RpbmF0aW9uUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVzdGluYXRpb24pKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1heEFzeW5jRXZlbnRBZ2VJblNlY29uZHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1heEFzeW5jRXZlbnRBZ2VJblNlY29uZHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heEFzeW5jRXZlbnRBZ2VJblNlY29uZHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAyNTkyMDAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhBc3luY0V2ZW50QWdlSW5TZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1heEFzeW5jRXZlbnRBZ2VJblNlY29uZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRlZnVsSW52b2NhdGlvbicsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuc3RhdGVmdWxJbnZvY2F0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5tYXhBc3luY1JldHJ5QXR0ZW1wdHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1heEFzeW5jUmV0cnlBdHRlbXB0cykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4QXN5bmNSZXRyeUF0dGVtcHRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWF4QXN5bmNSZXRyeUF0dGVtcHRzLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiA4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhBc3luY1JldHJ5QXR0ZW1wdHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWF4QXN5bmNSZXRyeUF0dGVtcHRzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkFzeW5jQ29uZmlndXJhdGlvblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uQXN5bmNDb25maWd1cmF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBBc3luY0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkFzeW5jQ29uZmlndXJhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkFzeW5jQ29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9Bc3luY0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdEZXN0aW5hdGlvbic6IHJvc0Z1bmN0aW9uRGVzdGluYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXN0aW5hdGlvbiksXG4gICAgICAnTWF4QXN5bmNFdmVudEFnZUluU2Vjb25kcyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4QXN5bmNFdmVudEFnZUluU2Vjb25kcyksXG4gICAgICAnU3RhdGVmdWxJbnZvY2F0aW9uJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhdGVmdWxJbnZvY2F0aW9uKSxcbiAgICAgICdNYXhBc3luY1JldHJ5QXR0ZW1wdHMnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heEFzeW5jUmV0cnlBdHRlbXB0cyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ29kZVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VDb2RlOiAoTm9kZS5qcywgUEhQIGFuZCBQeXRob24pIFRoZSBzb3VyY2UgY29kZSBmb3IgeW91ciBGQyBmdW5jdGlvbi4gSWYgeW91IGluY2x1ZGUgdGhpcyBwYXJhbWV0ZXIgaW4gYSBmdW5jdGlvbiBzb3VyY2UgaW5saW5lLCBST1MgcGxhY2VzIGl0IGluIGEgZmlsZSBjYWxsZWQgaW5kZXggKHV0Zi04IGVuY29kZWQpIGFuZCB0aGVuIGNvbXByZXNzZXMgaXQgdG8gY3JlYXRlIGEgZGVwbG95bWVudCBwYWNrYWdlLiBGb3IgdGhlIEhhbmRsZXIgcHJvcGVydHksIHRoZSBmaXJzdCBwYXJ0IG9mIHRoZSBoYW5kbGVyIGlkZW50aWZpZXIgbXVzdCBiZSBpbmRleC4gRm9yIGV4YW1wbGU6IGluZGV4LmhhbmRsZXIuXG4gICAgICogWW91ciBzb3VyY2UgY29kZSBjYW4gY29udGFpbiB1cCB0byA0MDk2IGNoYXJhY3RlcnMuIEZvciBKU09OLCB5b3UgbXVzdCB1c2UgYmFja3NsYXNoZXMgdG8gZXNjYXBlIHF1b3RlcyBhbmQgc3BlY2lhbCBjaGFyYWN0ZXJzLCBzdWNoIGFzIGxpbmUgYnJlYWtzLlxuICAgICAqIFByaW9yaXR5OiBaaXBGaWxlID4gU291cmNlQ29kZSA+IE9zc0J1Y2tldE5hbWUmT3NzT2JqZWN0TmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNvdXJjZUNvZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgemlwRmlsZTogQmFzZTY0IGVuY29kZWQgemlwIGZpbGUgY29udGVudC5cbiAgICAgKiBQcmlvcml0eTogWmlwRmlsZSA+IFNvdXJjZUNvZGUgPiBPc3NCdWNrZXROYW1lJk9zc09iamVjdE5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB6aXBGaWxlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9zc09iamVjdE5hbWU6IE9TUyBvYmplY3QgbmFtZS5cbiAgICAgKiBQcmlvcml0eTogWmlwRmlsZSA+IFNvdXJjZUNvZGUgPiBPc3NCdWNrZXROYW1lJk9zc09iamVjdE5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvc3NPYmplY3ROYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9zc0J1Y2tldE5hbWU6IE9TUyBidWNrZXQgbmFtZS5cbiAgICAgKiBQcmlvcml0eTogWmlwRmlsZSA+IFNvdXJjZUNvZGUgPiBPc3NCdWNrZXROYW1lJk9zc09iamVjdE5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvc3NCdWNrZXROYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ29kZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb2RlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fQ29kZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuc291cmNlQ29kZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNvdXJjZUNvZGUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zb3VyY2VDb2RlKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlQ29kZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zb3VyY2VDb2RlLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA0MDk2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VDb2RlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNvdXJjZUNvZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ppcEZpbGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuemlwRmlsZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3NzT2JqZWN0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vc3NPYmplY3ROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvc3NCdWNrZXROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9zc0J1Y2tldE5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ29kZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uQ29kZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29kZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uQ29kZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkNvZGVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRnVuY3Rpb25fQ29kZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1NvdXJjZUNvZGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNvdXJjZUNvZGUpLFxuICAgICAgJ1ppcEZpbGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnppcEZpbGUpLFxuICAgICAgJ09zc09iamVjdE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9zc09iamVjdE5hbWUpLFxuICAgICAgJ09zc0J1Y2tldE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9zc0J1Y2tldE5hbWUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEN1c3RvbUNvbnRhaW5lckNvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhcmdzOiBDb250YWluZXIgc3RhcnR1cCBwYXJhbWV0ZXJzLiBGb3IgZXhhbXBsZTogW1wiLWFyZzFcIiwgXCJ2YWx1ZTFcIl1cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFyZ3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBDb250YWluZXIgUmVnaXN0cnkgRW50ZXJwcmlzZSBFZGl0aW9uIGluc3RhbmNlLiBJZiB5b3UgdXNlIGFuIEVudGVycHJpc2UgRWRpdGlvbiBpbnN0YW5jZSBmb3IgdGhlIGNvbnRhaW5lciBpbWFnZSwgeW91IG11c3QgYWRkIHRoZSBpbnN0YW5jZSBJRC4gVGhlIGRlZmF1bHQgcmVzb2x1dGlvbiBJUCBhZGRyZXNzIG9mIHRoZSBpbnN0YW5jZSBtdXN0IGJlIHRoZSBJUCBhZGRyZXNzIG9mIHRoZSB2aXJ0dWFsIHByaXZhdGUgY2xvdWQgKFZQQykgdGhhdCB0aGUgaW5zdGFuY2UgYmVsb25ncy4gQWxpYmFiYSBDbG91ZCBETlMgUHJpdmF0ZVpvbmUgY2Fubm90IGJlIHVzZWQgZm9yIGRvbWFpbiBuYW1lIHJlc29sdXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbnN0YW5jZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbW1hbmQ6IENvbnRhaW5lciBzdGFydCBjb21tYW5kLiBGb3IgZXhhbXBsZTogW1wiXFwvY29kZVxcL215c2VydmVyXCJdXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb21tYW5kPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGFjY2VsZXJhdGlvblR5cGU6IFdoZXRoZXIgdG8gZW5hYmxlIGltYWdlIGFjY2VsZXJhdGlvbi4gVmFsaWQgVmFsdWVzOlxuICAgICAqIERlZmF1bHQ6IEluZGljYXRlcyB0aGF0IGltYWdlIGFjY2VsZXJhdGlvbiBpcyBlbmFibGVkLlxuICAgICAqIE5vbmU6IEluZGljYXRlcyB0aGF0IGltYWdlIGFjY2VsZXJhdGlvbiBpcyBkaXNhYmxlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFjY2VsZXJhdGlvblR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgd2ViU2VydmVyTW9kZTogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdlYiBzZXJ2ZXIgbW9kZSBpcyB1c2VkIGZvciBpbWFnZSBydW5uaW5nLlxuICAgICAqIEEgdmFsdWUgb2YgdHJ1ZSBpbmRpY2F0ZXMgdGhhdCBhIHdlYiBzZXJ2ZXIgaXMgaW1wbGVtZW50ZWQgaW4geW91ciBjb250YWluZXIgaW1hZ2UgdG8gbGlzdGVuIG9uIHBvcnRzIGFuZCBwcm9jZXNzIHJlcXVlc3RzLlxuICAgICAqIEEgdmFsdWUgb2YgZmFsc2UgaW5kaWNhdGVzIHRoYXQgdGhlIGNvbnRhaW5lciBtdXN0IGFjdGl2ZWx5IGV4aXQgdGhlIHByb2Nlc3MgYWZ0ZXIgaXQgcnVucywgYW5kIHRoZSBleGl0IGNvZGUgaXMgMC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiB0cnVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgd2ViU2VydmVyTW9kZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW1hZ2U6IENvbnRhaW5lciBpbWFnZSBhZGRyZXNzLiBGb3IgZXhhbXBsZTogcmVnaXN0cnktdnBjLmNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbVxcL2ZjLWRlbW9cXC9oZWxsb3dvcmxkOnYxYmV0YTFcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGltYWdlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcmdzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFyZ3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tbWFuZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb21tYW5kKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2NlbGVyYXRpb25UeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFjY2VsZXJhdGlvblR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlYlNlcnZlck1vZGUnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLndlYlNlcnZlck1vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ltYWdlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmltYWdlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbWFnZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbWFnZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkN1c3RvbUNvbnRhaW5lckNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5DdXN0b21Db250YWluZXJDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25DdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRnVuY3Rpb25fQ3VzdG9tQ29udGFpbmVyQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQXJncyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXJncyksXG4gICAgICAnSW5zdGFuY2VJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VJZCksXG4gICAgICAnQ29tbWFuZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29tbWFuZCksXG4gICAgICAnQWNjZWxlcmF0aW9uVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNjZWxlcmF0aW9uVHlwZSksXG4gICAgICAnV2ViU2VydmVyTW9kZSc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndlYlNlcnZlck1vZGUpLFxuICAgICAgJ0ltYWdlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbWFnZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tRE5TUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNlYXJjaGVzOiBUaGUgdmFsdWUgb2YgdGhlIEROUyBzZWFyY2ggZG9tYWluLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VhcmNoZXM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRuc09wdGlvbnM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZG5zT3B0aW9ucz86IEFycmF5PFJvc0Z1bmN0aW9uLkRuc09wdGlvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZVNlcnZlcnM6IFRoZSBJUCBhZGRyZXNzIG9mIHRoZSBETlMgc2VydmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmFtZVNlcnZlcnM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ3VzdG9tRE5TUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEN1c3RvbUROU1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX0N1c3RvbUROU1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VhcmNoZXMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnNlYXJjaGVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkbnNPcHRpb25zJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zRnVuY3Rpb25fRG5zT3B0aW9uc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5kbnNPcHRpb25zKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lU2VydmVycycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMubmFtZVNlcnZlcnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ3VzdG9tRE5TUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5DdXN0b21ETlNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEN1c3RvbUROU1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uQ3VzdG9tRE5TYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uQ3VzdG9tRE5TUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX0N1c3RvbUROU1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1NlYXJjaGVzJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc2VhcmNoZXMpLFxuICAgICAgJ0Ruc09wdGlvbnMnOiByb3MubGlzdE1hcHBlcihyb3NGdW5jdGlvbkRuc09wdGlvbnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZG5zT3B0aW9ucyksXG4gICAgICAnTmFtZVNlcnZlcnMnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5uYW1lU2VydmVycyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGltZW91dFNlY29uZHM6IFRoZSB0aW1lb3V0IHBlcmlvZCBvZiBoZWFsdGggY2hlY2tzLiBWYWxpZCB2YWx1ZXM6IDEgdG8gMy4gRGVmYXVsdCB2YWx1ZTogMS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRpbWVvdXRTZWNvbmRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluaXRpYWxEZWxheVNlY29uZHM6IFRoZSBkZWxheSBiZXR3ZWVuIHRoZSBjb250YWluZXIgc3RhcnR1cCBhbmQgdGhlIGhlYWx0aCBjaGVjay4gVmFsaWQgdmFsdWVzOiAwIHRvIDEyMC4gRGVmYXVsdCB2YWx1ZTogMC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGluaXRpYWxEZWxheVNlY29uZHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaHR0cEdldFVybDogVGhlIGhlYWx0aCBjaGVjayBVUkwgb2YgdGhlIGN1c3RvbSBjb250YWluZXIuIFRoZSBjb250ZW50IGNhbiBiZSB1cCB0byAyLDA0OCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGh0dHBHZXRVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGVyaW9kU2Vjb25kczogVGhlIGhlYWx0aCBjaGVjayBwZXJpb2QuIFZhbHVlIHJhbmdlOiAxIHRvIDEyMC4gRGVmYXVsdCB2YWx1ZTogMy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBlcmlvZFNlY29uZHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZmFpbHVyZVRocmVzaG9sZDogVGhlIHRocmVzaG9sZCBmb3IgaGVhbHRoIGNoZWNrIGZhaWx1cmVzLiBXaGVuIHRoaXMgdmFsdWUgaXMgcmVhY2hlZCwgdGhlIHN5c3RlbSBjb25zaWRlcnMgdGhlIGNoZWNrIGZhaWxlZC4gVmFsdWUgcmFuZ2U6IDEgdG8gMTIwLiBEZWZhdWx0IHZhbHVlOiAzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZmFpbHVyZVRocmVzaG9sZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdWNjZXNzVGhyZXNob2xkOiBUaGUgdGhyZXNob2xkIGZvciBoZWFsdGggY2hlY2sgc3VjY2Vzc2VzLiBXaGVuIHRoaXMgdmFsdWUgaXMgcmVhY2hlZCwgdGhlIHN5c3RlbSBjb25zaWRlcnMgdGhlIGNoZWNrIHN1Y2NlZWRlZC4gVmFsdWUgcmFuZ2U6IDEgdG8gMTIwLiBEZWZhdWx0IHZhbHVlOiAxLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3VjY2Vzc1RocmVzaG9sZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEN1c3RvbUhlYWx0aENoZWNrQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEN1c3RvbUhlYWx0aENoZWNrQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fQ3VzdG9tSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRpbWVvdXRTZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy50aW1lb3V0U2Vjb25kcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dFNlY29uZHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50aW1lb3V0U2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMyxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dFNlY29uZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZW91dFNlY29uZHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluaXRpYWxEZWxheVNlY29uZHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luaXRpYWxEZWxheVNlY29uZHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbml0aWFsRGVsYXlTZWNvbmRzLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luaXRpYWxEZWxheVNlY29uZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcykpO1xuICAgIGlmKHByb3BlcnRpZXMuaHR0cEdldFVybCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmh0dHBHZXRVcmwpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5odHRwR2V0VXJsKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cEdldFVybCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5odHRwR2V0VXJsLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMDQ4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwR2V0VXJsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmh0dHBHZXRVcmwpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBlcmlvZFNlY29uZHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZFNlY29uZHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wZXJpb2RTZWNvbmRzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZFNlY29uZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcykpO1xuICAgIGlmKHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCAmJiAodHlwZW9mIHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbHVyZVRocmVzaG9sZCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmZhaWx1cmVUaHJlc2hvbGQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbHVyZVRocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5mYWlsdXJlVGhyZXNob2xkKSk7XG4gICAgaWYocHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkICYmICh0eXBlb2YgcHJvcGVydGllcy5zdWNjZXNzVGhyZXNob2xkKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWNjZXNzVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWNjZXNzVGhyZXNob2xkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnN1Y2Nlc3NUaHJlc2hvbGQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ3VzdG9tSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkN1c3RvbUhlYWx0aENoZWNrQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDdXN0b21IZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uQ3VzdG9tSGVhbHRoQ2hlY2tDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25DdXN0b21IZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9DdXN0b21IZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1RpbWVvdXRTZWNvbmRzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0U2Vjb25kcyksXG4gICAgICAnSW5pdGlhbERlbGF5U2Vjb25kcyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5pdGlhbERlbGF5U2Vjb25kcyksXG4gICAgICAnSHR0cEdldFVybCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaHR0cEdldFVybCksXG4gICAgICAnUGVyaW9kU2Vjb25kcyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGVyaW9kU2Vjb25kcyksXG4gICAgICAnRmFpbHVyZVRocmVzaG9sZCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmFpbHVyZVRocmVzaG9sZCksXG4gICAgICAnU3VjY2Vzc1RocmVzaG9sZCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3VjY2Vzc1RocmVzaG9sZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhcmdzOiBUaGUgc3RhcnR1cCBwYXJhbWV0ZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYXJncz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29tbWFuZDogVGhlIHN0YXJ0dXAgY29tbWFuZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbW1hbmQ/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDdXN0b21SdW50aW1lQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXJncycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuYXJncykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tbWFuZCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuY29tbWFuZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDdXN0b21SdW50aW1lQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5DdXN0b21SdW50aW1lQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDdXN0b21SdW50aW1lQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5DdXN0b21SdW50aW1lQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Z1bmN0aW9uQ3VzdG9tUnVudGltZUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9DdXN0b21SdW50aW1lQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQXJncyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmFyZ3MpLFxuICAgICAgJ0NvbW1hbmQnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jb21tYW5kKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0Z1bmN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBEZXN0aW5hdGlvblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvblN1Y2Nlc3M6IFdoZW4gdGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgc3VjY2Vzc2Z1bGx5LCBGQyB3aWxsIGNhbGwgdGhlIHRhcmdldCBjb3JyZXNwb25kaW5nIHRvIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvblN1Y2Nlc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb25GYWlsdXJlOiBXaGVuIHRoZSBmdW5jdGlvbiBpcyBpbnZva2VkIGZhaWxlZCAoc3lzdGVtIGVycm9yIG9yIGZ1bmN0aW9uIGludGVybmFsIGVycm9yKSwgRkMgd2lsbCBjYWxsIHRoZSB0YXJnZXQgY29ycmVzcG9uZGluZyB0byB0aGUgY29uZmlndXJhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb25GYWlsdXJlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRGVzdGluYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRGVzdGluYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbl9EZXN0aW5hdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb25TdWNjZXNzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9uU3VjY2VzcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb25GYWlsdXJlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9uRmFpbHVyZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJEZXN0aW5hdGlvblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uRGVzdGluYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERlc3RpbmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbi5EZXN0aW5hdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkRlc3RpbmF0aW9uUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX0Rlc3RpbmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnT25TdWNjZXNzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vblN1Y2Nlc3MpLFxuICAgICAgJ09uRmFpbHVyZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub25GYWlsdXJlKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0Z1bmN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBEbnNPcHRpb25zUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hbWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRG5zT3B0aW9uc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBEbnNPcHRpb25zUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25fRG5zT3B0aW9uc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkRuc09wdGlvbnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkRuc09wdGlvbnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERuc09wdGlvbnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkRuc09wdGlvbnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25EbnNPcHRpb25zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX0Ruc09wdGlvbnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdWYWx1ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgJ05hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRnVuY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByZVN0b3A6IFRoZSBjb25maWd1cmF0aW9uIG9mIGxpZmVjeWNsZSBjYWxsYmFja3MuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcmVTdG9wPzogUm9zRnVuY3Rpb24uUHJlU3RvcFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByZUZyZWV6ZTogVGhlIGNvbmZpZ3VyYXRpb24gb2YgbGlmZWN5Y2xlIGNhbGxiYWNrcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByZUZyZWV6ZT86IFJvc0Z1bmN0aW9uLlByZUZyZWV6ZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbl9JbnN0YW5jZUxpZmVjeWNsZUNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJlU3RvcCcsIFJvc0Z1bmN0aW9uX1ByZVN0b3BQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5wcmVTdG9wKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmVGcmVlemUnLCBSb3NGdW5jdGlvbl9QcmVGcmVlemVQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5wcmVGcmVlemUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSW5zdGFuY2VMaWZlY3ljbGVDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLkluc3RhbmNlTGlmZWN5Y2xlQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbnN0YW5jZUxpZmVjeWNsZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uSW5zdGFuY2VMaWZlY3ljbGVDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25JbnN0YW5jZUxpZmVjeWNsZUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9JbnN0YW5jZUxpZmVjeWNsZUNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ByZVN0b3AnOiByb3NGdW5jdGlvblByZVN0b3BQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmVTdG9wKSxcbiAgICAgICdQcmVGcmVlemUnOiByb3NGdW5jdGlvblByZUZyZWV6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByZUZyZWV6ZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJlRnJlZXplUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSB0aW1lb3V0IHBlcmlvZCBmb3IgdGhlIGV4ZWN1dGlvbi4gVW5pdDogc2Vjb25kcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaGFuZGxlcjogVGhlIGhhbmRsZXIgb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaGFuZGxlcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFByZUZyZWV6ZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmVGcmVlemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NGdW5jdGlvbl9QcmVGcmVlemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZW91dCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGFuZGxlcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5oYW5kbGVyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlByZUZyZWV6ZVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6RnVuY3Rpb24uUHJlRnJlZXplYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmVGcmVlemVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLlByZUZyZWV6ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvblByZUZyZWV6ZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbl9QcmVGcmVlemVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdUaW1lb3V0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0KSxcbiAgICAgICdIYW5kbGVyJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oYW5kbGVyKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0Z1bmN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcmVTdG9wUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSB0aW1lb3V0IHBlcmlvZCBmb3IgdGhlIGV4ZWN1dGlvbi4gVW5pdDogc2Vjb25kcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaGFuZGxlcjogVGhlIGhhbmRsZXIgb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaGFuZGxlcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFByZVN0b3BQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJlU3RvcFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Z1bmN0aW9uX1ByZVN0b3BQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZW91dCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGFuZGxlcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5oYW5kbGVyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlByZVN0b3BQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLlByZVN0b3BgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByZVN0b3BQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uLlByZVN0b3BgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25QcmVTdG9wUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0Z1bmN0aW9uX1ByZVN0b3BQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdUaW1lb3V0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0KSxcbiAgICAgICdIYW5kbGVyJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oYW5kbGVyKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0Z1bmN0aW9uSW52b2tlcmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy1mdW5jdGlvbmludm9rZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NGdW5jdGlvbkludm9rZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXN5bmM6IEludm9jYXRpb24gdHlwZSwgU3luYyBvciBBc3luYy4gRGVmYXVsdHMgdG8gU3luYy5cbiAgICAgKi9cbiAgICByZWFkb25seSBhc3luYz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2hlY2tBc3luY0ludm9jYXRpb246IENoZWNrIGFzeW5jIGludm9jYXRpb24gc2V0dGluZy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjaGVja0FzeW5jSW52b2NhdGlvbj86IFJvc0Z1bmN0aW9uSW52b2tlci5DaGVja0FzeW5jSW52b2NhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNoZWNrRXJyb3I6IFdoZXRoZXIgY2hlY2sgZXJyb3IgZm9yIGZ1bmN0aW9uIGludm9jYXRpb24gcmVzdWx0LlxuICAgICAqIElmIHNldCB0cnVlIGFuZCBmdW5jdGlvbiBpbnZvY2F0aW9uIHJlc3VsdCBoYXMgZXJyb3IsIHRoZSByZXNvdXJjZSBjcmVhdGlvbiB3aWxsIGJlIHJlZ2FyZCBhcyBmYWlsZWQuXG4gICAgICogRGVmYXVsdCBpcyBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNoZWNrRXJyb3I/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGV2ZW50OiBUaGlzIHZhbHVlIGlzIHBhc3NlZCB0byBmdW5jdGlvbiBhcyB1dGYtOCBlbmNvZGVkIHN0cmluZy5JdOKAmXMgZnVuY3Rpb27igJlzIHJlc3BvbnNpYmlsaXR5IHRvIGludGVycHJldCB0aGUgdmFsdWUuXG4gICAgICogSWYgdGhlIHZhbHVlIG5lZWRzIHRvIGJlIGJpbmFyeSwgZW5jb2RlIGl0IHZpYSBiYXNlNjQgYmVmb3JlIHBhc3NpbmcgdG8gdGhpcyBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICByZWFkb25seSBldmVudD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBleGVjdXRlVmVyc2lvbjogSWYgdGhlIHByb3BlcnR5IGlzIG5vdCBzcGVjaWZpZWQgZm9yIGNyZWF0aW9uIGFuZCB1cGRhdGUsIHRoZSBmdW5jdGlvbiB3aWxsIG5vdCBiZSBpbnZva2VkLiBUaGUgY2hhbmdlIG9mIHRoZSBwcm9wZXJ0eSBsZWFkcyB0byB0aGUgaW52b2tlIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBleGVjdXRlVmVyc2lvbj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBxdWFsaWZpZXI6IHNlcnZpY2UgdmVyc2lvbiwgY2FuIGJlIHZlcnNpb25JZCBvciBhbGlhc05hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBxdWFsaWZpZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZVJlZ2lvbklkOiBXaGljaCByZWdpb24gc2VydmljZSBiZWxvbmdzIHRvLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VSZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NGdW5jdGlvbkludm9rZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRnVuY3Rpb25JbnZva2VyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25JbnZva2VyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleGVjdXRlVmVyc2lvbicsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5leGVjdXRlVmVyc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVJlZ2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VSZWdpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2VydmljZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXN5bmMnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmFzeW5jKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdldmVudCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ldmVudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hlY2tFcnJvcicsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuY2hlY2tFcnJvcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hlY2tBc3luY0ludm9jYXRpb24nLCBSb3NGdW5jdGlvbkludm9rZXJfQ2hlY2tBc3luY0ludm9jYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jaGVja0FzeW5jSW52b2NhdGlvbikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NGdW5jdGlvbkludm9rZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uSW52b2tlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRnVuY3Rpb25JbnZva2VyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpGdW5jdGlvbkludm9rZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRnVuY3Rpb25JbnZva2VyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NGdW5jdGlvbkludm9rZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnRnVuY3Rpb25OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mdW5jdGlvbk5hbWUpLFxuICAgICAgJ1NlcnZpY2VOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICAnQXN5bmMnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hc3luYyksXG4gICAgICAnQ2hlY2tBc3luY0ludm9jYXRpb24nOiByb3NGdW5jdGlvbkludm9rZXJDaGVja0FzeW5jSW52b2NhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNoZWNrQXN5bmNJbnZvY2F0aW9uKSxcbiAgICAgICdDaGVja0Vycm9yJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2hlY2tFcnJvciksXG4gICAgICAnRXZlbnQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmV2ZW50KSxcbiAgICAgICdFeGVjdXRlVmVyc2lvbic6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXhlY3V0ZVZlcnNpb24pLFxuICAgICAgJ1F1YWxpZmllcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucXVhbGlmaWVyKSxcbiAgICAgICdTZXJ2aWNlUmVnaW9uSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VSZWdpb25JZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6RkM6OkZ1bmN0aW9uSW52b2tlcmAsIHdoaWNoIGlzIHVzZWQgdG8gaW52b2tlIGEgZnVuY3Rpb24uXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEZ1bmN0aW9uSW52b2tlcmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtZnVuY3Rpb25pbnZva2VyXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NGdW5jdGlvbkludm9rZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkZDOjpGdW5jdGlvbkludm9rZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzdWx0OiBEZXBlbmRzIG9uIHJlc3VsdCB0eXBlOlxuTm9SZXN1bHQ6IEFzeW5jIGludm9rZSBoYXMgbm8gcmVzdWx0LlxuU3VjY2VzczogVGhlIHJlc3BvbnNlIG9mIHRoZSBmdW5jdGlvbi4gVGhlIHJlc3BvbnNlIHNob3VsZCBiZSB1dGYtOCBlbmNvZGVkIHN0cmluZywgb3RoZXJ3aXNlIFJPUyB3aWxsIHJlcG9ydCBhbiBlcnJvci4gSWYgdGhlIHJlc3BvbnNlIGlzIGJpbmFyeSwgZW5jb2RlIGl0IHZpYSBiYXNlNjQgYmVmb3JlIGl0IGlzIHJldHVybmVkLlxuRmFpbHVyZTogRXJyb3IgTWVzc2FnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc3VsdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXN1bHRUeXBlOiBSZXN1bHQgdHlwZTpcbk5vUmVzdWx0OiBBc3luYyBpbnZva2UgaGFzIG5vIHJlc3VsdC5cblN1Y2Nlc3M6IFN5bmMgaW52b2tlIHN1Y2NlZWRzLlxuRmFpbHVyZTogU3luYyBpbnZva2UgZmFpbHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXN1bHRUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmdW5jdGlvbk5hbWU6IEZ1bmN0aW9uIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZnVuY3Rpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFzeW5jOiBJbnZvY2F0aW9uIHR5cGUsIFN5bmMgb3IgQXN5bmMuIERlZmF1bHRzIHRvIFN5bmMuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNoZWNrQXN5bmNJbnZvY2F0aW9uOiBDaGVjayBhc3luYyBpbnZvY2F0aW9uIHNldHRpbmcuXG4gICAgICovXG4gICAgcHVibGljIGNoZWNrQXN5bmNJbnZvY2F0aW9uOiBSb3NGdW5jdGlvbkludm9rZXIuQ2hlY2tBc3luY0ludm9jYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGVja0Vycm9yOiBXaGV0aGVyIGNoZWNrIGVycm9yIGZvciBmdW5jdGlvbiBpbnZvY2F0aW9uIHJlc3VsdC5cbiAgICAgKiBJZiBzZXQgdHJ1ZSBhbmQgZnVuY3Rpb24gaW52b2NhdGlvbiByZXN1bHQgaGFzIGVycm9yLCB0aGUgcmVzb3VyY2UgY3JlYXRpb24gd2lsbCBiZSByZWdhcmQgYXMgZmFpbGVkLlxuICAgICAqIERlZmF1bHQgaXMgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgY2hlY2tFcnJvcjogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBldmVudDogVGhpcyB2YWx1ZSBpcyBwYXNzZWQgdG8gZnVuY3Rpb24gYXMgdXRmLTggZW5jb2RlZCBzdHJpbmcuSXTigJlzIGZ1bmN0aW9u4oCZcyByZXNwb25zaWJpbGl0eSB0byBpbnRlcnByZXQgdGhlIHZhbHVlLlxuICAgICAqIElmIHRoZSB2YWx1ZSBuZWVkcyB0byBiZSBiaW5hcnksIGVuY29kZSBpdCB2aWEgYmFzZTY0IGJlZm9yZSBwYXNzaW5nIHRvIHRoaXMgcHJvcGVydHkuXG4gICAgICovXG4gICAgcHVibGljIGV2ZW50OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXhlY3V0ZVZlcnNpb246IElmIHRoZSBwcm9wZXJ0eSBpcyBub3Qgc3BlY2lmaWVkIGZvciBjcmVhdGlvbiBhbmQgdXBkYXRlLCB0aGUgZnVuY3Rpb24gd2lsbCBub3QgYmUgaW52b2tlZC4gVGhlIGNoYW5nZSBvZiB0aGUgcHJvcGVydHkgbGVhZHMgdG8gdGhlIGludm9rZSBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIGV4ZWN1dGVWZXJzaW9uOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcXVhbGlmaWVyOiBzZXJ2aWNlIHZlcnNpb24sIGNhbiBiZSB2ZXJzaW9uSWQgb3IgYWxpYXNOYW1lXG4gICAgICovXG4gICAgcHVibGljIHF1YWxpZmllcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VSZWdpb25JZDogV2hpY2ggcmVnaW9uIHNlcnZpY2UgYmVsb25ncyB0by5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZVJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRnVuY3Rpb25JbnZva2VyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NGdW5jdGlvbkludm9rZXIuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clJlc3VsdCA9IHRoaXMuZ2V0QXR0KCdSZXN1bHQnKTtcbiAgICAgICAgdGhpcy5hdHRyUmVzdWx0VHlwZSA9IHRoaXMuZ2V0QXR0KCdSZXN1bHRUeXBlJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZ1bmN0aW9uTmFtZSA9IHByb3BzLmZ1bmN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHByb3BzLnNlcnZpY2VOYW1lO1xuICAgICAgICB0aGlzLmFzeW5jID0gcHJvcHMuYXN5bmM7XG4gICAgICAgIHRoaXMuY2hlY2tBc3luY0ludm9jYXRpb24gPSBwcm9wcy5jaGVja0FzeW5jSW52b2NhdGlvbjtcbiAgICAgICAgdGhpcy5jaGVja0Vycm9yID0gcHJvcHMuY2hlY2tFcnJvcjtcbiAgICAgICAgdGhpcy5ldmVudCA9IHByb3BzLmV2ZW50O1xuICAgICAgICB0aGlzLmV4ZWN1dGVWZXJzaW9uID0gcHJvcHMuZXhlY3V0ZVZlcnNpb247XG4gICAgICAgIHRoaXMucXVhbGlmaWVyID0gcHJvcHMucXVhbGlmaWVyO1xuICAgICAgICB0aGlzLnNlcnZpY2VSZWdpb25JZCA9IHByb3BzLnNlcnZpY2VSZWdpb25JZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHRoaXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2VydmljZU5hbWU6IHRoaXMuc2VydmljZU5hbWUsXG4gICAgICAgICAgICBhc3luYzogdGhpcy5hc3luYyxcbiAgICAgICAgICAgIGNoZWNrQXN5bmNJbnZvY2F0aW9uOiB0aGlzLmNoZWNrQXN5bmNJbnZvY2F0aW9uLFxuICAgICAgICAgICAgY2hlY2tFcnJvcjogdGhpcy5jaGVja0Vycm9yLFxuICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICBleGVjdXRlVmVyc2lvbjogdGhpcy5leGVjdXRlVmVyc2lvbixcbiAgICAgICAgICAgIHF1YWxpZmllcjogdGhpcy5xdWFsaWZpZXIsXG4gICAgICAgICAgICBzZXJ2aWNlUmVnaW9uSWQ6IHRoaXMuc2VydmljZVJlZ2lvbklkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NGdW5jdGlvbkludm9rZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NGdW5jdGlvbkludm9rZXIge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENoZWNrQXN5bmNJbnZvY2F0aW9uUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNoZWNrVGltZXM6IENoZWNrIHRpbWVzIGZvciBhc3luYyBpbnZvY2F0aW9uIHJlc3VsdC5cbiAgICAgKiBEZWZhdWx0IGlzIDEwIHRpbWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY2hlY2tUaW1lczogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNoZWNrSW50ZXJ2YWw6IENoZWNrIGludGVydmFsIGZvciBhc3luYyBpbnZvY2F0aW9uIHJlc3VsdC5cbiAgICAgKiBEZWZhdWx0IGlzIDEwIHNlY29uZHMuIFVuaXQgaXMgc2Vjb25kXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjaGVja0ludGVydmFsOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW5hYmxlZDogV2hldGhlciBjaGVjayBhc3luYyBpbnZvY2F0aW9uIHJlc3VsdC5cbiAgICAgKiBJZiBzZXQgdHJ1ZSBhbmQgZnVuY3Rpb24gaW52b2NhdGlvbiB0eXBlIGlzIGFzeW5jLCB0aGUgcmVzb3VyY2UgY3JlYXRpb24gd2lsbCB3YWl0IHVudGlsIGludm9jYXRpb24gZmluaXNoIGFuZCBjaGVjayByZXN1bHQuXG4gICAgICogRGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYENoZWNrQXN5bmNJbnZvY2F0aW9uUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENoZWNrQXN5bmNJbnZvY2F0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRnVuY3Rpb25JbnZva2VyX0NoZWNrQXN5bmNJbnZvY2F0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjaGVja1RpbWVzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNoZWNrVGltZXMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNoZWNrVGltZXMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNoZWNrVGltZXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NoZWNrVGltZXMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jaGVja1RpbWVzLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NoZWNrVGltZXMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuY2hlY2tUaW1lcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hlY2tJbnRlcnZhbCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jaGVja0ludGVydmFsKSk7XG4gICAgaWYocHJvcGVydGllcy5jaGVja0ludGVydmFsICYmICh0eXBlb2YgcHJvcGVydGllcy5jaGVja0ludGVydmFsKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjaGVja0ludGVydmFsJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY2hlY2tJbnRlcnZhbCxcbiAgICAgICAgICAgIG1pbjogMTAsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hlY2tJbnRlcnZhbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5jaGVja0ludGVydmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGVkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmVuYWJsZWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZWQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmVuYWJsZWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ2hlY2tBc3luY0ludm9jYXRpb25Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uSW52b2tlci5DaGVja0FzeW5jSW52b2NhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ2hlY2tBc3luY0ludm9jYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OkZ1bmN0aW9uSW52b2tlci5DaGVja0FzeW5jSW52b2NhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NGdW5jdGlvbkludm9rZXJDaGVja0FzeW5jSW52b2NhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NGdW5jdGlvbkludm9rZXJfQ2hlY2tBc3luY0ludm9jYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdDaGVja1RpbWVzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jaGVja1RpbWVzKSxcbiAgICAgICdDaGVja0ludGVydmFsJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jaGVja0ludGVydmFsKSxcbiAgICAgICdFbmFibGVkJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5hYmxlZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NMYXllcmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy1sYXllclxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0xheWVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvZGU6IFRoZSBjb2RlIG9mIGxheWVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvZGU6IFJvc0xheWVyLkNvZGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb21wYXRpYmxlUnVudGltZTogVGhlIHJ1bnRpbWUgZW52aXJvbm1lbnQgc3VwcG9ydGVkIGJ5IHRoZSBsYXllci4gRm9yIGV4YW1wbGU6bm9kZWpzMTIsIG5vZGVqczEwLCBub2RlanM4LCBub2RlanM2LCBweXRob24zLCBhbmQgcHl0aG9uMi43XG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tcGF0aWJsZVJ1bnRpbWU6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGF5ZXJOYW1lOiBUaGUgbmFtZSBvZiBsYXllclxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxheWVyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGxheWVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0xheWVyUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0xheWVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTGF5ZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBhdGlibGVSdW50aW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvbXBhdGlibGVSdW50aW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5jb21wYXRpYmxlUnVudGltZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmNvbXBhdGlibGVSdW50aW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuY29tcGF0aWJsZVJ1bnRpbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21wYXRpYmxlUnVudGltZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jb21wYXRpYmxlUnVudGltZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGF0aWJsZVJ1bnRpbWUnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmNvbXBhdGlibGVSdW50aW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGF5ZXJOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxheWVyTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMubGF5ZXJOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMubGF5ZXJOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubGF5ZXJOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGF5ZXJOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmxheWVyTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYocHJvcGVydGllcy5sYXllck5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmxheWVyTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGF5ZXJOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmxheWVyTmFtZSxcbiAgICAgICAgICByZWc6IC9eW2EtekEtWl1bX2EtekEtWjAtOS1dKyQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsYXllck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubGF5ZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb2RlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvZGUnLCBSb3NMYXllcl9Db2RlUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29kZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NMYXllclByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6TGF5ZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0xheWVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpMYXllcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NMYXllclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zTGF5ZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQ29kZSc6IHJvc0xheWVyQ29kZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvZGUpLFxuICAgICAgJ0NvbXBhdGlibGVSdW50aW1lJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29tcGF0aWJsZVJ1bnRpbWUpLFxuICAgICAgJ0xheWVyTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubGF5ZXJOYW1lKSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkZDOjpMYXllcmAsIHdoaWNoIGlzIHVzZWQgdG8gcmVsZWFzZSBhIGxheWVyIHZlcnNpb24uXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYExheWVyYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy1sYXllclxuICovXG5leHBvcnQgY2xhc3MgUm9zTGF5ZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkZDOjpMYXllclwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcm46IFRoZSBuYW1lIG9mIHRoZSBsYXllciByZXNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFybjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBMYXllck5hbWU6IFRoZSBuYW1lIG9mIGxheWVyXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMYXllck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVmVyc2lvbjogVGhlIHZlcnNpb24gb2YgdGhlIGxheWVyIHJlc291cmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVmVyc2lvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29kZTogVGhlIGNvZGUgb2YgbGF5ZXIuXG4gICAgICovXG4gICAgcHVibGljIGNvZGU6IFJvc0xheWVyLkNvZGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb21wYXRpYmxlUnVudGltZTogVGhlIHJ1bnRpbWUgZW52aXJvbm1lbnQgc3VwcG9ydGVkIGJ5IHRoZSBsYXllci4gRm9yIGV4YW1wbGU6bm9kZWpzMTIsIG5vZGVqczEwLCBub2RlanM4LCBub2RlanM2LCBweXRob24zLCBhbmQgcHl0aG9uMi43XG4gICAgICovXG4gICAgcHVibGljIGNvbXBhdGlibGVSdW50aW1lOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxheWVyTmFtZTogVGhlIG5hbWUgb2YgbGF5ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgbGF5ZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgbGF5ZXIuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTGF5ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0xheWVyLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBcm4gPSB0aGlzLmdldEF0dCgnQXJuJyk7XG4gICAgICAgIHRoaXMuYXR0ckxheWVyTmFtZSA9IHRoaXMuZ2V0QXR0KCdMYXllck5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyVmVyc2lvbiA9IHRoaXMuZ2V0QXR0KCdWZXJzaW9uJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNvZGUgPSBwcm9wcy5jb2RlO1xuICAgICAgICB0aGlzLmNvbXBhdGlibGVSdW50aW1lID0gcHJvcHMuY29tcGF0aWJsZVJ1bnRpbWU7XG4gICAgICAgIHRoaXMubGF5ZXJOYW1lID0gcHJvcHMubGF5ZXJOYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgICAgICAgY29tcGF0aWJsZVJ1bnRpbWU6IHRoaXMuY29tcGF0aWJsZVJ1bnRpbWUsXG4gICAgICAgICAgICBsYXllck5hbWU6IHRoaXMubGF5ZXJOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0xheWVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zTGF5ZXIge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvZGVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgemlwRmlsZTogVGhlIGZ1bmN0aW9uIGNvZGUgdGhhdCBpcyBlbmNvZGVkIGluIEJhc2U2NC4gXG4gICAgICogUHJpb3JpdHk6IFppcEZpbGUgPiBPc3NCdWNrZXROYW1lJk9zc09iamVjdE5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB6aXBGaWxlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9zc09iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBPU1Mgb2JqZWN0IHRoYXQgc3RvcmVzIHRoZSBaSVAgcGFja2FnZSBvZiB0aGUgZnVuY3Rpb24gY29kZS4gXG4gICAgICogUHJpb3JpdHk6IFppcEZpbGUgPiBPc3NCdWNrZXROYW1lJk9zc09iamVjdE5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvc3NPYmplY3ROYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG9zc0J1Y2tldE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBPYmplY3QgU3RvcmFnZSBTZXJ2aWNlIChPU1MpIGJ1Y2tldCB0aGF0IFxuICAgICAqIHN0b3JlcyB0aGUgWklQIHBhY2thZ2Ugb2YgdGhlIGZ1bmN0aW9uIGNvZGUuXG4gICAgICogUHJpb3JpdHk6IFppcEZpbGUgPiBPc3NCdWNrZXROYW1lJk9zc09iamVjdE5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvc3NCdWNrZXROYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ29kZVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb2RlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTGF5ZXJfQ29kZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignemlwRmlsZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy56aXBGaWxlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvc3NPYmplY3ROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9zc09iamVjdE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29zc0J1Y2tldE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3NzQnVja2V0TmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDb2RlUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpMYXllci5Db2RlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb2RlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpMYXllci5Db2RlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0xheWVyQ29kZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NMYXllcl9Db2RlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnWmlwRmlsZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuemlwRmlsZSksXG4gICAgICAnT3NzT2JqZWN0TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3NzT2JqZWN0TmFtZSksXG4gICAgICAnT3NzQnVja2V0TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3NzQnVja2V0TmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NQcm92aXNpb25Db25maWdgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtcHJvdmlzaW9uY29uZmlnXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUHJvdmlzaW9uQ29uZmlnUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZ1bmN0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHF1YWxpZmllcjogU2VydmljZSdzIGFsaWFzLlxuICAgICAqIEV4YW1wbGUgOiBcIkxBVEVTVFwiXG4gICAgICovXG4gICAgcmVhZG9ubHkgcXVhbGlmaWVyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0OiBOdW1iZXIgb2YgcHJvdmlzaW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUHJvdmlzaW9uQ29uZmlnUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1Byb3Zpc2lvbkNvbmZpZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1Byb3Zpc2lvbkNvbmZpZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhcmdldCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRhcmdldCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2VydmljZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NQcm92aXNpb25Db25maWdQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlByb3Zpc2lvbkNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUHJvdmlzaW9uQ29uZmlnUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpQcm92aXNpb25Db25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUHJvdmlzaW9uQ29uZmlnUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQcm92aXNpb25Db25maWdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnRnVuY3Rpb25OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mdW5jdGlvbk5hbWUpLFxuICAgICAgJ1F1YWxpZmllcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucXVhbGlmaWVyKSxcbiAgICAgICdTZXJ2aWNlTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZU5hbWUpLFxuICAgICAgJ1RhcmdldCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGFyZ2V0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpGQzo6UHJvdmlzaW9uQ29uZmlnYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgcHJvdmlzaW9uZWQgaW5zdGFuY2VzIGluIEZ1bmN0aW9uIENvbXB1dGUuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFByb3Zpc2lvbkNvbmZpZ2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtcHJvdmlzaW9uY29uZmlnXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NQcm92aXNpb25Db25maWcgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkZDOjpQcm92aXNpb25Db25maWdcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRnVuY3Rpb25OYW1lOiBUaGUgZnVuY3Rpb24gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRnVuY3Rpb25OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFF1YWxpZmllcjogVGhlIHNlcnZpY2UgYWxpYXNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clF1YWxpZmllcjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXNvdXJjZTogVGhlIHJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlTmFtZTogVGhlIHNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVGFyZ2V0OiBOdW1iZXIgb2YgcHJvdmlzaW9uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYXJnZXQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBmdW5jdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBxdWFsaWZpZXI6IFNlcnZpY2UncyBhbGlhcy5cbiAgICAgKiBFeGFtcGxlIDogXCJMQVRFU1RcIlxuICAgICAqL1xuICAgIHB1YmxpYyBxdWFsaWZpZXI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0OiBOdW1iZXIgb2YgcHJvdmlzaW9uXG4gICAgICovXG4gICAgcHVibGljIHRhcmdldDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1Byb3Zpc2lvbkNvbmZpZ1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zUHJvdmlzaW9uQ29uZmlnLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJGdW5jdGlvbk5hbWUgPSB0aGlzLmdldEF0dCgnRnVuY3Rpb25OYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clF1YWxpZmllciA9IHRoaXMuZ2V0QXR0KCdRdWFsaWZpZXInKTtcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2UgPSB0aGlzLmdldEF0dCgnUmVzb3VyY2UnKTtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZU5hbWUgPSB0aGlzLmdldEF0dCgnU2VydmljZU5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyVGFyZ2V0ID0gdGhpcy5nZXRBdHQoJ1RhcmdldCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5mdW5jdGlvbk5hbWUgPSBwcm9wcy5mdW5jdGlvbk5hbWU7XG4gICAgICAgIHRoaXMucXVhbGlmaWVyID0gcHJvcHMucXVhbGlmaWVyO1xuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gcHJvcHMuc2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gcHJvcHMudGFyZ2V0O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogdGhpcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBxdWFsaWZpZXI6IHRoaXMucXVhbGlmaWVyLFxuICAgICAgICAgICAgc2VydmljZU5hbWU6IHRoaXMuc2VydmljZU5hbWUsXG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NQcm92aXNpb25Db25maWdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NTZXJ2aWNlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjLXNlcnZpY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NTZXJ2aWNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGVsZXRlIHRoZSBzZXJ2aWNlIHdpdGhvdXQgd2FpdGluZyBmb3IgbmV0d29yayBpbnRlcmZhY2VzIHRvIGJlIGNsZWFuZWQgdXAgaWYgVnBjQ29uZmlnIGlzIHNwZWNpZmllZC4gRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvbkZvcmNlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogU2VydmljZSBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0QWNjZXNzOiBTZXQgaXQgdG8gdHJ1ZSB0byBlbmFibGUgSW50ZXJuZXQgYWNjZXNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0QWNjZXNzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dDb25maWc6IExvZyBjb25maWd1cmF0aW9uLiBGdW5jdGlvbiBDb21wdXRlIHB1c2hlcyBmdW5jdGlvbiBleGVjdXRpb24gbG9ncyB0byB0aGUgY29uZmlndXJlZCBsb2cgc3RvcmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9nQ29uZmlnPzogUm9zU2VydmljZS5Mb2dDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXNDb25maWc6IE5BUyBjb25maWd1cmF0aW9uLiBGdW5jdGlvbiBDb21wdXRlIHVzZXMgYSBzcGVjaWZpZWQgTkFTIGNvbmZpZ3VyZWQgb24gdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFzQ29uZmlnPzogUm9zU2VydmljZS5OYXNDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvc3NNb3VudENvbmZpZzogVGhlIE9TUyBtb3VudCBjb25maWd1cmF0aW9ucy5cbiAgICAgKi9cbiAgICByZWFkb25seSBvc3NNb3VudENvbmZpZz86IFJvc1NlcnZpY2UuT3NzTW91bnRDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb2xlOiBUaGUgcm9sZSBncmFudHMgRnVuY3Rpb24gQ29tcHV0ZSB0aGUgcGVybWlzc2lvbiB0byBhY2Nlc3MgdXNlcuKAmXMgY2xvdWQgcmVzb3VyY2VzLCBzdWNoIGFzIHB1c2hpbmcgbG9ncyB0byB1c2Vy4oCZcyBsb2cgc3RvcmUuIFRoZSB0ZW1wb3JhcnkgU1RTIHRva2VuIGdlbmVyYXRlZCBmcm9tIHRoaXMgcm9sZSBjYW4gYmUgcmV0cmlldmVkIGZyb20gZnVuY3Rpb24gY29udGV4dCBhbmQgdXNlZCB0byBhY2Nlc3MgY2xvdWQgcmVzb3VyY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvbGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gc2VydmljZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBzZXJ2aWNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc1NlcnZpY2UuVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhY2luZ0NvbmZpZzogVGhlIFRyYWNpbmcgQW5hbHlzaXMgY29uZmlndXJhdGlvbi4gQWZ0ZXIgRnVuY3Rpb24gQ29tcHV0ZSBpbnRlZ3JhdGVzIHdpdGggVHJhY2luZyBBbmFseXNpcywgeW91IGNhbiByZWNvcmQgdGhlIHN0YXkgdGltZSBvZiBhIHJlcXVlc3QgaW4gRnVuY3Rpb24gQ29tcHV0ZSwgdmlldyB0aGUgY29sZCBzdGFydCB0aW1lIGZvciBhIGZ1bmN0aW9uLCBhbmQgcmVjb3JkIHRoZSBleGVjdXRpb24gdGltZSBvZiBhIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYWNpbmdDb25maWc/OiBSb3NTZXJ2aWNlLlRyYWNpbmdDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNCaW5kaW5nczogRnVuY3Rpb24gSW52b2NhdGlvbiBvbmx5IGJ5IFNwZWNpZmllZCBWUENzLiBcbiAgICAgKiBCeSBkZWZhdWx0LCB5b3UgY2FuIGludm9rZSB0aGUgZnVuY3Rpb24gYnkgdXNpbmcgdGhlIEludGVybmV0IGVuZHBvaW50IGFuZCBpbnRlcm5hbCBlbmRwb2ludCBhZnRlciBhIGZ1bmN0aW9uIGlzIGNyZWF0ZWQuIElmIHlvdSB3YW50IHRoZSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9ubHkgYnkgdXNpbmcgc3BlY2lmaWVkIFZQQ3MsIGJ1dCBub3QgdGhlIEludGVybmV0IGVuZHBvaW50IG9yIGludGVybmFsIGVuZHBvaW50LCB5b3UgbXVzdCBiaW5kIHRoZSBzcGVjaWZpZWQgVlBDcyB0byB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNCaW5kaW5ncz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjQ29uZmlnOiBWUEMgY29uZmlndXJhdGlvbi4gRnVuY3Rpb24gQ29tcHV0ZSB1c2VzIHRoZSBjb25maWcgdG8gc2V0dXAgRU5JIGluIHRoZSBzcGVjaWZpYyBWUEMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjQ29uZmlnPzogUm9zU2VydmljZS5WcGNDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTZXJ2aWNlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NlcnZpY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZXJ2aWNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb2xlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJvbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0QWNjZXNzJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5pbnRlcm5ldEFjY2VzcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGV0aW9uRm9yY2UnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmRlbGV0aW9uRm9yY2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyYWNpbmdDb25maWcnLCBSb3NTZXJ2aWNlX1RyYWNpbmdDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy50cmFjaW5nQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNDb25maWcnLCBSb3NTZXJ2aWNlX1ZwY0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZwY0NvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2VydmljZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3NzTW91bnRDb25maWcnLCBSb3NTZXJ2aWNlX09zc01vdW50Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMub3NzTW91bnRDb25maWcpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnZwY0JpbmRpbmdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudnBjQmluZGluZ3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy52cGNCaW5kaW5ncykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0JpbmRpbmdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnZwY0JpbmRpbmdzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjQmluZGluZ3MnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnZwY0JpbmRpbmdzKSk7XG4gICAgaWYocHJvcGVydGllcy50YWdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zU2VydmljZV9UYWdzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hc0NvbmZpZycsIFJvc1NlcnZpY2VfTmFzQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFzQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dDb25maWcnLCBSb3NTZXJ2aWNlX0xvZ0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxvZ0NvbmZpZykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NTZXJ2aWNlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTZXJ2aWNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlcnZpY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NlcnZpY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnU2VydmljZU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSxcbiAgICAgICdEZWxldGlvbkZvcmNlJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVsZXRpb25Gb3JjZSksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgICdJbnRlcm5ldEFjY2Vzcyc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmludGVybmV0QWNjZXNzKSxcbiAgICAgICdMb2dDb25maWcnOiByb3NTZXJ2aWNlTG9nQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9nQ29uZmlnKSxcbiAgICAgICdOYXNDb25maWcnOiByb3NTZXJ2aWNlTmFzQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFzQ29uZmlnKSxcbiAgICAgICdPc3NNb3VudENvbmZpZyc6IHJvc1NlcnZpY2VPc3NNb3VudENvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9zc01vdW50Q29uZmlnKSxcbiAgICAgICdSb2xlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yb2xlKSxcbiAgICAgICdUYWdzJzogcm9zLmxpc3RNYXBwZXIocm9zU2VydmljZVRhZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGFncyksXG4gICAgICAnVHJhY2luZ0NvbmZpZyc6IHJvc1NlcnZpY2VUcmFjaW5nQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHJhY2luZ0NvbmZpZyksXG4gICAgICAnVnBjQmluZGluZ3MnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy52cGNCaW5kaW5ncyksXG4gICAgICAnVnBjQ29uZmlnJzogcm9zU2VydmljZVZwY0NvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZwY0NvbmZpZyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6RkM6OlNlcnZpY2VgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIHNlcnZpY2UgaW4gRnVuY3Rpb24gQ29tcHV0ZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgU2VydmljZWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtc2VydmljZVxuICovXG5leHBvcnQgY2xhc3MgUm9zU2VydmljZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RkM6OlNlcnZpY2VcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW50ZXJuZXRBY2Nlc3M6IFdoZXRoZXIgZW5hYmxlIEludGVybmV0IGFjY2Vzc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW50ZXJuZXRBY2Nlc3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTG9nUHJvamVjdDogTG9nIHByb2plY3Qgb2Ygc2VydmljZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9nUHJvamVjdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBMb2dzdG9yZTogTG9nIHN0b3JlIG9mIHNlcnZpY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxvZ3N0b3JlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvbGU6IFJvbGUgb2Ygc2VydmljZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm9sZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlSWQ6IFRoZSBzZXJ2aWNlIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2VydmljZU5hbWU6IFRoZSBzZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRhZ3M6IFRhZ3Mgb2Ygc2VydmljZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFnczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWcGNJZDogVlBDIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGVsZXRlIHRoZSBzZXJ2aWNlIHdpdGhvdXQgd2FpdGluZyBmb3IgbmV0d29yayBpbnRlcmZhY2VzIHRvIGJlIGNsZWFuZWQgdXAgaWYgVnBjQ29uZmlnIGlzIHNwZWNpZmllZC4gRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVsZXRpb25Gb3JjZTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogU2VydmljZSBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0QWNjZXNzOiBTZXQgaXQgdG8gdHJ1ZSB0byBlbmFibGUgSW50ZXJuZXQgYWNjZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcm5ldEFjY2VzczogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dDb25maWc6IExvZyBjb25maWd1cmF0aW9uLiBGdW5jdGlvbiBDb21wdXRlIHB1c2hlcyBmdW5jdGlvbiBleGVjdXRpb24gbG9ncyB0byB0aGUgY29uZmlndXJlZCBsb2cgc3RvcmUuXG4gICAgICovXG4gICAgcHVibGljIGxvZ0NvbmZpZzogUm9zU2VydmljZS5Mb2dDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXNDb25maWc6IE5BUyBjb25maWd1cmF0aW9uLiBGdW5jdGlvbiBDb21wdXRlIHVzZXMgYSBzcGVjaWZpZWQgTkFTIGNvbmZpZ3VyZWQgb24gdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIG5hc0NvbmZpZzogUm9zU2VydmljZS5OYXNDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvc3NNb3VudENvbmZpZzogVGhlIE9TUyBtb3VudCBjb25maWd1cmF0aW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3NzTW91bnRDb25maWc6IFJvc1NlcnZpY2UuT3NzTW91bnRDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb2xlOiBUaGUgcm9sZSBncmFudHMgRnVuY3Rpb24gQ29tcHV0ZSB0aGUgcGVybWlzc2lvbiB0byBhY2Nlc3MgdXNlcuKAmXMgY2xvdWQgcmVzb3VyY2VzLCBzdWNoIGFzIHB1c2hpbmcgbG9ncyB0byB1c2Vy4oCZcyBsb2cgc3RvcmUuIFRoZSB0ZW1wb3JhcnkgU1RTIHRva2VuIGdlbmVyYXRlZCBmcm9tIHRoaXMgcm9sZSBjYW4gYmUgcmV0cmlldmVkIGZyb20gZnVuY3Rpb24gY29udGV4dCBhbmQgdXNlZCB0byBhY2Nlc3MgY2xvdWQgcmVzb3VyY2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyByb2xlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gc2VydmljZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBzZXJ2aWNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcHVibGljIHRhZ3M6IFJvc1NlcnZpY2UuVGFnc1Byb3BlcnR5W10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhY2luZ0NvbmZpZzogVGhlIFRyYWNpbmcgQW5hbHlzaXMgY29uZmlndXJhdGlvbi4gQWZ0ZXIgRnVuY3Rpb24gQ29tcHV0ZSBpbnRlZ3JhdGVzIHdpdGggVHJhY2luZyBBbmFseXNpcywgeW91IGNhbiByZWNvcmQgdGhlIHN0YXkgdGltZSBvZiBhIHJlcXVlc3QgaW4gRnVuY3Rpb24gQ29tcHV0ZSwgdmlldyB0aGUgY29sZCBzdGFydCB0aW1lIGZvciBhIGZ1bmN0aW9uLCBhbmQgcmVjb3JkIHRoZSBleGVjdXRpb24gdGltZSBvZiBhIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmFjaW5nQ29uZmlnOiBSb3NTZXJ2aWNlLlRyYWNpbmdDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNCaW5kaW5nczogRnVuY3Rpb24gSW52b2NhdGlvbiBvbmx5IGJ5IFNwZWNpZmllZCBWUENzLiBcbiAgICAgKiBCeSBkZWZhdWx0LCB5b3UgY2FuIGludm9rZSB0aGUgZnVuY3Rpb24gYnkgdXNpbmcgdGhlIEludGVybmV0IGVuZHBvaW50IGFuZCBpbnRlcm5hbCBlbmRwb2ludCBhZnRlciBhIGZ1bmN0aW9uIGlzIGNyZWF0ZWQuIElmIHlvdSB3YW50IHRoZSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9ubHkgYnkgdXNpbmcgc3BlY2lmaWVkIFZQQ3MsIGJ1dCBub3QgdGhlIEludGVybmV0IGVuZHBvaW50IG9yIGludGVybmFsIGVuZHBvaW50LCB5b3UgbXVzdCBiaW5kIHRoZSBzcGVjaWZpZWQgVlBDcyB0byB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdnBjQmluZGluZ3M6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjQ29uZmlnOiBWUEMgY29uZmlndXJhdGlvbi4gRnVuY3Rpb24gQ29tcHV0ZSB1c2VzIHRoZSBjb25maWcgdG8gc2V0dXAgRU5JIGluIHRoZSBzcGVjaWZpYyBWUEMuXG4gICAgICovXG4gICAgcHVibGljIHZwY0NvbmZpZzogUm9zU2VydmljZS5WcGNDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NTZXJ2aWNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTZXJ2aWNlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJJbnRlcm5ldEFjY2VzcyA9IHRoaXMuZ2V0QXR0KCdJbnRlcm5ldEFjY2VzcycpO1xuICAgICAgICB0aGlzLmF0dHJMb2dQcm9qZWN0ID0gdGhpcy5nZXRBdHQoJ0xvZ1Byb2plY3QnKTtcbiAgICAgICAgdGhpcy5hdHRyTG9nc3RvcmUgPSB0aGlzLmdldEF0dCgnTG9nc3RvcmUnKTtcbiAgICAgICAgdGhpcy5hdHRyUm9sZSA9IHRoaXMuZ2V0QXR0KCdSb2xlJyk7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VJZCA9IHRoaXMuZ2V0QXR0KCdTZXJ2aWNlSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZU5hbWUgPSB0aGlzLmdldEF0dCgnU2VydmljZU5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyVGFncyA9IHRoaXMuZ2V0QXR0KCdUYWdzJyk7XG4gICAgICAgIHRoaXMuYXR0clZwY0lkID0gdGhpcy5nZXRBdHQoJ1ZwY0lkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gcHJvcHMuc2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMuZGVsZXRpb25Gb3JjZSA9IHByb3BzLmRlbGV0aW9uRm9yY2U7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pbnRlcm5ldEFjY2VzcyA9IHByb3BzLmludGVybmV0QWNjZXNzO1xuICAgICAgICB0aGlzLmxvZ0NvbmZpZyA9IHByb3BzLmxvZ0NvbmZpZztcbiAgICAgICAgdGhpcy5uYXNDb25maWcgPSBwcm9wcy5uYXNDb25maWc7XG4gICAgICAgIHRoaXMub3NzTW91bnRDb25maWcgPSBwcm9wcy5vc3NNb3VudENvbmZpZztcbiAgICAgICAgdGhpcy5yb2xlID0gcHJvcHMucm9sZTtcbiAgICAgICAgdGhpcy50YWdzID0gcHJvcHMudGFncztcbiAgICAgICAgdGhpcy50cmFjaW5nQ29uZmlnID0gcHJvcHMudHJhY2luZ0NvbmZpZztcbiAgICAgICAgdGhpcy52cGNCaW5kaW5ncyA9IHByb3BzLnZwY0JpbmRpbmdzO1xuICAgICAgICB0aGlzLnZwY0NvbmZpZyA9IHByb3BzLnZwY0NvbmZpZztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIGRlbGV0aW9uRm9yY2U6IHRoaXMuZGVsZXRpb25Gb3JjZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW50ZXJuZXRBY2Nlc3M6IHRoaXMuaW50ZXJuZXRBY2Nlc3MsXG4gICAgICAgICAgICBsb2dDb25maWc6IHRoaXMubG9nQ29uZmlnLFxuICAgICAgICAgICAgbmFzQ29uZmlnOiB0aGlzLm5hc0NvbmZpZyxcbiAgICAgICAgICAgIG9zc01vdW50Q29uZmlnOiB0aGlzLm9zc01vdW50Q29uZmlnLFxuICAgICAgICAgICAgcm9sZTogdGhpcy5yb2xlLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICAgICAgdHJhY2luZ0NvbmZpZzogdGhpcy50cmFjaW5nQ29uZmlnLFxuICAgICAgICAgICAgdnBjQmluZGluZ3M6IHRoaXMudnBjQmluZGluZ3MsXG4gICAgICAgICAgICB2cGNDb25maWc6IHRoaXMudnBjQ29uZmlnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTZXJ2aWNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9nQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByb2plY3Q6IFRoZSBwcm9qZWN0IG5hbWUgb2YgTG9ncyBzZXJ2aWNlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcm9qZWN0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGxvZ0JlZ2luUnVsZTogVGhlIGxvZyByb3RhdGlvbiBydWxlLiBMb2cgYXJlIHNwbGl0IGJhc2VkIG9uIHRoZSBydWxlLiBUaGUgbG9nIGJsb2NrcyBvYnRhaW5lZCBhZnRlciB0aGUgc3BsaXR0aW5nIGFyZSB3cml0dGVuIHRvIExvZyBTZXJ2aWNlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogTm9uZTogZGlzYWJsZXMgdGhlIGxvZyBzcGxpdHRpbmcgcnVsZS4gVGhpcyBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgKiBEZWZhdWx0UmVnZXg6IHNldHMgdGhlIGxvZyBzcGxpdHRpbmcgcnVsZSB0byB0aGUgZGVmYXVsdCByZWd1bGFyIGV4cHJlc3Npb24uIElmIHlvdSBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gRGVmYXVsdFJlZ2V4LCBsb2dzIGFyZSBzcGxpdCBiYXNlZCBvbiB0aGUgZGF0YSBpbiBhIGxvZy4gRm9yIGV4YW1wbGUsIHRoZSBsaW5lIHRoYXQgY29udGFpbnMgMjAyMS0xMC0xMCBpbiB0aGUgbG9nIGlzIGNvbnNpZGVyZWQgYXMgdGhlIGZpcnN0IGxpbmUgb2YgYSBsb2cgYmxvY2suIFRoZSBmaXJzdCBsaW5lIGFuZCB0aGUgZm9sbG93aW5nIGNvbnNlY3V0aXZlIGxpbmVzIHRoYXQgZG8gbm90IGNvbnRhaW4gZGF0ZXMgaW4gdGhlIGxvZyBhcmUgd3JpdHRlbiB0byBMb2cgU2VydmljZSBhcyBhIHdob2xlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbG9nQmVnaW5SdWxlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGxvZ3N0b3JlOiBUaGUgbG9nIHN0b3JlIG5hbWUgb2YgTG9ncyBzZXJ2aWNlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBsb2dzdG9yZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBlbmFibGVSZXF1ZXN0TWV0cmljczogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIHRoZSByZXF1ZXN0LWxldmVsIG1ldHJpY3MuIElmIHlvdSBlbmFibGUgdGhpcyBmZWF0dXJlLCB5b3UgY2FuIHZpZXcgdGhlIHRpbWUgYW5kIG1lbW9yeSB0aGF0IGFyZSBjb25zdW1lZCBmb3IgYSBzcGVjaWZpYyBpbnZvY2F0aW9uIG9mIGVhY2ggZnVuY3Rpb24gaW4gdGhlIHNlcnZpY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBmYWxzZTogZGlzYWJsZXMgcmVxdWVzdC1sZXZlbCBtZXRyaWNzLlxuICAgICAqIHRydWU6IGVuYWJsZXMgcmVxdWVzdC1sZXZlbCBtZXRyaWNzLiBEZWZhdWx0IHZhbHVlOiB0cnVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW5hYmxlUmVxdWVzdE1ldHJpY3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTG9nQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExvZ0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlcnZpY2VfTG9nQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb2plY3QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ0JlZ2luUnVsZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dCZWdpblJ1bGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ3N0b3JlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvZ3N0b3JlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGVSZXF1ZXN0TWV0cmljcycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZW5hYmxlUmVxdWVzdE1ldHJpY3MpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTG9nQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLkxvZ0NvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTG9nQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLkxvZ0NvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZXJ2aWNlTG9nQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1NlcnZpY2VfTG9nQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUHJvamVjdCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvamVjdCksXG4gICAgICAnTG9nQmVnaW5SdWxlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dCZWdpblJ1bGUpLFxuICAgICAgJ0xvZ3N0b3JlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dzdG9yZSksXG4gICAgICAnRW5hYmxlUmVxdWVzdE1ldHJpY3MnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVSZXF1ZXN0TWV0cmljcyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3VudFBvaW50c1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZXJ2ZXJBZGRyOiBUaGUgYWRkcmVzcyBvZiBOQVMgaW5zdGFuY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZXJ2ZXJBZGRyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbW91bnREaXI6IEEgbG9jYWwgbW91bnQgcG9pbnQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtb3VudERpcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTW91bnRQb2ludHNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTW91bnRQb2ludHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZXJ2aWNlX01vdW50UG9pbnRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2ZXJBZGRyJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZlckFkZHIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZlckFkZHInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmVyQWRkcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnREaXInLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubW91bnREaXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vdW50RGlyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1vdW50RGlyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk1vdW50UG9pbnRzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLk1vdW50UG9pbnRzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNb3VudFBvaW50c1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZS5Nb3VudFBvaW50c2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZXJ2aWNlTW91bnRQb2ludHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zU2VydmljZV9Nb3VudFBvaW50c1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1NlcnZlckFkZHInOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZlckFkZHIpLFxuICAgICAgJ01vdW50RGlyJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tb3VudERpciksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBOYXNDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbW91bnRQb2ludHM6IE1vdW50IHBvaW50c1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbW91bnRQb2ludHM6IEFycmF5PFJvc1NlcnZpY2UuTW91bnRQb2ludHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdXNlcklkOiBVc2VyIElEXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB1c2VySWQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBHcm91cCBJRFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZ3JvdXBJZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTmFzQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5hc0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlcnZpY2VfTmFzQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb3VudFBvaW50cycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tb3VudFBvaW50cykpO1xuICAgIGlmKHByb3BlcnRpZXMubW91bnRQb2ludHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5tb3VudFBvaW50cykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLm1vdW50UG9pbnRzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnRQb2ludHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubW91bnRQb2ludHMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vdW50UG9pbnRzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zU2VydmljZV9Nb3VudFBvaW50c1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5tb3VudFBvaW50cykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnVzZXJJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMudXNlcklkICYmICh0eXBlb2YgcHJvcGVydGllcy51c2VySWQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJJZCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnVzZXJJZCxcbiAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICBtYXg6IDY1NTM0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1c2VySWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudXNlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdyb3VwSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmdyb3VwSWQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmdyb3VwSWQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5ncm91cElkLFxuICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgIG1heDogNjU1MzQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJOYXNDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2UuTmFzQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBOYXNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2UuTmFzQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlcnZpY2VOYXNDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zU2VydmljZV9OYXNDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdNb3VudFBvaW50cyc6IHJvcy5saXN0TWFwcGVyKHJvc1NlcnZpY2VNb3VudFBvaW50c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5tb3VudFBvaW50cyksXG4gICAgICAnVXNlcklkJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy51c2VySWQpLFxuICAgICAgJ0dyb3VwSWQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwSWQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgT3NzTW91bnRDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbW91bnRQb2ludHM6IFRoZSBPU1MgbW91bnQgcG9pbnQgY29uZmlndXJhdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtb3VudFBvaW50czogQXJyYXk8Um9zU2VydmljZS5Pc3NNb3VudENvbmZpZ01vdW50UG9pbnRzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgT3NzTW91bnRDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgT3NzTW91bnRDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZXJ2aWNlX09zc01vdW50Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb3VudFBvaW50cycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tb3VudFBvaW50cykpO1xuICAgIGlmKHByb3BlcnRpZXMubW91bnRQb2ludHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5tb3VudFBvaW50cykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLm1vdW50UG9pbnRzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnRQb2ludHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubW91bnRQb2ludHMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vdW50UG9pbnRzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zU2VydmljZV9Pc3NNb3VudENvbmZpZ01vdW50UG9pbnRzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLm1vdW50UG9pbnRzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk9zc01vdW50Q29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLk9zc01vdW50Q29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBPc3NNb3VudENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZS5Pc3NNb3VudENvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZXJ2aWNlT3NzTW91bnRDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zU2VydmljZV9Pc3NNb3VudENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ01vdW50UG9pbnRzJzogcm9zLmxpc3RNYXBwZXIocm9zU2VydmljZU9zc01vdW50Q29uZmlnTW91bnRQb2ludHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubW91bnRQb2ludHMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgT3NzTW91bnRDb25maWdNb3VudFBvaW50c1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZWFkT25seTogV2hldGhlciB0aGUgb3NzIGJ1Y2tldCBpcyByZWFkLW9ubHlcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlYWRPbmx5OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGJ1Y2tldE5hbWU6IG1vdW50IE9TUyBidWNrZXQgbmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGJ1Y2tldE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBidWNrZXRQYXRoOiBQYXRoIG9mIHRoZSBtb3VudGVkIE9TUyBCdWNrZXQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBidWNrZXRQYXRoOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW5kUG9pbnQ6IE9TUyBhY2Nlc3MgYWRkcmVzcyxcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVuZFBvaW50OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbW91bnREaXI6IEEgbG9jYWwgbW91bnQgcG9pbnQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtb3VudERpcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgT3NzTW91bnRDb25maWdNb3VudFBvaW50c1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBPc3NNb3VudENvbmZpZ01vdW50UG9pbnRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2VydmljZV9Pc3NNb3VudENvbmZpZ01vdW50UG9pbnRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWFkT25seScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZWFkT25seSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVhZE9ubHknLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLnJlYWRPbmx5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXROYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2J1Y2tldE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYnVja2V0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnVja2V0UGF0aCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5idWNrZXRQYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdidWNrZXRQYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJ1Y2tldFBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuZFBvaW50Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmVuZFBvaW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmRQb2ludCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lbmRQb2ludCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW91bnREaXInLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubW91bnREaXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vdW50RGlyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1vdW50RGlyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk9zc01vdW50Q29uZmlnTW91bnRQb2ludHNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2UuT3NzTW91bnRDb25maWdNb3VudFBvaW50c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgT3NzTW91bnRDb25maWdNb3VudFBvaW50c1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZS5Pc3NNb3VudENvbmZpZ01vdW50UG9pbnRzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlcnZpY2VPc3NNb3VudENvbmZpZ01vdW50UG9pbnRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1NlcnZpY2VfT3NzTW91bnRDb25maWdNb3VudFBvaW50c1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1JlYWRPbmx5Jzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVhZE9ubHkpLFxuICAgICAgJ0J1Y2tldE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJ1Y2tldE5hbWUpLFxuICAgICAgJ0J1Y2tldFBhdGgnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJ1Y2tldFBhdGgpLFxuICAgICAgJ0VuZFBvaW50Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmRQb2ludCksXG4gICAgICAnTW91bnREaXInOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1vdW50RGlyKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1NlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhZ3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2VydmljZV9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUYWdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLlRhZ3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlNlcnZpY2UuVGFnc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZXJ2aWNlVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTZXJ2aWNlX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdWYWx1ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgJ0tleSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1NlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYWNpbmdDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdHlwZTogVGhlIHR5cGUgb2YgdGhlIHRyYWNpbmcgYW5hbHlzaXMgc3lzdGVtLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXJhbXM6IFRoZSB0cmFjaW5nIGFuYWx5c2lzIHBhcmFtZXRlcnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBUcmFjaW5nQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRyYWNpbmdDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZXJ2aWNlX1RyYWNpbmdDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFyYW1zJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5wYXJhbXMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVHJhY2luZ0NvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZS5UcmFjaW5nQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUcmFjaW5nQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpTZXJ2aWNlLlRyYWNpbmdDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VydmljZVRyYWNpbmdDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zU2VydmljZV9UcmFjaW5nQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHlwZSksXG4gICAgICAnUGFyYW1zJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucGFyYW1zKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1NlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFZwY0NvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVlBDIElEXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHpvbmVJZDogWm9uZSBJZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgem9uZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZTd2l0Y2hJZHM6IExpc3Qgb2YgVlN3aXRjaCBJRHNcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZTd2l0Y2hJZHM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBTZWN1cml0eSBncm91cCBJRFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBWcGNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVnBjQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2VydmljZV9WcGNDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignem9uZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnpvbmVJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndlN3aXRjaElkcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52U3dpdGNoSWRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2U3dpdGNoSWRzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy52U3dpdGNoSWRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZWN1cml0eUdyb3VwSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VjdXJpdHlHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZWN1cml0eUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VjdXJpdHlHcm91cElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlZwY0NvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZS5WcGNDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFZwY0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpGQzo6U2VydmljZS5WcGNDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VydmljZVZwY0NvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTZXJ2aWNlX1ZwY0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZwY0lkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNJZCksXG4gICAgICAnWm9uZUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy56b25lSWQpLFxuICAgICAgJ1ZTd2l0Y2hJZHMnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy52U3dpdGNoSWRzKSxcbiAgICAgICdTZWN1cml0eUdyb3VwSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlY3VyaXR5R3JvdXBJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NUcmlnZ2VyYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjLXRyaWdnZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NUcmlnZ2VyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBmdW5jdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJpZ2dlckNvbmZpZzogRXZlbnQgc291cmNlIHNwZWNpZmljIHRyaWdnZXIgY29uZmlndXJhdGlvbi4gVGhlIHZhbHVlIGlzIGRpZmZlcmVudCBhY2NvcmRpbmcgdG8gdHJpZ2dlciB0eXBlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyaWdnZXJDb25maWc6IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmlnZ2VyTmFtZTogVHJpZ2dlciBuYW1lLlxuICAgICAqIEV4YW1wbGUgOiBcImltYWdlX3Jlc2l6ZVwiXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJpZ2dlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmlnZ2VyVHlwZTogVHJpZ2dlciB0eXBlLCBlLmcuIG9zcywgdGltZXIsIGxvZ3MuIFRoaXMgZGV0ZXJtaW5lcyBob3cgdGhlIHRyaWdnZXIgY29uZmlnIGlzIGludGVycHJldGVkLlxuICAgICAqIEV4YW1wbGUgOiBcIm9zc1wiXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJpZ2dlclR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnZvY2F0aW9uUm9sZTogVGhlIHJvbGUgZ3JhbnRzIGV2ZW50IHNvdXJjZSB0aGUgcGVybWlzc2lvbiB0byBydW4gZnVuY3Rpb24gb24gYmVoYWxmIG9mIHVzZXIuIFRoaXMgaXMgb3B0aW9uYWwgZm9yIHNvbWUgdHJpZ2dlcnMuXG4gICAgICogRXhhbXBsZSA6IFwiYWNzOnJhbTo6MTIzNDU2Nzg5MDpyb2xlXFwvZmMtdGVzdFwiXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW52b2NhdGlvblJvbGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcXVhbGlmaWVyOiBzZXJ2aWNlIHZlcnNpb24gb3IgYWxpYXMuXG4gICAgICogRXhhbXBsZSA6IFwiTEFURVNUXCJcbiAgICAgKi9cbiAgICByZWFkb25seSBxdWFsaWZpZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlQXJuOiBUaGUgQWxpeXVuIFJlc291cmNlIE5hbWUgKEFSTikgb2YgZXZlbnQgc291cmNlLiBUaGlzIGlzIG9wdGlvbmFsIGZvciBzb21lIHRyaWdnZXJzLlxuICAgICAqIEV4YW1wbGUgOiBcImFjczpvc3M6Y24tc2hhbmdoYWk6MTIzNDU6bXlidWNrZXRcIlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZUFybj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NUcmlnZ2VyUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RyaWdnZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NUcmlnZ2VyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmlnZ2VyVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50cmlnZ2VyVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJpZ2dlclR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHJpZ2dlclR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyaWdnZXJOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRyaWdnZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmlnZ2VyTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50cmlnZ2VyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlQXJuJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNvdXJjZUFybikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2VydmljZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJpZ2dlckNvbmZpZycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50cmlnZ2VyQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmlnZ2VyQ29uZmlnJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy50cmlnZ2VyQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnZvY2F0aW9uUm9sZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnZvY2F0aW9uUm9sZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NUcmlnZ2VyUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpUcmlnZ2VyYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NUcmlnZ2VyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkZDOjpUcmlnZ2VyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1RyaWdnZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1RyaWdnZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnRnVuY3Rpb25OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mdW5jdGlvbk5hbWUpLFxuICAgICAgJ1NlcnZpY2VOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICAnVHJpZ2dlckNvbmZpZyc6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRyaWdnZXJDb25maWcpLFxuICAgICAgJ1RyaWdnZXJOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50cmlnZ2VyTmFtZSksXG4gICAgICAnVHJpZ2dlclR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyaWdnZXJUeXBlKSxcbiAgICAgICdJbnZvY2F0aW9uUm9sZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW52b2NhdGlvblJvbGUpLFxuICAgICAgJ1F1YWxpZmllcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucXVhbGlmaWVyKSxcbiAgICAgICdTb3VyY2VBcm4nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNvdXJjZUFybiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6RkM6OlRyaWdnZXJgLCB3aGljaCBpcyB1c2VkIHRvIHRyaWdnZXIgdGhlIGludm9jYXRpb24gb2YgYSBmdW5jdGlvbi5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgVHJpZ2dlcmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtdHJpZ2dlclxuICovXG5leHBvcnQgY2xhc3MgUm9zVHJpZ2dlciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RkM6OlRyaWdnZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRnVuY3Rpb25OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUcmlnZ2VySWQ6IFRoZSB0cmlnZ2VyIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJpZ2dlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRyaWdnZXJOYW1lOiBUcmlnZ2VyIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUcmlnZ2VyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBVcmxJbnRlcm5ldDogVGhlIHB1YmxpYyBkb21haW4gYWRkcmVzcy4gWW91IGNhbiBhY2Nlc3MgSFRUUCB0cmlnZ2VycyBvdmVyIHRoZSBJbnRlcm5ldCBieSB1c2luZyBIVFRQIG9yIEhUVFBTLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVXJsSW50ZXJuZXQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVXJsSW50cmFuZXQ6IFRoZSBwcml2YXRlIGVuZHBvaW50LiBJbiBhIFZQQywgeW91IGNhbiBhY2Nlc3MgSFRUUCB0cmlnZ2VycyBieSB1c2luZyBIVFRQIG9yIEhUVFBTLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVXJsSW50cmFuZXQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZnVuY3Rpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmlnZ2VyQ29uZmlnOiBFdmVudCBzb3VyY2Ugc3BlY2lmaWMgdHJpZ2dlciBjb25maWd1cmF0aW9uLiBUaGUgdmFsdWUgaXMgZGlmZmVyZW50IGFjY29yZGluZyB0byB0cmlnZ2VyIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHRyaWdnZXJDb25maWc6IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmlnZ2VyTmFtZTogVHJpZ2dlciBuYW1lLlxuICAgICAqIEV4YW1wbGUgOiBcImltYWdlX3Jlc2l6ZVwiXG4gICAgICovXG4gICAgcHVibGljIHRyaWdnZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJpZ2dlclR5cGU6IFRyaWdnZXIgdHlwZSwgZS5nLiBvc3MsIHRpbWVyLCBsb2dzLiBUaGlzIGRldGVybWluZXMgaG93IHRoZSB0cmlnZ2VyIGNvbmZpZyBpcyBpbnRlcnByZXRlZC5cbiAgICAgKiBFeGFtcGxlIDogXCJvc3NcIlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmlnZ2VyVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludm9jYXRpb25Sb2xlOiBUaGUgcm9sZSBncmFudHMgZXZlbnQgc291cmNlIHRoZSBwZXJtaXNzaW9uIHRvIHJ1biBmdW5jdGlvbiBvbiBiZWhhbGYgb2YgdXNlci4gVGhpcyBpcyBvcHRpb25hbCBmb3Igc29tZSB0cmlnZ2Vycy5cbiAgICAgKiBFeGFtcGxlIDogXCJhY3M6cmFtOjoxMjM0NTY3ODkwOnJvbGVcXC9mYy10ZXN0XCJcbiAgICAgKi9cbiAgICBwdWJsaWMgaW52b2NhdGlvblJvbGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBxdWFsaWZpZXI6IHNlcnZpY2UgdmVyc2lvbiBvciBhbGlhcy5cbiAgICAgKiBFeGFtcGxlIDogXCJMQVRFU1RcIlxuICAgICAqL1xuICAgIHB1YmxpYyBxdWFsaWZpZXI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VBcm46IFRoZSBBbGl5dW4gUmVzb3VyY2UgTmFtZSAoQVJOKSBvZiBldmVudCBzb3VyY2UuIFRoaXMgaXMgb3B0aW9uYWwgZm9yIHNvbWUgdHJpZ2dlcnMuXG4gICAgICogRXhhbXBsZSA6IFwiYWNzOm9zczpjbi1zaGFuZ2hhaToxMjM0NTpteWJ1Y2tldFwiXG4gICAgICovXG4gICAgcHVibGljIHNvdXJjZUFybjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1RyaWdnZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1RyaWdnZXIuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckZ1bmN0aW9uTmFtZSA9IHRoaXMuZ2V0QXR0KCdGdW5jdGlvbk5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZU5hbWUgPSB0aGlzLmdldEF0dCgnU2VydmljZU5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyVHJpZ2dlcklkID0gdGhpcy5nZXRBdHQoJ1RyaWdnZXJJZCcpO1xuICAgICAgICB0aGlzLmF0dHJUcmlnZ2VyTmFtZSA9IHRoaXMuZ2V0QXR0KCdUcmlnZ2VyTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJVcmxJbnRlcm5ldCA9IHRoaXMuZ2V0QXR0KCdVcmxJbnRlcm5ldCcpO1xuICAgICAgICB0aGlzLmF0dHJVcmxJbnRyYW5ldCA9IHRoaXMuZ2V0QXR0KCdVcmxJbnRyYW5ldCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5mdW5jdGlvbk5hbWUgPSBwcm9wcy5mdW5jdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBwcm9wcy5zZXJ2aWNlTmFtZTtcbiAgICAgICAgdGhpcy50cmlnZ2VyQ29uZmlnID0gcHJvcHMudHJpZ2dlckNvbmZpZztcbiAgICAgICAgdGhpcy50cmlnZ2VyTmFtZSA9IHByb3BzLnRyaWdnZXJOYW1lO1xuICAgICAgICB0aGlzLnRyaWdnZXJUeXBlID0gcHJvcHMudHJpZ2dlclR5cGU7XG4gICAgICAgIHRoaXMuaW52b2NhdGlvblJvbGUgPSBwcm9wcy5pbnZvY2F0aW9uUm9sZTtcbiAgICAgICAgdGhpcy5xdWFsaWZpZXIgPSBwcm9wcy5xdWFsaWZpZXI7XG4gICAgICAgIHRoaXMuc291cmNlQXJuID0gcHJvcHMuc291cmNlQXJuO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogdGhpcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIHRyaWdnZXJDb25maWc6IHRoaXMudHJpZ2dlckNvbmZpZyxcbiAgICAgICAgICAgIHRyaWdnZXJOYW1lOiB0aGlzLnRyaWdnZXJOYW1lLFxuICAgICAgICAgICAgdHJpZ2dlclR5cGU6IHRoaXMudHJpZ2dlclR5cGUsXG4gICAgICAgICAgICBpbnZvY2F0aW9uUm9sZTogdGhpcy5pbnZvY2F0aW9uUm9sZSxcbiAgICAgICAgICAgIHF1YWxpZmllcjogdGhpcy5xdWFsaWZpZXIsXG4gICAgICAgICAgICBzb3VyY2VBcm46IHRoaXMuc291cmNlQXJuLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NUcmlnZ2VyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVmVyc2lvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy12ZXJzaW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVmVyc2lvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVmVyc2lvbiBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1ZlcnNpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVmVyc2lvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1ZlcnNpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VydmljZU5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2VydmljZU5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1ZlcnNpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlZlcnNpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZlcnNpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RkM6OlZlcnNpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVmVyc2lvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVmVyc2lvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdTZXJ2aWNlTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZU5hbWUpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6RkM6OlZlcnNpb25gLCB3aGljaCBpcyB1c2VkIHRvIHJlbGVhc2UgYSBWZXJzaW9uLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBWZXJzaW9uYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1mYy12ZXJzaW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NWZXJzaW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpGQzo6VmVyc2lvblwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlTmFtZTogVGhlIHNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVmVyc2lvbklkOiBUaGUgdmVyc2lvbiBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVmVyc2lvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFZlcnNpb24gZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NWZXJzaW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NWZXJzaW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlTmFtZSA9IHRoaXMuZ2V0QXR0KCdTZXJ2aWNlTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJWZXJzaW9uSWQgPSB0aGlzLmdldEF0dCgnVmVyc2lvbklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gcHJvcHMuc2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NWZXJzaW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=