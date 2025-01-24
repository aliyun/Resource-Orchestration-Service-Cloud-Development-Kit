package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AddressBook`.
type IAddressBook interface {
	alicloudroscdkcore.IResource
	// Attribute AddressList: The addresses in the address book.
	AttrAddressList() interface{}
	// Attribute AddressListCount: The number of addresses in the address book.
	AttrAddressListCount() interface{}
	// Attribute AutoAddTagEcs: Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags.
	AttrAutoAddTagEcs() interface{}
	// Attribute Description: The description of the address book.
	AttrDescription() interface{}
	// Attribute GroupName: The name of the address book.
	AttrGroupName() interface{}
	// Attribute GroupType: The type of the address book.
	AttrGroupType() interface{}
	// Attribute GroupUuid: The UUID of the address book.
	AttrGroupUuid() interface{}
	// Attribute ReferenceCount: The number of times that the address book is referenced.
	AttrReferenceCount() interface{}
	// Attribute TagRelation: The logical relationship among ECS tags.
	AttrTagRelation() interface{}
	// Attribute Tags: The details about the ECS tags that can be automatically added to the address book.
	AttrTags() interface{}
	Props() *AddressBookProps
}

// The jsii proxy for IAddressBook
type jsiiProxy_IAddressBook struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAddressBook) AttrAddressList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddressList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddressBook) AttrAddressListCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddressListCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddressBook) AttrAutoAddTagEcs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoAddTagEcs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddressBook) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddressBook) AttrGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddressBook) AttrGroupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddressBook) AttrGroupUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddressBook) AttrReferenceCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReferenceCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddressBook) AttrTagRelation() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTagRelation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddressBook) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddressBook) Props() *AddressBookProps {
	var returns *AddressBookProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

