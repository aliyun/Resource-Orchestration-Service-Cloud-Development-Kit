package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
)

// Represents a `LoadBalancerTCPListeners`.
type ILoadBalancerTCPListeners interface {
	alicloudroscdkcore.IResource
	// Attribute ListenerPorts: The list of listener ports.
	AttrListenerPorts() interface{}
	// Attribute LoadBalancerTCPListeners: The list of load balancer tcp listeners.
	AttrLoadBalancerTcpListeners() interface{}
	Props() *LoadBalancerTCPListenersProps
}

// The jsii proxy for ILoadBalancerTCPListeners
type jsiiProxy_ILoadBalancerTCPListeners struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILoadBalancerTCPListeners) AttrListenerPorts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerPorts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListeners) AttrLoadBalancerTcpListeners() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerTcpListeners",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListeners) Props() *LoadBalancerTCPListenersProps {
	var returns *LoadBalancerTCPListenersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

