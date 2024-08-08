package alicloudroscdkrds


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-account
type AccountProps struct {
	// Property accountName: Account name, which must be unique and meet the following requirements: Start with a letter;
	//
	// Consist of lower-case letters, digits, and underscores (_);
	// Length:
	// MySQL 8.0 and 5.7: 2-32 characters.
	// MySQL 5.6、MariaDB and PostgreSQL Local version: 2-16 characters.
	// SQL Server: 2-64 characters.
	// PostgreSQL Cloud version: 2-63 characters.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property accountPassword: The account password for the database instance.
	//
	// It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	// Property dbInstanceId: RDS instance ID.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property accountDescription: Account remarks.
	//
	// It cannot begin with http:\/\/ or https:\/\/.
	// It must start with a Chinese character or English letter.
	// It can include Chinese and English characters\/letters, underscores (_), hyphens (-), and digits.
	// The length may be 2-256 characters.
	AccountDescription interface{} `field:"optional" json:"accountDescription" yaml:"accountDescription"`
	// Property accountType: Privilege type of account.
	//
	// Normal: Common privilege.
	// Super: High privilege. And the default value is Normal.
	// Sysadmin: Super privileges (SA) (only supported by SQL Server)
	// This parameter is valid for MySQL 5.5\/5.6 only.
	// MySQL 5.7, SQL Server 2012\/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
	AccountType interface{} `field:"optional" json:"accountType" yaml:"accountType"`
}

