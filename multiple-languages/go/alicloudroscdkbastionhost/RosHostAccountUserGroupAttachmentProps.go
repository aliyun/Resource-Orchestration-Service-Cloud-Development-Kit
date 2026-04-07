package alicloudroscdkbastionhost


// Properties for defining a `RosHostAccountUserGroupAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
type RosHostAccountUserGroupAttachmentProps struct {
	Hosts interface{} `field:"required" json:"hosts" yaml:"hosts"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	UserGroupId interface{} `field:"required" json:"userGroupId" yaml:"userGroupId"`
}

