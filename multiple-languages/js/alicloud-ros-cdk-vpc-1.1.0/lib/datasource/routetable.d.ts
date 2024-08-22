import * as ros from '@alicloud/ros-cdk-core';
import { RosRouteTable } from './vpc.generated';
export { RosRouteTable as RouteTableProperty };
/**
 * Properties for defining a `RouteTable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
 */
export interface RouteTableProps {
    /**
     * Property routeTableId: The ID of the routing table.
     */
    readonly routeTableId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::RouteTable`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRouteTable`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
 */
export declare class RouteTable extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RouteTableProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the routing table.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: Description of the routing table.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: Resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute RouteTableId: The ID of the routing table.
     */
    readonly attrRouteTableId: ros.IResolvable;
    /**
     * Attribute RouteTableName: The name of the routing table.
     */
    readonly attrRouteTableName: ros.IResolvable;
    /**
     * Attribute RouteTableType: The type of routing table.
     */
    readonly attrRouteTableType: ros.IResolvable;
    /**
     * Attribute RouterId: The router ID to which the routing table belongs.
     */
    readonly attrRouterId: ros.IResolvable;
    /**
     * Attribute RouterType: The router type to which the routing table belongs.
     */
    readonly attrRouterType: ros.IResolvable;
    /**
     * Attribute Tags: The tag.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute VSwitchIds: The ID of the switch.
     */
    readonly attrVSwitchIds: ros.IResolvable;
    /**
     * Attribute VpcId: The ID of VPC.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteTableProps, enableResourcePropertyConstraint?: boolean);
}
