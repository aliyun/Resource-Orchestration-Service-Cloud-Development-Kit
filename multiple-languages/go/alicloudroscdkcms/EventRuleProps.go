package alicloudroscdkcms


// Properties for defining a `EventRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventrule
type EventRuleProps struct {
	// Property eventPattern: The pattern of the event-triggered alert rule.
	EventPattern interface{} `field:"required" json:"eventPattern" yaml:"eventPattern"`
	// Property ruleName: The name of the alarm rule.
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	// Property description: The description of the alert rule.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property eventType: The type of the event.
	//
	// Valid values:
	// - SYSTEM: a system event.
	// - CUSTOM: a custom event.
	EventType interface{} `field:"optional" json:"eventType" yaml:"eventType"`
	// Property groupId: The ID of the application group.
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	// Property silenceTime: Channel silence time in seconds.
	SilenceTime interface{} `field:"optional" json:"silenceTime" yaml:"silenceTime"`
	// Property state: The status of the event-triggered alert rule.
	//
	// Valid values:
	// - ENABLED: The rule is enabled.
	// - DISABLED: The rule is disabled.
	State interface{} `field:"optional" json:"state" yaml:"state"`
}

