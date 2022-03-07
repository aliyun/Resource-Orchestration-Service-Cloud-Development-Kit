import * as ros from '@alicloud/ros-cdk-core';
import { RosApi } from './apigateway.generated';
export { RosApi as ApiProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::Api`
 */
export interface ApiProps {
    /**
     * Property apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
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
     * Property resultSample: The sample of the result.
     */
    readonly resultSample: string | ros.IResolvable;
    /**
     * Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
     */
    readonly resultType: string | ros.IResolvable;
    /**
     * Property serviceConfig: The configuration of the service.
     */
    readonly serviceConfig: RosApi.ServiceConfigProperty | ros.IResolvable;
    /**
     * Property visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
     */
    readonly visibility: string | ros.IResolvable;
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
}
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::Api`
 */
export declare class Api extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ApiId: The id of the API.
     */
    readonly attrApiId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ApiGateway::Api`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApiProps, enableResourcePropertyConstraint?: boolean);
}
