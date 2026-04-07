package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `EnvPodMonitor`.
type IEnvPodMonitor interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigYaml: The YAML configuration string of the PodMonitor.
	AttrConfigYaml() interface{}
	// Attribute EnvironmentId: The ID of the environment instance.
	AttrEnvironmentId() interface{}
	// Attribute EnvPodMonitorName: The name of the PodMonitor.
	AttrEnvPodMonitorName() interface{}
	// Attribute Namespace: The namespace of the PodMonitor.
	AttrNamespace() interface{}
	Props() *EnvPodMonitorProps
}

// The jsii proxy for IEnvPodMonitor
type jsiiProxy_IEnvPodMonitor struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnvPodMonitor) AttrConfigYaml() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigYaml",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvPodMonitor) AttrEnvironmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvPodMonitor) AttrEnvPodMonitorName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvPodMonitorName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvPodMonitor) AttrNamespace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvPodMonitor) Props() *EnvPodMonitorProps {
	var returns *EnvPodMonitorProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

