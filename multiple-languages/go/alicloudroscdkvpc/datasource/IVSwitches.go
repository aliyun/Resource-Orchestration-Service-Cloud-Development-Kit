package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `VSwitches`.
type IVSwitches interface {
	alicloudroscdkcore.IResource
	// Attribute VSwitches: The detailed information about the vSwitches.
	AttrVSwitches() interface{}
	// Attribute VSwitchIds: The list of The vSwitch Ids.
	AttrVSwitchIds() interface{}
	Props() *VSwitchesProps
}

// The jsii proxy for IVSwitches
type jsiiProxy_IVSwitches struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVSwitches) AttrVSwitches() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitches",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVSwitches) AttrVSwitchIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVSwitches) Props() *VSwitchesProps {
	var returns *VSwitchesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

