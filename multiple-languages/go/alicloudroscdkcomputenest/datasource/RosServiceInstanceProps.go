package datasource


// Properties for defining a `RosServiceInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstance
type RosServiceInstanceProps struct {
	ServiceInstanceId interface{} `field:"required" json:"serviceInstanceId" yaml:"serviceInstanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

