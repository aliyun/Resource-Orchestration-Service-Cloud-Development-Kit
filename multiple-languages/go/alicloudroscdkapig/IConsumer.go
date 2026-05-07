package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Consumer`.
type IConsumer interface {
	alicloudroscdkcore.IResource
	// Attribute ConsumerId: The ID of the consumer.
	AttrConsumerId() interface{}
	Props() *ConsumerProps
}

// The jsii proxy for IConsumer
type jsiiProxy_IConsumer struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConsumer) AttrConsumerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsumerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumer) Props() *ConsumerProps {
	var returns *ConsumerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

