package alicloudroscdkpolardb


// Properties for defining a `AccountPrivilege`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege
type AccountPrivilegeProps struct {
	// Property accountName: The name of the database account to be granted access permissions.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property accountPrivilege: The permissions of the database account on the database.
	//
	// Valid values:
	// - ReadWrite: has read and write permissions on the database.
	// - ReadOnly: has the read-only permission on the database.
	// - DMLOnly: runs only data manipulation language (DML) statements.
	// - DDLOnly: runs only data definition language (DDL) statements.
	// The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
	// Separate multiple permissions with a comma (,).
	AccountPrivilege interface{} `field:"required" json:"accountPrivilege" yaml:"accountPrivilege"`
	// Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property dbName: The name of the database whose access permissions are to be granted to the database account.
	//
	// You can grant access permissions on one or more databases to the database account.
	// Separate multiple databases with a comma (,).
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
}

