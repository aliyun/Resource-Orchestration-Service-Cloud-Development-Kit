package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `RamAccountAlias`.
type IRamAccountAlias interface {
	alicloudroscdkcore.IResource
	// Attribute AccountAlias: The alias of the Alibaba Cloud account.
	AttrAccountAlias() interface{}
	Props() *RamAccountAliasProps
}

// The jsii proxy for IRamAccountAlias
type jsiiProxy_IRamAccountAlias struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRamAccountAlias) AttrAccountAlias() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRamAccountAlias) Props() *RamAccountAliasProps {
	var returns *RamAccountAliasProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

