package datasource


// Properties for defining a `Vault`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vault
type VaultProps struct {
	// Property vaultId: The ID of the backup vault.
	VaultId interface{} `field:"required" json:"vaultId" yaml:"vaultId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

