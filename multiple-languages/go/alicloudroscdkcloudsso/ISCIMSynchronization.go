package alicloudroscdkcloudsso

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsso/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `SCIMSynchronization`.
type ISCIMSynchronization interface {
	alicloudroscdkcore.IResource
	Props() *SCIMSynchronizationProps
}

// The jsii proxy for ISCIMSynchronization
type jsiiProxy_ISCIMSynchronization struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISCIMSynchronization) Props() *SCIMSynchronizationProps {
	var returns *SCIMSynchronizationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

