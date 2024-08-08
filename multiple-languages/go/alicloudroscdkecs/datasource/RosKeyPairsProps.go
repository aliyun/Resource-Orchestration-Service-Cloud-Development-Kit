package datasource


// Properties for defining a `RosKeyPairs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypairs
type RosKeyPairsProps struct {
	KeyPairFingerPrint interface{} `field:"optional" json:"keyPairFingerPrint" yaml:"keyPairFingerPrint"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosKeyPairs_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

