package datasource


// Properties for defining a `RosFlow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flow
type RosFlowProps struct {
	FlowName interface{} `field:"required" json:"flowName" yaml:"flowName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

