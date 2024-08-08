package datasource


// Properties for defining a `Users`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-users
type UsersProps struct {
	// Property groupName: The name of group to which users belongs.
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property userName: Filter the results by a specific user name.
	//
	// Supports using * and ? to fuzzy match.
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}

