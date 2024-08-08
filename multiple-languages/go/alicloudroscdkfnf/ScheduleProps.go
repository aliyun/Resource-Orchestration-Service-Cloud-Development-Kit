package alicloudroscdkfnf


// Properties for defining a `Schedule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-schedule
type ScheduleProps struct {
	// Property cronExpression: Cron expression.
	CronExpression interface{} `field:"required" json:"cronExpression" yaml:"cronExpression"`
	// Property flowName: Flow name.
	FlowName interface{} `field:"required" json:"flowName" yaml:"flowName"`
	// Property scheduleName: Schedule name.
	ScheduleName interface{} `field:"required" json:"scheduleName" yaml:"scheduleName"`
	// Property description: Description of the schedule.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property enable: Whether enable schedule.
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	// Property payload: Payload.
	Payload interface{} `field:"optional" json:"payload" yaml:"payload"`
}

