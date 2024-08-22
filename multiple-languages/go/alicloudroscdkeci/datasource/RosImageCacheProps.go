package datasource


// Properties for defining a `RosImageCache`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
type RosImageCacheProps struct {
	ImageCacheId interface{} `field:"required" json:"imageCacheId" yaml:"imageCacheId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

