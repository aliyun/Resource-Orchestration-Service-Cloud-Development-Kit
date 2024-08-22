package datasource


// Properties for defining a `RosDatabases`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
type RosDatabasesProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	DbName interface{} `field:"optional" json:"dbName" yaml:"dbName"`
	DbStatus interface{} `field:"optional" json:"dbStatus" yaml:"dbStatus"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

