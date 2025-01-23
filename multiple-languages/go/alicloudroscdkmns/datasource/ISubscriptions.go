package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmns/datasource/internal"
)

// Represents a `Subscriptions`.
type ISubscriptions interface {
	alicloudroscdkcore.IResource
	// Attribute SubscriptionIds: The list of subscription names.
	AttrSubscriptionIds() interface{}
	// Attribute Subscriptions: The list of subscriptions.
	AttrSubscriptions() interface{}
	Props() *SubscriptionsProps
}

// The jsii proxy for ISubscriptions
type jsiiProxy_ISubscriptions struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISubscriptions) AttrSubscriptionIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSubscriptionIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscriptions) AttrSubscriptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSubscriptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISubscriptions) Props() *SubscriptionsProps {
	var returns *SubscriptionsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

