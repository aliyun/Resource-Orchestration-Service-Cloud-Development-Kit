package alicloudroscdkgraphdatabase

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgraphdatabase/internal"
)

// Represents a `Account`.
type IAccount interface {
	alicloudroscdkcore.IResource
	// Attribute AccountDescription: Account description.
	AttrAccountDescription() interface{}
	// Attribute AccountName: Account name.
	AttrAccountName() interface{}
	// Attribute AccountType: Account Type.
	AttrAccountType() interface{}
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

func (j *jsiiProxy_IAccount) AttrAccountName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountName",
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

func (j *jsiiProxy_IAccount) Props() *AccountProps {
	var returns *AccountProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

