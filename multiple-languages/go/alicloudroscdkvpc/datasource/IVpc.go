package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `Vpc`.
type IVpc interface {
	alicloudroscdkcore.IResource
	// Attribute CidrBlock: The IPv4 CIDR block of the VPC.
	AttrCidrBlock() interface{}
	// Attribute ClassicLinkEnabled: status of vpc  ClassicLink..
	AttrClassicLinkEnabled() interface{}
	// Attribute CreateTime: The time at which the VPC was created.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the VPC.
	AttrDescription() interface{}
	// Attribute DhcpOptionsSetId: The ID of the DHCP option set.
	AttrDhcpOptionsSetId() interface{}
	// Attribute Ipv6CidrBlock: The ipv6 cidr block of vpc.
	AttrIpv6CidrBlock() interface{}
	// Attribute Ipv6CidrBlocks: The IPv6 network segment of the VPC.
	AttrIpv6CidrBlocks() interface{}
	// Attribute IsDefault: Indicates whether to query the default VPC in the specified region.
	//
	// Valid values:
	// - true (default): All VPCs in the specified region are queried.
	// - false: The default VPC is not queried.
	AttrIsDefault() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
	AttrResourceGroupId() interface{}
	// Attribute RouterId: The ID of the VRouter.
	AttrRouterId() interface{}
	// Attribute SecondaryCidrBlocks: Additional network segment information.
	AttrSecondaryCidrBlocks() interface{}
	// Attribute Tags: The tags of Vpc.
	AttrTags() interface{}
	// Attribute UserCidrs: A list of user CIDRs.
	AttrUserCidrs() interface{}
	// Attribute VpcId: The ID of the VPC.
	AttrVpcId() interface{}
	// Attribute VpcName: The name of the VPC.
	AttrVpcName() interface{}
	// Attribute VSwitchIds: A list of VSwitches in the VPC.
	AttrVSwitchIds() interface{}
	Props() *VpcProps
}

// The jsii proxy for IVpc
type jsiiProxy_IVpc struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpc) AttrCidrBlock() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCidrBlock",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrClassicLinkEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClassicLinkEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrDhcpOptionsSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDhcpOptionsSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrIpv6CidrBlock() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6CidrBlock",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrIpv6CidrBlocks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6CidrBlocks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrIsDefault() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsDefault",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrSecondaryCidrBlocks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecondaryCidrBlocks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrUserCidrs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserCidrs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrVpcName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrVSwitchIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) Props() *VpcProps {
	var returns *VpcProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

