package datasource


// Properties for defining a `MigrationJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjob
type MigrationJobProps struct {
	// Property dtsInstanceId: The ID of the synchronization instance.
	DtsInstanceId interface{} `field:"required" json:"dtsInstanceId" yaml:"dtsInstanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

