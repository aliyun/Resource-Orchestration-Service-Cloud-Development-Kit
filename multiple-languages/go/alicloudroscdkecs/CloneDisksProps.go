package alicloudroscdkecs


// Properties for defining a `CloneDisks`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-clonedisks
type CloneDisksProps struct {
	// Property diskCategory: The category of the disk.
	DiskCategory interface{} `field:"required" json:"diskCategory" yaml:"diskCategory"`
	// Property multiAttach: Whether to enable multi-attach for the disk.
	//
	// Valid values: Enabled, Disabled.
	MultiAttach interface{} `field:"required" json:"multiAttach" yaml:"multiAttach"`
	// Property size: The size of the disk in GiB.
	Size interface{} `field:"required" json:"size" yaml:"size"`
	// Property sourceDiskId: The ID of the source disk.
	SourceDiskId interface{} `field:"required" json:"sourceDiskId" yaml:"sourceDiskId"`
	// Property burstingEnabled: Whether to enable bursting for the disk.
	BurstingEnabled interface{} `field:"optional" json:"burstingEnabled" yaml:"burstingEnabled"`
	// Property diskName: The name of the disk.
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	// Property encrypted: Whether to encrypt the disk.
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	// Property kmsKeyId: The ID of the KMS key used to encrypt the disk.
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	// Property performanceLevel: The performance level of the disk.
	PerformanceLevel interface{} `field:"optional" json:"performanceLevel" yaml:"performanceLevel"`
	// Property provisionedIops: The provisioned IOPS for the disk.
	ProvisionedIops interface{} `field:"optional" json:"provisionedIops" yaml:"provisionedIops"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to disk.
	//
	// Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCloneDisks_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

