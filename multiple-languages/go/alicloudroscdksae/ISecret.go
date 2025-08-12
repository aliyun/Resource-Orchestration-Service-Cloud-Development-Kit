package alicloudroscdksae

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksae/internal"
)

// Represents a `Secret`.
type ISecret interface {
	alicloudroscdkcore.IResource
	// Attribute NamespaceId: The namespace ID that the Secret instance belongs to.
	AttrNamespaceId() interface{}
	// Attribute SecretId: The ID of the secret.
	AttrSecretId() interface{}
	Props() *SecretProps
}

// The jsii proxy for ISecret
type jsiiProxy_ISecret struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecret) AttrNamespaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrSecretId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecretId",
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

