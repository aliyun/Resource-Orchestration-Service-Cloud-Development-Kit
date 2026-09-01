package alicloudroscdkfnf


// Properties for defining a `Schedule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-schedule
type ScheduleProps struct {
	// Property cronExpression: Cron expression.
	CronExpression interface{} `field:"required" json:"cronExpression" yaml:"cronExpression"`
	// Property flowName: Flow name.
	FlowName interface{} `field:"required" json:"flowName" yaml:"flowName"`
	// Property scheduleName: The name of the timed schedule.
	//
	// The name must meet the following requirements:
	// - It can contain letters (a-z and A-Z), digits (0-9), underscores (_), and
	// hyphens (-).
	// - It is case-sensitive.
	// - It must be 1 to 128 characters in length.
	ScheduleName interface{} `field:"required" json:"scheduleName" yaml:"scheduleName"`
	// Property description: Description of the schedule.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property enable: Whether enable schedule.
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	// Property payload: The trigger message of the timed schedule.
	//
	// The message must be in the JSON
	// format.
	Payload interface{} `field:"optional" json:"payload" yaml:"payload"`
}

