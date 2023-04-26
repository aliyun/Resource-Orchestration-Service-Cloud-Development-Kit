import * as ros from '@alicloud/ros-cdk-core';
import { RosIpv4Gateway } from './vpc.generated';
export { RosIpv4Gateway as Ipv4GatewayProperty };
/**
 * Properties for defining a `ALIYUN::VPC::Ipv4Gateway`
 */
export interface Ipv4GatewayProps {
    /**
     * Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property ipv4GatewayDescription: Description information.
     */
    readonly ipv4GatewayDescription?: string | ros.IResolvable;
    /**
     * Property ipv4GatewayName: Resource name.
     */
    readonly ipv4GatewayName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::Ipv4Gateway`
 */
export declare class Ipv4Gateway extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Ipv4GatewayDescription: Description information.
     */
    readonly attrIpv4GatewayDescription: ros.IResolvable;
    /**
     * Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    readonly attrIpv4GatewayId: ros.IResolvable;
    /**
     * Attribute Ipv4GatewayName: Resource name.
     */
    readonly attrIpv4GatewayName: ros.IResolvable;
    /**
     * Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.
     */
    readonly attrIpv4GatewayRouteTableId: ros.IResolvable;
    /**
     * Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::Ipv4Gateway`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Ipv4GatewayProps, enableResourcePropertyConstraint?: boolean);
}
