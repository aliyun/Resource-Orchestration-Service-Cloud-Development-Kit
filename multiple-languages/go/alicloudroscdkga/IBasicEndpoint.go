package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `BasicEndpoint`.
type IBasicEndpoint interface {
	alicloudroscdkcore.IResource
	// Attribute EndpointId: The ID of the endpoint.
	AttrEndpointId() interface{}
	Props() *BasicEndpointProps
}

// The jsii proxy for IBasicEndpoint
type jsiiProxy_IBasicEndpoint struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBasicEndpoint) AttrEndpointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBasicEndpoint) Props() *BasicEndpointProps {
	var returns *BasicEndpointProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

