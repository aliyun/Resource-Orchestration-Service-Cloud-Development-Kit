package alicloudroscdkcs


type RosClusterHelmApplication_WaitUntilProperty struct {
	Kind interface{} `field:"required" json:"kind" yaml:"kind"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Operator interface{} `field:"required" json:"operator" yaml:"operator"`
	FirstMatch interface{} `field:"optional" json:"firstMatch" yaml:"firstMatch"`
	JsonPath interface{} `field:"optional" json:"jsonPath" yaml:"jsonPath"`
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
	Stage interface{} `field:"optional" json:"stage" yaml:"stage"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	Value interface{} `field:"optional" json:"value" yaml:"value"`
	ValueType interface{} `field:"optional" json:"valueType" yaml:"valueType"`
}

