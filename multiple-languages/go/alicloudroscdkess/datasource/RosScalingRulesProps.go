package datasource


// Properties for defining a `RosScalingRules`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrules
type RosScalingRulesProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ScalingGroupId interface{} `field:"optional" json:"scalingGroupId" yaml:"scalingGroupId"`
	ScalingRuleAris interface{} `field:"optional" json:"scalingRuleAris" yaml:"scalingRuleAris"`
	ScalingRuleIds interface{} `field:"optional" json:"scalingRuleIds" yaml:"scalingRuleIds"`
	ScalingRuleNames interface{} `field:"optional" json:"scalingRuleNames" yaml:"scalingRuleNames"`
	ScalingRuleType interface{} `field:"optional" json:"scalingRuleType" yaml:"scalingRuleType"`
	ShowAlarmRules interface{} `field:"optional" json:"showAlarmRules" yaml:"showAlarmRules"`
}

