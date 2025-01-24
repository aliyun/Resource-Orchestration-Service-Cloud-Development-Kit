package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `Qos`.
type IQos interface {
	alicloudroscdkcore.IResource
	// Attribute QosId: The ID of the QoS policy.
	AttrQosId() interface{}
	Props() *QosProps
}

// The jsii proxy for IQos
type jsiiProxy_IQos struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IQos) AttrQosId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQosId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQos) Props() *QosProps {
	var returns *QosProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

