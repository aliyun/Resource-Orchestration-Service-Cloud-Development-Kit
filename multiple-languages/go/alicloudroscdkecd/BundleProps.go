package alicloudroscdkecd


// Properties for defining a `Bundle`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-bundle
type BundleProps struct {
	// Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType. Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.
	DesktopType interface{} `field:"required" json:"desktopType" yaml:"desktopType"`
	// Property imageId: The ID of the image.
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	// Property rootDiskSizeGib: The root disk size gib.
	RootDiskSizeGib interface{} `field:"required" json:"rootDiskSizeGib" yaml:"rootDiskSizeGib"`
	// Property userDiskSizeGib: The size of the data disk.
	//
	// Currently, only one data disk can be set. Unit: GiB.
	// - The size of the data disk that supports the setting corresponds to the specification.
	// - The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.
	UserDiskSizeGib interface{} `field:"required" json:"userDiskSizeGib" yaml:"userDiskSizeGib"`
	// Property bundleName: The name of the bundle.
	BundleName interface{} `field:"optional" json:"bundleName" yaml:"bundleName"`
	// Property description: The description of the bundle.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property language: The language.
	//
	// Valid values:
	// zh-CN: Simplified Chinese
	// zh-HK: Traditional Chinese (Hong Kong)
	// en-US: English
	// ja-JP: Japanese.
	Language interface{} `field:"optional" json:"language" yaml:"language"`
	// Property rootDiskPerformanceLevel: The root disk performance level.
	//
	// Valid values:
	// PL0
	// PL1
	// PL2
	// PL3.
	RootDiskPerformanceLevel interface{} `field:"optional" json:"rootDiskPerformanceLevel" yaml:"rootDiskPerformanceLevel"`
	// Property userDiskPerformanceLevel: The user disk performance level.Valid values: PL0 PL1 PL2 PL3.
	UserDiskPerformanceLevel interface{} `field:"optional" json:"userDiskPerformanceLevel" yaml:"userDiskPerformanceLevel"`
}

