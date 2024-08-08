package alicloudroscdkeventbridge


// Properties for defining a `RosRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule
type RosRuleProps struct {
	EventBusName interface{} `field:"required" json:"eventBusName" yaml:"eventBusName"`
	FilterPattern interface{} `field:"required" json:"filterPattern" yaml:"filterPattern"`
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	Targets interface{} `field:"required" json:"targets" yaml:"targets"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

