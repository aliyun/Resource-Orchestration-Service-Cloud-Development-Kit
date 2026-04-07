package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `MultiAccountDeliveryChannel`.
type IMultiAccountDeliveryChannel interface {
	alicloudroscdkcore.IResource
	// Attribute DeliveryChannelDescription: The description of the delivery channel.
	AttrDeliveryChannelDescription() interface{}
	// Attribute DeliveryChannelFilter: The effective scope of the delivery channel.
	AttrDeliveryChannelFilter() interface{}
	// Attribute MultiAccountDeliveryChannelId: The delivery channel ID.
	AttrMultiAccountDeliveryChannelId() interface{}
	// Attribute MultiAccountDeliveryChannelName: The name of the delivery channel.
	AttrMultiAccountDeliveryChannelName() interface{}
	// Attribute ResourceChangeDelivery: The configurations for delivery of resource configuration change events.
	AttrResourceChangeDelivery() interface{}
	// Attribute ResourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
	AttrResourceSnapshotDelivery() interface{}
	Props() *MultiAccountDeliveryChannelProps
}

// The jsii proxy for IMultiAccountDeliveryChannel
type jsiiProxy_IMultiAccountDeliveryChannel struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMultiAccountDeliveryChannel) AttrDeliveryChannelDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeliveryChannelDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiAccountDeliveryChannel) AttrDeliveryChannelFilter() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeliveryChannelFilter",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiAccountDeliveryChannel) AttrMultiAccountDeliveryChannelId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMultiAccountDeliveryChannelId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiAccountDeliveryChannel) AttrMultiAccountDeliveryChannelName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMultiAccountDeliveryChannelName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiAccountDeliveryChannel) AttrResourceChangeDelivery() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceChangeDelivery",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiAccountDeliveryChannel) AttrResourceSnapshotDelivery() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceSnapshotDelivery",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiAccountDeliveryChannel) Props() *MultiAccountDeliveryChannelProps {
	var returns *MultiAccountDeliveryChannelProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

