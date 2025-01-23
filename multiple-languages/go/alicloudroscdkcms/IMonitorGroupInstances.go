package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `MonitorGroupInstances`.
type IMonitorGroupInstances interface {
	alicloudroscdkcore.IResource
	// Attribute GroupId: The ID of the application group.
	AttrGroupId() interface{}
	Props() *MonitorGroupInstancesProps
}

// The jsii proxy for IMonitorGroupInstances
type jsiiProxy_IMonitorGroupInstances struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMonitorGroupInstances) AttrGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroupInstances) Props() *MonitorGroupInstancesProps {
	var returns *MonitorGroupInstancesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

