package alicloudroscdkens


// Properties for defining a `RosInstanceSecurityGroupAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instancesecuritygroupattachment
type RosInstanceSecurityGroupAttachmentProps struct {
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
}

