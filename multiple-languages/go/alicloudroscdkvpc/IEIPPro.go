package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `EIPPro`.
type IEIPPro interface {
	alicloudroscdkcore.IResource
	// Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC.
	//
	// Returned only for VPC elastic IP addresses.
	AttrAllocationId() interface{}
	// Attribute EipAddress: IP address of created EIP.
	AttrEipAddress() interface{}
	// Attribute ISP: The line type.
	AttrIsp() interface{}
	// Attribute OrderId: Order ID of prepaid EIP instance.
	AttrOrderId() interface{}
	Props() *EIPProProps
}

// The jsii proxy for IEIPPro
type jsiiProxy_IEIPPro struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEIPPro) AttrAllocationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAllocationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEIPPro) AttrEipAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEipAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEIPPro) AttrIsp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEIPPro) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEIPPro) Props() *EIPProProps {
	var returns *EIPProProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

