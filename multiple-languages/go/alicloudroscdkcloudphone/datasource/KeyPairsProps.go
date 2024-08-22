package datasource


// Properties for defining a `KeyPairs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypairs
type KeyPairsProps struct {
	// Property keyPairFingerPrint: The Private Key of the Fingerprint.
	KeyPairFingerPrint interface{} `field:"optional" json:"keyPairFingerPrint" yaml:"keyPairFingerPrint"`
	// Property keyPairName: The Key Name.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

