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
	// Property dbName: The name of the database to be created.
	//
	// The name must comply with the following rules:
	// It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
	// (-), and underscores (_).
	// It must end with a letter or a digit. It can be up to 64 characters in length.
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
	// Property accountName: The name of the database account to be used.
	AccountName interface{} `field:"optional" json:"accountName" yaml:"accountName"`
	// Property accountPrivilege: The permissions of the database account on the database.
	//
	// Valid values:
	// ReadWrite: has read and write permissions on the database.
	// ReadOnly: has the read-only permission on the database.
	// DMLOnly: runs only data manipulation language (DML) statements.
	// DDLOnly: runs only data definition language (DDL) statements.
	// ReadIndex: has read and index permissions on the database.
	// Default value: ReadWrite.
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
	// Valid values:
	// It cannot start with http:\/\/ or https:\/\/.
	// It must be 2 to 256 characters in length.
	DbDescription interface{} `field:"optional" json:"dbDescription" yaml:"dbDescription"`
}

