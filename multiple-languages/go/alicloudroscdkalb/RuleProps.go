package alicloudroscdkalb


// Properties for defining a `Rule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-rule
type RuleProps struct {
	// Property listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB) instance.
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
	// Property priority: The priority of the forwarding rule.
	//
	// Valid values: 1 to 10000. A lower value specifies a higher priority.
	// Note The priority of each forwarding rule within a listener must be unique.
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
	// Property ruleActions: The actions of the forwarding rule.
	RuleActions interface{} `field:"required" json:"ruleActions" yaml:"ruleActions"`
	// Property ruleConditions: The conditions of the forwarding rule.
	RuleConditions interface{} `field:"required" json:"ruleConditions" yaml:"ruleConditions"`
	// Property ruleName: The name of the forwarding rule.
	//
	// - The length must be 2 to 128 English or Chinese characters.
	// - The name must start with a letter, a Chinese character, or a number, and can
	// contain numbers, periods (.), underscores (_), hyphens (-), and spaces.
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	// Property direction: The direction in which the forwarding rule is applied.
	//
	// Valid values:
	// - Request (default): The rule matches and processes requests sent from the client
	// to the ALB instance.
	// - Response: The rule matches and processes responses returned from server groups
	// to the ALB instance.
	// > Basic ALB instances support only forwarding rules whose Direction is Request.
	Direction interface{} `field:"optional" json:"direction" yaml:"direction"`
}

