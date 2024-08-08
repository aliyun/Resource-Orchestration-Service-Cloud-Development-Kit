package alicloudroscdkcloudphone


// Properties for defining a `RosKeyPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair
type RosKeyPairProps struct {
	KeyPairName interface{} `field:"required" json:"keyPairName" yaml:"keyPairName"`
	PublicKeyBody interface{} `field:"required" json:"publicKeyBody" yaml:"publicKeyBody"`
}

