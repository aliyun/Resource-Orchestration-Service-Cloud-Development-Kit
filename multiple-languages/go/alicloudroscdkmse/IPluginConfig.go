package alicloudroscdkmse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
)

// Represents a `PluginConfig`.
type IPluginConfig interface {
	alicloudroscdkcore.IResource
	// Attribute PluginConfigId: The ID of the plugin config.
	AttrPluginConfigId() interface{}
	Props() *PluginConfigProps
}

// The jsii proxy for IPluginConfig
type jsiiProxy_IPluginConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPluginConfig) AttrPluginConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginConfig) Props() *PluginConfigProps {
	var returns *PluginConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

