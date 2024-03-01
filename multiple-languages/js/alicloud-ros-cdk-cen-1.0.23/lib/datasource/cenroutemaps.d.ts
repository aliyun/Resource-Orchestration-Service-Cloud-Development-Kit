import * as ros from '@alicloud/ros-cdk-core';
import { RosCenRouteMaps } from './cen.generated';
export { RosCenRouteMaps as CenRouteMapsProperty };
/**
 * Properties for defining a `CenRouteMaps`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CEN::CenRouteMaps`, which is used to query the details of routing policies.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenRouteMaps`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps
 */
export declare class CenRouteMaps extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CenRouteMapsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute RouteMapIds: The list of The RouteMap ids.
     */
    readonly attrRouteMapIds: ros.IResolvable;
    /**
     * Attribute RouteMaps: The information about RouteMaps.
     */
    readonly attrRouteMaps: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenRouteMapsProps, enableResourcePropertyConstraint?: boolean);
}
