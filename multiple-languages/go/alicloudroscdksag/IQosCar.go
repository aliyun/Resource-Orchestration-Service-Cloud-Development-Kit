package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `QosCar`.
type IQosCar interface {
	alicloudroscdkcore.IResource
	// Attribute QosCarId: The ID of the traffic throttling policy.
	AttrQosCarId() interface{}
	Props() *QosCarProps
}

// The jsii proxy for IQosCar
type jsiiProxy_IQosCar struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IQosCar) AttrQosCarId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQosCarId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQosCar) Props() *QosCarProps {
	var returns *QosCarProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

