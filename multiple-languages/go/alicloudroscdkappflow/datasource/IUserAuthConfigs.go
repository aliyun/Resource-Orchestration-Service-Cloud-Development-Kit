package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkappflow/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `UserAuthConfigs`.
type IUserAuthConfigs interface {
	alicloudroscdkcore.IResource
	// Attribute AuthConfigIds: The list of auth config ids.
	AttrAuthConfigIds() interface{}
	// Attribute AuthConfigs: The list of auth configs.
	AttrAuthConfigs() interface{}
	Props() *UserAuthConfigsProps
}

// The jsii proxy for IUserAuthConfigs
type jsiiProxy_IUserAuthConfigs struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUserAuthConfigs) AttrAuthConfigIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthConfigIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserAuthConfigs) AttrAuthConfigs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthConfigs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserAuthConfigs) Props() *UserAuthConfigsProps {
	var returns *UserAuthConfigsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

