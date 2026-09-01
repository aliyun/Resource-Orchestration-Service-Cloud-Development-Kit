package alicloudroscdkcms2


// Properties for defining a `RosAggTaskGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-aggtaskgroup
type RosAggTaskGroupProps struct {
	AggTaskGroupConfig interface{} `field:"required" json:"aggTaskGroupConfig" yaml:"aggTaskGroupConfig"`
	AggTaskGroupName interface{} `field:"required" json:"aggTaskGroupName" yaml:"aggTaskGroupName"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	TargetPrometheusId interface{} `field:"required" json:"targetPrometheusId" yaml:"targetPrometheusId"`
	AggTaskGroupConfigType interface{} `field:"optional" json:"aggTaskGroupConfigType" yaml:"aggTaskGroupConfigType"`
	CronExpr interface{} `field:"optional" json:"cronExpr" yaml:"cronExpr"`
	Delay interface{} `field:"optional" json:"delay" yaml:"delay"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	FromTime interface{} `field:"optional" json:"fromTime" yaml:"fromTime"`
	MaxRetries interface{} `field:"optional" json:"maxRetries" yaml:"maxRetries"`
	MaxRunTimeInSeconds interface{} `field:"optional" json:"maxRunTimeInSeconds" yaml:"maxRunTimeInSeconds"`
	OverrideIfExists interface{} `field:"optional" json:"overrideIfExists" yaml:"overrideIfExists"`
	PrecheckString interface{} `field:"optional" json:"precheckString" yaml:"precheckString"`
	ScheduleMode interface{} `field:"optional" json:"scheduleMode" yaml:"scheduleMode"`
	ScheduleTimeExpr interface{} `field:"optional" json:"scheduleTimeExpr" yaml:"scheduleTimeExpr"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	Tags *[]*RosAggTaskGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	ToTime interface{} `field:"optional" json:"toTime" yaml:"toTime"`
}

