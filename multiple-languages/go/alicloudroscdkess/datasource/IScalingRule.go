package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/datasource/internal"
)

// Represents a `ScalingRule`.
type IScalingRule interface {
	alicloudroscdkcore.IResource
	// Attribute AdjustmentType: The adjustment method of the scaling rule.
	AttrAdjustmentType() interface{}
	// Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.
	AttrAdjustmentValue() interface{}
	// Attribute Alarms: The event-triggered tasks that are associated with the scaling rule.
	//
	// The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
	AttrAlarms() interface{}
	// Attribute Cooldown: The cooldown period of the scaling rule.
	AttrCooldown() interface{}
	// Attribute DisableScaleIn: Indicates whether scale-in is disabled.
	AttrDisableScaleIn() interface{}
	// Attribute EstimatedInstanceWarmup: The warm-up period of instances.
	AttrEstimatedInstanceWarmup() interface{}
	// Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.
	AttrInitialMaxSize() interface{}
	// Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.
	AttrMaxSize() interface{}
	// Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.
	AttrMetricName() interface{}
	// Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.
	AttrMinAdjustmentMagnitude() interface{}
	// Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.
	AttrMinSize() interface{}
	// Attribute PredictiveScalingMode: The mode of the predictive scaling rule.
	AttrPredictiveScalingMode() interface{}
	// Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.
	AttrPredictiveTaskBufferTime() interface{}
	// Attribute PredictiveValueBehavior: The action on the predicted maximum value.
	AttrPredictiveValueBehavior() interface{}
	// Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
	AttrPredictiveValueBuffer() interface{}
	// Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.
	AttrScaleInEvaluationCount() interface{}
	// Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.
	AttrScaleOutEvaluationCount() interface{}
	// Attribute ScalingGroupId: The ID of the scaling group.
	AttrScalingGroupId() interface{}
	// Attribute ScalingRuleAri: The unique identifier of the scaling rule.
	AttrScalingRuleAri() interface{}
	// Attribute ScalingRuleId: The ID of the scaling rule.
	AttrScalingRuleId() interface{}
	// Attribute ScalingRuleName: The name of the scaling rule.
	AttrScalingRuleName() interface{}
	// Attribute ScalingRuleType: The type of the scaling rule.
	AttrScalingRuleType() interface{}
	// Attribute StepAdjustments: The step adjustments of the step scaling rule.
	AttrStepAdjustments() interface{}
	// Attribute TargetValue: The target value of the metric.
	AttrTargetValue() interface{}
	Props() *ScalingRuleProps
}

// The jsii proxy for IScalingRule
type jsiiProxy_IScalingRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IScalingRule) AttrAdjustmentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAdjustmentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrAdjustmentValue() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAdjustmentValue",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrAlarms() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAlarms",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrCooldown() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCooldown",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrDisableScaleIn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisableScaleIn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrEstimatedInstanceWarmup() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEstimatedInstanceWarmup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrInitialMaxSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInitialMaxSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrMaxSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrMetricName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMetricName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrMinAdjustmentMagnitude() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMinAdjustmentMagnitude",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrMinSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMinSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrPredictiveScalingMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPredictiveScalingMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrPredictiveTaskBufferTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPredictiveTaskBufferTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrPredictiveValueBehavior() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPredictiveValueBehavior",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrPredictiveValueBuffer() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPredictiveValueBuffer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrScaleInEvaluationCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScaleInEvaluationCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrScaleOutEvaluationCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScaleOutEvaluationCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrScalingGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrScalingRuleAri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRuleAri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrScalingRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrScalingRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrScalingRuleType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRuleType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrStepAdjustments() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStepAdjustments",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) AttrTargetValue() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetValue",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRule) Props() *ScalingRuleProps {
	var returns *ScalingRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

