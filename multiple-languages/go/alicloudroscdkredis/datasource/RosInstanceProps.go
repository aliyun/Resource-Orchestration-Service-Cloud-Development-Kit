package datasource


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instance
type RosInstanceProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

