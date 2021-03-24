import * as ros from '@alicloud/ros-cdk-core';
import { RosVpnConnection } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpnConnection as VpnConnectionProperty };

/**
 * Properties for defining a `ALIYUN::VPC::VpnConnection`
 */
export interface VpnConnectionProps {

    /**
     * Property customerGatewayId: The ID of the user gateway.
     */
    readonly customerGatewayId: string;

    /**
     * Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
     */
    readonly localSubnet: string;

    /**
     * Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
     */
    readonly remoteSubnet: string;

    /**
     * Property vpnGatewayId: ID of the VPN gateway.
     */
    readonly vpnGatewayId: string;

    /**
     * Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
     * True: Negotiate immediately after the configuration is complete.
     * False (default): Negotiate when traffic enters.
     */
    readonly effectImmediately?: boolean | ros.IResolvable;

    /**
     * Property healthCheckConfig: Whether to enable the health check configuration.
     */
    readonly healthCheckConfig?: RosVpnConnection.HealthCheckConfigProperty | ros.IResolvable;

    /**
     * Property ikeConfig: Configuration information for the first phase of negotiation.
     */
    readonly ikeConfig?: RosVpnConnection.IkeConfigProperty | ros.IResolvable;

    /**
     * Property ipsecConfig: Configuration information for the second phase negotiation.
     */
    readonly ipsecConfig?: RosVpnConnection.IpsecConfigProperty | ros.IResolvable;

    /**
     * Property name: The name of the IPsec connection.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
     */
    readonly name?: string;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::VpnConnection`
 */
export class VpnConnection extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute PeerVpnConnectionConfig: Peer vpc connection config.
     */
    public readonly attrPeerVpnConnectionConfig: any;

    /**
     * Attribute Status: Status of the IPsec connection.
     */
    public readonly attrStatus: any;

    /**
     * Attribute VpnConnectionId: ID of the IPsec connection.
     */
    public readonly attrVpnConnectionId: any;

    /**
     * Create a new `ALIYUN::VPC::VpnConnection`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpnConnectionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVpnConnection = new RosVpnConnection(this, id,  {
            localSubnet: props.localSubnet,
            effectImmediately: props.effectImmediately ? props.effectImmediately : false,
            remoteSubnet: props.remoteSubnet,
            customerGatewayId: props.customerGatewayId,
            vpnGatewayId: props.vpnGatewayId,
            ipsecConfig: props.ipsecConfig,
            healthCheckConfig: props.healthCheckConfig,
            ikeConfig: props.ikeConfig,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpnConnection;
        this.attrPeerVpnConnectionConfig = rosVpnConnection.attrPeerVpnConnectionConfig;
        this.attrStatus = rosVpnConnection.attrStatus;
        this.attrVpnConnectionId = rosVpnConnection.attrVpnConnectionId;
    }
}
