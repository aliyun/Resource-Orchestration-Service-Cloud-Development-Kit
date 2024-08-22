package alicloudroscdkens


// Properties for defining a `RosDiskInstanceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-diskinstanceattachment
type RosDiskInstanceAttachmentProps struct {
	DiskId interface{} `field:"required" json:"diskId" yaml:"diskId"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	DeleteWithInstance interface{} `field:"optional" json:"deleteWithInstance" yaml:"deleteWithInstance"`
}

