package datasource


// Properties for defining a `RosAliases`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-aliases
type RosAliasesProps struct {
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	Prefix interface{} `field:"optional" json:"prefix" yaml:"prefix"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

