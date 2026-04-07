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
	// Property schedule: Backup strategy.
	//
	// Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
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

