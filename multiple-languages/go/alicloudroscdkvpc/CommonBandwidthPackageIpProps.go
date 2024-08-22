package alicloudroscdkvpc


// Properties for defining a `CommonBandwidthPackageIp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackageip
type CommonBandwidthPackageIpProps struct {
	// Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
	BandwidthPackageId interface{} `field:"required" json:"bandwidthPackageId" yaml:"bandwidthPackageId"`
	// Property eips: List of eip associated with the Internet Shared Bandwidth instance.
	Eips interface{} `field:"required" json:"eips" yaml:"eips"`
}

