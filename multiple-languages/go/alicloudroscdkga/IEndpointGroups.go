package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `EndpointGroups`.
type IEndpointGroups interface {
	alicloudroscdkcore.IResource
	// Attribute EndpointGroupIds: The IDs of the endpoint groups.
	AttrEndpointGroupIds() interface{}
	Props() *EndpointGroupsProps
}

// The jsii proxy for IEndpointGroups
type jsiiProxy_IEndpointGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEndpointGroups) AttrEndpointGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEndpointGroups) Props() *EndpointGroupsProps {
	var returns *EndpointGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

