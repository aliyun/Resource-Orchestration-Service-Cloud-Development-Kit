package alicloudroscdkamqp

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkamqp/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Account`.
type IAccount interface {
	alicloudroscdkcore.IResource
	// Attribute AccountAccessKey: The AccessKey ID used to create the username and password.
	AttrAccountAccessKey() interface{}
	// Attribute CreateTimestamp: The timestamp when the account was created.
	AttrCreateTimestamp() interface{}
	// Attribute Password: The created static user password.
	AttrPassword() interface{}
	// Attribute UserName: The created account user name.
	AttrUserName() interface{}
	Props() *AccountProps
}

// The jsii proxy for IAccount
type jsiiProxy_IAccount struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccount) AttrAccountAccessKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountAccessKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrCreateTimestamp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTimestamp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrPassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrUserName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) Props() *AccountProps {
	var returns *AccountProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

