package alicloudroscdkalb


// Properties for defining a `RosBackendServerAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-backendserverattachment
type RosBackendServerAttachmentProps struct {
	ServerGroupId interface{} `field:"required" json:"serverGroupId" yaml:"serverGroupId"`
	Servers interface{} `field:"required" json:"servers" yaml:"servers"`
}

