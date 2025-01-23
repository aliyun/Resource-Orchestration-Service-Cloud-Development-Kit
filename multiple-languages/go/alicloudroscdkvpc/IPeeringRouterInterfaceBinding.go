package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `PeeringRouterInterfaceBinding`.
type IPeeringRouterInterfaceBinding interface {
	alicloudroscdkcore.IResource
	// Attribute RouterInterfaceId: The RouterInterface ID.
	AttrRouterInterfaceId() interface{}
	Props() *PeeringRouterInterfaceBindingProps
}

// The jsii proxy for IPeeringRouterInterfaceBinding
type jsiiProxy_IPeeringRouterInterfaceBinding struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPeeringRouterInterfaceBinding) AttrRouterInterfaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouterInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPeeringRouterInterfaceBinding) Props() *PeeringRouterInterfaceBindingProps {
	var returns *PeeringRouterInterfaceBindingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

