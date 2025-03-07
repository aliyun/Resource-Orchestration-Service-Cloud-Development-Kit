import * as ros from '@alicloud/ros-cdk-core';
import { RosRouteTableAssociation } from './vpc.generated';
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
 * Represents a `RouteTableAssociation`.
 */
export interface IRouteTableAssociation extends ros.IResource {
    readonly props: RouteTableAssociationProps;
    /**
     * Attribute RouteTableId: The ID of the route table.
     */
    readonly attrRouteTableId: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The VSwitch ID which the route table associated with.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::RouteTableAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRouteTableAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetableassociation
 */
export declare class RouteTableAssociation extends ros.Resource implements IRouteTableAssociation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RouteTableAssociationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute RouteTableId: The ID of the route table.
     */
    readonly attrRouteTableId: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The VSwitch ID which the route table associated with.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteTableAssociationProps, enableResourcePropertyConstraint?: boolean);
}
