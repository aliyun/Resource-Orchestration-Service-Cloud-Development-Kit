package alicloudroscdkvpc


// Properties for defining a `RosNatGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natgateway
type RosNatGatewayProps struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	EipBindMode interface{} `field:"optional" json:"eipBindMode" yaml:"eipBindMode"`
	IcmpReplyEnabled interface{} `field:"optional" json:"icmpReplyEnabled" yaml:"icmpReplyEnabled"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	NatGatewayName interface{} `field:"optional" json:"natGatewayName" yaml:"natGatewayName"`
	NatType interface{} `field:"optional" json:"natType" yaml:"natType"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	SecurityProtectionEnabled interface{} `field:"optional" json:"securityProtectionEnabled" yaml:"securityProtectionEnabled"`
	Tags *[]*RosNatGateway_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

