package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TrafficControlBinding`.
type ITrafficControlBinding interface {
	alicloudroscdkcore.IResource
	Props() *TrafficControlBindingProps
}

// The jsii proxy for ITrafficControlBinding
type jsiiProxy_ITrafficControlBinding struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrafficControlBinding) Props() *TrafficControlBindingProps {
	var returns *TrafficControlBindingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

