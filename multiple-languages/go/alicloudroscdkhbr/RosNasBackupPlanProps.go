package alicloudroscdkhbr


// Properties for defining a `RosNasBackupPlan`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-nasbackupplan
type RosNasBackupPlanProps struct {
	BackupType interface{} `field:"required" json:"backupType" yaml:"backupType"`
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	Paths interface{} `field:"required" json:"paths" yaml:"paths"`
	PlanName interface{} `field:"required" json:"planName" yaml:"planName"`
	Retention interface{} `field:"required" json:"retention" yaml:"retention"`
	Schedule interface{} `field:"required" json:"schedule" yaml:"schedule"`
	VaultId interface{} `field:"required" json:"vaultId" yaml:"vaultId"`
	CrossAccountRoleName interface{} `field:"optional" json:"crossAccountRoleName" yaml:"crossAccountRoleName"`
	CrossAccountType interface{} `field:"optional" json:"crossAccountType" yaml:"crossAccountType"`
	CrossAccountUserId interface{} `field:"optional" json:"crossAccountUserId" yaml:"crossAccountUserId"`
	Disabled interface{} `field:"optional" json:"disabled" yaml:"disabled"`
	Options interface{} `field:"optional" json:"options" yaml:"options"`
}

