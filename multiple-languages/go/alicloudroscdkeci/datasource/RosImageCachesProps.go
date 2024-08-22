package datasource


// Properties for defining a `RosImageCaches`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
type RosImageCachesProps struct {
	ImageCacheId interface{} `field:"optional" json:"imageCacheId" yaml:"imageCacheId"`
	ImageCacheName interface{} `field:"optional" json:"imageCacheName" yaml:"imageCacheName"`
	Limit interface{} `field:"optional" json:"limit" yaml:"limit"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
}

