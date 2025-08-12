package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Plugins`.
type IPlugins interface {
	alicloudroscdkcore.IResource
	// Attribute PluginIds: The list of plugin IDs.
	AttrPluginIds() interface{}
	// Attribute Plugins: The list of plugins.
	AttrPlugins() interface{}
	Props() *PluginsProps
}

// The jsii proxy for IPlugins
type jsiiProxy_IPlugins struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPlugins) AttrPluginIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPlugins) AttrPlugins() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPlugins",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPlugins) Props() *PluginsProps {
	var returns *PluginsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

