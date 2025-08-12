package alicloudroscdkecs


// Properties for defining a `DiskAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-diskattachment
type DiskAttachmentProps struct {
	// Property diskId: The disk id to attached.
	DiskId interface{} `field:"required" json:"diskId" yaml:"diskId"`
	// Property instanceId: The instanceId to attach the disk.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property bootable: Whether the disk is bootable.
	Bootable interface{} `field:"optional" json:"bootable" yaml:"bootable"`
	// Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.
	//
	// Default to true.
	DeleteAutoSnapshot interface{} `field:"optional" json:"deleteAutoSnapshot" yaml:"deleteAutoSnapshot"`
	// Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
	DeleteWithInstance interface{} `field:"optional" json:"deleteWithInstance" yaml:"deleteWithInstance"`
	// Property device: The device where the volume is exposed on the instance.
	//
	// could be \/dev\/xvd[b-z]. If not specification, will use default value.
	Device interface{} `field:"optional" json:"device" yaml:"device"`
	// Property force: Whether to force the operation.
	Force interface{} `field:"optional" json:"force" yaml:"force"`
	// Property instanceType: The instance type.
	//
	// Allowed values are LingJun and ECS, Default is ECS.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property keyPairName: The name of the key pair.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property password: The password for the disk.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
}

