package alicloudroscdkslb


type RosRule_RuleListProperty struct {
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	VServerGroupId interface{} `field:"required" json:"vServerGroupId" yaml:"vServerGroupId"`
	AdvancedSettings interface{} `field:"optional" json:"advancedSettings" yaml:"advancedSettings"`
	Domain interface{} `field:"optional" json:"domain" yaml:"domain"`
	Url interface{} `field:"optional" json:"url" yaml:"url"`
}

