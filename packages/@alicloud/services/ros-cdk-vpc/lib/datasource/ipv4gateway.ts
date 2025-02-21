import * as ros from '@alicloud/ros-cdk-core';
import { RosIpv4Gateway } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::Ipv4Gateway`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpv4Gateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
 */
export class Ipv4Gateway extends ros.Resource implements IIpv4Gateway {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: Ipv4GatewayProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Enabled: Enabled.
     */
    public readonly attrEnabled: ros.IResolvable | string;

    /**
     * Attribute Ipv4GatewayDescription: Description information.
     */
    public readonly attrIpv4GatewayDescription: ros.IResolvable | string;

    /**
     * Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    public readonly attrIpv4GatewayId: ros.IResolvable | string;

    /**
     * Attribute Ipv4GatewayName: Resource name.
     */
    public readonly attrIpv4GatewayName: ros.IResolvable | string;

    /**
     * Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.
     */
    public readonly attrIpv4GatewayRouteTableId: ros.IResolvable | string;

    /**
     * Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Ipv4GatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosIpv4Gateway = new RosIpv4Gateway(this, id,  {
            ipv4GatewayId: props.ipv4GatewayId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpv4Gateway;
        this.attrCreateTime = rosIpv4Gateway.attrCreateTime;
        this.attrEnabled = rosIpv4Gateway.attrEnabled;
        this.attrIpv4GatewayDescription = rosIpv4Gateway.attrIpv4GatewayDescription;
        this.attrIpv4GatewayId = rosIpv4Gateway.attrIpv4GatewayId;
        this.attrIpv4GatewayName = rosIpv4Gateway.attrIpv4GatewayName;
        this.attrIpv4GatewayRouteTableId = rosIpv4Gateway.attrIpv4GatewayRouteTableId;
        this.attrVpcId = rosIpv4Gateway.attrVpcId;
    }
}
