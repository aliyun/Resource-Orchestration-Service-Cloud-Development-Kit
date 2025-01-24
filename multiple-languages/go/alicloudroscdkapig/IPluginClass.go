package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `PluginClass`.
type IPluginClass interface {
	alicloudroscdkcore.IResource
	// Attribute Alias: The alias of the plugin class.
	AttrAlias() interface{}
	// Attribute Description: The description of the plugin class.
	AttrDescription() interface{}
	// Attribute Document: The document of plugin.
	AttrDocument() interface{}
	// Attribute PluginClassName: The name of the plugin class.
	AttrPluginClassName() interface{}
	// Attribute Type: The type of the plugin class.
	AttrType() interface{}
	// Attribute WasmLanguage: Wasm language.
	AttrWasmLanguage() interface{}
	Props() *PluginClassProps
}

// The jsii proxy for IPluginClass
type jsiiProxy_IPluginClass struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPluginClass) AttrAlias() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginClass) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginClass) AttrDocument() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDocument",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginClass) AttrPluginClassName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginClassName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginClass) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginClass) AttrWasmLanguage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWasmLanguage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginClass) Props() *PluginClassProps {
	var returns *PluginClassProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

