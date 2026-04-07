import * as ros from '@alicloud/ros-cdk-core';
import { RosHttpApi } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHttpApi as HttpApiProperty };

/**
 * Properties for defining a `HttpApi`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-httpapi
 */
export interface HttpApiProps {

    /**
     * Property httpApiId: The ID of the API.
     */
    readonly httpApiId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Type: The type of HTTP API.
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::HttpApi`, which is used to query the information about an HTTP API.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHttpApi`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-httpapi
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
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Type: The type of HTTP API.
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
            httpApiId: props.httpApiId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHttpApi;
        this.attrBasePath = rosHttpApi.attrBasePath;
        this.attrDescription = rosHttpApi.attrDescription;
        this.attrHttpApiId = rosHttpApi.attrHttpApiId;
        this.attrHttpApiName = rosHttpApi.attrHttpApiName;
        this.attrProtocols = rosHttpApi.attrProtocols;
        this.attrResourceGroupId = rosHttpApi.attrResourceGroupId;
        this.attrType = rosHttpApi.attrType;
    }
}
