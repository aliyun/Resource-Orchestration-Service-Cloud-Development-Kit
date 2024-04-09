import * as ros from '@alicloud/ros-cdk-core';
import { RosIpv4Gateways } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIpv4Gateways as Ipv4GatewaysProperty };

/**
 * Properties for defining a `Ipv4Gateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
 */
export interface Ipv4GatewaysProps {

    /**
     * Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    readonly ipv4GatewayId?: string | ros.IResolvable;

    /**
     * Property ipv4GatewayName: Resource name.
     */
    readonly ipv4GatewayName?: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::Ipv4Gateways`, which is used to query the details of IPv4 gateways.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpv4Gateways`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
 */
export class Ipv4Gateways extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: Ipv4GatewaysProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Ipv4GatewayIds: The list of ipv4 gateway IDs.
     */
    public readonly attrIpv4GatewayIds: ros.IResolvable;

    /**
     * Attribute Ipv4Gateways: The list of ipv4 gateways.
     */
    public readonly attrIpv4Gateways: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Ipv4GatewaysProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosIpv4Gateways = new RosIpv4Gateways(this, id,  {
            ipv4GatewayName: props.ipv4GatewayName,
            vpcId: props.vpcId,
            ipv4GatewayId: props.ipv4GatewayId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpv4Gateways;
        this.attrIpv4GatewayIds = rosIpv4Gateways.attrIpv4GatewayIds;
        this.attrIpv4Gateways = rosIpv4Gateways.attrIpv4Gateways;
    }
}
