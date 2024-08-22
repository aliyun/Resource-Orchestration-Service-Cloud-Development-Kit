package datasource


// Properties for defining a `RosRole`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-role
type RosRoleProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	RoleName interface{} `field:"optional" json:"roleName" yaml:"roleName"`
}

