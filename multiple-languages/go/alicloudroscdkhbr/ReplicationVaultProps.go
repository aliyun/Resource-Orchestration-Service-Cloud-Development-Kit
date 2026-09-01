package alicloudroscdkhbr


// Properties for defining a `ReplicationVault`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault
type ReplicationVaultProps struct {
	// Property replicationSourceRegionId: The region ID of the source vault for replication.
	ReplicationSourceRegionId interface{} `field:"required" json:"replicationSourceRegionId" yaml:"replicationSourceRegionId"`
	// Property replicationSourceVaultId: The ID of the source vault for replication.
	ReplicationSourceVaultId interface{} `field:"required" json:"replicationSourceVaultId" yaml:"replicationSourceVaultId"`
	// Property vaultName: The name of the vault.
	VaultName interface{} `field:"required" json:"vaultName" yaml:"vaultName"`
	// Property description: The description of the vault.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property encryptType: The method that is used to encrypt the source data.
	//
	// This parameter is valid only
	// if you set the VaultType parameter to STANDARD or OTS_BACKUP. Valid values:
	// *   HBR_PRIVATE: The source data is encrypted by using the built-in encryption
	// method of Hybrid Backup Recovery (HBR).
	// *   KMS: The source data is encrypted by using Key Management Service (KMS).
	EncryptType interface{} `field:"optional" json:"encryptType" yaml:"encryptType"`
	// Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key.
	//
	// This
	// parameter is required only if you set the EncryptType parameter to KMS.
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	// Property redundancyType: The data redundancy type of the backup vault.
	//
	// Valid values:
	// *   LRS: standard locally redundant storage (LRS). Cloud Backup stores the copies
	// of each object on multiple devices of different facilities in the same zone. This
	// way, Cloud Backup ensures data durability and availability even if hardware
	// failures occur.
	// *   ZRS: standard zone-redundant storage (ZRS). Cloud Backup uses the multi-zone
	// mechanism to distribute data across three zones within the same region. If a zone
	// fails, the data that is stored in the other two zones is still accessible.
	RedundancyType interface{} `field:"optional" json:"redundancyType" yaml:"redundancyType"`
	// Property vaultStorageClass: The storage type of the backup vault.
	//
	// Valid value: STANDARD, which indicates
	// standard storage.
	VaultStorageClass interface{} `field:"optional" json:"vaultStorageClass" yaml:"vaultStorageClass"`
}

