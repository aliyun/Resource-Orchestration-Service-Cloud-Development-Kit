package datasource


// Properties for defining a `Rule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rule
type RuleProps struct {
	// Property ruleId: The ID of the forwarding rule.
	RuleId interface{} `field:"required" json:"ruleId" yaml:"ruleId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

