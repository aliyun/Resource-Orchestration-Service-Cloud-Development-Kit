package alicloudroscdkga


// Properties for defining a `Accelerator`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-accelerator
type AcceleratorProps struct {
	// Property acceleratorName: The Name of the GA instance.
	AcceleratorName interface{} `field:"optional" json:"acceleratorName" yaml:"acceleratorName"`
	// Property autoPay: Whether to pay automatically.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoUseCoupon: The AutoUseCoupon of the GA instance.
	AutoUseCoupon interface{} `field:"optional" json:"autoUseCoupon" yaml:"autoUseCoupon"`
	// Property bandwidthBillingType: Bandwidth billing method.
	BandwidthBillingType interface{} `field:"optional" json:"bandwidthBillingType" yaml:"bandwidthBillingType"`
	// Property duration: Length of purchase.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
	EnableCrossBorder interface{} `field:"optional" json:"enableCrossBorder" yaml:"enableCrossBorder"`
	// Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property ipSetConfig: Accelerate zone configuration.
	IpSetConfig interface{} `field:"optional" json:"ipSetConfig" yaml:"ipSetConfig"`
	// Property pricingCycle: Billing cycle.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property resourceGroupId: The ResourceGroup Id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property spec: Specifications of Global Acceleration Instances.
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
}

