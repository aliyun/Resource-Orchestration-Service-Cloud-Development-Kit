package alicloudroscdkecs


// Properties for defining a `RosRamRoleAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-ramroleattachment
type RosRamRoleAttachmentProps struct {
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	RamRoleName interface{} `field:"required" json:"ramRoleName" yaml:"ramRoleName"`
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
}

