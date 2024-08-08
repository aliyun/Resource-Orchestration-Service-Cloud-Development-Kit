package alicloudroscdkvpc


// Properties for defining a `RosVpnAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnattachment
type RosVpnAttachmentProps struct {
	CustomerGatewayId interface{} `field:"required" json:"customerGatewayId" yaml:"customerGatewayId"`
	LocalSubnet interface{} `field:"required" json:"localSubnet" yaml:"localSubnet"`
	RemoteSubnet interface{} `field:"required" json:"remoteSubnet" yaml:"remoteSubnet"`
	AutoConfigRoute interface{} `field:"optional" json:"autoConfigRoute" yaml:"autoConfigRoute"`
	BgpConfig interface{} `field:"optional" json:"bgpConfig" yaml:"bgpConfig"`
	EffectImmediately interface{} `field:"optional" json:"effectImmediately" yaml:"effectImmediately"`
	EnableDpd interface{} `field:"optional" json:"enableDpd" yaml:"enableDpd"`
	EnableNatTraversal interface{} `field:"optional" json:"enableNatTraversal" yaml:"enableNatTraversal"`
	HealthCheckConfig interface{} `field:"optional" json:"healthCheckConfig" yaml:"healthCheckConfig"`
	IkeConfig interface{} `field:"optional" json:"ikeConfig" yaml:"ikeConfig"`
	IpsecConfig interface{} `field:"optional" json:"ipsecConfig" yaml:"ipsecConfig"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	RemoteCaCert interface{} `field:"optional" json:"remoteCaCert" yaml:"remoteCaCert"`
}

