package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `CycleTask`.
type ICycleTask interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigId: Configuration ID.
	AttrConfigId() interface{}
	// Attribute Enable: Specifies whether to enable the task.
	AttrEnable() interface{}
	// Attribute FirstDateStr: The first time when the task is performed.
	AttrFirstDateStr() interface{}
	// Attribute IntervalPeriod: The interval at which the task is run.
	AttrIntervalPeriod() interface{}
	// Attribute Param: The additional information.
	AttrParam() interface{}
	// Attribute PeriodUnit: The unit of the scan interval.
	AttrPeriodUnit() interface{}
	// Attribute TargetEndTime: The time when the task ends.
	//
	// Unit: hours.
	AttrTargetEndTime() interface{}
	// Attribute TargetStartTime: The time when the task is started.
	//
	// Unit: hours.
	AttrTargetStartTime() interface{}
	// Attribute TaskName: The task name.
	AttrTaskName() interface{}
	// Attribute TaskType: The type of the task.
	AttrTaskType() interface{}
	Props() *CycleTaskProps
}

// The jsii proxy for ICycleTask
type jsiiProxy_ICycleTask struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICycleTask) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICycleTask) AttrEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICycleTask) AttrFirstDateStr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFirstDateStr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICycleTask) AttrIntervalPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIntervalPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICycleTask) AttrParam() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParam",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICycleTask) AttrPeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPeriodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICycleTask) AttrTargetEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICycleTask) AttrTargetStartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICycleTask) AttrTaskName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICycleTask) AttrTaskType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICycleTask) Props() *CycleTaskProps {
	var returns *CycleTaskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

