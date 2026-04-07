package alicloudroscdkcdn

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcdn/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `FcTrigger`.
type IFcTrigger interface {
	alicloudroscdkcore.IResource
	Props() *FcTriggerProps
}

// The jsii proxy for IFcTrigger
type jsiiProxy_IFcTrigger struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFcTrigger) Props() *FcTriggerProps {
	var returns *FcTriggerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

