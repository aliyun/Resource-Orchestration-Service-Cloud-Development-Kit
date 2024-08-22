package alicloudroscdkens


// Properties for defining a `KeyPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-keypair
type KeyPairProps struct {
	// Property keyPairName: The name of the key pair.
	//
	// The name must conform to the following naming conventions:
	// The name must be 2 to 128 characters in length, and can contain letters, digits, colons (:), underscores (_), and hyphens (-).
	// It must start with a letter but cannot start with http:\/\/ or https:\/\/.
	KeyPairName interface{} `field:"required" json:"keyPairName" yaml:"keyPairName"`
	// Property publicKeyBody: SSH Public key.
	//
	// If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
	PublicKeyBody interface{} `field:"optional" json:"publicKeyBody" yaml:"publicKeyBody"`
}

