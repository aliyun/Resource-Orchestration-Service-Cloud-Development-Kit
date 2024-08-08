package alicloudroscdkram


// Properties for defining a `RosRole`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-role
type RosRoleProps struct {
	AssumeRolePolicyDocument interface{} `field:"required" json:"assumeRolePolicyDocument" yaml:"assumeRolePolicyDocument"`
	RoleName interface{} `field:"required" json:"roleName" yaml:"roleName"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
	MaxSessionDuration interface{} `field:"optional" json:"maxSessionDuration" yaml:"maxSessionDuration"`
	Policies interface{} `field:"optional" json:"policies" yaml:"policies"`
	PolicyAttachments interface{} `field:"optional" json:"policyAttachments" yaml:"policyAttachments"`
}

