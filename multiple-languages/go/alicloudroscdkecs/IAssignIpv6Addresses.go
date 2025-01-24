package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `AssignIpv6Addresses`.
type IAssignIpv6Addresses interface {
	alicloudroscdkcore.IResource
	// Attribute Ipv6Addresses: Assigned IPv6 addresses.
	AttrIpv6Addresses() interface{}
	// Attribute Ipv6AddressIds: Assigned IPv6 address IDs.
	AttrIpv6AddressIds() interface{}
	// Attribute NetworkInterfaceId: Elastic network interface ID.
	AttrNetworkInterfaceId() interface{}
	Props() *AssignIpv6AddressesProps
}

// The jsii proxy for IAssignIpv6Addresses
type jsiiProxy_IAssignIpv6Addresses struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAssignIpv6Addresses) AttrIpv6Addresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6Addresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAssignIpv6Addresses) AttrIpv6AddressIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6AddressIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAssignIpv6Addresses) AttrNetworkInterfaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAssignIpv6Addresses) Props() *AssignIpv6AddressesProps {
	var returns *AssignIpv6AddressesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

