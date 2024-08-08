package datasource


// Properties for defining a `TLSPolicies`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies
type TLSPoliciesProps struct {
	// Property instanceId: The ID of the TLS policy.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property tlsPolicyName: The name of the TLS policy.
	//
	// The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
	TlsPolicyName interface{} `field:"optional" json:"tlsPolicyName" yaml:"tlsPolicyName"`
}

