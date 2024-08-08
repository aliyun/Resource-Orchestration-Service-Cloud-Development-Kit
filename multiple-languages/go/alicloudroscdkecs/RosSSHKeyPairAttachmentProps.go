package alicloudroscdkecs


// Properties for defining a `RosSSHKeyPairAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypairattachment
type RosSSHKeyPairAttachmentProps struct {
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	KeyPairName interface{} `field:"required" json:"keyPairName" yaml:"keyPairName"`
	AutoReboot interface{} `field:"optional" json:"autoReboot" yaml:"autoReboot"`
}

