package alicloudroscdkbss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbss/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `WaitOrder`.
type IWaitOrder interface {
	alicloudroscdkcore.IResource
	Props() *WaitOrderProps
}

// The jsii proxy for IWaitOrder
type jsiiProxy_IWaitOrder struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWaitOrder) Props() *WaitOrderProps {
	var returns *WaitOrderProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

