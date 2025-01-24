package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/datasource/internal"
)

// Represents a `SynchronizationJobs`.
type ISynchronizationJobs interface {
	alicloudroscdkcore.IResource
	// Attribute DtsInstanceIds: The list of dts instance IDs.
	AttrDtsInstanceIds() interface{}
	// Attribute SynchronizationInstances: The list of synchronization instances.
	AttrSynchronizationInstances() interface{}
	Props() *SynchronizationJobsProps
}

// The jsii proxy for ISynchronizationJobs
type jsiiProxy_ISynchronizationJobs struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISynchronizationJobs) AttrDtsInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynchronizationJobs) AttrSynchronizationInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSynchronizationInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynchronizationJobs) Props() *SynchronizationJobsProps {
	var returns *SynchronizationJobsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

