package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `VSwitch`.
type IVSwitch interface {
	alicloudroscdkcore.IResource
	// Attribute AvailableIpAddressCount: The number of available IP addresses.
	AttrAvailableIpAddressCount() interface{}
	// Attribute CidrBlock: The IPv4 CIDR block of the VSwitch.
	AttrCidrBlock() interface{}
	// Attribute CreateTime: The creation time of the VSwitch.
	AttrCreateTime() interface{}
	// Attribute Description: The description of VSwitch.
	AttrDescription() interface{}
	// Attribute Ipv6CidrBlock: The IPv6 CIDR block of the VSwitch.
	AttrIpv6CidrBlock() interface{}
	// Attribute IsDefault: Indicates whether the VSwitch is a default VSwitch.
	AttrIsDefault() interface{}
	// Attribute ResourceGroupId: The resource group id of VSwitch.
	AttrResourceGroupId() interface{}
	// Attribute RouteTableId: The route table id.
	AttrRouteTableId() interface{}
	// Attribute Tags: The tags of VSwitch.
	AttrTags() interface{}
	// Attribute VpcId: The VPC ID.
	AttrVpcId() interface{}
	// Attribute VSwitchId: The ID of the VSwitch.
	AttrVSwitchId() interface{}
	// Attribute VSwitchName: The name of the VSwitch.
	AttrVSwitchName() interface{}
	// Attribute ZoneId: The zone ID  of the resource.
	AttrZoneId() interface{}
	Props() *VSwitchProps
}

// The jsii proxy for IVSwitch
type jsiiProxy_IVSwitch struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVSwitch) AttrAvailableIpAddressCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAvailableIpAddressCount",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IVSwitch) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVSwitch) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
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

func (j *jsiiProxy_IVSwitch) AttrIsDefault() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsDefault",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVSwitch) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVSwitch) AttrRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVSwitch) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVSwitch) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
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

func (j *jsiiProxy_IVSwitch) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
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

