package alicloudroscdkcms


// Properties for defining a `EventRuleTargets`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventruletargets
type EventRuleTargetsProps struct {
	// Property ruleName: The name of the alert rule.
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	// Property contactParameters: The information about the alert contact groups that receive alert notifications.
	ContactParameters interface{} `field:"optional" json:"contactParameters" yaml:"contactParameters"`
	// Property fcParameters: FC configuration.A maximum of 5 parameters.
	FcParameters interface{} `field:"optional" json:"fcParameters" yaml:"fcParameters"`
	// Property mnsParameters: MNS configuration.A maximum of 5 parameters.
	MnsParameters interface{} `field:"optional" json:"mnsParameters" yaml:"mnsParameters"`
	// Property openApiParameters: API callback notification parameter list.
	OpenApiParameters interface{} `field:"optional" json:"openApiParameters" yaml:"openApiParameters"`
	// Property slsParameters: SLS configuration.A maximum of 5 parameters.
	SlsParameters interface{} `field:"optional" json:"slsParameters" yaml:"slsParameters"`
	// Property webhookParameters: The information about the callback URLs that are used to receive alert notifications.
	WebhookParameters interface{} `field:"optional" json:"webhookParameters" yaml:"webhookParameters"`
}

