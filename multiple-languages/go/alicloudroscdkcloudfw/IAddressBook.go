package alicloudroscdkcloudfw

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AddressBook`.
type IAddressBook interface {
	alicloudroscdkcore.IResource
	// Attribute GroupUuid: After a successful return to the address book to add unique identification ID.
	AttrGroupUuid() interface{}
	Props() *AddressBookProps
}

// The jsii proxy for IAddressBook
type jsiiProxy_IAddressBook struct {
	internal.Type__alicloudroscdkcoreIResource
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

func (j *jsiiProxy_IAddressBook) Props() *AddressBookProps {
	var returns *AddressBookProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

