package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `IpamPoolAllocation`.
type IIpamPoolAllocation interface {
	alicloudroscdkcore.IResource
	// Attribute Cidr: The allocated address segment.
	AttrCidr() interface{}
	// Attribute CreateTime: Instance creation time.
	AttrCreateTime() interface{}
	// Attribute IpamPoolAllocationDescription: The description of the ipam pool alloctaion.
	AttrIpamPoolAllocationDescription() interface{}
	// Attribute IpamPoolAllocationId: The instance ID of the ipam pool allocation.
	AttrIpamPoolAllocationId() interface{}
	// Attribute IpamPoolAllocationName: The name of the ipam pool allocation.
	AttrIpamPoolAllocationName() interface{}
	// Attribute IpamPoolId: The ID of the IPAM Pool.
	AttrIpamPoolId() interface{}
	// Attribute ResourceOwnerId: The ID of the Alibaba Cloud account (primary account) to which the resource belongs.
	AttrResourceOwnerId() interface{}
	// Attribute ResourceType: The type of resource.
	AttrResourceType() interface{}
	// Attribute SourceCidr: The source address segment.
	AttrSourceCidr() interface{}
	Props() *IpamPoolAllocationProps
}

// The jsii proxy for IIpamPoolAllocation
type jsiiProxy_IIpamPoolAllocation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpamPoolAllocation) AttrCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamPoolAllocation) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamPoolAllocation) AttrIpamPoolAllocationDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamPoolAllocationDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamPoolAllocation) AttrIpamPoolAllocationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamPoolAllocationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamPoolAllocation) AttrIpamPoolAllocationName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamPoolAllocationName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamPoolAllocation) AttrIpamPoolId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamPoolId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamPoolAllocation) AttrResourceOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamPoolAllocation) AttrResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamPoolAllocation) AttrSourceCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamPoolAllocation) Props() *IpamPoolAllocationProps {
	var returns *IpamPoolAllocationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

