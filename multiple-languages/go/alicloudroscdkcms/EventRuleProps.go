package alicloudroscdkcms


// Properties for defining a `EventRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventrule
type EventRuleProps struct {
	// Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.
	EventPattern interface{} `field:"required" json:"eventPattern" yaml:"eventPattern"`
	// Property ruleName: The name of the alarm rule.
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	// Property description: The description of the alert rule.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property eventType: The type of the event alert.
	//
	// Valid values:
	// SYSTEM
	// CUSTOM.
	EventType interface{} `field:"optional" json:"eventType" yaml:"eventType"`
	// Property groupId: The ID of the application group.
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	// Property state: The status of the alert rule.
	//
	// Valid values:
	// ENABLED
	// DISABLED.
	State interface{} `field:"optional" json:"state" yaml:"state"`
}

