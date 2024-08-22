package alicloudroscdkcore

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Interface for the Resource construct.
type IResource interface {
	IConstruct
	// The stack in which this resource is defined.
	Stack() Stack
}

// The jsii proxy for IResource
type jsiiProxy_IResource struct {
	jsiiProxy_IConstruct
}

func (j *jsiiProxy_IResource) Stack() Stack {
	var returns Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

