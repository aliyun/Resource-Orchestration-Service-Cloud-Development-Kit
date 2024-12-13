package alicloudroscdkmaxcompute


// Properties for defining a `Role`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-role
type RoleProps struct {
	// Property projectName: The name of the MaxCompute project.
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property roleName: The name of the project role.
	RoleName interface{} `field:"required" json:"roleName" yaml:"roleName"`
	// Property type: Role types, MaxCompute provides administrator roles and resource roles.
	//
	// Valid values:
	// Admin: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
	// Resource: You can grant resource-related permissions but not management-related permissions to resource roles.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property acl: The access-control list (ACL), This parameter is not required if a policy is used.
	Acl interface{} `field:"optional" json:"acl" yaml:"acl"`
	// Property policy: The document of the policy.
	//
	// This parameter is not required if an access-control list (ACL) is used.
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
}

