package alicloudroscdkdts

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/internal"
)

// Represents a `ConsumerGroup`.
type IConsumerGroup interface {
	alicloudroscdkcore.IResource
	// Attribute ConsumerGroupID: Consumer group ID.
	AttrConsumerGroupId() interface{}
	// Attribute ConsumerGroupName: Consumer group name.
	AttrConsumerGroupName() interface{}
	// Attribute SubscriptionInstanceId: Subscription instance ID.
	AttrSubscriptionInstanceId() interface{}
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

func (j *jsiiProxy_IConsumerGroup) AttrConsumerGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsumerGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerGroup) AttrSubscriptionInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSubscriptionInstanceId",
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

