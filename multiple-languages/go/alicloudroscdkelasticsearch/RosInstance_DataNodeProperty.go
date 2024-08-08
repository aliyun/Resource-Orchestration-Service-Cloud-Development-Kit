package alicloudroscdkelasticsearch


type RosInstance_DataNodeProperty struct {
	Amount interface{} `field:"required" json:"amount" yaml:"amount"`
	DiskSize interface{} `field:"required" json:"diskSize" yaml:"diskSize"`
	DiskType interface{} `field:"required" json:"diskType" yaml:"diskType"`
	Spec interface{} `field:"required" json:"spec" yaml:"spec"`
	DiskEncryption interface{} `field:"optional" json:"diskEncryption" yaml:"diskEncryption"`
	PerformanceLevel interface{} `field:"optional" json:"performanceLevel" yaml:"performanceLevel"`
}

