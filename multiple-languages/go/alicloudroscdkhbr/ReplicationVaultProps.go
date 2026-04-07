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
	// Property encryptType: The encryption type of the vault.
	EncryptType interface{} `field:"optional" json:"encryptType" yaml:"encryptType"`
	// Property kmsKeyId: The KMS key ID used for encryption.
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	// Property redundancyType: The redundancy type of the vault.
	RedundancyType interface{} `field:"optional" json:"redundancyType" yaml:"redundancyType"`
	// Property vaultStorageClass: The storage class of the vault.
	VaultStorageClass interface{} `field:"optional" json:"vaultStorageClass" yaml:"vaultStorageClass"`
}

