// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::FC::Alias`
 */
export interface RosAliasProps {

    /**
     * @Property aliasName: Alias name
     */
    readonly aliasName: string | ros.IResolvable;

    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * @Property additionalVersion: Additional version
     */
    readonly additionalVersion?: string | ros.IResolvable;

    /**
     * @Property additionalWeight: Traffic weight of additional version. From 0 to 100.
     */
    readonly additionalWeight?: number | ros.IResolvable;

    /**
     * @Property description: Version description
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property versionId: Version ID
     */
    readonly versionId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAliasProps`
 *
 * @param properties - the TypeScript properties of a `RosAliasProps`
 *
 * @returns the result of the validation.
 */
function RosAliasPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('versionId', ros.validateString)(properties.versionId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if(properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
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
    if(properties.additionalWeight && (typeof properties.additionalWeight) !== 'object') {
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
function rosAliasPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosAlias extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Alias";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AliasName: The alias name
     */
    public readonly attrAliasName: ros.IResolvable;

    /**
     * @Attribute ServiceName: The service name
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * @Attribute VersionId: The version ID
     */
    public readonly attrVersionId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aliasName: Alias name
     */
    public aliasName: string | ros.IResolvable;

    /**
     * @Property serviceName: Service name
     */
    public serviceName: string | ros.IResolvable;

    /**
     * @Property additionalVersion: Additional version
     */
    public additionalVersion: string | ros.IResolvable | undefined;

    /**
     * @Property additionalWeight: Traffic weight of additional version. From 0 to 100.
     */
    public additionalWeight: number | ros.IResolvable | undefined;

    /**
     * @Property description: Version description
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property versionId: Version ID
     */
    public versionId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::FC::Alias`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAliasProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aliasName: this.aliasName,
            serviceName: this.serviceName,
            additionalVersion: this.additionalVersion,
            additionalWeight: this.additionalWeight,
            description: this.description,
            versionId: this.versionId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAliasPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::FC::CustomDomain`
 */
export interface RosCustomDomainProps {

    /**
     * @Property domainName: domain name
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property protocol: HTTP or HTTP,HTTPS
     */
    readonly protocol: string | ros.IResolvable;

    /**
     * @Property apiVersion: api version
     */
    readonly apiVersion?: string | ros.IResolvable;

    /**
     * @Property certConfig: certificate info
     */
    readonly certConfig?: RosCustomDomain.CertConfigProperty | ros.IResolvable;

    /**
     * @Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
     */
    readonly routeConfig?: RosCustomDomain.RouteConfigProperty | ros.IResolvable;
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
function rosCustomDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosCustomDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::CustomDomain";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Domain: The domain with protocol.
     */
    public readonly attrDomain: ros.IResolvable;

    /**
     * @Attribute DomainName: The domain name
     */
    public readonly attrDomainName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: domain name
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property protocol: HTTP or HTTP,HTTPS
     */
    public protocol: string | ros.IResolvable;

    /**
     * @Property apiVersion: api version
     */
    public apiVersion: string | ros.IResolvable | undefined;

    /**
     * @Property certConfig: certificate info
     */
    public certConfig: RosCustomDomain.CertConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
     */
    public routeConfig: RosCustomDomain.RouteConfigProperty | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::FC::CustomDomain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomDomainProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            protocol: this.protocol,
            apiVersion: this.apiVersion,
            certConfig: this.certConfig,
            routeConfig: this.routeConfig,
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
    export interface CertConfigProperty {
        /**
         * @Property privateKey: private key
         */
        readonly privateKey: string | ros.IResolvable;
        /**
         * @Property certName: custom certificate name
         */
        readonly certName: string | ros.IResolvable;
        /**
         * @Property certificate: certificate
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FC::CustomDomain.CertConfig` resource
 *
 * @param properties - the TypeScript properties of a `CertConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FC::CustomDomain.CertConfig` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainCertConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomDomain_CertConfigPropertyValidator(properties).assertSuccess();
    return {
      PrivateKey: ros.stringToRosTemplate(properties.privateKey),
      CertName: ros.stringToRosTemplate(properties.certName),
      Certificate: ros.stringToRosTemplate(properties.certificate),
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
function rosCustomDomainRouteConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomDomain_RouteConfigPropertyValidator(properties).assertSuccess();
    return {
      Routes: ros.listMapper(rosCustomDomainRoutesPropertyToRosTemplate)(properties.routes),
    };
}

export namespace RosCustomDomain {
    /**
     * @stability external
     */
    export interface RoutesProperty {
        /**
         * @Property path: HTTP request path when a function is called with a custom domain name, for example: "/login/*"
         */
        readonly path: string | ros.IResolvable;
        /**
         * @Property functionName: Path to the function, for example: "login"
         */
        readonly functionName: string | ros.IResolvable;
        /**
         * @Property serviceName: Path to the service, for example: "blogService"
         */
        readonly serviceName: string | ros.IResolvable;
        /**
         * @Property qualifier: Service version or alias
         */
        readonly qualifier?: string | ros.IResolvable;
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
function rosCustomDomainRoutesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomDomain_RoutesPropertyValidator(properties).assertSuccess();
    return {
      Path: ros.stringToRosTemplate(properties.path),
      FunctionName: ros.stringToRosTemplate(properties.functionName),
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
      Qualifier: ros.stringToRosTemplate(properties.qualifier),
    };
}

/**
 * Properties for defining a `ALIYUN::FC::Function`
 */
export interface RosFunctionProps {

    /**
     * @Property functionName: Function name
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * @Property handler: The function execution entry point.
     */
    readonly handler: string | ros.IResolvable;

    /**
     * @Property runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
     */
    readonly runtime: string | ros.IResolvable;

    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * @Property asyncConfiguration: Configuration of asynchronous function calls
     */
    readonly asyncConfiguration?: RosFunction.AsyncConfigurationProperty | ros.IResolvable;

    /**
     * @Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
     */
    readonly caPort?: number | ros.IResolvable;

    /**
     * @Property code: The code that contains the function implementation.
     */
    readonly code?: RosFunction.CodeProperty | ros.IResolvable;

    /**
     * @Property customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
     */
    readonly customContainerConfig?: RosFunction.CustomContainerConfigProperty | ros.IResolvable;

    /**
     * @Property description: Function description
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
     */
    readonly environmentVariables?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property initializationTimeout: the max execution time of the initializer, in second
     */
    readonly initializationTimeout?: number | ros.IResolvable;

    /**
     * @Property initializer: the entry point of the initializer
     */
    readonly initializer?: string | ros.IResolvable;

    /**
     * @Property instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
     */
    readonly instanceConcurrency?: number | ros.IResolvable;

    /**
     * @Property instanceType: Instance type. Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * @Property memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
     */
    readonly memorySize?: number | ros.IResolvable;

    /**
     * @Property timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
     */
    readonly timeout?: number | ros.IResolvable;
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
            max: 32768,
          }));
    }
    errors.collect(ros.propertyValidator('memorySize', ros.validateNumber)(properties.memorySize));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
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
    errors.collect(ros.propertyValidator('caPort', ros.validateNumber)(properties.caPort));
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('runtime', ros.requiredValidator)(properties.runtime));
    errors.collect(ros.propertyValidator('runtime', ros.validateString)(properties.runtime));
    errors.collect(ros.propertyValidator('environmentVariables', ros.hashValidator(ros.validateAny))(properties.environmentVariables));
    errors.collect(ros.propertyValidator('initializer', ros.validateString)(properties.initializer));
    errors.collect(ros.propertyValidator('initializationTimeout', ros.validateNumber)(properties.initializationTimeout));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if(properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
        errors.collect(ros.propertyValidator('serviceName', ros.validateLength)({
            data: properties.serviceName.length,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    if(properties.instanceConcurrency && (typeof properties.instanceConcurrency) !== 'object') {
        errors.collect(ros.propertyValidator('instanceConcurrency', ros.validateRange)({
            data: properties.instanceConcurrency,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('instanceConcurrency', ros.validateNumber)(properties.instanceConcurrency));
    if(properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
          data: properties.instanceType,
          allowedValues: ["e1","c1"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
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
function rosFunctionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      MemorySize: ros.numberToRosTemplate(properties.memorySize),
      Timeout: ros.numberToRosTemplate(properties.timeout),
    };
}

/**
 * A ROS template type:  `ALIYUN::FC::Function`
 */
export class RosFunction extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Function";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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

    /**
     * @Attribute ServiceId: The service ID
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * @Attribute ServiceName: The service name
     */
    public readonly attrServiceName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property functionName: Function name
     */
    public functionName: string | ros.IResolvable;

    /**
     * @Property handler: The function execution entry point.
     */
    public handler: string | ros.IResolvable;

    /**
     * @Property runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
     */
    public runtime: string | ros.IResolvable;

    /**
     * @Property serviceName: Service name
     */
    public serviceName: string | ros.IResolvable;

    /**
     * @Property asyncConfiguration: Configuration of asynchronous function calls
     */
    public asyncConfiguration: RosFunction.AsyncConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
     */
    public caPort: number | ros.IResolvable | undefined;

    /**
     * @Property code: The code that contains the function implementation.
     */
    public code: RosFunction.CodeProperty | ros.IResolvable | undefined;

    /**
     * @Property customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
     */
    public customContainerConfig: RosFunction.CustomContainerConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property description: Function description
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
     */
    public environmentVariables: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property initializationTimeout: the max execution time of the initializer, in second
     */
    public initializationTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property initializer: the entry point of the initializer
     */
    public initializer: string | ros.IResolvable | undefined;

    /**
     * @Property instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
     */
    public instanceConcurrency: number | ros.IResolvable | undefined;

    /**
     * @Property instanceType: Instance type. Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
     */
    public instanceType: string | ros.IResolvable | undefined;

    /**
     * @Property memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
     */
    public memorySize: number | ros.IResolvable | undefined;

    /**
     * @Property timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
     */
    public timeout: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::FC::Function`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFunctionProps, enableResourcePropertyConstraint: boolean) {
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
        this.customContainerConfig = props.customContainerConfig;
        this.description = props.description;
        this.environmentVariables = props.environmentVariables;
        this.initializationTimeout = props.initializationTimeout;
        this.initializer = props.initializer;
        this.instanceConcurrency = props.instanceConcurrency;
        this.instanceType = props.instanceType;
        this.memorySize = props.memorySize;
        this.timeout = props.timeout;
    }


    protected get rosProperties(): { [key: string]: any }  {
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
            instanceType: this.instanceType,
            memorySize: this.memorySize,
            timeout: this.timeout,
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
    export interface AsyncConfigurationProperty {
        /**
         * @Property destination: Set destination of asynchronous function calls
         */
        readonly destination?: RosFunction.DestinationProperty | ros.IResolvable;
        /**
         * @Property maxAsyncEventAgeInSeconds: Configure the maximum lifetime of messages. The duration is calculated from the time the asynchronous call is triggered, and ends when the message is dequeued for processing. If this period of time is longer than the setting value of MaxAsyncEventAgeInSeconds, the message will be discarded. The unconsumed messages will be counted in the cloud monitoring AsyncEventExpiredDropped indicator.
         */
        readonly maxAsyncEventAgeInSeconds?: number | ros.IResolvable;
        /**
         * @Property statefulInvocation: Whether enable stateful invocation
         */
        readonly statefulInvocation?: boolean | ros.IResolvable;
        /**
         * @Property maxAsyncRetryAttempts: Configure the number of retries
         */
        readonly maxAsyncRetryAttempts?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AsyncConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `AsyncConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_AsyncConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('destination', RosFunction_DestinationPropertyValidator)(properties.destination));
    if(properties.maxAsyncEventAgeInSeconds && (typeof properties.maxAsyncEventAgeInSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('maxAsyncEventAgeInSeconds', ros.validateRange)({
            data: properties.maxAsyncEventAgeInSeconds,
            min: 1,
            max: 2592000,
          }));
    }
    errors.collect(ros.propertyValidator('maxAsyncEventAgeInSeconds', ros.validateNumber)(properties.maxAsyncEventAgeInSeconds));
    errors.collect(ros.propertyValidator('statefulInvocation', ros.validateBoolean)(properties.statefulInvocation));
    if(properties.maxAsyncRetryAttempts && (typeof properties.maxAsyncRetryAttempts) !== 'object') {
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
function rosFunctionAsyncConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_AsyncConfigurationPropertyValidator(properties).assertSuccess();
    return {
      Destination: rosFunctionDestinationPropertyToRosTemplate(properties.destination),
      MaxAsyncEventAgeInSeconds: ros.numberToRosTemplate(properties.maxAsyncEventAgeInSeconds),
      StatefulInvocation: ros.booleanToRosTemplate(properties.statefulInvocation),
      MaxAsyncRetryAttempts: ros.numberToRosTemplate(properties.maxAsyncRetryAttempts),
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
         * @Property zipFile: Base64 encoded zip file content.
     * Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
         */
        readonly zipFile?: string | ros.IResolvable;
        /**
         * @Property ossObjectName: OSS object name.
     * Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
         */
        readonly ossObjectName?: string | ros.IResolvable;
        /**
         * @Property ossBucketName: OSS bucket name.
     * Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
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
function rosFunctionCodePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_CodePropertyValidator(properties).assertSuccess();
    return {
      SourceCode: ros.stringToRosTemplate(properties.sourceCode),
      ZipFile: ros.stringToRosTemplate(properties.zipFile),
      OssObjectName: ros.stringToRosTemplate(properties.ossObjectName),
      OssBucketName: ros.stringToRosTemplate(properties.ossBucketName),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface CustomContainerConfigProperty {
        /**
         * @Property args: Container startup parameters. For example: ["-arg1", "value1"]
         */
        readonly args?: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the Container Registry Enterprise Edition instance. If you use an Enterprise Edition instance for the container image, you must add the instance ID. The default resolution IP address of the instance must be the IP address of the virtual private cloud (VPC) that the instance belongs. Alibaba Cloud DNS PrivateZone cannot be used for domain name resolution.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property command: Container start command. For example: ["/code/myserver"]
         */
        readonly command?: string | ros.IResolvable;
        /**
         * @Property accelerationType: Whether to enable image acceleration. Valid Values:
     * Default: Indicates that image acceleration is enabled.
     * None: Indicates that image acceleration is disabled.
         */
        readonly accelerationType?: string | ros.IResolvable;
        /**
         * @Property image: Container image address. For example: registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1beta1
         */
        readonly image: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('args', ros.validateString)(properties.args));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('command', ros.validateString)(properties.command));
    errors.collect(ros.propertyValidator('accelerationType', ros.validateString)(properties.accelerationType));
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
function rosFunctionCustomContainerConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_CustomContainerConfigPropertyValidator(properties).assertSuccess();
    return {
      Args: ros.stringToRosTemplate(properties.args),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Command: ros.stringToRosTemplate(properties.command),
      AccelerationType: ros.stringToRosTemplate(properties.accelerationType),
      Image: ros.stringToRosTemplate(properties.image),
    };
}

export namespace RosFunction {
    /**
     * @stability external
     */
    export interface DestinationProperty {
        /**
         * @Property onSuccess: When the function is invoked successfully, FC will call the target corresponding to the configuration
         */
        readonly onSuccess?: string | ros.IResolvable;
        /**
         * @Property onFailure: When the function is invoked failed (system error or function internal error), FC will call the target corresponding to the configuration
         */
        readonly onFailure?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DestinationProperty`
 *
 * @param properties - the TypeScript properties of a `DestinationProperty`
 *
 * @returns the result of the validation.
 */
function RosFunction_DestinationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosFunctionDestinationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFunction_DestinationPropertyValidator(properties).assertSuccess();
    return {
      OnSuccess: ros.stringToRosTemplate(properties.onSuccess),
      OnFailure: ros.stringToRosTemplate(properties.onFailure),
    };
}

/**
 * Properties for defining a `ALIYUN::FC::FunctionInvoker`
 */
export interface RosFunctionInvokerProps {

    /**
     * @Property functionName: Function name
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * @Property async: Invocation type, Sync or Async. Defaults to Sync.
     */
    readonly async?: boolean | ros.IResolvable;

    /**
     * @Property checkError: Whether check error for function invocation result.
     * If set true and function invocation result has error, the resource creation will be regard as failed.
     * Default is false
     */
    readonly checkError?: boolean | ros.IResolvable;

    /**
     * @Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
     * If the value needs to be binary, encode it via base64 before passing to this property.
     */
    readonly event?: string | ros.IResolvable;

    /**
     * @Property executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
     */
    readonly executeVersion?: number | ros.IResolvable;

    /**
     * @Property qualifier: service version, can be versionId or aliasName
     */
    readonly qualifier?: string | ros.IResolvable;

    /**
     * @Property serviceRegionId: Which region service belongs to.
     */
    readonly serviceRegionId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFunctionInvokerProps`
 *
 * @param properties - the TypeScript properties of a `RosFunctionInvokerProps`
 *
 * @returns the result of the validation.
 */
function RosFunctionInvokerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('executeVersion', ros.validateNumber)(properties.executeVersion));
    errors.collect(ros.propertyValidator('serviceRegionId', ros.validateString)(properties.serviceRegionId));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if(properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
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
function rosFunctionInvokerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosFunctionInvoker extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::FunctionInvoker";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Result: Depends on result type:
NoResult: Async invoke has no result.
Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
Failure: Error Message.
     */
    public readonly attrResult: ros.IResolvable;

    /**
     * @Attribute ResultType: Result type:
NoResult: Async invoke has no result.
Success: Sync invoke succeeds.
Failure: Sync invoke fails.
     */
    public readonly attrResultType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property functionName: Function name
     */
    public functionName: string | ros.IResolvable;

    /**
     * @Property serviceName: Service name
     */
    public serviceName: string | ros.IResolvable;

    /**
     * @Property async: Invocation type, Sync or Async. Defaults to Sync.
     */
    public async: boolean | ros.IResolvable | undefined;

    /**
     * @Property checkError: Whether check error for function invocation result.
     * If set true and function invocation result has error, the resource creation will be regard as failed.
     * Default is false
     */
    public checkError: boolean | ros.IResolvable | undefined;

    /**
     * @Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
     * If the value needs to be binary, encode it via base64 before passing to this property.
     */
    public event: string | ros.IResolvable | undefined;

    /**
     * @Property executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
     */
    public executeVersion: number | ros.IResolvable | undefined;

    /**
     * @Property qualifier: service version, can be versionId or aliasName
     */
    public qualifier: string | ros.IResolvable | undefined;

    /**
     * @Property serviceRegionId: Which region service belongs to.
     */
    public serviceRegionId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::FC::FunctionInvoker`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFunctionInvokerProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
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
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFunctionInvokerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::FC::Layer`
 */
export interface RosLayerProps {

    /**
     * @Property code: The code of layer.
     */
    readonly code: RosLayer.CodeProperty | ros.IResolvable;

    /**
     * @Property compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
     */
    readonly compatibleRuntime: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property layerName: The name of layer
     */
    readonly layerName: string | ros.IResolvable;

    /**
     * @Property description: The description of the layer.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLayerProps`
 *
 * @param properties - the TypeScript properties of a `RosLayerProps`
 *
 * @returns the result of the validation.
 */
function RosLayerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('compatibleRuntime', ros.requiredValidator)(properties.compatibleRuntime));
    if(properties.compatibleRuntime && (Array.isArray(properties.compatibleRuntime) || (typeof properties.compatibleRuntime) === 'string')) {
        errors.collect(ros.propertyValidator('compatibleRuntime', ros.validateLength)({
            data: properties.compatibleRuntime.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('compatibleRuntime', ros.listValidator(ros.validateString))(properties.compatibleRuntime));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('layerName', ros.requiredValidator)(properties.layerName));
    if(properties.layerName && (Array.isArray(properties.layerName) || (typeof properties.layerName) === 'string')) {
        errors.collect(ros.propertyValidator('layerName', ros.validateLength)({
            data: properties.layerName.length,
            min: 1,
            max: 64,
          }));
    }
    if(properties.layerName && (typeof properties.layerName) !== 'object') {
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
function rosLayerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLayerPropsValidator(properties).assertSuccess();
    }
    return {
      Code: rosLayerCodePropertyToRosTemplate(properties.code),
      CompatibleRuntime: ros.listMapper(ros.stringToRosTemplate)(properties.compatibleRuntime),
      LayerName: ros.stringToRosTemplate(properties.layerName),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * A ROS template type:  `ALIYUN::FC::Layer`
 */
export class RosLayer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Layer";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Arn: The name of the layer resource.
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute LayerName: The name of layer
     */
    public readonly attrLayerName: ros.IResolvable;

    /**
     * @Attribute Version: The version of the layer resource.
     */
    public readonly attrVersion: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property code: The code of layer.
     */
    public code: RosLayer.CodeProperty | ros.IResolvable;

    /**
     * @Property compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
     */
    public compatibleRuntime: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property layerName: The name of layer
     */
    public layerName: string | ros.IResolvable;

    /**
     * @Property description: The description of the layer.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::FC::Layer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLayerProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
        return {
            code: this.code,
            compatibleRuntime: this.compatibleRuntime,
            layerName: this.layerName,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLayerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosLayer {
    /**
     * @stability external
     */
    export interface CodeProperty {
        /**
         * @Property zipFile: The function code that is encoded in Base64. 
     * Priority: ZipFile > OssBucketName&OssObjectName.
         */
        readonly zipFile?: string | ros.IResolvable;
        /**
         * @Property ossObjectName: The name of the OSS object that stores the ZIP package of the function code. 
     * Priority: ZipFile > OssBucketName&OssObjectName.
         */
        readonly ossObjectName?: string | ros.IResolvable;
        /**
         * @Property ossBucketName: The name of the Object Storage Service (OSS) bucket that 
     * stores the ZIP package of the function code.
     * Priority: ZipFile > OssBucketName&OssObjectName.
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
function RosLayer_CodePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosLayerCodePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLayer_CodePropertyValidator(properties).assertSuccess();
    return {
      ZipFile: ros.stringToRosTemplate(properties.zipFile),
      OssObjectName: ros.stringToRosTemplate(properties.ossObjectName),
      OssBucketName: ros.stringToRosTemplate(properties.ossBucketName),
    };
}

/**
 * Properties for defining a `ALIYUN::FC::ProvisionConfig`
 */
export interface RosProvisionConfigProps {

    /**
     * @Property functionName: Function name
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * @Property qualifier: Service's alias.
     * Example : "LATEST"
     */
    readonly qualifier: string | ros.IResolvable;

    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * @Property target: Number of provision
     */
    readonly target: number | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('target', ros.requiredValidator)(properties.target));
    errors.collect(ros.propertyValidator('target', ros.validateNumber)(properties.target));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if(properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
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
function rosProvisionConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosProvisionConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::ProvisionConfig";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute FunctionName: The function name
     */
    public readonly attrFunctionName: ros.IResolvable;

    /**
     * @Attribute Qualifier: The service alias
     */
    public readonly attrQualifier: ros.IResolvable;

    /**
     * @Attribute Resource: The resource
     */
    public readonly attrResource: ros.IResolvable;

    /**
     * @Attribute ServiceName: The service name
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * @Attribute Target: Number of provision
     */
    public readonly attrTarget: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property functionName: Function name
     */
    public functionName: string | ros.IResolvable;

    /**
     * @Property qualifier: Service's alias.
     * Example : "LATEST"
     */
    public qualifier: string | ros.IResolvable;

    /**
     * @Property serviceName: Service name
     */
    public serviceName: string | ros.IResolvable;

    /**
     * @Property target: Number of provision
     */
    public target: number | ros.IResolvable;

    /**
     * Create a new `ALIYUN::FC::ProvisionConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProvisionConfigProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
        return {
            functionName: this.functionName,
            qualifier: this.qualifier,
            serviceName: this.serviceName,
            target: this.target,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProvisionConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::FC::Service`
 */
export interface RosServiceProps {

    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * @Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property description: Service description
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property internetAccess: Set it to true to enable Internet access.
     */
    readonly internetAccess?: boolean | ros.IResolvable;

    /**
     * @Property logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
     */
    readonly logConfig?: RosService.LogConfigProperty | ros.IResolvable;

    /**
     * @Property nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
     */
    readonly nasConfig?: RosService.NasConfigProperty | ros.IResolvable;

    /**
     * @Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
     */
    readonly role?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosService.TagsProperty[];

    /**
     * @Property tracingConfig: The Tracing Analysis configuration. After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
     */
    readonly tracingConfig?: RosService.TracingConfigProperty | ros.IResolvable;

    /**
     * @Property vpcBindings: Function Invocation only by Specified VPCs. 
     * By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
     */
    readonly vpcBindings?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
     */
    readonly vpcConfig?: RosService.VpcConfigProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceProps`
 *
 * @returns the result of the validation.
 */
function RosServicePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('internetAccess', ros.validateBoolean)(properties.internetAccess));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('tracingConfig', RosService_TracingConfigPropertyValidator)(properties.tracingConfig));
    errors.collect(ros.propertyValidator('vpcConfig', RosService_VpcConfigPropertyValidator)(properties.vpcConfig));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if(properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
        errors.collect(ros.propertyValidator('serviceName', ros.validateLength)({
            data: properties.serviceName.length,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    if(properties.vpcBindings && (Array.isArray(properties.vpcBindings) || (typeof properties.vpcBindings) === 'string')) {
        errors.collect(ros.propertyValidator('vpcBindings', ros.validateLength)({
            data: properties.vpcBindings.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('vpcBindings', ros.listValidator(ros.validateString))(properties.vpcBindings));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
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
function rosServicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
      Tags: ros.listMapper(rosServiceTagsPropertyToRosTemplate)(properties.tags),
      TracingConfig: rosServiceTracingConfigPropertyToRosTemplate(properties.tracingConfig),
      VpcBindings: ros.listMapper(ros.stringToRosTemplate)(properties.vpcBindings),
      VpcConfig: rosServiceVpcConfigPropertyToRosTemplate(properties.vpcConfig),
    };
}

/**
 * A ROS template type:  `ALIYUN::FC::Service`
 */
export class RosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Service";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InternetAccess: Whether enable Internet access
     */
    public readonly attrInternetAccess: ros.IResolvable;

    /**
     * @Attribute LogProject: Log project of service
     */
    public readonly attrLogProject: ros.IResolvable;

    /**
     * @Attribute Logstore: Log store of service
     */
    public readonly attrLogstore: ros.IResolvable;

    /**
     * @Attribute Role: Role of service
     */
    public readonly attrRole: ros.IResolvable;

    /**
     * @Attribute ServiceId: The service ID
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * @Attribute ServiceName: The service name
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * @Attribute Tags: Tags of service
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute VpcId: VPC ID
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serviceName: Service name
     */
    public serviceName: string | ros.IResolvable;

    /**
     * @Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: Service description
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property internetAccess: Set it to true to enable Internet access.
     */
    public internetAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
     */
    public logConfig: RosService.LogConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
     */
    public nasConfig: RosService.NasConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
     */
    public role: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosService.TagsProperty[] | undefined;

    /**
     * @Property tracingConfig: The Tracing Analysis configuration. After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
     */
    public tracingConfig: RosService.TracingConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property vpcBindings: Function Invocation only by Specified VPCs. 
     * By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
     */
    public vpcBindings: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
     */
    public vpcConfig: RosService.VpcConfigProperty | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::FC::Service`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceProps, enableResourcePropertyConstraint: boolean) {
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
        this.role = props.role;
        this.tags = props.tags;
        this.tracingConfig = props.tracingConfig;
        this.vpcBindings = props.vpcBindings;
        this.vpcConfig = props.vpcConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serviceName: this.serviceName,
            deletionForce: this.deletionForce,
            description: this.description,
            internetAccess: this.internetAccess,
            logConfig: this.logConfig,
            nasConfig: this.nasConfig,
            role: this.role,
            tags: this.tags,
            tracingConfig: this.tracingConfig,
            vpcBindings: this.vpcBindings,
            vpcConfig: this.vpcConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosService {
    /**
     * @stability external
     */
    export interface LogConfigProperty {
        /**
         * @Property project: The project name of Logs service
         */
        readonly project?: string | ros.IResolvable;
        /**
         * @Property logBeginRule: The log rotation rule. Log are split based on the rule. The log blocks obtained after the splitting are written to Log Service. Valid values:
     * None: disables the log splitting rule. This is the default value.
     * DefaultRegex: sets the log splitting rule to the default regular expression. If you set this parameter to DefaultRegex, logs are split based on the data in a log. For example, the line that contains 2021-10-10 in the log is considered as the first line of a log block. The first line and the following consecutive lines that do not contain dates in the log are written to Log Service as a whole.
         */
        readonly logBeginRule?: string | ros.IResolvable;
        /**
         * @Property logstore: The log store name of Logs service
         */
        readonly logstore?: string | ros.IResolvable;
        /**
         * @Property enableRequestMetrics: Specifies whether to enable the request-level metrics. If you enable this feature, you can view the time and memory that are consumed for a specific invocation of each function in the service. Valid values:
     * false: disables request-level metrics.
     * true: enables request-level metrics. Default value: true.
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
function RosService_LogConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosServiceLogConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosService_LogConfigPropertyValidator(properties).assertSuccess();
    return {
      Project: ros.stringToRosTemplate(properties.project),
      LogBeginRule: ros.stringToRosTemplate(properties.logBeginRule),
      Logstore: ros.stringToRosTemplate(properties.logstore),
      EnableRequestMetrics: ros.booleanToRosTemplate(properties.enableRequestMetrics),
    };
}

export namespace RosService {
    /**
     * @stability external
     */
    export interface MountPointsProperty {
        /**
         * @Property serverAddr: The address of NAS instance.
         */
        readonly serverAddr: string | ros.IResolvable;
        /**
         * @Property mountDir: A local mount point.
         */
        readonly mountDir: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MountPointsProperty`
 *
 * @param properties - the TypeScript properties of a `MountPointsProperty`
 *
 * @returns the result of the validation.
 */
function RosService_MountPointsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosServiceMountPointsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosService_MountPointsPropertyValidator(properties).assertSuccess();
    return {
      ServerAddr: ros.stringToRosTemplate(properties.serverAddr),
      MountDir: ros.stringToRosTemplate(properties.mountDir),
    };
}

export namespace RosService {
    /**
     * @stability external
     */
    export interface NasConfigProperty {
        /**
         * @Property mountPoints: Mount points
         */
        readonly mountPoints: Array<RosService.MountPointsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property userId: User ID
         */
        readonly userId: number | ros.IResolvable;
        /**
         * @Property groupId: Group ID
         */
        readonly groupId: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NasConfigProperty`
 *
 * @param properties - the TypeScript properties of a `NasConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosService_NasConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountPoints', ros.requiredValidator)(properties.mountPoints));
    errors.collect(ros.propertyValidator('mountPoints', ros.listValidator(RosService_MountPointsPropertyValidator))(properties.mountPoints));
    errors.collect(ros.propertyValidator('userId', ros.requiredValidator)(properties.userId));
    if(properties.userId && (typeof properties.userId) !== 'object') {
        errors.collect(ros.propertyValidator('userId', ros.validateRange)({
            data: properties.userId,
            min: -1,
            max: 65534,
          }));
    }
    errors.collect(ros.propertyValidator('userId', ros.validateNumber)(properties.userId));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    if(properties.groupId && (typeof properties.groupId) !== 'object') {
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
function rosServiceNasConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosService_NasConfigPropertyValidator(properties).assertSuccess();
    return {
      MountPoints: ros.listMapper(rosServiceMountPointsPropertyToRosTemplate)(properties.mountPoints),
      UserId: ros.numberToRosTemplate(properties.userId),
      GroupId: ros.numberToRosTemplate(properties.groupId),
    };
}

export namespace RosService {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosService_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosServiceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosService_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosService {
    /**
     * @stability external
     */
    export interface TracingConfigProperty {
        /**
         * @Property type: The type of the tracing analysis system.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property params: The tracing analysis parameters.
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
function RosService_TracingConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosServiceTracingConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosService_TracingConfigPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      Params: ros.hashMapper(ros.objectToRosTemplate)(properties.params),
    };
}

export namespace RosService {
    /**
     * @stability external
     */
    export interface VpcConfigProperty {
        /**
         * @Property vpcId: VPC ID
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property vSwitchIds: List of VSwitch IDs
         */
        readonly vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityGroupId: Security group ID
         */
        readonly securityGroupId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `VpcConfigProperty`
 *
 * @param properties - the TypeScript properties of a `VpcConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosService_VpcConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosServiceVpcConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosService_VpcConfigPropertyValidator(properties).assertSuccess();
    return {
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.vSwitchIds),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
    };
}

/**
 * Properties for defining a `ALIYUN::FC::Trigger`
 */
export interface RosTriggerProps {

    /**
     * @Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * @Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * @Property triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
     */
    readonly triggerConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property triggerName: Trigger name.
     * Example : "image_resize"
     */
    readonly triggerName: string | ros.IResolvable;

    /**
     * @Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
     * Example : "oss"
     */
    readonly triggerType: string | ros.IResolvable;

    /**
     * @Property invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
     * Example : "acs:ram::1234567890:role/fc-test"
     */
    readonly invocationRole?: string | ros.IResolvable;

    /**
     * @Property qualifier: service version or alias.
     * Example : "LATEST"
     */
    readonly qualifier?: string | ros.IResolvable;

    /**
     * @Property sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
     * Example : "acs:oss:cn-shanghai:12345:mybucket"
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
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('triggerType', ros.requiredValidator)(properties.triggerType));
    errors.collect(ros.propertyValidator('triggerType', ros.validateString)(properties.triggerType));
    errors.collect(ros.propertyValidator('triggerName', ros.requiredValidator)(properties.triggerName));
    errors.collect(ros.propertyValidator('triggerName', ros.validateString)(properties.triggerName));
    errors.collect(ros.propertyValidator('sourceArn', ros.validateString)(properties.sourceArn));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if(properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
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
function rosTriggerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosTrigger extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Trigger";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute FunctionName: Function name.
     */
    public readonly attrFunctionName: ros.IResolvable;

    /**
     * @Attribute ServiceName: Service name.
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * @Attribute TriggerId: The trigger ID.
     */
    public readonly attrTriggerId: ros.IResolvable;

    /**
     * @Attribute TriggerName: Trigger name.
     */
    public readonly attrTriggerName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property functionName: Function name.
     */
    public functionName: string | ros.IResolvable;

    /**
     * @Property serviceName: Service name.
     */
    public serviceName: string | ros.IResolvable;

    /**
     * @Property triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
     */
    public triggerConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property triggerName: Trigger name.
     * Example : "image_resize"
     */
    public triggerName: string | ros.IResolvable;

    /**
     * @Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
     * Example : "oss"
     */
    public triggerType: string | ros.IResolvable;

    /**
     * @Property invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
     * Example : "acs:ram::1234567890:role/fc-test"
     */
    public invocationRole: string | ros.IResolvable | undefined;

    /**
     * @Property qualifier: service version or alias.
     * Example : "LATEST"
     */
    public qualifier: string | ros.IResolvable | undefined;

    /**
     * @Property sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
     * Example : "acs:oss:cn-shanghai:12345:mybucket"
     */
    public sourceArn: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::FC::Trigger`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTriggerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTrigger.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFunctionName = this.getAtt('FunctionName');
        this.attrServiceName = this.getAtt('ServiceName');
        this.attrTriggerId = this.getAtt('TriggerId');
        this.attrTriggerName = this.getAtt('TriggerName');

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


    protected get rosProperties(): { [key: string]: any }  {
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
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTriggerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::FC::Version`
 */
export interface RosVersionProps {

    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * @Property description: Version description
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVersionProps`
 *
 * @param properties - the TypeScript properties of a `RosVersionProps`
 *
 * @returns the result of the validation.
 */
function RosVersionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if(properties.serviceName && (Array.isArray(properties.serviceName) || (typeof properties.serviceName) === 'string')) {
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
function rosVersionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosVersion extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FC::Version";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ServiceName: The service name
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * @Attribute VersionId: The version ID
     */
    public readonly attrVersionId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serviceName: Service name
     */
    public serviceName: string | ros.IResolvable;

    /**
     * @Property description: Version description
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::FC::Version`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVersionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVersion.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServiceName = this.getAtt('ServiceName');
        this.attrVersionId = this.getAtt('VersionId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceName = props.serviceName;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serviceName: this.serviceName,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVersionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
