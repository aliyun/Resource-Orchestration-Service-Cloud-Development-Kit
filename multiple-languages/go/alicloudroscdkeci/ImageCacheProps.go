package alicloudroscdkeci


// Properties for defining a `ImageCache`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-imagecache
type ImageCacheProps struct {
	// Property image: The image list to be cached.
	Image interface{} `field:"required" json:"image" yaml:"image"`
	// Property imageCacheName: Image cache name.
	ImageCacheName interface{} `field:"required" json:"imageCacheName" yaml:"imageCacheName"`
	// Property securityGroupId: Security group ID.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	// Property vSwitchId: VSwitch ID.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property acrRegistryInfo: Enterprise Edition access credential configuration information.
	AcrRegistryInfo interface{} `field:"optional" json:"acrRegistryInfo" yaml:"acrRegistryInfo"`
	// Property autoMatchImageCache: Specifies whether to enable reuse of image cache layers.
	//
	// If you enable this feature, and the image cache that you want to createand an existing image cache contain duplicate image layers, the system reuses the duplicate image layers to create the new image cache.
	//   This accelerates the creation of the image cache.
	// Valid values: true: enables reuse of image cache layers.
	// false: disables reuse of image cache layers.
	// Default value: false.
	AutoMatchImageCache interface{} `field:"optional" json:"autoMatchImageCache" yaml:"autoMatchImageCache"`
	// Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
	EipInstanceId interface{} `field:"optional" json:"eipInstanceId" yaml:"eipInstanceId"`
	// Property imageCacheSize: The size of the image cache.
	//
	// Unit: GiB. Default value: 20.
	ImageCacheSize interface{} `field:"optional" json:"imageCacheSize" yaml:"imageCacheSize"`
	// Property imageRegistryCredential: Private image password.
	//
	// Alibaba Cloud ACR image can be left blank.
	ImageRegistryCredential interface{} `field:"optional" json:"imageRegistryCredential" yaml:"imageRegistryCredential"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property retentionDays: The retention period of the image cache.
	//
	// Unit: days. When the retention period ends, the image cache expires and is deleted.
	//   By default, image caches never expire.
	// Note: The image caches that fail to be created are only retained for one day.
	RetentionDays interface{} `field:"optional" json:"retentionDays" yaml:"retentionDays"`
	// Property zoneId: The zone ID of the image cache.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

