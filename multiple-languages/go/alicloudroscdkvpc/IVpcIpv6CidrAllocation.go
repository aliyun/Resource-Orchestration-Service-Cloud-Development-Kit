package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `VpcIpv6CidrAllocation`.
type IVpcIpv6CidrAllocation interface {
	alicloudroscdkcore.IResource
	// Attribute Ipv6CidrBlock: The IPv6 CIDR block that is reserved.
	AttrIpv6CidrBlock() interface{}
	Props() *VpcIpv6CidrAllocationProps
}

// The jsii proxy for IVpcIpv6CidrAllocation
type jsiiProxy_IVpcIpv6CidrAllocation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcIpv6CidrAllocation) AttrIpv6CidrBlock() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6CidrBlock",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcIpv6CidrAllocation) Props() *VpcIpv6CidrAllocationProps {
	var returns *VpcIpv6CidrAllocationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

