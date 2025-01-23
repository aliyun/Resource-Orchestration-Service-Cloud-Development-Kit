package alicloudroscdkconfig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkconfig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `DeliveryChannel`.
type IDeliveryChannel interface {
	alicloudroscdkcore.IResource
	// Attribute DeliveryChannelId: The ID of the delivery method.
	AttrDeliveryChannelId() interface{}
	Props() *DeliveryChannelProps
}

// The jsii proxy for IDeliveryChannel
type jsiiProxy_IDeliveryChannel struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDeliveryChannel) AttrDeliveryChannelId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeliveryChannelId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeliveryChannel) Props() *DeliveryChannelProps {
	var returns *DeliveryChannelProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

