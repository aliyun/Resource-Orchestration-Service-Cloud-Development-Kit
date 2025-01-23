package alicloudroscdkkms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkms/internal"
)

// Represents a `Secret`.
type ISecret interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute SecretName: The name of the secret.
	AttrSecretName() interface{}
	Props() *SecretProps
}

// The jsii proxy for ISecret
type jsiiProxy_ISecret struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecret) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrSecretName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecretName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) Props() *SecretProps {
	var returns *SecretProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

