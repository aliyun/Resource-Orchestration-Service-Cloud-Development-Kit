package alicloudroscdkclickhouse


// Properties for defining a `EnterpriseDBClusterAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
type EnterpriseDBClusterAccountProps struct {
	// Property account: The name of the database account.
	Account interface{} `field:"required" json:"account" yaml:"account"`
	// Property accountType: The type of the database account.
	//
	// Valid values:
	// - **NormalAccount**: Normal account number.
	// - **SuperAccount**: The privileged account.
	AccountType interface{} `field:"required" json:"accountType" yaml:"accountType"`
	// Property dbInstanceId: The cluster ID.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property password: Database account password.
	//
	// Set the following rules.
	// - Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.
	// - Oh-! @#$%^& *()_+-= is a special character.
	// - Length is 8~32 characters.
	Password interface{} `field:"required" json:"password" yaml:"password"`
	// Property description: The description of the account.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property dmlAuthSetting: The information about permissions.
	DmlAuthSetting interface{} `field:"optional" json:"dmlAuthSetting" yaml:"dmlAuthSetting"`
}

