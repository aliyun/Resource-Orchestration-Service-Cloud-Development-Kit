package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `EIPAssociation`.
type IEIPAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC.
	//
	// Returned only for VPC elastic IP addresses.
	AttrAllocationId() interface{}
	// Attribute EipAddress: IP address of created EIP.
	AttrEipAddress() interface{}
	Props() *EIPAssociationProps
}

// The jsii proxy for IEIPAssociation
type jsiiProxy_IEIPAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEIPAssociation) AttrAllocationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAllocationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEIPAssociation) AttrEipAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEipAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEIPAssociation) Props() *EIPAssociationProps {
	var returns *EIPAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

