package alicloudroscdkmns

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmns/internal"
)

// Represents a `Topic`.
type ITopic interface {
	alicloudroscdkcore.IResource
	// Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName.
	AttrArnWithSlash() interface{}
	// Attribute TopicName: Topic name.
	AttrTopicName() interface{}
	// Attribute TopicUrl: URL of created topic.
	AttrTopicUrl() interface{}
	Props() *TopicProps
}

// The jsii proxy for ITopic
type jsiiProxy_ITopic struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITopic) AttrArnWithSlash() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArnWithSlash",
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

