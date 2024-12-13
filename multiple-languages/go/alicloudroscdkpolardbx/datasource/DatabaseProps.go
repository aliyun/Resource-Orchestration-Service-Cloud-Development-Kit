package datasource


// Properties for defining a `Database`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-database
type DatabaseProps struct {
	// Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property polarDbxDatabaseName: The name of the PolarDB-X 2.0 instance.
	PolarDbxDatabaseName interface{} `field:"required" json:"polarDbxDatabaseName" yaml:"polarDbxDatabaseName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

