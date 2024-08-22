package alicloudroscdkecs


// Properties for defining a `Disk`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-disk
type DiskProps struct {
	// Property autoSnapshotPolicyId: Auto snapshot policy ID.
	AutoSnapshotPolicyId interface{} `field:"optional" json:"autoSnapshotPolicyId" yaml:"autoSnapshotPolicyId"`
	// Property burstingEnabled: Whether enable bursting.
	BurstingEnabled interface{} `field:"optional" json:"burstingEnabled" yaml:"burstingEnabled"`
	// Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.
	//
	// Default to false.
	DeleteAutoSnapshot interface{} `field:"optional" json:"deleteAutoSnapshot" yaml:"deleteAutoSnapshot"`
	// Property description: Description of the disk, [2, 256] characters.
	//
	// Do not fill or empty, the default is empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property diskCategory: The disk category, now support cloud\/cloud_ssd\/cloud_essd\/cloud_efficiency\/san_ssd\/san_efficiency\/cloud_auto, depends the region.
	DiskCategory interface{} `field:"optional" json:"diskCategory" yaml:"diskCategory"`
	// Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	// Property encrypted: Whether disk is encrypted, default to false.
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	// Property instanceId: Create a cloud disk and automatically mount it to the specified InstanceId.
	//
	// - Once the instance ID is set, the ResourceGroupId, Tags, and KMSKeyId parameters you set are ignored.
	// - You cannot specify both ZoneId and InstanceId.
	// Default value: null, meaning that a pay-as-you-go cloud drive is created, and the region of the drive is defined by the RegionId and ZoneId.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property kmsKeyId: KMS key ID used by the cloud disk.
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	// Property multiAttach: Specifies whether to enable the multi-attach feature for the disk.
	//
	// Valid values:
	// Disabled: disables the multi-attach feature.
	// Enabled: enables the multi-attach feature. Set the value to Enabled only for ESSDs.
	// Default value: Disabled.
	MultiAttach interface{} `field:"optional" json:"multiAttach" yaml:"multiAttach"`
	// Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
	PerformanceLevel interface{} `field:"optional" json:"performanceLevel" yaml:"performanceLevel"`
	// Property provisionedIops: Provisioning IOPS.
	ProvisionedIops interface{} `field:"optional" json:"provisionedIops" yaml:"provisionedIops"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property size: The size of the disk unit in GB.
	Size interface{} `field:"optional" json:"size" yaml:"size"`
	// Property snapshotId: If specified, the backup used as the source to create disk.
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
	// Property storageSetId: Storage set ID.
	StorageSetId interface{} `field:"optional" json:"storageSetId" yaml:"storageSetId"`
	// Property storageSetPartitionNumber: The number of storage set partitions.
	StorageSetPartitionNumber interface{} `field:"optional" json:"storageSetPartitionNumber" yaml:"storageSetPartitionNumber"`
	// Property tags: Tags to attach to disk.
	//
	// Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosDisk_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property zoneId: Create a pay-as-you-go cloud drive within the specified availability area.
	//
	// - If you do not set InstanceId, ZoneId is required.
	// - You cannot specify both ZoneId and InstanceId.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

