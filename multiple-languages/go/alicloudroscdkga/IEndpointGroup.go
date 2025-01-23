package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `EndpointGroup`.
type IEndpointGroup interface {
	alicloudroscdkcore.IResource
	// Attribute EndpointGroupId: The ID of the endpoint group.
	AttrEndpointGroupId() interface{}
	Props() *EndpointGroupProps
}

// The jsii proxy for IEndpointGroup
type jsiiProxy_IEndpointGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEndpointGroup) AttrEndpointGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEndpointGroup) Props() *EndpointGroupProps {
	var returns *EndpointGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

