package alicloudroscdkess


// Properties for defining a `RosAlarmTaskEnable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtaskenable
type RosAlarmTaskEnableProps struct {
	AlarmTaskId interface{} `field:"required" json:"alarmTaskId" yaml:"alarmTaskId"`
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
}

