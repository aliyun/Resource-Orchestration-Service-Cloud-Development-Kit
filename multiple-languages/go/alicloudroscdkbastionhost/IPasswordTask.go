package alicloudroscdkbastionhost

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbastionhost/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `PasswordTask`.
type IPasswordTask interface {
	alicloudroscdkcore.IResource
	// Attribute TaskId: The ID of the password task.
	AttrTaskId() interface{}
	Props() *PasswordTaskProps
}

// The jsii proxy for IPasswordTask
type jsiiProxy_IPasswordTask struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPasswordTask) AttrTaskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPasswordTask) Props() *PasswordTaskProps {
	var returns *PasswordTaskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

