import * as ros from '@alicloud/ros-cdk-core';
import { RosHttpApi } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `HttpApi`.
 */
export interface IHttpApi extends ros.IResource {
    readonly props: HttpApiProps;

    /**
     * Attribute BasePath: The base path of the API.
     */
    readonly attrBasePath: ros.IResolvable | string;

    /**
     * Attribute Description: Description of API.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Environments: Published Environmental Information of the API.
     */
    readonly attrEnvironments: ros.IResolvable | string;

    /**
     * Attribute HttpApiId: The ID of the API.
     */
    readonly attrHttpApiId: ros.IResolvable | string;

    /**
     * Attribute HttpApiName: The name of the API.
     */
    readonly attrHttpApiName: ros.IResolvable | string;

    /**
     * Attribute Protocols: List of API Access Protocols.
     */
    readonly attrProtocols: ros.IResolvable | string;

    /**
     * Attribute Type: The type of HTTP API
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::HttpApi`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHttpApi`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
 */
export class HttpApi extends ros.Resource implements IHttpApi {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: HttpApiProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BasePath: The base path of the API.
     */
    public readonly attrBasePath: ros.IResolvable | string;

    /**
     * Attribute Description: Description of API.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Environments: Published Environmental Information of the API.
     */
    public readonly attrEnvironments: ros.IResolvable | string;

    /**
     * Attribute HttpApiId: The ID of the API.
     */
    public readonly attrHttpApiId: ros.IResolvable | string;

    /**
     * Attribute HttpApiName: The name of the API.
     */
    public readonly attrHttpApiName: ros.IResolvable | string;

    /**
     * Attribute Protocols: List of API Access Protocols.
     */
    public readonly attrProtocols: ros.IResolvable | string;

    /**
     * Attribute Type: The type of HTTP API
     */
    public readonly attrType: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HttpApiProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosHttpApi = new RosHttpApi(this, id,  {
            httpApiName: props.httpApiName,
            type: props.type,
            protocols: props.protocols,
            description: props.description,
            basePath: props.basePath,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHttpApi;
        this.attrBasePath = rosHttpApi.attrBasePath;
        this.attrDescription = rosHttpApi.attrDescription;
        this.attrEnvironments = rosHttpApi.attrEnvironments;
        this.attrHttpApiId = rosHttpApi.attrHttpApiId;
        this.attrHttpApiName = rosHttpApi.attrHttpApiName;
        this.attrProtocols = rosHttpApi.attrProtocols;
        this.attrType = rosHttpApi.attrType;
    }
}
