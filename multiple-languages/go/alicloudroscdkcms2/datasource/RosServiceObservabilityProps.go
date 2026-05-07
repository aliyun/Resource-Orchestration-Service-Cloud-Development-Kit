package datasource


// Properties for defining a `RosServiceObservability`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms2-serviceobservability
type RosServiceObservabilityProps struct {
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Workspace interface{} `field:"required" json:"workspace" yaml:"workspace"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

