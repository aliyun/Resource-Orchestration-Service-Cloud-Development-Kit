package alicloudroscdkcms


// Properties for defining a `RosEventRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventrule
type RosEventRuleProps struct {
	EventPattern interface{} `field:"required" json:"eventPattern" yaml:"eventPattern"`
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EventType interface{} `field:"optional" json:"eventType" yaml:"eventType"`
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	State interface{} `field:"optional" json:"state" yaml:"state"`
}

