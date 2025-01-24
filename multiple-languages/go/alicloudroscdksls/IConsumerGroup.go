package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `ConsumerGroup`.
type IConsumerGroup interface {
	alicloudroscdkcore.IResource
	// Attribute ConsumerGroup: The name of the consumer group.
	AttrConsumerGroup() interface{}
	// Attribute Logstore: The name of the logstore to which this consumer group belongs.
	AttrLogstore() interface{}
	// Attribute Project: The name of the project to which the logstore belongs.
	AttrProject() interface{}
	Props() *ConsumerGroupProps
}

// The jsii proxy for IConsumerGroup
type jsiiProxy_IConsumerGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConsumerGroup) AttrConsumerGroup() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsumerGroup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerGroup) AttrLogstore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogstore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerGroup) AttrProject() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProject",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerGroup) Props() *ConsumerGroupProps {
	var returns *ConsumerGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

