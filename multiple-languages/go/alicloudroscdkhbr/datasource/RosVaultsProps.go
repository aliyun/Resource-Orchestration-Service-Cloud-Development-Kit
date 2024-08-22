package datasource


// Properties for defining a `RosVaults`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
type RosVaultsProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	VaultId interface{} `field:"optional" json:"vaultId" yaml:"vaultId"`
	VaultType interface{} `field:"optional" json:"vaultType" yaml:"vaultType"`
}

