package alicloudroscdkcen


// Properties for defining a `CenBandwidthLimit`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthlimit
type CenBandwidthLimitProps struct {
	// Property bandwidthLimit: The inter-region bandwidth between the two regions.
	//
	// Unit: Mbps.
	BandwidthLimit interface{} `field:"required" json:"bandwidthLimit" yaml:"bandwidthLimit"`
	// Property cenId: The ID of the CEN instance.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property localRegionId: The ID of the local region.
	LocalRegionId interface{} `field:"required" json:"localRegionId" yaml:"localRegionId"`
	// Property oppositeRegionId: The ID of the other interconnected region.
	OppositeRegionId interface{} `field:"required" json:"oppositeRegionId" yaml:"oppositeRegionId"`
	// Property bandwidthType: The method used to allocate bandwidth.
	//
	// Valid value:
	// - BandwidthPackage (default): allocates bandwidth from a bandwidth plan.
	BandwidthType interface{} `field:"optional" json:"bandwidthType" yaml:"bandwidthType"`
}

