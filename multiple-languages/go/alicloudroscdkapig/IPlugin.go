package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Plugin`.
type IPlugin interface {
	alicloudroscdkcore.IResource
	// Attribute GatewayId: The ID of the Gateway.
	AttrGatewayId() interface{}
	// Attribute GatewayName: The name of the gateway.
	AttrGatewayName() interface{}
	// Attribute PluginClassId: The ID of the plugin class.
	AttrPluginClassId() interface{}
	// Attribute PluginId: The ID of the plugin.
	AttrPluginId() interface{}
	Props() *PluginProps
}

// The jsii proxy for IPlugin
type jsiiProxy_IPlugin struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPlugin) AttrGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPlugin) AttrGatewayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPlugin) AttrPluginClassId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginClassId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPlugin) AttrPluginId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPlugin) Props() *PluginProps {
	var returns *PluginProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

