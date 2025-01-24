package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/datasource/internal"
)

// Represents a `AccountAlias`.
type IAccountAlias interface {
	alicloudroscdkcore.IResource
	// Attribute AccountAlias: Account alias.
	AttrAccountAlias() interface{}
	Props() *AccountAliasProps
}

// The jsii proxy for IAccountAlias
type jsiiProxy_IAccountAlias struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccountAlias) AttrAccountAlias() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccountAlias) Props() *AccountAliasProps {
	var returns *AccountAliasProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

