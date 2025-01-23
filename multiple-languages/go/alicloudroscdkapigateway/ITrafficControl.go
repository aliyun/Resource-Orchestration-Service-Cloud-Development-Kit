package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TrafficControl`.
type ITrafficControl interface {
	alicloudroscdkcore.IResource
	// Attribute TrafficControlId: The id of the traffic control.
	AttrTrafficControlId() interface{}
	Props() *TrafficControlProps
}

// The jsii proxy for ITrafficControl
type jsiiProxy_ITrafficControl struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrafficControl) AttrTrafficControlId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrafficControlId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficControl) Props() *TrafficControlProps {
	var returns *TrafficControlProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

