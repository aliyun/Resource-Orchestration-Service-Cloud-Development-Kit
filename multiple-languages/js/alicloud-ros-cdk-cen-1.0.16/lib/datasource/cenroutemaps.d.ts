import * as ros from '@alicloud/ros-cdk-core';
import { RosCenRouteMaps } from './cen.generated';
export { RosCenRouteMaps as CenRouteMapsProperty };
/**
 * Properties for defining a `DATASOURCE::CEN::CenRouteMaps`
 */
export interface CenRouteMapsProps {
    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * Property cenRegionId: The ID of the region where the routing policy is applied.
     */
    readonly cenRegionId?: string | ros.IResolvable;
    /**
     * Property routeMapId: The ID of the routing policy.
     */
    readonly routeMapId?: string | ros.IResolvable;
    /**
     * Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.
     */
    readonly transitRouterRouteTableId?: string | ros.IResolvable;
    /**
     * Property transmitDirection: The direction in which the routing policy is applied.
     */
    readonly transmitDirection?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::CEN::CenRouteMaps`
 */
export declare class CenRouteMaps extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute RouteMapIds: The list of The RouteMap ids.
     */
    readonly attrRouteMapIds: ros.IResolvable;
    /**
     * Attribute RouteMaps: The information about RouteMaps.
     */
    readonly attrRouteMaps: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::CEN::CenRouteMaps`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenRouteMapsProps, enableResourcePropertyConstraint?: boolean);
}
