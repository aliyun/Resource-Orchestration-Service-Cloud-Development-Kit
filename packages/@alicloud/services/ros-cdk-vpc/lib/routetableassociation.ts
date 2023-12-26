import * as ros from '@alicloud/ros-cdk-core';
import { RosRouteTableAssociation } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRouteTableAssociation as RouteTableAssociationProperty };

/**
 * Properties for defining a `RouteTableAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetableassociation
 */
export interface RouteTableAssociationProps {

    /**
     * Property routeTableId: The ID of the route table.
     */
    readonly routeTableId: string | ros.IResolvable;

    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::RouteTableAssociation`, which is used to associate a custom routing table with a vSwitch in the same VPC.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRouteTableAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetableassociation
 */
export class RouteTableAssociation extends ros.Resource {

    /**
     * Attribute RouteTableId: The ID of the route table.
     */
    public readonly attrRouteTableId: ros.IResolvable;

    /**
     * Attribute VSwitchId: The VSwitch ID which the route table associated with.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteTableAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosRouteTableAssociation = new RosRouteTableAssociation(this, id,  {
            routeTableId: props.routeTableId,
            vSwitchId: props.vSwitchId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRouteTableAssociation;
        this.attrRouteTableId = rosRouteTableAssociation.attrRouteTableId;
        this.attrVSwitchId = rosRouteTableAssociation.attrVSwitchId;
    }
}
