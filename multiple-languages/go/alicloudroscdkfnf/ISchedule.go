package alicloudroscdkfnf

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfnf/internal"
)

// Represents a `Schedule`.
type ISchedule interface {
	alicloudroscdkcore.IResource
	// Attribute FlowName: Flow name.
	AttrFlowName() interface{}
	// Attribute ScheduleId: Schedule Id.
	AttrScheduleId() interface{}
	// Attribute ScheduleName: Schedule name.
	AttrScheduleName() interface{}
	Props() *ScheduleProps
}

// The jsii proxy for ISchedule
type jsiiProxy_ISchedule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISchedule) AttrFlowName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISchedule) AttrScheduleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScheduleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISchedule) AttrScheduleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScheduleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISchedule) Props() *ScheduleProps {
	var returns *ScheduleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

