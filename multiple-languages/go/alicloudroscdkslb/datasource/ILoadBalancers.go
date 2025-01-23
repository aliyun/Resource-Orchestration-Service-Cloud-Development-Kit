package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
)

// Represents a `LoadBalancers`.
type ILoadBalancers interface {
	alicloudroscdkcore.IResource
	// Attribute LoadBalancerIds: The list of load balancer IDs.
	AttrLoadBalancerIds() interface{}
	// Attribute LoadBalancers: The list of load balancers.
	AttrLoadBalancers() interface{}
	Props() *LoadBalancersProps
}

// The jsii proxy for ILoadBalancers
type jsiiProxy_ILoadBalancers struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILoadBalancers) AttrLoadBalancerIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancers) AttrLoadBalancers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancers) Props() *LoadBalancersProps {
	var returns *LoadBalancersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

