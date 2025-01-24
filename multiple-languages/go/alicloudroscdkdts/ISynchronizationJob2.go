package alicloudroscdkdts

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/internal"
)

// Represents a `SynchronizationJob2`.
type ISynchronizationJob2 interface {
	alicloudroscdkcore.IResource
	// Attribute DtsInstanceId: The ID of the DTS instance.
	AttrDtsInstanceId() interface{}
	// Attribute DtsJobId: The ID of the task.
	AttrDtsJobId() interface{}
	// Attribute DtsJobName: The name of the DTS job.
	AttrDtsJobName() interface{}
	Props() *SynchronizationJob2Props
}

// The jsii proxy for ISynchronizationJob2
type jsiiProxy_ISynchronizationJob2 struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISynchronizationJob2) AttrDtsInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynchronizationJob2) AttrDtsJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynchronizationJob2) AttrDtsJobName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsJobName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynchronizationJob2) Props() *SynchronizationJob2Props {
	var returns *SynchronizationJob2Props
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

