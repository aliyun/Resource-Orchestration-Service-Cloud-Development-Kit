package datasource


// Properties for defining a `KeyPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypair
type KeyPairProps struct {
	// Property keyPairName: The Key Name.
	KeyPairName interface{} `field:"required" json:"keyPairName" yaml:"keyPairName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

