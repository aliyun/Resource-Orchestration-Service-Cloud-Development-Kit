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
	// Property preferredBackupTime: The start time of the full backup within a time range.
	//
	// Specify the time range in
	// the HH:mmZ-HH:mmZ format. The time must be in UTC.
	// >  The time range is 1 hour.
	PreferredBackupTime interface{} `field:"required" json:"preferredBackupTime" yaml:"preferredBackupTime"`
	// Property backupRetentionPeriod: The number of days for which to retain full backup files.
	//
	// Valid values: 7 to 730.
	// >  If you do not specify this parameter, the default value 7 is used.
	BackupRetentionPeriod interface{} `field:"optional" json:"backupRetentionPeriod" yaml:"backupRetentionPeriod"`
	// Property enableBackupLog: Specifies whether to enable real-time log backup.
	//
	// Valid values:
	// *   Enable
	// *   Disable
	// > If you leave this parameter empty, the default value Enable is used.
	EnableBackupLog interface{} `field:"optional" json:"enableBackupLog" yaml:"enableBackupLog"`
	// Property logBackupRetentionPeriod: The number of days for which to retain log backup files.
	//
	// Valid values: 7 to 730.
	// >  If you do not specify this parameter, the default value 7 is used.
	LogBackupRetentionPeriod interface{} `field:"optional" json:"logBackupRetentionPeriod" yaml:"logBackupRetentionPeriod"`
}

