package alicloudroscdkcdn

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcdn/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `SubTask`.
type ISubTask interface {
	alicloudroscdkcore.IResource
	Props() *SubTaskProps
}

// The jsii proxy for ISubTask
type jsiiProxy_ISubTask struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISubTask) Props() *SubTaskProps {
	var returns *SubTaskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

