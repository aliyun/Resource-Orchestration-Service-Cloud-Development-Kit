package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `PeeringRouterInterfaceConnection`.
type IPeeringRouterInterfaceConnection interface {
	alicloudroscdkcore.IResource
	// Attribute OppositeInterfaceId: The receiver RouterInterface ID.
	AttrOppositeInterfaceId() interface{}
	// Attribute RouterInterfaceId: The initiator RouterInterface ID.
	AttrRouterInterfaceId() interface{}
	Props() *PeeringRouterInterfaceConnectionProps
}

// The jsii proxy for IPeeringRouterInterfaceConnection
type jsiiProxy_IPeeringRouterInterfaceConnection struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPeeringRouterInterfaceConnection) AttrOppositeInterfaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOppositeInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPeeringRouterInterfaceConnection) AttrRouterInterfaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouterInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPeeringRouterInterfaceConnection) Props() *PeeringRouterInterfaceConnectionProps {
	var returns *PeeringRouterInterfaceConnectionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

