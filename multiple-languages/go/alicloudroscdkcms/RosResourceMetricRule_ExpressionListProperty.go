package alicloudroscdkcms


type RosResourceMetricRule_ExpressionListProperty struct {
	ComparisonOperator interface{} `field:"required" json:"comparisonOperator" yaml:"comparisonOperator"`
	MetricName interface{} `field:"required" json:"metricName" yaml:"metricName"`
	Period interface{} `field:"required" json:"period" yaml:"period"`
	Statistics interface{} `field:"required" json:"statistics" yaml:"statistics"`
	Threshold interface{} `field:"required" json:"threshold" yaml:"threshold"`
}

