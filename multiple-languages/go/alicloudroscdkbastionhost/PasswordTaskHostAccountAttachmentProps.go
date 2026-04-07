package alicloudroscdkbastionhost


// Properties for defining a `PasswordTaskHostAccountAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment
type PasswordTaskHostAccountAttachmentProps struct {
	// Property hostAccountIds: The IDs of the host accounts to be attached to the password task.
	HostAccountIds interface{} `field:"required" json:"hostAccountIds" yaml:"hostAccountIds"`
	// Property instanceId: The ID of the bastion host instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property taskId: The ID of the password task.
	TaskId interface{} `field:"required" json:"taskId" yaml:"taskId"`
}

