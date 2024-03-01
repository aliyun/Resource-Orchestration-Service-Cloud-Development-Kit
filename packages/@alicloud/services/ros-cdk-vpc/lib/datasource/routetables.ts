import * as ros from '@alicloud/ros-cdk-core';
import { RosRouteTables } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRouteTables as RouteTablesProperty };

/**
 * Properties for defining a `RouteTables`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::RouteTables`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRouteTables`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
 */
export class RouteTables extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RouteTablesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RouteTableIds: the list of the route table ids.
     */
    public readonly attrRouteTableIds: ros.IResolvable;

    /**
     * Attribute RouteTables: The list of The route tables.
     */
    public readonly attrRouteTables: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteTablesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRouteTables = new RosRouteTables(this, id,  {
            routeTableId: props.routeTableId,
            vpcId: props.vpcId,
            resourceGroupId: props.resourceGroupId,
            routerType: props.routerType,
            routerId: props.routerId,
            routeTableName: props.routeTableName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRouteTables;
        this.attrRouteTableIds = rosRouteTables.attrRouteTableIds;
        this.attrRouteTables = rosRouteTables.attrRouteTables;
    }
}
