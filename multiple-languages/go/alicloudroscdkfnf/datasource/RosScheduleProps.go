package datasource


// Properties for defining a `RosSchedule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedule
type RosScheduleProps struct {
	FlowName interface{} `field:"required" json:"flowName" yaml:"flowName"`
	ScheduleName interface{} `field:"required" json:"scheduleName" yaml:"scheduleName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

