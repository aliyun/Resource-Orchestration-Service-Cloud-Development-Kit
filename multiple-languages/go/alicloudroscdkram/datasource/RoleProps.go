package datasource


// Properties for defining a `Role`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-role
type RoleProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property roleName: RAM role name.
	//
	// If not specified, the current ram role will be used.
	RoleName interface{} `field:"optional" json:"roleName" yaml:"roleName"`
}

