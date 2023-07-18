import * as ros from '@alicloud/ros-cdk-core';
import { RosRouteTables } from './vpc.generated';
export { RosRouteTables as RouteTablesProperty };
/**
 * Properties for defining a `DATASOURCE::VPC::RouteTables`
 */
export interface RouteTablesProps {
    /**
     * Property resourceGroupId: The ID of the resource group to which the route table belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property routerId: The ID of the VRouter to which the route table belongs.
     */
    readonly routerId?: string | ros.IResolvable;
    /**
     * Property routerType: The type of the VRouter to which the route table belongs. Valid values:
     * VRouter (default): VRouter.
     * VBR: Virtual Border Router (VBR).
     */
    readonly routerType?: string | ros.IResolvable;
    /**
     * Property routeTableId: The ID of the route table.
     */
    readonly routeTableId?: string | ros.IResolvable;
    /**
     * Property routeTableName: The name of the route table.
     */
    readonly routeTableName?: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VRouter to which the route table belongs.
     * The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::VPC::RouteTables`
 */
export declare class RouteTables extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute RouteTableIds: the list of the route table ids.
     */
    readonly attrRouteTableIds: ros.IResolvable;
    /**
     * Attribute RouteTables: The list of The route tables.
     */
    readonly attrRouteTables: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::VPC::RouteTables`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: RouteTablesProps, enableResourcePropertyConstraint?: boolean);
}
