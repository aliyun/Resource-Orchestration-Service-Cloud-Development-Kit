package alicloudroscdkkms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkms/internal"
)

// Represents a `Alias`.
type IAlias interface {
	alicloudroscdkcore.IResource
	Props() *AliasProps
}

// The jsii proxy for IAlias
type jsiiProxy_IAlias struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAlias) Props() *AliasProps {
	var returns *AliasProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

