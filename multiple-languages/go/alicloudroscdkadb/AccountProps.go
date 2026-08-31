package alicloudroscdkadb


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-account
type AccountProps struct {
	// Property accountName: The database account name.
	//
	// The name must meet the following requirements:
	// - Start with a lowercase letter and end with a lowercase letter or digit.
	// - Contain only lowercase letters, digits, or underscores (_).
	// - Be 2 to 16 characters long.
	// - Not use reserved usernames such as root, admin, or opsadmin.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property accountPassword: The database account password.
	//
	// - Use any three of the following character types: uppercase letters, lowercase
	// letters, digits, and special characters.
	// - Special characters include the following: `!@#$%^&*()_+-=`
	// - Be 8 to 32 characters long.
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	// Property dbClusterId: The ID of the cluster.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property accountDescription: The description of the account.
	//
	// The description cannot start with http:\/\/or https:\/\/.
	// The description can be up to 256 characters in length.
	AccountDescription interface{} `field:"optional" json:"accountDescription" yaml:"accountDescription"`
	// Property accountType: Normal: standard account Super: privileged account.
	AccountType interface{} `field:"optional" json:"accountType" yaml:"accountType"`
}

