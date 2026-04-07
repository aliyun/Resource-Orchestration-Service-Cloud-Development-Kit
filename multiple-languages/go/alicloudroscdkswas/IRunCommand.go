package alicloudroscdkswas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkswas/internal"
)

// Represents a `RunCommand`.
type IRunCommand interface {
	alicloudroscdkcore.IResource
	// Attribute InvokeId: The ID of the command execution.
	AttrInvokeId() interface{}
	// Attribute InvokeResult: The result of the command execution.
	AttrInvokeResult() interface{}
	Props() *RunCommandProps
}

// The jsii proxy for IRunCommand
type jsiiProxy_IRunCommand struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRunCommand) AttrInvokeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInvokeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRunCommand) AttrInvokeResult() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInvokeResult",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRunCommand) Props() *RunCommandProps {
	var returns *RunCommandProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

