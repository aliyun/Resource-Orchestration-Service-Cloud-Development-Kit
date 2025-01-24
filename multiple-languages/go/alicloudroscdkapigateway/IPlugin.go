package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Plugin`.
type IPlugin interface {
	alicloudroscdkcore.IResource
	// Attribute Description: The description of the plug-in, which cannot exceed 200 characters.
	AttrDescription() interface{}
	// Attribute PluginData: The definition statement of the plug-in.
	//
	// Plug-in definition statements in the JSON and YAML formats are supported.
	AttrPluginData() interface{}
	// Attribute PluginId: The generated plugin ID.
	AttrPluginId() interface{}
	// Attribute PluginName: The name of the plug-in that you want to create.
	//
	// It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
	AttrPluginName() interface{}
	// Attribute PluginType: The type of the plug-in.
	//
	// Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
	AttrPluginType() interface{}
	Props() *PluginProps
}

// The jsii proxy for IPlugin
type jsiiProxy_IPlugin struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPlugin) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPlugin) AttrPluginData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginData",
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

func (j *jsiiProxy_IPlugin) AttrPluginName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPlugin) AttrPluginType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginType",
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

