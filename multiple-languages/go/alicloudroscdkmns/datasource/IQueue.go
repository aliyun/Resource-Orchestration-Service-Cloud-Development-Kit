package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmns/datasource/internal"
)

// Represents a `Queue`.
type IQueue interface {
	alicloudroscdkcore.IResource
	// Attribute ActiveMessages: The total number of active messages in the queue.
	AttrActiveMessages() interface{}
	// Attribute CreateTime: The time when the queue was created.
	AttrCreateTime() interface{}
	// Attribute DelayMessages: The total number of delayed messages in the queue.
	AttrDelayMessages() interface{}
	// Attribute DelaySeconds: The delay time after which all messages that are sent to the queue can be consumed.
	AttrDelaySeconds() interface{}
	// Attribute InactiveMessages: The total number of inactive messages in the queue.
	AttrInactiveMessages() interface{}
	// Attribute LastModifyTime: The most recent time when the queue was modified.
	AttrLastModifyTime() interface{}
	// Attribute LoggingEnabled: Specifies whether to enable the log management feature.
	AttrLoggingEnabled() interface{}
	// Attribute MaximumMessageSize: The maximum size of a message that can be sent to the queue.
	AttrMaximumMessageSize() interface{}
	// Attribute MessageRetentionPeriod: The maximum lifetime of a message in the queue.
	//
	// After the time that is specified by this parameter expires, the message is deleted, regardless of whether the message has been consumed.
	AttrMessageRetentionPeriod() interface{}
	// Attribute PollingWaitSeconds: The maximum time period that a ReceiveMessage request can wait till a message is in the queue.
	AttrPollingWaitSeconds() interface{}
	// Attribute QueueInternalUrl: The internal URL of the queue.
	AttrQueueInternalUrl() interface{}
	// Attribute QueueName: The name of the MNS queue.
	AttrQueueName() interface{}
	// Attribute QueueUrl: The URL of the queue.
	AttrQueueUrl() interface{}
	// Attribute VisibilityTimeout: The duration for which a message stays in the Inactive state after it is consumed from the queue.
	AttrVisibilityTimeout() interface{}
	Props() *QueueProps
}

// The jsii proxy for IQueue
type jsiiProxy_IQueue struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IQueue) AttrActiveMessages() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrActiveMessages",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrDelayMessages() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDelayMessages",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrDelaySeconds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDelaySeconds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrInactiveMessages() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInactiveMessages",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrLastModifyTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastModifyTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrLoggingEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoggingEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrMaximumMessageSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaximumMessageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrMessageRetentionPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMessageRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrPollingWaitSeconds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPollingWaitSeconds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrQueueInternalUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueueInternalUrl",
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

func (j *jsiiProxy_IQueue) AttrVisibilityTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVisibilityTimeout",
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

