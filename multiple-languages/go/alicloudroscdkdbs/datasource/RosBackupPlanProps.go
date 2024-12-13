package datasource


// Properties for defining a `RosBackupPlan`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplan
type RosBackupPlanProps struct {
	BackupPlanId interface{} `field:"required" json:"backupPlanId" yaml:"backupPlanId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

