package alicloudroscdkpolardb


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account
type AccountProps struct {
	// Property accountName: The name of the database account.
	//
	// The name must comply with the following rules:
	// - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
	// - It can be up to 16 characters in length.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property accountPassword: The password of the database account.
	//
	// The password must comply with the following rules:
	// - It must consist of uppercase letters, lowercase letters, digits, and special characters.
	// - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
	// - It must be 8 to 32 characters in length.
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	// Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property accountDescription: The description of the database account.
	//
	// The description must comply with the following rules:
	// - It cannot start with http:\/\/ or https:\/\/.
	// - It must be 2 to 256 characters in length.
	AccountDescription interface{} `field:"optional" json:"accountDescription" yaml:"accountDescription"`
	// Property accountPrivilege: The permissions of the database account on the database.
	//
	// Valid values:
	// ReadWrite: has read and write permissions on the database.
	// ReadOnly: has the read-only permission on the database.
	// DMLOnly: runs only data manipulation language (DML) statements.
	// DDLOnly: runs only data definition language (DDL) statements.
	// Default value: ReadWrite.
	// Separate multiple permissions with a comma (,).
	AccountPrivilege interface{} `field:"optional" json:"accountPrivilege" yaml:"accountPrivilege"`
	// Property accountType: The type of the database account.
	//
	// Valid values:
	// - Normal: standard account
	// - Super: privileged account
	// Default value: Super.
	// Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
	// You can create only one privileged account for an ApsaraDB for POLARDB cluster.
	AccountType interface{} `field:"optional" json:"accountType" yaml:"accountType"`
	// Property dbName: The name of the database whose access permissions are to be granted to the database account.
	//
	// Separate multiple databases with a comma (,).
	DbName interface{} `field:"optional" json:"dbName" yaml:"dbName"`
}

