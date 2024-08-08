package alicloudroscdkhbr


// Properties for defining a `RosDbVault`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault
type RosDbVaultProps struct {
	RetentionDays interface{} `field:"required" json:"retentionDays" yaml:"retentionDays"`
	VaultName interface{} `field:"required" json:"vaultName" yaml:"vaultName"`
	VaultRegionId interface{} `field:"required" json:"vaultRegionId" yaml:"vaultRegionId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Tags *[]*RosDbVault_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

