package alicloudroscdkess

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/internal"
)

// Represents a `AlarmTask`.
type IAlarmTask interface {
	alicloudroscdkcore.IResource
	// Attribute AlarmTaskId: The alarm task ID.
	AttrAlarmTaskId() interface{}
	Props() *AlarmTaskProps
}

// The jsii proxy for IAlarmTask
type jsiiProxy_IAlarmTask struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAlarmTask) AttrAlarmTaskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAlarmTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmTask) Props() *AlarmTaskProps {
	var returns *AlarmTaskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

