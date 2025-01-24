package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc/datasource/internal"
)

// Represents a `Aliases`.
type IAliases interface {
	alicloudroscdkcore.IResource
	// Attribute Aliases: The list of aliases.
	AttrAliases() interface{}
	// Attribute AliasNames: The list of alias names.
	AttrAliasNames() interface{}
	Props() *AliasesProps
}

// The jsii proxy for IAliases
type jsiiProxy_IAliases struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAliases) AttrAliases() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAliases",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAliases) AttrAliasNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAliasNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAliases) Props() *AliasesProps {
	var returns *AliasesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

