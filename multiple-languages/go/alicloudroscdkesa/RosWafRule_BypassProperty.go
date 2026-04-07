package alicloudroscdkesa


type RosWafRule_BypassProperty struct {
	CustomRules interface{} `field:"optional" json:"customRules" yaml:"customRules"`
	RegularRules interface{} `field:"optional" json:"regularRules" yaml:"regularRules"`
	RegularTypes interface{} `field:"optional" json:"regularTypes" yaml:"regularTypes"`
	Skip interface{} `field:"optional" json:"skip" yaml:"skip"`
	Tags *[]*string `field:"optional" json:"tags" yaml:"tags"`
}

