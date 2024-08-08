package alicloudroscdkecs


type RosInstanceClone_DiskMappingsProperty struct {
	Size interface{} `field:"required" json:"size" yaml:"size"`
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Device interface{} `field:"optional" json:"device" yaml:"device"`
	DiskName interface{} `field:"optional" json:"diskName" yaml:"diskName"`
	PerformanceLevel interface{} `field:"optional" json:"performanceLevel" yaml:"performanceLevel"`
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
}

