package alicloudroscdkcore


type RosRuleProps struct {
	// Used to describe assertions.
	Assertions *RosRuleAssertionProps `field:"required" json:"assertions" yaml:"assertions"`
	// Define the rule condition.
	//
	// If the rule condition is not defined, the assertion is always valid.
	RuleCondition IResolvable `field:"optional" json:"ruleCondition" yaml:"ruleCondition"`
}

