import * as ros from '@alicloud/ros-cdk-core';
import { RosHttpApi } from './apig.generated';
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
export declare class HttpApi extends ros.Resource implements IHttpApi {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HttpApiProps;
    protected enableResourcePropertyConstraint: boolean;
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
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HttpApiProps, enableResourcePropertyConstraint?: boolean);
}
