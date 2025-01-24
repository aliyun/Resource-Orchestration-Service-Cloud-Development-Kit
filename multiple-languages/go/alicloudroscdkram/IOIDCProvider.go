package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `OIDCProvider`.
type IOIDCProvider interface {
	alicloudroscdkcore.IResource
	// Attribute OIDCProviderName: The name of the OIDC IdP.
	//
	// The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
	// The name can be up to 128 characters in length.
	AttrOidcProviderName() interface{}
	Props() *OIDCProviderProps
}

// The jsii proxy for IOIDCProvider
type jsiiProxy_IOIDCProvider struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOIDCProvider) AttrOidcProviderName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOidcProviderName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOIDCProvider) Props() *OIDCProviderProps {
	var returns *OIDCProviderProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

