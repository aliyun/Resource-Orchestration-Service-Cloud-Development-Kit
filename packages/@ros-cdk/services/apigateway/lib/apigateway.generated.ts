// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::ApiGateway::Api`
 */
export interface RosApiProps {

    /**
     * @Property apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly apiName: string;

    /**
     * @Property groupId: The id of the Group.
     */
    readonly groupId: string;

    /**
     * @Property requestConfig: The configuration of the request
     */
    readonly requestConfig: RosApi.RequestConfigProperty | ros.IResolvable;

    /**
     * @Property resultSample: The sample of the result.
     */
    readonly resultSample: string;

    /**
     * @Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
     */
    readonly resultType: string;

    /**
     * @Property serviceConfig: The configuration of the service.
     */
    readonly serviceConfig: RosApi.ServiceConfigProperty | ros.IResolvable;

    /**
     * @Property visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
     */
    readonly visibility: string;

    /**
     * @Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
     * DEFAULT: Default (set by group).
     * DISABLE: Not allowed
     * HEADER: Allow AppCode header authentication
     * HEADER_QUERY: Allow AppCode header and query authentication
     */
    readonly appCodeAuthType?: string;

    /**
     * @Property authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
     */
    readonly authType?: string;

    /**
     * @Property constParameters: The const parameters.
     */
    readonly constParameters?: Array<RosApi.ConstParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: Description of the API, less than 180 characters.
     */
    readonly description?: string;

    /**
     * @Property errorCodeSamples: The Error Code samples.
     */
    readonly errorCodeSamples?: Array<RosApi.ErrorCodeSamplesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property failResultSample: The sample of the fail result.
     */
    readonly failResultSample?: string;

    /**
     * @Property openIdConnectConfig: The configuration of the open id.
     */
    readonly openIdConnectConfig?: RosApi.OpenIdConnectConfigProperty | ros.IResolvable;

    /**
     * @Property requestParameters: The request parameters.
     */
    readonly requestParameters?: Array<RosApi.RequestParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property serviceParameters: The service parameters.
     */
    readonly serviceParameters?: Array<RosApi.ServiceParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.
     */
    readonly serviceParametersMap?: Array<RosApi.ServiceParametersMapProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property systemParameters: The system parameters.
     */
    readonly systemParameters?: Array<RosApi.SystemParametersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosApiProps`
 *
 * @param properties - the TypeScript properties of a `RosApiProps`
 *
 * @returns the result of the validation.
 */
function RosApiPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('requestConfig', ros.requiredValidator)(properties.requestConfig));
    errors.collect(ros.propertyValidator('requestConfig', RosApi_RequestConfigPropertyValidator)(properties.requestConfig));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resultSample', ros.requiredValidator)(properties.resultSample));
    errors.collect(ros.propertyValidator('resultSample', ros.validateString)(properties.resultSample));
    errors.collect(ros.propertyValidator('apiName', ros.requiredValidator)(properties.apiName));
    errors.collect(ros.propertyValidator('apiName', ros.validateString)(properties.apiName));
    errors.collect(ros.propertyValidator('resultType', ros.requiredValidator)(properties.resultType));
    if(properties.resultType && (typeof properties.resultType) !== 'object') {
        errors.collect(ros.propertyValidator('resultType', ros.validateAllowedValues)({
          data: properties.resultType,
          allowedValues: ["JSON","TEXT","BINARY","XML","HTML","PASSTHROUGH"],
        }));
    }
    errors.collect(ros.propertyValidator('resultType', ros.validateString)(properties.resultType));
    errors.collect(ros.propertyValidator('failResultSample', ros.validateString)(properties.failResultSample));
    errors.collect(ros.propertyValidator('errorCodeSamples', ros.listValidator(RosApi_ErrorCodeSamplesPropertyValidator))(properties.errorCodeSamples));
    errors.collect(ros.propertyValidator('serviceParametersMap', ros.listValidator(RosApi_ServiceParametersMapPropertyValidator))(properties.serviceParametersMap));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    errors.collect(ros.propertyValidator('requestParameters', ros.listValidator(RosApi_RequestParametersPropertyValidator))(properties.requestParameters));
    if(properties.appCodeAuthType && (typeof properties.appCodeAuthType) !== 'object') {
        errors.collect(ros.propertyValidator('appCodeAuthType', ros.validateAllowedValues)({
          data: properties.appCodeAuthType,
          allowedValues: ["DEFAULT","DISABLE","HEADER","HEADER_QUERY"],
        }));
    }
    errors.collect(ros.propertyValidator('appCodeAuthType', ros.validateString)(properties.appCodeAuthType));
    errors.collect(ros.propertyValidator('serviceConfig', ros.requiredValidator)(properties.serviceConfig));
    errors.collect(ros.propertyValidator('serviceConfig', RosApi_ServiceConfigPropertyValidator)(properties.serviceConfig));
    errors.collect(ros.propertyValidator('constParameters', ros.listValidator(RosApi_ConstParametersPropertyValidator))(properties.constParameters));
    errors.collect(ros.propertyValidator('systemParameters', ros.listValidator(RosApi_SystemParametersPropertyValidator))(properties.systemParameters));
    errors.collect(ros.propertyValidator('openIdConnectConfig', RosApi_OpenIdConnectConfigPropertyValidator)(properties.openIdConnectConfig));
    errors.collect(ros.propertyValidator('visibility', ros.requiredValidator)(properties.visibility));
    if(properties.visibility && (typeof properties.visibility) !== 'object') {
        errors.collect(ros.propertyValidator('visibility', ros.validateAllowedValues)({
          data: properties.visibility,
          allowedValues: ["PUBLIC","PRIVATE"],
        }));
    }
    errors.collect(ros.propertyValidator('visibility', ros.validateString)(properties.visibility));
    errors.collect(ros.propertyValidator('serviceParameters', ros.listValidator(RosApi_ServiceParametersPropertyValidator))(properties.serviceParameters));
    if(properties.authType && (typeof properties.authType) !== 'object') {
        errors.collect(ros.propertyValidator('authType', ros.validateAllowedValues)({
          data: properties.authType,
          allowedValues: ["APP","ANONYMOUS","APPOPENID"],
        }));
    }
    errors.collect(ros.propertyValidator('authType', ros.validateString)(properties.authType));
    return errors.wrap('supplied properties not correct for "RosApiProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api` resource
 *
 * @param properties - the TypeScript properties of a `RosApiProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api` resource.
 */
// @ts-ignore TS6133
function rosApiPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApiPropsValidator(properties).assertSuccess();
    }
    return {
      ApiName: ros.stringToRosTemplate(properties.apiName),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      RequestConfig: rosApiRequestConfigPropertyToRosTemplate(properties.requestConfig),
      ResultSample: ros.stringToRosTemplate(properties.resultSample),
      ResultType: ros.stringToRosTemplate(properties.resultType),
      ServiceConfig: rosApiServiceConfigPropertyToRosTemplate(properties.serviceConfig),
      Visibility: ros.stringToRosTemplate(properties.visibility),
      AppCodeAuthType: ros.stringToRosTemplate(properties.appCodeAuthType),
      AuthType: ros.stringToRosTemplate(properties.authType),
      ConstParameters: ros.listMapper(rosApiConstParametersPropertyToRosTemplate)(properties.constParameters),
      Description: ros.stringToRosTemplate(properties.description),
      ErrorCodeSamples: ros.listMapper(rosApiErrorCodeSamplesPropertyToRosTemplate)(properties.errorCodeSamples),
      FailResultSample: ros.stringToRosTemplate(properties.failResultSample),
      OpenIdConnectConfig: rosApiOpenIdConnectConfigPropertyToRosTemplate(properties.openIdConnectConfig),
      RequestParameters: ros.listMapper(rosApiRequestParametersPropertyToRosTemplate)(properties.requestParameters),
      ServiceParameters: ros.listMapper(rosApiServiceParametersPropertyToRosTemplate)(properties.serviceParameters),
      ServiceParametersMap: ros.listMapper(rosApiServiceParametersMapPropertyToRosTemplate)(properties.serviceParametersMap),
      SystemParameters: ros.listMapper(rosApiSystemParametersPropertyToRosTemplate)(properties.systemParameters),
    };
}

/**
 * A ROS template type:  `ALIYUN::ApiGateway::Api`
 */
export class RosApi extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Api";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ApiId: The id of the API.
     */
    public readonly attrApiId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    public apiName: string;

    /**
     * @Property groupId: The id of the Group.
     */
    public groupId: string;

    /**
     * @Property requestConfig: The configuration of the request
     */
    public requestConfig: RosApi.RequestConfigProperty | ros.IResolvable;

    /**
     * @Property resultSample: The sample of the result.
     */
    public resultSample: string;

    /**
     * @Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
     */
    public resultType: string;

    /**
     * @Property serviceConfig: The configuration of the service.
     */
    public serviceConfig: RosApi.ServiceConfigProperty | ros.IResolvable;

    /**
     * @Property visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
     */
    public visibility: string;

    /**
     * @Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
     * DEFAULT: Default (set by group).
     * DISABLE: Not allowed
     * HEADER: Allow AppCode header authentication
     * HEADER_QUERY: Allow AppCode header and query authentication
     */
    public appCodeAuthType: string | undefined;

    /**
     * @Property authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
     */
    public authType: string | undefined;

    /**
     * @Property constParameters: The const parameters.
     */
    public constParameters: Array<RosApi.ConstParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property description: Description of the API, less than 180 characters.
     */
    public description: string | undefined;

    /**
     * @Property errorCodeSamples: The Error Code samples.
     */
    public errorCodeSamples: Array<RosApi.ErrorCodeSamplesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property failResultSample: The sample of the fail result.
     */
    public failResultSample: string | undefined;

    /**
     * @Property openIdConnectConfig: The configuration of the open id.
     */
    public openIdConnectConfig: RosApi.OpenIdConnectConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property requestParameters: The request parameters.
     */
    public requestParameters: Array<RosApi.RequestParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property serviceParameters: The service parameters.
     */
    public serviceParameters: Array<RosApi.ServiceParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.
     */
    public serviceParametersMap: Array<RosApi.ServiceParametersMapProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property systemParameters: The system parameters.
     */
    public systemParameters: Array<RosApi.SystemParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ApiGateway::Api`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApiProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApi.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApiId = ros.Token.asString(this.getAtt('ApiId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiName = props.apiName;
        this.groupId = props.groupId;
        this.requestConfig = props.requestConfig;
        this.resultSample = props.resultSample;
        this.resultType = props.resultType;
        this.serviceConfig = props.serviceConfig;
        this.visibility = props.visibility;
        this.appCodeAuthType = props.appCodeAuthType;
        this.authType = props.authType;
        this.constParameters = props.constParameters;
        this.description = props.description;
        this.errorCodeSamples = props.errorCodeSamples;
        this.failResultSample = props.failResultSample;
        this.openIdConnectConfig = props.openIdConnectConfig;
        this.requestParameters = props.requestParameters;
        this.serviceParameters = props.serviceParameters;
        this.serviceParametersMap = props.serviceParametersMap;
        this.systemParameters = props.systemParameters;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            apiName: this.apiName,
            groupId: this.groupId,
            requestConfig: this.requestConfig,
            resultSample: this.resultSample,
            resultType: this.resultType,
            serviceConfig: this.serviceConfig,
            visibility: this.visibility,
            appCodeAuthType: this.appCodeAuthType,
            authType: this.authType,
            constParameters: this.constParameters,
            description: this.description,
            errorCodeSamples: this.errorCodeSamples,
            failResultSample: this.failResultSample,
            openIdConnectConfig: this.openIdConnectConfig,
            requestParameters: this.requestParameters,
            serviceParameters: this.serviceParameters,
            serviceParametersMap: this.serviceParametersMap,
            systemParameters: this.systemParameters,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApiPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosApi {
    /**
     * @stability external
     */
    export interface ConstParametersProperty {
        /**
         * @Property constValue: The value of the parameter.
         */
        readonly constValue: string;
        /**
         * @Property description: Description of the const parameter, less than 180 characters.
         */
        readonly description?: string;
        /**
         * @Property serviceParameterName: The service parameter name.
         */
        readonly serviceParameterName: string;
        /**
         * @Property location: The location of the parameter. Default is HEAD.
         */
        readonly location: string;
    }
}
/**
 * Determine whether the given properties match those of a `ConstParametersProperty`
 *
 * @param properties - the TypeScript properties of a `ConstParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_ConstParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('constValue', ros.requiredValidator)(properties.constValue));
    errors.collect(ros.propertyValidator('constValue', ros.validateString)(properties.constValue));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.requiredValidator)(properties.serviceParameterName));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.validateString)(properties.serviceParameterName));
    errors.collect(ros.propertyValidator('location', ros.requiredValidator)(properties.location));
    if(properties.location && (typeof properties.location) !== 'object') {
        errors.collect(ros.propertyValidator('location', ros.validateAllowedValues)({
          data: properties.location,
          allowedValues: ["BODY","HEAD","QUERY","PATH"],
        }));
    }
    errors.collect(ros.propertyValidator('location', ros.validateString)(properties.location));
    return errors.wrap('supplied properties not correct for "ConstParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.ConstParameters` resource
 *
 * @param properties - the TypeScript properties of a `ConstParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.ConstParameters` resource.
 */
// @ts-ignore TS6133
function rosApiConstParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApi_ConstParametersPropertyValidator(properties).assertSuccess();
    return {
      ConstValue: ros.stringToRosTemplate(properties.constValue),
      Description: ros.stringToRosTemplate(properties.description),
      ServiceParameterName: ros.stringToRosTemplate(properties.serviceParameterName),
      Location: ros.stringToRosTemplate(properties.location),
    };
}

export namespace RosApi {
    /**
     * @stability external
     */
    export interface ErrorCodeSamplesProperty {
        /**
         * @Property description: Description of the ERROR, less than 180 characters.
         */
        readonly description?: string;
        /**
         * @Property message: Error message.
         */
        readonly message: string;
        /**
         * @Property code: Error code.
         */
        readonly code: string;
    }
}
/**
 * Determine whether the given properties match those of a `ErrorCodeSamplesProperty`
 *
 * @param properties - the TypeScript properties of a `ErrorCodeSamplesProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_ErrorCodeSamplesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('message', ros.requiredValidator)(properties.message));
    errors.collect(ros.propertyValidator('message', ros.validateString)(properties.message));
    errors.collect(ros.propertyValidator('code', ros.requiredValidator)(properties.code));
    errors.collect(ros.propertyValidator('code', ros.validateString)(properties.code));
    return errors.wrap('supplied properties not correct for "ErrorCodeSamplesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.ErrorCodeSamples` resource
 *
 * @param properties - the TypeScript properties of a `ErrorCodeSamplesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.ErrorCodeSamples` resource.
 */
// @ts-ignore TS6133
function rosApiErrorCodeSamplesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApi_ErrorCodeSamplesPropertyValidator(properties).assertSuccess();
    return {
      Description: ros.stringToRosTemplate(properties.description),
      Message: ros.stringToRosTemplate(properties.message),
      Code: ros.stringToRosTemplate(properties.code),
    };
}

export namespace RosApi {
    /**
     * @stability external
     */
    export interface FunctionComputeConfigProperty {
        /**
         * @Property fcRegionId: The region id of function compute.
         */
        readonly fcRegionId: string;
        /**
         * @Property functionName: The function name of function compute.
         */
        readonly functionName: string;
        /**
         * @Property roleArn: Ram authorizes the arn of the API gateway access function compute.
         */
        readonly roleArn: string;
        /**
         * @Property qualifier: The service alias name.
         */
        readonly qualifier?: string;
        /**
         * @Property serviceName: The service name of function compute.
         */
        readonly serviceName: string;
    }
}
/**
 * Determine whether the given properties match those of a `FunctionComputeConfigProperty`
 *
 * @param properties - the TypeScript properties of a `FunctionComputeConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_FunctionComputeConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('fcRegionId', ros.requiredValidator)(properties.fcRegionId));
    errors.collect(ros.propertyValidator('fcRegionId', ros.validateString)(properties.fcRegionId));
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('roleArn', ros.requiredValidator)(properties.roleArn));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    errors.collect(ros.propertyValidator('qualifier', ros.validateString)(properties.qualifier));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    return errors.wrap('supplied properties not correct for "FunctionComputeConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.FunctionComputeConfig` resource
 *
 * @param properties - the TypeScript properties of a `FunctionComputeConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.FunctionComputeConfig` resource.
 */
// @ts-ignore TS6133
function rosApiFunctionComputeConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApi_FunctionComputeConfigPropertyValidator(properties).assertSuccess();
    return {
      fcRegionId: ros.stringToRosTemplate(properties.fcRegionId),
      functionName: ros.stringToRosTemplate(properties.functionName),
      roleArn: ros.stringToRosTemplate(properties.roleArn),
      qualifier: ros.stringToRosTemplate(properties.qualifier),
      serviceName: ros.stringToRosTemplate(properties.serviceName),
    };
}

export namespace RosApi {
    /**
     * @stability external
     */
    export interface MockHeadersProperty {
        /**
         * @Property headerValue: Response header value
         */
        readonly headerValue: string;
        /**
         * @Property headerName: Response header name
         */
        readonly headerName: string;
    }
}
/**
 * Determine whether the given properties match those of a `MockHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `MockHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_MockHeadersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('headerValue', ros.requiredValidator)(properties.headerValue));
    errors.collect(ros.propertyValidator('headerValue', ros.validateString)(properties.headerValue));
    errors.collect(ros.propertyValidator('headerName', ros.requiredValidator)(properties.headerName));
    errors.collect(ros.propertyValidator('headerName', ros.validateString)(properties.headerName));
    return errors.wrap('supplied properties not correct for "MockHeadersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.MockHeaders` resource
 *
 * @param properties - the TypeScript properties of a `MockHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.MockHeaders` resource.
 */
// @ts-ignore TS6133
function rosApiMockHeadersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApi_MockHeadersPropertyValidator(properties).assertSuccess();
    return {
      HeaderValue: ros.stringToRosTemplate(properties.headerValue),
      HeaderName: ros.stringToRosTemplate(properties.headerName),
    };
}

export namespace RosApi {
    /**
     * @stability external
     */
    export interface OpenIdConnectConfigProperty {
        /**
         * @Property openIdApiType: The type of the open id. "IDTOKEN" or "BUSINESS". If OpenIdApiType is specified as IDTOKEN, PublicKey and PublicKeyId are required. If OpenIdApiType is specified as BUSINESS, IdTokenParamName is required.
         */
        readonly openIdApiType: string;
        /**
         * @Property publicKey: The public key.
         */
        readonly publicKey?: string;
        /**
         * @Property publicKeyId: The public key id.
         */
        readonly publicKeyId?: string;
        /**
         * @Property idTokenParamName: The token's parameter name.
         */
        readonly idTokenParamName?: string;
    }
}
/**
 * Determine whether the given properties match those of a `OpenIdConnectConfigProperty`
 *
 * @param properties - the TypeScript properties of a `OpenIdConnectConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_OpenIdConnectConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('openIdApiType', ros.requiredValidator)(properties.openIdApiType));
    if(properties.openIdApiType && (typeof properties.openIdApiType) !== 'object') {
        errors.collect(ros.propertyValidator('openIdApiType', ros.validateAllowedValues)({
          data: properties.openIdApiType,
          allowedValues: ["IDTOKEN","BUSINESS"],
        }));
    }
    errors.collect(ros.propertyValidator('openIdApiType', ros.validateString)(properties.openIdApiType));
    errors.collect(ros.propertyValidator('publicKey', ros.validateString)(properties.publicKey));
    errors.collect(ros.propertyValidator('publicKeyId', ros.validateString)(properties.publicKeyId));
    errors.collect(ros.propertyValidator('idTokenParamName', ros.validateString)(properties.idTokenParamName));
    return errors.wrap('supplied properties not correct for "OpenIdConnectConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.OpenIdConnectConfig` resource
 *
 * @param properties - the TypeScript properties of a `OpenIdConnectConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.OpenIdConnectConfig` resource.
 */
// @ts-ignore TS6133
function rosApiOpenIdConnectConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApi_OpenIdConnectConfigPropertyValidator(properties).assertSuccess();
    return {
      OpenIdApiType: ros.stringToRosTemplate(properties.openIdApiType),
      PublicKey: ros.stringToRosTemplate(properties.publicKey),
      PublicKeyId: ros.stringToRosTemplate(properties.publicKeyId),
      IdTokenParamName: ros.stringToRosTemplate(properties.idTokenParamName),
    };
}

export namespace RosApi {
    /**
     * @stability external
     */
    export interface RequestConfigProperty {
        /**
         * @Property requestPath: API Path.
         */
        readonly requestPath: string;
        /**
         * @Property requestMode: API request mode. "MAPPING" or "PASSTHROUGH". Default is "MAPPING".
         */
        readonly requestMode: string;
        /**
         * @Property requestProtocol: The protocol of the request, "HTTP", "HTTPS", or "HTTP,HTTPS", Default is "HTTP".
         */
        readonly requestProtocol: string;
        /**
         * @Property requestHttpMethod: The HTTP method of the request. Default is GET.
         */
        readonly requestHttpMethod: string;
        /**
         * @Property postBodyDescription: Description of the post body.
         */
        readonly postBodyDescription?: string;
        /**
         * @Property bodyFormat: Describe how data transform to the server, "FORM" for k-v and "STREAM" for bit stream.BodyFormat is required if RequestMode is specified as MAPPING and RequestHttpMethod is POST/PUT/PATCH.
         */
        readonly bodyFormat?: string;
    }
}
/**
 * Determine whether the given properties match those of a `RequestConfigProperty`
 *
 * @param properties - the TypeScript properties of a `RequestConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_RequestConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('requestPath', ros.requiredValidator)(properties.requestPath));
    errors.collect(ros.propertyValidator('requestPath', ros.validateString)(properties.requestPath));
    errors.collect(ros.propertyValidator('requestMode', ros.requiredValidator)(properties.requestMode));
    if(properties.requestMode && (typeof properties.requestMode) !== 'object') {
        errors.collect(ros.propertyValidator('requestMode', ros.validateAllowedValues)({
          data: properties.requestMode,
          allowedValues: ["MAPPING","PASSTHROUGH"],
        }));
    }
    errors.collect(ros.propertyValidator('requestMode', ros.validateString)(properties.requestMode));
    errors.collect(ros.propertyValidator('requestProtocol', ros.requiredValidator)(properties.requestProtocol));
    if(properties.requestProtocol && (typeof properties.requestProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('requestProtocol', ros.validateAllowedValues)({
          data: properties.requestProtocol,
          allowedValues: ["HTTP","HTTPS","HTTP,HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('requestProtocol', ros.validateString)(properties.requestProtocol));
    errors.collect(ros.propertyValidator('requestHttpMethod', ros.requiredValidator)(properties.requestHttpMethod));
    if(properties.requestHttpMethod && (typeof properties.requestHttpMethod) !== 'object') {
        errors.collect(ros.propertyValidator('requestHttpMethod', ros.validateAllowedValues)({
          data: properties.requestHttpMethod,
          allowedValues: ["GET","POST","DELETE","PUT","HEAD","TRACE","PATCH","CONNECT","OPTIONS","ANY"],
        }));
    }
    errors.collect(ros.propertyValidator('requestHttpMethod', ros.validateString)(properties.requestHttpMethod));
    errors.collect(ros.propertyValidator('postBodyDescription', ros.validateString)(properties.postBodyDescription));
    if(properties.bodyFormat && (typeof properties.bodyFormat) !== 'object') {
        errors.collect(ros.propertyValidator('bodyFormat', ros.validateAllowedValues)({
          data: properties.bodyFormat,
          allowedValues: ["FORM","STREAM"],
        }));
    }
    errors.collect(ros.propertyValidator('bodyFormat', ros.validateString)(properties.bodyFormat));
    return errors.wrap('supplied properties not correct for "RequestConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.RequestConfig` resource
 *
 * @param properties - the TypeScript properties of a `RequestConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.RequestConfig` resource.
 */
// @ts-ignore TS6133
function rosApiRequestConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApi_RequestConfigPropertyValidator(properties).assertSuccess();
    return {
      RequestPath: ros.stringToRosTemplate(properties.requestPath),
      RequestMode: ros.stringToRosTemplate(properties.requestMode),
      RequestProtocol: ros.stringToRosTemplate(properties.requestProtocol),
      RequestHttpMethod: ros.stringToRosTemplate(properties.requestHttpMethod),
      PostBodyDescription: ros.stringToRosTemplate(properties.postBodyDescription),
      BodyFormat: ros.stringToRosTemplate(properties.bodyFormat),
    };
}

export namespace RosApi {
    /**
     * @stability external
     */
    export interface RequestParametersProperty {
        /**
         * @Property regularExpression: The regular expression of the parameter when it is String.
         */
        readonly regularExpression?: string;
        /**
         * @Property parameterType: The type of the parameter
         */
        readonly parameterType: string;
        /**
         * @Property description: Description of the API, less than 180 characters.
         */
        readonly description?: string;
        /**
         * @Property jsonScheme: The json scheme of the parameter when it is String.
         */
        readonly jsonScheme?: string;
        /**
         * @Property apiParameterName: The name of the request parameter.
         */
        readonly apiParameterName: string;
        /**
         * @Property enumValue: Allowed parameter value, split with ',' like "1,2,3,4"
         */
        readonly enumValue?: string;
        /**
         * @Property minLength: The min length of the parameter when it is String.
         */
        readonly minLength?: number;
        /**
         * @Property maxValue: The max value of the parameter when it is Int, Long, Float or Double.
         */
        readonly maxValue?: number;
        /**
         * @Property maxLength: The max length of the parameter when it is String.
         */
        readonly maxLength?: number;
        /**
         * @Property demoValue: The demo value of the request parameter.
         */
        readonly demoValue?: string;
        /**
         * @Property defaultValue: The default value of the request parameter.
         */
        readonly defaultValue?: string;
        /**
         * @Property required: If required. "REQUIRED", "OPTION"
         */
        readonly required: string;
        /**
         * @Property docOrder: The order of the doc.
         */
        readonly docOrder?: number;
        /**
         * @Property minValue: The min value of the parameter when it is Int, Long, Float or Double.
         */
        readonly minValue?: number;
        /**
         * @Property docShow: Visiablity of the Doc. "PUBLIC" or "PRIVATE"
         */
        readonly docShow?: string;
        /**
         * @Property location: The location of the reqest parameter.
         */
        readonly location: string;
    }
}
/**
 * Determine whether the given properties match those of a `RequestParametersProperty`
 *
 * @param properties - the TypeScript properties of a `RequestParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_RequestParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('regularExpression', ros.validateString)(properties.regularExpression));
    errors.collect(ros.propertyValidator('parameterType', ros.requiredValidator)(properties.parameterType));
    if(properties.parameterType && (typeof properties.parameterType) !== 'object') {
        errors.collect(ros.propertyValidator('parameterType', ros.validateAllowedValues)({
          data: properties.parameterType,
          allowedValues: ["String","Int","Long","Float","Double","Boolean"],
        }));
    }
    errors.collect(ros.propertyValidator('parameterType', ros.validateString)(properties.parameterType));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('jsonScheme', ros.validateString)(properties.jsonScheme));
    errors.collect(ros.propertyValidator('apiParameterName', ros.requiredValidator)(properties.apiParameterName));
    errors.collect(ros.propertyValidator('apiParameterName', ros.validateString)(properties.apiParameterName));
    errors.collect(ros.propertyValidator('enumValue', ros.validateString)(properties.enumValue));
    errors.collect(ros.propertyValidator('minLength', ros.validateNumber)(properties.minLength));
    errors.collect(ros.propertyValidator('maxValue', ros.validateNumber)(properties.maxValue));
    errors.collect(ros.propertyValidator('maxLength', ros.validateNumber)(properties.maxLength));
    errors.collect(ros.propertyValidator('demoValue', ros.validateString)(properties.demoValue));
    errors.collect(ros.propertyValidator('defaultValue', ros.validateString)(properties.defaultValue));
    errors.collect(ros.propertyValidator('required', ros.requiredValidator)(properties.required));
    if(properties.required && (typeof properties.required) !== 'object') {
        errors.collect(ros.propertyValidator('required', ros.validateAllowedValues)({
          data: properties.required,
          allowedValues: ["REQUIRED","OPTION"],
        }));
    }
    errors.collect(ros.propertyValidator('required', ros.validateString)(properties.required));
    errors.collect(ros.propertyValidator('docOrder', ros.validateNumber)(properties.docOrder));
    errors.collect(ros.propertyValidator('minValue', ros.validateNumber)(properties.minValue));
    if(properties.docShow && (typeof properties.docShow) !== 'object') {
        errors.collect(ros.propertyValidator('docShow', ros.validateAllowedValues)({
          data: properties.docShow,
          allowedValues: ["PUBLIC","PRIVATE"],
        }));
    }
    errors.collect(ros.propertyValidator('docShow', ros.validateString)(properties.docShow));
    errors.collect(ros.propertyValidator('location', ros.requiredValidator)(properties.location));
    if(properties.location && (typeof properties.location) !== 'object') {
        errors.collect(ros.propertyValidator('location', ros.validateAllowedValues)({
          data: properties.location,
          allowedValues: ["BODY","HEAD","QUERY","PATH"],
        }));
    }
    errors.collect(ros.propertyValidator('location', ros.validateString)(properties.location));
    return errors.wrap('supplied properties not correct for "RequestParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.RequestParameters` resource
 *
 * @param properties - the TypeScript properties of a `RequestParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.RequestParameters` resource.
 */
// @ts-ignore TS6133
function rosApiRequestParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApi_RequestParametersPropertyValidator(properties).assertSuccess();
    return {
      RegularExpression: ros.stringToRosTemplate(properties.regularExpression),
      ParameterType: ros.stringToRosTemplate(properties.parameterType),
      Description: ros.stringToRosTemplate(properties.description),
      JsonScheme: ros.stringToRosTemplate(properties.jsonScheme),
      ApiParameterName: ros.stringToRosTemplate(properties.apiParameterName),
      EnumValue: ros.stringToRosTemplate(properties.enumValue),
      MinLength: ros.numberToRosTemplate(properties.minLength),
      MaxValue: ros.numberToRosTemplate(properties.maxValue),
      MaxLength: ros.numberToRosTemplate(properties.maxLength),
      DemoValue: ros.stringToRosTemplate(properties.demoValue),
      DefaultValue: ros.stringToRosTemplate(properties.defaultValue),
      Required: ros.stringToRosTemplate(properties.required),
      DocOrder: ros.numberToRosTemplate(properties.docOrder),
      MinValue: ros.numberToRosTemplate(properties.minValue),
      DocShow: ros.stringToRosTemplate(properties.docShow),
      Location: ros.stringToRosTemplate(properties.location),
    };
}

export namespace RosApi {
    /**
     * @stability external
     */
    export interface ServiceConfigProperty {
        /**
         * @Property serviceAddress: Backend service call address. If the complete backend service address is http://api.a.com:8080/object/add?key1=value1&key2=value2, ServiceAddress corresponds to http://api.a.com:8080.
         */
        readonly serviceAddress?: string;
        /**
         * @Property functionComputeConfig: The configuration of the function compute. FunctionComputeConfig is required if ServiceFunctionComputeEnable is TRUE.
         */
        readonly functionComputeConfig?: RosApi.FunctionComputeConfigProperty | ros.IResolvable;
        /**
         * @Property mockResult: The returned value when using Mock model.
         */
        readonly mockResult?: string;
        /**
         * @Property contentTypeValue: ContentTypeValue is required if ContentTypeCatagory is DEFAULT or CUSTOM.
         */
        readonly contentTypeValue?: string;
        /**
         * @Property vpcConfig: The configuration of the VPC. VpcConfig is required if ServiceVpcEnable is TRUE.
         */
        readonly vpcConfig?: RosApi.VpcConfigProperty | ros.IResolvable;
        /**
         * @Property serviceVpcEnable: Whether to use VPC. "TRUE" or "FALSE". Default is FALSE.
         */
        readonly serviceVpcEnable?: string;
        /**
         * @Property mockStatusCode: Status code, returned in the format compatible with HTTP 1.1 response status code and its status
         */
        readonly mockStatusCode?: number;
        /**
         * @Property mockHeaders: Custom Mock response header related information when Mock is enabled.
         */
        readonly mockHeaders?: Array<RosApi.MockHeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property serviceHttpMethod: The HTTP method to the service. Default is GET.
         */
        readonly serviceHttpMethod?: string;
        /**
         * @Property servicePath: Backend service call path. If the complete backend service address is http://api.a.com:8080/object/add?key1=value1&key2=value2, ServicePath corresponds to /object/add.
         */
        readonly servicePath?: string;
        /**
         * @Property mock: Whether to use Mock model. "TRUE" or "FALSE". Default is FALSE.
         */
        readonly mock?: string;
        /**
         * @Property serviceTimeOut: Time out (ms) when using service.
         */
        readonly serviceTimeOut?: number;
        /**
         * @Property serviceProtocol: Backend service protocol type, which must be HTTP, HTTPS or FunctionCompute currently.
         */
        readonly serviceProtocol?: string;
        /**
         * @Property contentTypeCatagory: Specify how to determine ContentType header when using service. "DEFAULT" to use API Gateway's default value. "CUSTOM" to use self defined value. "CLIENT" to use client's ContentType header. Default is CLIENT.
         */
        readonly contentTypeCatagory?: string;
    }
}
/**
 * Determine whether the given properties match those of a `ServiceConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ServiceConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_ServiceConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceAddress', ros.validateString)(properties.serviceAddress));
    errors.collect(ros.propertyValidator('functionComputeConfig', RosApi_FunctionComputeConfigPropertyValidator)(properties.functionComputeConfig));
    errors.collect(ros.propertyValidator('mockResult', ros.validateString)(properties.mockResult));
    errors.collect(ros.propertyValidator('contentTypeValue', ros.validateString)(properties.contentTypeValue));
    errors.collect(ros.propertyValidator('vpcConfig', RosApi_VpcConfigPropertyValidator)(properties.vpcConfig));
    if(properties.serviceVpcEnable && (typeof properties.serviceVpcEnable) !== 'object') {
        errors.collect(ros.propertyValidator('serviceVpcEnable', ros.validateAllowedValues)({
          data: properties.serviceVpcEnable,
          allowedValues: ["TRUE","FALSE"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceVpcEnable', ros.validateString)(properties.serviceVpcEnable));
    errors.collect(ros.propertyValidator('mockStatusCode', ros.validateNumber)(properties.mockStatusCode));
    errors.collect(ros.propertyValidator('mockHeaders', ros.listValidator(RosApi_MockHeadersPropertyValidator))(properties.mockHeaders));
    if(properties.serviceHttpMethod && (typeof properties.serviceHttpMethod) !== 'object') {
        errors.collect(ros.propertyValidator('serviceHttpMethod', ros.validateAllowedValues)({
          data: properties.serviceHttpMethod,
          allowedValues: ["GET","POST","DELETE","PUT","HEAD","TRACE","PATCH","CONNECT","OPTIONS","ANY"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceHttpMethod', ros.validateString)(properties.serviceHttpMethod));
    errors.collect(ros.propertyValidator('servicePath', ros.validateString)(properties.servicePath));
    if(properties.mock && (typeof properties.mock) !== 'object') {
        errors.collect(ros.propertyValidator('mock', ros.validateAllowedValues)({
          data: properties.mock,
          allowedValues: ["TRUE","FALSE"],
        }));
    }
    errors.collect(ros.propertyValidator('mock', ros.validateString)(properties.mock));
    errors.collect(ros.propertyValidator('serviceTimeOut', ros.validateNumber)(properties.serviceTimeOut));
    if(properties.serviceProtocol && (typeof properties.serviceProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('serviceProtocol', ros.validateAllowedValues)({
          data: properties.serviceProtocol,
          allowedValues: ["HTTP","HTTPS","FunctionCompute"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceProtocol', ros.validateString)(properties.serviceProtocol));
    if(properties.contentTypeCatagory && (typeof properties.contentTypeCatagory) !== 'object') {
        errors.collect(ros.propertyValidator('contentTypeCatagory', ros.validateAllowedValues)({
          data: properties.contentTypeCatagory,
          allowedValues: ["DEFAULT","CUSTOM","CLIENT"],
        }));
    }
    errors.collect(ros.propertyValidator('contentTypeCatagory', ros.validateString)(properties.contentTypeCatagory));
    return errors.wrap('supplied properties not correct for "ServiceConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.ServiceConfig` resource
 *
 * @param properties - the TypeScript properties of a `ServiceConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.ServiceConfig` resource.
 */
// @ts-ignore TS6133
function rosApiServiceConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApi_ServiceConfigPropertyValidator(properties).assertSuccess();
    return {
      ServiceAddress: ros.stringToRosTemplate(properties.serviceAddress),
      FunctionComputeConfig: rosApiFunctionComputeConfigPropertyToRosTemplate(properties.functionComputeConfig),
      MockResult: ros.stringToRosTemplate(properties.mockResult),
      ContentTypeValue: ros.stringToRosTemplate(properties.contentTypeValue),
      VpcConfig: rosApiVpcConfigPropertyToRosTemplate(properties.vpcConfig),
      ServiceVpcEnable: ros.stringToRosTemplate(properties.serviceVpcEnable),
      MockStatusCode: ros.numberToRosTemplate(properties.mockStatusCode),
      MockHeaders: ros.listMapper(rosApiMockHeadersPropertyToRosTemplate)(properties.mockHeaders),
      ServiceHttpMethod: ros.stringToRosTemplate(properties.serviceHttpMethod),
      ServicePath: ros.stringToRosTemplate(properties.servicePath),
      Mock: ros.stringToRosTemplate(properties.mock),
      ServiceTimeOut: ros.numberToRosTemplate(properties.serviceTimeOut),
      ServiceProtocol: ros.stringToRosTemplate(properties.serviceProtocol),
      ContentTypeCatagory: ros.stringToRosTemplate(properties.contentTypeCatagory),
    };
}

export namespace RosApi {
    /**
     * @stability external
     */
    export interface ServiceParametersProperty {
        /**
         * @Property parameterType: The type of the parameter.
         */
        readonly parameterType: string;
        /**
         * @Property serviceParameterName: The name of the parameter
         */
        readonly serviceParameterName: string;
        /**
         * @Property location: The location of the parameter
         */
        readonly location: string;
    }
}
/**
 * Determine whether the given properties match those of a `ServiceParametersProperty`
 *
 * @param properties - the TypeScript properties of a `ServiceParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_ServiceParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parameterType', ros.requiredValidator)(properties.parameterType));
    if(properties.parameterType && (typeof properties.parameterType) !== 'object') {
        errors.collect(ros.propertyValidator('parameterType', ros.validateAllowedValues)({
          data: properties.parameterType,
          allowedValues: ["STRING","NUMBER","BOOLEAN"],
        }));
    }
    errors.collect(ros.propertyValidator('parameterType', ros.validateString)(properties.parameterType));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.requiredValidator)(properties.serviceParameterName));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.validateString)(properties.serviceParameterName));
    errors.collect(ros.propertyValidator('location', ros.requiredValidator)(properties.location));
    if(properties.location && (typeof properties.location) !== 'object') {
        errors.collect(ros.propertyValidator('location', ros.validateAllowedValues)({
          data: properties.location,
          allowedValues: ["BODY","HEAD","QUERY","PATH"],
        }));
    }
    errors.collect(ros.propertyValidator('location', ros.validateString)(properties.location));
    return errors.wrap('supplied properties not correct for "ServiceParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.ServiceParameters` resource
 *
 * @param properties - the TypeScript properties of a `ServiceParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.ServiceParameters` resource.
 */
// @ts-ignore TS6133
function rosApiServiceParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApi_ServiceParametersPropertyValidator(properties).assertSuccess();
    return {
      ParameterType: ros.stringToRosTemplate(properties.parameterType),
      ServiceParameterName: ros.stringToRosTemplate(properties.serviceParameterName),
      Location: ros.stringToRosTemplate(properties.location),
    };
}

export namespace RosApi {
    /**
     * @stability external
     */
    export interface ServiceParametersMapProperty {
        /**
         * @Property requestParameterName: The corresponding request parameter, system parameter or const parameter.
         */
        readonly requestParameterName: string;
        /**
         * @Property serviceParameterName: The corresponding service parameter.
         */
        readonly serviceParameterName: string;
    }
}
/**
 * Determine whether the given properties match those of a `ServiceParametersMapProperty`
 *
 * @param properties - the TypeScript properties of a `ServiceParametersMapProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_ServiceParametersMapPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('requestParameterName', ros.requiredValidator)(properties.requestParameterName));
    errors.collect(ros.propertyValidator('requestParameterName', ros.validateString)(properties.requestParameterName));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.requiredValidator)(properties.serviceParameterName));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.validateString)(properties.serviceParameterName));
    return errors.wrap('supplied properties not correct for "ServiceParametersMapProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.ServiceParametersMap` resource
 *
 * @param properties - the TypeScript properties of a `ServiceParametersMapProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.ServiceParametersMap` resource.
 */
// @ts-ignore TS6133
function rosApiServiceParametersMapPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApi_ServiceParametersMapPropertyValidator(properties).assertSuccess();
    return {
      RequestParameterName: ros.stringToRosTemplate(properties.requestParameterName),
      ServiceParameterName: ros.stringToRosTemplate(properties.serviceParameterName),
    };
}

export namespace RosApi {
    /**
     * @stability external
     */
    export interface SystemParametersProperty {
        /**
         * @Property demoValue: The demo value of the system parameter.
         */
        readonly demoValue?: string;
        /**
         * @Property description: Description of the system parameter, less than 180 characters.
         */
        readonly description?: string;
        /**
         * @Property parameterName: The system parameter name.
         */
        readonly parameterName: string;
        /**
         * @Property serviceParameterName: The service parameter name.
         */
        readonly serviceParameterName: string;
        /**
         * @Property location: The location of the system parameter. Default is HEAD.
         */
        readonly location: string;
    }
}
/**
 * Determine whether the given properties match those of a `SystemParametersProperty`
 *
 * @param properties - the TypeScript properties of a `SystemParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_SystemParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('demoValue', ros.validateString)(properties.demoValue));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('parameterName', ros.requiredValidator)(properties.parameterName));
    if(properties.parameterName && (typeof properties.parameterName) !== 'object') {
        errors.collect(ros.propertyValidator('parameterName', ros.validateAllowedValues)({
          data: properties.parameterName,
          allowedValues: ["CaClientIp","CaDomain","CaRequestHandleTime","CaAppId","CaRequestId","CaHttpSchema","CaProxy"],
        }));
    }
    errors.collect(ros.propertyValidator('parameterName', ros.validateString)(properties.parameterName));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.requiredValidator)(properties.serviceParameterName));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.validateString)(properties.serviceParameterName));
    errors.collect(ros.propertyValidator('location', ros.requiredValidator)(properties.location));
    if(properties.location && (typeof properties.location) !== 'object') {
        errors.collect(ros.propertyValidator('location', ros.validateAllowedValues)({
          data: properties.location,
          allowedValues: ["BODY","HEAD","QUERY","PATH"],
        }));
    }
    errors.collect(ros.propertyValidator('location', ros.validateString)(properties.location));
    return errors.wrap('supplied properties not correct for "SystemParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.SystemParameters` resource
 *
 * @param properties - the TypeScript properties of a `SystemParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.SystemParameters` resource.
 */
// @ts-ignore TS6133
function rosApiSystemParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApi_SystemParametersPropertyValidator(properties).assertSuccess();
    return {
      DemoValue: ros.stringToRosTemplate(properties.demoValue),
      Description: ros.stringToRosTemplate(properties.description),
      ParameterName: ros.stringToRosTemplate(properties.parameterName),
      ServiceParameterName: ros.stringToRosTemplate(properties.serviceParameterName),
      Location: ros.stringToRosTemplate(properties.location),
    };
}

export namespace RosApi {
    /**
     * @stability external
     */
    export interface VpcConfigProperty {
        /**
         * @Property vpcId: The id of the VPC.
         */
        readonly vpcId: string;
        /**
         * @Property instanceId: The id of the instance (ECS/SLB).
         */
        readonly instanceId: string;
        /**
         * @Property port: The port of the VPC.
         */
        readonly port: number;
    }
}
/**
 * Determine whether the given properties match those of a `VpcConfigProperty`
 *
 * @param properties - the TypeScript properties of a `VpcConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_VpcConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    return errors.wrap('supplied properties not correct for "VpcConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.VpcConfig` resource
 *
 * @param properties - the TypeScript properties of a `VpcConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.VpcConfig` resource.
 */
// @ts-ignore TS6133
function rosApiVpcConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApi_VpcConfigPropertyValidator(properties).assertSuccess();
    return {
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Port: ros.numberToRosTemplate(properties.port),
    };
}

/**
 * Properties for defining a `ALIYUN::ApiGateway::App`
 */
export interface RosAppProps {

    /**
     * @Property appName: The name of the App.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly appName: string;

    /**
     * @Property description: Description of the App, less than 180 characters.
     */
    readonly description?: string;

    /**
     * @Property tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];
}

/**
 * Determine whether the given properties match those of a `RosAppProps`
 *
 * @param properties - the TypeScript properties of a `RosAppProps`
 *
 * @returns the result of the validation.
 */
function RosAppPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('appName', ros.requiredValidator)(properties.appName));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    return errors.wrap('supplied properties not correct for "RosAppProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::App` resource
 *
 * @param properties - the TypeScript properties of a `RosAppProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::App` resource.
 */
// @ts-ignore TS6133
function rosAppPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAppPropsValidator(properties).assertSuccess();
    }
    return {
      AppName: ros.stringToRosTemplate(properties.appName),
      Description: ros.stringToRosTemplate(properties.description),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::ApiGateway::App`
 */
export class RosApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::App";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AppId: The id of the created APP
     */
    public readonly attrAppId: any;

    /**
     * @Attribute AppKey: The key of the APP
     */
    public readonly attrAppKey: any;

    /**
     * @Attribute AppSecret: The secret of the APP
     */
    public readonly attrAppSecret: any;

    /**
     * @Attribute Tags: Tags of app
     */
    public readonly attrTags: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appName: The name of the App.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    public appName: string;

    /**
     * @Property description: Description of the App, less than 180 characters.
     */
    public description: string | undefined;

    /**
     * @Property tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * Create a new `ALIYUN::ApiGateway::App`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = ros.Token.asString(this.getAtt('AppId'));
        this.attrAppKey = ros.Token.asString(this.getAtt('AppKey'));
        this.attrAppSecret = ros.Token.asString(this.getAtt('AppSecret'));
        this.attrTags = ros.Token.asString(this.getAtt('Tags'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appName = props.appName;
        this.description = props.description;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ApiGateway::App", props.tags, { tagPropertyName: 'tags' });
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appName: this.appName,
            description: this.description,
            tags: this.tags.renderTags(),
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAppPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ApiGateway::Authorization`
 */
export interface RosAuthorizationProps {

    /**
     * @Property apiIds: APIs to authorize.
     */
    readonly apiIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property appIds: APPs are authorized to APIs.
     */
    readonly appIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property groupId: The id of the group.
     */
    readonly groupId: string;

    /**
     * @Property stageName: Authorize in this stage.
     */
    readonly stageName: string;

    /**
     * @Property description: Description of the authorization, less than 180 characters.
     */
    readonly description?: string;
}

/**
 * Determine whether the given properties match those of a `RosAuthorizationProps`
 *
 * @param properties - the TypeScript properties of a `RosAuthorizationProps`
 *
 * @returns the result of the validation.
 */
function RosAuthorizationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('stageName', ros.requiredValidator)(properties.stageName));
    if(properties.stageName && (typeof properties.stageName) !== 'object') {
        errors.collect(ros.propertyValidator('stageName', ros.validateAllowedValues)({
          data: properties.stageName,
          allowedValues: ["TEST","RELEASE","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('stageName', ros.validateString)(properties.stageName));
    errors.collect(ros.propertyValidator('apiIds', ros.requiredValidator)(properties.apiIds));
    if(properties.apiIds && (Array.isArray(properties.apiIds) || (typeof properties.apiIds) === 'string')) {
        errors.collect(ros.propertyValidator('apiIds', ros.validateLength)({
            data: properties.apiIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('apiIds', ros.listValidator(ros.validateAny))(properties.apiIds));
    errors.collect(ros.propertyValidator('appIds', ros.requiredValidator)(properties.appIds));
    if(properties.appIds && (Array.isArray(properties.appIds) || (typeof properties.appIds) === 'string')) {
        errors.collect(ros.propertyValidator('appIds', ros.validateLength)({
            data: properties.appIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('appIds', ros.listValidator(ros.validateAny))(properties.appIds));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosAuthorizationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Authorization` resource
 *
 * @param properties - the TypeScript properties of a `RosAuthorizationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Authorization` resource.
 */
// @ts-ignore TS6133
function rosAuthorizationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAuthorizationPropsValidator(properties).assertSuccess();
    }
    return {
      ApiIds: ros.listMapper(ros.objectToRosTemplate)(properties.apiIds),
      AppIds: ros.listMapper(ros.objectToRosTemplate)(properties.appIds),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      StageName: ros.stringToRosTemplate(properties.stageName),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * A ROS template type:  `ALIYUN::ApiGateway::Authorization`
 */
export class RosAuthorization extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Authorization";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property apiIds: APIs to authorize.
     */
    public apiIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property appIds: APPs are authorized to APIs.
     */
    public appIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property groupId: The id of the group.
     */
    public groupId: string;

    /**
     * @Property stageName: Authorize in this stage.
     */
    public stageName: string;

    /**
     * @Property description: Description of the authorization, less than 180 characters.
     */
    public description: string | undefined;

    /**
     * Create a new `ALIYUN::ApiGateway::Authorization`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAuthorizationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAuthorization.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiIds = props.apiIds;
        this.appIds = props.appIds;
        this.groupId = props.groupId;
        this.stageName = props.stageName;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            apiIds: this.apiIds,
            appIds: this.appIds,
            groupId: this.groupId,
            stageName: this.stageName,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAuthorizationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ApiGateway::CustomDomain`
 */
export interface RosCustomDomainProps {

    /**
     * @Property domainName: Custom domain name.
     */
    readonly domainName: string;

    /**
     * @Property groupId: The id of the Group.
     */
    readonly groupId: string;

    /**
     * @Property certificateBody: SSL certificate body.
     */
    readonly certificateBody?: string;

    /**
     * @Property certificateName: SSL certificate name.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly certificateName?: string;

    /**
     * @Property certificatePrivateKey: SSL certificate key.
     */
    readonly certificatePrivateKey?: string;
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
    errors.collect(ros.propertyValidator('certificateBody', ros.validateString)(properties.certificateBody));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('certificatePrivateKey', ros.validateString)(properties.certificatePrivateKey));
    errors.collect(ros.propertyValidator('certificateName', ros.validateString)(properties.certificateName));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosCustomDomainProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::CustomDomain` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::CustomDomain` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomDomainPropsValidator(properties).assertSuccess();
    }
    return {
      DomainName: ros.stringToRosTemplate(properties.domainName),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      CertificateBody: ros.stringToRosTemplate(properties.certificateBody),
      CertificateName: ros.stringToRosTemplate(properties.certificateName),
      CertificatePrivateKey: ros.stringToRosTemplate(properties.certificatePrivateKey),
    };
}

/**
 * A ROS template type:  `ALIYUN::ApiGateway::CustomDomain`
 */
export class RosCustomDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::CustomDomain";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CertificateId: The id of the certificate.
     */
    public readonly attrCertificateId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: Custom domain name.
     */
    public domainName: string;

    /**
     * @Property groupId: The id of the Group.
     */
    public groupId: string;

    /**
     * @Property certificateBody: SSL certificate body.
     */
    public certificateBody: string | undefined;

    /**
     * @Property certificateName: SSL certificate name.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    public certificateName: string | undefined;

    /**
     * @Property certificatePrivateKey: SSL certificate key.
     */
    public certificatePrivateKey: string | undefined;

    /**
     * Create a new `ALIYUN::ApiGateway::CustomDomain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCertificateId = ros.Token.asString(this.getAtt('CertificateId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.groupId = props.groupId;
        this.certificateBody = props.certificateBody;
        this.certificateName = props.certificateName;
        this.certificatePrivateKey = props.certificatePrivateKey;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            groupId: this.groupId,
            certificateBody: this.certificateBody,
            certificateName: this.certificateName,
            certificatePrivateKey: this.certificatePrivateKey,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ApiGateway::Deployment`
 */
export interface RosDeploymentProps {

    /**
     * @Property apiId: The id of the API.
     */
    readonly apiId: string;

    /**
     * @Property groupId: The id of the Group.
     */
    readonly groupId: string;

    /**
     * @Property stageName: Bind traffic in this stage.
     */
    readonly stageName: string;

    /**
     * @Property description: Description of the deployment, less than 180 characters.
     */
    readonly description?: string;

    /**
     * @Property historyVersion: The history version.
     */
    readonly historyVersion?: string;
}

/**
 * Determine whether the given properties match those of a `RosDeploymentProps`
 *
 * @param properties - the TypeScript properties of a `RosDeploymentProps`
 *
 * @returns the result of the validation.
 */
function RosDeploymentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('stageName', ros.requiredValidator)(properties.stageName));
    if(properties.stageName && (typeof properties.stageName) !== 'object') {
        errors.collect(ros.propertyValidator('stageName', ros.validateAllowedValues)({
          data: properties.stageName,
          allowedValues: ["TEST","RELEASE","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('stageName', ros.validateString)(properties.stageName));
    errors.collect(ros.propertyValidator('apiId', ros.requiredValidator)(properties.apiId));
    errors.collect(ros.propertyValidator('apiId', ros.validateString)(properties.apiId));
    errors.collect(ros.propertyValidator('historyVersion', ros.validateString)(properties.historyVersion));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosDeploymentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Deployment` resource
 *
 * @param properties - the TypeScript properties of a `RosDeploymentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Deployment` resource.
 */
// @ts-ignore TS6133
function rosDeploymentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDeploymentPropsValidator(properties).assertSuccess();
    }
    return {
      ApiId: ros.stringToRosTemplate(properties.apiId),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      StageName: ros.stringToRosTemplate(properties.stageName),
      Description: ros.stringToRosTemplate(properties.description),
      HistoryVersion: ros.stringToRosTemplate(properties.historyVersion),
    };
}

/**
 * A ROS template type:  `ALIYUN::ApiGateway::Deployment`
 */
export class RosDeployment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Deployment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property apiId: The id of the API.
     */
    public apiId: string;

    /**
     * @Property groupId: The id of the Group.
     */
    public groupId: string;

    /**
     * @Property stageName: Bind traffic in this stage.
     */
    public stageName: string;

    /**
     * @Property description: Description of the deployment, less than 180 characters.
     */
    public description: string | undefined;

    /**
     * @Property historyVersion: The history version.
     */
    public historyVersion: string | undefined;

    /**
     * Create a new `ALIYUN::ApiGateway::Deployment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeploymentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDeployment.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiId = props.apiId;
        this.groupId = props.groupId;
        this.stageName = props.stageName;
        this.description = props.description;
        this.historyVersion = props.historyVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            apiId: this.apiId,
            groupId: this.groupId,
            stageName: this.stageName,
            description: this.description,
            historyVersion: this.historyVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDeploymentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ApiGateway::Group`
 */
export interface RosGroupProps {

    /**
     * @Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly groupName: string;

    /**
     * @Property description: Description of the Group, less than 180 characters.
     */
    readonly description?: string;

    /**
     * @Property instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
     */
    readonly instanceId?: string;

    /**
     * @Property passthroughHeaders: Pass through headers setting. values:
     * host: pass through host headers
     */
    readonly passthroughHeaders?: string;

    /**
     * @Property tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];
}

/**
 * Determine whether the given properties match those of a `RosGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the result of the validation.
 */
function RosGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('passthroughHeaders', ros.validateString)(properties.passthroughHeaders));
    return errors.wrap('supplied properties not correct for "RosGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Group` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Group` resource.
 */
// @ts-ignore TS6133
function rosGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGroupPropsValidator(properties).assertSuccess();
    }
    return {
      GroupName: ros.stringToRosTemplate(properties.groupName),
      Description: ros.stringToRosTemplate(properties.description),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      PassthroughHeaders: ros.stringToRosTemplate(properties.passthroughHeaders),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::ApiGateway::Group`
 */
export class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Group";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute GroupId: The id of the created Group resource
     */
    public readonly attrGroupId: any;

    /**
     * @Attribute SubDomain: The sub domain assigned to the Group by the system
     */
    public readonly attrSubDomain: any;

    /**
     * @Attribute Tags: Tags of app
     */
    public readonly attrTags: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    public groupName: string;

    /**
     * @Property description: Description of the Group, less than 180 characters.
     */
    public description: string | undefined;

    /**
     * @Property instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
     */
    public instanceId: string | undefined;

    /**
     * @Property passthroughHeaders: Pass through headers setting. values:
     * host: pass through host headers
     */
    public passthroughHeaders: string | undefined;

    /**
     * @Property tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * Create a new `ALIYUN::ApiGateway::Group`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = ros.Token.asString(this.getAtt('GroupId'));
        this.attrSubDomain = ros.Token.asString(this.getAtt('SubDomain'));
        this.attrTags = ros.Token.asString(this.getAtt('Tags'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.description = props.description;
        this.instanceId = props.instanceId;
        this.passthroughHeaders = props.passthroughHeaders;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ApiGateway::Group", props.tags, { tagPropertyName: 'tags' });
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            description: this.description,
            instanceId: this.instanceId,
            passthroughHeaders: this.passthroughHeaders,
            tags: this.tags.renderTags(),
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ApiGateway::Signature`
 */
export interface RosSignatureProps {

    /**
     * @Property signatureKey: The key of the signature.
     */
    readonly signatureKey: string;

    /**
     * @Property signatureName: The name of the Signature.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly signatureName: string;

    /**
     * @Property signatureSecret: The secret of the signature.
     */
    readonly signatureSecret: string;
}

/**
 * Determine whether the given properties match those of a `RosSignatureProps`
 *
 * @param properties - the TypeScript properties of a `RosSignatureProps`
 *
 * @returns the result of the validation.
 */
function RosSignaturePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('signatureSecret', ros.requiredValidator)(properties.signatureSecret));
    errors.collect(ros.propertyValidator('signatureSecret', ros.validateString)(properties.signatureSecret));
    errors.collect(ros.propertyValidator('signatureName', ros.requiredValidator)(properties.signatureName));
    errors.collect(ros.propertyValidator('signatureName', ros.validateString)(properties.signatureName));
    errors.collect(ros.propertyValidator('signatureKey', ros.requiredValidator)(properties.signatureKey));
    errors.collect(ros.propertyValidator('signatureKey', ros.validateString)(properties.signatureKey));
    return errors.wrap('supplied properties not correct for "RosSignatureProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Signature` resource
 *
 * @param properties - the TypeScript properties of a `RosSignatureProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Signature` resource.
 */
// @ts-ignore TS6133
function rosSignaturePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSignaturePropsValidator(properties).assertSuccess();
    }
    return {
      SignatureKey: ros.stringToRosTemplate(properties.signatureKey),
      SignatureName: ros.stringToRosTemplate(properties.signatureName),
      SignatureSecret: ros.stringToRosTemplate(properties.signatureSecret),
    };
}

/**
 * A ROS template type:  `ALIYUN::ApiGateway::Signature`
 */
export class RosSignature extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Signature";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SignatureId: The id of the created signature
     */
    public readonly attrSignatureId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property signatureKey: The key of the signature.
     */
    public signatureKey: string;

    /**
     * @Property signatureName: The name of the Signature.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    public signatureName: string;

    /**
     * @Property signatureSecret: The secret of the signature.
     */
    public signatureSecret: string;

    /**
     * Create a new `ALIYUN::ApiGateway::Signature`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSignatureProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSignature.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSignatureId = ros.Token.asString(this.getAtt('SignatureId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.signatureKey = props.signatureKey;
        this.signatureName = props.signatureName;
        this.signatureSecret = props.signatureSecret;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            signatureKey: this.signatureKey,
            signatureName: this.signatureName,
            signatureSecret: this.signatureSecret,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSignaturePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ApiGateway::SignatureBinding`
 */
export interface RosSignatureBindingProps {

    /**
     * @Property apiIds: APIs to bind with the signature.
     */
    readonly apiIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property groupId: The id of group.
     */
    readonly groupId: string;

    /**
     * @Property signatureId: The id of the Signature.
     */
    readonly signatureId: string;

    /**
     * @Property stageName: Bind signature in this stage.
     */
    readonly stageName: string;
}

/**
 * Determine whether the given properties match those of a `RosSignatureBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosSignatureBindingProps`
 *
 * @returns the result of the validation.
 */
function RosSignatureBindingPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('signatureId', ros.requiredValidator)(properties.signatureId));
    errors.collect(ros.propertyValidator('signatureId', ros.validateString)(properties.signatureId));
    errors.collect(ros.propertyValidator('stageName', ros.requiredValidator)(properties.stageName));
    if(properties.stageName && (typeof properties.stageName) !== 'object') {
        errors.collect(ros.propertyValidator('stageName', ros.validateAllowedValues)({
          data: properties.stageName,
          allowedValues: ["TEST","RELEASE","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('stageName', ros.validateString)(properties.stageName));
    errors.collect(ros.propertyValidator('apiIds', ros.requiredValidator)(properties.apiIds));
    if(properties.apiIds && (Array.isArray(properties.apiIds) || (typeof properties.apiIds) === 'string')) {
        errors.collect(ros.propertyValidator('apiIds', ros.validateLength)({
            data: properties.apiIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('apiIds', ros.listValidator(ros.validateAny))(properties.apiIds));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosSignatureBindingProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::SignatureBinding` resource
 *
 * @param properties - the TypeScript properties of a `RosSignatureBindingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::SignatureBinding` resource.
 */
// @ts-ignore TS6133
function rosSignatureBindingPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSignatureBindingPropsValidator(properties).assertSuccess();
    }
    return {
      ApiIds: ros.listMapper(ros.objectToRosTemplate)(properties.apiIds),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      SignatureId: ros.stringToRosTemplate(properties.signatureId),
      StageName: ros.stringToRosTemplate(properties.stageName),
    };
}

/**
 * A ROS template type:  `ALIYUN::ApiGateway::SignatureBinding`
 */
export class RosSignatureBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::SignatureBinding";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property apiIds: APIs to bind with the signature.
     */
    public apiIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property groupId: The id of group.
     */
    public groupId: string;

    /**
     * @Property signatureId: The id of the Signature.
     */
    public signatureId: string;

    /**
     * @Property stageName: Bind signature in this stage.
     */
    public stageName: string;

    /**
     * Create a new `ALIYUN::ApiGateway::SignatureBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSignatureBindingProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSignatureBinding.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiIds = props.apiIds;
        this.groupId = props.groupId;
        this.signatureId = props.signatureId;
        this.stageName = props.stageName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            apiIds: this.apiIds,
            groupId: this.groupId,
            signatureId: this.signatureId,
            stageName: this.stageName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSignatureBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ApiGateway::StageConfig`
 */
export interface RosStageConfigProps {

    /**
     * @Property groupId: The id of the Group.
     */
    readonly groupId: string;

    /**
     * @Property stageName: The name of the Stage.
     */
    readonly stageName: string;

    /**
     * @Property variables: Variables in the stage, key-value pairs.
     */
    readonly variables: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosStageConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosStageConfigProps`
 *
 * @returns the result of the validation.
 */
function RosStageConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('variables', ros.requiredValidator)(properties.variables));
    errors.collect(ros.propertyValidator('variables', ros.hashValidator(ros.validateAny))(properties.variables));
    errors.collect(ros.propertyValidator('stageName', ros.requiredValidator)(properties.stageName));
    if(properties.stageName && (typeof properties.stageName) !== 'object') {
        errors.collect(ros.propertyValidator('stageName', ros.validateAllowedValues)({
          data: properties.stageName,
          allowedValues: ["TEST","RELEASE","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('stageName', ros.validateString)(properties.stageName));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosStageConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::StageConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosStageConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::StageConfig` resource.
 */
// @ts-ignore TS6133
function rosStageConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosStageConfigPropsValidator(properties).assertSuccess();
    }
    return {
      GroupId: ros.stringToRosTemplate(properties.groupId),
      StageName: ros.stringToRosTemplate(properties.stageName),
      Variables: ros.hashMapper(ros.objectToRosTemplate)(properties.variables),
    };
}

/**
 * A ROS template type:  `ALIYUN::ApiGateway::StageConfig`
 */
export class RosStageConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::StageConfig";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupId: The id of the Group.
     */
    public groupId: string;

    /**
     * @Property stageName: The name of the Stage.
     */
    public stageName: string;

    /**
     * @Property variables: Variables in the stage, key-value pairs.
     */
    public variables: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Create a new `ALIYUN::ApiGateway::StageConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStageConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosStageConfig.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupId = props.groupId;
        this.stageName = props.stageName;
        this.variables = props.variables;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupId: this.groupId,
            stageName: this.stageName,
            variables: this.variables,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosStageConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ApiGateway::TrafficControl`
 */
export interface RosTrafficControlProps {

    /**
     * @Property apiDefault: Default API traffic value.
     */
    readonly apiDefault: number;

    /**
     * @Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly trafficControlName: string;

    /**
     * @Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
     */
    readonly trafficControlUnit: string;

    /**
     * @Property appDefault: Default APP traffic value.
     */
    readonly appDefault?: string;

    /**
     * @Property description: Description of the traffic control, less than 180 characters.
     */
    readonly description?: string;

    /**
     * @Property special: Special traffic controls.
     */
    readonly special?: Array<RosTrafficControl.SpecialProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property userDefault: Default user traffic value.
     */
    readonly userDefault?: string;
}

/**
 * Determine whether the given properties match those of a `RosTrafficControlProps`
 *
 * @param properties - the TypeScript properties of a `RosTrafficControlProps`
 *
 * @returns the result of the validation.
 */
function RosTrafficControlPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('trafficControlUnit', ros.requiredValidator)(properties.trafficControlUnit));
    if(properties.trafficControlUnit && (typeof properties.trafficControlUnit) !== 'object') {
        errors.collect(ros.propertyValidator('trafficControlUnit', ros.validateAllowedValues)({
          data: properties.trafficControlUnit,
          allowedValues: ["DAY","HOUR","MINUTE"],
        }));
    }
    errors.collect(ros.propertyValidator('trafficControlUnit', ros.validateString)(properties.trafficControlUnit));
    errors.collect(ros.propertyValidator('trafficControlName', ros.requiredValidator)(properties.trafficControlName));
    errors.collect(ros.propertyValidator('trafficControlName', ros.validateString)(properties.trafficControlName));
    errors.collect(ros.propertyValidator('appDefault', ros.validateString)(properties.appDefault));
    errors.collect(ros.propertyValidator('special', ros.listValidator(RosTrafficControl_SpecialPropertyValidator))(properties.special));
    errors.collect(ros.propertyValidator('userDefault', ros.validateString)(properties.userDefault));
    errors.collect(ros.propertyValidator('apiDefault', ros.requiredValidator)(properties.apiDefault));
    errors.collect(ros.propertyValidator('apiDefault', ros.validateNumber)(properties.apiDefault));
    return errors.wrap('supplied properties not correct for "RosTrafficControlProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::TrafficControl` resource
 *
 * @param properties - the TypeScript properties of a `RosTrafficControlProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::TrafficControl` resource.
 */
// @ts-ignore TS6133
function rosTrafficControlPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTrafficControlPropsValidator(properties).assertSuccess();
    }
    return {
      ApiDefault: ros.numberToRosTemplate(properties.apiDefault),
      TrafficControlName: ros.stringToRosTemplate(properties.trafficControlName),
      TrafficControlUnit: ros.stringToRosTemplate(properties.trafficControlUnit),
      AppDefault: ros.stringToRosTemplate(properties.appDefault),
      Description: ros.stringToRosTemplate(properties.description),
      Special: ros.listMapper(rosTrafficControlSpecialPropertyToRosTemplate)(properties.special),
      UserDefault: ros.stringToRosTemplate(properties.userDefault),
    };
}

/**
 * A ROS template type:  `ALIYUN::ApiGateway::TrafficControl`
 */
export class RosTrafficControl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::TrafficControl";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute TrafficControlId: The id of the traffic control
     */
    public readonly attrTrafficControlId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property apiDefault: Default API traffic value.
     */
    public apiDefault: number;

    /**
     * @Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    public trafficControlName: string;

    /**
     * @Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
     */
    public trafficControlUnit: string;

    /**
     * @Property appDefault: Default APP traffic value.
     */
    public appDefault: string | undefined;

    /**
     * @Property description: Description of the traffic control, less than 180 characters.
     */
    public description: string | undefined;

    /**
     * @Property special: Special traffic controls.
     */
    public special: Array<RosTrafficControl.SpecialProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property userDefault: Default user traffic value.
     */
    public userDefault: string | undefined;

    /**
     * Create a new `ALIYUN::ApiGateway::TrafficControl`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrafficControlProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTrafficControl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTrafficControlId = ros.Token.asString(this.getAtt('TrafficControlId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiDefault = props.apiDefault;
        this.trafficControlName = props.trafficControlName;
        this.trafficControlUnit = props.trafficControlUnit;
        this.appDefault = props.appDefault;
        this.description = props.description;
        this.special = props.special;
        this.userDefault = props.userDefault;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            apiDefault: this.apiDefault,
            trafficControlName: this.trafficControlName,
            trafficControlUnit: this.trafficControlUnit,
            appDefault: this.appDefault,
            description: this.description,
            special: this.special,
            userDefault: this.userDefault,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTrafficControlPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosTrafficControl {
    /**
     * @stability external
     */
    export interface SpecialProperty {
        /**
         * @Property specialKey: The key of special traffic control.
         */
        readonly specialKey: string;
        /**
         * @Property specialType: The type of special traffic control.
         */
        readonly specialType: string;
        /**
         * @Property trafficValue: The value of special traffic control
         */
        readonly trafficValue: number;
    }
}
/**
 * Determine whether the given properties match those of a `SpecialProperty`
 *
 * @param properties - the TypeScript properties of a `SpecialProperty`
 *
 * @returns the result of the validation.
 */
function RosTrafficControl_SpecialPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('specialKey', ros.requiredValidator)(properties.specialKey));
    errors.collect(ros.propertyValidator('specialKey', ros.validateString)(properties.specialKey));
    errors.collect(ros.propertyValidator('specialType', ros.requiredValidator)(properties.specialType));
    if(properties.specialType && (typeof properties.specialType) !== 'object') {
        errors.collect(ros.propertyValidator('specialType', ros.validateAllowedValues)({
          data: properties.specialType,
          allowedValues: ["APP","USER"],
        }));
    }
    errors.collect(ros.propertyValidator('specialType', ros.validateString)(properties.specialType));
    errors.collect(ros.propertyValidator('trafficValue', ros.requiredValidator)(properties.trafficValue));
    errors.collect(ros.propertyValidator('trafficValue', ros.validateNumber)(properties.trafficValue));
    return errors.wrap('supplied properties not correct for "SpecialProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::TrafficControl.Special` resource
 *
 * @param properties - the TypeScript properties of a `SpecialProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::TrafficControl.Special` resource.
 */
// @ts-ignore TS6133
function rosTrafficControlSpecialPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTrafficControl_SpecialPropertyValidator(properties).assertSuccess();
    return {
      SpecialKey: ros.stringToRosTemplate(properties.specialKey),
      SpecialType: ros.stringToRosTemplate(properties.specialType),
      TrafficValue: ros.numberToRosTemplate(properties.trafficValue),
    };
}

/**
 * Properties for defining a `ALIYUN::ApiGateway::TrafficControlBinding`
 */
export interface RosTrafficControlBindingProps {

    /**
     * @Property apiIds: APIs to bind with the traffic control.
     */
    readonly apiIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property groupId: The id of group.
     */
    readonly groupId: string;

    /**
     * @Property stageName: Bind traffic in this stage.
     */
    readonly stageName: string;

    /**
     * @Property trafficControlId: The id of traffic control.
     */
    readonly trafficControlId: string;
}

/**
 * Determine whether the given properties match those of a `RosTrafficControlBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosTrafficControlBindingProps`
 *
 * @returns the result of the validation.
 */
function RosTrafficControlBindingPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('stageName', ros.requiredValidator)(properties.stageName));
    if(properties.stageName && (typeof properties.stageName) !== 'object') {
        errors.collect(ros.propertyValidator('stageName', ros.validateAllowedValues)({
          data: properties.stageName,
          allowedValues: ["TEST","RELEASE","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('stageName', ros.validateString)(properties.stageName));
    errors.collect(ros.propertyValidator('apiIds', ros.requiredValidator)(properties.apiIds));
    if(properties.apiIds && (Array.isArray(properties.apiIds) || (typeof properties.apiIds) === 'string')) {
        errors.collect(ros.propertyValidator('apiIds', ros.validateLength)({
            data: properties.apiIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('apiIds', ros.listValidator(ros.validateAny))(properties.apiIds));
    errors.collect(ros.propertyValidator('trafficControlId', ros.requiredValidator)(properties.trafficControlId));
    errors.collect(ros.propertyValidator('trafficControlId', ros.validateString)(properties.trafficControlId));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosTrafficControlBindingProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::TrafficControlBinding` resource
 *
 * @param properties - the TypeScript properties of a `RosTrafficControlBindingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::TrafficControlBinding` resource.
 */
// @ts-ignore TS6133
function rosTrafficControlBindingPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTrafficControlBindingPropsValidator(properties).assertSuccess();
    }
    return {
      ApiIds: ros.listMapper(ros.objectToRosTemplate)(properties.apiIds),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      StageName: ros.stringToRosTemplate(properties.stageName),
      TrafficControlId: ros.stringToRosTemplate(properties.trafficControlId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ApiGateway::TrafficControlBinding`
 */
export class RosTrafficControlBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::TrafficControlBinding";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property apiIds: APIs to bind with the traffic control.
     */
    public apiIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property groupId: The id of group.
     */
    public groupId: string;

    /**
     * @Property stageName: Bind traffic in this stage.
     */
    public stageName: string;

    /**
     * @Property trafficControlId: The id of traffic control.
     */
    public trafficControlId: string;

    /**
     * Create a new `ALIYUN::ApiGateway::TrafficControlBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrafficControlBindingProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTrafficControlBinding.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiIds = props.apiIds;
        this.groupId = props.groupId;
        this.stageName = props.stageName;
        this.trafficControlId = props.trafficControlId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            apiIds: this.apiIds,
            groupId: this.groupId,
            stageName: this.stageName,
            trafficControlId: this.trafficControlId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTrafficControlBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ApiGateway::VpcAccessConfig`
 */
export interface RosVpcAccessConfigProps {

    /**
     * @Property instanceId: The id of the instance (ECS/SLB).
     */
    readonly instanceId: string;

    /**
     * @Property name: The name of one VPC access configuration.Need [4, 50] Chinese\English\Number characters "-" or "_",and should start with Chinese/English character.
     */
    readonly name: string;

    /**
     * @Property port: The port of the VPC.
     */
    readonly port: number;

    /**
     * @Property vpcId: The id of the VPC.
     */
    readonly vpcId: string;
}

/**
 * Determine whether the given properties match those of a `RosVpcAccessConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcAccessConfigProps`
 *
 * @returns the result of the validation.
 */
function RosVpcAccessConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosVpcAccessConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::VpcAccessConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosVpcAccessConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::VpcAccessConfig` resource.
 */
// @ts-ignore TS6133
function rosVpcAccessConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpcAccessConfigPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Name: ros.stringToRosTemplate(properties.name),
      Port: ros.numberToRosTemplate(properties.port),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ApiGateway::VpcAccessConfig`
 */
export class RosVpcAccessConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::VpcAccessConfig";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The id of the instance (ECS/SLB).
     */
    public instanceId: string;

    /**
     * @Property name: The name of one VPC access configuration.Need [4, 50] Chinese\English\Number characters "-" or "_",and should start with Chinese/English character.
     */
    public name: string;

    /**
     * @Property port: The port of the VPC.
     */
    public port: number;

    /**
     * @Property vpcId: The id of the VPC.
     */
    public vpcId: string;

    /**
     * Create a new `ALIYUN::ApiGateway::VpcAccessConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcAccessConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpcAccessConfig.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.name = props.name;
        this.port = props.port;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            name: this.name,
            port: this.port,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpcAccessConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
