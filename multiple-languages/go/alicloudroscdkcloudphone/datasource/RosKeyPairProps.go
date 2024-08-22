package datasource


// Properties for defining a `RosKeyPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypair
type RosKeyPairProps struct {
	KeyPairName interface{} `field:"required" json:"keyPairName" yaml:"keyPairName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

