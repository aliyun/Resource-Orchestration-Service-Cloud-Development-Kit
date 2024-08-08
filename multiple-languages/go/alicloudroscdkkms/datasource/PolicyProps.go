package datasource


// Properties for defining a `Policy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policy
type PolicyProps struct {
	// Property policyName: The name of the permission policy.
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

