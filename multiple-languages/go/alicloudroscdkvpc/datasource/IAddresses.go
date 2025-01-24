package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `Addresses`.
type IAddresses interface {
	alicloudroscdkcore.IResource
	// Attribute Addresses: The details about the EIP.
	AttrAddresses() interface{}
	// Attribute AllocationIds: The list of allocation IDs.
	AttrAllocationIds() interface{}
	Props() *AddressesProps
}

// The jsii proxy for IAddresses
type jsiiProxy_IAddresses struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAddresses) AttrAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddresses) AttrAllocationIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAllocationIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddresses) Props() *AddressesProps {
	var returns *AddressesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

