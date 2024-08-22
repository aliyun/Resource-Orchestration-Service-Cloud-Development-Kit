package alicloudroscdkfnf


// Properties for defining a `RosSchedule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-schedule
type RosScheduleProps struct {
	CronExpression interface{} `field:"required" json:"cronExpression" yaml:"cronExpression"`
	FlowName interface{} `field:"required" json:"flowName" yaml:"flowName"`
	ScheduleName interface{} `field:"required" json:"scheduleName" yaml:"scheduleName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	Payload interface{} `field:"optional" json:"payload" yaml:"payload"`
}

