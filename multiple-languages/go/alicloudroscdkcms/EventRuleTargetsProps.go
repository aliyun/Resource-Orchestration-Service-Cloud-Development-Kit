package alicloudroscdkcms


// Properties for defining a `EventRuleTargets`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventruletargets
type EventRuleTargetsProps struct {
	// Property ruleName: The name of the alert rule.
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	// Property contactParameters: CONTACT configuration.A maximum of 5 parameters.
	ContactParameters interface{} `field:"optional" json:"contactParameters" yaml:"contactParameters"`
	// Property fcParameters: FC configuration.A maximum of 5 parameters.
	FcParameters interface{} `field:"optional" json:"fcParameters" yaml:"fcParameters"`
	// Property mnsParameters: MNS configuration.A maximum of 5 parameters.
	MnsParameters interface{} `field:"optional" json:"mnsParameters" yaml:"mnsParameters"`
	// Property slsParameters: SLS configuration.A maximum of 5 parameters.
	SlsParameters interface{} `field:"optional" json:"slsParameters" yaml:"slsParameters"`
	// Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
	WebhookParameters interface{} `field:"optional" json:"webhookParameters" yaml:"webhookParameters"`
}

