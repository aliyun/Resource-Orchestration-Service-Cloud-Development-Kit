package alicloudroscdkvpc


// Properties for defining a `SslVpnServer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnserver
type SslVpnServerProps struct {
	// Property clientIpPool: The client CIDR block.
	//
	// The CIDR block from which an IP address is allocated to the virtual network
	// interface controller (NIC) of the client, rather than the private CIDR block.
	// If the client accesses the SSL server over an SSL-VPN connection, the VPN gateway
	// assigns an IP address from the specified client CIDR block for the client to
	// access cloud resources.
	// Make sure that the number of IP addresses in the client CIDR block is at least
	// four times the maximum number of SSL-VPN connections supported by the VPN
	// gateway.
	// ... (omitted for brevity; see metadata URL) ...
	// *   The subnet mask of the client CIDR block must be 16 to 29 bits in length.
	// *   Make sure that the client CIDR block does not overlap with the local CIDR
	// block, the VPC CIDR block, or route CIDR blocks associated with the client.
	ClientIpPool interface{} `field:"required" json:"clientIpPool" yaml:"clientIpPool"`
	// Property localSubnet: The local CIDR block.
	//
	// The CIDR block that your client needs to access by using the SSL-VPN connection.
	// This value can be the CIDR block of a VPC, a vSwitch, a data center that is
	// connected to a VPC by using an Express Connect circuit, or a cloud
	// service such as Object Storage Service (OSS).
	// The subnet mask of the specified local CIDR block must be 8 to 32 bits in length.
	// You cannot specify the following CIDR blocks as the local CIDR blocks:
	// *   127.0.0.0~127.255.255.255
	// *   169.254.0.0~169.254.255.255
	// *   224.0.0.0~239.255.255.255
	// *   255.0.0.0~255.255.255.255
	LocalSubnet interface{} `field:"required" json:"localSubnet" yaml:"localSubnet"`
	// Property vpnGatewayId: ID of the VPN gateway.
	VpnGatewayId interface{} `field:"required" json:"vpnGatewayId" yaml:"vpnGatewayId"`
	// Property cipher: The encryption algorithm used by SSL-VPN.
	//
	// Value:
	// AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none.
	Cipher interface{} `field:"optional" json:"cipher" yaml:"cipher"`
	// Property compress: Whether it is compressed.
	Compress interface{} `field:"optional" json:"compress" yaml:"compress"`
	// Property enableMultiFactorAuth: Whether to enable multi-factor authentication.
	//
	// The default value is false.
	EnableMultiFactorAuth interface{} `field:"optional" json:"enableMultiFactorAuth" yaml:"enableMultiFactorAuth"`
	// Property iDaaSApplicationId: The ID of the IDaaS application.
	IDaaSApplicationId interface{} `field:"optional" json:"iDaaSApplicationId" yaml:"iDaaSApplicationId"`
	// Property iDaaSInstanceId: The ID of the IDaaS instance.
	IDaaSInstanceId interface{} `field:"optional" json:"iDaaSInstanceId" yaml:"iDaaSInstanceId"`
	// Property iDaaSRegionId: The region ID of the IDaaS instance.
	IDaaSRegionId interface{} `field:"optional" json:"iDaaSRegionId" yaml:"iDaaSRegionId"`
	// Property name: The SSL server name.
	//
	// The name must be 1 to 100 characters in length and cannot start with `http:\/\/` or
	// `https:\/\/`.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property port: The port used by the SSL-VPN server.
	//
	// The default value is 1194. Cannot use the following ports:
	// 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500.
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	// Property proto: The protocol that is used by the SSL server.
	//
	// Valid values:
	// *   TCP (default)
	// *   UDP.
	Proto interface{} `field:"optional" json:"proto" yaml:"proto"`
}

