package alicloudroscdkiot


type RosRule_RuleActionProperty struct {
	Configuration interface{} `field:"required" json:"configuration" yaml:"configuration"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	ErrorActionFlag interface{} `field:"optional" json:"errorActionFlag" yaml:"errorActionFlag"`
}

