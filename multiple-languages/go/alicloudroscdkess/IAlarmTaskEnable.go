package alicloudroscdkess

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/internal"
)

// Represents a `AlarmTaskEnable`.
type IAlarmTaskEnable interface {
	alicloudroscdkcore.IResource
	Props() *AlarmTaskEnableProps
}

// The jsii proxy for IAlarmTaskEnable
type jsiiProxy_IAlarmTaskEnable struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAlarmTaskEnable) Props() *AlarmTaskEnableProps {
	var returns *AlarmTaskEnableProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

