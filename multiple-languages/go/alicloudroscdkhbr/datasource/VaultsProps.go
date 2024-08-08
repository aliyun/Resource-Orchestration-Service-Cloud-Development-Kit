package datasource


// Properties for defining a `Vaults`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
type VaultsProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property vaultId: VaultId.
	VaultId interface{} `field:"optional" json:"vaultId" yaml:"vaultId"`
	// Property vaultType: Vault type.
	//
	// Value
	// - **STANDARD**, which indicates a common backup vault.
	// - **OTS_BACKUP**, indicating OTS backup vault.
	VaultType interface{} `field:"optional" json:"vaultType" yaml:"vaultType"`
}

