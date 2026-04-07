package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `EnvServiceMonitor`.
type IEnvServiceMonitor interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigYaml: The YAML configuration string of the ServiceMonitor.
	AttrConfigYaml() interface{}
	// Attribute EnvironmentId: The ID of the environment instance.
	AttrEnvironmentId() interface{}
	// Attribute EnvServiceMonitorName: The name of the ServiceMonitor.
	AttrEnvServiceMonitorName() interface{}
	// Attribute Namespace: The namespace of the ServiceMonitor.
	AttrNamespace() interface{}
	Props() *EnvServiceMonitorProps
}

// The jsii proxy for IEnvServiceMonitor
type jsiiProxy_IEnvServiceMonitor struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnvServiceMonitor) AttrConfigYaml() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigYaml",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvServiceMonitor) AttrEnvironmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvServiceMonitor) AttrEnvServiceMonitorName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvServiceMonitorName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvServiceMonitor) AttrNamespace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvServiceMonitor) Props() *EnvServiceMonitorProps {
	var returns *EnvServiceMonitorProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

