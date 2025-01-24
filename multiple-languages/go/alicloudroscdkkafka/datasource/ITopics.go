package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkafka/datasource/internal"
)

// Represents a `Topics`.
type ITopics interface {
	alicloudroscdkcore.IResource
	// Attribute Topics: The list of topics.
	AttrTopics() interface{}
	Props() *TopicsProps
}

// The jsii proxy for ITopics
type jsiiProxy_ITopics struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITopics) AttrTopics() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTopics",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopics) Props() *TopicsProps {
	var returns *TopicsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

