package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `TrafficMirrorSessionSourcesAddition`.
type ITrafficMirrorSessionSourcesAddition interface {
	alicloudroscdkcore.IResource
	Props() *TrafficMirrorSessionSourcesAdditionProps
}

// The jsii proxy for ITrafficMirrorSessionSourcesAddition
type jsiiProxy_ITrafficMirrorSessionSourcesAddition struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrafficMirrorSessionSourcesAddition) Props() *TrafficMirrorSessionSourcesAdditionProps {
	var returns *TrafficMirrorSessionSourcesAdditionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

