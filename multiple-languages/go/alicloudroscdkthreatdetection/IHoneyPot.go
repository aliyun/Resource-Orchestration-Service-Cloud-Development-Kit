package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `HoneyPot`.
type IHoneyPot interface {
	alicloudroscdkcore.IResource
	// Attribute HoneypotId: The ID of the honeypot.
	AttrHoneypotId() interface{}
	// Attribute HoneypotImageId: The ID of the honeypot image.
	AttrHoneypotImageId() interface{}
	// Attribute HoneypotImageName: The name of the honeypot image.
	AttrHoneypotImageName() interface{}
	// Attribute HoneypotName: The custom name of the honeypot.
	AttrHoneypotName() interface{}
	// Attribute NodeId: The ID of the management node.
	AttrNodeId() interface{}
	// Attribute State: Honeypot status.
	AttrState() interface{}
	Props() *HoneyPotProps
}

// The jsii proxy for IHoneyPot
type jsiiProxy_IHoneyPot struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHoneyPot) AttrHoneypotId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHoneypotId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneyPot) AttrHoneypotImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHoneypotImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneyPot) AttrHoneypotImageName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHoneypotImageName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneyPot) AttrHoneypotName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHoneypotName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneyPot) AttrNodeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneyPot) AttrState() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrState",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneyPot) Props() *HoneyPotProps {
	var returns *HoneyPotProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

