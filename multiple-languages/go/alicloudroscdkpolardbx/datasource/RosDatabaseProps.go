package datasource


// Properties for defining a `RosDatabase`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-database
type RosDatabaseProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	PolarDbxDatabaseName interface{} `field:"required" json:"polarDbxDatabaseName" yaml:"polarDbxDatabaseName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

