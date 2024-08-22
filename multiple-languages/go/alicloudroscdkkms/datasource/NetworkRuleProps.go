package datasource


// Properties for defining a `NetworkRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-networkrule
type NetworkRuleProps struct {
	// Property networkRuleName: The name of the access control rule.
	NetworkRuleName interface{} `field:"required" json:"networkRuleName" yaml:"networkRuleName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

