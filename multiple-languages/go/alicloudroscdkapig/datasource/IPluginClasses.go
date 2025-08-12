package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `PluginClasses`.
type IPluginClasses interface {
	alicloudroscdkcore.IResource
	// Attribute PluginClasses: The list of plugin classes.
	AttrPluginClasses() interface{}
	// Attribute PluginClassIds: The list of plugin class IDs.
	AttrPluginClassIds() interface{}
	Props() *PluginClassesProps
}

// The jsii proxy for IPluginClasses
type jsiiProxy_IPluginClasses struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPluginClasses) AttrPluginClasses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginClasses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginClasses) AttrPluginClassIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginClassIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginClasses) Props() *PluginClassesProps {
	var returns *PluginClassesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

