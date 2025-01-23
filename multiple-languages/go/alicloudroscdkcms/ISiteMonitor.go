package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `SiteMonitor`.
type ISiteMonitor interface {
	alicloudroscdkcore.IResource
	// Attribute TaskId: The ID of the site monitoring task.
	AttrTaskId() interface{}
	Props() *SiteMonitorProps
}

// The jsii proxy for ISiteMonitor
type jsiiProxy_ISiteMonitor struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISiteMonitor) AttrTaskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteMonitor) Props() *SiteMonitorProps {
	var returns *SiteMonitorProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

