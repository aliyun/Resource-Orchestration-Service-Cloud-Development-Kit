package alicloudroscdkresourcemanager


// Properties for defining a `RosRole`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
type RosRoleProps struct {
	AssumeRolePolicyDocument interface{} `field:"required" json:"assumeRolePolicyDocument" yaml:"assumeRolePolicyDocument"`
	RoleName interface{} `field:"required" json:"roleName" yaml:"roleName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	MaxSessionDuration interface{} `field:"optional" json:"maxSessionDuration" yaml:"maxSessionDuration"`
}

