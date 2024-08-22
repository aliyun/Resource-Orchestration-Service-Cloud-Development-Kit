package alicloudroscdkecs


// Properties for defining a `RosDisk`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-disk
type RosDiskProps struct {
	AutoSnapshotPolicyId interface{} `field:"optional" json:"autoSnapshotPolicyId" yaml:"autoSnapshotPolicyId"`
	BurstingEnabled interface{} `field:"optional" json:"burstingEnabled" yaml:"burstingEnabled"`
	DeleteAutoSnapshot interface{} `field:"optional" json:"deleteAutoSnapshot" yaml:"deleteAutoSnapshot"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DiskCategory interface{} `field:"optional" json:"diskCategory" yaml:"diskCategory"`
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	MultiAttach interface{} `field:"optional" json:"multiAttach" yaml:"multiAttach"`
	PerformanceLevel interface{} `field:"optional" json:"performanceLevel" yaml:"performanceLevel"`
	ProvisionedIops interface{} `field:"optional" json:"provisionedIops" yaml:"provisionedIops"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Size interface{} `field:"optional" json:"size" yaml:"size"`
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
	StorageSetId interface{} `field:"optional" json:"storageSetId" yaml:"storageSetId"`
	StorageSetPartitionNumber interface{} `field:"optional" json:"storageSetPartitionNumber" yaml:"storageSetPartitionNumber"`
	Tags *[]*RosDisk_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

