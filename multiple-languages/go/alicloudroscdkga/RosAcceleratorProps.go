package alicloudroscdkga


// Properties for defining a `RosAccelerator`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-accelerator
type RosAcceleratorProps struct {
	AcceleratorName interface{} `field:"optional" json:"acceleratorName" yaml:"acceleratorName"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoUseCoupon interface{} `field:"optional" json:"autoUseCoupon" yaml:"autoUseCoupon"`
	BandwidthBillingType interface{} `field:"optional" json:"bandwidthBillingType" yaml:"bandwidthBillingType"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	EnableCrossBorder interface{} `field:"optional" json:"enableCrossBorder" yaml:"enableCrossBorder"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	IpSetConfig interface{} `field:"optional" json:"ipSetConfig" yaml:"ipSetConfig"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
}

