package alicloudroscdkadb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkadb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Account`.
type IAccount interface {
	alicloudroscdkcore.IResource
	// Attribute AccountName: The name of the account.
	AttrAccountName() interface{}
	// Attribute AccountType: The type of the account.
	AttrAccountType() interface{}
	// Attribute DBClusterId: The ID of the cluster.
	AttrDbClusterId() interface{}
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

func (j *jsiiProxy_IAccount) AttrAccountType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrDbClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterId",
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

