package alicloudroscdkiot

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkiot/internal"
)

// Represents a `DeviceGroup`.
type IDeviceGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GroupId: Packet, ID, System for the globally unique identifier generated packet.
	AttrGroupId() interface{}
	// Attribute IotInstanceId: IOT instance ID.
	AttrIotInstanceId() interface{}
	Props() *DeviceGroupProps
}

// The jsii proxy for IDeviceGroup
type jsiiProxy_IDeviceGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDeviceGroup) AttrGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeviceGroup) AttrIotInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIotInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeviceGroup) Props() *DeviceGroupProps {
	var returns *DeviceGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

