package alicloudroscdkga


// Properties for defining a `RosBandwidthPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackage
type RosBandwidthPackageProps struct {
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoUseCoupon interface{} `field:"optional" json:"autoUseCoupon" yaml:"autoUseCoupon"`
	BandwidthType interface{} `field:"optional" json:"bandwidthType" yaml:"bandwidthType"`
	BillingType interface{} `field:"optional" json:"billingType" yaml:"billingType"`
	CbnGeographicRegionIdA interface{} `field:"optional" json:"cbnGeographicRegionIdA" yaml:"cbnGeographicRegionIdA"`
	CbnGeographicRegionIdB interface{} `field:"optional" json:"cbnGeographicRegionIdB" yaml:"cbnGeographicRegionIdB"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	Ratio interface{} `field:"optional" json:"ratio" yaml:"ratio"`
}

