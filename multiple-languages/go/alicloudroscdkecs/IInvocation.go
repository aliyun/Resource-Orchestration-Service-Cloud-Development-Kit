package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `Invocation`.
type IInvocation interface {
	alicloudroscdkcore.IResource
	// Attribute InvokeId: The id of command execution.
	AttrInvokeId() interface{}
	// Attribute InvokeInstances: The InvokeInstances of command.
	AttrInvokeInstances() interface{}
	// Attribute InvokeResults: The results of invoke command.
	AttrInvokeResults() interface{}
	Props() *InvocationProps
}

// The jsii proxy for IInvocation
type jsiiProxy_IInvocation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInvocation) AttrInvokeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInvokeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInvocation) AttrInvokeInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInvokeInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInvocation) AttrInvokeResults() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInvokeResults",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInvocation) Props() *InvocationProps {
	var returns *InvocationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

