package alicloudroscdkoss


type RosWebsite_RoutingRulesProperty struct {
	Condition interface{} `field:"required" json:"condition" yaml:"condition"`
	Redirect interface{} `field:"required" json:"redirect" yaml:"redirect"`
	RuleNumber interface{} `field:"required" json:"ruleNumber" yaml:"ruleNumber"`
}

