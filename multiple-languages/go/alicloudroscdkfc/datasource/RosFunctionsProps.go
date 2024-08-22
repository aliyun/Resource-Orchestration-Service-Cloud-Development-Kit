package datasource


// Properties for defining a `RosFunctions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-functions
type RosFunctionsProps struct {
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	Prefix interface{} `field:"optional" json:"prefix" yaml:"prefix"`
	Qualifier interface{} `field:"optional" json:"qualifier" yaml:"qualifier"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

