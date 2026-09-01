import * as ros from '@alicloud/ros-cdk-core';
import { RosVpnConnection } from './vpc.generated';
export { RosVpnConnection as VpnConnectionProperty };
/**
 * Properties for defining a `VpnConnection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnconnection
 */
export interface VpnConnectionProps {
    /**
     * Property localSubnet: The CIDR block of the virtual private cloud (VPC) that needs to communicate with
     * the on-premises database. The CIDR block is used in Phase 2 negotiations.
     * Separate multiple CIDR blocks with commas (,). Example:
     * 192.168.1.0\/24,192.168.2.0\/24.
     * The following routing modes are supported:
     * *   If you set LocalSubnet and RemoteSubnet to 0.0.0.0\/0, the routing mode of the
     * IPsec-VPN connection is set to Destination Routing Mode.
     * *   If you set LocalSubnet and RemoteSubnet to specific CIDR blocks, the routing
     * mode of the IPsec-VPN connection is set to Protected Data Flows.
     */
    readonly localSubnet: string | ros.IResolvable;
    /**
     * Property remoteSubnet: The CIDR block of the on-premises database that needs to communicate with the
     * VPC. The CIDR block is used in Phase 2 negotiations.
     * Separate multiple CIDR blocks with commas (,). Example:
     * 192.168.3.0\/24,192.168.4.0\/24.
     * The following routing modes are supported:
     * *   If you set LocalSubnet and RemoteSubnet to 0.0.0.0\/0...
     */
    readonly remoteSubnet: string | ros.IResolvable;
    /**
     * Property vpnGatewayId: ID of the VPN gateway.
     */
    readonly vpnGatewayId: string | ros.IResolvable;
    /**
     * Property autoConfigRoute: Specifies whether to automatically configure routes. Valid values:
     * true (default)
     * false
     */
    readonly autoConfigRoute?: boolean | ros.IResolvable;
    /**
     * Property bgpConfig: The Border Gateway Protocol (BGP) configuration.
     * This parameter is required when the VPN gateway has dynamic BGP enabled.
     * Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
     * We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
     * Refer to the relevant documentation for the private ASN range.
     */
    readonly bgpConfig?: RosVpnConnection.BgpConfigProperty | ros.IResolvable;
    /**
     * Property customerGatewayId: The ID of the user gateway.
     */
    readonly customerGatewayId?: string | ros.IResolvable;
    /**
     * Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
     * True: Negotiate immediately after the configuration is complete.
     * False (default): Negotiate when traffic enters.
     */
    readonly effectImmediately?: boolean | ros.IResolvable;
    /**
     * Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature. Valid values:
     * true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
     * false: disables DPD. The IPsec initiator does not send DPD packets.
     */
    readonly enableDpd?: boolean | ros.IResolvable;
    /**
     * Property enableNatTraversal: Specifies whether to enable NAT traversal. Valid values:
     * true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
     * false
     */
    readonly enableNatTraversal?: boolean | ros.IResolvable;
    /**
     * Property enableTunnelsBgp: Specifies whether to enable the BGP feature for the tunnel.
     * Valid values: true and false. Default value: false.
     */
    readonly enableTunnelsBgp?: boolean | ros.IResolvable;
    /**
     * Property healthCheckConfig: This parameter is available if you create an IPsec-VPN connection in
     * single-tunnel mode.
     * The health check configuration:
     * *   HealthCheckConfig.enable: ... Default value: false.
     * *   HealthCheckConfig.dip \/ sip \/ interval (Default: 3) \/ retry (Default: 3) \/
     * Policy (revoke_route default \/ reserve_route).
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
     * Property name: The name of the IPsec-VPN connection.
     * The name must be 1 to 100 characters in length and cannot start with `http:\/\/` or
     * `https:\/\/`.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property remoteCaCertificate: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
     * This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
     * You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
     */
    readonly remoteCaCertificate?: string | ros.IResolvable;
    /**
     * Property tunnelOptionsSpecification: TunnelOptionsSpecification parameters are supported by dual-tunnel IPsec-VPN gateways.
     * You can modify both the active and standby tunnels of the IPsec-VPN connection.
     */
    readonly tunnelOptionsSpecification?: Array<RosVpnConnection.TunnelOptionsSpecificationProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `VpnConnection`.
 */
export interface IVpnConnection extends ros.IResource {
    readonly props: VpnConnectionProps;
    /**
     * Attribute PeerVpnConnectionConfig: Peer vpc connection config.
     */
    readonly attrPeerVpnConnectionConfig: ros.IResolvable | string;
    /**
     * Attribute Status: Status of the IPsec connection.
     */
    readonly attrStatus: ros.IResolvable | string;
    /**
     * Attribute VpnConnectionId: ID of the IPsec connection.
     */
    readonly attrVpnConnectionId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VpnConnection`, which is used to create an IPsec-VPN connection.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpnConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnconnection
 */
export declare class VpnConnection extends ros.Resource implements IVpnConnection {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VpnConnectionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PeerVpnConnectionConfig: Peer vpc connection config.
     */
    readonly attrPeerVpnConnectionConfig: ros.IResolvable | string;
    /**
     * Attribute Status: Status of the IPsec connection.
     */
    readonly attrStatus: ros.IResolvable | string;
    /**
     * Attribute VpnConnectionId: ID of the IPsec connection.
     */
    readonly attrVpnConnectionId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpnConnectionProps, enableResourcePropertyConstraint?: boolean);
}
