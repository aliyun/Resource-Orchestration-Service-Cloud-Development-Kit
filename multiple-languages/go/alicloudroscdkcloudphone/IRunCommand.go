package alicloudroscdkcloudphone

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudphone/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `RunCommand`.
type IRunCommand interface {
	alicloudroscdkcore.IResource
	Props() *RunCommandProps
}

// The jsii proxy for IRunCommand
type jsiiProxy_IRunCommand struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRunCommand) Props() *RunCommandProps {
	var returns *RunCommandProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

