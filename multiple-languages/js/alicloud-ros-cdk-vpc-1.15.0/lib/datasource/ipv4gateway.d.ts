import * as ros from '@alicloud/ros-cdk-core';
import { RosIpv4Gateway } from './vpc.generated';
export { RosIpv4Gateway as Ipv4GatewayProperty };
/**
 * Properties for defining a `Ipv4Gateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
 */
export interface Ipv4GatewayProps {
    /**
     * Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    readonly ipv4GatewayId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Ipv4Gateway`.
 */
export interface IIpv4Gateway extends ros.IResource {
    readonly props: Ipv4GatewayProps;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Enabled: Enabled.
     */
    readonly attrEnabled: ros.IResolvable | string;
    /**
     * Attribute Ipv4GatewayDescription: Description information.
     */
    readonly attrIpv4GatewayDescription: ros.IResolvable | string;
    /**
     * Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    readonly attrIpv4GatewayId: ros.IResolvable | string;
    /**
     * Attribute Ipv4GatewayName: Resource name.
     */
    readonly attrIpv4GatewayName: ros.IResolvable | string;
    /**
     * Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.
     */
    readonly attrIpv4GatewayRouteTableId: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::Ipv4Gateway`, which is used to query the information about an IPv4 gateway.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpv4Gateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
 */
export declare class Ipv4Gateway extends ros.Resource implements IIpv4Gateway {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: Ipv4GatewayProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Enabled: Enabled.
     */
    readonly attrEnabled: ros.IResolvable | string;
    /**
     * Attribute Ipv4GatewayDescription: Description information.
     */
    readonly attrIpv4GatewayDescription: ros.IResolvable | string;
    /**
     * Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    readonly attrIpv4GatewayId: ros.IResolvable | string;
    /**
     * Attribute Ipv4GatewayName: Resource name.
     */
    readonly attrIpv4GatewayName: ros.IResolvable | string;
    /**
     * Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.
     */
    readonly attrIpv4GatewayRouteTableId: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Ipv4GatewayProps, enableResourcePropertyConstraint?: boolean);
}
