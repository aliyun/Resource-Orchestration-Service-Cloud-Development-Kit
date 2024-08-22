package datasource


// Properties for defining a `RosBackupPlans`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans
type RosBackupPlansProps struct {
	BackupPlanId interface{} `field:"optional" json:"backupPlanId" yaml:"backupPlanId"`
	BackupPlanName interface{} `field:"optional" json:"backupPlanName" yaml:"backupPlanName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

