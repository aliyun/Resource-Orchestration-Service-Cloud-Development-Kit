package alicloudroscdkdevops

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdevops/internal"
)

// Represents a `PipelineRun`.
type IPipelineRun interface {
	alicloudroscdkcore.IResource
	// Attribute PipelineRunId: Pipeline run id.
	AttrPipelineRunId() interface{}
	Props() *PipelineRunProps
}

// The jsii proxy for IPipelineRun
type jsiiProxy_IPipelineRun struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPipelineRun) AttrPipelineRunId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPipelineRunId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPipelineRun) Props() *PipelineRunProps {
	var returns *PipelineRunProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

