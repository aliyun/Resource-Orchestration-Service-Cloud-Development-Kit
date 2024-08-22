package datasource


// Properties for defining a `RosAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-account
type RosAccountProps struct {
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

