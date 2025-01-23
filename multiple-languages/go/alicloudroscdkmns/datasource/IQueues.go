package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmns/datasource/internal"
)

// Represents a `Queues`.
type IQueues interface {
	alicloudroscdkcore.IResource
	// Attribute QueueNames: The list of queue names.
	AttrQueueNames() interface{}
	// Attribute Queues: The list of queues.
	AttrQueues() interface{}
	Props() *QueuesProps
}

// The jsii proxy for IQueues
type jsiiProxy_IQueues struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IQueues) AttrQueueNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueueNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueues) AttrQueues() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueues",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueues) Props() *QueuesProps {
	var returns *QueuesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

