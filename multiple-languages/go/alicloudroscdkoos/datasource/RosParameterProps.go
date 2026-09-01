package datasource


// Properties for defining a `RosParameter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-parameter
type RosParameterProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	ParameterVersion interface{} `field:"optional" json:"parameterVersion" yaml:"parameterVersion"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

