package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvod/datasource/internal"
)

// Represents a `MessageCallbacks`.
type IMessageCallbacks interface {
	alicloudroscdkcore.IResource
	// Attribute AppIds: The list of app IDs.
	AttrAppIds() interface{}
	// Attribute MessageCallbacks: The list of message callbacks.
	AttrMessageCallbacks() interface{}
	Props() *MessageCallbacksProps
}

// The jsii proxy for IMessageCallbacks
type jsiiProxy_IMessageCallbacks struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMessageCallbacks) AttrAppIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageCallbacks) AttrMessageCallbacks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMessageCallbacks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageCallbacks) Props() *MessageCallbacksProps {
	var returns *MessageCallbacksProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

