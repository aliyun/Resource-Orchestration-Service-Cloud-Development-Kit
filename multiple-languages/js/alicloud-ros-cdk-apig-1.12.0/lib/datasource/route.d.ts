import * as ros from '@alicloud/ros-cdk-core';
import { RosRoute } from './apig.generated';
export { RosRoute as RouteProperty };
/**
 * Properties for defining a `Route`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-route
 */
export interface RouteProps {
    /**
     * Property httpApiId: The ID of the HTTP API.
     */
    readonly httpApiId: string | ros.IResolvable;
    /**
     * Property routeId: The ID of route resource.
     */
    readonly routeId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Route`.
 */
export interface IRoute extends ros.IResource {
    readonly props: RouteProps;
    /**
     * Attribute Backend: backend services.
     */
    readonly attrBackend: ros.IResolvable | string;
    /**
     * Attribute Description: description of route resource.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DomainInfos: domain items.
     */
    readonly attrDomainInfos: ros.IResolvable | string;
    /**
     * Attribute EnvironmentInfo: environment information.
     */
    readonly attrEnvironmentInfo: ros.IResolvable | string;
    /**
     * Attribute Match: the match rule of route resource.
     */
    readonly attrMatch: ros.IResolvable | string;
    /**
     * Attribute RouteId: The ID of route resource.
     */
    readonly attrRouteId: ros.IResolvable | string;
    /**
     * Attribute RouteName: The name of the route.
     */
    readonly attrRouteName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::Route`, which is used to query the information about a route.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRoute`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-route
 */
export declare class Route extends ros.Resource implements IRoute {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RouteProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Backend: backend services.
     */
    readonly attrBackend: ros.IResolvable | string;
    /**
     * Attribute Description: description of route resource.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DomainInfos: domain items.
     */
    readonly attrDomainInfos: ros.IResolvable | string;
    /**
     * Attribute EnvironmentInfo: environment information.
     */
    readonly attrEnvironmentInfo: ros.IResolvable | string;
    /**
     * Attribute Match: the match rule of route resource.
     */
    readonly attrMatch: ros.IResolvable | string;
    /**
     * Attribute RouteId: The ID of route resource.
     */
    readonly attrRouteId: ros.IResolvable | string;
    /**
     * Attribute RouteName: The name of the route.
     */
    readonly attrRouteName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteProps, enableResourcePropertyConstraint?: boolean);
}
