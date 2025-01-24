package alicloudroscdkpaidlc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpaidlc/internal"
)

// Represents a `Job`.
type IJob interface {
	alicloudroscdkcore.IResource
	// Attribute JobId: The task ID created this time.
	AttrJobId() interface{}
	Props() *JobProps
}

// The jsii proxy for IJob
type jsiiProxy_IJob struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IJob) AttrJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IJob) Props() *JobProps {
	var returns *JobProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

