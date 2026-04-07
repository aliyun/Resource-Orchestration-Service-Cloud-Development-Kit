package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `BaselineStrategy`.
type IBaselineStrategy interface {
	alicloudroscdkcore.IResource
	// Attribute BaselineStrategyId: The ID of the baseline check policy.
	AttrBaselineStrategyId() interface{}
	// Attribute BaselineStrategyName: The new name of the baseline check policy.
	AttrBaselineStrategyName() interface{}
	// Attribute CustomType: The type of the baseline check policy.
	AttrCustomType() interface{}
	// Attribute CycleDays: The new interval of the baseline check.
	AttrCycleDays() interface{}
	// Attribute EndTime: The time when the baseline check based on the baseline check policy ends.
	//
	// Specify the time in the hh:mm:ss format.
	AttrEndTime() interface{}
	// Attribute RiskSubTypeName: The subtype of the baselines.
	AttrRiskSubTypeName() interface{}
	// Attribute StartTime: The time when the baseline check based on the baseline check policy starts.
	//
	// Specify the time in the hh:mm:ss format.
	AttrStartTime() interface{}
	// Attribute TargetType: The method that is used to apply the baseline check policy.
	AttrTargetType() interface{}
	Props() *BaselineStrategyProps
}

// The jsii proxy for IBaselineStrategy
type jsiiProxy_IBaselineStrategy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBaselineStrategy) AttrBaselineStrategyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBaselineStrategyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBaselineStrategy) AttrBaselineStrategyName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBaselineStrategyName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBaselineStrategy) AttrCustomType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCustomType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBaselineStrategy) AttrCycleDays() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCycleDays",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBaselineStrategy) AttrEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBaselineStrategy) AttrRiskSubTypeName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRiskSubTypeName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBaselineStrategy) AttrStartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBaselineStrategy) AttrTargetType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBaselineStrategy) Props() *BaselineStrategyProps {
	var returns *BaselineStrategyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

