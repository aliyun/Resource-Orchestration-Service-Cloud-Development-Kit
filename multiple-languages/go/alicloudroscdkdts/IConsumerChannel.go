package alicloudroscdkdts

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/internal"
)

// Represents a `ConsumerChannel`.
type IConsumerChannel interface {
	alicloudroscdkcore.IResource
	// Attribute ConsumerGroupId: Consumer group ID.
	AttrConsumerGroupId() interface{}
	// Attribute ConsumerGroupName: Consumer group name.
	AttrConsumerGroupName() interface{}
	// Attribute ConsumerGroupUserName: Consumer group username.
	AttrConsumerGroupUserName() interface{}
	// Attribute DtsInstanceId: DTS instance ID.
	AttrDtsInstanceId() interface{}
	// Attribute DtsJobId: DTS job ID.
	AttrDtsJobId() interface{}
	Props() *ConsumerChannelProps
}

// The jsii proxy for IConsumerChannel
type jsiiProxy_IConsumerChannel struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConsumerChannel) AttrConsumerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsumerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerChannel) AttrConsumerGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsumerGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerChannel) AttrConsumerGroupUserName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsumerGroupUserName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerChannel) AttrDtsInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerChannel) AttrDtsJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerChannel) Props() *ConsumerChannelProps {
	var returns *ConsumerChannelProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

