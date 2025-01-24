package alicloudroscdkmns

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmns/internal"
)

// Represents a `Subscription`.
type ISubscription interface {
	alicloudroscdkcore.IResource
	// Attribute SubscriptionName: Subscription name.
	AttrSubscriptionName() interface{}
	// Attribute SubscriptionUrl: URL of created subscription.
	AttrSubscriptionUrl() interface{}
	// Attribute TopicName: Topic name.
	AttrTopicName() interface{}
	Props() *SubscriptionProps
}

// The jsii proxy for ISubscription
type jsiiProxy_ISubscription struct {
	internal.Type__alicloudroscdkcoreIResource
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

func (j *jsiiProxy_ISubscription) Props() *SubscriptionProps {
	var returns *SubscriptionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

