package alicloudroscdkddospro


// Properties for defining a `RosSchedulerRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-schedulerrule
type RosSchedulerRuleProps struct {
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	Rules interface{} `field:"required" json:"rules" yaml:"rules"`
	RuleType interface{} `field:"required" json:"ruleType" yaml:"ruleType"`
	Param interface{} `field:"optional" json:"param" yaml:"param"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

