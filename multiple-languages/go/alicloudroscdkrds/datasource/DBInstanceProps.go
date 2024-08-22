package datasource


// Properties for defining a `DBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
type DBInstanceProps struct {
	// Property dbInstanceId: The ID of the instance.
	DbInstanceId interface{} `field:"optional" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

