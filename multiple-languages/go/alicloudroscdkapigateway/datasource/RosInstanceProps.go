package datasource


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instance
type RosInstanceProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

