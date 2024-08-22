package alicloudroscdkecs


// Properties for defining a `SSHKeyPairAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypairattachment
type SSHKeyPairAttachmentProps struct {
	// Property instanceIds: The comma delimited ECS instance id list.
	//
	// Only support Linux.
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	// Property keyPairName: SSH key pair name.
	KeyPairName interface{} `field:"required" json:"keyPairName" yaml:"keyPairName"`
	// Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.
	//
	// Default: false.
	AutoReboot interface{} `field:"optional" json:"autoReboot" yaml:"autoReboot"`
}

