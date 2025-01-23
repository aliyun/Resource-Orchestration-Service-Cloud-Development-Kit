package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `ApplicationMonitor`.
type IApplicationMonitor interface {
	alicloudroscdkcore.IResource
	// Attribute TaskId: The ID of the origin probing task.
	AttrTaskId() interface{}
	Props() *ApplicationMonitorProps
}

// The jsii proxy for IApplicationMonitor
type jsiiProxy_IApplicationMonitor struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplicationMonitor) AttrTaskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplicationMonitor) Props() *ApplicationMonitorProps {
	var returns *ApplicationMonitorProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

