package alicloudroscdkga


// Properties for defining a `BandwidthPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackage
type BandwidthPackageProps struct {
	// Property bandwidth: The bandwidth provided by the bandwidth plan.
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	// Property type: The type of the bandwidth plan.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property autoPay: Specifies whether to enable automatic payment.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoUseCoupon: The AutoUseCoupon  of the bandwidth.
	AutoUseCoupon interface{} `field:"optional" json:"autoUseCoupon" yaml:"autoUseCoupon"`
	// Property bandwidthType: the bandwidth BandwidthType of the bandwidth.
	BandwidthType interface{} `field:"optional" json:"bandwidthType" yaml:"bandwidthType"`
	// Property billingType: The BillingType of the bandwidth.
	BillingType interface{} `field:"optional" json:"billingType" yaml:"billingType"`
	// Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.
	CbnGeographicRegionIdA interface{} `field:"optional" json:"cbnGeographicRegionIdA" yaml:"cbnGeographicRegionIdA"`
	// Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.
	CbnGeographicRegionIdB interface{} `field:"optional" json:"cbnGeographicRegionIdB" yaml:"cbnGeographicRegionIdB"`
	// Property chargeType: The ChargeType of the bandwidth.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property duration:.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property pricingCycle:.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property ratio: The Ratio of the bandwidth.
	Ratio interface{} `field:"optional" json:"ratio" yaml:"ratio"`
}

