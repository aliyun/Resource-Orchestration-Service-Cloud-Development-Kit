package alicloudroscdkhbr


// Properties for defining a `NasBackupPlan`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-nasbackupplan
type NasBackupPlanProps struct {
	// Property backupType: Backup type.
	//
	// Valid values: COMPLETE.
	BackupType interface{} `field:"required" json:"backupType" yaml:"backupType"`
	// Property fileSystemId: The ID of the file system.
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	// Property paths: The paths of the backup plan.
	Paths interface{} `field:"required" json:"paths" yaml:"paths"`
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
	// Property options: This parameter specifies whether to use Windows VSS to define a backup path.
	Options interface{} `field:"optional" json:"options" yaml:"options"`
}

