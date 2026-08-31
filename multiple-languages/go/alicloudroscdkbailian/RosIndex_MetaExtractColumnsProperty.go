package alicloudroscdkbailian


type RosIndex_MetaExtractColumnsProperty struct {
	Key interface{} `field:"required" json:"key" yaml:"key"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Desc interface{} `field:"optional" json:"desc" yaml:"desc"`
	EnableLlm interface{} `field:"optional" json:"enableLlm" yaml:"enableLlm"`
	EnableSearch interface{} `field:"optional" json:"enableSearch" yaml:"enableSearch"`
	Value interface{} `field:"optional" json:"value" yaml:"value"`
}

