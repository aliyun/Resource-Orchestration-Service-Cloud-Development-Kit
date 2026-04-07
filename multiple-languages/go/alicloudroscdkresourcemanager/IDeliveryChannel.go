package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `DeliveryChannel`.
type IDeliveryChannel interface {
	alicloudroscdkcore.IResource
	// Attribute DeliveryChannelDescription: The description of the delivery channel.
	AttrDeliveryChannelDescription() interface{}
	// Attribute DeliveryChannelFilter: The effective scope of the delivery channel.
	AttrDeliveryChannelFilter() interface{}
	// Attribute DeliveryChannelId: The ID of the delivery channel.
	AttrDeliveryChannelId() interface{}
	// Attribute DeliveryChannelName: The name of the delivery channel.
	AttrDeliveryChannelName() interface{}
	// Attribute ResourceChangeDelivery: The delivery of resource configuration changes.
	AttrResourceChangeDelivery() interface{}
	// Attribute ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.
	AttrResourceSnapshotDelivery() interface{}
	Props() *DeliveryChannelProps
}

// The jsii proxy for IDeliveryChannel
type jsiiProxy_IDeliveryChannel struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDeliveryChannel) AttrDeliveryChannelDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeliveryChannelDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeliveryChannel) AttrDeliveryChannelFilter() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeliveryChannelFilter",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IDeliveryChannel) AttrDeliveryChannelName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeliveryChannelName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeliveryChannel) AttrResourceChangeDelivery() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceChangeDelivery",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeliveryChannel) AttrResourceSnapshotDelivery() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceSnapshotDelivery",
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

