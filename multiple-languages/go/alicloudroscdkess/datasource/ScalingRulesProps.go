package datasource


// Properties for defining a `ScalingRules`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrules
type ScalingRulesProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property scalingGroupId: The ID of the scaling group.
	ScalingGroupId interface{} `field:"optional" json:"scalingGroupId" yaml:"scalingGroupId"`
	// Property scalingRuleAris: The unique identifiers of the scaling rules that you want to query.
	ScalingRuleAris interface{} `field:"optional" json:"scalingRuleAris" yaml:"scalingRuleAris"`
	// Property scalingRuleIds: The IDs of the scaling rules that you want to query.
	ScalingRuleIds interface{} `field:"optional" json:"scalingRuleIds" yaml:"scalingRuleIds"`
	// Property scalingRuleNames: The names of the scaling rules that you want to query.
	ScalingRuleNames interface{} `field:"optional" json:"scalingRuleNames" yaml:"scalingRuleNames"`
	// Property scalingRuleType: The type of the scaling rule.
	//
	// Valid values:
	// SimpleScalingRule: adjusts the number of ECS instances based on the values of the AdjustmentType and AdjustmentValue parameters.
	// TargetTrackingScalingRule: calculates the number of ECS instances that need to be scaled in a dynamic manner and maintains the value of a predefined metric close to the value of the TargetValue parameter.
	// StepScalingRule: scales ECS instances in steps based on the specified thresholds and metric values.
	// PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling automatically creates scheduled tasks to adjust the boundary values for the scaling group.
	ScalingRuleType interface{} `field:"optional" json:"scalingRuleType" yaml:"scalingRuleType"`
	// Property showAlarmRules: Specifies whether to return the event-triggered tasks that are associated with the scaling rule.
	//
	// Valid values:
	// true
	// false
	// Default value: false.
	ShowAlarmRules interface{} `field:"optional" json:"showAlarmRules" yaml:"showAlarmRules"`
}

