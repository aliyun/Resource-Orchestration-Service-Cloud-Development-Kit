package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `HttpApi`.
type IHttpApi interface {
	alicloudroscdkcore.IResource
	// Attribute HttpApiId: The ID of the HTTP API.
	AttrHttpApiId() interface{}
	Props() *HttpApiProps
}

// The jsii proxy for IHttpApi
type jsiiProxy_IHttpApi struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHttpApi) AttrHttpApiId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpApiId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpApi) Props() *HttpApiProps {
	var returns *HttpApiProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

