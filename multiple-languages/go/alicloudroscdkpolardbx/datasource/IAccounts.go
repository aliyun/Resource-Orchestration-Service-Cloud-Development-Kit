package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardbx/datasource/internal"
)

// Represents a `Accounts`.
type IAccounts interface {
	alicloudroscdkcore.IResource
	// Attribute PolarDBXAccountNames: The list of PolarDB-X 2.0 account names.
	AttrPolarDbxAccountNames() interface{}
	// Attribute PolarDBXAccounts: The list of PolarDB-X 2.0 accounts.
	AttrPolarDbxAccounts() interface{}
	Props() *AccountsProps
}

// The jsii proxy for IAccounts
type jsiiProxy_IAccounts struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccounts) AttrPolarDbxAccountNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolarDbxAccountNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccounts) AttrPolarDbxAccounts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolarDbxAccounts",
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

