package alicloudroscdkalb


// Properties for defining a `RosRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-rule
type RosRuleProps struct {
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
	RuleActions interface{} `field:"required" json:"ruleActions" yaml:"ruleActions"`
	RuleConditions interface{} `field:"required" json:"ruleConditions" yaml:"ruleConditions"`
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	Direction interface{} `field:"optional" json:"direction" yaml:"direction"`
}

