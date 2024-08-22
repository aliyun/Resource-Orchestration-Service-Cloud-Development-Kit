package datasource


// Properties for defining a `RosDBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
type RosDBInstanceProps struct {
	DbInstanceId interface{} `field:"optional" json:"dbInstanceId" yaml:"dbInstanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

