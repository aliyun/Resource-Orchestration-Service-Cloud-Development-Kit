package datasource


// Properties for defining a `RosVault`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vault
type RosVaultProps struct {
	VaultId interface{} `field:"required" json:"vaultId" yaml:"vaultId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

