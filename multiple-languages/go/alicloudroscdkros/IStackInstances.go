package alicloudroscdkros

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/internal"
)

// Represents a `StackInstances`.
type IStackInstances interface {
	alicloudroscdkcore.IResource
	// Attribute LastOperationId: undefined.
	AttrLastOperationId() interface{}
	// Attribute Stacks: undefined.
	AttrStacks() interface{}
	Props() *StackInstancesProps
}

// The jsii proxy for IStackInstances
type jsiiProxy_IStackInstances struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStackInstances) AttrLastOperationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastOperationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstances) AttrStacks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStacks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstances) Props() *StackInstancesProps {
	var returns *StackInstancesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

