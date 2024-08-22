package alicloudroscdkeci


// Properties for defining a `RosImageCache`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-imagecache
type RosImageCacheProps struct {
	Image interface{} `field:"required" json:"image" yaml:"image"`
	ImageCacheName interface{} `field:"required" json:"imageCacheName" yaml:"imageCacheName"`
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	AcrRegistryInfo interface{} `field:"optional" json:"acrRegistryInfo" yaml:"acrRegistryInfo"`
	AutoMatchImageCache interface{} `field:"optional" json:"autoMatchImageCache" yaml:"autoMatchImageCache"`
	EipInstanceId interface{} `field:"optional" json:"eipInstanceId" yaml:"eipInstanceId"`
	ImageCacheSize interface{} `field:"optional" json:"imageCacheSize" yaml:"imageCacheSize"`
	ImageRegistryCredential interface{} `field:"optional" json:"imageRegistryCredential" yaml:"imageRegistryCredential"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RetentionDays interface{} `field:"optional" json:"retentionDays" yaml:"retentionDays"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

