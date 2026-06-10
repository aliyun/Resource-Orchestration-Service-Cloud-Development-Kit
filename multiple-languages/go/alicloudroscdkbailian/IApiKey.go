package alicloudroscdkbailian

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbailian/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ApiKey`.
type IApiKey interface {
	alicloudroscdkcore.IResource
	// Attribute ApiKeyId: The id of the API key.
	AttrApiKeyId() interface{}
	// Attribute Key: The value of the API key.
	AttrKey() interface{}
	Props() *ApiKeyProps
}

// The jsii proxy for IApiKey
type jsiiProxy_IApiKey struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApiKey) AttrApiKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApiKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApiKey) AttrKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApiKey) Props() *ApiKeyProps {
	var returns *ApiKeyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

