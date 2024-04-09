import * as ros from '@alicloud/ros-cdk-core';
import { RosIpv4Gateway } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::Ipv4Gateway`, which is used to create an IPv4 gateway.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpv4Gateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv4gateway
 */
export class Ipv4Gateway extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: Ipv4GatewayProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Ipv4GatewayDescription: Description information.
     */
    public readonly attrIpv4GatewayDescription: ros.IResolvable;

    /**
     * Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    public readonly attrIpv4GatewayId: ros.IResolvable;

    /**
     * Attribute Ipv4GatewayName: Resource name.
     */
    public readonly attrIpv4GatewayName: ros.IResolvable;

    /**
     * Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.
     */
    public readonly attrIpv4GatewayRouteTableId: ros.IResolvable;

    /**
     * Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    public readonly attrVpcId: ros.IResolvable;

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
            ipv4GatewayName: props.ipv4GatewayName,
            vpcId: props.vpcId,
            ipv4GatewayDescription: props.ipv4GatewayDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpv4Gateway;
        this.attrCreateTime = rosIpv4Gateway.attrCreateTime;
        this.attrIpv4GatewayDescription = rosIpv4Gateway.attrIpv4GatewayDescription;
        this.attrIpv4GatewayId = rosIpv4Gateway.attrIpv4GatewayId;
        this.attrIpv4GatewayName = rosIpv4Gateway.attrIpv4GatewayName;
        this.attrIpv4GatewayRouteTableId = rosIpv4Gateway.attrIpv4GatewayRouteTableId;
        this.attrVpcId = rosIpv4Gateway.attrVpcId;
    }
}
