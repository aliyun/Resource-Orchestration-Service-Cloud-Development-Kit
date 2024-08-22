package datasource


// Properties for defining a `DrdsDB`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdb
type DrdsDBProps struct {
	// Property drdsDatabaseName: The name of the Drds database.
	DrdsDatabaseName interface{} `field:"required" json:"drdsDatabaseName" yaml:"drdsDatabaseName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

