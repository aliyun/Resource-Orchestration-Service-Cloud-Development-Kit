package alicloudroscdkdbs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdbs/internal"
)

// Represents a `RestoreTask`.
type IRestoreTask interface {
	alicloudroscdkcore.IResource
	// Attribute RestoreTaskId: The ID of the restoration task.
	AttrRestoreTaskId() interface{}
	Props() *RestoreTaskProps
}

// The jsii proxy for IRestoreTask
type jsiiProxy_IRestoreTask struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRestoreTask) AttrRestoreTaskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRestoreTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRestoreTask) Props() *RestoreTaskProps {
	var returns *RestoreTaskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

