package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `AssignPrivateIpAddresses`.
type IAssignPrivateIpAddresses interface {
	alicloudroscdkcore.IResource
	// Attribute NetworkInterfaceId: The ID of the ENI.
	AttrNetworkInterfaceId() interface{}
	// Attribute PrivateIpAddresses: Assigned private ip addresses.
	AttrPrivateIpAddresses() interface{}
	Props() *AssignPrivateIpAddressesProps
}

// The jsii proxy for IAssignPrivateIpAddresses
type jsiiProxy_IAssignPrivateIpAddresses struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAssignPrivateIpAddresses) AttrNetworkInterfaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAssignPrivateIpAddresses) AttrPrivateIpAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateIpAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAssignPrivateIpAddresses) Props() *AssignPrivateIpAddressesProps {
	var returns *AssignPrivateIpAddressesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

