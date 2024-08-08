package alicloudroscdkecs


// Properties for defining a `RosDiskAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-diskattachment
type RosDiskAttachmentProps struct {
	DiskId interface{} `field:"required" json:"diskId" yaml:"diskId"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	DeleteAutoSnapshot interface{} `field:"optional" json:"deleteAutoSnapshot" yaml:"deleteAutoSnapshot"`
	DeleteWithInstance interface{} `field:"optional" json:"deleteWithInstance" yaml:"deleteWithInstance"`
	Device interface{} `field:"optional" json:"device" yaml:"device"`
}

