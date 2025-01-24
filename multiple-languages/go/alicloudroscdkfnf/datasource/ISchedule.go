package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfnf/datasource/internal"
)

// Represents a `Schedule`.
type ISchedule interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the time-based schedule was created.
	AttrCreateTime() interface{}
	// Attribute CronExpression: The CRON expression of the time-based schedule to be created.
	AttrCronExpression() interface{}
	// Attribute Description: The description of the time-based schedule to be created.
	AttrDescription() interface{}
	// Attribute LastModifiedTime: The time when the time-based schedule was last updated.
	AttrLastModifiedTime() interface{}
	// Attribute Payload: The trigger message of the time-based schedule to be created.
	AttrPayload() interface{}
	// Attribute ScheduleId: The ID of the time-based schedule.
	AttrScheduleId() interface{}
	// Attribute ScheduleName: The name of the time-based schedule to be created.
	AttrScheduleName() interface{}
	Props() *ScheduleProps
}

// The jsii proxy for ISchedule
type jsiiProxy_ISchedule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISchedule) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISchedule) AttrCronExpression() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCronExpression",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISchedule) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISchedule) AttrLastModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISchedule) AttrPayload() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPayload",
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

