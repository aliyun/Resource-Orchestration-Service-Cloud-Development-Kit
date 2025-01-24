package alicloudroscdkpaidatasetacc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpaidatasetacc/internal"
)

// Represents a `Endpoint`.
type IEndpoint interface {
	alicloudroscdkcore.IResource
	// Attribute EndpointId: The ID of the Mount Target.
	AttrEndpointId() interface{}
	Props() *EndpointProps
}

// The jsii proxy for IEndpoint
type jsiiProxy_IEndpoint struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEndpoint) AttrEndpointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEndpoint) Props() *EndpointProps {
	var returns *EndpointProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

