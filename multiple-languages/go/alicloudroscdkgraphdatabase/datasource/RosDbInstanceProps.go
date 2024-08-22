package datasource


// Properties for defining a `RosDbInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstance
type RosDbInstanceProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

