package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrocketmq5/datasource/internal"
)

// Represents a `ConsumerGroups`.
type IConsumerGroups interface {
	alicloudroscdkcore.IResource
	// Attribute ConsumerGroupIds: The list of consumer group IDs.
	AttrConsumerGroupIds() interface{}
	// Attribute ConsumerGroups: The list of consumer groups.
	AttrConsumerGroups() interface{}
	Props() *ConsumerGroupsProps
}

// The jsii proxy for IConsumerGroups
type jsiiProxy_IConsumerGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConsumerGroups) AttrConsumerGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsumerGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerGroups) AttrConsumerGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsumerGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerGroups) Props() *ConsumerGroupsProps {
	var returns *ConsumerGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

