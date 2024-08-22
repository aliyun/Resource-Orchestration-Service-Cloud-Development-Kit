package alicloudroscdkredis


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-account
type AccountProps struct {
	// Property accountName: The name of the account.
	//
	// The name must start with a lowercase letter and can contain
	// lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
	// in length.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property accountPassword: The password of the account.
	//
	// The password can be 8 to 32 characters in length and
	// must contain at least three types of the following characters: uppercase letters,
	// lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
	// ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
	// hyphens (-), and equal signs (=).
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	// Property instanceId: The ID of the instance for which you want to create the account.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property accountDescription: The description of the account.
	//
	// The description must start with a letter, and cannot start with http:\/\/ or https:\/\/.
	// The description can contain letters, underscores (_), hyphens (-), and digits.
	// It can be 2 to 256 characters in length.
	AccountDescription interface{} `field:"optional" json:"accountDescription" yaml:"accountDescription"`
	// Property accountPrivilege: The permission of the account.
	//
	// Valid values:
	// RoleReadOnly
	// RoleReadWrite (default value)
	// RoleRepl
	// Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
	// an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
	// permission can be granted to an account only in an ApsaraDB for Redis instance of
	// the standard edition in Redis 4.0.
	AccountPrivilege interface{} `field:"optional" json:"accountPrivilege" yaml:"accountPrivilege"`
	// Property accountType: The type of the account.
	//
	// Set this parameter to Normal.
	AccountType interface{} `field:"optional" json:"accountType" yaml:"accountType"`
}

