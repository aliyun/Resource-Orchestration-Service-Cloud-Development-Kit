package datasource


// Properties for defining a `ImageCaches`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
type ImageCachesProps struct {
	// Property imageCacheId: ImageCacheId.
	ImageCacheId interface{} `field:"optional" json:"imageCacheId" yaml:"imageCacheId"`
	// Property imageCacheName: ImageCacheName.
	ImageCacheName interface{} `field:"optional" json:"imageCacheName" yaml:"imageCacheName"`
	// Property limit: Number of pages.
	Limit interface{} `field:"optional" json:"limit" yaml:"limit"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: ResourceGroupId.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property snapshotId: SnapshotId.
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
}

