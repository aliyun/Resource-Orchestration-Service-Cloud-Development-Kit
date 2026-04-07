package alicloudroscdkclickhouse


// Properties for defining a `RosEnterpriseDBClusterBackupPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
type RosEnterpriseDBClusterBackupPolicyProps struct {
	BackupRetentionPeriod interface{} `field:"required" json:"backupRetentionPeriod" yaml:"backupRetentionPeriod"`
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	PreferredBackupPeriod interface{} `field:"required" json:"preferredBackupPeriod" yaml:"preferredBackupPeriod"`
	PreferredBackupTime interface{} `field:"required" json:"preferredBackupTime" yaml:"preferredBackupTime"`
}

