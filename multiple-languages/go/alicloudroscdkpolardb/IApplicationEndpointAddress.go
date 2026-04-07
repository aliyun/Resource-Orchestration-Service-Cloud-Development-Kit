package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `ApplicationEndpointAddress`.
type IApplicationEndpointAddress interface {
	alicloudroscdkcore.IResource
	// Attribute PrivateEndpoint: Private endpoint.
	AttrPrivateEndpoint() interface{}
	// Attribute PublicEndpoint: Public endpoint.
	AttrPublicEndpoint() interface{}
	Props() *ApplicationEndpointAddressProps
}

// The jsii proxy for IApplicationEndpointAddress
type jsiiProxy_IApplicationEndpointAddress struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplicationEndpointAddress) AttrPrivateEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplicationEndpointAddress) AttrPublicEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplicationEndpointAddress) Props() *ApplicationEndpointAddressProps {
	var returns *ApplicationEndpointAddressProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

