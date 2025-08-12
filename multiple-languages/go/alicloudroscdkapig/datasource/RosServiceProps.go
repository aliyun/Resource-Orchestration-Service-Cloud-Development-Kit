package datasource


// Properties for defining a `RosService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-service
type RosServiceProps struct {
	ServiceId interface{} `field:"required" json:"serviceId" yaml:"serviceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

