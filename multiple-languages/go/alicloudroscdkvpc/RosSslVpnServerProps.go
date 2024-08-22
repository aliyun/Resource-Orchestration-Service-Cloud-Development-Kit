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
	EnableMultiFactorAuth interface{} `field:"optional" json:"enableMultiFactorAuth" yaml:"enableMultiFactorAuth"`
	IDaaSApplicationId interface{} `field:"optional" json:"iDaaSApplicationId" yaml:"iDaaSApplicationId"`
	IDaaSInstanceId interface{} `field:"optional" json:"iDaaSInstanceId" yaml:"iDaaSInstanceId"`
	IDaaSRegionId interface{} `field:"optional" json:"iDaaSRegionId" yaml:"iDaaSRegionId"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	Proto interface{} `field:"optional" json:"proto" yaml:"proto"`
}

