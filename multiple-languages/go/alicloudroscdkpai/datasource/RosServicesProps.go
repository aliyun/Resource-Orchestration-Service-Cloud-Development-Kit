package datasource


// Properties for defining a `RosServices`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-services
type RosServicesProps struct {
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ServiceName interface{} `field:"optional" json:"serviceName" yaml:"serviceName"`
}

