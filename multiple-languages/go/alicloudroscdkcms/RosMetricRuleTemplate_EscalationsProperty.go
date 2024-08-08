package alicloudroscdkcms


type RosMetricRuleTemplate_EscalationsProperty struct {
	Critical interface{} `field:"required" json:"critical" yaml:"critical"`
	Info interface{} `field:"optional" json:"info" yaml:"info"`
	Warn interface{} `field:"optional" json:"warn" yaml:"warn"`
}

