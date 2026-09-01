package alicloudroscdkpolardb


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account
type AccountProps struct {
	// Property accountName: The name of the database account.
	//
	// The name must meet the following requirements:
	// - It must start with a lowercase letter and end with a letter or a digit.
	// - It can contain lowercase letters, digits, and underscores (_).
	// - It must be 1 to 16 characters in length.
	// - It cannot be a reserved keyword, such as root or admin.
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
	// Property accountPrivilege: The privilege level to grant on the specified databases.
	//
	// Valid values:
	// - ReadWrite: read and write permissions
	// - ReadOnly: read-only permissions
	// - DMLOnly: DML permissions only
	// - DDLOnly: DDL permissions only
	// - ReadIndex: read-only and index permissions
	// > * This parameter takes effect only when you specify the `DBName` parameter.
	// >
	// > * If you specify multiple databases in `DBName`, you must specify a
	// corresponding permission for each in `AccountPrivilege`, separated by commas. The
	// `AccountPrivilege` string cannot exceed 900 characters. For example, to grant
	// read and write permissions to database DB1 and read-only permissions to database
	// DB2, set `DBName` to `DB1,DB2` and set `AccountPrivilege` to
	// `ReadWrite,ReadOnly`.
	// >
	// > * This parameter applies only to standard accounts on PolarDB for MySQL
	// clusters.
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
	// Property dbName: The name of the database that the account can access.
	//
	// To specify multiple
	// databases, separate the database names with a comma (,).
	// > This parameter applies only to standard accounts on PolarDB for MySQL clusters.
	DbName interface{} `field:"optional" json:"dbName" yaml:"dbName"`
	// Property privForAllDb: Whether to grant permissions to all libraries in the current cluster and any libraries that will be added in the future.
	//
	// Valid values:
	// - 0 (default)): Not authorized.
	// - 1: Authorization.
	PrivForAllDb interface{} `field:"optional" json:"privForAllDb" yaml:"privForAllDb"`
}

