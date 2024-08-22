package alicloudroscdkcms


type RosResourceMetricRule_InfoProperty struct {
	ComparisonOperator interface{} `field:"required" json:"comparisonOperator" yaml:"comparisonOperator"`
	Statistics interface{} `field:"required" json:"statistics" yaml:"statistics"`
	Threshold interface{} `field:"required" json:"threshold" yaml:"threshold"`
	Times interface{} `field:"required" json:"times" yaml:"times"`
}

