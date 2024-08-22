package alicloudroscdkvpc


// Properties for defining a `SslVpnServer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnserver
type SslVpnServerProps struct {
	// Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC.
	//
	// It does not refer to the existing intranet segment of the client.
	// When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
	// The network segment cannot conflict with the LocalSubnet address segment.
	ClientIpPool interface{} `field:"required" json:"clientIpPool" yaml:"clientIpPool"`
	// Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
	//
	// The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS\/OSS.
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
	// Property name: The name of the SSL-VPN server.
	//
	// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
	// But it can't start with http:\/\/ or https:\/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property port: The port used by the SSL-VPN server.
	//
	// The default value is 1194. Cannot use the following ports:
	// 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500.
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	// Property proto: The protocol used by the SSL-VPN server.
	//
	// Allowed values: UDP (default) | TCP.
	Proto interface{} `field:"optional" json:"proto" yaml:"proto"`
}

