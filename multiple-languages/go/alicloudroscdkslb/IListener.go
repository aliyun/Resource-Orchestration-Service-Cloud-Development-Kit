package alicloudroscdkslb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
)

// Represents a `Listener`.
type IListener interface {
	alicloudroscdkcore.IResource
	// Attribute ListenerPortsAndProtocol: The collection of listener.
	AttrListenerPortsAndProtocol() interface{}
	// Attribute LoadBalancerId: The id of load balancer.
	AttrLoadBalancerId() interface{}
	Props() *ListenerProps
}

// The jsii proxy for IListener
type jsiiProxy_IListener struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IListener) AttrListenerPortsAndProtocol() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerPortsAndProtocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IListener) AttrLoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
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

