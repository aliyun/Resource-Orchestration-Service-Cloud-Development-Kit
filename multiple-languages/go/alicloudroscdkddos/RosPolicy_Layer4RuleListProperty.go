package alicloudroscdkddos


type RosPolicy_Layer4RuleListProperty struct {
	Action interface{} `field:"required" json:"action" yaml:"action"`
	ConditionList interface{} `field:"required" json:"conditionList" yaml:"conditionList"`
	Limited interface{} `field:"required" json:"limited" yaml:"limited"`
	Match interface{} `field:"required" json:"match" yaml:"match"`
	Method interface{} `field:"required" json:"method" yaml:"method"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
}

