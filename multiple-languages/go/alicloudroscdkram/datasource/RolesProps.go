package datasource


// Properties for defining a `Roles`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-roles
type RolesProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property roleName: Filter the results by a specific role name.
	//
	// Supports using * and ?  to fuzzy match.
	RoleName interface{} `field:"optional" json:"roleName" yaml:"roleName"`
}

