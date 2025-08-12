package alicloudroscdkelasticsearchserverless

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkelasticsearchserverless/internal"
)

// Represents a `Endpoint`.
type IEndpoint interface {
	alicloudroscdkcore.IResource
	// Attribute Domain: The domain of the endpoint.
	AttrDomain() interface{}
	// Attribute EndpointId: The Id of the endpoint.
	AttrEndpointId() interface{}
	// Attribute PvlEndpointId: The Id of the private link endpoint.
	AttrPvlEndpointId() interface{}
	Props() *EndpointProps
}

// The jsii proxy for IEndpoint
type jsiiProxy_IEndpoint struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEndpoint) AttrDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomain",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IEndpoint) AttrPvlEndpointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPvlEndpointId",
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

