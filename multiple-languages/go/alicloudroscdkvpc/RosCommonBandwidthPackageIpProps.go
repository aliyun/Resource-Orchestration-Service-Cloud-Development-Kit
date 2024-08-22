package alicloudroscdkvpc


// Properties for defining a `RosCommonBandwidthPackageIp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackageip
type RosCommonBandwidthPackageIpProps struct {
	BandwidthPackageId interface{} `field:"required" json:"bandwidthPackageId" yaml:"bandwidthPackageId"`
	Eips interface{} `field:"required" json:"eips" yaml:"eips"`
}

