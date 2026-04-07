package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `TrafficQosQueue`.
type ITrafficQosQueue interface {
	alicloudroscdkcore.IResource
	// Attribute BandwidthPercent: QoS queue bandwidth percentage.
	AttrBandwidthPercent() interface{}
	// Attribute QosId: The ID of the QoS policy.
	AttrQosId() interface{}
	// Attribute QueueDescription: The description of the QoS queue.
	AttrQueueDescription() interface{}
	// Attribute QueueId: The ID of the QoS queue.
	AttrQueueId() interface{}
	// Attribute QueueName: The name of the QoS queue.
	AttrQueueName() interface{}
	// Attribute QueueType: QoS queue type.
	AttrQueueType() interface{}
	Props() *TrafficQosQueueProps
}

// The jsii proxy for ITrafficQosQueue
type jsiiProxy_ITrafficQosQueue struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrafficQosQueue) AttrBandwidthPercent() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidthPercent",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosQueue) AttrQosId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQosId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosQueue) AttrQueueDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueueDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosQueue) AttrQueueId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueueId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosQueue) AttrQueueName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueueName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosQueue) AttrQueueType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueueType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosQueue) Props() *TrafficQosQueueProps {
	var returns *TrafficQosQueueProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

