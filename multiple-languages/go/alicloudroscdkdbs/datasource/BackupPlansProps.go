package datasource


// Properties for defining a `BackupPlans`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans
type BackupPlansProps struct {
	// Property backupPlanId: The ID of the backup schedule.
	BackupPlanId interface{} `field:"optional" json:"backupPlanId" yaml:"backupPlanId"`
	// Property backupPlanName: The name of the backup schedule.
	BackupPlanName interface{} `field:"optional" json:"backupPlanName" yaml:"backupPlanName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

