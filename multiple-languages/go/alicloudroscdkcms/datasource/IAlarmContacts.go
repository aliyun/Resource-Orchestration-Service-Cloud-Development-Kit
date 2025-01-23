package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AlarmContacts`.
type IAlarmContacts interface {
	alicloudroscdkcore.IResource
	// Attribute AlarmContactNames: The list of alarm contact names.
	AttrAlarmContactNames() interface{}
	// Attribute AlarmContacts: The list of alarm contacts.
	AttrAlarmContacts() interface{}
	Props() *AlarmContactsProps
}

// The jsii proxy for IAlarmContacts
type jsiiProxy_IAlarmContacts struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAlarmContacts) AttrAlarmContactNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAlarmContactNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContacts) AttrAlarmContacts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAlarmContacts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContacts) Props() *AlarmContactsProps {
	var returns *AlarmContactsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

