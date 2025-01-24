package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Api`.
type IApi interface {
	alicloudroscdkcore.IResource
	// Attribute ApiId: The id of the API.
	AttrApiId() interface{}
	Props() *ApiProps
}

// The jsii proxy for IApi
type jsiiProxy_IApi struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApi) AttrApiId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApiId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApi) Props() *ApiProps {
	var returns *ApiProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

