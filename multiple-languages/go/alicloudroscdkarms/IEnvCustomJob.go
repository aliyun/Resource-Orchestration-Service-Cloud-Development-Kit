package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `EnvCustomJob`.
type IEnvCustomJob interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigYaml: The YAML configuration string of the custom job.
	AttrConfigYaml() interface{}
	// Attribute EnvCustomJobName: The name of the custom job.
	AttrEnvCustomJobName() interface{}
	// Attribute EnvironmentId: The ID of the environment instance.
	AttrEnvironmentId() interface{}
	Props() *EnvCustomJobProps
}

// The jsii proxy for IEnvCustomJob
type jsiiProxy_IEnvCustomJob struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnvCustomJob) AttrConfigYaml() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigYaml",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvCustomJob) AttrEnvCustomJobName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvCustomJobName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvCustomJob) AttrEnvironmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvCustomJob) Props() *EnvCustomJobProps {
	var returns *EnvCustomJobProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

