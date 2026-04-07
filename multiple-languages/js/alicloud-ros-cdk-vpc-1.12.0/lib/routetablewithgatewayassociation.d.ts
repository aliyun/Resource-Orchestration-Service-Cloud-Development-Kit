import * as ros from '@alicloud/ros-cdk-core';
import { RosRouteTableWithGatewayAssociation } from './vpc.generated';
export { RosRouteTableWithGatewayAssociation as RouteTableWithGatewayAssociationProperty };
/**
 * Properties for defining a `RouteTableWithGatewayAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetablewithgatewayassociation
 */
export interface RouteTableWithGatewayAssociationProps {
    /**
     * Property gatewayId: The ID of the IPv4 gateway that is to be associated.
     * The IPv4 gateway instance must be activated.
     */
    readonly gatewayId: string | ros.IResolvable;
    /**
     * Property gatewayType: Types of the associated gateway instance.
     */
    readonly gatewayType: string | ros.IResolvable;
    /**
     * Property routeTableId: The ID of route table that gateway is to be bound.
     */
    readonly routeTableId: string | ros.IResolvable;
}
/**
 * Represents a `RouteTableWithGatewayAssociation`.
 */
export interface IRouteTableWithGatewayAssociation extends ros.IResource {
    readonly props: RouteTableWithGatewayAssociationProps;
    /**
     * Attribute GatewayId: The ID of the IPv4 gateway that is to be associated.
     */
    readonly attrGatewayId: ros.IResolvable | string;
    /**
     * Attribute RouteTableId: The ID of route table that gateway is to be bound.
     */
    readonly attrRouteTableId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::RouteTableWithGatewayAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRouteTableWithGatewayAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetablewithgatewayassociation
 */
export declare class RouteTableWithGatewayAssociation extends ros.Resource implements IRouteTableWithGatewayAssociation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RouteTableWithGatewayAssociationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GatewayId: The ID of the IPv4 gateway that is to be associated.
     */
    readonly attrGatewayId: ros.IResolvable | string;
    /**
     * Attribute RouteTableId: The ID of route table that gateway is to be bound.
     */
    readonly attrRouteTableId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteTableWithGatewayAssociationProps, enableResourcePropertyConstraint?: boolean);
}
