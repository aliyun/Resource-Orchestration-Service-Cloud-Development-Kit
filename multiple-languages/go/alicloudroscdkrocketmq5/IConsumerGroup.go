package alicloudroscdkrocketmq5

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrocketmq5/internal"
)

// Represents a `ConsumerGroup`.
type IConsumerGroup interface {
	alicloudroscdkcore.IResource
	// Attribute ConsumerGroupId: The ID of the consumer group.
	AttrConsumerGroupId() interface{}
	// Attribute DeliveryOrderType: Delivery sequence of consumer group.
	AttrDeliveryOrderType() interface{}
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() interface{}
	Props() *ConsumerGroupProps
}

// The jsii proxy for IConsumerGroup
type jsiiProxy_IConsumerGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConsumerGroup) AttrConsumerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsumerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerGroup) AttrDeliveryOrderType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeliveryOrderType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerGroup) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
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

