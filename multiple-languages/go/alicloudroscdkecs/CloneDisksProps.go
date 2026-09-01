package alicloudroscdkecs


// Properties for defining a `CloneDisks`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-clonedisks
type CloneDisksProps struct {
	// Property diskCategory: The type of the new disk.
	//
	// Valid values:
	// - `cloud_essd`: ESSD cloud disk.
	// - `cloud_auto`: ESSD AutoPL cloud disk.
	// - `cloud_essd_entry`: ESSD Entry cloud disk.
	// - `cloud_regional_disk_auto`: regional disk.
	// > Disk type limits for cloning
	// >
	// > - A non-regional disk can be cloned only as a non-regional disk.
	// >
	// > - A regional disk can be cloned only as a regional disk.
	DiskCategory interface{} `field:"required" json:"diskCategory" yaml:"diskCategory"`
	// Property multiAttach: Specifies whether to enable the multi-attach feature for the new disk.
	//
	// Valid
	// values:
	// - `Disabled`: Disables the multi-attach feature.
	// - `Enabled`: Enables the multi-attach feature. You can set this parameter to
	// `Enabled` only for ESSD cloud disks.
	MultiAttach interface{} `field:"required" json:"multiAttach" yaml:"multiAttach"`
	// Property size: The size of the new disk, in GiB.
	//
	// The value must be greater than or equal to the
	// size of the source disk. The value range varies based on the `DiskCategory`
	// value:
	// - `cloud_essd`: The value range depends on the `PerformanceLevel` value.
	// - `PL0`: 1 to 65,536
	// - `PL1`: 20 to 65,536
	// - `PL2`: 461 to 65,536
	// - `PL3`: 1,261 to 65,536
	// - `cloud_auto`: 1 to 65,536
	// - `cloud_essd_entry`: 10 to 32,768
	// - `cloud_regional_disk_auto`: 10 to 65,536.
	Size interface{} `field:"required" json:"size" yaml:"size"`
	// Property sourceDiskId: The ID of the source disk.
	SourceDiskId interface{} `field:"required" json:"sourceDiskId" yaml:"sourceDiskId"`
	// Property burstingEnabled: Specifies whether to enable performance bursting for the new disk.
	//
	// Valid values:
	// - `true`: Enables performance bursting.
	// - `false`: Disables performance bursting.
	// > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For
	// more information, see ESSD AutoPL cloud disks.
	BurstingEnabled interface{} `field:"optional" json:"burstingEnabled" yaml:"burstingEnabled"`
	// Property diskName: The name of the new disk.
	//
	// The name must be 2 to 128 characters in length. It must
	// start with a letter and can contain letters, digits, colons (:), underscores (_),
	// periods (.), and hyphens (-).
	// Default value: none.
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	// Property encrypted: Specifies whether to encrypt the new disk.
	//
	// Valid values:
	// - `true`: The disk is encrypted.
	// - `false`: The disk is not encrypted.
	// Default value: false.
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	// Property kmsKeyId: The ID of the KMS key used to encrypt the disk.
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	// Property performanceLevel: The performance level of the new ESSD cloud disk.
	//
	// Valid values:
	// - `PL0`: A single disk can deliver up to 10,000 random read\/write IOPS.
	// - `PL1`: A single disk can deliver up to 50,000 random read\/write IOPS.
	// - `PL2`: A single disk can deliver up to 100,000 random read\/write IOPS.
	// - `PL3`: A single disk can deliver up to 1,000,000 random read\/write IOPS.
	// > This parameter is required when `DiskCategory` is set to `cloud_essd`.
	PerformanceLevel interface{} `field:"optional" json:"performanceLevel" yaml:"performanceLevel"`
	// Property provisionedIops: The provisioned read\/write IOPS of the ESSD AutoPL cloud disk.
	//
	// Valid values:
	// - You cannot set this parameter for disks that are 3 GiB or smaller in size.
	// - For disks that are 4 GiB or larger in size, the value must be in the range of
	// `[0, min(1000 * Size - baseline performance, 50000)]`.
	// baseline performance = `max(min(1800 + 50 * Size, 50000), 3000)`.
	// > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For
	// more information, see ESSD AutoPL cloud disks.
	ProvisionedIops interface{} `field:"optional" json:"provisionedIops" yaml:"provisionedIops"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to disk.
	//
	// Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCloneDisks_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

