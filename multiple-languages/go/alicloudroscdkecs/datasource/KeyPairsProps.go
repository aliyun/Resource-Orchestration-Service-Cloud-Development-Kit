package datasource


// Properties for defining a `KeyPairs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypairs
type KeyPairsProps struct {
	// Property keyPairFingerPrint: The fingerprint of the key pair.
	//
	// The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
	KeyPairFingerPrint interface{} `field:"optional" json:"keyPairFingerPrint" yaml:"keyPairFingerPrint"`
	// Property keyPairName: he name of the key pair.
	//
	// You can use the asterisk (*) symbol as a wildcard in regular expressions to query key pairs by performing a fuzzy search. Sample patterns:
	// *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
	// SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
	// *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
	// SshKey: queries the key pair named SshKey.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the key pair belongs.
	//
	// If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of keypair.
	Tags *[]*RosKeyPairs_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

