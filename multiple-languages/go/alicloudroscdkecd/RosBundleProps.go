package alicloudroscdkecd


// Properties for defining a `RosBundle`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-bundle
type RosBundleProps struct {
	DesktopType interface{} `field:"required" json:"desktopType" yaml:"desktopType"`
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	RootDiskSizeGib interface{} `field:"required" json:"rootDiskSizeGib" yaml:"rootDiskSizeGib"`
	UserDiskSizeGib interface{} `field:"required" json:"userDiskSizeGib" yaml:"userDiskSizeGib"`
	BundleName interface{} `field:"optional" json:"bundleName" yaml:"bundleName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Language interface{} `field:"optional" json:"language" yaml:"language"`
	RootDiskPerformanceLevel interface{} `field:"optional" json:"rootDiskPerformanceLevel" yaml:"rootDiskPerformanceLevel"`
	UserDiskPerformanceLevel interface{} `field:"optional" json:"userDiskPerformanceLevel" yaml:"userDiskPerformanceLevel"`
}

