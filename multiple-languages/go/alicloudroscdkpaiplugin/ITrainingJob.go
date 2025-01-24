package alicloudroscdkpaiplugin

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpaiplugin/internal"
)

// Represents a `TrainingJob`.
type ITrainingJob interface {
	alicloudroscdkcore.IResource
	// Attribute TrainingJobId: The training job id.
	AttrTrainingJobId() interface{}
	Props() *TrainingJobProps
}

// The jsii proxy for ITrainingJob
type jsiiProxy_ITrainingJob struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrainingJob) AttrTrainingJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrainingJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrainingJob) Props() *TrainingJobProps {
	var returns *TrainingJobProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

