package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `SAMLProvider`.
type ISAMLProvider interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: ARN.
	AttrArn() interface{}
	// Attribute SAMLProviderName: IdP Name.
	AttrSamlProviderName() interface{}
	Props() *SAMLProviderProps
}

// The jsii proxy for ISAMLProvider
type jsiiProxy_ISAMLProvider struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISAMLProvider) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISAMLProvider) AttrSamlProviderName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSamlProviderName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISAMLProvider) Props() *SAMLProviderProps {
	var returns *SAMLProviderProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

