package datasource


// Properties for defining a `Groups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-groups
type GroupsProps struct {
	// Property groupName: Filter the results by a specific group name.
	//
	// Supports using * and ? to fuzzy match.
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property userName: The specific user which groups contains.
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}

