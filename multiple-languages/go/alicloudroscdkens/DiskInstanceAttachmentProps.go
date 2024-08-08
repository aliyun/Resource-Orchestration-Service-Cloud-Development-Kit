package alicloudroscdkens


// Properties for defining a `DiskInstanceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-diskinstanceattachment
type DiskInstanceAttachmentProps struct {
	// Property diskId: The ID of the cloud disk to be mounted.
	//
	// The Cloud Disk (DiskId) and the instance (InstanceId) must be on the same node.
	DiskId interface{} `field:"required" json:"diskId" yaml:"diskId"`
	// Property instanceId: Instance ID.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property deleteWithInstance: Whether the cloud disk to be mounted is released with the instance Value: true: When the instance is released, the cloud disk is released together with the instance.
	//
	// false: When the instance is released, the cloud disk is retained and is not released together with the instance.
	//   Empty means false by default.
	DeleteWithInstance interface{} `field:"optional" json:"deleteWithInstance" yaml:"deleteWithInstance"`
}

