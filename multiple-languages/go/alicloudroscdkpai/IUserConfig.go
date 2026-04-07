package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `UserConfig`.
type IUserConfig interface {
	alicloudroscdkcore.IResource
	// Attribute CategoryName: Represents a resource attribute for a configuration category.
	AttrCategoryName() interface{}
	// Attribute ConfigKey: Represents the resource attribute of the configuration Key.
	AttrConfigKey() interface{}
	// Attribute Configs: Represents a resource property for the configuration list.
	AttrConfigs() interface{}
	Props() *UserConfigProps
}

// The jsii proxy for IUserConfig
type jsiiProxy_IUserConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUserConfig) AttrCategoryName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCategoryName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserConfig) AttrConfigKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserConfig) AttrConfigs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserConfig) Props() *UserConfigProps {
	var returns *UserConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

