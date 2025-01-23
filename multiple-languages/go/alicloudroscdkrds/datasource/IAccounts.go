package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/datasource/internal"
)

// Represents a `Accounts`.
type IAccounts interface {
	alicloudroscdkcore.IResource
	// Attribute AccountNames: The list of The RDS account names.
	AttrAccountNames() interface{}
	// Attribute Accounts: The list of The RDS accounts.
	AttrAccounts() interface{}
	Props() *AccountsProps
}

// The jsii proxy for IAccounts
type jsiiProxy_IAccounts struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccounts) AttrAccountNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountNames",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IAccounts) Props() *AccountsProps {
	var returns *AccountsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

