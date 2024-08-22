package alicloudroscdkhbr


// Properties for defining a `Vault`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
type VaultProps struct {
	// Property vaultName: The name of the backup vault.
	//
	// The name must be 1 to 64 characters in length.
	VaultName interface{} `field:"required" json:"vaultName" yaml:"vaultName"`
	// Property vaultType: The type of the backup vault.
	//
	// Valid values:
	// - **STANDARD**: standard backup vault.
	// - **OTS_BACKUP**: backup vault for Tablestore.
	VaultType interface{} `field:"required" json:"vaultType" yaml:"vaultType"`
	// Property description: The description of the backup vault.
	//
	// The description must be 0 to 255 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property encryptType: The method that is used to encrypt the source data.
	//
	// This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP.
	// Valid values:- **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
	// - **KMS**: The source data is encrypted by using Key Management Service (KMS).
	EncryptType interface{} `field:"optional" json:"encryptType" yaml:"encryptType"`
	// Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key.
	//
	// This parameter is required only if you set the EncryptType parameter to KMS.
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	// Property redundancyType: The data redundancy type of the backup vault.
	//
	// Valid values:
	// - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
	// - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
	RedundancyType interface{} `field:"optional" json:"redundancyType" yaml:"redundancyType"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of The resource attribute field representing the resource tag..
	Tags *[]*RosVault_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vaultStorageClass: The storage type of the backup vault.
	//
	// The value is only **STANDARD**, which indicates STANDARD storage.
	VaultStorageClass interface{} `field:"optional" json:"vaultStorageClass" yaml:"vaultStorageClass"`
}

