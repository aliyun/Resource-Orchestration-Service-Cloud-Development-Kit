package alicloudroscdkcloudphone


// Properties for defining a `KeyPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair
type KeyPairProps struct {
	// Property keyPairName: The name of the key pair.
	//
	// The name must be globally unique. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
	KeyPairName interface{} `field:"required" json:"keyPairName" yaml:"keyPairName"`
	// Property publicKeyBody: The public key content of the key pair.
	PublicKeyBody interface{} `field:"required" json:"publicKeyBody" yaml:"publicKeyBody"`
}

