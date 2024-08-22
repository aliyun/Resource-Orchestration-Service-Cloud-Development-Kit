package datasource


// Properties for defining a `RosKeyPairs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypairs
type RosKeyPairsProps struct {
	KeyPairFingerPrint interface{} `field:"optional" json:"keyPairFingerPrint" yaml:"keyPairFingerPrint"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

