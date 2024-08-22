package datasource


// Properties for defining a `RosParameterGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroup
type RosParameterGroupProps struct {
	ParameterGroupId interface{} `field:"required" json:"parameterGroupId" yaml:"parameterGroupId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

