package alicloudroscdkpolardb


// Properties for defining a `Database`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-database
type DatabaseProps struct {
	// Property characterSetName: The character set of the database.
	//
	// For more information, see Character sets.
	CharacterSetName interface{} `field:"required" json:"characterSetName" yaml:"characterSetName"`
	// Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property dbName: The name of the database.
	//
	// The name must meet the following requirements:
	// *   The name can contain lowercase letters, digits, hyphens (-), and underscores
	// (_).
	// *   The name must start with a lowercase letter and end with a lowercase letter
	// or a digit. The name must be 1 to 64 characters in length.
	// > Do not use reserved words as database names, such as `test` or `mysql`.
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
	// Property accountName: The name of the account that is authorized to access the database.
	//
	// You can call
	// the [DescribeAccounts]() operation to query account information.
	// >- You can specify only a standard account. By default, privileged accounts have
	// all permissions on all databases. You do not need to grant privileged accounts
	// the permissions to access the database.
	// >- This parameter is required for PolarDB for PostgreSQL (Compatible with Oracle)
	// clusters or PolarDB for PostgreSQL clusters. This parameter is optional for
	// PolarDB for MySQL clusters.
	AccountName interface{} `field:"optional" json:"accountName" yaml:"accountName"`
	// Property accountPrivilege: The permissions that are granted to the account.
	//
	// Valid values:
	// *   ReadWrite: read and write permissions.
	// *   ReadOnly: read-only permissions.
	// *   DMLOnly: permissions only to execute DML statements on the database.
	// *   DDLOnly: permissions only to execute DDL statements on the database.
	// *   ReadIndex: read-only and index permissions.
	// The default value is ReadWrite.
	// >
	// *   This parameter is valid only when the AccountName parameter is specified.
	// *   For a PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for
	// PostgreSQL cluster, this parameter is optional. If AccountName is specified, it
	// is the account of the database owner.
	// *   For a PolarDB for MySQL cluster, this parameter is optional.
	AccountPrivilege interface{} `field:"optional" json:"accountPrivilege" yaml:"accountPrivilege"`
	// Property collate: A locale setting that specifies the collation for newly created databases.
	//
	// The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
	// when the cluster is PolarDB MySQL, this parameter is not supported.
	Collate interface{} `field:"optional" json:"collate" yaml:"collate"`
	// Property ctype: A locale setting that specifies the character classification of the database.
	//
	// The locale must be compatible with the character set set by the CharacterSetName parameter.
	// It is consistent with the incoming information of Collate.
	// When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
	//   when the cluster is PolarDB MySQL, this parameter is optional.
	Ctype interface{} `field:"optional" json:"ctype" yaml:"ctype"`
	// Property dbDescription: The description of the database.
	//
	// The description must meet the following
	// requirements:
	// *   It cannot start with `http:\/\/` or `https:\/\/`.
	// *   It must be 2 to 256 characters in length.
	// > This parameter is required for a PolarDB for Oracle or PolarDB for PostgreSQL
	// cluster. This parameter is optional for a PolarDB for MySQL cluster.
	DbDescription interface{} `field:"optional" json:"dbDescription" yaml:"dbDescription"`
}

