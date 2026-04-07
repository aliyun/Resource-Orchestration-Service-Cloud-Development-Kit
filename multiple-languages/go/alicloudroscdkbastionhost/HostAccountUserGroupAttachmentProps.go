package alicloudroscdkbastionhost


// Properties for defining a `HostAccountUserGroupAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
type HostAccountUserGroupAttachmentProps struct {
	// Property hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.
	Hosts interface{} `field:"required" json:"hosts" yaml:"hosts"`
	// Property instanceId: The ID of the BastionHost instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property userGroupId: The ID of the user group.
	UserGroupId interface{} `field:"required" json:"userGroupId" yaml:"userGroupId"`
}

