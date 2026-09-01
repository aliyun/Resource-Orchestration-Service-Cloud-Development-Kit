package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TraceResource`.
type ITraceResource interface {
	alicloudroscdkcore.IResource
	// Attribute SlsEndpointDesc: The sls endpoint description of the trace resource.
	AttrSlsEndpointDesc() interface{}
	// Attribute TraceEndpointDesc: The trace endpoint description of the trace resource.
	AttrTraceEndpointDesc() interface{}
	Props() *TraceResourceProps
}

// The jsii proxy for ITraceResource
type jsiiProxy_ITraceResource struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITraceResource) AttrSlsEndpointDesc() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlsEndpointDesc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITraceResource) AttrTraceEndpointDesc() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTraceEndpointDesc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITraceResource) Props() *TraceResourceProps {
	var returns *TraceResourceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

