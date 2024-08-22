package alicloudroscdkga


// Properties for defining a `RosBasicAccelerator`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator
type RosBasicAcceleratorProps struct {
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewDuration interface{} `field:"optional" json:"autoRenewDuration" yaml:"autoRenewDuration"`
	AutoUseCoupon interface{} `field:"optional" json:"autoUseCoupon" yaml:"autoUseCoupon"`
	BandwidthBillingType interface{} `field:"optional" json:"bandwidthBillingType" yaml:"bandwidthBillingType"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	PromotionOptionNo interface{} `field:"optional" json:"promotionOptionNo" yaml:"promotionOptionNo"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosBasicAccelerator_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

