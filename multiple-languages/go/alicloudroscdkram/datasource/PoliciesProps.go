package datasource


// Properties for defining a `Policies`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-policies
type PoliciesProps struct {
	// Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	// Property policyName: Filter the results by a specific policy name.
	//
	// Supports using * and ?  to fuzzy match.
	PolicyName interface{} `field:"optional" json:"policyName" yaml:"policyName"`
	// Property policyType: Filter the results by a specific policy type.
	PolicyType interface{} `field:"optional" json:"policyType" yaml:"policyType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
	RoleName interface{} `field:"optional" json:"roleName" yaml:"roleName"`
	// Property userName: The specific user to which policies attached.
	//
	// Only one of UserName, GroupName, and RoleName can be specified at most.
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}

