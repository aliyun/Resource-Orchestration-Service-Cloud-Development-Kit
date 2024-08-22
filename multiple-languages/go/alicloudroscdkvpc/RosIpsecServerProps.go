package alicloudroscdkvpc


// Properties for defining a `RosIpsecServer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipsecserver
type RosIpsecServerProps struct {
	ClientIpPool interface{} `field:"required" json:"clientIpPool" yaml:"clientIpPool"`
	LocalSubnet interface{} `field:"required" json:"localSubnet" yaml:"localSubnet"`
	VpnGatewayId interface{} `field:"required" json:"vpnGatewayId" yaml:"vpnGatewayId"`
	EffectImmediately interface{} `field:"optional" json:"effectImmediately" yaml:"effectImmediately"`
	IkeConfig interface{} `field:"optional" json:"ikeConfig" yaml:"ikeConfig"`
	IpsecConfig interface{} `field:"optional" json:"ipsecConfig" yaml:"ipsecConfig"`
	IpsecServerName interface{} `field:"optional" json:"ipsecServerName" yaml:"ipsecServerName"`
	Psk interface{} `field:"optional" json:"psk" yaml:"psk"`
	PskEnabled interface{} `field:"optional" json:"pskEnabled" yaml:"pskEnabled"`
}

