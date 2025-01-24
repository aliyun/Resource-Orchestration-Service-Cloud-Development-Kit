package alicloudroscdkiot

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkiot/internal"
)

// Represents a `ProductTopic`.
type IProductTopic interface {
	alicloudroscdkcore.IResource
	// Attribute TopicId: Topic ID.
	AttrTopicId() interface{}
	Props() *ProductTopicProps
}

// The jsii proxy for IProductTopic
type jsiiProxy_IProductTopic struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProductTopic) AttrTopicId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTopicId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProductTopic) Props() *ProductTopicProps {
	var returns *ProductTopicProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

