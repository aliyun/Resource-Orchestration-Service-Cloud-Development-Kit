package alicloudroscdkrocketmq

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrocketmq/internal"
)

// Represents a `Topic`.
type ITopic interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() interface{}
	// Attribute MessageType: The type of the message.
	AttrMessageType() interface{}
	// Attribute Topic: The name of the topic.
	AttrTopic() interface{}
	Props() *TopicProps
}

// The jsii proxy for ITopic
type jsiiProxy_ITopic struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITopic) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopic) AttrMessageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMessageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopic) AttrTopic() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTopic",
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

