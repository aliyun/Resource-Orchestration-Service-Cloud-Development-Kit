import * as ros from '@alicloud/ros-cdk-core';
import { RosApi } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApi as ApiProperty };

/**
 * Properties for defining a `ALIYUN::ApiGateway::Api`
 */
export interface ApiProps {

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
 * A ROS resource type:  `ALIYUN::ApiGateway::Api`
 */
export class Api extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute ApiId: The id of the API.
     */
    public readonly attrApiId: any;

    /**
     * Create a new `ALIYUN::ApiGateway::Api`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApiProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosApi = new RosApi(this, id,  {
            requestConfig: props.requestConfig,
            description: props.description,
            resultSample: props.resultSample,
            apiName: props.apiName,
            resultType: props.resultType ? props.resultType : 'JSON',
            failResultSample: props.failResultSample,
            errorCodeSamples: props.errorCodeSamples,
            serviceParametersMap: props.serviceParametersMap,
            groupId: props.groupId,
            requestParameters: props.requestParameters,
            appCodeAuthType: props.appCodeAuthType,
            serviceConfig: props.serviceConfig,
            constParameters: props.constParameters,
            systemParameters: props.systemParameters,
            openIdConnectConfig: props.openIdConnectConfig,
            visibility: props.visibility,
            serviceParameters: props.serviceParameters,
            authType: props.authType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApi;
        this.attrApiId = rosApi.attrApiId;
    }
}
