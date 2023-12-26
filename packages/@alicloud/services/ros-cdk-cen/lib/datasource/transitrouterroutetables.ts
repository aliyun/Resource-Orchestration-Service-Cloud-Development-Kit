import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteTables } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterRouteTables as TransitRouterRouteTablesProperty };

/**
 * Properties for defining a `TransitRouterRouteTables`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterroutetables
 */
export interface TransitRouterRouteTablesProps {

    /**
     * Property transitRouterId: The ID of the Enterprise Edition transit router.
     */
    readonly transitRouterId: string | ros.IResolvable;

    /**
     * Property transitRouterRouteTableIds: The ID of the route table.
     * You can query multiple route tables in each call. Maximum value of N: 20.
     */
    readonly transitRouterRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property transitRouterRouteTableNames: The name of the route table.
     * You can query multiple route tables in each call. Maximum value of N: 20.
     * Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
     */
    readonly transitRouterRouteTableNames?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property transitRouterRouteTableStatus: The state of the route table. Valid values:
     * Creating: The route table is being created.
     * Deleting: The route table is being deleted.
     * Active: The route table is available for use.
     */
    readonly transitRouterRouteTableStatus?: string | ros.IResolvable;

    /**
     * Property transitRouterRouteTableType: The type of route table. Valid values:
     * Custom: a custom route table
     * System: the default route table
     */
    readonly transitRouterRouteTableType?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CEN::TransitRouterRouteTables`, which is used to query the route tables of an Enterprise Edition transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterRouteTables`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterroutetables
 */
export class TransitRouterRouteTables extends ros.Resource {

    /**
     * Attribute TransitRouterRouteTableIds: The list of TransitRouterRouteTable IDs.
     */
    public readonly attrTransitRouterRouteTableIds: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteTables: The list of TransitRouterRouteTables.
     */
    public readonly attrTransitRouterRouteTables: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteTablesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTransitRouterRouteTables = new RosTransitRouterRouteTables(this, id,  {
            transitRouterRouteTableIds: props.transitRouterRouteTableIds,
            transitRouterRouteTableStatus: props.transitRouterRouteTableStatus,
            transitRouterRouteTableNames: props.transitRouterRouteTableNames,
            transitRouterRouteTableType: props.transitRouterRouteTableType,
            transitRouterId: props.transitRouterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterRouteTables;
        this.attrTransitRouterRouteTableIds = rosTransitRouterRouteTables.attrTransitRouterRouteTableIds;
        this.attrTransitRouterRouteTables = rosTransitRouterRouteTables.attrTransitRouterRouteTables;
    }
}
