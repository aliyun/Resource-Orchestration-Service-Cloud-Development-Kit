package alicloudroscdkcen


// Properties for defining a `RosCenBandwidthPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackage
type RosCenBandwidthPackageProps struct {
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	GeographicRegionAId interface{} `field:"required" json:"geographicRegionAId" yaml:"geographicRegionAId"`
	GeographicRegionBId interface{} `field:"required" json:"geographicRegionBId" yaml:"geographicRegionBId"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewDuration interface{} `field:"optional" json:"autoRenewDuration" yaml:"autoRenewDuration"`
	BandwidthPackageChargeType interface{} `field:"optional" json:"bandwidthPackageChargeType" yaml:"bandwidthPackageChargeType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosCenBandwidthPackage_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

