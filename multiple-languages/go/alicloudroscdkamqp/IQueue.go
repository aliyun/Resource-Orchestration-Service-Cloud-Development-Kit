package alicloudroscdkamqp

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkamqp/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Queue`.
type IQueue interface {
	alicloudroscdkcore.IResource
	// Attribute QueueName: The name of the queue.
	AttrQueueName() interface{}
	Props() *QueueProps
}

// The jsii proxy for IQueue
type jsiiProxy_IQueue struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IQueue) AttrQueueName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueueName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) Props() *QueueProps {
	var returns *QueueProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

