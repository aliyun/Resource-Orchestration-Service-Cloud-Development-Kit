package alicloudroscdkros

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/internal"
)

// Represents a `Sleep`.
type ISleep interface {
	alicloudroscdkcore.IResource
	Props() *SleepProps
}

// The jsii proxy for ISleep
type jsiiProxy_ISleep struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISleep) Props() *SleepProps {
	var returns *SleepProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

