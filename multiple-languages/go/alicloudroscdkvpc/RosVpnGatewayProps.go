package alicloudroscdkvpc


// Properties for defining a `RosVpnGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpngateway
type RosVpnGatewayProps struct {
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DisasterRecoveryVSwitchId interface{} `field:"optional" json:"disasterRecoveryVSwitchId" yaml:"disasterRecoveryVSwitchId"`
	EnableIpsec interface{} `field:"optional" json:"enableIpsec" yaml:"enableIpsec"`
	EnableSsl interface{} `field:"optional" json:"enableSsl" yaml:"enableSsl"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	SslConnections interface{} `field:"optional" json:"sslConnections" yaml:"sslConnections"`
	Tags *[]*RosVpnGateway_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpnType interface{} `field:"optional" json:"vpnType" yaml:"vpnType"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

