package datasource


// Properties for defining a `BackupPlan`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplan
type BackupPlanProps struct {
	// Property backupPlanId: The ID of the backup plan.
	BackupPlanId interface{} `field:"required" json:"backupPlanId" yaml:"backupPlanId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

