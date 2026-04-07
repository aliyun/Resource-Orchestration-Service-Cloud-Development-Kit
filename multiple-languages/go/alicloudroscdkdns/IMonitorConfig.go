package alicloudroscdkdns

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdns/internal"
)

// Represents a `MonitorConfig`.
type IMonitorConfig interface {
	alicloudroscdkcore.IResource
	// Attribute MonitorConfigId: The ID of the monitor config.
	AttrMonitorConfigId() interface{}
	Props() *MonitorConfigProps
}

// The jsii proxy for IMonitorConfig
type jsiiProxy_IMonitorConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMonitorConfig) AttrMonitorConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMonitorConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorConfig) Props() *MonitorConfigProps {
	var returns *MonitorConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

