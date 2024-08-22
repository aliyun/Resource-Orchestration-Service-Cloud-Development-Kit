package alicloudroscdkess


// Properties for defining a `AlarmTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
type AlarmTaskProps struct {
	// Property alarmAction: Alarm Actions.
	AlarmAction interface{} `field:"required" json:"alarmAction" yaml:"alarmAction"`
	// Property metricName: Metric Name.
	MetricName interface{} `field:"required" json:"metricName" yaml:"metricName"`
	// Property scalingGroupId: The ID of the scaling group.
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	// Property threshold: Threshold.
	Threshold interface{} `field:"required" json:"threshold" yaml:"threshold"`
	// Property comparisonOperator: Comparison Operator.
	ComparisonOperator interface{} `field:"optional" json:"comparisonOperator" yaml:"comparisonOperator"`
	// Property description: Description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property dimensions: Dimensions.
	Dimensions interface{} `field:"optional" json:"dimensions" yaml:"dimensions"`
	// Property evaluationCount: Evaluation Count.
	EvaluationCount interface{} `field:"optional" json:"evaluationCount" yaml:"evaluationCount"`
	// Property groupId: Group Id.
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	// Property metricType: Metric Type.
	MetricType interface{} `field:"optional" json:"metricType" yaml:"metricType"`
	// Property name: Name.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property period: Period.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property statistics: Statistics.
	Statistics interface{} `field:"optional" json:"statistics" yaml:"statistics"`
}

