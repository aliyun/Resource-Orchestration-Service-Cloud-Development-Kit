import * as ros from '@alicloud/ros-cdk-core';
import { RosHttpApi } from './apig.generated';
export { RosHttpApi as HttpApiProperty };
/**
 * Properties for defining a `HttpApi`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
 */
export interface HttpApiProps {
    /**
     * Property httpApiName: The name of the API.
     */
    readonly httpApiName: string | ros.IResolvable;
    /**
     * Property protocols: List of API Access Protocols.
     */
    readonly protocols: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property basePath: The base path of the API should start with a \/.
     */
    readonly basePath?: string | ros.IResolvable;
    /**
     * Property description: Description of API.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property type: The type of HTTP API, Valid values:
     * * Http
     * * Rest
     * * WebSocket
     * * HttpIngress
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::HttpApi`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHttpApi`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
 */
export declare class HttpApi extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: HttpApiProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BasePath: The base path of the API.
     */
    readonly attrBasePath: ros.IResolvable;
    /**
     * Attribute Description: Description of API.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute Environments: Published Environmental Information of the API.
     */
    readonly attrEnvironments: ros.IResolvable;
    /**
     * Attribute HttpApiId: The ID of the API.
     */
    readonly attrHttpApiId: ros.IResolvable;
    /**
     * Attribute HttpApiName: The name of the API.
     */
    readonly attrHttpApiName: ros.IResolvable;
    /**
     * Attribute Protocols: List of API Access Protocols.
     */
    readonly attrProtocols: ros.IResolvable;
    /**
     * Attribute Type: The type of HTTP API
     */
    readonly attrType: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HttpApiProps, enableResourcePropertyConstraint?: boolean);
}
