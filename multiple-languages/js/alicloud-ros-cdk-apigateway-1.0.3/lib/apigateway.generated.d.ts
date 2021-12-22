import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ApiGateway::Api`
 */
export interface RosApiProps {
    /**
     * @Property apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly apiName: string | ros.IResolvable;
    /**
     * @Property groupId: The id of the Group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property requestConfig: The configuration of the request
     */
    readonly requestConfig: RosApi.RequestConfigProperty | ros.IResolvable;
    /**
     * @Property resultSample: The sample of the result.
     */
    readonly resultSample: string | ros.IResolvable;
    /**
     * @Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
     */
    readonly resultType: string | ros.IResolvable;
    /**
     * @Property serviceConfig: The configuration of the service.
     */
    readonly serviceConfig: RosApi.ServiceConfigProperty | ros.IResolvable;
    /**
     * @Property visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
     */
    readonly visibility: string | ros.IResolvable;
    /**
     * @Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
     * DEFAULT: Default (set by group).
     * DISABLE: Not allowed
     * HEADER: Allow AppCode header authentication
     * HEADER_QUERY: Allow AppCode header and query authentication
     */
    readonly appCodeAuthType?: string | ros.IResolvable;
    /**
     * @Property authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
     */
    readonly authType?: string | ros.IResolvable;
    /**
     * @Property constParameters: The const parameters.
     */
    readonly constParameters?: Array<RosApi.ConstParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: Description of the API, less than 180 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property disableInternet: Set DisableInternet to true, only support intranet to call API.
     * Set DisableInternet to false, then the call is not restricted.
     *
     */
    readonly disableInternet?: boolean | ros.IResolvable;
    /**
     * @Property errorCodeSamples: The Error Code samples.
     */
    readonly errorCodeSamples?: Array<RosApi.ErrorCodeSamplesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property failResultSample: The sample of the fail result.
     */
    readonly failResultSample?: string | ros.IResolvable;
    /**
     * @Property forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,
     * this is the unique identifier of the request, generally using UUID to identify.
     * The API gateway will verify the validity of this parameter after receiving this parameter.
     * The same value can only be used once within 15 minutes. It can effectively prevent API replay attacks.
     * Set ForceNonceCheck to false, then no check.
     */
    readonly forceNonceCheck?: boolean | ros.IResolvable;
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
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosApi.TagsProperty[];
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
    readonly attrApiId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    apiName: string | ros.IResolvable;
    /**
     * @Property groupId: The id of the Group.
     */
    groupId: string | ros.IResolvable;
    /**
     * @Property requestConfig: The configuration of the request
     */
    requestConfig: RosApi.RequestConfigProperty | ros.IResolvable;
    /**
     * @Property resultSample: The sample of the result.
     */
    resultSample: string | ros.IResolvable;
    /**
     * @Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
     */
    resultType: string | ros.IResolvable;
    /**
     * @Property serviceConfig: The configuration of the service.
     */
    serviceConfig: RosApi.ServiceConfigProperty | ros.IResolvable;
    /**
     * @Property visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
     */
    visibility: string | ros.IResolvable;
    /**
     * @Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
     * DEFAULT: Default (set by group).
     * DISABLE: Not allowed
     * HEADER: Allow AppCode header authentication
     * HEADER_QUERY: Allow AppCode header and query authentication
     */
    appCodeAuthType: string | ros.IResolvable | undefined;
    /**
     * @Property authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
     */
    authType: string | ros.IResolvable | undefined;
    /**
     * @Property constParameters: The const parameters.
     */
    constParameters: Array<RosApi.ConstParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the API, less than 180 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property disableInternet: Set DisableInternet to true, only support intranet to call API.
     * Set DisableInternet to false, then the call is not restricted.
     *
     */
    disableInternet: boolean | ros.IResolvable | undefined;
    /**
     * @Property errorCodeSamples: The Error Code samples.
     */
    errorCodeSamples: Array<RosApi.ErrorCodeSamplesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property failResultSample: The sample of the fail result.
     */
    failResultSample: string | ros.IResolvable | undefined;
    /**
     * @Property forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,
     * this is the unique identifier of the request, generally using UUID to identify.
     * The API gateway will verify the validity of this parameter after receiving this parameter.
     * The same value can only be used once within 15 minutes. It can effectively prevent API replay attacks.
     * Set ForceNonceCheck to false, then no check.
     */
    forceNonceCheck: boolean | ros.IResolvable | undefined;
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
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosApi.TagsProperty[] | undefined;
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
        readonly constValue: string | ros.IResolvable;
        /**
         * @Property description: Description of the const parameter, less than 180 characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serviceParameterName: The service parameter name.
         */
        readonly serviceParameterName: string | ros.IResolvable;
        /**
         * @Property location: The location of the parameter. Default is HEAD.
         */
        readonly location: string | ros.IResolvable;
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
        readonly description?: string | ros.IResolvable;
        /**
         * @Property message: Error message.
         */
        readonly message: string | ros.IResolvable;
        /**
         * @Property code: Error code.
         */
        readonly code: string | ros.IResolvable;
    }
}
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface FunctionComputeConfigProperty {
        /**
         * @Property path: The backend request path must contain the Parameter Path in the backend service parameter within brackets ([]). For example: /getUserInfo/[userId].
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property functionName: The function name of function compute.
         */
        readonly functionName?: string | ros.IResolvable;
        /**
         * @Property contentTypeValue: ContentTypeValue is required if ContentTypeCatagory is DEFAULT or CUSTOM.
         */
        readonly contentTypeValue?: string | ros.IResolvable;
        /**
         * @Property serviceName: The service name of function compute.
         */
        readonly serviceName?: string | ros.IResolvable;
        /**
         * @Property fcType: Function type. Default: FCEvent.
     * Valid values: FCEvent, HttpTrigger.
         */
        readonly fcType?: string | ros.IResolvable;
        /**
         * @Property qualifier: The service alias name.
         */
        readonly qualifier?: string | ros.IResolvable;
        /**
         * @Property method: The HTTP method of the function. Default is GET.
         */
        readonly method?: string | ros.IResolvable;
        /**
         * @Property onlyBusinessPath: If set true. The path in the trigger path (for example, /2016-08-15/proxy/xxx/xxx) will not be passed to the backend, and the backend will only receive the customized backend request path.
         */
        readonly onlyBusinessPath?: boolean | ros.IResolvable;
        /**
         * @Property fcRegionId: The region id of function compute.
         */
        readonly fcRegionId?: string | ros.IResolvable;
        /**
         * @Property contentTypeCatagory: Specify how to determine ContentType header when using function. "DEFAULT" to use API Gateway's default value. "CUSTOM" to use self defined value. "CLIENT" to use client's ContentType header. Default is CLIENT.
         */
        readonly contentTypeCatagory?: string | ros.IResolvable;
        /**
         * @Property roleArn: Ram authorizes the arn of the API gateway access function compute.
         */
        readonly roleArn?: string | ros.IResolvable;
        /**
         * @Property fcBaseUrl: Trigger path. Starts with http:// or https://
         */
        readonly fcBaseUrl?: string | ros.IResolvable;
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
        readonly headerValue: string | ros.IResolvable;
        /**
         * @Property headerName: Response header name
         */
        readonly headerName: string | ros.IResolvable;
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
        readonly openIdApiType: string | ros.IResolvable;
        /**
         * @Property publicKey: The public key.
         */
        readonly publicKey?: string | ros.IResolvable;
        /**
         * @Property publicKeyId: The public key id.
         */
        readonly publicKeyId?: string | ros.IResolvable;
        /**
         * @Property idTokenParamName: The token's parameter name.
         */
        readonly idTokenParamName?: string | ros.IResolvable;
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
        readonly requestPath: string | ros.IResolvable;
        /**
         * @Property requestMode: API request mode. "MAPPING" or "PASSTHROUGH". Default is "MAPPING".
         */
        readonly requestMode: string | ros.IResolvable;
        /**
         * @Property requestProtocol: The protocol of the request, "HTTP", "HTTPS", or "HTTP,HTTPS", Default is "HTTP".
         */
        readonly requestProtocol: string | ros.IResolvable;
        /**
         * @Property requestHttpMethod: The HTTP method of the request. Default is GET.
         */
        readonly requestHttpMethod: string | ros.IResolvable;
        /**
         * @Property postBodyDescription: Description of the post body.
         */
        readonly postBodyDescription?: string | ros.IResolvable;
        /**
         * @Property bodyFormat: Describe how data transform to the server, "FORM" for k-v and "STREAM" for bit stream.BodyFormat is required if RequestMode is specified as MAPPING and RequestHttpMethod is POST/PUT/PATCH.
         */
        readonly bodyFormat?: string | ros.IResolvable;
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
        readonly regularExpression?: string | ros.IResolvable;
        /**
         * @Property parameterType: The type of the parameter
         */
        readonly parameterType: string | ros.IResolvable;
        /**
         * @Property description: Description of the API, less than 180 characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property jsonScheme: The json scheme of the parameter when it is String.
         */
        readonly jsonScheme?: string | ros.IResolvable;
        /**
         * @Property apiParameterName: The name of the request parameter.
         */
        readonly apiParameterName: string | ros.IResolvable;
        /**
         * @Property enumValue: Allowed parameter value, split with ',' like "1,2,3,4"
         */
        readonly enumValue?: string | ros.IResolvable;
        /**
         * @Property minLength: The min length of the parameter when it is String.
         */
        readonly minLength?: number | ros.IResolvable;
        /**
         * @Property maxValue: The max value of the parameter when it is Int, Long, Float or Double.
         */
        readonly maxValue?: number | ros.IResolvable;
        /**
         * @Property maxLength: The max length of the parameter when it is String.
         */
        readonly maxLength?: number | ros.IResolvable;
        /**
         * @Property demoValue: The demo value of the request parameter.
         */
        readonly demoValue?: string | ros.IResolvable;
        /**
         * @Property defaultValue: The default value of the request parameter.
         */
        readonly defaultValue?: string | ros.IResolvable;
        /**
         * @Property required: If required. "REQUIRED", "OPTION"
         */
        readonly required: string | ros.IResolvable;
        /**
         * @Property docOrder: The order of the doc.
         */
        readonly docOrder?: number | ros.IResolvable;
        /**
         * @Property minValue: The min value of the parameter when it is Int, Long, Float or Double.
         */
        readonly minValue?: number | ros.IResolvable;
        /**
         * @Property docShow: Visiablity of the Doc. "PUBLIC" or "PRIVATE"
         */
        readonly docShow?: string | ros.IResolvable;
        /**
         * @Property location: The location of the reqest parameter.
         */
        readonly location: string | ros.IResolvable;
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
        readonly serviceAddress?: string | ros.IResolvable;
        /**
         * @Property functionComputeConfig: The configuration of the function compute. FunctionComputeConfig is required if ServiceFunctionComputeEnable is TRUE.
         */
        readonly functionComputeConfig?: RosApi.FunctionComputeConfigProperty | ros.IResolvable;
        /**
         * @Property mockResult: The returned value when using Mock model.
         */
        readonly mockResult?: string | ros.IResolvable;
        /**
         * @Property contentTypeValue: ContentTypeValue is required if ContentTypeCatagory is DEFAULT or CUSTOM.
         */
        readonly contentTypeValue?: string | ros.IResolvable;
        /**
         * @Property vpcConfig: The configuration of the VPC. VpcConfig is required if ServiceVpcEnable is TRUE.
         */
        readonly vpcConfig?: RosApi.VpcConfigProperty | ros.IResolvable;
        /**
         * @Property serviceVpcEnable: Whether to use VPC. "TRUE" or "FALSE". Default is FALSE.
         */
        readonly serviceVpcEnable?: string | ros.IResolvable;
        /**
         * @Property mockStatusCode: Status code, returned in the format compatible with HTTP 1.1 response status code and its status
         */
        readonly mockStatusCode?: number | ros.IResolvable;
        /**
         * @Property mockHeaders: Custom Mock response header related information when Mock is enabled.
         */
        readonly mockHeaders?: Array<RosApi.MockHeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property serviceHttpMethod: The HTTP method to the service. Default is GET.
         */
        readonly serviceHttpMethod?: string | ros.IResolvable;
        /**
         * @Property servicePath: Backend service call path. If the complete backend service address is http://api.a.com:8080/object/add?key1=value1&key2=value2, ServicePath corresponds to /object/add.
         */
        readonly servicePath?: string | ros.IResolvable;
        /**
         * @Property mock: Whether to use Mock model. "TRUE" or "FALSE". Default is FALSE.
         */
        readonly mock?: string | ros.IResolvable;
        /**
         * @Property serviceTimeOut: Time out (ms) when using service.
         */
        readonly serviceTimeOut?: number | ros.IResolvable;
        /**
         * @Property serviceProtocol: Backend service protocol type, which must be HTTP, HTTPS or FunctionCompute currently.
         */
        readonly serviceProtocol?: string | ros.IResolvable;
        /**
         * @Property contentTypeCatagory: Specify how to determine ContentType header when using service. "DEFAULT" to use API Gateway's default value. "CUSTOM" to use self defined value. "CLIENT" to use client's ContentType header. Default is CLIENT.
         */
        readonly contentTypeCatagory?: string | ros.IResolvable;
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
        readonly parameterType: string | ros.IResolvable;
        /**
         * @Property serviceParameterName: The name of the parameter
         */
        readonly serviceParameterName: string | ros.IResolvable;
        /**
         * @Property location: The location of the parameter
         */
        readonly location: string | ros.IResolvable;
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
        readonly requestParameterName: string | ros.IResolvable;
        /**
         * @Property serviceParameterName: The corresponding service parameter.
         */
        readonly serviceParameterName: string | ros.IResolvable;
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
        readonly demoValue?: string | ros.IResolvable;
        /**
         * @Property description: Description of the system parameter, less than 180 characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property parameterName: The system parameter name.
         */
        readonly parameterName: string | ros.IResolvable;
        /**
         * @Property serviceParameterName: The service parameter name.
         */
        readonly serviceParameterName: string | ros.IResolvable;
        /**
         * @Property location: The location of the system parameter. Default is HEAD.
         */
        readonly location: string | ros.IResolvable;
    }
}
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface TagsProperty {
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
export declare namespace RosApi {
    /**
     * @stability external
     */
    interface VpcConfigProperty {
        /**
         * @Property vpcId: The id of the VPC.
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property instanceId: The id of the instance (ECS/SLB).
         */
        readonly instanceId: string | ros.IResolvable;
        /**
         * @Property port: The port of the VPC.
         */
        readonly port: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::ApiGateway::App`
 */
export interface RosAppProps {
    /**
     * @Property appName: The name of the App.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly appName: string | ros.IResolvable;
    /**
     * @Property description: Description of the App, less than 180 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosApp.TagsProperty[];
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
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute AppKey: The key of the APP
     */
    readonly attrAppKey: ros.IResolvable;
    /**
     * @Attribute AppSecret: The secret of the APP
     */
    readonly attrAppSecret: ros.IResolvable;
    /**
     * @Attribute Tags: Tags of app
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appName: The name of the App.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    appName: string | ros.IResolvable;
    /**
     * @Property description: Description of the App, less than 180 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosApp.TagsProperty[] | undefined;
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
export declare namespace RosApp {
    /**
     * @stability external
     */
    interface TagsProperty {
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
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property stageName: Authorize in this stage.
     */
    readonly stageName: string | ros.IResolvable;
    /**
     * @Property description: Description of the authorization, less than 180 characters.
     */
    readonly description?: string | ros.IResolvable;
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
    groupId: string | ros.IResolvable;
    /**
     * @Property stageName: Authorize in this stage.
     */
    stageName: string | ros.IResolvable;
    /**
     * @Property description: Description of the authorization, less than 180 characters.
     */
    description: string | ros.IResolvable | undefined;
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
    readonly domainName: string | ros.IResolvable;
    /**
     * @Property groupId: The id of the Group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property certificateBody: SSL certificate body.
     */
    readonly certificateBody?: string | ros.IResolvable;
    /**
     * @Property certificateName: SSL certificate name.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly certificateName?: string | ros.IResolvable;
    /**
     * @Property certificatePrivateKey: SSL certificate key.
     */
    readonly certificatePrivateKey?: string | ros.IResolvable;
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
    readonly attrCertificateId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: Custom domain name.
     */
    domainName: string | ros.IResolvable;
    /**
     * @Property groupId: The id of the Group.
     */
    groupId: string | ros.IResolvable;
    /**
     * @Property certificateBody: SSL certificate body.
     */
    certificateBody: string | ros.IResolvable | undefined;
    /**
     * @Property certificateName: SSL certificate name.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    certificateName: string | ros.IResolvable | undefined;
    /**
     * @Property certificatePrivateKey: SSL certificate key.
     */
    certificatePrivateKey: string | ros.IResolvable | undefined;
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
    readonly apiId: string | ros.IResolvable;
    /**
     * @Property groupId: The id of the Group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property stageName: Bind traffic in this stage.
     */
    readonly stageName: string | ros.IResolvable;
    /**
     * @Property description: Description of the deployment, less than 180 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property historyVersion: The history version.
     */
    readonly historyVersion?: string | ros.IResolvable;
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
    apiId: string | ros.IResolvable;
    /**
     * @Property groupId: The id of the Group.
     */
    groupId: string | ros.IResolvable;
    /**
     * @Property stageName: Bind traffic in this stage.
     */
    stageName: string | ros.IResolvable;
    /**
     * @Property description: Description of the deployment, less than 180 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property historyVersion: The history version.
     */
    historyVersion: string | ros.IResolvable | undefined;
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
    readonly groupName: string | ros.IResolvable;
    /**
     * @Property description: Description of the Group, less than 180 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property internetEnable: Enable or disable internet subdomain. True for enable.
     */
    readonly internetEnable?: boolean | ros.IResolvable;
    /**
     * @Property passthroughHeaders: Pass through headers setting. values:
     * host: pass through host headers
     */
    readonly passthroughHeaders?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosGroup.TagsProperty[];
    /**
     * @Property vpcIntranetEnable: Enable or disable VPC intranet subdomain. True for enable.
     */
    readonly vpcIntranetEnable?: boolean | ros.IResolvable;
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
    readonly attrGroupId: ros.IResolvable;
    /**
     * @Attribute SubDomain: The sub domain assigned to the Group by the system
     */
    readonly attrSubDomain: ros.IResolvable;
    /**
     * @Attribute Tags: Tags of app
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    groupName: string | ros.IResolvable;
    /**
     * @Property description: Description of the Group, less than 180 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property internetEnable: Enable or disable internet subdomain. True for enable.
     */
    internetEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property passthroughHeaders: Pass through headers setting. values:
     * host: pass through host headers
     */
    passthroughHeaders: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosGroup.TagsProperty[] | undefined;
    /**
     * @Property vpcIntranetEnable: Enable or disable VPC intranet subdomain. True for enable.
     */
    vpcIntranetEnable: boolean | ros.IResolvable | undefined;
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
export declare namespace RosGroup {
    /**
     * @stability external
     */
    interface TagsProperty {
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
 * Properties for defining a `ALIYUN::ApiGateway::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property httpsPolicy: HTTPS security policy. Valid values: HTTPS2_TLS1_0, HTTPS2_TLS1_2, HTTPS1_1_TLS1_0
     */
    readonly httpsPolicy: string | ros.IResolvable;
    /**
     * @Property instanceName: Instance name
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * @Property instanceSpec: Instance specification. For example: api.s1.small
     */
    readonly instanceSpec: string | ros.IResolvable;
    /**
     * @Property zoneId: Zone to which the instance belongs. For example: cn-beijing-MAZ2(f,g).
     * Pleas call DescribeZones to get supported zone list.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property autoPay: Indicates whether automatic payment is enabled. Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
     * true: Automatic payment is enabled. The payment is automatically made.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force delete the instance even if its status is START_FAILED. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property duration: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * @Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
     */
    readonly pricingCycle?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ApiGateway::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute EgressIpv6Enable: Whether enable egress IPV6.
     */
    readonly attrEgressIpv6Enable: ros.IResolvable;
    /**
     * @Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceType: Instance type.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * @Attribute InternetEgressAddress: Internet egress dddress.
     */
    readonly attrInternetEgressAddress: ros.IResolvable;
    /**
     * @Attribute SupportIpv6: Whether support IPV6.
     */
    readonly attrSupportIpv6: ros.IResolvable;
    /**
     * @Attribute VpcEgressAddress: VPC network egress address.
     */
    readonly attrVpcEgressAddress: ros.IResolvable;
    /**
     * @Attribute VpcIntranetEnable: Whether enable VPC intranet.
     */
    readonly attrVpcIntranetEnable: ros.IResolvable;
    /**
     * @Attribute VpcSlbIntranetEnable: Whether enable VPC SLB intranet.
     */
    readonly attrVpcSlbIntranetEnable: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property httpsPolicy: HTTPS security policy. Valid values: HTTPS2_TLS1_0, HTTPS2_TLS1_2, HTTPS1_1_TLS1_0
     */
    httpsPolicy: string | ros.IResolvable;
    /**
     * @Property instanceName: Instance name
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property instanceSpec: Instance specification. For example: api.s1.small
     */
    instanceSpec: string | ros.IResolvable;
    /**
     * @Property zoneId: Zone to which the instance belongs. For example: cn-beijing-MAZ2(f,g).
     * Pleas call DescribeZones to get supported zone list.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property autoPay: Indicates whether automatic payment is enabled. Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
     * true: Automatic payment is enabled. The payment is automatically made.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Whether force delete the instance even if its status is START_FAILED. Default value is false.
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property duration: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
     */
    duration: number | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ApiGateway::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
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
    readonly slsLogStore: string | ros.IResolvable;
    /**
     * @Property slsProject: Project name of SLS
     */
    readonly slsProject: string | ros.IResolvable;
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
    readonly attrSlsLogStore: ros.IResolvable;
    /**
     * @Attribute SlsProject: Project name of SLS
     */
    readonly attrSlsProject: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property slsLogStore: Logstore name of SLS
     */
    slsLogStore: string | ros.IResolvable;
    /**
     * @Property slsProject: Project name of SLS
     */
    slsProject: string | ros.IResolvable;
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
 * Properties for defining a `ALIYUN::ApiGateway::Plugin`
 */
export interface RosPluginProps {
    /**
     * @Property pluginData: The definition statement of the plug-in. Plug-in definition statements in the JSON and YAML formats are supported.
     */
    readonly pluginData: string | ros.IResolvable;
    /**
     * @Property pluginName: The name of the plug-in that you want to create. It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
     */
    readonly pluginName: string | ros.IResolvable;
    /**
     * @Property pluginType: The type of the plug-in. Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
     */
    readonly pluginType: string | ros.IResolvable;
    /**
     * @Property description: The description of the plug-in, which cannot exceed 200 characters.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ApiGateway::Plugin`
 */
export declare class RosPlugin extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::Plugin";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Description: The description of the plug-in, which cannot exceed 200 characters.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute PluginData: The definition statement of the plug-in. Plug-in definition statements in the JSON and YAML formats are supported.
     */
    readonly attrPluginData: ros.IResolvable;
    /**
     * @Attribute PluginId: The generated plugin ID.
     */
    readonly attrPluginId: ros.IResolvable;
    /**
     * @Attribute PluginName: The name of the plug-in that you want to create. It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
     */
    readonly attrPluginName: ros.IResolvable;
    /**
     * @Attribute PluginType: The type of the plug-in. Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
     */
    readonly attrPluginType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property pluginData: The definition statement of the plug-in. Plug-in definition statements in the JSON and YAML formats are supported.
     */
    pluginData: string | ros.IResolvable;
    /**
     * @Property pluginName: The name of the plug-in that you want to create. It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
     */
    pluginName: string | ros.IResolvable;
    /**
     * @Property pluginType: The type of the plug-in. Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
     */
    pluginType: string | ros.IResolvable;
    /**
     * @Property description: The description of the plug-in, which cannot exceed 200 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ApiGateway::Plugin`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::ApiGateway::PluginAttachment`
 */
export interface RosPluginAttachmentProps {
    /**
     * @Property apiId: The ID of the API to which you want to bind the plug-in.
     */
    readonly apiId: string | ros.IResolvable;
    /**
     * @Property pluginId: The ID of the plugin that you want to bind.
     */
    readonly pluginId: string | ros.IResolvable;
    /**
     * @Property stageName: The name of the runtime environment. Valid values:
     * RELEASE: indicates the release environment.
     * PRE: indicates the pre-release environment.
     * TEST: indicates the test environment.
     */
    readonly stageName: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ApiGateway::PluginAttachment`
 */
export declare class RosPluginAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ApiGateway::PluginAttachment";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ApiId: The api id.
     */
    readonly attrApiId: ros.IResolvable;
    /**
     * @Attribute PluginId: The plugin id.
     */
    readonly attrPluginId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property apiId: The ID of the API to which you want to bind the plug-in.
     */
    apiId: string | ros.IResolvable;
    /**
     * @Property pluginId: The ID of the plugin that you want to bind.
     */
    pluginId: string | ros.IResolvable;
    /**
     * @Property stageName: The name of the runtime environment. Valid values:
     * RELEASE: indicates the release environment.
     * PRE: indicates the pre-release environment.
     * TEST: indicates the test environment.
     */
    stageName: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::ApiGateway::PluginAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginAttachmentProps, enableResourcePropertyConstraint: boolean);
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
    readonly signatureKey: string | ros.IResolvable;
    /**
     * @Property signatureName: The name of the Signature.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly signatureName: string | ros.IResolvable;
    /**
     * @Property signatureSecret: The secret of the signature.
     */
    readonly signatureSecret: string | ros.IResolvable;
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
    readonly attrSignatureId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property signatureKey: The key of the signature.
     */
    signatureKey: string | ros.IResolvable;
    /**
     * @Property signatureName: The name of the Signature.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    signatureName: string | ros.IResolvable;
    /**
     * @Property signatureSecret: The secret of the signature.
     */
    signatureSecret: string | ros.IResolvable;
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
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property signatureId: The id of the Signature.
     */
    readonly signatureId: string | ros.IResolvable;
    /**
     * @Property stageName: Bind signature in this stage.
     */
    readonly stageName: string | ros.IResolvable;
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
    groupId: string | ros.IResolvable;
    /**
     * @Property signatureId: The id of the Signature.
     */
    signatureId: string | ros.IResolvable;
    /**
     * @Property stageName: Bind signature in this stage.
     */
    stageName: string | ros.IResolvable;
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
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property stageName: The name of the Stage.
     */
    readonly stageName: string | ros.IResolvable;
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
    groupId: string | ros.IResolvable;
    /**
     * @Property stageName: The name of the Stage.
     */
    stageName: string | ros.IResolvable;
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
    readonly apiDefault: number | ros.IResolvable;
    /**
     * @Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly trafficControlName: string | ros.IResolvable;
    /**
     * @Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
     */
    readonly trafficControlUnit: string | ros.IResolvable;
    /**
     * @Property appDefault: Default APP traffic value.
     */
    readonly appDefault?: string | ros.IResolvable;
    /**
     * @Property description: Description of the traffic control, less than 180 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property special: Special traffic controls.
     */
    readonly special?: Array<RosTrafficControl.SpecialProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property userDefault: Default user traffic value.
     */
    readonly userDefault?: string | ros.IResolvable;
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
    readonly attrTrafficControlId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property apiDefault: Default API traffic value.
     */
    apiDefault: number | ros.IResolvable;
    /**
     * @Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    trafficControlName: string | ros.IResolvable;
    /**
     * @Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
     */
    trafficControlUnit: string | ros.IResolvable;
    /**
     * @Property appDefault: Default APP traffic value.
     */
    appDefault: string | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the traffic control, less than 180 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property special: Special traffic controls.
     */
    special: Array<RosTrafficControl.SpecialProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property userDefault: Default user traffic value.
     */
    userDefault: string | ros.IResolvable | undefined;
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
        readonly specialKey: string | ros.IResolvable;
        /**
         * @Property specialType: The type of special traffic control.
         */
        readonly specialType: string | ros.IResolvable;
        /**
         * @Property trafficValue: The value of special traffic control
         */
        readonly trafficValue: number | ros.IResolvable;
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
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property stageName: Bind traffic in this stage.
     */
    readonly stageName: string | ros.IResolvable;
    /**
     * @Property trafficControlId: The id of traffic control.
     */
    readonly trafficControlId: string | ros.IResolvable;
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
    groupId: string | ros.IResolvable;
    /**
     * @Property stageName: Bind traffic in this stage.
     */
    stageName: string | ros.IResolvable;
    /**
     * @Property trafficControlId: The id of traffic control.
     */
    trafficControlId: string | ros.IResolvable;
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
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property name: The name of one VPC access configuration.Need [4, 50] Chinese\English\Number characters "-" or "_",and should start with Chinese/English character.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property port: The port of the VPC.
     */
    readonly port: number | ros.IResolvable;
    /**
     * @Property vpcId: The id of the VPC.
     */
    readonly vpcId: string | ros.IResolvable;
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
    instanceId: string | ros.IResolvable;
    /**
     * @Property name: The name of one VPC access configuration.Need [4, 50] Chinese\English\Number characters "-" or "_",and should start with Chinese/English character.
     */
    name: string | ros.IResolvable;
    /**
     * @Property port: The port of the VPC.
     */
    port: number | ros.IResolvable;
    /**
     * @Property vpcId: The id of the VPC.
     */
    vpcId: string | ros.IResolvable;
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
