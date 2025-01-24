package alicloudroscdkgpdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
)

// Represents a `Account`.
type IAccount interface {
	alicloudroscdkcore.IResource
	// Attribute AccountName: The name of the account.
	AttrAccountName() interface{}
	// Attribute DBInstanceId: The ID of the instance.
	AttrDbInstanceId() interface{}
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

func (j *jsiiProxy_IAccount) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
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

