package alicloudroscdkhbr


// Properties for defining a `DbVault`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault
type DbVaultProps struct {
	// Property retentionDays: Data retention days of the vault.
	//
	// Data will be deleted when it's older than this time.
	RetentionDays interface{} `field:"required" json:"retentionDays" yaml:"retentionDays"`
	// Property vaultName: Display name of the vault.
	VaultName interface{} `field:"required" json:"vaultName" yaml:"vaultName"`
	// Property vaultRegionId: The region ID to create the vault.
	VaultRegionId interface{} `field:"required" json:"vaultRegionId" yaml:"vaultRegionId"`
	// Property description: Description of the vault.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosDbVault_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

