package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `PluginAttachment`.
type IPluginAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute AttachResourceId: The resource ID to be attached by the plugin.
	AttrAttachResourceId() interface{}
	// Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.
	AttrAttachResourceIds() interface{}
	// Attribute AttachResourceNames: The list of resource names to be attached by the plugin.
	AttrAttachResourceNames() interface{}
	// Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.
	AttrAttachResourceParentIds() interface{}
	// Attribute AttachResourceType: The type of the resource to be attached by the plugin.
	AttrAttachResourceType() interface{}
	// Attribute Enable: Whether to enable this plugin.
	AttrEnable() interface{}
	// Attribute EnvironmentId: The ID of the environment.
	AttrEnvironmentId() interface{}
	// Attribute PluginAttachmentId: The ID of plugin attachment.
	AttrPluginAttachmentId() interface{}
	// Attribute PluginClassInfo: The type of the plugin.
	AttrPluginClassInfo() interface{}
	// Attribute PluginInfo: The information about the association of plugin with gateway instance.
	AttrPluginInfo() interface{}
	Props() *PluginAttachmentProps
}

// The jsii proxy for IPluginAttachment
type jsiiProxy_IPluginAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPluginAttachment) AttrAttachResourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttachResourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginAttachment) AttrAttachResourceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttachResourceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginAttachment) AttrAttachResourceNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttachResourceNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginAttachment) AttrAttachResourceParentIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttachResourceParentIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginAttachment) AttrAttachResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttachResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginAttachment) AttrEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginAttachment) AttrEnvironmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginAttachment) AttrPluginAttachmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginAttachment) AttrPluginClassInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginClassInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginAttachment) AttrPluginInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginAttachment) Props() *PluginAttachmentProps {
	var returns *PluginAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

