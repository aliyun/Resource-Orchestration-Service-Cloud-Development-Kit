package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdrds/datasource/internal"
)

// Represents a `Account`.
type IAccount interface {
	alicloudroscdkcore.IResource
	// Attribute AccountType: Indicates the type of an instance account.
	//
	// Valid values:
	// 0: The instance account is a privileged account.
	// 1: The instance account is a standard account.
	AttrAccountType() interface{}
	// Attribute DbPrivileges: Indicates the information about the permissions of an account on a database.
	AttrDbPrivileges() interface{}
	// Attribute Description: Account remarks.
	//
	// The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
	AttrDescription() interface{}
	// Attribute DrdsAccountName: Indicates the username of an instance account.
	AttrDrdsAccountName() interface{}
	// Attribute Host: Indicates an IP address that is allowed to access the database.
	//
	// The value % indicates that each IP address is allowed to access the database.
	AttrHost() interface{}
	Props() *AccountProps
}

// The jsii proxy for IAccount
type jsiiProxy_IAccount struct {
	internal.Type__alicloudroscdkcoreIResource
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

func (j *jsiiProxy_IAccount) AttrDbPrivileges() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbPrivileges",
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

func (j *jsiiProxy_IAccount) AttrDrdsAccountName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDrdsAccountName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrHost() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHost",
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

