import * as ros from '@alicloud/ros-cdk-core';
import { RosHttpApi } from './apig.generated';
export { RosHttpApi as HttpApiProperty };
/**
 * Properties for defining a `HttpApi`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
 */
export interface HttpApiProps {
    /**
     * Property httpApiName: The name of the HTTP API.
     */
    readonly httpApiName: string | ros.IResolvable;
    /**
     * Property agentProtocols: The agent protocols of the HTTP API.
     */
    readonly agentProtocols?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property aiProtocols: The AI protocols of the HTTP API.
     */
    readonly aiProtocols?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property authConfig: The authentication configuration.
     */
    readonly authConfig?: RosHttpApi.AuthConfigProperty | ros.IResolvable;
    /**
     * Property basePath: The base path of the HTTP API.
     */
    readonly basePath?: string | ros.IResolvable;
    /**
     * Property belongGatewayId: The gateway ID that the HTTP API belongs to.
     */
    readonly belongGatewayId?: string | ros.IResolvable;
    /**
     * Property builtinRouteNames: The builtin route names.
     */
    readonly builtinRouteNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property deployConfigs: The deploy configurations of the HTTP API.
     */
    readonly deployConfigs?: Array<RosHttpApi.DeployConfigsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property description: The description of the HTTP API.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property enableAuth: Whether to enable authentication.
     */
    readonly enableAuth?: boolean | ros.IResolvable;
    /**
     * Property firstByteTimeout: The first byte timeout.
     */
    readonly firstByteTimeout?: number | ros.IResolvable;
    /**
     * Property ingressConfig: The ingress configuration of the HTTP API.
     */
    readonly ingressConfig?: RosHttpApi.IngressConfigProperty | ros.IResolvable;
    /**
     * Property modelCategory: The model category.
     */
    readonly modelCategory?: string | ros.IResolvable;
    /**
     * Property onlyChangeConfig: Whether to only change config without triggering redeployment. True means only modify configuration without triggering redeployment.
     */
    readonly onlyChangeConfig?: boolean | ros.IResolvable;
    /**
     * Property protocols: The protocols supported by the HTTP API.
     */
    readonly protocols?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property removeBasePathOnForward: Whether to remove the base path on forward.
     */
    readonly removeBasePathOnForward?: boolean | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property strategy: The strategy of the HTTP API.
     */
    readonly strategy?: string | ros.IResolvable;
    /**
     * Property type: The type of the HTTP API.
     */
    readonly type?: string | ros.IResolvable;
    /**
     * Property versionConfig: The version configuration of the HTTP API.
     */
    readonly versionConfig?: RosHttpApi.VersionConfigProperty | ros.IResolvable;
}
/**
 * Represents a `HttpApi`.
 */
export interface IHttpApi extends ros.IResource {
    readonly props: HttpApiProps;
    /**
     * Attribute HttpApiId: The ID of the HTTP API.
     */
    readonly attrHttpApiId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::HttpApi`, which is used to create an HTTP API.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHttpApi`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
 */
export declare class HttpApi extends ros.Resource implements IHttpApi {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HttpApiProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute HttpApiId: The ID of the HTTP API.
     */
    readonly attrHttpApiId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HttpApiProps, enableResourcePropertyConstraint?: boolean);
}
