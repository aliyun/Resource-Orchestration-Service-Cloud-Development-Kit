package datasource


// Properties for defining a `MigrationInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
type MigrationInstancesProps struct {
	// Property dtsInstanceId: Synchronization instance ID.
	DtsInstanceId interface{} `field:"optional" json:"dtsInstanceId" yaml:"dtsInstanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

