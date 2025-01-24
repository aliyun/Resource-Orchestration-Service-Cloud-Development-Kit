package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `MonitoringAgent`.
type IMonitoringAgent interface {
	alicloudroscdkcore.IResource
	Props() *MonitoringAgentProps
}

// The jsii proxy for IMonitoringAgent
type jsiiProxy_IMonitoringAgent struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMonitoringAgent) Props() *MonitoringAgentProps {
	var returns *MonitoringAgentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

