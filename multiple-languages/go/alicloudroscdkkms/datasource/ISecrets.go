package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkms/datasource/internal"
)

// Represents a `Secrets`.
type ISecrets interface {
	alicloudroscdkcore.IResource
	// Attribute SecretNames: The list of secret names.
	AttrSecretNames() interface{}
	// Attribute Secrets: The list of secrets.
	AttrSecrets() interface{}
	Props() *SecretsProps
}

// The jsii proxy for ISecrets
type jsiiProxy_ISecrets struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecrets) AttrSecretNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecretNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecrets) AttrSecrets() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecrets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecrets) Props() *SecretsProps {
	var returns *SecretsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

