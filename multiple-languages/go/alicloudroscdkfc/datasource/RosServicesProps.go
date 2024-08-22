package datasource


// Properties for defining a `RosServices`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-services
type RosServicesProps struct {
	Prefix interface{} `field:"optional" json:"prefix" yaml:"prefix"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

