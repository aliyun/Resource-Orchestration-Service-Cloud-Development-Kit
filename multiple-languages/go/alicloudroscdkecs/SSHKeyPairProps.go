package alicloudroscdkecs


// Properties for defining a `SSHKeyPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypair
type SSHKeyPairProps struct {
	// Property keyPairName: SSH key pair name.
	//
	// It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http:\/\/, or https:\/\/. It can contain digits, ".", "_", or "-".
	KeyPairName interface{} `field:"required" json:"keyPairName" yaml:"keyPairName"`
	// Property publicKeyBody: SSH Public key.
	//
	// If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
	PublicKeyBody interface{} `field:"optional" json:"publicKeyBody" yaml:"publicKeyBody"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosSSHKeyPair_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

