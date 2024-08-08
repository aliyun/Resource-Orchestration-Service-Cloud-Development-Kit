package alicloudroscdkens


// Properties for defining a `RosKeyPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-keypair
type RosKeyPairProps struct {
	KeyPairName interface{} `field:"required" json:"keyPairName" yaml:"keyPairName"`
	PublicKeyBody interface{} `field:"optional" json:"publicKeyBody" yaml:"publicKeyBody"`
}

