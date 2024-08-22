package alicloudroscdkeais


// Properties for defining a `ClientInstanceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-clientinstanceattachment
type ClientInstanceAttachmentProps struct {
	// Property clientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
	ClientInstanceId interface{} `field:"required" json:"clientInstanceId" yaml:"clientInstanceId"`
	// Property instanceId: The EAIS instance ID.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
}

