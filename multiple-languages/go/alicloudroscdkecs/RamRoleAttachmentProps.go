package alicloudroscdkecs


// Properties for defining a `RamRoleAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-ramroleattachment
type RamRoleAttachmentProps struct {
	// Property instanceIds: The instance id that needs to be granted the ram role.
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	// Property ramRoleName: The ram role name.
	RamRoleName interface{} `field:"required" json:"ramRoleName" yaml:"ramRoleName"`
	// Property policy: When granting the instance RAM role to one or more ECS instances, you can specify an additional permission policy to further limit the permissions of the RAM role.
	//
	// The length is 1~1024 characters.
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
}

