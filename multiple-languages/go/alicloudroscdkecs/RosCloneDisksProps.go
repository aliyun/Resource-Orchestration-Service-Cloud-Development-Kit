package alicloudroscdkecs


// Properties for defining a `RosCloneDisks`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-clonedisks
type RosCloneDisksProps struct {
	DiskCategory interface{} `field:"required" json:"diskCategory" yaml:"diskCategory"`
	MultiAttach interface{} `field:"required" json:"multiAttach" yaml:"multiAttach"`
	Size interface{} `field:"required" json:"size" yaml:"size"`
	SourceDiskId interface{} `field:"required" json:"sourceDiskId" yaml:"sourceDiskId"`
	BurstingEnabled interface{} `field:"optional" json:"burstingEnabled" yaml:"burstingEnabled"`
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	PerformanceLevel interface{} `field:"optional" json:"performanceLevel" yaml:"performanceLevel"`
	ProvisionedIops interface{} `field:"optional" json:"provisionedIops" yaml:"provisionedIops"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosCloneDisks_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

