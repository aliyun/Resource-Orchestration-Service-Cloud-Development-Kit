package alicloudroscdkflink


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instance
type InstanceProps struct {
	// Property bucket: OSS bucket name.
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	// Property chargeType: The payment type, the value of the value is as follows: POST: pay as you go.
	//
	// PRE: subscription.
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	// Property instanceName: The name of instance.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property vpcId: VPC ID.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchIds: Virtual switch ID.
	VSwitchIds interface{} `field:"required" json:"vSwitchIds" yaml:"vSwitchIds"`
	// Property zoneId: The available area ID of the instance.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property autoRenew: When the payment type is the monthly package, the value of the value is as follows: true: Automatic renewal.
	//
	// false: Manual renewal.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property duration: Number of order cycle.
	//
	// When ChargeType is configured as PRE, the duration parameter must be filled.
	// If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
	// If PricingCycle is year, the valid range is 1 to 3.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property pricingCycle: The ordering cycle only supports ordering in the year and month.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property promotionCode: Promo Code.
	PromotionCode interface{} `field:"optional" json:"promotionCode" yaml:"promotionCode"`
	// Property resourceSpec: Resource specifications.
	//
	// When ChargeType is configured as PRE, the resource specification parameters must be filled.
	ResourceSpec interface{} `field:"optional" json:"resourceSpec" yaml:"resourceSpec"`
	// Property usePromotionCode: Whether to use coupons.The value is as follows: true: Use. false: Not in use.
	UsePromotionCode interface{} `field:"optional" json:"usePromotionCode" yaml:"usePromotionCode"`
}

