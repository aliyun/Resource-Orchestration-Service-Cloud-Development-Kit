package alicloudroscdkeventbridge


// Properties for defining a `Rule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule
type RuleProps struct {
	// Property eventBusName: The name of the event bus.
	EventBusName interface{} `field:"required" json:"eventBusName" yaml:"eventBusName"`
	// Property filterPattern: The event pattern, in the JSON format.
	FilterPattern interface{} `field:"required" json:"filterPattern" yaml:"filterPattern"`
	// Property ruleName: The name of the event rule.
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	// Property targets: The event target to which events are delivered.
	Targets interface{} `field:"required" json:"targets" yaml:"targets"`
	// Property description: The description of the event rule.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property status: The status of the event rule.
	//
	// Valid values:
	// ENABLE: The event rule is enabled. It is the default state of the event rule.
	// DISABLE: The event rule is disabled.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

