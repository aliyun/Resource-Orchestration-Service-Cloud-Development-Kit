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
	// Property bandwidth: The bandwidth of the global acceleration instance.
	//
	// Unit: Mbps. Valid values: 200 to 5000. This parameter is required when the access mode is set to Anycast.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property bandwidthBillingType: Bandwidth billing method.
	BandwidthBillingType interface{} `field:"optional" json:"bandwidthBillingType" yaml:"bandwidthBillingType"`
	// Property crossBorderMode: The cross-border mode of the global acceleration instance.
	CrossBorderMode interface{} `field:"optional" json:"crossBorderMode" yaml:"crossBorderMode"`
	// Property ddosConfigList: The DDoS configuration list of the global acceleration instance.
	DdosConfigList interface{} `field:"optional" json:"ddosConfigList" yaml:"ddosConfigList"`
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
	// Property tags: Tags to attach to acceleration instance.
	//
	// Max support 20 tags to add during create acceleration instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosAccelerator_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

