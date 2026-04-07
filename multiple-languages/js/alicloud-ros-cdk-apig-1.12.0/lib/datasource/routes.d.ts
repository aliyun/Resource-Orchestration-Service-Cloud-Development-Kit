import * as ros from '@alicloud/ros-cdk-core';
import { RosRoutes } from './apig.generated';
export { RosRoutes as RoutesProperty };
/**
 * Properties for defining a `Routes`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-routes
 */
export interface RoutesProps {
    /**
     * Property httpApiId: HTTP API ID.
     */
    readonly httpApiId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property routeName: The name of the route.
     */
    readonly routeName?: string | ros.IResolvable;
}
/**
 * Represents a `Routes`.
 */
export interface IRoutes extends ros.IResource {
    readonly props: RoutesProps;
    /**
     * Attribute RouteIds: The list of route IDs.
     */
    readonly attrRouteIds: ros.IResolvable | string;
    /**
     * Attribute Routes: The list of routes.
     */
    readonly attrRoutes: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::Routes`, which is used to query routes.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRoutes`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-routes
 */
export declare class Routes extends ros.Resource implements IRoutes {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RoutesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute RouteIds: The list of route IDs.
     */
    readonly attrRouteIds: ros.IResolvable | string;
    /**
     * Attribute Routes: The list of routes.
     */
    readonly attrRoutes: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RoutesProps, enableResourcePropertyConstraint?: boolean);
}
