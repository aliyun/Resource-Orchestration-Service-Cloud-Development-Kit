package alicloudroscdkmns

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmns/internal"
)

// Represents a `Queue`.
type IQueue interface {
	alicloudroscdkcore.IResource
	// Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName.
	AttrArnWithSlash() interface{}
	// Attribute QueueName: Queue name.
	AttrQueueName() interface{}
	// Attribute QueueUrl: URL of created queue.
	AttrQueueUrl() interface{}
	Props() *QueueProps
}

// The jsii proxy for IQueue
type jsiiProxy_IQueue struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IQueue) AttrArnWithSlash() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArnWithSlash",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IQueue) AttrQueueUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueueUrl",
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

