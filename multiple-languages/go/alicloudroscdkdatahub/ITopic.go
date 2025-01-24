package alicloudroscdkdatahub

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdatahub/internal"
)

// Represents a `Topic`.
type ITopic interface {
	alicloudroscdkcore.IResource
	// Attribute ProjectName: Project name.
	AttrProjectName() interface{}
	// Attribute TopicName: Topic name.
	AttrTopicName() interface{}
	Props() *TopicProps
}

// The jsii proxy for ITopic
type jsiiProxy_ITopic struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITopic) AttrProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectName",
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

func (j *jsiiProxy_ITopic) Props() *TopicProps {
	var returns *TopicProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

