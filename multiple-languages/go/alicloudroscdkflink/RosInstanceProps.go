package alicloudroscdkflink


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instance
type RosInstanceProps struct {
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"required" json:"vSwitchIds" yaml:"vSwitchIds"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	PromotionCode interface{} `field:"optional" json:"promotionCode" yaml:"promotionCode"`
	ResourceSpec interface{} `field:"optional" json:"resourceSpec" yaml:"resourceSpec"`
	UsePromotionCode interface{} `field:"optional" json:"usePromotionCode" yaml:"usePromotionCode"`
}

