package alicloudroscdkecs


type RosLaunchTemplate_DiskMappingsProperty struct {
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	DeleteWithInstance interface{} `field:"optional" json:"deleteWithInstance" yaml:"deleteWithInstance"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	PerformanceLevel interface{} `field:"optional" json:"performanceLevel" yaml:"performanceLevel"`
	Size interface{} `field:"optional" json:"size" yaml:"size"`
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
}

