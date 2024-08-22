package datasource


// Properties for defining a `RosRoles`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-roles
type RosRolesProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	RoleName interface{} `field:"optional" json:"roleName" yaml:"roleName"`
}

