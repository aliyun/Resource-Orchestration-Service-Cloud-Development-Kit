package alicloudroscdkdrds


// Properties for defining a `RosDrdsInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
type RosDrdsInstanceProps struct {
	Description interface{} `field:"required" json:"description" yaml:"description"`
	InstanceSeries interface{} `field:"required" json:"instanceSeries" yaml:"instanceSeries"`
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	Specification interface{} `field:"required" json:"specification" yaml:"specification"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	IsAutoRenew interface{} `field:"optional" json:"isAutoRenew" yaml:"isAutoRenew"`
	MySqlVersion interface{} `field:"optional" json:"mySqlVersion" yaml:"mySqlVersion"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosDrdsInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VswitchId interface{} `field:"optional" json:"vswitchId" yaml:"vswitchId"`
}

