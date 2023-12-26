import * as ros from '@alicloud/ros-cdk-core';
import { RosCenRouteMaps } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class CenRouteMaps extends ros.Resource {

    /**
     * Attribute RouteMapIds: The list of The RouteMap ids.
     */
    public readonly attrRouteMapIds: ros.IResolvable;

    /**
     * Attribute RouteMaps: The information about RouteMaps.
     */
    public readonly attrRouteMaps: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenRouteMapsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCenRouteMaps = new RosCenRouteMaps(this, id,  {
            transitRouterRouteTableId: props.transitRouterRouteTableId,
            transmitDirection: props.transmitDirection,
            cenId: props.cenId,
            cenRegionId: props.cenRegionId,
            routeMapId: props.routeMapId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenRouteMaps;
        this.attrRouteMapIds = rosCenRouteMaps.attrRouteMapIds;
        this.attrRouteMaps = rosCenRouteMaps.attrRouteMaps;
    }
}
