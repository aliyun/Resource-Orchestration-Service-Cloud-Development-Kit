package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `TrafficQos`.
type ITrafficQos interface {
	alicloudroscdkcore.IResource
	// Attribute Progressing: The configuration progress of the QoS policy.
	//
	// The value range is **0** to **100 * *.
	AttrProgressing() interface{}
	// Attribute QosDescription: The description of the QoS policy.
	AttrQosDescription() interface{}
	// Attribute QosId: The QoS policy ID.
	AttrQosId() interface{}
	// Attribute QosName: The name of the QoS policy.
	AttrQosName() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Tags: The tag of the QoS policy.
	AttrTags() interface{}
	Props() *TrafficQosProps
}

// The jsii proxy for ITrafficQos
type jsiiProxy_ITrafficQos struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrafficQos) AttrProgressing() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProgressing",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQos) AttrQosDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQosDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQos) AttrQosId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQosId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQos) AttrQosName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQosName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQos) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQos) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQos) Props() *TrafficQosProps {
	var returns *TrafficQosProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

