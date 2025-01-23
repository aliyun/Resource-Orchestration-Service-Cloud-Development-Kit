package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkredis/datasource/internal"
)

// Represents a `Account`.
type IAccount interface {
	alicloudroscdkcore.IResource
	// Attribute AccountName: The name of the account.
	AttrAccountName() interface{}
	// Attribute AccountPrivilege: The permission of the account.
	//
	// Default value: RoleReadWrite. Valid values:
	// RoleReadOnly: The account has the read-only permissions.
	// RoleReadWrite: The account has the read and write permissions.
	AttrAccountPrivilege() interface{}
	// Attribute AccountType: The type of the account.
	//
	// Valid values:
	// Normal: standard account
	// Super: super account.
	AttrAccountType() interface{}
	// Attribute Description: The description of the account.
	AttrDescription() interface{}
	// Attribute InstanceId: The ID of the Redis instance.
	AttrInstanceId() interface{}
	Props() *AccountProps
}

// The jsii proxy for IAccount
type jsiiProxy_IAccount struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccount) AttrAccountName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrAccountPrivilege() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountPrivilege",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrAccountType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
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

