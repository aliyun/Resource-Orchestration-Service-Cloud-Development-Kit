package alicloudroscdkvpc


// Properties for defining a `VpnAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnattachment
type VpnAttachmentProps struct {
	// Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
	//
	// Multiple network segments are separated by commas, for example: 192.168.1.0\/24, 192.168.2.0\/24.
	LocalSubnet interface{} `field:"required" json:"localSubnet" yaml:"localSubnet"`
	// Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
	//
	// Multiple network segments are separated by commas, for example: 192.168.3.0\/24, 192.168.4.0\/24.
	RemoteSubnet interface{} `field:"required" json:"remoteSubnet" yaml:"remoteSubnet"`
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
	// Property enableTunnelsBgp: Support configuring this parameter when creating dual-tunnel mode IPsec-VPN connections.
	//
	// Whether to enable BGP function for the tunnel. Values: **true** or **false** (default value).
	// > Before adding BGP configuration, it is recommended that you first understand the working mechanism and usage limitations of the BGP dynamic routing function. For more information, please see Configuring BGP Dynamic Routing.
	EnableTunnelsBgp interface{} `field:"optional" json:"enableTunnelsBgp" yaml:"enableTunnelsBgp"`
	// Property healthCheckConfig: Whether to enable the health check configuration.
	HealthCheckConfig interface{} `field:"optional" json:"healthCheckConfig" yaml:"healthCheckConfig"`
	// Property ikeConfig: Configuration information for the first phase of negotiation.
	IkeConfig interface{} `field:"optional" json:"ikeConfig" yaml:"ikeConfig"`
	// Property ipsecConfig: Configuration information for the second phase negotiation.
	IpsecConfig interface{} `field:"optional" json:"ipsecConfig" yaml:"ipsecConfig"`
	// Property name: The name of the IPsec connection.
	//
	// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:\/\/ or https:\/\/ .
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property networkType: The network type of the IPsec connection.
	//
	// Value: public|private.
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	// Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
	//
	// This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
	// You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
	RemoteCaCert interface{} `field:"optional" json:"remoteCaCert" yaml:"remoteCaCert"`
	// Property resourceGroupId: The resource group ID to which the IPsec connection belongs.
	//
	// - You can call the ListResourceGroups interface to query the resource group ID.
	// - If you do not specify a resource group ID, the IPsec connection will belong to the default resource group after creation.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tunnelBandwidth: Used to indicate the bandwidth specification of a single VPN tunnel, values: Standard (default value): Standard type, default bandwidth 1Gbps Large: Large type, default bandwidth 3Gbps.
	TunnelBandwidth interface{} `field:"optional" json:"tunnelBandwidth" yaml:"tunnelBandwidth"`
	// Property tunnelOptionsSpecification: Configuration of tunnels.
	//
	// - When creating dual-tunnel mode IPsec-VPN connections, you can configure parameters under **TunnelOptionsSpecification** array.
	// - When creating dual-tunnel mode IPsec-VPN connections, you must add two tunnels for the IPsec-VPN connection simultaneously to ensure the IPsec-VPN connection has link redundancy capability. Only two tunnels are supported under an IPsec-VPN connection.
	TunnelOptionsSpecification interface{} `field:"optional" json:"tunnelOptionsSpecification" yaml:"tunnelOptionsSpecification"`
}

