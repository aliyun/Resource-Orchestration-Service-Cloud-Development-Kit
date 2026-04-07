package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `ScheduledPreloadExecution`.
type IScheduledPreloadExecution interface {
	alicloudroscdkcore.IResource
	// Attribute EndTime: The end time of the prefetch plan.
	AttrEndTime() interface{}
	// Attribute Interval: The time interval between each batch execution.
	//
	// Unit: seconds.
	AttrInterval() interface{}
	// Attribute ScheduledPreloadExecutionId: The ID of the prefetch plan.
	AttrScheduledPreloadExecutionId() interface{}
	// Attribute ScheduledPreloadJobId: The ID of the prefetch task.
	AttrScheduledPreloadJobId() interface{}
	// Attribute SliceLen: The number of URLs prefetched in each batch.
	AttrSliceLen() interface{}
	// Attribute StartTime: The start time of the prefetch plan.
	AttrStartTime() interface{}
	Props() *ScheduledPreloadExecutionProps
}

// The jsii proxy for IScheduledPreloadExecution
type jsiiProxy_IScheduledPreloadExecution struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IScheduledPreloadExecution) AttrEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadExecution) AttrInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadExecution) AttrScheduledPreloadExecutionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScheduledPreloadExecutionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadExecution) AttrScheduledPreloadJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScheduledPreloadJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadExecution) AttrSliceLen() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSliceLen",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadExecution) AttrStartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadExecution) Props() *ScheduledPreloadExecutionProps {
	var returns *ScheduledPreloadExecutionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

