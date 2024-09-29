package alicloudroscdkga


type RosForwardingRules_ForwardingRulesProperty struct {
	RuleActions interface{} `field:"required" json:"ruleActions" yaml:"ruleActions"`
	RuleConditions interface{} `field:"required" json:"ruleConditions" yaml:"ruleConditions"`
	ForwardingRuleName interface{} `field:"optional" json:"forwardingRuleName" yaml:"forwardingRuleName"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	RuleDirection interface{} `field:"optional" json:"ruleDirection" yaml:"ruleDirection"`
}

