package alicloudroscdkens

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/internal"
)

// Represents a `VSwitch`.
type IVSwitch interface {
	alicloudroscdkcore.IResource
	// Attribute VSwitchId: The ID of the vSwitch.
	AttrVSwitchId() interface{}
	Props() *VSwitchProps
}

// The jsii proxy for IVSwitch
type jsiiProxy_IVSwitch struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVSwitch) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVSwitch) Props() *VSwitchProps {
	var returns *VSwitchProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

