package datasource


// Properties for defining a `RosFlowLog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
type RosFlowLogProps struct {
	FlowLogId interface{} `field:"required" json:"flowLogId" yaml:"flowLogId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

