package datasource


// Properties for defining a `RosTriggers`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-triggers
type RosTriggersProps struct {
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	Prefix interface{} `field:"optional" json:"prefix" yaml:"prefix"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

