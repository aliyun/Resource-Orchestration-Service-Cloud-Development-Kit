package alicloudroscdkelasticsearch


type RosInstance_MasterNodeProperty struct {
	Spec interface{} `field:"required" json:"spec" yaml:"spec"`
	Amount interface{} `field:"optional" json:"amount" yaml:"amount"`
	DiskSize interface{} `field:"optional" json:"diskSize" yaml:"diskSize"`
	DiskType interface{} `field:"optional" json:"diskType" yaml:"diskType"`
}

