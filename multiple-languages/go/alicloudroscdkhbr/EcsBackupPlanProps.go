package alicloudroscdkhbr


// Properties for defining a `EcsBackupPlan`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ecsbackupplan
type EcsBackupPlanProps struct {
	// Property backupType: Backup type.
	//
	// Valid values: COMPLETE.
	BackupType interface{} `field:"required" json:"backupType" yaml:"backupType"`
	// Property instanceId: The ID of ECS instance.
	//
	// The ecs backup client must have been installed on the host.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
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
	// Property detail: The detail of the backup plan.
	Detail interface{} `field:"optional" json:"detail" yaml:"detail"`
	// Property disabled: Whether to disable the backup task.
	//
	// Valid values: true, false.
	Disabled interface{} `field:"optional" json:"disabled" yaml:"disabled"`
	// Property exclude: The exclude paths of the backup plan.
	Exclude interface{} `field:"optional" json:"exclude" yaml:"exclude"`
	// Property include: The include paths of the backup plan.
	Include interface{} `field:"optional" json:"include" yaml:"include"`
	// Property options: Windows operating system with application consistency using VSS, e.g: {"UseVSS":false}.
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	// Property paths: The paths of the backup plan.
	Paths interface{} `field:"optional" json:"paths" yaml:"paths"`
	// Property speedLimit: The speed limit of the backup plan.
	SpeedLimit interface{} `field:"optional" json:"speedLimit" yaml:"speedLimit"`
}

