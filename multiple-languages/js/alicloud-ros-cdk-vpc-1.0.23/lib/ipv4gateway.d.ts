import * as ros from '@alicloud/ros-cdk-core';
import { RosIpv4Gateway } from './vpc.generated';
export { RosIpv4Gateway as Ipv4GatewayProperty };
/**
 * Properties for defining a `Ipv4Gateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv4gateway
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::Ipv4Gateway`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpv4Gateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv4gateway
 */
export declare class Ipv4Gateway extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: Ipv4GatewayProps;
    protected enableResourcePropertyConstraint: boolean;
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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Ipv4GatewayProps, enableResourcePropertyConstraint?: boolean);
}
