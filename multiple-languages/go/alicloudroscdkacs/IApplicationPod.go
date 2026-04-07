package alicloudroscdkacs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkacs/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ApplicationPod`.
type IApplicationPod interface {
	alicloudroscdkcore.IResource
	Props() *ApplicationPodProps
}

// The jsii proxy for IApplicationPod
type jsiiProxy_IApplicationPod struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplicationPod) Props() *ApplicationPodProps {
	var returns *ApplicationPodProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

