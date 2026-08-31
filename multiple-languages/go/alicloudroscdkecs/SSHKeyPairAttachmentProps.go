package alicloudroscdkecs


// Properties for defining a `SSHKeyPairAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypairattachment
type SSHKeyPairAttachmentProps struct {
	// Property instanceIds: The IDs of instances to which you want to bind the SSH key pair.
	//
	// The value can be
	// a JSON array that consists of up to 50 instance IDs. Separate multiple instance
	// IDs with commas (,).
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	// Property keyPairName: SSH key pair name.
	KeyPairName interface{} `field:"required" json:"keyPairName" yaml:"keyPairName"`
	// Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.
	//
	// Default: false.
	AutoReboot interface{} `field:"optional" json:"autoReboot" yaml:"autoReboot"`
}

