package alicloudroscdkhbr


// Properties for defining a `OssBackupPlan`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ossbackupplan
type OssBackupPlanProps struct {
	// Property backupType: Backup type.
	//
	// Valid values: COMPLETE.
	BackupType interface{} `field:"required" json:"backupType" yaml:"backupType"`
	// Property bucket: The name of OSS bucket.
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	// Property planName: The name of the backup plan.
	//
	// 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
	PlanName interface{} `field:"required" json:"planName" yaml:"planName"`
	// Property retention: Backup retention days, the minimum is 1.
	Retention interface{} `field:"required" json:"retention" yaml:"retention"`
	// Property schedule: The backup policy.
	//
	// The format is `I|{startTime}|{interval}`. This specifies that
	// a backup job runs at an interval of `{interval}`, starting from `{startTime}`.
	// Overdue backup jobs are not retried. If the previous backup job is not complete,
	// the next backup job is not triggered. For example, `I|1631685600|P1D` indicates
	// that a backup job runs daily starting from 14:00:00 on September 15, 2021.
	// - startTime: The start time for the backup, specified as a UNIX timestamp in
	// seconds.
	// - interval: The backup interval, specified in the ISO 8601 duration format. For
	// example, `PT1H` represents one hour and `P1D` represents one day.
	Schedule interface{} `field:"required" json:"schedule" yaml:"schedule"`
	// Property vaultId: The ID of backup vault.
	VaultId interface{} `field:"required" json:"vaultId" yaml:"vaultId"`
	// Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
	CrossAccountRoleName interface{} `field:"optional" json:"crossAccountRoleName" yaml:"crossAccountRoleName"`
	// Property crossAccountType: The type of the cross account backup.
	//
	// Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
	CrossAccountType interface{} `field:"optional" json:"crossAccountType" yaml:"crossAccountType"`
	// Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
	CrossAccountUserId interface{} `field:"optional" json:"crossAccountUserId" yaml:"crossAccountUserId"`
	// Property disabled: Whether to disable the backup task.
	//
	// Valid values: true, false.
	Disabled interface{} `field:"optional" json:"disabled" yaml:"disabled"`
	// Property prefix: Backup prefix.
	//
	// Once specified, only objects with matching prefixes will be backed up.
	Prefix interface{} `field:"optional" json:"prefix" yaml:"prefix"`
}

