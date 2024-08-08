package alicloudroscdkess


// Properties for defining a `AlarmTaskEnable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtaskenable
type AlarmTaskEnableProps struct {
	// Property alarmTaskId: The id of alarm task.
	AlarmTaskId interface{} `field:"required" json:"alarmTaskId" yaml:"alarmTaskId"`
	// Property enable: Enable alarm task or not.
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
}

