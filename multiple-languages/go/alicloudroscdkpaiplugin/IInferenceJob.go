package alicloudroscdkpaiplugin

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpaiplugin/internal"
)

// Represents a `InferenceJob`.
type IInferenceJob interface {
	alicloudroscdkcore.IResource
	// Attribute GroupId: The related group id of infernce job result.
	AttrGroupId() interface{}
	// Attribute InferenceJobId: The id of inference job.
	AttrInferenceJobId() interface{}
	Props() *InferenceJobProps
}

// The jsii proxy for IInferenceJob
type jsiiProxy_IInferenceJob struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInferenceJob) AttrGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInferenceJob) AttrInferenceJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInferenceJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInferenceJob) Props() *InferenceJobProps {
	var returns *InferenceJobProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

