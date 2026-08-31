package alicloudroscdkmilvus


type RosInstance_ComponentsProperty struct {
	CuNum interface{} `field:"required" json:"cuNum" yaml:"cuNum"`
	Replica interface{} `field:"required" json:"replica" yaml:"replica"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	CuType interface{} `field:"optional" json:"cuType" yaml:"cuType"`
	DiskSizeType interface{} `field:"optional" json:"diskSizeType" yaml:"diskSizeType"`
}

