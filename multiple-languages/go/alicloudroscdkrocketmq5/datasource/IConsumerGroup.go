package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrocketmq5/datasource/internal"
)

// Represents a `ConsumerGroup`.
type IConsumerGroup interface {
	alicloudroscdkcore.IResource
	// Attribute ConsumeRetryPolicy: The consumption retry policy that you want to configure for the consumer group.
	AttrConsumeRetryPolicy() interface{}
	// Attribute ConsumerGroupId: The ID of the consumer group.
	AttrConsumerGroupId() interface{}
	// Attribute CreateTime: The time when the consumer group was created.
	AttrCreateTime() interface{}
	// Attribute DeliveryOrderType: The message delivery order of the consumer group.
	AttrDeliveryOrderType() interface{}
	// Attribute InstanceId: The ID of the RocketMQ instance.
	AttrInstanceId() interface{}
	// Attribute Remark: The remarks on the consumer group.
	AttrRemark() interface{}
	// Attribute Status: The state of the consumer group.
	AttrStatus() interface{}
	// Attribute UpdateTime: The time when the consumer group was last updated.
	AttrUpdateTime() interface{}
	Props() *ConsumerGroupProps
}

// The jsii proxy for IConsumerGroup
type jsiiProxy_IConsumerGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConsumerGroup) AttrConsumeRetryPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsumeRetryPolicy",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IConsumerGroup) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
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

func (j *jsiiProxy_IConsumerGroup) AttrRemark() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemark",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerGroup) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerGroup) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
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

