package alicloudroscdkcms


// Properties for defining a `RosEventRuleTargets`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventruletargets
type RosEventRuleTargetsProps struct {
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	ContactParameters interface{} `field:"optional" json:"contactParameters" yaml:"contactParameters"`
	FcParameters interface{} `field:"optional" json:"fcParameters" yaml:"fcParameters"`
	MnsParameters interface{} `field:"optional" json:"mnsParameters" yaml:"mnsParameters"`
	SlsParameters interface{} `field:"optional" json:"slsParameters" yaml:"slsParameters"`
	WebhookParameters interface{} `field:"optional" json:"webhookParameters" yaml:"webhookParameters"`
}

