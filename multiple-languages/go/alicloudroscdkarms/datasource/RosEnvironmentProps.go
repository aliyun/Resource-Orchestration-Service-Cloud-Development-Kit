package datasource


// Properties for defining a `RosEnvironment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-environment
type RosEnvironmentProps struct {
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

