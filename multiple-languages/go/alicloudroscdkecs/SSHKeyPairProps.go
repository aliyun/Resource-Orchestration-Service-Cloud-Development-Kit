package alicloudroscdkecs


// Properties for defining a `SSHKeyPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypair
type SSHKeyPairProps struct {
	// Property keyPairName: The name of the key pair.
	//
	// The name must be unique. It must be 2 to 128 characters
	// in length. It must start with a letter and cannot start with http\:\/\/ or
	// https\:\/\/. It can contain letters, digits, colons (:), underscores (_), and
	// hyphens (-).
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

