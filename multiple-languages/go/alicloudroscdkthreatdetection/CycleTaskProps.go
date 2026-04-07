package alicloudroscdkthreatdetection


// Properties for defining a `CycleTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
type CycleTaskProps struct {
	// Property enable: Specifies whether to enable the task.
	//
	// Valid values:
	// *   **1**: yes
	// *   **0**: no.
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
	// Property firstDateStr: The first time when the task is performed.
	FirstDateStr interface{} `field:"required" json:"firstDateStr" yaml:"firstDateStr"`
	// Property intervalPeriod: The interval at which the task is run.
	IntervalPeriod interface{} `field:"required" json:"intervalPeriod" yaml:"intervalPeriod"`
	// Property periodUnit: The unit of the scan interval.
	//
	// Valid values:
	// *   **day**
	// *   **hour**.
	PeriodUnit interface{} `field:"required" json:"periodUnit" yaml:"periodUnit"`
	// Property targetEndTime: The time when the task ends.
	//
	// Unit: hours.
	TargetEndTime interface{} `field:"required" json:"targetEndTime" yaml:"targetEndTime"`
	// Property targetStartTime: The time when the task is started.
	//
	// Unit: hours.
	TargetStartTime interface{} `field:"required" json:"targetStartTime" yaml:"targetStartTime"`
	// Property taskName: The task name.
	TaskName interface{} `field:"required" json:"taskName" yaml:"taskName"`
	// Property taskType: The type of the task.
	//
	// Valid values:
	// *   **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
	// *   **IMAGE_SCAN**: image scan task
	// *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task.
	TaskType interface{} `field:"required" json:"taskType" yaml:"taskType"`
	// Property param: The additional information.
	Param interface{} `field:"optional" json:"param" yaml:"param"`
	// Property source: The additional source for the task.
	Source interface{} `field:"optional" json:"source" yaml:"source"`
}

