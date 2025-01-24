package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkafka/datasource/internal"
)

// Represents a `Topic`.
type ITopic interface {
	alicloudroscdkcore.IResource
	// Attribute CompactTopic: Can log merge.
	AttrCompactTopic() interface{}
	// Attribute CreateTime: Creation time.
	AttrCreateTime() interface{}
	// Attribute InstanceId: Resource id.
	AttrInstanceId() interface{}
	// Attribute LocalTopic: Whether to store locally.
	AttrLocalTopic() interface{}
	// Attribute PartitionNum: Number of partitions.
	AttrPartitionNum() interface{}
	// Attribute Remark: Remarks.
	AttrRemark() interface{}
	// Attribute StatusName: Meaning of status value.
	AttrStatusName() interface{}
	// Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
	AttrTags() interface{}
	// Attribute Topic: Topic Name.
	AttrTopic() interface{}
	// Attribute TopicStatus: The Topic status.
	AttrTopicStatus() interface{}
	Props() *TopicProps
}

// The jsii proxy for ITopic
type jsiiProxy_ITopic struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITopic) AttrCompactTopic() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCompactTopic",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_ITopic) AttrLocalTopic() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLocalTopic",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopic) AttrPartitionNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPartitionNum",
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

func (j *jsiiProxy_ITopic) AttrStatusName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatusName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITopic) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
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

func (j *jsiiProxy_ITopic) AttrTopicStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTopicStatus",
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

