package alicloudroscdkesa


// Properties for defining a `RosWaitingRoomRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomrule
type RosWaitingRoomRuleProps struct {
	Rule interface{} `field:"required" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"required" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	WaitingRoomId interface{} `field:"required" json:"waitingRoomId" yaml:"waitingRoomId"`
}

