package alicloudroscdkvpc


// Properties for defining a `RosEIPPro`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eippro
type RosEIPProProps struct {
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	IpAddress interface{} `field:"optional" json:"ipAddress" yaml:"ipAddress"`
	Isp interface{} `field:"optional" json:"isp" yaml:"isp"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Netmode interface{} `field:"optional" json:"netmode" yaml:"netmode"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	PublicIpAddressPoolId interface{} `field:"optional" json:"publicIpAddressPoolId" yaml:"publicIpAddressPoolId"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityProtectionTypes interface{} `field:"optional" json:"securityProtectionTypes" yaml:"securityProtectionTypes"`
	Tags *[]*RosEIPPro_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

