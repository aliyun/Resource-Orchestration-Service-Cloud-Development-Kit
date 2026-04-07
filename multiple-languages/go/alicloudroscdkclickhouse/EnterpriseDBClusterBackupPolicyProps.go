package alicloudroscdkclickhouse


// Properties for defining a `EnterpriseDBClusterBackupPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
type EnterpriseDBClusterBackupPolicyProps struct {
	// Property backupRetentionPeriod: The number of days for which you can retain the backup data.
	BackupRetentionPeriod interface{} `field:"required" json:"backupRetentionPeriod" yaml:"backupRetentionPeriod"`
	// Property dbInstanceId: The cluster ID.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data.
	//
	// Separate multiple dates with commas (,).
	PreferredBackupPeriod interface{} `field:"required" json:"preferredBackupPeriod" yaml:"preferredBackupPeriod"`
	// Property preferredBackupTime: The backup time window within which the backup task is performed.
	//
	// The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
	PreferredBackupTime interface{} `field:"required" json:"preferredBackupTime" yaml:"preferredBackupTime"`
}

