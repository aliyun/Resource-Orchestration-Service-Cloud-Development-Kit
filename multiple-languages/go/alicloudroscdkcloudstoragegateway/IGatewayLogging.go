package alicloudroscdkcloudstoragegateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudstoragegateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `GatewayLogging`.
type IGatewayLogging interface {
	alicloudroscdkcore.IResource
	Props() *GatewayLoggingProps
}

// The jsii proxy for IGatewayLogging
type jsiiProxy_IGatewayLogging struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGatewayLogging) Props() *GatewayLoggingProps {
	var returns *GatewayLoggingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

