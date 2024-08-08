package alicloudroscdkecs


// Properties for defining a `RosSSHKeyPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypair
type RosSSHKeyPairProps struct {
	KeyPairName interface{} `field:"required" json:"keyPairName" yaml:"keyPairName"`
	PublicKeyBody interface{} `field:"optional" json:"publicKeyBody" yaml:"publicKeyBody"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosSSHKeyPair_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

