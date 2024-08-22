package alicloudroscdkess


// Properties for defining a `RosScheduledTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scheduledtask
type RosScheduledTaskProps struct {
	LaunchTime interface{} `field:"required" json:"launchTime" yaml:"launchTime"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DesiredCapacity interface{} `field:"optional" json:"desiredCapacity" yaml:"desiredCapacity"`
	LaunchExpirationTime interface{} `field:"optional" json:"launchExpirationTime" yaml:"launchExpirationTime"`
	MaxValue interface{} `field:"optional" json:"maxValue" yaml:"maxValue"`
	MinValue interface{} `field:"optional" json:"minValue" yaml:"minValue"`
	RecurrenceEndTime interface{} `field:"optional" json:"recurrenceEndTime" yaml:"recurrenceEndTime"`
	RecurrenceType interface{} `field:"optional" json:"recurrenceType" yaml:"recurrenceType"`
	RecurrenceValue interface{} `field:"optional" json:"recurrenceValue" yaml:"recurrenceValue"`
	ScalingGroupId interface{} `field:"optional" json:"scalingGroupId" yaml:"scalingGroupId"`
	ScheduledAction interface{} `field:"optional" json:"scheduledAction" yaml:"scheduledAction"`
	ScheduledTaskName interface{} `field:"optional" json:"scheduledTaskName" yaml:"scheduledTaskName"`
	TaskEnabled interface{} `field:"optional" json:"taskEnabled" yaml:"taskEnabled"`
}

