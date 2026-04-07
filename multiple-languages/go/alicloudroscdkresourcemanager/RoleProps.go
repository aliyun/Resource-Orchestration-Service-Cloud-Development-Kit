package alicloudroscdkresourcemanager


// Properties for defining a `Role`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
type RoleProps struct {
	// Property assumeRolePolicyDocument: The content of the permissions strategy that plays a role.
	AssumeRolePolicyDocument interface{} `field:"required" json:"assumeRolePolicyDocument" yaml:"assumeRolePolicyDocument"`
	// Property roleName: Role Name.
	RoleName interface{} `field:"required" json:"roleName" yaml:"roleName"`
	// Property description: The description of the Resource Manager role.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property maxSessionDuration: Role maximum session time.
	//
	// Valid values: [3600-43200]. Default to 3600.
	MaxSessionDuration interface{} `field:"optional" json:"maxSessionDuration" yaml:"maxSessionDuration"`
}

