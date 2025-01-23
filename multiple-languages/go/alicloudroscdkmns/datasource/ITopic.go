package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmns/datasource/internal"
)

// Represents a `Topic`.
type ITopic interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the topic was created.
	AttrCreateTime() interface{}
	// Attribute LastModifyTime: The time when the topic was last modified.
	AttrLastModifyTime() interface{}
	// Attribute LoggingEnabled: Indicates whether the log management feature is enabled for the topic.
	AttrLoggingEnabled() interface{}
	// Attribute MaxMessageSize: The maximum size of a message body that is sent to the topic.
	AttrMaxMessageSize() interface{}
	// Attribute MessageCount: The number of messages in the topic.
	AttrMessageCount() interface{}
	// Attribute MessageRetentionPeriod: The retention period of the message in the topic.
	AttrMessageRetentionPeriod() interface{}
	// Attribute TopicInnerUrl: The internal URL of the topic.
	AttrTopicInnerUrl() interface{}
	// Attribute TopicName: The name of the MNS topic.
	AttrTopicName() interface{}
	// Attribute TopicUrl: The URL of the topic.
	AttrTopicUrl() interface{}
	Props() *TopicProps
}

// The jsii proxy for ITopic
type jsiiProxy_ITopic struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITopic) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopic) AttrLastModifyTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastModifyTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopic) AttrLoggingEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoggingEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopic) AttrMaxMessageSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxMessageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopic) AttrMessageCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMessageCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopic) AttrMessageRetentionPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMessageRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopic) AttrTopicInnerUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTopicInnerUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopic) AttrTopicName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTopicName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopic) AttrTopicUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTopicUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopic) Props() *TopicProps {
	var returns *TopicProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

