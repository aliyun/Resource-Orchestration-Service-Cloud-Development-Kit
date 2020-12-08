import * as ros from '@alicloud/ros-cdk-core';
import { RosRouteTableAssociation } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRouteTableAssociation as RouteTableAssociationProperty };

/**
 * Properties for defining a `ALIYUN::VPC::RouteTableAssociation`
 */
export interface RouteTableAssociationProps {

    /**
     * @Property routeTableId: The ID of the route table.
     */
    readonly routeTableId: string;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId: string;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::RouteTableAssociation`
 */
export class RouteTableAssociation extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute RouteTableId: The ID of the route table.
     */
    public readonly attrRouteTableId: any;

    /**
     * @Attribute VSwitchId: The VSwitch ID which the route table associated with.
     */
    public readonly attrVSwitchId: any;

    /**
     * Create a new `ALIYUN::VPC::RouteTableAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
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
