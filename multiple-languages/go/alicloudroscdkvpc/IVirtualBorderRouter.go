package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `VirtualBorderRouter`.
type IVirtualBorderRouter interface {
	alicloudroscdkcore.IResource
	// Attribute Name: The name of the VBR.
	AttrName() interface{}
	// Attribute RouteTableId: The ID of the route table of the VBR.
	AttrRouteTableId() interface{}
	// Attribute VbrId: The ID of the VBR.
	AttrVbrId() interface{}
	// Attribute VlanInterfaceId: The ID of the VBR interface.
	AttrVlanInterfaceId() interface{}
	Props() *VirtualBorderRouterProps
}

// The jsii proxy for IVirtualBorderRouter
type jsiiProxy_IVirtualBorderRouter struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVirtualBorderRouter) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVirtualBorderRouter) AttrRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVirtualBorderRouter) AttrVbrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVbrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVirtualBorderRouter) AttrVlanInterfaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVlanInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVirtualBorderRouter) Props() *VirtualBorderRouterProps {
	var returns *VirtualBorderRouterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

