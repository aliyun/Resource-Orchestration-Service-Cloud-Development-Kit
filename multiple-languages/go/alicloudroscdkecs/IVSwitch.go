package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `VSwitch`.
type IVSwitch interface {
	alicloudroscdkcore.IResource
	// Attribute CidrBlock: CIDR Block of created VSwitch.
	AttrCidrBlock() interface{}
	// Attribute Ipv6CidrBlock: The IPv6 network segment of the VSwitch.
	AttrIpv6CidrBlock() interface{}
	// Attribute VSwitchId: Id of created VSwitch.
	AttrVSwitchId() interface{}
	// Attribute VSwitchName: The name of the VSwitch.
	AttrVSwitchName() interface{}
	Props() *VSwitchProps
}

// The jsii proxy for IVSwitch
type jsiiProxy_IVSwitch struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVSwitch) AttrCidrBlock() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCidrBlock",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVSwitch) AttrIpv6CidrBlock() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6CidrBlock",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IVSwitch) AttrVSwitchName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchName",
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

