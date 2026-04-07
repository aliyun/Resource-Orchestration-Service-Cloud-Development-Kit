package alicloudroscdkmps

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmps/internal"
)

// Represents a `TranscodeJob`.
type ITranscodeJob interface {
	alicloudroscdkcore.IResource
	// Attribute JobIds: The IDs of the jobs.
	AttrJobIds() interface{}
	Props() *TranscodeJobProps
}

// The jsii proxy for ITranscodeJob
type jsiiProxy_ITranscodeJob struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITranscodeJob) AttrJobIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJobIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITranscodeJob) Props() *TranscodeJobProps {
	var returns *TranscodeJobProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

