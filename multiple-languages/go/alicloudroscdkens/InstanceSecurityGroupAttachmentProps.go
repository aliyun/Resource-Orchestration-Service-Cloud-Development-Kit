package alicloudroscdkens


// Properties for defining a `InstanceSecurityGroupAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instancesecuritygroupattachment
type InstanceSecurityGroupAttachmentProps struct {
	// Property securityGroupId: Security group ID.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	// Property instanceId: Instance ID.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
}

