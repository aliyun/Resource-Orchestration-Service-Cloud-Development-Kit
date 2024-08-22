package alicloudroscdkcen


// Properties for defining a `CenBandwidthPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackage
type CenBandwidthPackageProps struct {
	// Property bandwidth: The bandwidth in Mbps of the bandwidth package.
	//
	// The bandwidth cannot be less than 2 Mbps.
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	// Property geographicRegionAId: The other area A to connect.
	//
	// Valid value: China | North-America | Asia-Pacific | Europe | Australia.
	GeographicRegionAId interface{} `field:"required" json:"geographicRegionAId" yaml:"geographicRegionAId"`
	// Property geographicRegionBId: The other area B to connect.
	//
	// Valid value: China | North-America | Asia-Pacific | Europe | Australia.
	GeographicRegionBId interface{} `field:"required" json:"geographicRegionBId" yaml:"geographicRegionBId"`
	// Property autoPay: Whether to automatically pay the bill.
	//
	// Valid value:
	// true (default)
	// false.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoRenew: Indicates whether automatic renewal is enabled.
	//
	// Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewDuration: Duration of each automatic renewals.
	//
	// It takes effect when AutoRenew is true.
	AutoRenewDuration interface{} `field:"optional" json:"autoRenewDuration" yaml:"autoRenewDuration"`
	// Property bandwidthPackageChargeType: The billing method.
	//
	// Valid value: PREPAY, POSTPAY (Default).
	BandwidthPackageChargeType interface{} `field:"optional" json:"bandwidthPackageChargeType" yaml:"bandwidthPackageChargeType"`
	// Property description: The description of the bandwidth package.
	//
	// The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property name: The name of the bandwidth package.
	//
	// The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:\/\/ or https:\/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property period: The purchase period.
	//
	// The default value is 1.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property pricingCycle: The pricing cycle.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCenBandwidthPackage_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

