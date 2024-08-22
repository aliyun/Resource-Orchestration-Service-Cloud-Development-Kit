package datasource


// Properties for defining a `Databases`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
type DatabasesProps struct {
	// Property dbInstanceId: The ID of the RDS instance.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property dbName: The names of the databases whose information you want to query.
	DbName interface{} `field:"optional" json:"dbName" yaml:"dbName"`
	// Property dbStatus: The status of the databases whose information you want to query.
	DbStatus interface{} `field:"optional" json:"dbStatus" yaml:"dbStatus"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

