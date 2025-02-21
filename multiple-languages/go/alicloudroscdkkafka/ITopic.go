package alicloudroscdkkafka

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkafka/internal"
)

// Represents a `Topic`.
type ITopic interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
	//
	// You can call the GetInstanceList operation to query instances.
	AttrInstanceId() interface{}
	// Attribute Topic: Topic name.
	AttrTopic() interface{}
	Props() *TopicProps
}

// The jsii proxy for ITopic
type jsiiProxy_ITopic struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITopic) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
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

