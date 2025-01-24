package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `NetworkInterface`.
type INetworkInterface interface {
	alicloudroscdkcore.IResource
	// Attribute MacAddress: The MAC address of your Network Interface.
	AttrMacAddress() interface{}
	// Attribute NetworkInterfaceId: ID of your Network Interface.
	AttrNetworkInterfaceId() interface{}
	// Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
	AttrPrivateIpAddress() interface{}
	// Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
	AttrSecondaryPrivateIpAddresses() interface{}
	Props() *NetworkInterfaceProps
}

// The jsii proxy for INetworkInterface
type jsiiProxy_INetworkInterface struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INetworkInterface) AttrMacAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMacAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkInterface) AttrNetworkInterfaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkInterface) AttrPrivateIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkInterface) AttrSecondaryPrivateIpAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecondaryPrivateIpAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkInterface) Props() *NetworkInterfaceProps {
	var returns *NetworkInterfaceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

