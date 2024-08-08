package alicloudroscdkvpc


// Properties for defining a `RosSslVpnServer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnserver
type RosSslVpnServerProps struct {
	ClientIpPool interface{} `field:"required" json:"clientIpPool" yaml:"clientIpPool"`
	LocalSubnet interface{} `field:"required" json:"localSubnet" yaml:"localSubnet"`
	VpnGatewayId interface{} `field:"required" json:"vpnGatewayId" yaml:"vpnGatewayId"`
	Cipher interface{} `field:"optional" json:"cipher" yaml:"cipher"`
	Compress interface{} `field:"optional" json:"compress" yaml:"compress"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	Proto interface{} `field:"optional" json:"proto" yaml:"proto"`
}

