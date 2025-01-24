package alicloudroscdkdevops

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdevops/internal"
)

// Represents a `Pipeline`.
type IPipeline interface {
	alicloudroscdkcore.IResource
	// Attribute PipelineId: Pipeline id.
	AttrPipelineId() interface{}
	Props() *PipelineProps
}

// The jsii proxy for IPipeline
type jsiiProxy_IPipeline struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPipeline) AttrPipelineId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPipelineId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPipeline) Props() *PipelineProps {
	var returns *PipelineProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

