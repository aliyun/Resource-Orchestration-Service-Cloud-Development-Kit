package alicloudroscdkeais


// Properties for defining a `RosClientInstanceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-clientinstanceattachment
type RosClientInstanceAttachmentProps struct {
	ClientInstanceId interface{} `field:"required" json:"clientInstanceId" yaml:"clientInstanceId"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
}

