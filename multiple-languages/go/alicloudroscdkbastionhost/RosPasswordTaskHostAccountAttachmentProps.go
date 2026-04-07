package alicloudroscdkbastionhost


// Properties for defining a `RosPasswordTaskHostAccountAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment
type RosPasswordTaskHostAccountAttachmentProps struct {
	HostAccountIds interface{} `field:"required" json:"hostAccountIds" yaml:"hostAccountIds"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	TaskId interface{} `field:"required" json:"taskId" yaml:"taskId"`
}

