package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `QosPolicy`.
type IQosPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute QosPolicyId: The ID of the traffic classification rule.
	AttrQosPolicyId() interface{}
	Props() *QosPolicyProps
}

// The jsii proxy for IQosPolicy
type jsiiProxy_IQosPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IQosPolicy) AttrQosPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQosPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQosPolicy) Props() *QosPolicyProps {
	var returns *QosPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

