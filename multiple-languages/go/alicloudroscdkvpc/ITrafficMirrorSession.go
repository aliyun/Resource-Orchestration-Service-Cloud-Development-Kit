package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `TrafficMirrorSession`.
type ITrafficMirrorSession interface {
	alicloudroscdkcore.IResource
	// Attribute TrafficMirrorSessionId: The ID of the traffic mirror session.
	AttrTrafficMirrorSessionId() interface{}
	Props() *TrafficMirrorSessionProps
}

// The jsii proxy for ITrafficMirrorSession
type jsiiProxy_ITrafficMirrorSession struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrafficMirrorSession) AttrTrafficMirrorSessionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrafficMirrorSessionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficMirrorSession) Props() *TrafficMirrorSessionProps {
	var returns *TrafficMirrorSessionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

