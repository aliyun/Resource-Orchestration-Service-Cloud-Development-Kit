package alicloudroscdkadblake

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkadblake/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Account`.
type IAccount interface {
	alicloudroscdkcore.IResource
	// Attribute AccountName: The name of the account.
	AttrAccountName() interface{}
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

func (j *jsiiProxy_IAccount) Props() *AccountProps {
	var returns *AccountProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

