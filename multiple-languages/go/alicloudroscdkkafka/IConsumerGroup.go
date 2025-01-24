package alicloudroscdkkafka

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkafka/internal"
)

// Represents a `ConsumerGroup`.
type IConsumerGroup interface {
	alicloudroscdkcore.IResource
	// Attribute ConsumerId: Consumer group ID.
	AttrConsumerId() interface{}
	Props() *ConsumerGroupProps
}

// The jsii proxy for IConsumerGroup
type jsiiProxy_IConsumerGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConsumerGroup) AttrConsumerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsumerId",
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

