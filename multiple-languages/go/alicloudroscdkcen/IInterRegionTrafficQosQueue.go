package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `InterRegionTrafficQosQueue`.
type IInterRegionTrafficQosQueue interface {
	alicloudroscdkcore.IResource
	// Attribute Bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.
	//
	// Unit: Mbit/s.
	AttrBandwidth() interface{}
	// Attribute Dscps: The DSCP value of the traffic packet to be matched in the current queue.
	AttrDscps() interface{}
	// Attribute EffectiveBandwidth: The actual bandwidth value of the current queue.
	AttrEffectiveBandwidth() interface{}
	// Attribute InterRegionTrafficQosQueueDescription: The description of the queue.
	AttrInterRegionTrafficQosQueueDescription() interface{}
	// Attribute InterRegionTrafficQosQueueId: The ID of the queue.
	AttrInterRegionTrafficQosQueueId() interface{}
	// Attribute InterRegionTrafficQosQueueName: The name of the queue.
	AttrInterRegionTrafficQosQueueName() interface{}
	// Attribute RemainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
	AttrRemainBandwidthPercent() interface{}
	// Attribute TrafficQosPolicyId: The ID of the QoS policy.
	AttrTrafficQosPolicyId() interface{}
	Props() *InterRegionTrafficQosQueueProps
}

// The jsii proxy for IInterRegionTrafficQosQueue
type jsiiProxy_IInterRegionTrafficQosQueue struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInterRegionTrafficQosQueue) AttrBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosQueue) AttrDscps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDscps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosQueue) AttrEffectiveBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEffectiveBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosQueue) AttrInterRegionTrafficQosQueueDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInterRegionTrafficQosQueueDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosQueue) AttrInterRegionTrafficQosQueueId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInterRegionTrafficQosQueueId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosQueue) AttrInterRegionTrafficQosQueueName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInterRegionTrafficQosQueueName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosQueue) AttrRemainBandwidthPercent() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemainBandwidthPercent",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosQueue) AttrTrafficQosPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrafficQosPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInterRegionTrafficQosQueue) Props() *InterRegionTrafficQosQueueProps {
	var returns *InterRegionTrafficQosQueueProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

