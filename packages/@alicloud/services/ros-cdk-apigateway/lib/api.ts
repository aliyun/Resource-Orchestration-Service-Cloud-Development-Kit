import * as ros from '@alicloud/ros-cdk-core';
import { RosApi } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApi as ApiProperty };

/**
 * Properties for defining a `Api`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-api
 */
export interface ApiProps {

    /**
     * Property apiName: The name of the API.It must be 4 to 128 characters in length, and can contain letters, digits, underscores (_), dashes (-), spaces and dots (.), It must start with a letter.
     */
    readonly apiName: string | ros.IResolvable;

    /**
     * Property groupId: The id of the Group.
     */
    readonly groupId: string | ros.IResolvable;

    /**
     * Property requestConfig: The configuration of the request
     */
    readonly requestConfig: RosApi.RequestConfigProperty | ros.IResolvable;

    /**
     * Property serviceConfig: The configuration of the service.
     */
    readonly serviceConfig: RosApi.ServiceConfigProperty | ros.IResolvable;

    /**
     * Property visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
     */
    readonly visibility: string | ros.IResolvable;

    /**
     * Property allowSignatureMethod: If the AuthType is APP authentication, you need to pass this value to specify the signature algorithm. If you do not specify this parameter, the default value HmacSHA256 is used. Valid values:
     * HmacSHA256
     * HmacSHA1,HmacSHA256
     */
    readonly allowSignatureMethod?: string | ros.IResolvable;

    /**
     * Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
     * DEFAULT: Default (set by group).
     * DISABLE: Not allowed
     * HEADER: Allow AppCode header authentication
     * HEADER_QUERY: Allow AppCode header and query authentication
     */
    readonly appCodeAuthType?: string | ros.IResolvable;

    /**
     * Property authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
     */
    readonly authType?: string | ros.IResolvable;

    /**
     * Property constParameters: The const parameters.
     */
    readonly constParameters?: Array<RosApi.ConstParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property description: Description of the API, less than 180 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property disableInternet: Set DisableInternet to true, only support intranet to call API. 
     * Set DisableInternet to false, then the call is not restricted. 
     *
     */
    readonly disableInternet?: boolean | ros.IResolvable;

    /**
     * Property errorCodeSamples: The Error Code samples.
     */
    readonly errorCodeSamples?: Array<RosApi.ErrorCodeSamplesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property failResultSample: The sample of the fail result.
     */
    readonly failResultSample?: string | ros.IResolvable;

    /**
     * Property forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting, 
     * this is the unique identifier of the request, generally using UUID to identify. 
     * The API gateway will verify the validity of this parameter after receiving this parameter. 
     * The same value can only be used once within 15 minutes. It can effectively prevent API replay attacks.
     * Set ForceNonceCheck to false, then no check.
     */
    readonly forceNonceCheck?: boolean | ros.IResolvable;

    /**
     * Property openIdConnectConfig: The configuration of the open id.
     */
    readonly openIdConnectConfig?: RosApi.OpenIdConnectConfigProperty | ros.IResolvable;

    /**
     * Property requestParameters: The request parameters.
     */
    readonly requestParameters?: Array<RosApi.RequestParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resultBodyModel: The return result of the API.
     */
    readonly resultBodyModel?: string | ros.IResolvable;

    /**
     * Property resultDescriptions: The return description of the API.
     */
    readonly resultDescriptions?: string | ros.IResolvable;

    /**
     * Property resultSample: The sample of the result.
     */
    readonly resultSample?: string | ros.IResolvable;

    /**
     * Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
     */
    readonly resultType?: string | ros.IResolvable;

    /**
     * Property serviceParameters: The service parameters.
     */
    readonly serviceParameters?: Array<RosApi.ServiceParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.
     */
    readonly serviceParametersMap?: Array<RosApi.ServiceParametersMapProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property systemParameters: The system parameters.
     */
    readonly systemParameters?: Array<RosApi.SystemParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosApi.TagsProperty[];

    /**
     * Property webSocketApiType: The type of the two-way communication API.
     * COMMON: common API
     * REGISTER: registered API
     * UNREGISTER: unregistered API
     * NOTIFY: downstream notification API
     */
    readonly webSocketApiType?: string | ros.IResolvable;
}

/**
 * Represents a `Api`.
 */
export interface IApi extends ros.IResource {
    readonly props: ApiProps;

    /**
     * Attribute ApiId: The id of the API.
     */
    readonly attrApiId: ros.IResolvable | string;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::Api`, which is used to create an API.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApi`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-api
 */
export class Api extends ros.Resource implements IApi {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ApiProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ApiId: The id of the API.
     */
    public readonly attrApiId: ros.IResolvable | string;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApiProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosApi = new RosApi(this, id,  {
            description: props.description,
            forceNonceCheck: props.forceNonceCheck,
            allowSignatureMethod: props.allowSignatureMethod,
            errorCodeSamples: props.errorCodeSamples,
            requestParameters: props.requestParameters,
            serviceParametersMap: props.serviceParametersMap,
            appCodeAuthType: props.appCodeAuthType,
            resultBodyModel: props.resultBodyModel,
            serviceConfig: props.serviceConfig,
            webSocketApiType: props.webSocketApiType,
            resultDescriptions: props.resultDescriptions,
            openIdConnectConfig: props.openIdConnectConfig,
            authType: props.authType,
            tags: props.tags,
            requestConfig: props.requestConfig,
            resultSample: props.resultSample,
            disableInternet: props.disableInternet,
            apiName: props.apiName,
            resultType: props.resultType === undefined || props.resultType === null ? 'JSON' : props.resultType,
            failResultSample: props.failResultSample,
            groupId: props.groupId,
            constParameters: props.constParameters,
            systemParameters: props.systemParameters,
            visibility: props.visibility,
            serviceParameters: props.serviceParameters,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApi;
        this.attrApiId = rosApi.attrApiId;
        this.attrArn = rosApi.attrArn;
    }
}
