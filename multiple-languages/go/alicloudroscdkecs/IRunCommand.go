package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `RunCommand`.
type IRunCommand interface {
	alicloudroscdkcore.IResource
	// Attribute CommandId: The id of command created.
	AttrCommandId() interface{}
	// Attribute InvokeId: The invoke id of command.
	AttrInvokeId() interface{}
	// Attribute InvokeInstances: The InvokeInstances of command.
	AttrInvokeInstances() interface{}
	// Attribute InvokeResults: The results of invoke command.
	AttrInvokeResults() interface{}
	Props() *RunCommandProps
}

// The jsii proxy for IRunCommand
type jsiiProxy_IRunCommand struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRunCommand) AttrCommandId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommandId",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IRunCommand) AttrInvokeInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInvokeInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRunCommand) AttrInvokeResults() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInvokeResults",
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

