package alicloudroscdkess


type RosScalingRule_StepAdjustmentProperty struct {
	MetricIntervalLowerBound interface{} `field:"optional" json:"metricIntervalLowerBound" yaml:"metricIntervalLowerBound"`
	MetricIntervalUpperBound interface{} `field:"optional" json:"metricIntervalUpperBound" yaml:"metricIntervalUpperBound"`
	ScalingAdjustment interface{} `field:"optional" json:"scalingAdjustment" yaml:"scalingAdjustment"`
}

