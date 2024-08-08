package alicloudroscdkadb


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-account
type AccountProps struct {
	// Property accountName: The name of the account.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property accountPassword: The password of the account.
	//
	// The password must contain uppercase letters, lowercase letters, digits, and special
	// characters.
	// Special characters include ! @ # $ % ^ & * ()  _ + - and =
	// The password must be 8 to 32 characters in length.
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

