package alicloudroscdkhbr


// Properties for defining a `RosReplicationVault`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault
type RosReplicationVaultProps struct {
	ReplicationSourceRegionId interface{} `field:"required" json:"replicationSourceRegionId" yaml:"replicationSourceRegionId"`
	ReplicationSourceVaultId interface{} `field:"required" json:"replicationSourceVaultId" yaml:"replicationSourceVaultId"`
	VaultName interface{} `field:"required" json:"vaultName" yaml:"vaultName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EncryptType interface{} `field:"optional" json:"encryptType" yaml:"encryptType"`
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	RedundancyType interface{} `field:"optional" json:"redundancyType" yaml:"redundancyType"`
	VaultStorageClass interface{} `field:"optional" json:"vaultStorageClass" yaml:"vaultStorageClass"`
}

