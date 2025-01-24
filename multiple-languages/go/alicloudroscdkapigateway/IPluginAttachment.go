package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `PluginAttachment`.
type IPluginAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute ApiId: The api id.
	AttrApiId() interface{}
	// Attribute PluginId: The plugin id.
	AttrPluginId() interface{}
	Props() *PluginAttachmentProps
}

// The jsii proxy for IPluginAttachment
type jsiiProxy_IPluginAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPluginAttachment) AttrApiId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApiId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPluginAttachment) AttrPluginId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPluginId",
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

