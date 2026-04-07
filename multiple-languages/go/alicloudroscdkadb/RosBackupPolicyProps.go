package alicloudroscdkadb


// Properties for defining a `RosBackupPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-backuppolicy
type RosBackupPolicyProps struct {
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	PreferredBackupPeriod interface{} `field:"required" json:"preferredBackupPeriod" yaml:"preferredBackupPeriod"`
	PreferredBackupTime interface{} `field:"required" json:"preferredBackupTime" yaml:"preferredBackupTime"`
	BackupRetentionPeriod interface{} `field:"optional" json:"backupRetentionPeriod" yaml:"backupRetentionPeriod"`
	EnableBackupLog interface{} `field:"optional" json:"enableBackupLog" yaml:"enableBackupLog"`
	LogBackupRetentionPeriod interface{} `field:"optional" json:"logBackupRetentionPeriod" yaml:"logBackupRetentionPeriod"`
}

