package alicloudroscdkhbr


// Properties for defining a `RosOssBackupPlan`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ossbackupplan
type RosOssBackupPlanProps struct {
	BackupType interface{} `field:"required" json:"backupType" yaml:"backupType"`
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	PlanName interface{} `field:"required" json:"planName" yaml:"planName"`
	Retention interface{} `field:"required" json:"retention" yaml:"retention"`
	Schedule interface{} `field:"required" json:"schedule" yaml:"schedule"`
	VaultId interface{} `field:"required" json:"vaultId" yaml:"vaultId"`
	CrossAccountRoleName interface{} `field:"optional" json:"crossAccountRoleName" yaml:"crossAccountRoleName"`
	CrossAccountType interface{} `field:"optional" json:"crossAccountType" yaml:"crossAccountType"`
	CrossAccountUserId interface{} `field:"optional" json:"crossAccountUserId" yaml:"crossAccountUserId"`
	Disabled interface{} `field:"optional" json:"disabled" yaml:"disabled"`
	Prefix interface{} `field:"optional" json:"prefix" yaml:"prefix"`
}

