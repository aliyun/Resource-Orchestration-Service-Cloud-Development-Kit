package alicloudroscdkcloudsso

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsso/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `SAMLIdentityProvider`.
type ISAMLIdentityProvider interface {
	alicloudroscdkcore.IResource
	Props() *SAMLIdentityProviderProps
}

// The jsii proxy for ISAMLIdentityProvider
type jsiiProxy_ISAMLIdentityProvider struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISAMLIdentityProvider) Props() *SAMLIdentityProviderProps {
	var returns *SAMLIdentityProviderProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

