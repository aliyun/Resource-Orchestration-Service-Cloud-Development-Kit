package alicloudroscdkvpc


// Properties for defining a `VpnConnection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnconnection
type VpnConnectionProps struct {
	// Property localSubnet: The CIDR block of the virtual private cloud (VPC) that needs to communicate with the on-premises database.
	//
	// The CIDR block is used in Phase 2 negotiations.
	// Separate multiple CIDR blocks with commas (,). Example:
	// 192.168.1.0\/24,192.168.2.0\/24.
	// The following routing modes are supported:
	// *   If you set LocalSubnet and RemoteSubnet to 0.0.0.0\/0, the routing mode of the
	// IPsec-VPN connection is set to Destination Routing Mode.
	// *   If you set LocalSubnet and RemoteSubnet to specific CIDR blocks, the routing
	// mode of the IPsec-VPN connection is set to Protected Data Flows.
	LocalSubnet interface{} `field:"required" json:"localSubnet" yaml:"localSubnet"`
	// Property remoteSubnet: The CIDR block of the on-premises database that needs to communicate with the VPC.
	//
	// The CIDR block is used in Phase 2 negotiations.
	// Separate multiple CIDR blocks with commas (,). Example:
	// 192.168.3.0\/24,192.168.4.0\/24.
	// The following routing modes are supported:
	// *   If you set LocalSubnet and RemoteSubnet to 0.0.0.0\/0...
	RemoteSubnet interface{} `field:"required" json:"remoteSubnet" yaml:"remoteSubnet"`
	// Property vpnGatewayId: ID of the VPN gateway.
	VpnGatewayId interface{} `field:"required" json:"vpnGatewayId" yaml:"vpnGatewayId"`
	// Property autoConfigRoute: Specifies whether to automatically configure routes.
	//
	// Valid values:
	// true (default)
	// false.
	AutoConfigRoute interface{} `field:"optional" json:"autoConfigRoute" yaml:"autoConfigRoute"`
	// Property bgpConfig: The Border Gateway Protocol (BGP) configuration.
	//
	// This parameter is required when the VPN gateway has dynamic BGP enabled.
	// Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
	// We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
	// Refer to the relevant documentation for the private ASN range.
	BgpConfig interface{} `field:"optional" json:"bgpConfig" yaml:"bgpConfig"`
	// Property customerGatewayId: The ID of the user gateway.
	CustomerGatewayId interface{} `field:"optional" json:"customerGatewayId" yaml:"customerGatewayId"`
	// Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation.
	//
	// Value:
	// True: Negotiate immediately after the configuration is complete.
	// False (default): Negotiate when traffic enters.
	EffectImmediately interface{} `field:"optional" json:"effectImmediately" yaml:"effectImmediately"`
	// Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature.
	//
	// Valid values:
	// true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
	// false: disables DPD. The IPsec initiator does not send DPD packets.
	EnableDpd interface{} `field:"optional" json:"enableDpd" yaml:"enableDpd"`
	// Property enableNatTraversal: Specifies whether to enable NAT traversal.
	//
	// Valid values:
	// true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
	// false.
	EnableNatTraversal interface{} `field:"optional" json:"enableNatTraversal" yaml:"enableNatTraversal"`
	// Property enableTunnelsBgp: Specifies whether to enable the BGP feature for the tunnel.
	//
	// Valid values: true and false. Default value: false.
	EnableTunnelsBgp interface{} `field:"optional" json:"enableTunnelsBgp" yaml:"enableTunnelsBgp"`
	// Property healthCheckConfig: This parameter is available if you create an IPsec-VPN connection in single-tunnel mode.
	//
	// The health check configuration:
	// *   HealthCheckConfig.enable: ... Default value: false.
	// *   HealthCheckConfig.dip \/ sip \/ interval (Default: 3) \/ retry (Default: 3) \/
	// Policy (revoke_route default \/ reserve_route).
	HealthCheckConfig interface{} `field:"optional" json:"healthCheckConfig" yaml:"healthCheckConfig"`
	// Property ikeConfig: Configuration information for the first phase of negotiation.
	IkeConfig interface{} `field:"optional" json:"ikeConfig" yaml:"ikeConfig"`
	// Property ipsecConfig: Configuration information for the second phase negotiation.
	IpsecConfig interface{} `field:"optional" json:"ipsecConfig" yaml:"ipsecConfig"`
	// Property name: The name of the IPsec-VPN connection.
	//
	// The name must be 1 to 100 characters in length and cannot start with `http:\/\/` or
	// `https:\/\/`.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property remoteCaCertificate: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
	//
	// This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
	// You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
	RemoteCaCertificate interface{} `field:"optional" json:"remoteCaCertificate" yaml:"remoteCaCertificate"`
	// Property tunnelOptionsSpecification: TunnelOptionsSpecification parameters are supported by dual-tunnel IPsec-VPN gateways.
	//
	// You can modify both the active and standby tunnels of the IPsec-VPN connection.
	TunnelOptionsSpecification interface{} `field:"optional" json:"tunnelOptionsSpecification" yaml:"tunnelOptionsSpecification"`
}

