package alicloudroscdkacs


type RosApplicationPod_DiskConfigProperty struct {
	DiskCategory interface{} `field:"required" json:"diskCategory" yaml:"diskCategory"`
	Size interface{} `field:"required" json:"size" yaml:"size"`
	PerformanceLevel interface{} `field:"optional" json:"performanceLevel" yaml:"performanceLevel"`
}

