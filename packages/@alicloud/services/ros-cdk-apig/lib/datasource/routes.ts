import * as ros from '@alicloud/ros-cdk-core';
import { RosRoutes } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::Routes`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRoutes`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-routes
 */
export class Routes extends ros.Resource implements IRoutes {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RoutesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RouteIds: The list of route IDs.
     */
    public readonly attrRouteIds: ros.IResolvable | string;

    /**
     * Attribute Routes: The list of routes.
     */
    public readonly attrRoutes: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RoutesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRoutes = new RosRoutes(this, id,  {
            routeName: props.routeName,
            httpApiId: props.httpApiId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRoutes;
        this.attrRouteIds = rosRoutes.attrRouteIds;
        this.attrRoutes = rosRoutes.attrRoutes;
    }
}
