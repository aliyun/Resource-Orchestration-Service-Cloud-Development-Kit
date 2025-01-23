package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `BasicEndpointGroup`.
type IBasicEndpointGroup interface {
	alicloudroscdkcore.IResource
	// Attribute EndpointGroupId: The endpoint group ID.
	AttrEndpointGroupId() interface{}
	Props() *BasicEndpointGroupProps
}

// The jsii proxy for IBasicEndpointGroup
type jsiiProxy_IBasicEndpointGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBasicEndpointGroup) AttrEndpointGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBasicEndpointGroup) Props() *BasicEndpointGroupProps {
	var returns *BasicEndpointGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

