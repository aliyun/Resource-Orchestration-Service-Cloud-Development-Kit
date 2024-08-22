package datasource


// Properties for defining a `KeyPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypair
type KeyPairProps struct {
	// Property keyPairName: The name of the key pair.
	//
	// You can use the asterisk (*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
	// - *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
	// - SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
	// - *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
	// - SshKey: queries the key pair named SshKey.
	KeyPairName interface{} `field:"required" json:"keyPairName" yaml:"keyPairName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

