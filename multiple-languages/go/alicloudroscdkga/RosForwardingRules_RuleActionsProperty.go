package alicloudroscdkga


type RosForwardingRules_RuleActionsProperty struct {
	Order interface{} `field:"required" json:"order" yaml:"order"`
	RuleActionType interface{} `field:"required" json:"ruleActionType" yaml:"ruleActionType"`
	RuleActionValue interface{} `field:"optional" json:"ruleActionValue" yaml:"ruleActionValue"`
}

