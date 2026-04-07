package alicloudroscdkadb


// Properties for defining a `BackupPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-backuppolicy
type BackupPolicyProps struct {
	// Property dbClusterId: The ID of the ADB cluster.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property preferredBackupPeriod: The preferred backup period.
	//
	// Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
	PreferredBackupPeriod interface{} `field:"required" json:"preferredBackupPeriod" yaml:"preferredBackupPeriod"`
	// Property preferredBackupTime: The preferred backup time.
	//
	// Format: HH:mmZ-HH:mmZ. Example: 02:00Z-03:00Z
	PreferredBackupTime interface{} `field:"required" json:"preferredBackupTime" yaml:"preferredBackupTime"`
	// Property backupRetentionPeriod: The number of days for which backup files are retained.
	//
	// Valid values: 7 to 730.
	BackupRetentionPeriod interface{} `field:"optional" json:"backupRetentionPeriod" yaml:"backupRetentionPeriod"`
	// Property enableBackupLog: Whether to enable log backup.
	//
	// Valid values: Enable, Disable.
	EnableBackupLog interface{} `field:"optional" json:"enableBackupLog" yaml:"enableBackupLog"`
	// Property logBackupRetentionPeriod: The number of days for which log backup files are retained.
	//
	// Valid values: 7 to 730.
	LogBackupRetentionPeriod interface{} `field:"optional" json:"logBackupRetentionPeriod" yaml:"logBackupRetentionPeriod"`
}

