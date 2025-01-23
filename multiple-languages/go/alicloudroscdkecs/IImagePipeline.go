package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `ImagePipeline`.
type IImagePipeline interface {
	alicloudroscdkcore.IResource
	// Attribute ImagePipelineId: The ID of the image template.
	AttrImagePipelineId() interface{}
	Props() *ImagePipelineProps
}

// The jsii proxy for IImagePipeline
type jsiiProxy_IImagePipeline struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IImagePipeline) AttrImagePipelineId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImagePipelineId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImagePipeline) Props() *ImagePipelineProps {
	var returns *ImagePipelineProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

