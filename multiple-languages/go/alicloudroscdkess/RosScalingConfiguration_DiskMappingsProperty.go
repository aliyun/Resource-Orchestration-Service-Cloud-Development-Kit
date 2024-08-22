package alicloudroscdkess


type RosScalingConfiguration_DiskMappingsProperty struct {
	AutoSnapshotPolicyId interface{} `field:"optional" json:"autoSnapshotPolicyId" yaml:"autoSnapshotPolicyId"`
	BurstingEnabled interface{} `field:"optional" json:"burstingEnabled" yaml:"burstingEnabled"`
	Categories interface{} `field:"optional" json:"categories" yaml:"categories"`
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	DeleteWithInstance interface{} `field:"optional" json:"deleteWithInstance" yaml:"deleteWithInstance"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Device interface{} `field:"optional" json:"device" yaml:"device"`
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	PerformanceLevel interface{} `field:"optional" json:"performanceLevel" yaml:"performanceLevel"`
	ProvisionedIops interface{} `field:"optional" json:"provisionedIops" yaml:"provisionedIops"`
	Size interface{} `field:"optional" json:"size" yaml:"size"`
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
}

