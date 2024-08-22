package datasource


// Properties for defining a `User`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
type UserProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property userId: RAM user ID.
	//
	// At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
	UserId interface{} `field:"optional" json:"userId" yaml:"userId"`
	// Property userName: RAM user name.
	//
	// At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}

