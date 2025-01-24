package alicloudroscdkdevops

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdevops/internal"
)

// Represents a `PipelineRelations`.
type IPipelineRelations interface {
	alicloudroscdkcore.IResource
	Props() *PipelineRelationsProps
}

// The jsii proxy for IPipelineRelations
type jsiiProxy_IPipelineRelations struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPipelineRelations) Props() *PipelineRelationsProps {
	var returns *PipelineRelationsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

