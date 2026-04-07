package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `MessageContact`.
type IMessageContact interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: Creation time of Message Contact.
	AttrCreateTime() interface{}
	// Attribute EmailAddress: The email address of the contact.
	AttrEmailAddress() interface{}
	// Attribute MessageContactId: The ID of Message Contact.
	AttrMessageContactId() interface{}
	// Attribute MessageContactName: The name of the contact.
	AttrMessageContactName() interface{}
	// Attribute MessageTypes: The types of messages received by the contact.
	AttrMessageTypes() interface{}
	// Attribute PhoneNumber: The mobile phone number of the contact.
	AttrPhoneNumber() interface{}
	// Attribute Title: The job title of the contact.
	AttrTitle() interface{}
	Props() *MessageContactProps
}

// The jsii proxy for IMessageContact
type jsiiProxy_IMessageContact struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMessageContact) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageContact) AttrEmailAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEmailAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageContact) AttrMessageContactId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMessageContactId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageContact) AttrMessageContactName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMessageContactName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageContact) AttrMessageTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMessageTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageContact) AttrPhoneNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPhoneNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageContact) AttrTitle() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTitle",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageContact) Props() *MessageContactProps {
	var returns *MessageContactProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

