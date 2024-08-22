package alicloudroscdkrds


// Properties for defining a `MigrateTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-migratetask
type MigrateTaskProps struct {
	// Property backupMode: The type of the migration task.
	//
	// Valid values:
	// FULL: specifies that full backup files are used to restore data.
	// UPDF: specifies that incremental backup files or log files are used to restore incremental data.
	BackupMode interface{} `field:"required" json:"backupMode" yaml:"backupMode"`
	// Property dbInstanceId: The ID of the instance.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property dbName: The name of the database that you want to restore.
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
	// Property isOnlineDb: Specifies whether to bring the restored database online for user access.
	//
	// Note The value for SQL Server 2008 R2 is fixed to True.
	IsOnlineDb interface{} `field:"required" json:"isOnlineDb" yaml:"isOnlineDb"`
	// Property checkDbMode: The consistency check method of the database.
	//
	// Valid values:
	// SyncExecuteDBCheck: synchronous database check
	// AsyncExecuteDBCheck: asynchronous database check
	// Default value: AsyncExecuteDBCheck (compatible with SQL Server 2008 R2).
	// Note When IsOnlineDB is set to True, this value is valid.
	CheckDbMode interface{} `field:"optional" json:"checkDbMode" yaml:"checkDbMode"`
	// Property ossObjectPositions: The information of the backup file in the OSS bucket.
	//
	// The values consist of three parts that are separated by colons (:):
	// The endpoint of the OSS bucket: oss-ap-southeast-1.aliyuncs.com.
	// The name of the OSS bucket: rdsmssqlsingapore.
	// The key of the backup file in the OSS bucket: autotest_2008R2_TestMigration_FULL.bak.
	// Note
	// This parameter is optional for instances that run SQL Server 2008 R2.
	// This parameter is required for instances that run a database engine later than SQL
	// Server 2008 R2.
	OssObjectPositions interface{} `field:"optional" json:"ossObjectPositions" yaml:"ossObjectPositions"`
	// Property ossUrls: The shared URL of the backup file in the OSS bucket.
	//
	// The URL must be encoded.
	// If you specify multiple URLs, separate them with vertical bars (|) and then encode
	// them.
	// Note This parameter must be entered for instances that run SQL Server 2008 R2.
	OssUrls interface{} `field:"optional" json:"ossUrls" yaml:"ossUrls"`
}

