package alicloudroscdkpolardbx


// Properties for defining a `Database`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-database
type DatabaseProps struct {
	// Property accounts: List of accounts.
	Accounts interface{} `field:"required" json:"accounts" yaml:"accounts"`
	// Property characterSetName: Character set, which supports the following character sets: - **utf8 * * - **gbk** - **latin1 * * - **utf8mb4 * *.
	CharacterSetName interface{} `field:"required" json:"characterSetName" yaml:"characterSetName"`
	// Property databaseName: The name of the database.
	DatabaseName interface{} `field:"required" json:"databaseName" yaml:"databaseName"`
	// Property dbInstanceId: The ID of the instance.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property databaseDescription: Database description information.
	DatabaseDescription interface{} `field:"optional" json:"databaseDescription" yaml:"databaseDescription"`
	// Property mode: The mode selected when creating the database.
	//
	// The values are as follows:
	// - **auto**: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;
	// - **drds**: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.
	Mode interface{} `field:"optional" json:"mode" yaml:"mode"`
}

