package alicloudroscdkappflow

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkappflow/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `UserAuthConfig`.
type IUserAuthConfig interface {
	alicloudroscdkcore.IResource
	// Attribute AuthConfig: AuthConfig.
	AttrAuthConfig() interface{}
	// Attribute AuthConfigId: The id of the config.
	AttrAuthConfigId() interface{}
	Props() *UserAuthConfigProps
}

// The jsii proxy for IUserAuthConfig
type jsiiProxy_IUserAuthConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUserAuthConfig) AttrAuthConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserAuthConfig) AttrAuthConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserAuthConfig) Props() *UserAuthConfigProps {
	var returns *UserAuthConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

