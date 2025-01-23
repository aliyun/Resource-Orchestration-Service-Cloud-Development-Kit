package alicloudroscdkdrds

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdrds/internal"
)

// Represents a `Account`.
type IAccount interface {
	alicloudroscdkcore.IResource
	// Attribute AccountType: Account type.
	AttrAccountType() interface{}
	// Attribute DbPrivileges: Database permission information.
	AttrDbPrivileges() interface{}
	// Attribute Description: Account remarks.
	//
	// The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
	AttrDescription() interface{}
	// Attribute DrdsAccountName: The name of the account.
	AttrDrdsAccountName() interface{}
	// Attribute Host: You can access the IP address of the database.
	//
	// <note>**%** indicates that any IP address can be accessed.
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

