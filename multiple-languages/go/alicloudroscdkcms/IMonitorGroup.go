package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `MonitorGroup`.
type IMonitorGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GroupId: Application group ID generated after the group is created.
	AttrGroupId() interface{}
	Props() *MonitorGroupProps
}

// The jsii proxy for IMonitorGroup
type jsiiProxy_IMonitorGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMonitorGroup) AttrGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroup) Props() *MonitorGroupProps {
	var returns *MonitorGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

