package alicloudroscdkiot

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkiot/internal"
)

// Represents a `Device`.
type IDevice interface {
	alicloudroscdkcore.IResource
	// Attribute DeviceName: Device name.
	AttrDeviceName() interface{}
	// Attribute DeviceSecret: Device key.
	AttrDeviceSecret() interface{}
	// Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.
	//
	// Description Keep, do not leak.
	AttrIotId() interface{}
	// Attribute IotInstanceId: IOT instance ID.
	AttrIotInstanceId() interface{}
	// Attribute IpAddress: IP address.
	AttrIpAddress() interface{}
	// Attribute NickName: Nick name.
	AttrNickName() interface{}
	// Attribute NodeType: Node type.
	AttrNodeType() interface{}
	// Attribute ProductKey: Product key.
	AttrProductKey() interface{}
	// Attribute ProductName: Product name.
	AttrProductName() interface{}
	Props() *DeviceProps
}

// The jsii proxy for IDevice
type jsiiProxy_IDevice struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDevice) AttrDeviceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeviceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDevice) AttrDeviceSecret() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeviceSecret",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDevice) AttrIotId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIotId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDevice) AttrIotInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIotInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDevice) AttrIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDevice) AttrNickName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNickName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDevice) AttrNodeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDevice) AttrProductKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProductKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDevice) AttrProductName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProductName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDevice) Props() *DeviceProps {
	var returns *DeviceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

