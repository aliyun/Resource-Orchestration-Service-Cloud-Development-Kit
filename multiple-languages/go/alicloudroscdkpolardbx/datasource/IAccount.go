package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardbx/datasource/internal"
)

// Represents a `Account`.
type IAccount interface {
	alicloudroscdkcore.IResource
	// Attribute AccountDescription: The description of the account.
	AttrAccountDescription() interface{}
	// Attribute AccountType: The type of the account.
	AttrAccountType() interface{}
	// Attribute CreateTime: The point in time when the account was created.
	AttrCreateTime() interface{}
	// Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
	AttrDbInstanceId() interface{}
	// Attribute PolarDBXAccountName: The username of the account.
	AttrPolarDbxAccountName() interface{}
	Props() *AccountProps
}

// The jsii proxy for IAccount
type jsiiProxy_IAccount struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccount) AttrAccountDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountDescription",
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

func (j *jsiiProxy_IAccount) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrPolarDbxAccountName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolarDbxAccountName",
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

