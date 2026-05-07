package alicloudroscdkrocketmq5

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrocketmq5/internal"
)

// Represents a `Account`.
type IAccount interface {
	alicloudroscdkcore.IResource
	// Attribute AccountStatus: Account Status.
	AttrAccountStatus() interface{}
	// Attribute Password: Account password.
	AttrPassword() interface{}
	// Attribute Username: Account Name.
	AttrUsername() interface{}
	Props() *AccountProps
}

// The jsii proxy for IAccount
type jsiiProxy_IAccount struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccount) AttrAccountStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrPassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrUsername() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUsername",
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

