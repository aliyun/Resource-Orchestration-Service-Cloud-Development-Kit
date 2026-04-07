package alicloudroscdkthreatdetection


// Properties for defining a `RosCycleTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
type RosCycleTaskProps struct {
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
	FirstDateStr interface{} `field:"required" json:"firstDateStr" yaml:"firstDateStr"`
	IntervalPeriod interface{} `field:"required" json:"intervalPeriod" yaml:"intervalPeriod"`
	PeriodUnit interface{} `field:"required" json:"periodUnit" yaml:"periodUnit"`
	TargetEndTime interface{} `field:"required" json:"targetEndTime" yaml:"targetEndTime"`
	TargetStartTime interface{} `field:"required" json:"targetStartTime" yaml:"targetStartTime"`
	TaskName interface{} `field:"required" json:"taskName" yaml:"taskName"`
	TaskType interface{} `field:"required" json:"taskType" yaml:"taskType"`
	Param interface{} `field:"optional" json:"param" yaml:"param"`
	Source interface{} `field:"optional" json:"source" yaml:"source"`
}

