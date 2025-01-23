package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmns/datasource/internal"
)

// Represents a `Subscription`.
type ISubscription interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the subscription was created.
	AttrCreateTime() interface{}
	// Attribute Endpoint: The endpoint that is used by the subscriber to receive messages.
	AttrEndpoint() interface{}
	// Attribute FilterTag: Describes the labels by which messages are filtered in this subscription (only messages with consistent labels are pushed).
	AttrFilterTag() interface{}
	// Attribute LastModifyTime: The time when the subscription was last modified.
	AttrLastModifyTime() interface{}
	// Attribute NotifyContentFormat: The format of the message that is pushed to the endpoint.
	AttrNotifyContentFormat() interface{}
	// Attribute NotifyStrategy: The retry policy that is applied if an error occurs when Message Service (MNS) pushes messages to the endpoint.
	AttrNotifyStrategy() interface{}
	// Attribute SubscriptionName: The name of the subscription.
	AttrSubscriptionName() interface{}
	// Attribute SubscriptionURL: TThe URL of the subscription.
	AttrSubscriptionUrl() interface{}
	// Attribute TopicName: The name of the topic.
	AttrTopicName() interface{}
	// Attribute TopicOwner: The owner of the topic.
	AttrTopicOwner() interface{}
	Props() *SubscriptionProps
}

// The jsii proxy for ISubscription
type jsiiProxy_ISubscription struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISubscription) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscription) AttrEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscription) AttrFilterTag() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFilterTag",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscription) AttrLastModifyTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastModifyTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscription) AttrNotifyContentFormat() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotifyContentFormat",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscription) AttrNotifyStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotifyStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscription) AttrSubscriptionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSubscriptionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscription) AttrSubscriptionUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSubscriptionUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscription) AttrTopicName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTopicName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscription) AttrTopicOwner() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTopicOwner",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscription) Props() *SubscriptionProps {
	var returns *SubscriptionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

