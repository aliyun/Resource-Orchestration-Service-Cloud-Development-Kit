package alicloudroscdkfc3

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc3/internal"
)

// Represents a `AsyncInvokeConfig`.
type IAsyncInvokeConfig interface {
	alicloudroscdkcore.IResource
	Props() *AsyncInvokeConfigProps
}

// The jsii proxy for IAsyncInvokeConfig
type jsiiProxy_IAsyncInvokeConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAsyncInvokeConfig) Props() *AsyncInvokeConfigProps {
	var returns *AsyncInvokeConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

