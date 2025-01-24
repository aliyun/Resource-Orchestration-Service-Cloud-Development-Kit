package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `RouterInterface`.
type IRouterInterface interface {
	alicloudroscdkcore.IResource
	// Attribute RouterInterfaceId: The ID of created RouterInterface.
	AttrRouterInterfaceId() interface{}
	Props() *RouterInterfaceProps
}

// The jsii proxy for IRouterInterface
type jsiiProxy_IRouterInterface struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRouterInterface) AttrRouterInterfaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouterInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouterInterface) Props() *RouterInterfaceProps {
	var returns *RouterInterfaceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

