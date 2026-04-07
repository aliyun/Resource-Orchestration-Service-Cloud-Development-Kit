package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `HoneypotPreset`.
type IHoneypotPreset interface {
	alicloudroscdkcore.IResource
	// Attribute HoneypotImageName: The name of the honeypot image.
	AttrHoneypotImageName() interface{}
	// Attribute HoneypotPresetId: The ID of the honeypot template.
	AttrHoneypotPresetId() interface{}
	// Attribute Meta: The custom configurations of the honeypot template.
	AttrMeta() interface{}
	// Attribute NodeId: The ID of the management node.
	AttrNodeId() interface{}
	// Attribute PresetName: The custom name of the honeypot template.
	AttrPresetName() interface{}
	Props() *HoneypotPresetProps
}

// The jsii proxy for IHoneypotPreset
type jsiiProxy_IHoneypotPreset struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHoneypotPreset) AttrHoneypotImageName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHoneypotImageName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotPreset) AttrHoneypotPresetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHoneypotPresetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotPreset) AttrMeta() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMeta",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotPreset) AttrNodeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotPreset) AttrPresetName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPresetName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotPreset) Props() *HoneypotPresetProps {
	var returns *HoneypotPresetProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

