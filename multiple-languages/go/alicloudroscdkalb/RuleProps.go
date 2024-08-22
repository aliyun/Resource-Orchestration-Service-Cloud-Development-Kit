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
	// The name must be 2 to 128 characters in length.
	// It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
	// must start with a letter.
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	// Property direction: Rule direction.
	//
	// Valid values: Request or Response.
	Direction interface{} `field:"optional" json:"direction" yaml:"direction"`
}

