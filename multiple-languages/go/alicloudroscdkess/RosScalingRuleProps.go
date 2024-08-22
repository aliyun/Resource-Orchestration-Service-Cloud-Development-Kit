package alicloudroscdkess


// Properties for defining a `RosScalingRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingrule
type RosScalingRuleProps struct {
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	AdjustmentType interface{} `field:"optional" json:"adjustmentType" yaml:"adjustmentType"`
	AdjustmentValue interface{} `field:"optional" json:"adjustmentValue" yaml:"adjustmentValue"`
	Cooldown interface{} `field:"optional" json:"cooldown" yaml:"cooldown"`
	DisableScaleIn interface{} `field:"optional" json:"disableScaleIn" yaml:"disableScaleIn"`
	EstimatedInstanceWarmup interface{} `field:"optional" json:"estimatedInstanceWarmup" yaml:"estimatedInstanceWarmup"`
	InitialMaxSize interface{} `field:"optional" json:"initialMaxSize" yaml:"initialMaxSize"`
	MetricName interface{} `field:"optional" json:"metricName" yaml:"metricName"`
	MinAdjustmentMagnitude interface{} `field:"optional" json:"minAdjustmentMagnitude" yaml:"minAdjustmentMagnitude"`
	PredictiveScalingMode interface{} `field:"optional" json:"predictiveScalingMode" yaml:"predictiveScalingMode"`
	PredictiveTaskBufferTime interface{} `field:"optional" json:"predictiveTaskBufferTime" yaml:"predictiveTaskBufferTime"`
	PredictiveValueBehavior interface{} `field:"optional" json:"predictiveValueBehavior" yaml:"predictiveValueBehavior"`
	PredictiveValueBuffer interface{} `field:"optional" json:"predictiveValueBuffer" yaml:"predictiveValueBuffer"`
	ScaleInEvaluationCount interface{} `field:"optional" json:"scaleInEvaluationCount" yaml:"scaleInEvaluationCount"`
	ScaleOutEvaluationCount interface{} `field:"optional" json:"scaleOutEvaluationCount" yaml:"scaleOutEvaluationCount"`
	ScalingRuleName interface{} `field:"optional" json:"scalingRuleName" yaml:"scalingRuleName"`
	ScalingRuleType interface{} `field:"optional" json:"scalingRuleType" yaml:"scalingRuleType"`
	StepAdjustment interface{} `field:"optional" json:"stepAdjustment" yaml:"stepAdjustment"`
	TargetValue interface{} `field:"optional" json:"targetValue" yaml:"targetValue"`
}

