package alicloudroscdkhbr


// Properties for defining a `RosVault`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
type RosVaultProps struct {
	VaultName interface{} `field:"required" json:"vaultName" yaml:"vaultName"`
	VaultType interface{} `field:"required" json:"vaultType" yaml:"vaultType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EncryptType interface{} `field:"optional" json:"encryptType" yaml:"encryptType"`
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	RedundancyType interface{} `field:"optional" json:"redundancyType" yaml:"redundancyType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosVault_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VaultStorageClass interface{} `field:"optional" json:"vaultStorageClass" yaml:"vaultStorageClass"`
}

