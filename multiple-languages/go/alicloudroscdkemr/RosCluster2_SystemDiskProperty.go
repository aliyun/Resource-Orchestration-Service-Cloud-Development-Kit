package alicloudroscdkemr


type RosCluster2_SystemDiskProperty struct {
	Category interface{} `field:"required" json:"category" yaml:"category"`
	Size interface{} `field:"required" json:"size" yaml:"size"`
	Count interface{} `field:"optional" json:"count" yaml:"count"`
	PerformanceLevel interface{} `field:"optional" json:"performanceLevel" yaml:"performanceLevel"`
}

