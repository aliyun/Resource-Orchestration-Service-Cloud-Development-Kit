package alicloudroscdkecs


// Properties for defining a `Disk`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-disk
type DiskProps struct {
	// Property autoSnapshotPolicyId: Auto snapshot policy ID.
	AutoSnapshotPolicyId interface{} `field:"optional" json:"autoSnapshotPolicyId" yaml:"autoSnapshotPolicyId"`
	// Property burstingEnabled: Specifies whether to enable performance bursting.
	//
	// Valid values:
	// - true
	// - false
	// > This parameter is available only for ESSD AutoPL disks (`cloud_auto`). For more
	// information, see [ESSD AutoPL disks]().
	BurstingEnabled interface{} `field:"optional" json:"burstingEnabled" yaml:"burstingEnabled"`
	// Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.
	//
	// Default to false.
	DeleteAutoSnapshot interface{} `field:"optional" json:"deleteAutoSnapshot" yaml:"deleteAutoSnapshot"`
	// Property description: Description of the disk, [2, 256] characters.
	//
	// Do not fill or empty, the default is empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property diskCategory: The disk category, now support cloud\/cloud_ssd\/cloud_essd\/cloud_efficiency\/san_ssd\/san_efficiency\/cloud_auto\/cloud_essd_entry\/cloud_regional_disk_auto\/elastic_ephemeral_disk_standard\/elastic_ephemeral_disk_premium, depends the region.
	DiskCategory interface{} `field:"optional" json:"diskCategory" yaml:"diskCategory"`
	// Property diskName: The name of the disk.
	//
	// The name must be 2 to 128 characters in length. It must
	// start with a letter as defined by Unicode and can contain letters (including
	// English and Chinese characters), digits (0-9), colons (:), underscores (_),
	// periods (.), and hyphens (-).
	// Default value: empty.
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	// Property encrypted: Whether disk is encrypted, default to false.
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	// Property instanceId: Creates a subscription disk and automatically attaches it to the specified subscription instance.
	//
	// - If you set this parameter, the `ResourceGroupId`, `Tag.N.Key`, `Tag.N.Value`,
	// `ClientToken`, and `KMSKeyId` parameters are ignored.
	// - You cannot specify both `ZoneId` and `InstanceId`.
	// Default value: empty. An empty value indicates that you are creating a
	// pay-as-you-go disk. The disk's location is determined by `RegionId` and `ZoneId`.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property kmsKeyId: The ID of the KMS key to use for the disk.
	//
	// > If `Encrypted` is set to true and you do not specify `KMSKeyId`, a default key
	// is used for encryption. The `KMSKeyId` is returned in the response after the
	// instance is created.
	// >
	// > - - If the disk is created from an unshared encrypted snapshot, the encryption
	// key used by that snapshot is used by default.
	// >
	// > - - If the disk is created from a shared encrypted snapshot, the service key is
	// used by default.
	// >
	// > - - If the disk is created in a region with account-level default encryption
	// enabled, the specified account-level key is used by default.
	// >
	// > - - In other cases, the service key is used by default.
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
	// Property provisionedIops: The provisioned read\/write IOPS of a single ESSD AutoPL disk.
	//
	// Valid values:
	// - Capacity <= 3 GiB: You cannot set provisioned performance.
	// - Capacity >= 4 GiB: 0 to min(1,000 IOPS\/GiB × Capacity - Baseline IOPS, 50,000).
	// Baseline IOPS = max(min(1,800 + 50 × Capacity, 50,000), 3,000).
	// > This parameter is available only for ESSD AutoPL disks (`cloud_auto`). For more
	// information, see [ESSD AutoPL disks]().
	ProvisionedIops interface{} `field:"optional" json:"provisionedIops" yaml:"provisionedIops"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property size: The capacity of the disk, in GiB.
	//
	// You must specify a value for this parameter.
	// Value range:
	// - `cloud`: 5 to 2,000
	// - `cloud_efficiency`: 20 to 32,768
	// - `cloud_ssd`: 20 to 32,768
	// - `PerformanceLevel`
	// - PL0: 1 to 65,536
	// - PL1: 20 to 65,536
	// - PL2: 461 to 65,536
	// - PL3: 1,261 to 65,536
	// - `cloud_auto`: 1 to 65,536
	// - `cloud_essd_entry`: 10 to 32,768
	// - `cloud_regional_disk_auto`: 10 to 65,536
	// - `elastic_ephemeral_disk_standard`: 64 to 8,192
	// - `elastic_ephemeral_disk_premium`: 64 to 8,192
	// If you specify `SnapshotId`, the following limits apply to `SnapshotId` and
	// `Size`:
	// - If the snapshot capacity is greater than the specified `Size`, the actual disk
	// size is the snapshot capacity.
	// - If the snapshot capacity is smaller than the specified `Size`, the actual disk
	// size is the specified `Size`.
	Size interface{} `field:"optional" json:"size" yaml:"size"`
	// Property snapshotId: The ID of the snapshot used to create the disk.
	//
	// Snapshots created on or before
	// July 15, 2013 cannot be used to create disks.
	// The `SnapshotId` and `Size` parameters have the following limits:
	// - If the snapshot capacity is greater than the specified `Size`, the actual disk
	// size is the snapshot capacity.
	// - If the snapshot capacity is smaller than the specified `Size`, the actual disk
	// size is the specified `Size`.
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
	// Property storageSetId: The ID of the storage set.
	//
	// > You can specify either storage set parameters (`StorageSetId` and
	// `StorageSetPartitionNumber`) or the dedicated block storage cluster parameter
	// (`StorageClusterId`), but not both. The request fails if you specify parameters
	// for both.
	StorageSetId interface{} `field:"optional" json:"storageSetId" yaml:"storageSetId"`
	// Property storageSetPartitionNumber: The number of partitions in the storage set.
	//
	// The value must be greater than or
	// equal to 2 and cannot exceed the quota returned by the
	// [DescribeAccountAttributes]() operation.
	// Default value: 2.
	StorageSetPartitionNumber interface{} `field:"optional" json:"storageSetPartitionNumber" yaml:"storageSetPartitionNumber"`
	// Property tags: Tags to attach to disk.
	//
	// Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosDisk_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property zoneId: The ID of the zone in which to create the pay-as-you-go disk.
	//
	// - If you do not set `InstanceId`, this parameter is required.
	// - You cannot specify both `ZoneId` and `InstanceId`.
	// > ESSD zone-redundant disks (`cloud_regional_disk_auto`) do not require a zone
	// ID.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

