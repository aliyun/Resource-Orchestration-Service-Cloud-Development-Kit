import * as ros from '@alicloud/ros-cdk-core';
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
 * A ROS template type:  `ALIYUN::ApiGateway::Api`
 */
export declare class RosApi extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Api";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ApiId: The id of the API.
     */
    readonly attrApiId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    apiName: string;
    /**
     * @Property groupId: The id of the Group.
     */
    groupId: string;
    /**
     * @Property requestConfig: The configuration of the request
     */
    requestConfig: RosApi.RequestConfigProperty | ros.IResolvable;
    /**
     * @Property resultSample: The sample of the result.
     */
    resultSample: string;
    /**
     * @Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
     */
    resultType: string;
    /**
     * @Property serviceConfig: The configuration of the service.
     */
    serviceConfig: RosApi.ServiceConfigProperty | ros.IResolvable;
    /**
     * @Property visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
     */
    visibility: string;
    /**
     * @Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
     * DEFAULT: Default (set by group).
     * DISABLE: Not allowed
     * HEADER: Allow AppCode header authentication
     * HEADER_QUERY: Allow AppCode header and query authentication
     */
    appCodeAuthType: string | undefined;
    /**
     * @Property authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
     */
    authType: string | undefined;
    /**
     * @Property constParameters: The const parameters.
     */
    constParameters: Array<RosApi.ConstParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the API, less than 180 characters.
     */
    description: string | undefined;
    /**
     * @Property errorCodeSamples: The Error Code samples.
     */
    errorCodeSamples: Array<RosApi.ErrorCodeSamplesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property failResultSample: The sample of the fail result.
     */
    failResultSample: string | undefined;
    /**
     * @Property openIdConnectConfig: The configuration of the open id.
     */
    openIdConnectConfig: RosApi.OpenIdConnectConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property requestParameters: The request parameters.
     */
    requestParameters: Array<RosApi.RequestParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property serviceParameters: The service parameters.
     */
    serviceParameters: Array<RosApi.ServiceParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.
     */
    serviceParametersMap: Array<RosApi.ServiceParametersMapProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property systemParameters: The system parameters.
     */
    systemParameters: Array<RosApi.SystemParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ApiGateway::Api`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApiProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface ConstParametersProperty {
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
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface ErrorCodeSamplesProperty {
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
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface FunctionComputeConfigProperty {
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
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface MockHeadersProperty {
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
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface OpenIdConnectConfigProperty {
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
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface RequestConfigProperty {
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
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface RequestParametersProperty {
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
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface ServiceConfigProperty {
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
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface ServiceParametersProperty {
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
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface ServiceParametersMapProperty {
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
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface SystemParametersProperty {
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
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface VpcConfigProperty {
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
 * A ROS template type:  `ALIYUN::ApiGateway::App`
 */
export declare class RosApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::App";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AppId: The id of the created APP
     */
    readonly attrAppId: any;
    /**
     * @Attribute AppKey: The key of the APP
     */
    readonly attrAppKey: any;
    /**
     * @Attribute AppSecret: The secret of the APP
     */
    readonly attrAppSecret: any;
    /**
     * @Attribute Tags: Tags of app
     */
    readonly attrTags: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appName: The name of the App.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    appName: string;
    /**
     * @Property description: Description of the App, less than 180 characters.
     */
    description: string | undefined;
    /**
     * @Property tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * Create a new `ALIYUN::ApiGateway::App`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * A ROS template type:  `ALIYUN::ApiGateway::Authorization`
 */
export declare class RosAuthorization extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Authorization";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property apiIds: APIs to authorize.
     */
    apiIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property appIds: APPs are authorized to APIs.
     */
    appIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property groupId: The id of the group.
     */
    groupId: string;
    /**
     * @Property stageName: Authorize in this stage.
     */
    stageName: string;
    /**
     * @Property description: Description of the authorization, less than 180 characters.
     */
    description: string | undefined;
    /**
     * Create a new `ALIYUN::ApiGateway::Authorization`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAuthorizationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * A ROS template type:  `ALIYUN::ApiGateway::CustomDomain`
 */
export declare class RosCustomDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::CustomDomain";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CertificateId: The id of the certificate.
     */
    readonly attrCertificateId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: Custom domain name.
     */
    domainName: string;
    /**
     * @Property groupId: The id of the Group.
     */
    groupId: string;
    /**
     * @Property certificateBody: SSL certificate body.
     */
    certificateBody: string | undefined;
    /**
     * @Property certificateName: SSL certificate name.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    certificateName: string | undefined;
    /**
     * @Property certificatePrivateKey: SSL certificate key.
     */
    certificatePrivateKey: string | undefined;
    /**
     * Create a new `ALIYUN::ApiGateway::CustomDomain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomDomainProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * A ROS template type:  `ALIYUN::ApiGateway::Deployment`
 */
export declare class RosDeployment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Deployment";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property apiId: The id of the API.
     */
    apiId: string;
    /**
     * @Property groupId: The id of the Group.
     */
    groupId: string;
    /**
     * @Property stageName: Bind traffic in this stage.
     */
    stageName: string;
    /**
     * @Property description: Description of the deployment, less than 180 characters.
     */
    description: string | undefined;
    /**
     * @Property historyVersion: The history version.
     */
    historyVersion: string | undefined;
    /**
     * Create a new `ALIYUN::ApiGateway::Deployment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeploymentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * A ROS template type:  `ALIYUN::ApiGateway::Group`
 */
export declare class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Group";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute GroupId: The id of the created Group resource
     */
    readonly attrGroupId: any;
    /**
     * @Attribute SubDomain: The sub domain assigned to the Group by the system
     */
    readonly attrSubDomain: any;
    /**
     * @Attribute Tags: Tags of app
     */
    readonly attrTags: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    groupName: string;
    /**
     * @Property description: Description of the Group, less than 180 characters.
     */
    description: string | undefined;
    /**
     * @Property instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
     */
    instanceId: string | undefined;
    /**
     * @Property passthroughHeaders: Pass through headers setting. values:
     * host: pass through host headers
     */
    passthroughHeaders: string | undefined;
    /**
     * @Property tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * Create a new `ALIYUN::ApiGateway::Group`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::ApiGateway::LogConfig`
 */
export interface RosLogConfigProps {
    /**
     * @Property slsLogStore: Logstore name of SLS
     */
    readonly slsLogStore: string;
    /**
     * @Property slsProject: Project name of SLS
     */
    readonly slsProject: string;
}
/**
 * A ROS template type:  `ALIYUN::ApiGateway::LogConfig`
 */
export declare class RosLogConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::LogConfig";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SlsLogStore: Logstore name of SLS
     */
    readonly attrSlsLogStore: any;
    /**
     * @Attribute SlsProject: Project name of SLS
     */
    readonly attrSlsProject: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property slsLogStore: Logstore name of SLS
     */
    slsLogStore: string;
    /**
     * @Property slsProject: Project name of SLS
     */
    slsProject: string;
    /**
     * Create a new `ALIYUN::ApiGateway::LogConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLogConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * A ROS template type:  `ALIYUN::ApiGateway::Signature`
 */
export declare class RosSignature extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Signature";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SignatureId: The id of the created signature
     */
    readonly attrSignatureId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property signatureKey: The key of the signature.
     */
    signatureKey: string;
    /**
     * @Property signatureName: The name of the Signature.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    signatureName: string;
    /**
     * @Property signatureSecret: The secret of the signature.
     */
    signatureSecret: string;
    /**
     * Create a new `ALIYUN::ApiGateway::Signature`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSignatureProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * A ROS template type:  `ALIYUN::ApiGateway::SignatureBinding`
 */
export declare class RosSignatureBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::SignatureBinding";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property apiIds: APIs to bind with the signature.
     */
    apiIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property groupId: The id of group.
     */
    groupId: string;
    /**
     * @Property signatureId: The id of the Signature.
     */
    signatureId: string;
    /**
     * @Property stageName: Bind signature in this stage.
     */
    stageName: string;
    /**
     * Create a new `ALIYUN::ApiGateway::SignatureBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSignatureBindingProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
    readonly variables: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ApiGateway::StageConfig`
 */
export declare class RosStageConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::StageConfig";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupId: The id of the Group.
     */
    groupId: string;
    /**
     * @Property stageName: The name of the Stage.
     */
    stageName: string;
    /**
     * @Property variables: Variables in the stage, key-value pairs.
     */
    variables: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Create a new `ALIYUN::ApiGateway::StageConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStageConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * A ROS template type:  `ALIYUN::ApiGateway::TrafficControl`
 */
export declare class RosTrafficControl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::TrafficControl";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute TrafficControlId: The id of the traffic control
     */
    readonly attrTrafficControlId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property apiDefault: Default API traffic value.
     */
    apiDefault: number;
    /**
     * @Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    trafficControlName: string;
    /**
     * @Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
     */
    trafficControlUnit: string;
    /**
     * @Property appDefault: Default APP traffic value.
     */
    appDefault: string | undefined;
    /**
     * @Property description: Description of the traffic control, less than 180 characters.
     */
    description: string | undefined;
    /**
     * @Property special: Special traffic controls.
     */
    special: Array<RosTrafficControl.SpecialProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property userDefault: Default user traffic value.
     */
    userDefault: string | undefined;
    /**
     * Create a new `ALIYUN::ApiGateway::TrafficControl`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrafficControlProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosTrafficControl {
    /**
     * @stability external
     */
    interface SpecialProperty {
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
 * A ROS template type:  `ALIYUN::ApiGateway::TrafficControlBinding`
 */
export declare class RosTrafficControlBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::TrafficControlBinding";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property apiIds: APIs to bind with the traffic control.
     */
    apiIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property groupId: The id of group.
     */
    groupId: string;
    /**
     * @Property stageName: Bind traffic in this stage.
     */
    stageName: string;
    /**
     * @Property trafficControlId: The id of traffic control.
     */
    trafficControlId: string;
    /**
     * Create a new `ALIYUN::ApiGateway::TrafficControlBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrafficControlBindingProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * A ROS template type:  `ALIYUN::ApiGateway::VpcAccessConfig`
 */
export declare class RosVpcAccessConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::VpcAccessConfig";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The id of the instance (ECS/SLB).
     */
    instanceId: string;
    /**
     * @Property name: The name of one VPC access configuration.Need [4, 50] Chinese\English\Number characters "-" or "_",and should start with Chinese/English character.
     */
    name: string;
    /**
     * @Property port: The port of the VPC.
     */
    port: number;
    /**
     * @Property vpcId: The id of the VPC.
     */
    vpcId: string;
    /**
     * Create a new `ALIYUN::ApiGateway::VpcAccessConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcAccessConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
