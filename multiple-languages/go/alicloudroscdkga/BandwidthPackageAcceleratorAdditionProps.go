package alicloudroscdkga


// Properties for defining a `BandwidthPackageAcceleratorAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackageacceleratoraddition
type BandwidthPackageAcceleratorAdditionProps struct {
	// Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth plan.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property bandwidthPackageId: The ID of the bandwidth package to associate.
	BandwidthPackageId interface{} `field:"required" json:"bandwidthPackageId" yaml:"bandwidthPackageId"`
}

