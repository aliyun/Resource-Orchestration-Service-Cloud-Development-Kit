package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `RunCommandOfLifespan`.
type IRunCommandOfLifespan interface {
	alicloudroscdkcore.IResource
	// Attribute CommandId: The id of command created.
	AttrCommandId() interface{}
	// Attribute InvokeId: The invoke id of command.
	AttrInvokeId() interface{}
	// Attribute InvokeInstances: The InvokeInstances of command.
	AttrInvokeInstances() interface{}
	// Attribute InvokeResults: The results of invoke command.
	AttrInvokeResults() interface{}
	Props() *RunCommandOfLifespanProps
}

// The jsii proxy for IRunCommandOfLifespan
type jsiiProxy_IRunCommandOfLifespan struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRunCommandOfLifespan) AttrCommandId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommandId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRunCommandOfLifespan) AttrInvokeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInvokeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRunCommandOfLifespan) AttrInvokeInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInvokeInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRunCommandOfLifespan) AttrInvokeResults() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInvokeResults",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRunCommandOfLifespan) Props() *RunCommandOfLifespanProps {
	var returns *RunCommandOfLifespanProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

