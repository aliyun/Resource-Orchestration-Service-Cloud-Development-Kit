package alicloudroscdkess


// Properties for defining a `RosAlarmTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
type RosAlarmTaskProps struct {
	AlarmAction interface{} `field:"required" json:"alarmAction" yaml:"alarmAction"`
	MetricName interface{} `field:"required" json:"metricName" yaml:"metricName"`
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	Threshold interface{} `field:"required" json:"threshold" yaml:"threshold"`
	ComparisonOperator interface{} `field:"optional" json:"comparisonOperator" yaml:"comparisonOperator"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Dimensions interface{} `field:"optional" json:"dimensions" yaml:"dimensions"`
	EvaluationCount interface{} `field:"optional" json:"evaluationCount" yaml:"evaluationCount"`
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	MetricType interface{} `field:"optional" json:"metricType" yaml:"metricType"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	Statistics interface{} `field:"optional" json:"statistics" yaml:"statistics"`
}

