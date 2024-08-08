package alicloudroscdkess


// Properties for defining a `ScalingRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingrule
type ScalingRuleProps struct {
	// Property scalingGroupId: ID of the scaling group of a scaling rule.
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	// Property adjustmentType: Adjustment mode of a scaling rule.
	//
	// Optional values:
	// - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
	// - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
	// - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
	AdjustmentType interface{} `field:"optional" json:"adjustmentType" yaml:"adjustmentType"`
	// Property adjustmentValue: Adjusted value of a scaling rule.
	//
	// Value range:
	// - QuantityChangeInCapacity: [-500, 500]
	// - PercentChangeInCapacity: [-100, 10000]
	// - TotalCapacity: [0, 1000].
	AdjustmentValue interface{} `field:"optional" json:"adjustmentValue" yaml:"adjustmentValue"`
	// Property cooldown: Cool-down time of a scaling rule.
	//
	// Value range: [0, 86,400], in seconds. The default value is empty.
	Cooldown interface{} `field:"optional" json:"cooldown" yaml:"cooldown"`
	// Property disableScaleIn: Specifies whether to disable scale-in.
	//
	// This parameter is applicable only to target tracking scaling rules.
	// Default value: false.
	DisableScaleIn interface{} `field:"optional" json:"disableScaleIn" yaml:"disableScaleIn"`
	// Property estimatedInstanceWarmup: The warm-up period of the ECS instances.
	//
	// This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
	// Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
	// Valid values: 0 to 86400. Unit: seconds. Default value: 300.
	EstimatedInstanceWarmup interface{} `field:"optional" json:"estimatedInstanceWarmup" yaml:"estimatedInstanceWarmup"`
	// Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
	//
	// Default value: the same as the value of MaxSize.
	InitialMaxSize interface{} `field:"optional" json:"initialMaxSize" yaml:"initialMaxSize"`
	// Property metricName: The predefined metric to monitor.
	//
	// This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
	// Valid values of a target tracking scaling rule:
	// - CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network
	// - ClassicInternetTx: the average public network outbound traffic over the classic network
	// - VpcInternetRx: the average public network inbound traffic over the VPC
	// - VpcInternetTx: the average public network outbound traffic over the VPC
	// - IntranetRx: the average internal network inbound traffic
	// - IntranetTx: the average internal network outbound traffic
	// Valid values of a predictive scaling rule:
	// - CpuUtilization: the average CPU utilization
	// - IntranetRx: the average internal network inbound traffic
	// - IntranetTx: the average internal network outbound traffic.
	MetricName interface{} `field:"optional" json:"metricName" yaml:"metricName"`
	// Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule.
	//
	// This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
	MinAdjustmentMagnitude interface{} `field:"optional" json:"minAdjustmentMagnitude" yaml:"minAdjustmentMagnitude"`
	// Property predictiveScalingMode: The mode of the predictive scaling rule.
	//
	// Valid values:
	// - PredictAndScale: generates forecasts and creates forecast tasks.
	// - PredictOnly: generates forecasts but does not create forecast tasks.
	// Default value: PredictAndScale.
	PredictiveScalingMode interface{} `field:"optional" json:"predictiveScalingMode" yaml:"predictiveScalingMode"`
	// Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time.
	//
	// By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
	// Default value: 0.
	PredictiveTaskBufferTime interface{} `field:"optional" json:"predictiveTaskBufferTime" yaml:"predictiveTaskBufferTime"`
	// Property predictiveValueBehavior: The action taken on the predicted maximum value.
	//
	// Valid values:
	// - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
	//   - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
	//   - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
	// Default value: MaxOverridePredictiveValue.
	PredictiveValueBehavior interface{} `field:"optional" json:"predictiveValueBehavior" yaml:"predictiveValueBehavior"`
	// Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
	//
	// When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
	// Default value: 0.
	PredictiveValueBuffer interface{} `field:"optional" json:"predictiveValueBuffer" yaml:"predictiveValueBuffer"`
	// Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered.
	//
	// After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
	// Default value: 15.
	ScaleInEvaluationCount interface{} `field:"optional" json:"scaleInEvaluationCount" yaml:"scaleInEvaluationCount"`
	// Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered.
	//
	// After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
	// Default value: 3.
	ScaleOutEvaluationCount interface{} `field:"optional" json:"scaleOutEvaluationCount" yaml:"scaleOutEvaluationCount"`
	// Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters.
	//
	// It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
	ScalingRuleName interface{} `field:"optional" json:"scalingRuleName" yaml:"scalingRuleName"`
	// Property scalingRuleType: The type of the scaling rule.
	//
	// Valid values:
	// - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
	// - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
	// - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
	// - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
	//   If this parameter value is not specified, the default value is SimpleScalingRule.
	ScalingRuleType interface{} `field:"optional" json:"scalingRuleType" yaml:"scalingRuleType"`
	// Property stepAdjustment:.
	StepAdjustment interface{} `field:"optional" json:"stepAdjustment" yaml:"stepAdjustment"`
	// Property targetValue: The target value of a metric.
	//
	// This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
	TargetValue interface{} `field:"optional" json:"targetValue" yaml:"targetValue"`
}

