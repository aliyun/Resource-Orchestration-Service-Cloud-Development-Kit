package alicloudroscdkcloudphone


// Properties for defining a `RosInstanceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-instancegroup
type RosInstanceGroupProps struct {
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	Amount interface{} `field:"optional" json:"amount" yaml:"amount"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EipBandwidth interface{} `field:"optional" json:"eipBandwidth" yaml:"eipBandwidth"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	Resolution interface{} `field:"optional" json:"resolution" yaml:"resolution"`
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
	VncPassword interface{} `field:"optional" json:"vncPassword" yaml:"vncPassword"`
}

