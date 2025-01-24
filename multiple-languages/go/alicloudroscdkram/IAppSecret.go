package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `AppSecret`.
type IAppSecret interface {
	alicloudroscdkcore.IResource
	// Attribute AppSecretId: The ID of the application secret.
	AttrAppSecretId() interface{}
	// Attribute AppSecretValue: The content of the application secret.
	//
	// This value can be used as the client secret for open authorization.
	AttrAppSecretValue() interface{}
	Props() *AppSecretProps
}

// The jsii proxy for IAppSecret
type jsiiProxy_IAppSecret struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAppSecret) AttrAppSecretId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppSecretId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAppSecret) AttrAppSecretValue() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppSecretValue",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAppSecret) Props() *AppSecretProps {
	var returns *AppSecretProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

