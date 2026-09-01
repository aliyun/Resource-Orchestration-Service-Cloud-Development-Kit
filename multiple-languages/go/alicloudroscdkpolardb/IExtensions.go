package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `Extensions`.
type IExtensions interface {
	alicloudroscdkcore.IResource
	Props() *ExtensionsProps
}

// The jsii proxy for IExtensions
type jsiiProxy_IExtensions struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IExtensions) Props() *ExtensionsProps {
	var returns *ExtensionsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

