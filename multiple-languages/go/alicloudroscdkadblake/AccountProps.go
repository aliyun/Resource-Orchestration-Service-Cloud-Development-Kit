package alicloudroscdkadblake


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-account
type AccountProps struct {
	// Property accountName: The name of the account.The database account name must meet the following requirements:Start with a lowercase letter and end with a lowercase letter or number.Consists of lowercase letters, numbers, or underscores (_).The length is 2 to 16 characters.Reserved user names such as root, admin, and opsadmin cannot be used.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property accountPassword: The password of the account.The password must meet the following requirements:Database account password.It consists of any three of uppercase letters, lowercase letters, numbers, and special characters.Special symbols include: !@#$%^&*()_+-=The password length is 8 to 32 characters.
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	// Property accountType: The type of the account.Valid values: Normal: normal account. Super: super account.
	AccountType interface{} `field:"required" json:"accountType" yaml:"accountType"`
	// Property dbClusterId: The ID of the ADB Lake cluster.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property engine: The engine of the account.Valid values: AnalyticDB \/ Clickhouse.
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	// Property accountDescription: The description of the account.
	AccountDescription interface{} `field:"optional" json:"accountDescription" yaml:"accountDescription"`
	// Property ramUser: Bind the RAM user to the cluster database common account.
	RamUser interface{} `field:"optional" json:"ramUser" yaml:"ramUser"`
}

