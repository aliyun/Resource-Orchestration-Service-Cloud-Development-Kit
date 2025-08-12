"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosVpcAccessConfig = exports.RosTrafficControlBinding = exports.RosTrafficControl = exports.RosStageConfig = exports.RosSignatureBinding = exports.RosSignature = exports.RosPluginAttachment = exports.RosPlugin = exports.RosLogConfig = exports.RosInstance = exports.RosGroup = exports.RosDeployment = exports.RosCustomDomain = exports.RosBackend = exports.RosAuthorization = exports.RosApp = exports.RosApi = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosApiProps`
 *
 * @param properties - the TypeScript properties of a `RosApiProps`
 *
 * @returns the result of the validation.
 */
function RosApiPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('forceNonceCheck', ros.validateBoolean)(properties.forceNonceCheck));
    if (properties.allowSignatureMethod && (typeof properties.allowSignatureMethod) !== 'object') {
        errors.collect(ros.propertyValidator('allowSignatureMethod', ros.validateAllowedValues)({
            data: properties.allowSignatureMethod,
            allowedValues: ["HmacSHA256", "HmacSHA1,HmacSHA256"],
        }));
    }
    errors.collect(ros.propertyValidator('allowSignatureMethod', ros.validateString)(properties.allowSignatureMethod));
    errors.collect(ros.propertyValidator('errorCodeSamples', ros.listValidator(RosApi_ErrorCodeSamplesPropertyValidator))(properties.errorCodeSamples));
    errors.collect(ros.propertyValidator('requestParameters', ros.listValidator(RosApi_RequestParametersPropertyValidator))(properties.requestParameters));
    errors.collect(ros.propertyValidator('serviceParametersMap', ros.listValidator(RosApi_ServiceParametersMapPropertyValidator))(properties.serviceParametersMap));
    if (properties.appCodeAuthType && (typeof properties.appCodeAuthType) !== 'object') {
        errors.collect(ros.propertyValidator('appCodeAuthType', ros.validateAllowedValues)({
            data: properties.appCodeAuthType,
            allowedValues: ["DEFAULT", "DISABLE", "HEADER", "HEADER_QUERY"],
        }));
    }
    errors.collect(ros.propertyValidator('appCodeAuthType', ros.validateString)(properties.appCodeAuthType));
    errors.collect(ros.propertyValidator('resultBodyModel', ros.validateString)(properties.resultBodyModel));
    errors.collect(ros.propertyValidator('serviceConfig', ros.requiredValidator)(properties.serviceConfig));
    errors.collect(ros.propertyValidator('serviceConfig', RosApi_ServiceConfigPropertyValidator)(properties.serviceConfig));
    if (properties.webSocketApiType && (typeof properties.webSocketApiType) !== 'object') {
        errors.collect(ros.propertyValidator('webSocketApiType', ros.validateAllowedValues)({
            data: properties.webSocketApiType,
            allowedValues: ["COMMON", "REGISTER", "UNREGISTER", "NOTIFY"],
        }));
    }
    errors.collect(ros.propertyValidator('webSocketApiType', ros.validateString)(properties.webSocketApiType));
    errors.collect(ros.propertyValidator('resultDescriptions', ros.validateString)(properties.resultDescriptions));
    errors.collect(ros.propertyValidator('openIdConnectConfig', RosApi_OpenIdConnectConfigPropertyValidator)(properties.openIdConnectConfig));
    if (properties.authType && (typeof properties.authType) !== 'object') {
        errors.collect(ros.propertyValidator('authType', ros.validateAllowedValues)({
            data: properties.authType,
            allowedValues: ["APP", "ANONYMOUS", "APPOPENID"],
        }));
    }
    errors.collect(ros.propertyValidator('authType', ros.validateString)(properties.authType));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosApi_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('requestConfig', ros.requiredValidator)(properties.requestConfig));
    errors.collect(ros.propertyValidator('requestConfig', RosApi_RequestConfigPropertyValidator)(properties.requestConfig));
    errors.collect(ros.propertyValidator('resultSample', ros.validateString)(properties.resultSample));
    errors.collect(ros.propertyValidator('disableInternet', ros.validateBoolean)(properties.disableInternet));
    errors.collect(ros.propertyValidator('apiName', ros.requiredValidator)(properties.apiName));
    errors.collect(ros.propertyValidator('apiName', ros.validateString)(properties.apiName));
    if (properties.resultType && (typeof properties.resultType) !== 'object') {
        errors.collect(ros.propertyValidator('resultType', ros.validateAllowedValues)({
            data: properties.resultType,
            allowedValues: ["JSON", "TEXT", "BINARY", "XML", "HTML", "PASSTHROUGH"],
        }));
    }
    errors.collect(ros.propertyValidator('resultType', ros.validateString)(properties.resultType));
    errors.collect(ros.propertyValidator('failResultSample', ros.validateString)(properties.failResultSample));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    errors.collect(ros.propertyValidator('constParameters', ros.listValidator(RosApi_ConstParametersPropertyValidator))(properties.constParameters));
    errors.collect(ros.propertyValidator('systemParameters', ros.listValidator(RosApi_SystemParametersPropertyValidator))(properties.systemParameters));
    errors.collect(ros.propertyValidator('visibility', ros.requiredValidator)(properties.visibility));
    if (properties.visibility && (typeof properties.visibility) !== 'object') {
        errors.collect(ros.propertyValidator('visibility', ros.validateAllowedValues)({
            data: properties.visibility,
            allowedValues: ["PUBLIC", "PRIVATE"],
        }));
    }
    errors.collect(ros.propertyValidator('visibility', ros.validateString)(properties.visibility));
    errors.collect(ros.propertyValidator('serviceParameters', ros.listValidator(RosApi_ServiceParametersPropertyValidator))(properties.serviceParameters));
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
function rosApiPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosApiPropsValidator(properties).assertSuccess();
    }
    return {
        'ApiName': ros.stringToRosTemplate(properties.apiName),
        'GroupId': ros.stringToRosTemplate(properties.groupId),
        'RequestConfig': rosApiRequestConfigPropertyToRosTemplate(properties.requestConfig),
        'ServiceConfig': rosApiServiceConfigPropertyToRosTemplate(properties.serviceConfig),
        'Visibility': ros.stringToRosTemplate(properties.visibility),
        'AllowSignatureMethod': ros.stringToRosTemplate(properties.allowSignatureMethod),
        'AppCodeAuthType': ros.stringToRosTemplate(properties.appCodeAuthType),
        'AuthType': ros.stringToRosTemplate(properties.authType),
        'ConstParameters': ros.listMapper(rosApiConstParametersPropertyToRosTemplate)(properties.constParameters),
        'Description': ros.stringToRosTemplate(properties.description),
        'DisableInternet': ros.booleanToRosTemplate(properties.disableInternet),
        'ErrorCodeSamples': ros.listMapper(rosApiErrorCodeSamplesPropertyToRosTemplate)(properties.errorCodeSamples),
        'FailResultSample': ros.stringToRosTemplate(properties.failResultSample),
        'ForceNonceCheck': ros.booleanToRosTemplate(properties.forceNonceCheck),
        'OpenIdConnectConfig': rosApiOpenIdConnectConfigPropertyToRosTemplate(properties.openIdConnectConfig),
        'RequestParameters': ros.listMapper(rosApiRequestParametersPropertyToRosTemplate)(properties.requestParameters),
        'ResultBodyModel': ros.stringToRosTemplate(properties.resultBodyModel),
        'ResultDescriptions': ros.stringToRosTemplate(properties.resultDescriptions),
        'ResultSample': ros.stringToRosTemplate(properties.resultSample),
        'ResultType': ros.stringToRosTemplate(properties.resultType),
        'ServiceParameters': ros.listMapper(rosApiServiceParametersPropertyToRosTemplate)(properties.serviceParameters),
        'ServiceParametersMap': ros.listMapper(rosApiServiceParametersMapPropertyToRosTemplate)(properties.serviceParametersMap),
        'SystemParameters': ros.listMapper(rosApiSystemParametersPropertyToRosTemplate)(properties.systemParameters),
        'Tags': ros.listMapper(rosApiTagsPropertyToRosTemplate)(properties.tags),
        'WebSocketApiType': ros.stringToRosTemplate(properties.webSocketApiType),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::Api`, which is used to create an API.
 * @Note This class does not contain additional functions, so it is recommended to use the `Api` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-api
 */
class RosApi extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosApi.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApiId = this.getAtt('ApiId');
        this.attrArn = this.getAtt('Arn');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiName = props.apiName;
        this.groupId = props.groupId;
        this.requestConfig = props.requestConfig;
        this.serviceConfig = props.serviceConfig;
        this.visibility = props.visibility;
        this.allowSignatureMethod = props.allowSignatureMethod;
        this.appCodeAuthType = props.appCodeAuthType;
        this.authType = props.authType;
        this.constParameters = props.constParameters;
        this.description = props.description;
        this.disableInternet = props.disableInternet;
        this.errorCodeSamples = props.errorCodeSamples;
        this.failResultSample = props.failResultSample;
        this.forceNonceCheck = props.forceNonceCheck;
        this.openIdConnectConfig = props.openIdConnectConfig;
        this.requestParameters = props.requestParameters;
        this.resultBodyModel = props.resultBodyModel;
        this.resultDescriptions = props.resultDescriptions;
        this.resultSample = props.resultSample;
        this.resultType = props.resultType;
        this.serviceParameters = props.serviceParameters;
        this.serviceParametersMap = props.serviceParametersMap;
        this.systemParameters = props.systemParameters;
        this.tags = props.tags;
        this.webSocketApiType = props.webSocketApiType;
    }
    get rosProperties() {
        return {
            apiName: this.apiName,
            groupId: this.groupId,
            requestConfig: this.requestConfig,
            serviceConfig: this.serviceConfig,
            visibility: this.visibility,
            allowSignatureMethod: this.allowSignatureMethod,
            appCodeAuthType: this.appCodeAuthType,
            authType: this.authType,
            constParameters: this.constParameters,
            description: this.description,
            disableInternet: this.disableInternet,
            errorCodeSamples: this.errorCodeSamples,
            failResultSample: this.failResultSample,
            forceNonceCheck: this.forceNonceCheck,
            openIdConnectConfig: this.openIdConnectConfig,
            requestParameters: this.requestParameters,
            resultBodyModel: this.resultBodyModel,
            resultDescriptions: this.resultDescriptions,
            resultSample: this.resultSample,
            resultType: this.resultType,
            serviceParameters: this.serviceParameters,
            serviceParametersMap: this.serviceParametersMap,
            systemParameters: this.systemParameters,
            tags: this.tags,
            webSocketApiType: this.webSocketApiType,
        };
    }
    renderProperties(props) {
        return rosApiPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosApi = RosApi;
/**
 * The resource type name for this resource class.
 */
RosApi.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Api";
/**
 * Determine whether the given properties match those of a `ConstParametersProperty`
 *
 * @param properties - the TypeScript properties of a `ConstParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_ConstParametersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('constValue', ros.requiredValidator)(properties.constValue));
    errors.collect(ros.propertyValidator('constValue', ros.validateString)(properties.constValue));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.requiredValidator)(properties.serviceParameterName));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.validateString)(properties.serviceParameterName));
    errors.collect(ros.propertyValidator('location', ros.requiredValidator)(properties.location));
    if (properties.location && (typeof properties.location) !== 'object') {
        errors.collect(ros.propertyValidator('location', ros.validateAllowedValues)({
            data: properties.location,
            allowedValues: ["BODY", "HEAD", "QUERY", "PATH"],
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
function rosApiConstParametersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApi_ConstParametersPropertyValidator(properties).assertSuccess();
    return {
        'ConstValue': ros.stringToRosTemplate(properties.constValue),
        'Description': ros.stringToRosTemplate(properties.description),
        'ServiceParameterName': ros.stringToRosTemplate(properties.serviceParameterName),
        'Location': ros.stringToRosTemplate(properties.location),
    };
}
/**
 * Determine whether the given properties match those of a `ErrorCodeSamplesProperty`
 *
 * @param properties - the TypeScript properties of a `ErrorCodeSamplesProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_ErrorCodeSamplesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosApiErrorCodeSamplesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApi_ErrorCodeSamplesPropertyValidator(properties).assertSuccess();
    return {
        'Description': ros.stringToRosTemplate(properties.description),
        'Message': ros.stringToRosTemplate(properties.message),
        'Code': ros.stringToRosTemplate(properties.code),
    };
}
/**
 * Determine whether the given properties match those of a `FunctionComputeConfigProperty`
 *
 * @param properties - the TypeScript properties of a `FunctionComputeConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_FunctionComputeConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    if (properties.fcVersion && (typeof properties.fcVersion) !== 'object') {
        errors.collect(ros.propertyValidator('fcVersion', ros.validateAllowedValues)({
            data: properties.fcVersion,
            allowedValues: ["2.0", "3.0"],
        }));
    }
    errors.collect(ros.propertyValidator('fcVersion', ros.validateString)(properties.fcVersion));
    errors.collect(ros.propertyValidator('contentTypeValue', ros.validateString)(properties.contentTypeValue));
    if (properties.method && (typeof properties.method) !== 'object') {
        errors.collect(ros.propertyValidator('method', ros.validateAllowedValues)({
            data: properties.method,
            allowedValues: ["GET", "POST", "DELETE", "PUT", "HEAD", "PATCH", "OPTIONS", "ANY"],
        }));
    }
    errors.collect(ros.propertyValidator('method', ros.validateString)(properties.method));
    errors.collect(ros.propertyValidator('onlyBusinessPath', ros.validateBoolean)(properties.onlyBusinessPath));
    errors.collect(ros.propertyValidator('fcRegionId', ros.validateString)(properties.fcRegionId));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    errors.collect(ros.propertyValidator('fcBaseUrl', ros.validateString)(properties.fcBaseUrl));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    if (properties.fcType && (typeof properties.fcType) !== 'object') {
        errors.collect(ros.propertyValidator('fcType', ros.validateAllowedValues)({
            data: properties.fcType,
            allowedValues: ["FCEvent", "HttpTrigger"],
        }));
    }
    errors.collect(ros.propertyValidator('fcType', ros.validateString)(properties.fcType));
    errors.collect(ros.propertyValidator('qualifier', ros.validateString)(properties.qualifier));
    if (properties.contentTypeCatagory && (typeof properties.contentTypeCatagory) !== 'object') {
        errors.collect(ros.propertyValidator('contentTypeCatagory', ros.validateAllowedValues)({
            data: properties.contentTypeCatagory,
            allowedValues: ["DEFAULT", "CUSTOM", "CLIENT"],
        }));
    }
    errors.collect(ros.propertyValidator('contentTypeCatagory', ros.validateString)(properties.contentTypeCatagory));
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
function rosApiFunctionComputeConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApi_FunctionComputeConfigPropertyValidator(properties).assertSuccess();
    return {
        'Path': ros.stringToRosTemplate(properties.path),
        'FcVersion': ros.stringToRosTemplate(properties.fcVersion),
        'ContentTypeValue': ros.stringToRosTemplate(properties.contentTypeValue),
        'Method': ros.stringToRosTemplate(properties.method),
        'OnlyBusinessPath': ros.booleanToRosTemplate(properties.onlyBusinessPath),
        'FcRegionId': ros.stringToRosTemplate(properties.fcRegionId),
        'RoleArn': ros.stringToRosTemplate(properties.roleArn),
        'FcBaseUrl': ros.stringToRosTemplate(properties.fcBaseUrl),
        'FunctionName': ros.stringToRosTemplate(properties.functionName),
        'ServiceName': ros.stringToRosTemplate(properties.serviceName),
        'FcType': ros.stringToRosTemplate(properties.fcType),
        'Qualifier': ros.stringToRosTemplate(properties.qualifier),
        'ContentTypeCatagory': ros.stringToRosTemplate(properties.contentTypeCatagory),
    };
}
/**
 * Determine whether the given properties match those of a `MockHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `MockHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_MockHeadersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosApiMockHeadersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApi_MockHeadersPropertyValidator(properties).assertSuccess();
    return {
        'HeaderValue': ros.stringToRosTemplate(properties.headerValue),
        'HeaderName': ros.stringToRosTemplate(properties.headerName),
    };
}
/**
 * Determine whether the given properties match those of a `OpenIdConnectConfigProperty`
 *
 * @param properties - the TypeScript properties of a `OpenIdConnectConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_OpenIdConnectConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('openIdApiType', ros.requiredValidator)(properties.openIdApiType));
    if (properties.openIdApiType && (typeof properties.openIdApiType) !== 'object') {
        errors.collect(ros.propertyValidator('openIdApiType', ros.validateAllowedValues)({
            data: properties.openIdApiType,
            allowedValues: ["IDTOKEN", "BUSINESS"],
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
function rosApiOpenIdConnectConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApi_OpenIdConnectConfigPropertyValidator(properties).assertSuccess();
    return {
        'OpenIdApiType': ros.stringToRosTemplate(properties.openIdApiType),
        'PublicKey': ros.stringToRosTemplate(properties.publicKey),
        'PublicKeyId': ros.stringToRosTemplate(properties.publicKeyId),
        'IdTokenParamName': ros.stringToRosTemplate(properties.idTokenParamName),
    };
}
/**
 * Determine whether the given properties match those of a `RequestConfigProperty`
 *
 * @param properties - the TypeScript properties of a `RequestConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_RequestConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('requestPath', ros.requiredValidator)(properties.requestPath));
    errors.collect(ros.propertyValidator('requestPath', ros.validateString)(properties.requestPath));
    errors.collect(ros.propertyValidator('requestMode', ros.requiredValidator)(properties.requestMode));
    if (properties.requestMode && (typeof properties.requestMode) !== 'object') {
        errors.collect(ros.propertyValidator('requestMode', ros.validateAllowedValues)({
            data: properties.requestMode,
            allowedValues: ["MAPPING", "PASSTHROUGH"],
        }));
    }
    errors.collect(ros.propertyValidator('requestMode', ros.validateString)(properties.requestMode));
    errors.collect(ros.propertyValidator('requestProtocol', ros.requiredValidator)(properties.requestProtocol));
    if (properties.requestProtocol && (typeof properties.requestProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('requestProtocol', ros.validateAllowedValues)({
            data: properties.requestProtocol,
            allowedValues: ["HTTP", "HTTPS", "HTTP,HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('requestProtocol', ros.validateString)(properties.requestProtocol));
    errors.collect(ros.propertyValidator('requestHttpMethod', ros.requiredValidator)(properties.requestHttpMethod));
    if (properties.requestHttpMethod && (typeof properties.requestHttpMethod) !== 'object') {
        errors.collect(ros.propertyValidator('requestHttpMethod', ros.validateAllowedValues)({
            data: properties.requestHttpMethod,
            allowedValues: ["GET", "POST", "DELETE", "PUT", "HEAD", "TRACE", "PATCH", "CONNECT", "OPTIONS", "ANY"],
        }));
    }
    errors.collect(ros.propertyValidator('requestHttpMethod', ros.validateString)(properties.requestHttpMethod));
    errors.collect(ros.propertyValidator('postBodyDescription', ros.validateString)(properties.postBodyDescription));
    if (properties.bodyFormat && (typeof properties.bodyFormat) !== 'object') {
        errors.collect(ros.propertyValidator('bodyFormat', ros.validateAllowedValues)({
            data: properties.bodyFormat,
            allowedValues: ["FORM", "STREAM"],
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
function rosApiRequestConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApi_RequestConfigPropertyValidator(properties).assertSuccess();
    return {
        'RequestPath': ros.stringToRosTemplate(properties.requestPath),
        'RequestMode': ros.stringToRosTemplate(properties.requestMode),
        'RequestProtocol': ros.stringToRosTemplate(properties.requestProtocol),
        'RequestHttpMethod': ros.stringToRosTemplate(properties.requestHttpMethod),
        'PostBodyDescription': ros.stringToRosTemplate(properties.postBodyDescription),
        'BodyFormat': ros.stringToRosTemplate(properties.bodyFormat),
    };
}
/**
 * Determine whether the given properties match those of a `RequestParametersProperty`
 *
 * @param properties - the TypeScript properties of a `RequestParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_RequestParametersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('regularExpression', ros.validateString)(properties.regularExpression));
    errors.collect(ros.propertyValidator('parameterType', ros.requiredValidator)(properties.parameterType));
    if (properties.parameterType && (typeof properties.parameterType) !== 'object') {
        errors.collect(ros.propertyValidator('parameterType', ros.validateAllowedValues)({
            data: properties.parameterType,
            allowedValues: ["String", "Int", "Long", "Float", "Double", "Boolean"],
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
    if (properties.required && (typeof properties.required) !== 'object') {
        errors.collect(ros.propertyValidator('required', ros.validateAllowedValues)({
            data: properties.required,
            allowedValues: ["REQUIRED", "OPTION"],
        }));
    }
    errors.collect(ros.propertyValidator('required', ros.validateString)(properties.required));
    errors.collect(ros.propertyValidator('docOrder', ros.validateNumber)(properties.docOrder));
    errors.collect(ros.propertyValidator('minValue', ros.validateNumber)(properties.minValue));
    if (properties.docShow && (typeof properties.docShow) !== 'object') {
        errors.collect(ros.propertyValidator('docShow', ros.validateAllowedValues)({
            data: properties.docShow,
            allowedValues: ["PUBLIC", "PRIVATE"],
        }));
    }
    errors.collect(ros.propertyValidator('docShow', ros.validateString)(properties.docShow));
    errors.collect(ros.propertyValidator('location', ros.requiredValidator)(properties.location));
    if (properties.location && (typeof properties.location) !== 'object') {
        errors.collect(ros.propertyValidator('location', ros.validateAllowedValues)({
            data: properties.location,
            allowedValues: ["BODY", "HEAD", "QUERY", "PATH"],
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
function rosApiRequestParametersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApi_RequestParametersPropertyValidator(properties).assertSuccess();
    return {
        'RegularExpression': ros.stringToRosTemplate(properties.regularExpression),
        'ParameterType': ros.stringToRosTemplate(properties.parameterType),
        'Description': ros.stringToRosTemplate(properties.description),
        'JsonScheme': ros.stringToRosTemplate(properties.jsonScheme),
        'ApiParameterName': ros.stringToRosTemplate(properties.apiParameterName),
        'EnumValue': ros.stringToRosTemplate(properties.enumValue),
        'MinLength': ros.numberToRosTemplate(properties.minLength),
        'MaxValue': ros.numberToRosTemplate(properties.maxValue),
        'MaxLength': ros.numberToRosTemplate(properties.maxLength),
        'DemoValue': ros.stringToRosTemplate(properties.demoValue),
        'DefaultValue': ros.stringToRosTemplate(properties.defaultValue),
        'Required': ros.stringToRosTemplate(properties.required),
        'DocOrder': ros.numberToRosTemplate(properties.docOrder),
        'MinValue': ros.numberToRosTemplate(properties.minValue),
        'DocShow': ros.stringToRosTemplate(properties.docShow),
        'Location': ros.stringToRosTemplate(properties.location),
    };
}
/**
 * Determine whether the given properties match those of a `ServiceConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ServiceConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_ServiceConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceAddress', ros.validateString)(properties.serviceAddress));
    errors.collect(ros.propertyValidator('functionComputeConfig', RosApi_FunctionComputeConfigPropertyValidator)(properties.functionComputeConfig));
    errors.collect(ros.propertyValidator('mockResult', ros.validateString)(properties.mockResult));
    errors.collect(ros.propertyValidator('contentTypeValue', ros.validateString)(properties.contentTypeValue));
    errors.collect(ros.propertyValidator('vpcConfig', RosApi_VpcConfigPropertyValidator)(properties.vpcConfig));
    if (properties.serviceVpcEnable && (typeof properties.serviceVpcEnable) !== 'object') {
        errors.collect(ros.propertyValidator('serviceVpcEnable', ros.validateAllowedValues)({
            data: properties.serviceVpcEnable,
            allowedValues: ["TRUE", "FALSE"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceVpcEnable', ros.validateString)(properties.serviceVpcEnable));
    errors.collect(ros.propertyValidator('mockStatusCode', ros.validateNumber)(properties.mockStatusCode));
    errors.collect(ros.propertyValidator('mockHeaders', ros.listValidator(RosApi_MockHeadersPropertyValidator))(properties.mockHeaders));
    if (properties.serviceHttpMethod && (typeof properties.serviceHttpMethod) !== 'object') {
        errors.collect(ros.propertyValidator('serviceHttpMethod', ros.validateAllowedValues)({
            data: properties.serviceHttpMethod,
            allowedValues: ["GET", "POST", "DELETE", "PUT", "HEAD", "TRACE", "PATCH", "CONNECT", "OPTIONS", "ANY"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceHttpMethod', ros.validateString)(properties.serviceHttpMethod));
    errors.collect(ros.propertyValidator('servicePath', ros.validateString)(properties.servicePath));
    if (properties.mock && (typeof properties.mock) !== 'object') {
        errors.collect(ros.propertyValidator('mock', ros.validateAllowedValues)({
            data: properties.mock,
            allowedValues: ["TRUE", "FALSE"],
        }));
    }
    errors.collect(ros.propertyValidator('mock', ros.validateString)(properties.mock));
    errors.collect(ros.propertyValidator('serviceTimeOut', ros.validateNumber)(properties.serviceTimeOut));
    if (properties.serviceProtocol && (typeof properties.serviceProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('serviceProtocol', ros.validateAllowedValues)({
            data: properties.serviceProtocol,
            allowedValues: ["HTTP", "HTTPS", "FunctionCompute"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceProtocol', ros.validateString)(properties.serviceProtocol));
    if (properties.contentTypeCatagory && (typeof properties.contentTypeCatagory) !== 'object') {
        errors.collect(ros.propertyValidator('contentTypeCatagory', ros.validateAllowedValues)({
            data: properties.contentTypeCatagory,
            allowedValues: ["DEFAULT", "CUSTOM", "CLIENT"],
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
function rosApiServiceConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApi_ServiceConfigPropertyValidator(properties).assertSuccess();
    return {
        'ServiceAddress': ros.stringToRosTemplate(properties.serviceAddress),
        'FunctionComputeConfig': rosApiFunctionComputeConfigPropertyToRosTemplate(properties.functionComputeConfig),
        'MockResult': ros.stringToRosTemplate(properties.mockResult),
        'ContentTypeValue': ros.stringToRosTemplate(properties.contentTypeValue),
        'VpcConfig': rosApiVpcConfigPropertyToRosTemplate(properties.vpcConfig),
        'ServiceVpcEnable': ros.stringToRosTemplate(properties.serviceVpcEnable),
        'MockStatusCode': ros.numberToRosTemplate(properties.mockStatusCode),
        'MockHeaders': ros.listMapper(rosApiMockHeadersPropertyToRosTemplate)(properties.mockHeaders),
        'ServiceHttpMethod': ros.stringToRosTemplate(properties.serviceHttpMethod),
        'ServicePath': ros.stringToRosTemplate(properties.servicePath),
        'Mock': ros.stringToRosTemplate(properties.mock),
        'ServiceTimeOut': ros.numberToRosTemplate(properties.serviceTimeOut),
        'ServiceProtocol': ros.stringToRosTemplate(properties.serviceProtocol),
        'ContentTypeCatagory': ros.stringToRosTemplate(properties.contentTypeCatagory),
    };
}
/**
 * Determine whether the given properties match those of a `ServiceParametersProperty`
 *
 * @param properties - the TypeScript properties of a `ServiceParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_ServiceParametersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parameterType', ros.requiredValidator)(properties.parameterType));
    if (properties.parameterType && (typeof properties.parameterType) !== 'object') {
        errors.collect(ros.propertyValidator('parameterType', ros.validateAllowedValues)({
            data: properties.parameterType,
            allowedValues: ["STRING", "NUMBER", "BOOLEAN"],
        }));
    }
    errors.collect(ros.propertyValidator('parameterType', ros.validateString)(properties.parameterType));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.requiredValidator)(properties.serviceParameterName));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.validateString)(properties.serviceParameterName));
    errors.collect(ros.propertyValidator('location', ros.requiredValidator)(properties.location));
    if (properties.location && (typeof properties.location) !== 'object') {
        errors.collect(ros.propertyValidator('location', ros.validateAllowedValues)({
            data: properties.location,
            allowedValues: ["BODY", "HEAD", "QUERY", "PATH"],
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
function rosApiServiceParametersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApi_ServiceParametersPropertyValidator(properties).assertSuccess();
    return {
        'ParameterType': ros.stringToRosTemplate(properties.parameterType),
        'ServiceParameterName': ros.stringToRosTemplate(properties.serviceParameterName),
        'Location': ros.stringToRosTemplate(properties.location),
    };
}
/**
 * Determine whether the given properties match those of a `ServiceParametersMapProperty`
 *
 * @param properties - the TypeScript properties of a `ServiceParametersMapProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_ServiceParametersMapPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosApiServiceParametersMapPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApi_ServiceParametersMapPropertyValidator(properties).assertSuccess();
    return {
        'RequestParameterName': ros.stringToRosTemplate(properties.requestParameterName),
        'ServiceParameterName': ros.stringToRosTemplate(properties.serviceParameterName),
    };
}
/**
 * Determine whether the given properties match those of a `SystemParametersProperty`
 *
 * @param properties - the TypeScript properties of a `SystemParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_SystemParametersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('demoValue', ros.validateString)(properties.demoValue));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('parameterName', ros.requiredValidator)(properties.parameterName));
    if (properties.parameterName && (typeof properties.parameterName) !== 'object') {
        errors.collect(ros.propertyValidator('parameterName', ros.validateAllowedValues)({
            data: properties.parameterName,
            allowedValues: ["CaClientIp", "CaDomain", "CaRequestHandleTime", "CaAppId", "CaRequestId", "CaHttpSchema", "CaProxy"],
        }));
    }
    errors.collect(ros.propertyValidator('parameterName', ros.validateString)(properties.parameterName));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.requiredValidator)(properties.serviceParameterName));
    errors.collect(ros.propertyValidator('serviceParameterName', ros.validateString)(properties.serviceParameterName));
    errors.collect(ros.propertyValidator('location', ros.requiredValidator)(properties.location));
    if (properties.location && (typeof properties.location) !== 'object') {
        errors.collect(ros.propertyValidator('location', ros.validateAllowedValues)({
            data: properties.location,
            allowedValues: ["BODY", "HEAD", "QUERY", "PATH"],
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
function rosApiSystemParametersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApi_SystemParametersPropertyValidator(properties).assertSuccess();
    return {
        'DemoValue': ros.stringToRosTemplate(properties.demoValue),
        'Description': ros.stringToRosTemplate(properties.description),
        'ParameterName': ros.stringToRosTemplate(properties.parameterName),
        'ServiceParameterName': ros.stringToRosTemplate(properties.serviceParameterName),
        'Location': ros.stringToRosTemplate(properties.location),
    };
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Api.Tags` resource.
 */
// @ts-ignore TS6133
function rosApiTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApi_TagsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `VpcConfigProperty`
 *
 * @param properties - the TypeScript properties of a `VpcConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosApi_VpcConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosApiVpcConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApi_VpcConfigPropertyValidator(properties).assertSuccess();
    return {
        'VpcId': ros.stringToRosTemplate(properties.vpcId),
        'InstanceId': ros.stringToRosTemplate(properties.instanceId),
        'Port': ros.numberToRosTemplate(properties.port),
    };
}
/**
 * Determine whether the given properties match those of a `RosAppProps`
 *
 * @param properties - the TypeScript properties of a `RosAppProps`
 *
 * @returns the result of the validation.
 */
function RosAppPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.appCode && (typeof properties.appCode) !== 'object') {
        errors.collect(ros.propertyValidator('appCode', ros.validateAllowedPattern)({
            data: properties.appCode,
            reg: /^[-_a-zA-Z0-9]{8,128}$/
        }));
    }
    errors.collect(ros.propertyValidator('appCode', ros.validateString)(properties.appCode));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.appKey && (typeof properties.appKey) !== 'object') {
        errors.collect(ros.propertyValidator('appKey', ros.validateAllowedPattern)({
            data: properties.appKey,
            reg: /^[-_a-zA-Z0-9]{8,128}$/
        }));
    }
    errors.collect(ros.propertyValidator('appKey', ros.validateString)(properties.appKey));
    if (properties.appSecret && (typeof properties.appSecret) !== 'object') {
        errors.collect(ros.propertyValidator('appSecret', ros.validateAllowedPattern)({
            data: properties.appSecret,
            reg: /^[-_a-zA-Z0-9]{8,128}$/
        }));
    }
    errors.collect(ros.propertyValidator('appSecret', ros.validateString)(properties.appSecret));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosApp_TagsPropertyValidator))(properties.tags));
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
function rosAppPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAppPropsValidator(properties).assertSuccess();
    }
    return {
        'AppName': ros.stringToRosTemplate(properties.appName),
        'AppCode': ros.stringToRosTemplate(properties.appCode),
        'AppKey': ros.stringToRosTemplate(properties.appKey),
        'AppSecret': ros.stringToRosTemplate(properties.appSecret),
        'Description': ros.stringToRosTemplate(properties.description),
        'Tags': ros.listMapper(rosAppTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::App`, which is used to create an application. Before you call a third-party API, you must create an application and use the application as an identity to call the API.
 * @Note This class does not contain additional functions, so it is recommended to use the `App` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-app
 */
class RosApp extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosApp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppCode = this.getAtt('AppCode');
        this.attrAppId = this.getAtt('AppId');
        this.attrAppKey = this.getAtt('AppKey');
        this.attrAppSecret = this.getAtt('AppSecret');
        this.attrTags = this.getAtt('Tags');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appName = props.appName;
        this.appCode = props.appCode;
        this.appKey = props.appKey;
        this.appSecret = props.appSecret;
        this.description = props.description;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            appName: this.appName,
            appCode: this.appCode,
            appKey: this.appKey,
            appSecret: this.appSecret,
            description: this.description,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosAppPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosApp = RosApp;
/**
 * The resource type name for this resource class.
 */
RosApp.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::App";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosApp_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::App.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::App.Tags` resource.
 */
// @ts-ignore TS6133
function rosAppTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosApp_TagsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosAuthorizationProps`
 *
 * @param properties - the TypeScript properties of a `RosAuthorizationProps`
 *
 * @returns the result of the validation.
 */
function RosAuthorizationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.authValidTime && (typeof properties.authValidTime) !== 'object') {
        errors.collect(ros.propertyValidator('authValidTime', ros.validateAllowedPattern)({
            data: properties.authValidTime,
            reg: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/
        }));
    }
    errors.collect(ros.propertyValidator('authValidTime', ros.validateString)(properties.authValidTime));
    errors.collect(ros.propertyValidator('stageName', ros.requiredValidator)(properties.stageName));
    if (properties.stageName && (typeof properties.stageName) !== 'object') {
        errors.collect(ros.propertyValidator('stageName', ros.validateAllowedValues)({
            data: properties.stageName,
            allowedValues: ["TEST", "RELEASE", "PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('stageName', ros.validateString)(properties.stageName));
    errors.collect(ros.propertyValidator('apiIds', ros.requiredValidator)(properties.apiIds));
    if (properties.apiIds && (Array.isArray(properties.apiIds) || (typeof properties.apiIds) === 'string')) {
        errors.collect(ros.propertyValidator('apiIds', ros.validateLength)({
            data: properties.apiIds.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('apiIds', ros.listValidator(ros.validateAny))(properties.apiIds));
    errors.collect(ros.propertyValidator('appIds', ros.requiredValidator)(properties.appIds));
    if (properties.appIds && (Array.isArray(properties.appIds) || (typeof properties.appIds) === 'string')) {
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
function rosAuthorizationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAuthorizationPropsValidator(properties).assertSuccess();
    }
    return {
        'ApiIds': ros.listMapper(ros.objectToRosTemplate)(properties.apiIds),
        'AppIds': ros.listMapper(ros.objectToRosTemplate)(properties.appIds),
        'GroupId': ros.stringToRosTemplate(properties.groupId),
        'StageName': ros.stringToRosTemplate(properties.stageName),
        'AuthValidTime': ros.stringToRosTemplate(properties.authValidTime),
        'Description': ros.stringToRosTemplate(properties.description),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::Authorization`, which is used to authorize applications to call APIs.
 * @Note This class does not contain additional functions, so it is recommended to use the `Authorization` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-authorization
 */
class RosAuthorization extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAuthorization.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiIds = props.apiIds;
        this.appIds = props.appIds;
        this.groupId = props.groupId;
        this.stageName = props.stageName;
        this.authValidTime = props.authValidTime;
        this.description = props.description;
    }
    get rosProperties() {
        return {
            apiIds: this.apiIds,
            appIds: this.appIds,
            groupId: this.groupId,
            stageName: this.stageName,
            authValidTime: this.authValidTime,
            description: this.description,
        };
    }
    renderProperties(props) {
        return rosAuthorizationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAuthorization = RosAuthorization;
/**
 * The resource type name for this resource class.
 */
RosAuthorization.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Authorization";
/**
 * Determine whether the given properties match those of a `RosBackendProps`
 *
 * @param properties - the TypeScript properties of a `RosBackendProps`
 *
 * @returns the result of the validation.
 */
function RosBackendPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('backendName', ros.requiredValidator)(properties.backendName));
    errors.collect(ros.propertyValidator('backendName', ros.validateString)(properties.backendName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('backendType', ros.requiredValidator)(properties.backendType));
    if (properties.backendType && (typeof properties.backendType) !== 'object') {
        errors.collect(ros.propertyValidator('backendType', ros.validateAllowedValues)({
            data: properties.backendType,
            allowedValues: ["HTTP", "VPC", "FC_EVENT", "FC_EVENT_V3", "FC_HTTP", "FC_HTTP_V3", "OSS", "MOCK"],
        }));
    }
    errors.collect(ros.propertyValidator('backendType', ros.validateString)(properties.backendType));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: 1,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosBackend_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosBackendProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Backend` resource
 *
 * @param properties - the TypeScript properties of a `RosBackendProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Backend` resource.
 */
// @ts-ignore TS6133
function rosBackendPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBackendPropsValidator(properties).assertSuccess();
    }
    return {
        'BackendName': ros.stringToRosTemplate(properties.backendName),
        'BackendType': ros.stringToRosTemplate(properties.backendType),
        'Description': ros.stringToRosTemplate(properties.description),
        'Tags': ros.listMapper(rosBackendTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::Backend`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Backend` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-backend
 */
class RosBackend extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBackend.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackendId = this.getAtt('BackendId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backendName = props.backendName;
        this.backendType = props.backendType;
        this.description = props.description;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            backendName: this.backendName,
            backendType: this.backendType,
            description: this.description,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosBackendPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBackend = RosBackend;
/**
 * The resource type name for this resource class.
 */
RosBackend.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Backend";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosBackend_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Backend.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Backend.Tags` resource.
 */
// @ts-ignore TS6133
function rosBackendTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBackend_TagsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
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
function rosCustomDomainPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCustomDomainPropsValidator(properties).assertSuccess();
    }
    return {
        'DomainName': ros.stringToRosTemplate(properties.domainName),
        'GroupId': ros.stringToRosTemplate(properties.groupId),
        'CertificateBody': ros.stringToRosTemplate(properties.certificateBody),
        'CertificateName': ros.stringToRosTemplate(properties.certificateName),
        'CertificatePrivateKey': ros.stringToRosTemplate(properties.certificatePrivateKey),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::CustomDomain`, which is used to bind a custom domain name and upload a Secure Sockets Layer (SSL) certificate to a specific API group.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomDomain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-customdomain
 */
class RosCustomDomain extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCustomDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCertificateId = this.getAtt('CertificateId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.groupId = props.groupId;
        this.certificateBody = props.certificateBody;
        this.certificateName = props.certificateName;
        this.certificatePrivateKey = props.certificatePrivateKey;
    }
    get rosProperties() {
        return {
            domainName: this.domainName,
            groupId: this.groupId,
            certificateBody: this.certificateBody,
            certificateName: this.certificateName,
            certificatePrivateKey: this.certificatePrivateKey,
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
RosCustomDomain.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::CustomDomain";
/**
 * Determine whether the given properties match those of a `RosDeploymentProps`
 *
 * @param properties - the TypeScript properties of a `RosDeploymentProps`
 *
 * @returns the result of the validation.
 */
function RosDeploymentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('stageName', ros.requiredValidator)(properties.stageName));
    if (properties.stageName && (typeof properties.stageName) !== 'object') {
        errors.collect(ros.propertyValidator('stageName', ros.validateAllowedValues)({
            data: properties.stageName,
            allowedValues: ["TEST", "RELEASE", "PRE"],
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
function rosDeploymentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDeploymentPropsValidator(properties).assertSuccess();
    }
    return {
        'ApiId': ros.stringToRosTemplate(properties.apiId),
        'GroupId': ros.stringToRosTemplate(properties.groupId),
        'StageName': ros.stringToRosTemplate(properties.stageName),
        'Description': ros.stringToRosTemplate(properties.description),
        'HistoryVersion': ros.stringToRosTemplate(properties.historyVersion),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::Deployment`, which is used to publish an API to a specific runtime environment, or switch a published API to a specific version.
 * @Note This class does not contain additional functions, so it is recommended to use the `Deployment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-deployment
 */
class RosDeployment extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDeployment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiId = props.apiId;
        this.groupId = props.groupId;
        this.stageName = props.stageName;
        this.description = props.description;
        this.historyVersion = props.historyVersion;
    }
    get rosProperties() {
        return {
            apiId: this.apiId,
            groupId: this.groupId,
            stageName: this.stageName,
            description: this.description,
            historyVersion: this.historyVersion,
        };
    }
    renderProperties(props) {
        return rosDeploymentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDeployment = RosDeployment;
/**
 * The resource type name for this resource class.
 */
RosDeployment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Deployment";
/**
 * Determine whether the given properties match those of a `RosGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the result of the validation.
 */
function RosGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('internetEnable', ros.validateBoolean)(properties.internetEnable));
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('vpcIntranetEnable', ros.validateBoolean)(properties.vpcIntranetEnable));
    errors.collect(ros.propertyValidator('basePath', ros.validateString)(properties.basePath));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosGroup_TagsPropertyValidator))(properties.tags));
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
function rosGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosGroupPropsValidator(properties).assertSuccess();
    }
    return {
        'GroupName': ros.stringToRosTemplate(properties.groupName),
        'BasePath': ros.stringToRosTemplate(properties.basePath),
        'Description': ros.stringToRosTemplate(properties.description),
        'InstanceId': ros.stringToRosTemplate(properties.instanceId),
        'InternetEnable': ros.booleanToRosTemplate(properties.internetEnable),
        'PassthroughHeaders': ros.stringToRosTemplate(properties.passthroughHeaders),
        'Tags': ros.listMapper(rosGroupTagsPropertyToRosTemplate)(properties.tags),
        'VpcIntranetEnable': ros.booleanToRosTemplate(properties.vpcIntranetEnable),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::Group`, which is used to create an API group.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-group
 */
class RosGroup extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = this.getAtt('GroupId');
        this.attrSubDomain = this.getAtt('SubDomain');
        this.attrTags = this.getAtt('Tags');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.basePath = props.basePath;
        this.description = props.description;
        this.instanceId = props.instanceId;
        this.internetEnable = props.internetEnable;
        this.passthroughHeaders = props.passthroughHeaders;
        this.tags = props.tags;
        this.vpcIntranetEnable = props.vpcIntranetEnable;
    }
    get rosProperties() {
        return {
            groupName: this.groupName,
            basePath: this.basePath,
            description: this.description,
            instanceId: this.instanceId,
            internetEnable: this.internetEnable,
            passthroughHeaders: this.passthroughHeaders,
            tags: this.tags,
            vpcIntranetEnable: this.vpcIntranetEnable,
        };
    }
    renderProperties(props) {
        return rosGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosGroup = RosGroup;
/**
 * The resource type name for this resource class.
 */
RosGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Group";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosGroup_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Group.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Group.Tags` resource.
 */
// @ts-ignore TS6133
function rosGroupTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosGroup_TagsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('instanceSpec', ros.requiredValidator)(properties.instanceSpec));
    errors.collect(ros.propertyValidator('instanceSpec', ros.validateString)(properties.instanceSpec));
    errors.collect(ros.propertyValidator('httpsPolicy', ros.requiredValidator)(properties.httpsPolicy));
    errors.collect(ros.propertyValidator('httpsPolicy', ros.validateString)(properties.httpsPolicy));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if (properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
            data: properties.pricingCycle,
            allowedValues: ["Month", "Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    if (properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
            data: properties.chargeType,
            allowedValues: ["PayAsYouGo", "PostPaid", "PayOnDemand", "Postpaid", "PostPay", "Postpay", "POSTPAY", "POST", "Subscription", "PrePaid", "Prepaid", "PrePay", "Prepay", "PREPAY", "PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    if (properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateAllowedValues)({
            data: properties.duration,
            allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstance_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
        'HttpsPolicy': ros.stringToRosTemplate(properties.httpsPolicy),
        'InstanceName': ros.stringToRosTemplate(properties.instanceName),
        'InstanceSpec': ros.stringToRosTemplate(properties.instanceSpec),
        'ZoneId': ros.stringToRosTemplate(properties.zoneId),
        'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
        'ChargeType': ros.stringToRosTemplate(properties.chargeType),
        'DeletionForce': ros.booleanToRosTemplate(properties.deletionForce),
        'Duration': ros.numberToRosTemplate(properties.duration),
        'PricingCycle': ros.stringToRosTemplate(properties.pricingCycle),
        'Tags': ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::Instance`, which is used to create a dedicated instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-instance
 */
class RosInstance extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrEgressIpv6Enable = this.getAtt('EgressIpv6Enable');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceType = this.getAtt('InstanceType');
        this.attrInternetEgressAddress = this.getAtt('InternetEgressAddress');
        this.attrSupportIpv6 = this.getAtt('SupportIpv6');
        this.attrVpcEgressAddress = this.getAtt('VpcEgressAddress');
        this.attrVpcIntranetEnable = this.getAtt('VpcIntranetEnable');
        this.attrVpcSlbIntranetEnable = this.getAtt('VpcSlbIntranetEnable');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.httpsPolicy = props.httpsPolicy;
        this.instanceName = props.instanceName;
        this.instanceSpec = props.instanceSpec;
        this.zoneId = props.zoneId;
        this.autoPay = props.autoPay;
        this.chargeType = props.chargeType;
        this.deletionForce = props.deletionForce;
        this.duration = props.duration;
        this.pricingCycle = props.pricingCycle;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            httpsPolicy: this.httpsPolicy,
            instanceName: this.instanceName,
            instanceSpec: this.instanceSpec,
            zoneId: this.zoneId,
            autoPay: this.autoPay,
            chargeType: this.chargeType,
            deletionForce: this.deletionForce,
            duration: this.duration,
            pricingCycle: this.pricingCycle,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosInstance = RosInstance;
/**
 * The resource type name for this resource class.
 */
RosInstance.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Instance";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Instance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Instance.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosLogConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosLogConfigProps`
 *
 * @returns the result of the validation.
 */
function RosLogConfigPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('slsLogStore', ros.requiredValidator)(properties.slsLogStore));
    if (properties.slsLogStore && (Array.isArray(properties.slsLogStore) || (typeof properties.slsLogStore) === 'string')) {
        errors.collect(ros.propertyValidator('slsLogStore', ros.validateLength)({
            data: properties.slsLogStore.length,
            min: 3,
            max: 63,
        }));
    }
    errors.collect(ros.propertyValidator('slsLogStore', ros.validateString)(properties.slsLogStore));
    errors.collect(ros.propertyValidator('slsProject', ros.requiredValidator)(properties.slsProject));
    if (properties.slsProject && (Array.isArray(properties.slsProject) || (typeof properties.slsProject) === 'string')) {
        errors.collect(ros.propertyValidator('slsProject', ros.validateLength)({
            data: properties.slsProject.length,
            min: 3,
            max: 63,
        }));
    }
    errors.collect(ros.propertyValidator('slsProject', ros.validateString)(properties.slsProject));
    return errors.wrap('supplied properties not correct for "RosLogConfigProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::LogConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosLogConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::LogConfig` resource.
 */
// @ts-ignore TS6133
function rosLogConfigPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosLogConfigPropsValidator(properties).assertSuccess();
    }
    return {
        'SlsLogStore': ros.stringToRosTemplate(properties.slsLogStore),
        'SlsProject': ros.stringToRosTemplate(properties.slsProject),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::LogConfig`, which is used to create a log configuration.
 * @Note This class does not contain additional functions, so it is recommended to use the `LogConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-logconfig
 */
class RosLogConfig extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosLogConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSlsLogStore = this.getAtt('SlsLogStore');
        this.attrSlsProject = this.getAtt('SlsProject');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.slsLogStore = props.slsLogStore;
        this.slsProject = props.slsProject;
    }
    get rosProperties() {
        return {
            slsLogStore: this.slsLogStore,
            slsProject: this.slsProject,
        };
    }
    renderProperties(props) {
        return rosLogConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosLogConfig = RosLogConfig;
/**
 * The resource type name for this resource class.
 */
RosLogConfig.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::LogConfig";
/**
 * Determine whether the given properties match those of a `RosPluginProps`
 *
 * @param properties - the TypeScript properties of a `RosPluginProps`
 *
 * @returns the result of the validation.
 */
function RosPluginPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('pluginName', ros.requiredValidator)(properties.pluginName));
    errors.collect(ros.propertyValidator('pluginName', ros.validateString)(properties.pluginName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('pluginData', ros.requiredValidator)(properties.pluginData));
    errors.collect(ros.propertyValidator('pluginData', ros.validateString)(properties.pluginData));
    errors.collect(ros.propertyValidator('pluginType', ros.requiredValidator)(properties.pluginType));
    errors.collect(ros.propertyValidator('pluginType', ros.validateString)(properties.pluginType));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosPlugin_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosPluginProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Plugin` resource
 *
 * @param properties - the TypeScript properties of a `RosPluginProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Plugin` resource.
 */
// @ts-ignore TS6133
function rosPluginPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosPluginPropsValidator(properties).assertSuccess();
    }
    return {
        'PluginData': ros.stringToRosTemplate(properties.pluginData),
        'PluginName': ros.stringToRosTemplate(properties.pluginName),
        'PluginType': ros.stringToRosTemplate(properties.pluginType),
        'Description': ros.stringToRosTemplate(properties.description),
        'Tags': ros.listMapper(rosPluginTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::Plugin`, which is used to create an API Gateway plug-in.
 * @Note This class does not contain additional functions, so it is recommended to use the `Plugin` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-plugin
 */
class RosPlugin extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosPlugin.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrPluginData = this.getAtt('PluginData');
        this.attrPluginId = this.getAtt('PluginId');
        this.attrPluginName = this.getAtt('PluginName');
        this.attrPluginType = this.getAtt('PluginType');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.pluginData = props.pluginData;
        this.pluginName = props.pluginName;
        this.pluginType = props.pluginType;
        this.description = props.description;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            pluginData: this.pluginData,
            pluginName: this.pluginName,
            pluginType: this.pluginType,
            description: this.description,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosPluginPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosPlugin = RosPlugin;
/**
 * The resource type name for this resource class.
 */
RosPlugin.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Plugin";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosPlugin_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Plugin.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::Plugin.Tags` resource.
 */
// @ts-ignore TS6133
function rosPluginTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosPlugin_TagsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosPluginAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosPluginAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosPluginAttachmentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('stageName', ros.requiredValidator)(properties.stageName));
    if (properties.stageName && (typeof properties.stageName) !== 'object') {
        errors.collect(ros.propertyValidator('stageName', ros.validateAllowedValues)({
            data: properties.stageName,
            allowedValues: ["RELEASE", "PRE", "TEST"],
        }));
    }
    errors.collect(ros.propertyValidator('stageName', ros.validateString)(properties.stageName));
    errors.collect(ros.propertyValidator('pluginId', ros.requiredValidator)(properties.pluginId));
    errors.collect(ros.propertyValidator('pluginId', ros.validateString)(properties.pluginId));
    errors.collect(ros.propertyValidator('apiId', ros.requiredValidator)(properties.apiId));
    errors.collect(ros.propertyValidator('apiId', ros.validateString)(properties.apiId));
    return errors.wrap('supplied properties not correct for "RosPluginAttachmentProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::PluginAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosPluginAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ApiGateway::PluginAttachment` resource.
 */
// @ts-ignore TS6133
function rosPluginAttachmentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosPluginAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
        'ApiId': ros.stringToRosTemplate(properties.apiId),
        'PluginId': ros.stringToRosTemplate(properties.pluginId),
        'StageName': ros.stringToRosTemplate(properties.stageName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::PluginAttachment`, which is used to bind a plug-in to an API.
 * @Note This class does not contain additional functions, so it is recommended to use the `PluginAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-pluginattachment
 */
class RosPluginAttachment extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosPluginAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApiId = this.getAtt('ApiId');
        this.attrPluginId = this.getAtt('PluginId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiId = props.apiId;
        this.pluginId = props.pluginId;
        this.stageName = props.stageName;
    }
    get rosProperties() {
        return {
            apiId: this.apiId,
            pluginId: this.pluginId,
            stageName: this.stageName,
        };
    }
    renderProperties(props) {
        return rosPluginAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosPluginAttachment = RosPluginAttachment;
/**
 * The resource type name for this resource class.
 */
RosPluginAttachment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::PluginAttachment";
/**
 * Determine whether the given properties match those of a `RosSignatureProps`
 *
 * @param properties - the TypeScript properties of a `RosSignatureProps`
 *
 * @returns the result of the validation.
 */
function RosSignaturePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosSignaturePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSignaturePropsValidator(properties).assertSuccess();
    }
    return {
        'SignatureKey': ros.stringToRosTemplate(properties.signatureKey),
        'SignatureName': ros.stringToRosTemplate(properties.signatureName),
        'SignatureSecret': ros.stringToRosTemplate(properties.signatureSecret),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::Signature`, which is used to create a backend signature.
 * @Note This class does not contain additional functions, so it is recommended to use the `Signature` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
 */
class RosSignature extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSignature.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSignatureId = this.getAtt('SignatureId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.signatureKey = props.signatureKey;
        this.signatureName = props.signatureName;
        this.signatureSecret = props.signatureSecret;
    }
    get rosProperties() {
        return {
            signatureKey: this.signatureKey,
            signatureName: this.signatureName,
            signatureSecret: this.signatureSecret,
        };
    }
    renderProperties(props) {
        return rosSignaturePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSignature = RosSignature;
/**
 * The resource type name for this resource class.
 */
RosSignature.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Signature";
/**
 * Determine whether the given properties match those of a `RosSignatureBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosSignatureBindingProps`
 *
 * @returns the result of the validation.
 */
function RosSignatureBindingPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('signatureId', ros.requiredValidator)(properties.signatureId));
    errors.collect(ros.propertyValidator('signatureId', ros.validateString)(properties.signatureId));
    errors.collect(ros.propertyValidator('stageName', ros.requiredValidator)(properties.stageName));
    if (properties.stageName && (typeof properties.stageName) !== 'object') {
        errors.collect(ros.propertyValidator('stageName', ros.validateAllowedValues)({
            data: properties.stageName,
            allowedValues: ["TEST", "RELEASE", "PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('stageName', ros.validateString)(properties.stageName));
    errors.collect(ros.propertyValidator('apiIds', ros.requiredValidator)(properties.apiIds));
    if (properties.apiIds && (Array.isArray(properties.apiIds) || (typeof properties.apiIds) === 'string')) {
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
function rosSignatureBindingPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSignatureBindingPropsValidator(properties).assertSuccess();
    }
    return {
        'ApiIds': ros.listMapper(ros.objectToRosTemplate)(properties.apiIds),
        'GroupId': ros.stringToRosTemplate(properties.groupId),
        'SignatureId': ros.stringToRosTemplate(properties.signatureId),
        'StageName': ros.stringToRosTemplate(properties.stageName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::SignatureBinding`, which is used to bind a backend signature to APIs.
 * @Note This class does not contain additional functions, so it is recommended to use the `SignatureBinding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signaturebinding
 */
class RosSignatureBinding extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSignatureBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiIds = props.apiIds;
        this.groupId = props.groupId;
        this.signatureId = props.signatureId;
        this.stageName = props.stageName;
    }
    get rosProperties() {
        return {
            apiIds: this.apiIds,
            groupId: this.groupId,
            signatureId: this.signatureId,
            stageName: this.stageName,
        };
    }
    renderProperties(props) {
        return rosSignatureBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSignatureBinding = RosSignatureBinding;
/**
 * The resource type name for this resource class.
 */
RosSignatureBinding.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::SignatureBinding";
/**
 * Determine whether the given properties match those of a `RosStageConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosStageConfigProps`
 *
 * @returns the result of the validation.
 */
function RosStageConfigPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('variables', ros.requiredValidator)(properties.variables));
    errors.collect(ros.propertyValidator('variables', ros.hashValidator(ros.validateAny))(properties.variables));
    errors.collect(ros.propertyValidator('stageName', ros.requiredValidator)(properties.stageName));
    if (properties.stageName && (typeof properties.stageName) !== 'object') {
        errors.collect(ros.propertyValidator('stageName', ros.validateAllowedValues)({
            data: properties.stageName,
            allowedValues: ["TEST", "RELEASE", "PRE"],
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
function rosStageConfigPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosStageConfigPropsValidator(properties).assertSuccess();
    }
    return {
        'GroupId': ros.stringToRosTemplate(properties.groupId),
        'StageName': ros.stringToRosTemplate(properties.stageName),
        'Variables': ros.hashMapper(ros.objectToRosTemplate)(properties.variables),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::StageConfig`, which is used to configure the test, staging, or production environment variables for an API group.
 * @Note This class does not contain additional functions, so it is recommended to use the `StageConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-stageconfig
 */
class RosStageConfig extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosStageConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupId = props.groupId;
        this.stageName = props.stageName;
        this.variables = props.variables;
    }
    get rosProperties() {
        return {
            groupId: this.groupId,
            stageName: this.stageName,
            variables: this.variables,
        };
    }
    renderProperties(props) {
        return rosStageConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosStageConfig = RosStageConfig;
/**
 * The resource type name for this resource class.
 */
RosStageConfig.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::StageConfig";
/**
 * Determine whether the given properties match those of a `RosTrafficControlProps`
 *
 * @param properties - the TypeScript properties of a `RosTrafficControlProps`
 *
 * @returns the result of the validation.
 */
function RosTrafficControlPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('trafficControlUnit', ros.requiredValidator)(properties.trafficControlUnit));
    if (properties.trafficControlUnit && (typeof properties.trafficControlUnit) !== 'object') {
        errors.collect(ros.propertyValidator('trafficControlUnit', ros.validateAllowedValues)({
            data: properties.trafficControlUnit,
            allowedValues: ["DAY", "HOUR", "MINUTE"],
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
function rosTrafficControlPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosTrafficControlPropsValidator(properties).assertSuccess();
    }
    return {
        'ApiDefault': ros.numberToRosTemplate(properties.apiDefault),
        'TrafficControlName': ros.stringToRosTemplate(properties.trafficControlName),
        'TrafficControlUnit': ros.stringToRosTemplate(properties.trafficControlUnit),
        'AppDefault': ros.stringToRosTemplate(properties.appDefault),
        'Description': ros.stringToRosTemplate(properties.description),
        'Special': ros.listMapper(rosTrafficControlSpecialPropertyToRosTemplate)(properties.special),
        'UserDefault': ros.stringToRosTemplate(properties.userDefault),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::TrafficControl`, which is used to create a custom throttling policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrafficControl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrol
 */
class RosTrafficControl extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosTrafficControl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTrafficControlId = this.getAtt('TrafficControlId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiDefault = props.apiDefault;
        this.trafficControlName = props.trafficControlName;
        this.trafficControlUnit = props.trafficControlUnit;
        this.appDefault = props.appDefault;
        this.description = props.description;
        this.special = props.special;
        this.userDefault = props.userDefault;
    }
    get rosProperties() {
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
    renderProperties(props) {
        return rosTrafficControlPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTrafficControl = RosTrafficControl;
/**
 * The resource type name for this resource class.
 */
RosTrafficControl.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::TrafficControl";
/**
 * Determine whether the given properties match those of a `SpecialProperty`
 *
 * @param properties - the TypeScript properties of a `SpecialProperty`
 *
 * @returns the result of the validation.
 */
function RosTrafficControl_SpecialPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('specialKey', ros.requiredValidator)(properties.specialKey));
    errors.collect(ros.propertyValidator('specialKey', ros.validateString)(properties.specialKey));
    errors.collect(ros.propertyValidator('specialType', ros.requiredValidator)(properties.specialType));
    if (properties.specialType && (typeof properties.specialType) !== 'object') {
        errors.collect(ros.propertyValidator('specialType', ros.validateAllowedValues)({
            data: properties.specialType,
            allowedValues: ["APP", "USER"],
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
function rosTrafficControlSpecialPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosTrafficControl_SpecialPropertyValidator(properties).assertSuccess();
    return {
        'SpecialKey': ros.stringToRosTemplate(properties.specialKey),
        'SpecialType': ros.stringToRosTemplate(properties.specialType),
        'TrafficValue': ros.numberToRosTemplate(properties.trafficValue),
    };
}
/**
 * Determine whether the given properties match those of a `RosTrafficControlBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosTrafficControlBindingProps`
 *
 * @returns the result of the validation.
 */
function RosTrafficControlBindingPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('stageName', ros.requiredValidator)(properties.stageName));
    if (properties.stageName && (typeof properties.stageName) !== 'object') {
        errors.collect(ros.propertyValidator('stageName', ros.validateAllowedValues)({
            data: properties.stageName,
            allowedValues: ["TEST", "RELEASE", "PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('stageName', ros.validateString)(properties.stageName));
    errors.collect(ros.propertyValidator('apiIds', ros.requiredValidator)(properties.apiIds));
    if (properties.apiIds && (Array.isArray(properties.apiIds) || (typeof properties.apiIds) === 'string')) {
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
function rosTrafficControlBindingPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosTrafficControlBindingPropsValidator(properties).assertSuccess();
    }
    return {
        'ApiIds': ros.listMapper(ros.objectToRosTemplate)(properties.apiIds),
        'GroupId': ros.stringToRosTemplate(properties.groupId),
        'StageName': ros.stringToRosTemplate(properties.stageName),
        'TrafficControlId': ros.stringToRosTemplate(properties.trafficControlId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::TrafficControlBinding`, which is used to bind a custom throttling policy to APIs.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrafficControlBinding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrolbinding
 */
class RosTrafficControlBinding extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosTrafficControlBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiIds = props.apiIds;
        this.groupId = props.groupId;
        this.stageName = props.stageName;
        this.trafficControlId = props.trafficControlId;
    }
    get rosProperties() {
        return {
            apiIds: this.apiIds,
            groupId: this.groupId,
            stageName: this.stageName,
            trafficControlId: this.trafficControlId,
        };
    }
    renderProperties(props) {
        return rosTrafficControlBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTrafficControlBinding = RosTrafficControlBinding;
/**
 * The resource type name for this resource class.
 */
RosTrafficControlBinding.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::TrafficControlBinding";
/**
 * Determine whether the given properties match those of a `RosVpcAccessConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcAccessConfigProps`
 *
 * @returns the result of the validation.
 */
function RosVpcAccessConfigPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    if (properties.port && (typeof properties.port) !== 'object') {
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
function rosVpcAccessConfigPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVpcAccessConfigPropsValidator(properties).assertSuccess();
    }
    return {
        'InstanceId': ros.stringToRosTemplate(properties.instanceId),
        'Name': ros.stringToRosTemplate(properties.name),
        'Port': ros.numberToRosTemplate(properties.port),
        'VpcId': ros.stringToRosTemplate(properties.vpcId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::VpcAccessConfig`, which is used to configure virtual private cloud (VPC) access authorization for an instance. This helps APIs provide services based on private networks.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpcAccessConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-vpcaccessconfig
 */
class RosVpcAccessConfig extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVpcAccessConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.name = props.name;
        this.port = props.port;
        this.vpcId = props.vpcId;
    }
    get rosProperties() {
        return {
            instanceId: this.instanceId,
            name: this.name,
            port: this.port,
            vpcId: this.vpcId,
        };
    }
    renderProperties(props) {
        return rosVpcAccessConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVpcAccessConfig = RosVpcAccessConfig;
/**
 * The resource type name for this resource class.
 */
RosVpcAccessConfig.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::VpcAccessConfig";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpZ2F0ZXdheS5nZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGlnYXRld2F5LmdlbmVyYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseURBQXlEOzs7QUFFekQsOENBQThDO0FBc0o5Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLG9CQUFvQixDQUFDLFVBQWU7SUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDMUcsSUFBRyxVQUFVLENBQUMsb0JBQW9CLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUN6RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN0RixJQUFJLEVBQUUsVUFBVSxDQUFDLG9CQUFvQjtZQUNyQyxhQUFhLEVBQUUsQ0FBQyxZQUFZLEVBQUMscUJBQXFCLENBQUM7U0FDcEQsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FB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QkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUV6RixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDcEIsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLG9DQUFvQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUM5RixDQUFDOztBQXZETCxnREF3REM7QUF2REc7O0dBRUc7QUFDb0IseUNBQXNCLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0FwaWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hcGlnYXRld2F5LWFwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FwaVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcGlOYW1lOiBUaGUgbmFtZSBvZiB0aGUgQVBJLkl0IG11c3QgYmUgNCB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGgsIGFuZCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIHVuZGVyc2NvcmVzIChfKSwgZGFzaGVzICgtKSwgc3BhY2VzIGFuZCBkb3RzICguKSwgSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwaU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgaWQgb2YgdGhlIEdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXF1ZXN0Q29uZmlnOiBUaGUgY29uZmlndXJhdGlvbiBvZiB0aGUgcmVxdWVzdFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcXVlc3RDb25maWc6IFJvc0FwaS5SZXF1ZXN0Q29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZUNvbmZpZzogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZUNvbmZpZzogUm9zQXBpLlNlcnZpY2VDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2aXNpYmlsaXR5OiBXaGV0aGVyIHRvIG1ha2UgdGhlIEFQSSBwdWJsaWMuIFwiUFVCTElDXCIgb3IgXCJQUklWQVRFXCIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmlzaWJpbGl0eTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFsbG93U2lnbmF0dXJlTWV0aG9kOiBJZiB0aGUgQXV0aFR5cGUgaXMgQVBQIGF1dGhlbnRpY2F0aW9uLCB5b3UgbmVlZCB0byBwYXNzIHRoaXMgdmFsdWUgdG8gc3BlY2lmeSB0aGUgc2lnbmF0dXJlIGFsZ29yaXRobS4gSWYgeW91IGRvIG5vdCBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLCB0aGUgZGVmYXVsdCB2YWx1ZSBIbWFjU0hBMjU2IGlzIHVzZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBIbWFjU0hBMjU2XG4gICAgICogSG1hY1NIQTEsSG1hY1NIQTI1NlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsbG93U2lnbmF0dXJlTWV0aG9kPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcENvZGVBdXRoVHlwZTogV2hlbiBBdXRoVHlwZSBpcyBBUFAgYXV0aGVudGljYXRpb24sIHRoZSBvcHRpb25hbCB2YWx1ZXMgYXJlIGFzIGZvbGxvd3M6IElmIG5vdCBwYXNzZWQsIHRoZSBkZWZhdWx0IHZhbHVlIGlzIERFRkFVTFQ6XG4gICAgICogREVGQVVMVDogRGVmYXVsdCAoc2V0IGJ5IGdyb3VwKS5cbiAgICAgKiBESVNBQkxFOiBOb3QgYWxsb3dlZFxuICAgICAqIEhFQURFUjogQWxsb3cgQXBwQ29kZSBoZWFkZXIgYXV0aGVudGljYXRpb25cbiAgICAgKiBIRUFERVJfUVVFUlk6IEFsbG93IEFwcENvZGUgaGVhZGVyIGFuZCBxdWVyeSBhdXRoZW50aWNhdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcENvZGVBdXRoVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRoVHlwZTogVHlwZSBvZiBhdXRob3JpemF0aW9uIG9mIHRoZSBBUEkgLiBcIkFQUFwiLFwiQU5PTllNT1VTXCIsIG9yIFwiQVBQT1BFTklEXCJcbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRoVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb25zdFBhcmFtZXRlcnM6IFRoZSBjb25zdCBwYXJhbWV0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnN0UGFyYW1ldGVycz86IEFycmF5PFJvc0FwaS5Db25zdFBhcmFtZXRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIHRoZSBBUEksIGxlc3MgdGhhbiAxODAgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNhYmxlSW50ZXJuZXQ6IFNldCBEaXNhYmxlSW50ZXJuZXQgdG8gdHJ1ZSwgb25seSBzdXBwb3J0IGludHJhbmV0IHRvIGNhbGwgQVBJLiBcbiAgICAgKiBTZXQgRGlzYWJsZUludGVybmV0IHRvIGZhbHNlLCB0aGVuIHRoZSBjYWxsIGlzIG5vdCByZXN0cmljdGVkLiBcbiAgICAgKlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc2FibGVJbnRlcm5ldD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXJyb3JDb2RlU2FtcGxlczogVGhlIEVycm9yIENvZGUgc2FtcGxlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBlcnJvckNvZGVTYW1wbGVzPzogQXJyYXk8Um9zQXBpLkVycm9yQ29kZVNhbXBsZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmFpbFJlc3VsdFNhbXBsZTogVGhlIHNhbXBsZSBvZiB0aGUgZmFpbCByZXN1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmFpbFJlc3VsdFNhbXBsZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmb3JjZU5vbmNlQ2hlY2s6IFNldCBGb3JjZU5vbmNlQ2hlY2sgdG8gdHJ1ZSwgY29tcHVsc29yaWx5IGNoZWNrIFgtQ2EtTm9uY2Ugd2hlbiByZXF1ZXN0aW5nLCBcbiAgICAgKiB0aGlzIGlzIHRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgcmVxdWVzdCwgZ2VuZXJhbGx5IHVzaW5nIFVVSUQgdG8gaWRlbnRpZnkuIFxuICAgICAqIFRoZSBBUEkgZ2F0ZXdheSB3aWxsIHZlcmlmeSB0aGUgdmFsaWRpdHkgb2YgdGhpcyBwYXJhbWV0ZXIgYWZ0ZXIgcmVjZWl2aW5nIHRoaXMgcGFyYW1ldGVyLiBcbiAgICAgKiBUaGUgc2FtZSB2YWx1ZSBjYW4gb25seSBiZSB1c2VkIG9uY2Ugd2l0aGluIDE1IG1pbnV0ZXMuIEl0IGNhbiBlZmZlY3RpdmVseSBwcmV2ZW50IEFQSSByZXBsYXkgYXR0YWNrcy5cbiAgICAgKiBTZXQgRm9yY2VOb25jZUNoZWNrIHRvIGZhbHNlLCB0aGVuIG5vIGNoZWNrLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZvcmNlTm9uY2VDaGVjaz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3BlbklkQ29ubmVjdENvbmZpZzogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIG9wZW4gaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3BlbklkQ29ubmVjdENvbmZpZz86IFJvc0FwaS5PcGVuSWRDb25uZWN0Q29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVxdWVzdFBhcmFtZXRlcnM6IFRoZSByZXF1ZXN0IHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVxdWVzdFBhcmFtZXRlcnM/OiBBcnJheTxSb3NBcGkuUmVxdWVzdFBhcmFtZXRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzdWx0Qm9keU1vZGVsOiBUaGUgcmV0dXJuIHJlc3VsdCBvZiB0aGUgQVBJLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc3VsdEJvZHlNb2RlbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXN1bHREZXNjcmlwdGlvbnM6IFRoZSByZXR1cm4gZGVzY3JpcHRpb24gb2YgdGhlIEFQSS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXN1bHREZXNjcmlwdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzdWx0U2FtcGxlOiBUaGUgc2FtcGxlIG9mIHRoZSByZXN1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzdWx0U2FtcGxlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc3VsdFR5cGU6IFRoZSBmb3JtYXQgb2Ygc2VydmljZSdzIHJlc3BvbnNlLCBcIkpTT05cIiwgXCJURVhUXCIsIFwiQklOQVJZXCIsIFwiWE1MXCIsIFwiSFRNTFwiIG9yIFwiUEFTU1RIUk9VR0hcIi4gRGVmYXVsdCBpcyBcIkpTT05cIi5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXN1bHRUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VQYXJhbWV0ZXJzOiBUaGUgc2VydmljZSBwYXJhbWV0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VQYXJhbWV0ZXJzPzogQXJyYXk8Um9zQXBpLlNlcnZpY2VQYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VQYXJhbWV0ZXJzTWFwOiBUaGUgbWFwcGluZyByZWxhdGlvbiBiZXR3ZWVuIChyZXF1ZXN0IHBhcmFtZXRlcnNcXGNvbnN0IHBhcmFtZXRlcnNcXHN5c3RlbSBwYXJhbWV0ZXJzKSBhbmQgc2VydmljZSBwYXJhbWV0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VQYXJhbWV0ZXJzTWFwPzogQXJyYXk8Um9zQXBpLlNlcnZpY2VQYXJhbWV0ZXJzTWFwUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN5c3RlbVBhcmFtZXRlcnM6IFRoZSBzeXN0ZW0gcGFyYW1ldGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzeXN0ZW1QYXJhbWV0ZXJzPzogQXJyYXk8Um9zQXBpLlN5c3RlbVBhcmFtZXRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zQXBpLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlYlNvY2tldEFwaVR5cGU6IFRoZSB0eXBlIG9mIHRoZSB0d28td2F5IGNvbW11bmljYXRpb24gQVBJLlxuICAgICAqIENPTU1PTjogY29tbW9uIEFQSVxuICAgICAqIFJFR0lTVEVSOiByZWdpc3RlcmVkIEFQSVxuICAgICAqIFVOUkVHSVNURVI6IHVucmVnaXN0ZXJlZCBBUElcbiAgICAgKiBOT1RJRlk6IGRvd25zdHJlYW0gbm90aWZpY2F0aW9uIEFQSVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdlYlNvY2tldEFwaVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQXBpUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FwaVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FwaVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZvcmNlTm9uY2VDaGVjaycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZm9yY2VOb25jZUNoZWNrKSk7XG4gICAgaWYocHJvcGVydGllcy5hbGxvd1NpZ25hdHVyZU1ldGhvZCAmJiAodHlwZW9mIHByb3BlcnRpZXMuYWxsb3dTaWduYXR1cmVNZXRob2QpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsbG93U2lnbmF0dXJlTWV0aG9kJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYWxsb3dTaWduYXR1cmVNZXRob2QsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSG1hY1NIQTI1NlwiLFwiSG1hY1NIQTEsSG1hY1NIQTI1NlwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsbG93U2lnbmF0dXJlTWV0aG9kJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFsbG93U2lnbmF0dXJlTWV0aG9kKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlcnJvckNvZGVTYW1wbGVzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQXBpX0Vycm9yQ29kZVNhbXBsZXNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuZXJyb3JDb2RlU2FtcGxlcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVxdWVzdFBhcmFtZXRlcnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NBcGlfUmVxdWVzdFBhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMucmVxdWVzdFBhcmFtZXRlcnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VQYXJhbWV0ZXJzTWFwJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQXBpX1NlcnZpY2VQYXJhbWV0ZXJzTWFwUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnNlcnZpY2VQYXJhbWV0ZXJzTWFwKSk7XG4gICAgaWYocHJvcGVydGllcy5hcHBDb2RlQXV0aFR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmFwcENvZGVBdXRoVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwQ29kZUF1dGhUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYXBwQ29kZUF1dGhUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkRFRkFVTFRcIixcIkRJU0FCTEVcIixcIkhFQURFUlwiLFwiSEVBREVSX1FVRVJZXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwQ29kZUF1dGhUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFwcENvZGVBdXRoVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzdWx0Qm9keU1vZGVsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc3VsdEJvZHlNb2RlbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZUNvbmZpZycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlQ29uZmlnJywgUm9zQXBpX1NlcnZpY2VDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlQ29uZmlnKSk7XG4gICAgaWYocHJvcGVydGllcy53ZWJTb2NrZXRBcGlUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy53ZWJTb2NrZXRBcGlUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3ZWJTb2NrZXRBcGlUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMud2ViU29ja2V0QXBpVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJDT01NT05cIixcIlJFR0lTVEVSXCIsXCJVTlJFR0lTVEVSXCIsXCJOT1RJRllcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3ZWJTb2NrZXRBcGlUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLndlYlNvY2tldEFwaVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc3VsdERlc2NyaXB0aW9ucycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXN1bHREZXNjcmlwdGlvbnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29wZW5JZENvbm5lY3RDb25maWcnLCBSb3NBcGlfT3BlbklkQ29ubmVjdENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLm9wZW5JZENvbm5lY3RDb25maWcpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmF1dGhUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5hdXRoVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXV0aFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5hdXRoVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBUFBcIixcIkFOT05ZTU9VU1wiLFwiQVBQT1BFTklEXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXV0aFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXV0aFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZ3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YWdzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFncykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFncy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MubGlzdFZhbGlkYXRvcihSb3NBcGlfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy50YWdzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXF1ZXN0Q29uZmlnJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlcXVlc3RDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RDb25maWcnLCBSb3NBcGlfUmVxdWVzdENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlcXVlc3RDb25maWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc3VsdFNhbXBsZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXN1bHRTYW1wbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc2FibGVJbnRlcm5ldCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZGlzYWJsZUludGVybmV0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcGlOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFwaU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwaU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXBpTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVzdWx0VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVzdWx0VHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzdWx0VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlc3VsdFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSlNPTlwiLFwiVEVYVFwiLFwiQklOQVJZXCIsXCJYTUxcIixcIkhUTUxcIixcIlBBU1NUSFJPVUdIXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzdWx0VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXN1bHRUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmYWlsUmVzdWx0U2FtcGxlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZhaWxSZXN1bHRTYW1wbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb25zdFBhcmFtZXRlcnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NBcGlfQ29uc3RQYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmNvbnN0UGFyYW1ldGVycykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3lzdGVtUGFyYW1ldGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0FwaV9TeXN0ZW1QYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnN5c3RlbVBhcmFtZXRlcnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Zpc2liaWxpdHknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudmlzaWJpbGl0eSkpO1xuICAgIGlmKHByb3BlcnRpZXMudmlzaWJpbGl0eSAmJiAodHlwZW9mIHByb3BlcnRpZXMudmlzaWJpbGl0eSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmlzaWJpbGl0eScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnZpc2liaWxpdHksXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiUFVCTElDXCIsXCJQUklWQVRFXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmlzaWJpbGl0eScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52aXNpYmlsaXR5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlUGFyYW1ldGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0FwaV9TZXJ2aWNlUGFyYW1ldGVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5zZXJ2aWNlUGFyYW1ldGVycykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBcGlQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXBpYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBcGlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXBpYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FwaVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQXBpUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FwaU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwaU5hbWUpLFxuICAgICAgJ0dyb3VwSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwSWQpLFxuICAgICAgJ1JlcXVlc3RDb25maWcnOiByb3NBcGlSZXF1ZXN0Q29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVxdWVzdENvbmZpZyksXG4gICAgICAnU2VydmljZUNvbmZpZyc6IHJvc0FwaVNlcnZpY2VDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlQ29uZmlnKSxcbiAgICAgICdWaXNpYmlsaXR5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52aXNpYmlsaXR5KSxcbiAgICAgICdBbGxvd1NpZ25hdHVyZU1ldGhvZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWxsb3dTaWduYXR1cmVNZXRob2QpLFxuICAgICAgJ0FwcENvZGVBdXRoVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXBwQ29kZUF1dGhUeXBlKSxcbiAgICAgICdBdXRoVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXV0aFR5cGUpLFxuICAgICAgJ0NvbnN0UGFyYW1ldGVycyc6IHJvcy5saXN0TWFwcGVyKHJvc0FwaUNvbnN0UGFyYW1ldGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jb25zdFBhcmFtZXRlcnMpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICAnRGlzYWJsZUludGVybmV0Jzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlzYWJsZUludGVybmV0KSxcbiAgICAgICdFcnJvckNvZGVTYW1wbGVzJzogcm9zLmxpc3RNYXBwZXIocm9zQXBpRXJyb3JDb2RlU2FtcGxlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5lcnJvckNvZGVTYW1wbGVzKSxcbiAgICAgICdGYWlsUmVzdWx0U2FtcGxlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mYWlsUmVzdWx0U2FtcGxlKSxcbiAgICAgICdGb3JjZU5vbmNlQ2hlY2snOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mb3JjZU5vbmNlQ2hlY2spLFxuICAgICAgJ09wZW5JZENvbm5lY3RDb25maWcnOiByb3NBcGlPcGVuSWRDb25uZWN0Q29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3BlbklkQ29ubmVjdENvbmZpZyksXG4gICAgICAnUmVxdWVzdFBhcmFtZXRlcnMnOiByb3MubGlzdE1hcHBlcihyb3NBcGlSZXF1ZXN0UGFyYW1ldGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yZXF1ZXN0UGFyYW1ldGVycyksXG4gICAgICAnUmVzdWx0Qm9keU1vZGVsJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXN1bHRCb2R5TW9kZWwpLFxuICAgICAgJ1Jlc3VsdERlc2NyaXB0aW9ucyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzdWx0RGVzY3JpcHRpb25zKSxcbiAgICAgICdSZXN1bHRTYW1wbGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc3VsdFNhbXBsZSksXG4gICAgICAnUmVzdWx0VHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzdWx0VHlwZSksXG4gICAgICAnU2VydmljZVBhcmFtZXRlcnMnOiByb3MubGlzdE1hcHBlcihyb3NBcGlTZXJ2aWNlUGFyYW1ldGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zZXJ2aWNlUGFyYW1ldGVycyksXG4gICAgICAnU2VydmljZVBhcmFtZXRlcnNNYXAnOiByb3MubGlzdE1hcHBlcihyb3NBcGlTZXJ2aWNlUGFyYW1ldGVyc01hcFByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zZXJ2aWNlUGFyYW1ldGVyc01hcCksXG4gICAgICAnU3lzdGVtUGFyYW1ldGVycyc6IHJvcy5saXN0TWFwcGVyKHJvc0FwaVN5c3RlbVBhcmFtZXRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc3lzdGVtUGFyYW1ldGVycyksXG4gICAgICAnVGFncyc6IHJvcy5saXN0TWFwcGVyKHJvc0FwaVRhZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGFncyksXG4gICAgICAnV2ViU29ja2V0QXBpVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud2ViU29ja2V0QXBpVHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXBpYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYW4gQVBJLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBBcGlgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktYXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBcGkgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkFwaUdhdGV3YXk6OkFwaVwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcGlJZDogVGhlIGlkIG9mIHRoZSBBUEkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcGlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcm46IFRoZSBBbGliYWJhIENsb3VkIFJlc291cmNlIE5hbWUgKEFSTikuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcm46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwaU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBBUEkuSXQgbXVzdCBiZSA0IHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCwgYW5kIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgdW5kZXJzY29yZXMgKF8pLCBkYXNoZXMgKC0pLCBzcGFjZXMgYW5kIGRvdHMgKC4pLCBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuXG4gICAgICovXG4gICAgcHVibGljIGFwaU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgaWQgb2YgdGhlIEdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVxdWVzdENvbmZpZzogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHJlcXVlc3RcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVxdWVzdENvbmZpZzogUm9zQXBpLlJlcXVlc3RDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlQ29uZmlnOiBUaGUgY29uZmlndXJhdGlvbiBvZiB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZUNvbmZpZzogUm9zQXBpLlNlcnZpY2VDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2aXNpYmlsaXR5OiBXaGV0aGVyIHRvIG1ha2UgdGhlIEFQSSBwdWJsaWMuIFwiUFVCTElDXCIgb3IgXCJQUklWQVRFXCIuXG4gICAgICovXG4gICAgcHVibGljIHZpc2liaWxpdHk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGxvd1NpZ25hdHVyZU1ldGhvZDogSWYgdGhlIEF1dGhUeXBlIGlzIEFQUCBhdXRoZW50aWNhdGlvbiwgeW91IG5lZWQgdG8gcGFzcyB0aGlzIHZhbHVlIHRvIHNwZWNpZnkgdGhlIHNpZ25hdHVyZSBhbGdvcml0aG0uIElmIHlvdSBkbyBub3Qgc3BlY2lmeSB0aGlzIHBhcmFtZXRlciwgdGhlIGRlZmF1bHQgdmFsdWUgSG1hY1NIQTI1NiBpcyB1c2VkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogSG1hY1NIQTI1NlxuICAgICAqIEhtYWNTSEExLEhtYWNTSEEyNTZcbiAgICAgKi9cbiAgICBwdWJsaWMgYWxsb3dTaWduYXR1cmVNZXRob2Q6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBDb2RlQXV0aFR5cGU6IFdoZW4gQXV0aFR5cGUgaXMgQVBQIGF1dGhlbnRpY2F0aW9uLCB0aGUgb3B0aW9uYWwgdmFsdWVzIGFyZSBhcyBmb2xsb3dzOiBJZiBub3QgcGFzc2VkLCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBERUZBVUxUOlxuICAgICAqIERFRkFVTFQ6IERlZmF1bHQgKHNldCBieSBncm91cCkuXG4gICAgICogRElTQUJMRTogTm90IGFsbG93ZWRcbiAgICAgKiBIRUFERVI6IEFsbG93IEFwcENvZGUgaGVhZGVyIGF1dGhlbnRpY2F0aW9uXG4gICAgICogSEVBREVSX1FVRVJZOiBBbGxvdyBBcHBDb2RlIGhlYWRlciBhbmQgcXVlcnkgYXV0aGVudGljYXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwQ29kZUF1dGhUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXV0aFR5cGU6IFR5cGUgb2YgYXV0aG9yaXphdGlvbiBvZiB0aGUgQVBJIC4gXCJBUFBcIixcIkFOT05ZTU9VU1wiLCBvciBcIkFQUE9QRU5JRFwiXG4gICAgICovXG4gICAgcHVibGljIGF1dGhUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29uc3RQYXJhbWV0ZXJzOiBUaGUgY29uc3QgcGFyYW1ldGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29uc3RQYXJhbWV0ZXJzOiBBcnJheTxSb3NBcGkuQ29uc3RQYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgQVBJLCBsZXNzIHRoYW4gMTgwIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlzYWJsZUludGVybmV0OiBTZXQgRGlzYWJsZUludGVybmV0IHRvIHRydWUsIG9ubHkgc3VwcG9ydCBpbnRyYW5ldCB0byBjYWxsIEFQSS4gXG4gICAgICogU2V0IERpc2FibGVJbnRlcm5ldCB0byBmYWxzZSwgdGhlbiB0aGUgY2FsbCBpcyBub3QgcmVzdHJpY3RlZC4gXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzYWJsZUludGVybmV0OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVycm9yQ29kZVNhbXBsZXM6IFRoZSBFcnJvciBDb2RlIHNhbXBsZXMuXG4gICAgICovXG4gICAgcHVibGljIGVycm9yQ29kZVNhbXBsZXM6IEFycmF5PFJvc0FwaS5FcnJvckNvZGVTYW1wbGVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZhaWxSZXN1bHRTYW1wbGU6IFRoZSBzYW1wbGUgb2YgdGhlIGZhaWwgcmVzdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyBmYWlsUmVzdWx0U2FtcGxlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZm9yY2VOb25jZUNoZWNrOiBTZXQgRm9yY2VOb25jZUNoZWNrIHRvIHRydWUsIGNvbXB1bHNvcmlseSBjaGVjayBYLUNhLU5vbmNlIHdoZW4gcmVxdWVzdGluZywgXG4gICAgICogdGhpcyBpcyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHJlcXVlc3QsIGdlbmVyYWxseSB1c2luZyBVVUlEIHRvIGlkZW50aWZ5LiBcbiAgICAgKiBUaGUgQVBJIGdhdGV3YXkgd2lsbCB2ZXJpZnkgdGhlIHZhbGlkaXR5IG9mIHRoaXMgcGFyYW1ldGVyIGFmdGVyIHJlY2VpdmluZyB0aGlzIHBhcmFtZXRlci4gXG4gICAgICogVGhlIHNhbWUgdmFsdWUgY2FuIG9ubHkgYmUgdXNlZCBvbmNlIHdpdGhpbiAxNSBtaW51dGVzLiBJdCBjYW4gZWZmZWN0aXZlbHkgcHJldmVudCBBUEkgcmVwbGF5IGF0dGFja3MuXG4gICAgICogU2V0IEZvcmNlTm9uY2VDaGVjayB0byBmYWxzZSwgdGhlbiBubyBjaGVjay5cbiAgICAgKi9cbiAgICBwdWJsaWMgZm9yY2VOb25jZUNoZWNrOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9wZW5JZENvbm5lY3RDb25maWc6IFRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBvcGVuIGlkLlxuICAgICAqL1xuICAgIHB1YmxpYyBvcGVuSWRDb25uZWN0Q29uZmlnOiBSb3NBcGkuT3BlbklkQ29ubmVjdENvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcXVlc3RQYXJhbWV0ZXJzOiBUaGUgcmVxdWVzdCBwYXJhbWV0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXF1ZXN0UGFyYW1ldGVyczogQXJyYXk8Um9zQXBpLlJlcXVlc3RQYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc3VsdEJvZHlNb2RlbDogVGhlIHJldHVybiByZXN1bHQgb2YgdGhlIEFQSS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzdWx0Qm9keU1vZGVsOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzdWx0RGVzY3JpcHRpb25zOiBUaGUgcmV0dXJuIGRlc2NyaXB0aW9uIG9mIHRoZSBBUEkuXG4gICAgICovXG4gICAgcHVibGljIHJlc3VsdERlc2NyaXB0aW9uczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc3VsdFNhbXBsZTogVGhlIHNhbXBsZSBvZiB0aGUgcmVzdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZXN1bHRTYW1wbGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXN1bHRUeXBlOiBUaGUgZm9ybWF0IG9mIHNlcnZpY2UncyByZXNwb25zZSwgXCJKU09OXCIsIFwiVEVYVFwiLCBcIkJJTkFSWVwiLCBcIlhNTFwiLCBcIkhUTUxcIiBvciBcIlBBU1NUSFJPVUdIXCIuIERlZmF1bHQgaXMgXCJKU09OXCIuXG4gICAgICovXG4gICAgcHVibGljIHJlc3VsdFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlUGFyYW1ldGVyczogVGhlIHNlcnZpY2UgcGFyYW1ldGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZVBhcmFtZXRlcnM6IEFycmF5PFJvc0FwaS5TZXJ2aWNlUGFyYW1ldGVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlUGFyYW1ldGVyc01hcDogVGhlIG1hcHBpbmcgcmVsYXRpb24gYmV0d2VlbiAocmVxdWVzdCBwYXJhbWV0ZXJzXFxjb25zdCBwYXJhbWV0ZXJzXFxzeXN0ZW0gcGFyYW1ldGVycykgYW5kIHNlcnZpY2UgcGFyYW1ldGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZVBhcmFtZXRlcnNNYXA6IEFycmF5PFJvc0FwaS5TZXJ2aWNlUGFyYW1ldGVyc01hcFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzeXN0ZW1QYXJhbWV0ZXJzOiBUaGUgc3lzdGVtIHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgcHVibGljIHN5c3RlbVBhcmFtZXRlcnM6IEFycmF5PFJvc0FwaS5TeXN0ZW1QYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcHVibGljIHRhZ3M6IFJvc0FwaS5UYWdzUHJvcGVydHlbXSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWJTb2NrZXRBcGlUeXBlOiBUaGUgdHlwZSBvZiB0aGUgdHdvLXdheSBjb21tdW5pY2F0aW9uIEFQSS5cbiAgICAgKiBDT01NT046IGNvbW1vbiBBUElcbiAgICAgKiBSRUdJU1RFUjogcmVnaXN0ZXJlZCBBUElcbiAgICAgKiBVTlJFR0lTVEVSOiB1bnJlZ2lzdGVyZWQgQVBJXG4gICAgICogTk9USUZZOiBkb3duc3RyZWFtIG5vdGlmaWNhdGlvbiBBUElcbiAgICAgKi9cbiAgICBwdWJsaWMgd2ViU29ja2V0QXBpVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FwaVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQXBpLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBcGlJZCA9IHRoaXMuZ2V0QXR0KCdBcGlJZCcpO1xuICAgICAgICB0aGlzLmF0dHJBcm4gPSB0aGlzLmdldEF0dCgnQXJuJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFwaU5hbWUgPSBwcm9wcy5hcGlOYW1lO1xuICAgICAgICB0aGlzLmdyb3VwSWQgPSBwcm9wcy5ncm91cElkO1xuICAgICAgICB0aGlzLnJlcXVlc3RDb25maWcgPSBwcm9wcy5yZXF1ZXN0Q29uZmlnO1xuICAgICAgICB0aGlzLnNlcnZpY2VDb25maWcgPSBwcm9wcy5zZXJ2aWNlQ29uZmlnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSBwcm9wcy52aXNpYmlsaXR5O1xuICAgICAgICB0aGlzLmFsbG93U2lnbmF0dXJlTWV0aG9kID0gcHJvcHMuYWxsb3dTaWduYXR1cmVNZXRob2Q7XG4gICAgICAgIHRoaXMuYXBwQ29kZUF1dGhUeXBlID0gcHJvcHMuYXBwQ29kZUF1dGhUeXBlO1xuICAgICAgICB0aGlzLmF1dGhUeXBlID0gcHJvcHMuYXV0aFR5cGU7XG4gICAgICAgIHRoaXMuY29uc3RQYXJhbWV0ZXJzID0gcHJvcHMuY29uc3RQYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZGlzYWJsZUludGVybmV0ID0gcHJvcHMuZGlzYWJsZUludGVybmV0O1xuICAgICAgICB0aGlzLmVycm9yQ29kZVNhbXBsZXMgPSBwcm9wcy5lcnJvckNvZGVTYW1wbGVzO1xuICAgICAgICB0aGlzLmZhaWxSZXN1bHRTYW1wbGUgPSBwcm9wcy5mYWlsUmVzdWx0U2FtcGxlO1xuICAgICAgICB0aGlzLmZvcmNlTm9uY2VDaGVjayA9IHByb3BzLmZvcmNlTm9uY2VDaGVjaztcbiAgICAgICAgdGhpcy5vcGVuSWRDb25uZWN0Q29uZmlnID0gcHJvcHMub3BlbklkQ29ubmVjdENvbmZpZztcbiAgICAgICAgdGhpcy5yZXF1ZXN0UGFyYW1ldGVycyA9IHByb3BzLnJlcXVlc3RQYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLnJlc3VsdEJvZHlNb2RlbCA9IHByb3BzLnJlc3VsdEJvZHlNb2RlbDtcbiAgICAgICAgdGhpcy5yZXN1bHREZXNjcmlwdGlvbnMgPSBwcm9wcy5yZXN1bHREZXNjcmlwdGlvbnM7XG4gICAgICAgIHRoaXMucmVzdWx0U2FtcGxlID0gcHJvcHMucmVzdWx0U2FtcGxlO1xuICAgICAgICB0aGlzLnJlc3VsdFR5cGUgPSBwcm9wcy5yZXN1bHRUeXBlO1xuICAgICAgICB0aGlzLnNlcnZpY2VQYXJhbWV0ZXJzID0gcHJvcHMuc2VydmljZVBhcmFtZXRlcnM7XG4gICAgICAgIHRoaXMuc2VydmljZVBhcmFtZXRlcnNNYXAgPSBwcm9wcy5zZXJ2aWNlUGFyYW1ldGVyc01hcDtcbiAgICAgICAgdGhpcy5zeXN0ZW1QYXJhbWV0ZXJzID0gcHJvcHMuc3lzdGVtUGFyYW1ldGVycztcbiAgICAgICAgdGhpcy50YWdzID0gcHJvcHMudGFncztcbiAgICAgICAgdGhpcy53ZWJTb2NrZXRBcGlUeXBlID0gcHJvcHMud2ViU29ja2V0QXBpVHlwZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhcGlOYW1lOiB0aGlzLmFwaU5hbWUsXG4gICAgICAgICAgICBncm91cElkOiB0aGlzLmdyb3VwSWQsXG4gICAgICAgICAgICByZXF1ZXN0Q29uZmlnOiB0aGlzLnJlcXVlc3RDb25maWcsXG4gICAgICAgICAgICBzZXJ2aWNlQ29uZmlnOiB0aGlzLnNlcnZpY2VDb25maWcsXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB0aGlzLnZpc2liaWxpdHksXG4gICAgICAgICAgICBhbGxvd1NpZ25hdHVyZU1ldGhvZDogdGhpcy5hbGxvd1NpZ25hdHVyZU1ldGhvZCxcbiAgICAgICAgICAgIGFwcENvZGVBdXRoVHlwZTogdGhpcy5hcHBDb2RlQXV0aFR5cGUsXG4gICAgICAgICAgICBhdXRoVHlwZTogdGhpcy5hdXRoVHlwZSxcbiAgICAgICAgICAgIGNvbnN0UGFyYW1ldGVyczogdGhpcy5jb25zdFBhcmFtZXRlcnMsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRpc2FibGVJbnRlcm5ldDogdGhpcy5kaXNhYmxlSW50ZXJuZXQsXG4gICAgICAgICAgICBlcnJvckNvZGVTYW1wbGVzOiB0aGlzLmVycm9yQ29kZVNhbXBsZXMsXG4gICAgICAgICAgICBmYWlsUmVzdWx0U2FtcGxlOiB0aGlzLmZhaWxSZXN1bHRTYW1wbGUsXG4gICAgICAgICAgICBmb3JjZU5vbmNlQ2hlY2s6IHRoaXMuZm9yY2VOb25jZUNoZWNrLFxuICAgICAgICAgICAgb3BlbklkQ29ubmVjdENvbmZpZzogdGhpcy5vcGVuSWRDb25uZWN0Q29uZmlnLFxuICAgICAgICAgICAgcmVxdWVzdFBhcmFtZXRlcnM6IHRoaXMucmVxdWVzdFBhcmFtZXRlcnMsXG4gICAgICAgICAgICByZXN1bHRCb2R5TW9kZWw6IHRoaXMucmVzdWx0Qm9keU1vZGVsLFxuICAgICAgICAgICAgcmVzdWx0RGVzY3JpcHRpb25zOiB0aGlzLnJlc3VsdERlc2NyaXB0aW9ucyxcbiAgICAgICAgICAgIHJlc3VsdFNhbXBsZTogdGhpcy5yZXN1bHRTYW1wbGUsXG4gICAgICAgICAgICByZXN1bHRUeXBlOiB0aGlzLnJlc3VsdFR5cGUsXG4gICAgICAgICAgICBzZXJ2aWNlUGFyYW1ldGVyczogdGhpcy5zZXJ2aWNlUGFyYW1ldGVycyxcbiAgICAgICAgICAgIHNlcnZpY2VQYXJhbWV0ZXJzTWFwOiB0aGlzLnNlcnZpY2VQYXJhbWV0ZXJzTWFwLFxuICAgICAgICAgICAgc3lzdGVtUGFyYW1ldGVyczogdGhpcy5zeXN0ZW1QYXJhbWV0ZXJzLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICAgICAgd2ViU29ja2V0QXBpVHlwZTogdGhpcy53ZWJTb2NrZXRBcGlUeXBlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBcGlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NBcGkge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbnN0UGFyYW1ldGVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb25zdFZhbHVlOiBUaGUgdmFsdWUgb2YgdGhlIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbnN0VmFsdWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIGNvbnN0IHBhcmFtZXRlciwgbGVzcyB0aGFuIDE4MCBjaGFyYWN0ZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VydmljZVBhcmFtZXRlck5hbWU6IFRoZSBzZXJ2aWNlIHBhcmFtZXRlciBuYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmljZVBhcmFtZXRlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBsb2NhdGlvbjogVGhlIGxvY2F0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuIERlZmF1bHQgaXMgSEVBRC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvY2F0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDb25zdFBhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29uc3RQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXBpX0NvbnN0UGFyYW1ldGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29uc3RWYWx1ZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb25zdFZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb25zdFZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbnN0VmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlUGFyYW1ldGVyTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlUGFyYW1ldGVyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVBhcmFtZXRlck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZVBhcmFtZXRlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvY2F0aW9uJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxvY2F0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5sb2NhdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMubG9jYXRpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvY2F0aW9uJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubG9jYXRpb24sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQk9EWVwiLFwiSEVBRFwiLFwiUVVFUllcIixcIlBBVEhcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2NhdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2NhdGlvbikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDb25zdFBhcmFtZXRlcnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXBpLkNvbnN0UGFyYW1ldGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29uc3RQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkFwaS5Db25zdFBhcmFtZXRlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQXBpQ29uc3RQYXJhbWV0ZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0FwaV9Db25zdFBhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdDb25zdFZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb25zdFZhbHVlKSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgJ1NlcnZpY2VQYXJhbWV0ZXJOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlUGFyYW1ldGVyTmFtZSksXG4gICAgICAnTG9jYXRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvY2F0aW9uKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0FwaSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRXJyb3JDb2RlU2FtcGxlc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIEVSUk9SLCBsZXNzIHRoYW4gMTgwIGNoYXJhY3RlcnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtZXNzYWdlOiBFcnJvciBtZXNzYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvZGU6IEVycm9yIGNvZGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb2RlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBFcnJvckNvZGVTYW1wbGVzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEVycm9yQ29kZVNhbXBsZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBcGlfRXJyb3JDb2RlU2FtcGxlc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21lc3NhZ2UnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubWVzc2FnZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWVzc2FnZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tZXNzYWdlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb2RlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29kZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJFcnJvckNvZGVTYW1wbGVzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkFwaS5FcnJvckNvZGVTYW1wbGVzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBFcnJvckNvZGVTYW1wbGVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkFwaS5FcnJvckNvZGVTYW1wbGVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FwaUVycm9yQ29kZVNhbXBsZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQXBpX0Vycm9yQ29kZVNhbXBsZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgJ01lc3NhZ2UnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1lc3NhZ2UpLFxuICAgICAgJ0NvZGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvZGUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQXBpIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBGdW5jdGlvbkNvbXB1dGVDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGF0aDogVGhlIGJhY2tlbmQgcmVxdWVzdCBwYXRoIG11c3QgY29udGFpbiB0aGUgUGFyYW1ldGVyIFBhdGggaW4gdGhlIGJhY2tlbmQgc2VydmljZSBwYXJhbWV0ZXIgd2l0aGluIGJyYWNrZXRzIChbXSkuIEZvciBleGFtcGxlOiBcXC9nZXRVc2VySW5mb1xcL1t1c2VySWRdLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGF0aD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmY1ZlcnNpb246IEZ1bmN0aW9uIHZlcnNpb24uIERlZmF1bHQ6IDIuMC5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IDIuMCwgMy4wLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZmNWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbnRlbnRUeXBlVmFsdWU6IENvbnRlbnRUeXBlVmFsdWUgaXMgcmVxdWlyZWQgaWYgQ29udGVudFR5cGVDYXRhZ29yeSBpcyBERUZBVUxUIG9yIENVU1RPTS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbnRlbnRUeXBlVmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWV0aG9kOiBUaGUgSFRUUCBtZXRob2Qgb2YgdGhlIGZ1bmN0aW9uLiBEZWZhdWx0IGlzIEdFVC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1ldGhvZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvbmx5QnVzaW5lc3NQYXRoOiBJZiBzZXQgdHJ1ZS4gVGhlIHBhdGggaW4gdGhlIHRyaWdnZXIgcGF0aCAoZm9yIGV4YW1wbGUsIFxcLzIwMTYtMDgtMTVcXC9wcm94eVxcL3h4eFxcL3h4eCkgd2lsbCBub3QgYmUgcGFzc2VkIHRvIHRoZSBiYWNrZW5kLCBhbmQgdGhlIGJhY2tlbmQgd2lsbCBvbmx5IHJlY2VpdmUgdGhlIGN1c3RvbWl6ZWQgYmFja2VuZCByZXF1ZXN0IHBhdGguXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvbmx5QnVzaW5lc3NQYXRoPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmY1JlZ2lvbklkOiBUaGUgcmVnaW9uIGlkIG9mIGZ1bmN0aW9uIGNvbXB1dGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBmY1JlZ2lvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJvbGVBcm46IFJhbSBhdXRob3JpemVzIHRoZSBhcm4gb2YgdGhlIEFQSSBnYXRld2F5IGFjY2VzcyBmdW5jdGlvbiBjb21wdXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcm9sZUFybj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmY0Jhc2VVcmw6IFRyaWdnZXIgcGF0aC4gU3RhcnRzIHdpdGggaHR0cDpcXC9cXC8gb3IgaHR0cHM6XFwvXFwvXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBmY0Jhc2VVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBUaGUgZnVuY3Rpb24gbmFtZSBvZiBmdW5jdGlvbiBjb21wdXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBUaGUgc2VydmljZSBuYW1lIG9mIGZ1bmN0aW9uIGNvbXB1dGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZXJ2aWNlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmY1R5cGU6IEZ1bmN0aW9uIHR5cGUuIERlZmF1bHQ6IEZDRXZlbnQuXG4gICAgICogVmFsaWQgdmFsdWVzOiBGQ0V2ZW50LCBIdHRwVHJpZ2dlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZjVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBxdWFsaWZpZXI6IFRoZSBzZXJ2aWNlIGFsaWFzIG5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBxdWFsaWZpZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29udGVudFR5cGVDYXRhZ29yeTogU3BlY2lmeSBob3cgdG8gZGV0ZXJtaW5lIENvbnRlbnRUeXBlIGhlYWRlciB3aGVuIHVzaW5nIGZ1bmN0aW9uLiBcIkRFRkFVTFRcIiB0byB1c2UgQVBJIEdhdGV3YXkncyBkZWZhdWx0IHZhbHVlLiBcIkNVU1RPTVwiIHRvIHVzZSBzZWxmIGRlZmluZWQgdmFsdWUuIFwiQ0xJRU5UXCIgdG8gdXNlIGNsaWVudCdzIENvbnRlbnRUeXBlIGhlYWRlci4gRGVmYXVsdCBpcyBDTElFTlQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb250ZW50VHlwZUNhdGFnb3J5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRnVuY3Rpb25Db21wdXRlQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEZ1bmN0aW9uQ29tcHV0ZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FwaV9GdW5jdGlvbkNvbXB1dGVDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGF0aCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZmNWZXJzaW9uICYmICh0eXBlb2YgcHJvcGVydGllcy5mY1ZlcnNpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZjVmVyc2lvbicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmZjVmVyc2lvbixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCIyLjBcIixcIjMuMFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZjVmVyc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5mY1ZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRlbnRUeXBlVmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGVudFR5cGVWYWx1ZSkpO1xuICAgIGlmKHByb3BlcnRpZXMubWV0aG9kICYmICh0eXBlb2YgcHJvcGVydGllcy5tZXRob2QpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21ldGhvZCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1ldGhvZCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJHRVRcIixcIlBPU1RcIixcIkRFTEVURVwiLFwiUFVUXCIsXCJIRUFEXCIsXCJQQVRDSFwiLFwiT1BUSU9OU1wiLFwiQU5ZXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWV0aG9kJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1ldGhvZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb25seUJ1c2luZXNzUGF0aCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMub25seUJ1c2luZXNzUGF0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmNSZWdpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5mY1JlZ2lvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb2xlQXJuJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJvbGVBcm4pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZjQmFzZVVybCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5mY0Jhc2VVcmwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Z1bmN0aW9uTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5mdW5jdGlvbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5mY1R5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmZjVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmNUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZmNUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkZDRXZlbnRcIixcIkh0dHBUcmlnZ2VyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmNUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZjVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVhbGlmaWVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1YWxpZmllcikpO1xuICAgIGlmKHByb3BlcnRpZXMuY29udGVudFR5cGVDYXRhZ29yeSAmJiAodHlwZW9mIHByb3BlcnRpZXMuY29udGVudFR5cGVDYXRhZ29yeSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGVudFR5cGVDYXRhZ29yeScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNvbnRlbnRUeXBlQ2F0YWdvcnksXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiREVGQVVMVFwiLFwiQ1VTVE9NXCIsXCJDTElFTlRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250ZW50VHlwZUNhdGFnb3J5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbnRlbnRUeXBlQ2F0YWdvcnkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRnVuY3Rpb25Db21wdXRlQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkFwaS5GdW5jdGlvbkNvbXB1dGVDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEZ1bmN0aW9uQ29tcHV0ZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpBcGkuRnVuY3Rpb25Db21wdXRlQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FwaUZ1bmN0aW9uQ29tcHV0ZUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NBcGlfRnVuY3Rpb25Db21wdXRlQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUGF0aCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGF0aCksXG4gICAgICAnRmNWZXJzaW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mY1ZlcnNpb24pLFxuICAgICAgJ0NvbnRlbnRUeXBlVmFsdWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbnRlbnRUeXBlVmFsdWUpLFxuICAgICAgJ01ldGhvZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWV0aG9kKSxcbiAgICAgICdPbmx5QnVzaW5lc3NQYXRoJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub25seUJ1c2luZXNzUGF0aCksXG4gICAgICAnRmNSZWdpb25JZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmNSZWdpb25JZCksXG4gICAgICAnUm9sZUFybic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucm9sZUFybiksXG4gICAgICAnRmNCYXNlVXJsJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mY0Jhc2VVcmwpLFxuICAgICAgJ0Z1bmN0aW9uTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSxcbiAgICAgICdTZXJ2aWNlTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZU5hbWUpLFxuICAgICAgJ0ZjVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmNUeXBlKSxcbiAgICAgICdRdWFsaWZpZXInOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnF1YWxpZmllciksXG4gICAgICAnQ29udGVudFR5cGVDYXRhZ29yeSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29udGVudFR5cGVDYXRhZ29yeSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NBcGkge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1vY2tIZWFkZXJzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhlYWRlclZhbHVlOiBSZXNwb25zZSBoZWFkZXIgdmFsdWVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhlYWRlclZhbHVlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaGVhZGVyTmFtZTogUmVzcG9uc2UgaGVhZGVyIG5hbWVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhlYWRlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE1vY2tIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1vY2tIZWFkZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXBpX01vY2tIZWFkZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoZWFkZXJWYWx1ZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5oZWFkZXJWYWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGVhZGVyVmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaGVhZGVyVmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hlYWRlck5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaGVhZGVyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGVhZGVyTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5oZWFkZXJOYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk1vY2tIZWFkZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkFwaS5Nb2NrSGVhZGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTW9ja0hlYWRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXBpLk1vY2tIZWFkZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FwaU1vY2tIZWFkZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0FwaV9Nb2NrSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0hlYWRlclZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oZWFkZXJWYWx1ZSksXG4gICAgICAnSGVhZGVyTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGVhZGVyTmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NBcGkge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE9wZW5JZENvbm5lY3RDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgb3BlbklkQXBpVHlwZTogVGhlIHR5cGUgb2YgdGhlIG9wZW4gaWQuIFwiSURUT0tFTlwiIG9yIFwiQlVTSU5FU1NcIi4gSWYgT3BlbklkQXBpVHlwZSBpcyBzcGVjaWZpZWQgYXMgSURUT0tFTiwgUHVibGljS2V5IGFuZCBQdWJsaWNLZXlJZCBhcmUgcmVxdWlyZWQuIElmIE9wZW5JZEFwaVR5cGUgaXMgc3BlY2lmaWVkIGFzIEJVU0lORVNTLCBJZFRva2VuUGFyYW1OYW1lIGlzIHJlcXVpcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgb3BlbklkQXBpVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHB1YmxpY0tleTogVGhlIHB1YmxpYyBrZXkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwdWJsaWNLZXk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHVibGljS2V5SWQ6IFRoZSBwdWJsaWMga2V5IGlkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHVibGljS2V5SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaWRUb2tlblBhcmFtTmFtZTogVGhlIHRva2VuJ3MgcGFyYW1ldGVyIG5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpZFRva2VuUGFyYW1OYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgT3BlbklkQ29ubmVjdENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBPcGVuSWRDb25uZWN0Q29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXBpX09wZW5JZENvbm5lY3RDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29wZW5JZEFwaVR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMub3BlbklkQXBpVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMub3BlbklkQXBpVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMub3BlbklkQXBpVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3BlbklkQXBpVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm9wZW5JZEFwaVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSURUT0tFTlwiLFwiQlVTSU5FU1NcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcGVuSWRBcGlUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9wZW5JZEFwaVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3B1YmxpY0tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wdWJsaWNLZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3B1YmxpY0tleUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnB1YmxpY0tleUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpZFRva2VuUGFyYW1OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmlkVG9rZW5QYXJhbU5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiT3BlbklkQ29ubmVjdENvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpBcGkuT3BlbklkQ29ubmVjdENvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgT3BlbklkQ29ubmVjdENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpBcGkuT3BlbklkQ29ubmVjdENvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBcGlPcGVuSWRDb25uZWN0Q29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0FwaV9PcGVuSWRDb25uZWN0Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnT3BlbklkQXBpVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3BlbklkQXBpVHlwZSksXG4gICAgICAnUHVibGljS2V5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wdWJsaWNLZXkpLFxuICAgICAgJ1B1YmxpY0tleUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wdWJsaWNLZXlJZCksXG4gICAgICAnSWRUb2tlblBhcmFtTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWRUb2tlblBhcmFtTmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NBcGkge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVxdWVzdFBhdGg6IEFQSSBQYXRoLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVxdWVzdFBhdGg6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZXF1ZXN0TW9kZTogQVBJIHJlcXVlc3QgbW9kZS4gXCJNQVBQSU5HXCIgb3IgXCJQQVNTVEhST1VHSFwiLiBEZWZhdWx0IGlzIFwiTUFQUElOR1wiLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVxdWVzdE1vZGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZXF1ZXN0UHJvdG9jb2w6IFRoZSBwcm90b2NvbCBvZiB0aGUgcmVxdWVzdCwgXCJIVFRQXCIsIFwiSFRUUFNcIiwgb3IgXCJIVFRQLEhUVFBTXCIsIERlZmF1bHQgaXMgXCJIVFRQXCIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXF1ZXN0UHJvdG9jb2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZXF1ZXN0SHR0cE1ldGhvZDogVGhlIEhUVFAgbWV0aG9kIG9mIHRoZSByZXF1ZXN0LiBEZWZhdWx0IGlzIEdFVC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlcXVlc3RIdHRwTWV0aG9kOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcG9zdEJvZHlEZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIHBvc3QgYm9keS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvc3RCb2R5RGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYm9keUZvcm1hdDogRGVzY3JpYmUgaG93IGRhdGEgdHJhbnNmb3JtIHRvIHRoZSBzZXJ2ZXIsIFwiRk9STVwiIGZvciBrLXYgYW5kIFwiU1RSRUFNXCIgZm9yIGJpdCBzdHJlYW0uQm9keUZvcm1hdCBpcyByZXF1aXJlZCBpZiBSZXF1ZXN0TW9kZSBpcyBzcGVjaWZpZWQgYXMgTUFQUElORyBhbmQgUmVxdWVzdEh0dHBNZXRob2QgaXMgUE9TVFxcL1BVVFxcL1BBVENILlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYm9keUZvcm1hdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJlcXVlc3RDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVxdWVzdENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FwaV9SZXF1ZXN0Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXF1ZXN0UGF0aCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZXF1ZXN0UGF0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVxdWVzdFBhdGgnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVxdWVzdFBhdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RNb2RlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlcXVlc3RNb2RlKSk7XG4gICAgaWYocHJvcGVydGllcy5yZXF1ZXN0TW9kZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVxdWVzdE1vZGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RNb2RlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVxdWVzdE1vZGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiTUFQUElOR1wiLFwiUEFTU1RIUk9VR0hcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXF1ZXN0TW9kZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXF1ZXN0TW9kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVxdWVzdFByb3RvY29sJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlcXVlc3RQcm90b2NvbCkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVxdWVzdFByb3RvY29sICYmICh0eXBlb2YgcHJvcGVydGllcy5yZXF1ZXN0UHJvdG9jb2wpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RQcm90b2NvbCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlcXVlc3RQcm90b2NvbCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJIVFRQXCIsXCJIVFRQU1wiLFwiSFRUUCxIVFRQU1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RQcm90b2NvbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXF1ZXN0UHJvdG9jb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RIdHRwTWV0aG9kJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlcXVlc3RIdHRwTWV0aG9kKSk7XG4gICAgaWYocHJvcGVydGllcy5yZXF1ZXN0SHR0cE1ldGhvZCAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVxdWVzdEh0dHBNZXRob2QpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RIdHRwTWV0aG9kJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVxdWVzdEh0dHBNZXRob2QsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiR0VUXCIsXCJQT1NUXCIsXCJERUxFVEVcIixcIlBVVFwiLFwiSEVBRFwiLFwiVFJBQ0VcIixcIlBBVENIXCIsXCJDT05ORUNUXCIsXCJPUFRJT05TXCIsXCJBTllcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXF1ZXN0SHR0cE1ldGhvZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXF1ZXN0SHR0cE1ldGhvZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9zdEJvZHlEZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb3N0Qm9keURlc2NyaXB0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5ib2R5Rm9ybWF0ICYmICh0eXBlb2YgcHJvcGVydGllcy5ib2R5Rm9ybWF0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdib2R5Rm9ybWF0Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYm9keUZvcm1hdCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJGT1JNXCIsXCJTVFJFQU1cIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdib2R5Rm9ybWF0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJvZHlGb3JtYXQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVxdWVzdENvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpBcGkuUmVxdWVzdENvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVxdWVzdENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpBcGkuUmVxdWVzdENvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBcGlSZXF1ZXN0Q29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0FwaV9SZXF1ZXN0Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUmVxdWVzdFBhdGgnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlcXVlc3RQYXRoKSxcbiAgICAgICdSZXF1ZXN0TW9kZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVxdWVzdE1vZGUpLFxuICAgICAgJ1JlcXVlc3RQcm90b2NvbCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVxdWVzdFByb3RvY29sKSxcbiAgICAgICdSZXF1ZXN0SHR0cE1ldGhvZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVxdWVzdEh0dHBNZXRob2QpLFxuICAgICAgJ1Bvc3RCb2R5RGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvc3RCb2R5RGVzY3JpcHRpb24pLFxuICAgICAgJ0JvZHlGb3JtYXQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJvZHlGb3JtYXQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQXBpIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UGFyYW1ldGVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZWd1bGFyRXhwcmVzc2lvbjogVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBvZiB0aGUgcGFyYW1ldGVyIHdoZW4gaXQgaXMgU3RyaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVndWxhckV4cHJlc3Npb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcGFyYW1ldGVyVHlwZTogVGhlIHR5cGUgb2YgdGhlIHBhcmFtZXRlclxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFyYW1ldGVyVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgQVBJLCBsZXNzIHRoYW4gMTgwIGNoYXJhY3RlcnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBqc29uU2NoZW1lOiBUaGUganNvbiBzY2hlbWUgb2YgdGhlIHBhcmFtZXRlciB3aGVuIGl0IGlzIFN0cmluZy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGpzb25TY2hlbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYXBpUGFyYW1ldGVyTmFtZTogVGhlIG5hbWUgb2YgdGhlIHJlcXVlc3QgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYXBpUGFyYW1ldGVyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVudW1WYWx1ZTogQWxsb3dlZCBwYXJhbWV0ZXIgdmFsdWUsIHNwbGl0IHdpdGggJywnIGxpa2UgXCIxLDIsMyw0XCJcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVudW1WYWx1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtaW5MZW5ndGg6IFRoZSBtaW4gbGVuZ3RoIG9mIHRoZSBwYXJhbWV0ZXIgd2hlbiBpdCBpcyBTdHJpbmcuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtaW5MZW5ndGg/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWF4VmFsdWU6IFRoZSBtYXggdmFsdWUgb2YgdGhlIHBhcmFtZXRlciB3aGVuIGl0IGlzIEludCwgTG9uZywgRmxvYXQgb3IgRG91YmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4VmFsdWU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWF4TGVuZ3RoOiBUaGUgbWF4IGxlbmd0aCBvZiB0aGUgcGFyYW1ldGVyIHdoZW4gaXQgaXMgU3RyaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4TGVuZ3RoPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRlbW9WYWx1ZTogVGhlIGRlbW8gdmFsdWUgb2YgdGhlIHJlcXVlc3QgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVtb1ZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRlZmF1bHRWYWx1ZTogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIHJlcXVlc3QgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVmYXVsdFZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlcXVpcmVkOiBJZiByZXF1aXJlZC4gXCJSRVFVSVJFRFwiLCBcIk9QVElPTlwiXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXF1aXJlZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRvY09yZGVyOiBUaGUgb3JkZXIgb2YgdGhlIGRvYy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRvY09yZGVyPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1pblZhbHVlOiBUaGUgbWluIHZhbHVlIG9mIHRoZSBwYXJhbWV0ZXIgd2hlbiBpdCBpcyBJbnQsIExvbmcsIEZsb2F0IG9yIERvdWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1pblZhbHVlPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRvY1Nob3c6IFZpc2lhYmxpdHkgb2YgdGhlIERvYy4gXCJQVUJMSUNcIiBvciBcIlBSSVZBVEVcIlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZG9jU2hvdz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBsb2NhdGlvbjogVGhlIGxvY2F0aW9uIG9mIHRoZSByZXFlc3QgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbG9jYXRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJlcXVlc3RQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlcXVlc3RQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXBpX1JlcXVlc3RQYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWd1bGFyRXhwcmVzc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWd1bGFyRXhwcmVzc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFyYW1ldGVyVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wYXJhbWV0ZXJUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5wYXJhbWV0ZXJUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5wYXJhbWV0ZXJUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXJhbWV0ZXJUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGFyYW1ldGVyVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJTdHJpbmdcIixcIkludFwiLFwiTG9uZ1wiLFwiRmxvYXRcIixcIkRvdWJsZVwiLFwiQm9vbGVhblwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhcmFtZXRlclR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGFyYW1ldGVyVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2pzb25TY2hlbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuanNvblNjaGVtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBpUGFyYW1ldGVyTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hcGlQYXJhbWV0ZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcGlQYXJhbWV0ZXJOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFwaVBhcmFtZXRlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VudW1WYWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lbnVtVmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21pbkxlbmd0aCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5taW5MZW5ndGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heFZhbHVlJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1heFZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhMZW5ndGgnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWF4TGVuZ3RoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZW1vVmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVtb1ZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWZhdWx0VmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVmYXVsdFZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXF1aXJlZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZXF1aXJlZCkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVxdWlyZWQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlcXVpcmVkKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXF1aXJlZCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlcXVpcmVkLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlJFUVVJUkVEXCIsXCJPUFRJT05cIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXF1aXJlZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXF1aXJlZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9jT3JkZXInLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZG9jT3JkZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21pblZhbHVlJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1pblZhbHVlKSk7XG4gICAgaWYocHJvcGVydGllcy5kb2NTaG93ICYmICh0eXBlb2YgcHJvcGVydGllcy5kb2NTaG93KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkb2NTaG93Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZG9jU2hvdyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJQVUJMSUNcIixcIlBSSVZBVEVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkb2NTaG93Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRvY1Nob3cpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvY2F0aW9uJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxvY2F0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5sb2NhdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMubG9jYXRpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvY2F0aW9uJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubG9jYXRpb24sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQk9EWVwiLFwiSEVBRFwiLFwiUVVFUllcIixcIlBBVEhcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2NhdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2NhdGlvbikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSZXF1ZXN0UGFyYW1ldGVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpBcGkuUmVxdWVzdFBhcmFtZXRlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlcXVlc3RQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkFwaS5SZXF1ZXN0UGFyYW1ldGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBcGlSZXF1ZXN0UGFyYW1ldGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NBcGlfUmVxdWVzdFBhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSZWd1bGFyRXhwcmVzc2lvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgJ1BhcmFtZXRlclR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhcmFtZXRlclR5cGUpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICAnSnNvblNjaGVtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuanNvblNjaGVtZSksXG4gICAgICAnQXBpUGFyYW1ldGVyTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXBpUGFyYW1ldGVyTmFtZSksXG4gICAgICAnRW51bVZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbnVtVmFsdWUpLFxuICAgICAgJ01pbkxlbmd0aCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWluTGVuZ3RoKSxcbiAgICAgICdNYXhWYWx1ZSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4VmFsdWUpLFxuICAgICAgJ01heExlbmd0aCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4TGVuZ3RoKSxcbiAgICAgICdEZW1vVmFsdWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlbW9WYWx1ZSksXG4gICAgICAnRGVmYXVsdFZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWZhdWx0VmFsdWUpLFxuICAgICAgJ1JlcXVpcmVkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXF1aXJlZCksXG4gICAgICAnRG9jT3JkZXInOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRvY09yZGVyKSxcbiAgICAgICdNaW5WYWx1ZSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWluVmFsdWUpLFxuICAgICAgJ0RvY1Nob3cnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRvY1Nob3cpLFxuICAgICAgJ0xvY2F0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2NhdGlvbiksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NBcGkge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VydmljZUFkZHJlc3M6IEJhY2tlbmQgc2VydmljZSBjYWxsIGFkZHJlc3MuIElmIHRoZSBjb21wbGV0ZSBiYWNrZW5kIHNlcnZpY2UgYWRkcmVzcyBpcyBodHRwOlxcL1xcL2FwaS5hLmNvbTo4MDgwXFwvb2JqZWN0XFwvYWRkP2tleTE9dmFsdWUxJmtleTI9dmFsdWUyLCBTZXJ2aWNlQWRkcmVzcyBjb3JyZXNwb25kcyB0byBodHRwOlxcL1xcL2FwaS5hLmNvbTo4MDgwLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmljZUFkZHJlc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25Db21wdXRlQ29uZmlnOiBUaGUgY29uZmlndXJhdGlvbiBvZiB0aGUgZnVuY3Rpb24gY29tcHV0ZS4gRnVuY3Rpb25Db21wdXRlQ29uZmlnIGlzIHJlcXVpcmVkIGlmIFNlcnZpY2VGdW5jdGlvbkNvbXB1dGVFbmFibGUgaXMgVFJVRS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZ1bmN0aW9uQ29tcHV0ZUNvbmZpZz86IFJvc0FwaS5GdW5jdGlvbkNvbXB1dGVDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtb2NrUmVzdWx0OiBUaGUgcmV0dXJuZWQgdmFsdWUgd2hlbiB1c2luZyBNb2NrIG1vZGVsLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbW9ja1Jlc3VsdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb250ZW50VHlwZVZhbHVlOiBDb250ZW50VHlwZVZhbHVlIGlzIHJlcXVpcmVkIGlmIENvbnRlbnRUeXBlQ2F0YWdvcnkgaXMgREVGQVVMVCBvciBDVVNUT00uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb250ZW50VHlwZVZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZwY0NvbmZpZzogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIFZQQy4gVnBjQ29uZmlnIGlzIHJlcXVpcmVkIGlmIFNlcnZpY2VWcGNFbmFibGUgaXMgVFJVRS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZwY0NvbmZpZz86IFJvc0FwaS5WcGNDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlVnBjRW5hYmxlOiBXaGV0aGVyIHRvIHVzZSBWUEMuIFwiVFJVRVwiIG9yIFwiRkFMU0VcIi4gRGVmYXVsdCBpcyBGQUxTRS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNlcnZpY2VWcGNFbmFibGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbW9ja1N0YXR1c0NvZGU6IFN0YXR1cyBjb2RlLCByZXR1cm5lZCBpbiB0aGUgZm9ybWF0IGNvbXBhdGlibGUgd2l0aCBIVFRQIDEuMSByZXNwb25zZSBzdGF0dXMgY29kZSBhbmQgaXRzIHN0YXR1c1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbW9ja1N0YXR1c0NvZGU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbW9ja0hlYWRlcnM6IEN1c3RvbSBNb2NrIHJlc3BvbnNlIGhlYWRlciByZWxhdGVkIGluZm9ybWF0aW9uIHdoZW4gTW9jayBpcyBlbmFibGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbW9ja0hlYWRlcnM/OiBBcnJheTxSb3NBcGkuTW9ja0hlYWRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VydmljZUh0dHBNZXRob2Q6IFRoZSBIVFRQIG1ldGhvZCB0byB0aGUgc2VydmljZS4gRGVmYXVsdCBpcyBHRVQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZXJ2aWNlSHR0cE1ldGhvZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlUGF0aDogQmFja2VuZCBzZXJ2aWNlIGNhbGwgcGF0aC4gSWYgdGhlIGNvbXBsZXRlIGJhY2tlbmQgc2VydmljZSBhZGRyZXNzIGlzIGh0dHA6XFwvXFwvYXBpLmEuY29tOjgwODBcXC9vYmplY3RcXC9hZGQ/a2V5MT12YWx1ZTEma2V5Mj12YWx1ZTIsIFNlcnZpY2VQYXRoIGNvcnJlc3BvbmRzIHRvIFxcL29iamVjdFxcL2FkZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNlcnZpY2VQYXRoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1vY2s6IFdoZXRoZXIgdG8gdXNlIE1vY2sgbW9kZWwuIFwiVFJVRVwiIG9yIFwiRkFMU0VcIi4gRGVmYXVsdCBpcyBGQUxTRS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1vY2s/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VydmljZVRpbWVPdXQ6IFRpbWUgb3V0IChtcykgd2hlbiB1c2luZyBzZXJ2aWNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmljZVRpbWVPdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VydmljZVByb3RvY29sOiBCYWNrZW5kIHNlcnZpY2UgcHJvdG9jb2wgdHlwZSwgd2hpY2ggbXVzdCBiZSBIVFRQLCBIVFRQUyBvciBGdW5jdGlvbkNvbXB1dGUgY3VycmVudGx5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmljZVByb3RvY29sPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbnRlbnRUeXBlQ2F0YWdvcnk6IFNwZWNpZnkgaG93IHRvIGRldGVybWluZSBDb250ZW50VHlwZSBoZWFkZXIgd2hlbiB1c2luZyBzZXJ2aWNlLiBcIkRFRkFVTFRcIiB0byB1c2UgQVBJIEdhdGV3YXkncyBkZWZhdWx0IHZhbHVlLiBcIkNVU1RPTVwiIHRvIHVzZSBzZWxmIGRlZmluZWQgdmFsdWUuIFwiQ0xJRU5UXCIgdG8gdXNlIGNsaWVudCdzIENvbnRlbnRUeXBlIGhlYWRlci4gRGVmYXVsdCBpcyBDTElFTlQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb250ZW50VHlwZUNhdGFnb3J5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgU2VydmljZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTZXJ2aWNlQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXBpX1NlcnZpY2VDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VBZGRyZXNzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VBZGRyZXNzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdW5jdGlvbkNvbXB1dGVDb25maWcnLCBSb3NBcGlfRnVuY3Rpb25Db21wdXRlQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZnVuY3Rpb25Db21wdXRlQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2NrUmVzdWx0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1vY2tSZXN1bHQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRlbnRUeXBlVmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGVudFR5cGVWYWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjQ29uZmlnJywgUm9zQXBpX1ZwY0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZwY0NvbmZpZykpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VydmljZVZwY0VuYWJsZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuc2VydmljZVZwY0VuYWJsZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVZwY0VuYWJsZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VWcGNFbmFibGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiVFJVRVwiLFwiRkFMU0VcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlVnBjRW5hYmxlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VWcGNFbmFibGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vY2tTdGF0dXNDb2RlJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1vY2tTdGF0dXNDb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2NrSGVhZGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0FwaV9Nb2NrSGVhZGVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5tb2NrSGVhZGVycykpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VydmljZUh0dHBNZXRob2QgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNlcnZpY2VIdHRwTWV0aG9kKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlSHR0cE1ldGhvZCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VIdHRwTWV0aG9kLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkdFVFwiLFwiUE9TVFwiLFwiREVMRVRFXCIsXCJQVVRcIixcIkhFQURcIixcIlRSQUNFXCIsXCJQQVRDSFwiLFwiQ09OTkVDVFwiLFwiT1BUSU9OU1wiLFwiQU5ZXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZUh0dHBNZXRob2QnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZUh0dHBNZXRob2QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VQYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VQYXRoKSk7XG4gICAgaWYocHJvcGVydGllcy5tb2NrICYmICh0eXBlb2YgcHJvcGVydGllcy5tb2NrKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2NrJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubW9jayxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJUUlVFXCIsXCJGQUxTRVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vY2snLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW9jaykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVRpbWVPdXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuc2VydmljZVRpbWVPdXQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlcnZpY2VQcm90b2NvbCAmJiAodHlwZW9mIHByb3BlcnRpZXMuc2VydmljZVByb3RvY29sKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlUHJvdG9jb2wnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zZXJ2aWNlUHJvdG9jb2wsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSFRUUFwiLFwiSFRUUFNcIixcIkZ1bmN0aW9uQ29tcHV0ZVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VQcm90b2NvbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlUHJvdG9jb2wpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNvbnRlbnRUeXBlQ2F0YWdvcnkgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNvbnRlbnRUeXBlQ2F0YWdvcnkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRlbnRUeXBlQ2F0YWdvcnknLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jb250ZW50VHlwZUNhdGFnb3J5LFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkRFRkFVTFRcIixcIkNVU1RPTVwiLFwiQ0xJRU5UXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGVudFR5cGVDYXRhZ29yeScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb250ZW50VHlwZUNhdGFnb3J5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlNlcnZpY2VDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXBpLlNlcnZpY2VDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNlcnZpY2VDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXBpLlNlcnZpY2VDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQXBpU2VydmljZUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NBcGlfU2VydmljZUNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1NlcnZpY2VBZGRyZXNzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlQWRkcmVzcyksXG4gICAgICAnRnVuY3Rpb25Db21wdXRlQ29uZmlnJzogcm9zQXBpRnVuY3Rpb25Db21wdXRlQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZnVuY3Rpb25Db21wdXRlQ29uZmlnKSxcbiAgICAgICdNb2NrUmVzdWx0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tb2NrUmVzdWx0KSxcbiAgICAgICdDb250ZW50VHlwZVZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb250ZW50VHlwZVZhbHVlKSxcbiAgICAgICdWcGNDb25maWcnOiByb3NBcGlWcGNDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNDb25maWcpLFxuICAgICAgJ1NlcnZpY2VWcGNFbmFibGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VWcGNFbmFibGUpLFxuICAgICAgJ01vY2tTdGF0dXNDb2RlJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tb2NrU3RhdHVzQ29kZSksXG4gICAgICAnTW9ja0hlYWRlcnMnOiByb3MubGlzdE1hcHBlcihyb3NBcGlNb2NrSGVhZGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5tb2NrSGVhZGVycyksXG4gICAgICAnU2VydmljZUh0dHBNZXRob2QnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VIdHRwTWV0aG9kKSxcbiAgICAgICdTZXJ2aWNlUGF0aCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZVBhdGgpLFxuICAgICAgJ01vY2snOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1vY2spLFxuICAgICAgJ1NlcnZpY2VUaW1lT3V0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlVGltZU91dCksXG4gICAgICAnU2VydmljZVByb3RvY29sJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlUHJvdG9jb2wpLFxuICAgICAgJ0NvbnRlbnRUeXBlQ2F0YWdvcnknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbnRlbnRUeXBlQ2F0YWdvcnkpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQXBpIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlUGFyYW1ldGVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXJhbWV0ZXJUeXBlOiBUaGUgdHlwZSBvZiB0aGUgcGFyYW1ldGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFyYW1ldGVyVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNlcnZpY2VQYXJhbWV0ZXJOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZXJ2aWNlUGFyYW1ldGVyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGxvY2F0aW9uOiBUaGUgbG9jYXRpb24gb2YgdGhlIHBhcmFtZXRlclxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbG9jYXRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFNlcnZpY2VQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNlcnZpY2VQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXBpX1NlcnZpY2VQYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXJhbWV0ZXJUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBhcmFtZXRlclR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBhcmFtZXRlclR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBhcmFtZXRlclR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhcmFtZXRlclR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wYXJhbWV0ZXJUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlNUUklOR1wiLFwiTlVNQkVSXCIsXCJCT09MRUFOXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFyYW1ldGVyVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXJhbWV0ZXJUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlUGFyYW1ldGVyTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlUGFyYW1ldGVyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVBhcmFtZXRlck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZVBhcmFtZXRlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvY2F0aW9uJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxvY2F0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5sb2NhdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMubG9jYXRpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvY2F0aW9uJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubG9jYXRpb24sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQk9EWVwiLFwiSEVBRFwiLFwiUVVFUllcIixcIlBBVEhcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2NhdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2NhdGlvbikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJTZXJ2aWNlUGFyYW1ldGVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpBcGkuU2VydmljZVBhcmFtZXRlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNlcnZpY2VQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkFwaS5TZXJ2aWNlUGFyYW1ldGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBcGlTZXJ2aWNlUGFyYW1ldGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NBcGlfU2VydmljZVBhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQYXJhbWV0ZXJUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXJhbWV0ZXJUeXBlKSxcbiAgICAgICdTZXJ2aWNlUGFyYW1ldGVyTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZVBhcmFtZXRlck5hbWUpLFxuICAgICAgJ0xvY2F0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2NhdGlvbiksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NBcGkge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VQYXJhbWV0ZXJzTWFwUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlcXVlc3RQYXJhbWV0ZXJOYW1lOiBUaGUgY29ycmVzcG9uZGluZyByZXF1ZXN0IHBhcmFtZXRlciwgc3lzdGVtIHBhcmFtZXRlciBvciBjb25zdCBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXF1ZXN0UGFyYW1ldGVyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNlcnZpY2VQYXJhbWV0ZXJOYW1lOiBUaGUgY29ycmVzcG9uZGluZyBzZXJ2aWNlIHBhcmFtZXRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNlcnZpY2VQYXJhbWV0ZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTZXJ2aWNlUGFyYW1ldGVyc01hcFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTZXJ2aWNlUGFyYW1ldGVyc01hcFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FwaV9TZXJ2aWNlUGFyYW1ldGVyc01hcFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVxdWVzdFBhcmFtZXRlck5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVxdWVzdFBhcmFtZXRlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcXVlc3RQYXJhbWV0ZXJOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlcXVlc3RQYXJhbWV0ZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlUGFyYW1ldGVyTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlUGFyYW1ldGVyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVBhcmFtZXRlck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZVBhcmFtZXRlck5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU2VydmljZVBhcmFtZXRlcnNNYXBQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXBpLlNlcnZpY2VQYXJhbWV0ZXJzTWFwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTZXJ2aWNlUGFyYW1ldGVyc01hcFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpBcGkuU2VydmljZVBhcmFtZXRlcnNNYXBgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQXBpU2VydmljZVBhcmFtZXRlcnNNYXBQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQXBpX1NlcnZpY2VQYXJhbWV0ZXJzTWFwUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUmVxdWVzdFBhcmFtZXRlck5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlcXVlc3RQYXJhbWV0ZXJOYW1lKSxcbiAgICAgICdTZXJ2aWNlUGFyYW1ldGVyTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZVBhcmFtZXRlck5hbWUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQXBpIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTeXN0ZW1QYXJhbWV0ZXJzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRlbW9WYWx1ZTogVGhlIGRlbW8gdmFsdWUgb2YgdGhlIHN5c3RlbSBwYXJhbWV0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkZW1vVmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIHRoZSBzeXN0ZW0gcGFyYW1ldGVyLCBsZXNzIHRoYW4gMTgwIGNoYXJhY3RlcnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXJhbWV0ZXJOYW1lOiBUaGUgc3lzdGVtIHBhcmFtZXRlciBuYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFyYW1ldGVyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNlcnZpY2VQYXJhbWV0ZXJOYW1lOiBUaGUgc2VydmljZSBwYXJhbWV0ZXIgbmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNlcnZpY2VQYXJhbWV0ZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbG9jYXRpb246IFRoZSBsb2NhdGlvbiBvZiB0aGUgc3lzdGVtIHBhcmFtZXRlci4gRGVmYXVsdCBpcyBIRUFELlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbG9jYXRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFN5c3RlbVBhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU3lzdGVtUGFyYW1ldGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FwaV9TeXN0ZW1QYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZW1vVmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVtb1ZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFyYW1ldGVyTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wYXJhbWV0ZXJOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5wYXJhbWV0ZXJOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5wYXJhbWV0ZXJOYW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXJhbWV0ZXJOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGFyYW1ldGVyTmFtZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJDYUNsaWVudElwXCIsXCJDYURvbWFpblwiLFwiQ2FSZXF1ZXN0SGFuZGxlVGltZVwiLFwiQ2FBcHBJZFwiLFwiQ2FSZXF1ZXN0SWRcIixcIkNhSHR0cFNjaGVtYVwiLFwiQ2FQcm94eVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhcmFtZXRlck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGFyYW1ldGVyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVBhcmFtZXRlck5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZVBhcmFtZXRlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VQYXJhbWV0ZXJOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VQYXJhbWV0ZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2NhdGlvbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5sb2NhdGlvbikpO1xuICAgIGlmKHByb3BlcnRpZXMubG9jYXRpb24gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmxvY2F0aW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2NhdGlvbicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmxvY2F0aW9uLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkJPRFlcIixcIkhFQURcIixcIlFVRVJZXCIsXCJQQVRIXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9jYXRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9jYXRpb24pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU3lzdGVtUGFyYW1ldGVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpBcGkuU3lzdGVtUGFyYW1ldGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU3lzdGVtUGFyYW1ldGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpBcGkuU3lzdGVtUGFyYW1ldGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBcGlTeXN0ZW1QYXJhbWV0ZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0FwaV9TeXN0ZW1QYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnRGVtb1ZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZW1vVmFsdWUpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICAnUGFyYW1ldGVyTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFyYW1ldGVyTmFtZSksXG4gICAgICAnU2VydmljZVBhcmFtZXRlck5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VQYXJhbWV0ZXJOYW1lKSxcbiAgICAgICdMb2NhdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9jYXRpb24pLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQXBpIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBUYWdzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FwaV9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUYWdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkFwaS5UYWdzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkFwaS5UYWdzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FwaVRhZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQXBpX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdWYWx1ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgJ0tleSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0FwaSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVnBjQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgaWQgb2YgdGhlIFZQQy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIGlkIG9mIHRoZSBpbnN0YW5jZSAoRUNTXFwvU0xCKS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb3J0OiBUaGUgcG9ydCBvZiB0aGUgVlBDLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9ydDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVnBjQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFZwY0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FwaV9WcGNDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wb3J0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlZwY0NvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpBcGkuVnBjQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBWcGNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXBpLlZwY0NvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBcGlWcGNDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQXBpX1ZwY0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZwY0lkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNJZCksXG4gICAgICAnSW5zdGFuY2VJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VJZCksXG4gICAgICAnUG9ydCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucG9ydCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NBcHBgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXBpZ2F0ZXdheS1hcHBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBcHBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwTmFtZTogVGhlIG5hbWUgb2YgdGhlIEFwcC5OZWVkIFs0LCAyNl0gQ2hpbmVzZVxcRW5nbGlzaFxcTnVtYmVyIGNoYXJhY3RlcnMgb3IgXCJfXCIsYW5kIHNob3VsZCBzdGFydCB3aXRoIENoaW5lc2VcXC9FbmdsaXNoIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwQ29kZTogVGhlIGFwcCBjb2RlIG9mIHRoZSBBUFAuXG4gICAgICogVGhlIGxlbmd0aCBpcyA4fjEyOCBFbmdsaXNoIGNoYXJhY3RlcnMsIHdoaWNoIGNhbiBjb250YWluIG51bWJlcnMsIHVuZGVyc2NvcmVzIChfKSBhbmQgZGFzaGVzICgtKSxhbmQgQXBwQ29kZSBpcyBnbG9iYWxseSB1bmlxdWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBwQ29kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBLZXk6IFRoZSBrZXkgb2YgdGhlIEFQUC4gXG4gICAgICogVGhlIGxlbmd0aCBpcyA4fjEyOCBFbmdsaXNoIGNoYXJhY3RlcnMsIHdoaWNoIGNhbiBjb250YWluIG51bWJlcnMsIHVuZGVyc2NvcmVzIChfKSBhbmQgZGFzaGVzICgtKSxcbiAgICAgKiBhbmQgQXBwS2V5IGlzIGdsb2JhbGx5IHVuaXF1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBLZXk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwU2VjcmV0OiBUaGUgc2VjcmV0IG9mIHRoZSBBUFAuIFxuICAgICAqIFRoZSBsZW5ndGggaXMgOH4xMjggRW5nbGlzaCBjaGFyYWN0ZXJzLCB3aGljaCBjYW4gY29udGFpbiBudW1iZXJzLCB1bmRlcnNjb3JlcyAoXykgYW5kIGRhc2hlcyAoLSkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBwU2VjcmV0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgQXBwLCBsZXNzIHRoYW4gMTgwIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gYXBwLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGFwcC4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NBcHAuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQXBwUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FwcFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FwcFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuYXBwQ29kZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuYXBwQ29kZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwQ29kZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5hcHBDb2RlLFxuICAgICAgICAgIHJlZzogL15bLV9hLXpBLVowLTldezgsMTI4fSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBDb2RlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFwcENvZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5hcHBLZXkgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmFwcEtleSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwS2V5Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmFwcEtleSxcbiAgICAgICAgICByZWc6IC9eWy1fYS16QS1aMC05XXs4LDEyOH0kL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwS2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFwcEtleSkpO1xuICAgIGlmKHByb3BlcnRpZXMuYXBwU2VjcmV0ICYmICh0eXBlb2YgcHJvcGVydGllcy5hcHBTZWNyZXQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcFNlY3JldCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5hcHBTZWNyZXQsXG4gICAgICAgICAgcmVnOiAvXlstX2EtekEtWjAtOV17OCwxMjh9JC9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcFNlY3JldCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hcHBTZWNyZXQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZ3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YWdzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFncykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFncy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MubGlzdFZhbGlkYXRvcihSb3NBcHBfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy50YWdzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFwcE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXBwTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBcHBQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXBwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBcHBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXBwYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FwcFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQXBwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FwcE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwcE5hbWUpLFxuICAgICAgJ0FwcENvZGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwcENvZGUpLFxuICAgICAgJ0FwcEtleSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXBwS2V5KSxcbiAgICAgICdBcHBTZWNyZXQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwcFNlY3JldCksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgICdUYWdzJzogcm9zLmxpc3RNYXBwZXIocm9zQXBwVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpBcGlHYXRld2F5OjpBcHBgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhbiBhcHBsaWNhdGlvbi4gQmVmb3JlIHlvdSBjYWxsIGEgdGhpcmQtcGFydHkgQVBJLCB5b3UgbXVzdCBjcmVhdGUgYW4gYXBwbGljYXRpb24gYW5kIHVzZSB0aGUgYXBwbGljYXRpb24gYXMgYW4gaWRlbnRpdHkgdG8gY2FsbCB0aGUgQVBJLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBBcHBgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktYXBwXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBcHAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkFwaUdhdGV3YXk6OkFwcFwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcHBDb2RlOiBUaGUgY29kZSBvZiB0aGUgQVBQLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBwQ29kZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcHBJZDogVGhlIGlkIG9mIHRoZSBjcmVhdGVkIEFQUFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXBwS2V5OiBUaGUga2V5IG9mIHRoZSBBUFBcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwcEtleTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcHBTZWNyZXQ6IFRoZSBzZWNyZXQgb2YgdGhlIEFQUFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBwU2VjcmV0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRhZ3M6IFRhZ3Mgb2YgYXBwXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYWdzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgQXBwLk5lZWQgWzQsIDI2XSBDaGluZXNlXFxFbmdsaXNoXFxOdW1iZXIgY2hhcmFjdGVycyBvciBcIl9cIixhbmQgc2hvdWxkIHN0YXJ0IHdpdGggQ2hpbmVzZVxcL0VuZ2xpc2ggY2hhcmFjdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwQ29kZTogVGhlIGFwcCBjb2RlIG9mIHRoZSBBUFAuXG4gICAgICogVGhlIGxlbmd0aCBpcyA4fjEyOCBFbmdsaXNoIGNoYXJhY3RlcnMsIHdoaWNoIGNhbiBjb250YWluIG51bWJlcnMsIHVuZGVyc2NvcmVzIChfKSBhbmQgZGFzaGVzICgtKSxhbmQgQXBwQ29kZSBpcyBnbG9iYWxseSB1bmlxdWUuXG4gICAgICovXG4gICAgcHVibGljIGFwcENvZGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBLZXk6IFRoZSBrZXkgb2YgdGhlIEFQUC4gXG4gICAgICogVGhlIGxlbmd0aCBpcyA4fjEyOCBFbmdsaXNoIGNoYXJhY3RlcnMsIHdoaWNoIGNhbiBjb250YWluIG51bWJlcnMsIHVuZGVyc2NvcmVzIChfKSBhbmQgZGFzaGVzICgtKSxcbiAgICAgKiBhbmQgQXBwS2V5IGlzIGdsb2JhbGx5IHVuaXF1ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwS2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwU2VjcmV0OiBUaGUgc2VjcmV0IG9mIHRoZSBBUFAuIFxuICAgICAqIFRoZSBsZW5ndGggaXMgOH4xMjggRW5nbGlzaCBjaGFyYWN0ZXJzLCB3aGljaCBjYW4gY29udGFpbiBudW1iZXJzLCB1bmRlcnNjb3JlcyAoXykgYW5kIGRhc2hlcyAoLSkuXG4gICAgICovXG4gICAgcHVibGljIGFwcFNlY3JldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgQXBwLCBsZXNzIHRoYW4gMTgwIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gYXBwLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGFwcC4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdzOiBSb3NBcHAuVGFnc1Byb3BlcnR5W10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQXBwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBcHAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFwcENvZGUgPSB0aGlzLmdldEF0dCgnQXBwQ29kZScpO1xuICAgICAgICB0aGlzLmF0dHJBcHBJZCA9IHRoaXMuZ2V0QXR0KCdBcHBJZCcpO1xuICAgICAgICB0aGlzLmF0dHJBcHBLZXkgPSB0aGlzLmdldEF0dCgnQXBwS2V5Jyk7XG4gICAgICAgIHRoaXMuYXR0ckFwcFNlY3JldCA9IHRoaXMuZ2V0QXR0KCdBcHBTZWNyZXQnKTtcbiAgICAgICAgdGhpcy5hdHRyVGFncyA9IHRoaXMuZ2V0QXR0KCdUYWdzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFwcE5hbWUgPSBwcm9wcy5hcHBOYW1lO1xuICAgICAgICB0aGlzLmFwcENvZGUgPSBwcm9wcy5hcHBDb2RlO1xuICAgICAgICB0aGlzLmFwcEtleSA9IHByb3BzLmFwcEtleTtcbiAgICAgICAgdGhpcy5hcHBTZWNyZXQgPSBwcm9wcy5hcHBTZWNyZXQ7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50YWdzID0gcHJvcHMudGFncztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhcHBOYW1lOiB0aGlzLmFwcE5hbWUsXG4gICAgICAgICAgICBhcHBDb2RlOiB0aGlzLmFwcENvZGUsXG4gICAgICAgICAgICBhcHBLZXk6IHRoaXMuYXBwS2V5LFxuICAgICAgICAgICAgYXBwU2VjcmV0OiB0aGlzLmFwcFNlY3JldCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBcHBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NBcHAge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhZ3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXBwX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlRhZ3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXBwLlRhZ3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXBwLlRhZ3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQXBwVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NBcHBfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICAnS2V5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQXV0aG9yaXphdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hcGlnYXRld2F5LWF1dGhvcml6YXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBdXRob3JpemF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwaUlkczogQVBJcyB0byBhdXRob3JpemUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBpSWRzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcElkczogQVBQcyBhcmUgYXV0aG9yaXplZCB0byBBUElzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcElkczogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgaWQgb2YgdGhlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdGFnZU5hbWU6IEF1dGhvcml6ZSBpbiB0aGlzIHN0YWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0YWdlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dGhWYWxpZFRpbWU6IFRoZSB0aW1lIChVVEMpIHdoZW4gdGhlIGF1dGhvcml6YXRpb24gZXhwaXJlcy4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgZW1wdHksIHRoZSBhdXRob3JpemF0aW9uIGRvZXMgbm90IGV4cGlyZS5cbiAgICAgKiBQYXR0ZXJuOiBZWVlZLU1NLUREVGhoOm1tOnNzWlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dGhWYWxpZFRpbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIHRoZSBhdXRob3JpemF0aW9uLCBsZXNzIHRoYW4gMTgwIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQXV0aG9yaXphdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBdXRob3JpemF0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXV0aG9yaXphdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBpZihwcm9wZXJ0aWVzLmF1dGhWYWxpZFRpbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmF1dGhWYWxpZFRpbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2F1dGhWYWxpZFRpbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYXV0aFZhbGlkVGltZSxcbiAgICAgICAgICByZWc6IC9eXFxkezR9LVxcZHsyfS1cXGR7Mn1UXFxkezJ9OlxcZHsyfTpcXGR7Mn1aJC9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2F1dGhWYWxpZFRpbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXV0aFZhbGlkVGltZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhZ2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0YWdlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RhZ2VOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5zdGFnZU5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YWdlTmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN0YWdlTmFtZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJURVNUXCIsXCJSRUxFQVNFXCIsXCJQUkVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFnZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhZ2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcGlJZHMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYXBpSWRzKSk7XG4gICAgaWYocHJvcGVydGllcy5hcGlJZHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5hcGlJZHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5hcGlJZHMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcGlJZHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYXBpSWRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcGlJZHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmFwaUlkcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwSWRzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFwcElkcykpO1xuICAgIGlmKHByb3BlcnRpZXMuYXBwSWRzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuYXBwSWRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuYXBwSWRzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwSWRzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmFwcElkcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwSWRzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5hcHBJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0F1dGhvcml6YXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QXV0aG9yaXphdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQXV0aG9yaXphdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpBdXRob3JpemF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0F1dGhvcml6YXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0F1dGhvcml6YXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQXBpSWRzJzogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuYXBpSWRzKSxcbiAgICAgICdBcHBJZHMnOiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5hcHBJZHMpLFxuICAgICAgJ0dyb3VwSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwSWQpLFxuICAgICAgJ1N0YWdlTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhZ2VOYW1lKSxcbiAgICAgICdBdXRoVmFsaWRUaW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hdXRoVmFsaWRUaW1lKSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFwaUdhdGV3YXk6OkF1dGhvcml6YXRpb25gLCB3aGljaCBpcyB1c2VkIHRvIGF1dGhvcml6ZSBhcHBsaWNhdGlvbnMgdG8gY2FsbCBBUElzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBBdXRob3JpemF0aW9uYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hcGlnYXRld2F5LWF1dGhvcml6YXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0F1dGhvcml6YXRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkFwaUdhdGV3YXk6OkF1dGhvcml6YXRpb25cIjtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwaUlkczogQVBJcyB0byBhdXRob3JpemUuXG4gICAgICovXG4gICAgcHVibGljIGFwaUlkczogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBJZHM6IEFQUHMgYXJlIGF1dGhvcml6ZWQgdG8gQVBJcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwSWRzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwSWQ6IFRoZSBpZCBvZiB0aGUgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdGFnZU5hbWU6IEF1dGhvcml6ZSBpbiB0aGlzIHN0YWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFnZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRoVmFsaWRUaW1lOiBUaGUgdGltZSAoVVRDKSB3aGVuIHRoZSBhdXRob3JpemF0aW9uIGV4cGlyZXMuIElmIHRoaXMgcGFyYW1ldGVyIGlzIGVtcHR5LCB0aGUgYXV0aG9yaXphdGlvbiBkb2VzIG5vdCBleHBpcmUuXG4gICAgICogUGF0dGVybjogWVlZWS1NTS1ERFRoaDptbTpzc1pcbiAgICAgKi9cbiAgICBwdWJsaWMgYXV0aFZhbGlkVGltZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgYXV0aG9yaXphdGlvbiwgbGVzcyB0aGFuIDE4MCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0F1dGhvcml6YXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0F1dGhvcml6YXRpb24uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFwaUlkcyA9IHByb3BzLmFwaUlkcztcbiAgICAgICAgdGhpcy5hcHBJZHMgPSBwcm9wcy5hcHBJZHM7XG4gICAgICAgIHRoaXMuZ3JvdXBJZCA9IHByb3BzLmdyb3VwSWQ7XG4gICAgICAgIHRoaXMuc3RhZ2VOYW1lID0gcHJvcHMuc3RhZ2VOYW1lO1xuICAgICAgICB0aGlzLmF1dGhWYWxpZFRpbWUgPSBwcm9wcy5hdXRoVmFsaWRUaW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXBpSWRzOiB0aGlzLmFwaUlkcyxcbiAgICAgICAgICAgIGFwcElkczogdGhpcy5hcHBJZHMsXG4gICAgICAgICAgICBncm91cElkOiB0aGlzLmdyb3VwSWQsXG4gICAgICAgICAgICBzdGFnZU5hbWU6IHRoaXMuc3RhZ2VOYW1lLFxuICAgICAgICAgICAgYXV0aFZhbGlkVGltZTogdGhpcy5hdXRoVmFsaWRUaW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0F1dGhvcml6YXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NCYWNrZW5kYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktYmFja2VuZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0JhY2tlbmRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFja2VuZE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBiYWNrZW5kIHNlcnZpY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFja2VuZE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiYWNrZW5kVHlwZTogVGhlIHR5cGUgdGhlIGJhY2tlbmQgc2VydmljZS4gQWxsb3dlZCB2YWx1ZXM6IEhUVFAsIFZQQywgRkNfRVZFTlQsIEZDX0VWRU5UX1YzLCBGQ19IVFRQLCBGQ19IVFRQX1YzLCBPU1MsIE1PQ0tcbiAgICAgKi9cbiAgICByZWFkb25seSBiYWNrZW5kVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGhlIGxpc3Qgb2YgdGFncyBpbiB0aGUgZm9ybSBvZiBrZXlcXC92YWx1ZSBwYWlycy4gWW91IGNhbiBkZWZpbmUgYSBtYXhpbXVtIG9mIDIwIHRhZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0JhY2tlbmQuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQmFja2VuZFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NCYWNrZW5kUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQmFja2VuZFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFja2VuZE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYmFja2VuZE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhY2tlbmROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJhY2tlbmROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFja2VuZFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYmFja2VuZFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmJhY2tlbmRUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5iYWNrZW5kVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFja2VuZFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5iYWNrZW5kVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJIVFRQXCIsXCJWUENcIixcIkZDX0VWRU5UXCIsXCJGQ19FVkVOVF9WM1wiLFwiRkNfSFRUUFwiLFwiRkNfSFRUUF9WM1wiLFwiT1NTXCIsXCJNT0NLXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFja2VuZFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYmFja2VuZFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZ3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YWdzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFncykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFncy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQmFja2VuZF9UYWdzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQmFja2VuZFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpCYWNrZW5kYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NCYWNrZW5kUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkJhY2tlbmRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQmFja2VuZFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQmFja2VuZFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdCYWNrZW5kTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYmFja2VuZE5hbWUpLFxuICAgICAgJ0JhY2tlbmRUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5iYWNrZW5kVHlwZSksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgICdUYWdzJzogcm9zLmxpc3RNYXBwZXIocm9zQmFja2VuZFRhZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGFncyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6QXBpR2F0ZXdheTo6QmFja2VuZGAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEJhY2tlbmRgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktYmFja2VuZFxuICovXG5leHBvcnQgY2xhc3MgUm9zQmFja2VuZCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6QXBpR2F0ZXdheTo6QmFja2VuZFwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBCYWNrZW5kSWQ6IFRoZSBJRCBvZiB0aGUgYmFja2VuZCBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQmFja2VuZElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiYWNrZW5kTmFtZTogVGhlIG5hbWUgb2YgdGhlIGJhY2tlbmQgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYmFja2VuZE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiYWNrZW5kVHlwZTogVGhlIHR5cGUgdGhlIGJhY2tlbmQgc2VydmljZS4gQWxsb3dlZCB2YWx1ZXM6IEhUVFAsIFZQQywgRkNfRVZFTlQsIEZDX0VWRU5UX1YzLCBGQ19IVFRQLCBGQ19IVFRQX1YzLCBPU1MsIE1PQ0tcbiAgICAgKi9cbiAgICBwdWJsaWMgYmFja2VuZFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRoZSBsaXN0IG9mIHRhZ3MgaW4gdGhlIGZvcm0gb2Yga2V5XFwvdmFsdWUgcGFpcnMuIFlvdSBjYW4gZGVmaW5lIGEgbWF4aW11bSBvZiAyMCB0YWdzLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdzOiBSb3NCYWNrZW5kLlRhZ3NQcm9wZXJ0eVtdIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0JhY2tlbmRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0JhY2tlbmQuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckJhY2tlbmRJZCA9IHRoaXMuZ2V0QXR0KCdCYWNrZW5kSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYmFja2VuZE5hbWUgPSBwcm9wcy5iYWNrZW5kTmFtZTtcbiAgICAgICAgdGhpcy5iYWNrZW5kVHlwZSA9IHByb3BzLmJhY2tlbmRUeXBlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFja2VuZE5hbWU6IHRoaXMuYmFja2VuZE5hbWUsXG4gICAgICAgICAgICBiYWNrZW5kVHlwZTogdGhpcy5iYWNrZW5kVHlwZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NCYWNrZW5kUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQmFja2VuZCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGFnc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogVGhlIHZhbHVlIG9mIHRoZSB0YWcuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogVGhlIGtleXdvcmQgb2YgdGhlIHRhZy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQmFja2VuZF9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGFnc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpCYWNrZW5kLlRhZ3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6QmFja2VuZC5UYWdzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0JhY2tlbmRUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0JhY2tlbmRfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICAnS2V5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQ3VzdG9tRG9tYWluYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktY3VzdG9tZG9tYWluXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ3VzdG9tRG9tYWluUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRvbWFpbk5hbWU6IEN1c3RvbSBkb21haW4gbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkb21haW5OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogVGhlIGlkIG9mIHRoZSBHcm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VydGlmaWNhdGVCb2R5OiBTU0wgY2VydGlmaWNhdGUgYm9keS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZXJ0aWZpY2F0ZUJvZHk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VydGlmaWNhdGVOYW1lOiBTU0wgY2VydGlmaWNhdGUgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZXJ0aWZpY2F0ZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VydGlmaWNhdGVQcml2YXRlS2V5OiBTU0wgY2VydGlmaWNhdGUga2V5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlcnRpZmljYXRlUHJpdmF0ZUtleT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDdXN0b21Eb21haW5Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tRG9tYWluUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ3VzdG9tRG9tYWluUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZXJ0aWZpY2F0ZUJvZHknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2VydGlmaWNhdGVCb2R5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkb21haW5OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZG9tYWluTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VydGlmaWNhdGVQcml2YXRlS2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNlcnRpZmljYXRlUHJpdmF0ZUtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VydGlmaWNhdGVOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNlcnRpZmljYXRlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmdyb3VwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ3VzdG9tRG9tYWluUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkN1c3RvbURvbWFpbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tRG9tYWluUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkN1c3RvbURvbWFpbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDdXN0b21Eb21haW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0N1c3RvbURvbWFpblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdEb21haW5OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kb21haW5OYW1lKSxcbiAgICAgICdHcm91cElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cElkKSxcbiAgICAgICdDZXJ0aWZpY2F0ZUJvZHknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNlcnRpZmljYXRlQm9keSksXG4gICAgICAnQ2VydGlmaWNhdGVOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZXJ0aWZpY2F0ZU5hbWUpLFxuICAgICAgJ0NlcnRpZmljYXRlUHJpdmF0ZUtleSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VydGlmaWNhdGVQcml2YXRlS2V5KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpBcGlHYXRld2F5OjpDdXN0b21Eb21haW5gLCB3aGljaCBpcyB1c2VkIHRvIGJpbmQgYSBjdXN0b20gZG9tYWluIG5hbWUgYW5kIHVwbG9hZCBhIFNlY3VyZSBTb2NrZXRzIExheWVyIChTU0wpIGNlcnRpZmljYXRlIHRvIGEgc3BlY2lmaWMgQVBJIGdyb3VwLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBDdXN0b21Eb21haW5gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktY3VzdG9tZG9tYWluXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDdXN0b21Eb21haW4gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkFwaUdhdGV3YXk6OkN1c3RvbURvbWFpblwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDZXJ0aWZpY2F0ZUlkOiBUaGUgaWQgb2YgdGhlIGNlcnRpZmljYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2VydGlmaWNhdGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZG9tYWluTmFtZTogQ3VzdG9tIGRvbWFpbiBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBkb21haW5OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogVGhlIGlkIG9mIHRoZSBHcm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlcnRpZmljYXRlQm9keTogU1NMIGNlcnRpZmljYXRlIGJvZHkuXG4gICAgICovXG4gICAgcHVibGljIGNlcnRpZmljYXRlQm9keTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlcnRpZmljYXRlTmFtZTogU1NMIGNlcnRpZmljYXRlIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGNlcnRpZmljYXRlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlcnRpZmljYXRlUHJpdmF0ZUtleTogU1NMIGNlcnRpZmljYXRlIGtleS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2VydGlmaWNhdGVQcml2YXRlS2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ3VzdG9tRG9tYWluUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDdXN0b21Eb21haW4uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNlcnRpZmljYXRlSWQgPSB0aGlzLmdldEF0dCgnQ2VydGlmaWNhdGVJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kb21haW5OYW1lID0gcHJvcHMuZG9tYWluTmFtZTtcbiAgICAgICAgdGhpcy5ncm91cElkID0gcHJvcHMuZ3JvdXBJZDtcbiAgICAgICAgdGhpcy5jZXJ0aWZpY2F0ZUJvZHkgPSBwcm9wcy5jZXJ0aWZpY2F0ZUJvZHk7XG4gICAgICAgIHRoaXMuY2VydGlmaWNhdGVOYW1lID0gcHJvcHMuY2VydGlmaWNhdGVOYW1lO1xuICAgICAgICB0aGlzLmNlcnRpZmljYXRlUHJpdmF0ZUtleSA9IHByb3BzLmNlcnRpZmljYXRlUHJpdmF0ZUtleTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb21haW5OYW1lOiB0aGlzLmRvbWFpbk5hbWUsXG4gICAgICAgICAgICBncm91cElkOiB0aGlzLmdyb3VwSWQsXG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZUJvZHk6IHRoaXMuY2VydGlmaWNhdGVCb2R5LFxuICAgICAgICAgICAgY2VydGlmaWNhdGVOYW1lOiB0aGlzLmNlcnRpZmljYXRlTmFtZSxcbiAgICAgICAgICAgIGNlcnRpZmljYXRlUHJpdmF0ZUtleTogdGhpcy5jZXJ0aWZpY2F0ZVByaXZhdGVLZXksXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0N1c3RvbURvbWFpblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0RlcGxveW1lbnRgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXBpZ2F0ZXdheS1kZXBsb3ltZW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRGVwbG95bWVudFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcGlJZDogVGhlIGlkIG9mIHRoZSBBUEkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBpSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgaWQgb2YgdGhlIEdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdGFnZU5hbWU6IEJpbmQgdHJhZmZpYyBpbiB0aGlzIHN0YWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0YWdlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgZGVwbG95bWVudCwgbGVzcyB0aGFuIDE4MCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhpc3RvcnlWZXJzaW9uOiBUaGUgaGlzdG9yeSB2ZXJzaW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhpc3RvcnlWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0RlcGxveW1lbnRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGVwbG95bWVudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RlcGxveW1lbnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFnZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3RhZ2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5zdGFnZU5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN0YWdlTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhZ2VOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3RhZ2VOYW1lLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlRFU1RcIixcIlJFTEVBU0VcIixcIlBSRVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YWdlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFnZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwaUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFwaUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcGlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hcGlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGlzdG9yeVZlcnNpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaGlzdG9yeVZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0RlcGxveW1lbnRQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6RGVwbG95bWVudGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGVwbG95bWVudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpEZXBsb3ltZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RlcGxveW1lbnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0RlcGxveW1lbnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQXBpSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwaUlkKSxcbiAgICAgICdHcm91cElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cElkKSxcbiAgICAgICdTdGFnZU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YWdlTmFtZSksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgICdIaXN0b3J5VmVyc2lvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGlzdG9yeVZlcnNpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFwaUdhdGV3YXk6OkRlcGxveW1lbnRgLCB3aGljaCBpcyB1c2VkIHRvIHB1Ymxpc2ggYW4gQVBJIHRvIGEgc3BlY2lmaWMgcnVudGltZSBlbnZpcm9ubWVudCwgb3Igc3dpdGNoIGEgcHVibGlzaGVkIEFQSSB0byBhIHNwZWNpZmljIHZlcnNpb24uXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYERlcGxveW1lbnRgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktZGVwbG95bWVudFxuICovXG5leHBvcnQgY2xhc3MgUm9zRGVwbG95bWVudCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6QXBpR2F0ZXdheTo6RGVwbG95bWVudFwiO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBpSWQ6IFRoZSBpZCBvZiB0aGUgQVBJLlxuICAgICAqL1xuICAgIHB1YmxpYyBhcGlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwSWQ6IFRoZSBpZCBvZiB0aGUgR3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdGFnZU5hbWU6IEJpbmQgdHJhZmZpYyBpbiB0aGlzIHN0YWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFnZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIGRlcGxveW1lbnQsIGxlc3MgdGhhbiAxODAgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBoaXN0b3J5VmVyc2lvbjogVGhlIGhpc3RvcnkgdmVyc2lvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgaGlzdG9yeVZlcnNpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NEZXBsb3ltZW50UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NEZXBsb3ltZW50LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hcGlJZCA9IHByb3BzLmFwaUlkO1xuICAgICAgICB0aGlzLmdyb3VwSWQgPSBwcm9wcy5ncm91cElkO1xuICAgICAgICB0aGlzLnN0YWdlTmFtZSA9IHByb3BzLnN0YWdlTmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmhpc3RvcnlWZXJzaW9uID0gcHJvcHMuaGlzdG9yeVZlcnNpb247XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXBpSWQ6IHRoaXMuYXBpSWQsXG4gICAgICAgICAgICBncm91cElkOiB0aGlzLmdyb3VwSWQsXG4gICAgICAgICAgICBzdGFnZU5hbWU6IHRoaXMuc3RhZ2VOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBoaXN0b3J5VmVyc2lvbjogdGhpcy5oaXN0b3J5VmVyc2lvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRGVwbG95bWVudFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0dyb3VwYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktZ3JvdXBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBHcm91cC5JdCBtdXN0IGJlIDQgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCB1bmRlcnNjb3JlcyAoXyksIGRhc2hlcyAoLSksIHNwYWNlcyBhbmQgZG90cyAoLiksIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiYXNlUGF0aDogVGhlIGJhc2UgcGF0aCBvZiBBUEkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFzZVBhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIHRoZSBHcm91cCwgbGVzcyB0aGFuIDE4MCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IEFQSSBnYXRld2F5IGluc3RhbmNlIElELiBGb3IgZXhhbXBsZSwgXCJhcGktc2hhcmVkLXZwYy0wMDFcIiBtZWFucyB2cGMgaW5zdGFuY2UsIHdoaWxlIFwiYXBpLXNoYXJlZC1jbGFzc2ljLTAwMVwiIG1lYW5zIGNsYXNzaWMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcm5ldEVuYWJsZTogRW5hYmxlIG9yIGRpc2FibGUgaW50ZXJuZXQgc3ViZG9tYWluLiBUcnVlIGZvciBlbmFibGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRFbmFibGU/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhc3N0aHJvdWdoSGVhZGVyczogUGFzcyB0aHJvdWdoIGhlYWRlcnMgc2V0dGluZy4gdmFsdWVzOlxuICAgICAqIGhvc3Q6IHBhc3MgdGhyb3VnaCBob3N0IGhlYWRlcnNcbiAgICAgKi9cbiAgICByZWFkb25seSBwYXNzdGhyb3VnaEhlYWRlcnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gZ3JvdXAuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgZ3JvdXAuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zR3JvdXAuVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSW50cmFuZXRFbmFibGU6IEVuYWJsZSBvciBkaXNhYmxlIFZQQyBpbnRyYW5ldCBzdWJkb21haW4uIFRydWUgZm9yIGVuYWJsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJbnRyYW5ldEVuYWJsZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zR3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJuZXRFbmFibGUnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmludGVybmV0RW5hYmxlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJbnRyYW5ldEVuYWJsZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMudnBjSW50cmFuZXRFbmFibGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Jhc2VQYXRoJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJhc2VQYXRoKSk7XG4gICAgaWYocHJvcGVydGllcy50YWdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zR3JvdXBfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy50YWdzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXNzdGhyb3VnaEhlYWRlcnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGFzc3Rocm91Z2hIZWFkZXJzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0dyb3VwUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6Okdyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpHcm91cGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnR3JvdXBOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cE5hbWUpLFxuICAgICAgJ0Jhc2VQYXRoJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5iYXNlUGF0aCksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgICdJbnN0YW5jZUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZUlkKSxcbiAgICAgICdJbnRlcm5ldEVuYWJsZSc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmludGVybmV0RW5hYmxlKSxcbiAgICAgICdQYXNzdGhyb3VnaEhlYWRlcnMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhc3N0aHJvdWdoSGVhZGVycyksXG4gICAgICAnVGFncyc6IHJvcy5saXN0TWFwcGVyKHJvc0dyb3VwVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICAgICdWcGNJbnRyYW5ldEVuYWJsZSc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZwY0ludHJhbmV0RW5hYmxlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpBcGlHYXRld2F5OjpHcm91cGAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIEFQSSBncm91cC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgR3JvdXBgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktZ3JvdXBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0dyb3VwIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpBcGlHYXRld2F5OjpHcm91cFwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHcm91cElkOiBUaGUgaWQgb2YgdGhlIGNyZWF0ZWQgR3JvdXAgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU3ViRG9tYWluOiBUaGUgc3ViIGRvbWFpbiBhc3NpZ25lZCB0byB0aGUgR3JvdXAgYnkgdGhlIHN5c3RlbVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3ViRG9tYWluOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRhZ3M6IFRhZ3Mgb2YgYXBwXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYWdzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBHcm91cC5JdCBtdXN0IGJlIDQgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCB1bmRlcnNjb3JlcyAoXyksIGRhc2hlcyAoLSksIHNwYWNlcyBhbmQgZG90cyAoLiksIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFzZVBhdGg6IFRoZSBiYXNlIHBhdGggb2YgQVBJLlxuICAgICAqL1xuICAgIHB1YmxpYyBiYXNlUGF0aDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgR3JvdXAsIGxlc3MgdGhhbiAxODAgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBBUEkgZ2F0ZXdheSBpbnN0YW5jZSBJRC4gRm9yIGV4YW1wbGUsIFwiYXBpLXNoYXJlZC12cGMtMDAxXCIgbWVhbnMgdnBjIGluc3RhbmNlLCB3aGlsZSBcImFwaS1zaGFyZWQtY2xhc3NpYy0wMDFcIiBtZWFucyBjbGFzc2ljIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRFbmFibGU6IEVuYWJsZSBvciBkaXNhYmxlIGludGVybmV0IHN1YmRvbWFpbi4gVHJ1ZSBmb3IgZW5hYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcm5ldEVuYWJsZTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXNzdGhyb3VnaEhlYWRlcnM6IFBhc3MgdGhyb3VnaCBoZWFkZXJzIHNldHRpbmcuIHZhbHVlczpcbiAgICAgKiBob3N0OiBwYXNzIHRocm91Z2ggaG9zdCBoZWFkZXJzXG4gICAgICovXG4gICAgcHVibGljIHBhc3N0aHJvdWdoSGVhZGVyczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGdyb3VwLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGdyb3VwLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcHVibGljIHRhZ3M6IFJvc0dyb3VwLlRhZ3NQcm9wZXJ0eVtdIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0ludHJhbmV0RW5hYmxlOiBFbmFibGUgb3IgZGlzYWJsZSBWUEMgaW50cmFuZXQgc3ViZG9tYWluLiBUcnVlIGZvciBlbmFibGUuXG4gICAgICovXG4gICAgcHVibGljIHZwY0ludHJhbmV0RW5hYmxlOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0dyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NHcm91cC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBJZCA9IHRoaXMuZ2V0QXR0KCdHcm91cElkJyk7XG4gICAgICAgIHRoaXMuYXR0clN1YkRvbWFpbiA9IHRoaXMuZ2V0QXR0KCdTdWJEb21haW4nKTtcbiAgICAgICAgdGhpcy5hdHRyVGFncyA9IHRoaXMuZ2V0QXR0KCdUYWdzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmdyb3VwTmFtZSA9IHByb3BzLmdyb3VwTmFtZTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IHByb3BzLmJhc2VQYXRoO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJZCA9IHByb3BzLmluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuaW50ZXJuZXRFbmFibGUgPSBwcm9wcy5pbnRlcm5ldEVuYWJsZTtcbiAgICAgICAgdGhpcy5wYXNzdGhyb3VnaEhlYWRlcnMgPSBwcm9wcy5wYXNzdGhyb3VnaEhlYWRlcnM7XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgICAgIHRoaXMudnBjSW50cmFuZXRFbmFibGUgPSBwcm9wcy52cGNJbnRyYW5ldEVuYWJsZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBncm91cE5hbWU6IHRoaXMuZ3JvdXBOYW1lLFxuICAgICAgICAgICAgYmFzZVBhdGg6IHRoaXMuYmFzZVBhdGgsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHRoaXMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGludGVybmV0RW5hYmxlOiB0aGlzLmludGVybmV0RW5hYmxlLFxuICAgICAgICAgICAgcGFzc3Rocm91Z2hIZWFkZXJzOiB0aGlzLnBhc3N0aHJvdWdoSGVhZGVycyxcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncyxcbiAgICAgICAgICAgIHZwY0ludHJhbmV0RW5hYmxlOiB0aGlzLnZwY0ludHJhbmV0RW5hYmxlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0dyb3VwIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBUYWdzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0dyb3VwX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlRhZ3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6R3JvdXAuVGFnc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpHcm91cC5UYWdzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0dyb3VwVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NHcm91cF9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVmFsdWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgICdLZXknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NJbnN0YW5jZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hcGlnYXRld2F5LWluc3RhbmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaHR0cHNQb2xpY3k6IEhUVFBTIHNlY3VyaXR5IHBvbGljeS4gVmFsaWQgdmFsdWVzOiBIVFRQUzJfVExTMV8wLCBIVFRQUzJfVExTMV8yLCBIVFRQUzFfMV9UTFMxXzBcbiAgICAgKi9cbiAgICByZWFkb25seSBodHRwc1BvbGljeTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlTmFtZTogSW5zdGFuY2UgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlU3BlYzogSW5zdGFuY2Ugc3BlY2lmaWNhdGlvbi4gRm9yIGV4YW1wbGU6IGFwaS5zMS5zbWFsbFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlU3BlYzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHpvbmVJZDogWm9uZSB0byB3aGljaCB0aGUgaW5zdGFuY2UgYmVsb25ncy4gRm9yIGV4YW1wbGU6IGNuLWJlaWppbmctTUFaMihmLGcpLlxuICAgICAqIFBsZWFzIGNhbGwgRGVzY3JpYmVab25lcyB0byBnZXQgc3VwcG9ydGVkIHpvbmUgbGlzdC5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRvUGF5OiBJbmRpY2F0ZXMgd2hldGhlciBhdXRvbWF0aWMgcGF5bWVudCBpcyBlbmFibGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogZmFsc2U6IEF1dG9tYXRpYyBwYXltZW50IGlzIGRpc2FibGVkLiBZb3UgbmVlZCB0byBnbyB0byBPcmRlcnMgdG8gbWFrZSB0aGUgcGF5bWVudCBvbmNlIGFuIG9yZGVyIGlzIGdlbmVyYXRlZC4gXG4gICAgICogdHJ1ZTogQXV0b21hdGljIHBheW1lbnQgaXMgZW5hYmxlZC4gVGhlIHBheW1lbnQgaXMgYXV0b21hdGljYWxseSBtYWRlLlxuICAgICAqIERlZmF1bHQgdHJ1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUGF5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGFyZ2VUeXBlOiBUaGUgYmlsbGluZyBtZXRob2Qgb2YgdGhlIHJvdXRlciBpbnRlcmZhY2UuIFZhbGlkIHZhbHVlczogUHJlUGFpZCAoU3Vic2NyaXB0aW9uKSwgUG9zdFBhaWQgKGRlZmF1bHQsIFBheS1Bcy1Zb3UtR28pLiBEZWZhdWx0IHZhbHVlOiBQb3N0UGFpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGVsZXRlIHRoZSBpbnN0YW5jZSBldmVuIGlmIGl0cyBzdGF0dXMgaXMgU1RBUlRfRkFJTEVELiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uRm9yY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGR1cmF0aW9uOiBQcmVwYWlkIHRpbWUgcGVyaW9kLiBJdCBjb3VsZCBiZSBmcm9tIDEgdG8gOSB3aGVuIFByaWNpbmdDeWNsZSBpcyBNb250aCwgb3IgMSB0byAzIHdoZW4gUHJpY2luZ0N5Y2xlIGlzIFllYXIuIERlZmF1bHQgdmFsdWUgaXMgMy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkdXJhdGlvbj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmljaW5nQ3ljbGU6IFVuaXQgb2YgdGhlIHBheW1lbnQgY3ljbGUuIEl0IGNvdWxkIGJlIE1vbnRoIChkZWZhdWx0KSBvciBZZWFyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaWNpbmdDeWNsZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NJbnN0YW5jZS5UYWdzUHJvcGVydHlbXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NJbnN0YW5jZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NJbnN0YW5jZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0luc3RhbmNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxldGlvbkZvcmNlJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5kZWxldGlvbkZvcmNlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZVNwZWMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VTcGVjKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZVNwZWMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VTcGVjKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwc1BvbGljeScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5odHRwc1BvbGljeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cHNQb2xpY3knLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaHR0cHNQb2xpY3kpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3pvbmVJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy56b25lSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3pvbmVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy56b25lSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByaWNpbmdDeWNsZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucHJpY2luZ0N5Y2xlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmljaW5nQ3ljbGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcmljaW5nQ3ljbGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiTW9udGhcIixcIlllYXJcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmljaW5nQ3ljbGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJpY2luZ0N5Y2xlKSk7XG4gICAgaWYocHJvcGVydGllcy5jaGFyZ2VUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5jaGFyZ2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjaGFyZ2VUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY2hhcmdlVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJQYXlBc1lvdUdvXCIsXCJQb3N0UGFpZFwiLFwiUGF5T25EZW1hbmRcIixcIlBvc3RwYWlkXCIsXCJQb3N0UGF5XCIsXCJQb3N0cGF5XCIsXCJQT1NUUEFZXCIsXCJQT1NUXCIsXCJTdWJzY3JpcHRpb25cIixcIlByZVBhaWRcIixcIlByZXBhaWRcIixcIlByZVBheVwiLFwiUHJlcGF5XCIsXCJQUkVQQVlcIixcIlBSRVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NoYXJnZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2hhcmdlVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZHVyYXRpb24gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmR1cmF0aW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkdXJhdGlvbicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmR1cmF0aW9uLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFsxLDIsMyw0LDUsNiw3LDgsOV0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkdXJhdGlvbicsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5kdXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXV0b1BheScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuYXV0b1BheSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFncyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRhZ3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50YWdzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWdzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0luc3RhbmNlX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMudGFncykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NJbnN0YW5jZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpJbnN0YW5jZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSW5zdGFuY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6SW5zdGFuY2VgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSW5zdGFuY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0luc3RhbmNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0h0dHBzUG9saWN5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5odHRwc1BvbGljeSksXG4gICAgICAnSW5zdGFuY2VOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpLFxuICAgICAgJ0luc3RhbmNlU3BlYyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VTcGVjKSxcbiAgICAgICdab25lSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnpvbmVJZCksXG4gICAgICAnQXV0b1BheSc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmF1dG9QYXkpLFxuICAgICAgJ0NoYXJnZVR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNoYXJnZVR5cGUpLFxuICAgICAgJ0RlbGV0aW9uRm9yY2UnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxldGlvbkZvcmNlKSxcbiAgICAgICdEdXJhdGlvbic6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZHVyYXRpb24pLFxuICAgICAgJ1ByaWNpbmdDeWNsZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpY2luZ0N5Y2xlKSxcbiAgICAgICdUYWdzJzogcm9zLmxpc3RNYXBwZXIocm9zSW5zdGFuY2VUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhZ3MpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFwaUdhdGV3YXk6Okluc3RhbmNlYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBkZWRpY2F0ZWQgaW5zdGFuY2UuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEluc3RhbmNlYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hcGlnYXRld2F5LWluc3RhbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NJbnN0YW5jZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6QXBpR2F0ZXdheTo6SW5zdGFuY2VcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXJuOiBUaGUgQWxpYmFiYSBDbG91ZCBSZXNvdXJjZSBOYW1lIChBUk4pLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXJuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEVncmVzc0lwdjZFbmFibGU6IFdoZXRoZXIgZW5hYmxlIGVncmVzcyBJUFY2LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRWdyZXNzSXB2NkVuYWJsZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnN0YW5jZUlkOiBJbnN0YW5jZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VUeXBlOiBJbnN0YW5jZSB0eXBlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEludGVybmV0RWdyZXNzQWRkcmVzczogSW50ZXJuZXQgZWdyZXNzIGRkZHJlc3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnRlcm5ldEVncmVzc0FkZHJlc3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU3VwcG9ydElwdjY6IFdoZXRoZXIgc3VwcG9ydCBJUFY2LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3VwcG9ydElwdjY6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVnBjRWdyZXNzQWRkcmVzczogVlBDIG5ldHdvcmsgZWdyZXNzIGFkZHJlc3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNFZ3Jlc3NBZGRyZXNzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZwY0ludHJhbmV0RW5hYmxlOiBXaGV0aGVyIGVuYWJsZSBWUEMgaW50cmFuZXQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNJbnRyYW5ldEVuYWJsZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWcGNTbGJJbnRyYW5ldEVuYWJsZTogV2hldGhlciBlbmFibGUgVlBDIFNMQiBpbnRyYW5ldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY1NsYkludHJhbmV0RW5hYmxlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBodHRwc1BvbGljeTogSFRUUFMgc2VjdXJpdHkgcG9saWN5LiBWYWxpZCB2YWx1ZXM6IEhUVFBTMl9UTFMxXzAsIEhUVFBTMl9UTFMxXzIsIEhUVFBTMV8xX1RMUzFfMFxuICAgICAqL1xuICAgIHB1YmxpYyBodHRwc1BvbGljeTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlTmFtZTogSW5zdGFuY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZVNwZWM6IEluc3RhbmNlIHNwZWNpZmljYXRpb24uIEZvciBleGFtcGxlOiBhcGkuczEuc21hbGxcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VTcGVjOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgem9uZUlkOiBab25lIHRvIHdoaWNoIHRoZSBpbnN0YW5jZSBiZWxvbmdzLiBGb3IgZXhhbXBsZTogY24tYmVpamluZy1NQVoyKGYsZykuXG4gICAgICogUGxlYXMgY2FsbCBEZXNjcmliZVpvbmVzIHRvIGdldCBzdXBwb3J0ZWQgem9uZSBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyB6b25lSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRvUGF5OiBJbmRpY2F0ZXMgd2hldGhlciBhdXRvbWF0aWMgcGF5bWVudCBpcyBlbmFibGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogZmFsc2U6IEF1dG9tYXRpYyBwYXltZW50IGlzIGRpc2FibGVkLiBZb3UgbmVlZCB0byBnbyB0byBPcmRlcnMgdG8gbWFrZSB0aGUgcGF5bWVudCBvbmNlIGFuIG9yZGVyIGlzIGdlbmVyYXRlZC4gXG4gICAgICogdHJ1ZTogQXV0b21hdGljIHBheW1lbnQgaXMgZW5hYmxlZC4gVGhlIHBheW1lbnQgaXMgYXV0b21hdGljYWxseSBtYWRlLlxuICAgICAqIERlZmF1bHQgdHJ1ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXV0b1BheTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGFyZ2VUeXBlOiBUaGUgYmlsbGluZyBtZXRob2Qgb2YgdGhlIHJvdXRlciBpbnRlcmZhY2UuIFZhbGlkIHZhbHVlczogUHJlUGFpZCAoU3Vic2NyaXB0aW9uKSwgUG9zdFBhaWQgKGRlZmF1bHQsIFBheS1Bcy1Zb3UtR28pLiBEZWZhdWx0IHZhbHVlOiBQb3N0UGFpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2hhcmdlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGVsZXRlIHRoZSBpbnN0YW5jZSBldmVuIGlmIGl0cyBzdGF0dXMgaXMgU1RBUlRfRkFJTEVELiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGlvbkZvcmNlOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGR1cmF0aW9uOiBQcmVwYWlkIHRpbWUgcGVyaW9kLiBJdCBjb3VsZCBiZSBmcm9tIDEgdG8gOSB3aGVuIFByaWNpbmdDeWNsZSBpcyBNb250aCwgb3IgMSB0byAzIHdoZW4gUHJpY2luZ0N5Y2xlIGlzIFllYXIuIERlZmF1bHQgdmFsdWUgaXMgMy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZHVyYXRpb246IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmljaW5nQ3ljbGU6IFVuaXQgb2YgdGhlIHBheW1lbnQgY3ljbGUuIEl0IGNvdWxkIGJlIE1vbnRoIChkZWZhdWx0KSBvciBZZWFyLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcmljaW5nQ3ljbGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdzOiBSb3NJbnN0YW5jZS5UYWdzUHJvcGVydHlbXSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NJbnN0YW5jZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zSW5zdGFuY2UuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFybiA9IHRoaXMuZ2V0QXR0KCdBcm4nKTtcbiAgICAgICAgdGhpcy5hdHRyRWdyZXNzSXB2NkVuYWJsZSA9IHRoaXMuZ2V0QXR0KCdFZ3Jlc3NJcHY2RW5hYmxlJyk7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWQgPSB0aGlzLmdldEF0dCgnSW5zdGFuY2VJZCcpO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZVR5cGUgPSB0aGlzLmdldEF0dCgnSW5zdGFuY2VUeXBlJyk7XG4gICAgICAgIHRoaXMuYXR0ckludGVybmV0RWdyZXNzQWRkcmVzcyA9IHRoaXMuZ2V0QXR0KCdJbnRlcm5ldEVncmVzc0FkZHJlc3MnKTtcbiAgICAgICAgdGhpcy5hdHRyU3VwcG9ydElwdjYgPSB0aGlzLmdldEF0dCgnU3VwcG9ydElwdjYnKTtcbiAgICAgICAgdGhpcy5hdHRyVnBjRWdyZXNzQWRkcmVzcyA9IHRoaXMuZ2V0QXR0KCdWcGNFZ3Jlc3NBZGRyZXNzJyk7XG4gICAgICAgIHRoaXMuYXR0clZwY0ludHJhbmV0RW5hYmxlID0gdGhpcy5nZXRBdHQoJ1ZwY0ludHJhbmV0RW5hYmxlJyk7XG4gICAgICAgIHRoaXMuYXR0clZwY1NsYkludHJhbmV0RW5hYmxlID0gdGhpcy5nZXRBdHQoJ1ZwY1NsYkludHJhbmV0RW5hYmxlJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmh0dHBzUG9saWN5ID0gcHJvcHMuaHR0cHNQb2xpY3k7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VOYW1lID0gcHJvcHMuaW5zdGFuY2VOYW1lO1xuICAgICAgICB0aGlzLmluc3RhbmNlU3BlYyA9IHByb3BzLmluc3RhbmNlU3BlYztcbiAgICAgICAgdGhpcy56b25lSWQgPSBwcm9wcy56b25lSWQ7XG4gICAgICAgIHRoaXMuYXV0b1BheSA9IHByb3BzLmF1dG9QYXk7XG4gICAgICAgIHRoaXMuY2hhcmdlVHlwZSA9IHByb3BzLmNoYXJnZVR5cGU7XG4gICAgICAgIHRoaXMuZGVsZXRpb25Gb3JjZSA9IHByb3BzLmRlbGV0aW9uRm9yY2U7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBwcm9wcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5wcmljaW5nQ3ljbGUgPSBwcm9wcy5wcmljaW5nQ3ljbGU7XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHR0cHNQb2xpY3k6IHRoaXMuaHR0cHNQb2xpY3ksXG4gICAgICAgICAgICBpbnN0YW5jZU5hbWU6IHRoaXMuaW5zdGFuY2VOYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2VTcGVjOiB0aGlzLmluc3RhbmNlU3BlYyxcbiAgICAgICAgICAgIHpvbmVJZDogdGhpcy56b25lSWQsXG4gICAgICAgICAgICBhdXRvUGF5OiB0aGlzLmF1dG9QYXksXG4gICAgICAgICAgICBjaGFyZ2VUeXBlOiB0aGlzLmNoYXJnZVR5cGUsXG4gICAgICAgICAgICBkZWxldGlvbkZvcmNlOiB0aGlzLmRlbGV0aW9uRm9yY2UsXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgIHByaWNpbmdDeWNsZTogdGhpcy5wcmljaW5nQ3ljbGUsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0luc3RhbmNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSW5zdGFuY2Uge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhZ3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSW5zdGFuY2VfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGFnc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpJbnN0YW5jZS5UYWdzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6Okluc3RhbmNlLlRhZ3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSW5zdGFuY2VUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0luc3RhbmNlX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdWYWx1ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgJ0tleSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0xvZ0NvbmZpZ2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hcGlnYXRld2F5LWxvZ2NvbmZpZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0xvZ0NvbmZpZ1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzbHNMb2dTdG9yZTogTG9nc3RvcmUgbmFtZSBvZiBTTFNcbiAgICAgKi9cbiAgICByZWFkb25seSBzbHNMb2dTdG9yZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNsc1Byb2plY3Q6IFByb2plY3QgbmFtZSBvZiBTTFNcbiAgICAgKi9cbiAgICByZWFkb25seSBzbHNQcm9qZWN0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zTG9nQ29uZmlnUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0xvZ0NvbmZpZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0xvZ0NvbmZpZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2xzTG9nU3RvcmUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2xzTG9nU3RvcmUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNsc0xvZ1N0b3JlICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2xzTG9nU3RvcmUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zbHNMb2dTdG9yZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Nsc0xvZ1N0b3JlJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNsc0xvZ1N0b3JlLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMyxcbiAgICAgICAgICAgIG1heDogNjMsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Nsc0xvZ1N0b3JlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNsc0xvZ1N0b3JlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzbHNQcm9qZWN0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNsc1Byb2plY3QpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNsc1Byb2plY3QgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zbHNQcm9qZWN0KSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc2xzUHJvamVjdCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Nsc1Byb2plY3QnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2xzUHJvamVjdC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDMsXG4gICAgICAgICAgICBtYXg6IDYzLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzbHNQcm9qZWN0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNsc1Byb2plY3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTG9nQ29uZmlnUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkxvZ0NvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTG9nQ29uZmlnUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OkxvZ0NvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NMb2dDb25maWdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0xvZ0NvbmZpZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdTbHNMb2dTdG9yZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2xzTG9nU3RvcmUpLFxuICAgICAgJ1Nsc1Byb2plY3QnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNsc1Byb2plY3QpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFwaUdhdGV3YXk6OkxvZ0NvbmZpZ2AsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgbG9nIGNvbmZpZ3VyYXRpb24uXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYExvZ0NvbmZpZ2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXBpZ2F0ZXdheS1sb2djb25maWdcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0xvZ0NvbmZpZyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6QXBpR2F0ZXdheTo6TG9nQ29uZmlnXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNsc0xvZ1N0b3JlOiBMb2dzdG9yZSBuYW1lIG9mIFNMU1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2xzTG9nU3RvcmU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2xzUHJvamVjdDogUHJvamVjdCBuYW1lIG9mIFNMU1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2xzUHJvamVjdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2xzTG9nU3RvcmU6IExvZ3N0b3JlIG5hbWUgb2YgU0xTXG4gICAgICovXG4gICAgcHVibGljIHNsc0xvZ1N0b3JlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2xzUHJvamVjdDogUHJvamVjdCBuYW1lIG9mIFNMU1xuICAgICAqL1xuICAgIHB1YmxpYyBzbHNQcm9qZWN0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTG9nQ29uZmlnUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NMb2dDb25maWcuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clNsc0xvZ1N0b3JlID0gdGhpcy5nZXRBdHQoJ1Nsc0xvZ1N0b3JlJyk7XG4gICAgICAgIHRoaXMuYXR0clNsc1Byb2plY3QgPSB0aGlzLmdldEF0dCgnU2xzUHJvamVjdCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5zbHNMb2dTdG9yZSA9IHByb3BzLnNsc0xvZ1N0b3JlO1xuICAgICAgICB0aGlzLnNsc1Byb2plY3QgPSBwcm9wcy5zbHNQcm9qZWN0O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNsc0xvZ1N0b3JlOiB0aGlzLnNsc0xvZ1N0b3JlLFxuICAgICAgICAgICAgc2xzUHJvamVjdDogdGhpcy5zbHNQcm9qZWN0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NMb2dDb25maWdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NQbHVnaW5gLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXBpZ2F0ZXdheS1wbHVnaW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NQbHVnaW5Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGx1Z2luRGF0YTogVGhlIGRlZmluaXRpb24gc3RhdGVtZW50IG9mIHRoZSBwbHVnLWluLiBQbHVnLWluIGRlZmluaXRpb24gc3RhdGVtZW50cyBpbiB0aGUgSlNPTiBhbmQgWUFNTCBmb3JtYXRzIGFyZSBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGx1Z2luRGF0YTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBsdWdpbk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwbHVnLWluIHRoYXQgeW91IHdhbnQgdG8gY3JlYXRlLiBJdCBjYW4gY29udGFpbiB1cHBlcmNhc2UgRW5nbGlzaCBsZXR0ZXJzLCBsb3dlcmNhc2UgRW5nbGlzaCBsZXR0ZXJzLCBDaGluZXNlIGNoYXJhY3RlcnMsIG51bWJlcnMsIGFuZCB1bmRlcnNjb3JlcyAoKS4gSXQgbXVzdCBiZSA0IHRvIDUwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW5ub3Qgc3RhcnQgd2l0aCBhbiB1bmRlcnNjb3JlICgpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBsdWdpbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwbHVnaW5UeXBlOiBUaGUgdHlwZSBvZiB0aGUgcGx1Zy1pbi4gVmFsaWQgdmFsdWVzOiBpcENvbnRyb2w6IGluZGljYXRlcyBJUCBhZGRyZXNzLWJhc2VkIGFjY2VzcyBjb250cm9sLiB0cmFmZmljQ29udHJvbDogaW5kaWNhdGVzIHRocm90dGxpbmcuIGJhY2tlbmRTaWduYXR1cmU6IGluZGljYXRlcyBiYWNrZW5kIHNpZ25hdHVyZS4gand0QXV0aDogaW5kaWNhdGVzIEpXVCAoT3BlbklkIENvbm5lY3QpLiBjb3JzOiBpbmRpY2F0ZXMgY3Jvc3Mtb3JpZ2luIHJlc291cmNlIGFjY2VzcyAoQ09SUykuIGNhY2hpbmc6IGluZGljYXRlcyBjYWNoaW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBsdWdpblR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBwbHVnLWluLCB3aGljaCBjYW5ub3QgZXhjZWVkIDIwMCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc1BsdWdpbi5UYWdzUHJvcGVydHlbXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NQbHVnaW5Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUGx1Z2luUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUGx1Z2luUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwbHVnaW5OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBsdWdpbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BsdWdpbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGx1Z2luTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BsdWdpbkRhdGEnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucGx1Z2luRGF0YSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGx1Z2luRGF0YScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wbHVnaW5EYXRhKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwbHVnaW5UeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBsdWdpblR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BsdWdpblR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGx1Z2luVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFncyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRhZ3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50YWdzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWdzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc1BsdWdpbl9UYWdzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zUGx1Z2luUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OlBsdWdpbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUGx1Z2luUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OlBsdWdpbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NQbHVnaW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1BsdWdpblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdQbHVnaW5EYXRhJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wbHVnaW5EYXRhKSxcbiAgICAgICdQbHVnaW5OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wbHVnaW5OYW1lKSxcbiAgICAgICdQbHVnaW5UeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wbHVnaW5UeXBlKSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgJ1RhZ3MnOiByb3MubGlzdE1hcHBlcihyb3NQbHVnaW5UYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhZ3MpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFwaUdhdGV3YXk6OlBsdWdpbmAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIEFQSSBHYXRld2F5IHBsdWctaW4uXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFBsdWdpbmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXBpZ2F0ZXdheS1wbHVnaW5cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1BsdWdpbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6QXBpR2F0ZXdheTo6UGx1Z2luXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHBsdWctaW4sIHdoaWNoIGNhbm5vdCBleGNlZWQgMjAwIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQbHVnaW5EYXRhOiBUaGUgZGVmaW5pdGlvbiBzdGF0ZW1lbnQgb2YgdGhlIHBsdWctaW4uIFBsdWctaW4gZGVmaW5pdGlvbiBzdGF0ZW1lbnRzIGluIHRoZSBKU09OIGFuZCBZQU1MIGZvcm1hdHMgYXJlIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBsdWdpbkRhdGE6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUGx1Z2luSWQ6IFRoZSBnZW5lcmF0ZWQgcGx1Z2luIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGx1Z2luSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUGx1Z2luTmFtZTogVGhlIG5hbWUgb2YgdGhlIHBsdWctaW4gdGhhdCB5b3Ugd2FudCB0byBjcmVhdGUuIEl0IGNhbiBjb250YWluIHVwcGVyY2FzZSBFbmdsaXNoIGxldHRlcnMsIGxvd2VyY2FzZSBFbmdsaXNoIGxldHRlcnMsIENoaW5lc2UgY2hhcmFjdGVycywgbnVtYmVycywgYW5kIHVuZGVyc2NvcmVzICgpLiBJdCBtdXN0IGJlIDQgdG8gNTAgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbm5vdCBzdGFydCB3aXRoIGFuIHVuZGVyc2NvcmUgKCkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQbHVnaW5OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBsdWdpblR5cGU6IFRoZSB0eXBlIG9mIHRoZSBwbHVnLWluLiBWYWxpZCB2YWx1ZXM6IGlwQ29udHJvbDogaW5kaWNhdGVzIElQIGFkZHJlc3MtYmFzZWQgYWNjZXNzIGNvbnRyb2wuIHRyYWZmaWNDb250cm9sOiBpbmRpY2F0ZXMgdGhyb3R0bGluZy4gYmFja2VuZFNpZ25hdHVyZTogaW5kaWNhdGVzIGJhY2tlbmQgc2lnbmF0dXJlLiBqd3RBdXRoOiBpbmRpY2F0ZXMgSldUIChPcGVuSWQgQ29ubmVjdCkuIGNvcnM6IGluZGljYXRlcyBjcm9zcy1vcmlnaW4gcmVzb3VyY2UgYWNjZXNzIChDT1JTKS4gY2FjaGluZzogaW5kaWNhdGVzIGNhY2hpbmcuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQbHVnaW5UeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwbHVnaW5EYXRhOiBUaGUgZGVmaW5pdGlvbiBzdGF0ZW1lbnQgb2YgdGhlIHBsdWctaW4uIFBsdWctaW4gZGVmaW5pdGlvbiBzdGF0ZW1lbnRzIGluIHRoZSBKU09OIGFuZCBZQU1MIGZvcm1hdHMgYXJlIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGx1Z2luRGF0YTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBsdWdpbk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwbHVnLWluIHRoYXQgeW91IHdhbnQgdG8gY3JlYXRlLiBJdCBjYW4gY29udGFpbiB1cHBlcmNhc2UgRW5nbGlzaCBsZXR0ZXJzLCBsb3dlcmNhc2UgRW5nbGlzaCBsZXR0ZXJzLCBDaGluZXNlIGNoYXJhY3RlcnMsIG51bWJlcnMsIGFuZCB1bmRlcnNjb3JlcyAoKS4gSXQgbXVzdCBiZSA0IHRvIDUwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW5ub3Qgc3RhcnQgd2l0aCBhbiB1bmRlcnNjb3JlICgpLlxuICAgICAqL1xuICAgIHB1YmxpYyBwbHVnaW5OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGx1Z2luVHlwZTogVGhlIHR5cGUgb2YgdGhlIHBsdWctaW4uIFZhbGlkIHZhbHVlczogaXBDb250cm9sOiBpbmRpY2F0ZXMgSVAgYWRkcmVzcy1iYXNlZCBhY2Nlc3MgY29udHJvbC4gdHJhZmZpY0NvbnRyb2w6IGluZGljYXRlcyB0aHJvdHRsaW5nLiBiYWNrZW5kU2lnbmF0dXJlOiBpbmRpY2F0ZXMgYmFja2VuZCBzaWduYXR1cmUuIGp3dEF1dGg6IGluZGljYXRlcyBKV1QgKE9wZW5JZCBDb25uZWN0KS4gY29yczogaW5kaWNhdGVzIGNyb3NzLW9yaWdpbiByZXNvdXJjZSBhY2Nlc3MgKENPUlMpLiBjYWNoaW5nOiBpbmRpY2F0ZXMgY2FjaGluZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGx1Z2luVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHBsdWctaW4sIHdoaWNoIGNhbm5vdCBleGNlZWQgMjAwIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnczogUm9zUGx1Z2luLlRhZ3NQcm9wZXJ0eVtdIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1BsdWdpblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zUGx1Z2luLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJEZXNjcmlwdGlvbiA9IHRoaXMuZ2V0QXR0KCdEZXNjcmlwdGlvbicpO1xuICAgICAgICB0aGlzLmF0dHJQbHVnaW5EYXRhID0gdGhpcy5nZXRBdHQoJ1BsdWdpbkRhdGEnKTtcbiAgICAgICAgdGhpcy5hdHRyUGx1Z2luSWQgPSB0aGlzLmdldEF0dCgnUGx1Z2luSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyUGx1Z2luTmFtZSA9IHRoaXMuZ2V0QXR0KCdQbHVnaW5OYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clBsdWdpblR5cGUgPSB0aGlzLmdldEF0dCgnUGx1Z2luVHlwZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5wbHVnaW5EYXRhID0gcHJvcHMucGx1Z2luRGF0YTtcbiAgICAgICAgdGhpcy5wbHVnaW5OYW1lID0gcHJvcHMucGx1Z2luTmFtZTtcbiAgICAgICAgdGhpcy5wbHVnaW5UeXBlID0gcHJvcHMucGx1Z2luVHlwZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnRhZ3MgPSBwcm9wcy50YWdzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBsdWdpbkRhdGE6IHRoaXMucGx1Z2luRGF0YSxcbiAgICAgICAgICAgIHBsdWdpbk5hbWU6IHRoaXMucGx1Z2luTmFtZSxcbiAgICAgICAgICAgIHBsdWdpblR5cGU6IHRoaXMucGx1Z2luVHlwZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NQbHVnaW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhZ3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUGx1Z2luX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlRhZ3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6UGx1Z2luLlRhZ3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6UGx1Z2luLlRhZ3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUGx1Z2luVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NQbHVnaW5fVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICAnS2V5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zUGx1Z2luQXR0YWNobWVudGAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hcGlnYXRld2F5LXBsdWdpbmF0dGFjaG1lbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NQbHVnaW5BdHRhY2htZW50UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwaUlkOiBUaGUgSUQgb2YgdGhlIEFQSSB0byB3aGljaCB5b3Ugd2FudCB0byBiaW5kIHRoZSBwbHVnLWluLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwaUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGx1Z2luSWQ6IFRoZSBJRCBvZiB0aGUgcGx1Z2luIHRoYXQgeW91IHdhbnQgdG8gYmluZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwbHVnaW5JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YWdlTmFtZTogVGhlIG5hbWUgb2YgdGhlIHJ1bnRpbWUgZW52aXJvbm1lbnQuIFZhbGlkIHZhbHVlczogXG4gICAgICogUkVMRUFTRTogaW5kaWNhdGVzIHRoZSByZWxlYXNlIGVudmlyb25tZW50LlxuICAgICAqIFBSRTogaW5kaWNhdGVzIHRoZSBwcmUtcmVsZWFzZSBlbnZpcm9ubWVudC5cbiAgICAgKiBURVNUOiBpbmRpY2F0ZXMgdGhlIHRlc3QgZW52aXJvbm1lbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RhZ2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUGx1Z2luQXR0YWNobWVudFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQbHVnaW5BdHRhY2htZW50UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUGx1Z2luQXR0YWNobWVudFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhZ2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0YWdlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RhZ2VOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5zdGFnZU5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YWdlTmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN0YWdlTmFtZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJSRUxFQVNFXCIsXCJQUkVcIixcIlRFU1RcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFnZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhZ2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwbHVnaW5JZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wbHVnaW5JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGx1Z2luSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGx1Z2luSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwaUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFwaUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcGlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hcGlJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NQbHVnaW5BdHRhY2htZW50UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OlBsdWdpbkF0dGFjaG1lbnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1BsdWdpbkF0dGFjaG1lbnRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6UGx1Z2luQXR0YWNobWVudGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NQbHVnaW5BdHRhY2htZW50UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQbHVnaW5BdHRhY2htZW50UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FwaUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hcGlJZCksXG4gICAgICAnUGx1Z2luSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBsdWdpbklkKSxcbiAgICAgICdTdGFnZU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YWdlTmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6QXBpR2F0ZXdheTo6UGx1Z2luQXR0YWNobWVudGAsIHdoaWNoIGlzIHVzZWQgdG8gYmluZCBhIHBsdWctaW4gdG8gYW4gQVBJLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBQbHVnaW5BdHRhY2htZW50YCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hcGlnYXRld2F5LXBsdWdpbmF0dGFjaG1lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1BsdWdpbkF0dGFjaG1lbnQgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkFwaUdhdGV3YXk6OlBsdWdpbkF0dGFjaG1lbnRcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXBpSWQ6IFRoZSBhcGkgaWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcGlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQbHVnaW5JZDogVGhlIHBsdWdpbiBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBsdWdpbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcGlJZDogVGhlIElEIG9mIHRoZSBBUEkgdG8gd2hpY2ggeW91IHdhbnQgdG8gYmluZCB0aGUgcGx1Zy1pbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXBpSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwbHVnaW5JZDogVGhlIElEIG9mIHRoZSBwbHVnaW4gdGhhdCB5b3Ugd2FudCB0byBiaW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyBwbHVnaW5JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YWdlTmFtZTogVGhlIG5hbWUgb2YgdGhlIHJ1bnRpbWUgZW52aXJvbm1lbnQuIFZhbGlkIHZhbHVlczogXG4gICAgICogUkVMRUFTRTogaW5kaWNhdGVzIHRoZSByZWxlYXNlIGVudmlyb25tZW50LlxuICAgICAqIFBSRTogaW5kaWNhdGVzIHRoZSBwcmUtcmVsZWFzZSBlbnZpcm9ubWVudC5cbiAgICAgKiBURVNUOiBpbmRpY2F0ZXMgdGhlIHRlc3QgZW52aXJvbm1lbnQuXG4gICAgICovXG4gICAgcHVibGljIHN0YWdlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1BsdWdpbkF0dGFjaG1lbnRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1BsdWdpbkF0dGFjaG1lbnQuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFwaUlkID0gdGhpcy5nZXRBdHQoJ0FwaUlkJyk7XG4gICAgICAgIHRoaXMuYXR0clBsdWdpbklkID0gdGhpcy5nZXRBdHQoJ1BsdWdpbklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFwaUlkID0gcHJvcHMuYXBpSWQ7XG4gICAgICAgIHRoaXMucGx1Z2luSWQgPSBwcm9wcy5wbHVnaW5JZDtcbiAgICAgICAgdGhpcy5zdGFnZU5hbWUgPSBwcm9wcy5zdGFnZU5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXBpSWQ6IHRoaXMuYXBpSWQsXG4gICAgICAgICAgICBwbHVnaW5JZDogdGhpcy5wbHVnaW5JZCxcbiAgICAgICAgICAgIHN0YWdlTmFtZTogdGhpcy5zdGFnZU5hbWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1BsdWdpbkF0dGFjaG1lbnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NTaWduYXR1cmVgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXBpZ2F0ZXdheS1zaWduYXR1cmVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NTaWduYXR1cmVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2lnbmF0dXJlS2V5OiBUaGUga2V5IG9mIHRoZSBzaWduYXR1cmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2lnbmF0dXJlS2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2lnbmF0dXJlTmFtZTogVGhlIG5hbWUgb2YgdGhlIFNpZ25hdHVyZS5JdCBtdXN0IGJlIDQgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCB1bmRlcnNjb3JlcyAoXyksIGRhc2hlcyAoLSksIHNwYWNlcyBhbmQgZG90cyAoLiksIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBzaWduYXR1cmVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2lnbmF0dXJlU2VjcmV0OiBUaGUgc2VjcmV0IG9mIHRoZSBzaWduYXR1cmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2lnbmF0dXJlU2VjcmV0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zU2lnbmF0dXJlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NpZ25hdHVyZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NpZ25hdHVyZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2lnbmF0dXJlU2VjcmV0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNpZ25hdHVyZVNlY3JldCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2lnbmF0dXJlU2VjcmV0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNpZ25hdHVyZVNlY3JldCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2lnbmF0dXJlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zaWduYXR1cmVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzaWduYXR1cmVOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNpZ25hdHVyZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NpZ25hdHVyZUtleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zaWduYXR1cmVLZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NpZ25hdHVyZUtleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zaWduYXR1cmVLZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zU2lnbmF0dXJlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OlNpZ25hdHVyZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU2lnbmF0dXJlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OlNpZ25hdHVyZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTaWduYXR1cmVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NpZ25hdHVyZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdTaWduYXR1cmVLZXknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNpZ25hdHVyZUtleSksXG4gICAgICAnU2lnbmF0dXJlTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2lnbmF0dXJlTmFtZSksXG4gICAgICAnU2lnbmF0dXJlU2VjcmV0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zaWduYXR1cmVTZWNyZXQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFwaUdhdGV3YXk6OlNpZ25hdHVyZWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgYmFja2VuZCBzaWduYXR1cmUuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFNpZ25hdHVyZWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXBpZ2F0ZXdheS1zaWduYXR1cmVcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NpZ25hdHVyZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6QXBpR2F0ZXdheTo6U2lnbmF0dXJlXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNpZ25hdHVyZUlkOiBUaGUgaWQgb2YgdGhlIGNyZWF0ZWQgc2lnbmF0dXJlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTaWduYXR1cmVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2lnbmF0dXJlS2V5OiBUaGUga2V5IG9mIHRoZSBzaWduYXR1cmUuXG4gICAgICovXG4gICAgcHVibGljIHNpZ25hdHVyZUtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNpZ25hdHVyZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBTaWduYXR1cmUuSXQgbXVzdCBiZSA0IHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCwgYW5kIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgdW5kZXJzY29yZXMgKF8pLCBkYXNoZXMgKC0pLCBzcGFjZXMgYW5kIGRvdHMgKC4pLCBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHNpZ25hdHVyZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzaWduYXR1cmVTZWNyZXQ6IFRoZSBzZWNyZXQgb2YgdGhlIHNpZ25hdHVyZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2lnbmF0dXJlU2VjcmV0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU2lnbmF0dXJlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTaWduYXR1cmUuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clNpZ25hdHVyZUlkID0gdGhpcy5nZXRBdHQoJ1NpZ25hdHVyZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNpZ25hdHVyZUtleSA9IHByb3BzLnNpZ25hdHVyZUtleTtcbiAgICAgICAgdGhpcy5zaWduYXR1cmVOYW1lID0gcHJvcHMuc2lnbmF0dXJlTmFtZTtcbiAgICAgICAgdGhpcy5zaWduYXR1cmVTZWNyZXQgPSBwcm9wcy5zaWduYXR1cmVTZWNyZXQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2lnbmF0dXJlS2V5OiB0aGlzLnNpZ25hdHVyZUtleSxcbiAgICAgICAgICAgIHNpZ25hdHVyZU5hbWU6IHRoaXMuc2lnbmF0dXJlTmFtZSxcbiAgICAgICAgICAgIHNpZ25hdHVyZVNlY3JldDogdGhpcy5zaWduYXR1cmVTZWNyZXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1NpZ25hdHVyZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1NpZ25hdHVyZUJpbmRpbmdgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXBpZ2F0ZXdheS1zaWduYXR1cmViaW5kaW5nXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU2lnbmF0dXJlQmluZGluZ1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcGlJZHM6IEFQSXMgdG8gYmluZCB3aXRoIHRoZSBzaWduYXR1cmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBpSWRzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwSWQ6IFRoZSBpZCBvZiBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2lnbmF0dXJlSWQ6IFRoZSBpZCBvZiB0aGUgU2lnbmF0dXJlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNpZ25hdHVyZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RhZ2VOYW1lOiBCaW5kIHNpZ25hdHVyZSBpbiB0aGlzIHN0YWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0YWdlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1NpZ25hdHVyZUJpbmRpbmdQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU2lnbmF0dXJlQmluZGluZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NpZ25hdHVyZUJpbmRpbmdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NpZ25hdHVyZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNpZ25hdHVyZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzaWduYXR1cmVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zaWduYXR1cmVJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhZ2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0YWdlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RhZ2VOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5zdGFnZU5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YWdlTmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN0YWdlTmFtZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJURVNUXCIsXCJSRUxFQVNFXCIsXCJQUkVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFnZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhZ2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcGlJZHMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYXBpSWRzKSk7XG4gICAgaWYocHJvcGVydGllcy5hcGlJZHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5hcGlJZHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5hcGlJZHMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcGlJZHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYXBpSWRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcGlJZHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmFwaUlkcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmdyb3VwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zU2lnbmF0dXJlQmluZGluZ1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpTaWduYXR1cmVCaW5kaW5nYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTaWduYXR1cmVCaW5kaW5nUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OlNpZ25hdHVyZUJpbmRpbmdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2lnbmF0dXJlQmluZGluZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU2lnbmF0dXJlQmluZGluZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdBcGlJZHMnOiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5hcGlJZHMpLFxuICAgICAgJ0dyb3VwSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwSWQpLFxuICAgICAgJ1NpZ25hdHVyZUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zaWduYXR1cmVJZCksXG4gICAgICAnU3RhZ2VOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFnZU5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFwaUdhdGV3YXk6OlNpZ25hdHVyZUJpbmRpbmdgLCB3aGljaCBpcyB1c2VkIHRvIGJpbmQgYSBiYWNrZW5kIHNpZ25hdHVyZSB0byBBUElzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBTaWduYXR1cmVCaW5kaW5nYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hcGlnYXRld2F5LXNpZ25hdHVyZWJpbmRpbmdcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NpZ25hdHVyZUJpbmRpbmcgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkFwaUdhdGV3YXk6OlNpZ25hdHVyZUJpbmRpbmdcIjtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwaUlkczogQVBJcyB0byBiaW5kIHdpdGggdGhlIHNpZ25hdHVyZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXBpSWRzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwSWQ6IFRoZSBpZCBvZiBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNpZ25hdHVyZUlkOiBUaGUgaWQgb2YgdGhlIFNpZ25hdHVyZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2lnbmF0dXJlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdGFnZU5hbWU6IEJpbmQgc2lnbmF0dXJlIGluIHRoaXMgc3RhZ2UuXG4gICAgICovXG4gICAgcHVibGljIHN0YWdlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1NpZ25hdHVyZUJpbmRpbmdQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1NpZ25hdHVyZUJpbmRpbmcuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFwaUlkcyA9IHByb3BzLmFwaUlkcztcbiAgICAgICAgdGhpcy5ncm91cElkID0gcHJvcHMuZ3JvdXBJZDtcbiAgICAgICAgdGhpcy5zaWduYXR1cmVJZCA9IHByb3BzLnNpZ25hdHVyZUlkO1xuICAgICAgICB0aGlzLnN0YWdlTmFtZSA9IHByb3BzLnN0YWdlTmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhcGlJZHM6IHRoaXMuYXBpSWRzLFxuICAgICAgICAgICAgZ3JvdXBJZDogdGhpcy5ncm91cElkLFxuICAgICAgICAgICAgc2lnbmF0dXJlSWQ6IHRoaXMuc2lnbmF0dXJlSWQsXG4gICAgICAgICAgICBzdGFnZU5hbWU6IHRoaXMuc3RhZ2VOYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTaWduYXR1cmVCaW5kaW5nUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zU3RhZ2VDb25maWdgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXBpZ2F0ZXdheS1zdGFnZWNvbmZpZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1N0YWdlQ29uZmlnUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwSWQ6IFRoZSBpZCBvZiB0aGUgR3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YWdlTmFtZTogVGhlIG5hbWUgb2YgdGhlIFN0YWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0YWdlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZhcmlhYmxlczogVmFyaWFibGVzIGluIHRoZSBzdGFnZSwga2V5LXZhbHVlIHBhaXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZhcmlhYmxlczogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1N0YWdlQ29uZmlnUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1N0YWdlQ29uZmlnUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU3RhZ2VDb25maWdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhcmlhYmxlcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52YXJpYWJsZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhcmlhYmxlcycsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMudmFyaWFibGVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFnZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3RhZ2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5zdGFnZU5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN0YWdlTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhZ2VOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3RhZ2VOYW1lLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlRFU1RcIixcIlJFTEVBU0VcIixcIlBSRVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YWdlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGFnZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1N0YWdlQ29uZmlnUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OlN0YWdlQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTdGFnZUNvbmZpZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBcGlHYXRld2F5OjpTdGFnZUNvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTdGFnZUNvbmZpZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU3RhZ2VDb25maWdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnR3JvdXBJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBJZCksXG4gICAgICAnU3RhZ2VOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFnZU5hbWUpLFxuICAgICAgJ1ZhcmlhYmxlcyc6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnZhcmlhYmxlcyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6QXBpR2F0ZXdheTo6U3RhZ2VDb25maWdgLCB3aGljaCBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgdGVzdCwgc3RhZ2luZywgb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudCB2YXJpYWJsZXMgZm9yIGFuIEFQSSBncm91cC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgU3RhZ2VDb25maWdgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktc3RhZ2Vjb25maWdcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1N0YWdlQ29uZmlnIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpBcGlHYXRld2F5OjpTdGFnZUNvbmZpZ1wiO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogVGhlIGlkIG9mIHRoZSBHcm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YWdlTmFtZTogVGhlIG5hbWUgb2YgdGhlIFN0YWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFnZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2YXJpYWJsZXM6IFZhcmlhYmxlcyBpbiB0aGUgc3RhZ2UsIGtleS12YWx1ZSBwYWlycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdmFyaWFibGVzOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU3RhZ2VDb25maWdQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1N0YWdlQ29uZmlnLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5ncm91cElkID0gcHJvcHMuZ3JvdXBJZDtcbiAgICAgICAgdGhpcy5zdGFnZU5hbWUgPSBwcm9wcy5zdGFnZU5hbWU7XG4gICAgICAgIHRoaXMudmFyaWFibGVzID0gcHJvcHMudmFyaWFibGVzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdyb3VwSWQ6IHRoaXMuZ3JvdXBJZCxcbiAgICAgICAgICAgIHN0YWdlTmFtZTogdGhpcy5zdGFnZU5hbWUsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHRoaXMudmFyaWFibGVzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTdGFnZUNvbmZpZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1RyYWZmaWNDb250cm9sYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktdHJhZmZpY2NvbnRyb2xcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NUcmFmZmljQ29udHJvbFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcGlEZWZhdWx0OiBEZWZhdWx0IEFQSSB0cmFmZmljIHZhbHVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwaURlZmF1bHQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFmZmljQ29udHJvbE5hbWU6IFRoZSBuYW1lIG9mIHRoZSB0cmFmZmljIGNvbnRyb2wuSXQgbXVzdCBiZSA0IHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCwgYW5kIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgdW5kZXJzY29yZXMgKF8pLCBkYXNoZXMgKC0pLCBzcGFjZXMgYW5kIGRvdHMgKC4pLCBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhZmZpY0NvbnRyb2xOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhZmZpY0NvbnRyb2xVbml0OiBUcmFmZmljIGNvbnRyb2wgdW5pdCwgREFZXFwvSE9VUlxcL01JTlVURS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFmZmljQ29udHJvbFVuaXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBEZWZhdWx0OiBEZWZhdWx0IEFQUCB0cmFmZmljIHZhbHVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcERlZmF1bHQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIHRoZSB0cmFmZmljIGNvbnRyb2wsIGxlc3MgdGhhbiAxODAgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzcGVjaWFsOiBTcGVjaWFsIHRyYWZmaWMgY29udHJvbHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BlY2lhbD86IEFycmF5PFJvc1RyYWZmaWNDb250cm9sLlNwZWNpYWxQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXNlckRlZmF1bHQ6IERlZmF1bHQgdXNlciB0cmFmZmljIHZhbHVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJEZWZhdWx0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1RyYWZmaWNDb250cm9sUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RyYWZmaWNDb250cm9sUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVHJhZmZpY0NvbnRyb2xQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFmZmljQ29udHJvbFVuaXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudHJhZmZpY0NvbnRyb2xVbml0KSk7XG4gICAgaWYocHJvcGVydGllcy50cmFmZmljQ29udHJvbFVuaXQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRyYWZmaWNDb250cm9sVW5pdCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhZmZpY0NvbnRyb2xVbml0Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudHJhZmZpY0NvbnRyb2xVbml0LFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkRBWVwiLFwiSE9VUlwiLFwiTUlOVVRFXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhZmZpY0NvbnRyb2xVbml0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRyYWZmaWNDb250cm9sVW5pdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhZmZpY0NvbnRyb2xOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRyYWZmaWNDb250cm9sTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhZmZpY0NvbnRyb2xOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRyYWZmaWNDb250cm9sTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwRGVmYXVsdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hcHBEZWZhdWx0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzcGVjaWFsJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zVHJhZmZpY0NvbnRyb2xfU3BlY2lhbFByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5zcGVjaWFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1c2VyRGVmYXVsdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy51c2VyRGVmYXVsdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBpRGVmYXVsdCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hcGlEZWZhdWx0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcGlEZWZhdWx0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmFwaURlZmF1bHQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVHJhZmZpY0NvbnRyb2xQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6VHJhZmZpY0NvbnRyb2xgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RyYWZmaWNDb250cm9sUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OlRyYWZmaWNDb250cm9sYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1RyYWZmaWNDb250cm9sUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NUcmFmZmljQ29udHJvbFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdBcGlEZWZhdWx0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hcGlEZWZhdWx0KSxcbiAgICAgICdUcmFmZmljQ29udHJvbE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyYWZmaWNDb250cm9sTmFtZSksXG4gICAgICAnVHJhZmZpY0NvbnRyb2xVbml0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50cmFmZmljQ29udHJvbFVuaXQpLFxuICAgICAgJ0FwcERlZmF1bHQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwcERlZmF1bHQpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICAnU3BlY2lhbCc6IHJvcy5saXN0TWFwcGVyKHJvc1RyYWZmaWNDb250cm9sU3BlY2lhbFByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zcGVjaWFsKSxcbiAgICAgICdVc2VyRGVmYXVsdCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudXNlckRlZmF1bHQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFwaUdhdGV3YXk6OlRyYWZmaWNDb250cm9sYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBjdXN0b20gdGhyb3R0bGluZyBwb2xpY3kuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFRyYWZmaWNDb250cm9sYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hcGlnYXRld2F5LXRyYWZmaWNjb250cm9sXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NUcmFmZmljQ29udHJvbCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6QXBpR2F0ZXdheTo6VHJhZmZpY0NvbnRyb2xcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVHJhZmZpY0NvbnRyb2xJZDogVGhlIGlkIG9mIHRoZSB0cmFmZmljIGNvbnRyb2xcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyYWZmaWNDb250cm9sSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwaURlZmF1bHQ6IERlZmF1bHQgQVBJIHRyYWZmaWMgdmFsdWUuXG4gICAgICovXG4gICAgcHVibGljIGFwaURlZmF1bHQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0cmFmZmljQ29udHJvbE5hbWU6IFRoZSBuYW1lIG9mIHRoZSB0cmFmZmljIGNvbnRyb2wuSXQgbXVzdCBiZSA0IHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCwgYW5kIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgdW5kZXJzY29yZXMgKF8pLCBkYXNoZXMgKC0pLCBzcGFjZXMgYW5kIGRvdHMgKC4pLCBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHRyYWZmaWNDb250cm9sTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYWZmaWNDb250cm9sVW5pdDogVHJhZmZpYyBjb250cm9sIHVuaXQsIERBWVxcL0hPVVJcXC9NSU5VVEUuXG4gICAgICovXG4gICAgcHVibGljIHRyYWZmaWNDb250cm9sVW5pdDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcERlZmF1bHQ6IERlZmF1bHQgQVBQIHRyYWZmaWMgdmFsdWUuXG4gICAgICovXG4gICAgcHVibGljIGFwcERlZmF1bHQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIHRyYWZmaWMgY29udHJvbCwgbGVzcyB0aGFuIDE4MCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNwZWNpYWw6IFNwZWNpYWwgdHJhZmZpYyBjb250cm9scy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3BlY2lhbDogQXJyYXk8Um9zVHJhZmZpY0NvbnRyb2wuU3BlY2lhbFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VyRGVmYXVsdDogRGVmYXVsdCB1c2VyIHRyYWZmaWMgdmFsdWUuXG4gICAgICovXG4gICAgcHVibGljIHVzZXJEZWZhdWx0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVHJhZmZpY0NvbnRyb2xQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1RyYWZmaWNDb250cm9sLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJUcmFmZmljQ29udHJvbElkID0gdGhpcy5nZXRBdHQoJ1RyYWZmaWNDb250cm9sSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYXBpRGVmYXVsdCA9IHByb3BzLmFwaURlZmF1bHQ7XG4gICAgICAgIHRoaXMudHJhZmZpY0NvbnRyb2xOYW1lID0gcHJvcHMudHJhZmZpY0NvbnRyb2xOYW1lO1xuICAgICAgICB0aGlzLnRyYWZmaWNDb250cm9sVW5pdCA9IHByb3BzLnRyYWZmaWNDb250cm9sVW5pdDtcbiAgICAgICAgdGhpcy5hcHBEZWZhdWx0ID0gcHJvcHMuYXBwRGVmYXVsdDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnNwZWNpYWwgPSBwcm9wcy5zcGVjaWFsO1xuICAgICAgICB0aGlzLnVzZXJEZWZhdWx0ID0gcHJvcHMudXNlckRlZmF1bHQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXBpRGVmYXVsdDogdGhpcy5hcGlEZWZhdWx0LFxuICAgICAgICAgICAgdHJhZmZpY0NvbnRyb2xOYW1lOiB0aGlzLnRyYWZmaWNDb250cm9sTmFtZSxcbiAgICAgICAgICAgIHRyYWZmaWNDb250cm9sVW5pdDogdGhpcy50cmFmZmljQ29udHJvbFVuaXQsXG4gICAgICAgICAgICBhcHBEZWZhdWx0OiB0aGlzLmFwcERlZmF1bHQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHNwZWNpYWw6IHRoaXMuc3BlY2lhbCxcbiAgICAgICAgICAgIHVzZXJEZWZhdWx0OiB0aGlzLnVzZXJEZWZhdWx0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NUcmFmZmljQ29udHJvbFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1RyYWZmaWNDb250cm9sIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTcGVjaWFsUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNwZWNpYWxLZXk6IFRoZSBrZXkgb2Ygc3BlY2lhbCB0cmFmZmljIGNvbnRyb2wuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzcGVjaWFsS2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3BlY2lhbFR5cGU6IFRoZSB0eXBlIG9mIHNwZWNpYWwgdHJhZmZpYyBjb250cm9sLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3BlY2lhbFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0cmFmZmljVmFsdWU6IFRoZSB2YWx1ZSBvZiBzcGVjaWFsIHRyYWZmaWMgY29udHJvbFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdHJhZmZpY1ZhbHVlOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTcGVjaWFsUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNwZWNpYWxQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NUcmFmZmljQ29udHJvbF9TcGVjaWFsUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzcGVjaWFsS2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNwZWNpYWxLZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NwZWNpYWxLZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3BlY2lhbEtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3BlY2lhbFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3BlY2lhbFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNwZWNpYWxUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5zcGVjaWFsVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3BlY2lhbFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zcGVjaWFsVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBUFBcIixcIlVTRVJcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzcGVjaWFsVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zcGVjaWFsVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhZmZpY1ZhbHVlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRyYWZmaWNWYWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhZmZpY1ZhbHVlJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRyYWZmaWNWYWx1ZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJTcGVjaWFsUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OlRyYWZmaWNDb250cm9sLlNwZWNpYWxgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNwZWNpYWxQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6VHJhZmZpY0NvbnRyb2wuU3BlY2lhbGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NUcmFmZmljQ29udHJvbFNwZWNpYWxQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zVHJhZmZpY0NvbnRyb2xfU3BlY2lhbFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1NwZWNpYWxLZXknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNwZWNpYWxLZXkpLFxuICAgICAgJ1NwZWNpYWxUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zcGVjaWFsVHlwZSksXG4gICAgICAnVHJhZmZpY1ZhbHVlJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50cmFmZmljVmFsdWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVHJhZmZpY0NvbnRyb2xCaW5kaW5nYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktdHJhZmZpY2NvbnRyb2xiaW5kaW5nXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVHJhZmZpY0NvbnRyb2xCaW5kaW5nUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwaUlkczogQVBJcyB0byBiaW5kIHdpdGggdGhlIHRyYWZmaWMgY29udHJvbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcGlJZHM6IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogVGhlIGlkIG9mIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdGFnZU5hbWU6IEJpbmQgdHJhZmZpYyBpbiB0aGlzIHN0YWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0YWdlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYWZmaWNDb250cm9sSWQ6IFRoZSBpZCBvZiB0cmFmZmljIGNvbnRyb2wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhZmZpY0NvbnRyb2xJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1RyYWZmaWNDb250cm9sQmluZGluZ1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NUcmFmZmljQ29udHJvbEJpbmRpbmdQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NUcmFmZmljQ29udHJvbEJpbmRpbmdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YWdlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zdGFnZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN0YWdlTmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3RhZ2VOYW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFnZU5hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdGFnZU5hbWUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiVEVTVFwiLFwiUkVMRUFTRVwiLFwiUFJFXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhZ2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YWdlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBpSWRzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFwaUlkcykpO1xuICAgIGlmKHByb3BlcnRpZXMuYXBpSWRzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuYXBpSWRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuYXBpSWRzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBpSWRzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmFwaUlkcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBpSWRzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5hcGlJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RyYWZmaWNDb250cm9sSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudHJhZmZpY0NvbnRyb2xJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhZmZpY0NvbnRyb2xJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50cmFmZmljQ29udHJvbElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NUcmFmZmljQ29udHJvbEJpbmRpbmdQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6VHJhZmZpY0NvbnRyb2xCaW5kaW5nYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NUcmFmZmljQ29udHJvbEJpbmRpbmdQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QXBpR2F0ZXdheTo6VHJhZmZpY0NvbnRyb2xCaW5kaW5nYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1RyYWZmaWNDb250cm9sQmluZGluZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVHJhZmZpY0NvbnRyb2xCaW5kaW5nUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FwaUlkcyc6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmFwaUlkcyksXG4gICAgICAnR3JvdXBJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBJZCksXG4gICAgICAnU3RhZ2VOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGFnZU5hbWUpLFxuICAgICAgJ1RyYWZmaWNDb250cm9sSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyYWZmaWNDb250cm9sSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFwaUdhdGV3YXk6OlRyYWZmaWNDb250cm9sQmluZGluZ2AsIHdoaWNoIGlzIHVzZWQgdG8gYmluZCBhIGN1c3RvbSB0aHJvdHRsaW5nIHBvbGljeSB0byBBUElzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBUcmFmZmljQ29udHJvbEJpbmRpbmdgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktdHJhZmZpY2NvbnRyb2xiaW5kaW5nXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NUcmFmZmljQ29udHJvbEJpbmRpbmcgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkFwaUdhdGV3YXk6OlRyYWZmaWNDb250cm9sQmluZGluZ1wiO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBpSWRzOiBBUElzIHRvIGJpbmQgd2l0aCB0aGUgdHJhZmZpYyBjb250cm9sLlxuICAgICAqL1xuICAgIHB1YmxpYyBhcGlJZHM6IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogVGhlIGlkIG9mIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RhZ2VOYW1lOiBCaW5kIHRyYWZmaWMgaW4gdGhpcyBzdGFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhZ2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhZmZpY0NvbnRyb2xJZDogVGhlIGlkIG9mIHRyYWZmaWMgY29udHJvbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdHJhZmZpY0NvbnRyb2xJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1RyYWZmaWNDb250cm9sQmluZGluZ1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVHJhZmZpY0NvbnRyb2xCaW5kaW5nLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hcGlJZHMgPSBwcm9wcy5hcGlJZHM7XG4gICAgICAgIHRoaXMuZ3JvdXBJZCA9IHByb3BzLmdyb3VwSWQ7XG4gICAgICAgIHRoaXMuc3RhZ2VOYW1lID0gcHJvcHMuc3RhZ2VOYW1lO1xuICAgICAgICB0aGlzLnRyYWZmaWNDb250cm9sSWQgPSBwcm9wcy50cmFmZmljQ29udHJvbElkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFwaUlkczogdGhpcy5hcGlJZHMsXG4gICAgICAgICAgICBncm91cElkOiB0aGlzLmdyb3VwSWQsXG4gICAgICAgICAgICBzdGFnZU5hbWU6IHRoaXMuc3RhZ2VOYW1lLFxuICAgICAgICAgICAgdHJhZmZpY0NvbnRyb2xJZDogdGhpcy50cmFmZmljQ29udHJvbElkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NUcmFmZmljQ29udHJvbEJpbmRpbmdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NWcGNBY2Nlc3NDb25maWdgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXBpZ2F0ZXdheS12cGNhY2Nlc3Njb25maWdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NWcGNBY2Nlc3NDb25maWdQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIGlkIG9mIHRoZSBpbnN0YW5jZSAoRUNTXFwvU0xCXFwvQUxCXFwvTkxCKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2Ygb25lIFZQQyBhY2Nlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9ydDogVGhlIHBvcnQgb2YgdGhlIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb3J0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFRoZSBpZCBvZiB0aGUgVlBDLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zVnBjQWNjZXNzQ29uZmlnUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZwY0FjY2Vzc0NvbmZpZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1ZwY0FjY2Vzc0NvbmZpZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wb3J0KSk7XG4gICAgaWYocHJvcGVydGllcy5wb3J0ICYmICh0eXBlb2YgcHJvcGVydGllcy5wb3J0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucG9ydCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjU1MzUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVnBjQWNjZXNzQ29uZmlnUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OlZwY0FjY2Vzc0NvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVnBjQWNjZXNzQ29uZmlnUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFwaUdhdGV3YXk6OlZwY0FjY2Vzc0NvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NWcGNBY2Nlc3NDb25maWdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1ZwY0FjY2Vzc0NvbmZpZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdJbnN0YW5jZUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZUlkKSxcbiAgICAgICdOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICAgICdQb3J0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgICdWcGNJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFwaUdhdGV3YXk6OlZwY0FjY2Vzc0NvbmZpZ2AsIHdoaWNoIGlzIHVzZWQgdG8gY29uZmlndXJlIHZpcnR1YWwgcHJpdmF0ZSBjbG91ZCAoVlBDKSBhY2Nlc3MgYXV0aG9yaXphdGlvbiBmb3IgYW4gaW5zdGFuY2UuIFRoaXMgaGVscHMgQVBJcyBwcm92aWRlIHNlcnZpY2VzIGJhc2VkIG9uIHByaXZhdGUgbmV0d29ya3MuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFZwY0FjY2Vzc0NvbmZpZ2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXBpZ2F0ZXdheS12cGNhY2Nlc3Njb25maWdcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1ZwY0FjY2Vzc0NvbmZpZyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6QXBpR2F0ZXdheTo6VnBjQWNjZXNzQ29uZmlnXCI7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgaWQgb2YgdGhlIGluc3RhbmNlIChFQ1NcXC9TTEJcXC9BTEJcXC9OTEIpLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2Ygb25lIFZQQyBhY2Nlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvcnQ6IFRoZSBwb3J0IG9mIHRoZSBWUEMuXG4gICAgICovXG4gICAgcHVibGljIHBvcnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVGhlIGlkIG9mIHRoZSBWUEMuXG4gICAgICovXG4gICAgcHVibGljIHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVnBjQWNjZXNzQ29uZmlnUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NWcGNBY2Nlc3NDb25maWcuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmluc3RhbmNlSWQgPSBwcm9wcy5pbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgICAgICB0aGlzLnBvcnQgPSBwcm9wcy5wb3J0O1xuICAgICAgICB0aGlzLnZwY0lkID0gcHJvcHMudnBjSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5zdGFuY2VJZDogdGhpcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgcG9ydDogdGhpcy5wb3J0LFxuICAgICAgICAgICAgdnBjSWQ6IHRoaXMudnBjSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1ZwY0FjY2Vzc0NvbmZpZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuIl19