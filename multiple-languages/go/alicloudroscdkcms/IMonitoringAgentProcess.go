package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `MonitoringAgentProcess`.
type IMonitoringAgentProcess interface {
	alicloudroscdkcore.IResource
	// Attribute Id: The process ID.
	AttrId() interface{}
	Props() *MonitoringAgentProcessProps
}

// The jsii proxy for IMonitoringAgentProcess
type jsiiProxy_IMonitoringAgentProcess struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMonitoringAgentProcess) AttrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitoringAgentProcess) Props() *MonitoringAgentProcessProps {
	var returns *MonitoringAgentProcessProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

