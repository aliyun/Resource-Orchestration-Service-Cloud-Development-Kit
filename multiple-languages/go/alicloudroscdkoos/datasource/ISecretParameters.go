package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/datasource/internal"
)

// Represents a `SecretParameters`.
type ISecretParameters interface {
	alicloudroscdkcore.IResource
	// Attribute SecretParameterNames: The list of secret parameter names.
	AttrSecretParameterNames() interface{}
	// Attribute SecretParameters: The list of secret parameters.
	AttrSecretParameters() interface{}
	Props() *SecretParametersProps
}

// The jsii proxy for ISecretParameters
type jsiiProxy_ISecretParameters struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecretParameters) AttrSecretParameterNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecretParameterNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameters) AttrSecretParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecretParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameters) Props() *SecretParametersProps {
	var returns *SecretParametersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

