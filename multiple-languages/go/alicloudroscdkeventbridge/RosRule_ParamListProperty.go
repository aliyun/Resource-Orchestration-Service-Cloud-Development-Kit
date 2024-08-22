package alicloudroscdkeventbridge


type RosRule_ParamListProperty struct {
	Form interface{} `field:"required" json:"form" yaml:"form"`
	ResourceKey interface{} `field:"required" json:"resourceKey" yaml:"resourceKey"`
	Value interface{} `field:"required" json:"value" yaml:"value"`
	Template interface{} `field:"optional" json:"template" yaml:"template"`
}

