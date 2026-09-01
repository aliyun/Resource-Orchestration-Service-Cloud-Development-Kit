package alicloudroscdkeci


// Properties for defining a `ImageCache`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-imagecache
type ImageCacheProps struct {
	// Property image: The container images used to create the image cache.
	Image interface{} `field:"required" json:"image" yaml:"image"`
	// Property imageCacheName: Image cache name.
	ImageCacheName interface{} `field:"required" json:"imageCacheName" yaml:"imageCacheName"`
	// Property securityGroupId: Security group ID.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	// Property vSwitchId: The ID of the vSwitch.
	//
	// You can specify up to 10 vSwitch IDs, separated by commas
	// (,). For example, `vsw-*,vsw-*`.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property acrRegistryInfo: The information about the ACR instance.
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
	// Property imageRegistryCredential: The credentials of the image repository.
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

