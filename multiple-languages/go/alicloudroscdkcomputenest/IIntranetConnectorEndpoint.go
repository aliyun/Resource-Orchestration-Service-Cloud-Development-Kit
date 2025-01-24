package alicloudroscdkcomputenest

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcomputenest/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `IntranetConnectorEndpoint`.
type IIntranetConnectorEndpoint interface {
	alicloudroscdkcore.IResource
	// Attribute EndpointId: The ID of the endpoint.
	AttrEndpointId() interface{}
	Props() *IntranetConnectorEndpointProps
}

// The jsii proxy for IIntranetConnectorEndpoint
type jsiiProxy_IIntranetConnectorEndpoint struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIntranetConnectorEndpoint) AttrEndpointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIntranetConnectorEndpoint) Props() *IntranetConnectorEndpointProps {
	var returns *IntranetConnectorEndpointProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

