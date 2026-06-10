import * as ros from '@alicloud/ros-cdk-core';
import { RosGatewayRoute } from './mse.generated';
export { RosGatewayRoute as GatewayRouteProperty };
/**
 * Properties for defining a `GatewayRoute`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute
 */
export interface GatewayRouteProps {
    /**
     * Property domainIdList: The list of domain IDs in JSON format.
     */
    readonly domainIdList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property gatewayUniqueId: The unique ID of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;
    /**
     * Property name: The name of the route.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property description: The description of the route.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property destinationType: The type of destination service. Valid values:
     * - Single: single service
     * - Multiple: multiple services
     * - VersionOriented: tag-based routing
     * - Mock: mock response
     * - Redirect: redirect
     */
    readonly destinationType?: string | ros.IResolvable;
    /**
     * Property directResponseJson: Configuration for mock response.
     */
    readonly directResponseJson?: RosGatewayRoute.DirectResponseJSONProperty | ros.IResolvable;
    /**
     * Property domainId: The ID of the domain.
     */
    readonly domainId?: number | ros.IResolvable;
    /**
     * Property fallback: Whether to enable fallback service.
     */
    readonly fallback?: boolean | ros.IResolvable;
    /**
     * Property fallbackServices: The list of fallback services.
     */
    readonly fallbackServices?: Array<RosGatewayRoute.FallbackServicesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property gatewayId: The ID of the gateway.
     */
    readonly gatewayId?: number | ros.IResolvable;
    /**
     * Property policies: The JSON string of route policies.
     */
    readonly policies?: string | ros.IResolvable;
    /**
     * Property predicates: Matching rules for the route.
     */
    readonly predicates?: RosGatewayRoute.PredicatesProperty | ros.IResolvable;
    /**
     * Property redirectJson: Configuration for redirect.
     */
    readonly redirectJson?: RosGatewayRoute.RedirectJSONProperty | ros.IResolvable;
    /**
     * Property routeOrder: The order of the route. Smaller values indicate higher priority.
     */
    readonly routeOrder?: number | ros.IResolvable;
    /**
     * Property routeType: The type of the route. Valid value: Op (control route).
     */
    readonly routeType?: string | ros.IResolvable;
    /**
     * Property services: The list of backend services. Required when DestinationType is Single, Multiple, or VersionOriented.
     */
    readonly services?: Array<RosGatewayRoute.ServicesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `GatewayRoute`.
 */
export interface IGatewayRoute extends ros.IResource {
    readonly props: GatewayRouteProps;
    /**
     * Attribute RouteId: The ID of the route.
     */
    readonly attrRouteId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::GatewayRoute`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGatewayRoute`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute
 */
export declare class GatewayRoute extends ros.Resource implements IGatewayRoute {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GatewayRouteProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute RouteId: The ID of the route.
     */
    readonly attrRouteId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GatewayRouteProps, enableResourcePropertyConstraint?: boolean);
}
