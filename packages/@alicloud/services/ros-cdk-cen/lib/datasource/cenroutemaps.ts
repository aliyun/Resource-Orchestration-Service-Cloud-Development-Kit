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
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

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
 * Represents a `CenRouteMaps`.
 */
export interface ICenRouteMaps extends ros.IResource {
    readonly props: CenRouteMapsProps;

    /**
     * Attribute RouteMapIds: The list of The RouteMap ids.
     */
    readonly attrRouteMapIds: ros.IResolvable | string;

    /**
     * Attribute RouteMaps: The information about RouteMaps.
     */
    readonly attrRouteMaps: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CEN::CenRouteMaps`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenRouteMaps`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps
 */
export class CenRouteMaps extends ros.Resource implements ICenRouteMaps {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CenRouteMapsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RouteMapIds: The list of The RouteMap ids.
     */
    public readonly attrRouteMapIds: ros.IResolvable | string;

    /**
     * Attribute RouteMaps: The information about RouteMaps.
     */
    public readonly attrRouteMaps: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenRouteMapsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCenRouteMaps = new RosCenRouteMaps(this, id,  {
            transitRouterRouteTableId: props.transitRouterRouteTableId,
            cenId: props.cenId,
            transmitDirection: props.transmitDirection,
            cenRegionId: props.cenRegionId,
            routeMapId: props.routeMapId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenRouteMaps;
        this.attrRouteMapIds = rosCenRouteMaps.attrRouteMapIds;
        this.attrRouteMaps = rosCenRouteMaps.attrRouteMaps;
    }
}
