import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteTables } from './cen.generated';
export { RosTransitRouterRouteTables as TransitRouterRouteTablesProperty };
/**
 * Properties for defining a `DATASOURCE::CEN::TransitRouterRouteTables`
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
 * A ROS resource type:  `DATASOURCE::CEN::TransitRouterRouteTables`
 */
export declare class TransitRouterRouteTables extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute TransitRouterRouteTableIds: The list of TransitRouterRouteTable IDs.
     */
    readonly attrTransitRouterRouteTableIds: ros.IResolvable;
    /**
     * Attribute TransitRouterRouteTables: The list of TransitRouterRouteTables.
     */
    readonly attrTransitRouterRouteTables: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::CEN::TransitRouterRouteTables`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteTablesProps, enableResourcePropertyConstraint?: boolean);
}
