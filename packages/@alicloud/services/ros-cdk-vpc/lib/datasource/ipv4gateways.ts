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
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Represents a `Ipv4Gateways`.
 */
export interface IIpv4Gateways extends ros.IResource {
    readonly props: Ipv4GatewaysProps;

    /**
     * Attribute Ipv4GatewayIds: The list of ipv4 gateway IDs.
     */
    readonly attrIpv4GatewayIds: ros.IResolvable | string;

    /**
     * Attribute Ipv4Gateways: The list of ipv4 gateways.
     */
    readonly attrIpv4Gateways: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::Ipv4Gateways`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpv4Gateways`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
 */
export class Ipv4Gateways extends ros.Resource implements IIpv4Gateways {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: Ipv4GatewaysProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Ipv4GatewayIds: The list of ipv4 gateway IDs.
     */
    public readonly attrIpv4GatewayIds: ros.IResolvable | string;

    /**
     * Attribute Ipv4Gateways: The list of ipv4 gateways.
     */
    public readonly attrIpv4Gateways: ros.IResolvable | string;

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
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpv4Gateways;
        this.attrIpv4GatewayIds = rosIpv4Gateways.attrIpv4GatewayIds;
        this.attrIpv4Gateways = rosIpv4Gateways.attrIpv4Gateways;
    }
}
