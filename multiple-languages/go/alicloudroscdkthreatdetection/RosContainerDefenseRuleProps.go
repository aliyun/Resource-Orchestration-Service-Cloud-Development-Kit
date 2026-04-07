package alicloudroscdkthreatdetection


// Properties for defining a `RosContainerDefenseRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule
type RosContainerDefenseRuleProps struct {
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	RuleAction interface{} `field:"optional" json:"ruleAction" yaml:"ruleAction"`
	RuleId interface{} `field:"optional" json:"ruleId" yaml:"ruleId"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	RuleSwitch interface{} `field:"optional" json:"ruleSwitch" yaml:"ruleSwitch"`
	RuleType interface{} `field:"optional" json:"ruleType" yaml:"ruleType"`
	Scope interface{} `field:"optional" json:"scope" yaml:"scope"`
	Whitelist interface{} `field:"optional" json:"whitelist" yaml:"whitelist"`
	WhitelistHash interface{} `field:"optional" json:"whitelistHash" yaml:"whitelistHash"`
}

