package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdrds/datasource/internal"
)

// Represents a `Accounts`.
type IAccounts interface {
	alicloudroscdkcore.IResource
	// Attribute Accounts: Indicates the information about the instance accounts.
	AttrAccounts() interface{}
	// Attribute DrdsAccountNames: Indicates the username of an instance accounts.
	AttrDrdsAccountNames() interface{}
	Props() *AccountsProps
}

// The jsii proxy for IAccounts
type jsiiProxy_IAccounts struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccounts) AttrAccounts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccounts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccounts) AttrDrdsAccountNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDrdsAccountNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccounts) Props() *AccountsProps {
	var returns *AccountsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

