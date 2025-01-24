package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `XTraceApps`.
type IXTraceApps interface {
	alicloudroscdkcore.IResource
	// Attribute Pids: The list of Pids.
	AttrPids() interface{}
	// Attribute XTraceApps: The list of Application Monitoring tasks.
	AttrXTraceApps() interface{}
	Props() *XTraceAppsProps
}

// The jsii proxy for IXTraceApps
type jsiiProxy_IXTraceApps struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IXTraceApps) AttrPids() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPids",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IXTraceApps) AttrXTraceApps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrXTraceApps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IXTraceApps) Props() *XTraceAppsProps {
	var returns *XTraceAppsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

