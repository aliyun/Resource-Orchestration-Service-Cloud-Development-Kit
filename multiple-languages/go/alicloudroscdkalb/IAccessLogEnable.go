package alicloudroscdkalb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkalb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AccessLogEnable`.
type IAccessLogEnable interface {
	alicloudroscdkcore.IResource
	Props() *AccessLogEnableProps
}

// The jsii proxy for IAccessLogEnable
type jsiiProxy_IAccessLogEnable struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessLogEnable) Props() *AccessLogEnableProps {
	var returns *AccessLogEnableProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

