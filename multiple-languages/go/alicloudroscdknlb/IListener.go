package alicloudroscdknlb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknlb/internal"
)

// Represents a `Listener`.
type IListener interface {
	alicloudroscdkcore.IResource
	// Attribute ListenerId: Id of created Listener.
	AttrListenerId() interface{}
	// Attribute ListenerPort: ListenerPort of created Listener.
	AttrListenerPort() interface{}
	Props() *ListenerProps
}

// The jsii proxy for IListener
type jsiiProxy_IListener struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IListener) AttrListenerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IListener) AttrListenerPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IListener) Props() *ListenerProps {
	var returns *ListenerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

