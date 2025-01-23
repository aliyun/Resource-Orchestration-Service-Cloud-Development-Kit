package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AddressBooks`.
type IAddressBooks interface {
	alicloudroscdkcore.IResource
	// Attribute AddressBooks: The list of address books.
	AttrAddressBooks() interface{}
	// Attribute GroupUuids: The list of group uuids.
	AttrGroupUuids() interface{}
	Props() *AddressBooksProps
}

// The jsii proxy for IAddressBooks
type jsiiProxy_IAddressBooks struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAddressBooks) AttrAddressBooks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddressBooks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddressBooks) AttrGroupUuids() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupUuids",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddressBooks) Props() *AddressBooksProps {
	var returns *AddressBooksProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

