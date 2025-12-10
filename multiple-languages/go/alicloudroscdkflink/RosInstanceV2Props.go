package alicloudroscdkflink


// Properties for defining a `RosInstanceV2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instancev2
type RosInstanceV2Props struct {
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	Storage interface{} `field:"required" json:"storage" yaml:"storage"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"required" json:"vSwitchIds" yaml:"vSwitchIds"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	PromotionCode interface{} `field:"optional" json:"promotionCode" yaml:"promotionCode"`
	ResourceSpec interface{} `field:"optional" json:"resourceSpec" yaml:"resourceSpec"`
	UsePromotionCode interface{} `field:"optional" json:"usePromotionCode" yaml:"usePromotionCode"`
}

