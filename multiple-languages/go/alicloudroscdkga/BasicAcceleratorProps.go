package alicloudroscdkga


// Properties for defining a `BasicAccelerator`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator
type BasicAcceleratorProps struct {
	// Property autoPay: Specifies whether to enable automatic payment.
	//
	// Valid values:
	// false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
	// true: enables automatic payment. Payments are automatically completed.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance.
	//
	// Valid values:
	// true: enables auto-renewal for the basic GA instance.
	// false: disables auto-renewal for the basic GA instance. This is the default value.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewDuration: The auto-renewal duration.
	//
	// Unit: months.Valid values: 1 to 12. Default value: 1.
	AutoRenewDuration interface{} `field:"optional" json:"autoRenewDuration" yaml:"autoRenewDuration"`
	// Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills.
	//
	// Valid values:
	// true: automatically applies coupons to your bills.
	// false: does not automatically apply coupons to your bills. This is the default value.
	AutoUseCoupon interface{} `field:"optional" json:"autoUseCoupon" yaml:"autoUseCoupon"`
	// Property bandwidthBillingType: The bandwidth billing method.
	//
	// Valid values:
	// BandwidthPackage: billed based on bandwidth plans.
	// CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
	// CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
	BandwidthBillingType interface{} `field:"optional" json:"bandwidthBillingType" yaml:"bandwidthBillingType"`
	// Property chargeType: The billing method.
	//
	// Valid values:
	// PREPAY (default)POSTPAY.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property duration: The subscription duration of the GA instance.
	//
	// If you set PricingCycle to Month, the valid values for Duration are 1 to 9.
	// If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property pricingCycle: The billing cycle.
	//
	// Valid values:
	// Month
	// Year.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property promotionOptionNo: The code of the coupon.
	PromotionOptionNo interface{} `field:"optional" json:"promotionOptionNo" yaml:"promotionOptionNo"`
	// Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: The tags of the basic GA instance.
	Tags *[]*RosBasicAccelerator_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

