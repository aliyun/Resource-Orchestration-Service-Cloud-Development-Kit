package alicloudroscdkhbr


// Properties for defining a `RosOtsBackupPlan`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-otsbackupplan
type RosOtsBackupPlanProps struct {
	BackupType interface{} `field:"required" json:"backupType" yaml:"backupType"`
	PlanName interface{} `field:"required" json:"planName" yaml:"planName"`
	Retention interface{} `field:"required" json:"retention" yaml:"retention"`
	Schedule interface{} `field:"required" json:"schedule" yaml:"schedule"`
	VaultId interface{} `field:"required" json:"vaultId" yaml:"vaultId"`
	CrossAccountRoleName interface{} `field:"optional" json:"crossAccountRoleName" yaml:"crossAccountRoleName"`
	CrossAccountType interface{} `field:"optional" json:"crossAccountType" yaml:"crossAccountType"`
	CrossAccountUserId interface{} `field:"optional" json:"crossAccountUserId" yaml:"crossAccountUserId"`
	Disabled interface{} `field:"optional" json:"disabled" yaml:"disabled"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	OtsDetail interface{} `field:"optional" json:"otsDetail" yaml:"otsDetail"`
	Rules interface{} `field:"optional" json:"rules" yaml:"rules"`
}

