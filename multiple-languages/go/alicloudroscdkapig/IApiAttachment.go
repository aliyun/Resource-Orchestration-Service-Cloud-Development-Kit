package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ApiAttachment`.
type IApiAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute EnvironmentId: The ID of the environment to which the API is to deploy.
	AttrEnvironmentId() interface{}
	// Attribute HttpApiId: The ID of the HTTP API.
	AttrHttpApiId() interface{}
	// Attribute RouteId: The route ID.
	//
	// When publishing an HTTP API route, it must be passed in.
	AttrRouteId() interface{}
	Props() *ApiAttachmentProps
}

// The jsii proxy for IApiAttachment
type jsiiProxy_IApiAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApiAttachment) AttrEnvironmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApiAttachment) AttrHttpApiId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpApiId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApiAttachment) AttrRouteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApiAttachment) Props() *ApiAttachmentProps {
	var returns *ApiAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

