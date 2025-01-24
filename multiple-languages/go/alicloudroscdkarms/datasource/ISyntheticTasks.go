package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `SyntheticTasks`.
type ISyntheticTasks interface {
	alicloudroscdkcore.IResource
	// Attribute SyntheticTasks: The list of synthetic tasks.
	AttrSyntheticTasks() interface{}
	// Attribute TaskIds: The list of task IDs.
	AttrTaskIds() interface{}
	Props() *SyntheticTasksProps
}

// The jsii proxy for ISyntheticTasks
type jsiiProxy_ISyntheticTasks struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISyntheticTasks) AttrSyntheticTasks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSyntheticTasks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTasks) AttrTaskIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISyntheticTasks) Props() *SyntheticTasksProps {
	var returns *SyntheticTasksProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

