package datasource


// Properties for defining a `RosSchedules`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedules
type RosSchedulesProps struct {
	FlowName interface{} `field:"required" json:"flowName" yaml:"flowName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

