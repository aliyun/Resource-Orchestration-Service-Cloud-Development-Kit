package alicloudroscdkgwlb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgwlb/internal"
)

// Represents a `Listener`.
type IListener interface {
	alicloudroscdkcore.IResource
	// Attribute ListenerDescription: The custom listener description.
	AttrListenerDescription() interface{}
	// Attribute ListenerId: The ID of listener.
	AttrListenerId() interface{}
	// Attribute LoadBalancerId: The ID of the gateway load balancer instance.
	AttrLoadBalancerId() interface{}
	// Attribute ServerGroupId: The ID of the server group.
	AttrServerGroupId() interface{}
	// Attribute Tags: The list of tags.
	AttrTags() interface{}
	Props() *ListenerProps
}

// The jsii proxy for IListener
type jsiiProxy_IListener struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IListener) AttrListenerDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerDescription",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IListener) AttrLoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IListener) AttrServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IListener) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
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

