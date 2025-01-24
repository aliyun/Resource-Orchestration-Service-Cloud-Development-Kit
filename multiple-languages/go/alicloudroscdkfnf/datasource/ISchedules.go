package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfnf/datasource/internal"
)

// Represents a `Schedules`.
type ISchedules interface {
	alicloudroscdkcore.IResource
	// Attribute ScheduleNames: The list of schedule names.
	AttrScheduleNames() interface{}
	// Attribute Schedules: The queried time-based schedules.
	AttrSchedules() interface{}
	Props() *SchedulesProps
}

// The jsii proxy for ISchedules
type jsiiProxy_ISchedules struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISchedules) AttrScheduleNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScheduleNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISchedules) AttrSchedules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSchedules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISchedules) Props() *SchedulesProps {
	var returns *SchedulesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

