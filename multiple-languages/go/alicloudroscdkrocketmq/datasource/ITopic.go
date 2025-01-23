package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrocketmq/datasource/internal"
)

// Represents a `Topic`.
type ITopic interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the topic was created.
	AttrCreateTime() interface{}
	// Attribute InstanceId: The ID of the instance to which the topic belongs.
	AttrInstanceId() interface{}
	// Attribute MessageType: The message type of the topic.
	AttrMessageType() interface{}
	// Attribute Remark: The remarks on the topic.
	AttrRemark() interface{}
	// Attribute TopicName: The name of the topic.
	AttrTopicName() interface{}
	// Attribute UpdateTime: The time when the topic was last updated.
	AttrUpdateTime() interface{}
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

func (j *jsiiProxy_ITopic) AttrRemark() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemark",
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

func (j *jsiiProxy_ITopic) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
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

