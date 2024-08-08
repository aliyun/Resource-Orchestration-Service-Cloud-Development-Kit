package alicloudroscdkecs


type RosInstanceGroupClone_DiskMappingsProperty struct {
	Size interface{} `field:"required" json:"size" yaml:"size"`
	AutoSnapshotPolicyId interface{} `field:"optional" json:"autoSnapshotPolicyId" yaml:"autoSnapshotPolicyId"`
	BurstingEnabled interface{} `field:"optional" json:"burstingEnabled" yaml:"burstingEnabled"`
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Device interface{} `field:"optional" json:"device" yaml:"device"`
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	PerformanceLevel interface{} `field:"optional" json:"performanceLevel" yaml:"performanceLevel"`
	ProvisionedIops interface{} `field:"optional" json:"provisionedIops" yaml:"provisionedIops"`
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
	StorageClusterId interface{} `field:"optional" json:"storageClusterId" yaml:"storageClusterId"`
}

