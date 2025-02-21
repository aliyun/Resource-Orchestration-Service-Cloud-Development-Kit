package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `InstanceGroup`.
type IInstanceGroup interface {
	alicloudroscdkcore.IResource
	// Attribute HostNames: Host names of created instances.
	AttrHostNames() interface{}
	// Attribute InnerIps: Inner IP address list of the specified instances.
	//
	// Only for classical instances.
	AttrInnerIps() interface{}
	// Attribute InstanceIds: The instance id list of created ecs instances.
	AttrInstanceIds() interface{}
	// Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances.
	//
	// Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
	AttrIpv6Addresses() interface{}
	// Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances.
	//
	// Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
	AttrIpv6AddressIds() interface{}
	// Attribute OrderId: The order id list of created instance.
	AttrOrderId() interface{}
	// Attribute PrivateIps: Private IP address list of created ecs instances.
	//
	// Only for VPC instance.
	AttrPrivateIps() interface{}
	// Attribute PublicIps: Public IP address list of created ecs instances.
	AttrPublicIps() interface{}
	// Attribute RelatedOrderIds: The related order id list of created ecs instances.
	AttrRelatedOrderIds() interface{}
	// Attribute ZoneIds: Zone id of created instances.
	AttrZoneIds() interface{}
	Props() *InstanceGroupProps
}

// The jsii proxy for IInstanceGroup
type jsiiProxy_IInstanceGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstanceGroup) AttrHostNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) AttrInnerIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInnerIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) AttrInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) AttrIpv6Addresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6Addresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) AttrIpv6AddressIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6AddressIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) AttrPrivateIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) AttrPublicIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) AttrRelatedOrderIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRelatedOrderIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) AttrZoneIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) Props() *InstanceGroupProps {
	var returns *InstanceGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

