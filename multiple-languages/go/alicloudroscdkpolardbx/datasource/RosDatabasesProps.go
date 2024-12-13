package datasource


// Properties for defining a `RosDatabases`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-databases
type RosDatabasesProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	PolarDbxDatabaseName interface{} `field:"optional" json:"polarDbxDatabaseName" yaml:"polarDbxDatabaseName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

