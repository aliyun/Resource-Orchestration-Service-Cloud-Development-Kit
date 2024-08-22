package alicloudroscdkcen


// Properties for defining a `RosCenBandwidthLimit`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthlimit
type RosCenBandwidthLimitProps struct {
	BandwidthLimit interface{} `field:"required" json:"bandwidthLimit" yaml:"bandwidthLimit"`
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	LocalRegionId interface{} `field:"required" json:"localRegionId" yaml:"localRegionId"`
	OppositeRegionId interface{} `field:"required" json:"oppositeRegionId" yaml:"oppositeRegionId"`
	BandwidthType interface{} `field:"optional" json:"bandwidthType" yaml:"bandwidthType"`
}

