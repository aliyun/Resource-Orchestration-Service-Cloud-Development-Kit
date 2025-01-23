package alicloudroscdkslb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
)

// Represents a `LoadBalancerClone`.
type ILoadBalancerClone interface {
	alicloudroscdkcore.IResource
	// Attribute LoadBalancerId: The id of load balance generated.
	AttrLoadBalancerId() interface{}
	Props() *LoadBalancerCloneProps
}

// The jsii proxy for ILoadBalancerClone
type jsiiProxy_ILoadBalancerClone struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILoadBalancerClone) AttrLoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerClone) Props() *LoadBalancerCloneProps {
	var returns *LoadBalancerCloneProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

