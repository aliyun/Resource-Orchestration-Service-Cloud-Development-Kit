package datasource


// Properties for defining a `RosService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service
type RosServiceProps struct {
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

